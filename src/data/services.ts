import {
  Building2,
  House,
  KeyRound,
  LampDesk,
  PanelsTopLeft,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: 1,
    title: "Residential Interior",
    description:
      "Elegant and functional interiors that turn your house into a dream home.",
    icon: House,
    slug: "residential-interior",
    href: "/services/residential-interior",
    image: "/images/project-living-room.png",
    detailTitle: "Homes layered with comfort, proportion and quiet luxury.",
    detailIntro:
      "We design living rooms, bedrooms, kitchens and complete homes that feel refined without losing warmth. Every layout, material and lighting choice is shaped around daily life.",
    highlights: ["Space planning for better movement", "Material palettes for every room", "Lighting, furniture and decor coordination"],
    inclusions: ["Concept design and moodboards", "Furniture layout and room planning", "Material, wall finish and lighting selection", "Execution drawings and vendor guidance"],
    gallery: ["/images/project-living-room.png", "/images/about-interior.png", "/images/studio-interior.jpg"],
  },
  {
    id: 2,
    title: "Commercial Interior",
    description:
      "Innovative office and commercial spaces that inspire productivity.",
    icon: Building2,
    slug: "commercial-interior",
    href: "/services/commercial-interior",
    image: "/images/project-office.png",
    detailTitle: "Workplaces and retail spaces designed for focus and flow.",
    detailIntro:
      "From offices to customer-facing environments, we create polished commercial interiors that support your brand, operations and the people using the space every day.",
    highlights: ["Efficient workplace planning", "Reception and client-facing zones", "Durable material and lighting choices"],
    inclusions: ["Brand-aligned interior concept", "Workstation and circulation planning", "Storage, display and utility detailing", "Site supervision and finishing support"],
    gallery: ["/images/project-office.png", "/images/hero-interior.png", "/images/project-apartment.png"],
  },
  {
    id: 3,
    title: "Turnkey Projects",
    description:
      "Complete interior solutions, thoughtfully managed from design to execution.",
    icon: KeyRound,
    slug: "turnkey-projects",
    href: "/services/turnkey-projects",
    image: "/images/hero-interior.png",
    detailTitle: "A complete design-to-delivery experience under one roof.",
    detailIntro:
      "Our turnkey service brings design, sourcing, coordination and execution together so the project moves with clarity from first idea to final handover.",
    highlights: ["Single point coordination", "Design, sourcing and execution", "Site progress and quality checks"],
    inclusions: ["Complete design package", "Material and vendor coordination", "Civil, furniture and finishing supervision", "Final styling and handover support"],
    gallery: ["/images/hero-interior.png", "/images/studio-interior.jpg", "/images/project-living-room.png"],
  },
  {
    id: 4,
    title: "Modular Furniture",
    description:
      "Custom modular furniture that combines refined style and space efficiency.",
    icon: PanelsTopLeft,
    slug: "modular-furniture",
    href: "/services/modular-furniture",
    image: "/images/project-apartment.png",
    detailTitle: "Tailored storage and furniture that fits the space perfectly.",
    detailIntro:
      "We design modular kitchens, wardrobes, TV units, storage walls and custom furniture with practical detailing, clean proportions and durable finishes.",
    highlights: ["Custom storage for exact dimensions", "Kitchen, wardrobe and TV-unit design", "Finish selection and hardware planning"],
    inclusions: ["Measurement-based furniture planning", "Material and laminate selection", "Hardware and accessory guidance", "Manufacturing and installation coordination"],
    gallery: ["/images/project-apartment.png", "/images/about-interior.png", "/images/studio-interior.jpg"],
  },
  {
    id: 5,
    title: "Decor & Styling",
    description:
      "Curated decor and styling solutions that bring depth to every interior.",
    icon: LampDesk,
    slug: "decor-styling",
    href: "/services/decor-styling",
    image: "/images/about-interior.png",
    detailTitle: "The final layer that makes a space feel complete.",
    detailIntro:
      "We curate soft furnishings, art, lighting, accessories and styling details that add character, comfort and a finished luxury feel to your interiors.",
    highlights: ["Art, accessories and styling direction", "Soft furnishings and lighting accents", "Room refreshes without full renovation"],
    inclusions: ["Decor concept and shopping list", "Curtains, rugs and soft furnishing guidance", "Accent lighting and accessory curation", "Final placement and styling"],
    gallery: ["/images/about-interior.png", "/images/project-living-room.png", "/images/hero-interior.png"],
  },
];
