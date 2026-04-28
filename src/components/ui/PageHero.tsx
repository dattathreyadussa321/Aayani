"use client";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  meta,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  imageSrc?: string;
  meta?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden",
        className,
      )}
    >
      {imageSrc && (
        <div className="absolute inset-0 ph-warm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ivory/60 via-ivory/85 to-ivory" />
        </div>
      )}
      <Container className="relative z-10">
        {eyebrow && (
          <p className="text-[11px] uppercase tracking-[0.28em] text-warm-grey mb-6">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-display-xl leading-[1.02] max-w-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-7 max-w-2xl text-warm-grey text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        )}
        {meta && <div className="mt-10">{meta}</div>}
      </Container>
    </section>
  );
}
