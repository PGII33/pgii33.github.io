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
import circusClawMachineGalerie6 from "~/data/images/projets/circus-claw-machine/galerie6.webp?jsx";
import greenGrowthCover from "~/data/images/projets/green-growth/cover.webp?jsx";
import greenGrowthGalerie1 from "~/data/images/projets/green-growth/galerie1.png?jsx";
import greenGrowthGalerie2 from "~/data/images/projets/green-growth/galerie2.png?jsx";
import bubloCover from "~/data/images/projets/bublo/cover.png?jsx";
import bubloGalerie1 from "~/data/images/projets/bublo/galerie1.png?jsx";
import bubloGalerie2 from "~/data/images/projets/bublo/galerie2.png?jsx";
import hexMasterCover from "~/data/images/projets/hexmaster/cover.png?jsx";
import hexMasterGalerie1 from "~/data/images/projets/hexmaster/galerie1.png?jsx";
import hexMasterGalerie2 from "~/data/images/projets/hexmaster/galerie2.png?jsx";
import hexMasterGalerie3 from "~/data/images/projets/hexmaster/galerie3.png?jsx";
import hexMasterGalerie4 from "~/data/images/projets/hexmaster/galerie4.png?jsx";
import hexMasterGalerie5 from "~/data/images/projets/hexmaster/galerie5.png?jsx";

type ImageComponent = any; // Tu peux le raffiner si tu veux

export interface Projet {
  slug: string;
  titre: string;
  description: string;
  dateDebut: string;
  dateFin: string;
  galerie: ImageComponent[];
  members: string[];
  link: string;
}

export const projets: Projet[] = [
  {
    slug: "green-growth",
    titre: "Green Growth",
    description:
      "Green Growth est un site web réalisé durant la nuit de l'info 2023 en 16H32 par notre équipe de cinq membres\
      dont l'objectif était de répondre à la problématique suivante : \
      'Faire face au changement climatique : le vrai du faux'.\
      Le site comporte une partie QCM pour mesurer vos connaissances, \
      et une partie s'informer, pour acquérir de nouvelles connaissances.",
    dateDebut: "07/12/2023",
    dateFin: "08/12/2023",
    galerie: [
      $(greenGrowthCover),
      $(greenGrowthGalerie1),
      $(greenGrowthGalerie2),
    ],
    members: [
      "untypequicode",
      "Ciremy0",
      "PGII33",
      "Noruaric",
      "Vincentcestmoi",
    ],
    link: "https://green-growth.untypequicode.fr/",
  },
  {
    slug: "dive-quest",
    titre: "Dive Quest",
    description:
      "Dive Quest est un projet issue de la nuit de l'info 2024 dont le sujet était : 'Et si l’océan était un corps humain ?'.\n\
      Dans Dive Quest, on contrôle un plongeur, dont à partir d'une certaine profondeur les organes sont assombris.\n\
      En cliquant sur les organes, un texte apparait afin de faire une comparaison entre les organes humains et les mécanismes de l'océan.",
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
    description:
      "Webtoon Resume permet de découvrir de nouveaux Webtoons dont des avis ont étés rédigés\
     par mes amis et moi.\
    Ce site a été crée dans une perspective d'évolution sur le développement de site web.\
    Les contributeurs sont Pandi, Darkendo et moi.",
    dateDebut: "30/12/2023",
    dateFin: "12/04/2024",
    galerie: [
      $(webtoonResumeCover),
      $(webtoonResumeGalerie1),
      $(webtoonResumeGalerie2),
      $(webtoonResumeGalerie3),
    ],
    members: ["PGII33"],
    link: "https://pgii33.github.io/WebtoonResume",
  },
  {
    slug: "circus-claw-machine",
    titre: "Circus Claw Machine",
    description:
      "Dans le cadre de la 'Global Game Jam 2024'. \
    The Circus Claw Machine, est un jeu de plateforme qui comprend un réglage dans le menu Jeux. \
    Pour lancer le jeu, il faut aussi réussir à prendre les bons éléments de la machine à pince.\
    Attention, choisir certaines orbes pourraient rendre votre aventure plus compliquée.",
    dateDebut: "26/01/2024",
    dateFin: "28/01/2024",
    galerie: [
      $(circusClawMachineCover),
      $(circusClawMachineGalerie6),
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
  {
    slug: "hexmaster",
    titre: "HexMaster",
    description:
      "HexMaster est un jeu des stratégie en tour par tour dans lequel on essaie de battre \
      d'autres factions. Le but est de maîtriser chaque faction. \
      Pour cela, vous devrez vaincre la campagne.",
    dateDebut: "29/08/2025",
    dateFin: "En cours (v1.0)",
    galerie: [
      $(hexMasterCover),
      $(hexMasterGalerie1),
      $(hexMasterGalerie2),
      $(hexMasterGalerie3),
      $(hexMasterGalerie4),
      $(hexMasterGalerie5),
    ],
    members: [
      "PGII33 (dev)",
      "JOUSON-Mathis (contributeur)",
      "Vincentcestmoi (contributeurs)",
      "Anaëlle (FAN)",
    ],
    link: "https://github.com/PGII33/HexMaster/releases",
  },
];
