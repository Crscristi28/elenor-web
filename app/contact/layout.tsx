import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Elenor AI Platform',
  description: 'Get in touch with Elenor AI Platform. Questions about Enterprise solutions? Need support? Contact our team.',
  keywords: ['contact Elenor', 'enterprise inquiry', 'AI platform support'],
  openGraph: {
    title: 'Contact Elenor AI Platform',
    description: 'Get in touch with our team for enterprise solutions, support, or general inquiries.',
    url: 'https://elenor.io/contact',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
