'use client'

import LegalLayout from '@/components/LegalLayout'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Terms() {
  const { language } = useLanguage()

  const title = language === 'cs' ? "Podmínky užívání služby Elora"
    : language === 'ro' ? "Termeni de utilizare Elora"
    : "Elora Terms of Use"

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
        These Terms govern use of the Elora AI application (the "Service") operated by Cristian Bucioaca, e-mail:
        {' '}<a href="mailto:contact@elenor.io">contact@elenor.io</a> (the "Provider"). By accessing
        the Service you confirm that you have read and agree to these Terms.
      </p>

      <h2>1. Definitions</h2>
      <ul>
        <li><strong>User</strong>: Any natural or legal person who creates an account or otherwise uses the Service.</li>
        <li>
          <strong>User Content</strong>: All information provided by the User, in particular e-mail, password, chat history,
          uploaded files, generated outputs and usage metadata.
        </li>
        <li><strong>Service</strong>: The Elora web and mobile experience including the companion API routes.</li>
        <li>
          <strong>Third-Party Providers</strong>: Supabase, Google Cloud (Vertex AI, Document AI, Text-to-Speech,
          Speech-to-Text), Anthropic (Claude), OpenAI, ElevenLabs and Stripe.
        </li>
      </ul>

      <h2>2. Scope of the Service</h2>
      <p>Elora provides a multi-platform AI assistant that allows Users to:</p>
      <ul>
        <li>engage in text and voice conversations,</li>
        <li>generate, analyse and summarise content,</li>
        <li>upload and process files (text, PDF, images),</li>
        <li>store chats and attachments for their own use,</li>
        <li>synchronise conversations across devices through Supabase,</li>
        <li>optionally subscribe to paid tiers processed through Stripe (if enabled).</li>
      </ul>

      <h2>3. Account Creation and Access</h2>
      <ol>
        <li>The User must provide accurate and up-to-date information during registration.</li>
        <li>
          Registration requires an e-mail address and password. Passwords are stored by Supabase in hashed form and are not
          accessible to the Provider.
        </li>
        <li>The User is responsible for safeguarding login credentials. Any activity performed via the account is deemed to be the User's activity.</li>
      </ol>

      <h2>4. Content Access and Responsibility</h2>
      <ol>
        <li>The User retains full control over their conversations and may delete individual chats or the entire account at any time.</li>
        <li>Content created by the Provider (for example system prompts) remains the intellectual property of the Provider.</li>
        <li>
          The Provider does not guarantee the accuracy, truthfulness or legal suitability of AI-generated outputs. The User
          must independently verify critical information before relying on it.
        </li>
      </ol>

      <h2>5. Prohibited Conduct</h2>
      <p>The User must not:</p>
      <ul>
        <li>use the Service for unlawful, fraudulent or harmful purposes,</li>
        <li>upload content that infringes third-party rights,</li>
        <li>attempt to compromise the security or availability of the Service,</li>
        <li>reverse-engineer or bypass safeguards (such as Supabase RLS policies),</li>
        <li>overload the Service or otherwise harm the Provider or other users.</li>
      </ul>

      <h2>6. Payments and Subscription</h2>
      <p>When paid tiers are offered:</p>
      <ol>
        <li>Payment information is processed by Stripe as an independent data controller.</li>
        <li>Users may be charged recurring fees depending on the selected plan.</li>
        <li>Failure to pay may result in suspension or termination of the Service.</li>
        <li>Subscriptions can be cancelled in the account settings or following Stripe's instructions.</li>
      </ol>

      <h2>7. Third-Party Integrations</h2>
      <p>The Provider makes the Service work by integrating with:</p>
      <ul>
        <li>Supabase (authentication, database, Storage, realtime).</li>
        <li>Google Cloud (Vertex AI, Document AI, Text-to-Speech, Speech-to-Text, Cloud Storage).</li>
        <li>Anthropic (Claude API), OpenAI (Chat Completions), Google Vertex AI Gemini.</li>
        <li>ElevenLabs (Text-to-Speech).</li>
        <li>Stripe (payments).</li>
      </ul>
      <p>Using the Service implies consent to the transfer of necessary data to these providers for the purpose of fulfilling the contract.</p>

      <h2>8. Availability and Changes</h2>
      <ol>
        <li>The Service is provided on an "as is" basis. The Provider does not guarantee uninterrupted or error-free operation.</li>
        <li>The Provider may change, temporarily limit or discontinue the Service when necessary (e.g. security, maintenance).</li>
        <li>Material changes affecting Users will be announced via in-app notifications or e-mail when available.</li>
      </ol>

      <h2>9. Termination</h2>
      <ol>
        <li>
          The User may delete their account at any time. Before final deletion the interface explains the consequences, requires
          the User to type <code>DELETE</code> and confirm the action; no confirmation e-mail is sent. Once confirmed, the Supabase
          cascade removes auth.users, profiles, chats, messages and associated Storage objects through the
          {' '}<code>supabase.auth.admin.deleteUser</code> action.
        </li>
        <li>The Provider may terminate access if the User breaches these Terms or applicable law. Whenever feasible, the User will be warned in advance.</li>
        <li>After termination all data are permanently deleted and cannot be restored once the backend deletion has completed.</li>
      </ol>

      <h2>10. Warranty and Liability</h2>
      <ol>
        <li>The Provider is not liable for direct or indirect damages resulting from use of AI outputs, loss of data or downtime.</li>
        <li>Liability is limited except in cases of intent or gross negligence by the Provider.</li>
        <li>The User is responsible for the content they submit or create and must ensure compliance with applicable law and licence terms.</li>
      </ol>

      <h2>11. Changes to the Terms</h2>
      <ol>
        <li>The Provider may update these Terms.</li>
        <li>Users will be informed about substantial updates by e-mail or in-app notice at least 14 days before they take effect.</li>
        <li>Continuing to use the Service after the effective date constitutes acceptance of the updated Terms. Users who disagree may delete their account.</li>
      </ol>

      <h2>12. Governing Law</h2>
      <ol>
        <li>These Terms are governed by the laws of the Czech Republic.</li>
        <li>Disputes will be handled by the competent courts at the Provider's seat or residence.</li>
      </ol>

      <h2>13. Contact</h2>
      <p>For questions regarding the Service or these Terms please contact <a href="mailto:contact@elenor.io">contact@elenor.io</a>.</p>

      <hr style={{margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)'}} />
      <p style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
        This document is based on the current functionality of Elora AI as observed in the project's source code on the effective date.
      </p>
    </>
  )
}

