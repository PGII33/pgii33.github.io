import { component$, useResource$, Resource } from "@builder.io/qwik";
import { useLocation, type StaticGenerateHandler } from "@builder.io/qwik-city";
import { projets } from "~/data/projet";
import { GalerieZoom } from "~/components/galerie/ImageZoom";

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: projets.map((projet) => {
      return { slug: projet.slug };
    }),
  };
};

export default component$(() => {
  const location = useLocation();
  const projetSlug = location.params.slug;

  const projetResource = useResource$(() => {
    return projets.find((p) => p.slug === projetSlug);
  });

  return (
    <>
      <Resource
        value={projetResource}
        onResolved={(projet) =>
          projet ? (
            <div class="mx-auto max-w-7xl p-8">
              <h1 class="mb-8 text-4xl font-bold">{projet.titre}</h1>
              <div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div class="space-y-4">
                  {projet.galerie.length > 0 ? (
                    <>
                      {(() => {
                        const Cover = projet.galerie[0]; // Récupère le composant
                        return (
                          <Cover
                            alt={projet.titre}
                            class="aspect-[16/9] h-auto w-full cursor-pointer rounded-lg object-cover"
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

                  {projet.link && (
                    <p>
                      <strong>Lien :</strong>{" "}
                      <a
                        href={projet.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hover:underline"
                      >
                        {projet.link}
                      </a>
                    </p>
                  )}
                  <p>
                    <strong>Commencé le :</strong> {projet.dateDebut}
                  </p>
                  <p>
                    <strong>Terminé le :</strong> {projet.dateFin}
                  </p>
                </div>

                <div>
                  <h2 class="mb-2 text-xl font-semibold">Description</h2>
                  <p class="mb-6">{projet.description}</p>

                  {projet.members.length > 0 && (
                    <>
                      <h2 class="mb-2 text-xl font-semibold">Membres</h2>
                      <ul class="list-inside list-disc space-y-1">
                        {projet.members.map((membre) => (
                          <li key={membre}>{membre}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
              <h2 class="mb-4 text-xl font-semibold">Galerie</h2>
              {projet.galerie.length > 0 ? (
                <GalerieZoom images={projet.galerie} />
              ) : (
                <div class="w-full rounded-lg bg-gray-200 py-24 text-center">
                  <p class="text-gray-500">Aucune image dans la galerie</p>
                </div>
              )}
            </div>
          ) : (
            <div class="text-center text-red-500">Projet non trouvé.</div>
          )
        }
      />
    </>
  );
});
