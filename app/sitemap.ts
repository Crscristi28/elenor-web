import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage - highest priority
    {
      url: 'https://elenor.io',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // Main pages - high priority
    {
      url: 'https://elenor.io/features',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://elenor.io/support',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Legal pages - medium priority
    {
      url: 'https://elenor.io/terms',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://elenor.io/privacy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://elenor.io/gdpr',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://elenor.io/security',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://elenor.io/cookies',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://elenor.io/usage',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // Help pages - medium-high priority
    {
      url: 'https://elenor.io/help',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://elenor.io/help/getting-started',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://elenor.io/help/features',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://elenor.io/help/models',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]
}
