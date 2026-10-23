import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'
import { packages } from '@/lib/packages'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  const pages = ['', '/about', '/packages', '/contact'].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }))
  const details = packages.map((p) => ({ url: `${base}/packages/${p.slug}`, changeFrequency: 'monthly' as const, priority: 0.6 }))
  return [...pages, ...details]
}
