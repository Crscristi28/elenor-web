import styles from './page.module.css'
import Header from '@/components/Header'
import ScrollReveal from '@/components/ScrollReveal'

export default function Features() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Built different</h1>
          <p className={styles.subtitle}>
            Elora isn't just another AI assistant. It's a complete workspace powered by the best models,
            unified personality, and intelligent agents working behind the scenes.
          </p>
        </div>
      </section>

      {/* Features Detail */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featuresList}>

            {/* Best AI Models */}
            <ScrollReveal delay={100}>
              <div className={styles.featureDetail}>
                <h2>The best AI models, one personality</h2>
                <p>
                  Elora runs on the newest Gemini models, Anthropic's Claude Sonnet 4.5 and Haiku 4.5, and OpenAI's GPT-5.
                  For images, it uses Google's state-of-the-art Gemini 2.5 Flash Image generation.
                  You don't pick a model—Elora does. Every response feels like it's from the same assistant, no matter which AI is working behind the scenes.
                </p>
              </div>
            </ScrollReveal>

            {/* Agents */}
            <ScrollReveal delay={150}>
              <div className={styles.featureDetail}>
              <h2>Intelligent agents manage your memory</h2>
              <p>
                Elora runs background agents that automatically organize your conversations, extract key information,
                and build context over time. You never have to repeat yourself or explain what you meant three messages ago.
                The system remembers and learns from every interaction.
              </p>
            </div>
            </ScrollReveal>

            {/* No buttons */}
            <ScrollReveal delay={200}>
              <div className={styles.featureDetail}>
                <h2>No buttons. Just tell Elora what you need</h2>
                <p>
                  Forget clicking "Generate Image" or "Search Web." Just write naturally: "Show me a sunset over mountains"
                  or "What's the latest news on AI?" Elora automatically chooses the right tool—image generation, web search,
                  document processing, or code execution—based on what you ask for.
                </p>
              </div>
            </ScrollReveal>

            {/* Image editing */}
            <ScrollReveal delay={250}>
              <div className={styles.featureDetail}>
                <h2>Edit and recreate images completely</h2>
                <p>
                  Don't like how an image turned out? Ask Elora to change specific parts, adjust the style, or recreate it entirely.
                  Powered by Google's Nano Banana 🍌 (Gemini 2.5 Flash Image), you can iterate on images through conversation with pixel-perfect editing until they're exactly what you envisioned.
                </p>
              </div>
            </ScrollReveal>

            {/* Interactive apps */}
            <ScrollReveal delay={300}>
              <div className={styles.featureDetail}>
                <h2>Creates interactive apps instantly</h2>
                <p>
                  Need a calculator? A data visualizer? A mini game? Elora generates complete, working HTML apps you can use immediately.
                  No deployment, no setup—just interactive tools created on demand and ready to use in your browser.
                </p>
              </div>
            </ScrollReveal>

            {/* Documents */}
            <ScrollReveal delay={350}>
              <div className={styles.featureDetail}>
                <h2>Generates professional documents</h2>
                <p>
                  From reports to presentations, invoices to contracts—Elora creates polished PDF documents with proper formatting,
                  styling, and structure. Just describe what you need, and get a production-ready document in seconds.
                </p>
              </div>
            </ScrollReveal>

            {/* Photos */}
            <ScrollReveal delay={400}>
              <div className={styles.featureDetail}>
                <h2>Creates photos exactly how you want them</h2>
                <p>
                  Describe your vision in detail: lighting, composition, style, mood. Elora understands creative direction
                  and generates images that match your exact specifications. The more specific you are, the better the results.
                </p>
              </div>
            </ScrollReveal>

            {/* Real-time sync */}
            <ScrollReveal delay={450}>
              <div className={styles.featureDetail}>
                <h2>Real-time sync between all your devices</h2>
                <p>
                  Start a conversation on your phone, continue on your laptop. Every message, every file, every memory syncs
                  instantly across devices. Your work follows you everywhere, always up to date, always ready.
                </p>
              </div>
            </ScrollReveal>

            {/* Offline first */}
            <ScrollReveal delay={500}>
              <div className={styles.featureDetail}>
                <h2>Offline-first architecture</h2>
                <p>
                  Elora works without internet. Write messages, review conversations, access your data—all offline.
                  When you reconnect, everything syncs seamlessly. No waiting, no interruptions, no lost work.
                </p>
              </div>
            </ScrollReveal>

            {/* Privacy & Control */}
            <ScrollReveal delay={550}>
              <div className={styles.featureDetail}>
                <h2>Your data, your control</h2>
                <p>
                  Elora is privacy-first. Your conversations stay encrypted, your files remain yours, and you control what gets saved.
                  No tracking, no selling data, no hidden agendas. You own your information completely.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to try something different?</h2>
          <a href="https://elenor.app" className={styles.ctaButton}>
            Start using Elora
          </a>
        </div>
      </section>
    </div>
  )
}
