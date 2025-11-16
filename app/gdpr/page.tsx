'use client'

import LegalLayout from '@/components/LegalLayout'
import { useLanguage } from '@/contexts/LanguageContext'

export default function GDPR() {
  const { language } = useLanguage()

  const title = language === 'cs' ? "GDPR compliance checklist pro Elora AI"
    : language === 'ro' ? "Lista de conformitate GDPR Elora AI"
    : "Elora AI GDPR Compliance Checklist"

  const effectiveDate = language === 'cs' ? "2. listopadu 2025"
    : language === 'ro' ? "2 noiembrie 2025"
    : "2 November 2025"

  return (
    <LegalLayout title={title} effectiveDate={effectiveDate}>
      {language === 'cs' ? <CzechContent />
        : language === 'ro' ? <RomanianContent />
        : <EnglishContent />}
    </LegalLayout>
  )
}

function EnglishContent() {
  return (
    <>
      <p>This checklist summarises how Elora AI meets the key GDPR requirements and outlines risk management procedures.</p>

      <h2>1. Controller and Contacts</h2>
      <ul>
        <li><strong>Controller</strong>: Cristian Bucioaca, Elora AI.</li>
        <li><strong>Privacy contact</strong>: <a href="mailto:privacy@elenor.io">privacy@elenor.io</a>.</li>
        <li>No dedicated DPO is appointed; the Controller handles data protection matters directly.</li>
      </ul>

      <h2>2. Legal Basis</h2>
      <ul>
        <li>Performance of contract (Art. 6(1)(b)): account creation, AI assistant features, subscription management.</li>
        <li>Legal obligation (Art. 6(1)(c)): tax and accounting records handled via Stripe.</li>
        <li>Legitimate interest (Art. 6(1)(f)): security logging, incident handling, aggregated analytics.</li>
        <li>Consent (Art. 6(1)(a)): only when the User voluntarily submits sensitive data; not required for core functionality.</li>
      </ul>

      <h2>3. Data Minimisation and Storage Limitation</h2>
      <ul>
        <li>Active RLS policies ensure users access only their own records.</li>
        <li>Local IndexedDB keeps data solely for offline functionality; Users can wipe it in-app.</li>
        <li>Supabase Storage holds only files linked to current chats; deleting a chat removes attachments.</li>
        <li>Logs include only essential identifiers (ID, timestamp, status code).</li>
      </ul>

      <h2>4. Data Subject Rights</h2>
      <ol>
        <li><strong>Access</strong>: Users can request exports; responses provided within 30 days.</li>
        <li><strong>Rectification</strong>: profile data editable via <code>ProfileService.saveProfile</code>.</li>
        <li><strong>Erasure</strong>: <code>delete-account.js</code> removes the account and cascaded data.</li>
        <li><strong>Restriction</strong>: Users may disable sync or cancel subscriptions.</li>
        <li><strong>Portability</strong>: exports available in JSON/CSV format from Supabase.</li>
        <li><strong>Objection</strong>: Users can challenge processing based on legitimate interests; a balancing test is documented.</li>
        <li><strong>Complaint</strong>: Users may contact the Office for Personal Data Protection (<a href="http://www.uoou.cz" target="_blank" rel="noopener noreferrer">www.uoou.cz</a>).</li>
      </ol>

      <h2>5. Processor Agreements</h2>
      <ul>
        <li><strong>Supabase</strong>: DPA included in the subscription; EU data hosting.</li>
        <li><strong>Google Cloud</strong>: DPA covering Vertex AI, Document AI, Cloud Storage, TTS, STT. Regions configured for <code>us-central1</code> (Vertex) and the selected Document AI region.</li>
        <li><strong>Anthropic</strong>: API terms specify short-term retention for quality evaluation.</li>
        <li><strong>OpenAI</strong>: Data Processing Addendum governs API usage; HTTPS connection enforced.</li>
        <li><strong>ElevenLabs</strong>: processes text inputs for speech synthesis without long-term storage.</li>
        <li><strong>Stripe</strong>: independent controller of payment information with its own DPA.</li>
      </ul>

      <h2>6. Risk Assessment and DPIA</h2>
      <ul>
        <li>The application handles conversational text that may include sensitive information entered by the User.</li>
        <li>Risks are mitigated because data are visible only to the User and the AI processing providers; nothing is publicly shared.</li>
        <li>Given the scope, limited monitoring and user base, a formal DPIA is not currently required. Internal records and technical documentation are kept to support future audits.</li>
        <li>If Elora introduces automated decisions with significant legal effect, a DPIA will be prepared.</li>
      </ul>

      <h2>7. Security Measures</h2>
      <ul>
        <li>Encrypted transport (HTTPS) for all API calls.</li>
        <li>Service role keys stored on the backend only.</li>
        <li>Automatic removal of Storage files before deleting chats.</li>
        <li>Input validation (file size limits, text sanitisation before TTS).</li>
        <li>Minimal logging with restricted access.</li>
        <li>Regular dependency updates (npm audit, CVE monitoring).</li>
      </ul>

      <h2>8. Incident Response Plan</h2>
      <ol>
        <li>Detect incidents through logs (<code>console.error</code>, Vercel/Supabase monitoring).</li>
        <li>Revoke compromised API keys and Supabase sessions immediately.</li>
        <li>Assess impact: identify affected tables/users.</li>
        <li>Notify affected users via e-mail without undue delay (within 72 hours if a personal data breach is likely to cause risk).</li>
        <li>Report to the supervisory authority when necessary.</li>
        <li>Document the incident and update this plan.</li>
      </ol>

      <h2>9. Documentation and Audit Trail</h2>
      <ul>
        <li>This is version 1.0 stored in the <code>pravni-dokumentace</code> repository folder.</li>
        <li>Updates are tracked via Git history for traceability.</li>
        <li>Any functional change affecting data processing requires reviewing this checklist and the processing overview.</li>
      </ul>

      <hr style={{margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)'}} />
      <p style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
        This checklist is a working document illustrating GDPR compliance and should be complemented with signed processor agreements and operational procedures relevant to production deployment.
      </p>
    </>
  )
}

function CzechContent() {
  return (
    <>
      <p>Dokument shrnuje, jak aplikace Elora AI naplňuje pozadavky obecneho narizeni o ochrane osobnich udaju (GDPR) a jaky je navrhovany postup pri rideni rizik.</p>

      <h2>1. Identifikace správce a kontakty</h2>
      <ul>
        <li><strong>Správce</strong>: Cristian Bucioaca, Elora AI.</li>
        <li><strong>Kontakt pro ochranu údajů</strong>: <a href="mailto:privacy@elenor.io">privacy@elenor.io</a>.</li>
        <li>Specialní pověřenec (DPO) není jmenován; agendu vykonává přímo Správce.</li>
      </ul>

      <h2>2. Právní základ zpracování</h2>
      <ul>
        <li>Plnění smlouvy (čl. 6 odst. 1 b) GDPR): vytvoření účtu, poskytování AI asistenta, správa předplatného.</li>
        <li>Plnění právní povinnosti (čl. 6 odst. 1 c)): evidence plateb, daňové a účetní povinnosti přes Stripe.</li>
        <li>Oprávněný zájem (čl. 6 odst. 1 f)): zabezpečení systému, logování incidentů, agregovaná analytika.</li>
        <li>Souhlas (čl. 6 odst. 1 a)): pouze pokud uživatel dobrovolně vloží citlivá data do chatu. Aplikace souhlas nevyžaduje pro základní funkcionalitu.</li>
      </ul>

      <h2>3. Minimalizace a omezení ukládání</h2>
      <ul>
        <li>Nasazené RLS politiky zajišťují, že uživatel má přístup pouze ke svým datům.</li>
        <li>Lokální IndexedDB uchovává data jen pro potřeby offline funkcionality; mazání je dostupné přímo v aplikaci.</li>
        <li>Supabase storage bucket obsahuje pouze soubory přiřazené k aktuálním chatům; po smazání chatu jsou soubory odstraněny.</li>
        <li>Logy s osobními údaji jsou minimalizovány na nezbytné identifikátory (ID, čas, status kód).</li>
      </ul>

      <h2>4. Práva subjektu údajů</h2>
      <ol>
        <li><strong>Přístup</strong>: uživatel může v nastavení vyžádat export dat; Správce zpracuje do 30 dnů.</li>
        <li><strong>Oprava</strong>: profilová data lze upravit v <code>ProfileService.saveProfile</code>.</li>
        <li><strong>Výmaz</strong>: funkcionalita <code>delete-account.js</code> odstraní účet včetně kaskádních vazeb.</li>
        <li><strong>Omezení</strong>: uživatel může vypnout synchronizaci nebo zrušit předplatné.</li>
        <li><strong>Přenositelnost</strong>: export lze poskytnout v JSON/CSV formátu ze Supabase.</li>
        <li><strong>Námitka</strong>: v případě zpracování na oprávněný zájem je možné zažádat o posouzení; Správce provede balancující test.</li>
        <li><strong>Stížnost</strong>: uživatel může kontaktovat Úřad pro ochranu osobních údajů (<a href="http://www.uoou.cz" target="_blank" rel="noopener noreferrer">www.uoou.cz</a>).</li>
      </ol>

      <h2>5. Zpracovatelské smlouvy</h2>
      <ul>
        <li><strong>Supabase</strong>: Data Processing Addendum dostupné v rámci předplatného. Data jsou ukládána v EU.</li>
        <li><strong>Google Cloud</strong>: DPA zahrnující Vertex AI, Document AI, Cloud Storage, Text-to-Speech, Speech-to-Text. Regiony jsou nastavitelné; projekt používá <code>us-central1</code> pro Vertex AI a zadaný region pro Document AI.</li>
        <li><strong>Anthropic</strong>: API podmínky upravují zpracování obsahu; výstup může být uložen pro krátkodobou dobu k hodnocení kvality.</li>
        <li><strong>OpenAI</strong>: platí Data Processing Addendum, data zavádíme přes secure HTTPS.</li>
        <li><strong>ElevenLabs</strong>: zpracování textu pro generování hlasu, data nejsou trvale uchovávaná.</li>
        <li><strong>Stripe</strong>: je samostatným správcem platebních údajů, má vlastní DPA.</li>
      </ul>

      <h2>6. Hodnocení rizik a DPIA</h2>
      <ul>
        <li>Aplikace zpracovává textuální konverzace, včetně možných citlivých údajů, které může uživatel dobrovolně zadat.</li>
        <li>Riziko je sníženo tím, že data sdílí pouze uživatel a AI modely; nejsou veřejně publikována.</li>
        <li>Vzhledem k rozsahu, absenci rozsáhlého monitoringu a počtu uživatelů se nepředpokládá povinnost provádět formální DPIA. Správce však vede interní záznamy a odpovídající technickou dokumentaci.</li>
        <li>V případě rozšíření o automatizovaná rozhodnutí s právním účinkem bude DPIA provedena.</li>
      </ul>

      <h2>7. Bezpečnostní opatření</h2>
      <ul>
        <li>Šifrovaný přenos (HTTPS) pro všechna API.</li>
        <li>Service role klíče uložené pouze na backendu.</li>
        <li>Automatické mazání souborů ve Storage před smazáním chatu.</li>
        <li>Kontrola vstupu (limit velikosti souboru, sanitizace textu před TTS).</li>
        <li>Systémové logy s minimálními osobními údaji, přístup pouze pro Správce.</li>
        <li>Pravidelné aktualizace závislostí (npm audit, kontrola CVE).</li>
      </ul>

      <h2>8. Incident response plan</h2>
      <ol>
        <li>Detekce incidentu skrze logy (<code>console.error</code>, monitoring Vercel/Supabase).</li>
        <li>Okamžité odpojení kompromitovaných API klíčů a revokace session v Supabase.</li>
        <li>Vyhodnocení rozsahu: které tabulky/uživatelé byli dotčeny.</li>
        <li>Informování dotčených uživatelů e-mailem bez zbytečného odkladu (nejpozději do 72 hodin při narušení osobních údajů).</li>
        <li>Příprava oznámení pro dozorový organ, pokud je pravděpodobné riziko pro práva a svobody osob.</li>
        <li>Dokumentace incidentu a aktualizace tohoto plánu.</li>
      </ol>

      <h2>9. Ukládání dokumentů a audit</h2>
      <ul>
        <li>Tato dokumentace je verze 1.0 uložena v repozitáři <code>pravni-dokumentace</code>.</li>
        <li>Aktualizace budou verzovány přes Git, aby bylo dohledatelné, kdy změny nastaly.</li>
        <li>Každá změna funkcionality, která má dopad na zpracování dat, vyžaduje revizi tohoto dokumentu i přehledu zpracování.</li>
      </ul>

      <hr style={{margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)'}} />
      <p style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
        Tento checklist slouží jako pracovní podklad pro ukázku souladu s GDPR a má být doplněn o konkrétní smlouvy a postupy podle reálného nasazení.
      </p>
    </>
  )
}

