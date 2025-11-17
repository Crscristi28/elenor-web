'use client'

import LegalLayout from '@/components/LegalLayout'

export default function Terms() {
  return (
    <LegalLayout
      title="Elenor AI Platform Terms of Service"
      effectiveDate="17 November 2025"
    >
      <p>
        These Terms govern use of the Elenor AI Platform (the "Platform") and its products operated by Cristian Bucioaca, e-mail:
        {' '}<a href="mailto:contact@elenor.io">contact@elenor.io</a> (the "Provider"). By accessing
        the Platform you confirm that you have read and agree to these Terms.
      </p>

      <h2>1. Definitions</h2>
      <ul>
        <li><strong>User</strong>: Any natural or legal person who creates an account or otherwise uses the Platform or its products.</li>
        <li>
          <strong>Platform</strong>: The Elenor AI Platform and all products and services offered through it, including Elora AI, Elenor Enterprise, and future products.
        </li>
        <li>
          <strong>User Content</strong>: All information provided by the User, in particular e-mail, password, usage data,
          and any product-specific data.
        </li>
        <li>
          <strong>Third-Party Providers</strong>: Supabase, Google Cloud, Anthropic (Claude), OpenAI, and Stripe.
        </li>
      </ul>

      <h2>2. Scope of the Platform</h2>
      <p>The Elenor AI Platform provides:</p>
      <ul>
        <li>Access to AI-powered products and services</li>
        <li>User account management and authentication</li>
        <li>Subscription and billing services (where applicable)</li>
        <li>API access for supported products</li>
      </ul>
      <p>
        Specific features and capabilities vary by product. See individual product terms for details
        (e.g., <a href="/elora/terms">Elora Terms of Use</a>).
      </p>

      <h2>3. Account Creation and Access</h2>
      <ol>
        <li>The User must provide accurate and up-to-date information during registration.</li>
        <li>
          Registration requires an e-mail address and password. Passwords are stored by Supabase in hashed form and are not
          accessible to the Provider.
        </li>
        <li>The User is responsible for safeguarding login credentials. Any activity performed via the account is deemed to be the User's activity.</li>
        <li>One person or entity may not create multiple accounts without prior authorization.</li>
      </ol>

      <h2>4. Acceptable Use</h2>
      <p>The User must not:</p>
      <ul>
        <li>use the Platform for unlawful, fraudulent or harmful purposes,</li>
        <li>upload or generate content that infringes third-party rights,</li>
        <li>attempt to compromise the security or availability of the Platform,</li>
        <li>reverse-engineer or bypass safeguards,</li>
        <li>overload the Platform or otherwise harm the Provider or other users,</li>
        <li>use the Platform to develop competing products or services.</li>
      </ul>

      <h2>5. Payments and Subscription</h2>
      <p>When paid tiers or products are offered:</p>
      <ol>
        <li>Payment information is processed by Stripe as an independent data controller.</li>
        <li>Users may be charged recurring fees depending on the selected plan.</li>
        <li>Failure to pay may result in suspension or termination of access.</li>
        <li>Subscriptions can be cancelled through account settings or Stripe's portal.</li>
        <li>Refund policies are specified per product.</li>
      </ol>

      <h2>6. Third-Party Integrations</h2>
      <p>The Platform integrates with:</p>
      <ul>
        <li>Supabase (authentication, database, storage)</li>
        <li>Google Cloud (AI services, infrastructure)</li>
        <li>Anthropic (Claude API)</li>
        <li>OpenAI (GPT models)</li>
        <li>Stripe (payments)</li>
      </ul>
      <p>Using the Platform implies consent to the transfer of necessary data to these providers for the purpose of fulfilling the contract.</p>

      <h2>7. Intellectual Property</h2>
      <ol>
        <li>The User retains ownership of content they provide to the Platform.</li>
        <li>The Provider retains all rights to the Platform, its products, system prompts, and infrastructure.</li>
        <li>
          AI-generated outputs are provided "as-is". The Provider does not guarantee accuracy, legal compliance, or suitability
          for any particular purpose.
        </li>
        <li>Users must independently verify AI outputs before relying on them for important decisions.</li>
      </ol>

      <h2>8. Availability and Changes</h2>
      <ol>
        <li>The Platform is provided on an "as is" basis. The Provider does not guarantee uninterrupted or error-free operation.</li>
        <li>The Provider may modify, temporarily limit, or discontinue the Platform or any product when necessary (e.g. security, maintenance).</li>
        <li>Material changes affecting Users will be announced via in-platform notifications or e-mail when available.</li>
        <li>Continued use of the Platform after changes constitutes acceptance of the modified Terms.</li>
      </ol>

      <h2>9. Termination</h2>
      <ol>
        <li>
          The User may delete their account at any time. Account deletion permanently removes all associated data and cannot be undone.
        </li>
        <li>The Provider may terminate access if the User breaches these Terms or applicable law. Whenever feasible, the User will be warned in advance.</li>
        <li>Upon termination, the User loses access to all Platform services and any data stored therein.</li>
      </ol>

      <h2>10. Warranty and Liability</h2>
      <ol>
        <li>The Provider is not liable for direct or indirect damages resulting from use of the Platform, AI outputs, loss of data, or downtime.</li>
        <li>Liability is limited except in cases of intent or gross negligence by the Provider.</li>
        <li>The User is responsible for content they submit or create and must ensure compliance with applicable law.</li>
        <li>Third-party AI providers (Anthropic, OpenAI, Google) operate independently; the Provider is not responsible for their outputs or errors.</li>
      </ol>

      <h2>11. Changes to the Terms</h2>
      <ol>
        <li>The Provider may update these Terms.</li>
        <li>Users will be informed about substantial updates by e-mail or in-platform notice at least 14 days before they take effect.</li>
        <li>Continuing to use the Platform after the effective date constitutes acceptance of the updated Terms. Users who disagree may delete their account.</li>
      </ol>

      <h2>12. Governing Law</h2>
      <ol>
        <li>These Terms are governed by the laws of the Czech Republic.</li>
        <li>Disputes will be handled by the competent courts at the Provider's seat or residence.</li>
      </ol>

      <h2>13. Contact</h2>
      <p>For questions regarding the Platform or these Terms please contact <a href="mailto:contact@elenor.io">contact@elenor.io</a>.</p>

      <hr style={{margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)'}} />
      <p style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
        These Terms apply to the Elenor AI Platform and all its products and services.
      </p>
    </LegalLayout>
  )
}
