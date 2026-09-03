import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { categories } from "../data/gallery";
import type { CategoryId } from "../types/gallery";

const VALID = new Set<string>(categories.map((category) => category.id));

function isCategory(value: string | null): value is CategoryId {
  return value !== null && VALID.has(value);
}

/**
 * Gallery filter synced with the `?category=` search parameter through the
 * router itself, so a filtered archive view can be linked, bookmarked and
 * navigated with back / forward — regardless of router mode (hash or path).
 */
export function useCategoryFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const raw = searchParams.get("category");
  const active: CategoryId = isCategory(raw) ? raw : "all";

  const select = useCallback(
    (category: CategoryId) => {
      setSearchParams(
        category === "all" ? {} : { category },
        { replace: false },
      );
    },
    [setSearchParams],
  );

  return { active, select };
}
