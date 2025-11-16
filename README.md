# 🍌 Omnia One AI - Official Website

Professional marketing website for Omnia One AI, built with Next.js 16, React 19, and Turbopack.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- 🌍 **Trilingual Support** - English, Czech (cs), Romanian (ro)
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- 🎨 **Modern UI/UX** - Clean design with orange branding
- 📄 **Complete Legal Documentation** - Terms, Privacy, GDPR, Security, Usage, Cookies
- 🍪 **Cookie Consent** - GDPR-compliant with Google Analytics Consent Mode v2
- 🎬 **Video Showcase** - Integrated demo videos
- ⚡ **Lightning Fast** - Built with Turbopack for optimal performance
- 🎯 **SEO Ready** - Optimized metadata and semantic HTML

## 🚀 Tech Stack

- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Build Tool**: Turbopack
- **Analytics**: Google Analytics 4 with Consent Mode v2
- **Deployment**: Vercel-ready

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Crscristi28/omnia-web.git

# Navigate to project directory
cd omnia-web

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

## 🌐 Pages

### Main Pages
- **/** - Homepage with features and demo video
- **/features** - Detailed features overview
- **/help** - Help center with guides
- **/support** - Support and contact information

### Legal Documentation
- **/terms** - Terms of Service
- **/privacy** - Privacy Policy
- **/gdpr** - GDPR Compliance
- **/security** - Authentication & Security
- **/usage** - Usage Policy
- **/cookies** - Cookie Policy

All legal pages support EN, CS, and RO languages with dynamic switching.

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
- `legal-pages.ts` - Legal documentation
- `help-pages.ts` - Help center
- `cookie-consent.ts` - Cookie banner

## 📱 Mobile Optimization

- Responsive footer with wrapping links
- Touch-optimized navigation
- Optimized font sizes for mobile devices
- Portrait and landscape mode support

## 🔧 Development

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check
```

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, visit [omniaoneai.com](https://omniaoneai.com)

---

**Built with 🍌 by Nano Banana**
