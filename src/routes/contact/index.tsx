import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import { component$ } from "@builder.io/qwik";
export default component$(() => {
  return (
    <>
      <Header />
      <h1>Ici seront ajoutés mes contacts</h1>
      <ul>
        <li>
          <a href="/"> eMail </a>
        </li>
        <li>
          <a href="/"> LinkedIn </a>
        </li>
        <li>
          <a href="/"> Instagram </a>
        </li>
      </ul>
      <Footer />
    </>
  );
});
