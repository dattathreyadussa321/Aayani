"use client";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE } from "@/data/nav";

export function ConsultationCTA() {
  return (
    <section className="relative z-10 section-y overflow-hidden">
      <div className="absolute inset-0 ph-deep">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/cta-bg.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
        />
        <div className="absolute inset-0 bg-charcoal/75" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl">
          <span className="text-[11px] uppercase tracking-[0.28em] text-ivory/65">
            A first conversation, no commitment
          </span>
          <h2 className="font-serif text-display-xl text-ivory mt-6 leading-[1.02]">
            Let's design a space that{" "}
            <em className="text-terracotta not-italic">feels like you.</em>
          </h2>
          <p className="mt-7 text-ivory/80 max-w-2xl text-base sm:text-lg leading-relaxed">
            Tell us about your home, your routine, your budget, and your
            timeline. We'll help you understand what's possible — quietly and
            honestly — before you commit to anything.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ivory text-charcoal px-7 py-4 text-sm tracking-widish hover:bg-terracotta hover:text-ivory transition-colors"
            >
              Book Free Consultation
              <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ivory/40 text-ivory px-7 py-4 text-sm tracking-widish hover:bg-ivory hover:text-charcoal transition-colors"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
