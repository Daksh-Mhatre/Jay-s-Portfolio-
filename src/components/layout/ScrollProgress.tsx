import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Editorial scroll progress rule.
 *
 * Sits on the bottom edge of the sticky header: a 2px muted track with a solid
 * red (#CC0000) indicator whose width tracks how far the current page has been
 * scrolled.
 *
 * PERFORMANCE
 * -----------
 * This component renders exactly once. Scroll updates never touch React state
 * — the indicator's `transform` is written directly to the DOM node inside a
 * requestAnimationFrame tick, driven by a passive scroll listener. Using
 * `scaleX` (compositor-only) rather than `width` avoids layout/paint work, so
 * it stays smooth on long, image-heavy Gallery pages.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const node = barRef.current;
    if (!node) return;

    const write = () => {
      frameRef.current = null;

      const doc = document.documentElement;
      // Total distance the page can actually travel.
      const scrollable = doc.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      // Clamp 0 → 1 (guards rubber-band overscroll on iOS/macOS).
      const clamped = Math.min(1, Math.max(0, progress));

      node.style.transform = `scaleX(${clamped})`;
    };

    const schedule = () => {
      if (frameRef.current !== null) return; // coalesce to one write per frame
      frameRef.current = window.requestAnimationFrame(write);
    };

    // Initial paint for the new route (ScrollToTop has already reset scrollY).
    write();

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    // The document grows as lazy images decode — recompute when it does.
    let observer: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(schedule);
      observer.observe(document.body);
    }

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer?.disconnect();
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
    // Re-runs per route so the bar resets to 0% on every page change.
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      className="h-0.5 w-full overflow-hidden bg-muted"
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-accent"
        style={{ transform: "scaleX(0)", willChange: "transform" }}
      />
    </div>
  );
}
