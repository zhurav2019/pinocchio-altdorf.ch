'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Leaf, Heart, Star, Quote } from 'lucide-react'

const values = [
  { icon: Leaf, label: 'Nachhaltigkeit', desc: 'Langlebiges Spielzeug aus natürlichen Materialien.' },
  { icon: Heart, label: 'Leidenschaft', desc: 'Jedes Spielzeug wird mit Herzblut ausgewählt.' },
  { icon: Star, label: 'Qualität', desc: 'Nur geprüfte Marken mit hohem Spielwert.' },
]

const testimonials = [
  {
    text: 'Pinocchio ist unser Lieblingsgeschäft in Altdorf. Die Beratung ist wunderbar persönlich und das Sortiment einzigartig.',
    author: 'Familie Müller, Altdorf',
  },
  {
    text: 'Hier findet man immer das passende Geschenk – der Laden hat Charme und die Mitarbeitenden kennen ihr Sortiment in- und auswendig.',
    author: 'Laura B., Flüelen',
  },
  {
    text: 'Ich kaufe seit Jahren bei Pinocchio. Das Spielzeug ist hochwertig und meine Kinder lieben es. Einfach empfehlenswert!',
    author: 'Markus S., Schattdorf',
  },
]

const galleryImages = [
  { src: '/images/shop.png', alt: 'Geschäft Pinocchio von aussen', wide: true },
  { src: '/images/holzspielzeug.png', alt: 'Holzspielzeug im Regal' },
  { src: '/images/about.png', alt: 'Persönliche Beratung im Geschäft' },
  { src: '/images/kuscheltiere.png', alt: 'Kuscheltiere im Display' },
  { src: '/images/gesellschaftsspiele.png', alt: 'Gesellschaftsspiele' },
]

export function UeberUns() {
  return (
    <section id="ueber-uns" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-80 lg:h-[480px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/about.png"
                alt="Team im Spielwarengeschäft Pinocchio, persönliche Beratung"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-card border border-border rounded-2xl p-4 shadow-lg hidden sm:block">
              <p className="text-3xl font-bold font-serif text-foreground">30+</p>
              <p className="text-xs text-muted-foreground">Jahre Erfahrung</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
                Über uns
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-5 text-balance">
                Ein Ort, wo Kindheitserinnerungen entstehen
              </h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Pinocchio ist ein familienfreundliches Fachgeschäft in Altdorf. Unser Ziel ist es, Kindern
                Freude zu bereiten und Eltern mit persönlicher Beratung zu unterstützen. Qualität,
                Nachhaltigkeit und langlebiges Spielzeug stehen bei uns im Mittelpunkt.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4 text-pretty">
                Wir glauben, dass gutes Spielzeug mehr ist als Unterhaltung – es fördert Kreativität,
                soziale Fähigkeiten und das Entdecken der Welt. Jedes Produkt in unserem Sortiment wurde
                mit Bedacht ausgewählt.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map((val) => (
                <div
                  key={val.label}
                  className="flex flex-col items-start gap-2 p-4 bg-card rounded-2xl border border-border"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <val.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <p className="font-semibold text-sm text-foreground">{val.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">
            Einblicke in unser Geschäft
          </h3>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-2xl break-inside-avoid ${
                  i === 0 ? 'aspect-[16/9]' : 'aspect-square'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Was unsere Kunden sagen
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-card border border-border rounded-3xl p-7 flex flex-col gap-4"
              >
                <Quote className="w-8 h-8 text-accent/40" aria-hidden="true" />
                <p className="text-muted-foreground leading-relaxed italic text-sm flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <footer className="text-sm font-semibold text-foreground">{t.author}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
