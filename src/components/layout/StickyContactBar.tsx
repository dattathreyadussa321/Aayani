"use client";
import Link from "next/link";
import { Phone, MessageCircle, Calculator } from "lucide-react";
import { SITE } from "@/data/nav";

export function StickyContactBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
      role="navigation"
      aria-label="Quick contact actions"
    >
      <div className="bg-charcoal text-ivory grid grid-cols-3 border-t border-ivory/10">
        <a
          href={`tel:${SITE.phoneRaw}`}
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs tracking-widish hover:bg-terracotta transition-colors"
        >
          <Phone className="h-4 w-4" strokeWidth={1.6} />
          Call
        </a>
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs tracking-widish bg-terracotta hover:brightness-110 transition"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs tracking-widish hover:bg-terracotta transition-colors"
        >
          <Calculator className="h-4 w-4" strokeWidth={1.6} />
          Estimate
        </Link>
      </div>
      <div className="h-[env(safe-area-inset-bottom)] bg-charcoal" />
    </div>
  );
}
