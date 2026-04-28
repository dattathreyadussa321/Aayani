# Aayani Architects & Interiors — Website

A premium, boutique-feel website for **Aayani Architects & Interiors**, a Hyderabad-based architecture and interior design studio. Built as a complete redesign of the original Bootstrap/jQuery site with a modern Next.js 14 stack and an editorial, warm, hand-crafted aesthetic.

---

## ✨ What's inside

- **Next.js 14** with the App Router and TypeScript
- **Tailwind CSS** with a custom design token system (warm ivory, soft charcoal, terracotta, olive)
- **Framer-friendly motion** via lightweight CSS animations and `IntersectionObserver` reveals (no heavy runtime cost)
- **Editorial typography** — Fraunces (serif) for headlines, Manrope (sans) for body text, loaded via `next/font`
- **Five fully-designed pages** — Home, About, Services, Projects, Contact
- **Reusable component library** — Button, Container, SectionHeading, ImageReveal, Reveal, PageHero, FAQ, etc.
- **Lead-generation flow** — sticky mobile CTA bar, WhatsApp-prefilled estimator, contact form that hands off to WhatsApp (no backend required)
- **Graceful image fallbacks** — every image gracefully degrades to a warm gradient placeholder if missing, so the site is launch-able with zero photography
- **No Bootstrap, jQuery, Slick, or Ekko Lightbox** — all that's gone

---

## 🚀 Quick start

```bash
# 1. Install
npm install

# 2. Run locally (http://localhost:3000)
npm run dev

# 3. Production build
npm run build
npm start
```

Requires Node.js **18.18+** (Next.js 14 requirement).

---

## 📁 Project structure

```
aayani-website/
├── public/
│   ├── images/                     # All photography goes here
│   │   ├── README.md               # 👈 Image-path guide (read this!)
│   │   ├── logo/
│   │   ├── hero/
│   │   ├── projects/
│   │   ├── services/
│   │   ├── about/
│   │   └── testimonials/
│   └── robots.txt
├── src/
│   ├── app/                        # Pages (App Router)
│   │   ├── layout.tsx              # Root layout, fonts, SEO
│   │   ├── page.tsx                # Home
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── projects/page.tsx       # Filterable, modal-detail
│   │   └── contact/page.tsx        # Lead form → WhatsApp
│   ├── components/
│   │   ├── layout/                 # Header, Footer, StickyContactBar
│   │   ├── ui/                     # Reusable primitives
│   │   └── home/                   # Home-page sections
│   ├── data/                       # 👈 Edit your content here
│   │   ├── nav.ts                  # Phone, email, WhatsApp, social
│   │   ├── services.ts             # Service catalog
│   │   ├── projects.ts             # Project catalog
│   │   ├── testimonials.ts         # Testimonials
│   │   └── faqs.ts                 # FAQ entries (home / services / contact)
│   ├── lib/cn.ts
│   └── styles/globals.css          # Design tokens, utilities, components
├── tailwind.config.ts              # 👈 Edit colors / fonts here
├── next.config.js
└── tsconfig.json
```

---

## ✏️ Editing content

The site is intentionally **content-driven**. You almost never need to touch the components — just edit the data files.

### 1. Phone, email, WhatsApp, social, address

📁 `src/data/nav.ts` — `SITE` constant near the top.

```ts
export const SITE = {
  name: "Aayani Architects & Interiors",
  phone: "+91 94413 41995",
  phoneRaw: "+919441341995",          // used for tel: links
  email: "aayanidesigns@gmail.com",
  whatsapp: "https://wa.me/919441341995",
  instagram: "https://www.instagram.com/aayani_architects?...",
  // ...
};
```

Change one number here and it propagates everywhere — header CTA, mobile sticky bar, footer, contact page, estimator.

### 2. Services

📁 `src/data/services.ts` — six services. Each entry has slug, name, emotional line, description, bullets, what's included, timeline, materials. To add a service, just append a new object to the array; the home grid and services page will pick it up automatically.

### 3. Projects / portfolio

📁 `src/data/projects.ts` — 12 projects with category, location, scope, style, year, designer note, materials, cover image path, optional gallery array. Filters on the projects page are derived from the categories you assign here — no extra config needed.

### 4. Testimonials

📁 `src/data/testimonials.ts` — kept the names from your original site (Mama, Sai, Rakesh) plus one anonymous "Homeowner" entry. Add more anytime; the carousel cycles through the array.

### 5. FAQs

📁 `src/data/faqs.ts` — three named exports (`HOME_FAQS`, `SERVICE_FAQS`, `CONTACT_FAQS`) used on the matching pages.

### 6. Navigation labels

📁 `src/data/nav.ts` — `NAV_LINKS` array.

---

## 🖼️ Adding images

**See `public/images/README.md`** — it's a complete map of every image path the codebase looks for, plus the suggested mapping from your old image filenames (e.g. `bg1.jpg`, `g1.jpg`, `MAMA1.jpg`).

