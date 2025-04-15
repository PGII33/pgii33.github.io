export interface Projet {
  slug: string;
  titre: string;
  cover: string; // Chemin vers l'image
  description: string;
  dateDebut: string;
  dateFin: string;
  galerie: string[];
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
    cover: "/images/projets/dive-quest/cover.png",
    description: "Dive Quest description",
    dateDebut: "05/12/2024",
    dateFin: "06/12/2024",
    galerie: [
      "/images/projets/dive-quest/cover.png",
      "/images/projets/dive-quest/galerie1.png",
      "/images/projets/dive-quest/galerie2.png",
    ],
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
    cover: "/images/projets/webtoon-resume/cover.png",
    description:
      "Webtoon Resume est un site internet dont le contenu vient de mes amis et de moi.\
    Ce site permet de découvrir de nouveaux webtoon et me permet aussi d'évoluer petit à petit dans le web.",
    dateDebut: "30/12/2023",
    dateFin: "12/04/2024",
    galerie: [
      "/images/projets/webtoon-resume/cover.png",
      "/images/projets/webtoon-resume/galerie1.png",
    ],
    members: ["PGII33"],
    link: "https://pgii33.github.io/WebtoonResume/",
  },
  {
    slug: "circus-claw-machine",
    titre: "Circus Claw Machine",
    cover: "",
    description:
      "Dans le cadre de la 'Global Game Jam 2024'. \
    The Circus Claw Machine, est un jeu de plateforme qui comprend un réglage dans le menu Jeux. \
    Pour lancer le jeu, il faut aussi réussir à prendre les bons éléments de la fameuse machine à pince.",
    dateDebut: "26/01/2024",
    dateFin: "28/01/2024",
    galerie: [],
    members: ["bluyou", "untypequicode", "PGII33", "mr-white-r"],
    link: "",
  },
  {
    slug: "bublo",
    titre: "Bublo",
    cover: "",
    description:
      "Bublo est un plateformer dans lequel vous devez, à l'aide de ventilateur, guider une bulle vers la sortie d'un labyrinthe.\n\
    Utilisez la touche espace pour changer et placer des ventilateurs, ou suivre passivement la bulle.\n\
    Lorsque vous ne suivez pas la bulle, vous vous déplacez à l'aide des touches zqsd,\
     orientez votre ventilateur avec les touches a et e ou la molette de la sourie, et le placez avec le clic droit souris.",
    dateDebut: "24/01/2025",
    dateFin: "26/01/2025",
    galerie: [],
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
