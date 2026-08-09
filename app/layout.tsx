import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Lora } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pinocchio – Spielwarengeschäft Altdorf',
  description:
    'Hochwertiges Spielzeug, kreative Geschenkideen und persönliche Beratung im Herzen von Altdorf (UR). Ihr Spielwarengeschäft für die ganze Familie.',
  keywords: [
    'Spielzeug Altdorf',
    'Spielwarengeschäft Uri',
    'Holzspielzeug Schweiz',
    'Geschenkideen Kinder',
    'LEGO Playmobil Altdorf',
  ],
  authors: [{ name: 'Pinocchio Spielwaren' }],
  openGraph: {
    title: 'Pinocchio – Spielwarengeschäft Altdorf',
    description:
      'Hochwertiges Spielzeug, kreative Geschenkideen und persönliche Beratung im Herzen von Altdorf.',
    locale: 'de_CH',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#6b8f5e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${plusJakartaSans.variable} ${lora.variable} bg-background`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
