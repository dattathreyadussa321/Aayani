"use client";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Plus, Minus } from "lucide-react";
import type { FAQ as FAQType } from "@/data/faqs";
import { cn } from "@/lib/cn";

export function FAQ({
  items,
  title,
  eyebrow,
  description,
  background = "ivory",
}: {
  items: FAQType[];
  title?: React.ReactNode;
  eyebrow?: string;
  description?: string;
  background?: "ivory" | "soft" | "charcoal";
}) {
  const [open, setOpen] = useState<number | null>(0);

  const bgClass =
    background === "charcoal"
      ? "bg-charcoal text-ivory"
      : background === "soft"
        ? "bg-soft-white"
        : "bg-ivory";

  return (
    <section className={cn("relative z-10 section-y", bgClass)}>
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={eyebrow ?? "Quiet Questions"}
              title={
                title ?? (
                  <>
                    Things people{" "}
                    <em className="text-terracotta not-italic">often ask</em>{" "}
                    before working with us.
                  </>
                )
              }
              description={description}
            />
          </div>

          <div className="lg:col-span-7">
            <ul
              className={cn(
                "border-t",
                background === "charcoal" ? "border-ivory/15" : "border-subtle-border",
              )}
            >
              {items.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li
                    key={item.q}
                    className={cn(
                      "border-b",
                      background === "charcoal" ? "border-ivory/15" : "border-subtle-border",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full text-left flex items-start justify-between gap-6 py-6 group"
                    >
                      <span className="font-serif text-lg sm:text-xl leading-snug pr-2">
                        {item.q}
                      </span>
                      <span
                        className={cn(
                          "shrink-0 mt-1 w-9 h-9 rounded-full border flex items-center justify-center transition-colors",
                          background === "charcoal"
                            ? "border-ivory/30"
                            : "border-charcoal/20",
                          isOpen && "bg-terracotta border-terracotta text-ivory",
                        )}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" strokeWidth={1.6} />
                        ) : (
                          <Plus className="h-4 w-4" strokeWidth={1.6} />
                        )}
                      </span>
                    </button>
                    <div
                      className="grid transition-all duration-500 ease-soft-out"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div className="overflow-hidden">
                        <p
                          className={cn(
                            "pb-6 pr-12 leading-relaxed",
                            background === "charcoal"
                              ? "text-ivory/75"
                              : "text-warm-grey",
                          )}
                        >
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
