import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <Header />
      <h1>About</h1>
      <Footer />
    </>
  );
});
