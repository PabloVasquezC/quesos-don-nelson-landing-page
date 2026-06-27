import {createClient} from 'next-sanity'
import {createImageUrlBuilder} from '@sanity/image-url'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '65cyxti5',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// GROQ Queries
export const queries = {
  siteSettings: `*[_type == "siteSettings"][0]`,
  hero: `*[_type == "hero"][0]`,
  products: `*[_type == "product"] | order(order asc)`,
  about: `*[_type == "about"][0]`,
  history: `*[_type == "history"][0]`,
  contact: `*[_type == "contact"][0]`,
  footer: `*[_type == "footer"][0]`,
}
