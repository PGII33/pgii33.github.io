import { component$, useSignal, useOnDocument, $ } from "@builder.io/qwik";

interface GalerieZoomProps {
  images: any[];
  descriptions?: string[];
}

export const GalerieZoom = component$(({ images, descriptions }: GalerieZoomProps) => {
  const zoomedIndex = useSignal<number | null>(null);

  const closeZoom = $(() => {
    zoomedIndex.value = null;
  });

  const nextImage = $(() => {
    if (zoomedIndex.value !== null) {
      zoomedIndex.value = (zoomedIndex.value + 1) % images.length;
    }
  });

  const prevImage = $(() => {
    if (zoomedIndex.value !== null) {
      zoomedIndex.value = (zoomedIndex.value - 1 + images.length) % images.length;
    }
  });

  useOnDocument(
    "click",
    $((e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".zoomed-img") && !target.closest(".thumbnail-img") && !target.closest(".nav-arrow")) {
        closeZoom();
      }
    }),
  );

  return (
    <>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((ImageComponent, index) => (
          <div key={index} class="flex flex-col">
            <div onClick$={() => (zoomedIndex.value = index)}>
              <ImageComponent
                alt={descriptions?.[index] || `Image ${index + 1}`}
                class="thumbnail-img aspect-[16/9] w-full cursor-pointer rounded-lg object-cover transition-transform hover:scale-105"
              />
            </div>
            {descriptions?.[index] && (
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center px-2">
                {descriptions[index]}
              </p>
            )}
          </div>
        ))}
      </div>

      {zoomedIndex.value !== null && (
        <div class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/30">
          <div class="zoomed-img relative max-h-[100vh] max-w-[90vw] rounded-lg bg-[var(--c-bg-sub-color)] p-6 shadow-2xl">
            <button
              onClick$={closeZoom}
              class="absolute right-2 top-2 rounded-full bg-red-500 px-3 py-1 text-white transition-colors hover:bg-red-600 z-10"
              aria-label="Fermer"
            >
              ✕
            </button>
            
            {/* Flèche gauche */}
            {images.length > 1 && (
              <button
                onClick$={prevImage}
                class="nav-arrow absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 dark:bg-gray-800/80 p-3 text-2xl text-gray-800 dark:text-white transition-all hover:bg-white dark:hover:bg-gray-800 hover:scale-110 shadow-lg z-10"
                aria-label="Image précédente"
              >
                ‹
              </button>
            )}
            
            {/* Flèche droite */}
            {images.length > 1 && (
              <button
                onClick$={nextImage}
                class="nav-arrow absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 dark:bg-gray-800/80 p-3 text-2xl text-gray-800 dark:text-white transition-all hover:bg-white dark:hover:bg-gray-800 hover:scale-110 shadow-lg z-10"
                aria-label="Image suivante"
              >
                ›
              </button>
            )}
            
            <div class="flex flex-col items-center gap-4">
              {(() => {
                const ZoomedImage = images[zoomedIndex.value!];
                return (
                  <ZoomedImage
                    key={`zoomed-${zoomedIndex.value}`}
                    alt={descriptions?.[zoomedIndex.value!] || `Image ${zoomedIndex.value! + 1}`}
                    class="max-h-[80vh] w-auto rounded object-contain"
                  />
                );
              })()}
              {descriptions?.[zoomedIndex.value!] && (
                <p class="max-w-[600px] text-center text-base text-gray-700 dark:text-gray-300 font-medium">
                  {descriptions[zoomedIndex.value!]}
                </p>
              )}
              {/* Indicateur de position */}
              {images.length > 1 && (
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {zoomedIndex.value! + 1} / {images.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
});
