import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { GoldButton } from "@/components/shared/GoldButton";
import { Reveal } from "@/components/shared/Reveal";

export function ContactCTA() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      <Image src="/images/studio-interior.jpg" alt="" fill sizes="100vw" className="-z-30 object-cover object-center" />
      <Container>
        <Reveal className="mx-auto max-w-3xl bg-background/80 px-5 py-8 text-center backdrop-blur-sm sm:px-10 sm:py-10">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold-light">Begin Your Journey</p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-[1.02] text-text-primary sm:text-6xl">Let’s Create a Space That Feels <span className="text-gold-light">Uniquely Yours</span></h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-text-secondary sm:text-base">Speak with our interior experts and turn your ideas into beautifully designed spaces.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <GoldButton href="/contact" variant="solid">Get a Free Consultation</GoldButton>
            <GoldButton href="/portfolio">View Portfolio</GoldButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
