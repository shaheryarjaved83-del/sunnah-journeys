import { Reveal } from '@/components/animations/reveal'
import { Accordion } from '@/components/shared/faq-accordion'
import { ButtonLink } from '@/components/shared/button-link'
import { Accent } from '@/components/shared/section-heading'

const faqs = [
  {
    question: 'What documents are required for Umrah?',
    answer:
      'Typically you will need a passport with sufficient validity, an appropriate visa or travel authorisation, and any health documentation requested at the time of travel. Requirements differ by nationality and can change, so please confirm the current rules with the official Saudi authorities. Our team can share general guidance while you prepare.',
  },
  {
    question: 'Can I customize my Umrah package?',
    answer:
      'Yes. You can discuss preferred dates, the balance of nights between Makkah and Madinah, room types and travel style with our team. Any tailored option is subject to availability and is only confirmed in writing.',
  },
  {
    question: 'Are flights included in the package?',
    answer:
      'Our sample packages include return flight planning. Whether flights are bundled into a final quotation, and which airlines or routes are available, depends on your dates and is confirmed individually during your enquiry.',
  },
  {
    question: 'What accommodation options are available?',
    answer:
      'Options range from comfortable standard hotels to premium and luxury stays closer to the Haramain. Specific hotels, distances and room types depend on season and availability and will be presented to you before anything is confirmed.',
  },
  {
    question: 'Can families travel together?',
    answer:
      'Absolutely. Families can request connecting, triple or quad rooms and a gentler itinerary pace. Please let us know about children, elderly travellers or any accessibility needs so suitable options can be discussed.',
  },
  {
    question: 'When is the best time to perform Umrah?',
    answer:
      'Umrah can be performed throughout the year. Many pilgrims prefer the cooler months, while Ramadan is especially valued for its spiritual reward but tends to be busier with limited availability. The best time is the one that suits your circumstances and allows you to worship with ease.',
  },
]

export function Faq() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="faq-heading">
      <div className="container-wide grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-gold/70" aria-hidden />
                Frequently Asked
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="faq-heading" className="mt-5 text-4xl leading-[1.05] font-medium text-ink sm:text-5xl">
                Questions Before <Accent>Your Journey?</Accent>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 leading-relaxed text-muted-ink">
                Travel rules and entry requirements can change. Always confirm the latest information with official
                authorities before you travel.
              </p>
              <ButtonLink href="/contact" variant="secondary" className="mt-8">
                Ask Our Team
              </ButtonLink>
            </Reveal>
          </div>
        </div>
        <Reveal delay={0.1} className="lg:col-span-8">
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  )
}