Until you drop in real photos, every image position renders a warm gradient placeholder — the site is launch-ready as-is.

---

## 🎨 Design system

### Colors (`tailwind.config.ts`)

| Token            | Hex          | Use                                |
| ---------------- | ------------ | ---------------------------------- |
| `ivory`          | `#F7F1E8`    | Page background                    |
| `soft-white`     | `#FFFDF8`    | Cards, inset surfaces              |
| `charcoal`       | `#1E1B18`    | Primary text, dark sections        |
| `warm-grey`      | `#6E6258`    | Secondary text, eyebrows           |
| `terracotta`     | `#9A5A36`    | Accent, links, italic emphasis     |
| `olive`          | `#2F3A32`    | Deep accent                        |
| `subtle-border`  | `rgba(30,27,24,.12)` | Borders, dividers          |

### Typography

- **Headings** — `Fraunces`, italic accent variant for emphasized words
- **Body** — `Manrope`, weights 300-700
- **Eyebrows** — uppercase, `tracking-[0.28em]`, 11px

Both fonts are loaded through `next/font/google` in `src/app/layout.tsx` — swap them by changing two imports.

### Spacing rhythm

- Section vertical: `clamp(4rem, 9vw, 8rem)` via `.section-y`
- Container max-width: 1280px via `.container-x`
- Both defined in `src/styles/globals.css`

---

## 📞 How the contact form works

The contact form **does not require a backend**. On submit, it composes a pre-formatted message and opens WhatsApp in a new tab to your business number (from `SITE.whatsapp`). The lead arrives in your WhatsApp Business app instantly.

If you'd like a "real" backend (database, email notifications, etc.) later, look at `src/app/contact/page.tsx` — the `handleSubmit` function is the only thing to swap. A `POST` to `/api/contact` (with a Resend or SendGrid handler) is a 30-minute change.

The same applies to the home-page **Cost Estimator Teaser** — it builds a WhatsApp brief from the three pill selectors and opens `wa.me/...` with the message pre-filled.

---

## 🔍 SEO

Page-level metadata is set on each page via Next.js `metadata` exports:

- Site-wide defaults: `src/app/layout.tsx`
- Per page: `metadata` export in each `page.tsx`

Update `metadataBase` in `layout.tsx` once you have a final domain so OpenGraph URLs resolve correctly.

---

## 📦 Deployment

### Vercel (recommended — one click)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, accept defaults.
3. Done. Every push to `main` deploys.

### Any Node host (Render, Railway, fly.io, your own VPS)

```bash
npm install
npm run build
npm start              # runs the production server on port 3000
```

### Static export

The site is mostly static — if you want a fully static build, add `output: 'export'` to `next.config.js` and run `npm run build`. The `out/` folder can be hosted on any CDN (Cloudflare Pages, Netlify, S3 + CloudFront).

> **Note:** The contact / estimator forms work fine in static mode because they use `wa.me/` redirects — no server route needed.

---

## ✅ Notes on what's intentional

- **Real names from the original site preserved** — Mama, Sai, Rakesh appear in testimonials. No fabricated client names, project counts, or awards anywhere.
- **No fake stats** — the trust strip uses qualitative trust language, not invented numbers.
- **Placeholder gradients are deliberate** — a warm ivory/olive/charcoal wash is shown when an image is missing rather than a broken icon. You can launch with no images.
- **Service area** — Hyderabad, Warangal, Nalgonda, Telangana — matches the original site's coverage.
- **Mobile sticky bar** — Call · WhatsApp · Estimate. Fixed to the bottom on screens narrower than 1024px so a tap-to-contact action is always reachable.

---

## 🧰 Common customizations

| I want to…                            | Do this                                                              |
| ------------------------------------- | -------------------------------------------------------------------- |
| Change the brand color                | `tailwind.config.ts` → `colors.terracotta`                           |
| Change headline / body fonts          | `src/app/layout.tsx` — swap the two `next/font/google` imports       |
| Add a new page                        | Create `src/app/<slug>/page.tsx` and add to `NAV_LINKS` in `nav.ts`  |
| Change a service                      | `src/data/services.ts`                                               |
| Add a project                         | `src/data/projects.ts` (add a new entry; categories auto-detected)   |
| Change FAQs                           | `src/data/faqs.ts`                                                   |
| Change CTA destinations               | `SITE.whatsapp` / `SITE.phoneRaw` in `src/data/nav.ts`               |
| Replace the logo                      | Drop your SVG at `public/images/logo/logo.svg` (header reads it inline as text — see `Header.tsx` to swap to an image) |
| Hook up a real form backend           | `src/app/contact/page.tsx` → swap `handleSubmit` with a `fetch` call |

---

## 🪪 License

Source code is owned by Aayani Architects & Interiors. Designed and rebuilt with care — replace, extend, and remix it as you wish for the studio.

---

**Built for warmth, clarity, and conversion.** 🪵
