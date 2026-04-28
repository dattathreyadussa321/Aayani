# Image Assets — Where to Drop Your Photos

The site is wired to look for specific image paths under `public/images/`. **Until you drop in real photos, the site shows warm gradient placeholders** (ivory / olive / charcoal washes) so nothing ever looks broken.

This file lists every image the codebase references, what it should be, and which old filename from your existing site (if any) maps to it.

---

## Recommended specs

| Use            | Aspect ratio | Min long edge | Format        |
| -------------- | ------------ | ------------- | ------------- |
| Hero / CTA bg  | 16:9 / 21:9  | 2400px        | JPG (80% q)   |
| Projects       | 4:5 or 3:4   | 1600px        | JPG (80% q)   |
| Services       | 4:5          | 1400px        | JPG (80% q)   |
| Before / After | identical    | 1600px        | JPG (80% q)   |
| Testimonials   | square       | 600px         | JPG (80% q)   |
| Logo           | —            | —             | SVG preferred |

Tip: run images through `squoosh.app` or `sharp` before adding. Drop sizes by 60-80%.

---

## `logo/`

| Path                        | Old file       | Notes                                                                |
| --------------------------- | -------------- | -------------------------------------------------------------------- |
| `logo/logo.svg`             | `logo3.png`    | Wordmark used by Header. Replace with your real SVG when ready.      |
| `logo/favicon.svg`          | `logo.png`     | Browser tab icon. Generates favicon at any size.                     |
| `logo/favicon.png` *(opt.)* | `logo.png`     | If you prefer a raster favicon, add a 192×192 PNG and update `app/layout.tsx` `metadata.icons`. |

---

## `hero/`

| Path                  | Old file    | Notes                                                                    |
| --------------------- | ----------- | ------------------------------------------------------------------------ |
| `hero/home-hero.jpg`  | `bg1.jpg`   | Main homepage hero. Pick your most cinematic project shot — wide framing, warm tones. |
| `hero/cta-bg.jpg`     | `bg2.jpg`   | Background for the dark "Let's design a space" CTA section on home page. |
| `hero/about-hero.jpg` | `bg3.jpg`   | About page hero — the studio working, sketches on a desk, etc.           |
| `hero/services-hero.jpg` | —        | Services page hero. A material flatlay or a finished living room work well. |
| `hero/projects-hero.jpg` | —        | Projects page hero. Use a strong portfolio shot.                         |
| `hero/contact-hero.jpg` | —         | Contact page hero. Exterior or facade work nicely here.                  |

---

## `projects/`

The site loads 12 projects from `src/data/projects.ts`. Each project expects a **cover** image and (optionally) a **gallery**. Drop them with these filenames or rename them inside `projects.ts`.

### Cover images

| Path                              | Old file mapping (suggestion)        | Project (slug)                  |
| --------------------------------- | ------------------------------------ | ------------------------------- |
| `projects/warm-3bhk-cover.jpg`    | `g1.jpg` / `full.jpg`                | `warm-3bhk-family-home`         |
| `projects/compact-kitchen.jpg`    | `g6.jpg` / `modular.jpeg`            | `compact-kitchen-storage`       |
| `projects/calm-bedroom.jpg`       | `g10.jpg` / `hw1.jpeg`               | `calm-bedroom-soft-lighting`    |
| `projects/wardrobe-walkin.jpg`    | `g14.jpg`                            | `walk-in-wardrobe-detail`       |
| `projects/focus-office.jpg`       | `g18.jpg`                            | `modern-office-focus`           |
| `projects/architectural-villa.jpg`| `architectcual.jpeg`                 | `villa-architecture-warangal`   |
| `projects/3d-render-living.jpg`   | `s3.jpg`                             | `living-room-3d-render`         |
| `projects/3d-render-kitchen.jpg`  | `s1.jpg`                             | `kitchen-3d-visualization`      |
| `projects/family-living.jpg`      | `g22.jpg`                            | `family-living-room-hyderabad`  |
| `projects/parents-bedroom.jpg`    | `g28.jpg`                            | `parents-bedroom-restful`       |
| `projects/duplex-renovation.jpg`  | `hw2.jpeg`                           | `duplex-renovation-nalgonda`    |
| `projects/balcony-makeover.jpg`   | `g35.jpg`                            | `quiet-balcony-makeover`        |

### Gallery images (optional)

`projects/<slug>/g1.jpg`, `g2.jpg`, `g3.jpg` … the site's project modal is wired to read a gallery array per project (currently the same as the cover until you populate it). To enable galleries, edit `src/data/projects.ts` and change the `gallery: [...]` array on each project to include the additional paths.

### Before / After

| Path                  | Old file  | Notes                                  |
| --------------------- | --------- | -------------------------------------- |
| `projects/before.jpg` | —         | "Before" image for the slider on home. |
| `projects/after.jpg`  | —         | "After" image for the slider on home.  |

If you don't have before/after pairs yet, the slider degrades to placeholder gradients.

---

## `services/`

Six service cards on the home + services pages. Each maps to a service slug in `src/data/services.ts`.

| Path                                  | Old file (suggestion)  | Service                     |
| ------------------------------------- | ---------------------- | --------------------------- |
| `services/full-home-interiors.jpg`    | `full.jpg`             | Full Home Interiors         |
| `services/modular-kitchens.jpg`       | `modular.jpeg`         | Modular Kitchens & Wardrobes|
| `services/architectural-plans.jpg`    | `architectcual.jpeg`   | Architectural Plans         |
| `services/3d-visualization.jpg`       | `s3.jpg` / `s1.jpg`    | 3D Visualization            |
| `services/office-interiors.jpg`       | —                      | Office Interiors            |
| `services/renovations.jpg`            | `hw2.jpeg`             | Renovations                 |

---

## `about/`

| Path                  | Old file       | Notes                                                       |
| --------------------- | -------------- | ----------------------------------------------------------- |
| `about/studio-1.jpg`  | `about-img.jpg`| Sticky "Studio Story" image on the about page.              |
| `about/studio-2.jpg`  | `hw3.jpeg`     | Optional secondary studio shot.                             |

---

## `testimonials/`

Currently testimonials use **initials avatars** (clean circles). If you want to swap to real photos, drop them here and replace `initials` with `image: '/images/testimonials/...'` inside `src/data/testimonials.ts`.

Old file mappings:
- `testimonials/mama.jpg` ← `MAMA1.jpg` / `MAMA2.jpg`
- `testimonials/sai.jpg` ← `SAI.jpg`
- `testimonials/rakesh.jpg` ← (no source file — initials shown)

---

## `process/` and `materials/`

Currently unused by the live UI — reserved for future expansion (process step photos, material swatch photos). Safe to ignore for now.

---

## What happens if I leave a path empty?

Every image in the codebase uses the `<ImageReveal>` component, which:

1. Tries to load the image.
2. On error, hides the `<img>` element.
3. Falls back to a warm CSS gradient placeholder (`.ph-warm`, `.ph-cool`, or `.ph-deep`) — so the layout never breaks.

That means **you can deploy this site today with zero images** and it'll still look intentional. Drop images in over time as you finish photographing your work.
