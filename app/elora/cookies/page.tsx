'use client'

import LegalLayout from '@/components/LegalLayout'
import { useLanguage } from '@/contexts/LanguageContext'
import { legalPagesTranslations } from '@/translations/legal-pages'

export default function Cookies() {
  const { language } = useLanguage()
  const t = legalPagesTranslations[language].cookies

  return (
    <LegalLayout
      title={t.title}
      effectiveDate={t.effectiveDate}
    >
      {/* Introduction */}
      <p>{t.intro.p1}</p>
      <p>{t.intro.p2}</p>

      {/* What Are Cookies */}
      <h2>{t.whatAreCookies.title}</h2>
      <p>{t.whatAreCookies.p1}</p>
      <p>{t.whatAreCookies.p2}</p>

      {/* How We Use Cookies */}
      <h2>{t.howWeUse.title}</h2>
      <p>{t.howWeUse.p1}</p>
      <ul>
        {t.howWeUse.purposes.map((purpose, index) => (
          <li key={index}>{purpose}</li>
        ))}
      </ul>

      {/* Types of Cookies */}
      <h2>{t.typesOfCookies.title}</h2>

      {/* Essential Cookies */}
      <h3>{t.typesOfCookies.essential.title}</h3>
      <p>{t.typesOfCookies.essential.description}</p>
      <ul>
        {t.typesOfCookies.essential.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p><strong>Note:</strong> {t.typesOfCookies.essential.note}</p>

      {/* Analytics Cookies */}
      <h3>{t.typesOfCookies.analytics.title}</h3>
      <p>{t.typesOfCookies.analytics.description}</p>
      <ul>
        {t.typesOfCookies.analytics.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p><strong>Data collected:</strong> {t.typesOfCookies.analytics.dataCollected}</p>

      {/* Marketing Cookies */}
      <h3>{t.typesOfCookies.marketing.title}</h3>
      <p>{t.typesOfCookies.marketing.description}</p>
      <ul>
        {t.typesOfCookies.marketing.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p><em>{t.typesOfCookies.marketing.thirdParty}</em></p>

      {/* Third-Party Cookies */}
      <h2>{t.thirdPartyCookies.title}</h2>
      <p>{t.thirdPartyCookies.description}</p>
      <ul>
        {t.thirdPartyCookies.services.map((service, index) => (
          <li key={index}>
            <strong>{service.name}:</strong> {service.purpose}
            {' '}(<a href={service.privacy} target="_blank" rel="noopener noreferrer">Privacy Policy</a>)
          </li>
        ))}
      </ul>
      <p><em>{t.thirdPartyCookies.note}</em></p>

      {/* Managing Cookies */}
      <h2>{t.managingCookies.title}</h2>

      {/* Via Consent Banner */}
      <h3>{t.managingCookies.viaConsentBanner.title}</h3>
      <p>{t.managingCookies.viaConsentBanner.description}</p>
      <ul>
        {t.managingCookies.viaConsentBanner.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      <p>{t.managingCookies.viaConsentBanner.changePreferences}</p>

      {/* Via Browser */}
      <h3>{t.managingCookies.viaBrowser.title}</h3>
      <p>{t.managingCookies.viaBrowser.description}</p>
      <ul>
        {t.managingCookies.viaBrowser.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      <p><strong>Warning:</strong> {t.managingCookies.viaBrowser.warning}</p>

      <p>{t.managingCookies.viaBrowser.guides}</p>
      <ul>
        {t.managingCookies.viaBrowser.browserLinks.map((browser, index) => (
          <li key={index}>
            <a href={browser.url} target="_blank" rel="noopener noreferrer">{browser.name}</a>
          </li>
        ))}
      </ul>

      {/* Data Retention */}
      <h2>{t.dataRetention.title}</h2>
      <p>{t.dataRetention.description}</p>
      <ul>
        {t.dataRetention.periods.map((period, index) => (
          <li key={index}>
            <strong>{period.type}:</strong> {period.duration}
          </li>
        ))}
      </ul>

      {/* Your Rights */}
      <h2>{t.yourRights.title}</h2>
      <p>{t.yourRights.description}</p>
      <ul>
        {t.yourRights.rights.map((right, index) => (
          <li key={index}>{right}</li>
        ))}
      </ul>
      <p>{t.yourRights.contact}</p>

      {/* Do Not Track */}
      <h2>{t.doNotTrack.title}</h2>
      <p>{t.doNotTrack.description}</p>

      {/* Updates */}
      <h2>{t.updates.title}</h2>
      <p>{t.updates.description}</p>
      <ul>
        {t.updates.methods.map((method, index) => (
          <li key={index}>{method}</li>
        ))}
      </ul>
      <p>{t.updates.recommendation}</p>

      {/* Contact */}
      <h2>{t.contact.title}</h2>
      <p>{t.contact.description}</p>
      <p>
        <strong>Email:</strong> <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
      </p>
      <p>{t.contact.links}</p>

      <hr style={{margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)'}} />
      <p style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
        Last updated: {t.effectiveDate}
      </p>
    </LegalLayout>
  )
}
