export const legalPagesTranslations = {
  en: {
    cookies: {
      title: "Cookie Policy",
      effectiveDate: "15 November 2025",
      intro: {
        p1: "This Cookie Policy explains how Elora AI (\"we\", \"us\", or \"our\") uses cookies and similar tracking technologies on our website and application.",
        p2: "By using our services, you agree to the use of cookies as described in this policy. You can manage your cookie preferences at any time through our cookie consent banner."
      },
      whatAreCookies: {
        title: "What Are Cookies?",
        p1: "Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember your preferences and provide a better user experience.",
        p2: "Cookies can be \"session cookies\" (deleted when you close your browser) or \"persistent cookies\" (stored on your device until they expire or you delete them)."
      },
      howWeUse: {
        title: "How We Use Cookies",
        p1: "We use cookies for the following purposes:",
        purposes: [
          "To remember your preferences and settings",
          "To analyze how you use our website and improve performance",
          "To provide personalized content and recommendations",
          "To measure the effectiveness of our marketing campaigns",
          "To ensure security and prevent fraud"
        ]
      },
      typesOfCookies: {
        title: "Types of Cookies We Use",
        essential: {
          title: "1. Essential Cookies (Always Active)",
          description: "These cookies are necessary for the website to function properly. They enable core functionality such as:",
          items: [
            "User authentication and login",
            "Security and fraud prevention",
            "Cookie consent preferences",
            "Language selection",
            "Session management"
          ],
          note: "These cookies cannot be disabled as they are essential for the website to work."
        },
        analytics: {
          title: "2. Analytics Cookies",
          description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use:",
          items: [
            "Google Analytics 4 with Consent Mode v2",
            "Page view tracking",
            "User behavior analysis",
            "Performance monitoring",
            "Error tracking"
          ],
          dataCollected: "Data collected includes: pages visited, time spent on pages, browser type, device type, referring website, and general location (country/city level)."
        },
        marketing: {
          title: "3. Marketing Cookies",
          description: "These cookies track your browsing activity across websites to show you relevant advertisements. They also help us:",
          items: [
            "Measure ad campaign effectiveness",
            "Deliver personalized ads",
            "Prevent showing the same ad too many times",
            "Understand which marketing channels work best"
          ],
          thirdParty: "We may use third-party advertising services that set their own cookies."
        }
      },
      thirdPartyCookies: {
        title: "Third-Party Cookies",
        description: "Some cookies are set by third-party services that appear on our pages. We use the following third-party services:",
        services: [
          {
            name: "Google Analytics",
            purpose: "Website analytics and performance monitoring",
            privacy: "https://policies.google.com/privacy"
          },
          {
            name: "Google Tag Manager",
            purpose: "Managing marketing and analytics tags",
            privacy: "https://policies.google.com/privacy"
          }
        ],
        note: "We do not control these third-party cookies. Please review their privacy policies for more information."
      },
      managingCookies: {
        title: "Managing Your Cookie Preferences",
        viaConsentBanner: {
          title: "Via Our Cookie Consent Banner",
          description: "When you first visit our website, you'll see a cookie consent banner. You can:",
          options: [
            "Accept all cookies",
            "Reject all non-essential cookies",
            "Customize your preferences by cookie category"
          ],
          changePreferences: "You can change your preferences at any time by clicking the cookie settings link in our footer or clearing your browser cookies."
        },
        viaBrowser: {
          title: "Via Your Browser Settings",
          description: "Most web browsers allow you to control cookies through their settings. You can:",
          options: [
            "Block all cookies",
            "Block third-party cookies only",
            "Delete cookies after each session",
            "Set exceptions for specific websites"
          ],
          warning: "Note: Blocking all cookies may affect your ability to use certain features of our website.",
          guides: "Browser-specific cookie management guides:",
          browserLinks: [
            { name: "Chrome", url: "https://support.google.com/chrome/answer/95647" },
            { name: "Firefox", url: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" },
            { name: "Safari", url: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" },
            { name: "Edge", url: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" }
          ]
        }
      },
      dataRetention: {
        title: "Cookie Retention Periods",
        description: "Different cookies have different retention periods:",
        periods: [
          {
            type: "Session Cookies",
            duration: "Deleted when you close your browser"
          },
          {
            type: "Persistent Cookies",
            duration: "Stored for up to 2 years (analytics) or 13 months (marketing)"
          },
          {
            type: "Cookie Consent",
            duration: "12 months (your preference is remembered for 1 year)"
          }
        ]
      },
      yourRights: {
        title: "Your Rights Under GDPR",
        description: "If you're in the EU/EEA, you have the following rights regarding cookies:",
        rights: [
          "Right to be informed about cookie usage (this policy)",
          "Right to consent before non-essential cookies are set",
          "Right to withdraw consent at any time",
          "Right to object to processing based on legitimate interests",
          "Right to lodge a complaint with a supervisory authority"
        ],
        contact: "To exercise your rights, contact us at: privacy@elenor.io"
      },
      doNotTrack: {
        title: "Do Not Track Signals",
        description: "Some browsers have a \"Do Not Track\" (DNT) feature. Currently, there is no industry standard for how websites should respond to DNT signals. We respect your privacy choices made through our cookie consent banner."
      },
      updates: {
        title: "Updates to This Policy",
        description: "We may update this Cookie Policy from time to time to reflect changes in technology, law, or our practices. When we make significant changes, we'll notify you by:",
        methods: [
          "Updating the \"Effective Date\" at the top of this policy",
          "Displaying a notice on our website",
          "Sending you an email (if you have an account)"
        ],
        recommendation: "We recommend reviewing this policy periodically to stay informed about how we use cookies."
      },
      contact: {
        title: "Questions About Cookies?",
        description: "If you have questions about our use of cookies, please contact us at:",
        email: "privacy@elenor.io",
        links: "For more information about how we protect your data, see our Privacy Policy and GDPR Compliance pages."
      }
    },

    privacy: {
      title: "Privacy Policy",
      effectiveDate: "2 November 2025",
      // Content from existing privacy.html will be used
    },

    terms: {
      title: "Terms of Service",
      effectiveDate: "2 November 2025",
      // Will be created based on existing terms.html
    },

    gdpr: {
      title: "GDPR Compliance",
      effectiveDate: "2 November 2025",
      // Will be created based on existing gdpr-compliance.html
    },

    security: {
      title: "Authentication & Security",
      effectiveDate: "2 November 2025",
      // Will be created based on existing authentication-and-security.html
    },

    usage: {
      title: "Usage Policy",
      effectiveDate: "2 November 2025",
      // Will be created
    }
  },

  cs: {
    cookies: {
      title: "Zásady cookies",
      effectiveDate: "15. listopadu 2025",
      intro: {
        p1: "Tyto Zásady cookies vysvětlují, jak Elora AI (\"my\", \"nás\" nebo \"naše\") používá soubory cookies a podobné sledovací technologie na našich webových stránkách a aplikaci.",
        p2: "Používáním našich služeb souhlasíte s použitím cookies, jak je popsáno v těchto zásadách. Své předvolby cookies můžete kdykoli spravovat prostřednictvím našeho banneru pro souhlas s cookies."
      },
      whatAreCookies: {
        title: "Co jsou cookies?",
        p1: "Cookies jsou malé textové soubory, které se ukládají do vašeho zařízení (počítač, tablet nebo mobil) při návštěvě webové stránky. Pomáhají webovým stránkám zapamatovat si vaše předvolby a poskytnout lepší uživatelský zážitek.",
        p2: "Cookies mohou být \"session cookies\" (smazány po zavření prohlížeče) nebo \"persistent cookies\" (uloženy na vašem zařízení, dokud nevyprší nebo je neodstraníte)."
      },
      howWeUse: {
        title: "Jak používáme cookies",
        p1: "Cookies používáme pro následující účely:",
        purposes: [
          "Zapamatování vašich předvoleb a nastavení",
          "Analýza způsobu používání našich webových stránek a zlepšení výkonu",
          "Poskytování personalizovaného obsahu a doporučení",
          "Měření účinnosti našich marketingových kampaní",
          "Zajištění bezpečnosti a prevence podvodů"
        ]
      },
      typesOfCookies: {
        title: "Typy cookies, které používáme",
        essential: {
          title: "1. Nezbytné cookies (vždy aktivní)",
          description: "Tyto cookies jsou nezbytné pro správné fungování webových stránek. Umožňují základní funkce jako:",
          items: [
            "Autentizace uživatele a přihlášení",
            "Bezpečnost a prevence podvodů",
            "Předvolby souhlasu s cookies",
            "Výběr jazyka",
            "Správa relace"
          ],
          note: "Tyto cookies nelze zakázat, protože jsou nezbytné pro fungování webových stránek."
        },
        analytics: {
          title: "2. Analytické cookies",
          description: "Tyto cookies nám pomáhají pochopit, jak návštěvníci interagují s našimi webovými stránkami, sbíráním a vykazováním informací anonymně. Používáme:",
          items: [
            "Google Analytics 4 s režimem souhlasu v2",
            "Sledování zobrazení stránek",
            "Analýza chování uživatelů",
            "Monitorování výkonu",
            "Sledování chyb"
          ],
          dataCollected: "Shromážděná data zahrnují: navštívené stránky, čas strávený na stránkách, typ prohlížeče, typ zařízení, odkazující webovou stránku a obecnou polohu (na úrovni země/města)."
        },
        marketing: {
          title: "3. Marketingové cookies",
          description: "Tyto cookies sledují vaši aktivitu při procházení napříč webovými stránkami a zobrazují vám relevantní reklamy. Také nám pomáhají:",
          items: [
            "Měřit účinnost reklamních kampaní",
            "Doručovat personalizované reklamy",
            "Zabránit opakovanému zobrazování stejné reklamy",
            "Pochopit, které marketingové kanály fungují nejlépe"
          ],
          thirdParty: "Můžeme používat reklamní služby třetích stran, které nastavují vlastní cookies."
        }
      },
      thirdPartyCookies: {
        title: "Cookies třetích stran",
        description: "Některé cookies jsou nastaveny službami třetích stran, které se objevují na našich stránkách. Používáme následující služby třetích stran:",
        services: [
          {
            name: "Google Analytics",
            purpose: "Analytika webových stránek a monitorování výkonu",
            privacy: "https://policies.google.com/privacy"
          },
          {
            name: "Google Tag Manager",
            purpose: "Správa marketingových a analytických tagů",
            privacy: "https://policies.google.com/privacy"
          }
        ],
        note: "Tyto cookies třetích stran nekontrolujeme. Pro více informací si prosím přečtěte jejich zásady ochrany osobních údajů."
      },
      managingCookies: {
        title: "Správa předvoleb cookies",
        viaConsentBanner: {
          title: "Prostřednictvím našeho banneru pro souhlas s cookies",
          description: "Při první návštěvě našich webových stránek uvidíte banner pro souhlas s cookies. Můžete:",
          options: [
            "Přijmout všechny cookies",
            "Odmítnout všechny nezbytné cookies",
            "Přizpůsobit své předvolby podle kategorie cookies"
          ],
          changePreferences: "Své předvolby můžete kdykoli změnit kliknutím na odkaz nastavení cookies v zápatí nebo vymazáním cookies v prohlížeči."
        },
        viaBrowser: {
          title: "Prostřednictvím nastavení prohlížeče",
          description: "Většina webových prohlížečů umožňuje ovládat cookies prostřednictvím nastavení. Můžete:",
          options: [
            "Zablokovat všechny cookies",
            "Zablokovat pouze cookies třetích stran",
            "Odstranit cookies po každé relaci",
            "Nastavit výjimky pro konkrétní webové stránky"
          ],
          warning: "Poznámka: Zablokování všech cookies může ovlivnit vaši schopnost používat některé funkce našich webových stránek.",
          guides: "Návody pro správu cookies podle prohlížeče:",
          browserLinks: [
            { name: "Chrome", url: "https://support.google.com/chrome/answer/95647" },
            { name: "Firefox", url: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" },
            { name: "Safari", url: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" },
            { name: "Edge", url: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" }
          ]
        }
      },
      dataRetention: {
        title: "Doba uchovávání cookies",
        description: "Různé cookies mají různé doby uchovávání:",
        periods: [
          {
            type: "Session Cookies",
            duration: "Smazány po zavření prohlížeče"
          },
          {
            type: "Persistent Cookies",
            duration: "Uloženy až 2 roky (analytické) nebo 13 měsíců (marketingové)"
          },
          {
            type: "Souhlas s cookies",
            duration: "12 měsíců (vaše předvolba je zapamatována na 1 rok)"
          }
        ]
      },
      yourRights: {
        title: "Vaše práva podle GDPR",
        description: "Pokud jste v EU/EEA, máte následující práva týkající se cookies:",
        rights: [
          "Právo být informován o používání cookies (tyto zásady)",
          "Právo na souhlas před nastavením nezbytných cookies",
          "Právo kdykoli odvolat souhlas",
          "Právo vznést námitku proti zpracování založenému na oprávněných zájmech",
          "Právo podat stížnost dozorč ímu orgánu"
        ],
        contact: "Pro uplatnění svých práv nás kontaktujte na: privacy@elenor.io"
      },
      doNotTrack: {
        title: "Signály Do Not Track",
        description: "Některé prohlížeče mají funkci \"Do Not Track\" (DNT). V současnosti neexistuje průmyslový standard pro to, jak by webové stránky měly reagovat na signály DNT. Respektujeme vaše volby soukromí provedené prostřednictvím našeho banneru pro souhlas s cookies."
      },
      updates: {
        title: "Aktualizace těchto zásad",
        description: "Tyto Zásady cookies můžeme čas od času aktualizovat, aby odrážely změny v technologii, zákonech nebo našich postupech. Když provedeme významné změny, upozorníme vás:",
        methods: [
          "Aktualizací \"Datum účinnosti\" v horní části těchto zásad",
          "Zobrazením oznámení na našich webových stránkách",
          "Odesláním e-mailu (pokud máte účet)"
        ],
        recommendation: "Doporučujeme pravidelně kontrolovat tyto zásady, abyste zůstali informováni o tom, jak používáme cookies."
      },
      contact: {
        title: "Máte otázky ohledně cookies?",
        description: "Pokud máte otázky ohledně našeho používání cookies, kontaktujte nás na:",
        email: "privacy@elenor.io",
        links: "Pro více informací o tom, jak chráníme vaše data, si přečtěte naše Zásady ochrany osobních údajů a stránky o souladu s GDPR."
      }
    },
    privacy: {
      title: "Zásady ochrany osobních údajů",
      effectiveDate: "2. listopadu 2025",
    },
    terms: {
      title: "Podmínky užívání",
      effectiveDate: "2. listopadu 2025",
    },
    gdpr: {
      title: "Soulad s GDPR",
      effectiveDate: "2. listopadu 2025",
    },
    security: {
      title: "Autentizace a bezpečnost",
      effectiveDate: "2. listopadu 2025",
    },
    usage: {
      title: "Popis služby",
      effectiveDate: "2. listopadu 2025",
    }
  },

  ro: {
    cookies: {
      title: "Politica de Cookie-uri",
      effectiveDate: "15 noiembrie 2025",
      intro: {
        p1: "Această Politică de Cookie-uri explică modul în care Elora AI (\"noi\", \"noastră\" sau \"ale noastre\") folosește cookie-urile și tehnologiile similare de urmărire pe site-ul nostru web și aplicație.",
        p2: "Prin utilizarea serviciilor noastre, sunteți de acord cu utilizarea cookie-urilor așa cum este descrisă în această politică. Puteți gestiona preferințele dvs. de cookie-uri oricând prin bannerul nostru de consimțământ pentru cookie-uri."
      },
      whatAreCookies: {
        title: "Ce sunt cookie-urile?",
        p1: "Cookie-urile sunt fișiere text mici care sunt stocate pe dispozitivul dvs. (computer, tabletă sau mobil) când vizitați un site web. Ele ajută site-urile web să-și amintească preferințele dvs. și să ofere o experiență mai bună pentru utilizatori.",
        p2: "Cookie-urile pot fi \"cookie-uri de sesiune\" (șterse când închideți browserul) sau \"cookie-uri persistente\" (stocate pe dispozitivul dvs. până când expiră sau le ștergeți)."
      },
      howWeUse: {
        title: "Cum folosim cookie-urile",
        p1: "Folosim cookie-uri în următoarele scopuri:",
        purposes: [
          "Pentru a reține preferințele și setările dvs.",
          "Pentru a analiza modul în care utilizați site-ul nostru web și pentru a îmbunătăți performanța",
          "Pentru a oferi conținut personalizat și recomandări",
          "Pentru a măsura eficacitatea campaniilor noastre de marketing",
          "Pentru a asigura securitatea și a preveni fraudele"
        ]
      },
      typesOfCookies: {
        title: "Tipuri de cookie-uri pe care le folosim",
        essential: {
          title: "1. Cookie-uri esențiale (întotdeauna active)",
          description: "Aceste cookie-uri sunt necesare pentru ca site-ul web să funcționeze corect. Ele permit funcționalități de bază precum:",
          items: [
            "Autentificarea utilizatorului și autentificarea",
            "Securitate și prevenirea fraudelor",
            "Preferințe de consimțământ pentru cookie-uri",
            "Selectarea limbii",
            "Gestionarea sesiunii"
          ],
          note: "Aceste cookie-uri nu pot fi dezactivate deoarece sunt esențiale pentru funcționarea site-ului web."
        },
        analytics: {
          title: "2. Cookie-uri analitice",
          description: "Aceste cookie-uri ne ajută să înțelegem modul în care vizitatorii interacționează cu site-ul nostru web prin colectarea și raportarea informațiilor în mod anonim. Folosim:",
          items: [
            "Google Analytics 4 cu Consent Mode v2",
            "Urmărirea vizualizărilor de pagină",
            "Analiza comportamentului utilizatorilor",
            "Monitorizarea performanței",
            "Urmărirea erorilor"
          ],
          dataCollected: "Datele colectate includ: paginile vizitate, timpul petrecut pe pagini, tipul de browser, tipul de dispozitiv, site-ul web de referință și locația generală (la nivel de țară/oraș)."
        },
        marketing: {
          title: "3. Cookie-uri de marketing",
          description: "Aceste cookie-uri urmăresc activitatea dvs. de navigare pe site-urile web pentru a vă arăta reclame relevante. De asemenea, ne ajută să:",
          items: [
            "Măsurăm eficacitatea campaniilor publicitare",
            "Livrăm reclame personalizate",
            "Prevenim afișarea aceleiași reclame de prea multe ori",
            "Înțelegem care canale de marketing funcționează cel mai bine"
          ],
          thirdParty: "Putem folosi servicii publicitare terțe care setează propriile cookie-uri."
        }
      },
      thirdPartyCookies: {
        title: "Cookie-uri terțe",
        description: "Unele cookie-uri sunt setate de servicii terțe care apar pe paginile noastre. Folosim următoarele servicii terțe:",
        services: [
          {
            name: "Google Analytics",
            purpose: "Analiză site web și monitorizare performanță",
            privacy: "https://policies.google.com/privacy"
          },
          {
            name: "Google Tag Manager",
            purpose: "Gestionarea etichetelor de marketing și analiză",
            privacy: "https://policies.google.com/privacy"
          }
        ],
        note: "Nu controlăm aceste cookie-uri terțe. Vă rugăm să consultați politicile lor de confidențialitate pentru mai multe informații."
      },
      managingCookies: {
        title: "Gestionarea preferințelor de cookie-uri",
        viaConsentBanner: {
          title: "Prin bannerul nostru de consimțământ pentru cookie-uri",
          description: "Când vizitați pentru prima dată site-ul nostru web, veți vedea un banner de consimțământ pentru cookie-uri. Puteți:",
          options: [
            "Accepta toate cookie-urile",
            "Respinge toate cookie-urile neesențiale",
            "Personaliza preferințele dvs. după categoria de cookie-uri"
          ],
          changePreferences: "Puteți schimba preferințele oricând făcând clic pe linkul de setări cookie-uri din subsolul paginii sau ștergând cookie-urile din browser."
        },
        viaBrowser: {
          title: "Prin setările browserului",
          description: "Majoritatea browserelor web vă permit să controlați cookie-urile prin setări. Puteți:",
          options: [
            "Bloca toate cookie-urile",
            "Bloca doar cookie-urile terțe",
            "Șterge cookie-urile după fiecare sesiune",
            "Seta excepții pentru anumite site-uri web"
          ],
          warning: "Notă: Blocarea tuturor cookie-urilor poate afecta capacitatea dvs. de a utiliza anumite funcții ale site-ului nostru web.",
          guides: "Ghiduri de gestionare a cookie-urilor pentru browsere:",
          browserLinks: [
            { name: "Chrome", url: "https://support.google.com/chrome/answer/95647" },
            { name: "Firefox", url: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" },
            { name: "Safari", url: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" },
            { name: "Edge", url: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" }
          ]
        }
      },
      dataRetention: {
        title: "Perioade de retenție a cookie-urilor",
        description: "Cookie-urile diferite au perioade de retenție diferite:",
        periods: [
          {
            type: "Cookie-uri de sesiune",
            duration: "Șterse când închideți browserul"
          },
          {
            type: "Cookie-uri persistente",
            duration: "Stocate până la 2 ani (analitice) sau 13 luni (marketing)"
          },
          {
            type: "Consimțământ cookie-uri",
            duration: "12 luni (preferința dvs. este reținută pentru 1 an)"
          }
        ]
      },
      yourRights: {
        title: "Drepturile dvs. conform GDPR",
        description: "Dacă vă aflați în UE/SEE, aveți următoarele drepturi în ceea ce privește cookie-urile:",
        rights: [
          "Dreptul de a fi informat despre utilizarea cookie-urilor (această politică)",
          "Dreptul de a consimți înainte ca cookie-urile neesențiale să fie setate",
          "Dreptul de a retrage consimțământul oricând",
          "Dreptul de a vă opune prelucrării bazate pe interese legitime",
          "Dreptul de a depune o plângere la o autoritate de supraveghere"
        ],
        contact: "Pentru a vă exercita drepturile, contactați-ne la: privacy@elenor.io"
      },
      doNotTrack: {
        title: "Semnale Do Not Track",
        description: "Unele browsere au o funcție \"Do Not Track\" (DNT). În prezent, nu există un standard industrial pentru modul în care site-urile web ar trebui să răspundă la semnalele DNT. Respectăm alegerile dvs. de confidențialitate făcute prin bannerul nostru de consimțământ pentru cookie-uri."
      },
      updates: {
        title: "Actualizări ale acestei politici",
        description: "Putem actualiza această Politică de Cookie-uri din când în când pentru a reflecta schimbările în tehnologie, legislație sau practicile noastre. Când facem schimbări semnificative, vă vom notifica prin:",
        methods: [
          "Actualizarea \"Datei de intrare în vigoare\" în partea de sus a acestei politici",
          "Afișarea unui anunț pe site-ul nostru web",
          "Trimiterea unui e-mail (dacă aveți un cont)"
        ],
        recommendation: "Vă recomandăm să revizuiți periodic această politică pentru a fi la curent cu modul în care folosim cookie-urile."
      },
      contact: {
        title: "Întrebări despre cookie-uri?",
        description: "Dacă aveți întrebări despre utilizarea cookie-urilor, vă rugăm să ne contactați la:",
        email: "privacy@elenor.io",
        links: "Pentru mai multe informații despre modul în care protejăm datele dvs., consultați Politica noastră de confidențialitate și paginile de conformitate GDPR."
      }
    },
    privacy: {
      title: "Privacy Policy",
      effectiveDate: "2 November 2025",
    },
    terms: {
      title: "Terms of Service",
      effectiveDate: "2 November 2025",
    },
    gdpr: {
      title: "GDPR Compliance",
      effectiveDate: "2 November 2025",
    },
    security: {
      title: "Authentication & Security",
      effectiveDate: "2 November 2025",
    },
    usage: {
      title: "Usage Policy",
      effectiveDate: "2 November 2025",
    }
  }
}
