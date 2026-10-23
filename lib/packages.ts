/**
 * SAMPLE package catalogue for demonstration only.
 * Prices, inclusions and itineraries are illustrative and not live or verified offers.
 * Replace with the client's real packages before launch.
 */
export type PackageCategory = 'Economy' | 'Premium' | 'Luxury'

export interface ItineraryStep {
  days: string
  title: string
  description: string
}

export interface UmrahPackage {
  slug: string
  title: string
  category: PackageCategory
  durationDays: number
  makkahNights: number
  madinahNights: number
  price: number
  image: string
  imageAlt: string
  tagline: string
  overview: string
  bestFor: string
  features: string[]
  makkahStay: string
  madinahStay: string
  accommodation: string[]
  transfers: string
  inclusions: string[]
  exclusions: string[]
  featured?: boolean
  popular?: boolean
}

export const packageCategories: PackageCategory[] = ['Economy', 'Premium', 'Luxury']

const commonExclusions = [
  'Visa fees and any government charges',
  'Travel insurance (strongly recommended)',
  'Personal expenses and optional excursions',
  'Meals not stated in the confirmed itinerary',
]

export const importantInformation = [
  'All prices, inclusions and itineraries shown on this website are sample content for demonstration purposes only.',
  'Entry requirements, visa rules and travel regulations can change. Please confirm current requirements with the official Saudi authorities before travelling.',
  'Accommodation, flights and transfers are subject to availability at the time of enquiry and are only confirmed in writing.',
  'Submitting an enquiry does not create a booking or take any payment.',
]

export function buildItinerary(pkg: Pick<UmrahPackage, 'makkahNights' | 'madinahNights'>): ItineraryStep[] {
  const m = pkg.makkahNights
  const d = pkg.madinahNights
  const total = m + d + 1
  return [
    {
      days: 'Day 1',
      title: 'Arrival & Ihram',
      description:
        'Arrive in Jeddah, enter the state of ihram, and transfer to your Makkah accommodation to rest before Umrah.',
    },
    {
      days: 'Day 2',
      title: 'Performing Umrah',
      description:
        'Complete the rites of Umrah — Tawaf, Sa‘i and Halq or Taqsir — with clear guidance notes to support you.',
    },
    {
      days: `Days 3–${m}`,
      title: 'Days of Worship in Makkah',
      description:
        'Time dedicated to prayer in Masjid al-Haram, reflection, and optional visits to places of historical significance.',
    },
    {
      days: `Day ${m + 1}`,
      title: 'Journey to Madinah',
      description: 'Travel to the City of the Prophet ﷺ and settle into your Madinah accommodation.',
    },
    {
      days: `Days ${m + 2}–${m + d}`,
      title: 'Days in Madinah',
      description:
        'Pray in Masjid an-Nabawi, send salutations upon the Prophet ﷺ, and visit places of historical significance.',
    },
    {
      days: `Day ${total}`,
      title: 'Return Home',
      description: 'Transfer to the airport for your return journey, carrying the blessings of your pilgrimage.',
    },
  ]
}

