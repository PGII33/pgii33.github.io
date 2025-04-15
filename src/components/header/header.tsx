import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "1.5em",
          width: "100%",
          padding: "1rem",
          backgroundColor: "#D6CBAF",
        }}
      >
        <div
          style={{
            width: "20%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a href="/">Micky MARI</a>
        </div>

        <div
          style={{
            width: "30%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <a href="/projet">Projets</a>
          <a href="/about">À Propos</a>
        </div>
      </nav>
    </>
  );
});
