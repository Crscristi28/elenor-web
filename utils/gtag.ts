// Google Analytics Consent Mode v2

export type ConsentPreferences = {
  analytics: boolean
  marketing: boolean
}

// Initialize Google Analytics with default consent (denied)
export const initGoogleAnalytics = (measurementId: string) => {
  // Load gtag script
  const script1 = document.createElement('script')
  script1.async = true
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script1)

  // Initialize gtag
  const script2 = document.createElement('script')
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    // Set default consent to denied (GDPR requirement)
    gtag('consent', 'default', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    });

    gtag('config', '${measurementId}');
  `
  document.head.appendChild(script2)
}

// Update consent based on user preferences
export const updateConsent = (preferences: ConsentPreferences) => {
  if (typeof window === 'undefined' || !(window as any).gtag) return

  const gtag = (window as any).gtag

  gtag('consent', 'update', {
    'analytics_storage': preferences.analytics ? 'granted' : 'denied',
    'ad_storage': preferences.marketing ? 'granted' : 'denied',
    'ad_user_data': preferences.marketing ? 'granted' : 'denied',
    'ad_personalization': preferences.marketing ? 'granted' : 'denied'
  })
}

// Save consent preferences to localStorage
export const saveConsentPreferences = (preferences: ConsentPreferences) => {
  if (typeof window === 'undefined') return
  localStorage.setItem('omnia-cookie-consent', JSON.stringify(preferences))
}

// Load consent preferences from localStorage
export const loadConsentPreferences = (): ConsentPreferences | null => {
  if (typeof window === 'undefined') return null

  const saved = localStorage.getItem('omnia-cookie-consent')
  if (!saved) return null

  try {
    return JSON.parse(saved)
  } catch {
    return null
  }
}

// Check if user has made a consent choice
export const hasConsentChoice = (): boolean => {
  if (typeof window === 'undefined') return false
  return localStorage.getItem('omnia-cookie-consent') !== null
}
