import { component$, useSignal, useOnDocument, $ } from "@builder.io/qwik";

interface GalerieZoomProps {
  images: any[];
}

export const GalerieZoom = component$(({ images }: GalerieZoomProps) => {
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
          <div key={index} onClick$={() => (zoomedIndex.value = index)}>
            <ImageComponent
              alt={`Image ${index + 1}`}
              width="400"
              height="300"
              class="thumbnail-img h-auto w-full cursor-pointer rounded-lg"
            />
          </div>
        ))}
      </div>

      {zoomedIndex.value !== null && (
        <div class="bg-opacity-70 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div class="zoomed-img max-h-[95vh] rounded bg-white p-4 shadow-lg">
            {(() => {
              const ZoomedImage = images[zoomedIndex.value!];
              return (
                <ZoomedImage
                  alt={`Image ${zoomedIndex.value + 1}`}
                  width="1920"
                  height="1080"
                  class="max-h-[95vh] max-w-[95vw] rounded"
                />
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
});