function RomanianContent() {
  return (
    <>
      <p>Acest document rezumă modul în care Elora AI respectă cerințele GDPR și planul de gestionare a riscurilor.</p>

      <h2>1. Operator și contacte</h2>
      <ul>
        <li><strong>Operator</strong>: Cristian Bucioaca, Elora AI.</li>
        <li><strong>Contact pentru confidențialitate</strong>: <a href="mailto:privacy@elenor.io">privacy@elenor.io</a>.</li>
        <li>Nu este numit un DPO; Operatorul gestionează direct protecția datelor.</li>
      </ul>

      <h2>2. Temeiuri legale</h2>
      <ul>
        <li>Executarea contractului (art. 6 alin. 1 lit. b): crearea conturilor, funcțiile asistentului AI, gestionarea abonamentelor.</li>
        <li>Obligație legală (art. 6 alin. 1 lit. c): evidența fiscală și contabilă prin Stripe.</li>
        <li>Interes legitim (art. 6 alin. 1 lit. f): logare securitate, gestionarea incidentelor, analize agregate.</li>
        <li>Consimțământ (art. 6 alin. 1 lit. a): doar când Utilizatorul furnizează date sensibile; nu este necesar pentru funcțiile de bază.</li>
      </ul>

      <h2>3. Minimizarea și limitarea stocării</h2>
      <ul>
        <li>Politicile RLS active permit accesul doar la propriile date.</li>
        <li>IndexedDB local păstrează date doar pentru modul offline; utilizatorii le pot șterge din aplicație.</li>
        <li>Storage Supabase conține doar fișierele asociate chat-urilor curente; la ștergerea chat-ului, fișierele dispar.</li>
        <li>Logurile includ doar identificatori esențiali (ID, timp, cod status).</li>
      </ul>

      <h2>4. Drepturile persoanelor vizate</h2>
      <ol>
        <li><strong>Acces</strong>: exporturi furnizate în 30 de zile.</li>
        <li><strong>Rectificare</strong>: editarea datelor de profil (<code>ProfileService.saveProfile</code>).</li>
        <li><strong>Ștergere</strong>: <code>delete-account.js</code> elimină contul și datele aferente.</li>
        <li><strong>Restricționare</strong>: se poate dezactiva sincronizarea sau anula abonamentul.</li>
        <li><strong>Portabilitate</strong>: exporturi în format JSON/CSV din Supabase.</li>
        <li><strong>Opoziție</strong>: se poate solicita reevaluarea prelucrărilor bazate pe interes legitim; testul de echilibrare este documentat.</li>
        <li><strong>Plângere</strong>: către autoritatea națională (<a href="http://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">www.dataprotection.ro</a>).</li>
      </ol>

      <h2>5. Acorduri cu persoane împuternicite</h2>
      <ul>
        <li><strong>Supabase</strong>: DPA inclus în abonament; găzduire în UE.</li>
        <li><strong>Google Cloud</strong>: DPA pentru Vertex AI, Document AI, Cloud Storage, TTS, STT (regiune <code>us-central1</code> pentru Vertex și regiunea setată pentru Document AI).</li>
        <li><strong>Anthropic</strong>: termenii API prevăd retenție scurtă pentru evaluarea calității.</li>
        <li><strong>OpenAI</strong>: DPA dedicat, conexiune HTTPS.</li>
        <li><strong>ElevenLabs</strong>: procesează text pentru sinteză vocală fără stocare pe termen lung.</li>
        <li><strong>Stripe</strong>: operator independent pentru plăți, cu propriul DPA.</li>
      </ul>

      <h2>6. Evaluarea riscurilor și DPIA</h2>
      <ul>
        <li>Aplicația gestionează conversații text ce pot include informații sensibile introduse voluntar de utilizator.</li>
        <li>Riscurile sunt reduse deoarece datele sunt vizibile doar utilizatorului și furnizorilor de AI; nu sunt publice.</li>
        <li>Având în vedere domeniul și baza de utilizatori, nu este necesar momentan un DPIA formal; există evidențe tehnice pentru audit.</li>
        <li>Dacă Elora va introduce decizii automatizate cu impact juridic semnificativ, se va realiza o DPIA.</li>
      </ul>

      <h2>7. Măsuri de securitate</h2>
      <ul>
        <li>Transport criptat (HTTPS) pentru toate API-urile.</li>
        <li>Cheile de service sunt stocate exclusiv pe backend.</li>
        <li>Fișierele din Storage se șterg automat înaintea ștergerii chat-ului.</li>
        <li>Validare input (limite de fișier, sanitizare text pentru TTS).</li>
        <li>Loguri minimale cu acces restricționat.</li>
        <li>Actualizări regulate ale dependențelor (npm audit, monitorizare CVE).</li>
      </ul>

      <h2>8. Plan de răspuns la incidente</h2>
      <ol>
        <li>Detectarea incidentelor prin loguri (<code>console.error</code>, monitorizare Vercel/Supabase).</li>
        <li>Revocarea rapidă a cheilor API compromise și a sesiilor Supabase.</li>
        <li>Evaluarea impactului: identificarea tabelelor/utilizatorilor afectați.</li>
        <li>Notificarea utilizatorilor afectați în maxim 72 de ore, dacă există risc pentru drepturi și libertăți.</li>
        <li>Informarea autorității de supraveghere, dacă este necesar.</li>
        <li>Documentarea incidentului și actualizarea planului.</li>
      </ol>

      <h2>9. Documentație și audit</h2>
      <ul>
        <li>Aceasta este versiunea 1.0 stocată în directorul <code>pravni-dokumentace</code>.</li>
        <li>Actualizările sunt urmărite în Git pentru trasabilitate.</li>
        <li>Orice modificare funcțională care afectează prelucrarea datelor implică revizuirea acestei liste și a registrului.</li>
      </ul>

      <hr style={{margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)'}} />
      <p style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
        Document de lucru pentru demonstrarea conformității GDPR; trebuie completat cu acordurile și procedurile relevante implementării în producție.
      </p>
    </>
  )
}
