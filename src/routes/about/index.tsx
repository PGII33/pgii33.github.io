import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import { component$ } from "@builder.io/qwik";
import DevImage from "~/data/images/about/code.png?jsx";
import MusicImage from "~/data/images/about/lecteur-de-musique.png?jsx";
import GameImage from "~/data/images/about/jeux.png?jsx";
import GithubMarkImage from "~/data/images/about/github-mark.png?jsx";
import LinkedInLogoImage from "~/data/images/about/linkedin.png?jsx";
import EmailImage from "~/data/images/about/email.png?jsx";
import "./about.css"; // Importez le fichier CSS

export default component$(() => {
  return (
    <>
      <Header />
      <div class="about-container">
        <strong>Qui suis-je</strong>
        <p>
          Salut, je suis Micky MARI actuellement en CMI OPTIM à l'université de
          Bordeaux. J'aime apprendre de nouvelles choses et développer des
          projets seul et avec mes amis.
        </p>
        <strong>Passions</strong>
        <ul>
          <li>
            <DevImage alt="Développement" />
            Le développement
          </li>
          <li>
            <MusicImage alt="Musique" />
            La musique
          </li>
          <li>
            <GameImage alt="Jeux vidéos" />
            Les jeux vidéos
          </li>
        </ul>
        <strong>Contacts</strong>
        <ul>
          <li>
            <GithubMarkImage alt="Github Mark" />
            <a href="https://github.com/pgii33" target="_blank">
              PGII33
            </a>
          </li>
          <li>
            <EmailImage alt="Email" />
            <a href="mailto:micky.sg.mari@gmail.com" target="_blank">
              micky.sg.mari@gmail.com
            </a>
          </li>
          <li>
            <LinkedInLogoImage alt="LinkedIn Logo" />
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
