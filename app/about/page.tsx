import type { Metadata } from 'next'
import { PageHero } from '@/components/shared/page-hero'
import { MissionVision, Philosophy, Values } from '@/components/about/about-sections'
import { ArabicPrayer } from '@/components/shared/arabic-prayer'
import { CtaBanner } from '@/components/shared/cta-banner'
import { ButtonLink } from '@/components/shared/button-link'
import { Accent } from '@/components/shared/section-heading'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Discover the philosophy behind Sunnah Journeys — thoughtful Umrah planning guided by sincerity, care, trust and excellence.',
  openGraph: {
    title: 'About Sunnah Journeys',
    description: 'Guided by faith. Inspired by your journey.',
    images: ['/images/masjid-an-nabawi.png'],
  },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            Guided by <Accent>Faith.</Accent> Inspired by Your Journey.
          </>
        }
        description="At Sunnah Journeys, we believe every pilgrimage deserves thoughtful planning, genuine care, and a deep respect for its spiritual purpose."
        image="/images/masjid-an-nabawi.png"
        imageAlt="Masjid an-Nabawi with the Green Dome and minarets in soft daylight"
      >
        <ButtonLink href="/packages" size="lg">
          Explore Packages
        </ButtonLink>
      </PageHero>
      <Philosophy />
      <MissionVision />
      <Values />
      <ArabicPrayer
        eyebrow="A Guiding Principle"
        heading="Every Journey Begins With Intention."
        arabic="إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ"
        translation="Actions are judged by intentions."
        reference="Sahih al-Bukhari 1"
        tone="ivory"
      />
      <CtaBanner
        image="/images/makkah-panorama.png"
        imageAlt="Panoramic view of Masjid al-Haram and the Makkah skyline at sunrise"
        eyebrow="When You Are Ready"
        title={
          <>
            Begin Your Journey With <Accent>Sunnah Journeys.</Accent>
          </>
        }
        description="Share your hopes for your pilgrimage and our team will be glad to discuss options that suit you."
        actions={
          <ButtonLink href="/contact" size="lg">
            Contact Us
          </ButtonLink>
        }
      />
    </>
  )
}
