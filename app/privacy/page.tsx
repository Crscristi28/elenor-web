'use client'

import LegalLayout from '@/components/LegalLayout'

export default function Privacy() {
  return (
    <LegalLayout
      title="Elenor AI Platform Privacy Policy"
      effectiveDate="17 November 2025"
    >
      <p>
        This Privacy Policy explains what personal data the Elenor AI Platform processes, for what purposes and how it
        is protected. The controller is Cristian Bucioaca, contact:
        {' '}<a href="mailto:privacy@elenor.io">privacy@elenor.io</a>.
      </p>

      <h2>1. Scope</h2>
      <p>
        This policy applies to all products and services offered through the Elenor AI Platform, including but not limited to:
      </p>
      <ul>
        <li>Elora AI - intelligent personal assistant</li>
        <li>Elenor Enterprise - AI infrastructure for businesses (coming soon)</li>
        <li>Future products and services</li>
      </ul>
      <p>
        For product-specific data processing details, please refer to individual product privacy policies
        (e.g., <a href="/elora/privacy">Elora Privacy Policy</a>).
      </p>

      <h2>2. Roles under GDPR</h2>
      <ul>
        <li>The Provider acts as the data controller for personal data submitted by users or generated while using our services.</li>
        <li>
          Third-party platforms (Supabase, Google Cloud, OpenAI, Anthropic, Stripe) act as processors or independent
          controllers depending on the service they deliver.
        </li>
        <li>Data are shared with third parties only to the extent necessary to provide our services.</li>
      </ul>

      <h2>3. Categories of Processed Data</h2>
      <ol>
        <li><strong>Identification and login data</strong>: e-mail, hashed password, internal user ID.</li>
        <li><strong>Profile information</strong>: optional display name, preferred language settings.</li>
        <li><strong>Usage data</strong>: product usage metrics, activity logs, feature interactions.</li>
        <li><strong>Technical metadata</strong>: device information, timestamps, browser version, IP address, error logs.</li>
        <li><strong>Payment data</strong>: handled by Stripe; we store only reference identifiers (customer_id, subscription_id).</li>
        <li><strong>Product-specific data</strong>: varies by product - see individual product privacy policies for details.</li>
      </ol>

      <h2>4. Purposes and Legal Basis</h2>
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Data categories</th>
            <th>Legal basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Account creation and authentication</td>
            <td>identification, profile</td>
            <td>performance of contract (GDPR Art. 6(1)(b))</td>
          </tr>
          <tr>
            <td>Providing platform services</td>
            <td>identification, usage data, product-specific data</td>
            <td>performance of contract</td>
          </tr>
          <tr>
            <td>Security and fraud prevention</td>
            <td>technical metadata</td>
            <td>legitimate interest (security)</td>
          </tr>
          <tr>
            <td>Billing and invoicing</td>
            <td>identification data, usage metrics, payment identifiers</td>
            <td>performance of contract / legal obligation</td>
          </tr>
          <tr>
            <td>Product improvement (aggregated analytics)</td>
            <td>aggregated usage data</td>
            <td>legitimate interest</td>
          </tr>
        </tbody>
      </table>

      <h2>5. Data Sharing</h2>
      <ul>
        <li>
          <strong>Supabase</strong> (EU regions): authentication, database, file storage, real-time synchronization.
        </li>
        <li>
          <strong>Google Cloud</strong>: AI services (Vertex AI), cloud infrastructure. Regions configured based on service requirements.
        </li>
        <li>
          <strong>Anthropic</strong>: Claude API for AI capabilities. Only necessary context is transmitted.
        </li>
        <li>
          <strong>OpenAI</strong>: GPT models for AI capabilities. System instructions and required context are sent.
        </li>
        <li><strong>Stripe</strong>: subscription and payment management; only tokenized identifiers are stored.</li>
      </ul>
      <p>No data are sold to third parties or shared for third-party marketing.</p>

      <h2>6. Storage and Retention</h2>
      <ul>
        <li>
          <strong>Supabase</strong>: data are stored until the user deletes their account. Account deletion removes all associated data permanently.
        </li>
        <li>
          <strong>Server logs</strong>: retained for up to 30 days for incident response and then anonymized or deleted.
        </li>
        <li><strong>Payment records</strong>: kept by Stripe in accordance with legal requirements.</li>
        <li><strong>Product-specific storage</strong>: varies by product - see individual product policies.</li>
      </ul>

      <h2>7. Security Measures</h2>
      <ul>
        <li>All data transmission is encrypted (HTTPS).</li>
        <li>Database access is protected with Row Level Security policies.</li>
        <li>Access tokens are verified using secure authentication mechanisms.</li>
        <li>Passwords are hashed using industry-standard algorithms.</li>
        <li>Access to API credentials is restricted to server-side code only.</li>
        <li>Regular security audits and dependency updates.</li>
      </ul>

      <h2>8. User Rights</h2>
      <p>Users have the following rights under GDPR:</p>
      <ol>
        <li><strong>Access</strong>: request a copy of your data.</li>
        <li><strong>Rectification</strong>: update your profile information.</li>
        <li><strong>Erasure</strong>: delete your account and all associated data.</li>
        <li><strong>Restriction</strong>: limit processing of your data.</li>
        <li><strong>Portability</strong>: request export of your data in machine-readable format.</li>
        <li><strong>Objection</strong>: object to processing based on legitimate interests.</li>
        <li><strong>Complaint</strong>: lodge a complaint with the Office for Personal Data Protection (www.uoou.cz).</li>
      </ol>
      <p>Requests can be sent to <a href="mailto:privacy@elenor.io">privacy@elenor.io</a>. We will respond within 30 days.</p>

      <h2>9. Automated Decision-Making</h2>
      <p>
        AI responses are generated using third-party models based on user input and system instructions. We do not apply
        automated decision-making that produces legal or similarly significant effects without human oversight.
      </p>

      <h2>10. Changes to this Policy</h2>
      <p>
        This document may be updated when technical or legal changes occur. Users will be informed about significant changes by
        e-mail or in-product notice at least 14 days before they take effect.
      </p>

      <hr style={{margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)'}} />
      <p style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
        This policy applies to the Elenor AI Platform and all its products and services.
      </p>
    </LegalLayout>
  )
}
