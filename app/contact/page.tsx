'use client'

import styles from '../help/page.module.css'
import Header from '@/components/Header'
import ScrollReveal from '@/components/ScrollReveal'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Contact() {
  const { language } = useLanguage()

  const translations = {
    en: {
      hero: {
        title: "Contact Us",
        subtitle: "Get in touch with the Elenor team"
      },
      general: {
        title: "General Inquiries",
        description: "For general questions, business inquiries, or partnership opportunities, reach out to us at:",
        email: "contact@elenor.io",
        response: "We typically respond within 24-48 hours."
      },
      business: {
        title: "Business & Partnerships",
        description: "Interested in enterprise solutions, partnerships, or collaboration? We'd love to hear from you.",
        items: [
          "Enterprise AI solutions",
          "Partnership opportunities",
          "Media and press inquiries",
          "Investment opportunities"
        ]
      },
      support: {
        title: "Need Technical Support?",
        description: "For product support, bug reports, or feature requests, please visit our Support page where our team can assist you more effectively.",
        button: "Go to Support"
      },
      privacy: {
        title: "Privacy & Legal",
        description: "For privacy-related questions, data requests, or legal matters:",
        email: "privacy@elenor.io",
        link: "View Privacy Policy"
      },
      location: {
        title: "Company Information",
        name: "Elenor AI Platform",
        tagline: "Making intelligence simple and accessible for everyone."
      }
    },
    cs: {
      hero: {
        title: "Kontaktujte nás",
        subtitle: "Spojte se s týmem Elenor"
      },
      general: {
        title: "Obecné dotazy",
        description: "Pro obecné dotazy, obchodní příležitosti nebo partnerství nás kontaktujte na:",
        email: "contact@elenor.io",
        response: "Obvykle odpovídáme do 24-48 hodin."
      },
      business: {
        title: "Business & Partnerství",
        description: "Máte zájem o podniková řešení, partnerství nebo spolupráci? Rádi se s vámi spojíme.",
        items: [
          "Podniková AI řešení",
          "Partnerské příležitosti",
          "Média a tiskové dotazy",
          "Investiční příležitosti"
        ]
      },
      support: {
        title: "Potřebujete technickou podporu?",
        description: "Pro podporu produktu, hlášení chyb nebo žádosti o funkce navštivte naši stránku Podpory, kde vám náš tým může efektivněji pomoci.",
        button: "Přejít na podporu"
      },
      privacy: {
        title: "Soukromí a právní záležitosti",
        description: "Pro dotazy týkající se soukromí, žádosti o data nebo právní záležitosti:",
        email: "privacy@elenor.io",
        link: "Zobrazit zásady ochrany osobních údajů"
      },
      location: {
        title: "Informace o společnosti",
        name: "Elenor AI Platform",
        tagline: "Děláme inteligenci jednoduchou a dostupnou pro všechny."
      }
    },
    ro: {
      hero: {
        title: "Contactează-ne",
        subtitle: "Intră în legătură cu echipa Elenor"
      },
      general: {
        title: "Întrebări generale",
        description: "Pentru întrebări generale, oportunități de afaceri sau parteneriate, contactează-ne la:",
        email: "contact@elenor.io",
        response: "De obicei răspundem în 24-48 de ore."
      },
      business: {
        title: "Business & Parteneriate",
        description: "Interesat de soluții enterprise, parteneriate sau colaborare? Ne-ar plăcea să auzim de la tine.",
        items: [
          "Soluții AI enterprise",
          "Oportunități de parteneriat",
          "Întrebări media și presă",
          "Oportunități de investiție"
        ]
      },
      support: {
        title: "Ai nevoie de suport tehnic?",
        description: "Pentru suport produs, raportare bug-uri sau solicitări de funcții, te rugăm să vizitezi pagina noastră de Suport unde echipa noastră te poate ajuta mai eficient.",
        button: "Mergi la suport"
      },
      privacy: {
        title: "Confidențialitate și legal",
        description: "Pentru întrebări legate de confidențialitate, cereri de date sau aspecte legale:",
        email: "privacy@elenor.io",
        link: "Vezi politica de confidențialitate"
      },
      location: {
        title: "Informații companie",
        name: "Elenor AI Platform",
        tagline: "Facem inteligența simplă și accesibilă pentru toată lumea."
      }
    }
  }

  const t = translations[language as keyof typeof translations] || translations.en

  return (
    <div className={styles.page}>
      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1>{t.hero.title}</h1>
          <p className={styles.subtitle}>
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Sections */}
      <section className={styles.helpCategories}>
        <div className="container">

          {/* General Contact */}
          <ScrollReveal delay={100}>
            <div className={styles.modelCard}>
              <h3>{t.general.title}</h3>
              <p>{t.general.description}</p>
              <p style={{marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)'}}>
                <strong style={{fontSize: 'var(--font-size-xl)', color: '#F97316'}}>
                  <a href={`mailto:${t.general.email}`} style={{color: '#F97316', textDecoration: 'none'}}>
                    {t.general.email}
                  </a>
                </strong>
              </p>
              <p className={styles.modelNote} style={{fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)'}}>
                {t.general.response}
              </p>
            </div>
          </ScrollReveal>

          {/* Business & Partnerships */}
          <ScrollReveal delay={150}>
            <div className={styles.modelCard}>
              <h3>{t.business.title}</h3>
              <p>{t.business.description}</p>
              <ul style={{marginTop: 'var(--space-4)'}}>
                {t.business.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p style={{marginTop: 'var(--space-4)', color: 'var(--color-text-secondary)'}}>
                <a href={`mailto:${t.general.email}`} style={{color: '#F97316', textDecoration: 'underline'}}>
                  {t.general.email}
                </a>
              </p>
            </div>
          </ScrollReveal>

          {/* Support Redirect */}
          <ScrollReveal delay={200}>
            <div className={styles.modelCard} style={{background: 'var(--color-surface-secondary)'}}>
              <h3>{t.support.title}</h3>
              <p>{t.support.description}</p>
              <div style={{marginTop: 'var(--space-6)'}}>
                <a href="/support" className={styles.ctaButton} style={{display: 'inline-block', background: 'var(--color-primary)', color: 'white'}}>
                  {t.support.button}
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Privacy & Legal */}
          <ScrollReveal delay={250}>
            <div className={styles.modelCard}>
              <h3>{t.privacy.title}</h3>
              <p>{t.privacy.description}</p>
              <p style={{marginTop: 'var(--space-4)'}}>
                <strong>
                  <a href={`mailto:${t.privacy.email}`} style={{color: '#F97316', textDecoration: 'underline'}}>
                    {t.privacy.email}
                  </a>
                </strong>
              </p>
              <p style={{marginTop: 'var(--space-2)'}}>
                <a href="/privacy" style={{color: 'var(--color-text-secondary)', textDecoration: 'underline'}}>
                  {t.privacy.link}
                </a>
              </p>
            </div>
          </ScrollReveal>

          {/* Company Info */}
          <ScrollReveal delay={300}>
            <div className={styles.divider} style={{textAlign: 'center'}}>
              <h3>{t.location.title}</h3>
              <p style={{fontSize: 'var(--font-size-xl)', fontWeight: 600, marginTop: 'var(--space-4)'}}>
                {t.location.name}
              </p>
              <p style={{color: 'var(--color-text-secondary)', marginTop: 'var(--space-2)'}}>
                {t.location.tagline}
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <ScrollReveal delay={350}>
            <div className={styles.ctaContent}>
              <h2>{language === 'cs' ? 'Začněte používat Elora' : language === 'ro' ? 'Începe să folosești Elora' : 'Start Using Elora'}</h2>
              <p>{language === 'cs' ? 'Připojte se k tisícům uživatelů, kteří již používají Elora' : language === 'ro' ? 'Alătură-te miilor de utilizatori care folosesc deja Elora' : 'Join thousands of users already using Elora'}</p>
              <a href="https://elenor.app" className={styles.ctaButton}>
                {language === 'cs' ? 'Vyzkoušet zdarma' : language === 'ro' ? 'Încearcă gratuit' : 'Try for Free'}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
