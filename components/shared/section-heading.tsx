import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/animations/reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
  as?: 'h1' | 'h2'
}

export function SectionHeading({ eyebrow, title, description, align = 'center', className, as = 'h2' }: SectionHeadingProps) {
  const Heading = as
  return (
    <Reveal className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p className={cn('eyebrow flex items-center gap-3', align === 'center' && 'justify-center')}>
          <span className="h-px w-8 bg-gold/70" aria-hidden />
          {eyebrow}
          {align === 'center' && <span className="h-px w-8 bg-gold/70" aria-hidden />}
        </p>
      )}
      <Heading className="mt-5 text-4xl leading-[1.05] font-medium text-ink sm:text-5xl lg:text-[3.6rem]">{title}</Heading>
      {description && <p className="mt-5 text-base leading-relaxed text-muted-ink sm:text-lg">{description}</p>}
    </Reveal>
  )
}

/** Italic emphasised word used across headings. */
export function Accent({ children, tone = 'emerald' }: { children: ReactNode; tone?: 'emerald' | 'gold' }) {
  return <em className={cn('font-serif italic', tone === 'gold' ? 'text-gold' : 'text-emerald')}>{children}</em>
}
