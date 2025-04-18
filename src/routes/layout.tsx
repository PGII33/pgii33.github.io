import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Header from "~/components/header/header";
import Footer from "~/components/footer/footer";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div style="display: flex; flex-direction: column; min-height: 100vh;">
      <Header />
      <main style="flex: 1">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
