import type { MetadataRoute } from 'next'

const SITE_URL = 'https://nyar.dev'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: SITE_URL,
          es: SITE_URL,
          de: SITE_URL,
        },
      },
    },
  ]
}
