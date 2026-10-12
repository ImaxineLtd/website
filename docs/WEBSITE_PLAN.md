# Website Plan: IT Consulting, Automation, AI/ML Services and Medical Report Digitization (India, SEO-led)

> Status: Draft v3 (multi-product portfolio) · Owner: TBD · Last updated: 2026-10-12
> Placeholders in `[brackets]` need input from the business.

---

## 1. Goals

| # | Goal | How we measure it (first 6–12 months) |
|---|------|---------------------------------------|
| 1 | Get qualified B2B leads from Indian organic search | Organic sessions from India, form/WhatsApp/call leads, lead-to-meeting rate |
| 2 | Sell each product in the portfolio to its own industry buyers (first documented product: [Product Name], medical document digitisation for insurers and TPAs) | Demo requests and pilots **per product**, contracts signed |
| 3 | Build authority in AI/ML and automation for Indian businesses | Rankings for target clusters, backlinks from Indian domains, branded search growth |
| 4 | Shorten the sales cycle | Pages per lead, case-study views before contact, time from first visit to demo |

**Primary conversion:** "Book a free consultation" / "Request a product demo".
**Secondary conversion:** WhatsApp chat, sample-case pilot request (under NDA), downloadable guides.

---

## 2. Positioning

**One-liner (draft):** *"AI, automation and IT consulting for Indian businesses, with production-ready products for healthcare document digitization."*

Two engines, one brand:

1. **Products (proof)**: a portfolio of AI products across several industries (see §2a). These show we ship working AI, not slide decks.
2. **Services (revenue breadth)**: IT consulting, process automation (RPA/workflow), AI/ML development, data engineering.

The products give the services credibility. Every service page links to a product case study, and every product page offers "custom build / integration" services.

### 2a. Portfolio and brand architecture

The company brand is the umbrella. The homepage and brand message must speak to **all** industries, not only healthcare; each product then speaks to its own buyer.

**Recommendation: all products live on the main domain as subfolders** (`/products/<product>/`), not on separate domains or subdomains. Backlinks and authority earned by any product then lift every product and service page. Use a separate domain only if a product has a different brand, a separate sales team and its own marketing budget.

| Product | Industry / buyer | Status | Brief |
|---|---|---|---|
| [Product Name]: medical document digitisation | Insurers, TPAs, diagnostic networks, health platforms | Brief received | `docs/content/product-page.md` |
| [Product 2] | [Industry] | Awaiting brief | Fill `docs/content/product-brief-template.md` |
| [Product 3] | [Industry] | Awaiting brief | Fill `docs/content/product-brief-template.md` |

**How each product is handled (same playbook every time):**
1. Its own product page plus security/integrations/pricing sub-pages where relevant
2. Its own keyword cluster (§5) and 2–4 problem-led solution pages
3. An industry page for its buyer, which also links to relevant services
4. Its own pilot or demo offer and a case study
5. Leads tagged by product in the CRM so each product's pipeline is measured separately

**Launch priority:** put products on the site in order of (a) proof we can publish (clients, numbers), (b) sales readiness, and (c) how winnable their keywords are. Products without proof yet still get a page at launch, but get SEO investment later.

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
| **SMEs and mid-market** (manufacturing, logistics, finance, retail) | Founders, ops heads | Manual processes, Excel/Tally-heavy workflows | Automation audit, quick-win automation |
| **Enterprises and startups** | CTOs, product heads | Need AI/ML talent and delivery capacity | AI strategy workshop, PoC, dedicated team |

---

## 4. Site architecture (information architecture and URLs)

Keep URLs short, lowercase and keyword-bearing. Each service or product gets its own page; no "everything on one page".

