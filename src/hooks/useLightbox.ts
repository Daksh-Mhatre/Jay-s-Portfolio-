import { useCallback, useEffect, useState } from "react";

interface UseLightboxOptions {
  /** Number of items currently in the lightbox set. */
  length: number;
}

export interface LightboxController {
  index: number | null;
  isOpen: boolean;
  open: (index: number) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
}

/**
 * Lightbox state + global keyboard bindings.
 * ESC closes · ← previous · → next. Scroll is locked while open.
 */
export function useLightbox({ length }: UseLightboxOptions): LightboxController {
  const [index, setIndex] = useState<number | null>(null);
  const isOpen = index !== null;

  const open = useCallback((next: number) => setIndex(next), []);
  const close = useCallback(() => setIndex(null), []);

  const next = useCallback(() => {
    setIndex((current) => (current === null || length === 0 ? current : (current + 1) % length));
  }, [length]);

  const prev = useCallback(() => {
    setIndex((current) =>
      current === null || length === 0 ? current : (current - 1 + length) % length,
    );
  }, [length]);

  // Clamp when the underlying collection shrinks (e.g. filter change).
  useEffect(() => {
    setIndex((current) => (current !== null && current >= length ? null : current));
  }, [length]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, next, prev]);

  return { index, isOpen, open, close, next, prev };
}
