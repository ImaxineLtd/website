# Website Plan: IT Consulting, Automation, AI/ML Services and Medical Report Digitization (India, SEO-led)

> Status: Draft v5 (product named Caseproof) · Owner: TBD · Last updated: 2026-10-12
> Placeholders in `[brackets]` need input from the business.

---

## 1. Goals

| # | Goal | How we measure it (first 6–12 months) |
|---|------|---------------------------------------|
| 1 | Get qualified B2B leads from Indian organic search | Organic sessions from India, form/WhatsApp/call leads, lead-to-meeting rate |
| 2 | Sell Caseproof (medical document digitisation) to insurers, TPAs, diagnostic networks and health platforms | Demo requests, sample-case pilots, contracts signed |
| 2b | Win custom workflow, AI and software consulting projects | Consultation bookings, proposals sent, projects won |
| 3 | Build authority in AI/ML and automation for Indian businesses | Rankings for target clusters, backlinks from Indian domains, branded search growth |
| 4 | Shorten the sales cycle | Pages per lead, case-study views before contact, time from first visit to demo |

**Primary conversion:** "Book a free consultation" / "Request a product demo".
**Secondary conversion:** WhatsApp chat, sample-case pilot request (under NDA), downloadable guides.

---

## 2. Positioning

**One-liner (draft):** *"We build AI-powered workflows and software for Indian businesses, and we run them in production ourselves."*

Two engines, one brand:

1. **Flagship product (proof)**: **Caseproof**, medical document digitisation for insurers and TPAs.
   - Lockup / descriptor: **Caseproof: Medical Document Digitisation for Insurers & TPAs**
   - The name means "every case, verified", matching the human-review step. It is not tied to "medical", so it can later extend to claims, onboarding/KYC and other insurance documents without a rename.
   - Use the descriptor next to the name on first mention on every page, so nobody reads "Caseproof" as a phone-case brand.
2. **Services (revenue breadth)**, three lines:
   - **Custom workflow automation**: workflows built around how a business actually operates (intake → processing → human review → approval → delivery), not off-the-shelf RPA scripts.
   - **AI consulting and development**: document AI/OCR, computer vision, ML models, generative AI/LLM applications, from strategy and PoC to production.
   - **Software consulting and development**: custom web platforms, APIs and integrations, cloud architecture, and modernising legacy systems.

**The product is the best case study for the services.** Caseproof is itself a custom workflow (case intake, assignment, side-by-side review, audit trail, dashboards, API delivery) with AI in the middle, running as isolated per-customer software. Every service page should say: *"We built and run Caseproof; we can build the same kind of system for your process."*

### 2a. Portfolio and brand architecture

The company brand is the umbrella. Today there is one product and three service lines. The homepage leads with the services (they apply to every industry) and features the product as a flagship and proof point, so the site does not read as healthcare-only.

**Recommendation: all products live on the main domain as subfolders** (`/products/<product>/`), not on separate domains or subdomains. Backlinks and authority earned by any product then lift every product and service page. Use a separate domain only if a product has a different brand, a separate sales team and its own marketing budget.

| Product | Industry / buyer | Status | Brief |
|---|---|---|---|
| Caseproof: medical document digitisation | Insurers, TPAs, diagnostic networks, health platforms | Named; page copy drafted | `docs/content/caseproof-product-page.md` |

Future products are added later using `docs/content/product-brief-template.md`. The site structure already allows for this, so nothing has to be rebuilt.

**How each future product is handled (same playbook every time):**
1. Its own product page plus security/integrations/pricing sub-pages where relevant
2. Its own keyword cluster (§5) and 2–4 problem-led solution pages
3. An industry page for its buyer, which also links to relevant services
4. Its own pilot or demo offer and a case study
5. Leads tagged by product in the CRM so each product's pipeline is measured separately

**Products hub at launch:** with a single product, `/products/` can redirect to the product page (or show it as the single card). It becomes a real hub when the second product arrives.

