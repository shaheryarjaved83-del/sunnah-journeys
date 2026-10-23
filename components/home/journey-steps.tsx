'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MessagesSquare, PackageSearch, FileCheck2, PlaneTakeoff } from 'lucide-react'
import { Accent, SectionHeading } from '@/components/shared/section-heading'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { icon: PackageSearch, title: 'Choose Your Package', text: 'Explore our available travel options and select the experience that suits your plans.' },
  { icon: MessagesSquare, title: 'Speak With Our Team', text: 'Discuss your preferred dates, accommodation, and travel requirements.' },
  { icon: FileCheck2, title: 'Prepare for Your Journey', text: 'Review your itinerary, documents, and important pilgrimage information.' },
  { icon: PlaneTakeoff, title: 'Begin Your Sacred Journey', text: 'Set out for Makkah and Madinah with a heart ready for worship.' },
]

export function JourneySteps() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const mm = gsap.matchMedia(root)
    mm.add(
        {
          desktop: '(min-width: 1024px)',
          reduce: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { desktop, reduce } = context.conditions as { desktop: boolean; reduce: boolean }
          const items = gsap.utils.toArray<HTMLElement>('[data-step]')
          const nodes = gsap.utils.toArray<HTMLElement>('[data-node]')

          if (reduce) {
            gsap.set('[data-progress]', { scaleX: 1, scaleY: 1 })
            gsap.set(nodes, { backgroundColor: '#164B42', color: '#fff' })
            return
          }

          gsap.fromTo(
            '[data-progress]',
            desktop ? { scaleX: 0, scaleY: 1 } : { scaleY: 0, scaleX: 1 },
            {
              scaleX: 1,
              scaleY: 1,
              ease: 'none',
              scrollTrigger: { trigger: root, start: desktop ? 'top 70%' : 'top 75%', end: desktop ? 'bottom 60%' : 'bottom 70%', scrub: 0.6 },
            },
          )

          items.forEach((item, i) => {
            gsap.from(item, {
              opacity: 0,
              y: 40,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: { trigger: item, start: 'top 85%' },
            })
            gsap.to(nodes[i], {
              backgroundColor: '#164B42',
              color: '#ffffff',
              borderColor: '#B89B5E',
              duration: 0.5,
              scrollTrigger: { trigger: item, start: desktop ? 'top 60%' : 'top 65%', toggleActions: 'play none none reverse' },
            })
          })
        },
      )
    return () => mm.revert()
  }, [])

  return (
    <section className="relative overflow-hidden bg-sage-50 py-24 sm:py-32" aria-labelledby="steps-heading">
      <div className="container-wide">
        <SectionHeading
          eyebrow="How It Works"
          title={
            <span id="steps-heading">
              Your Path to Umrah, <Accent>Made Simple.</Accent>
            </span>
          }
        />

        <div ref={rootRef} className="relative mt-16 lg:mt-24">
          <div className="absolute top-0 bottom-0 left-7 w-px bg-emerald/15 lg:top-7 lg:right-[12.5%] lg:bottom-auto lg:left-[12.5%] lg:h-px lg:w-auto" aria-hidden>
            <div data-progress className="h-full w-full origin-top bg-gradient-to-b from-emerald to-gold lg:origin-left lg:bg-gradient-to-r" />
          </div>

          <ol className="relative grid gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} data-step className="relative flex gap-6 lg:flex-col lg:items-center lg:text-center">
                <span
                  data-node
                  className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-emerald/20 bg-ivory text-emerald shadow-[0_0_0_8px_var(--color-sage-50)]"
                >
                  <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                </span>
                <div className="pt-1 lg:pt-6">
                  <p className="text-xs font-semibold tracking-[0.25em] text-gold">{`STEP 0${i + 1}`}</p>
                  <h3 className="mt-2 text-2xl leading-tight font-medium text-ink sm:text-[1.7rem]">{title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-ink lg:mx-auto">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
