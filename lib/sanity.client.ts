import { createClient } from '@sanity/client'
export const projectId=process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset=process.env.NEXT_PUBLIC_SANITY_DATASET!
export const apiVersion=process.env.SANITY_API_VERSION||'2025-08-01'
export const sanity=createClient({projectId,dataset,apiVersion,useCdn:true})
