import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FAQ } from "@/components/home/FAQ";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { SERVICES } from "@/data/services";
import { SERVICE_FAQS } from "@/data/faqs";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full home interiors, modular kitchens & wardrobes, architectural plans, 3D visualization, office interiors, and renovations — by Aayani Architects, Hyderabad.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title={
          <>
            A focused list of{" "}
            <em className="text-terracotta not-italic">six things.</em>
            <br />
            All done in-house, with care.
          </>
        }
        description="From plans to handover, every service is delivered by the same studio team — so material, light, storage, and budget speak the same language across your project."
        imageSrc="/images/services/services-hero.jpg"
      />

      {/* Category quick-nav */}
      <section className="relative z-10 border-y border-subtle-border bg-soft-white">
        <Container className="py-5">
          <nav
            aria-label="Service quick navigation"
            className="flex gap-x-6 gap-y-3 flex-wrap text-sm"
          >
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                href={`#${s.slug}`}
                className="flex items-baseline gap-2 text-charcoal hover:text-terracotta transition-colors"
              >
                <span className="text-xs text-warm-grey">0{i + 1}</span>
                <span>{s.shortName}</span>
              </Link>
            ))}
          </nav>
        </Container>
      </section>

      {/* Detailed service blocks — alternating */}
      <section className="relative z-10 bg-ivory">
        {SERVICES.map((service, i) => {
          const reverse = i % 2 === 1;
          return (
            <article
              key={service.slug}
              id={service.slug}
              className="border-b border-subtle-border last:border-b-0 scroll-mt-24"
            >
              <Container className="py-20 sm:py-28">
                <div
                  className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-start ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  <Reveal className="lg:col-span-6">
                    <ImageReveal
                      src={service.image}
                      alt={service.name}
                      ratio="aspect-[5/6]"
                      placeholderClass={i % 3 === 0 ? "ph-warm" : i % 3 === 1 ? "ph-cool" : "ph-deep"}
                    />
                  </Reveal>

                  <Reveal className="lg:col-span-6" delay={120}>
                    <span className="text-[11px] uppercase tracking-[0.28em] text-terracotta">
                      Service · 0{i + 1}
                    </span>
                    <h2 className="font-serif text-display-md mt-4 leading-[1.05]">
                      {service.name}
                    </h2>
                    <p className="mt-4 text-charcoal/75 italic font-serif text-lg leading-snug">
                      {service.emotional}
                    </p>
                    <p className="mt-6 text-warm-grey leading-relaxed">
                      {service.description}
                    </p>

                    {/* Detail grid */}
                    <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 border-t border-subtle-border pt-8">
                      <div>
                        <dt className="text-[11px] uppercase tracking-[0.22em] text-warm-grey mb-2">
                          Best For
                        </dt>
                        <dd className="text-charcoal text-sm leading-relaxed">
                          {service.bestFor}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[11px] uppercase tracking-[0.22em] text-warm-grey mb-2">
                          Typical Timeline
                        </dt>
                        <dd className="text-charcoal text-sm leading-relaxed">
                          {service.timeline}
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-[11px] uppercase tracking-[0.22em] text-warm-grey mb-3">
                          What's Included
                        </dt>
                        <ul className="space-y-2 text-sm">
                          {service.included.map((it) => (
                            <li key={it} className="flex gap-2.5 items-start">
                              <Check className="h-4 w-4 text-terracotta mt-0.5 shrink-0" strokeWidth={1.8} />
                              <span className="text-charcoal/85">{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {service.materials && (
                        <div className="sm:col-span-2">
                          <dt className="text-[11px] uppercase tracking-[0.22em] text-warm-grey mb-3">
                            Material Notes
                          </dt>
                          <dd className="flex flex-wrap gap-2">
                            {service.materials.map((m) => (
                              <span key={m} className="material-chip">
                                {m}
                              </span>
                            ))}
                          </dd>
                        </div>
                      )}
                    </dl>

                    <div className="mt-10 flex flex-wrap gap-3">
                      <Button href="/contact" variant="primary">
                        Enquire about this service
                      </Button>
                      <Button href="/projects" variant="secondary">
                        See related projects
                      </Button>
                    </div>
                  </Reveal>
                </div>
              </Container>
            </article>
          );
        })}
      </section>

      {/* Material Moodboard */}
      <MaterialMoodboard />

      {/* Service-specific FAQ */}
      <FAQ
        items={SERVICE_FAQS}
        eyebrow="Service Questions"
        title={
          <>
            What clients{" "}
            <em className="text-terracotta not-italic">often ask</em> about our
            services.
          </>
        }
        background="soft"
      />

      <ConsultationCTA />
    </>
  );
}

function MaterialMoodboard() {
  const swatches = [
    { name: "Warm Veneer", className: "bg-[#9a6b48]" },
    { name: "Matte Laminate", className: "bg-[#226773]" },
    { name: "Soft Plaster", className: "bg-[#e9dfcd]" },
    { name: "Brushed Brass", className: "bg-[#b08a4a]" },
    { name: "Fluted Glass", className: "bg-gradient-to-r from-[#cad8d4] via-[#aabcb8] to-[#cad8d4]" },
    { name: "Linen Weave", className: "bg-[#d8c8a8]" },
    { name: "Walnut Stain", className: "bg-[#5a3924]" },
    { name: "Kota Stone", className: "bg-[#6e6258]" },
  ];
  return (
    <section className="relative z-10 section-y bg-charcoal text-ivory">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Studio Moodboard"
              title={
                <span className="text-ivory">
                  A tight palette,{" "}
                  <em className="text-terracotta not-italic">used carefully.</em>
                </span>
              }
              description="A small set of materials we keep returning to — chosen for how they age, not how they photograph."
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {swatches.map((s) => (
            <Reveal key={s.name} className="group">
              <div className={`aspect-square ${s.className} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/15 transition-colors" />
              </div>
              <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-ivory/75">
                {s.name}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
