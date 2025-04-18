import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import { component$ } from "@builder.io/qwik";
import GithubMarkImage from "~/data/images/about/github-mark.png?jsx";
import LinkedInLogoImage from "~/data/images/about/linkedin.png?jsx";
import EmailImage from "~/data/images/about/email.png?jsx";

export default component$(() => {
  return (
    <>
      <Header />
      <div style={{ fontSize: "1.5em", margin: "1em" }}>
        <strong>Passions</strong>
        <ul></ul>
        <strong>Contacts</strong>
        <ul>
          <li style={{ display: "flex", alignItems: "center" }}>
            <GithubMarkImage
              alt="Github Mark"
              style={{ width: "1em", height: "1em", borderRadius: "10%" }}
            />
            <a href="https://github.com/pgii33" target="_blank">
              PGII33
            </a>
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <EmailImage
              alt="Email"
              style={{ width: "1em", height: "1em", borderRadius: "10%" }}
            />
            <a href="mailto:micky.sg.mari@gmail.com" target="_blank">
              micky.sg.mari@gmail.com
            </a>
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <LinkedInLogoImage
              alt="LinkedIn Logo"
              style={{ width: "1em", height: "1em", borderRadius: "10%" }}
            />
            <a href="https://www.linkedin.com/in/micky-mari/" target="_blank">
              https://www.linkedin.com/in/micky-mari/
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
});
