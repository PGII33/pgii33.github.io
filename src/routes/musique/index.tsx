import { component$ } from "@builder.io/qwik";
import { musiques } from "~/data/musiques/musiques";

export default component$(() => {
  return (
    <>
      <div class="flex flex-wrap justify-center gap-6">
        {musiques.map((musique) => (
          <div
            key={"music" + musique.slug}
            class="m-4 w-80 rounded-xl bg-[var(--c-bg-sub-color)] p-6 text-center hover:shadow-lg"
          >
            <h1 class="py-3 text-4xl">{musique.titre}</h1>
            <p class="py-3 text-2xl">par {musique.author}</p>
            <audio controls class="w-full py-3">
              <source src={musique.audio} type="audio/wav" />
            </audio>
            <a
              href={musique.sheet}
              download
              class="mt-5 inline-block rounded-xl bg-[var(--c-bg-sub2-color)] px-6 py-3 text-lg font-semibold"
            >
              Télécharger la partition
            </a>
            <p class="mt-3 text-sm">
              Partage autorisé avec mention de l'auteur
            </p>
          </div>
        ))}
      </div>
    </>
  );
});
