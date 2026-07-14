import type { Metadata } from "next";
import { BriefcaseBusiness, Clock3, Mail, MapPin, MessageCircle, Phone, UserRound } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/shared/Container";
import { PageBanner } from "@/components/shared/PageBanner";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = { title: "Contact", description: "Start an interior design conversation with Dimensions Decor in Purnea." };

const details = [
  { icon: UserRound, title: "Owner", copy: "Bipul Baibhav" },
  { icon: MapPin, title: "Studio", copy: "Opp. Saloni Nursing Home, Purnea, Bihar 854301" },
  { icon: Phone, title: "Call", copy: "+91 99550 03709", href: "tel:+919955003709" },
  { icon: MessageCircle, title: "WhatsApp", copy: "+91 99550 03709", href: "https://wa.me/919955003709" },
  { icon: Mail, title: "Email", copy: "dimensionsdecor@gmail.com", href: "mailto:dimensionsdecor@gmail.com" },
  { icon: BriefcaseBusiness, title: "Service Area", copy: "Purnea and nearby districts" },
  { icon: Clock3, title: "Hours", copy: "10 AM to 7 PM" },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner eyebrow="Start a Conversation" title="Contact Our Studio" />
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div>
              <SectionHeading eyebrow="Let's Talk">Tell Us About Your <span className="text-gold-light">Space</span></SectionHeading>
              <p className="mt-6 max-w-lg text-sm leading-7 text-text-secondary">Whether you are planning a home, workplace or a single beautifully resolved room, share where you are in the journey. We will help define the next step.</p>
              <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">{details.map(({ icon: Icon, title, copy, href }) => <div key={title} className="bg-background p-6"><Icon aria-hidden="true" className="size-6 text-gold" strokeWidth={1.3} /><h2 className="mt-5 font-display text-xl text-text-primary">{title}</h2>{href ? <a href={href} className="mt-2 block text-sm leading-6 text-text-secondary hover:text-gold">{copy}</a> : <p className="mt-2 text-sm leading-6 text-text-secondary">{copy}</p>}</div>)}</div>
            </div>
            <div className="border border-border bg-background-soft p-6 sm:p-9"><ContactForm /></div>
          </div>
        </Container>
      </section>
    </>
  );
}
