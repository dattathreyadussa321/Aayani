import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "@/styles/globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyContactBar } from "@/components/layout/StickyContactBar";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aayanidesigns.com"),
  title: {
    default:
      "Aayani Architects & Interiors — Boutique Architecture & Interior Studio in Hyderabad",
    template: "%s · Aayani Architects & Interiors",
  },
  description:
    "Aayani is a boutique architecture and interior studio in Hyderabad. We design warm, practical, lived-in homes and offices — including modular kitchens, wardrobes, architectural plans, and 3D visualization.",
  keywords: [
    "architects in Hyderabad",
    "interior designers Hyderabad",
    "modular kitchen Hyderabad",
    "home interiors Telangana",
    "Aayani Architects",
    "3D visualization Hyderabad",
  ],
  authors: [{ name: "Aayani Architects & Interiors" }],
  openGraph: {
    title: "Aayani Architects & Interiors",
    description:
      "Warm, practical, lived-in spaces. Boutique architecture and interior studio in Hyderabad.",
    type: "website",
    locale: "en_IN",
  },
  icons: { icon: "/images/logo/favicon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <StickyContactBar />
      </body>
    </html>
  );
}
