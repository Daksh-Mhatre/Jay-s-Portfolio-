import { Maximize2, Play } from "lucide-react";
import { ASPECT_CLASS } from "../../types/media";
import type { GalleryItem as GalleryItemType } from "../../types/gallery";
import { cn } from "../../utils/cn";

const SPAN_CLASS: Record<number, string> = {
  4: "md:col-span-6 lg:col-span-4",
  5: "md:col-span-6 lg:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-6 lg:col-span-7",
  8: "md:col-span-12 lg:col-span-8",
  12: "md:col-span-12",
};

/** Column span for a plate on the 12-col desktop grid. */
export const spanClass = (span: number) =>
  SPAN_CLASS[span] ?? SPAN_CLASS[4];

interface GalleryItemProps {
  item: GalleryItemType;
  index: number;
  onOpen: (index: number) => void;
  priority?: boolean;
  className?: string;
}

export function GalleryPlate({
  item,
  index,
  onOpen,
  priority = false,
  className,
}: GalleryItemProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col border border-ink bg-paper transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#111111]",
        className,
      )}
    >
      <figure className="flex h-full flex-col">
        <div
          className={cn(
            "media-frame relative overflow-hidden border-b border-ink",
            ASPECT_CLASS[item.aspectRatio],
          )}
        >
          {item.type === "video" ? (
            <>
              <video
                src={item.src}
                controls
                playsInline
                preload="metadata"
                aria-label={item.alt}
                className="media-img"
              />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 flex items-center gap-2 bg-ink px-2 py-1 text-paper"
              >
                <Play size={10} fill="currentColor" strokeWidth={1.5} />
                <span className="type-meta-sm">FILM</span>
              </span>
            </>
          ) : (
            <img
              src={item.thumbnail}
              alt={item.alt}
              className="media-img"
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
            />
          )}

          <span
            aria-hidden="true"
            className="type-meta-sm pointer-events-none absolute left-0 top-0 bg-ink px-2 py-1 text-paper"
          >
            {item.fig}
          </span>

          {item.type !== "video" ? (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 flex h-9 w-9 translate-x-full items-center justify-center bg-accent text-paper opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <Maximize2 size={14} strokeWidth={2} />
            </span>
          ) : null}
        </div>

        <figcaption className="flex flex-1 flex-col justify-between gap-4 p-4">
          <div className="flex items-center justify-between gap-3">
            <span className="type-meta-sm text-ink transition-colors duration-200 group-hover:text-accent">
              {item.category.toUpperCase()}
            </span>

            <span className="type-meta-sm text-grey-500">
              {item.year}
            </span>
          </div>

          <div>
            <h3 className="type-heading text-xl leading-tight sm:text-2xl">
              {item.title}
            </h3>

            <p className="type-body mt-2 text-sm text-grey-500">
              {item.caption}
            </p>
          </div>
        </figcaption>
      </figure>

      {/* Only images use the full-card Lightbox button.
          Video controls must remain directly clickable. */}
      {item.type !== "video" ? (
        <button
          type="button"
          onClick={() => onOpen(index)}
          className="absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral-950"
          aria-label={`Open ${item.fig}, ${item.title}`}
        >
          <span className="sr-only">
            Open {item.fig}, {item.title}, {item.year} — full screen
          </span>
        </button>
      ) : null}
    </article>
  );
}