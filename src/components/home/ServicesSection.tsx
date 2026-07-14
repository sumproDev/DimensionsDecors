import { Container } from "@/components/shared/Container";
import { GoldButton } from "@/components/shared/GoldButton";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section className="border-b border-border py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Our Services" align="center">End-to-End <span className="text-gold-light">Interior</span> Solutions</SectionHeading>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service) => <ServiceCard key={service.id} service={service} />)}
          </div>
          <div className="mt-9 text-center"><GoldButton href="/services">View All Services</GoldButton></div>
        </Reveal>
      </Container>
    </section>
  );
}
