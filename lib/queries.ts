import { sanity } from './sanity.client'
export async function getFeaturedProjects(){const q=`*[_type=="project"&&featured==true]|order(orderRank asc)[0...9]{_id,title,"slug":slug.current,tags,"cover":coalesce(cover.asset->url,images[0].asset->url),"images":images[]{_key,"url":asset->url},description}`;return sanity.fetch(q)}
export async function getAllProjects(){const q=`*[_type=="project"]|order(orderRank asc){_id,title,"slug":slug.current,tags,"cover":coalesce(cover.asset->url,images[0].asset->url),"images":images[]{_key,"url":asset->url}}`;return sanity.fetch(q)}
export async function getAllSlugs(){const q=`*[_type=="project"&&defined(slug.current)].slug.current`;return sanity.fetch(q)}
export async function getProjectBySlug(slug:string){const q=`*[_type=="project"&&slug.current==$slug][0]{_id,title,"slug":slug.current,tags,description,"images":images[]{_key,"url":asset->url}}`;return sanity.fetch(q,{slug})}
export async function getAllTags(){const q=`array::unique(*[_type=="project"].tags[])`;return sanity.fetch(q)}
