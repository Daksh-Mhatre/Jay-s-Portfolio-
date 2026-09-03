/**
 * PAST FORMAT — single source of truth for brand + contact configuration.
 * Only details supplied on the brand card are recorded here.
 * Anything unknown is left as an explicit, editable placeholder — never invented.
 */

export const site = {
  name: "PAST FORMAT",
  founder: "JAY WATEKAR",
  founderRole: "FOUNDER",
  discipline: "PHOTOGRAPHY & VIDEOGRAPHY",
  tagline: "Preserving memories and moments in a timeless format",
  edition: "VOL. 01",
  year: "2026",
  /** Editable: appears in the masthead strip. Leave blank if not applicable. */
  basedIn: "" as string, // e.g. "MUMBAI, IN" — left empty: not supplied.
} as const;

export const contact = {
  phone: "+91 8433584797",
  phoneHref: "tel:+918433584797",
  email: "hellopastformat@gmail.com",
  emailHref: "mailto:hellopastformat@gmail.com",
  instagramHandle: "@pastformat",
  /**
   * EDITABLE: derived from the supplied handle. Verify the account URL and
   * replace if it differs. Set to `null` to render the handle as plain text.
   */
  instagramUrl: "https://www.instagram.com/pastformat/" as string | null,
} as const;

/**
 * FORM DELIVERY
 * -------------
 * There is no backend in this build. The contact form validates on the client
 * and then hands off to `submitEnquiry()` in `src/data/forms.ts`.
 * Set `formEndpoint` to a Formspree / Resend / custom API URL to go live.
 */
export const formEndpoint: string | null = null;

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { id: "gallery", label: "GALLERY", href: "/gallery" },
  { id: "about", label: "ABOUT", href: "/about" },
  { id: "contact", label: "CONTACT", href: "/contact" },
];

/** Ticker copy for the editorial marquee. */
export const tickerItems: string[] = [
  "PAST FORMAT",
  "PHOTOGRAPHY",
  "VIDEOGRAPHY",
  "VISUAL STORIES",
  "MEMORIES",
  "MOMENTS",
  "JAY WATEKAR",
  "THE ARCHIVE",
];

export const projectTypes: string[] = [
  "WEDDING",
  "EVENT",
  "PORTRAIT",
  "COMMERCIAL",
  "FILM / MOTION",
  "OTHER",
];
