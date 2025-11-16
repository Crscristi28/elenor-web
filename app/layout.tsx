import type { Metadata } from "next";
import "../styles/globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Elora AI by Elenor - Intelligence Made Simple",
  description: "Your intelligent AI assistant with image generation, document processing, intelligent memory, and multilingual support.",

  // Open Graph for Facebook, LinkedIn
  openGraph: {
    title: 'Elora AI by Elenor - Intelligence Made Simple',
    description: 'Your intelligent AI assistant with image generation, document processing, intelligent memory, and multilingual support.',
    url: 'https://elenor.io',
    siteName: 'Elenor Platform',
    images: [
      {
        url: 'https://elenor.io/elora-promo.mp4', // Using video thumbnail for now
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Elora AI by Elenor - Intelligence Made Simple',
    description: 'Your intelligent AI assistant with image generation, document processing, intelligent memory, and multilingual support.',
  },

  // Icons
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  // Keywords for SEO
  keywords: ['AI assistant', 'voice chat', 'image generation', 'AI chatbot', 'intelligent assistant', 'multilingual AI', 'Elora', 'Elenor'],

  // Verification tags (add when you have them)
  // verification: {
  //   google: 'your-google-verification-code',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
