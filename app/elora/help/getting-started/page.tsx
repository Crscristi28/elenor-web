'use client'

import styles from '../page.module.css'
import Header from '@/components/Header'
import ScrollReveal from '@/components/ScrollReveal'
import { useTranslations } from '@/hooks/useTranslations'

export default function GettingStarted() {
  const { gettingStarted } = useTranslations()
  return (
    <div className={styles.page}>
      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1>{gettingStarted.hero.title}</h1>
          <p className={styles.subtitle}>
            {gettingStarted.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className={styles.helpCategories}>
        <div className="container">

          {/* Step 1 */}
          <ScrollReveal delay={100}>
            <div className={styles.modelSection}>
              <h2 id="account">{gettingStarted.steps.step1.title}</h2>
              <p className={styles.modelDescription}>
                {gettingStarted.steps.step1.description.split('elenor.app')[0]}<a href="https://elenor.app" style={{color: '#F97316', textDecoration: 'underline'}}>{gettingStarted.steps.step1.link}</a>{gettingStarted.steps.step1.description.split('elenor.app')[1]}
              </p>
            </div>
          </ScrollReveal>

          {/* Step 2 */}
          <ScrollReveal delay={150}>
            <div className={styles.modelSection}>
              <h2>{gettingStarted.steps.step2.title}</h2>
              <p className={styles.modelDescription}>
                {gettingStarted.steps.step2.description}
              </p>
              <p className={styles.modelNote}>
                <strong>{gettingStarted.steps.step2.ios}</strong> {gettingStarted.steps.step2.iosInstructions}<br/>
                <strong>{gettingStarted.steps.step2.android}</strong> {gettingStarted.steps.step2.androidInstructions}
              </p>
            </div>
          </ScrollReveal>

          {/* Step 3 */}
          <ScrollReveal delay={200}>
            <div className={styles.modelSection}>
              <h2>{gettingStarted.steps.step3.title}</h2>
              <p className={styles.modelDescription}>
                {gettingStarted.steps.step3.description}
              </p>
              <p className={styles.modelNote}>
                <strong>{gettingStarted.steps.step3.recommended}</strong> {gettingStarted.steps.step3.recommendedText}
              </p>
            </div>
          </ScrollReveal>

          {/* Step 4 */}
          <ScrollReveal delay={250}>
            <div className={styles.modelSection}>
              <h2>{gettingStarted.steps.step4.title}</h2>
              <p className={styles.modelDescription}>
                {gettingStarted.steps.step4.description}
              </p>
            </div>
          </ScrollReveal>

          {/* Quick Tips */}
          <ScrollReveal delay={300}>
            <div className={styles.howTo}>
              <h3>{gettingStarted.quickTips.title}</h3>
              <ul>
                {gettingStarted.quickTips.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Next Steps */}
          <ScrollReveal delay={350}>
            <div className={styles.divider}>
              <h3>{gettingStarted.nextSteps.title}</h3>
              <p>{gettingStarted.nextSteps.subtitle}</p>
              <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap'}}>
                <a href="/help/models" className={styles.ctaButton} style={{display: 'inline-block'}}>
                  {gettingStarted.nextSteps.learnModels}
                </a>
                <a href="/help/features" className={styles.ctaButton} style={{display: 'inline-block'}}>
                  {gettingStarted.nextSteps.exploreFeatures}
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <ScrollReveal delay={400}>
            <div className={styles.ctaContent}>
              <h2>{gettingStarted.cta.title}</h2>
              <p>{gettingStarted.cta.subtitle}</p>
              <a href="/support" className={styles.ctaButton}>
                {gettingStarted.cta.button}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
