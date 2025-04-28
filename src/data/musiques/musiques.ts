import geneseSheet from "~/data/musiques/sheets/PGII - Génèse.pdf";
import geneseAudio from "~/data/musiques/audio/PGII - Génèse.mp3";

export interface Musique {
  slug: string;
  titre: string;
  author: string;
  sheet: string;
  audio: string;
}

export const musiques: Musique[] = [
  {
    slug: "genese",
    titre: "Génèse",
    author: "PGII",
    sheet: geneseSheet,
    audio: geneseAudio,
  },
];
