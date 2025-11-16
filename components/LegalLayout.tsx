import Header from './Header'
import styles from './LegalLayout.module.css'

interface LegalLayoutProps {
  title: string
  effectiveDate?: string
  children: React.ReactNode
}

export default function LegalLayout({
  title,
  effectiveDate,
  children
}: LegalLayoutProps) {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className="container" style={{maxWidth: '960px'}}>
          <div className={styles.content}>
            <h1>{title}</h1>
            {effectiveDate && <p className={styles.date}>Effective date: {effectiveDate}</p>}
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
