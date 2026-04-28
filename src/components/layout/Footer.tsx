import Link from "next/link";
import { Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SITE } from "@/data/nav";
import { SERVICES } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-charcoal text-ivory pt-20 pb-8 mt-12">
      <Container>
        {/* Top — large editorial mark */}
        <div className="border-b border-ivory/15 pb-12 mb-12">
          <p className="text-[11px] uppercase tracking-[0.22em] text-ivory/60 mb-4">
            A boutique studio
          </p>
          <h3 className="font-serif text-display-lg leading-[1.05] max-w-3xl">
            Designing homes <span className="text-terracotta italic">around</span>{" "}
            the way you actually live.
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 mt-8 text-sm tracking-widish border-b border-ivory/40 pb-1 hover:border-terracotta hover:text-terracotta transition-colors"
          >
            Book a free consultation
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 pb-12">
          {/* Wordmark + about */}
          <div className="col-span-2 md:col-span-4">
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo/logo.png" alt="Aayani" className="h-16 w-auto" />
              <div>
                <span className="block font-serif text-xl tracking-[0.18em] text-ivory">AAYANI</span>
                <span className="block text-[10px] uppercase tracking-[0.22em] text-ivory/70">Architects & Interiors</span>
              </div>
            </div>
            <p className="text-ivory/70 text-sm leading-relaxed mt-5 max-w-xs">
              A boutique architecture and interior studio based in Hyderabad —
              warm, practical, and unhurried.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 inline-flex items-center justify-center border border-ivory/20 hover:border-terracotta hover:text-terracotta transition-colors"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.6} />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 inline-flex items-center justify-center border border-ivory/20 hover:border-terracotta hover:text-terracotta transition-colors"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.6} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-ivory/60 mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-ivory/85 hover:text-terracotta transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-ivory/60 mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/services"
                    className="text-ivory/85 hover:text-terracotta transition-colors"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-ivory/60 mb-5">
              Studio
            </h4>
            <ul className="space-y-4 text-sm text-ivory/85">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-terracotta" strokeWidth={1.6} />
                <span>
                  {SITE.studioAddress}
                  <br />
                  <span className="text-ivory/55 text-xs">
                    Serving Hyderabad, Warangal & Telangana
                  </span>
                </span>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-start gap-3 hover:text-terracotta transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 text-terracotta" strokeWidth={1.6} />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-3 hover:text-terracotta transition-colors break-all"
                >
                  <Mail className="h-4 w-4 mt-0.5 text-terracotta shrink-0" strokeWidth={1.6} />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ivory/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ivory/55">
          <p>© 2025 Aayani Architects & Interiors. All rights reserved.</p>
          <p className="tracking-widish">Made with care, in Hyderabad.</p>
        </div>
      </Container>
    </footer>
  );
}
