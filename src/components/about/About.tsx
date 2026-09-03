import { aboutPlate } from "../../data/gallery";
import { site } from "../../data/site";
import { FigureCaption } from "../editorial/FigureCaption";
import { Reveal } from "../editorial/Reveal";
import { SectionHeader } from "../editorial/SectionHeader";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-28 border-b border-ink py-16 newsprint-texture lg:py-24"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        <SectionHeader
          id="about-heading"
          index="SEC. 03"
          title="About Past Format"
          note={`${site.founder} — ${site.founderRole}`}
          className="max-w-4xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT 5 — statement + founder plate */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="type-display-serif text-[2.5rem] leading-[0.92] tracking-tight sm:text-6xl">
                Stories worth
                <br />
                <span className="type-italic normal-case text-accent">remembering.</span>
              </p>
            </Reveal>

            <figure className="group mt-10 border border-ink bg-paper">
              <div className="media-frame aspect-[4/5]">
                <img
                  src={aboutPlate.image}
                  alt={aboutPlate.alt}
                  className="media-img media-img--mono"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
              <FigureCaption fig="PLATE B" text={aboutPlate.caption} meta="FOUNDER" />
            </figure>
          </div>

          {/* RIGHT 7 — long form */}
          <div className="lg:col-span-7 lg:border-l lg:border-ink lg:pl-12">
            <p className="type-body-lg drop-cap drop-cap-accent text-grey-700">
              Past Format is a photography and videography creative studio founded by{" "}
              <span className="text-ink">Jay Watekar</span>. It exists for one reason, stated
              plainly on the brand card and honoured in every commission: preserving memories and
              moments in a timeless format.
            </p>

            <p className="type-body mt-6 text-grey-600">
              The approach is documentary before it is decorative. A room is read before it is
              lit; a moment is waited for rather than staged. Stills and motion are made side by
              side, because some memories survive as a single frame and others only make sense in
              sequence — the sound of a room, a walk down a corridor, the second before someone
              turns around.
            </p>

            <blockquote className="mt-8 border-l-2 border-accent bg-muted/60 py-5 pl-6">
              <p className="type-italic text-xl leading-snug sm:text-2xl">
                “{site.tagline}.”
              </p>
              <cite className="type-meta-sm mt-3 block not-italic text-grey-500">
                {site.name} — BRAND STATEMENT
              </cite>
            </blockquote>

            <p className="type-body mt-8 text-grey-600">
              Work is delivered as a considered edit rather than a dump of files: sequenced,
              graded and catalogued so it can be looked at again in ten years without
              explanation. The archive on this page is organised the same way — figure numbers,
              categories, years.
            </p>

            <p className="type-meta-sm mt-6 border border-dashed border-grey-500 p-4 text-grey-500">
              [ EDITABLE PLACEHOLDER — ADD STUDIO BASE, TRAVEL RADIUS, AVAILABILITY OR PROCESS
              NOTES HERE. NOTHING HAS BEEN ASSUMED ON THE STUDIO'S BEHALF. ]
            </p>

            {/* Founder block */}
            <div className="mt-10 grid grid-cols-1 border border-ink sm:grid-cols-3">
              <div className="border-b border-ink p-5 sm:border-b-0 sm:border-r">
                <p className="type-meta-sm text-grey-500">FOUNDER</p>
                <p className="type-heading mt-2 text-2xl">{site.founder}</p>
              </div>
              <div className="border-b border-ink p-5 sm:border-b-0 sm:border-r">
                <p className="type-meta-sm text-grey-500">PRACTICE</p>
                <p className="type-heading mt-2 text-2xl">{site.name}</p>
              </div>
              <div className="p-5">
                <p className="type-meta-sm text-grey-500">DISCIPLINE</p>
                <p className="type-meta mt-3 leading-relaxed">PHOTOGRAPHY &amp; VIDEOGRAPHY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
