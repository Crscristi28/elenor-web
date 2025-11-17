'use client'

import LegalLayout from '@/components/LegalLayout'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Security() {
  const { language } = useLanguage()

  const title = language === 'cs' ? "Autentizace a bezpečnostní opatření Elora AI"
    : language === 'ro' ? "Autentificare și măsuri de securitate Elora AI"
    : "Elora Authentication and Security Overview"

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
      <p>This document describes how authentication, authorisation and data protection are implemented in Elora AI. It is derived from the source code in the <code>api/</code>, <code>src/services/</code> and <code>supabase/</code> directories and from Supabase documentation.</p>

      <h2>1. Registration and Sign-In</h2>
      <ul>
        <li>Registration and login use Supabase Auth (<code>supabase.auth.signUp</code>, <code>supabase.auth.signInWithPassword</code>).</li>
        <li>Supabase stores passwords hashed (bcrypt) and issues JWT tokens that expire after 60 minutes and refresh automatically.</li>
        <li>On the client, <code>src/services/auth/supabaseAuth.js</code> offers sign-in, sign-out, password reset (OTP) and session listeners.</li>
        <li>Access tokens are never forwarded directly to third parties; when calling Elora API routes they are sent via the <code>Authorization: Bearer</code> header.</li>
      </ul>

      <h2>2. Backend Verification</h2>
      <ul>
        <li>Server routes (<code>api/claude.js</code>, <code>api/gemini.js</code> and others) instantiate Supabase with the service role key (<code>SUPABASE_SERVICE_ROLE_KEY</code>).</li>
        <li>Each request extracts the JWT token from the header and verifies it with <code>supabase.auth.getUser(token)</code>.</li>
        <li>Invalid tokens result in <code>401 Unauthorized</code>.</li>
        <li>After verification the backend queries the <code>profiles</code> table to retrieve the user role. Missing records default to <code>'user'</code>.</li>
      </ul>

      <h2>3. Roles and Permissions</h2>
      <ul>
        <li>The <code>profiles</code> table includes a <code>role</code> column (e.g. <code>user</code>, <code>owner</code>).</li>
        <li>Roles can be configured via the SQL script <code>supabase/add-admin-role.sql</code>.</li>
        <li>Backend logic uses the role flag to unlock privileged features (admin tools, priority access).</li>
        <li>If the role lookup fails the system falls back to standard user permissions.</li>
      </ul>

      <h2>4. Row Level Security and Database Access</h2>
      <ul>
        <li>All critical tables (<code>chats</code>, <code>messages</code>, <code>profiles</code>, <code>usage_metrics</code>, <code>subscriptions</code>) enforce Row Level Security.</li>
        <li>Policies ensure that <code>auth.uid() = user_id</code> (or <code>auth.uid() = id</code> in case of <code>profiles</code>), so Users only access their own rows.</li>
        <li>Inserts and deletes also require the record to belong to the authenticated user.</li>
        <li>Triggers like <code>update_updated_at_column</code> keep <code>updated_at</code> timestamps current for synchronisation purposes.</li>
      </ul>

      <h2>5. File Storage</h2>
      <ul>
        <li>Attachments are stored in Supabase Storage (bucket <code>attachments</code>), AI images in <code>generated-images</code>, PDFs in <code>generated-pdfs-temp</code>.</li>
        <li>Uploads via <code>supabase.storage.from(bucket).upload(...)</code> automatically set <code>owner = auth.uid()</code>.</li>
        <li>File deletions use <code>deleteFromSupabaseStorage</code>, which is allowed only for the owner thanks to Storage policies.</li>
        <li>When the User deletes a chat (<code>chatDB.deleteChat</code>) the logic removes Storage files before deleting <code>messages</code> and <code>chats</code>.</li>
      </ul>

      <h2>6. Local Storage and Synchronisation</h2>
      <ul>
        <li>IndexedDB (Dexie) stores offline data under the name <code>EloraChatDB</code>.</li>
        <li>Schema versions add new columns (attachments, images, pdf, sources) with explicit migration logs.</li>
        <li>Synchronisation with Supabase is handled by <code>src/services/sync/chatSync.js</code>. It checks authentication before uploading and transmits only the current user's records.</li>
        <li>Deletions propagate to realtime listeners so that changes appear on other devices.</li>
      </ul>

      <h2>7. Account and Data Deletion</h2>
      <ul>
        <li>The backend endpoint <code>api/delete-account.js</code> calls <code>supabase.auth.admin.deleteUser(userId)</code> to remove the user, cascading to profiles, chats, messages and related files.</li>
        <li>This operation is irreversible; data cannot be restored after the deletion.</li>
        <li>Users can export conversations before requesting deletion.</li>
      </ul>

      <h2>8. API Keys and Third-Party Access</h2>
      <ul>
        <li>All secrets (Google, Anthropic, OpenAI, ElevenLabs, Stripe) are loaded from environment variables and never exposed to the client.</li>
        <li>The backend checks for missing keys and responds with HTTP 500 plus a safe message if the configuration is incomplete.</li>
        <li>Requests to third-party APIs send only the data required for the specific function (e.g. current message, text to synthesize).</li>
      </ul>

      <h2>9. Incident Response</h2>
      <ul>
        <li>Runtime errors are logged to the console (visible in Vercel logs) with minimal personal data.</li>
        <li>The Provider monitors <code>console.error</code> and <code>console.warn</code> outputs to catch anomalies.</li>
        <li>In case of a security incident, tokens can be revoked in Supabase and API keys rotated immediately.</li>
      </ul>

      <h2>10. User Recommendations</h2>
      <ul>
        <li>Use a unique password and enable MFA on the mail account used for login.</li>
        <li>If suspicious activity occurs, change the password and notify support right away.</li>
        <li>Do not share tokens or API keys with third parties.</li>
        <li>Periodically delete unnecessary chats and attachments to limit stored data.</li>
      </ul>

      <hr style={{margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)'}} />
      <p style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
        This document reflects the security architecture of Elora AI as of 2 November 2025.
      </p>
    </>
  )
}

