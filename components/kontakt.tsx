'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Navigation, PhoneCall, Send, CheckCircle } from 'lucide-react'

const hours = [
  
  { day: 'Dienstag', time: '09.00 bis 11.30 Uhr / 13.30 bis 17.30 Uhr' },
  { day: 'Freitag', time: '13.30 bis 17.30 Uhr' },
  { day: 'Donnerstag', time: '9.00 bis 11.30 Uhr /13.30  bis 17.30 Uhr nur an folgenden Daten geöffnet' },
  
  { day: '2026', time: '17.9.26, 22.10.26/19.11.26/10.12.26' },
  { day: '2027', time: '11.3.27 / 8.4.27 / 20.5.27 / 23.9.27 / 21.10.27 / 11.11.27/ 9.12.27' },
  { day: 'Im Dezember haben wir zusätzlich Samstagmorgen von 9.00 – 11.30 Uhr geöffnet', time: '' },
]

export function Kontakt() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Kontakt & Lage
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Besuchen Sie uns in Altdorf
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Wir freuen uns auf Ihren Besuch – persönlich, telefonisch oder per E-Mail.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Contact info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-6"
          >
            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-2xl p-5 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground mb-0.5">Adresse</p>
                  <p className="text-sm text-muted-foreground">Musterstrasse 5<br />6460 Altdorf (UR)</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground mb-0.5">Telefon</p>
                  <a href="tel:+41411234567" className="text-sm text-primary hover:underline">
                    +41 41 123 45 67
                  </a>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground mb-0.5">E-Mail</p>
                  <a href="mailto:info@pinocchio-altdorf.ch" className="text-sm text-primary hover:underline break-all">
                    info@pinocchio-altdorf.ch
                  </a>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground mb-1">Öffnungszeiten</p>
                  <div className="space-y-0.5">
                    {hours.slice(0, 3).map((h) => (
                      <p key={h.day} className="text-xs text-muted-foreground">
                        <span className="font-medium">{h.day}:</span> {h.time}
                      </p>
                    ))}
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Sa:</span> {hours[5].time}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">So:</span> Geschlossen
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Altdorf+Uri+Schweiz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                Route planen
              </a>
              <a
                href="tel:+41411234567"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary border border-border text-foreground font-semibold text-sm hover:bg-border transition-colors"
              >
                <PhoneCall className="w-4 h-4" aria-hidden="true" />
                Jetzt anrufen
              </a>
            </div>

            {/* Map placeholder */}
            <div className="rounded-3xl overflow-hidden border border-border bg-muted h-56 flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="w-8 h-8 text-muted-foreground mx-auto" aria-hidden="true" />
                <p className="text-sm text-muted-foreground font-medium">Pinocchio Spielwaren</p>
                <p className="text-xs text-muted-foreground">Musterstrasse 5, 6460 Altdorf</p>
                <a
                  href="https://maps.google.com/?q=Altdorf+Uri+Schweiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs text-primary hover:underline"
                >
                  In Google Maps öffnen &rarr;
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="bg-card border border-border rounded-3xl p-8 h-full">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full gap-5 py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-9 h-9 text-primary" aria-hidden="true" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                      Vielen Dank!
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ihre Nachricht wurde gesendet. Wir melden uns so schnell wie möglich bei Ihnen.
                    </p>
                  </div>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                    className="text-sm text-primary hover:underline cursor-pointer"
                  >
                    Neue Nachricht schreiben
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                      Schreiben Sie uns
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Wir antworten in der Regel innerhalb von 24 Stunden.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                        placeholder="Ihr Name"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm transition-shadow"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                        E-Mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                        placeholder="ihre@email.ch"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm transition-shadow"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                        Nachricht
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                        placeholder="Womit können wir Ihnen helfen?"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none transition-shadow"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Nachricht senden
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
