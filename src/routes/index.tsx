import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Carrousel } from "~/components/carrousel/carrousel";
export default component$(() => {
  return (
    <>
      <h1 class="p-10 text-center" style="font-size: 4rem;">
        Projets Récents
      </h1>
      <Carrousel />
    </>
  );
});

export const head: DocumentHead = {
  title: "Micky MARI",
  meta: [
    {
      name: "description",
      content: "Portfolio",
    },
  ],
};
