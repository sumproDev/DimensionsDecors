import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dimensions Decor | Launching Soon",
  description:
    "Dimensions Decor is launching soon with interior and exterior design services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
