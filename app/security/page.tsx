'use client'

import LegalLayout from '@/components/LegalLayout'

export default function Security() {
  return (
    <LegalLayout
      title="Elenor AI Platform Security Overview"
      effectiveDate="17 November 2025"
    >
      <p>This document describes how authentication, authorization, and data protection are implemented across the Elenor AI Platform.</p>

      <h2>1. Authentication</h2>
      <ul>
        <li>All platform products use Supabase Auth for user authentication.</li>
        <li>Passwords are hashed using bcrypt and never stored in plain text.</li>
        <li>JWT tokens issued with 60-minute expiration; automatic refresh mechanism.</li>
        <li>Multi-factor authentication (MFA) support available through email OTP.</li>
        <li>Password reset via secure one-time passwords sent to verified email.</li>
      </ul>

      <h2>2. Authorization</h2>
      <ul>
        <li>Role-based access control (RBAC) implemented via user profiles.</li>
        <li>Default role: <code>user</code>; elevated roles granted administratively.</li>
        <li>API requests require valid JWT token in Authorization header.</li>
        <li>Backend validates tokens using Supabase service role key.</li>
        <li>Invalid or expired tokens return <code>401 Unauthorized</code>.</li>
      </ul>

      <h2>3. Data Protection</h2>
      <ul>
        <li><strong>Encryption in transit</strong>: All communications use HTTPS/TLS.</li>
        <li><strong>Encryption at rest</strong>: Database and file storage encrypted by Supabase.</li>
        <li><strong>Row Level Security (RLS)</strong>: Database policies enforce user data isolation.</li>
        <li><strong>Access control</strong>: Users can only access their own data via <code>auth.uid()</code> policies.</li>
        <li><strong>API keys</strong>: All service credentials stored server-side only, never exposed to clients.</li>
      </ul>

      <h2>4. Database Security</h2>
      <ul>
        <li>Row Level Security policies active on all critical tables.</li>
        <li>Users can only read/write/delete their own records.</li>
        <li>Database queries validate user ownership before execution.</li>
        <li>Automated triggers maintain data integrity (timestamps, cascading deletes).</li>
        <li>Regular backups maintained by Supabase.</li>
      </ul>

      <h2>5. File Storage Security</h2>
      <ul>
        <li>Files stored in Supabase Storage with owner-based access control.</li>
        <li>Upload operations automatically tag files with <code>owner = auth.uid()</code>.</li>
        <li>Only file owners can delete their files.</li>
        <li>Storage policies prevent unauthorized access to other users' files.</li>
        <li>Files deleted automatically when parent records are removed.</li>
      </ul>

      <h2>6. API Security</h2>
      <ul>
        <li>All API endpoints verify JWT tokens before processing requests.</li>
        <li>Rate limiting applied to prevent abuse.</li>
        <li>Input validation and sanitization on all user-provided data.</li>
        <li>Third-party API keys (Google, Anthropic, OpenAI) stored as environment variables.</li>
        <li>API responses do not leak internal system information.</li>
      </ul>

      <h2>7. Third-Party Security</h2>
      <ul>
        <li><strong>Supabase</strong>: SOC 2 Type II certified; EU data hosting.</li>
        <li><strong>Google Cloud</strong>: ISO 27001, SOC 2/3 certified infrastructure.</li>
        <li><strong>Anthropic & OpenAI</strong>: Enterprise-grade API security with HTTPS.</li>
        <li><strong>Stripe</strong>: PCI DSS Level 1 compliant payment processing.</li>
        <li>All third parties operate under Data Processing Agreements (DPAs).</li>
      </ul>

      <h2>8. Account Security</h2>
      <ul>
        <li>Account deletion removes all user data permanently.</li>
        <li>Deletion requires explicit confirmation to prevent accidents.</li>
        <li>Session management allows users to revoke access from specific devices.</li>
        <li>Suspicious activity monitoring and automatic lockout mechanisms.</li>
      </ul>

      <h2>9. Incident Response</h2>
      <ul>
        <li>Security incidents logged with minimal personal data.</li>
        <li>Automated monitoring for anomalies and suspicious patterns.</li>
        <li>Compromised credentials can be immediately revoked.</li>
        <li>Users notified of security incidents affecting their data.</li>
        <li>Post-incident reviews and security updates.</li>
      </ul>

      <h2>10. Security Best Practices</h2>
      <ul>
        <li>Regular dependency updates and vulnerability scanning.</li>
        <li>Code reviews for security-sensitive changes.</li>
        <li>Principle of least privilege for all system access.</li>
        <li>Security headers configured (CSP, HSTS, etc.).</li>
        <li>Ongoing security training for development team.</li>
      </ul>

      <h2>11. User Recommendations</h2>
      <ul>
        <li>Use a strong, unique password for your account.</li>
        <li>Enable multi-factor authentication where available.</li>
        <li>Keep your email account secure (it's used for password reset).</li>
        <li>Report suspicious activity immediately to <a href="mailto:security@elenor.io">security@elenor.io</a>.</li>
        <li>Regularly review active sessions and revoke unknown devices.</li>
      </ul>

      <h2>12. Product-Specific Security</h2>
      <p>
        Individual products may have additional security measures. See product-specific documentation:
      </p>
      <ul>
        <li><a href="/elora/security">Elora AI Security Overview</a></li>
        <li>Elenor Enterprise Security (coming soon)</li>
      </ul>

      <hr style={{margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)'}} />
      <p style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
        This document reflects the security architecture of the Elenor AI Platform. Security is continuously reviewed and improved.
      </p>
    </LegalLayout>
  )
}
