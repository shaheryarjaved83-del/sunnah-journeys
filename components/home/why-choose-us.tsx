import { BedDouble, HandHeart, Plane, Sparkles } from 'lucide-react'
import { Stagger, StaggerItem } from '@/components/animations/reveal'
import { GeometricMotif } from '@/components/shared/geometric'
import { Accent, SectionHeading } from '@/components/shared/section-heading'

const reasons = [
  {
    icon: Plane,
    title: 'Seamless Travel Planning',
    text: 'From travel arrangements to accommodation, we help organize the essential details of your pilgrimage.',
  },
  {
    icon: BedDouble,
    title: 'Comfortable Stays',
    text: 'Explore carefully selected accommodation options designed for convenience and relaxation.',
  },
  {
    icon: HandHeart,
    title: 'Personalized Assistance',
    text: 'Receive guidance and support while planning a journey that suits your needs.',
  },
  {
    icon: Sparkles,
    title: 'Faith-Centered Experience',
    text: 'Travel with a focus on worship, reflection, and the spiritual significance of Umrah.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-sage-50 py-24 sm:py-32" aria-labelledby="why-heading">
      <div className="bg-pattern pointer-events-none absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" aria-hidden />
      <div className="container-wide relative">
        <SectionHeading
          eyebrow="The Sunnah Journeys Experience"
          title={
            <span id="why-heading">
              Your Peace of Mind, <Accent>Our Priority.</Accent>
            </span>
          }
        />

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <StaggerItem key={title} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_30px_60px_-35px_rgba(22,75,66,0.45)] sm:p-8">
                <GeometricMotif
                  className="absolute -top-10 -right-10 size-32 opacity-0 transition-all duration-700 group-hover:rotate-45 group-hover:opacity-60"
                  strokeWidth={0.7}
                />
                <span className="text-xs font-semibold tracking-[0.2em] text-gold">{`0${i + 1}`}</span>
                <span className="relative mt-6 flex size-14 items-center justify-center overflow-hidden rounded-2xl bg-sage-50 text-emerald">
                  <span
                    className="absolute inset-0 origin-bottom scale-y-0 bg-emerald transition-transform duration-500 group-hover:scale-y-100"
                    aria-hidden
                  />
                  <Icon className="relative size-6 transition-colors duration-500 group-hover:text-white" strokeWidth={1.4} aria-hidden />
                </span>
                <h3 className="mt-7 text-2xl leading-tight font-medium text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-ink">{text}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
