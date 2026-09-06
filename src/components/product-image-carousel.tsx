import { useState } from "react";

export type CarouselImage = string | { src: string; position?: string };

function normalize(image: CarouselImage) {
  return typeof image === "string"
    ? { src: image, position: "center" }
    : { src: image.src, position: image.position ?? "center" };
}

export function ProductImageCarousel({
  images,
  alt,
  className = "",
}: {
  images: CarouselImage[];
  alt: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  const current = normalize(images[index]!);

  return (
    <div className={`relative aspect-square overflow-hidden bg-secondary ${className}`}>
      <img
        src={current.src}
        alt={alt}
        className="h-full w-full object-cover"
        style={{ objectPosition: current.position }}
      />
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Imagen anterior"
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-lg font-bold text-foreground shadow transition-colors hover:bg-white"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Siguiente imagen"
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-lg font-bold text-foreground shadow transition-colors hover:bg-white"
          >
            ›
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
