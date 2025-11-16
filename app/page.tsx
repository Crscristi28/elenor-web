'use client'

import styles from './page.module.css'
import InstallGuide from '@/components/InstallGuide'
import Header from '@/components/Header'
import ScrollReveal from '@/components/ScrollReveal'
import TypeWriterOnView from '@/components/TypeWriterOnView'
import { useTranslations } from '@/hooks/useTranslations'

export default function Home() {
  const { mainPage } = useTranslations()
  return (
    <div className={styles.page}>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              <span className={styles.omnia}>{mainPage.hero.title}</span>
            </h1>
            <p className={styles.subtitle}>
              {mainPage.hero.subtitle}
            </p>
            <p className={styles.description}>
              {mainPage.hero.description}
            </p>
            <div className={styles.cta}>
              <a href="https://elenor.app" className={styles.primaryButton}>
                {mainPage.hero.cta}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <a href="#features" className={styles.secondaryButton}>
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Text Only with Typing Animation */}
      <section className={styles.features} id="features">
        <div className="container">
          <div className={styles.featuresList}>

            {mainPage.features.list.map((feature, index) => (
              <div key={index} className={styles.featureTextOnly}>
                <h2>
                  <TypeWriterOnView
                    text={feature.title}
                    speed={35}
                  />
                </h2>
                <ScrollReveal delay={200}>
                  {index === 0 ? (
                    <p dangerouslySetInnerHTML={{ __html: feature.description }} />
                  ) : (
                    <p>{feature.description}</p>
                  )}
                </ScrollReveal>
              </div>
            ))}

          </div>
        </div>

        {/* See Elora in Action */}
        <ScrollReveal delay={500}>
          <div className={styles.videoSection}>
            <div className="container">
              <h2>{mainPage.video.title}</h2>
              <p>{mainPage.video.subtitle}</p>
              <div className={styles.videoContainer}>
                <p className={styles.videoPlaceholder}>{mainPage.video.videoPlaceholder}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Discover More */}
        <ScrollReveal delay={600}>
          <div className={styles.discoverMore}>
            <a href="/features" className={styles.discoverButton}>
              {mainPage.features.discoverMore}
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* PWA Installation Guide */}
      <InstallGuide />

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>{mainPage.cta.title}</h2>
            <p>{mainPage.cta.subtitle}</p>
            <a href="https://elenor.app" className={styles.primaryButton}>
              {mainPage.cta.button}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <h3>{mainPage.footer.brand}</h3>
              <p>{mainPage.footer.brandTagline}</p>
            </div>
            <div className={styles.footerLinks}>
              <a href="/privacy">{mainPage.footer.links.privacy}</a>
              <a href="/terms">{mainPage.footer.links.terms}</a>
              <a href="/gdpr">{mainPage.footer.links.gdpr}</a>
              <a href="/security">{mainPage.footer.links.security}</a>
              <a href="/cookies">{mainPage.footer.links.cookies}</a>
              <a href="/usage">{mainPage.footer.links.usage}</a>
              <a href="/help">{mainPage.footer.links.help}</a>
              <a href="/support">{mainPage.footer.links.support}</a>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>{mainPage.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
