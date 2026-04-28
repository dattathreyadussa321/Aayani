"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Reveal } from "@/components/ui/Reveal";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { PROJECTS, PROJECT_CATEGORIES, type Project } from "@/data/projects";
import { ArrowUpRight, X, MapPin, Calendar } from "lucide-react";
import { cn } from "@/lib/cn";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof PROJECT_CATEGORIES)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter],
  );

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-12 bg-ivory">
        <Container>
          <p className="text-[11px] uppercase tracking-[0.28em] text-warm-grey mb-6">
            Selected Projects · 2023 — 2024
          </p>
          <h1 className="font-serif text-display-xl leading-[1.02] max-w-5xl">
            Rooms we've built,{" "}
            <em className="text-terracotta not-italic">told as stories.</em>
          </h1>
          <p className="mt-7 max-w-2xl text-warm-grey text-base sm:text-lg leading-relaxed">
            Each project here is grouped by space and intent — from compact
            kitchens to architectural plans. Tap any image to read the designer
            note behind it.
          </p>
        </Container>
      </section>

      {/* Filter bar */}
      <section className="sticky top-16 sm:top-20 z-30 bg-ivory/85 backdrop-blur-md border-y border-subtle-border">
        <Container className="py-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {PROJECT_CATEGORIES.map((c) => {
              const active = filter === c;
              const count =
                c === "All"
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === c).length;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  className={cn(
                    "shrink-0 px-4 py-2 text-sm transition-all flex items-baseline gap-2",
                    active
                      ? "bg-charcoal text-ivory"
                      : "bg-soft-white border border-subtle-border text-charcoal hover:border-charcoal",
                  )}
                >
                  {c}
                  <span
                    className={cn(
                      "text-[10px] tracking-[0.18em]",
                      active ? "text-ivory/60" : "text-warm-grey",
                    )}
                  >
                    {String(count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Masonry grid */}
      <section className="relative z-10 py-16 sm:py-24 bg-ivory">
        <Container>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 lg:gap-8 [column-fill:_balance]">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 6) * 60} className="break-inside-avoid mb-6 lg:mb-8">
                <button
                  type="button"
                  onClick={() => setActive(p)}
                  className="group block w-full text-left"
                >
                  <div className="relative overflow-hidden">
                    <ImageReveal
                      src={p.cover}
                      alt={`${p.title} — ${p.location}`}
                      ratio={i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}
                      placeholderClass={i % 3 === 0 ? "ph-warm" : i % 3 === 1 ? "ph-cool" : "ph-deep"}
                      imgClassName="group-hover:scale-105 transition-transform duration-[1500ms] ease-soft-out"
                    />
                    <span className="absolute top-4 left-4 text-[11px] uppercase tracking-[0.22em] text-ivory bg-charcoal/70 backdrop-blur px-3 py-1.5">
                      {p.category}
                    </span>
                    <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-ivory text-charcoal flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0 duration-500">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                  </div>
                  <div className="pt-4">
                    <h3 className="font-serif text-lg sm:text-xl leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.18em] text-warm-grey mt-1.5">
                      {p.location}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-warm-grey font-serif italic py-20">
              No projects in this category yet — please check back soon.
            </p>
          )}
        </Container>
      </section>

      {/* CTA after grid */}
      <section className="relative z-10 py-20 bg-soft-white border-y border-subtle-border">
        <Container>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-warm-grey mb-4">
                Looking for something similar?
              </p>
              <h2 className="font-serif text-display-md leading-[1.05]">
                Tell us about your home — we'll pull{" "}
                <em className="text-terracotta not-italic">
                  references that match.
                </em>
              </h2>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link href="/contact" className="btn-primary">
                Start a conversation
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <ConsultationCTA />

      {/* Project Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-0 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="proj-modal-title"
        >
          <div
            className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm animate-fade-in"
            onClick={() => setActive(null)}
          />
          <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-ivory shadow-2xl animate-fade-up">
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close project"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-ivory border border-subtle-border flex items-center justify-center hover:bg-charcoal hover:text-ivory transition-colors"
            >
              <X className="h-4 w-4" strokeWidth={1.6} />
            </button>

            <div className="grid lg:grid-cols-2">
              <div className="ph-warm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.cover}
                  alt={active.title}
                  className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto lg:h-full"
                  onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                />
              </div>
              <div className="p-8 sm:p-12 flex flex-col">
                <span className="text-[11px] uppercase tracking-[0.22em] text-terracotta">
                  {active.category}
                </span>
                <h2
                  id="proj-modal-title"
                  className="font-serif text-display-md mt-3 leading-[1.05]"
                >
                  {active.title}
                </h2>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-warm-grey">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" strokeWidth={1.6} />
                    {active.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" strokeWidth={1.6} />
                    {active.year}
                  </span>
                </div>

                <div className="mt-6 pt-6 border-t border-subtle-border">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-warm-grey mb-2">
                    Designer Note
                  </p>
                  <p className="font-serif text-lg leading-snug">
                    “{active.designerNote}”
                  </p>
                </div>

                <dl className="mt-6 pt-6 border-t border-subtle-border grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.22em] text-warm-grey mb-1">
                      Scope
                    </dt>
                    <dd className="text-charcoal">{active.scope}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.22em] text-warm-grey mb-1">
                      Style
                    </dt>
                    <dd className="text-charcoal">{active.style}</dd>
                  </div>
                </dl>

                {active.materials.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-subtle-border">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-warm-grey mb-3">
                      Material Notes
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {active.materials.map((m) => (
                        <span key={m} className="material-chip">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-8">
                  <Link
                    href="/contact"
                    onClick={() => setActive(null)}
                    className="btn-primary w-full sm:w-auto"
                  >
                    Enquire about a similar project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
