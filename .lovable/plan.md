# SEO Creation & Optimization Plan

A step-by-step plan to make Dr. Prasanna's PCOS & ThyroCure Homeopathy site discoverable, rank locally in Hyderabad (Karmanghat / LB Nagar / Champapet), and convert organic search traffic into WhatsApp bookings.

## Business & keyword focus

- **Primary intents**: PCOS treatment, thyroid treatment, homeopathy, infertility, hormonal issues.
- **Location intents**: Karmanghat, LB Nagar, Champapet, Hyderabad.
- **Primary money keywords**:
  - "homeopathy for PCOS in Hyderabad"
  - "thyroid homeopathy doctor Karmanghat / LB Nagar"
  - "Dr Prasanna PCOS ThyroCure"
  - "infertility homeopathy Hyderabad"
  - "best homeopathy clinic Champapet"
- **Long-tail / question intents**: "can PCOS be cured by homeopathy", "is thyroid curable with homeopathy", "PCOS diet plan Hyderabad", etc. — mapped to blog articles.

---

## Phase 1 — Technical SEO foundation

1. **`index.html` head audit**
   - Real `<title>` (≤60 chars): "PCOS & Thyroid Homeopathy in Hyderabad — Dr. Prasanna"
   - `<meta name="description">` (≤160 chars): benefit + location + CTA.
   - Canonical, `og:title`, `og:description`, `og:type=website`, `og:url`, `twitter:card=summary_large_image`.
   - Organization + LocalBusiness JSON-LD (address, phone, hours, geo, sameAs).
2. **Per-route metadata** via existing `SEO.tsx` + `react-helmet-async`
   - Unique title/description/canonical for every page and every blog post.
   - Self-referencing canonical + og:url on every route.
3. **`robots.txt`**
   - `Allow: /`, `Disallow: /admin`, `Disallow: /login`, `Disallow: /signup`, `Disallow: /.lovable/*`.
   - `Sitemap: https://<domain>/sitemap.xml`.
4. **`sitemap.xml` generator**
   - Add `scripts/generate-sitemap.ts` wired to `predev` + `prebuild`.
   - Include every static route AND every blog slug from `src/data/blogPosts.ts`.
5. **Crawlability & indexability**
   - Ensure no route accidentally emits `noindex`.
   - Verify with Google Search Console URL Inspection after deploy.
6. **Core Web Vitals**
   - Preload hero LCP image, `fetchpriority="high"`.
   - Convert bundled hero JPGs to WebP via `vite-imagetools`.
   - `width`/`height` on every `<img>` (prevent CLS).
   - `loading="lazy"` + `decoding="async"` on below-the-fold images.
   - Font-display: swap; subset Playfair/Poppins to Latin.

## Phase 2 — On-page SEO for existing pages

Standardize every page around this pattern:

- One `<h1>` containing the primary keyword.
- `<h2>` structure covering: problem → why homeopathy → Dr. Prasanna's approach → what patients say → FAQ → CTA.
- Descriptive alt text on every image (keyword + context).
- Internal links: Home → Treatments → Program → Blog → Contact, with descriptive anchors (not "click here").
- WhatsApp CTA above the fold + in every section.

Pages to rewrite/tighten (title | H1 | primary keyword):

| Route | Title | Primary keyword |
| --- | --- | --- |
| `/` | PCOS & Thyroid Homeopathy in Hyderabad — Dr. Prasanna | PCOS thyroid homeopathy Hyderabad |
| `/about` | Dr. Prasanna Boddupally — Homeopathy Doctor, Hyderabad | Dr Prasanna homeopathy Hyderabad |
| `/treatments` | Homeopathy Treatments in Hyderabad | homeopathy treatments Hyderabad |
| `/pcos-program` | PCOS / PCOD Treatment in Hyderabad | PCOS treatment Hyderabad |
| `/thyrocure-program` | Thyroid Treatment in Hyderabad | thyroid homeopathy Hyderabad |
| `/faq` | Homeopathy FAQ — PCOS, Thyroid, Infertility | homeopathy FAQ |
| `/contact` | Book Appointment — Karmanghat, Hyderabad | homeopathy clinic Karmanghat |

## Phase 3 — Local SEO (Karmanghat / LB Nagar / Champapet)

1. **Location landing pages** (new routes, unique content each):
   - `/homeopathy-clinic-karmanghat`
   - `/homeopathy-clinic-lb-nagar`
   - `/homeopathy-clinic-champapet`
   Each page: local intro, directions, map embed, area-specific testimonials, FAQ, WhatsApp CTA.
2. **LocalBusiness JSON-LD** on every location page with `address`, `geo`, `openingHours`, `telephone`, `areaServed`.
3. **NAP consistency** — Name, Address, Phone identical on every page and in the footer.
4. **Google Business Profile** (off-site, guide the user):
   - Claim + verify GBP for "Dr. Prasanna's PCOS & ThyroCure Homeopathy".
   - Category: Homeopath / Alternative medicine practitioner.
   - Add photos, hours, services, weekly posts.
   - Link website + WhatsApp.