### Product differentiators (from the product brief)
- **Built for insurance medical documents**: MER forms, blood and lab panels, ECGs and TMTs, including handwritten fields and mixed-quality scans.
- **Human-verified, not just AI**: annotators and reviewers check every report side by side with the source before it is finalised. Most OCR competitors stop at extraction; this is the main wedge.
- **Standardised output**: test names, units and values mapped to the customer's catalogue and reference ranges, including calculated fields.
- **Isolated environment per customer**: dedicated database, storage and pipeline. This matters to insurers' security and vendor-risk reviews.
- **Operations tooling**: case assignment, live dashboards, audit trail, processing monitor, per-customer configuration.

### Differentiators to stress for India
- **Built for Indian documents**: pre-policy medical check-up (PPMC) reports from many different diagnostic centres, each with its own MER and lab report layout.
- **Compliance-ready**: Digital Personal Data Protection (DPDP) Act 2023 and Indian data residency (hosting in Mumbai/Hyderabad regions). Insurers will also ask about IRDAI outsourcing and information-security expectations; prepare answers, but only claim what is verified.
- **INR pricing and SME-friendly engagement**: fixed-price pilots, GST invoicing, monthly plans.
- **Fast pilots**: e.g. "a working proof of concept in 2–4 weeks" (confirm what we can actually commit to).

---

## 3. Target audiences (India)

| Segment | Who | Pain | Entry offer |
|---------|-----|------|-------------|
| **Life and health insurers** (primary) | Heads of underwriting, medical underwriting, ops, CIO/CISO | PPMC/MER reports keyed in by hand, slow underwriting turnaround, inconsistent data | Sample-case pilot, product demo |
| **TPAs** (primary) | Ops heads, medical teams, IT | High volumes of medical documents for claims and health checks, tight SLAs | Pilot on a real batch, API integration |
| **Diagnostic networks serving insurers** | Insurance desk heads, ops managers | Converting reports into each insurer's format and catalogue | Demo, per-report pricing |
| **Digital health platforms** | Product and engineering teams | Turning uploaded reports into structured health records | Intake API and webhook integration |
| **Existing product customers** (services upsell) | Ops and IT heads at insurers/TPAs | Other manual back-office processes (claims, onboarding, approvals) | Workflow automation discovery workshop |
| **SMEs and mid-market** (manufacturing, logistics, finance, retail) → *workflow automation* | Founders, ops heads | Manual, Excel-heavy processes, approvals over email/WhatsApp | Process audit, fixed-price first workflow |
| **Enterprises** → *AI consulting* | CTOs, innovation and ops heads | Want AI in production, not just experiments | AI use-case workshop, paid PoC |
| **Startups and product companies** → *software consulting* | Founders, CTOs | Need to build or scale a platform without a large in-house team | Architecture review, MVP build, dedicated team |

---

## 4. Site architecture (information architecture and URLs)

Keep URLs short, lowercase and keyword-bearing. Each service or product gets its own page; no "everything on one page".

