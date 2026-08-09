'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

const categories = [
  {
    name: 'Holzspielzeug',
    description: 'Zeitlose Klassiker aus natürlichen Materialien – für Kinder, die mit allen Sinnen spielen.',
    image: '/images/holzspielzeug.png',
    tag: 'Beliebt',
  },
  {
    name: 'Babyspielzeug',
    description: 'Sanfte Begleiter für die ersten Lebensjahre – sicher, farbfroh und altersgerecht.',
    image: '/images/babyspielzeug.png',
    tag: '0–2 Jahre',
  },
  {
    name: 'Gesellschaftsspiele',
    description: 'Gemeinsam spielen, lachen, denken – für unvergessliche Familienabende.',
    image: '/images/gesellschaftsspiele.png',
    tag: 'Für alle',
  },
  {
    name: 'Puzzle',
    description: 'Geduld, Konzentration und Erfolgserlebnisse – Puzzles für jedes Alter.',
    image: '/images/puzzle.png',
    tag: 'Kreativ',
  },
  {
    name: 'LEGO',
    description: 'Die Welt bauen, wie Kinder sie träumen – Klassiker der Spielzeugwelt.',
    image: '/images/lego.png',
    tag: 'Top-Marke',
  },
  {
    name: 'Basteln & Kreativität',
    description: 'Farben, Pinsel und Materialien für kreative kleine Köpfe.',
    image: '/images/basteln.png',
    tag: 'Kreativ',
  },
  {
    name: 'Outdoor-Spielzeug',
    description: 'Ab nach draußen! Bewegung, frische Luft und jede Menge Spaß.',
    image: '/images/outdoor.png',
    tag: 'Sommer',
  },
  {
    name: 'Kuscheltiere',
    description: 'Weiche Begleiter und treue Freunde – zum Lieben und Schmusen.',
    image: '/images/kuscheltiere.png',
    tag: 'Für alle',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export function Sortiment() {
  const [query, setQuery] = useState('')

  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.description.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <section id="sortiment" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Unser Angebot
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Entdecken Sie unser Sortiment
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed text-pretty">
            Von klassischem Holzspielzeug bis zu modernen Kreativsets – wir führen sorgfältig ausgewähltes
            Spielzeug für jedes Alter.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Kategorie suchen …"
              className="w-full pl-12 pr-5 py-3.5 rounded-2xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow text-sm"
              aria-label="Sortiment durchsuchen"
            />
          </div>
        </motion.div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-16">
            Keine Kategorie gefunden für &ldquo;{query}&rdquo;.
          </p>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filtered.map((cat) => (
              <motion.article
                key={cat.name}
                variants={itemVariants}
                className="group bg-card rounded-3xl overflow-hidden border border-border hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-semibold text-foreground border border-border/50">
                    {cat.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-base font-semibold text-foreground mb-1.5">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}

        {/* More categories chips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {['Playmobil', 'Bücher', 'Fahrzeuge', 'Geschenkartikel'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
