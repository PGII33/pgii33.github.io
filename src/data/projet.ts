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
    cover: "", // image vide, donc rien ne s'affiche
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
    cover: "/images/projets/dive-quest/cover.png", // image vide, donc rien ne s'affiche
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
];
