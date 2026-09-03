import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { contact, navLinks, site } from "../../data/site";
import { LogoMark } from "../brand/Logo";

export function Footer() {
  return (
    <footer className="border-t-4 border-ink bg-paper newsprint-dots">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* LEFT — brand */}
          <div className="border-b border-ink py-10 md:col-span-5 md:border-b-0 md:border-r md:pr-8">
            <Link
              to="/"
              aria-label="Go to Past Format home"
              className="flex cursor-pointer items-center gap-3 transition-colors duration-200 hover:text-accent"
            >
              <LogoMark className="h-7 w-auto" />
              <span className="type-wordmark text-2xl">Past Format</span>
            </Link>
            <p className="type-italic mt-5 max-w-sm text-xl text-grey-600">
              “{site.tagline}.”
            </p>
            <p className="type-meta-sm mt-6 text-grey-500">
              {site.founder} — {site.founderRole}
            </p>
          </div>

          {/* CENTER — navigation */}
          <nav aria-label="Footer" className="border-b border-ink py-10 md:col-span-3 md:border-b-0 md:border-r md:px-8">
            <p className="type-meta-sm mb-5 text-grey-500">INDEX</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.href}
                    className="type-label link-rule text-sm tracking-[0.2em] transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT — social + direct */}
          <div className="py-10 md:col-span-4 md:pl-8">
            <p className="type-meta-sm mb-5 text-grey-500">ELSEWHERE</p>
            {contact.instagramUrl ? (
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="type-label group inline-flex items-center gap-2 text-sm tracking-[0.2em] transition-colors duration-200 hover:text-accent"
              >
                INSTAGRAM
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.75}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
                <span className="type-meta-sm text-grey-500">{contact.instagramHandle}</span>
              </a>
            ) : (
              <p className="type-label text-sm tracking-[0.2em]">
                INSTAGRAM <span className="type-meta-sm text-grey-500">{contact.instagramHandle}</span>
              </p>
            )}

            <dl className="mt-8 space-y-3">
              <div>
                <dt className="type-meta-sm text-grey-500">EMAIL</dt>
                <dd>
                  <a
                    href={contact.emailHref}
                    className="type-body break-all underline decoration-1 underline-offset-4 transition-colors duration-200 hover:text-accent"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="type-meta-sm text-grey-500">TELEPHONE</dt>
                <dd>
                  <a
                    href={contact.phoneHref}
                    className="type-body underline decoration-1 underline-offset-4 transition-colors duration-200 hover:text-accent"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Bottom metadata bar */}
      <div className="border-t border-ink bg-ink text-paper">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-2 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p className="type-meta-sm text-paper/70">
            EDITION: {site.edition} — {site.name} — {site.discipline}
          </p>
          <p className="type-meta-sm text-paper/70">
            © {site.year} {site.name}. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