```
/                                   Home
/services/                          Services hub
  /services/it-consulting/
  /services/business-process-automation/
    /services/rpa-services/
    /services/document-automation/
  /services/ai-development/
    /services/generative-ai-llm-solutions/
    /services/chatbot-development/
  /services/machine-learning-development/
    /services/computer-vision/
    /services/predictive-analytics/
  /services/data-engineering/
  /services/cloud-devops/            (only if offered)
/products/                          Products hub
                                    lists every product, filterable by industry
  /products/[medical-doc-product]/            medical document digitisation (copy: docs/content/product-page.md)
    /products/[medical-doc-product]/security/
    /products/[medical-doc-product]/integrations/
    /products/[medical-doc-product]/pricing/  or "request pricing"
  /products/[product-2]/                      same sub-page pattern per product, as needed
  /products/[product-3]/
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

### Cluster A1: Insurance medical document digitisation ([Product Name])
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

### Cluster B: AI/ML services
Competitive, so target long-tail and location modifiers.
- AI development company in India, AI consulting services India
- machine learning development services India
- computer vision company India, OCR solution provider India
- generative AI development company India, LLM / RAG chatbot development
- AI for healthcare India, AI for manufacturing India

### Cluster C: Automation
- business process automation services India
- RPA services / RPA company India
- document automation, invoice processing automation
- workflow automation for SMEs, Tally / ERP automation
- WhatsApp automation for business

### Cluster D: IT consulting
- IT consulting services India, digital transformation consulting
- cloud migration consulting, IT strategy for SMEs
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
| *AI for Indian businesses: a practical guide* | AI use cases by industry; cost of AI projects in India; build vs buy; how to run an AI PoC |
| *Business process automation guide for Indian SMEs* | RPA vs AI; automating Tally/GST workflows; invoice processing; WhatsApp automation |
| *Intelligent document processing (IDP) explained* | OCR vs IDP; KYC extraction; insurance claims automation; multilingual OCR for Indian languages |

### Cadence
- **Months 1–3:** 2 articles per week (prioritise the product clusters with publishable proof, plus matching informational topics), plus 2 case studies
- **Months 4–12:** 1–2 articles per week, 1 case study per month, quarterly refresh of top pages

### High-value assets (lead magnets and link magnets)
1. **Sample-case pilot**: "Send us 10–50 de-identified cases and get structured output, a QC report and turnaround figures." Run under NDA, not as a public upload tool. Insurers will not drop real medical data into a website form, and a public upload of health data creates DPDP risk. A recorded product walkthrough (2–3 min video of the QC workspace) is the public-facing equivalent.
2. **ROI calculator**: "What does manual MER and lab-report keying cost your underwriting team?" (cases per month × minutes per case × cost per hour vs. turnaround with [Product Name])
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
| **1. MVP site launch** | Weeks 3–6 | Home, About, Contact, 5 core service pages, Products hub, a product page for **every** product (full depth for the 1–2 with the most proof, including the medical-document product's security page), book-a-demo page, one industry page per product's main industry, 2 case studies, legal pages including DPDP/Privacy, schema, sitemap, CWV-optimized |
| **2. Content and lead engine** | Months 2–3 | Blog with 2 posts per week, first pillar page (insurance medical document digitisation), solution pages (MER digitisation, underwriting automation, lab report extraction, ECG/TMT), ROI calculator, gated vendor-security checklist, product walkthrough video, Clutch/GoodFirms listings |
| **3. Product-led growth** | Months 3–5 | Sample-case pilot programme page, integrations/API pages, remaining service sub-pages, remaining industry pages, 2nd pillar (AI for Indian businesses) |
| **4. Expansion** | Months 6–12 | Regional-language pages only if buyers need them (insurer buyers mostly search in English), city pages (only where real), annual data report, open-source tool, CMS migration if needed, CRO testing on top landing pages |

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
2. **Product portfolio:** Names of all products, the industry each serves, and which are sellable now. One filled `docs/content/product-brief-template.md` per product.
3. **Proof:** Which clients, metrics and case studies can we publish (with permission)? The results block needs real figures for % reduction in manual entry, turnaround hours and reports per month.
4. **Compliance claims:** Is on-premise / private-cloud deployment actually offered? Do we have ISO 27001/SOC 2? Where is data hosted (India region)? What is our position on DPDP and insurers' IRDAI outsourcing requirements?
5. **Accuracy and SLA:** Do we commit to field-level accuracy after QC, and to a turnaround SLA? These are what underwriting heads will ask first.
6. **Pricing:** Can we publish indicative INR pricing for the product and pilots?
7. **Offices/presence:** Which cities have offices or staff (for GBP and city pages)?
8. **Team for content:** Who writes and reviews (especially medical review)? What is the in-house vs agency budget?
9. **Stack preference:** Any constraint on Next.js vs WordPress vs other? (Next.js recommended if devs maintain it; WordPress if marketing must self-edit from day one.)
