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

  useOnDocument(
    "click",
    $((e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".zoomed-img") && !target.closest(".thumbnail-img")) {
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
        <div class="bg-opacity-70 fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-sm">
          <div class="zoomed-img relative max-h-[100vh] max-w-[90vw] rounded-lg bg-[var(--c-bg-sub-color)] p-6 shadow-2xl">
            <button
              onClick$={closeZoom}
              class="absolute right-2 top-2 rounded-full bg-red-500 px-3 py-1 text-white transition-colors hover:bg-red-600"
              aria-label="Fermer"
            >
              ✕
            </button>
            {(() => {
              const ZoomedImage = images[zoomedIndex.value!];
              return (
                <div class="flex flex-col items-center gap-4">
                  <ZoomedImage
                    alt={descriptions?.[zoomedIndex.value!] || `Image ${zoomedIndex.value! + 1}`}
                    class="max-h-[80vh] max-w-full rounded"
                  />
                  {descriptions?.[zoomedIndex.value!] && (
                    <p class="max-w-[600px] text-center text-base text-gray-700 dark:text-gray-300 font-medium">
                      {descriptions[zoomedIndex.value!]}
                    </p>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
});
