import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { contact, navLinks, site } from "../../data/site";
import { IconButton } from "../ui/IconButton";
import { ButtonLink } from "../ui/Button";
import { LogoMark } from "../brand/Logo";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    restoreRef.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); onClose(); return; }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (focusables.length === 0) return;
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = previousOverflow; restoreRef.current?.focus?.(); };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
      <div ref={panelRef} className="flex h-full w-full flex-col bg-paper newsprint-dots">
        <div className="flex h-16 items-center justify-between border-b-2 border-ink px-4">
          <span className="flex items-center gap-3"><LogoMark className="h-6 w-auto" /><span className="type-meta-sm text-grey-500">MENU / {site.edition}</span></span>
          <IconButton label="Close menu" onClick={onClose} ref={closeRef}><X size={18} strokeWidth={1.75} aria-hidden="true" /></IconButton>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto">
          <ul>
            {navLinks.map((link, index) => (
              <li key={link.id} className="border-b border-ink">
                <Link to={link.href} onClick={onClose} className="flex items-baseline justify-between px-4 py-6 transition-colors hover:bg-muted focus-visible:bg-muted focus-visible:outline-none">
                  <span className="type-display text-5xl">{link.label}</span>
                  <span className="type-meta-sm text-grey-500">{String(index + 1).padStart(2, "0")}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-1 px-4 py-8">
            <p className="type-meta-sm text-grey-500">DIRECT</p>
            <a href={contact.emailHref} className="type-body block break-all underline underline-offset-4">{contact.email}</a>
            <a href={contact.phoneHref} className="type-body block underline underline-offset-4">{contact.phone}</a>
          </div>
        </nav>

        <div className="border-t-2 border-ink p-4">
          <ButtonLink to="/contact" onClick={onClose} block variant="primary" size="lg">CONTACT US</ButtonLink>
        </div>
      </div>
    </div>
  );
}
