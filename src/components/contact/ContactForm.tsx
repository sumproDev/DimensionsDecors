"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const service = String(form.get("service") ?? "Interior design enquiry");
    const message = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`${service} from ${name}`);
    const body = encodeURIComponent(`${message}\n\nName: ${name}\nPhone: ${String(form.get("phone") ?? "")}\nEmail: ${String(form.get("email") ?? "")}`);
    setSent(true);
    window.location.href = `mailto:dimensionsdecor@gmail.com?subject=${subject}&body=${body}`;
  }

  const inputClass = "min-h-12 w-full border border-border bg-surface px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary/60 focus:border-gold";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" aria-label="Project enquiry form">
      <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-xs uppercase tracking-[0.12em] text-text-secondary">Name<input className={inputClass} name="name" required placeholder="Your name" /></label><label className="grid gap-2 text-xs uppercase tracking-[0.12em] text-text-secondary">Phone<input className={inputClass} name="phone" required type="tel" placeholder="+91" /></label></div>
      <label className="grid gap-2 text-xs uppercase tracking-[0.12em] text-text-secondary">Email<input className={inputClass} name="email" required type="email" placeholder="you@example.com" /></label>
      <label className="grid gap-2 text-xs uppercase tracking-[0.12em] text-text-secondary">Service<select className={inputClass} name="service" defaultValue="Residential Interior"><option>Residential Interior</option><option>Commercial Interior</option><option>Turnkey Project</option><option>Modular Furniture</option><option>Décor & Styling</option></select></label>
      <label className="grid gap-2 text-xs uppercase tracking-[0.12em] text-text-secondary">Tell us about your project<textarea className={`${inputClass} min-h-36 resize-y`} name="message" required placeholder="Location, approximate area and what you would like to create..." /></label>
      <button type="submit" className="min-h-12 border border-gold bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-background transition-colors hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">Send Enquiry</button>
      <p aria-live="polite" className="text-xs text-text-secondary">{sent ? "Your email app is opening with the enquiry details." : "We usually respond within one business day."}</p>
    </form>
  );
}
