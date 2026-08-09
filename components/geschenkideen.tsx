'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Gift, MessageCircle } from 'lucide-react'

const ageGroups = [
  { age: '0–2 Jahre', emoji: '🍼', desc: 'Sanfte Greifspielzeuge, Rasseln und Kuscheltiere für die Kleinsten.', color: 'bg-amber-50 border-amber-200' },
  { age: '3–5 Jahre', emoji: '🎨', desc: 'Kreatives Spielzeug, einfache Puzzles und Rollenspiel-Sets.', color: 'bg-emerald-50 border-emerald-200' },
  { age: '6–8 Jahre', emoji: '🧩', desc: 'Gesellschaftsspiele, Lernspiele und erste Bauspiele.', color: 'bg-blue-50 border-blue-200' },
  { age: '9–12 Jahre', emoji: '🔭', desc: 'Modellbau, komplexe Rätsel und Experimente für neugierige Köpfe.', color: 'bg-purple-50 border-purple-200' },
  { age: 'Teenager', emoji: '🎮', desc: 'Strategie-Spiele, Kreativ-Sets und ausgefallene Geschenke.', color: 'bg-rose-50 border-rose-200' },
]

const occasions = [
  { label: 'Geburtstag', icon: '🎂' },
  { label: 'Weihnachten', icon: '🎄' },
  { label: 'Ostern', icon: '🐣' },
  { label: 'Schulanfang', icon: '🎒' },
  { label: 'Taufe', icon: '🕊' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export function Geschenkideen() {
  return (
    <section id="geschenkideen" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Geschenkideen
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Das perfekte Geschenk finden
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Für jeden Anlass und jedes Alter haben wir die passende Idee – persönlich und liebevoll ausgewählt.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Age groups */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Gift className="w-5 h-5 text-accent" aria-hidden="true" />
              Nach Alter
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {ageGroups.map((group) => (
                <motion.div
                  key={group.age}
                  variants={itemVariants}
                  className={`flex items-start gap-4 p-5 rounded-2xl border ${group.color} transition-all hover:shadow-sm`}
                >
                  <span className="text-2xl flex-shrink-0" role="img" aria-label={group.age}>
                    {group.emoji}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground mb-0.5">{group.age}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{group.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image + Occasions */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-64 rounded-3xl overflow-hidden"
            >
              <Image
                src="/images/geschenke.png"
                alt="Schön verpackte Geschenke im Spielwarengeschäft Pinocchio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Occasions */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-5">Für jeden Anlass</h3>
              <div className="flex flex-wrap gap-3">
                {occasions.map((occ) => (
                  <motion.span
                    key={occ.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-secondary border border-border text-sm font-medium text-foreground"
                  >
                    <span aria-hidden="true">{occ.icon}</span>
                    {occ.label}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Advice teaser */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-primary/8 border border-primary/20"
            >
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Brauchen Sie Hilfe?</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Unser Team hilft gerne bei der Auswahl des passenden Geschenks – persönlich im Geschäft oder
                  telefonisch.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
