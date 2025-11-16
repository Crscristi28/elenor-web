'use client'

import styles from '../help/page.module.css'
import Header from '@/components/Header'
import ScrollReveal from '@/components/ScrollReveal'
import { useTranslations } from '@/hooks/useTranslations'

export default function Support() {
  const { support } = useTranslations()
  return (
    <div className={styles.page}>
      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1>{support.hero.title}</h1>
          <p className={styles.subtitle}>
            {support.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className={styles.helpCategories}>
        <div className="container">

          {/* Contact Email */}
          <ScrollReveal delay={100}>
            <div className={styles.modelCard}>
              <h3 id="contact">{support.contact.title}</h3>
              <p>{support.contact.description}</p>
              <p className={styles.modelNote}>
                <strong>{support.contact.email}</strong> <a href={`mailto:${support.contact.emailAddress}`} style={{color: '#F97316', textDecoration: 'underline'}}>{support.contact.emailAddress}</a>
              </p>
            </div>
          </ScrollReveal>

          {/* Bug Reports */}
          <ScrollReveal delay={150}>
            <div className={styles.modelCard}>
              <h3>{support.bugs.title}</h3>
              <p>{support.bugs.description}</p>
              <ul>
                {support.bugs.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
              <p className={styles.modelNote}>
                {support.bugs.email} <a href={`mailto:${support.bugs.emailAddress}`} style={{color: '#F97316', textDecoration: 'underline'}}>{support.bugs.emailAddress}</a>
              </p>
            </div>
          </ScrollReveal>

          {/* Feature Requests */}
          <ScrollReveal delay={200}>
            <div className={styles.modelCard}>
              <h3>{support.features.title}</h3>
              <p>{support.features.description}</p>
              <ul>
                {support.features.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
              <p className={styles.modelNote}>
                {support.features.email} <a href={`mailto:${support.features.emailAddress}`} style={{color: '#F97316', textDecoration: 'underline'}}>{support.features.emailAddress}</a>
              </p>
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal delay={250}>
            <div className={styles.howTo}>
              <h3>{support.faq.title}</h3>

              {support.faq.questions.map((item, index) => (
                <div key={index} style={{marginBottom: index < support.faq.questions.length - 1 ? 'var(--space-6)' : '0'}}>
                  <h4 style={{marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-lg)', fontWeight: 600}}>{item.question}</h4>
                  <p style={{color: 'var(--color-text-secondary)'}}>
                    {item.privacyLink ? (
                      <>
                        {item.answer.split(item.privacyLink)[0]}
                        <a href="/privacy" style={{color: '#F97316', textDecoration: 'underline'}}>{item.privacyLink}</a>
                        {item.answer.split(item.privacyLink)[1]}
                      </>
                    ) : (
                      item.answer
                    )}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Still Need Help */}
          <ScrollReveal delay={300}>
            <div className={styles.divider}>
              <h3>{support.stillNeedHelp.title}</h3>
              <p>{support.stillNeedHelp.subtitle}</p>
              <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap'}}>
                <a href="/help/getting-started" className={styles.ctaButton} style={{display: 'inline-block', background: 'var(--color-surface)', color: 'var(--color-text)', border: '2px solid var(--color-border)'}}>
                  {support.stillNeedHelp.gettingStarted}
                </a>
                <a href="/help/features" className={styles.ctaButton} style={{display: 'inline-block', background: 'var(--color-surface)', color: 'var(--color-text)', border: '2px solid var(--color-border)'}}>
                  {support.stillNeedHelp.featuresGuide}
                </a>
                <a href="/help/models" className={styles.ctaButton} style={{display: 'inline-block', background: 'var(--color-surface)', color: 'var(--color-text)', border: '2px solid var(--color-border)'}}>
                  {support.stillNeedHelp.aiModels}
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <ScrollReveal delay={350}>
            <div className={styles.ctaContent}>
              <h2>{support.communityCta.title}</h2>
              <p>{support.communityCta.subtitle}</p>
              <a href="https://elenor.app" className={styles.ctaButton}>
                {support.communityCta.button}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
