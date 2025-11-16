# 🚀 Elenor AI Platform - Official Website

Professional marketing website for the Elenor AI Platform, showcasing Elora AI and enterprise solutions. Built with Next.js 16, React 19, and Turbopack.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- 🌍 **Multilingual Support** - English, Czech (cs), Romanian (ro)
- 🤖 **AI Platform Showcase** - Highlighting Elora AI, Agents, and API offerings
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- 🎨 **Modern UI/UX** - Clean design with orange accent branding
- 📄 **Complete Legal Documentation** - Terms, Privacy, GDPR, Security, Usage, Cookies
- 🍪 **Cookie Consent** - GDPR-compliant with Google Analytics Consent Mode v2
- 🎯 **SEO Optimized** - Semantic HTML, metadata, and sitemaps
- ⚡ **Lightning Fast** - Built with Turbopack for optimal performance
- 🔗 **Rich Content** - Interactive features, scroll animations, typewriter effects

## 🚀 Tech Stack

- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: CSS Modules with custom properties
- **Build Tool**: Turbopack
- **Analytics**: Google Analytics 4 with Consent Mode v2
- **Deployment**: Vercel-ready

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Crscristi28/elenor-web.git

# Navigate to project directory
cd elenor-web

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

## 🌐 Pages

### Main Pages
- **/** - Homepage showcasing the Elenor AI Platform
- **/features** - Detailed features overview of Elora AI capabilities
- **/help** - Help center with getting started guides
  - **/help/getting-started** - Quick start guide
  - **/help/models** - AI models documentation (Auto, Flash, Core, Think)
  - **/help/features** - Features documentation
- **/support** - Support and contact information

### Legal Documentation
- **/terms** - Terms of Service
- **/privacy** - Privacy Policy (EN/CS/RO)
- **/gdpr** - GDPR Compliance
- **/security** - Authentication & Security
- **/usage** - Usage Policy
- **/cookies** - Cookie Policy

All pages support multilingual switching between English, Czech, and Romanian.

## 🎨 Customization

### Environment Variables

Create a `.env.local` file based on `.env.local.example`:

```env
# Google Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Language Support

Languages are managed through the `LanguageContext` in `/contexts/LanguageContext.tsx`.

Translations are located in `/translations/`:
- `main-page.ts` - Homepage translations
- `legal-pages.ts` - Legal documentation translations
- `help-pages.ts` - Help center translations
- `cookie-consent.ts` - Cookie banner translations

### Branding

The platform uses:
- **Platform Name**: Elenor AI Platform
- **Product Name**: Elora AI
- **Primary Color**: Orange (#F97316)
- **Email**: privacy@elenor.io
- **Database**: EloraChatDB

## 🏗️ Project Structure

```
elenor-web/
├── app/                    # Next.js App Router pages
│   ├── features/          # Features page
│   ├── help/              # Help documentation
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   └── ...                # Other legal pages
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── InstallGuide.tsx   # PWA installation guide
│   ├── LegalLayout.tsx    # Legal pages wrapper
│   └── ...
├── contexts/              # React contexts
│   └── LanguageContext.tsx
├── translations/          # i18n translations
├── styles/                # Global styles
└── public/                # Static assets
```

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-optimized navigation
- PWA installation guide for iOS and Android
- Optimized font scaling
- Portrait and landscape mode support

## 🔧 Development

```bash
# Development server (with Turbopack)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type checking
npm run type-check
```

## 🌍 AI Platform Partners

The Elenor platform integrates AI models and agents from:
- [Anthropic](https://anthropic.com) - Claude AI models
- [Google AI](https://ai.google.dev) - Gemini models
- [OpenAI](https://openai.com) - GPT models

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: privacy@elenor.io
- **Website**: [elenor.app](https://elenor.app)
- **Platform**: Elenor AI Platform

---

**Built with intelligence by the Elenor team**
