'use client'

import { LanguageProvider } from '@/contexts/LanguageContext'
import CookieConsent from './CookieConsent'
import { ReactNode, useEffect } from 'react'
import { initGoogleAnalytics } from '@/utils/gtag'

export default function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Initialize Google Analytics with your Measurement ID
    // Replace with your actual GA4 Measurement ID when ready
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    if (GA_MEASUREMENT_ID) {
      initGoogleAnalytics(GA_MEASUREMENT_ID)
    }
  }, [])

  return (
    <LanguageProvider>
      {children}
      <CookieConsent />
    </LanguageProvider>
  )
}
