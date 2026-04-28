import { Container } from "@/components/ui/Container";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";

const GALLERY_IMAGES = [
  ...Array.from({ length: 60 }, (_, i) => `/images/gallery/n${i + 1}.jpeg`),
  ...Array.from({ length: 15 }, (_, i) => `/images/gallery/wa${i + 1}.jpg`),
  ...[
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
  ].map((l) => `/images/gallery/06-08-${l}.jpg`),
  // "/images/gallery/MAMA1.jpg",
  // "/images/gallery/MAMA2.jpg",
];

export default function GalleryPage() {
  return (
    <>
      <section className="relative pt-32 sm:pt-40 pb-12 bg-ivory">
        <Container>
          <p className="text-[11px] uppercase tracking-[0.28em] text-warm-grey mb-6">
            Gallery
          </p>
          <h1 className="font-serif text-display-xl leading-[1.02] max-w-5xl">
            A closer look at{" "}
            <em className="text-terracotta not-italic">our work.</em>
          </h1>
          <p className="mt-7 max-w-2xl text-warm-grey text-base sm:text-lg leading-relaxed">
            Browse through our collection of completed projects, site progress,
            and design details.
          </p>
        </Container>
      </section>

      <section className="relative z-10 py-16 sm:py-24 bg-ivory">
        <Container>
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 lg:gap-6 [column-fill:_balance]">
            {GALLERY_IMAGES.map((src, i) => (
              <div key={src} className="break-inside-avoid mb-4 lg:mb-6">
                <ImageReveal
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  ratio={
                    i % 5 === 0
                      ? "aspect-[4/5]"
                      : i % 5 === 1
                        ? "aspect-square"
                        : i % 5 === 2
                          ? "aspect-[4/3]"
                          : i % 5 === 3
                            ? "aspect-[3/4]"
                            : "aspect-[5/4]"
                  }
                  placeholderClass={
                    i % 3 === 0
                      ? "ph-warm"
                      : i % 3 === 1
                        ? "ph-cool"
                        : "ph-deep"
                  }
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
