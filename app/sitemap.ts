import { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs: string[] = await getAllSlugs()
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

  const items: MetadataRoute.Sitemap = [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/projects`, priority: 0.8 },
    ...slugs.map((s: string) => ({
      url: `${base}/projects/${s}`,
      priority: 0.7,
    })),
  ]

  return items
}