```
/                                   Home
/services/                          Services hub
  /services/workflow-automation/                     pillar 1: custom workflow automation
    /services/document-processing-automation/        (closest to the product; easiest proof)
    /services/approval-and-review-workflows/          human-in-the-loop, maker-checker
    /services/system-integration/                     APIs, webhooks, ERP/CRM connections
  /services/ai-consulting/                           pillar 2: AI consulting and development
    /services/document-ai-ocr/
    /services/computer-vision/
    /services/generative-ai-development/              LLM apps, RAG, assistants
    /services/machine-learning-development/
  /services/software-consulting/                     pillar 3: software consulting and development
    /services/custom-software-development/
    /services/saas-platform-development/
    /services/cloud-architecture/
    /services/legacy-modernisation/
  Launch with the 3 pillar pages + 2–3 sub-pages that have the strongest proof; add the rest as content capacity allows.
/products/                          Products hub
                                    lists every product, filterable by industry
  /products/caseproof/                        medical document digitisation (copy: docs/content/caseproof-product-page.md)
    /products/caseproof/security/
    /products/caseproof/integrations/
    /products/caseproof/pricing/              or "request pricing"
  /products/[future-product]/                 added later, same pattern
/industries/                        one page per industry we sell into; each lists that industry's products + services
  /industries/health-insurance/
  /industries/life-insurance/
  /industries/tpa/
  /industries/diagnostic-networks/
  /industries/digital-health/
  /industries/[industry of product 2]/
  /industries/[industry of product 3]/
  /industries/manufacturing/  /industries/bfsi/  /industries/logistics/   (only if we have products or case studies there)
/solutions/                         problem-led pages (high-intent SEO)
  /solutions/mer-digitisation/                  medical examination reports
  /solutions/medical-underwriting-automation/
  /solutions/lab-report-data-extraction/
  /solutions/ecg-tmt-report-digitisation/
  /solutions/insurance-medical-document-processing/
  /solutions/invoice-processing-automation/
  /solutions/kyc-document-extraction/
/case-studies/                      + /case-studies/[slug]/
/blog/                              + /blog/[slug]/   (content hub, see §6)
/resources/                         guides, whitepapers, ROI calculator, checklists
/locations/                         only cities with a real presence or real clients (see §7)
/about/  /team/  /careers/  /contact/
/free-demo/  /book-consultation/    dedicated conversion landing pages
/privacy-policy/  /terms/  /dpdp-compliance/  /security/
```

### Page template essentials
Every service, product and solution page should include:
1. An H1 containing the primary keyword plus "India" where it fits naturally
2. A problem → outcome hero, with a CTA above the fold (consultation + WhatsApp)
3. "How it works" (3–5 steps)
4. Use cases or industries
5. Proof: a case study, metrics and client logos (with permission)
6. Tech stack and integrations
7. Engagement models and indicative INR pricing (where possible)
8. An FAQ section (written to win People Also Ask results, with FAQ schema)
9. Related services and products (internal links)
10. A final CTA and a short form (name, company, phone, requirement)

---

## 5. Keyword strategy (India)

Validate volumes and difficulty with Google Keyword Planner (location: India), Ahrefs/Semrush and Search Console once live. The clusters below are the starting hypothesis.

### Product clusters (A1, A2, …): one cluster per product
Every product gets its own cluster built the same way: product-category terms, problem/job-to-be-done terms, document or data-type terms, and "[category] software India" terms. Clusters for other products are added as their briefs come in.

### Cluster A1: Insurance medical document digitisation (Caseproof)
- branded: caseproof, caseproof demo, caseproof pricing (track branded search growth as a KPI)
Low volume but very high intent and low competition. A few hundred searches a month from the right underwriting or TPA buyers is worth more than thousands of generic visits. Use both spellings (digitisation/digitization) across pages, since Indian searchers use both.
- medical report digitisation / digitization, medical document digitisation for insurance
- MER digitisation, medical examination report data extraction
- PPMC report digitisation, pre-policy medical check-up automation
- medical underwriting automation India, underwriting data extraction
- lab report data extraction, blood test report to Excel / structured data
- ECG report digitisation, TMT report data extraction
- TPA document processing, insurance medical records processing
- human-in-the-loop document processing, intelligent document processing for insurance
- medical OCR API India, medical report OCR software

The three service clusters below are competitive at the head term ("AI development company India"). Win first on long-tail and industry-specific variants, where the product gives us proof (documents, insurance, healthcare, human review).

### Cluster B: Custom workflow automation
- custom workflow automation services India, workflow automation company India
- business process automation services India
- document processing automation, document workflow automation
- human-in-the-loop workflow, maker-checker / approval workflow software
- custom workflow software development, workflow management system development
- insurance workflow automation, claims workflow automation, back-office automation India

### Cluster C: AI consulting and development
- AI consulting services India, AI development company India
- document AI / intelligent document processing services, OCR development company India
- computer vision development India, machine learning development services India
- generative AI development company India, LLM application development, RAG development
- AI for insurance India, AI for healthcare India
- "AI proof of concept" services, AI strategy consulting

