import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cormorant", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://dimensionsdecor.com"),
  title: { default: "Dimensions Decor | Luxury Interior Design Studio", template: "%s | Dimensions Decor" },
  description: "Dimensions Decor creates elegant residential, commercial and turnkey interior spaces with bespoke furniture, décor and styling solutions.",
  icons: { icon: "/images/logo.jpg" },
  openGraph: {
    title: "Dimensions Decor | Luxury Interior Design Studio",
    description: "Timeless, functional and elegant interiors tailored around the way you live and work.",
    type: "website",
    locale: "en_IN",
    siteName: "Dimensions Decor",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dimensions Decor luxury interior design studio" }],
  },
  twitter: { card: "summary_large_image", title: "Dimensions Decor | Luxury Interior Design Studio", description: "We design timeless interior experiences.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        <a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 bg-gold px-4 py-3 text-sm font-semibold text-background transition-transform focus:translate-y-0">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
