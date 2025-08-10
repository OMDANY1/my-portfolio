import { sanity } from './sanity.client'

const safeFetch = async <T>(q: string, params?: Record<string, unknown>): Promise<T> => {
  // لو الـ envs ناقصة بنرجّع فاضي ونخلي الصفحة تشتغل
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
    // @ts-expect-error
    return Array.isArray([] as T) ? ([] as unknown as T) : (undefined as unknown as T)
  }
  try {
    // @ts-ignore
    return await sanity.fetch(q, params)
  } catch {
    // @ts-expect-error
    return Array.isArray([] as T) ? ([] as unknown as T) : (undefined as unknown as T)
  }
}

export async function getFeaturedProjects() {
  const q = `*[_type == "project" && featured == true]|order(orderRank asc)[0...9]{
    _id, title, "slug": slug.current, tags,
    "cover": coalesce(cover.asset->url, images[0].asset->url),
    "images": images[]{ _key, "url": asset->url },
    description
  }`
  return safeFetch<any[]>(q)
}

export async function getAllProjects() {
  const q = `*[_type == "project"]|order(orderRank asc){
    _id, title, "slug": slug.current, tags,
    "cover": coalesce(cover.asset->url, images[0].asset->url),
    "images": images[]{ _key, "url": asset->url }
  }`
  return safeFetch<any[]>(q)
}

export async function getAllSlugs() {
  const q = `*[_type=="project" && defined(slug.current)].slug.current`
  return safeFetch<string[]>(q)
}

export async function getProjectBySlug(slug: string) {
  const q = `*[_type == "project" && slug.current == $slug][0]{
    _id, title, "slug": slug.current, tags, description,
    "images": images[]{ _key, "url": asset->url }
  }`
  return safeFetch<any>(q, { slug })
}

export async function getAllTags() {
  const q = `array::unique(*[_type=="project"].tags[])`
  return safeFetch<string[]>(q)
}
