import { component$, useStyles$ } from "@builder.io/qwik";

export default component$(() => {
  useStyles$(`
    .header-nav {
      display: flex;
      justify-content: space-between;
      font-size: 1.5em;
      width: 100%;
      padding: 1rem;
      background-color: #D6CBAF;
      flex-wrap: wrap;
    }

    .header-logo {
      width: 20%;
      display: flex;
      justify-content: center;
      min-width: 150px;
    }

    .header-links {
      width: 30%;
      display: flex;
      justify-content: space-around;
      min-width: 300px;
    }

    .header-links a:hover,
    .header-logo a:hover
    {
      transform: scale(1.1);
      transition: transform 0.2s ease-in-out;
    }

    @media (max-width: 768px) {
      .header-nav {
        flex-direction: column;
        align-items: center;
      }

      .header-logo,
      .header-links {
        width: 100%;
        justify-content: center;
        margin-bottom: 10px;
      }

      .header-links {
        flex-direction: column;
        align-items: center;
      }

      .header-links a {
        margin: 5px 0;
      }
    }
  `);

  return (
    <nav class="header-nav">
      <div class="header-logo">
        <a href="/">Micky MARI</a>
      </div>

      <div class="header-links">
        <a href="/projet">Projets</a>
        <a href="/about">À Propos</a>
      </div>
    </nav>
  );
});
