import { Hero } from '@/components/home/hero'
import { Introduction } from '@/components/home/introduction'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { FeaturedPackages } from '@/components/home/featured-packages'
import { SacredCities } from '@/components/home/sacred-cities'
import { JourneySteps } from '@/components/home/journey-steps'
import { Testimonials } from '@/components/home/testimonials'
import { Faq } from '@/components/home/faq'
import { ArabicPrayer } from '@/components/shared/arabic-prayer'
import { CtaBanner } from '@/components/shared/cta-banner'
import { ButtonLink } from '@/components/shared/button-link'
import { Accent } from '@/components/shared/section-heading'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <WhyChooseUs />
      <FeaturedPackages />
      <ArabicPrayer
        eyebrow="Supplication"
        heading="A Prayer for Every Journey."
        arabic="رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ"
        translation="Our Lord, grant us good in this world and good in the Hereafter, and protect us from the punishment of the Fire."
        reference="Surah Al-Baqarah, 2:201"
      />
      <SacredCities />
      <JourneySteps />
      <Testimonials />
      <Faq />
      <CtaBanner
        image="/images/masjid-an-nabawi.png"
        imageAlt="Masjid an-Nabawi with its Green Dome under a soft sky"
        eyebrow="Begin Today"
        title={
          <>
            Your Invitation to the <Accent>Sacred</Accent> Awaits.
          </>
        }
        description="Every meaningful journey begins with a single step. Explore your Umrah options and start planning a pilgrimage filled with purpose, reflection, and blessings."
        actions={
          <>
            <ButtonLink href="/packages" size="lg">
              Explore Packages
            </ButtonLink>
            <ButtonLink href="/contact" size="lg" variant="secondary">
              Contact Our Team
            </ButtonLink>
          </>
        }
      />
    </>
  )
}
