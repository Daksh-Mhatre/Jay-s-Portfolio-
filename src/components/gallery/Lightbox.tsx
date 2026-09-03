import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { GalleryItem } from "../../types/gallery";
import { IconButton } from "../ui/IconButton";

interface LightboxProps {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const SWIPE_THRESHOLD = 48;

/** Full-screen archive viewer. Ink ground, paper type, no blur, no radius. */
export function Lightbox({
  items,
  index,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const item = items[index];
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const restoreRef = useRef<HTMLElement | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    restoreRef.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        onPrev();
        return;
      }

      if (event.key === "ArrowRight") {
        onNext();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        "button:not([disabled]), a[href]",
      );

      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      restoreRef.current?.focus?.();
    };
  }, [onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.fig} — ${item.title}`}
      className="pf-anim-fade fixed inset-0 z-50 flex flex-col bg-ink text-paper"
      onTouchStart={(event) =>
        setTouchStartX(event.touches[0]?.clientX ?? null)
      }
      onTouchEnd={(event) => {
        if (touchStartX === null) return;

        const delta =
          (event.changedTouches[0]?.clientX ?? touchStartX) - touchStartX;

        if (Math.abs(delta) > SWIPE_THRESHOLD) {
          if (delta < 0) onNext();
          else onPrev();
        }

        setTouchStartX(null);
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4 border-b border-paper/25 px-4 py-3">
        <div className="flex items-baseline gap-3 overflow-hidden">
          <span
            aria-hidden="true"
            className="inline-block h-2 w-2 shrink-0 bg-accent"
          />

          <span className="type-meta-sm text-paper">
            {item.fig}
          </span>

          <span className="type-meta-sm truncate text-paper/60">
            {item.category.toUpperCase()} — {item.year}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="type-meta-sm hidden text-paper/50 sm:block">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(items.length).padStart(2, "0")}
          </span>

          <IconButton
            label="Close viewer (Esc)"
            tone="paper"
            onClick={onClose}
            ref={closeRef}
          >
            <X size={18} strokeWidth={1.75} aria-hidden="true" />
          </IconButton>
        </div>
      </div>

      {/* Stage */}
      <div className="relative flex min-h-0 flex-1 items-center justify-center p-4 sm:p-8">
        <figure className="flex h-full w-full max-w-6xl flex-col items-center justify-center">
          {item.type === "video" ? (
            <video
              key={item.id}
              src={item.src}
              poster={item.thumbnail}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={item.alt}
              className="pf-anim-fade max-h-[calc(100vh-16rem)] w-full max-w-6xl border border-paper/20 object-contain"
            />
          ) : (
            <img
              key={item.id}
              src={item.src}
              alt={item.alt}
              className="pf-anim-fade max-h-[calc(100vh-16rem)] w-auto max-w-full border border-paper/20 object-contain"
              decoding="async"
            />
          )}

          <figcaption className="mt-5 w-full max-w-3xl text-center">
            <h2 className="type-heading text-2xl sm:text-4xl">
              {item.title}
            </h2>

            <p className="type-body mt-2 text-sm text-paper/60">
              {item.caption}
            </p>

            {item.credit ? (
              <p className="type-meta-sm mt-3 text-paper/40">
                {item.credit.label}
              </p>
            ) : null}
          </figcaption>
        </figure>
      </div>

      {/* Controls */}
      <div className="flex items-stretch justify-between border-t border-paper/25">
        <button
          type="button"
          onClick={onPrev}
          className="type-label flex min-h-14 flex-1 items-center justify-start gap-3 border-r border-paper/25 px-4 text-[0.6875rem] tracking-[0.2em] transition-colors duration-200 hover:bg-paper hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-paper sm:px-8"
        >
          <ArrowLeft
            size={16}
            strokeWidth={1.75}
            aria-hidden="true"
          />
          PREVIOUS
        </button>

        <span className="type-meta-sm hidden items-center px-6 text-paper/40 sm:flex">
          ESC TO CLOSE — ← / → TO MOVE
        </span>

        <button
          type="button"
          onClick={onNext}
          className="type-label flex min-h-14 flex-1 items-center justify-end gap-3 border-l border-paper/25 px-4 text-[0.6875rem] tracking-[0.2em] transition-colors duration-200 hover:bg-paper hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-paper sm:px-8"
        >
          NEXT
          <ArrowRight
            size={16}
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}