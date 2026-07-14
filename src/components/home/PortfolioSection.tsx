import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function PortfolioSection() {
  return (
    <section className="border-b border-border bg-background-soft py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Our Portfolio">Featured <span className="text-gold-light">Projects</span></SectionHeading>
            <Link href="/portfolio" className="group inline-flex items-center gap-3 text-[0.67rem] font-semibold uppercase tracking-[0.14em] text-gold-light hover:text-gold">View All Projects <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" /></Link>
          </div>
          <div className="mt-10 grid gap-9 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
