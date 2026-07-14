import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ProjectCard } from "@/components/home/ProjectCard";
import { Container } from "@/components/shared/Container";
import { PageBanner } from "@/components/shared/PageBanner";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Portfolio", description: "Explore selected residential and commercial interiors by Dimensions Decor." };

export default function PortfolioPage() {
  return (
    <>
      <PageBanner eyebrow="Selected Work" title="Our Portfolio" />
      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="Featured Projects">Spaces Made to <span className="text-gold-light">Belong</span></SectionHeading>
            <p className="max-w-xl text-sm leading-7 text-text-secondary">A selection of homes and workplaces where considered planning, layered materials and crafted details come together.</p>
          </div>
          <div className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">{[...projects, ...projects].map((project, index) => <ProjectCard key={`${project.id}-${index}`} project={{ ...project, id: index + 1, title: index > 2 ? ["Quiet Reading Retreat", "Executive Meeting Suite", "Warm Minimal Residence"][index - 3] : project.title }} />)}</div>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