export const packages: UmrahPackage[] = [
  {
    slug: 'essential-umrah',
    title: 'Essential Umrah',
    category: 'Economy',
    durationDays: 10,
    makkahNights: 5,
    madinahNights: 4,
    price: 899,
    image: '/images/masjid-al-haram.png',
    imageAlt: 'Sunlit white marble arches of Masjid al-Haram in Makkah',
    tagline: 'A focused, well-organised pilgrimage.',
    overview:
      'A thoughtfully arranged journey covering the essentials, so you can travel with clarity and dedicate your time to worship.',
    bestFor: 'First-time pilgrims and budget-conscious travellers',
    features: [
      'Return flight planning',
      'Accommodation options in Makkah',
      'Accommodation options in Madinah',
      'Airport transfer arrangements',
      'Umrah travel guidance',
      'Customer assistance',
    ],
    makkahStay: '5 nights — sample hotel options within reasonable walking or shuttle distance of the Haram',
    madinahStay: '4 nights — sample hotel options near Masjid an-Nabawi',
    accommodation: ['Standard 3-star sample options', 'Shared or private room types on request', 'Breakfast options where available'],
    transfers: 'Shared coach transfers between airport and hotels, and between Makkah and Madinah (sample arrangement).',
    inclusions: [
      'Return flight planning assistance',
      'Hotel arrangements in Makkah and Madinah',
      'Shared ground transfers',
      'Umrah guidance notes',
      'Pre-departure support',
    ],
    exclusions: commonExclusions,
    featured: true,
  },
  {
    slug: 'family-umrah',
    title: 'Family Umrah',
    category: 'Economy',
    durationDays: 14,
    makkahNights: 7,
    madinahNights: 6,
    price: 1149,
    image: '/images/madinah-courtyard.png',
    imageAlt: 'Courtyard of Masjid an-Nabawi with open white canopies at golden hour',
    tagline: 'Space and time for the whole family.',
    overview:
      'A relaxed pace with family-friendly room arrangements, designed to make travelling together comfortable for every generation.',
    bestFor: 'Families with children or elderly parents',
    features: [
      'Return flight planning',
      'Family room options',
      'Makkah and Madinah stays',
      'Shared airport transfers',
      'Family travel guidance',
      'Customer assistance',
    ],
    makkahStay: '7 nights — sample family room options with convenient Haram access',
    madinahStay: '6 nights — sample family room options near Masjid an-Nabawi',
    accommodation: ['3 to 4-star sample options', 'Triple, quad and connecting rooms on request', 'Breakfast options where available'],
    transfers: 'Shared coach transfers with additional luggage considerations for families (sample arrangement).',
    inclusions: [
      'Return flight planning assistance',
      'Family room arrangements',
      'Shared ground transfers',
      'Umrah guidance for families',
      'Pre-departure support',
    ],
    exclusions: commonExclusions,
  },
  {
    slug: 'comfort-umrah',
    title: 'Comfort Umrah',
    category: 'Premium',
    durationDays: 14,
    makkahNights: 7,
    madinahNights: 6,
    price: 1399,
    image: '/images/kaaba-tawaf.png',
    imageAlt: 'Aerial view of pilgrims performing tawaf around the Holy Kaaba',
    tagline: 'Balanced comfort with closer stays.',
    overview:
      'Enhanced hotel options and guided itinerary support, offering a calm and comfortable rhythm throughout your pilgrimage.',
    bestFor: 'Pilgrims seeking extra comfort and convenience',
    features: [
      'Return flight planning',
      'Enhanced hotel options',
      'Makkah and Madinah stays',
      'Airport transfer arrangements',
      'Guided itinerary assistance',
      'Customer support',
    ],
    makkahStay: '7 nights — sample 4-star options close to the Haram',
    madinahStay: '6 nights — sample 4-star options near Masjid an-Nabawi',
    accommodation: ['4-star sample options', 'Double, triple and quad rooms', 'Breakfast included where offered'],
    transfers: 'Comfortable coach or private car options between airport, hotels and cities (sample arrangement).',
    inclusions: [
      'Return flight planning assistance',
      'Enhanced hotel arrangements',
      'Ground transfers',
      'Guided itinerary assistance',
      'Dedicated customer support',
    ],
    exclusions: commonExclusions,
    featured: true,
    popular: true,
  },
  {
    slug: 'ramadan-umrah',
    title: 'Ramadan Umrah',
    category: 'Premium',
    durationDays: 10,
    makkahNights: 6,
    madinahNights: 3,
    price: 1699,
    image: '/images/makkah-panorama.png',
    imageAlt: 'Panoramic Makkah skyline with the clock tower at sunrise',
    tagline: 'Experience the blessed month in Makkah.',
    overview:
      'A sample journey timed around Ramadan, giving you the opportunity to fast, pray and reflect in the sacred cities.',
    bestFor: 'Pilgrims hoping to experience Ramadan in the Haramain',
    features: [
      'Return flight planning',
      'Ramadan-period hotel options',
      'Makkah and Madinah stays',
      'Airport transfer arrangements',
      'Suhoor & iftar guidance',
      'Customer support',
    ],
    makkahStay: '6 nights — sample 4-star options during the Ramadan period',
    madinahStay: '3 nights — sample 4-star options near Masjid an-Nabawi',
    accommodation: ['4-star sample options', 'Limited seasonal availability', 'Suhoor options where offered'],
    transfers: 'Coach or private car transfer options, subject to seasonal availability (sample arrangement).',
    inclusions: [
      'Return flight planning assistance',
      'Seasonal hotel arrangements',
      'Ground transfers',
      'Ramadan guidance notes',
      'Dedicated customer support',
    ],
    exclusions: commonExclusions,
  },
  {
    slug: 'signature-umrah',
    title: 'Signature Umrah',
    category: 'Luxury',
    durationDays: 14,
    makkahNights: 7,
    madinahNights: 6,
    price: 2199,
    image: '/images/hotel-suite.png',
    imageAlt: 'Elegant hotel suite with a window overlooking the Makkah clock tower',
    tagline: 'Refined stays, personal attention.',
    overview:
      'Luxury accommodation options, private transfers and personal assistance for a serene, unhurried pilgrimage.',
    bestFor: 'Pilgrims who value privacy and premium comfort',
    features: [
      'Premium travel planning',
      'Luxury accommodation options',
      'Private transfer options',
      'Flexible itinerary consultation',
      'Personalised assistance',
      'Premium travel experience',
    ],
    makkahStay: '7 nights — sample 5-star options with Haram proximity',
    madinahStay: '6 nights — sample 5-star options adjacent to Masjid an-Nabawi',
    accommodation: ['5-star sample options', 'Haram-view rooms on request', 'Breakfast included where offered'],
    transfers: 'Private car transfer options throughout your journey (sample arrangement).',
    inclusions: [
      'Premium flight planning assistance',
      'Luxury hotel arrangements',
      'Private transfer options',
      'Flexible itinerary consultation',
      'Personal assistance throughout',
    ],
    exclusions: commonExclusions,
    featured: true,
  },
  {
    slug: 'executive-umrah',
    title: 'Executive Umrah',
    category: 'Luxury',
    durationDays: 21,
    makkahNights: 11,
    madinahNights: 9,
    price: 3299,
    image: '/images/nabawi-interior.png',
    imageAlt: 'Ornate cream and gold arches inside Masjid an-Nabawi',
    tagline: 'An extended, unhurried spiritual retreat.',
    overview:
      'A longer journey with the finest sample accommodation options and fully personalised planning for an immersive pilgrimage.',
    bestFor: 'Extended stays and fully tailored travel',
    features: [
      'Bespoke travel planning',
      'Finest accommodation options',
      'Private chauffeur options',
      'Extended Makkah and Madinah stays',
      'Personal journey consultant',
      'Priority customer care',
    ],
    makkahStay: '11 nights — sample 5-star options with Haram views on request',
    madinahStay: '9 nights — sample 5-star options adjacent to Masjid an-Nabawi',
    accommodation: ['5-star sample options', 'Suites and Haram-view rooms on request', 'Club or lounge access where offered'],
    transfers: 'Private chauffeur options for all journeys, including optional historical visits (sample arrangement).',
    inclusions: [
      'Bespoke flight planning assistance',
      'Finest hotel arrangements',
      'Private chauffeur options',
      'Personal journey consultant',
      'Priority support throughout',
    ],
    exclusions: commonExclusions,
  },
]

export const featuredPackages = packages.filter((p) => p.featured)

export function getPackage(slug: string) {
  return packages.find((p) => p.slug === slug)
}
