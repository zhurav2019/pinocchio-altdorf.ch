
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  PhoneCall,
  Send,
  CheckCircle,
} from 'lucide-react'

const mapUrl =
  'https://www.google.com/maps/search/?api=1&query=Seilergasse%201%2C%206460%20Altdorf%2C%20Switzerland'

const directionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=Seilergasse%201%2C%206460%20Altdorf%2C%20Switzerland'

export function Kontakt() {
  const [sent, setSent] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Hier muss später der tatsächliche E-Mail-Versand
    // oder eine API-Anbindung ergänzt werden.
    setSent(true)
  }

  return (
    <section
      id="kontakt"
      className="py-20 md:py-28 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
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
            Pinocchio Kinderartikelbörse.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT: CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-6 min-w-0"
          >

            {/* CONTACT CARDS */}
            <div className="grid sm:grid-cols-2 gap-4">

              {/* ADRESSE */}
              <div className="bg-card border border-border rounded-2xl p-5 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin
                    className="w-5 h-5 text-primary"
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0">
                  <p className="font-semibold text-sm text-foreground mb-0.5">
                    Adresse
                  </p>

                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Seilergasse 1
                    <br />
                    6460 Altdorf (UR)
                  </a>
                </div>
              </div>

              {/* TELEFON */}
              <div className="bg-card border border-border rounded-2xl p-5 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone
                    className="w-5 h-5 text-primary"
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0">
                  <p className="font-semibold text-sm text-foreground mb-0.5">
                    Telefon
                  </p>

                  <a
                    href="tel:+41418701616"
                    className="text-sm text-primary hover:underline"
                  >
                    041 870 16 16
                  </a>
                </div>
              </div>

              {/* E-MAIL */}
              <div className="bg-card border border-border rounded-2xl p-5 flex items-start gap-3 sm:col-span-2">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail
                    className="w-5 h-5 text-primary"
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0">
                  <p className="font-semibold text-sm text-foreground mb-0.5">
                    E-Mail
                  </p>

                  <a
                    href="mailto:info@pinocchio-altdorf.ch"
                    className="text-sm text-primary hover:underline break-all"
                  >
                    info@pinocchio-altdorf.ch
                  </a>
                </div>
              </div>

              {/* ÖFFNUNGSZEITEN */}
              <div className="sm:col-span-2 bg-card border border-border rounded-2xl p-5 flex items-start gap-3 h-auto">

                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock
                    className="w-5 h-5 text-primary"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-foreground mb-3">
                    Öffnungszeiten
                  </p>

                  <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">

                    {/* DIENSTAG */}
                    <p>
                      <span className="font-semibold text-foreground">
                        Dienstag:
                      </span>{' '}
                      09:00–11:30 / 13:30–17:30 Uhr
                    </p>

                    {/* FREITAG */}
                    <p>
                      <span className="font-semibold text-foreground">
                        Freitag:
                      </span>{' '}
                      13:30–17:30 Uhr
                    </p>

                    {/* DONNERSTAG */}
                    <div className="space-y-1">
                      <p>
                        <span className="font-semibold text-foreground">
                          Donnerstag:
                        </span>{' '}
                        09:00–11:30 / 13:30–17:30 Uhr
                      </p>

                      <p className="text-xs text-muted-foreground">
                        Nur an folgenden Daten geöffnet:
                      </p>
                    </div>

                    {/* SPECIAL DATES */}
                    <div className="border-l-2 border-primary/20 pl-3 space-y-2 text-xs">

                      <p>
                        <span className="font-semibold text-foreground">
                          2026:
                        </span>{' '}
                        17.09., 22.10., 19.11., 10.12.
                      </p>

                      <p>
                        <span className="font-semibold text-foreground">
                          2027:
                        </span>{' '}
                        11.03., 08.04., 20.05., 23.09.,
                        21.10., 11.11., 09.12.
                      </p>
                    </div>

                    {/* DEZEMBER */}
                    <p>
                      <span className="font-semibold text-foreground">
                        Dezember:
                      </span>{' '}
                      Zusätzlich Samstagvormittag von
                      09:00–11:30 Uhr geöffnet.
                    </p>

                    {/* SONNTAG */}
                    <p>
                      <span className="font-semibold text-foreground">
                        Sonntag:
                      </span>{' '}
                      Geschlossen
                    </p>

                  </div>
                </div>
              </div>

            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-3">

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm"
              >
                <Navigation
                  className="w-4 h-4"
                  aria-hidden="true"
                />
                Route planen
              </a>

              <a
                href="tel:+41418701616"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary border border-border text-foreground font-semibold text-sm hover:bg-border transition-colors"
              >
                <PhoneCall
                  className="w-4 h-4"
                  aria-hidden="true"
                />
                Jetzt anrufen
              </a>

            </div>

            {/* MAP */}
            <div className="rounded-3xl overflow-hidden border border-border bg-muted h-56 flex items-center justify-center">
              <div className="text-center space-y-2 px-4">

                <MapPin
                  className="w-8 h-8 text-muted-foreground mx-auto"
                  aria-hidden="true"
                />

                <p className="text-sm text-muted-foreground font-medium">
                  Pinocchio Kinderartikelbörse
                </p>

                <p className="text-xs text-muted-foreground">
                  Seilergasse 1, 6460 Altdorf
                </p>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs text-primary hover:underline"
                >
                  In Google Maps öffnen &rarr;
                </a>

              </div>
            </div>

          </motion.div>

          {/* RIGHT: CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="min-w-0"
          >

            <div className="bg-card border border-border rounded-3xl p-5 sm:p-8 h-full">

              {sent ? (

                <div className="flex flex-col items-center justify-center h-full gap-5 py-12">

                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle
                      className="w-9 h-9 text-primary"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                      Vielen Dank!
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      Ihre Nachricht wurde erfasst.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSent(false)
                      setForm({
                        name: '',
                        email: '',
                        message: '',
                      })
                    }}
                    className="text-sm text-primary hover:underline cursor-pointer"
                  >
                    Neue Nachricht schreiben
                  </button>

                </div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                      Schreiben Sie uns
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      Wir freuen uns auf Ihre Nachricht.
                    </p>
                  </div>

                  <div className="space-y-4">

                    {/* NAME */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            name: e.target.value,
                          }))
                        }
                        placeholder="Ihr Name"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm transition-shadow"
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        E-Mail
                      </label>

                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            email: e.target.value,
                          }))
                        }
                        placeholder="ihre@email.ch"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm transition-shadow"
                      />
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-1.5"
                      >
                        Nachricht
                      </label>

                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            message: e.target.value,
                          }))
                        }
                        placeholder="Womit können wir Ihnen helfen?"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none transition-shadow"
                      />
                    </div>

                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
                  >
                    <Send
                      className="w-4 h-4"
                      aria-hidden="true"
                    />
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
