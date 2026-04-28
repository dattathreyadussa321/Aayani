"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE } from "@/data/nav";
import { cn } from "@/lib/cn";

const HOME_TYPES = ["1 BHK", "2 BHK", "3 BHK", "4 BHK / Villa", "Office"];
const SERVICES_LIST = [
  "Full Home Interiors",
  "Modular Kitchen",
  "Wardrobes",
  "Architectural Plans",
  "3D Renders",
  "Renovation",
];
const BUDGETS = ["Below ₹4L", "₹4–8L", "₹8–15L", "₹15–25L", "₹25L+"];

export function CostEstimatorTeaser() {
  const [home, setHome] = useState<string | null>(null);
  const [service, setService] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);

  const ready = home && service && budget;

  const summary = useMemo(() => {
    if (!ready) return null;
    return `Hi Aayani, I'm planning ${service?.toLowerCase()} for a ${home} home with a budget of ${budget}. Could you share a rough estimate?`;
  }, [ready, service, home, budget]);

  const waLink = ready
    ? `${SITE.whatsapp}?text=${encodeURIComponent(summary || "")}`
    : SITE.whatsapp;

  return (
    <section className="relative z-10 section-y bg-ivory">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="A Quiet Estimator"
              title={
                <>
                  A rough number,{" "}
                  <em className="text-terracotta not-italic">not a fake quote.</em>
                </>
              }
              description="We won't pretend a website can quote your home accurately. But we can share a clear range — based on what you tell us — and pick up the conversation from there."
            />

            <div className="mt-8 space-y-4 text-sm text-warm-grey leading-relaxed">
              <p className="flex gap-3">
                <span className="text-terracotta font-serif">·</span>
                Pick a home type, service, and budget comfort.
              </p>
              <p className="flex gap-3">
                <span className="text-terracotta font-serif">·</span>
                We open WhatsApp pre-filled — share photos, plot plans, anything.
              </p>
              <p className="flex gap-3">
                <span className="text-terracotta font-serif">·</span>
                You hear back within the same working day with a clear range.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-soft-white border border-subtle-border p-6 sm:p-10 shadow-[0_30px_80px_-40px_rgba(23,32,42,0.25)]">
              {/* Home type */}
              <Field
                label="Home Type"
                step="01"
                options={HOME_TYPES}
                value={home}
                onChange={setHome}
              />
              {/* Service */}
              <Field
                label="Service Needed"
                step="02"
                options={SERVICES_LIST}
                value={service}
                onChange={setService}
              />
              {/* Budget */}
              <Field
                label="Budget Comfort"
                step="03"
                options={BUDGETS}
                value={budget}
                onChange={setBudget}
                last
              />

              {/* CTAs */}
              <div className="mt-8 pt-8 border-t border-subtle-border flex flex-wrap items-center gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!ready}
                  className={cn(
                    "btn-primary",
                    !ready && "opacity-50 pointer-events-none",
                  )}
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
                  WhatsApp My Brief
                </a>
                <Link
                  href={`/contact${ready ? `?home=${encodeURIComponent(home!)}&service=${encodeURIComponent(service!)}&budget=${encodeURIComponent(budget!)}` : ""}`}
                  className="btn-secondary"
                >
                  Or fill the contact form
                  <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
                </Link>
              </div>
              {ready && (
                <p className="text-xs text-warm-grey mt-5 italic font-serif">
                  We'll receive: “{summary}”
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  step,
  options,
  value,
  onChange,
  last,
}: {
  label: string;
  step: string;
  options: string[];
  value: string | null;
  onChange: (v: string) => void;
  last?: boolean;
}) {
  return (
    <div className={cn(!last && "mb-8 pb-8 border-b border-subtle-border")}>
      <div className="flex items-baseline justify-between mb-4">
        <h4 className="font-serif text-lg text-charcoal">{label}</h4>
        <span className="text-xs uppercase tracking-[0.22em] text-warm-grey">
          {step}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={cn(
                "px-4 py-2.5 text-sm border transition-all",
                active
                  ? "bg-charcoal text-ivory border-charcoal"
                  : "bg-soft-white text-charcoal border-subtle-border hover:border-charcoal",
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
