import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Amiri, Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/lib/site-config'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { FloatingActions, ScrollProgress } from '@/components/layout/floating-ui'
import { MotionProvider } from '@/components/animations/motion-provider'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })

const amiri = Amiri({ subsets: ['arabic'], weight: ['400', '700'], variable: '--font-amiri', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Premium Umrah Journeys to Makkah & Madinah`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.statement,
  keywords: ['Umrah packages', 'Umrah travel', 'Makkah', 'Madinah', 'pilgrimage', 'Islamic travel', 'Sunnah Journeys'],
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.statement,
    images: [{ url: '/images/hero-kaaba.png', width: 1376, height: 768, alt: 'The Holy Kaaba at Masjid al-Haram in soft morning light' }],
    locale: 'en_GB',
  },
  twitter: { card: 'summary_large_image', title: siteConfig.name, description: siteConfig.statement, images: ['/images/hero-kaaba.png'] },
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FAF9F6',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${manrope.variable} ${amiri.variable} bg-ivory`}>
      <body className="antialiased">
        <MotionProvider>
          <ScrollProgress />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <FloatingActions />
        </MotionProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
