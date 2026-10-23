import Image from 'next/image'
import { Compass, Eye, Gem, HandHeart, Heart, ShieldCheck, Sparkle } from 'lucide-react'
import { ImageReveal, Reveal, Stagger, StaggerItem } from '@/components/animations/reveal'
import { Parallax } from '@/components/animations/parallax'
import { GeometricMotif } from '@/components/shared/geometric'
import { Accent, SectionHeading } from '@/components/shared/section-heading'

export function Philosophy() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="philosophy-heading">
      <div className="container-wide grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6 lg:order-2">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-gold/70" aria-hidden />
              Our Philosophy
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="philosophy-heading" className="mt-5 text-4xl leading-[1.05] font-medium text-ink sm:text-5xl lg:text-6xl">
              Travel With <Accent>Purpose.</Accent>
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-ink">
            <Reveal delay={0.14}>
              <p>
                Umrah is not simply a trip abroad. It is an act of worship — a moment when a believer steps away from the
                noise of daily life and turns wholeheartedly towards Allah. We believe the way a pilgrimage is planned should
                honour that intention.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Our role is to take the weight of logistics off your shoulders. By bringing clarity to travel, accommodation and
                preparation, we hope to give you the space to arrive calm, present and ready to devote yourself to prayer.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="font-serif text-2xl leading-snug text-emerald italic">
                {'“Thoughtful planning, so your heart can remain where it belongs.”'}
              </p>
            </Reveal>
          </div>
        </div>
        <div className="relative lg:col-span-6 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <ImageReveal className="col-span-2 aspect-[16/10] rounded-[2rem]">
              <Image
                src="/images/nabawi-interior.png"
                alt="Rows of ornate columns and arches inside Masjid an-Nabawi"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </ImageReveal>
            <Parallax distance={50}>
              <ImageReveal className="arch aspect-[3/4]" delay={0.15}>
                <Image src="/images/madinah-courtyard.png" alt="Umbrella canopies over the courtyard of Masjid an-Nabawi" fill sizes="(min-width: 1024px) 22vw, 50vw" className="object-cover" />
              </ImageReveal>
            </Parallax>
            <Reveal delay={0.3} className="flex flex-col justify-center rounded-[2rem] border border-gold/40 bg-sage-50 p-6 text-center">
            <GeometricMotif className="mx-auto size-12" />
              <p className="mt-4 font-serif text-xl leading-snug text-ink italic">Worship first. Everything else, arranged with care.</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export function MissionVision() {
  const items = [
    {
      icon: Compass,
      label: 'Our Mission',
      text: 'To help pilgrims plan meaningful Umrah journeys through thoughtful service, clear communication, and attention to the details that matter.',
    },
    {
      icon: Eye,
      label: 'Our Vision',
      text: 'To make sacred travel feel accessible, reassuring, and spiritually fulfilling for every pilgrim.',
    },
  ]
  return (
    <section className="relative overflow-hidden bg-sage-50 py-24 sm:py-32" aria-labelledby="mission-heading">
      <div className="bg-pattern pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="container-wide relative">
        <SectionHeading
          eyebrow="What Guides Us"
          title={
            <span id="mission-heading">
              Mission <Accent tone="gold">&amp;</Accent> Vision
            </span>
          }
        />
        <Stagger className="mt-14 grid gap-6 md:grid-cols-2" stagger={0.18}>
          {items.map(({ icon: Icon, label, text }) => (
            <StaggerItem key={label} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-[2rem] border border-line bg-white p-8 transition-all duration-500 hover:border-gold/60 hover:shadow-[0_30px_70px_-40px_rgba(22,75,66,0.5)] sm:p-12">
                <span className="pointer-events-none absolute inset-2 rounded-[1.6rem] border border-gold/15" aria-hidden />
                <GeometricMotif className="absolute -right-12 -bottom-12 size-48 opacity-30 transition-transform duration-1000 group-hover:rotate-45" strokeWidth={0.5} />
                <span className="relative flex size-16 items-center justify-center rounded-full bg-emerald text-white ring-8 ring-sage-50">
                  <Icon className="size-6" strokeWidth={1.4} aria-hidden />
                </span>
                <h3 className="relative mt-8 text-3xl font-medium text-ink sm:text-4xl">{label}</h3>
                <span className="gold-rule relative mt-4 block h-px w-16" aria-hidden />
                <p className="relative mt-6 text-lg leading-relaxed text-muted-ink">{text}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

const values = [
  { icon: Heart, title: 'Sincerity', text: 'We approach every journey with honesty and a genuine wish to serve the guests of Allah.' },
  { icon: HandHeart, title: 'Care', text: 'We listen closely to each pilgrim’s needs — from families and first-timers to elderly travellers.' },
  { icon: ShieldCheck, title: 'Trust', text: 'Clear information, transparent communication and nothing promised that cannot be confirmed.' },
  { icon: Gem, title: 'Excellence', text: 'We pay attention to the small details that make a pilgrimage calmer and more comfortable.' },
]

export function Values() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="values-heading">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our Values"
          title={
            <span id="values-heading">
              What <Accent>Matters</Accent> to Us
            </span>
          }
          description="Four principles shape how we plan, communicate and care for every pilgrim."
        />
        <Stagger className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }, i) => (
            <StaggerItem key={title} className="h-full">
              <article className="group relative flex h-full flex-col bg-ivory p-8 transition-colors duration-500 hover:bg-white sm:p-10">
                <div className="flex items-center justify-between">
                  <Icon className="size-8 text-emerald transition-colors duration-500 group-hover:text-gold" strokeWidth={1.2} aria-hidden />
                  <span className="font-serif text-5xl text-gold/30 transition-colors duration-500 group-hover:text-gold/60">{`0${i + 1}`}</span>
                </div>
                <h3 className="mt-10 text-3xl font-medium text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-ink">{text}</p>
                <span className="mt-auto flex items-center gap-2 pt-8 text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden>
                  <Sparkle className="size-3" />
                  <span className="h-px w-12 bg-gold" />
                </span>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
