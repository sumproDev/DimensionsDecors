import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Container } from "@/components/shared/Container";
import { GoldButton } from "@/components/shared/GoldButton";
import { PageBanner } from "@/components/shared/PageBanner";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/data/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service" };
  }

  return {
    title: service.title,
    description: service.detailIntro,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      <PageBanner eyebrow="Our Services" title={service.title} />
      <section className="py-16 sm:py-24">
        <Container>
          <Link href="/services" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-light transition-colors hover:text-gold">
            <ArrowLeft aria-hidden="true" className="size-4" /> Back to Services
          </Link>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div className="relative min-h-[360px] overflow-hidden border border-border sm:min-h-[520px]">
              <Image src={service.image} alt={`${service.title} interior service`} fill priority sizes="(min-width:1024px) 52vw, 100vw" className="object-cover" />
            </div>
            <div>
              <span className="inline-flex size-16 items-center justify-center border border-gold/60 text-gold">
                <Icon aria-hidden="true" className="size-8" strokeWidth={1.2} />
              </span>
              <h1 className="mt-7 font-display text-4xl font-medium leading-[1.02] text-text-primary sm:text-6xl">
                {service.detailTitle}
              </h1>
              <p className="mt-7 text-sm leading-8 text-text-secondary sm:text-base">
                {service.detailIntro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <GoldButton href="/contact" variant="solid">Start Your Project</GoldButton>
                <GoldButton href="/portfolio">View Portfolio</GoldButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-background-soft py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <SectionHeading eyebrow="What You Get">Designed With <span className="text-gold-light">Detail</span></SectionHeading>
            <div className="grid gap-4 sm:grid-cols-3">
              {service.highlights.map((item) => (
                <div key={item} className="border border-border bg-background p-6">
                  <Sparkles aria-hidden="true" className="size-5 text-gold" strokeWidth={1.35} />
                  <p className="mt-5 text-sm leading-6 text-text-primary">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
            <div>
              <SectionHeading eyebrow="Scope">Luxury Service, <span className="text-gold-light">Clearly Managed</span></SectionHeading>
              <p className="mt-6 text-sm leading-8 text-text-secondary">
                Every service is adapted to your site, budget and timeline. We keep the process clear so design decisions, technical details and execution stay aligned.
              </p>
            </div>
            <ul className="grid gap-3">
              {service.inclusions.map((item) => (
                <li key={item} className="flex gap-4 border border-border bg-surface/65 p-5 text-sm leading-6 text-text-primary">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-background-soft py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Visual Direction" align="center">Materials, Light and <span className="text-gold-light">Atmosphere</span></SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {service.gallery.map((image, index) => (
              <div key={image} className={`relative min-h-[300px] overflow-hidden border border-border ${index === 1 ? "md:mt-10" : ""}`}>
                <Image src={image} alt={`${service.title} reference ${index + 1}`} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
