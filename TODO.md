# Omnia Web - TODO List

## ✅ Hotovo

### Základní struktura
- [x] Next.js 15+ setup s App Router
- [x] TypeScript konfigurace
- [x] CSS globals a design system
- [x] Responsive design (mobile-first)

### Stránky
- [x] Hlavní stránka (/)
- [x] Features page (/features)
- [x] Help hub (/help)
- [x] Getting Started (/help/getting-started)
- [x] AI Models (/help/models)
- [x] Features docs (/help/features)
- [x] Support (/support)

### Komponenty
- [x] Header s language selectorem
- [x] TypeWriterOnView (typing animace)
- [x] ScrollReveal (scroll animace)
- [x] InstallGuide (PWA instalace iOS/Android)
- [x] Cookie Consent banner + modal

### Jazyky & Překlady
- [x] Language Context (global state)
- [x] Czech translations (hlavní stránka, help, support)
- [x] English translations (vše)
- [x] Romanian translations (vše)
- [x] Cookie consent translations (cs/en/ro)

### Privacy & GDPR
- [x] Cookie Consent banner s Consent Mode v2
- [x] 3 kategorie cookies (Essential, Analytics, Marketing)
- [x] localStorage pro preference
- [x] Google Analytics Consent Mode v2 ready

---

## 🔄 K dokončení

### Legal Pages (Privacy dokumenty)
- [ ] Privacy Policy stránka (/privacy) - překlad do češtiny
- [ ] Terms of Service (/terms)
- [ ] GDPR Compliance (/gdpr)
- [ ] Security (/security)
- [ ] Cookies Policy (/cookies)
- [ ] Usage Policy (/usage)

**Poznámka:** Máme HTML soubory s obsahem v `/omnia-clean3/public/`, potřebujeme je převést na Next.js stránky s překladem.

### Grafika & Media
- [ ] Nahradit "Image placeholders" skutečnými obrázky
- [ ] Screenshots pro InstallGuide (iOS steps 1-4, Android steps 1-4)
- [ ] Video demo nebo GIF pro "See Omnia in Action"
- [ ] Favicon a PWA ikony
- [ ] Open Graph images pro social media

### SEO & Metadata
- [ ] Meta tags pro všechny stránky
- [ ] Open Graph tags (og:title, og:description, og:image)
- [ ] Twitter Card tags
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Structured data (Schema.org)

---

## 🚀 Před Deployem

### Google Analytics
- [ ] Vytvořit GA4 property pro produkční doménu
- [ ] Získat Measurement ID (G-XXXXXXXXXX)
- [ ] Přidat do `.env.local`: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
- [ ] Otestovat tracking na produkci
- [ ] Zkontrolovat Consent Mode v2 funguje správně

### Doména & Hosting
- [ ] Nastavit doménu (např. omniaoneai.com/web nebo nova-domena.com)
- [ ] Vercel deployment
- [ ] Environment variables na Vercel:
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- [ ] SSL certifikát (automaticky přes Vercel)
- [ ] DNS konfigurace

### Testing
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile testing (iOS Safari, Android Chrome)
- [ ] Accessibility testing (WCAG 2.1)
- [ ] Performance testing (Lighthouse score)
- [ ] Cookie consent testing na všech jazycích
- [ ] Language switching testing

### Performance
- [ ] Image optimization (next/image)
- [ ] Font optimization
- [ ] Bundle size analýza
- [ ] Lazy loading pro těžké komponenty

---

## 📋 Nice to Have (Budoucnost)

### Features
- [ ] Dark mode přepínač (teď jen auto podle systému)
- [ ] Vyhledávání v Help centru
- [ ] FAQ sekce s hledáním
- [ ] Blog nebo News sekce
- [ ] Newsletter signup
- [ ] Live chat support

### Jazyky
- [ ] Přidat další jazyky (de, ru, pl - máme je v hlavní app)
- [ ] Automatická detekce jazyka podle prohlížeče

### Analytics & Marketing
- [ ] Heatmap tracking (Hotjar?)
- [ ] A/B testing setup
- [ ] Conversion tracking
- [ ] Facebook Pixel (pokud budeme používat FB reklamy)

---

## 🔗 Odkazy & Resources

### Naše projekty
- Hlavní Omnia app: `/Users/cristianbucioaca/Desktop/omnia-clean3`
- Omnia web: `/Users/cristianbucioaca/Desktop/omnia-web`

### HTML content (pro převod na Next.js)
Legal pages v češtině: `/Users/cristianbucioaca/Desktop/omnia-clean3/public/`
- `privacy-cs.html`
- `terms-cs.html`
- `gdpr-compliance-cs.html`
- `authentication-and-security-cs.html`
- `cookies.html`
- `data-processing-overview-cs.html`
- `service-overview-cs.html`

### Důležité
- Google Analytics Consent Mode v2 docs: https://developers.google.com/tag-platform/security/guides/consent
- Next.js Image Optimization: https://nextjs.org/docs/app/building-your-application/optimizing/images
- Vercel Deployment: https://vercel.com/docs

---

**Poslední update:** 15. listopadu 2025
**Status:** Development - Ready for content & deployment prep
