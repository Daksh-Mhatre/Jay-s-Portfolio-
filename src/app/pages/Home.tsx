import { Link } from 'react-router-dom';
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Marquee } from "../../components/editorial/Marquee";
import { Container } from "../../components/ui/Container";
import { ButtonLink } from "../../components/ui/Button";
import { site, tickerItems } from "../../data/site";
import { heroPlate } from "../../data/gallery";
import { galleryItems } from "../../data/gallery";
import heroVideo from "../../assets/videos/hero-01.mp4";

export default function Home() {
  const selected = galleryItems.filter((i) => i.featured || i.id === "pf-001" || i.id === "pf-002" || i.id === "pf-005" || i.id === "pf-009").slice(0, 4);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#/"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("main")?.focus();
        }}
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-ink focus:text-paper focus:px-4 focus:py-3"
      >
        SKIP TO CONTENT
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        {/* HERO — ONLY visual + headline + one line + one button */}
        <section className="relative border-b-2 border-ink">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:border-r lg:border-ink">
              {/* Visual ~65% */}
              <div className="relative lg:col-span-8 lg:border-r lg:border-ink">
                <figure className="group relative aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5] lg:min-h-[85vh]">
                  <img
                    src={heroPlate.image}
                    alt={heroPlate.alt}
                    className="media-img h-full w-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                  <figcaption className="absolute bottom-4 left-4 border border-ink bg-paper px-2 py-1 text-xs font-mono uppercase tracking-widest text-ink">
                    FIG. 01 / VISUAL STORY
                  </figcaption>
                </figure>
              </div>

              {/* Text ~35% — aligned to image not centered */}
              <div className="flex flex-col justify-end lg:col-span-4 lg:pl-10 lg:pr-4 lg:pb-12">
                <div className="border-t-2 border-ink pt-6 lg:border-t-0 lg:pt-0">
                  <div className="flex items-center gap-3 border-b border-ink pb-3">
                    <span aria-hidden="true" className="h-2 w-2 bg-accent" />
                    <span className="type-meta-sm">PAST FORMAT</span>
                    <span className="type-meta-sm text-grey-500">PHOTO / FILM</span>
                  </div>
                  <h1 className="type-display mt-6 text-[3rem] leading-[0.88] tracking-tighter sm:text-7xl lg:text-8xl">
                    MEMORIES,<br />
                    <span className="type-italic normal-case">PRESERVED.</span>
                  </h1>
                  <p className="type-body-lg mt-6 text-grey-700">
                    {site.tagline}
                  </p>
                  <div className="mt-8 flex items-center gap-6 border-t border-ink pt-4">
                    <ButtonLink to="/gallery" variant="primary" size="lg">
                      VIEW THE WORK →
                    </ButtonLink>
                    <Link to="/about" className="type-label link-rule text-xs">ABOUT PAST FORMAT →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 01 — EDITORIAL STATEMENT */}
        <section aria-labelledby="statement-heading" className="border-b border-ink py-20 lg:py-28 newsprint-texture">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="type-meta-sm">01 / THE PHILOSOPHY</p>
                <div className="mt-2 h-0.5 w-10 bg-accent" />
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <h2 id="statement-heading" className="type-display text-5xl leading-[0.86] tracking-tighter sm:text-7xl lg:text-8xl">
                  Preserving memories and moments in a timeless format.
                </h2>
                <p className="type-body-lg mt-8 drop-cap drop-cap-accent text-grey-600">
                  Past Format is a photography and videography practice founded by {site.founder}.
                  The work is made to outlast the day it is made — stills and motion built with
                  observation, not decoration.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 02 — SELECTED WORK (3–4 items) */}
        <section aria-labelledby="selected-heading" className="border-b border-ink py-16 lg:py-24">
          <Container>
            <div className="flex items-end justify-between gap-4 border-b border-ink pb-4">
              <div>
                <h2 id="selected-heading" className="type-display text-4xl leading-[0.88] sm:text-6xl">Selected Work</h2>
                <p className="type-meta-sm mt-2 text-grey-500">A SMALL SELECTION FROM THE ARCHIVE</p>
              </div>
              <Link to="/gallery" className="type-label hidden items-center gap-2 border-b-2 border-ink pb-1 text-xs tracking-widest transition-colors hover:border-accent hover:text-accent sm:flex">
                VIEW FULL ARCHIVE →
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
              {/* Large left */}
              <Link to="/gallery" className="group relative block md:col-span-7 border border-ink overflow-hidden">
                <div className="media-frame aspect-[3/4] md:aspect-[4/3]">
                  <img src={selected[0]?.thumbnail || heroPlate.image} alt={selected[0]?.alt || ""} className="media-img" loading="lazy" decoding="async" />
                </div>
                <div className="border-t border-ink bg-paper px-4 py-4">
                  <span className="type-meta-sm text-accent">{selected[0]?.category?.toUpperCase() || "PHOTO"} — {selected[0]?.year || "2026"}</span>
                  <h3 className="type-heading mt-2 text-2xl">{selected[0]?.title || "A Moment Between Moments"}</h3>
                </div>
              </Link>
              {/* Two stacked right */}
              <div className="flex flex-col gap-4 md:col-span-5">
                <Link to="/gallery" className="group relative block flex-1 border border-ink overflow-hidden">
                  <div className="media-frame aspect-[4/3]">
                    <img src={selected[1]?.thumbnail || ""} alt={selected[1]?.alt || ""} className="media-img" loading="lazy" decoding="async" />
                  </div>
                  <div className="border-t border-ink bg-paper px-4 py-3">
                    <h3 className="type-heading text-lg">{selected[1]?.title || "The Look, Held"}</h3>
                    <p className="type-meta-sm text-grey-500">{selected[1]?.category?.toUpperCase() || "PORTRAITS"} — {selected[1]?.year || "2026"}</p>
                  </div>
                </Link>
                <Link to="/gallery" className="group relative block flex-1 border border-ink overflow-hidden">
                  <div className="media-frame aspect-[4/3]">
                    <img src={selected[2]?.thumbnail || ""} alt={selected[2]?.alt || ""} className="media-img" loading="lazy" decoding="async" />
                  </div>
                  <div className="border-t border-ink bg-paper px-4 py-3">
                    <h3 className="type-heading text-lg">{selected[2]?.title || "Night Unit"}</h3>
                    <p className="type-meta-sm text-grey-500">{selected[2]?.category?.toUpperCase() || "FILM"} — {selected[2]?.year || "2025"}</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-8 flex justify-center sm:justify-start">
              <Link to="/gallery" className="type-label inline-flex items-center gap-3 border-b-2 border-ink pb-1 text-sm tracking-[0.2em] transition-colors hover:border-accent hover:text-accent">VIEW FULL ARCHIVE →</Link>
            </div>
          </Container>
        </section>

        {/* SECTION 03 — CINEMATIC MOMENT (video preview) */}
        <section aria-label="Moving image" className="border-b border-ink bg-ink text-paper newsprint-hatch py-16 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <figure className="group border border-paper/20">
                  <div className="media-frame aspect-video">
                    <video
                      src={heroVideo}
                      aria-label="Past Format wedding film"
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="border-t border-paper/20 px-4 py-3 type-meta-sm text-paper/60">
                    <span>FILM 01 / EDIT/ 2026</span>
                    <span className="mx-2">—</span>
                    <span>9.5K+ LIKES / 60K+ VIEWS</span>
                  </figcaption>
                </figure>
              </div>
              <div className="flex flex-col justify-between gap-6 lg:col-span-5 lg:pl-10">
                <div>
                  <p className="type-meta-sm text-paper/50">MOVING IMAGES</p>
                  <h2 className="type-display text-5xl leading-[0.86] tracking-tighter sm:text-7xl">The motion archive.</h2>
                  <p className="type-body mt-6 text-paper/70">One film. One story. The rest lives in the archive.</p>
                </div>
                <Link to="/gallery" className="type-label inline-block w-fit border-b-2 border-paper pb-1 text-sm tracking-[0.2em] transition-colors hover:border-accent hover:text-accent">WATCH THE REEL →</Link>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 04 — SHORT ABOUT */}
        <section aria-labelledby="about-heading" className="border-b border-ink py-16 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="type-meta-sm">ABOUT PAST FORMAT</p>
                <div className="mt-2 h-0.5 w-10 bg-accent" />
                <div className="mt-6 border border-ink bg-muted/30 p-6">
                  <p className="type-wordmark text-xl">{site.name}</p>
                  <p className="type-meta-sm mt-1 text-grey-500">PHOTO / FILM — {site.founder}</p>
                </div>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <h2 id="about-heading" className="type-display text-4xl leading-[0.9] sm:text-6xl">A studio for<br />the things worth keeping.</h2>
                <p className="type-body-lg mt-6 text-grey-600 drop-cap drop-cap-accent">
                  Past Format is a photography and videography practice by {site.founder}. The work holds on to what would otherwise be lost — celebrations, streets, people, rooms. No fabrication, no invented claims. Just the work, made with care.
                </p>
                <Link to="/about" className="type-label mt-8 inline-flex items-center gap-3 border-b-2 border-ink pb-1 text-xs tracking-[0.2em] transition-colors hover:border-accent hover:text-accent">READ OUR STORY →</Link>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 05 — FINAL CTA */}
        <section aria-label="Contact CTA" className="py-20 lg:py-28 newsprint-texture">
          <Container>
            <div className="border-2 border-ink bg-ink text-paper px-6 py-14 text-center sm:px-12 lg:px-24 lg:py-20">
              <h2 className="type-display text-5xl leading-[0.86] tracking-tighter sm:text-7xl lg:text-9xl">Have a story to preserve?</h2>
              <p className="type-body-lg mt-6 text-paper/70">Begin with {site.founder} — {site.discipline}.</p>
              <div className="mt-8">
                <Link to="/contact" className="type-label inline-block border-2 border-paper bg-paper px-8 py-4 text-sm tracking-[0.2em] text-ink transition-colors hover:border-paper hover:bg-transparent hover:text-paper">LET'S TALK →</Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Marquee items={tickerItems} duration={36} className="border-y-2" />

      <Footer />
    </div>
  );
}
