'use client'

import { motion } from 'framer-motion'

const brands = [
  { name: 'LEGO', color: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
  { name: 'Playmobil', color: 'bg-red-50 text-red-700 border-red-200' },
  { name: 'Ravensburger', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { name: 'HABA', color: 'bg-orange-50 text-orange-700 border-orange-200' },
  { name: 'Djeco', color: 'bg-pink-50 text-pink-700 border-pink-200' },
  { name: 'BRIO', color: 'bg-red-50 text-red-800 border-red-200' },
  { name: 'Schleich', color: 'bg-green-50 text-green-700 border-green-200' },
  { name: 'Tonies', color: 'bg-teal-50 text-teal-700 border-teal-200' },
  { name: 'SIGIKID', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  { name: 'Selecta', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  { name: 'Ostheimer', color: 'bg-lime-50 text-lime-700 border-lime-200' },
  { name: 'Vilac', color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
]

export function Marken() {
  return (
    <section id="marken" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Unsere Marken
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Qualität, der wir vertrauen
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Wir führen ausschließlich Hersteller, die für Sicherheit, Langlebigkeit und Spielwert stehen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className={`px-7 py-4 rounded-2xl border font-semibold text-base tracking-wide hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default ${brand.color}`}
            >
              {brand.name}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          … und viele weitere ausgewählte Hersteller. Fragen Sie uns gerne persönlich.
        </motion.p>
      </div>
    </section>
  )
}
