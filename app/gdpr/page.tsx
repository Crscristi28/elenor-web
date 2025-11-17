'use client'

import LegalLayout from '@/components/LegalLayout'

export default function GDPR() {
  return (
    <LegalLayout
      title="Elenor AI Platform GDPR Compliance"
      effectiveDate="17 November 2025"
    >
      <p>This document summarizes how the Elenor AI Platform meets the key GDPR requirements and outlines risk management procedures.</p>

      <h2>1. Controller and Contacts</h2>
      <ul>
        <li><strong>Controller</strong>: Cristian Bucioaca, Elenor AI Platform.</li>
        <li><strong>Privacy contact</strong>: <a href="mailto:privacy@elenor.io">privacy@elenor.io</a>.</li>
        <li>No dedicated DPO is appointed; the Controller handles data protection matters directly.</li>
      </ul>

      <h2>2. Legal Basis</h2>
      <ul>
        <li>Performance of contract (Art. 6(1)(b)): account creation, platform services, subscription management.</li>
        <li>Legal obligation (Art. 6(1)(c)): tax and accounting records handled via Stripe.</li>
        <li>Legitimate interest (Art. 6(1)(f)): security logging, incident handling, aggregated analytics.</li>
        <li>Consent (Art. 6(1)(a)): only when the User voluntarily submits sensitive data; not required for core functionality.</li>
      </ul>

      <h2>3. Data Minimisation and Storage Limitation</h2>
      <ul>
        <li>Row Level Security policies ensure users access only their own records.</li>
        <li>Data is collected only to the extent necessary for providing platform services.</li>
        <li>Retention periods are defined per data category and documented in the Privacy Policy.</li>
        <li>Users can delete their accounts and all associated data at any time.</li>
      </ul>

      <h2>4. Data Subject Rights</h2>
      <ol>
        <li><strong>Access</strong>: Users can request exports of their data; responses provided within 30 days.</li>
        <li><strong>Rectification</strong>: profile data editable through account settings.</li>
        <li><strong>Erasure</strong>: account deletion removes all user data and associated records.</li>
        <li><strong>Restriction</strong>: Users may disable specific features or cancel subscriptions.</li>
        <li><strong>Portability</strong>: exports available in machine-readable formats.</li>
        <li><strong>Objection</strong>: Users can challenge processing based on legitimate interests.</li>
        <li><strong>Complaint</strong>: Users may contact the Office for Personal Data Protection (<a href="http://www.uoou.cz" target="_blank" rel="noopener noreferrer">www.uoou.cz</a>).</li>
      </ol>

      <h2>5. Processor Agreements</h2>
      <ul>
        <li><strong>Supabase</strong>: DPA included in subscription; EU data hosting.</li>
        <li><strong>Google Cloud</strong>: DPA covering AI services and infrastructure. Regions configured based on requirements.</li>
        <li><strong>Anthropic</strong>: API terms specify short-term retention for quality evaluation.</li>
        <li><strong>OpenAI</strong>: Data Processing Addendum governs API usage; HTTPS enforced.</li>
        <li><strong>Stripe</strong>: independent controller of payment information with its own DPA.</li>
      </ul>

      <h2>6. Risk Assessment and DPIA</h2>
      <ul>
        <li>The Platform processes user data necessary for account management and service delivery.</li>
        <li>Risks are mitigated through Row Level Security, encryption, and access controls.</li>
        <li>Data is not publicly shared or sold to third parties.</li>
        <li>A formal DPIA will be conducted if services with high privacy risks are introduced.</li>
        <li>Internal records and technical documentation support ongoing compliance.</li>
      </ul>

      <h2>7. Security Measures</h2>
      <ul>
        <li>Encrypted transport (HTTPS) for all communications.</li>
        <li>Service role keys stored on backend only.</li>
        <li>Database protected with Row Level Security policies.</li>
        <li>Passwords hashed using industry-standard algorithms.</li>
        <li>Regular dependency updates and security audits.</li>
        <li>Access logging with minimal personal data.</li>
      </ul>

      <h2>8. Incident Response Plan</h2>
      <ol>
        <li>Detect incidents through monitoring and logging.</li>
        <li>Revoke compromised credentials immediately.</li>
        <li>Assess impact and identify affected users.</li>
        <li>Notify affected users within 72 hours if required by GDPR.</li>
        <li>Report to supervisory authority when necessary.</li>
        <li>Document incidents and update procedures.</li>
      </ol>

      <h2>9. Documentation and Audit Trail</h2>
      <ul>
        <li>Privacy Policy, Terms of Service, and this GDPR document are version-controlled.</li>
        <li>Updates tracked via Git for traceability.</li>
        <li>Material changes to data processing trigger review of all legal documentation.</li>
        <li>Processor agreements maintained and reviewed annually.</li>
      </ul>

      <h2>10. Product-Specific Compliance</h2>
      <p>
        Individual products may have additional GDPR requirements. See product-specific compliance documentation:
      </p>
      <ul>
        <li><a href="/elora/gdpr">Elora AI GDPR Compliance</a></li>
        <li>Elenor Enterprise GDPR Compliance (coming soon)</li>
      </ul>

      <hr style={{margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)'}} />
      <p style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
        This document demonstrates GDPR compliance for the Elenor AI Platform and should be read alongside the Privacy Policy and product-specific documentation.
      </p>
    </LegalLayout>
  )
}
