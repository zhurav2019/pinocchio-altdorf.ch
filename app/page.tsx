import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { WhyPinocchio } from '@/components/why-pinocchio'
import { Sortiment } from '@/components/sortiment'
import { Geschenkideen } from '@/components/geschenkideen'
import { Marken } from '@/components/marken'
import { Aktuelles } from '@/components/aktuelles'
import { UeberUns } from '@/components/ueber-uns'
import { Kontakt } from '@/components/kontakt'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <WhyPinocchio />
        <Sortiment />
        <Geschenkideen />
        <Marken />
        <Aktuelles />
        <UeberUns />
        <FAQ />
        <Kontakt />
      </main>
      <Footer />
    </>
  )
}
