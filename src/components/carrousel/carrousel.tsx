import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { projets } from "~/data/projet";
import "./carrousel.css";

function parseDate(dateString: string): Date {
  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(year, month - 1, day); // month - 1 car les mois sont indexés à partir de 0
}

export const Carrousel = component$(() => {
  const sortedProjets = projets
    .map((projet) => ({
      ...projet,
      dateFin: parseDate(projet.dateFin),
    }))
    .sort((a, b) => b.dateFin.getTime() - a.dateFin.getTime());

  const recentProjets = sortedProjets.slice(0, 3);
  const selectedProjet = useSignal(recentProjets[0]);
  const isAnimating = useSignal(false);
  const pendingProjet = useSignal<typeof selectedProjet.value | null>(null);

  const hasLoaded = useSignal(false);

  useTask$(({ track, cleanup }) => {
    track(() => selectedProjet.value);

    if (!hasLoaded.value) {
      hasLoaded.value = true;
      return; // pas d'animation au premier rendu
    }

    isAnimating.value = true;
    const timer = setTimeout(() => {
      isAnimating.value = false;
    }, 200);

    cleanup(() => clearTimeout(timer));
  });

  useTask$(({ track, cleanup }) => {
    track(() => isAnimating.value);

    if (!isAnimating.value || !pendingProjet.value) return;

    const timer = setTimeout(() => {
      selectedProjet.value = pendingProjet.value!;
      pendingProjet.value = null;
      isAnimating.value = false;
    }, 200); // durée du fade out en ms

    cleanup(() => clearTimeout(timer));
  });

  return (
    <div class="mx-auto max-w-6xl p-6">
      <div class="carrousel-layout flex flex-row gap-4 rounded-xl bg-white p-4 hover:shadow-lg">
        {/* Partie gauche : grande image */}
        <div class="carrousel-left order-1 w-[50%]">
          {(() => {
            const Cover = selectedProjet.value.galerie[0];
            if (typeof Cover !== "function") {
              return null;
            }
            return (
              <Link
                href={`/projet/${selectedProjet.value.slug}`}
                key={selectedProjet.value.slug}
              >
                <div
                  class={`fade-transition aspect-[16/9] h-auto w-full cursor-pointer rounded-lg ${
                    isAnimating.value ? "fade-hidden" : "fade-visible"
                  }`}
                >
                  <Cover
                    alt={selectedProjet.value.titre}
                    class="aspect-[16/9] h-auto w-full cursor-pointer rounded-lg"
                  />
                </div>
              </Link>
            );
          })()}
        </div>

        {/* Partie milieu : miniatures */}
        <div class="carrousel-middle order-2 flex w-[15%] flex-col gap-[5%]">
          {recentProjets.map((projet) => {
            const Cover = projet.galerie[0];
            if (typeof Cover !== "function") {
              return null;
            }
            return (
              <div
                key={projet.slug}
                class="aspect-[16/9] h-auto w-full cursor-pointer rounded-lg"
                onClick$={() => {
                  isAnimating.value = true;
                  pendingProjet.value = projet;
                }}
              >
                <Cover
                  alt={projet.titre}
                  class="aspect-[16/9] h-auto w-full cursor-pointer rounded-lg transition hover:opacity-80"
                />
              </div>
            );
          })}
        </div>

        {/* Partie droite : titre + description */}
        <div
          class={`carrousel-text text-transition order-3 flex w-[35%] flex-col justify-start ${
            isAnimating.value ? "text-hidden" : "text-visible"
          }`}
        >
          <h2 class="text-5xl">{selectedProjet.value.titre}</h2>
          <p class="mt-2 max-h-[6rem] overflow-hidden text-ellipsis whitespace-pre-line">
            {selectedProjet.value.description}
          </p>
        </div>
      </div>
    </div>
  );
});
