import { component$ } from "@builder.io/qwik";
import "./header.css";

export default component$(() => {
  return (
    <nav class="header-nav">
      <div class="header-logo">
        <a href="/">Micky MARI</a>
      </div>

      <div class="header-links">
        <a href="/projet">Projets</a>
        <a href="/musique">Musiques</a>
        <a href="/about">À Propos</a>
      </div>
    </nav>
  );
});
