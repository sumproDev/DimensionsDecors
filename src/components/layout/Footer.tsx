import { BriefcaseBusiness, Camera, Clock3, Globe2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { navigation } from "@/data/navigation";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#060606] pt-16 sm:pt-20">
      <Container>
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_1fr_1.2fr]">
          <div>
            <Link href="/" aria-label="Dimensions Decor home" className="inline-flex">
              <Image
                src="/images/logo.jpg"
                width={170}
                height={170}
                alt="Dimensions Decor"
                className="h-auto w-[170px]"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-text-secondary">
              Bespoke interiors shaped by thoughtful planning, honest materials and a deep understanding of how you live and work.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { label: "Instagram", icon: Camera },
                { label: "Facebook", icon: Globe2 },
                { label: "LinkedIn", icon: BriefcaseBusiness },
              ].map(({ label, icon: Icon }) => (
                <a key={label} href="#" aria-label={label} className="inline-flex size-10 items-center justify-center border border-border text-gold transition-colors hover:border-gold hover:bg-gold hover:text-background">
                  <Icon aria-hidden="true" className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-xl text-text-primary">Quick Links</h2>
            <ul className="mt-5 space-y-3 text-sm text-text-secondary">
              {navigation.slice(1).map((item) => <li key={item.href}><Link className="transition-colors hover:text-gold" href={item.href}>{item.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl text-text-primary">Our Services</h2>
            <ul className="mt-5 space-y-3 text-sm text-text-secondary">
              {services.map((service) => <li key={service.id}><Link className="transition-colors hover:text-gold" href={service.href}>{service.title}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl text-text-primary">Visit Our Studio</h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-text-secondary">
              <li className="flex gap-3"><MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" /><span>Opp. Saloni Nursing Home, Purnea, Bihar 854301</span></li>
              <li><a href="tel:+919955003709" className="flex gap-3 transition-colors hover:text-gold"><Phone aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" />+91 99550 03709</a></li>
              <li><a href="https://wa.me/919955003709" className="flex gap-3 transition-colors hover:text-gold"><MessageCircle aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" />WhatsApp: +91 99550 03709</a></li>
              <li><a href="mailto:dimensionsdecor@gmail.com" className="flex gap-3 transition-colors hover:text-gold"><Mail aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" />dimensionsdecor@gmail.com</a></li>
              <li className="flex gap-3"><Globe2 aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" /><span>Service Area: Purnea and nearby districts</span></li>
              <li className="flex gap-3"><Clock3 aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" /><span>10 AM to 7 PM</span></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 py-6 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dimensions Decor. All rights reserved.</p>
          <div className="flex gap-5"><Link href="#" className="hover:text-gold">Privacy Policy</Link><Link href="#" className="hover:text-gold">Terms</Link></div>
        </div>
      </Container>
    </footer>
  );
}
