// Caseproof product content. Source: docs/content/caseproof-product-page.md
// Lead angle: physical (paper, handwritten) MER forms used by Indian life and health insurers.

export const caseproof = {
  name: "Caseproof",
  descriptor: "Medical document digitisation for insurers and TPAs",
  title: "Handwritten MER Digitisation for Insurers & TPAs | Caseproof",
  description:
    "Turn physical, handwritten MER forms, lab reports, ECGs and TMTs into verified, structured data in hours. AI extraction plus human QC for Indian insurers and TPAs.",
  h1: "Digitise handwritten MER forms in hours, not days",
  intro:
    "Caseproof reads scanned paper MERs, lab reports, ECGs and TMTs, then reviewers verify every field before it reaches underwriting.",
  documents: [
    "Physical MER forms",
    "Handwritten fields",
    "Blood and lab panels",
    "ECG reports",
    "TMT reports",
    "Mixed-quality scans",
  ],
  features: [
    {
      title: "Built for paper MER forms",
      body: "Reads physical medical examination reports filled in by hand at diagnostic centres, including ticks, crossed-out answers and examiner notes.",
    },
    {
      title: "People check every report",
      body: "Annotators and reviewers verify AI output side by side with the original scan before anything is finalised.",
    },
    {
      title: "Standardised output",
      body: "Test names, units and values mapped to your catalogue and reference ranges, including calculated fields.",
    },
    {
      title: "Delivered your way",
      body: "Finished cases as PDF reports, Excel exports, or pushed automatically to your API or webhook.",
    },
    {
      title: "Your data stays yours",
      body: "Each customer runs on a dedicated, isolated environment with its own database, storage and processing pipeline.",
    },
  ],
  steps: [
    {
      title: "Intake",
      body: "Cases arrive through a secure intake API, or your team uploads scanned MERs and reports in bulk.",
    },
    {
      title: "Extract",
      body: "AI reads every page and document type, queued and processed in parallel.",
    },
    {
      title: "Verify",
      body: "Reviewers check each field against the scan in a side-by-side QC workspace, with full correction history.",
    },
    {
      title: "Deliver",
      body: "Structured data, branded PDF or Excel, or a direct push into your underwriting systems.",
    },
  ],
  operations: [
    { title: "Case assignment", body: "Assign cases to annotators and reviewers, track status and rebalance work in one place." },
    { title: "Live dashboards", body: "Daily volumes, turnaround times and team productivity at a glance." },
    { title: "Full audit trail", body: "A timeline of every action on every case: who did what, and when." },
    { title: "Processing monitor", body: "Failed or stuck documents surface automatically and can be re-queued in one click." },
    { title: "Configured per customer", body: "Test catalogues, reference ranges, report layouts, menus and roles set up for your workflow." },
  ],
  security: [
    "An isolated environment per customer, with no shared databases between clients",
    "Role-based access for administrators, annotators and reviewers",
    "Encrypted data transfer and secure API authentication",
    // TODO: confirm on-premise / private-cloud availability and hosting region before launch
    "Managed deployments, with private-cloud or on-premise options on request",
  ],
  audiences: [
    { title: "Life and health insurers", body: "Faster medical underwriting from paper MERs and pre-policy medical check-up reports." },
    { title: "Third-party administrators", body: "High-volume medical document processing for claims and health checks." },
    { title: "Diagnostic networks", body: "Deliver reports in each insurer's format and catalogue without re-keying." },
    { title: "Digital health platforms", body: "Turn uploaded reports into structured health records through an API." },
  ],
  faqs: [
    {
      q: "Can Caseproof read handwritten MER forms?",
      a: "Yes. It is built for physical MER forms filled in by hand, including ticks, written answers and examiner notes. Reviewers correct anything uncertain against the original scan before delivery.",
    },
    {
      q: "What is MER digitisation?",
      a: "MER digitisation converts a scanned medical examination report into structured data that underwriting systems can use directly, instead of staff keying in each answer and value by hand.",
    },
    {
      q: "How accurate is the extracted data?",
      a: "AI extracts every field, then trained reviewers check each report against the original before it is finalised. We measure accuracy on your own sample cases during a pilot.",
    },
    {
      q: "Can you map results to our test catalogue and reference ranges?",
      a: "Yes. Test names, units, reference ranges and calculated fields are configured for each customer.",
    },
    {
      q: "How do we receive the data?",
      a: "As structured data through your API or webhook, as Excel exports, or as branded PDF reports.",
    },
    {
      q: "Is our data shared with other customers?",
      a: "No. Each customer has a dedicated, isolated environment with its own database, storage and processing pipeline.",
    },
    {
      q: "Can we run a pilot?",
      a: "Yes. Share a batch of de-identified sample cases under NDA and we return structured output, a QC summary and turnaround figures.",
    },
  ],
};
