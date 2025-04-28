import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Carrousel } from "~/components/carrousel/carrousel";
export default component$(() => {
  return (
    <>
      <h1 class="text-center text-5xl"> Projets Récents</h1>
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
