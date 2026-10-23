import { featuredPackages } from '@/lib/packages'
import { Stagger, StaggerItem, Reveal } from '@/components/animations/reveal'
import { PackageCard } from '@/components/shared/package-card'
import { Accent, SectionHeading } from '@/components/shared/section-heading'
import { ButtonLink } from '@/components/shared/button-link'
import { DemoNote } from '@/components/shared/demo-note'

export function FeaturedPackages() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="featured-heading">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Explore Your Sacred Journey"
          title={
            <span id="featured-heading">
              Find the Journey That <Accent>Feels Right</Accent> for You.
            </span>
          }
          description="Explore flexible Umrah experiences created for different travel preferences, schedules, and budgets."
        />

        <Stagger className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.15}>
          {featuredPackages.map((pkg) => (
            <StaggerItem key={pkg.slug} className="h-full">
              <PackageCard pkg={pkg} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12 flex flex-col items-center gap-5 text-center">
          <ButtonLink href="/packages" variant="secondary" size="lg">
            View All Packages
          </ButtonLink>
          <DemoNote>
            Sample packages for demonstration. Prices and inclusions are illustrative only and are not live or confirmed offers.
          </DemoNote>
        </Reveal>
      </div>
    </section>
  )
}
