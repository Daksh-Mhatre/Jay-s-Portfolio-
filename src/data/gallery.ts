import type { Category, GalleryItem } from "../types/gallery";

import photo01 from "../assets/images/portfolio/01.jpeg";
import photo02 from "../assets/images/portfolio/02.jpeg";
import photo03 from "../assets/images/portfolio/03.jpeg";
import photo04 from "../assets/images/portfolio/04.jpeg";
import photo05 from "../assets/images/portfolio/05.jpeg";
import photo06 from "../assets/images/portfolio/06.jpeg";
import photo07 from "../assets/images/portfolio/07.jpeg";
import photo08 from "../assets/images/portfolio/08.jpeg";
import photo09 from "../assets/images/portfolio/09.jpeg";
import photo10 from "../assets/images/portfolio/10.jpg";
import hero01 from "../assets/images/portfolio/hero-01.jpeg";

import heroVideo from "../assets/videos/hero-01.mp4";

/* ==========================================================================
   THE ARCHIVE — Past Format gallery data
   ========================================================================== */

export const categories: Category[] = [
  { id: "all", label: "ALL" },
  { id: "photography", label: "PHOTOGRAPHY" },
  { id: "film", label: "FILM" },
  { id: "events", label: "EVENTS" },
  { id: "portraits", label: "PORTRAITS" },
  { id: "weddings", label: "WEDDINGS" },
  { id: "commercial", label: "COMMERCIAL" },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "pf-001",
    fig: "FIG. 01",
    title: "ARCHIVE 01",
    category: "photography",
    year: "—",
    type: "image",
    src: photo01,
    thumbnail: photo01,
    alt: "Past Format portfolio photograph 01.",
    caption: "Past Format photographic archive.",
    aspectRatio: "landscape",
    span: 7,
    featured: true,
  },

  {
    id: "pf-002",
    fig: "FIG. 02",
    title: "ARCHIVE 02",
    category: "photography",
    year: "—",
    type: "image",
    src: photo02,
    thumbnail: photo02,
    alt: "Past Format portfolio photograph 02.",
    caption: "Past Format photographic archive.",
    aspectRatio: "portrait",
    span: 5,
  },

  {
    id: "pf-003",
    fig: "FIG. 03",
    title: "ARCHIVE 03",
    category: "photography",
    year: "—",
    type: "image",
    src: photo03,
    thumbnail: photo03,
    alt: "Past Format portfolio photograph 03.",
    caption: "Past Format photographic archive.",
    aspectRatio: "square",
    span: 4,
  },

  {
    id: "pf-004",
    fig: "FIG. 04",
    title: "ARCHIVE 04",
    category: "photography",
    year: "—",
    type: "image",
    src: photo04,
    thumbnail: photo04,
    alt: "Past Format portfolio photograph 04.",
    caption: "Past Format photographic archive.",
    aspectRatio: "wide",
    span: 8,
  },

  {
    id: "pf-005",
    fig: "FIG. 05",
    title: "ARCHIVE 05",
    category: "photography",
    year: "—",
    type: "image",
    src: photo05,
    thumbnail: photo05,
    alt: "Past Format portfolio photograph 05.",
    caption: "Past Format photographic archive.",
    aspectRatio: "portrait",
    span: 4,
  },

  {
    id: "pf-006",
    fig: "FIG. 06",
    title: "ARCHIVE 06",
    category: "photography",
    year: "—",
    type: "image",
    src: photo06,
    thumbnail: photo06,
    alt: "Past Format portfolio photograph 06.",
    caption: "Past Format photographic archive.",
    aspectRatio: "portrait",
    span: 4,
  },

  {
    id: "pf-007",
    fig: "FIG. 07",
    title: "ARCHIVE 07",
    category: "photography",
    year: "—",
    type: "image",
    src: photo07,
    thumbnail: photo07,
    alt: "Past Format portfolio photograph 07.",
    caption: "Past Format photographic archive.",
    aspectRatio: "portrait",
    span: 4,
  },

  {
    id: "pf-008",
    fig: "FIG. 08",
    title: "ARCHIVE 08",
    category: "photography",
    year: "—",
    type: "image",
    src: photo08,
    thumbnail: photo08,
    alt: "Past Format portfolio photograph 08.",
    caption: "Past Format photographic archive.",
    aspectRatio: "wide",
    span: 7,
  },

  {
    id: "pf-009",
    fig: "FIG. 09",
    title: "ARCHIVE 09",
    category: "photography",
    year: "—",
    type: "image",
    src: photo09,
    thumbnail: photo09,
    alt: "Past Format portfolio photograph 09.",
    caption: "Past Format photographic archive.",
    aspectRatio: "landscape",
    span: 5,
  },

  {
    id: "pf-010",
    fig: "FIG. 10",
    title: "ARCHIVE 10",
    category: "photography",
    year: "—",
    type: "image",
    src: photo10,
    thumbnail: photo10,
    alt: "Past Format portfolio photograph 10.",
    caption: "Past Format photographic archive.",
    aspectRatio: "portrait",
    span: 5,
  },

  /* ========================================================================
     FILM 01
     ======================================================================== */

  {
    id: "pf-011",
    fig: "FILM 01",
    title: "THE MOTION ARCHIVE",
    category: "film",
    year: "2026",
    type: "video",
    src: heroVideo,
    thumbnail: hero01,
    alt: "Past Format wedding film.",
    caption: "9.5K+ LIKES / 60K+ VIEWS",
    aspectRatio: "wide",
    span: 7,
  },
];

/* ==========================================================================
   HOME / HERO PLATE
   ========================================================================== */

export const heroPlate = {
  image: hero01,
  alt: "Past Format photographic work.",
  caption: "PAST FORMAT — VISUAL STORY",
};

/* ==========================================================================
   ABOUT PLATE
   ========================================================================== */

export const aboutPlate = {
  image: hero01,
  alt: "Past Format photographic work.",
  caption: "PAST FORMAT — VISUAL STORY",
};