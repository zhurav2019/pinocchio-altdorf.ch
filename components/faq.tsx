'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Kann ich Geschenke reservieren?',
    a: 'Ja, gerne reservieren wir Artikel für Sie. Rufen Sie uns einfach an oder schreiben Sie uns eine Nachricht – wir halten Ihr Wunschgeschenk bis zu einer Woche zurück.',
  },
  {
    q: 'Gibt es Geschenkgutscheine?',
    a: 'Ja, wir bieten Geschenkgutscheine in beliebiger Höhe an. Sie sind das perfekte Geschenk, wenn Sie nicht wissen, was sich das Kind wünscht.',
  },
  {
    q: 'Kann Spielzeug bestellt werden?',
    a: 'Wenn ein Artikel vorübergehend nicht vorrätig ist oder Sie etwas Bestimmtes suchen, helfen wir gerne weiter. Sprechen Sie uns im Geschäft an oder kontaktieren Sie uns per E-Mail.',
  },
  {
    q: 'Welche Marken führen Sie?',
    a: 'Wir führen über 12 hochwertige Marken, darunter LEGO, Playmobil, Ravensburger, HABA, Djeco, BRIO, Schleich, Tonies, SIGIKID und viele mehr. Das vollständige Sortiment erfahren Sie direkt bei uns.',
  },
  {
    q: 'Gibt es Parkplätze?',
    a: 'Ja, in der Nähe unseres Geschäfts stehen öffentliche Parkplätze zur Verfügung. Altdorf ist ausserdem gut mit öffentlichen Verkehrsmitteln erreichbar (Bus und Bahn).',
  },
  {
    q: 'Bieten Sie eine Geschenkverpackung an?',
    a: 'Ja, wir verpacken Ihre Geschenke gerne liebevoll – kostenlos und auf Wunsch mit einer persönlichen Grußkarte.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Häufig gestellte Fragen
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Haben Sie eine andere Frage? Schreiben Sie uns gerne direkt.
          </p>
        </motion.div>

        <div className="space-y-3" role="list">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              role="listitem"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-card border border-border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-secondary/50 transition-colors"
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-medium text-foreground text-sm sm:text-base">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 pt-0">
                      <div className="border-t border-border/50 pt-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
