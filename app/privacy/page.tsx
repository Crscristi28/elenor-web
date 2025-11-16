'use client'

import LegalLayout from '@/components/LegalLayout'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Privacy() {
  const { language } = useLanguage()

  const title = language === 'cs' ? "Zásady ochrany osobních údajů Elora AI"
    : language === 'ro' ? "Politica de confidențialitate Elora AI"
    : "Elora AI Privacy Policy"

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
      <p>
        This Privacy Policy explains what personal data the Elora AI application processes, for what purposes and how it
        is protected. The controller is Cristian Bucioaca, contact:
        {' '}<a href="mailto:privacy@elenor.io">privacy@elenor.io</a>.
      </p>

      <h2>1. Roles under GDPR</h2>
      <ul>
        <li>The Provider acts as the data controller for personal data submitted by users or generated while using the application.</li>
        <li>
          Third-party platforms (Supabase, Google Cloud, OpenAI, Anthropic, ElevenLabs, Stripe) act as processors or independent
          controllers depending on the service they deliver.
        </li>
        <li>Data are shared with third parties only to the extent necessary to provide the Service.</li>
      </ul>

      <h2>2. Categories of Processed Data</h2>
      <ol>
        <li><strong>Identification and login data</strong>: e-mail, hashed password, internal user ID.</li>
        <li><strong>Profile information</strong>: optional display name and nickname, preferred localisation.</li>
        <li>
          <strong>Chat content and attachments</strong>: text messages, system metadata, files uploaded by the user (PDF, images,
          documents), AI-generated outputs.
        </li>
        <li><strong>Technical metadata</strong>: device ID, timestamps, browser version, error logs.</li>
        <li><strong>Usage metrics</strong>: message counts, token usage, subscription activity (if enabled).</li>
        <li><strong>Payment data</strong>: handled by Stripe; the application stores only reference identifiers (customer_id, subscription_id).</li>
        <li><strong>Voice data</strong>: short-lived audio streams for speech-to-text or text-to-speech conversions; they are not stored after processing.</li>
      </ol>

      <h2>3. Purposes and Legal Basis</h2>
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
            <td>Providing core functionality (login, chat, sync)</td>
            <td>identification, profile, chat content, technical</td>
            <td>performance of contract (GDPR Art. 6(1)(b))</td>
          </tr>
          <tr>
            <td>Document processing, AI generation, voice features</td>
            <td>chat content, attachments, voice data</td>
            <td>performance of contract</td>
          </tr>
          <tr>
            <td>Security and fraud prevention (logging, token checks)</td>
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

      <h2>4. Data Sharing</h2>
      <ul>
        <li>
          <strong>Supabase</strong> (EU regions): authentication, database (profiles, chats, messages), Storage (attachments,
          generated-images, generated-pdfs-temp), realtime.
        </li>
        <li>
          <strong>Google Cloud</strong> (EU and US regions per configuration): Vertex AI Gemini, Document AI, Text-to-Speech,
          Speech-to-Text, Cloud Storage for temporary processing. Credentials are provided as JSON via server-side environment
          variables.
        </li>
        <li>
          <strong>Anthropic</strong>: Claude API for generative responses and web search. Only the relevant conversation context and supported attachments are transmitted.
        </li>
        <li>
          <strong>OpenAI</strong>: GPT-5 for additional generative capabilities. System instructions and portions of the conversation are sent as required.
        </li>
        <li><strong>ElevenLabs</strong>: Text-to-Speech streaming; only the current text response is transmitted.</li>
        <li><strong>Stripe</strong>: subscription management; only tokenised identifiers are stored in the application.</li>
        <li><strong>Google Search / external sources</strong>: when web search is enabled, the query is sent without personal identifiers.</li>
      </ul>
      <p>No data are sold to third parties or shared for third-party marketing.</p>

      <h2>4.5. Gmail Integration</h2>
      <p>
        When you connect Gmail to Elora, you can ask AI models to help you read, search, compose, and send emails directly from your conversation. Here's how it works:
      </p>

      <h3>What Elora Can Access:</h3>
      <ul>
        <li>Read emails (when you ask the AI to read them)</li>
        <li>Search your mailbox (when you request specific emails)</li>
        <li>Compose and send emails (only when you explicitly instruct the AI)</li>
        <li>View email metadata (sender, subject, date, labels)</li>
      </ul>

      <h3>How Your Gmail Data Is Used:</h3>
      <ul>
        <li><strong>On-Demand Only:</strong> Elora accesses your Gmail only when you explicitly ask (e.g., "show my unread emails", "reply to John's message")</li>
        <li><strong>Direct to AI:</strong> Email content flows directly from Gmail to AI models for processing your request</li>
        <li><strong>No Storage:</strong> We do NOT store copies of your emails. Email content appears only in your chat and is deleted when you delete the conversation</li>
        <li><strong>No Background Access:</strong> We do NOT scan, monitor, or access your Gmail automatically - only when you ask</li>
      </ul>

      <h3>What We Store:</h3>
      <p>
        <strong>Only your access token</strong> - an encrypted credential that lets you connect Gmail. We do NOT store email content, attachments, or metadata.
      </p>

      <h3>Your Control:</h3>
      <ul>
        <li>Disconnect Gmail anytime from Google Account settings or Elora settings</li>
        <li>Delete any conversation to permanently remove all references to your emails</li>
        <li>Review permissions at <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">Google Account Permissions</a></li>
      </ul>

      <p style={{marginTop: '1.5em'}}>
        <strong>Note:</strong> Elora's use of Gmail API complies with <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>.
      </p>

      <h2>5. Storage and Retention</h2>
      <ul>
        <li>
          <strong>Supabase</strong>: data are stored until the User deletes the chat or the entire account. The interface explains
          the effects and requires the User to type <code>DELETE</code> and confirm the action directly in-app; no e-mail
          confirmation is issued. After confirmation the backend <code>delete-account.js</code> calls
          <code>supabase.auth.admin.deleteUser</code> and cascades profiles, chats, messages and related Storage objects.
        </li>
        <li>
          <strong>IndexedDB</strong> in the browser: the local <code>EloraChatDB</code> database holds chats for offline access.
          Users can delete the data in settings or during sign-out.
        </li>
        <li>
          <strong>Temporary storage</strong>: uploaded files processed through Document AI may be stored briefly in Google Cloud
          Storage; after completion both temporary files and metadata are removed.
        </li>
        <li>
          <strong>Server logs</strong>: retained for up to 30 days for incident response and then anonymised or deleted.
        </li>
        <li><strong>Invoices and payment records</strong>: kept by Stripe in accordance with legal requirements.</li>
      </ul>

      <h2>6. Security Measures</h2>
      <ul>
        <li>All tables in Supabase have Row Level Security rules enforcing <code>auth.uid()</code>.</li>
        <li>Storage objects rely on the built-in <code>owner</code> field, allowing only the owner to delete files.</li>
        <li>Access tokens are verified on the backend using the Supabase service role key.</li>
        <li>Passwords are hashed by Supabase according to current security standards.</li>
        <li>All API communication is encrypted (HTTPS).</li>
        <li>
          When a chat is deleted the application removes Storage files first (<code>deleteStorageFiles</code>), then deletes
          conversations and sync records.
        </li>
        <li>Access to critical credentials (Google, OpenAI, Anthropic, ElevenLabs) is limited to server-side code.</li>
      </ul>

      <h2>7. User Rights</h2>
      <p>Users have the following rights under GDPR:</p>
      <ol>
        <li><strong>Access</strong>: request a copy of their data (available via account export).</li>
        <li><strong>Rectification</strong>: update profile information (handled by <code>ProfileService.saveProfile</code>).</li>
        <li><strong>Erasure</strong>: delete chats, attachments or the entire account using the provided controls.</li>
        <li><strong>Restriction</strong>: disable synchronisation or cancel subscriptions.</li>
        <li><strong>Portability</strong>: request export of conversations in JSON/CSV format.</li>
        <li><strong>Objection</strong>: object to processing based on legitimate interests.</li>
        <li><strong>Complaint</strong>: lodge a complaint with the Office for Personal Data Protection (www.uoou.cz).</li>
      </ol>
      <p>Requests can be sent to <a href="mailto:privacy@elenor.io">privacy@elenor.io</a>. The Provider will respond within 30 days.</p>

      <h2>8. Automated Decision-Making</h2>
      <p>
        AI responses are generated using third-party models based on system instructions and conversation history. The Service
        does not apply automated decision-making that produces legal or similarly significant effects without human oversight.
        Subscription and billing follow transparent rules.
      </p>

      <h2>9. Changes to this Policy</h2>
      <p>
        This document may be updated when technical or legal changes occur. Users will be informed about significant changes by
        e-mail or in-app notice at least 14 days before they take effect. Previous versions are archived and can be provided on
        request.
      </p>

      <hr style={{margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)'}} />
      <p style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
        This policy reflects the implementation of Elora AI as of 2 November 2025.
      </p>
    </>
  )
}

