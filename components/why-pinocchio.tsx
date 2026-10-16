'use client'

import { motion } from 'framer-motion'
import { Users, Award, Lightbulb, MapPin } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Persönliche Beratung',
    description: 'Wir nehmen uns Zeit für jede Familie.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Award,
    title: 'Kleider / Schuhe',
    description: 'Verschiedene Kleider- und Schuhmarken in allen Grössen (Baby – Teenager), auch viele Markenartikel.',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: Lightbulb,
    title: 'Kreativität fördern',
    description: 'Spielzeug, das Fantasie und Lernen verbindet.',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    icon: MapPin,
    title: 'Regional',
    description: 'Ihre Kinderartikelbörse im Herzen von Altdorf.',
    color: 'bg-secondary text-foreground',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function WhyPinocchio() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Warum Pinocchio?
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Mehr als nur ein Secondhandgeschäft
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              variants={itemVariants}
              className="group bg-card border border-border rounded-3xl p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${feat.color}`}>
                <feat.icon className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {feat.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
