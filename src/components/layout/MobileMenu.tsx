"use client";

import Link from "next/link";
import { navigation } from "@/data/navigation";
import { GoldButton } from "@/components/shared/GoldButton";

interface MobileMenuProps {
  open: boolean;
  pathname: string;
  onClose: () => void;
}

export function MobileMenu({ open, pathname, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-x-0 top-20 z-[90] max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-border bg-background/98 px-5 shadow-2xl shadow-black/50 backdrop-blur-xl md:top-28 lg:hidden"
    >
      <nav aria-label="Mobile navigation" className="mx-auto max-w-[1440px] py-6">
        <ul className="grid">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`block border-b border-white/5 py-4 text-sm uppercase tracking-[0.14em] transition-colors ${
                    active ? "text-gold" : "text-text-primary hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <GoldButton href="/contact" className="mt-6 w-full" variant="solid">
          Get a Quote
        </GoldButton>
      </nav>
    </div>
  );
}
