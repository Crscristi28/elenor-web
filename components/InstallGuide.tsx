'use client'

import { useState } from 'react'
import { useTranslations } from '@/hooks/useTranslations'
import styles from './InstallGuide.module.css'

export default function InstallGuide() {
  const { mainPage } = useTranslations()
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios')
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className={styles.installSection}>
      <div className="container">
        <div className={styles.installHeader}>
          <h2>{mainPage.installGuide.title}</h2>
          <p>{mainPage.installGuide.subtitle}</p>
          <button
            className={styles.expandButton}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? mainPage.installGuide.hideButton : mainPage.installGuide.showButton}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </div>

        {isExpanded && (
          <>
            <div className={styles.platformSwitcher}>
              <button
                className={`${styles.platformButton} ${platform === 'ios' ? styles.platformButtonActive : ''}`}
                onClick={() => setPlatform('ios')}
              >
                {mainPage.installGuide.platforms.ios}
              </button>
              <button
                className={`${styles.platformButton} ${platform === 'android' ? styles.platformButtonActive : ''}`}
                onClick={() => setPlatform('android')}
              >
                {mainPage.installGuide.platforms.android}
              </button>
            </div>

            {/* iOS Steps */}
            {platform === 'ios' && (
              <div className={styles.installSteps}>
                <div className={styles.installStep}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepImage}>
                    <img src="/ios-step-1.png" alt="iOS Step 1" />
                  </div>
                  <h3>{mainPage.installGuide.ios.step1.title}</h3>
                  <p>{mainPage.installGuide.ios.step1.description}</p>
                </div>

                <div className={styles.installStep}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepImage}>
                    <img src="/ios-step-2.jpg" alt="iOS Step 2" />
                  </div>
                  <h3>{mainPage.installGuide.ios.step2.title}</h3>
                  <p>{mainPage.installGuide.ios.step2.description}</p>
                </div>

                <div className={styles.installStep}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepImage}>
                    <img src="/ios-step-3.jpg" alt="iOS Step 3" />
                  </div>
                  <h3>{mainPage.installGuide.ios.step3.title}</h3>
                  <p>{mainPage.installGuide.ios.step3.description}</p>
                </div>
              </div>
            )}

            {/* Android Steps */}
            {platform === 'android' && (
              <div className={styles.installSteps}>
                <div className={styles.installStep}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepImage}>
                    <div className={styles.imagePlaceholder}>Android Step 1</div>
                  </div>
                  <h3>{mainPage.installGuide.android.step1.title}</h3>
                  <p>{mainPage.installGuide.android.step1.description}</p>
                </div>

                <div className={styles.installStep}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepImage}>
                    <div className={styles.imagePlaceholder}>Android Step 2</div>
                  </div>
                  <h3>{mainPage.installGuide.android.step2.title}</h3>
                  <p>{mainPage.installGuide.android.step2.description}</p>
                </div>

                <div className={styles.installStep}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepImage}>
                    <div className={styles.imagePlaceholder}>Android Step 3</div>
                  </div>
                  <h3>{mainPage.installGuide.android.step3.title}</h3>
                  <p>{mainPage.installGuide.android.step3.description}</p>
                </div>

                <div className={styles.installStep}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepImage}>
                    <div className={styles.imagePlaceholder}>Android Step 4</div>
                  </div>
                  <h3>{mainPage.installGuide.android.step4.title}</h3>
                  <p>{mainPage.installGuide.android.step4.description}</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
