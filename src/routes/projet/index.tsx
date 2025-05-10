import { projets } from "~/data/projet";
import { Link } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div class="mx-auto max-w-6xl p-6">
        <h1 class="mb-6 text-3xl font-bold">Mes Projets</h1>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projets.map((projet) => (
            <Link href={`/projet/${projet.slug}`} key={projet.slug}>
              <div class="rounded-xl bg-[var(--c-bg-sub-color)] p-4 shadow transition hover:shadow-lg">
                {projet.galerie.length > 0 ? (
                  <>
                    {(() => {
                      const Cover = projet.galerie[0]; // Récupère le composant
                      return (
                        <Cover
                          alt={projet.titre}
                          class="aspect-[16/9] h-auto w-full cursor-pointer rounded-lg"
                        />
                      );
                    })()}
                  </>
                ) : (
                  <div class="w-full rounded-lg bg-gray-200 py-24 text-center">
                    <p class="text-gray-500">
                      Aucune image de couverture disponible
                    </p>
                  </div>
                )}
                <p>{projet.titre}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
});
