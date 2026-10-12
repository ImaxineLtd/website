export type Service = {
  slug: string;
  name: string;
  short: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  offerings: { title: string; body: string }[];
  examples: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "workflow-automation",
    name: "Custom workflow automation",
    short: "Software that moves each case from intake to review to delivery, with people in control.",
    title: "Custom Workflow Automation Services in India",
    description:
      "Custom workflow automation for Indian businesses: document processing, review and approval workflows, case assignment, dashboards and integrations.",
    h1: "Custom workflow automation for how your team actually works",
    intro: "We map your process and build software that moves each case from intake to review to delivery.",
    offerings: [
      {
        title: "Document processing automation",
        body: "Read documents, extract fields and route them for checking. The pattern behind Caseproof, applied to invoices, claims, KYC or forms.",
      },
      {
        title: "Review and approval workflows",
        body: "Maker-checker steps, side-by-side review, field-level corrections and a full history of who changed what.",
      },
      {
        title: "Case assignment and dashboards",
        body: "Assign work to people or teams, rebalance queues, and see volumes and turnaround as they happen.",
      },
      {
        title: "System integration",
        body: "Connect to your ERP, CRM, core systems or spreadsheets through APIs, webhooks and scheduled exports.",
      },
    ],
    examples: [
      "Insurance back office: onboarding documents collected, checked against a checklist and passed to underwriting, with missing items chased automatically.",
      "Finance operations: vendor invoices read, matched to purchase orders, and sent for approval when amounts or GST details do not match.",
      "Field teams: inspection or delivery forms captured on mobile, reviewed by a supervisor and exported to your reporting system.",
      "Customer requests: emails and WhatsApp messages sorted, assigned to the right person and tracked to closure with turnaround reports.",
    ],
    faqs: [
      {
        q: "How is custom workflow automation different from RPA?",
        a: "RPA scripts copy clicks on existing screens and break when those screens change. A custom workflow is software built around your process, with its own data, review steps and audit trail. It can still use RPA or AI where they help.",
      },
      {
        q: "Do we have to replace our existing systems?",
        a: "No. The workflow usually sits between your existing systems, pulling work in and pushing results out through APIs, files or exports.",
      },
      {
        q: "How long does a first workflow take?",
        a: "It depends on the process. We start with one workflow, scope it in a short discovery, and agree the timeline and price before building.",
      },
    ],
  },
  {
    slug: "ai-consulting",
    name: "AI consulting and development",
    short: "Find where AI pays off, prove it on your data, and run it in production.",
    title: "AI Consulting & Development Company in India",
    description:
      "AI consulting and development in India: document AI and OCR, computer vision, generative AI and LLM applications, and machine learning models in production.",
    h1: "AI consulting and development, from use case to production",
    intro: "We find where AI pays off in your business, prove it on your data, and run it in production.",
    offerings: [
      {
        title: "Document AI and OCR",
        body: "Structured data from scans, photos and PDFs, including handwriting and poor-quality images.",
      },
      {
        title: "Computer vision",
        body: "Models that inspect, classify or count from images and video, trained on your own data.",
      },
      {
        title: "Generative AI applications",
        body: "Assistants, search over your documents and drafting tools, with guardrails and human review where it matters.",
      },
      {
        title: "Machine learning models",
        body: "Forecasting, scoring and classification models, deployed and monitored as part of your systems.",
      },
    ],
    examples: [
      "Reading handwritten medical forms for insurers, the core of Caseproof, with reviewers checking every field.",
      "Classifying incoming documents such as ID proofs, bank statements and bills, and extracting key fields for KYC or claims.",
      "An internal assistant that answers staff questions from your policies and manuals, with the source shown for every answer.",
      "Photo checks in manufacturing or logistics that flag damaged goods or missing labels for a person to confirm.",
    ],
    faqs: [
      {
        q: "Where should we start with AI?",
        a: "With one process where people spend time reading, checking or typing. We run a short use-case workshop, pick the case with the clearest return, and prove it on your data first.",
      },
      {
        q: "How accurate will the AI be?",
        a: "That depends on your documents and data. We measure accuracy on your own samples during the proof of concept, and add human review where errors are costly.",
      },
      {
        q: "Do you only work in insurance and healthcare?",
        a: "No. Caseproof is our insurance product, but the same methods apply to any business that handles documents, images or repetitive decisions.",
      },
    ],
  },
  {
    slug: "software-consulting",
    name: "Software consulting and development",
    short: "Platforms, APIs and internal tools, built by the team that runs Caseproof in production.",
    title: "Software Consulting & Development in India",
    description:
      "Software consulting and custom software development in India: web platforms, SaaS, APIs and integrations, cloud architecture and legacy modernisation.",
    h1: "Software consulting and custom development for growing businesses",
    intro: "Platforms, APIs and internal tools designed, built and maintained by the team that runs Caseproof.",
    offerings: [
      {
        title: "Custom software development",
        body: "Web platforms and internal tools built around your process, from first version to production.",
      },
      {
        title: "SaaS platform development",
        body: "Isolated customer environments, role-based access and an architecture that grows with each new client.",
      },
      {
        title: "Cloud architecture",
        body: "Hosting design, security, cost control and deployment pipelines on AWS, Azure or Google Cloud.",
      },
      {
        title: "Legacy modernisation",
        body: "Move ageing applications to maintainable systems in stages, without stopping the business.",
      },
    ],
    examples: [
      "A customer portal where clients upload documents, track the status of their case and download reports.",
      "An internal operations platform that replaces spreadsheets passed around over email.",
      "A multi-tenant SaaS product with a separate environment per customer, the architecture behind Caseproof.",
      "Scheduled integrations that keep an ERP, CRM and accounting system in sync.",
    ],
    faqs: [
      {
        q: "Can you take over an existing codebase?",
        a: "Yes. We start with a code and architecture review, then agree what to fix, keep or rebuild.",
      },
      {
        q: "How do you price projects?",
        a: "We agree the model per project: a fixed scope for well-defined phases, or a monthly team for ongoing development.",
      },
      {
        q: "Which technologies do you use?",
        a: "We choose per project, based on your existing systems, your team, and who will maintain the software after launch.",
      },
    ],
  },
];

export const process = [
  { title: "Map", body: "We study the process, the data and the people involved, and agree what success looks like." },
  { title: "Prototype", body: "A working version on your real data, so decisions rest on results, not slides." },
  { title: "Build", body: "Production software with access control, audit history and integrations." },
  { title: "Run", body: "We deploy, monitor and improve it, the same way we run Caseproof." },
];

export function getService(slug: string) {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
}
