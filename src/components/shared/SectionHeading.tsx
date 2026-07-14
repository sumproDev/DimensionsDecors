import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  children: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  children,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold-light">
        {eyebrow}
      </p>
      <h2 className="font-display text-[2.35rem] font-medium leading-[0.98] text-text-primary sm:text-5xl">
        {children}
      </h2>
    </div>
  );
}
