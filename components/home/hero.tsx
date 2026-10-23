'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ButtonLink } from '@/components/shared/button-link'
import { GeometricMotif } from '@/components/shared/geometric'

const ease = [0.22, 1, 0.36, 1] as const

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden lg:items-center" aria-labelledby="hero-heading">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.14 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/images/hero-kaaba.png"
            alt="Pilgrims in white ihram performing tawaf around the Holy Kaaba at Masjid al-Haram in soft morning light"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_center]"
          />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/80 to-ivory/10 lg:bg-gradient-to-r lg:from-ivory/95 lg:via-ivory/70 lg:to-transparent" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ivory to-transparent" aria-hidden />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-28 right-[6%] hidden lg:block"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
        transition={{ opacity: { duration: 1.6, delay: 0.8 }, scale: { duration: 1.6, delay: 0.8 }, y: { duration: 9, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <GeometricMotif className="size-44 text-white/80" strokeWidth={0.6} />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[18%] left-[44%] hidden xl:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 10, 0] }}
        transition={{ opacity: { duration: 1.6, delay: 1.1 }, y: { duration: 11, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <GeometricMotif className="size-20" strokeWidth={1} />
      </motion.div>

      <motion.div style={{ y: contentY }} className="container-wide relative z-10 w-full pt-32 pb-24 lg:pt-36 lg:pb-28">
        <div className="max-w-2xl">
          <motion.p
            className="eyebrow flex items-center gap-3"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
          >
            <span className="h-px w-10 bg-gold" aria-hidden />
            Welcome to Sunnah Journeys
          </motion.p>

          <h1 id="hero-heading" className="mt-6 text-[2.9rem] leading-[0.98] font-medium tracking-tight text-ink sm:text-7xl lg:text-[5.6rem]">
            <Line delay={0.45}>
              A Journey of <em className="text-emerald italic">Faith.</em>
            </Line>
            <Line delay={0.6}>A Lifetime of</Line>
            <Line delay={0.75}>
              <em className="bg-gradient-to-r from-gold via-[#cdb57f] to-gold bg-clip-text text-transparent italic">Blessings.</em>
            </Line>
          </h1>

          <motion.p
            className="mt-7 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.05 }}
          >
            Answer the call of your heart and embark on a sacred journey to Makkah and Madinah. With Sunnah Journeys, every
            detail is thoughtfully arranged so you can focus on what truly matters — your connection with Allah.
          </motion.p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {[
              <ButtonLink key="a" href="/packages" size="lg">
                Explore Umrah Packages
              </ButtonLink>,
              <ButtonLink key="b" href="/about" size="lg" variant="secondary">
                Discover Our Story
              </ButtonLink>,
            ].map((btn, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 1.25 + i * 0.12 }}
                className="[&>a]:w-full sm:[&>a]:w-auto"
              >
                {btn}
              </motion.div>
            ))}
          </div>

          <motion.figure
            className="mt-12 inline-flex flex-col gap-1 border-l-2 border-gold/70 pl-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.55 }}
          >
            <p lang="ar" dir="rtl" className="text-2xl leading-loose text-emerald sm:text-3xl">
              لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ
            </p>
            <figcaption className="text-sm text-muted-ink italic">{'“Here I am, O Allah, here I am.”'}</figcaption>
          </motion.figure>
        </div>
      </motion.div>

      <motion.a
        href="#introduction"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-emerald md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        aria-label="Scroll to introduction"
      >
        Scroll
        <span className="relative h-12 w-px overflow-hidden bg-emerald/20" aria-hidden>
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-gold"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  )
}
