import Image from 'next/image'
import Link from 'next/link'
import { Check, Clock } from 'lucide-react'
import type { UmrahPackage } from '@/lib/packages'
import { formatPrice } from '@/lib/site-config'
import { ButtonLink } from '@/components/shared/button-link'
import { cn } from '@/lib/utils'

interface PackageCardProps {
  pkg: UmrahPackage
  showEnquire?: boolean
  featureCount?: number
  className?: string
}

export function PackageCard({ pkg, showEnquire = false, featureCount = 6, className }: PackageCardProps) {
  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(22,75,66,0.35)]',
        pkg.popular ? 'border-gold/60' : 'border-line hover:border-gold/50',
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" aria-hidden />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-emerald backdrop-blur">
            {pkg.category}
          </span>
          {pkg.popular && (
            <span className="rounded-full bg-gold px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white">
              Most Popular
            </span>
          )}
        </div>
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-ink/35 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          <Clock className="size-3.5" aria-hidden />
          {`${pkg.durationDays} Days`}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-[1.9rem] leading-tight font-medium text-ink">
          <Link href={`/packages/${pkg.slug}`} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
            {pkg.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-ink">{pkg.overview}</p>

        <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
          {pkg.features.slice(0, featureCount).map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-ink/85">
              <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-sage-50 text-emerald">
                <Check className="size-2.5" strokeWidth={3} aria-hidden />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-ink">Sample price from</p>
              <p className="mt-1 font-serif text-4xl font-semibold text-emerald">
                {formatPrice(pkg.price)}
                <span className="ml-1 font-sans text-xs font-medium text-muted-ink">/ person</span>
              </p>
            </div>
          </div>
          <div className={cn('relative z-10 mt-5 grid gap-2.5', showEnquire && 'grid-cols-2')}>
            <ButtonLink
              href={`/packages/${pkg.slug}`}
              variant={pkg.popular ? 'primary' : 'secondary'}
              className="w-full"
              aria-label={`View ${pkg.title} package`}
            >
              {showEnquire ? 'View Details' : 'View Package'}
            </ButtonLink>
            {showEnquire && (
              <ButtonLink
                href={`/contact?package=${pkg.slug}#enquiry`}
                variant="ghost"
                className="w-full justify-center rounded-full border border-transparent hover:border-gold/40"
                aria-label={`Enquire about ${pkg.title}`}
              >
                Enquire Now
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
