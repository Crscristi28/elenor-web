'use client'

import LegalLayout from '@/components/LegalLayout'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Usage() {
  const { language } = useLanguage()

  const title = language === 'cs' ? "Popis služby Elora AI (technicko-právní shrnutí)"
    : language === 'ro' ? "Rezumat serviciu Elora AI"
    : "Elora AI Service Summary"

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
      <p>This document summarises what Elora AI does, how it is designed and its main capabilities. It acts as a reference for product communication and supporting legal documentation.</p>

      <h2>1. Concept</h2>
      <p>Elora AI is a React + Vite application tailored for web and mobile experiences that delivers an intelligent assistant. Users can write, speak, upload files and receive responses from multiple AI models (Gemini, Claude, GPT-5). The application supports several languages (CZ, EN, RO, DE and more) and combines text, document and visual workflows.</p>

      <h2>2. Core Modules</h2>
      <ul>
        <li><strong>Frontend (<code>src/</code>)</strong>: React components for chat, history, uploads, content generation and settings.</li>
        <li><strong>IndexedDB</strong>: local database <code>EloraChatDB</code> for offline chat history.</li>
        <li><strong>Synchronisation</strong>: <code>chatSync.js</code> uploads changes to Supabase and receives realtime updates.</li>
        <li><strong>Backend API (<code>api/</code>)</strong>: serverless routes (Vercel) for AI calls, voice features, document processing and account deletion.</li>
        <li><strong>Supabase</strong>: authentication, database (<code>profiles</code>, <code>chats</code>, <code>messages</code>, <code>usage_metrics</code>, <code>subscriptions</code>) and Storage.</li>
        <li><strong>Paid services</strong>: Stripe for subscriptions, usage metrics for billing insights.</li>
      </ul>

      <h2>3. User Features</h2>
      <ol>
        <li><strong>AI chat</strong>: real-time responses across multiple providers.</li>
        <li><strong>Web search and citations</strong>: <code>api/claude-web-search.js</code> returns sources saved as <code>sources</code>.</li>
        <li><strong>Document handling</strong>: uploads via <code>api/process-document.js</code> supporting plain text and PDF (Google Document AI).</li>
        <li><strong>Image and PDF generation</strong>: <code>api/imagen.js</code>, <code>api/generate-pdf.js</code> store results in Storage.</li>
        <li><strong>Voice tools</strong>: speech recognition (<code>api/google-stt.js</code>) and speech synthesis (<code>api/google-tts.js</code>, <code>api/elevenlabs-tts.js</code>).</li>
        <li><strong>Account management</strong>: registration, login, password change, OTP recovery, profile settings, account deletion.</li>
        <li><strong>Content deletion</strong>: remove specific chats or the entire account including attachments.</li>
        <li><strong>Subscriptions (optional)</strong>: <code>subscriptions</code> table and Stripe integration handle paid plans.</li>
      </ol>

      <h2>4. Data Flows</h2>
      <ol>
        <li><strong>Login</strong>: user submits e-mail/password, Supabase returns a JWT used for subsequent API calls.</li>
        <li><strong>Message sending</strong>: the frontend assembles <code>messages</code>, selects the AI model and sends JSON to the corresponding endpoint (e.g. <code>/api/gemini</code>). The backend verifies the token, adds the role and streams the AI response.</li>
        <li><strong>File upload</strong>: <code>/api/process-document</code> handles either direct text processing or delegates to Google Document AI. Metadata are returned and can be stored in the chat.</li>
        <li><strong>Image generation</strong>: the AI returns base64; the backend saves it to Supabase Storage and responds with a public URL.</li>
        <li><strong>Synchronisation</strong>: <code>chatSyncService</code> compares local and cloud data, uploads new messages and mirrors deletions.</li>
        <li><strong>Deletion</strong>: <code>deleteChat</code> removes Storage files and related database entries; total account deletion uses <code>/api/delete-account</code>.</li>
      </ol>

      <h2>5. Security and Data Protection</h2>
      <ul>
        <li>Authentication and authorisation rely on Supabase with server-side service role keys.</li>
        <li>Row Level Security prevents access to other users' data.</li>
        <li>Storage buckets check ownership so only the file owner can delete assets.</li>
        <li>API routes enforce CORS, limit methods to POST/OPTIONS and validate inputs.</li>
        <li>Tokens and credentials are stored in environment variables (Vercel secret manager).</li>
        <li>Chat history lives locally and in Supabase; Users can remove it at any time.</li>
        <li>Logging is minimal and focused on technical diagnostics.</li>
      </ul>

      <h2>6. Third-Party Integrations</h2>
      <table>
        <thead>
          <tr>
            <th>Provider</th>
            <th>Purpose</th>
            <th>Data transferred</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Supabase</td>
            <td>authentication, database, storage, realtime</td>
            <td>user ID, chats, messages, files</td>
          </tr>
          <tr>
            <td>Google Cloud Vertex AI</td>
            <td>Gemini responses</td>
            <td>current conversation context, system prompts</td>
          </tr>
          <tr>
            <td>Anthropic Claude</td>
            <td>generative replies, web search</td>
            <td>message text, metadata, relevant attachments</td>
          </tr>
          <tr>
            <td>OpenAI</td>
            <td>GPT-5 responses</td>
            <td>conversation snippets and system instructions</td>
          </tr>
          <tr>
            <td>Google Document AI</td>
            <td>document parsing</td>
            <td>uploaded file content</td>
          </tr>
          <tr>
            <td>Google TTS/STT</td>
            <td>voice services</td>
            <td>audio stream or text</td>
          </tr>
          <tr>
            <td>ElevenLabs</td>
            <td>TTS fallback</td>
            <td>text to synthesise</td>
          </tr>
          <tr>
            <td>Stripe</td>
            <td>subscriptions</td>
            <td>user identifiers, plan, payment status</td>
          </tr>
        </tbody>
      </table>

      <h2>7. User Control</h2>
      <ul>
        <li>The UI offers controls to delete chats, clear all data and close the account.</li>
        <li>Deletion prompts confirm the action (<code>deleteConfirmation</code>).</li>
        <li>Upload history shows available attachments and download links.</li>
        <li>Profile settings store only optional fields (name, nickname).</li>
        <li>When Supabase credentials are missing, the app works offline without sending data to the cloud.</li>
      </ul>

      <h2>8. Technology and Deployment</h2>
      <ul>
        <li>Vite powers builds (<code>npm run build</code>), typical deployment is on Vercel.</li>
        <li>API routes use the Fetch API and stream responses using <code>application/x-ndjson</code>.</li>
        <li>PDF generation relies on Puppeteer (<code>api/generate-pdf.js</code>).</li>
        <li>The <code>docs/</code> directory contains deeper technical references (architecture, realtime, sync).</li>
      </ul>

      <h2>9. Limitations and Warnings</h2>
      <ul>
        <li>AI outputs can be inaccurate; documentation encourages verification.</li>
        <li>Third-party models may retain data briefly for diagnostics.</li>
        <li>Missing API keys result in immediate errors to avoid partial processing.</li>
        <li>File size limits apply (e.g. 10 MB for Google STT audio).</li>
        <li>Offline mode depends on browser security; no additional app-level encryption is applied.</li>
      </ul>

      <hr style={{margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)'}} />
      <p style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
        Prepared based on the project source code as of 2 November 2025.
      </p>
    </>
  )
}

