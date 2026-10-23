import { Reveal } from '@/components/animations/reveal'
import { GeometricMotif, OrnamentDivider } from '@/components/shared/geometric'
import { cn } from '@/lib/utils'

interface ArabicPrayerProps {
  eyebrow?: string
  heading?: string
  arabic: string
  translation: string
  reference: string
  tone?: 'ivory' | 'sage'
  className?: string
}

export function ArabicPrayer({ eyebrow, heading, arabic, translation, reference, tone = 'sage', className }: ArabicPrayerProps) {
  return (
    <section
      className={cn('relative overflow-hidden py-24 sm:py-32', tone === 'sage' ? 'bg-sage-50' : 'bg-ivory', className)}
      aria-labelledby={heading ? 'prayer-heading' : undefined}
      aria-label={heading ? undefined : 'Supplication'}
    >
      <div className="bg-pattern pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" aria-hidden />
      <GeometricMotif className="pointer-events-none absolute -top-16 -left-16 size-64 opacity-30" strokeWidth={0.4} />
      <GeometricMotif className="pointer-events-none absolute -right-20 -bottom-20 size-72 opacity-30" strokeWidth={0.4} />

      <div className="container-wide relative">
        <div className="relative mx-auto max-w-4xl border border-gold/40 bg-white/55 px-5 py-14 text-center backdrop-blur-sm sm:px-14 sm:py-20">
          <span className="absolute inset-2 border border-gold/20 pointer-events-none" aria-hidden />
          {eyebrow && (
            <Reveal>
              <p className="eyebrow">{eyebrow}</p>
            </Reveal>
          )}
          {heading && (
            <Reveal delay={0.05}>
              <h2 id="prayer-heading" className="mt-4 text-3xl font-medium text-ink sm:text-5xl">
                {heading}
              </h2>
            </Reveal>
          )}
          <Reveal delay={0.1}>
            <OrnamentDivider className="my-8" />
          </Reveal>
          <Reveal delay={0.2} y={36}>
            <p lang="ar" dir="rtl" className="text-[1.75rem] leading-[2.2] text-emerald sm:text-4xl sm:leading-[2.1] lg:text-[2.85rem]">
              {arabic}
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <blockquote className="mx-auto mt-8 max-w-2xl font-serif text-xl leading-relaxed text-ink italic sm:text-2xl">
              {`“${translation}”`}
            </blockquote>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-gold">{reference}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