function CzechContent() {
  return (
    <>
      <p>
        Tento dokument vysvětluje, jaké osobní údaje aplikace Elora AI zpracovává, za jakým účelem a jak jsou chráněny. Provozovatelem je Cristian Bucioaca, kontakt:{' '}
        <a href="mailto:privacy@elenor.io">privacy@elenor.io</a>.
      </p>

      <h2>1. Jakou právní roli Provozovatel zastává</h2>
      <ul>
        <li>Provozovatel vystupuje jako správce osobních údajů, jež uživatelé zadali nebo vznikly při používání aplikace.</li>
        <li>Třetístranní platformy (Supabase, Google Cloud, OpenAI, Anthropic, ElevenLabs, Stripe) jsou zpracovatelé nebo samostatní správci podle povahy služby.</li>
        <li>V rámci integrací jsou uživatelská data předávaná pouze v rozsahu nezbytném k poskytnutí služby.</li>
      </ul>

      <h2>2. Kategorie zpracovávaných údajů</h2>
      <ol>
        <li><strong>Identifikační a přihlašovací údaje</strong>: e-mail, zašifrované heslo, interní ID uživatele.</li>
        <li><strong>Profilová data</strong>: dobrovolně zadané jméno a přezdívka, preferovaná lokalizace.</li>
        <li><strong>Obsah chatu a přílohy</strong>: textové zprávy, systémová metadata, soubory nahrané uživatelem (PDF, obrázky, dokumenty), AI generované výstupy.</li>
        <li><strong>Technická metadata</strong>: ID zařízení, časové značky, verze prohlížeče, logy o selhání.</li>
        <li><strong>Provozní metriky</strong>: počty zpráv, spotřeba tokenů, aktivita předplatného (pokud je zapnuto).</li>
        <li><strong>Platební údaje</strong>: zpracovává Stripe; aplikace uchováva pouze referenční identifikátory (customer_id, subscription_id).</li>
        <li><strong>Hlasová data</strong>: krátkodobé audio streamy pro převod hlasu (Google STT, ElevenLabs TTS), které se po převodu neukládají.</li>
      </ol>

      <h2>3. Účely a právní základ</h2>
      <table>
        <thead>
          <tr>
            <th>Účel zpracování</th>
            <th>Kategorie údajů</th>
            <th>Právní základ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Poskytnutí základních funkcí (přihlášení, chat, synchronizace)</td>
            <td>identifikační, profilová, obsah chatu, technická</td>
            <td>plnění smlouvy (čl. 6 odst. 1 b) GDPR)</td>
          </tr>
          <tr>
            <td>Zpracování souborů, generování odpovědí AI, hlasové služby</td>
            <td>obsah chatu, přílohy, hlasová data</td>
            <td>plnění smlouvy</td>
          </tr>
          <tr>
            <td>Udržba bezpečnosti (logy, detekce zneužití, access tokeny)</td>
            <td>technická metadata</td>
            <td>oprávněný zájem (bezpečnost)</td>
          </tr>
          <tr>
            <td>Fakturace a evidence plateb</td>
            <td>identifikační údaje, provozní metriky, platební identifikátory</td>
            <td>plnění smlouvy / právní povinnost</td>
          </tr>
          <tr>
            <td>Zlepšení produktu (anonymizovaná analýza)</td>
            <td>agregovaná provozní data</td>
            <td>oprávněný zájem</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Komu se data předávají</h2>
      <ul>
        <li><strong>Supabase</strong> (EU datacentra): autentizace, databáze (profiles, chats, messages), Storage (attachments, generated-images, generated-pdfs-temp), realtime signalizace.</li>
        <li><strong>Google Cloud</strong> (EU a US regiony podle konfigurace): Vertex AI Gemini, Document AI, Text-to-Speech, Speech-to-Text, Cloud Storage pro dočasné zpracování. Credentialy jsou ukládány ve formátu JSON v proměnných prostředí na straně serveru.</li>
        <li><strong>Anthropic</strong>: API Claude pro generativní odpovědi a web search. Předávaný je obsah aktuální konverzace a případné přílohy ve formátech podporovaných API.</li>
        <li><strong>OpenAI</strong>: GPT-5 pro rozšířené generativní funkce. Odesílané jsou systémové instrukce a část historie konverzace.</li>
        <li><strong>ElevenLabs</strong>: Text-to-Speech streamy pro generování hlasové odezvy. Předává se pouze text aktuální odpovědi.</li>
        <li><strong>Stripe</strong>: správa předplatného; do aplikace se vrací pouze tokenizované identifikátory.</li>
        <li><strong>Google Search / externí zdroje</strong>: při zapnuté vyhledávací funkci se dotaz anonymně odesílá do integrace pro web search.</li>
      </ul>
      <p>Data nejsou prodávaná třetím stranám ani sdílená pro marketing třetích stran.</p>

      <h2>5. Úložiště a doba uchování</h2>
      <ul>
        <li><strong>Supabase</strong>: data jsou uložena do doby, než Uživatel smaže chat nebo celý účet. Při smazání účtu je uživatel upozorněn na důsledky, musí napsat <code>DELETE</code> a potvrdit akci v aplikaci; není odesílán žádný e-mail. Následně backend <code>delete-account.js</code> volá <code>supabase.auth.admin.deleteUser</code> a aktivuje kaskádní odstranění profilu, chatů, zpráv i příloh.</li>
        <li><strong>IndexedDB v prohlížeči</strong>: lokální databáze <code>EloraChatDB</code> uchovává chaty pro offline použití. Uživatel může data vymazat v nastavení nebo při odhlášení.</li>
        <li><strong>Dočasné úložiště</strong>: nahrané soubory při zpracování dokumentů mohou být dočasně drženy v Google Cloud Storage, po dokončení se maže dočasný soubor i metadata.</li>
        <li><strong>Logy serveru</strong>: krátkodobě (max 30 dnů) pro řešení incidentů, poté se anonymizují nebo smažou.</li>
        <li><strong>Platební doklady</strong>: uchovává Stripe v souladu s právními předpisy.</li>
      </ul>

      <h2>6. Bezpečnostní opatření</h2>
      <ul>
        <li>Všechny nové řádky v Supabase mají aktivní Row Level Security a kontrolu <code>auth.uid()</code>.</li>
        <li>Storage objekty v Supabase vyžadují vlastnictví <code>owner = auth.uid()</code> pro mazání.</li>
        <li>Tokeny Supabase jsou ověřovány na backendu pomocí service role klíče.</li>
        <li>Hesla jsou u Supabase hashována podle bezpečnostních standardů.</li>
        <li>Komunikace s API je šifrovaná (HTTPS).</li>
        <li>Při smazání chatu se nejprve odstraní soubory ze Storage (<code>deleteStorageFiles</code>), poté konverzace a případné záznamy v sync tabulkách.</li>
        <li>Přístup k řídícím credentialům (Google, OpenAI, Anthropic, ElevenLabs) je omezen na serverovou část.</li>
      </ul>

      <h2>7. Práva uživatelů</h2>
      <p>Uživatel má v souladu s GDPR zejména tato práva:</p>
      <ol>
        <li><strong>Právo na přístup k údajům</strong> (v nastavení účtu lze požádat o export).</li>
        <li><strong>Právo na opravu profilu</strong> (profil lze editovat přímo v aplikaci).</li>
        <li><strong>Právo na výmaz</strong> (smazání chatů, příloh nebo celý účtový profil).</li>
        <li><strong>Právo na omezení zpracování</strong> (lze vypnout synchronizaci nebo zrušit předplatné).</li>
        <li><strong>Právo vznesení námitek</strong> proti zpracování založenému na oprávněném zájmu.</li>
        <li><strong>Právo na přenositelnost</strong> (export konverzací lze zaslat na základě žádosti).</li>
        <li><strong>Právo podat stížnost</strong> u dozorového orgánu (Úřad pro ochranu osobních údajů, www.uoou.cz).</li>
      </ol>
      <p>Žádosti lze směrovat na <a href="mailto:privacy@elenor.io">privacy@elenor.io</a>. Provozovatel odpoví nejpozději do 30 dnů.</p>

      <h2>8. Automatizované rozhodování a profilace</h2>
      <p>
        Aplikace generuje odpovědi s využitím modelů umělé inteligence na základě instrukcí a historie konverzace. Neprovádí se profilace vedoucí k právním účinkům nebo obdobně významnému dopadu bez lidského vstupu. Předplatná a fakturace jsou řízena jasnými pravidly.
      </p>

      <h2>9. Změny zásad</h2>
      <p>
        Tento dokument může být průběžně aktualizován, pokud dojde k technickým nebo legislativním změnám. O významných změnách bude uživatel informován e-mailem nebo oznámením ve Službě nejméně 14 dnů před účinností. Archiv předchozích verzí bude k dispozici na vyžádání.
      </p>

      <hr style={{margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)'}} />
      <p style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
        Tento text je připraven na základě skutečné implementace projektu Elora AI.
      </p>
    </>
  )
}