function CzechContent() {
  return (
    <>
      <p>
        Tyto podmínky upravují používání aplikace Elora AI (dále jen „Služba"), kterou provozuje Cristian Bucioaca, e-mail:
        {' '}<a href="mailto:contact@elenor.io">contact@elenor.io</a> (dále jen „Provozovatel"). Vstupem do aplikace potvrzujete, že jste se s podmínkami seznámili a souhlasíte s nimi.
      </p>

      <h2>1. Vymezení pojmů</h2>
      <ul>
        <li><strong>Uživatel</strong>: fyzická nebo právnická osoba, která si vytvořila účet nebo Službu využívá.</li>
        <li><strong>Uživatelská data</strong>: veškeré informace poskytnuté Uživatelem, zejména e-mail, heslo, obsah chatu, nahrané soubory, generované výstupy a metadata o použití.</li>
        <li><strong>Služba</strong>: webová a mobilní aplikace Elora včetně doplňkových API a integrací.</li>
        <li><strong>Poskytovatelé třetích stran</strong>: zejména Supabase, Google Cloud (Vertex AI, Document AI, Text-to-Speech, Speech-to-Text), Anthropic (Claude), OpenAI, ElevenLabs a Stripe.</li>
      </ul>

      <h2>2. Rozsah Služby</h2>
      <p>Elora poskytuje multiplatformního AI asistenta, který umožňuje:</p>
      <ul>
        <li>textovou a hlasovou konverzaci,</li>
        <li>generování, analýzu a sumarizaci obsahu,</li>
        <li>upload a zpracování souborů (text, PDF, obrázky),</li>
        <li>ukládání konverzací a příloh pro potřeby Uživatele,</li>
        <li>synchornizaci mezi zařízeními přes Supabase,</li>
        <li>volitelné předplatné a vyúčtování prostřednictvím Stripe (pokud je aktivní).</li>
      </ul>

      <h2>3. Registrace a účet</h2>
      <ol>
        <li>Uživatel je povinen při registraci zadat pravdivé a aktuální údaje.</li>
        <li>Registrace vyžaduje e-mail a heslo. Hesla jsou u Supabase ukládána zašifrovaná a Provozovatel k nim nemá přístup.</li>
        <li>Uživatel je zodpovědný za ochranu přístupových údajů. Jakákoli aktivita z účtu se považuje za aktivitu Uživatele.</li>
      </ol>

      <h2>4. Přístup k obsahu a odpovědnost</h2>
      <ol>
        <li>Uživatel má plnou kontrolu nad konverzacemi a může kdykoli smazat jednotlivé chaty nebo celý účet.</li>
        <li>Obsah vytvořený Provozovatelem (např. systémové šablony) zůstává duševním vlastnictvím Provozovatele.</li>
        <li>Provozovatel nezodpovídá za přesnost, pravdivost ani právní využitelnost výstupů generovaných umělou inteligencí. Uživatel je povinen ověřit si důležité informace před dalším použitím.</li>
      </ol>

      <h2>5. Zakázané jednání</h2>
      <p>Uživatel nesmí:</p>
      <ul>
        <li>využívat Službu k ilegálnímu, podvodnému nebo škodlivému jednání,</li>
        <li>vkládat obsah, který porušuje práva třetích osob,</li>
        <li>pokusit se o narušení bezpečnosti Služby,</li>
        <li>zpětně analyzovat nebo obcházet ochrany (např. RLS politiky Supabase),</li>
        <li>využívat Službu tak, aby docházelo k přetěžování nebo ke škodám Provozovateli či dalším uživatelům.</li>
      </ul>

      <h2>6. Platby a předplatné</h2>
      <p>Pokud Provozovatel nabízí placené tarify:</p>
      <ol>
        <li>Platební informace zpracovává Stripe jako samostatný správce údajů.</li>
        <li>Uživatelům mohou být účtovány opakované poplatky podle zvoleného plánu.</li>
        <li>Neposkytnutí platby může vést k pozastavení nebo vypovězení Služby.</li>
        <li>Předplatné lze vypovědět v nastavení účtu nebo podle instrukcí Stripe.</li>
      </ol>

      <h2>7. Spolupráce s třetími stranami</h2>
      <p>Provozovatel zajišťuje funkčnost Služby pomocí integrací s:</p>
      <ul>
        <li>Supabase (autentizace, databáze, Storage, realtime),</li>
        <li>Google Cloud (Vertex AI, Document AI, Text-to-Speech, Speech-to-Text, Cloud Storage),</li>
        <li>Anthropic (Claude API), OpenAI (Chat Completions), Google Vertex AI Gemini,</li>
        <li>ElevenLabs (Text-to-Speech),</li>
        <li>Stripe (platby).</li>
      </ul>
      <p>Použití Služby znamená souhlas s předáním nezbytných dat těmto poskytovatelům za účelem plnění smlouvy.</p>

      <h2>8. Dostupnost a změny Služby</h2>
      <ol>
        <li>Služba je poskytována ve formě „tak jak je". Provozovatel nezaručuje nepřetržitost ani bezchybnost.</li>
        <li>Provozovatel může Službu upravovat, dočasně omezit nebo ukončit, pokud je to nezbytné (např. bezpečnost, údržba).</li>
        <li>Změny, které zásadně ovlivní Uživatele, budou oznámeny prostřednictvím aplikace nebo e-mailem, pokud je kontakt dostupný.</li>
      </ol>

      <h2>9. Ukončení uživatelské smlouvy</h2>
      <ol>
        <li>
          Uživatel může kdykoli smazat účet. Před definitivním smazáním je vyzván k napsání textu <code>DELETE</code> a potvrzení akce přímo v aplikaci; není odesílán žádný e-mail. Následně backend <code>delete-account.js</code> volá <code>supabase.auth.admin.deleteUser</code> a aktivuje kaskádní odstranění profilu, chatů, zpráv i příloh.
        </li>
        <li>Provozovatel může ukončit přístup, pokud Uživatel poruší podmínky nebo zákon. Pokud je to možné, upozorní Uživatele předem.</li>
        <li>Po ukončení účtu jsou veškerá data odstraněna bez možnosti obnovy, jakmile proběhne serverová akce.</li>
      </ol>

      <h2>10. Záruka a odpovědnost</h2>
      <ol>
        <li>Provozovatel neodpovídá za přímou či nepřímou škodu vzniklou používáním výstupů AI, ztrátou dat nebo nedostupností Služby.</li>
        <li>Výjimkou je škoda způsobená úmyslně nebo hrubou nedbalostí Provozovatele.</li>
        <li>Uživatel nese odpovědnost za obsah, který do Služby vloží nebo vytvoří, a zajišťuje, že je v souladu s právem a licencemi.</li>
      </ol>

      <h2>11. Změna podmínek</h2>
      <ol>
        <li>Provozovatel je oprávněn tyto podmínky aktualizovat.</li>
        <li>O významných změnách bude Uživatel informován e-mailem nebo oznámením ve Službě nejméně 14 dní před účinností.</li>
        <li>Pokračováním v používání po účinnosti změny Uživatel souhlasí s novým zněním. Pokud nesouhlasí, může účet smazat.</li>
      </ol>

      <h2>12. Rozhodné právo</h2>
      <ol>
        <li>Právní vztahy se řídí právem České republiky.</li>
        <li>Případné spory budou řešeny před příslušným soudem podle sídla nebo bydliště Provozovatele.</li>
      </ol>

      <h2>13. Kontakt</h2>
      <p>Dotazy ke Službě nebo podmínkám lze směřovat na e-mail: <a href="mailto:contact@elenor.io">contact@elenor.io</a>.</p>

      <hr style={{margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)'}} />
      <p style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
        Tyto podmínky jsou připraveny na základě analýzy kódu projektu a odrážejí skutečné funkcionality aplikace Elora k datu účinnosti.
      </p>
    </>
  )
}

function RomanianContent() {
  return (
    <>
      <p>
        Acești Termeni reglementează utilizarea aplicației Elora AI („Serviciul"), operată de Cristian Bucioaca, e-mail:
        {' '}<a href="mailto:contact@elenor.io">contact@elenor.io</a> („Furnizorul"). Prin accesarea Serviciului confirmați că ați citit și că sunteți de acord cu acești Termeni.
      </p>

      <h2>1. Definiții</h2>
      <ul>
        <li><strong>Utilizator</strong>: orice persoană fizică sau juridică ce își creează un cont sau folosește Serviciul.</li>
        <li><strong>Conținut al Utilizatorului</strong>: toate informațiile furnizate de Utilizator, în special e-mail, parolă, istoric de chat, fișiere încărcate, rezultate generate și metadate de utilizare.</li>
        <li><strong>Serviciul</strong>: experiența web și mobilă Elora, inclusiv rutele API aferente.</li>
        <li><strong>Furnizori terți</strong>: Supabase, Google Cloud (Vertex AI, Document AI, Text-to-Speech, Speech-to-Text), Anthropic (Claude), OpenAI, ElevenLabs și Stripe.</li>
      </ul>

      <h2>2. Domeniul Serviciului</h2>
      <p>Elora oferă un asistent AI multiplatformă care le permite Utilizatorilor să:</p>
      <ul>
        <li>poarte conversații text și voce,</li>
        <li>genereze, analizeze și sumarizeze conținut,</li>
        <li>încarce și proceseze fișiere (text, PDF, imagini),</li>
        <li>stocheze chat-uri și atașamente pentru uz propriu,</li>
        <li>sincronizeze conversațiile între dispozitive prin Supabase,</li>
        <li>opțional, să se aboneze la planuri plătite procesate prin Stripe (dacă sunt activate).</li>
      </ul>

      <h2>3. Crearea și accesul la cont</h2>
      <ol>
        <li>Utilizatorul trebuie să furnizeze informații corecte și actualizate la înregistrare.</li>
        <li>Înregistrarea necesită o adresă de e-mail și parolă. Parolele sunt stocate de Supabase într-o formă criptată și nu sunt accesibile Furnizorului.</li>
        <li>Utilizatorul este responsabil pentru protejarea datelor de autentificare. Orice activitate realizată prin cont este atribuită Utilizatorului.</li>
      </ol>

      <h2>4. Accesul la conținut și responsabilitatea</h2>
      <ol>
        <li>Utilizatorul păstrează controlul complet asupra conversațiilor și poate șterge oricând chat-uri individuale sau întregul cont.</li>
        <li>Conținutul creat de Furnizor (de exemplu prompturi de sistem) rămâne proprietatea intelectuală a Furnizorului.</li>
        <li>Furnizorul nu garantează acuratețea, veridicitatea sau utilizabilitatea juridică a rezultatelor generate de AI. Utilizatorul trebuie să verifice independent informațiile critice înainte de a se baza pe ele.</li>
      </ol>

      <h2>5. Conduită interzisă</h2>
      <p>Utilizatorul nu trebuie să:</p>
      <ul>
        <li>folosească Serviciul în scopuri ilegale, frauduloase sau dăunătoare,</li>
        <li>încarce conținut care încalcă drepturile terților,</li>
        <li>încerce să compromită securitatea sau disponibilitatea Serviciului,</li>
        <li>decompileze sau să ocolească măsurile de protecție (precum politicile RLS Supabase),</li>
        <li>supraîncarce Serviciul sau să provoace prejudicii Furnizorului ori altor utilizatori.</li>
      </ul>

      <h2>6. Plăți și abonamente</h2>
      <p>În cazul în care sunt oferite planuri contra cost:</p>
      <ol>
        <li>Informațiile de plată sunt procesate de Stripe ca operator independent de date.</li>
        <li>Utilizatorii pot fi taxați periodic în funcție de planul ales.</li>
        <li>Neplata poate conduce la suspendarea sau încetarea Serviciului.</li>
        <li>Abonamentele pot fi anulate din setările contului sau urmând instrucțiunile Stripe.</li>
      </ol>

      <h2>7. Integrarea cu terți</h2>
      <p>Furnizorul asigură funcționarea Serviciului prin integrarea cu:</p>
      <ul>
        <li>Supabase (autentificare, bază de date, Storage, realtime),</li>
        <li>Google Cloud (Vertex AI, Document AI, Text-to-Speech, Speech-to-Text, Cloud Storage),</li>
        <li>Anthropic (API Claude), OpenAI (Chat Completions), Google Vertex AI Gemini,</li>
        <li>ElevenLabs (Text-to-Speech),</li>
        <li>Stripe (plăți).</li>
      </ul>
      <p>Prin utilizarea Serviciului sunteți de acord cu transferul datelor necesare către acești furnizori pentru executarea contractului.</p>

      <h2>8. Disponibilitate și modificări</h2>
      <ol>
        <li>Serviciul este furnizat „ca atare". Furnizorul nu garantează funcționarea neîntreruptă sau lipsa erorilor.</li>
        <li>Furnizorul poate modifica, limita temporar sau întrerupe Serviciul atunci când este necesar (de ex. pentru securitate, mentenanță).</li>
        <li>Modificările semnificative ce afectează Utilizatorii vor fi anunțate în aplicație sau prin e-mail, dacă este disponibil.</li>
      </ol>

      <h2>9. Încetare</h2>
      <ol>
        <li>
          Utilizatorul își poate șterge contul oricând. Înainte de ștergere, aplicația explică consecințele și solicită introducerea textului <code>DELETE</code>, urmat de confirmare direct în interfață; nu este trimis niciun e-mail. După confirmare, mecanismul Supabase elimină auth.users, profiles, chats, messages și fișierele asociate prin acțiunea <code>supabase.auth.admin.deleteUser</code>.
        </li>
        <li>Furnizorul poate suspenda accesul dacă Utilizatorul încalcă acești Termeni sau legislația aplicabilă. Dacă este posibil, Utilizatorul va fi notificat în prealabil.</li>
        <li>După încetare, toate datele sunt șterse definitiv și nu pot fi restaurate odată finalizată acțiunea backend.</li>
      </ol>

      <h2>10. Garanții și răspundere</h2>
      <ol>
        <li>Furnizorul nu răspunde pentru prejudiciile directe sau indirecte rezultate din utilizarea conținutului AI, pierderea datelor sau indisponibilitate.</li>
        <li>Răspunderea este limitată, cu excepția situațiilor de intenție sau neglijență gravă a Furnizorului.</li>
        <li>Utilizatorul este responsabil pentru conținutul introdus sau creat și trebuie să se asigure că respectă legea și licențele aplicabile.</li>
      </ol>

      <h2>11. Modificarea Termenilor</h2>
      <ol>
        <li>Furnizorul poate actualiza acești Termeni.</li>
        <li>Utilizatorii vor fi informați despre modificările importante prin e-mail sau notificare în aplicație cu cel puțin 14 zile înainte de intrarea în vigoare.</li>
        <li>Continuarea utilizării Serviciului după data intrării în vigoare constituie acceptarea noilor Termeni. Utilizatorii care nu sunt de acord își pot șterge contul.</li>
      </ol>

      <h2>12. Legea aplicabilă</h2>
      <ol>
        <li>Acești Termeni sunt guvernați de legislația României.</li>
        <li>Litigiile sunt soluționate de instanțele competente de la sediul sau domiciliul Furnizorului.</li>
      </ol>

      <h2>13. Contact</h2>
      <p>Pentru întrebări referitoare la Serviciu sau la acești Termeni, contactați <a href="mailto:contact@elenor.io">contact@elenor.io</a>.</p>

      <hr style={{margin: '48px 0', border: 'none', borderTop: '1px solid var(--color-border)'}} />
      <p style={{color: 'var(--color-text-secondary)', fontSize: '0.9rem'}}>
        Documentul se bazează pe funcționalitățile curente ale Elora AI la data intrării în vigoare.
      </p>
    </>
  )
}