function CzechContent() {
  return (
    <>
      <p>Tento dokument shrnuje, co aplikace Elora AI dělá, jak je navržena a jaké má hlavní funkce. Obsah slouží jako podklad pro komunikaci s uživateli i pro právní dokumentaci.</p>

      <h2>1. Základní představa</h2>
      <p>Elora AI je webová a mobilně optimalizovaná aplikace postavená na React + Vite, která uživatelům poskytuje inteligentního asistenta. Uživatel může psát, mluvit, nahrávat soubory a přijímat odpovědi od více modelů umělé inteligence (Gemini, Claude, GPT-5). Aplikace je navržena pro vícejazyčné použití (CZ, EN, RO atd.) a kombinuje textové, dokumentové i vizuální funkce.</p>

      <h2>2. Hlavní moduly</h2>
      <ul>
        <li><strong>Frontend (src/)</strong>: React komponenty pro chat, historii, nahrávání souborů, generování obsahu, nastavení.</li>
        <li><strong>IndexedDB</strong>: lokální úložiště <code>EloraChatDB</code> pro rychlý přístup k historii konverzací a offline režim.</li>
        <li><strong>Synchronizace</strong>: služba <code>chatSync.js</code> zajišťuje upload do Supabase a realtime aktualizace mezi zařízeními.</li>
        <li><strong>Backend API (api/)</strong>: serverless routy na Vercelu pro práci s AI modely, hlasovým vstupem/výstupem, zpracováním dokumentů a mazáním účtu.</li>
        <li><strong>Supabase</strong>: autentizace, databáze (profiles, chats, messages, usage_metrics, subscriptions) a Storage.</li>
        <li><strong>Placené služby</strong>: Stripe (pokud je aktivní), Evidence spotřeby (<code>usage_metrics</code>).</li>
      </ul>

      <h2>3. Funkcionality pro uživatele</h2>
      <ol>
        <li><strong>Chat s AI</strong>: real-time odpovědi s podporou více poskytovatelů.</li>
        <li><strong>Web search a citace</strong>: integrace <code>api/claude-web-search.js</code> vrací zdrojové odkazy, které se ukládají jako <code>sources</code>.</li>
        <li><strong>Zpracování dokumentů</strong>: upload souborů přes <code>api/process-document.js</code> s možnosti analýzy plain textu i PDF (Google Document AI).</li>
        <li><strong>Generování obrázků a PDF</strong>: volání <code>api/imagen.js</code>, <code>api/generate-pdf.js</code> a ukládání výsledků do Storage.</li>
        <li><strong>Hlasové funkce</strong>: díky <code>api/google-stt.js</code>, <code>api/google-tts.js</code>, <code>api/elevenlabs-tts.js</code> lze diktovat i poslouchat odpovědi.</li>
        <li><strong>Správa účtu</strong>: registrace, přihlášení, změna hesla, obnova přes OTP, nastavení profilu, smazání účtu.</li>
        <li><strong>Mazání obsahu</strong>: mazání jednotlivých chatů nebo kompletního účtu včetně příloh.</li>
        <li><strong>Předplatné (volitelné)</strong>: tabulka <code>subscriptions</code> a integrace se Stripe pro správu plánů.</li>
      </ol>

      <h2>4. Datové toky</h2>
      <ol>
        <li><strong>Přihlášení</strong>: uživatel zadá e-mail/heslo, Supabase vrátí JWT, které se používá pro volání serveru.</li>
        <li><strong>Odeslání zprávy</strong>: frontend sestaví seznam <code>messages</code>, podle logiky vybere AI model a pošle JSON na příslušný endpoint (např. <code>/api/gemini</code>). Backend ověří token, doplní roli, zavolá AI API, odpověď streamuje zpět.</li>
        <li><strong>Nahrání souboru</strong>: soubor se pošle na <code>/api/process-document</code>, kde se buďto zpracuje lokálně (plain text), nebo předá Google Document AI. Metadata se vrátí do aplikace a mohou být uložena v chatu.</li>
        <li><strong>Generování obrázků</strong>: AI model vrátí base64, backend uloží obrázek do Supabase Storage a vrátí public URL.</li>
        <li><strong>Synchronizace</strong>: <code>chatSyncService</code> porovnává lokální a cloudová data, odesílá nové zprávy, mazání se propaguje v obou směrech.</li>
        <li><strong>Mazání</strong>: volání <code>deleteChat</code> odstraní soubory a záznamy. Mazání celého účtu volá <code>/api/delete-account</code>.</li>
      </ol>

      <h2>5. Bezpečnost a ochrana dat</h2>
      <ul>
        <li>Autentizace a autorizace prochází Supabase; backend má service role klíč.</li>
        <li>Row Level Security brání přístupu k cizím datům.</li>
        <li>Storage má nastavený owner check, proto může soubory mazat jen jejich vlastník.</li>
        <li>Všechny API routy nastavují CORS, limitují metody na POST/OPTIONS a kontrolují vstupy.</li>
        <li>Tokeny a credentials jsou uchovány v proměnných prostředí (Vercel secret manager).</li>
        <li>Chat historie se ukládá lokálně i v Supabase, ale uživatel má vždy možnost data smazat.</li>
        <li>Logy jsou minimální a nesou pouze technické informace.</li>
      </ul>

      <h2>6. Integrace třetích stran</h2>
      <table>
        <thead>
          <tr>
            <th>Poskytovatel</th>
            <th>Účel</th>
            <th>Předávaná data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Supabase</td>
            <td>autentizace, databáze, storage, realtime</td>
            <td>uživatelské ID, chaty, zprávy, soubory</td>
          </tr>
          <tr>
            <td>Google Cloud Vertex AI</td>
            <td>odpovědi modelu Gemini</td>
            <td>obsah aktuální konverzace, systémové instrukce</td>
          </tr>
          <tr>
            <td>Anthropic Claude</td>
            <td>generativní odpovědi, web search</td>
            <td>text zprávy, metadata, přílohy (pokud jsou nutné)</td>
          </tr>
          <tr>
            <td>OpenAI</td>
            <td>GPT-5 odpovědi</td>
            <td>textové zprávy a systémové instrukce</td>
          </tr>
          <tr>
            <td>Google Document AI</td>
            <td>extrakce textu z dokumentů</td>
            <td>obsah nahraného souboru</td>
          </tr>
          <tr>
            <td>Google TTS/STT</td>
            <td>převod hlasu</td>
            <td>audio stream nebo text</td>
          </tr>
          <tr>
            <td>ElevenLabs</td>
            <td>TTS fallback</td>
            <td>text odpovědi</td>
          </tr>
          <tr>
            <td>Stripe</td>
            <td>předplatné</td>
            <td>identifikátory uživatele, plán, stav</td>
          </tr>
        </tbody>
      </table>

      <h2>7. Uživatelská kontrola</h2>
      <ul>
        <li>V UI jsou dostupné akce pro smazání chatu, vymazání všech dat a zrušení účtu.</li>
        <li>Při mazání chatu se zobrazí dialog s potvrzením (<code>deleteConfirmation</code>).</li>
        <li>Při nahrávání souboru je zobrazena historie a možnost stáhnout příloha zpátky.</li>
        <li>Nastavení profilu ukládá pouze dobrovolné údaje (jméno, přezdívka).</li>
        <li>Pokud nejsou environment variables pro Supabase k dispozici, aplikace pracuje v offline módu bez odesílání dat do cloudu.</li>
      </ul>

      <h2>8. Technologie a nasazení</h2>
      <ul>
        <li>Build je řízený pomocí Vite (<code>npm run build</code>), deployment typicky na Vercel.</li>
        <li>API routy využívají Node fetch, streaming přes <code>application/x-ndjson</code> pro AI odpovědi.</li>
        <li>Pro PDF generování je připojen Puppeteer (<code>api/generate-pdf.js</code>).</li>
        <li>Součástí projektu je i adresář <code>docs/</code> s technickými popisy architektury, realtime, synchronizace.</li>
      </ul>

      <h2>9. Omezení a varování</h2>
      <ul>
        <li>AI odpovědi mohou být nepřesné; dokumentace doporučuje ověřovat důležité informace.</li>
        <li>Modely třetích stran mohou dočasně uchovávat data pro účely diagnostiky.</li>
        <li>Při chybějícím API klíči má backend zcela ukončit žádost a vracet vhodné chybové kódy.</li>
        <li>Velké soubory jsou omezeny (např. 10 MB pro audio v Google STT).</li>
        <li>Offline režim nezahrnuje šifrování na úrovni aplikace (spoléhá na zabezpečení prohlížeče).</li>
      </ul>

      <hr style={{margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)'}} />
      <p style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
        Tento popis byl vytvořen na základě zdrojového kódu dostupného k 15. února 2025 a slouží jako doprovodná dokumentace k právním souborům.
      </p>
    </>
  )
}

function RomanianContent() {
  return (
    <>
      <p>Acest document rezumă ce face Elora AI, cum este proiectat și care sunt funcțiile sale principale. Conținutul servește ca bază pentru comunicarea cu utilizatorii și pentru documentația legală.</p>

      <h2>1. Concept de bază</h2>
      <p>Elora AI este o aplicație web și optimizată pentru mobil, construită pe React + Vite, care oferă utilizatorilor un asistent inteligent. Utilizatorul poate scrie, vorbi, încărca fișiere și primi răspunsuri de la mai multe modele de inteligență artificială (Gemini, Claude, GPT-5). Aplicația este concepută pentru utilizare multilingvă (CZ, EN, RO etc.) și combină funcții text, document și vizuale.</p>

      <h2>2. Module principale</h2>
      <ul>
        <li><strong>Frontend (src/)</strong>: componente React pentru chat, istoric, încărcare fișiere, generare conținut, setări.</li>
        <li><strong>IndexedDB</strong>: stocare locală <code>EloraChatDB</code> pentru acces rapid la istoricul conversațiilor și modul offline.</li>
        <li><strong>Sincronizare</strong>: serviciul <code>chatSync.js</code> asigură upload-ul către Supabase și actualizări realtime între dispozitive.</li>
        <li><strong>Backend API (api/)</strong>: rute serverless pe Vercel pentru lucrul cu modelele AI, input/output vocal, procesare documente și ștergere cont.</li>
        <li><strong>Supabase</strong>: autentificare, bază de date (profiles, chats, messages, usage_metrics, subscriptions) și Storage.</li>
        <li><strong>Servicii plătite</strong>: Stripe (dacă este activ), evidență consum (<code>usage_metrics</code>).</li>
      </ul>

      <h2>3. Funcționalități pentru utilizatori</h2>
      <ol>
        <li><strong>Chat cu AI</strong>: răspunsuri în timp real cu suport pentru mai mulți furnizori.</li>
        <li><strong>Căutare web și citări</strong>: integrare <code>api/claude-web-search.js</code> returnează link-uri sursă care se salvează ca <code>sources</code>.</li>
        <li><strong>Procesare documente</strong>: upload fișiere prin <code>api/process-document.js</code> cu posibilitate de analiză text simplu și PDF (Google Document AI).</li>
        <li><strong>Generare imagini și PDF</strong>: apelare <code>api/imagen.js</code>, <code>api/generate-pdf.js</code> și salvare rezultate în Storage.</li>
        <li><strong>Funcții vocale</strong>: datorită <code>api/google-stt.js</code>, <code>api/google-tts.js</code>, <code>api/elevenlabs-tts.js</code> se poate dicta și asculta răspunsuri.</li>
        <li><strong>Gestionare cont</strong>: înregistrare, autentificare, schimbare parolă, recuperare prin OTP, setări profil, ștergere cont.</li>
        <li><strong>Ștergere conținut</strong>: ștergere chat-uri individuale sau cont complet inclusiv anexe.</li>
        <li><strong>Abonament (opțional)</strong>: tabel <code>subscriptions</code> și integrare cu Stripe pentru gestionare planuri.</li>
      </ol>

      <h2>4. Fluxuri de date</h2>
      <ol>
        <li><strong>Autentificare</strong>: utilizatorul introduce e-mail/parolă, Supabase returnează JWT, care este folosit pentru apelarea serverului.</li>
        <li><strong>Trimitere mesaj</strong>: frontend-ul compune lista <code>messages</code>, conform logicii selectează modelul AI și trimite JSON la endpoint-ul corespunzător (ex. <code>/api/gemini</code>). Backend-ul verifică token-ul, completează rolul, apelează API AI, răspunsul este transmis înapoi în flux.</li>
        <li><strong>Încărcare fișier</strong>: fișierul este trimis la <code>/api/process-document</code>, unde se procesează fie local (text simplu), fie se transmite la Google Document AI. Metadatele sunt returnate în aplicație și pot fi salvate în chat.</li>
        <li><strong>Generare imagini</strong>: modelul AI returnează base64, backend-ul salvează imaginea în Supabase Storage și returnează URL public.</li>
        <li><strong>Sincronizare</strong>: <code>chatSyncService</code> compară datele locale și cele cloud, trimite mesaje noi, ștergerea se propagă în ambele direcții.</li>
        <li><strong>Ștergere</strong>: apelul <code>deleteChat</code> elimină fișierele și înregistrările. Ștergerea întregului cont apelează <code>/api/delete-account</code>.</li>
      </ol>

      <h2>5. Securitate și protecția datelor</h2>
      <ul>
        <li>Autentificarea și autorizarea trec prin Supabase; backend-ul are cheia service role.</li>
        <li>Row Level Security împiedică accesul la datele altora.</li>
        <li>Storage are setat owner check, deci doar proprietarul poate șterge fișierele.</li>
        <li>Toate rutele API setează CORS, limitează metodele la POST/OPTIONS și controlează intrările.</li>
        <li>Token-urile și credențialele sunt păstrate în variabilele de mediu (Vercel secret manager).</li>
        <li>Istoricul chat se salvează local și în Supabase, dar utilizatorul are întotdeauna posibilitatea să șteargă datele.</li>
        <li>Log-urile sunt minime și conțin doar informații tehnice.</li>
      </ul>

      <h2>6. Integrări terți</h2>
      <table>
        <thead>
          <tr>
            <th>Furnizor</th>
            <th>Scop</th>
            <th>Date transmise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Supabase</td>
            <td>autentificare, bază de date, storage, realtime</td>
            <td>ID utilizator, chat-uri, mesaje, fișiere</td>
          </tr>
          <tr>
            <td>Google Cloud Vertex AI</td>
            <td>răspunsuri model Gemini</td>
            <td>conținutul conversației curente, instrucțiuni sistem</td>
          </tr>
          <tr>
            <td>Anthropic Claude</td>
            <td>răspunsuri generative, căutare web</td>
            <td>text mesaj, metadata, anexe (dacă sunt necesare)</td>
          </tr>
          <tr>
            <td>OpenAI</td>
            <td>răspunsuri GPT-5</td>
            <td>mesaje text și instrucțiuni sistem</td>
          </tr>
          <tr>
            <td>Google Document AI</td>
            <td>extragere text din documente</td>
            <td>conținutul fișierului încărcat</td>
          </tr>
          <tr>
            <td>Google TTS/STT</td>
            <td>conversie vocală</td>
            <td>flux audio sau text</td>
          </tr>
          <tr>
            <td>ElevenLabs</td>
            <td>TTS fallback</td>
            <td>textul răspunsului</td>
          </tr>
          <tr>
            <td>Stripe</td>
            <td>abonament</td>
            <td>identificatori utilizator, plan, stare</td>
          </tr>
        </tbody>
      </table>

      <h2>7. Control utilizator</h2>
      <ul>
        <li>În UI sunt disponibile acțiuni pentru ștergere chat, ștergere toate datele și anulare cont.</li>
        <li>La ștergerea chat-ului se afișează dialog de confirmare (<code>deleteConfirmation</code>).</li>
        <li>La încărcarea fișierului este afișat istoricul și posibilitatea de a descărca anexa înapoi.</li>
        <li>Setările profilului salvează doar date opționale (nume, pseudonim).</li>
        <li>Dacă variabilele de mediu pentru Supabase nu sunt disponibile, aplicația funcționează în modul offline fără trimitere date în cloud.</li>
      </ul>

      <h2>8. Tehnologie și deployment</h2>
      <ul>
        <li>Build-ul este gestionat cu Vite (<code>npm run build</code>), deployment-ul tipic pe Vercel.</li>
        <li>Rutele API folosesc Node fetch, streaming prin <code>application/x-ndjson</code> pentru răspunsuri AI.</li>
        <li>Pentru generare PDF este atașat Puppeteer (<code>api/generate-pdf.js</code>).</li>
        <li>Parte a proiectului este și directorul <code>docs/</code> cu descrieri tehnice ale arhitecturii, realtime, sincronizare.</li>
      </ul>

      <h2>9. Limitări și avertismente</h2>
      <ul>
        <li>Răspunsurile AI pot fi inexacte; documentația recomandă verificarea informațiilor importante.</li>
        <li>Modelele terților pot păstra temporar datele pentru scopuri de diagnostic.</li>
        <li>La lipsa cheii API, backend-ul trebuie să închidă complet cererea și să returneze coduri de eroare potrivite.</li>
        <li>Fișierele mari sunt limitate (ex. 10 MB pentru audio în Google STT).</li>
        <li>Modul offline nu include criptare la nivel de aplicație (se bazează pe securitatea browserului).</li>
      </ul>

      <hr style={{margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)'}} />
      <p style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
        Această descriere a fost creată pe baza codului sursă disponibil la 15 februarie 2025 și servește ca documentație însoțitoare la fișierele legale.
      </p>
    </>
  )
}
