import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import { component$, useResource$, Resource } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

import { projets } from "~/data/projet";

export default component$(() => {
  const location = useLocation();
  const projetSlug = location.params.slug;

  const projetResource = useResource$(() => {
    return projets.find((p) => p.slug === projetSlug);
  });

  return (
    <>
      <Header />
      <Resource
        value={projetResource}
        onResolved={(projet) =>
          projet ? (
            <div class="mx-auto max-w-6xl p-8">
              <h1 class="mb-8 text-4xl font-bold">{projet.titre}</h1>

              <div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Colonne gauche */}
                <div class="space-y-4">
                  {projet.cover && (
                    <img
                      src={projet.cover}
                      alt={projet.titre}
                      width="800"
                      height="450"
                      class="w-full rounded-lg"
                    />
                  )}
                  {projet.link && (
                    <p>
                      <strong>Lien :</strong>{" "}
                      <a
                        href={projet.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-blue-500 hover:underline"
                      >
                        {projet.link}
                      </a>
                    </p>
                  )}
                  <p>
                    <strong>Date Début :</strong> {projet.dateDebut}
                  </p>
                  <p>
                    <strong>Date Fin :</strong> {projet.dateFin}
                  </p>
                </div>

                {/* Colonne droite */}
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

              {/* Galerie */}
              {projet.galerie.length > 0 && (
                <>
                  <h2 class="mb-4 text-xl font-semibold">Galerie</h2>
                  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {projet.galerie.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Image ${index + 1}`}
                        width="400"
                        height="300"
                        class="w-full rounded-lg object-cover"
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div class="text-center text-red-500">Projet non trouvé.</div>
          )
        }
      />
      <Footer />
    </>
  );
});
