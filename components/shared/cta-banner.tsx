import Image from 'next/image'
import type { ReactNode } from 'react'
import { Reveal } from '@/components/animations/reveal'
import { Parallax } from '@/components/animations/parallax'
import { EightPointStar } from '@/components/shared/geometric'

interface CtaBannerProps {
  image: string
  imageAlt: string
  eyebrow?: string
  title: ReactNode
  description?: string
  actions: ReactNode
}

export function CtaBanner({ image, imageAlt, eyebrow, title, description, actions }: CtaBannerProps) {
  return (
    <section className="px-3 py-20 sm:px-5 sm:py-28">
      <div className="relative mx-auto min-h-[560px] max-w-[1400px] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
        <Parallax className="absolute -inset-y-16 inset-x-0" distance={90}>
          <Image src={image} alt={imageAlt} fill sizes="100vw" className="object-cover" />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/85 via-ivory/70 to-ivory/90 sm:bg-gradient-to-r sm:from-ivory/95 sm:via-ivory/75 sm:to-ivory/10" aria-hidden />
        <EightPointStar className="pointer-events-none absolute top-10 right-10 hidden size-40 opacity-50 lg:block" strokeWidth={0.6} />
        <div className="relative flex min-h-[560px] items-center px-6 py-16 sm:px-14 lg:px-20">
          <div className="max-w-xl">
            {eyebrow && (
              <Reveal>
                <p className="eyebrow">{eyebrow}</p>
              </Reveal>
            )}
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-4xl leading-[1.05] font-medium text-ink sm:text-6xl">{title}</h2>
            </Reveal>
            {description && (
              <Reveal delay={0.15}>
                <p className="mt-6 text-base leading-relaxed text-ink/75 sm:text-lg">{description}</p>
              </Reveal>
            )}
            <Reveal delay={0.25}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">{actions}</div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
