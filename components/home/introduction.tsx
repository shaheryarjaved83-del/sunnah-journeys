import Image from 'next/image'
import { CalendarCheck, Compass, Hotel } from 'lucide-react'
import { ImageReveal, Reveal, Stagger, StaggerItem } from '@/components/animations/reveal'
import { Parallax } from '@/components/animations/parallax'
import { ButtonLink } from '@/components/shared/button-link'
import { EightPointStar } from '@/components/shared/geometric'
import { Accent } from '@/components/shared/section-heading'

const highlights = [
  { icon: CalendarCheck, title: 'Thoughtfully Planned Journeys', text: 'Itineraries shaped around worship, rest and reflection.' },
  { icon: Hotel, title: 'Comfortable Accommodation', text: 'Carefully considered stays in both sacred cities.' },
  { icon: Compass, title: 'Dedicated Travel Guidance', text: 'Clear information from first enquiry to return home.' },
]

export function Introduction() {
  return (
    <section id="introduction" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32" aria-labelledby="intro-heading">
      <div className="container-wide grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="relative mx-auto w-full max-w-xl lg:mx-0">
          <EightPointStar className="absolute -top-10 -left-10 size-40 opacity-60" strokeWidth={0.6} />
          <div className="relative grid grid-cols-12 gap-4">
            <ImageReveal className="arch col-span-7 aspect-[3/4.4] shadow-[0_40px_80px_-40px_rgba(22,75,66,0.45)]">
              <Image
                src="/images/masjid-al-haram.png"
                alt="White marble colonnades of Masjid al-Haram in warm morning light"
                fill
                sizes="(min-width: 1024px) 28vw, 60vw"
                className="object-cover"
              />
            </ImageReveal>
            <div className="col-span-5 flex flex-col justify-end gap-4 pb-6">
              <Parallax distance={70}>
                <ImageReveal className="arch aspect-[3/4.2] border-4 border-ivory shadow-[0_30px_60px_-30px_rgba(22,75,66,0.5)]" delay={0.2}>
                  <Image
                    src="/images/masjid-an-nabawi.png"
                    alt="The Green Dome and minarets of Masjid an-Nabawi in Madinah"
                    fill
                    sizes="(min-width: 1024px) 20vw, 40vw"
                    className="object-cover"
                  />
                </ImageReveal>
              </Parallax>
              <Reveal delay={0.4} className="rounded-2xl border border-gold/40 bg-white p-4 text-center">
                <p className="font-serif text-lg leading-tight text-emerald italic">Makkah</p>
                <span className="gold-rule mx-auto my-2 block h-px w-10" aria-hidden />
                <p className="font-serif text-lg leading-tight text-emerald italic">Madinah</p>
              </Reveal>
            </div>
          </div>
        </div>

        <div>
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-gold/70" aria-hidden />
              More Than Just a Journey
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="intro-heading" className="mt-5 text-4xl leading-[1.05] font-medium text-ink sm:text-5xl lg:text-[3.5rem]">
              Where Every Step Brings You <Accent>Closer to Allah.</Accent>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg leading-relaxed text-muted-ink">
              Umrah is more than a destination. It is a deeply personal journey of faith, reflection, and renewal. At Sunnah
              Journeys, we aim to make your pilgrimage comfortable and meaningful, helping you dedicate your time and energy to
              worship.
            </p>
          </Reveal>

          <Stagger className="mt-10 space-y-3">
            {highlights.map(({ icon: Icon, title, text }) => (
              <StaggerItem key={title}>
                <div className="group flex items-start gap-5 rounded-2xl border border-transparent p-4 transition-colors duration-500 hover:border-line hover:bg-white">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-sage-50 text-emerald ring-1 ring-gold/30 transition-colors duration-500 group-hover:bg-emerald group-hover:text-white">
                    <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-ink">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-ink">{text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2} className="mt-10">
            <ButtonLink href="/about" variant="secondary">
              Our Approach
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
