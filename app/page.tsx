'use client'

import styles from './page.module.css'
import Header from '@/components/Header'
import ScrollReveal from '@/components/ScrollReveal'
import TypeWriterOnView from '@/components/TypeWriterOnView'
import { useTranslations } from '@/hooks/useTranslations'

export default function Home() {
  const { mainPage } = useTranslations()

  const products = [
    {
      title: 'Elora AI',
      description: 'Your all-in-one intelligent assistant. Elora blends multi-model orchestration, real-time agents, search, reasoning, memory, and a unified UI into one seamless assistant. Powered by Anthropic, Google, and OpenAI — Elora automatically selects the best model or agent for every task, so you never need to think about which AI to choose. Fast, consistent, and always in context.',
      status: 'live',
      primaryLink: 'https://elenor.app',
      primaryText: 'Try Elora for Free',
      secondaryLink: '/elora',
      secondaryText: 'Learn More',
      hideStatus: true
    },
    {
      title: 'Elenor Enterprise',
      description: 'Complete AI infrastructure for businesses. Deploy custom agents with Docker, run local LLM models (LM Studio, Gemma), integrate with your systems, and maintain full control. Self-hosted or cloud, on-premise or hybrid—built for teams that need privacy, customization, and enterprise-grade AI.',
      status: 'soon',
      secondaryLink: '/contact',
      secondaryText: 'Contact Sales'
    }
  ]

  return (
    <div className={styles.page}>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              <span className={styles.omnia}>Elenor AI Platform</span>
            </h1>
            <p className={styles.subtitle}>
              From intelligent assistants to enterprise agents and APIs
            </p>
            <p className={styles.description}>
              Intelligence made simple.
            </p>
            <div className={styles.cta}>
              <a href="https://elenor.app" className={styles.primaryButton}>
                Try Elora for Free
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <a href="#products" className={styles.secondaryButton}>
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Intro */}
      <section className={styles.platformIntro}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.introContent}>
              <h2>AI infrastructure for individuals, teams, and enterprises</h2>
              <p>
                Elenor provides the foundation for AI-powered applications—from personal assistants to fully autonomous enterprise agents.
                Build, deploy, and scale intelligent tools using world-class models, modular agents, and secure APIs.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Section */}
      <section className={styles.features} id="products">
        <div className="container">
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <h2>
                <TypeWriterOnView text="Products" speed={50} />
              </h2>
            </div>
          </ScrollReveal>

          <div className={styles.featuresList}>
            {products.map((product, index) => (
              <div key={index} className={styles.featureTextOnly}>
                <h2>
                  <TypeWriterOnView
                    text={product.title}
                    speed={35}
                  />
                </h2>
                <ScrollReveal delay={200}>
                  <p>{product.description}</p>

                  <div className={styles.productActions}>
                    {product.primaryLink && (
                      <a href={product.primaryLink} className={styles.productButton}>
                        {product.primaryText}
                      </a>
                    )}
                    {product.secondaryLink && (
                      <a href={product.secondaryLink} className={styles.productButtonSecondary}>
                        {product.secondaryText}
                      </a>
                    )}
                    {!product.hideStatus && (
                      <span className={styles.statusBadge} data-status={product.status}>
                        {product.status === 'live' && '✅ Available'}
                        {product.status === 'soon' && '🔜 Coming Soon'}
                        {product.status === 'future' && 'Future'}
                        {product.status === 'enterprise' && 'Enterprise'}
                      </span>
                    )}
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>

          <ScrollReveal delay={600}>
            <div className={styles.discoverMore}>
              <a href="/products" className={styles.discoverButton}>
                Learn more about our products
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Elenor */}
      <section className={styles.whyElenor}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.whyContent}>
              <h2>Why Elenor?</h2>
              <ul>
                <li>Multi-model intelligence using Anthropic, OpenAI, and Google</li>
                <li>Agents for complex tasks and automation</li>
                <li>Full privacy — local, encrypted, or on-premise</li>
                <li>Fast integration — simple APIs and SDKs</li>
                <li>Future-ready — custom models, fine-tuning, and more</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to build with Elenor?</h2>
            <p>Start with Elora today. No credit card required.</p>
            <div className={styles.ctaButtons}>
              <a href="https://elenor.app" className={styles.primaryButton}>
                Try Elora for Free
              </a>
              <a href="/contact" className={styles.secondaryButton}>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <h3>Elenor AI Platform</h3>
              <p>Intelligence made simple</p>
            </div>
            <div className={styles.footerLinks}>
              <a href="/elora">Elora</a>
              <a href="/products">Products</a>
              <a href="/elora/help">Help</a>
              <a href="/elora/support">Support</a>
              <a href="/contact">Contact</a>
            </div>
            <div className={styles.footerLinks}>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/gdpr">GDPR</a>
              <a href="/security">Security</a>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© 2025 Elenor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
