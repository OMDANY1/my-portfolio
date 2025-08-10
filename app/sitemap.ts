import { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/queries'
export default async function sitemap():Promise<MetadataRoute.Sitemap>{const slugs=await getAllSlugs();const base='https://example.com';return[{url:`${base}/`,priority:1},{url:`${base}/projects`,priority:0.8},...slugs.map((s)=>({url:`${base}/projects/${s}`,priority:0.7}))]}
