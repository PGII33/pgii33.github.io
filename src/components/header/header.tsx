import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <nav>
        <ul
          style="list-style: none;
      display: flex;
      gap: 9em;
      padding: 0.5em;
      margin: 0;
      font-size: 3em;"
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
});
