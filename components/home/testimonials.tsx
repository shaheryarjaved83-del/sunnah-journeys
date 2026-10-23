'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { Reveal } from '@/components/animations/reveal'
import { Accent, SectionHeading } from '@/components/shared/section-heading'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    quote:
      'The planning process felt organized and reassuring. Having clear information made preparing for the journey much easier.',
    theme: 'On preparation',
  },
  {
    quote: 'A peaceful travel experience begins with thoughtful preparation. The attention to detail is what matters most.',
    theme: 'On attention to detail',
  },
  {
    quote:
      'Being able to focus on worship instead of worrying about arrangements is exactly what pilgrims hope for.',
    theme: 'On peace of mind',
  },
]

export function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: 'center' })
  const [selected, setSelected] = useState(0)

  const onSelect = useCallback(() => {
    if (embla) setSelected(embla.selectedScrollSnap())
  }, [embla])

  useEffect(() => {
    if (!embla) return
    embla.on('select', onSelect)
    embla.on('reInit', onSelect)
    return () => {
      embla.off('select', onSelect)
      embla.off('reInit', onSelect)
    }
  }, [embla, onSelect])

  return (
    <section className="relative overflow-hidden py-24 sm:py-32" aria-labelledby="testimonials-heading" aria-roledescription="carousel">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Reflections"
          title={
            <span id="testimonials-heading">
              Stories From <Accent>Sacred Journeys.</Accent>
            </span>
          }
        />

        <Reveal delay={0.1} className="relative mx-auto mt-14 max-w-4xl">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((t, i) => (
                <div
                  key={t.theme}
                  className="min-w-0 flex-[0_0_100%] px-2"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${testimonials.length}`}
                >
                  <figure className="relative rounded-[2rem] border border-line bg-white px-7 py-12 text-center sm:px-16 sm:py-16">
                    <span className="absolute inset-2 rounded-[1.6rem] border border-gold/20" aria-hidden />
                    <Quote className="mx-auto size-10 text-gold" strokeWidth={1} aria-hidden />
                    <blockquote className="relative mt-6 font-serif text-2xl leading-snug text-ink italic sm:text-[2.1rem]">
                      {`“${t.quote}”`}
                    </blockquote>
                    <figcaption className="relative mt-8 flex flex-col items-center gap-1.5">
                      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald">{t.theme}</span>
                      <span className="rounded-full bg-sage-50 px-3 py-1 text-[0.7rem] text-muted-ink">Illustrative testimonial</span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => embla?.scrollPrev()}
              aria-label="Previous testimonial"
              className="flex size-12 items-center justify-center rounded-full border border-line bg-white text-emerald transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowLeft className="size-4" aria-hidden />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.theme}
                  type="button"
                  onClick={() => embla?.scrollTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={selected === i}
                  className="flex h-6 items-center"
                >
                  <span className={cn('block h-1.5 rounded-full transition-all duration-500', selected === i ? 'w-8 bg-gold' : 'w-1.5 bg-emerald/25')} />
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => embla?.scrollNext()}
              aria-label="Next testimonial"
              className="flex size-12 items-center justify-center rounded-full border border-line bg-white text-emerald transition-colors hover:border-gold hover:text-gold"
            >
              <ArrowRight className="size-4" aria-hidden />
            </button>
          </div>
          <p className="mt-6 text-center text-xs text-muted-ink">
            These are sample reflections written for this demonstration, not reviews from real customers.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
