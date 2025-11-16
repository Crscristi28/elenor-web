import type { Metadata } from "next";
import "../styles/globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL('https://elenor.io'),

  title: "Elenor AI Platform - From intelligent assistants to enterprise agents and APIs",
  description: "Elenor AI Platform - From intelligent assistants to enterprise agents and APIs. Intelligence made simple. Orchestrating state-of-the-art AI models from Anthropic, Google, and OpenAI.",

  // Open Graph for Facebook, LinkedIn
  openGraph: {
    title: 'Elenor AI Platform - Intelligence Made Simple',
    description: 'From intelligent assistants to enterprise agents and APIs. Orchestrating state-of-the-art AI models from Anthropic, Google, and OpenAI.',
    url: 'https://elenor.io',
    siteName: 'Elenor Platform',
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Elenor AI Platform - Intelligence Made Simple',
    description: 'From intelligent assistants to enterprise agents and APIs. Orchestrating AI models from Anthropic, Google, and OpenAI.',
  },

  // Icons
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  // Keywords for SEO
  keywords: ['AI platform', 'AI assistant', 'enterprise AI', 'AI agents', 'AI API', 'intelligent assistant', 'multilingual AI', 'Elora', 'Elenor', 'Anthropic', 'Google AI', 'OpenAI', 'Claude', 'Gemini', 'GPT'],

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
