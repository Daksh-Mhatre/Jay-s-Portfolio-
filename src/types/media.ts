/**
 * Shared media primitives for Past Format.
 *
 * MEDIA REPLACEMENT NOTES
 * -----------------------
 * Every `src` / `poster` value in `src/data/*` is a clearly-labelled PLACEHOLDER.
 * None of the media currently referenced is Past Format's own work.
 *
 * To ship the real archive:
 *   1. Drop files into `src/assets/images/portfolio/` (01.jpg, 02.jpg, …)
 *      and `src/assets/videos/` (01.mp4, …), or upload them to a CDN.
 *   2. Replace the `src`, `thumbnail` and `poster` strings in the data files.
 *   3. Update `alt`, `caption`, `title`, `year` and `credit` to match.
 * Nothing else in the codebase needs to change.
 */

export type MediaKind = "image" | "video";

/** Deliberate editorial crop ratios used across the archive grid. */
export type AspectRatio =
  | "portrait" /* 3 / 4  */
  | "tall" /* 2 / 3  */
  | "square" /* 1 / 1  */
  | "landscape" /* 4 / 3  */
  | "wide" /* 16 / 9 */
  | "cinema"; /* 21 / 9 */

export const ASPECT_CLASS: Record<AspectRatio, string> = {
  portrait: "aspect-[3/4]",
  tall: "aspect-[2/3]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  cinema: "aspect-[21/9]",
};

export interface MediaCredit {
  /** Placeholder attribution. Delete once real work is in place. */
  label: string;
  url?: string;
}
