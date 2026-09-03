import { ArrowUpRight } from "lucide-react";
import { contact, site } from "../../data/site";
import { ContactForm } from "./ContactForm";

interface DirectRowProps {
  label: string;
  value: string;
  href?: string | null;
  external?: boolean;
}

function DirectRow({ label, value, href, external }: DirectRowProps) {
  const content = (
    <>
      <span className="type-meta-sm text-grey-500">{label}</span>
      <span className="type-heading flex items-center gap-2 text-lg break-all sm:text-2xl">
        {value}
        {href ? (
          <ArrowUpRight
            size={18}
            strokeWidth={1.75}
            aria-hidden="true"
            className="shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        ) : null}
      </span>
    </>
  );

  if (!href) {
    return <div className="flex flex-col gap-2 border-b border-ink px-5 py-5">{content}</div>;
  }

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex flex-col gap-2 border-b border-ink px-5 py-5 transition-colors duration-200 hover:bg-muted focus-visible:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral-950"
    >
      {content}
    </a>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-28 border-b border-ink py-16 newsprint-dots lg:py-24"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="flex items-center gap-3 border-b border-ink pb-3">
          <span className="type-meta-sm border border-ink px-2 py-1">SEC. 05</span>
          <span aria-hidden="true" className="h-2 w-2 bg-accent" />
          <span className="type-meta-sm ml-auto hidden text-grey-500 sm:block">
            COMMISSIONS — {site.year} ONWARDS
          </span>
        </div>

        <h2
          id="contact-heading"
          className="type-display mt-8 text-[3rem] leading-[0.86] tracking-tighter sm:text-7xl lg:text-8xl xl:text-9xl"
        >
          Let&apos;s
          <br />
          <span className="type-italic normal-case text-accent">talk.</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT 5 — founder + direct lines */}
          <div className="lg:col-span-5">
            {/* Founder block */}
            <div className="border border-ink p-6">
              <p className="type-display text-4xl leading-[0.9]">{site.founder}</p>
              <p className="type-meta-sm mt-3 text-grey-500">
                {site.founderRole} — {site.name}
              </p>
              <p className="type-meta-sm mt-1 text-grey-500">{site.discipline}</p>
              <p className="type-italic mt-4 text-lg leading-snug text-grey-600">
                “{site.tagline}.”
              </p>
            </div>

            <p className="type-body mt-8 text-grey-600">
              Tell us the date, the place and what the day is meant to hold on to. Direct lines
              below — the form on the right reaches the same inbox once connected.
            </p>

            <div className="mt-6 border-t border-ink">
              <DirectRow label="PHONE" value={contact.phone} href={contact.phoneHref} />
              <DirectRow label="EMAIL" value={contact.email} href={contact.emailHref} />
              <DirectRow
                label="INSTAGRAM"
                value={contact.instagramHandle}
                href={contact.instagramUrl}
                external
              />
            </div>
          </div>

          {/* RIGHT 7 — the form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
