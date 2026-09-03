# PAST FORMAT — media drop

Everything currently rendered on the site is **placeholder media**. None of it is
Past Format's work. Replacing it does not require touching any component.

```
src/assets/
├── images/
│   ├── portfolio/     01.jpg, 02.jpg, 03.jpg …   ← archive plates (#gallery)
│   ├── hero/          hero-plate.jpg              ← the tall hero frame
│   ├── story/         featured.jpg                ← featured story image
│   └── founder/       jay-watekar.jpg             ← founder portrait (About)
├── videos/            01.mp4, 02.mp4 …            ← films + hero loop
│   └── posters/       01.jpg, 02.jpg …            ← one still per film
└── logo/              past-format.svg             ← optional: real brand asset
```

## How to swap media

1. **Stills — `src/data/gallery.ts`**
   - `import plate01 from "../assets/images/portfolio/01.jpg"` (or use a CDN URL)
   - set `src` (full size, used by the lightbox) and `thumbnail` (grid size)
   - rewrite `title`, `year`, `category`, `alt`, `caption`; delete `credit`
   - `span` (4 / 5 / 7 / 8 / 12) and `aspectRatio` control the editorial crop

2. **Films — `src/data/videos.ts`**
   - `src` accepts any progressive MP4 URL; `null` renders an honest
     "SOURCE PENDING" plate rather than a fake player
   - always supply a `poster` still — nothing downloads until play is pressed
   - `heroVideo.src` is the muted hero loop; set it to `null` to use the still

3. **Logo — `src/components/brand/Logo.tsx`**
   - the mark is vector-rebuilt from the brand card. If the original SVG is
     available, drop it in `assets/logo/` and swap `LogoMark`'s contents.

4. **Copy, contact + services** — `src/data/site.ts`, `src/data/services.ts`.
   Only details supplied on the brand card are recorded there. Anything unknown
   is left as an explicit placeholder — please fill it in rather than guessing.

## Contact form delivery

`formEndpoint` in `src/data/site.ts` is `null`, so the form validates in the
browser and says plainly that nothing was sent. Point it at Formspree, a Resend
proxy or your own API route and `submitEnquiry()` in `src/data/forms.ts` will
POST the enquiry as JSON.
