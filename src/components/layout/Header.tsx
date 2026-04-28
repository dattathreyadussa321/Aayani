"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

import { NAV_LINKS, SITE } from "@/data/nav";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // home page hero is dark — keep header transparent until scroll
  const isHome = pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-soft-out",
          scrolled || !isHome
            ? "bg-ivory/85 backdrop-blur-md border-b border-subtle-border"
            : "bg-transparent",
        )}
      >
        <div className="container-x flex items-center justify-between h-24 sm:h-[8rem]">
          {/* Logo lockup */}
          <Link
            href="/"
            aria-label="Aayani Architects & Interiors home"
            className="flex items-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/logo3.png"
              alt="Aayani"
              className="h-[7rem] w-auto transition-opacity"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm tracking-widish transition-colors py-1",
                    scrolled || !isHome ? "text-charcoal" : "text-ivory",
                    active && "text-terracotta",
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-terracotta" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Aayani"
              className={cn(
                "hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full border transition-colors",
                scrolled || !isHome
                  ? "border-charcoal/15 text-charcoal hover:bg-charcoal hover:text-ivory"
                  : "border-ivory/30 text-ivory hover:bg-ivory hover:text-charcoal",
              )}
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
            </a>
            <Link
              href="/contact"
              className={cn(
                "hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm tracking-widish transition-all",
                scrolled || !isHome
                  ? "bg-charcoal text-ivory hover:bg-terracotta"
                  : "bg-ivory text-charcoal hover:bg-terracotta hover:text-ivory",
              )}
            >
              Book Free Consultation
            </Link>
            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={cn(
                "lg:hidden inline-flex items-center justify-center w-11 h-11 transition-colors",
                scrolled || !isHome ? "text-charcoal" : "text-ivory",
              )}
            >
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <MobileMenu open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </>
  );
}

function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] lg:hidden transition-opacity duration-500",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      )}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Panel */}
      <div
        className={cn(
          "absolute right-0 top-0 bottom-0 w-full max-w-sm bg-ivory shadow-2xl flex flex-col transition-transform duration-500 ease-soft-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-subtle-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo/logo3.png" alt="Aayani" className="h-[5rem] w-auto" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="w-10 h-10 inline-flex items-center justify-center"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex-1 px-6 py-8 flex flex-col gap-1">
          {NAV_LINKS.map((link, i) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  "font-serif text-3xl py-3 border-b border-subtle-border flex items-center justify-between transition-colors",
                  active ? "text-terracotta" : "text-charcoal hover:text-terracotta",
                )}
                style={{
                  animation: open
                    ? `fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.07}s both`
                    : undefined,
                }}
              >
                <span>{link.label}</span>
                <span className="text-xs uppercase tracking-[0.22em] text-warm-grey">
                  0{i + 1}
                </span>
              </Link>
            );
          })}
        </nav>
        <div className="px-6 pb-8 pt-4 border-t border-subtle-border space-y-3">
          <Link
            href="/contact"
            onClick={onClose}
            className="btn-primary w-full"
          >
            Book Free Consultation
          </Link>
          <div className="flex items-center gap-3">
            <a
              href="tel:+919441341995"
              className="flex-1 btn-secondary"
            >
              <Phone className="h-4 w-4" strokeWidth={1.6} />
              Call
            </a>
            <a
              href="https://wa.me/919441341995"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-secondary"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
