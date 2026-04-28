"use client";
import { useRef, useState, useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BeforeAfterPreview() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const node = containerRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  return (
    <section className="relative z-10 section-y bg-ivory">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Before · After"
              title={
                <>
                  Same room,{" "}
                  <em className="text-terracotta not-italic">slowly transformed.</em>
                </>
              }
              description="The most rewarding projects rarely begin with a blank slate. Drag to see what a few thoughtful moves can do for a room you already live in."
            />
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm text-warm-grey font-serif italic leading-relaxed">
              “We replaced one wall, raised one ceiling line, and changed every
              light source. Not a teardown — just enough.”
            </p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-warm-grey mt-3">
              — Lead Designer
            </p>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative aspect-[16/10] overflow-hidden bg-charcoal select-none cursor-ew-resize touch-none"
          onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
          onMouseDown={(e) => {
            dragging.current = true;
            updateFromClientX(e.clientX);
          }}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
          role="slider"
          aria-label="Before-after comparison"
          aria-valuenow={Math.round(pos)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
            if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
          }}
        >
          {/* AFTER (full bleed background) */}
          <div className="absolute inset-0 ph-warm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/projects/after.jpg"
              alt="Living room — after Aayani redesign"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
            />
          </div>

          {/* BEFORE (clipped) */}
          <div
            className="absolute inset-0 ph-cool overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/projects/before.jpg"
              alt="Living room — before redesign"
              className="absolute inset-0 w-full h-full object-cover grayscale"
              onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
            />
          </div>

          {/* Labels */}
          <span className="absolute top-5 left-5 text-[11px] uppercase tracking-[0.22em] text-ivory bg-charcoal/60 backdrop-blur px-3 py-1.5">
            Before
          </span>
          <span className="absolute top-5 right-5 text-[11px] uppercase tracking-[0.22em] text-charcoal bg-ivory/85 backdrop-blur px-3 py-1.5">
            After
          </span>

          {/* Divider line + handle */}
          <div
            className="absolute top-0 bottom-0 w-px bg-ivory pointer-events-none"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-ivory border border-charcoal/10 shadow-lg flex items-center justify-center">
              <span className="text-charcoal text-xs">‹›</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
