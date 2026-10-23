import type { Metadata } from 'next'
import { PageHero } from '@/components/shared/page-hero'
import { ButtonLink } from '@/components/shared/button-link'
import { Accent } from '@/components/shared/section-heading'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'
import { ArabicPrayer } from '@/components/shared/arabic-prayer'
import { Accordion } from '@/components/shared/faq-accordion'
import { Reveal } from '@/components/animations/reveal'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Sunnah Journeys to plan your Umrah pilgrimage. Enquire about packages, ask questions, or request a custom journey.',
  openGraph: {
    title: 'Contact Sunnah Journeys',
    description: 'Your sacred journey begins here. Reach out to plan your Umrah.',
    images: ['/images/nabawi-dusk.png'],
  },
}

const contactFaqs = [
  {
    question: 'What happens after I submit an enquiry?',
    answer:
      'Once you submit the form, our team will review your details and get in touch to discuss suitable packages, dates and arrangements. No payment is taken and no booking is made at the enquiry stage.',
  },
  {
    question: 'Do I need to pay to make an enquiry?',
    answer:
      'No. Submitting an enquiry is completely free and carries no obligation. It is simply a way to start a conversation about your journey.',
  },
  {
    question: 'Can I request a custom or tailored package?',
    answer:
      'Absolutely. Choose "Custom / Tailored Package" in the form and share your preferences in the message field. Our team can discuss options that suit your dates, group size and travel style.',
  },
  {
    question: 'How quickly will you respond?',
    answer:
      'We aim to respond to all enquiries within one to two working days. For urgent matters, please reach us by phone or WhatsApp during office hours.',
  },
  {
    question: 'Can I visit your office in person?',
    answer:
      'You are welcome to visit during our office hours. We recommend calling ahead to ensure someone is available to assist you.',
  },
]

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ package?: string }> }) {
  const { package: pkgParam } = await searchParams
  const initialPackage = pkgParam ?? undefined

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Let&apos;s Plan Your <Accent>Journey</Accent> Together.
          </>
        }
        description="Whether you have a question, a specific package in mind, or would like a tailored plan, we're here to help you every step of the way."
        image="/images/nabawi-dusk.png"
        imageAlt="Masjid an-Nabawi at dusk with illuminated minarets against a deep blue sky"
      >
        <ButtonLink href="/packages" size="lg" variant="secondary">
          Browse Packages
        </ButtonLink>
      </PageHero>

      <section id="enquiry" className="scroll-mt-24 py-16 sm:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <ContactForm initialPackage={initialPackage} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-sage-50 py-20 sm:py-28" aria-labelledby="faq-heading">
        <div className="container-wide grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="eyebrow flex items-center gap-3">
                  <span className="h-px w-8 bg-gold/70" aria-hidden />
                  Before You Ask
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 id="faq-heading" className="mt-5 text-4xl leading-[1.05] font-medium text-ink sm:text-5xl">
                  Quick <Accent>Answers</Accent>
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-5 leading-relaxed text-muted-ink">
                  Here are some common questions about the enquiry process. If you can&apos;t find what you&apos;re looking
                  for, the form above is the best way to reach us.
                </p>
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.1} className="lg:col-span-8">
            <Accordion items={contactFaqs} />
          </Reveal>
        </div>
      </section>

      <ArabicPrayer
        eyebrow="A Closing Prayer"
        heading="May Your Journey Be Accepted."
        arabic="تَقَبَّلَ اللَّهُ"
        translation="May Allah accept."
        reference="A common prayer for pilgrims"
        tone="ivory"
      />
    </>
  )
}
