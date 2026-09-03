import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Global scroll-to-top.
 *
 * Runs on every route (pathname) change — header nav, logo, CTAs, mobile
 * menu, browser back/forward — and instantly places the new page at
 * scrollY = 0. "instant" is used on purpose: page switches must not smooth
 * scroll, and it overrides the CSS `scroll-behavior: smooth` on <html>.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Stop the browser from restoring a deep scroll position on back/forward.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
