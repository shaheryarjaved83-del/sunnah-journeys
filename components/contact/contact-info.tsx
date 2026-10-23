import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig, getWhatsAppLink } from '@/lib/site-config'
import { Reveal } from '@/components/animations/reveal'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '@/components/shared/social-icons'

export function ContactInfo() {
  const { contact, social } = siteConfig
  const whatsappLink = getWhatsAppLink('Assalamu alaikum, I would like to enquire about Umrah packages.')

  const methods = [
    {
      icon: Phone,
      label: 'Call Us',
      value: contact.phoneDisplay,
      href: contact.phoneHref ? `tel:${contact.phoneHref}` : null,
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: contact.emailDisplay,
      href: contact.emailHref ? `mailto:${contact.emailHref}` : null,
    },
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      value: contact.whatsappDisplay,
      href: whatsappLink,
    },
  ]

  const socialLinks = [
    { label: 'Instagram', href: social.instagram, Icon: InstagramIcon },
    { label: 'Facebook', href: social.facebook, Icon: FacebookIcon },
  ].filter((s) => s.href)

  return (
    <div className="lg:sticky lg:top-28">
      <Reveal>
        <p className="eyebrow flex items-center gap-3">
          <span className="h-px w-8 bg-gold/70" aria-hidden />
          Get in Touch
        </p>
        <h2 className="mt-4 text-3xl font-medium text-ink sm:text-4xl">We're Here to Help</h2>
        <p className="mt-3 leading-relaxed text-muted-ink">
          Have a question or ready to start planning? Reach out through any of the channels below, or fill out the enquiry
          form and we'll get back to you.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <ul className="mt-8 space-y-3">
          {methods.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-sage-50 text-emerald transition-colors group-hover:bg-emerald group-hover:text-white">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{label}</p>
                  <p className="mt-0.5 text-sm text-ink">{value}</p>
                </div>
              </>
            )
            return (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition-all hover:border-gold hover:shadow-[0_15px_40px_-20px_rgba(22,75,66,0.3)]"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4">{content}</div>
                )}
              </li>
            )
          })}
        </ul>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-3 rounded-2xl border border-line bg-sage-50 p-5">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-emerald" aria-hidden />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Office Address</p>
              <p className="mt-1 text-sm leading-relaxed text-ink">{contact.officeAddress}</p>
            </div>
          </div>
          <div className="mt-4 flex items-start gap-3 border-t border-line pt-4">
            <Clock className="mt-0.5 size-5 shrink-0 text-emerald" aria-hidden />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Office Hours</p>
              <p className="mt-1 text-sm leading-relaxed text-ink">{contact.officeHours}</p>
            </div>
          </div>
        </div>
      </Reveal>

      {socialLinks.length > 0 && (
        <Reveal delay={0.2}>
          <div className="mt-5 flex items-center gap-3">
            <span className="text-sm text-muted-ink">Follow us:</span>
            <div className="flex gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-emerald/15 bg-white text-emerald transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      )}
    </div>
  )
}
