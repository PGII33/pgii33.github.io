import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Homepage</h1>
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
