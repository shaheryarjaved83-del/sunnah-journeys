/**
 * Central business configuration.
 * Replace the bracketed placeholders with the client's real details before launch.
 * Leave a value as an empty string to hide/disable the related link safely.
 */
export const siteConfig = {
  name: 'Sunnah Journeys',
  tagline: 'Your Sacred Journey Begins Here.',
  statement:
    'Experience the blessings of Umrah with thoughtfully curated journeys designed around comfort, devotion, and peace of mind.',
  shortDescription: 'Thoughtfully planned Umrah journeys, inspired by faith and created with care.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sunnah-journeys.vercel.app',
  currency: 'GBP',
  isDemo: true,

  contact: {
    phoneDisplay: '[CLIENT PHONE]',
    /** E.164 format, e.g. +441234567890. Empty = link disabled. */
    phoneHref: '',
    emailDisplay: '[CLIENT EMAIL]',
    emailHref: '',
    whatsappDisplay: '[CLIENT WHATSAPP]',
    /** Digits only with country code, e.g. 441234567890. Empty = WhatsApp disabled. */
    whatsappNumber: '',
    officeAddress: '[CLIENT OFFICE ADDRESS]',
    officeHours: '[CLIENT OPENING HOURS]',
    /** Google Maps embed URL for the real office. Empty = decorative placeholder shown. */
    mapEmbedUrl: '',
  },

  social: {
    instagram: '',
    facebook: '',
  },
} as const

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/packages', label: 'Packages' },
  { href: '/contact', label: 'Contact' },
] as const

export function getWhatsAppLink(message?: string): string | null {
  const number = siteConfig.contact.whatsappNumber.replace(/\D/g, '')
  if (!number) return null
  const text = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${number}${text}`
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: siteConfig.currency,
    maximumFractionDigits: 0,
  }).format(value)
}