function CzechContent() {
  return (
    <>
      <p>Tento dokument popisuje, jak je v aplikaci Elora AI řešena autentizace, autorizace a ochrana dat. Informace vycházejí z analýzy kódu v adresářích <code>api/</code>, <code>src/services/</code>, <code>supabase/</code> a dokumentace Supabase.</p>

      <h2>1. Registrace a přihlášení</h2>
      <ul>
        <li>Přihlášení i registrace probíhají přes Supabase Auth (<code>supabase.auth.signUp</code>, <code>supabase.auth.signInWithPassword</code>).</li>
        <li>Supabase ukládá hesla hashovaná (bcrypt) a vystavuje JWT token platný standardně 60 minut, který se automaticky obnovuje.</li>
        <li>Na klientu je používán modul <code>src/services/auth/supabaseAuth.js</code>, který poskytuje funkce přihlášení, odhlášení, obnovy hesla (OTP) a sledování stavu session.</li>
        <li>Přístupové tokeny se nikdy neodeslají třetím stranám přímo z prohlížeče; při volání vlastních API jsou přidané do hlavičky <code>Authorization: Bearer</code>.</li>
      </ul>

      <h2>2. Ověření na backendu</h2>
      <ul>
        <li>Serverové endpointy (<code>api/claude.js</code>, <code>api/gemini.js</code>, další) vytvářejí instanci Supabase klienta se service role klíčem (<code>SUPABASE_SERVICE_ROLE_KEY</code>).</li>
        <li>Při každé žádosti se z hlavičky vybere JWT token a ověří přes <code>supabase.auth.getUser(token)</code>.</li>
        <li>Pokud ověření selže, endpoint vrací <code>401 Unauthorized</code>.</li>
        <li>Po přihlášení se dotazuje tabulka <code>profiles</code> na roli uživatele. Neznámý nebo chybějící záznam je výchozí <code>'user'</code>.</li>
      </ul>

      <h2>3. Role a oprávnění</h2>
      <ul>
        <li>Tabulka <code>profiles</code> obsahuje sloupec <code>role</code> (např. <code>user</code>, <code>owner</code>).</li>
        <li>Roli lze nastavit pomocí SQL skriptu <code>supabase/add-admin-role.sql</code>.</li>
        <li>Na backendu je role použita pro aktivaci rozšířené funkce (např. přístup k administračním nástrojům nebo přednosti ve frontě).</li>
        <li>I když role není nalezena, systém volně nepovoluje rozšířená oprávnění.</li>
      </ul>

      <h2>4. Row Level Security a databáze</h2>
      <ul>
        <li>Všechny důležité tabulky (<code>chats</code>, <code>messages</code>, <code>profiles</code>, <code>usage_metrics</code>, <code>subscriptions</code>) mají aktivní Row Level Security.</li>
        <li>Přístupová politika zajišťuje, že <code>auth.uid() = user_id</code> nebo <code>auth.uid() = id</code>. Uživatel tak vidí pouze vlastní záznamy.</li>
        <li>Při vkládání a mazání dat se kontroluje, zda řádek patří právě přihlášenému uživateli.</li>
        <li>Triggery <code>update_updated_at_column</code> aktualizují čas <code>updated_at</code>, aby bylo možné sledovat změny pro synchronizaci.</li>
      </ul>

      <h2>5. Ukládání příloh a souborů</h2>
      <ul>
        <li>Souborové přílohy se ukládají v Supabase Storage (bucket <code>attachments</code>), AI obrázky v <code>generated-images</code>, PDF výstupy v <code>generated-pdfs-temp</code>.</li>
        <li>Při uploadu se používá <code>supabase.storage.from(bucket).upload(...)</code>, což automaticky nastaví <code>owner = auth.uid()</code>.</li>
        <li>Mazání souborů probíhá přes <code>deleteFromSupabaseStorage</code>, které lze volat pouze pro vlastní soubory díky Storage RLS politice.</li>
        <li>Při smazání chatu (<code>chatDB.deleteChat</code>) se nejdříve odstraní vázané soubory, teprve potom záznamy <code>messages</code> a <code>chats</code>.</li>
      </ul>

      <h2>6. Lokální úložiště a synchronizace</h2>
      <ul>
        <li>Pro offline režim je použita IndexedDB (Dexie) pod názvem <code>EloraChatDB</code>.</li>
        <li>Verze schématu postupně přidávají nové sloupce (attachments, images, pdf, sources) s důsledným logem migrací.</li>
        <li>Synchronizaci s cloudem zajišťuje <code>src/services/sync/chatSync.js</code>. Před odesláním dat do Supabase zkontroluje, zda je uživatel autentizovaný, a odesílá pouze vlastní záznamy.</li>
        <li>Při odstranění dat se také odmazávají případné záznamy v realtime synchronizaci, aby se změny projevily na ostatních zařízeních.</li>
      </ul>

      <h2>7. Smazání účtu a dat</h2>
      <ul>
        <li>Na backendu existuje endpoint <code>api/delete-account.js</code>, který voláním <code>supabase.auth.admin.deleteUser(userId)</code> odstraní uživatele z auth.users a spustí kaskádní mazání profilu, chatů, zpráv a vázaných souborů.</li>
        <li>Tento postup je finální a data nelze obnovit.</li>
        <li>Uživatel si může předtím stáhnout vlastní konverzace; export lze připravit na vyžádání.</li>
      </ul>

      <h2>8. Ochrana API klíčů a třetích stran</h2>
      <ul>
        <li>Všechny klíče (Google, Anthropic, OpenAI, ElevenLabs, Stripe) jsou načítány z proměnných prostředí a nejsou exponované na klienta.</li>
        <li>Backend kontroluje, zda klíče existují, a v případě chybějící konfigurace vrací HTTP 500 s bezpečnou chybovou hláškou.</li>
        <li>Při volání třetístranných API jsou posílány pouze nezbytné informace (např. aktuální zprávy pro generativní model, text k převodu hlasu).</li>
      </ul>

      <h2>9. Incident response</h2>
      <ul>
        <li>Logy selhání se zapisují do konzole (viditelné ve vercel logu) s minimálními osobními údaji.</li>
        <li>Provozovatel sleduje účast nekončí <code>console.error</code> a <code>console.warn</code> hlášky a může podle nich reagovat.</li>
        <li>V případě bezpečnostního incidentu bude uživatel informován přes e-mail a dokument bude aktualizován.</li>
      </ul>

      <h2>10. Doporučená opatření pro uživatele</h2>
      <ul>
        <li>Používejte jedinečné heslo a dvoufaktorovou autentizaci na e-mailové schránce.</li>
        <li>Při podezření na zneužití okamžitě změňte heslo a informujte podporu.</li>
        <li>Nepředávejte své tokeny nebo API klíče třetím stranám.</li>
        <li>Pravidelně mažte nepotřebné chaty a přílohy, aby nedocházelo k zbytečné akumulaci dat.</li>
      </ul>

      <hr style={{margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)'}} />
      <p style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
        Dokument reflektuje skutečný stav aplikace Elora AI k datu 2. listopadu 2025.
      </p>
    </>
  )
}

function RomanianContent() {
  return (
    <>
      <p>Acest document descrie modul în care sunt implementate autentificarea, autorizarea și protecția datelor în Elora AI. Informațiile provin din analiza codului din directoarele <code>api/</code>, <code>src/services/</code>, <code>supabase/</code> și din documentația Supabase.</p>

      <h2>1. Înregistrare și autentificare</h2>
      <ul>
        <li>Înregistrarea și autentificarea se efectuează prin Supabase Auth (<code>supabase.auth.signUp</code>, <code>supabase.auth.signInWithPassword</code>).</li>
        <li>Supabase stochează parolele hash-uite (bcrypt) și emite token-uri JWT valabile implicit 60 de minute, care se reînnoiesc automat.</li>
        <li>Pe client se folosește modulul <code>src/services/auth/supabaseAuth.js</code>, care oferă funcții pentru autentificare, deconectare, resetare parolă (OTP) și monitorizare sesiune.</li>
        <li>Token-urile de acces nu sunt niciodată transmise direct către terți din browser; când se apelează API-urile proprii, acestea sunt adăugate în header-ul <code>Authorization: Bearer</code>.</li>
      </ul>

      <h2>2. Verificare pe backend</h2>
      <ul>
        <li>Endpoint-urile server (<code>api/claude.js</code>, <code>api/gemini.js</code>, altele) creează o instanță de client Supabase cu cheia service role (<code>SUPABASE_SERVICE_ROLE_KEY</code>).</li>
        <li>La fiecare request, token-ul JWT este extras din header și verificat prin <code>supabase.auth.getUser(token)</code>.</li>
        <li>Dacă verificarea eșuează, endpoint-ul returnează <code>401 Unauthorized</code>.</li>
        <li>După autentificare, se interoghează tabelul <code>profiles</code> pentru rolul utilizatorului. O înregistrare necunoscută sau lipsă înseamnă implicit <code>'user'</code>.</li>
      </ul>

      <h2>3. Roluri și permisiuni</h2>
      <ul>
        <li>Tabelul <code>profiles</code> conține coloana <code>role</code> (ex. <code>user</code>, <code>owner</code>).</li>
        <li>Rolul poate fi setat folosind scriptul SQL <code>supabase/add-admin-role.sql</code>.</li>
        <li>Pe backend, rolul este folosit pentru activarea funcțiilor extinse (ex. acces la instrumente administrative sau prioritate în coadă).</li>
        <li>Chiar dacă rolul nu este găsit, sistemul nu permite liber permisiuni extinse.</li>
      </ul>

      <h2>4. Row Level Security și baza de date</h2>
      <ul>
        <li>Toate tabelele importante (<code>chats</code>, <code>messages</code>, <code>profiles</code>, <code>usage_metrics</code>, <code>subscriptions</code>) au Row Level Security activat.</li>
        <li>Politica de acces asigură că <code>auth.uid() = user_id</code> sau <code>auth.uid() = id</code>. Astfel utilizatorul vede doar propriile înregistrări.</li>
        <li>La inserarea și ștergerea datelor se verifică dacă rândul aparține utilizatorului autentificat.</li>
        <li>Trigger-ele <code>update_updated_at_column</code> actualizează timpul <code>updated_at</code> pentru urmărirea modificărilor în sincronizare.</li>
      </ul>

      <h2>5. Stocarea fișierelor și anexelor</h2>
      <ul>
        <li>Anexele fișiere sunt stocate în Supabase Storage (bucket <code>attachments</code>), imaginile AI în <code>generated-images</code>, PDF-urile în <code>generated-pdfs-temp</code>).</li>
        <li>La upload se folosește <code>supabase.storage.from(bucket).upload(...)</code>, care setează automat <code>owner = auth.uid()</code>.</li>
        <li>Ștergerea fișierelor se face prin <code>deleteFromSupabaseStorage</code>, care poate fi apelat doar pentru propriile fișiere datorită politicii RLS Storage.</li>
        <li>La ștergerea unui chat (<code>chatDB.deleteChat</code>) se elimină mai întâi fișierele asociate, apoi înregistrările <code>messages</code> și <code>chats</code>.</li>
      </ul>

      <h2>6. Stocare locală și sincronizare</h2>
      <ul>
        <li>Pentru modul offline se folosește IndexedDB (Dexie) sub numele <code>EloraChatDB</code>.</li>
        <li>Versiunile schemei adaugă progresiv noi coloane (attachments, images, pdf, sources) cu log-uri riguroase ale migrărilor.</li>
        <li>Sincronizarea cu cloud-ul este asigurată de <code>src/services/sync/chatSync.js</code>. Înainte de a trimite date către Supabase, verifică dacă utilizatorul este autentificat și transmite doar propriile înregistrări.</li>
        <li>La ștergerea datelor se elimină și eventualele înregistrări din sincronizarea realtime, astfel încât modificările să apară pe celelalte dispozitive.</li>
      </ul>

      <h2>7. Ștergerea contului și a datelor</h2>
      <ul>
        <li>Pe backend există endpoint-ul <code>api/delete-account.js</code>, care prin apelul <code>supabase.auth.admin.deleteUser(userId)</code> elimină utilizatorul din auth.users și declanșează ștergerea în cascadă a profilului, chat-urilor, mesajelor și fișierelor asociate.</li>
        <li>Această procedură este finală și datele nu pot fi recuperate.</li>
        <li>Utilizatorul poate descărca în prealabil propriile conversații; exportul poate fi pregătit la cerere.</li>
      </ul>

      <h2>8. Protecția cheilor API și a terților</h2>
      <ul>
        <li>Toate cheile (Google, Anthropic, OpenAI, ElevenLabs, Stripe) sunt încărcate din variabilele de mediu și nu sunt expuse către client.</li>
        <li>Backend-ul verifică dacă cheile există și, în caz de configurare lipsă, returnează HTTP 500 cu un mesaj de eroare sigur.</li>
        <li>La apelarea API-urilor terțe sunt trimise doar informațiile necesare (ex. mesajele curente pentru modelul generativ, textul pentru conversie vocală).</li>
      </ul>

      <h2>9. Răspuns la incidente</h2>
      <ul>
        <li>Log-urile de eșec sunt înregistrate în consolă (vizibile în log-ul Vercel) cu date personale minime.</li>
        <li>Operatorul monitorizează mesajele <code>console.error</code> și <code>console.warn</code> și poate reacționa în consecință.</li>
        <li>În caz de incident de securitate, utilizatorul va fi informat prin e-mail și documentul va fi actualizat.</li>
      </ul>

      <h2>10. Măsuri recomandate pentru utilizatori</h2>
      <ul>
        <li>Folosiți o parolă unică și autentificare cu doi factori pe căsuța de e-mail.</li>
        <li>În caz de suspiciune de abuz, schimbați imediat parola și informați suportul.</li>
        <li>Nu transmiteți token-urile sau cheile API către terți.</li>
        <li>Ștergeți periodic chat-urile și anexele inutile pentru a evita acumularea de date.</li>
      </ul>

      <hr style={{margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)'}} />
      <p style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
        Documentul reflectă starea reală a aplicației Elora AI la data de 2 noiembrie 2025.
      </p>
    </>
  )
}
