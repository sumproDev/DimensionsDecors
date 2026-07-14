import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group">
      <Link href="/portfolio" aria-label={`View ${project.title}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden bg-surface">
          <Image src={project.image} alt={`${project.title} interior in ${project.location}`} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.045]" />
        </div>
        <h3 className="mt-5 inline-block border-b border-transparent pb-1 font-display text-[1.35rem] font-medium text-text-primary transition-colors group-hover:border-gold group-hover:text-gold-light">{project.title}</h3>
        <p className="mt-1 text-xs text-text-secondary">{project.location}</p>
      </Link>
    </article>
  );
}
