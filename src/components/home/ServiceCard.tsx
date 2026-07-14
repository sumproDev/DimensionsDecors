import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <Link href={service.href} className="group flex min-h-[295px] cursor-pointer flex-col items-center border border-border bg-surface/55 px-5 py-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/70 hover:bg-surface-light/65 hover:shadow-[0_10px_35px_rgba(0,0,0,.25)]">
      <Icon aria-hidden="true" className="size-12 text-gold transition-transform duration-300 group-hover:scale-105" strokeWidth={1.15} />
      <h3 className="mt-6 font-display text-[1.3rem] font-medium text-text-primary">{service.title}</h3>
      <p className="mt-3 text-xs leading-5 text-text-secondary">{service.description}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gold-light">
        Explore <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
