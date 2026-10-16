'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

const categories = [
  {
    name: 'Kinderschuhe',
    description: 'Bequeme und hochwertige Schuhe in allen Grössen (18 – 45).',
    image: '/images/Kinderschuhe.png',
    tag: 'Kinderschuhe',
  },
  {
    name: 'Kinderkleidung',
    description: 'Alltags-, Outdoor-, Fest-  und Freizeitkleider in allen Grössen (50 – 176).',
    image: '/images/Kinderkleidung.png',
    tag: 'Kinderkleidung',
  },
  {
    name: 'Babyausstattung',
    description: 'Alles für die Kleinsten,  Kinderbetten, Kinderwagen, Autositze, Wickeltische, Badewannen, Schoppenflaschen, Babykleider und vieles mehr.',
    image: '/images/Kinderwagen.png',
    tag: 'Kinderwagen',
  },
  {
    name: 'Sportartikel',
    description: 'Fussballschuhe, Turnschuhe, Sport- und Skiausrüstung für aktive Kinder <br /> Plüschtiere (streichen).',
    image: '/images/Sportartikel.png',
    tag: 'Sportartikel',
  },
  {
    name: 'Spielzeug',
    description: 'Gesellschafts- und  Geschicklichkeitsspiele, Puzzles, Playmobile, Lego und vieles mehr für neugierige Kinder, die gerne Neues ausprobieren.',
    image: '/images/Plüschtiere.png',
    tag: 'Plüschtiere',
  },
 {
    name: 'Schwimmartikel',
    description: 'Badekleider und Schwimmhilfen haben wir das ganze Jahr im Sortiment.',
    image: '/images/Schwimmartikel.png',
    tag: 'Schwimmartikel',
  },

  
];

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
           Sie finden alles für Ihre Kinder bei uns, von der Erstausstattung für Ihr Baby bis zu trendigen Artikeln für Teenager.
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
