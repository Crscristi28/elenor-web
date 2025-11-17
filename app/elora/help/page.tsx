'use client'

import styles from './page.module.css'
import Header from '@/components/Header'
import ScrollReveal from '@/components/ScrollReveal'
import { useTranslations } from '@/hooks/useTranslations'

export default function Help() {
  const { help } = useTranslations()
  return (
    <div className={styles.page}>
      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1>{help.hero.title}</h1>
          <p className={styles.subtitle}>
            {help.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Help Categories */}
      <section className={styles.helpCategories}>
        <div className="container">
          <div className={styles.categoriesGrid}>

            <ScrollReveal delay={100}>
              <a href="/help/getting-started" className={styles.categoryCard}>
                <h3>{help.categories.gettingStarted.title}</h3>
                <p>{help.categories.gettingStarted.description}</p>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <a href="/help/models" className={styles.categoryCard}>
                <h3>{help.categories.models.title}</h3>
                <p>{help.categories.models.description}</p>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <a href="/help/features" className={styles.categoryCard}>
                <h3>{help.categories.features.title}</h3>
                <p>{help.categories.features.description}</p>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <a href="/support" className={styles.categoryCard}>
                <h3>{help.categories.support.title}</h3>
                <p>{help.categories.support.description}</p>
              </a>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className={styles.quickLinks}>
        <div className="container">
          <ScrollReveal delay={300}>
            <h2>{help.popularTopics.title}</h2>
            <div className={styles.linksList}>
              <a href="/help/getting-started#account">{help.popularTopics.links.createAccount}</a>
              <a href="/help/models#auto">{help.popularTopics.links.autoModel}</a>
              <a href="/help/features#voice">{help.popularTopics.links.voiceChat}</a>
              <a href="/help/features#images">{help.popularTopics.links.generateImages}</a>
              <a href="/help/features#documents">{help.popularTopics.links.uploadDocs}</a>
              <a href="/support#contact">{help.popularTopics.links.contactSupport}</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Still Need Help */}
      <section className={styles.ctaSection}>
        <div className="container">
          <ScrollReveal delay={350}>
            <div className={styles.ctaContent}>
              <h2>{help.cta.title}</h2>
              <p>{help.cta.subtitle}</p>
              <a href="/support" className={styles.ctaButton}>
                {help.cta.button}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
