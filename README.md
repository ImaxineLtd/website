# Imaxine website

Marketing site for Imaxine (workflow automation, AI and software consulting) and its product Caseproof.
Plan and SEO strategy: `docs/WEBSITE_PLAN.md`.

## Stack
Next.js (App Router, static generation), Tailwind CSS v4, Geist font, Phosphor icons.

## Develop
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` (and optionally `NEXT_PUBLIC_FORM_ENDPOINT`).

## Where things live
- `lib/site.ts`: company details, nav, CTA labels (TODOs to confirm before launch)
- `lib/caseproof.ts`, `lib/services.ts`: page content
- `app/`: routes; `components/`: shared UI
- Image slots (`ImageSlot`) mark where real screenshots or photos must be added

## Preview on GitHub Pages
`.github/workflows/deploy-pages.yml` builds a static export (`GITHUB_PAGES=true`) and deploys it on every push to `main`.
One-time setup: repo **Settings → Pages → Source: GitHub Actions**. Pages on a private repo needs a paid GitHub plan.
Preview builds are `noindex` and block crawlers in robots.txt, so they never compete with the real domain.
Custom headers and the `/products` redirect only apply on a full Next.js host (e.g. Vercel), not on Pages.
