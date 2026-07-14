import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatsGrid } from "./StatsGrid";

export function AboutSection() {
  return (
    <section className="border-b border-border bg-background-soft py-20 sm:py-24">
      <Container>
        <Reveal className="grid items-stretch gap-10 lg:grid-cols-[.8fr_1.1fr_1.35fr] lg:gap-12">
          <div className="relative min-h-[340px] overflow-hidden sm:min-h-[440px] lg:min-h-full">
            <Image src="/images/about-interior.png" alt="Warm material detail in a Dimensions Decor interior" fill sizes="(min-width:1024px) 25vw, 100vw" className="object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div className="self-center">
            <SectionHeading eyebrow="About Dimensions Decor">Designing Spaces<br />That <span className="text-gold-light">Inspire</span></SectionHeading>
            <p className="mt-6 text-sm leading-7 text-text-secondary">
              At Dimensions Decor, we believe every space has a story. Our passion lies in creating interiors that blend aesthetics with functionality, tailored to reflect your unique style and personality.
            </p>
            <Link href="/about" className="group mt-7 inline-flex items-center gap-3 text-[0.67rem] font-semibold uppercase tracking-[0.14em] text-gold-light transition-colors hover:text-gold">
              Know More About Us <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="self-center"><StatsGrid /></div>
        </Reveal>
      </Container>
    </section>
  );
}
