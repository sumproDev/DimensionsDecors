import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  slug: string;
  image: string;
  detailTitle: string;
  detailIntro: string;
  highlights: string[];
  inclusions: string[];
  gallery: string[];
}

export interface Stat {
  id: number;
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}