5. **Local citations & directories** — Justdial, Practo, Sulekha, Lybrate, Bing Places, Apple Maps — consistent NAP.
6. **Location keywords in H1/H2/alt/meta** on the homepage and program pages.

## Phase 4 — Content SEO (blog)

The blog data layer already exists in `src/data/blogPosts.ts`. Build on it:

1. **Content pillars**
   - PCOS: symptoms, causes, cycle, insulin resistance, diet, fertility.
   - Thyroid: hypothyroidism, hashimoto's, weight, hair loss, pregnancy.
   - Homeopathy explainer: how it works, safety, timelines, myths.
   - Local relevance: Hyderabad diet, monsoon, lifestyle.
2. **Article SEO checklist per post**
   - Unique title ≤60 chars, meta description ≤160 chars, canonical.
   - `Article` + `BreadcrumbList` JSON-LD.
   - Hero image with descriptive alt + WebP.
   - 800–1500 words, H2/H3 structure, FAQ block.
   - 2–3 internal links to programs and 1 to related post.
   - Publish/update dates visible.
3. **Content calendar** — 1–2 posts/week, targeting one keyword cluster each. Track in a simple sheet: keyword, target URL, volume, difficulty, status.
4. **Refresh existing posts** with updated dates, new sections, and additional internal links.

## Phase 5 — Schema.org structured data

Add JSON-LD progressively:

- `Organization` + `WebSite` (sitewide, in `index.html`).
- `Physician` + `LocalBusiness` on Home, Contact, and location pages.
- `MedicalCondition` + `MedicalTherapy` on program pages.
- `FAQPage` on the FAQ page and any post with a Q&A section.
- `Article` + `BreadcrumbList` on every blog post.
- `Review` / `AggregateRating` on testimonials (only with genuine, disclosed reviews).

## Phase 6 — Analytics, Search Console, monitoring

1. **Google Search Console**
   - Verify domain (META tag flow already documented).
   - Submit `sitemap.xml`.
   - Weekly: check Coverage, Enhancements, Core Web Vitals, top queries.
2. **Google Analytics 4** — already wired via `GoogleAnalytics.tsx`. Add events for WhatsApp click, phone click, form submit.
3. **Rank tracking** — track 15–25 priority keywords monthly. Semrush data is available in-tool for spot checks; for daily tracking a Semrush connector can be wired to build an in-app dashboard.
4. **Uptime & speed** — monthly Lighthouse audit; watch LCP < 2.5s, CLS < 0.1, INP < 200ms.

## Phase 7 — Off-page SEO

- Guest posts on Hyderabad health / wellness blogs.
- Doctor listings: Practo, Lybrate, Justdial, Sulekha (rich profile + link back).
- Social presence: Instagram + Facebook + YouTube shorts on PCOS/thyroid education, cross-linking to blog posts.
- Encourage happy patients to leave Google reviews after treatment milestones.
- Digital PR: quotes/comments in local health publications.

## Phase 8 — Conversion optimization (SEO → WhatsApp bookings)

- Sticky WhatsApp CTA on every page (already present — verify mobile placement).
- "Book Free Consultation on WhatsApp" button in hero, mid-page, and footer.
- Trust signals near CTAs: years of experience, patient counts, testimonials snippet.
- Fast-loading pages so users don't bounce before the CTA.

## Phase 9 — AI search (SGE / Perplexity / ChatGPT search)

- Clear, factual, entity-rich content (mention "Dr. Prasanna Boddupally", clinic, conditions by name).
- FAQ-style H2s that answer questions directly in the first paragraph.
- Structured data (Physician, MedicalCondition, FAQPage) — AI answer engines lean on these heavily.
- Consistent E-E-A-T signals: author bio, credentials, address, phone, real photos.

---

## Execution order (recommended)

```text
Phase 1 (technical)  →  Phase 2 (on-page)  →  Phase 3 (local) 
   →  Phase 5 (schema)  →  Phase 6 (monitoring)
   →  Phase 4 (content, ongoing)  →  Phase 7 (off-page, ongoing)
   →  Phase 8 (CRO)   →  Phase 9 (AI search polish)
```

## Success metrics (90-day targets)

- Site verified in GSC, sitemap submitted, 100% of routes indexable.
- 25+ pages indexed (home, programs, location pages, ~15 blog posts).
- Top-3 GBP results for "homeopathy Karmanghat" and "PCOS doctor LB Nagar".
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms on mobile.
- 2–3× increase in organic WhatsApp click events in GA4.

## Out of scope

- Paid ads (Google/Meta) — separate plan if the user wants it.
- Patient portal / online payments (explicitly excluded per project rules).
- Framework/SSR migration — staying on Vite SPA; per-route metadata via helmet is sufficient for JS-executing crawlers.
