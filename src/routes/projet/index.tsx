import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import { projets } from "~/data/projet";
import { Link } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <Header />
      <div class="mx-auto max-w-6xl p-6">
        <h1 class="mb-6 text-3xl font-bold">Mes Projets</h1>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projets.map((projet) => (
            <Link href={`/projet/${projet.slug}`} key={projet.slug}>
              <div class="rounded-xl bg-white p-4 shadow transition hover:shadow-lg">
                {projet.cover ? (
                  <img
                    src={projet.cover}
                    alt={projet.titre}
                    width="400"
                    height="300"
                    class="mb-4 h-40 w-full rounded-lg object-cover"
                  />
                ) : (
                  <div class="w-full rounded-lg bg-gray-200 py-24 text-center">
                    <p class="text-gray-500">
                      Aucune image de couverture disponible
                    </p>
                  </div>
                )}
                <h2 class="text-xl font-semibold">{projet.titre}</h2>
                <p class="text-sm text-gray-500">
                  {projet.dateDebut} → {projet.dateFin}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
});
