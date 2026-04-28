import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/data/services";

export function SignatureServices() {
  return (
    <section
      aria-labelledby="services-heading"
      className="relative z-10 section-y bg-ivory"
    >
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 sm:mb-20">
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                Six things we do{" "}
                <em className="text-terracotta not-italic">carefully.</em>
              </>
            }
            description="A focused list of services — each one done in-house, with the same attention to material, light, and storage that defines our work."
          />
          <Link
            href="/services"
            className="btn-ghost shrink-0 self-start lg:self-end"
          >
            See all services
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 sm:gap-y-20">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 80}>
              <article className="group flex flex-col h-full">
                <div className="relative overflow-hidden">
                  <ImageReveal
                    src={service.image}
                    alt={service.name}
                    ratio="aspect-[4/5]"
                    placeholderClass={
                      i % 3 === 0 ? "ph-warm" : i % 3 === 1 ? "ph-cool" : "ph-deep"
                    }
                    imgClassName="group-hover:scale-105 transition-transform duration-[1500ms] ease-soft-out"
                  />
                  <span className="absolute top-4 left-4 text-[11px] uppercase tracking-[0.22em] text-ivory bg-charcoal/70 backdrop-blur px-3 py-1.5">
                    0{i + 1}
                  </span>
                </div>

                <div className="pt-6 flex-1 flex flex-col">
                  <h3 className="font-serif text-2xl leading-tight">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-warm-grey italic font-serif text-base">
                    {service.emotional}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-charcoal/85">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2.5 leading-snug before:content-['—'] before:text-terracotta before:font-light"
                      >
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services#${service.slug}`}
                    className="btn-ghost mt-6 self-start"
                  >
                    Explore Service
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
