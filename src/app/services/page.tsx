import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Container } from "@/components/shared/Container";
import { PageBanner } from "@/components/shared/PageBanner";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Services", description: "Explore residential, commercial, turnkey, furniture and styling services from Dimensions Decor." };

const deliverables = ["Space planning and concept direction", "Material, lighting and furniture specification", "Detailed drawings and 3D visualisation", "Vendor coordination and site supervision"];

export default function ServicesPage() {
  return (
    <>
      <PageBanner eyebrow="What We Do" title="Interior Design Services" />
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Complete Design Support" align="center">From First Idea to <span className="text-gold-light">Final Detail</span></SectionHeading>
          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {services.map(({ id, title, description, icon: Icon, href }) => (
              <Link href={href} key={id} className="group grid cursor-pointer gap-7 border border-border bg-surface/55 p-7 transition-all hover:-translate-y-1 hover:border-gold/65 hover:bg-surface-light/65 sm:grid-cols-[auto_1fr] sm:p-9">
                <span className="inline-flex size-16 items-center justify-center border border-gold/40 text-gold"><Icon aria-hidden="true" className="size-8" strokeWidth={1.2} /></span>
                <div><span className="text-[0.65rem] uppercase tracking-[0.2em] text-gold">Service 0{id}</span><h2 className="mt-2 font-display text-3xl text-text-primary">{title}</h2><p className="mt-4 text-sm leading-7 text-text-secondary">{description} Each commission is tailored to the project, its context and the people it serves.</p><ul className="mt-5 grid gap-2 text-xs text-text-primary">{deliverables.map((item) => <li key={item} className="flex gap-2"><Check aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-gold" />{item}</li>)}</ul><span className="mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-light">View Service <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" /></span></div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-y border-border bg-background-soft py-20">
        <Container>
          <SectionHeading eyebrow="Our Process" align="center">Clear, Collaborative, <span className="text-gold-light">Considered</span></SectionHeading>
          <div className="mt-12 grid gap-8 md:grid-cols-4">{["Discover", "Design", "Develop", "Deliver"].map((step, index) => <div key={step} className="border-t border-gold/50 pt-6"><span className="text-xs text-gold">0{index + 1}</span><h3 className="mt-3 font-display text-2xl text-text-primary">{step}</h3><p className="mt-3 text-sm leading-6 text-text-secondary">{["We understand the brief, site, budget and ambitions.", "We shape the plan, palette and atmosphere together.", "We resolve details, selections and execution drawings.", "We coordinate site work through to a polished handover."][index]}</p></div>)}</div>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
