# SEO review: Phase 1 site

> Reviewed 2026-10-12 against the claude-seo skill checklists (seo-page, seo-technical, seo-schema, seo-geo, quality gates), run on a local production build. The site is not deployed yet, so live checks are still to do: Core Web Vitals field data, Search Console, backlinks and rendered crawl.

## Scorecard (local build)

| Area | Status | Notes |
|---|---|---|
| Titles | Pass | All 8 unique, 30–60 characters, keyword first, brand last |
| Meta descriptions | Pass | All 120–160 characters, unique |
| Headings | Pass | Exactly one H1 per page, no skipped levels |
| Canonical tags | Pass | Self-referencing on every page |
| Open Graph / share images | Pass | Generated 1200×630 cards: one for the site, one for Caseproof |
| Structured data | Pass | Organization, WebSite, SoftwareApplication, Service, BreadcrumbList; JSON-LD in server HTML |
| Rendering | Pass | Fully static HTML; all content visible without JavaScript |
| Crawlability | Pass | robots.txt allows all; sitemap.xml lists all 8 pages |
| Security headers | Pass | HSTS, nosniff, frame-deny, referrer and permissions policy |
| Mobile | Pass | No horizontal scroll at 390px; tested in light and dark mode |
| Content depth | Partial | See below |
| E-E-A-T / trust | **Gap** | See below |
| Images | **Gap** | No real images yet, only labelled slots |
| Placeholders | **Blocker** | Domain and email are still `example.com` |

## Fixed during this review
1. Homepage had no canonical tag. Added.
2. Titles over 60 characters (home, services hub, software consulting) and descriptions over 160 characters (home, Caseproof, security) were shortened.
3. No share images: added generated Open Graph cards, plus a metadata helper so every page keeps its image.
4. The scroll-reveal animation was shipping content as invisible HTML (opacity 0) until JavaScript ran. Replaced with CSS scroll-driven animation; content is now visible in the raw HTML.
5. A breadcrumb pointed at `/products` (a redirect). Removed.
6. Added WebSite schema, sitemap `lastModified` dates and security headers.
7. Service pages were thin (about 430–480 words). Added a "Where this fits" section with concrete examples (now 490–570 words).
8. Caseproof page: added FAQs on insurer-specific MER formats and on what a PPMC report is. Both are written as self-contained answers that AI search can quote.

## Still open

### Blockers before launch
- **Domain and email:** set `NEXT_PUBLIC_SITE_URL` and replace `hello@example.com` in `lib/site.ts`. Canonicals, sitemap and schema all use these.
- **Legal entity name:** confirm (`Imaxine Ltd` vs `Imaxine Private Limited`).
- **Privacy policy and terms:** required under the DPDP Act, since the contact form collects personal data; insurers' vendor-risk teams will also look for them.

### High priority
- **About page, with real people.** For a company selling software that handles medical data, Google's E-E-A-T signals and buyers both expect: founders and team with LinkedIn links, registered address, CIN/GSTIN and a company story. Add Organization `logo`, `address` and `sameAs` (LinkedIn) to the schema once available.
- **Real images.** Each page has a labelled `ImageSlot`. Priorities:
  1. A Caseproof QC workspace screenshot using synthetic data (homepage and Caseproof hero)
  2. A photo for each service page
- **Content depth vs. the claude-seo guidelines:** service pages are about 500–570 words against an 800-word guideline, and the homepage is about 380 against 500. Don't pad. Add real substance as it becomes available: a case study per service, pricing approach, team. These are guidelines, not ranking rules.
- **Proof:** the results block (reports per month, turnaround, % less manual entry) and client logos, once permission is given.

### Medium priority
- **FAQPage schema:** according to the claude-seo reference (2026), Google retired FAQ rich results for all sites in May 2026. The schema is harmless and still helps machines read the Q&A, so keep it, but don't expect FAQ snippets in Google. The plan has been updated to match.
- **Google Search Console and Bing Webmaster Tools:** verify the domain and submit the sitemap on launch day. Check Core Web Vitals in Search Console after about 28 days of traffic.
- **Google Business Profile** for the registered office (see plan §7).
- **Analytics:** add GA4 or a privacy-friendlier alternative, with consent handling.

### Low priority
- `llms.txt`: optional. The claude-seo skill gives it no weight; skip until there is more content.
- IndexNow for faster Bing indexing.
- Blog and pillar guides (plan §6) once Phase 1 is live.

## AI search (GEO) notes
- AI search crawlers (OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot) are allowed by robots.txt. Keep them allowed; this is a B2B site that wants to be cited.
- Brand mentions on LinkedIn, YouTube (a 2-minute Caseproof walkthrough) and industry publications correlate more with AI citations than backlinks. This matches the off-page plan in `WEBSITE_PLAN.md` §10.
- Keep key answers in the first 40–60 words of each section, and refresh core pages at least quarterly. AI answers favour recent content.
