'use client'

import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { BedDouble, Building2, Car, Check, Info, Minus } from 'lucide-react'
import { buildItinerary, importantInformation, type UmrahPackage } from '@/lib/packages'
import { cn } from '@/lib/utils'

const tabs = ['Overview', 'Itinerary', 'Stays', 'Inclusions', 'Important Info'] as const
type Tab = (typeof tabs)[number]

export function PackageDetails({ pkg }: { pkg: UmrahPackage }) {
  const [active, setActive] = useState<Tab>('Overview')
  const baseId = useId()
  const itinerary = buildItinerary(pkg)

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const next = (index + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length
    setActive(tabs[next])
    document.getElementById(`${baseId}-tab-${next}`)?.focus()
  }

  return (
    <div>
      <div role="tablist" aria-label="Package information" className="-mx-1 flex gap-1 overflow-x-auto border-b border-line px-1">
        {tabs.map((tab, i) => {
          const selected = active === tab
          return (
            <button
              key={tab}
              id={`${baseId}-tab-${i}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={cn(
                'relative shrink-0 px-4 py-4 text-sm font-medium whitespace-nowrap transition-colors',
                selected ? 'text-emerald' : 'text-muted-ink hover:text-ink',
              )}
            >
              {tab}
              {selected && <motion.span layoutId={`${baseId}-underline`} className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-gold" />}
            </button>
          )
        })}
      </div>

      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${tabs.indexOf(active)}`} className="pt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {active === 'Overview' && (
              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-ink/80">{pkg.overview}</p>
                <dl className="grid gap-4 sm:grid-cols-3">
                  {[
                    ['Duration', `${pkg.durationDays} days`],
                    ['Makkah', `${pkg.makkahNights} nights`],
                    ['Madinah', `${pkg.madinahNights} nights`],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-2xl border border-line bg-white p-5">
                      <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{k}</dt>
                      <dd className="mt-2 font-serif text-2xl text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="rounded-2xl bg-sage-50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">Best suited for</p>
                  <p className="mt-2 leading-relaxed text-ink/80">{pkg.bestFor}</p>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ink/80">
                      <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {active === 'Itinerary' && (
              <div>
                <ol className="relative space-y-8 border-l border-gold/40 pl-8">
                  {itinerary.map((step) => (
                    <li key={step.days} className="relative">
                      <span className="absolute top-1.5 -left-[2.32rem] size-3 rotate-45 border border-gold bg-ivory" aria-hidden />
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{step.days}</p>
                      <h3 className="mt-1 text-2xl font-medium text-ink">{step.title}</h3>
                      <p className="mt-2 leading-relaxed text-muted-ink">{step.description}</p>
                    </li>
                  ))}
                </ol>
                <p className="mt-8 text-xs text-muted-ink">Sample itinerary for illustration. Final schedules are agreed individually.</p>
              </div>
            )}

            {active === 'Stays' && (
              <div className="space-y-5">
                {[
                  { icon: Building2, title: 'Makkah Stay', text: pkg.makkahStay },
                  { icon: Building2, title: 'Madinah Stay', text: pkg.madinahStay },
                  { icon: Car, title: 'Transfer Arrangements', text: pkg.transfers },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-5 rounded-2xl border border-line bg-white p-6">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-sage-50 text-emerald">
                      <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-sans text-base font-semibold text-ink">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-ink">{text}</p>
                    </div>
                  </div>
                ))}
                <div className="rounded-2xl bg-sage-50 p-6">
                  <h3 className="flex items-center gap-2 font-sans text-base font-semibold text-ink">
                    <BedDouble className="size-5 text-emerald" strokeWidth={1.5} aria-hidden />
                    Accommodation options
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {pkg.accommodation.map((a) => (
                      <li key={a} className="rounded-full border border-gold/40 bg-white px-4 py-1.5 text-sm text-ink/80">
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {active === 'Inclusions' && (
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-line bg-white p-6">
                  <h3 className="text-2xl font-medium text-ink">Sample inclusions</h3>
                  <ul className="mt-5 space-y-3">
                    {pkg.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink/80">
                        <Check className="mt-0.5 size-4 shrink-0 text-emerald" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-line bg-sage-50 p-6">
                  <h3 className="text-2xl font-medium text-ink">Not included</h3>
                  <ul className="mt-5 space-y-3">
                    {pkg.exclusions.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink/80">
                        <Minus className="mt-0.5 size-4 shrink-0 text-muted-ink" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {active === 'Important Info' && (
              <ul className="space-y-4">
                {importantInformation.map((info) => (
                  <li key={info} className="flex items-start gap-4 rounded-2xl border border-gold/30 bg-white p-5 text-sm leading-relaxed text-ink/80">
                    <Info className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} aria-hidden />
                    {info}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
