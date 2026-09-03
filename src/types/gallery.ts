import type { AspectRatio, MediaCredit, MediaKind } from "./media";

export type CategoryId =
  | "all"
  | "photography"
  | "film"
  | "events"
  | "portraits"
  | "weddings"
  | "commercial";

export interface Category {
  id: CategoryId;
  label: string;
}

export interface GalleryItem {
  id: string;
  /** FIG. number printed on the plate — keep sequential for editorial rhythm. */
  fig: string;
  title: string;
  category: Exclude<CategoryId, "all">;
  year: string;
  type: MediaKind;
  /** Full-resolution asset used in the lightbox. */
  src: string;
  /** Lower-resolution asset used in the grid. */
  thumbnail: string;
  alt: string;
  caption: string;
  featured?: boolean;
  aspectRatio: AspectRatio;
  /** Column span on the 12-col desktop grid. */
  span: 4 | 5 | 6 | 7 | 8 | 12;
  credit?: MediaCredit;
}

export interface VideoProject {
  id: string;
  /** e.g. "FILM 01" */
  slate: string;
  title: string;
  year: string;
  role: string;
  category: string;
  /**
   * Video file URL. `null` = source not configured yet; the card renders a
   * poster with an honest "SOURCE PENDING" state instead of a fake player.
   */
  src: string | null;
  poster: string;
  alt: string;
  synopsis: string;
  runtime?: string;
  featured?: boolean;
  credit?: MediaCredit;
}

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  description: string;
  detail: string;
}
