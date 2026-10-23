'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { GeometricMotif } from '@/components/shared/geometric'

const ease = [0.22, 1, 0.36, 1] as const

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  description: string
  image: string
  imageAlt: string
  layout?: 'split' | 'panorama'
  children?: ReactNode
}

function HeroText({ eyebrow, title, description, children, center }: Omit<PageHeroProps, 'image' | 'imageAlt' | 'layout'> & { center?: boolean }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-xl'}>
      <motion.p
        className={`eyebrow flex items-center gap-3 ${center ? 'justify-center' : ''}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.2 }}
      >
        <span className="h-px w-8 bg-gold/70" aria-hidden />
        {eyebrow}
        {center && <span className="h-px w-8 bg-gold/70" aria-hidden />}
      </motion.p>
      <span className="mt-5 block overflow-hidden pb-[0.1em]">
        <motion.h1
          className="text-[2.6rem] leading-[1.02] font-medium tracking-tight text-ink sm:text-6xl lg:text-7xl"
          initial={{ y: '105%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.3 }}
        >
          {title}
        </motion.h1>
      </span>
      <motion.p
        className="mt-6 text-lg leading-relaxed text-muted-ink"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.6 }}
      >
        {description}
      </motion.p>
      {children && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.8 }} className="mt-9">
          {children}
        </motion.div>
      )}
    </div>
  )
}

export function PageHero({ image, imageAlt, layout = 'split', ...text }: PageHeroProps) {
  if (layout === 'panorama') {
    return (
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-44">
        <div className="bg-pattern pointer-events-none absolute inset-x-0 top-0 h-[70%] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
        <div className="container-wide relative">
          <HeroText {...text} center />
          <motion.div
            className="relative mt-14 aspect-[4/3] overflow-hidden rounded-t-[50vw] rounded-b-[2rem] sm:aspect-[21/9] sm:rounded-t-[20rem]"
            initial={{ clipPath: 'inset(18% 8% 0% 8% round 2rem)', opacity: 0.4 }}
            animate={{ clipPath: 'inset(0% 0% 0% 0% round 0rem)', opacity: 1 }}
            transition={{ duration: 1.6, ease, delay: 0.5 }}
          >
            <motion.div className="absolute inset-0" initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 2.6, ease, delay: 0.5 }}>
              <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-emerald/25 to-transparent" aria-hidden />
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-40 lg:pb-24">
      <div className="bg-pattern pointer-events-none absolute inset-y-0 left-0 w-1/2 opacity-40 [mask-image:linear-gradient(to_right,black,transparent)]" aria-hidden />
      <div className="container-wide relative grid items-center gap-14 lg:grid-cols-2">
        <HeroText {...text} />
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            aria-hidden
            className="absolute -top-8 -right-6 z-10 hidden sm:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease, delay: 0.9 }}
          >
            <GeometricMotif className="size-28" strokeWidth={0.8} />
          </motion.div>
          <motion.div
            className="arch relative aspect-[4/5] overflow-hidden shadow-[0_50px_100px_-50px_rgba(22,75,66,0.55)]"
            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ duration: 1.4, ease, delay: 0.35 }}
          >
            <motion.div className="absolute inset-0" initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease, delay: 0.35 }}>
              <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" />
            </motion.div>
          </motion.div>
          <span className="arch pointer-events-none absolute inset-0 -m-3 border border-gold/40" aria-hidden />
        </div>
      </div>
    </section>
  )
}