### Cluster D: Software consulting and development
- software consulting services India, custom software development company India
- SaaS development company India, multi-tenant SaaS architecture
- API development and integration services, cloud architecture consulting
- legacy application modernisation India
- city modifiers (Bengaluru, Hyderabad, Pune, Mumbai, Delhi NCR, Chennai, Ahmedabad), only where we have a presence

### Cluster E: Informational (top of funnel, blog)
- "what is a medical examination report (MER) in insurance"
- "pre-policy medical check-up (PPMC): process and turnaround"
- "how insurers can speed up medical underwriting"
- "AI vs human review for medical data extraction: accuracy and risk"
- "DPDP Act: what insurers and TPAs must ask a document-processing vendor"
- "OCR vs intelligent document processing"
- "cost of AI development in India"
- "RPA vs AI automation: which one for SMEs"

**Mapping rule:** one primary keyword cluster per URL. Keep a keyword → URL map in a sheet so pages do not compete with each other.

---

## 6. Content plan

### Pillar → cluster model
| Pillar page (long, evergreen) | Supporting articles (examples) |
|---|---|
| *Medical document digitisation for insurers and TPAs in India: the complete guide* | MER and PPMC data extraction; why human review matters for underwriting data; mapping lab values to a test catalogue and reference ranges; ECG/TMT report digitisation; DPDP checklist for insurers' document vendors; build vs buy for underwriting data |
| *AI for Indian businesses: a practical guide* | AI use cases by industry; cost of AI projects in India; build vs buy; how to run an AI PoC; when AI needs a human reviewer |
| *Custom workflow automation: a guide for Indian businesses* | Off-the-shelf vs custom workflow software; RPA vs AI vs custom workflows; designing human-in-the-loop review; audit trails and compliance; cost of building workflow software in India |
| *Custom software development in India: a buyer's guide* | Fixed-price vs time-and-materials; how to scope an MVP; single-tenant vs multi-tenant SaaS; choosing a development partner; what to ask about security |
| *Intelligent document processing (IDP) explained* | OCR vs IDP; KYC extraction; insurance claims automation; multilingual OCR for Indian languages |

### Cadence
- **Months 1–3:** 2 articles per week (prioritise the product clusters with publishable proof, plus matching informational topics), plus 2 case studies
- **Months 4–12:** 1–2 articles per week, 1 case study per month, quarterly refresh of top pages

### High-value assets (lead magnets and link magnets)
1. **Sample-case pilot**: "Send us 10–50 de-identified cases and get structured output, a QC report and turnaround figures." Run under NDA, not as a public upload tool. Insurers will not drop real medical data into a website form, and a public upload of health data creates DPDP risk. A recorded product walkthrough (2–3 min video of the QC workspace) is the public-facing equivalent.
2. **ROI calculator**: "What does manual MER and lab-report keying cost your underwriting team?" (cases per month × minutes per case × cost per hour vs. turnaround with Caseproof)
3. **Vendor security checklist for medical document processing** (PDF, gated; aimed at insurer CISOs and procurement)
4. **DPDP compliance guide for insurers and TPAs handling medical reports** (PDF, gated)
5. **Annual report**: e.g. "Underwriting medicals in India: turnaround and data-quality benchmarks", built from our own anonymized data. Good for PR and backlinks.

### E-E-A-T (trust signals Google weighs heavily for health topics)
- Named authors with bios and LinkedIn profiles; credentials for medical/technical reviewers
- "Reviewed by" for healthcare content (ideally a doctor, pathologist or medical underwriter advisor)
- Clear company details: registered address, CIN, GSTIN, contact phone
- Real case studies with numbers; no stock-photo "clients"

---

## 7. Local and India-specific SEO

