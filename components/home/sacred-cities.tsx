import Image from 'next/image'
import { Reveal } from '@/components/animations/reveal'
import { Accent, SectionHeading } from '@/components/shared/section-heading'

const cities = [
  {
    name: 'Makkah Al-Mukarramah',
    arabic: 'مَكَّةُ الْمُكَرَّمَة',
    image: '/images/kaaba-tawaf.png',
    alt: 'Pilgrims circling the Holy Kaaba in Masjid al-Haram, Makkah',
    text: 'The sacred heart of Islam, where millions gather in worship and devotion around the Holy Kaaba.',
    detail: 'Home to Masjid al-Haram, the Kaaba, and the hills of Safa and Marwah.',
  },
  {
    name: 'Al-Madinah Al-Munawwarah',
    arabic: 'الْمَدِينَةُ الْمُنَوَّرَة',
    image: '/images/nabawi-dusk.png',
    alt: 'Masjid an-Nabawi illuminated at dusk in Madinah',
    text: 'The blessed city of the Prophet Muhammad ﷺ, known for its serenity, history, and spiritual significance.',
    detail: 'Home to Masjid an-Nabawi, Masjid Quba, and the Green Dome.',
  },
]

export function SacredCities() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="cities-heading">
      <div className="container-wide">
        <SectionHeading
          eyebrow="The Haramain"
          title={
            <span id="cities-heading">
              Two Sacred Cities. <Accent>One Extraordinary Journey.</Accent>
            </span>
          }
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {cities.map((city, i) => (
            <Reveal key={city.name} delay={i * 0.15}>
              <article className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-t-[12rem] rounded-b-[2rem] sm:aspect-[5/6] lg:aspect-[4/5]">
                <Image
                  src={city.image}
                  alt={city.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="-z-10 object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ivory via-ivory/70 to-transparent transition-opacity duration-700 sm:via-ivory/40" aria-hidden />
                <span className="pointer-events-none absolute inset-3 rounded-t-[11.5rem] rounded-b-[1.6rem] border border-white/50" aria-hidden />

                <div className="p-7 sm:p-10">
                  <p lang="ar" dir="rtl" className="text-right text-2xl text-gold sm:text-3xl">
                    {city.arabic}
                  </p>
                  <h3 className="mt-2 text-3xl font-medium text-ink sm:text-[2.6rem]">{city.name}</h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-ink/75">{city.text}</p>
                  <div className="grid grid-rows-[1fr] transition-all duration-700 lg:grid-rows-[0fr] lg:group-focus-within:grid-rows-[1fr] lg:group-hover:grid-rows-[1fr]">
                    <p className="overflow-hidden text-sm text-emerald">
                      <span className="mt-4 flex items-center gap-3 border-t border-gold/40 pt-4">
                        <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden />
                        {city.detail}
                      </span>
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
