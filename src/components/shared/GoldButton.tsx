import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface GoldButtonProps {
  href: string;
  children: ReactNode;
  variant?: "outline" | "solid";
  className?: string;
}

export function GoldButton({
  href,
  children,
  variant = "outline",
  className = "",
}: GoldButtonProps) {
  const styles =
    variant === "solid"
      ? "border-gold bg-gold text-background hover:bg-gold-light"
      : "border-gold/65 bg-transparent text-text-primary hover:bg-gold hover:text-background";

  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 border px-6 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${styles} ${className}`}
    >
      {children}
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}