- **Google Business Profile** for each real office. Keep categories, services, photos and posts current, and gather reviews from clients.
- **City pages** only where we have an office, staff or clients. Each one needs unique content (local clients, local case study, team). Avoid thin "AI company in [every city]" doorway pages, because Google penalizes them.
- **NAP consistency** (name, address, phone) across the site, GBP, Justdial, IndiaMART, Clutch, GoodFirms, LinkedIn and Crunchbase.
- **Indian directories and listings:** Clutch, GoodFirms, DesignRush, IndiaMART (for products), Justdial, NASSCOM member listing (if member), Startup India / DPIIT (if recognized), insurtech directories and accelerator listings.
- **Language:** start with English (`en-IN`). Insurer and TPA buyers search in English, so the product does not need other languages at launch. Add Hindi or regional pages (with `hreflang`) only for service segments where demand shows up in Search Console.
- **Currency and trust:** INR pricing, GST-compliant invoicing, Indian phone number, UPI/Razorpay for any self-serve plans.

---

## 8. Technical SEO and stack

### Recommended stack
| Layer | Recommendation | Why |
|---|---|---|
| Framework | **Next.js (App Router, static/ISR)** or **Astro** | Fast static pages, good SEO control, React for the interactive demo/calculator |
| Content | MDX in repo (start) → headless CMS (Sanity/Strapi/Payload) when non-devs publish | Low cost to start, scales later |
| Styling | Tailwind CSS | Speed of build, small CSS |
| Hosting | Vercel or Cloudflare Pages (with Mumbai edge); product APIs on AWS/GCP/Azure India region | Low latency in India; data residency for health data |
| Forms/CRM | HubSpot free / Zoho CRM (popular in India) | Lead routing and follow-up |
| Analytics | GA4 + Google Search Console + Microsoft Clarity | Traffic, queries, behaviour |
| Chat | WhatsApp Business (click-to-chat) | Default channel for Indian B2B buyers |

### Technical SEO checklist
- [ ] Core Web Vitals passing on **mobile over 4G** (LCP < 2.5s, INP < 200ms, CLS < 0.1). Most Indian traffic is mobile.
- [ ] Server-rendered/static HTML for all content pages
- [ ] `sitemap.xml`, `robots.txt`, canonical tags, clean 301s
- [ ] Structured data: `Organization`, `LocalBusiness`, `Service`, `Product`/`SoftwareApplication`, `FAQPage`, `BreadcrumbList`, `Article`, `Review` (only genuine reviews)
- [ ] Unique title tags and meta descriptions, following the pattern `Primary Keyword in India | Brand`
- [ ] Image optimization (WebP/AVIF, lazy-loading, descriptive alt text)
- [ ] `hreflang` when Hindi or other languages launch
- [ ] Open Graph and Twitter cards for LinkedIn/WhatsApp sharing
- [ ] Internal linking: services ↔ industries ↔ case studies ↔ blog
- [ ] HTTPS, security headers, cookie/consent banner (DPDP)
- [ ] 404 monitoring, broken-link checks in CI

---

## 9. Conversion design

- **Sticky CTA bar on mobile:** Call · WhatsApp · Book demo
- **Short forms:** name, work email, phone, company, requirement (dropdown). Ask for more on the follow-up call.
- **Separate CTAs per intent:** product pages → "Try free sample / Book demo"; service pages → "Free 30-min consultation"
- **Social proof near CTAs:** client logos, accuracy metrics (e.g. "X% field-level accuracy on lab reports", only figures we can substantiate), testimonials
- **Lead routing:** product leads → product sales; service leads → consulting. Auto-reply on WhatsApp and email within minutes.
- **Retargeting** (optional later): LinkedIn Insight Tag, Google Ads remarketing

---

## 10. Off-page SEO and authority

1. **Listings and reviews:** Clutch/GoodFirms profiles with 5–10 client reviews in the first quarter
2. **Insurance and health ecosystem:** guest articles in Indian insurance and health-tech publications (e.g. ETHealthworld, ET BFSI, Insurance Times); talks at insurtech and underwriting events
3. **Tech ecosystem:** open-source a small useful tool (e.g. a lab test-name normaliser or a units/reference-range mapping library). Engineers link to tools, not to service pages.
4. **PR from data:** publish the annual underwriting-medicals benchmark report
5. **Partnerships:** diagnostic networks that run insurers' medicals, core insurance / policy-admin system vendors, cloud partner directories (AWS/Azure/GCP)
6. **Founder-led LinkedIn content:** the main B2B discovery channel in India. Repurpose every blog post.

