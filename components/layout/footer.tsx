import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { navLinks, siteConfig, getWhatsAppLink } from '@/lib/site-config'
import { Logo } from '@/components/shared/logo'
import { EightPointStar, OrnamentDivider } from '@/components/shared/geometric'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '@/components/shared/social-icons'

const journeyLinks = [
  { label: 'Economy Umrah', href: '/packages?category=Economy' },
  { label: 'Premium Umrah', href: '/packages?category=Premium' },
  { label: 'Luxury Umrah', href: '/packages?category=Luxury' },
  { label: 'Family Umrah', href: '/packages/family-umrah' },
]

export function Footer() {
  const whatsapp = getWhatsAppLink('Assalamu alaikum, I would like to enquire about Umrah packages.')
  const socials = [
    { label: 'Instagram', href: siteConfig.social.instagram, Icon: InstagramIcon },
    { label: 'Facebook', href: siteConfig.social.facebook, Icon: FacebookIcon },
    { label: 'WhatsApp', href: whatsapp ?? '', Icon: WhatsAppIcon },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-line bg-sage-50">
      <EightPointStar className="pointer-events-none absolute -top-24 -right-24 size-96 opacity-25" strokeWidth={0.35} />
      <div className="container-wide relative pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 font-serif text-2xl text-emerald italic">{siteConfig.tagline}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-ink">{siteConfig.shortDescription}</p>
            <ul className="mt-6 flex gap-3" aria-label="Social media">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex size-10 items-center justify-center rounded-full border border-emerald/15 bg-white text-emerald transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                    >
                      <Icon className="size-4" />
                    </a>
                  ) : (
                    <span
                      title={`${label} link not yet configured`}
                      aria-label={`${label} (link not yet configured)`}
                      role="img"
                      className="flex size-10 items-center justify-center rounded-full border border-dashed border-emerald/20 bg-white/50 text-emerald/40"
                    >
                      <Icon className="size-4" />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Explore" className="lg:col-span-2 lg:col-start-6">
            <h2 className="eyebrow font-sans">Explore</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink/80 transition-colors hover:text-emerald">
                    {l.label === 'Packages' ? 'Umrah Packages' : l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Our journeys" className="lg:col-span-2">
            <h2 className="eyebrow font-sans">Our Journeys</h2>
            <ul className="mt-5 space-y-3">
              {journeyLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-ink/80 transition-colors hover:text-emerald">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="eyebrow font-sans">Get in Touch</h2>
            <ul className="mt-5 space-y-4 text-sm text-ink/80">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                {siteConfig.contact.phoneHref ? (
                  <a href={`tel:${siteConfig.contact.phoneHref}`} className="hover:text-emerald">
                    {siteConfig.contact.phoneDisplay}
                  </a>
                ) : (
                  <span>{siteConfig.contact.phoneDisplay}</span>
                )}
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                {siteConfig.contact.emailHref ? (
                  <a href={`mailto:${siteConfig.contact.emailHref}`} className="hover:text-emerald">
                    {siteConfig.contact.emailDisplay}
                  </a>
                ) : (
                  <span>{siteConfig.contact.emailDisplay}</span>
                )}
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                <span>{siteConfig.contact.officeAddress}</span>
              </li>
            </ul>
          </div>
        </div>

        <OrnamentDivider className="mt-16" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center text-xs text-muted-ink md:flex-row md:text-left">
          <p>{`© 2026 ${siteConfig.name}. All rights reserved.`}</p>
          <p className="flex flex-col items-center gap-0.5 md:items-end">
            <span lang="ar" dir="rtl" className="text-lg text-emerald">
              سُبْحَانَ اللَّهِ وَبِحَمْدِهِ
            </span>
            <span className="italic">Glory and praise be to Allah.</span>
          </p>
        </div>
        <p className="mt-6 text-center text-[0.7rem] leading-relaxed text-muted-ink/80">
          Demonstration website. All packages, prices and testimonials are illustrative samples, not live offers.
        </p>
      </div>
    </footer>
  )
}
