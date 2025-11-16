'use client'

import styles from '../page.module.css'
import Header from '@/components/Header'
import ScrollReveal from '@/components/ScrollReveal'
import { useTranslations } from '@/hooks/useTranslations'

export default function Models() {
  const { models } = useTranslations()
  return (
    <div className={styles.page}>
      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1>{models.hero.title}</h1>
          <p className={styles.subtitle}>
            {models.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Auto Mode */}
      <section className={styles.helpCategories}>
        <div className="container">
          <ScrollReveal delay={100}>
            <div className={styles.modelSection}>
              <div className={styles.modelHeader}>
                <h2 id="auto">{models.auto.title}</h2>
                <span className={styles.badge}>{models.auto.badge}</span>
              </div>
              <p className={styles.modelDescription}>
                {models.auto.description}
              </p>
            </div>
          </ScrollReveal>

          {/* Manual Selection */}
          <ScrollReveal delay={200}>
            <div className={styles.divider}>
              <h3>{models.manualSelection.title}</h3>
              <p>{models.manualSelection.subtitle}</p>
            </div>
          </ScrollReveal>

          {/* Elora Flash */}
          <ScrollReveal delay={250}>
            <div className={styles.modelCard}>
              <h3>{models.flash.title}</h3>
              <p className={styles.modelTagline}>{models.flash.tagline}</p>
              <ul>
                {models.flash.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <p className={styles.modelNote}>
                <strong>{models.flash.bestFor}</strong> {models.flash.bestForText}
              </p>
            </div>
          </ScrollReveal>

          {/* Elora Core */}
          <ScrollReveal delay={300}>
            <div className={styles.modelCard}>
              <h3>{models.core.title}</h3>
              <p className={styles.modelTagline}>{models.core.tagline}</p>
              <ul>
                {models.core.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <p className={styles.modelNote}>
                <strong>{models.core.bestFor}</strong> {models.core.bestForText}
              </p>
            </div>
          </ScrollReveal>

          {/* Elora Think */}
          <ScrollReveal delay={350}>
            <div className={styles.modelCard}>
              <h3>{models.think.title}</h3>
              <p className={styles.modelTagline}>{models.think.tagline}</p>
              <ul>
                {models.think.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <p className={styles.modelNote}>
                <strong>{models.think.bestFor}</strong> {models.think.bestForText}
              </p>
            </div>
          </ScrollReveal>

          {/* How to Switch */}
          <ScrollReveal delay={400}>
            <div className={styles.howTo}>
              <h3>{models.howToSwitch.title}</h3>
              <ol>
                {models.howToSwitch.steps.map((step, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: step.replace('Settings', '<strong>Settings</strong>').replace('AI Models', '<strong>AI Models</strong>') }}></li>
                ))}
              </ol>
              <p className={styles.tip}>
                <strong>{models.howToSwitch.tip}</strong> {models.howToSwitch.tipText}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <ScrollReveal delay={450}>
            <div className={styles.ctaContent}>
              <h2>{models.cta.title}</h2>
              <p>{models.cta.subtitle}</p>
              <a href="https://elenor.app" className={styles.ctaButton}>
                {models.cta.button}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
