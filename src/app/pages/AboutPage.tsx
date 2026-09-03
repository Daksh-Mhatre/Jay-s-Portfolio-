import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { About } from "../../components/about/About";
import { Services } from "../../components/about/Services";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <About />
        <Services />

        {/* Closing CTA — About → Contact */}
        <section aria-label="Continue to contact" className="border-b border-ink py-16 lg:py-24">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
            <div className="flex flex-col items-start justify-between gap-8 border-t-4 border-ink pt-10 lg:flex-row lg:items-end">
              <h2 className="type-display max-w-3xl text-4xl leading-[0.88] tracking-tighter sm:text-6xl lg:text-7xl">
                Let&apos;s create something
                <br />
                <span className="type-italic normal-case text-accent">worth remembering.</span>
              </h2>
              <Link
                to="/contact"
                className="type-label inline-flex min-h-11 items-center border-2 border-ink bg-ink px-8 py-3 text-xs tracking-[0.2em] text-paper transition-colors duration-200 hover:bg-paper hover:text-ink"
              >
                START A CONVERSATION →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
