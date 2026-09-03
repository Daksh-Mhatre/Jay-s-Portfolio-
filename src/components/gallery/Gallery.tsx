import { useMemo } from "react";
import { galleryItems } from "../../data/gallery";
import { useCategoryFilter } from "../../hooks/useCategoryFilter";
import { useLightbox } from "../../hooks/useLightbox";
import { SectionHeader } from "../editorial/SectionHeader";
import { Reveal } from "../editorial/Reveal";
import { GalleryFilters } from "./GalleryFilters";
import { GalleryPlate, spanClass } from "./GalleryItem";
import { Lightbox } from "./Lightbox";

export function Gallery() {
  const { active, select } = useCategoryFilter();

  const counts = useMemo(() => {
    const result: Record<string, number> = { all: galleryItems.length };
    for (const item of galleryItems) {
      result[item.category] = (result[item.category] ?? 0) + 1;
    }
    return result;
  }, []);

  const filtered = useMemo(
    () => (active === "all" ? galleryItems : galleryItems.filter((item) => item.category === active)),
    [active],
  );

  const lightbox = useLightbox({ length: filtered.length });

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="scroll-mt-28 border-b border-ink py-16 lg:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <SectionHeader
              id="gallery-heading"
              index="SEC. 01"
              title="The Archive"
              note={`${String(galleryItems.length).padStart(2, "0")} PLATES — SELECTED WORK`}
            />
          </div>
          <div className="lg:col-span-4 lg:border-l lg:border-ink lg:pl-8">
            <p className="type-body text-grey-600">
              Selected frames from the Past Format archive, filed by category. Every plate carries
              its figure number, year and origin — the way a print should be catalogued.
            </p>
            <p className="type-meta-sm mt-4 text-grey-500">
              CURRENT VIEW — {active.toUpperCase()} / {String(filtered.length).padStart(2, "0")} ITEMS
            </p>
          </div>
        </div>

        <div className="mt-10">
          <GalleryFilters active={active} onSelect={select} counts={counts} />
        </div>

        {filtered.length === 0 ? (
          <p className="type-body mt-16 border border-ink p-10 text-center text-grey-600 newsprint-texture">
            No plates filed under this category yet.
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
            {filtered.map((item, index) => (
              <Reveal
                key={item.id}
                as="div"
                delay={Math.min(index, 4) * 60}
                /* the reveal wrapper carries the plate's column span */
                className={spanClass(item.span)}
              >
                <GalleryPlate
                  item={item}
                  index={index}
                  onOpen={lightbox.open}
                  priority={index < 2}
                />
              </Reveal>
            ))}
          </div>
        )}

        <p className="type-meta-sm mt-8 text-grey-500">
          ⚠ PLACEHOLDER PLATES — REPLACE THE MEDIA IN src/data/gallery.ts WITH THE PAST FORMAT
          ARCHIVE.
        </p>
      </div>

      {lightbox.isOpen && lightbox.index !== null ? (
        <Lightbox
          items={filtered}
          index={lightbox.index}
          onClose={lightbox.close}
          onNext={lightbox.next}
          onPrev={lightbox.prev}
        />
      ) : null}
    </section>
  );
}