---

## 11. Phased roadmap

| Phase | Timeline | Deliverables |
|---|---|---|
| **0. Foundations** | Weeks 1–2 | Finalize brand name and positioning, keyword research and keyword→URL map, sitemap, wireframes, collect case studies, metrics and logos, GBP setup, analytics/Search Console |
| **1. MVP site launch** | Weeks 3–6 | Home, About, Contact, 3 service pillar pages (workflow automation, AI consulting, software consulting) + 2–3 sub-pages, Caseproof product page + security page, book-a-demo and book-a-consultation pages, 2 industry pages (Health/Life Insurance, TPAs), 2 case studies, legal pages including DPDP/Privacy, schema, sitemap, CWV-optimized |
| **2. Content and lead engine** | Months 2–3 | Blog with 2 posts per week, first pillar page (insurance medical document digitisation), solution pages (MER digitisation, underwriting automation, lab report extraction, ECG/TMT), ROI calculator, gated vendor-security checklist, product walkthrough video, Clutch/GoodFirms listings |
| **3. Product-led growth** | Months 3–5 | Sample-case pilot programme page, integrations/API pages, remaining service sub-pages, 2nd and 3rd pillar guides (custom workflow automation, AI for Indian businesses), first non-insurance service case study |
| **4. Expansion** | Months 6–12 | New products added via the brief template, industry pages beyond insurance as service clients come in, regional-language pages only if buyers need them (insurer buyers mostly search in English), city pages (only where real), annual data report, open-source tool, CMS migration if needed, CRO testing on top landing pages |

---

## 12. KPIs and reporting

| Metric | Tool | Review |
|---|---|---|
| Organic clicks and impressions (India), by cluster | Search Console | Weekly |
| Rankings for priority keywords | Ahrefs/Semrush or a cheaper tracker | Weekly |
| Leads by source (form, WhatsApp, call) and by service/product | GA4 + CRM | Weekly |
| Demo requests → sample-case pilots → contracts | CRM | Monthly |
| Core Web Vitals (field data) | Search Console / CrUX | Monthly |
| Referring domains (Indian and healthcare) | Ahrefs/Semrush | Monthly |

**Expectation setting:** SEO typically takes 3–6 months to show meaningful traction for new domains. The product cluster (A) should move first. Broad terms like "AI development company India" are long-term targets.

---

## 13. Open questions (need answers before Phase 1)

1. **Brand:** What is the final company/brand name and domain? (Repo is `imaxineltd/website`. Is the brand "Imaxine"?)
1a. **Caseproof name checks (before launch):** IP India trademark search in classes 9 and 42, a Google search for clashing software names, and securing the name on the main site (`/products/caseproof/`) plus a defensive domain if available (e.g. `caseproof.in` or `caseproof.ai`) and LinkedIn/X handles.
2. **Services proof:** Beyond Caseproof, which past workflow, AI or software projects can we show (even anonymised), and in which industries?
3. **Proof:** Which clients, metrics and case studies can we publish (with permission)? The results block needs real figures for % reduction in manual entry, turnaround hours and reports per month.
4. **Compliance claims:** Is on-premise / private-cloud deployment actually offered? Do we have ISO 27001/SOC 2? Where is data hosted (India region)? What is our position on DPDP and insurers' IRDAI outsourcing requirements?
5. **Accuracy and SLA:** Do we commit to field-level accuracy after QC, and to a turnaround SLA? These are what underwriting heads will ask first.
6. **Pricing:** Can we publish indicative INR pricing for the product and pilots?
7. **Offices/presence:** Which cities have offices or staff (for GBP and city pages)?
8. **Team for content:** Who writes and reviews (especially medical review)? What is the in-house vs agency budget?
9. **Stack preference:** Any constraint on Next.js vs WordPress vs other? (Next.js recommended if devs maintain it; WordPress if marketing must self-edit from day one.)
