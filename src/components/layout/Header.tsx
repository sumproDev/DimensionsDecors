"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
import { Container } from "@/components/shared/Container";
import { GoldButton } from "@/components/shared/GoldButton";
import { MobileMenu } from "./MobileMenu";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setOpen((value) => !value);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-gold/35 bg-background/95" : "border-gold/25 bg-background/85"
      } backdrop-blur-xl`}
    >
      <Container className="flex h-20 md:h-28 items-center justify-between gap-8">
        <Link href="/" aria-label="Dimensions Decor home" className="group relative z-[70] shrink-0">
          <Image
            src="/images/logo.jpg"
            width={200}
            height={200}
            alt="Dimensions Decor"
            className="h-auto w-[150px] md:w-[200px]"
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8 xl:gap-10">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-2 text-[0.75rem] font-medium uppercase tracking-[0.12em] transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:bg-gold after:transition-transform ${
                      active
                        ? "text-gold after:scale-x-100"
                        : "text-text-primary after:scale-x-0 hover:text-gold hover:after:scale-x-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <GoldButton href="/contact" className="min-h-10 px-5 py-2.5">
            Get a Quote
          </GoldButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={toggleMenu}
          onTouchStart={(event) => {
            event.preventDefault();
            toggleMenu();
          }}
          className="relative z-[100] inline-flex size-11 shrink-0 touch-manipulation items-center justify-center border border-gold/50 text-gold transition-colors hover:bg-gold hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold lg:hidden"
        >
          {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </Container>
      <MobileMenu open={open} pathname={pathname} onClose={() => setOpen(false)} />
    </header>
  );
}
