import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect old root-level pages to /elora/*
      {
        source: '/features',
        destination: '/elora/help/features',
        permanent: true,
      },
      {
        source: '/help',
        destination: '/elora/help',
        permanent: true,
      },
      {
        source: '/help/getting-started',
        destination: '/elora/help/getting-started',
        permanent: true,
      },
      {
        source: '/help/features',
        destination: '/elora/help/features',
        permanent: true,
      },
      {
        source: '/help/models',
        destination: '/elora/help/models',
        permanent: true,
      },
      {
        source: '/support',
        destination: '/elora/support',
        permanent: true,
      },
      {
        source: '/cookies',
        destination: '/elora/cookies',
        permanent: true,
      },
      {
        source: '/usage',
        destination: '/elora/usage',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
