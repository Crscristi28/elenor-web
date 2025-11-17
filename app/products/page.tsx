'use client'

import styles from './page.module.css'
import Header from '@/components/Header'
import ScrollReveal from '@/components/ScrollReveal'
import TypeWriterOnView from '@/components/TypeWriterOnView'

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Elenor Product Suite</h1>
          <p className={styles.subtitle}>
            From personal AI assistants to enterprise agents and creative tools—built for individuals, teams, and businesses.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className={styles.products}>
        <div className="container">
          <div className={styles.productsList}>

            {/* Elora AI */}
            <div className={styles.productDetail}>
              <div className={styles.productHeader}>
                <h2>
                  <TypeWriterOnView text="Elora AI" speed={35} />
                </h2>
                <span className={styles.statusBadge} data-status="live">Available Now</span>
              </div>
              <ScrollReveal delay={200}>
                <p className={styles.productDescription}>
                  Your intelligent assistant that respects your privacy. Elora combines the best AI models, offline-first architecture, and full data ownership—you control everything.
                </p>
                <div className={styles.productFeatures}>
                  <div className={styles.feature}>
                    <h4>Privacy First</h4>
                    <p>Your data stays yours. Encrypted, private, no tracking. Works offline. You own your conversations completely.</p>
                  </div>
                  <div className={styles.feature}>
                    <h4>Multi-Model Intelligence</h4>
                    <p>Powered by Claude, Gemini, and GPT—automatically picks the best model for your task</p>
                  </div>
                  <div className={styles.feature}>
                    <h4>Image Generation</h4>
                    <p>Create, edit, and iterate on images with conversation-based controls</p>
                  </div>
                  <div className={styles.feature}>
                    <h4>Real-Time Sync</h4>
                    <p>All your devices stay in sync instantly. Start on phone, continue on laptop.</p>
                  </div>
                  <div className={styles.feature}>
                    <h4>Document Generation</h4>
                    <p>Generate professional PDF documents, reports, presentations, and contracts instantly with proper formatting.</p>
                  </div>
                  <div className={styles.feature}>
                    <h4>Offline Access</h4>
                    <p>Access your conversations, files, and history anytime—even without internet. Everything syncs when you reconnect.</p>
                  </div>
                </div>
                <div className={styles.productActions}>
                  <a href="https://elenor.app" className={styles.primaryButton}>
                    Try Elora for Free
                  </a>
                  <a href="/elora" className={styles.secondaryButton}>
                    Learn More
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Elenor Enterprise */}
            <div className={styles.productDetail}>
              <div className={styles.productHeader}>
                <h2>
                  <TypeWriterOnView text="Elenor Enterprise" speed={35} />
                </h2>
                <span className={styles.statusBadge} data-status="soon">Coming Soon</span>
              </div>
              <ScrollReveal delay={200}>
                <p className={styles.productDescription}>
                  Complete AI infrastructure for businesses. Deploy custom agents, run local LLM models, integrate with your systems, and maintain full control over your data and workflows.
                </p>
                <div className={styles.productFeatures}>
                  <div className={styles.feature}>
                    <h4>Docker Deployment</h4>
                    <p>Containerized setup with one-click deployment. Self-hosted, cloud, or on-premise—your choice.</p>
                  </div>
                  <div className={styles.feature}>
                    <h4>Local LLM Models</h4>
                    <p>Run Gemma, Llama, and custom models with LM Studio. OpenAI-compatible API, full privacy.</p>
                  </div>
                  <div className={styles.feature}>
                    <h4>Custom Agents</h4>
                    <p>Domain-specific AI for finance, accounting, HR, operations, customer service, and logistics.</p>
                  </div>
                  <div className={styles.feature}>
                    <h4>Enterprise Integration</h4>
                    <p>Connect to databases, CRMs, ERPs, accounting systems, and internal workflows seamlessly.</p>
                  </div>
                  <div className={styles.feature}>
                    <h4>Complete Privacy</h4>
                    <p>Your data never leaves your infrastructure. Air-gapped deployment available for maximum security.</p>
                  </div>
                  <div className={styles.feature}>
                    <h4>Custom Workflows</h4>
                    <p>Build automation, pipelines, and tools tailored to your business processes and requirements.</p>
                  </div>
                </div>
                <div className={styles.productActions}>
                  <a href="/contact" className={styles.secondaryButton}>
                    Get in Touch
                  </a>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>Try Elora today or contact us about Enterprise solutions.</p>
          <div className={styles.ctaButtons}>
            <a href="https://elenor.app" className={styles.primaryButton}>
              Try Elora for Free
            </a>
            <a href="/contact" className={styles.secondaryButton}>
              Get in Touch
            </a>
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
            <div className={styles.footerSection}>
              <h4>Products</h4>
              <a href="/elora">Elora AI</a>
              <a href="/products">All Products</a>
            </div>
            <div className={styles.footerSection}>
              <h4>Resources</h4>
              <a href="/elora/help">Help</a>
              <a href="/elora/support">Support</a>
              <a href="/contact">Contact</a>
            </div>
            <div className={styles.footerSection}>
              <h4>Legal</h4>
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
