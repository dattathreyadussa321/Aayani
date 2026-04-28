"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Phone, Mail, MapPin, MessageCircle, Send, Check } from "lucide-react";
import { SITE } from "@/data/nav";
import { FAQ } from "@/components/home/FAQ";
import { CONTACT_FAQS } from "@/data/faqs";
import { cn } from "@/lib/cn";

const HOME_TYPES = ["1 BHK", "2 BHK", "3 BHK", "4 BHK / Villa", "Office", "Other"];
const SERVICES_LIST = [
  "Full Home Interiors",
  "Modular Kitchen",
  "Wardrobes",
  "Architectural Plans",
  "3D Renders",
  "Office Interiors",
  "Renovation",
];
const BUDGETS = ["Below ₹4L", "₹4–8L", "₹8–15L", "₹15–25L", "₹25L+", "Not sure yet"];
const PREFER = ["WhatsApp", "Phone Call", "Email"];

function LeadForm() {
  const sp = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    home: sp.get("home") || "",
    service: sp.get("service") || "",
    budget: sp.get("budget") || "",
    message: "",
    prefer: "WhatsApp",
  });

  const update = <K extends keyof typeof form>(key: K, val: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [key]: val }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    // Build a WhatsApp message — works without a backend
    const msg = `Hi Aayani, I'd like to enquire about my home.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "—"}
City: ${form.city || "—"}
Home Type: ${form.home || "—"}
Service: ${form.service || "—"}
Budget: ${form.budget || "—"}
Preferred Contact: ${form.prefer}

Message:
${form.message || "—"}`;
    window.open(
      `${SITE.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-soft-white border border-subtle-border p-10 sm:p-14 text-center">
        <div className="w-14 h-14 rounded-full bg-terracotta text-ivory inline-flex items-center justify-center mb-5">
          <Check className="h-6 w-6" strokeWidth={1.8} />
        </div>
        <h3 className="font-serif text-3xl mb-3">Thank you — we'll be in touch.</h3>
        <p className="text-warm-grey leading-relaxed max-w-md mx-auto">
          A WhatsApp window has opened with your enquiry pre-filled. Send it
          across, and we'll reply within the same working day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-ghost mt-8"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-soft-white border border-subtle-border p-6 sm:p-10 space-y-6"
      noValidate
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          label="Name *"
          required
          value={form.name}
          onChange={(v) => update("name", v)}
          placeholder="Your full name"
        />
        <Input
          label="Phone *"
          required
          type="tel"
          value={form.phone}
          onChange={(v) => update("phone", v)}
          placeholder="+91 ..."
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          label="Email"
          type="email"
          value={form.email}
          onChange={(v) => update("email", v)}
          placeholder="optional@email.com"
        />
        <Input
          label="City"
          value={form.city}
          onChange={(v) => update("city", v)}
          placeholder="Hyderabad, Warangal..."
        />
      </div>

      <PillField
        label="Home Type"
        options={HOME_TYPES}
        value={form.home}
        onChange={(v) => update("home", v)}
      />
      <PillField
        label="Service Needed"
        options={SERVICES_LIST}
        value={form.service}
        onChange={(v) => update("service", v)}
      />
      <PillField
        label="Budget Range"
        options={BUDGETS}
        value={form.budget}
        onChange={(v) => update("budget", v)}
      />

      <div>
        <label className="text-[11px] uppercase tracking-[0.22em] text-warm-grey block mb-2">
          Tell us about your project
        </label>
        <textarea
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={4}
          placeholder="Eg. 3 BHK in Kondapur, possession in 6 weeks, looking for full home interiors..."
          className="w-full bg-ivory border border-subtle-border px-4 py-3 text-sm text-charcoal placeholder:text-warm-grey/60 focus:outline-none focus:border-charcoal transition-colors resize-none"
        />
      </div>

      <PillField
        label="Preferred Contact Method"
        options={PREFER}
        value={form.prefer}
        onChange={(v) => update("prefer", v)}
      />

      <div className="pt-4 border-t border-subtle-border flex flex-wrap items-center gap-3">
        <button type="submit" className="btn-primary">
          <Send className="h-4 w-4" strokeWidth={1.6} />
          Send Enquiry
        </button>
        <p className="text-xs text-warm-grey">
          We'll reply within the same working day.
        </p>
      </div>
    </form>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.22em] text-warm-grey block mb-2">
        {label}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-ivory border border-subtle-border px-4 py-3 text-sm text-charcoal placeholder:text-warm-grey/60 focus:outline-none focus:border-charcoal transition-colors"
      />
    </label>
  );
}

function PillField({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <span className="text-[11px] uppercase tracking-[0.22em] text-warm-grey block mb-3">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={cn(
                "px-4 py-2 text-sm border transition-all",
                active
                  ? "bg-charcoal text-ivory border-charcoal"
                  : "bg-ivory text-charcoal border-subtle-border hover:border-charcoal",
              )}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-16 bg-ivory">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-warm-grey mb-6">
                Start a conversation
              </p>
              <h1 className="font-serif text-display-xl leading-[1.02]">
                Tell us about your home —{" "}
                <em className="text-terracotta not-italic">
                  we'll take it from there.
                </em>
              </h1>
              <p className="mt-7 max-w-2xl text-warm-grey text-base sm:text-lg leading-relaxed">
                Share a few details below, or pick up the phone. The first
                consultation is free and there's no pressure to commit.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Form + Info */}
      <section className="relative z-10 pb-20 bg-ivory">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="h-96 bg-soft-white border border-subtle-border" />}>
                <LeadForm />
              </Suspense>
            </div>

            <aside className="lg:col-span-5 space-y-6">
              {/* Contact Info Card */}
              <div className="bg-charcoal text-ivory p-8 sm:p-10">
                <p className="text-[11px] uppercase tracking-[0.22em] text-ivory/60 mb-4">
                  Studio
                </p>
                <h3 className="font-serif text-2xl leading-tight mb-6">
                  We answer the phone.
                </h3>
                <ul className="space-y-5 text-sm">
                  <li>
                    <a
                      href={`tel:${SITE.phoneRaw}`}
                      className="flex items-start gap-3 hover:text-terracotta transition-colors"
                    >
                      <Phone className="h-4 w-4 mt-0.5 text-terracotta" strokeWidth={1.6} />
                      <span>
                        <span className="block text-[11px] uppercase tracking-[0.22em] text-ivory/55 mb-1">
                          Call
                        </span>
                        {SITE.phone}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="flex items-start gap-3 hover:text-terracotta transition-colors"
                    >
                      <Mail className="h-4 w-4 mt-0.5 text-terracotta shrink-0" strokeWidth={1.6} />
                      <span className="break-all">
                        <span className="block text-[11px] uppercase tracking-[0.22em] text-ivory/55 mb-1">
                          Email
                        </span>
                        {SITE.email}
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 text-terracotta shrink-0" strokeWidth={1.6} />
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.22em] text-ivory/55 mb-1">
                        Studio
                      </span>
                      {SITE.studioAddress}
                    </span>
                  </li>
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-soft-white border border-subtle-border p-8 hover:border-terracotta transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-warm-grey mb-2">
                      Faster?
                    </p>
                    <h3 className="font-serif text-2xl leading-tight">
                      Send us a WhatsApp
                    </h3>
                    <p className="text-warm-grey text-sm mt-3 leading-relaxed">
                      Photos, plot plans, voice notes — anything you'd like us
                      to see.
                    </p>
                  </div>
                  <span className="w-12 h-12 rounded-full bg-charcoal text-ivory flex items-center justify-center shrink-0 group-hover:bg-terracotta transition-colors">
                    <MessageCircle className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                </div>
              </a>

              {/* Service area */}
              <div className="bg-soft-white border border-subtle-border p-8">
                <p className="text-[11px] uppercase tracking-[0.22em] text-warm-grey mb-3">
                  Service Area
                </p>
                <h3 className="font-serif text-xl leading-tight mb-4">
                  Hyderabad and across Telangana.
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SITE.serviceAreas.map((a) => (
                    <span key={a} className="material-chip">
                      {a}
                    </span>
                  ))}
                </div>
                <p className="text-warm-grey text-sm mt-5 leading-relaxed">
                  For projects further away, we coordinate carefully — most
                  design and 3D work happens remotely.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <FAQ
        items={CONTACT_FAQS}
        eyebrow="Before You Write"
        title={
          <>
            A few quick{" "}
            <em className="text-terracotta not-italic">things to know.</em>
          </>
        }
        background="soft"
      />
    </>
  );
}
