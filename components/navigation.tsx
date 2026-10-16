'use client'

import { ShoppingBag, MapPin, Phone, Mail, Share2, ExternalLink } from 'lucide-react'

const navLinks = [
  { href: '#sortiment', label: 'Sortiment' },
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#kontakt', label: 'Kontakt' },
]

const hours = [
  { day: 'Mo – Fr', time: '09:00 – 12:00 / 13:30 – 18:30' },
  { day: 'Samstag', time: '09:00 – 16:00' },
  { day: 'Sonntag', time: 'Geschlossen' },
]

export function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
              </div>
              <span className="font-serif text-xl font-semibold">Pinocchio</span>
            </div>
            <p className="text-sm text-background/65 leading-relaxed text-pretty">
              Ihr Spielwarengeschäft im Herzen von Altdorf – für hochwertiges Spielzeug, kreative
              Geschenkideen und persönliche Beratung.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Share2 className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-5 text-background/50">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-background/70 hover:text-background transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-5 text-background/50">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-background/40" aria-hidden="true" />
                <span>Musterstrasse 5<br />6460 Altdorf (UR)</span>
              </li>
              <li>
                <a
                  href="tel:+41411234567"
                  className="flex items-center gap-2.5 text-sm text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 text-background/40" aria-hidden="true" />
                  +41 41 123 45 67
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@pinocchio-altdorf.ch"
                  className="flex items-center gap-2.5 text-sm text-background/70 hover:text-background transition-colors break-all"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 text-background/40" aria-hidden="true" />
                  info@pinocchio-altdorf.ch
                </a>
              </li>
            </ul>
          </div>

          {/* Opening hours */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-5 text-background/50">
              Öffnungszeiten
            </h3>
            <ul className="space-y-2.5">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 text-sm">
                  <span className="text-background/50">{h.day}</span>
                  <span className="text-background/70 text-right">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-background/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-background/40">
          <p>© {new Date().getFullYear()} Pinocchio Spielwaren, Altdorf. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-background/70 transition-colors">Impressum</a>
            <a href="#" className="hover:text-background/70 transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
