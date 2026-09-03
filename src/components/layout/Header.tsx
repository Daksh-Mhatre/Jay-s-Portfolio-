import { useState } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navLinks, site } from "../../data/site";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { Logo } from "../brand/Logo";
import { Navigation } from "../navigation/Navigation";
import { IconButton } from "../ui/IconButton";
import { MobileMenu } from "./MobileMenu";
import { ScrollProgress } from "./ScrollProgress";

const SECTION_IDS = navLinks.map((link) => link.id);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollSpyId = useScrollSpy(SECTION_IDS);
  const location = useLocation();
  const navigate = useNavigate();

  // Active tab: prefer the current route over the scroll spy, so the header
  // always marks the page the visitor is actually on.
  const routeSegment = location.pathname.replace(/^\//, "");
  const activeId = navLinks.some((link) => link.id === routeSegment)
    ? routeSegment
    : scrollSpyId;

  /**
   * Past Format wordmark — routes to / via the SPA router rather than
   * reloading the page. From any other route it goes to `/`; from `/` it
   * just returns the visitor to the top of the home page.
   */
  const goHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Masthead strip — scrolls away with the page */}
      <div className="hidden border-b border-ink bg-ink text-paper md:block">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-1.5 sm:px-6">
          <p className="type-meta-sm text-paper/70">
            EDITION {site.edition} — {site.discipline}
          </p>
          <p className="type-meta-sm text-paper/70">
            <span className="text-accent">●</span> FOUNDED &amp; SHOT BY {site.founder}
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-paper newsprint-dots">
        {/* Full-bleed bottom rule, unchanged from the original header */}
        <div className="border-b-2 border-ink">
          <div className="mx-auto flex h-16 max-w-screen-xl items-stretch px-4 sm:px-6 md:h-20 md:px-0">
            {/* LEFT — logo / home. The whole wordmark + mark is one link to `/`. */}
            <Link
              to="/"
              onClick={goHome}
              aria-label="Go to Past Format home"
              title="Past Format — home"
              className="group flex cursor-pointer items-center pr-4 transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral-950 md:border-r md:border-ink md:pl-6 md:pr-8"
            >
              <Logo />
            </Link>

            {/* CENTER — editorial tabs */}
            <div className="hidden flex-1 items-stretch justify-center md:flex">
              <Navigation activeId={activeId} />
            </div>

            {/* RIGHT — conversion */}
            <div className="ml-auto flex items-stretch md:ml-0">
              <Link
                to="/contact"
                className="type-label hidden items-center border-l border-ink bg-ink px-6 text-[0.6875rem] tracking-[0.2em] text-paper transition-colors duration-200 hover:bg-paper hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral-950 md:flex lg:px-8"
              >
                CONTACT US
              </Link>

              <div className="flex items-center md:hidden">
                <IconButton
                  label="Open menu"
                  aria-expanded={menuOpen}
                  aria-haspopup="dialog"
                  onClick={() => setMenuOpen(true)}
                >
                  <Menu size={18} strokeWidth={1.75} aria-hidden="true" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll progress — sits on the header's bottom edge */}
        <ScrollProgress />
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
