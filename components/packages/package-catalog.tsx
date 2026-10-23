'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { packageCategories, packages, type PackageCategory } from '@/lib/packages'
import { PackageCard } from '@/components/shared/package-card'
import { DemoNote } from '@/components/shared/demo-note'
import { cn } from '@/lib/utils'

type CategoryFilter = 'All' | PackageCategory
type DurationFilter = 'any' | '10' | '14' | '21'
type SortOption = 'recommended' | 'price-asc' | 'price-desc'

const categoryTabs: { value: CategoryFilter; label: string }[] = [
  { value: 'All', label: 'All Packages' },
  ...packageCategories.map((c) => ({ value: c, label: c })),
]

const selectClass =
  'h-12 w-full appearance-none rounded-full border border-line bg-white pr-10 pl-5 text-sm text-ink transition-colors hover:border-gold/60 focus:border-emerald focus:outline-none'

export function PackageCatalog({ initialCategory = 'All' }: { initialCategory?: CategoryFilter }) {
  const [category, setCategory] = useState<CategoryFilter>(initialCategory)
  const [duration, setDuration] = useState<DurationFilter>('any')
  const [sort, setSort] = useState<SortOption>('recommended')
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    const filtered = packages.filter((p) => {
      if (category !== 'All' && p.category !== category) return false
      if (duration !== 'any' && p.durationDays !== Number(duration)) return false
      if (q && !`${p.title} ${p.overview} ${p.tagline} ${p.category}`.toLowerCase().includes(q)) return false
      return true
    })
    if (sort === 'price-asc') return [...filtered].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') return [...filtered].sort((a, b) => b.price - a.price)
    return filtered
  }, [category, duration, sort, query])

  const hasFilters = category !== 'All' || duration !== 'any' || sort !== 'recommended' || query !== ''

  const reset = () => {
    setCategory('All')
    setDuration('any')
    setSort('recommended')
    setQuery('')
  }

  return (
    <section id="catalog" className="scroll-mt-24 pb-24 sm:pb-32" aria-labelledby="catalog-heading">
      <div className="container-wide">
        <h2 id="catalog-heading" className="sr-only">
          Package catalogue
        </h2>

        <div className="rounded-[2rem] border border-line bg-white/80 p-4 shadow-[0_20px_60px_-40px_rgba(22,75,66,0.35)] backdrop-blur sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div role="tablist" aria-label="Filter by category" className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-1 lg:pb-0">
              {categoryTabs.map((tab) => {
                const active = category === tab.value
                return (
                  <button
                    key={tab.value}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setCategory(tab.value)}
                    className={cn(
                      'relative h-11 shrink-0 rounded-full px-5 text-sm font-medium whitespace-nowrap transition-colors',
                      active ? 'text-white' : 'text-ink/70 hover:text-emerald',
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="category-pill"
                        className="absolute inset-0 rounded-full bg-emerald"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{tab.label}</span>
                  </button>
                )
              })}
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:w-[38rem]">
              <label className="relative sm:col-span-1">
                <span className="sr-only">Search packages</span>
                <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-ink" aria-hidden />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search…"
                  className="h-12 w-full rounded-full border border-line bg-white pr-4 pl-11 text-sm text-ink placeholder:text-muted-ink transition-colors hover:border-gold/60 focus:border-emerald focus:outline-none"
                />
              </label>
              <label className="relative">
                <span className="sr-only">Filter by duration</span>
                <select value={duration} onChange={(e) => setDuration(e.target.value as DurationFilter)} className={selectClass}>
                  <option value="any">Any duration</option>
                  <option value="10">10 days</option>
                  <option value="14">14 days</option>
                  <option value="21">21 days</option>
                </select>
                <SlidersHorizontal className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted-ink" aria-hidden />
              </label>
              <label className="relative">
                <span className="sr-only">Sort packages</span>
                <select value={sort} onChange={(e) => setSort(e.target.value as SortOption)} className={selectClass}>
                  <option value="recommended">Recommended</option>
                  <option value="price-asc">Price: low to high</option>
                  <option value="price-desc">Price: high to low</option>
                </select>
                <SlidersHorizontal className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted-ink" aria-hidden />
              </label>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-ink" aria-live="polite">
            Showing <span className="font-semibold text-ink">{results.length}</span> of {packages.length} sample packages
          </p>
          {hasFilters && (
            <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald hover:text-gold">
              <X className="size-4" aria-hidden />
              Clear filters
            </button>
          )}
        </div>

        <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {results.map((pkg) => (
              <motion.div
                key={pkg.slug}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.25 } }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <PackageCard pkg={pkg} showEnquire featureCount={4} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {results.length === 0 && (
          <div className="mt-6 rounded-[2rem] border border-dashed border-gold/50 bg-sage-50 px-6 py-16 text-center">
            <p className="font-serif text-2xl text-ink">No packages match these filters.</p>
            <p className="mt-2 text-sm text-muted-ink">Try another category or duration, or ask us about a custom journey.</p>
            <button type="button" onClick={reset} className="mt-6 text-sm font-semibold text-emerald underline underline-offset-4 hover:text-gold">
              Show all packages
            </button>
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <DemoNote>All packages, prices and inclusions are sample content for demonstration only — not live or verified offers.</DemoNote>
        </div>
      </div>
    </section>
  )
}
