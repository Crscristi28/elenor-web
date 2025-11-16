'use client'

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import styles from './Header.module.css'

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
]

export default function Header() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selectedLanguage = languages.find(lang => lang.code === language)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <a href="/" className={styles.logo}>Elenor</a>

          <div className={styles.languageSelector} ref={dropdownRef}>
            <button
              className={styles.languageButton}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={styles.flag}>{selectedLanguage?.flag}</span>
              <span className={styles.langName}>{selectedLanguage?.name}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>

            {isOpen && (
              <div className={styles.languageDropdown}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`${styles.languageOption} ${language === lang.code ? styles.languageOptionActive : ''}`}
                    onClick={() => {
                      setLanguage(lang.code as 'en' | 'cs' | 'ro')
                      setIsOpen(false)
                    }}
                  >
                    <span className={styles.flag}>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