function RomanianContent() {
  return (
    <>
      <p>
        Această Politică explică ce date personale procesează aplicația Elora AI, în ce scop și cum sunt protejate. Operatorul de date este Cristian Bucioaca, contact:{' '}
        <a href="mailto:privacy@elenor.io">privacy@elenor.io</a>.
      </p>

      <h2>1. Roluri conform GDPR</h2>
      <ul>
        <li>Furnizorul acționează ca operator pentru datele personale furnizate de utilizatori sau generate în timpul utilizării aplicației.</li>
        <li>Platformele terțe (Supabase, Google Cloud, OpenAI, Anthropic, ElevenLabs, Stripe) acționează ca persoane împuternicite sau operatori independenți, în funcție de serviciul prestat.</li>
        <li>Datele sunt partajate cu terți numai în măsura necesară pentru furnizarea Serviciului.</li>
      </ul>

      <h2>2. Categorii de date procesate</h2>
      <ol>
        <li><strong>Date de identificare și autentificare</strong>: e-mail, parolă criptată, ID intern de utilizator.</li>
        <li><strong>Informații de profil</strong>: nume afișat și pseudonim opțional, limbă preferată.</li>
        <li><strong>Conținut de chat și atașamente</strong>: mesaje text, metadate de sistem, fișiere încărcate (PDF, imagini, documente), rezultate generate de AI.</li>
        <li><strong>Metadate tehnice</strong>: ID dispozitiv, marcaje de timp, versiune browser, jurnale de erori.</li>
        <li><strong>Metrice de utilizare</strong>: număr de mesaje, tokeni consumați, activitate de abonare (dacă este cazul).</li>
        <li><strong>Date de plată</strong>: gestionate de Stripe; aplicația stochează doar identificatori de referință (customer_id, subscription_id).</li>
        <li><strong>Date vocale</strong>: fluxuri audio temporare pentru funcțiile speech-to-text sau text-to-speech; nu sunt stocate după procesare.</li>
      </ol>

      <h2>3. Scopuri și temeiuri legale</h2>
      <table>
        <thead>
          <tr>
            <th>Scop</th>
            <th>Categorii de date</th>
            <th>Temei legal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Furnizarea funcțiilor principale (login, chat, sincronizare)</td>
            <td>identificare, profil, conținut chat, tehnice</td>
            <td>executarea contractului (art. 6 alin. 1 lit. b) GDPR)</td>
          </tr>
          <tr>
            <td>Procesarea documentelor, generarea AI, funcții vocale</td>
            <td>conținut chat, atașamente, date vocale</td>
            <td>executarea contractului</td>
          </tr>
          <tr>
            <td>Securitate și prevenire fraudă (logare, verificare token)</td>
            <td>metadate tehnice</td>
            <td>interes legitim (securitate)</td>
          </tr>
          <tr>
            <td>Facturare și emitere facturi</td>
            <td>date de identificare, metrice, identificatori de plată</td>
            <td>executarea contractului / obligație legală</td>
          </tr>
          <tr>
            <td>Îmbunătățirea produsului (analiză agregată)</td>
            <td>date agregate de utilizare</td>
            <td>interes legitim</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Partajarea datelor</h2>
      <ul>
        <li><strong>Supabase</strong> (centre din UE): autentificare, baze de date (profiles, chats, messages), Storage (attachments, generated-images, generated-pdfs-temp), realtime.</li>
        <li><strong>Google Cloud</strong> (regiuni din UE și SUA conform configurației): Vertex AI Gemini, Document AI, Text-to-Speech, Speech-to-Text, Cloud Storage pentru procesare temporară. Credentialele sunt furnizate ca JSON în variabile de mediu pe server.</li>
        <li><strong>Anthropic</strong>: API Claude pentru răspunsuri generative și căutare web; se transmit doar contextul relevant și atașamentele acceptate.</li>
        <li><strong>OpenAI</strong>: GPT-5 pentru funcționalități suplimentare; se trimit instrucțiuni de sistem și părți din conversație.</li>
        <li><strong>ElevenLabs</strong>: streaming Text-to-Speech; se transmite doar textul curent.</li>
        <li><strong>Stripe</strong>: gestionarea abonamentelor; aplicația reține doar identificatori tokenizați.</li>
        <li><strong>Căutare Google / surse externe</strong>: la activarea căutării web, interogarea este trimisă fără date personale.</li>
      </ul>
      <p>Datele nu sunt vândute terților și nu sunt partajate pentru marketing-ul acestora.</p>

      <h2>5. Stocare și retenție</h2>
      <ul>
        <li><strong>Supabase</strong>: datele sunt păstrate până când Utilizatorul șterge chatul sau întregul cont. Înainte de ștergere, interfața explică efectele, solicită introducerea textului <code>DELETE</code> și confirmarea acțiunii în aplicație; nu se trimite e-mail suplimentar. După confirmare, scriptul <code>delete-account.js</code> apelează <code>supabase.auth.admin.deleteUser</code> și elimină profile, chat-uri, mesaje și fișierele asociate.</li>
        <li><strong>IndexedDB</strong> în browser: baza locală <code>EloraChatDB</code> păstrează chaturile pentru acces offline. Utilizatorul poate șterge datele din setări sau la deconectare.</li>
        <li><strong>Stocare temporară</strong>: fișierele procesate prin Document AI pot fi păstrate temporar în Google Cloud Storage; după finalizare, fișierele și metadatele temporare sunt șterse.</li>
        <li><strong>Loguri server</strong>: păstrate până la 30 de zile pentru rezolvarea incidentelor, apoi anonimizate sau eliminate.</li>
        <li><strong>Facturi și evidențe de plată</strong>: păstrate de Stripe conform obligațiilor legale.</li>
      </ul>

      <h2>6. Măsuri de securitate</h2>
      <ul>
        <li>Toate tabelele Supabase au politici Row Level Security care impun <code>auth.uid()</code>.</li>
        <li>Obiectele din Storage folosesc coloana <code>owner</code>, astfel încât doar proprietarul poate șterge fișierele.</li>
        <li>Tokenurile sunt verificate pe backend folosind cheia de service Supabase.</li>
        <li>Parolele sunt criptate de Supabase conform standardelor actuale.</li>
        <li>Toate comunicările API sunt criptate (HTTPS).</li>
        <li>La ștergerea unui chat, aplicația elimină mai întâi fișierele din Storage (<code>deleteStorageFiles</code>), apoi șterge conversațiile și înregistrările de sincronizare.</li>
        <li>Accesul la credențialele critice (Google, OpenAI, Anthropic, ElevenLabs) este limitat la codul serverului.</li>
      </ul>

      <h2>7. Drepturile utilizatorilor</h2>
      <p>Utilizatorii beneficiază de următoarele drepturi conform GDPR:</p>
      <ol>
        <li><strong>Acces</strong>: solicitarea unei copii a datelor (disponibilă prin export din cont).</li>
        <li><strong>Rectificare</strong>: actualizarea informațiilor de profil (<code>ProfileService.saveProfile</code>).</li>
        <li><strong>Ștergere</strong>: eliminarea chat-urilor, atașamentelor sau a întregului cont din interfață.</li>
        <li><strong>Restricționare</strong>: dezactivarea sincronizării sau anularea abonamentelor.</li>
        <li><strong>Portabilitate</strong>: solicitarea exportului conversațiilor în format JSON/CSV.</li>
        <li><strong>Opoziție</strong>: contestarea prelucrărilor bazate pe interes legitim.</li>
        <li><strong>Plângere</strong>: depunerea unei sesizări la Autoritatea Națională de Supraveghere a Prelucrării Datelor (www.dataprotection.ro).</li>
      </ol>
      <p>Cererile pot fi trimise la <a href="mailto:privacy@elenor.io">privacy@elenor.io</a>. Furnizorul va răspunde în maximum 30 de zile.</p>

      <h2>8. Decizii automate</h2>
      <p>
        Răspunsurile AI sunt generate cu modele terțe pe baza instrucțiunilor și a istoricului conversației. Serviciul nu aplică decizii automatizate cu efecte juridice sau similare fără intervenție umană. Abonamentele și facturarea urmează reguli transparente.
      </p>

      <h2>9. Modificarea politicii</h2>
      <p>
        Documentul poate fi actualizat în funcție de schimbările tehnice sau legale. Utilizatorii vor fi informați despre modificările importante cu cel puțin 14 zile înainte prin e-mail sau notificări în aplicație. Versiunile vechi sunt arhivate și pot fi furnizate la cerere.
      </p>

      <hr style={{margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)'}} />
      <p style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
        Politica reflectă implementarea Elora AI la data de 2 noiembrie 2025.
      </p>
    </>
  )
}
