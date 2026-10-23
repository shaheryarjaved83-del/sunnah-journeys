import type { Metadata } from 'next'
import { PageHero } from '@/components/shared/page-hero'
import { PackageCatalog } from '@/components/packages/package-catalog'
import { CtaBanner } from '@/components/shared/cta-banner'
import { ButtonLink } from '@/components/shared/button-link'
import { Accent } from '@/components/shared/section-heading'
import { packageCategories, type PackageCategory } from '@/lib/packages'

export const metadata: Metadata = {
  title: 'Umrah Packages',
  description:
    'Browse sample Economy, Premium and Luxury Umrah packages from Sunnah Journeys. Filter by category, duration and price.',
  openGraph: {
    title: 'Umrah Packages — Sunnah Journeys',
    description: 'Journeys designed to bring comfort, clarity and peace of mind to your pilgrimage.',
    images: ['/images/makkah-panorama.png'],
  },
}

export default async function PackagesPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams
  const initialCategory = packageCategories.includes(category as PackageCategory) ? (category as PackageCategory) : 'All'

  return (
    <>
      <PageHero
        layout="panorama"
        eyebrow="Umrah Packages"
        title={
          <>
            Explore Our <Accent>Umrah</Accent> Packages.
          </>
        }
        description="Discover journeys designed to bring comfort, clarity, and peace of mind to your pilgrimage."
        image="/images/makkah-panorama.png"
        imageAlt="Panoramic view of Masjid al-Haram and the Makkah skyline at golden hour"
      />
      <PackageCatalog key={initialCategory} initialCategory={initialCategory} />
      <CtaBanner
        image="/images/hotel-suite.png"
        imageAlt="Elegant hotel suite with a window view towards the Haram"
        eyebrow="Tailored Journeys"
        title={
          <>
            Looking for Something <Accent>More Personal?</Accent>
          </>
        }
        description="Tell us your preferred dates, travel style, and accommodation needs. Our team can discuss suitable options for your journey."
        actions={
          <ButtonLink href="/contact?package=custom#enquiry" size="lg">
            Request a Custom Package
          </ButtonLink>
        }
      />
    </>
  )
}
