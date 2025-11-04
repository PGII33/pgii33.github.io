import geneseSheet from "~/data/musiques/sheets/PGII - Genèse.pdf";
import geneseAudio from "~/data/musiques/audio/PGII - Genèse.wav";
import bubloSheet from "~/data/musiques/sheets/PGII - Bublo.pdf";
import bubloAudio from "~/data/musiques/audio/PGII - Bublo.wav";
import declinSheet from "~/data/musiques/sheets/PGII - Déclin.pdf";
import declinAudio from "~/data/musiques/audio/PGII - Déclin.wav";
import insomnieAccompagnementSheet from "~/data/musiques/sheets/PGII - Insomnie (accompagnement).pdf";
import insomnieAccompagnementAudio from "~/data/musiques/audio/PGII - Insomnie (accompagnement).wav";

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
    titre: "Genèse",
    author: "PGII",
    sheet: geneseSheet,
    audio: geneseAudio,
  },
  {
    slug: "bublo",
    titre: "Bublo",
    author: "PGII",
    sheet: bubloSheet,
    audio: bubloAudio,
  },
  {
    slug: "declin",
    titre: "Déclin",
    author: "PGII",
    sheet: declinSheet,
    audio: declinAudio,
  },
  {
    slug: "insomnie-accompagnement",
    titre: "Insomnie (acc.)",
    author: "PGII",
    sheet: insomnieAccompagnementSheet,
    audio: insomnieAccompagnementAudio,
  }
];
