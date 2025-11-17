import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products - Elenor AI Platform',
  description: 'Explore Elenor AI Platform products: Elora AI personal assistant (available now) and Elenor Enterprise for businesses (coming soon). From intelligent assistants to enterprise agents.',
  keywords: ['Elenor products', 'Elora AI', 'Elenor Enterprise', 'AI platform', 'enterprise AI', 'AI assistant'],
  openGraph: {
    title: 'Elenor Product Suite',
    description: 'From personal AI assistants to enterprise agents and APIs. Built for individuals, teams, and businesses.',
    url: 'https://elenor.io/products',
    type: 'website',
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
