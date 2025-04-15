import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import {
  component$,
  useResource$,
  Resource,
  useStore,
  $,
} from "@builder.io/qwik";
import { useLocation, type StaticGenerateHandler } from "@builder.io/qwik-city";
import { projets } from "~/data/projet";

// Déclaration asynchrone de la fonction onStaticGenerate
export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: projets.map((projet) => {
      return { slug: projet.slug }; // Assuming 'slug' is a string property of 'Projet'
    }),
  };
};

export default component$(() => {
  const location = useLocation();
  const projetSlug = location.params.slug;

  const projetResource = useResource$(() => {
    return projets.find((p) => p.slug === projetSlug);
  });

  const modalState = useStore({
    isOpen: false,
    imageSrc: "",
  });

  const openModal = $((imageSrc: string) => {
    modalState.imageSrc = imageSrc;
    modalState.isOpen = true;
  });

  const closeModal = $(() => {
    modalState.isOpen = false;
    modalState.imageSrc = "";
  });

  const handleClickOutside = $((event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.closest(".modal-content") === null) {
      closeModal();
    }
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
                      class="w-full cursor-pointer rounded-lg"
                      onClick$={() => openModal(projet.cover)}
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
                    <strong>Commencé le :</strong> {projet.dateDebut}
                  </p>
                  <p>
                    <strong>Terminé le :</strong> {projet.dateFin}
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
                        class="w-full cursor-pointer rounded-lg"
                        onClick$={() => openModal(img)}
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
      {modalState.isOpen && (
        <div
          class="fixed inset-0 z-50 flex items-center justify-center"
          onClick$={handleClickOutside}
        >
          <div class="modal-content w-full max-w-7xl p-4">
            <img
              src={modalState.imageSrc}
              alt="Agrandie"
              class="h-auto max-h-[95vh] w-full max-w-full rounded-lg" // Définir des dimensions encore plus grandes ici
              style="object-contain; width: 90vw; height: auto;" // Assurez-vous que l'image conserve ses proportions et occupe 90% de la largeur de la fenêtre
              width="800"
              height="450"
            />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
});
