import { categories } from "../../data/gallery";
import type { CategoryId } from "../../types/gallery";
import { cn } from "../../utils/cn";

interface GalleryFiltersProps {
  active: CategoryId;
  onSelect: (category: CategoryId) => void;
  counts: Record<string, number>;
}

/** Filter rail. Reads as a contents list, not a set of pills. */
export function GalleryFilters({ active, onSelect, counts }: GalleryFiltersProps) {
  return (
    <div
      role="group"
      aria-label="Filter the archive by category"
      className="flex flex-wrap items-stretch border border-ink"
    >
      {categories.map((category) => {
        const isActive = active === category.id;
        const count = category.id === "all" ? counts.all : (counts[category.id] ?? 0);

        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelect(category.id)}
            aria-pressed={isActive}
            className={cn(
              "type-label flex min-h-11 flex-1 items-center justify-center gap-2 border-r border-ink px-4 py-3 text-[0.625rem] tracking-[0.2em] last:border-r-0",
              "transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral-950",
              isActive ? "bg-ink text-paper" : "bg-transparent text-ink hover:bg-muted",
            )}
          >
            {category.label}
            <span
              className={cn(
                "type-meta-sm text-[0.5rem]",
                isActive ? "text-accent" : "text-grey-500",
              )}
            >
              {String(count).padStart(2, "0")}
            </span>
          </button>
        );
      })}
    </div>
  );
}
