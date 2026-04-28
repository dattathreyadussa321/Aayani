"use client";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  return (
    <section className="relative z-10 section-y bg-soft-white">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="In Their Words"
              title={
                <>
                  Quiet,{" "}
                  <em className="text-terracotta not-italic">unprompted</em> notes
                  from people who live in the homes we built.
                </>
              }
            />
            <div className="mt-10 flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
                }
                className="w-12 h-12 rounded-full border border-charcoal/15 flex items-center justify-center hover:bg-charcoal hover:text-ivory transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.6} />
              </button>
              <button
                type="button"
                onClick={() => setI((p) => (p + 1) % TESTIMONIALS.length)}
                className="w-12 h-12 rounded-full border border-charcoal/15 flex items-center justify-center hover:bg-charcoal hover:text-ivory transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </button>
              <span className="ml-3 text-xs uppercase tracking-[0.22em] text-warm-grey">
                {String(i + 1).padStart(2, "0")} /{" "}
                {String(TESTIMONIALS.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div
              key={t.name}
              className="relative bg-ivory border border-subtle-border p-8 sm:p-12 animate-fade-up"
            >
              <Quote
                className="absolute top-6 right-6 h-10 w-10 text-terracotta/40"
                strokeWidth={1}
              />
              <p className="font-serif text-xl sm:text-2xl leading-relaxed text-charcoal max-w-2xl">
                “{t.quote}”
              </p>
              <div className="mt-8 pt-6 border-t border-subtle-border flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-charcoal text-ivory flex items-center justify-center font-serif">
                  {t.initials}
                </div>
                <div>
                  <div className="font-serif text-base">{t.name}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-warm-grey">
                    {t.label} · {t.project}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
