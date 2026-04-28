import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Reveal } from "@/components/ui/Reveal";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aayani is a boutique architecture and interior studio in Hyderabad. We design around how families actually live — morning routines, storage habits, and budget realities.",
};

const PHILOSOPHY = [
  {
    title: "Designed Around Routine",
    body: "We design around the way people actually live — morning routines, storage habits, family gatherings, quiet corners, and budget realities.",
  },
  {
    title: "Material Honesty",
    body: "Real veneers, real stone, real laminates. We avoid finishes that pretend to be something they aren't, and we tell you exactly where money goes.",
  },
  {
    title: "Calm Over Clever",
    body: "We'd rather a room feel calm than clever. Restraint is harder than maximalism — and lasts much longer in a home you live in.",
  },
];

const WHY = [
  {
    n: "01",
    title: "One studio, end-to-end",
    body: "Architecture, interiors, modular, and 3D — under one roof, with one accountable team.",
  },
  {
    n: "02",
    title: "Boutique attention",
    body: "We take on a small number of projects so each one gets the time and care it deserves.",
  },
  {
    n: "03",
    title: "Honest budget conversations",
    body: "You hear what is and isn't possible upfront — including where to invest and where to save.",
  },
  {
    n: "04",
    title: "Local, lived-in expertise",
    body: "We know Hyderabad apartments, Telangana climate, and the routines of Indian family homes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Studio"
        title={
          <>
            A small studio for{" "}
            <em className="text-terracotta not-italic">warm, lived-in</em> spaces.
          </>
        }
        description="Aayani is a boutique architecture and interior studio based in Hyderabad. We work on a deliberately small number of homes and offices each year — so every project gets the attention it deserves."
        imageSrc="/images/about/about-hero.jpg"
      />

      {/* Studio Story */}
      <section className="relative z-10 section-y bg-ivory">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
              <ImageReveal
                src="/images/about/studio.jpg"
                alt="Inside the Aayani studio"
                ratio="aspect-[4/5]"
                placeholderClass="ph-warm"
              />
              <p className="text-[11px] uppercase tracking-[0.22em] text-warm-grey mt-5">
                Our studio · Hyderabad
              </p>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={120}>
              <SectionHeading
                eyebrow="Our Story"
                title={
                  <>
                    Founded on a quiet idea —{" "}
                    <em className="text-terracotta not-italic">
                      good design is calm.
                    </em>
                  </>
                }
              />
              <div className="mt-8 space-y-5 text-charcoal/85 leading-relaxed text-base sm:text-lg max-w-2xl">
                <p>
                  Aayani started with a simple belief — that the best homes are
                  not the ones most photographed, but the ones most lived in.
                  Homes that hold a routine well. Homes that age beautifully.
                  Homes that don't shout.
                </p>
                <p>
                  We work closely with each family, listen first, and design
                  around real life — the way you cook in the morning, where the
                  kids leave their school bags, how your parents like to sit in
                  the evening. The plan comes from there, not from a Pinterest
                  board.
                </p>
                <p>
                  Across plans and elevations, 3D renders, full home interiors,
                  modular kitchens, and offices — the goal is the same. Spaces
                  that feel personal, practical, and quietly beautiful.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="relative z-10 section-y bg-soft-white">
        <Container>
          <SectionHeading
            eyebrow="Design Philosophy"
            title={
              <>
                Three quiet ideas that{" "}
                <em className="text-terracotta not-italic">guide every project.</em>
              </>
            }
            align="center"
            className="mx-auto"
          />
          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {PHILOSOPHY.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="border-t border-charcoal pt-6 h-full">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-terracotta">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl mt-3 mb-4 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-warm-grey leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Material Philosophy */}
      <section className="relative z-10 section-y bg-charcoal text-ivory">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Material Philosophy"
                title={
                  <span className="text-ivory">
                    A small library of{" "}
                    <em className="text-terracotta not-italic">materials we trust.</em>
                  </span>
                }
                description="We curate a tight palette of finishes that age well — warm veneers, matte laminates, fluted glass, brushed brass, soft-close hardware. Restraint, not novelty."
              />
            </div>
            <div className="lg:col-span-5">
              <div className="flex flex-wrap gap-2">
                {[
                  "Matte Laminate",
                  "Warm Veneer",
                  "Fluted Glass",
                  "Brushed Brass",
                  "Quartz Counter",
                  "Acrylic Shutters",
                  "Engineered Wood",
                  "Soft-Close Hardware",
                  "Linen Upholstery",
                  "Kota Flooring",
                  "Travertine Look",
                  "Acoustic Panels",
                ].map((m) => (
                  <span
                    key={m}
                    className="px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-ivory/85 border border-ivory/25 rounded-full"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Aayani */}
      <section className="relative z-10 section-y bg-ivory">
        <Container>
          <SectionHeading
            eyebrow="Why Aayani"
            title={
              <>
                A few practical reasons clients{" "}
                <em className="text-terracotta not-italic">stay with us.</em>
              </>
            }
          />
          <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-12">
            {WHY.map((item, i) => (
              <Reveal key={item.n} delay={i * 80}>
                <div className="flex gap-6">
                  <span className="step-num text-3xl text-terracotta shrink-0">
                    {item.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-warm-grey leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
