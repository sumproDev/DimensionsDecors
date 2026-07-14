import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/home/ContactCTA";
import { StatsGrid } from "@/components/home/StatsGrid";
import { Container } from "@/components/shared/Container";
import { PageBanner } from "@/components/shared/PageBanner";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = { title: "About Us", description: "Meet the designers and philosophy behind Dimensions Decor." };

const values = [
  ["01", "Listen deeply", "Every project begins by understanding your routines, aspirations and the feeling you want to create."],
  ["02", "Design with purpose", "Beauty and function are developed together, so every detail earns its place."],
  ["03", "Deliver with care", "Clear communication, considered sourcing and attentive execution guide the journey from sketch to handover."],
];

export default function AboutPage() {
  return (
    <>
      <PageBanner eyebrow="Our Studio" title="About Dimensions Decor" />
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative min-h-[500px] overflow-hidden"><Image src="/images/about-interior.png" alt="A refined material vignette by Dimensions Decor" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" /></div>
            <div>
              <SectionHeading eyebrow="Our Story">Spaces With Soul,<br /><span className="text-gold-light">Made for Living</span></SectionHeading>
              <p className="mt-7 text-sm leading-7 text-text-secondary">Dimensions Decor is a multidisciplinary interior studio creating residential and commercial environments across Purnea and nearby districts. We bring architecture, furniture, lighting and styling into one clear design vision.</p>
              <p className="mt-4 text-sm leading-7 text-text-secondary">Our work is quietly expressive: rich in material, precise in proportion and grounded in the lives of the people who inhabit it. From the first conversation to the final object placed, we stay closely involved.</p>
              <div className="mt-9"><StatsGrid /></div>
            </div>
          </Reveal>
        </Container>
      </section>
      <section className="border-y border-border bg-background-soft py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="How We Work" align="center">A Thoughtful <span className="text-gold-light">Design Practice</span></SectionHeading>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {values.map(([number, title, copy]) => <article key={number} className="bg-background-soft p-8 sm:p-10"><span className="font-display text-3xl text-gold">{number}</span><h3 className="mt-8 font-display text-2xl text-text-primary">{title}</h3><p className="mt-4 text-sm leading-7 text-text-secondary">{copy}</p></article>)}
          </div>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
