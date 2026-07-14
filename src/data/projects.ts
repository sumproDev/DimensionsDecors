import type { BlogPost, Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Modern Luxury Apartment",
    location: "Greater Noida",
    category: "Residential",
    image: "/images/project-apartment.png",
  },
  {
    id: 2,
    title: "Contemporary Office Space",
    location: "Noida",
    category: "Commercial",
    image: "/images/project-office.png",
  },
  {
    id: 3,
    title: "Elegant Living Room",
    location: "Delhi",
    category: "Residential",
    image: "/images/project-living-room.png",
  },
];

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "How Warm Lighting Changes the Way a Room Feels",
    excerpt:
      "A designer’s guide to layering ambient, task and accent lighting for a calm, considered home.",
    category: "Design Notes",
    date: "08 July 2026",
    image: "/images/project-apartment.png",
  },
  {
    id: 2,
    title: "Choosing Materials That Become More Beautiful with Time",
    excerpt:
      "Natural stone, timber and tactile fabrics bring character, patina and quiet longevity to an interior.",
    category: "Materials",
    date: "24 June 2026",
    image: "/images/about-interior.png",
  },
  {
    id: 3,
    title: "The New Language of the Contemporary Indian Home",
    excerpt:
      "A thoughtful balance of global restraint, local craft and spaces designed around everyday rituals.",
    category: "Inspiration",
    date: "12 June 2026",
    image: "/images/project-living-room.png",
  },
];
