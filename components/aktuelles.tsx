'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

const news = [
  {
    category: 'Neuheiten',
    title: 'Die schönsten Spielzeugtrends 2025',
    excerpt:
      'Nachhaltigkeit, Holzspielzeug und kreative Bauspiele sind die grossen Themen dieses Jahr. Entdecken Sie unsere Neuheiten direkt im Geschäft.',
    date: 'Juli 2025',
    color: 'bg-amber-50 border-amber-200 text-amber-700',
  },
  {
    category: 'Geschenkideen',
    title: 'Herbst & Weihnachten – frühzeitig schenken',
    excerpt:
      'Damit unter dem Tannenbaum das Richtige liegt: Wir helfen Ihnen schon jetzt bei der Auswahl und reservieren Ihr Wunschgeschenk.',
    date: 'August 2025',
    color: 'bg-red-50 border-red-200 text-red-700',
  },
  {
    category: 'Ferienaktionen',
    title: 'Herbstferien-Basteln im Geschäft',
    excerpt:
      'In den Herbstferien laden wir Kinder zu einem kreativen Nachmittag ein – mit Farbe, Material und viel Spass. Kostenlos, ohne Anmeldung.',
    date: 'Oktober 2025',
    color: 'bg-green-50 border-green-200 text-green-700',
  },
  {
    category: 'Neue Marken',
    title: 'Neu bei uns: Vilac & Ostheimer',
    excerpt:
      'Wir freuen uns, zwei weitere hochwertige Hersteller in unser Sortiment aufgenommen zu haben. Vorbei kommen und entdecken!',
    date: 'Juni 2025',
    color: 'bg-blue-50 border-blue-200 text-blue-700',
  },
  {
    category: 'Bastelideen',
    title: '5 einfache Bastelideen für Regentage',
    excerpt:
      'Wenn das Wetter draussen ungemütlich wird, sind kreative Aktivitäten zu Hause genau das Richtige. Wir empfehlen unsere Bastelsortiment.',
    date: 'Mai 2025',
    color: 'bg-purple-50 border-purple-200 text-purple-700',
  },
  {
    category: 'Veranstaltungen',
    title: 'Spielzeugbörse Altdorf – wir sind dabei',
    excerpt:
      'Besuchen Sie uns an der Spielzeugbörse in Altdorf. Wir zeigen Neuheiten und freuen uns auf Gespräche mit Familien aus der Region.',
    date: 'September 2025',
    color: 'bg-orange-50 border-orange-200 text-orange-700',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export function Aktuelles() {
  return (
    <section id="aktuelles" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Aktuelles
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            News & Aktionen
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Bleiben Sie auf dem Laufenden – über neue Spielzeuge, saisonale Aktionen und Events.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {news.map((item) => (
            <motion.article
              key={item.title}
              variants={itemVariants}
              className="bg-card border border-border rounded-3xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${item.color}`}>
                  {item.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  {item.date}
                </span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {item.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all cursor-pointer group">
                Mehr lesen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
