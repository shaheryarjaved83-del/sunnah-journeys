import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarDays, MessageCircle } from 'lucide-react'
import { getPackage, packages } from '@/lib/packages'
import { formatPrice, getWhatsAppLink } from '@/lib/site-config'
import { PackageDetails } from '@/components/packages/package-details'
import { PackageCard } from '@/components/shared/package-card'
import { ButtonLink } from '@/components/shared/button-link'
import { Reveal, Stagger, StaggerItem } from '@/components/animations/reveal'
import { DemoNote } from '@/components/shared/demo-note'

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const pkg = getPackage(slug)
  if (!pkg) return { title: 'Package not found' }
  return {
    title: `${pkg.title} — ${pkg.durationDays} Days`,
    description: `${pkg.tagline} Sample ${pkg.category.toLowerCase()} Umrah package for demonstration.`,
    openGraph: { title: `${pkg.title} — Sunnah Journeys`, description: pkg.tagline, images: [pkg.image] },
  }
}

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pkg = getPackage(slug)
  if (!pkg) notFound()

  const related = packages.filter((p) => p.slug !== pkg.slug && p.category === pkg.category).concat(packages.filter((p) => p.category !== pkg.category)).slice(0, 3)
  const whatsapp = getWhatsAppLink(`Assalamu alaikum, I would like to enquire about the ${pkg.title} (${pkg.durationDays} days).`)

  return (
    <>
      <section className="relative pt-28 sm:pt-32">
        <div className="container-wide">
          <Link href="/packages" className="group inline-flex items-center gap-2 text-sm font-medium text-emerald hover:text-gold">
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden />
            All packages
          </Link>
          <div className="relative mt-6 aspect-[4/5] overflow-hidden rounded-t-[10rem] rounded-b-[2rem] sm:aspect-[21/9] sm:rounded-t-[16rem]">
            <Image src={pkg.image} alt={pkg.imageAlt} fill priority sizes="100vw" className="animate-[hero-zoom_2.6s_cubic-bezier(0.22,1,0.36,1)_both] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/50 to-transparent sm:via-ivory/30" aria-hidden />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-12">
              <Reveal>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-emerald px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">{pkg.category}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1 text-xs font-medium text-ink">
                    <CalendarDays className="size-3.5" aria-hidden />
                    {pkg.durationDays} Days
                  </span>
                  {pkg.popular && <span className="rounded-full bg-gold px-3.5 py-1 text-xs font-semibold text-white">Most Popular</span>}
                </div>
                <h1 className="mt-4 text-5xl leading-none font-medium text-ink sm:text-7xl">{pkg.title}</h1>
                <p className="mt-3 max-w-xl text-lg text-ink/75">{pkg.tagline}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <PackageDetails pkg={pkg} />
          </div>
          <aside className="lg:col-span-4">
            <div className="rounded-[2rem] border border-gold/40 bg-white p-7 shadow-[0_30px_80px_-50px_rgba(22,75,66,0.5)] lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Sample price from</p>
              <p className="mt-2 font-serif text-5xl text-ink">
                {formatPrice(pkg.price)}
                <span className="ml-1 font-sans text-sm text-muted-ink">/ person</span>
              </p>
              <span className="gold-rule my-6 block h-px w-full" aria-hidden />
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between"><span className="text-muted-ink">Duration</span><span className="font-medium text-ink">{pkg.durationDays} days</span></li>
                <li className="flex justify-between"><span className="text-muted-ink">Makkah</span><span className="font-medium text-ink">{pkg.makkahNights} nights</span></li>
                <li className="flex justify-between"><span className="text-muted-ink">Madinah</span><span className="font-medium text-ink">{pkg.madinahNights} nights</span></li>
                <li className="flex justify-between"><span className="text-muted-ink">Category</span><span className="font-medium text-ink">{pkg.category}</span></li>
              </ul>
              <div className="mt-8 flex flex-col gap-3">
                <ButtonLink href={`/contact?package=${pkg.slug}#enquiry`} size="lg" className="w-full">
                  Enquire About This Package
                </ButtonLink>
                {whatsapp && (
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line text-sm font-medium text-emerald hover:border-gold">
                    <MessageCircle className="size-4" aria-hidden />
                    Ask on WhatsApp
                  </a>
                )}
              </div>
              <DemoNote className="mt-6">Illustrative pricing only. An enquiry is not a booking and no payment is taken.</DemoNote>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-sage-50 py-20 sm:py-28" aria-labelledby="related-heading">
        <div className="container-wide">
          <h2 id="related-heading" className="text-4xl font-medium text-ink sm:text-5xl">
            You may also <em className="text-emerald italic">consider</em>
          </h2>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <StaggerItem key={p.slug} className="h-full">
                <PackageCard pkg={p} featureCount={3} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}
