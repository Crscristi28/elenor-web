'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from '@/hooks/useTranslations'
import { updateConsent, saveConsentPreferences, loadConsentPreferences, hasConsentChoice, type ConsentPreferences } from '@/utils/gtag'
import styles from './CookieConsent.module.css'

export default function CookieConsent() {
  const { cookies: t } = useTranslations()
  const [showBanner, setShowBanner] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Check if user has already made a choice
    if (!hasConsentChoice()) {
      setShowBanner(true)
    } else {
      // Load and apply saved preferences
      const saved = loadConsentPreferences()
      if (saved) {
        setPreferences(saved)
        updateConsent(saved)
      }
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = { analytics: true, marketing: true }
    setPreferences(allAccepted)
    saveConsentPreferences(allAccepted)
    updateConsent(allAccepted)
    setShowBanner(false)
    setShowModal(false)
  }

  const handleRejectAll = () => {
    const allRejected = { analytics: false, marketing: false }
    setPreferences(allRejected)
    saveConsentPreferences(allRejected)
    updateConsent(allRejected)
    setShowBanner(false)
    setShowModal(false)
  }

  const handleSavePreferences = () => {
    saveConsentPreferences(preferences)
    updateConsent(preferences)
    setShowBanner(false)
    setShowModal(false)
  }

  const handleCustomize = () => {
    setShowBanner(false)
    setShowModal(true)
  }

  if (!showBanner && !showModal) return null

  return (
    <>
      {/* Banner */}
      {showBanner && (
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <div className={styles.bannerText}>
              <h3>{t.banner.title}</h3>
              <p>{t.banner.description}</p>
            </div>
            <div className={styles.bannerButtons}>
              <button onClick={handleAcceptAll} className={styles.acceptButton}>
                {t.banner.acceptAll}
              </button>
              <button onClick={handleRejectAll} className={styles.rejectButton}>
                {t.banner.rejectAll}
              </button>
              <button onClick={handleCustomize} className={styles.customizeButton}>
                {t.banner.customize}
              </button>
            </div>
            <a href="/privacy" className={styles.privacyLink}>
              {t.banner.privacyPolicy}
            </a>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>{t.modal.title}</h2>
              <button onClick={() => setShowModal(false)} className={styles.closeButton}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <p className={styles.modalDescription}>{t.modal.description}</p>

            {/* Essential Cookies */}
            <div className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <h3>{t.categories.essential.title}</h3>
                <span className={styles.alwaysActive}>{t.categories.essential.alwaysActive}</span>
              </div>
              <p>{t.categories.essential.description}</p>
            </div>

            {/* Analytics Cookies */}
            <div className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <h3>{t.categories.analytics.title}</h3>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  />
                  <span className={styles.toggleSlider}></span>
                </label>
              </div>
              <p>{t.categories.analytics.description}</p>
            </div>

            {/* Marketing Cookies */}
            <div className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <h3>{t.categories.marketing.title}</h3>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  />
                  <span className={styles.toggleSlider}></span>
                </label>
              </div>
              <p>{t.categories.marketing.description}</p>
            </div>

            {/* Modal Buttons */}
            <div className={styles.modalButtons}>
              <button onClick={handleSavePreferences} className={styles.saveButton}>
                {t.modal.savePreferences}
              </button>
              <button onClick={handleAcceptAll} className={styles.acceptAllButton}>
                {t.modal.acceptAll}
              </button>
              <button onClick={handleRejectAll} className={styles.rejectAllButton}>
                {t.modal.rejectAll}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
