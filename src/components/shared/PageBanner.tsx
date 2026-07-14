import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "./Container";

interface PageBannerProps {
  title: string;
  eyebrow: string;
}

export function PageBanner({ title, eyebrow }: PageBannerProps) {
  return (
    <section className="relative isolate flex min-h-[360px] items-end overflow-hidden border-b border-border pb-16 pt-28 sm:min-h-[420px] sm:pb-20">
      <Image
        src="/images/hero-interior.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center opacity-90"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_24%_78%,rgba(8,8,8,.78)_0%,rgba(8,8,8,.50)_28%,rgba(8,8,8,.16)_48%,transparent_68%)]" />
      <Container>
        <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold-light">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl font-display text-5xl font-medium leading-[0.92] text-text-primary sm:text-7xl">
          {title}
        </h1>
        <nav aria-label="Breadcrumb" className="mt-7">
          <ol className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-text-secondary">
            <li><Link className="transition-colors hover:text-gold" href="/">Home</Link></li>
            <li><ChevronRight aria-hidden="true" className="size-3 text-gold" /></li>
            <li aria-current="page" className="text-text-primary">{title}</li>
          </ol>
        </nav>
      </Container>
    </section>
  );
}
