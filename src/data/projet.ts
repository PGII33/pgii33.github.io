import { $ } from "@builder.io/qwik";
import diveQuestCover from "~/data/images/projets/dive-quest/cover.png?jsx";
import diveQuestGalerie1 from "~/data/images/projets/dive-quest/galerie1.png?jsx";
import diveQuestGalerie2 from "~/data/images/projets/dive-quest/galerie2.png?jsx";
import webtoonResumeCover from "~/data/images/projets/webtoon-resume/cover.png?jsx";
import webtoonResumeGalerie1 from "~/data/images/projets/webtoon-resume/galerie1.png?jsx";
import webtoonResumeGalerie2 from "~/data/images/projets/webtoon-resume/galerie2.png?jsx";
import webtoonResumeGalerie3 from "~/data/images/projets/webtoon-resume/galerie3.png?jsx";
import circusClawMachineCover from "~/data/images/projets/circus-claw-machine/cover.png?jsx";
import circusClawMachineGalerie1 from "~/data/images/projets/circus-claw-machine/galerie1.png?jsx";
import circusClawMachineGalerie2 from "~/data/images/projets/circus-claw-machine/galerie2.png?jsx";
import circusClawMachineGalerie3 from "~/data/images/projets/circus-claw-machine/galerie3.png?jsx";
import circusClawMachineGalerie4 from "~/data/images/projets/circus-claw-machine/galerie4.png?jsx";
import circusClawMachineGalerie5 from "~/data/images/projets/circus-claw-machine/galerie5.png?jsx";
import bubloCover from "~/data/images/projets/bublo/cover.png?jsx";
import bubloGalerie1 from "~/data/images/projets/bublo/galerie1.png?jsx";
import bubloGalerie2 from "~/data/images/projets/bublo/galerie2.png?jsx";

type ImageComponent = any; // Tu peux le raffiner si tu veux

export interface Projet {
  slug: string;
  titre: string;
  cover?: ImageComponent;
  description: string;
  dateDebut: string;
  dateFin: string;
  galerie?: ImageComponent[];
  members: string[];
  link: string;
}

export const projets: Projet[] = [
  {
    slug: "green-growth",
    titre: "Green Growth",
    cover: "",
    description:
      "Green Growth est un site web réalisé durant la nuit de l'info en 16H32 par notre équipe de cinq membres",
    dateDebut: "07/12/2023",
    dateFin: "08/12/2023",
    galerie: [],
    members: [
      "untypequicode",
      "Ciremy0",
      "PGII33",
      "Noruaric",
      "Vincentcestmoi",
    ],
    link: "https://les-codeurs-lunaires.github.io/green-growth/",
  },
  {
    slug: "dive-quest",
    titre: "Dive Quest",
    cover: $(diveQuestCover),
    description: "Dive Quest description",
    dateDebut: "05/12/2024",
    dateFin: "06/12/2024",
    galerie: [$(diveQuestCover), $(diveQuestGalerie1), $(diveQuestGalerie2)],
    members: [
      "untypequicode",
      "pierrelahaye",
      "glagolem",
      "PGII33",
      "Vincentcestmoi",
    ],
    link: "https://divequest.untypequicode.fr/",
  },
  {
    slug: "webtoon-resume",
    titre: "Webtoon Resume",
    cover: $(webtoonResumeCover),
    description:
      "Webtoon Resume est un site internet dont le contenu vient de mes amis et de moi.\
    Ce site permet de découvrir de nouveaux webtoon et me permet aussi d'évoluer petit à petit dans le web.",
    dateDebut: "30/12/2023",
    dateFin: "12/04/2024",
    galerie: [
      $(webtoonResumeCover),
      $(webtoonResumeGalerie1),
      $(webtoonResumeGalerie2),
      $(webtoonResumeGalerie3),
    ],
    members: ["PGII33"],
    link: "https://pgii33.github.io/WebtoonResume/",
  },
  {
    slug: "circus-claw-machine",
    titre: "Circus Claw Machine",
    cover: $(circusClawMachineCover),
    description:
      "Dans le cadre de la 'Global Game Jam 2024'. \
    The Circus Claw Machine, est un jeu de plateforme qui comprend un réglage dans le menu Jeux. \
    Pour lancer le jeu, il faut aussi réussir à prendre les bons éléments de la fameuse machine à pince.",
    dateDebut: "26/01/2024",
    dateFin: "28/01/2024",
    galerie: [
      $(circusClawMachineCover),
      $(circusClawMachineGalerie1),
      $(circusClawMachineGalerie2),
      $(circusClawMachineGalerie3),
      $(circusClawMachineGalerie4),
      $(circusClawMachineGalerie5),
    ],
    members: ["bluyou", "untypequicode", "PGII33", "mr-white-r"],
    link: "",
  },
  {
    slug: "bublo",
    titre: "Bublo",
    cover: $(bubloCover),
    description:
      "Bublo est un plateformer dans lequel vous devez, à l'aide de ventilateur, guider une bulle vers la sortie d'un labyrinthe.\n\
    Utilisez la touche espace pour changer et placer des ventilateurs, ou suivre passivement la bulle.\n\
    Lorsque vous ne suivez pas la bulle, vous vous déplacez à l'aide des touches zqsd,\
     orientez votre ventilateur avec les touches a et e ou la molette de la sourie, et le placez avec le clic droit souris.",
    dateDebut: "24/01/2025",
    dateFin: "26/01/2025",
    galerie: [$(bubloCover), $(bubloGalerie1), $(bubloGalerie2)],
    members: [
      "untypequicode",
      "bluyou",
      "Vincentcestmoi",
      "PGII33",
      "mr-white-r",
      "zaofromage",
      "lulu-froid",
      "glagolem",
    ],
    link: "",
  },
];
