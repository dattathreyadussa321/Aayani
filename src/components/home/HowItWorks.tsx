import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Listen",
    body: "We start with a long, unhurried conversation. Family routine, storage habits, budget realities, taste — and what you don't want.",
  },
  {
    n: "02",
    title: "Visualize",
    body: "Mood references and 2D layouts come first. Then 3D renders for every key room — so you can feel the design, not just read it.",
  },
  {
    n: "03",
    title: "Detail",
    body: "Materials, lighting plans, hardware, finishes, and the small things — switch heights, drawer dividers, edge profiles.",
  },
  {
    n: "04",
    title: "Execute",
    body: "Site coordination with weekly updates, photos, and quality checks. One accountable team — civil to modular to lighting.",
  },
  {
    n: "05",
    title: "Handover",
    body: "Final styling, deep clean, walkthrough, and a calm settling-in period. Snags fixed. Warranties shared in writing.",
  },
];

export function HowItWorks() {
  return (
    <section
      className="relative z-10 section-y bg-charcoal text-ivory"
      aria-labelledby="how-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="The Process"
          title={
            <span className="text-ivory">
              Five steps,{" "}
              <em className="text-terracotta not-italic">unhurried.</em>
            </span>
          }
          description="A predictable, calm sequence — designed so that you always know what is happening, and what comes next."
        />

        <div className="mt-16 sm:mt-20 grid lg:grid-cols-12 gap-y-1">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.n}
              delay={i * 80}
              className="lg:col-span-12 group"
            >
              <div className="grid grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-t border-ivory/15 first:border-t-0 group-hover:bg-ivory/[0.03] transition-colors">
                <div className="col-span-2 sm:col-span-1">
                  <span className="step-num text-3xl sm:text-5xl text-terracotta">
                    {step.n}
                  </span>
                </div>
                <div className="col-span-10 sm:col-span-3">
                  <h3 className="font-serif text-2xl sm:text-3xl text-ivory">
                    {step.title}
                  </h3>
                </div>
                <div className="col-span-12 sm:col-span-8 sm:pl-8">
                  <p className="text-ivory/75 leading-relaxed text-base max-w-2xl">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-ivory/15" />
        </div>
      </Container>
    </section>
  );
}
