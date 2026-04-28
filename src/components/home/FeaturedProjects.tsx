import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Reveal } from "@/components/ui/Reveal";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function FeaturedProjects() {
  // Pick four featured for the homepage
  const featured = PROJECTS.slice(0, 4);

  return (
    <section
      aria-labelledby="projects-heading"
      className="relative z-10 section-y bg-soft-white"
    >
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 sm:mb-20">
          <SectionHeading
            eyebrow="Selected Work"
            title={
              <>
                Recent rooms,{" "}
                <em className="text-terracotta not-italic">told as stories.</em>
              </>
            }
            description="Each project is a conversation between routine, budget, and material. Here are a few we keep coming back to."
          />
          <Link href="/projects" className="btn-ghost shrink-0">
            View all projects
          </Link>
        </div>

        {/* Editorial asymmetric grid */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          {/* Project 1 — large left */}
          <Reveal className="col-span-12 lg:col-span-7">
            <ProjectFeature project={featured[0]} index={1} />
          </Reveal>

          {/* Project 2 — top right */}
          <Reveal className="col-span-12 lg:col-span-5 lg:mt-24" delay={120}>
            <ProjectFeature project={featured[1]} index={2} compact />
          </Reveal>

          {/* Project 3 — bottom left smaller */}
          <Reveal className="col-span-12 sm:col-span-6 lg:col-span-5" delay={80}>
            <ProjectFeature project={featured[2]} index={3} compact />
          </Reveal>

          {/* Project 4 — bottom right large */}
          <Reveal className="col-span-12 sm:col-span-6 lg:col-span-7 lg:mt-16" delay={160}>
            <ProjectFeature project={featured[3]} index={4} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ProjectFeature({
  project,
  index,
  compact = false,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  compact?: boolean;
}) {
  return (
    <Link
      href={`/projects#${project.slug}`}
      className="group block relative"
    >
      <div className="relative overflow-hidden">
        <ImageReveal
          src={project.cover}
          alt={`${project.title} — ${project.location}`}
          ratio={compact ? "aspect-[4/5]" : "aspect-[5/4]"}
          placeholderClass={index % 2 === 0 ? "ph-cool" : "ph-warm"}
          imgClassName="group-hover:scale-105 transition-transform duration-[1500ms] ease-soft-out"
        />
        <span className="absolute top-5 left-5 text-[11px] uppercase tracking-[0.22em] text-ivory bg-charcoal/70 backdrop-blur px-3 py-1.5">
          {project.category}
        </span>
        <span className="absolute top-5 right-5 w-10 h-10 rounded-full bg-ivory text-charcoal flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0 duration-500">
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
        </span>
      </div>

      <div className="pt-5 flex flex-col gap-2">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-xl sm:text-2xl leading-tight">
            {project.title}
          </h3>
          <span className="text-xs uppercase tracking-[0.18em] text-warm-grey shrink-0">
            {project.year}
          </span>
        </div>
        <p className="text-sm text-warm-grey">
          {project.location} · {project.scope}
        </p>
        {!compact && (
          <p className="mt-2 text-charcoal/80 italic font-serif leading-snug max-w-xl">
            “{project.designerNote}”
          </p>
        )}
      </div>
    </Link>
  );
}
