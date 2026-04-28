"use client";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ImageReveal } from "@/components/ui/ImageReveal";

export function Hero() {
  return (
    <section
      className="relative min-h-[100svh] flex items-end overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background image — single, emotional, full-bleed */}
      <div className="absolute inset-0 ph-deep">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/home-hero.jpg"
          alt="A warmly lit family living room designed by Aayani"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
        />
        {/* Subtle warm tint + gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-charcoal/30" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(at 75% 25%, rgba(45, 180, 189, 0.18), transparent 55%)",
          }}
        />
      </div>

      {/* Side label — vertical eyebrow */}
      <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 z-10">
        <div
          className="text-[10px] uppercase tracking-[0.32em] text-ivory/70"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Aayani · Est. Hyderabad · Architecture & Interiors
        </div>
      </div>

      {/* Content */}
      <Container className="relative z-10 pb-20 sm:pb-28 pt-32">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p
              className="text-[11px] uppercase tracking-[0.28em] text-ivory/75 mb-6"
              style={{ animation: "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s both" }}
            >
              Boutique Architecture & Interior Studio
            </p>

            <h1
              id="hero-heading"
              className="font-serif text-ivory leading-[1.02] text-[clamp(2.5rem,6.5vw,5.5rem)] font-light"
              style={{ animation: "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.25s both" }}
            >
              Homes that feel{" "}
              <em className="text-terracotta not-italic font-serif">
                personal
              </em>
              ,
              <br className="hidden sm:block" />
              practical, and quietly beautiful.
            </h1>

            <p
              className="mt-6 max-w-xl text-ivory/85 text-base sm:text-lg leading-relaxed"
              style={{ animation: "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.4s both" }}
            >
              Architecture, interiors, modular solutions, and 3D visualization —
              for homes designed around real life, not catalogue shoots.
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-4"
              style={{ animation: "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.55s both" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-ivory text-charcoal px-7 py-4 text-sm tracking-widish hover:bg-terracotta hover:text-ivory transition-all duration-300"
              >
                Book Free Consultation
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 text-ivory text-sm tracking-widish border-b border-ivory/40 pb-1 hover:border-terracotta hover:text-terracotta transition-colors"
              >
                <span
                  aria-hidden
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-ivory/40 group-hover:bg-terracotta group-hover:border-terracotta"
                >
                  <Play className="h-3 w-3 ml-0.5" fill="currentColor" />
                </span>
                View Projects
              </Link>
            </div>
          </div>

          {/* Overlapping material/design note card */}
          <div className="lg:col-span-4 lg:justify-self-end">
            <div
              className="bg-soft-white text-charcoal p-6 max-w-sm shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] border border-ivory/40"
              style={{ animation: "fadeUp 1s cubic-bezier(0.22,1,0.36,1) 0.7s both" }}
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-warm-grey mb-3">
                Designer Note · 003
              </p>
              <p className="font-serif text-lg leading-snug">
                We softened the TV wall with warm veneer and hidden storage so
                the room feels calm, not crowded.
              </p>
              <div className="mt-5 flex items-center gap-2 flex-wrap">
                <span className="material-chip">Warm Veneer</span>
                <span className="material-chip">Fluted Glass</span>
                <span className="material-chip">Brass</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom marker bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 hidden md:flex items-center justify-between border-t border-ivory/15 px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-ivory/65 bg-charcoal/30 backdrop-blur-sm">
        <span>Hyderabad · Warangal · Telangana</span>
        <span className="font-serif italic text-ivory/85 normal-case tracking-normal">
          Scroll to see what we build
        </span>
        <span>© Aayani — A Boutique Studio</span>
      </div>
    </section>
  );
}
