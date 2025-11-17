export const helpPagesTranslations = {
  en: {
    help: {
      hero: {
        title: "How can we help?",
        subtitle: "Everything you need to know about using Elora"
      },
      categories: {
        gettingStarted: {
          title: "Getting Started",
          description: "Learn the basics and start using Elora in minutes"
        },
        models: {
          title: "AI Models",
          description: "Understand Elora Flash, Core, and Think models"
        },
        features: {
          title: "Features",
          description: "Explore voice chat, images, documents, and more"
        },
        support: {
          title: "Support",
          description: "Get help, report bugs, or request features"
        }
      },
      popularTopics: {
        title: "Popular Topics",
        links: {
          createAccount: "Creating an account",
          autoModel: "Auto model selection",
          voiceChat: "Using voice chat",
          generateImages: "Generating images",
          uploadDocs: "Uploading documents",
          contactSupport: "Contact support"
        }
      },
      cta: {
        title: "Still need help?",
        subtitle: "Our support team is here for you",
        button: "Contact Support"
      }
    },
    gettingStarted: {
      hero: {
        title: "Getting Started",
        subtitle: "Start using Elora in minutes with this quick guide"
      },
      steps: {
        step1: {
          title: "1. Create Your Account",
          description: "Visit elenor.app and sign up with your email. Your account syncs across all devices automatically.",
          link: "elenor.app"
        },
        step2: {
          title: "2. Install Elora as PWA (Optional)",
          description: "For the best experience, install Elora as a Progressive Web App on your device. It works like a native app with offline support and faster performance.",
          ios: "iOS:",
          iosInstructions: "Tap Share → Add to Home Screen",
          android: "Android:",
          androidInstructions: "Tap menu → Install App"
        },
        step3: {
          title: "3. Choose Your AI Model",
          description: "Elora defaults to Auto mode, which automatically selects the best model. You can change this in Settings → AI Models if you prefer manual control.",
          recommended: "Recommended:",
          recommendedText: "Keep Auto mode enabled for optimal results"
        },
        step4: {
          title: "4. Start Chatting",
          description: "Type your message or use the microphone icon for voice input. Elora understands natural language and automatically uses the right tools based on your request."
        }
      },
      quickTips: {
        title: "Quick Tips",
        tips: [
          "Use voice chat for hands-free conversations",
          "Upload PDFs up to 100MB for document analysis",
          "Ask for images naturally: \"Show me a sunset over mountains\"",
          "Request interactive apps: \"Create a calculator\"",
          "Your conversations sync across all devices in real-time",
          "Elora works offline and syncs when you reconnect"
        ]
      },
      nextSteps: {
        title: "Next Steps",
        subtitle: "Explore more features and capabilities:",
        learnModels: "Learn About Models",
        exploreFeatures: "Explore Features"
      },
      cta: {
        title: "Need help?",
        subtitle: "Our support team is here to assist you",
        button: "Contact Support"
      }
    },
    models: {
      hero: {
        title: "AI Models",
        subtitle: "Elora uses the best AI models working together as one unified system"
      },
      auto: {
        title: "Auto Mode (Default)",
        badge: "Recommended",
        description: "Elora automatically selects the best AI model for your task. You don't need to think about it—Elora does the work. This is the smartest way to use Elora and provides the best results for any type of request."
      },
      manualSelection: {
        title: "Manual Selection",
        subtitle: "If you prefer control, choose from three optimized Elora models in Settings:"
      },
      flash: {
        title: "Elora Flash",
        tagline: "Lightning-fast responses",
        features: [
          "Perfect for quick questions and casual conversations",
          "Instant answers without waiting",
          "Great for brainstorming and rapid iteration",
          "Powered by multiple AI models working together in real-time"
        ],
        bestFor: "Best for:",
        bestForText: "Quick tasks, simple questions, everyday chat"
      },
      core: {
        title: "Elora Core",
        tagline: "Balanced intelligence and speed",
        features: [
          "Best performance for most everyday tasks",
          "Balances speed with deep understanding",
          "Handles complex requests with ease",
          "Unified AI models optimized for versatility"
        ],
        bestFor: "Best for:",
        bestForText: "General use, balanced performance, reliable results"
      },
      think: {
        title: "Elora Think",
        tagline: "Deep reasoning and analysis",
        features: [
          "Advanced problem-solving and complex tasks",
          "Best for coding, analysis, and research",
          "Deep understanding of context and nuance",
          "Premium AI models working in perfect harmony"
        ],
        bestFor: "Best for:",
        bestForText: "Complex problems, code generation, research, detailed analysis"
      },
      howToSwitch: {
        title: "How to Switch Models",
        steps: [
          "Open Elora app",
          "Go to Settings",
          "Navigate to AI Models",
          "Select your preferred mode: Auto, Flash, Core, or Think",
          "Changes apply immediately"
        ],
        tip: "Tip:",
        tipText: "We recommend keeping Auto mode enabled. Elora will automatically pick the best model for each task, giving you optimal results without thinking about it."
      },
      cta: {
        title: "Ready to experience Elora?",
        subtitle: "Try all three models and find your favorite",
        button: "Start Using Elora"
      }
    },
    features: {
      hero: {
        title: "Features Guide",
        subtitle: "Explore everything Elora can do for you"
      },
      voice: {
        title: "Voice Conversations",
        description: "Talk to Elora naturally using your voice. Real-time transcription and intelligent responses make conversations feel natural.",
        features: [
          "Click the microphone icon to start voice chat",
          "Speak naturally - Elora understands context",
          "Get instant voice responses",
          "Works in multiple languages"
        ]
      },
      images: {
        title: "Image Generation & Editing",
        description: "Create and edit images through natural conversation, powered by Google's Nano Banana (Gemini 2.5 Flash Image).",
        features: [
          "Describe what you want: \"A sunset over mountains\"",
          "Edit existing images: \"Make it more colorful\"",
          "Pixel-perfect editing capabilities",
          "Iterate until perfect through conversation"
        ]
      },
      documents: {
        title: "Document Processing",
        description: "Upload and analyze PDF documents up to 100MB. Ask questions, get summaries, extract key information.",
        features: [
          "Drag and drop PDFs directly into chat",
          "Ask questions about document contents",
          "Get summaries and key points",
          "Extract specific information"
        ]
      },
      apps: {
        title: "Interactive Applications",
        description: "Request interactive tools and Elora generates working HTML apps you can use immediately.",
        features: [
          "Ask for calculators, converters, tools",
          "Create data visualizations",
          "Build mini games",
          "Use apps directly in chat - no deployment needed"
        ]
      },
      memory: {
        title: "Intelligent Memory",
        description: "Elora remembers your conversations and builds context over time with automatic organization.",
        features: [
          "Background agents organize conversations",
          "Automatic summaries after extended chats",
          "Context carries across conversations",
          "Never repeat yourself"
        ]
      },
      sync: {
        title: "Real-Time Sync",
        description: "Your conversations sync instantly across all devices. Start on phone, continue on laptop.",
        features: [
          "Automatic sync across devices",
          "Real-time updates",
          "Works offline, syncs when reconnected",
          "No manual intervention needed"
        ]
      },
      search: {
        title: "Web Search",
        description: "Ask about current events and latest information. Elora automatically searches the web when needed.",
        features: [
          "No button clicking - just ask naturally",
          "Up-to-date information from the web",
          "Synthesized answers from multiple sources",
          "Automatic source attribution"
        ]
      },
      privacy: {
        title: "Privacy & Security",
        description: "Your data stays private and secure. Full control over what gets saved and shared.",
        features: [
          "Encrypted conversations",
          "No data selling or tracking",
          "You own your information",
          "GDPR compliant"
        ]
      },
      cta: {
        title: "Start exploring Elora",
        subtitle: "Try all features with your free account",
        button: "Get Started"
      }
    },
    support: {
      hero: {
        title: "Support",
        subtitle: "We're here to help you get the most out of Elora"
      },
      contact: {
        title: "Contact Us",
        description: "Have a question or need assistance? Reach out to our support team and we'll get back to you within 24 hours.",
        email: "Email:",
        emailAddress: "support@elenor.io"
      },
      bugs: {
        title: "Report a Bug",
        description: "Found something that's not working right? Let us know so we can fix it quickly.",
        steps: [
          "Describe what happened",
          "Include what you expected to happen",
          "Tell us which device and browser you're using",
          "Share any error messages you saw"
        ],
        email: "Send bug reports to",
        emailAddress: "support@elenor.io"
      },
      features: {
        title: "Request a Feature",
        description: "Have an idea to make Elora better? We'd love to hear it. Your feedback shapes our roadmap.",
        steps: [
          "Describe the feature you'd like to see",
          "Explain how it would help you",
          "Share any examples from other apps"
        ],
        email: "Send feature requests to",
        emailAddress: "feedback@elenor.io"
      },
      faq: {
        title: "Frequently Asked Questions",
        questions: [
          {
            question: "How do I reset my password?",
            answer: "Go to Settings, then Account, and select \"Change Password\". You'll receive a verification email to confirm the change."
          },
          {
            question: "Why aren't my conversations syncing?",
            answer: "Make sure you're logged in on both devices and connected to the internet. Sync happens automatically in the background. If issues persist, try logging out and back in."
          },
          {
            question: "Can I use Elora offline?",
            answer: "Yes! Install Elora as a PWA on your device. Your conversations are saved locally and will sync when you reconnect to the internet."
          },
          {
            question: "How do I delete my account?",
            answer: "Go to Settings, then Account, scroll to the bottom and select \"Delete Account\". This action is permanent and cannot be undone."
          },
          {
            question: "What file types can I upload?",
            answer: "Elora supports PDF documents up to 100MB, images (PNG, JPG, WebP), and text files. More formats coming soon!"
          },
          {
            question: "Is my data private and secure?",
            answer: "Absolutely. Your conversations are encrypted, and we never sell your data. Read our Privacy Policy for full details.",
            privacyLink: "Privacy Policy"
          }
        ]
      },
      stillNeedHelp: {
        title: "Still need help?",
        subtitle: "Check out our comprehensive help documentation:",
        gettingStarted: "Getting Started",
        featuresGuide: "Features Guide",
        aiModels: "AI Models"
      },
      communityCta: {
        title: "Join our community",
        subtitle: "Connect with other Elora users and stay updated",
        button: "Start Using Elora"
      }
    }
  },
  cs: {
    help: {
      hero: {
        title: "Jak vám můžeme pomoci?",
        subtitle: "Vše, co potřebujete vědět o používání Elora"
      },
      categories: {
        gettingStarted: {
          title: "Začínáme",
          description: "Naučte se základy a začněte používat Elora během několika minut"
        },
        models: {
          title: "AI Modely",
          description: "Porozumějte modelům Elora Flash, Core a Think"
        },
        features: {
          title: "Funkce",
          description: "Prozkoumejte hlasový chat, obrázky, dokumenty a další"
        },
        support: {
          title: "Podpora",
          description: "Získejte pomoc, nahlaste chyby nebo požádejte o funkce"
        }
      },
      popularTopics: {
        title: "Populární témata",
        links: {
          createAccount: "Vytvoření účtu",
          autoModel: "Automatický výběr modelu",
          voiceChat: "Používání hlasového chatu",
          generateImages: "Generování obrázků",
          uploadDocs: "Nahrávání dokumentů",
          contactSupport: "Kontaktovat podporu"
        }
      },
      cta: {
        title: "Stále potřebujete pomoc?",
        subtitle: "Náš tým podpory je tu pro vás",
        button: "Kontaktovat podporu"
      }
    },
    gettingStarted: {
      hero: {
        title: "Začínáme",
        subtitle: "Začněte používat Elora během několika minut s tímto rychlým průvodcem"
      },
      steps: {
        step1: {
          title: "1. Vytvořte si účet",
          description: "Navštivte elenor.app a zaregistrujte se pomocí e-mailu. Váš účet se automaticky synchronizuje na všech zařízeních.",
          link: "elenor.app"
        },
        step2: {
          title: "2. Nainstalujte Elora jako PWA (volitelné)",
          description: "Pro nejlepší zážitek nainstalujte Elora jako Progressive Web App na své zařízení. Funguje jako nativní aplikace s offline podporou a rychlejším výkonem.",
          ios: "iOS:",
          iosInstructions: "Klepněte na Sdílet → Přidat na plochu",
          android: "Android:",
          androidInstructions: "Klepněte na menu → Instalovat aplikaci"
        },
        step3: {
          title: "3. Vyberte si AI model",
          description: "Elora je standardně nastavena na automatický režim, který automaticky vybírá nejlepší model. Můžete to změnit v Nastavení → AI Modely, pokud upřednostňujete ruční ovládání.",
          recommended: "Doporučeno:",
          recommendedText: "Ponechte automatický režim zapnutý pro optimální výsledky"
        },
        step4: {
          title: "4. Začněte chatovat",
          description: "Napište zprávu nebo použijte ikonu mikrofonu pro hlasový vstup. Elora rozumí přirozenému jazyku a automaticky používá správné nástroje podle vašeho požadavku."
        }
      },
      quickTips: {
        title: "Rychlé tipy",
        tips: [
          "Používejte hlasový chat pro konverzace bez použití rukou",
          "Nahrajte PDF až do 100MB pro analýzu dokumentů",
          "Žádejte o obrázky přirozeně: \"Ukaž mi západ slunce nad horami\"",
          "Požádejte o interaktivní aplikace: \"Vytvoř kalkulačku\"",
          "Vaše konverzace se synchronizují v reálném čase na všech zařízeních",
          "Elora funguje offline a synchronizuje se po opětovném připojení"
        ]
      },
      nextSteps: {
        title: "Další kroky",
        subtitle: "Prozkoumejte další funkce a možnosti:",
        learnModels: "Zjistit o modelech",
        exploreFeatures: "Prozkoumat funkce"
      },
      cta: {
        title: "Potřebujete pomoc?",
        subtitle: "Náš tým podpory je tu, aby vám pomohl",
        button: "Kontaktovat podporu"
      }
    },
    models: {
      hero: {
        title: "AI Modely",
        subtitle: "Elora používá nejlepší AI modely spolupracující jako jeden jednotný systém"
      },
      auto: {
        title: "Automatický režim (výchozí)",
        badge: "Doporučeno",
        description: "Elora automaticky vybírá nejlepší AI model pro váš úkol. Nemusíte o tom přemýšlet—Elora dělá práci. Toto je nejchytřejší způsob použití Elora a poskytuje nejlepší výsledky pro jakýkoli typ požadavku."
      },
      manualSelection: {
        title: "Ruční výběr",
        subtitle: "Pokud preferujete kontrolu, vyberte si ze tří optimalizovaných modelů Elora v Nastavení:"
      },
      flash: {
        title: "Elora Flash",
        tagline: "Bleskově rychlé odpovědi",
        features: [
          "Ideální pro rychlé otázky a neformální konverzace",
          "Okamžité odpovědi bez čekání",
          "Skvělé pro brainstorming a rychlou iteraci",
          "Poháněno více AI modely pracujícími společně v reálném čase"
        ],
        bestFor: "Nejlepší pro:",
        bestForText: "Rychlé úkoly, jednoduché otázky, každodenní chat"
      },
      core: {
        title: "Elora Core",
        tagline: "Vyvážená inteligence a rychlost",
        features: [
          "Nejlepší výkon pro většinu každodenních úkolů",
          "Vyvažuje rychlost s hlubokým porozuměním",
          "Zvládá složité požadavky snadno",
          "Sjednocené AI modely optimalizované pro univerzálnost"
        ],
        bestFor: "Nejlepší pro:",
        bestForText: "Obecné použití, vyvážený výkon, spolehlivé výsledky"
      },
      think: {
        title: "Elora Think",
        tagline: "Hluboké uvažování a analýza",
        features: [
          "Pokročilé řešení problémů a složité úkoly",
          "Nejlepší pro kódování, analýzu a výzkum",
          "Hluboké porozumění kontextu a nuancí",
          "Prémiové AI modely pracující v dokonalé harmonii"
        ],
        bestFor: "Nejlepší pro:",
        bestForText: "Složité problémy, generování kódu, výzkum, podrobná analýza"
      },
      howToSwitch: {
        title: "Jak přepínat modely",
        steps: [
          "Otevřete aplikaci Elora",
          "Přejděte do Nastavení",
          "Přejděte na AI Modely",
          "Vyberte preferovaný režim: Auto, Flash, Core nebo Think",
          "Změny se použijí okamžitě"
        ],
        tip: "Tip:",
        tipText: "Doporučujeme ponechat automatický režim zapnutý. Elora automaticky vybere nejlepší model pro každý úkol, což vám poskytne optimální výsledky bez přemýšlení o tom."
      },
      cta: {
        title: "Připraveni vyzkoušet Elora?",
        subtitle: "Vyzkoušejte všechny tři modely a najděte svého favorita",
        button: "Začít používat Elora"
      }
    },
    features: {
      hero: {
        title: "Průvodce funkcemi",
        subtitle: "Prozkoumejte vše, co pro vás Elora může udělat"
      },
      voice: {
        title: "Hlasové konverzace",
        description: "Mluvte s Elora přirozeně pomocí svého hlasu. Přepis v reálném čase a inteligentní odpovědi činí konverzace přirozenými.",
        features: [
          "Klikněte na ikonu mikrofonu pro zahájení hlasového chatu",
          "Mluvte přirozeně - Elora rozumí kontextu",
          "Získejte okamžité hlasové odpovědi",
          "Funguje ve více jazycích"
        ]
      },
      images: {
        title: "Generování a úprava obrázků",
        description: "Vytvářejte a upravujte obrázky přirozenou konverzací, poháněno Google Nano Banana (Gemini 2.5 Flash Image).",
        features: [
          "Popište, co chcete: \"Západ slunce nad horami\"",
          "Upravte stávající obrázky: \"Udělej to barevnější\"",
          "Možnosti úprav s pixelovou přesností",
          "Iterujte až do dokonalosti prostřednictvím konverzace"
        ]
      },
      documents: {
        title: "Zpracování dokumentů",
        description: "Nahrajte a analyzujte PDF dokumenty až do 100MB. Ptejte se, získejte shrnutí, extrahujte klíčové informace.",
        features: [
          "Přetáhněte PDF přímo do chatu",
          "Ptejte se na obsah dokumentů",
          "Získejte shrnutí a klíčové body",
          "Extrahujte specifické informace"
        ]
      },
      apps: {
        title: "Interaktivní aplikace",
        description: "Požádejte o interaktivní nástroje a Elora vygeneruje funkční HTML aplikace, které můžete okamžitě používat.",
        features: [
          "Požádejte o kalkulačky, převodníky, nástroje",
          "Vytvářejte vizualizace dat",
          "Stavějte mini hry",
          "Používejte aplikace přímo v chatu - není potřeba nasazení"
        ]
      },
      memory: {
        title: "Inteligentní paměť",
        description: "Elora si pamatuje vaše konverzace a buduje kontext v čase s automatickou organizací.",
        features: [
          "Agenti na pozadí organizují konverzace",
          "Automatická shrnutí po delších chatech",
          "Kontext přetrvává napříč konverzacemi",
          "Nikdy se neopakujte"
        ]
      },
      sync: {
        title: "Synchronizace v reálném čase",
        description: "Vaše konverzace se okamžitě synchronizují na všech zařízeních. Začněte na telefonu, pokračujte na notebooku.",
        features: [
          "Automatická synchronizace napříč zařízeními",
          "Aktualizace v reálném čase",
          "Funguje offline, synchronizuje se po opětovném připojení",
          "Není potřeba ruční zásah"
        ]
      },
      search: {
        title: "Webové vyhledávání",
        description: "Ptejte se na aktuální události a nejnovější informace. Elora automaticky vyhledává na webu, když je to potřeba.",
        features: [
          "Bez klikání na tlačítka - jen se přirozeně ptejte",
          "Aktuální informace z webu",
          "Syntetizované odpovědi z více zdrojů",
          "Automatická atribuce zdrojů"
        ]
      },
      privacy: {
        title: "Soukromí a zabezpečení",
        description: "Vaše data zůstávají soukromá a bezpečná. Plná kontrola nad tím, co se ukládá a sdílí.",
        features: [
          "Šifrované konverzace",
          "Žádný prodej nebo sledování dat",
          "Vlastníte své informace",
          "Kompatibilní s GDPR"
        ]
      },
      cta: {
        title: "Začněte prozkoumávat Elora",
        subtitle: "Vyzkoušejte všechny funkce s vaším bezplatným účtem",
        button: "Začít"
      }
    },
    support: {
      hero: {
        title: "Podpora",
        subtitle: "Jsme tu, abychom vám pomohli vytěžit z Elora maximum"
      },
      contact: {
        title: "Kontaktujte nás",
        description: "Máte otázku nebo potřebujete pomoc? Obraťte se na náš tým podpory a ozveme se vám do 24 hodin.",
        email: "E-mail:",
        emailAddress: "support@elenor.io"
      },
      bugs: {
        title: "Nahlásit chybu",
        description: "Našli jste něco, co nefunguje správně? Dejte nám vědět, abychom to mohli rychle opravit.",
        steps: [
          "Popište, co se stalo",
          "Uveďte, co jste očekávali",
          "Řekněte nám, jaké zařízení a prohlížeč používáte",
          "Sdílejte jakékoli chybové zprávy, které jste viděli"
        ],
        email: "Posílejte hlášení chyb na",
        emailAddress: "support@elenor.io"
      },
      features: {
        title: "Požádat o funkci",
        description: "Máte nápad, jak udělat Elora lepší? Rádi to uslyšíme. Vaše zpětná vazba formuje naši roadmapu.",
        steps: [
          "Popište funkci, kterou byste chtěli vidět",
          "Vysvětlete, jak by vám to pomohlo",
          "Sdílejte jakékoli příklady z jiných aplikací"
        ],
        email: "Posílejte žádosti o funkce na",
        emailAddress: "feedback@elenor.io"
      },
      faq: {
        title: "Často kladené otázky",
        questions: [
          {
            question: "Jak resetuji heslo?",
            answer: "Přejděte do Nastavení, poté Účet a vyberte \"Změnit heslo\". Obdržíte ověřovací e-mail pro potvrzení změny."
          },
          {
            question: "Proč se moje konverzace nesynchronizují?",
            answer: "Ujistěte se, že jste přihlášeni na obou zařízeních a připojeni k internetu. Synchronizace probíhá automaticky na pozadí. Pokud problémy přetrvávají, zkuste se odhlásit a znovu přihlásit."
          },
          {
            question: "Mohu používat Elora offline?",
            answer: "Ano! Nainstalujte Elora jako PWA na své zařízení. Vaše konverzace jsou uloženy lokálně a synchronizují se po opětovném připojení k internetu."
          },
          {
            question: "Jak smažu svůj účet?",
            answer: "Přejděte do Nastavení, poté Účet, sjeďte dolů a vyberte \"Smazat účet\". Tato akce je trvalá a nelze ji vrátit zpět."
          },
          {
            question: "Jaké typy souborů mohu nahrát?",
            answer: "Elora podporuje PDF dokumenty až do 100MB, obrázky (PNG, JPG, WebP) a textové soubory. Další formáty již brzy!"
          },
          {
            question: "Jsou moje data soukromá a bezpečná?",
            answer: "Absolutně. Vaše konverzace jsou šifrované a nikdy neprodáváme vaše data. Přečtěte si naše Zásady ochrany osobních údajů pro úplné podrobnosti.",
            privacyLink: "Zásady ochrany osobních údajů"
          }
        ]
      },
      stillNeedHelp: {
        title: "Stále potřebujete pomoc?",
        subtitle: "Podívejte se na naši komplexní nápovědu:",
        gettingStarted: "Začínáme",
        featuresGuide: "Průvodce funkcemi",
        aiModels: "AI Modely"
      },
      communityCta: {
        title: "Připojte se k naší komunitě",
        subtitle: "Spojte se s ostatními uživateli Elora a zůstaňte informováni",
        button: "Začít používat Elora"
      }
    }
  },
  ro: {
    help: {
      hero: {
        title: "Cum te putem ajuta?",
        subtitle: "Tot ce trebuie să știi despre folosirea Elora"
      },
      categories: {
        gettingStarted: {
          title: "Primii pași",
          description: "Învață bazele și începe să folosești Elora în câteva minute"
        },
        models: {
          title: "Modele AI",
          description: "Înțelege modelele Elora Flash, Core și Think"
        },
        features: {
          title: "Funcții",
          description: "Explorează chat vocal, imagini, documente și multe altele"
        },
        support: {
          title: "Suport",
          description: "Obține ajutor, raportează bug-uri sau cere funcții noi"
        }
      },
      popularTopics: {
        title: "Subiecte populare",
        links: {
          createAccount: "Crearea unui cont",
          autoModel: "Selecția automată a modelului",
          voiceChat: "Folosirea chat-ului vocal",
          generateImages: "Generarea imaginilor",
          uploadDocs: "Încărcarea documentelor",
          contactSupport: "Contactează suportul"
        }
      },
      cta: {
        title: "Mai ai nevoie de ajutor?",
        subtitle: "Echipa noastră de suport este aici pentru tine",
        button: "Contactează suportul"
      }
    },
    gettingStarted: {
      hero: {
        title: "Primii pași",
        subtitle: "Începe să folosești Elora în câteva minute cu acest ghid rapid"
      },
      steps: {
        step1: {
          title: "1. Creează-ți contul",
          description: "Vizitează elenor.app și înregistrează-te cu e-mailul tău. Contul tău se sincronizează automat pe toate dispozitivele.",
          link: "elenor.app"
        },
        step2: {
          title: "2. Instalează Elora ca PWA (opțional)",
          description: "Pentru cea mai bună experiență, instalează Elora ca Progressive Web App pe dispozitivul tău. Funcționează ca o aplicație nativă cu suport offline și performanță mai rapidă.",
          ios: "iOS:",
          iosInstructions: "Apasă Share → Add to Home Screen",
          android: "Android:",
          androidInstructions: "Apasă meniu → Install App"
        },
        step3: {
          title: "3. Alege modelul AI",
          description: "Elora folosește implicit modul Auto, care selectează automat cel mai bun model. Poți schimba acest lucru în Setări → Modele AI dacă preferi controlul manual.",
          recommended: "Recomandat:",
          recommendedText: "Păstrează modul Auto activat pentru rezultate optime"
        },
        step4: {
          title: "4. Începe să conversezi",
          description: "Tastează mesajul sau folosește iconul de microfon pentru intrare vocală. Elora înțelege limbajul natural și folosește automat instrumentele potrivite în funcție de cererea ta."
        }
      },
      quickTips: {
        title: "Sfaturi rapide",
        tips: [
          "Folosește chat-ul vocal pentru conversații fără mâini",
          "Încarcă PDF-uri până la 100MB pentru analiza documentelor",
          "Cere imagini natural: \"Arată-mi un apus peste munți\"",
          "Solicită aplicații interactive: \"Creează un calculator\"",
          "Conversațiile tale se sincronizează pe toate dispozitivele în timp real",
          "Elora funcționează offline și se sincronizează când te reconectezi"
        ]
      },
      nextSteps: {
        title: "Pașii următori",
        subtitle: "Explorează mai multe funcții și capabilități:",
        learnModels: "Învață despre modele",
        exploreFeatures: "Explorează funcțiile"
      },
      cta: {
        title: "Ai nevoie de ajutor?",
        subtitle: "Echipa noastră de suport este aici să te asiste",
        button: "Contactează suportul"
      }
    },
    models: {
      hero: {
        title: "Modele AI",
        subtitle: "Elora folosește cele mai bune modele AI care lucrează împreună ca un sistem unificat"
      },
      auto: {
        title: "Modul Auto (implicit)",
        badge: "Recomandat",
        description: "Elora selectează automat cel mai bun model AI pentru sarcina ta. Nu trebuie să te gândești la asta—Elora face munca. Acesta este cel mai inteligent mod de a folosi Elora și oferă cele mai bune rezultate pentru orice tip de cerere."
      },
      manualSelection: {
        title: "Selecție manuală",
        subtitle: "Dacă preferi controlul, alege din trei modele Elora optimizate în Setări:"
      },
      flash: {
        title: "Elora Flash",
        tagline: "Răspunsuri fulgerătoare",
        features: [
          "Perfect pentru întrebări rapide și conversații casual",
          "Răspunsuri instantanee fără așteptare",
          "Excelent pentru brainstorming și iterare rapidă",
          "Alimentat de multiple modele AI care lucrează împreună în timp real"
        ],
        bestFor: "Ideal pentru:",
        bestForText: "Sarcini rapide, întrebări simple, chat zilnic"
      },
      core: {
        title: "Elora Core",
        tagline: "Inteligență și viteză echilibrate",
        features: [
          "Cea mai bună performanță pentru majoritatea sarcinilor zilnice",
          "Echilibrează viteza cu înțelegerea profundă",
          "Gestionează cereri complexe cu ușurință",
          "Modele AI unificate optimizate pentru versatilitate"
        ],
        bestFor: "Ideal pentru:",
        bestForText: "Uz general, performanță echilibrată, rezultate fiabile"
      },
      think: {
        title: "Elora Think",
        tagline: "Raționament și analiză profundă",
        features: [
          "Rezolvarea problemelor avansate și sarcini complexe",
          "Cel mai bun pentru programare, analiză și cercetare",
          "Înțelegere profundă a contextului și nuanțelor",
          "Modele AI premium care lucrează în armonie perfectă"
        ],
        bestFor: "Ideal pentru:",
        bestForText: "Probleme complexe, generare de cod, cercetare, analiză detaliată"
      },
      howToSwitch: {
        title: "Cum să schimbi modelele",
        steps: [
          "Deschide aplicația Elora",
          "Mergi la Setări",
          "Navighează la Modele AI",
          "Selectează modul preferat: Auto, Flash, Core sau Think",
          "Modificările se aplică imediat"
        ],
        tip: "Sfat:",
        tipText: "Recomandăm să păstrezi modul Auto activat. Elora va alege automat cel mai bun model pentru fiecare sarcină, oferindu-ți rezultate optime fără să te gândești la asta."
      },
      cta: {
        title: "Gata să experimentezi Elora?",
        subtitle: "Încearcă toate cele trei modele și găsește-ți favoritul",
        button: "Începe să folosești Elora"
      }
    },
    features: {
      hero: {
        title: "Ghid de funcții",
        subtitle: "Explorează tot ce poate face Elora pentru tine"
      },
      voice: {
        title: "Conversații vocale",
        description: "Vorbește cu Elora natural folosind vocea ta. Transcrierea în timp real și răspunsurile inteligente fac conversațiile să pară naturale.",
        features: [
          "Apasă iconul de microfon pentru a începe chat-ul vocal",
          "Vorbește natural - Elora înțelege contextul",
          "Primește răspunsuri vocale instantanee",
          "Funcționează în mai multe limbi"
        ]
      },
      images: {
        title: "Generare și editare imagini",
        description: "Creează și editează imagini prin conversație naturală, alimentat de Google Nano Banana (Gemini 2.5 Flash Image).",
        features: [
          "Descrie ce vrei: \"Un apus peste munți\"",
          "Editează imagini existente: \"Fă-l mai colorat\"",
          "Capabilități de editare pixel-perfect",
          "Iterează până la perfecțiune prin conversație"
        ]
      },
      documents: {
        title: "Procesarea documentelor",
        description: "Încarcă și analizează documente PDF până la 100MB. Pune întrebări, obține rezumate, extrage informații cheie.",
        features: [
          "Trage și plasează PDF-uri direct în chat",
          "Pune întrebări despre conținutul documentelor",
          "Obține rezumate și puncte cheie",
          "Extrage informații specifice"
        ]
      },
      apps: {
        title: "Aplicații interactive",
        description: "Solicită instrumente interactive și Elora generează aplicații HTML funcționale pe care le poți folosi imediat.",
        features: [
          "Cere calculatoare, convertoare, instrumente",
          "Creează vizualizări de date",
          "Construiește mini-jocuri",
          "Folosește aplicații direct în chat - nu este nevoie de deployment"
        ]
      },
      memory: {
        title: "Memorie inteligentă",
        description: "Elora își amintește conversațiile tale și construiește context în timp cu organizare automată.",
        features: [
          "Agenți în fundal organizează conversațiile",
          "Rezumate automate după chat-uri extinse",
          "Contextul persistă între conversații",
          "Nu te mai repeta niciodată"
        ]
      },
      sync: {
        title: "Sincronizare în timp real",
        description: "Conversațiile tale se sincronizează instant pe toate dispozitivele. Începe pe telefon, continuă pe laptop.",
        features: [
          "Sincronizare automată între dispozitive",
          "Actualizări în timp real",
          "Funcționează offline, se sincronizează la reconectare",
          "Nu este necesară intervenție manuală"
        ]
      },
      search: {
        title: "Căutare web",
        description: "Întreabă despre evenimente curente și informații recente. Elora caută automat pe web când este necesar.",
        features: [
          "Fără clicuri pe butoane - doar întreabă natural",
          "Informații actualizate de pe web",
          "Răspunsuri sintetizate din mai multe surse",
          "Atribuire automată a surselor"
        ]
      },
      privacy: {
        title: "Confidențialitate și securitate",
        description: "Datele tale rămân private și securizate. Control complet asupra a ceea ce se salvează și se partajează.",
        features: [
          "Conversații criptate",
          "Fără vânzare sau urmărire a datelor",
          "Tu deții informațiile tale",
          "Conform GDPR"
        ]
      },
      cta: {
        title: "Începe să explorezi Elora",
        subtitle: "Încearcă toate funcțiile cu contul tău gratuit",
        button: "Începe"
      }
    },
    support: {
      hero: {
        title: "Suport",
        subtitle: "Suntem aici să te ajutăm să profiți la maximum de Elora"
      },
      contact: {
        title: "Contactează-ne",
        description: "Ai o întrebare sau ai nevoie de asistență? Contactează echipa noastră de suport și îți vom răspunde în 24 de ore.",
        email: "E-mail:",
        emailAddress: "support@elenor.io"
      },
      bugs: {
        title: "Raportează un bug",
        description: "Ai găsit ceva care nu funcționează corect? Anunță-ne ca să putem repara rapid.",
        steps: [
          "Descrie ce s-a întâmplat",
          "Include ce te-ai așteptat să se întâmple",
          "Spune-ne ce dispozitiv și browser folosești",
          "Partajează orice mesaje de eroare pe care le-ai văzut"
        ],
        email: "Trimite rapoarte de bug-uri la",
        emailAddress: "support@elenor.io"
      },
      features: {
        title: "Solicită o funcție",
        description: "Ai o idee pentru a face Elora mai bun? Ne-ar plăcea să auzim. Feedback-ul tău ne modelează roadmap-ul.",
        steps: [
          "Descrie funcția pe care ai vrea să o vezi",
          "Explică cum te-ar ajuta",
          "Partajează orice exemple din alte aplicații"
        ],
        email: "Trimite solicitări de funcții la",
        emailAddress: "feedback@elenor.io"
      },
      faq: {
        title: "Întrebări frecvente",
        questions: [
          {
            question: "Cum îmi resetez parola?",
            answer: "Mergi la Setări, apoi Cont, și selectează \"Schimbă parola\". Vei primi un e-mail de verificare pentru a confirma modificarea."
          },
          {
            question: "De ce nu se sincronizează conversațiile mele?",
            answer: "Asigură-te că ești autentificat pe ambele dispozitive și conectat la internet. Sincronizarea se întâmplă automat în fundal. Dacă problemele persistă, încearcă să te deconectezi și să te reconectezi."
          },
          {
            question: "Pot folosi Elora offline?",
            answer: "Da! Instalează Elora ca PWA pe dispozitivul tău. Conversațiile tale sunt salvate local și se vor sincroniza când te reconectezi la internet."
          },
          {
            question: "Cum îmi șterg contul?",
            answer: "Mergi la Setări, apoi Cont, derulează în jos și selectează \"Șterge contul\". Această acțiune este permanentă și nu poate fi anulată."
          },
          {
            question: "Ce tipuri de fișiere pot încărca?",
            answer: "Elora suportă documente PDF până la 100MB, imagini (PNG, JPG, WebP) și fișiere text. Mai multe formate în curând!"
          },
          {
            question: "Sunt datele mele private și securizate?",
            answer: "Absolut. Conversațiile tale sunt criptate și nu vindem niciodată datele tale. Citește Politica noastră de confidențialitate pentru detalii complete.",
            privacyLink: "Politica de confidențialitate"
          }
        ]
      },
      stillNeedHelp: {
        title: "Mai ai nevoie de ajutor?",
        subtitle: "Consultă documentația noastră completă de ajutor:",
        gettingStarted: "Primii pași",
        featuresGuide: "Ghid de funcții",
        aiModels: "Modele AI"
      },
      communityCta: {
        title: "Alătură-te comunității noastre",
        subtitle: "Conectează-te cu alți utilizatori Elora și rămâi la curent",
        button: "Începe să folosești Elora"
      }
    }
  }
}
