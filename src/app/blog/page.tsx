import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PageBanner } from "@/components/shared/PageBanner";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { posts } from "@/data/projects";

export const metadata: Metadata = { title: "Journal", description: "Interior design ideas, materials and inspiration from the Dimensions Decor studio." };

export default function BlogPage() {
  return (
    <>
      <PageBanner eyebrow="Ideas & Inspiration" title="The Design Journal" />
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="From the Studio">Notes on <span className="text-gold-light">Better Spaces</span></SectionHeading>
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface"><Image src={post.image} alt="" fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                <div className="mt-5 flex gap-3 text-[0.62rem] uppercase tracking-[0.14em] text-gold"><span>{post.category}</span><span>•</span><time>{post.date}</time></div>
                <h2 className="mt-4 font-display text-3xl leading-tight text-text-primary">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-text-secondary">{post.excerpt}</p>
                <Link href="#" className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-gold-light">Read Article <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
