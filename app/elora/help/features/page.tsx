'use client'

import styles from '../page.module.css'
import Header from '@/components/Header'
import ScrollReveal from '@/components/ScrollReveal'
import { useTranslations } from '@/hooks/useTranslations'

export default function Features() {
  const { features } = useTranslations()
  return (
    <div className={styles.page}>
      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1>{features.hero.title}</h1>
          <p className={styles.subtitle}>
            {features.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className={styles.helpCategories}>
        <div className="container">

          {/* Voice Chat */}
          <ScrollReveal delay={100}>
            <div className={styles.modelCard}>
              <h3 id="voice">{features.voice.title}</h3>
              <p>{features.voice.description}</p>
              <ul>
                {features.voice.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Image Generation */}
          <ScrollReveal delay={150}>
            <div className={styles.modelCard}>
              <h3 id="images">{features.images.title}</h3>
              <p>{features.images.description}</p>
              <ul>
                {features.images.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Documents */}
          <ScrollReveal delay={200}>
            <div className={styles.modelCard}>
              <h3 id="documents">{features.documents.title}</h3>
              <p>{features.documents.description}</p>
              <ul>
                {features.documents.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Interactive Apps */}
          <ScrollReveal delay={250}>
            <div className={styles.modelCard}>
              <h3 id="apps">{features.apps.title}</h3>
              <p>{features.apps.description}</p>
              <ul>
                {features.apps.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Memory */}
          <ScrollReveal delay={300}>
            <div className={styles.modelCard}>
              <h3 id="memory">{features.memory.title}</h3>
              <p>{features.memory.description}</p>
              <ul>
                {features.memory.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Sync */}
          <ScrollReveal delay={350}>
            <div className={styles.modelCard}>
              <h3 id="sync">{features.sync.title}</h3>
              <p>{features.sync.description}</p>
              <ul>
                {features.sync.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Web Search */}
          <ScrollReveal delay={400}>
            <div className={styles.modelCard}>
              <h3 id="search">{features.search.title}</h3>
              <p>{features.search.description}</p>
              <ul>
                {features.search.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Privacy */}
          <ScrollReveal delay={450}>
            <div className={styles.modelCard}>
              <h3 id="privacy">{features.privacy.title}</h3>
              <p>{features.privacy.description}</p>
              <ul>
                {features.privacy.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <ScrollReveal delay={500}>
            <div className={styles.ctaContent}>
              <h2>{features.cta.title}</h2>
              <p>{features.cta.subtitle}</p>
              <a href="https://elenor.app" className={styles.ctaButton}>
                {features.cta.button}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
