import { Container } from "@/components/ui/Container";

const ITEMS = [
  {
    title: "Personalised Design",
    body: "Every layout starts with your routine, not a template.",
  },
  {
    title: "Budget-Conscious Planning",
    body: "Honest cost ranges before any commitment is asked.",
  },
  {
    title: "3D Visual Preview",
    body: "See every key room before site work begins.",
  },
  {
    title: "End-to-End Execution",
    body: "One studio, one team, from first sketch to handover.",
  },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Why work with Aayani"
      className="relative z-10 border-y border-subtle-border bg-soft-white"
    >
      <Container className="py-10 sm:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="relative pl-5 sm:pl-7"
            >
              <span
                aria-hidden
                className="absolute left-0 top-1 font-serif text-warm-grey/60 text-xs"
              >
                0{i + 1}
              </span>
              <h3 className="font-serif text-base sm:text-lg leading-tight mb-1">
                {item.title}
              </h3>
              <p className="text-warm-grey text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
