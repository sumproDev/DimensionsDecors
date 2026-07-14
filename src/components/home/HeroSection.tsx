import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { GoldButton } from "@/components/shared/GoldButton";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[620px] items-center overflow-hidden border-b border-border sm:min-h-[660px] lg:min-h-[680px]">
      <Image
        src="/images/hero-interior.png"
        alt="Warmly lit luxury living room designed by Dimensions Decor"
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover object-[68%_center]"
      />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_22%_50%,rgba(5,5,5,.58)_0%,rgba(5,5,5,.42)_28%,rgba(5,5,5,.18)_48%,transparent_66%)] sm:bg-[radial-gradient(ellipse_at_24%_50%,rgba(5,5,5,.60)_0%,rgba(5,5,5,.40)_30%,rgba(5,5,5,.14)_50%,transparent_68%)]" />
      <Container className="py-20">
        <div className="max-w-[650px]">
          <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-gold-light sm:text-xs">Crafting Beautiful Spaces</p>
          <h1 className="font-display text-[2.75rem] font-medium leading-[0.86] tracking-[-0.025em] text-text-primary sm:text-7xl lg:text-[5.45rem]">
            We Design<br /><span className="text-gold-light">Experiences.</span>
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-7 text-text-primary sm:text-base sm:leading-8">
            From concept to creation, we transform your vision into timeless, functional and elegant spaces.
          </p>
          <GoldButton href="/portfolio" className="mt-8 sm:mt-9">Explore Our Work</GoldButton>
        </div>
      </Container>
    </section>
  );
}
