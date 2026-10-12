"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { CheckCircle, SpinnerGap } from "@phosphor-icons/react";
import { site } from "@/lib/site";

const interests = [
  { value: "caseproof", label: "Caseproof demo" },
  { value: "workflow-automation", label: "Workflow automation" },
  { value: "ai-consulting", label: "AI consulting and development" },
  { value: "software-consulting", label: "Software consulting and development" },
  { value: "other", label: "Something else" },
];

const volumes = ["Under 1,000", "1,000 to 10,000", "More than 10,000"];

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const field =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

function validate(data: Record<string, string>): Errors {
  const e: Errors = {};
  if (!data.name?.trim()) e.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(data.email ?? "")) e.email = "Please enter a valid work email.";
  if (data.phone && !/^[+\d][\d\s-]{7,}$/.test(data.phone)) e.phone = "Please enter a valid phone number.";
  if (!data.message?.trim()) e.message = "Tell us briefly what you need.";
  return e;
}

export function ContactForm() {
  const params = useSearchParams();
  const initial = interests.some((i) => i.value === params.get("interest")) ? params.get("interest")! : "workflow-automation";
  const [interest, setInterest] = useState(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) return;

    if (!site.formEndpoint) {
      const body = Object.entries(data)
        .filter(([, v]) => v)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Enquiry: ${data.interest}`)}&body=${encodeURIComponent(body)}`;
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl bg-accent-soft p-8">
        <CheckCircle size={32} weight="fill" className="text-accent" aria-hidden />
        <h2 className="mt-4 text-2xl font-semibold">Thank you</h2>
        <p className="mt-2 leading-relaxed text-muted">
          {site.formEndpoint
            ? "We have your message and will be in touch shortly."
            : "Your email app should open with your message ready to send."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" error={errors.name} required />
        <Field label="Work email" name="email" type="email" autoComplete="email" error={errors.email} required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" error={errors.phone} helper="Optional. We can reply on WhatsApp." />
        <Field label="Company" name="company" autoComplete="organization" />
      </div>

      <div className="grid gap-2">
        <label htmlFor="interest" className="text-sm font-medium text-ink">
          What do you need?
        </label>
        <select id="interest" name="interest" value={interest} onChange={(e) => setInterest(e.target.value)} className={field}>
          {interests.map((i) => (
            <option key={i.value} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
      </div>

      {interest === "caseproof" && (
        <div className="grid gap-2">
          <label htmlFor="volume" className="text-sm font-medium text-ink">
            Medical reports per month
          </label>
          <select id="volume" name="volume" className={field} defaultValue="">
            <option value="" disabled>
              Choose a range
            </option>
            {volumes.map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </div>
      )}

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={field}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-red-700 dark:text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-xl border border-red-300 p-4 text-sm text-red-700 dark:border-red-900 dark:text-red-400">
          Something went wrong sending your message. Please email us at {site.email}.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-[transform,background-color] hover:bg-accent-hover active:scale-[0.98] disabled:opacity-70"
        >
          {status === "submitting" && <SpinnerGap size={16} className="animate-spin" aria-hidden />}
          Send message
        </button>
        <p className="text-sm text-muted">We use your details only to reply to this enquiry.</p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  error,
  helper,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  error?: string;
  helper?: string;
  required?: boolean;
}) {
  const describedBy = [helper && `${name}-help`, error && `${name}-error`].filter(Boolean).join(" ") || undefined;
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
        {required && <span className="text-muted"> (required)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        className={field}
      />
      {helper && (
        <p id={`${name}-help`} className="text-sm text-muted">
          {helper}
        </p>
      )}
      {error && (
        <p id={`${name}-error`} className="text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
