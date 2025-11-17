# 🏗️ Elenor Platform Architecture Refactor Plan

**Created:** November 17, 2025
**Status:** Planning Phase - To be implemented later

---

## 🎯 Goal

Separate Elenor Platform (parent) from Elora AI Product (child) to create clear architecture for multiple products under the Elenor umbrella.

---

## 📋 Current Structure (PROBLEM)

```
elenor.io/
├── / (Homepage - talks about Platform) ✅
├── /features (Elora features) ❌ Wrong level
├── /help (Elora help) ❌ Wrong level
│   ├── /help/getting-started
│   ├── /help/models
│   └── /help/features
├── /support (Elora support) ❌ Wrong level
├── /contact (Platform contact) ✅
├── /privacy (Platform legal) ✅
├── /terms (Platform legal) ✅
├── /gdpr (Platform legal) ✅
├── /security (Platform legal) ✅
├── /cookies (Platform legal) ✅
└── /usage (Platform legal) ✅
```

**Problem:** Product-specific pages (Elora) are at root level, mixed with platform pages.

---

## ✅ Target Structure (SOLUTION)

```
elenor.io/
│
├── PLATFORM LEVEL (Root)
│   ├── / (Platform homepage)
│   ├── /products (Overview of all products)
│   ├── /contact (Platform contact)
│   ├── /about (Platform about - optional)
│   ├── /privacy (Platform legal)
│   ├── /terms (Platform legal)
│   ├── /gdpr (Platform legal)
│   ├── /security (Platform legal)
│   ├── /cookies (Platform legal)
│   └── /usage (Platform legal)
│
├── ELORA PRODUCT
│   ├── /elora (Elora product homepage)
│   ├── /elora/features (Elora features overview)
│   ├── /elora/help (Elora help center)
│   │   ├── /elora/help/getting-started
│   │   ├── /elora/help/models
│   │   └── /elora/help/features
│   └── /elora/support (Elora user support)
│
├── FUTURE PRODUCTS
│   ├── /agents (Elenor Agents)
│   │   ├── /agents/features
│   │   ├── /agents/help
│   │   └── /agents/pricing
│   ├── /api (Elenor API)
│   │   ├── /api/docs
│   │   ├── /api/reference
│   │   └── /api/pricing
│   ├── /studio (Elenor Studio - future)
│   └── /vision (Elenor Vision - future)
```

---

## 📦 Step-by-Step Implementation Plan

### Phase 1: Backup & Preparation
- [ ] Create git branch: `refactor/platform-structure`
- [ ] Backup current working state
- [ ] Document all current routes

### Phase 2: Create New Directory Structure

#### 2.1 Create `/elora` directory
```bash
mkdir -p app/elora
mkdir -p app/elora/features
mkdir -p app/elora/help
mkdir -p app/elora/help/getting-started
mkdir -p app/elora/help/models
mkdir -p app/elora/help/features
mkdir -p app/elora/support
```

#### 2.2 Move existing product pages
- [ ] Move `/app/features/` → `/app/elora/features/`
- [ ] Move `/app/help/` → `/app/elora/help/`
- [ ] Move `/app/support/` → `/app/elora/support/`

### Phase 3: Create Elora Product Homepage

#### 3.1 Create `/app/elora/page.tsx`
New Elora product landing page that showcases:
- Elora AI features overview
- Quick links to help, features, support
- Download/Try Elora CTA
- "Part of Elenor Platform" branding

**Content:**
- Hero: "Elora AI - Your Intelligent Companion"
- Features grid
- Quick navigation to help/support
- CTA to elenor.app

### Phase 4: Update Platform Homepage

#### 4.1 Modify `/app/page.tsx`
Change from Elora-focused to Platform-focused:

**Current:** Talks about Elora features
**New:** Showcase all products under Elenor Platform

**New sections:**
1. Hero: "Elenor AI Platform"
2. Products showcase:
   - Elora AI (link to /elora)
   - Elenor Agents (coming soon)
   - Elenor API (coming soon)
   - Elenor Studio (coming soon)
3. Platform features (what makes Elenor platform special)
4. Footer with product links

### Phase 5: Create Products Overview Page

#### 5.1 Create `/app/products/page.tsx`
Detailed overview of all products:
- Elora AI - For consumers
- Elenor Agents - For enterprises
- Elenor API - For developers
- Elenor Studio - For creators (future)
- Elenor Vision - For visual AI (future)

Each with:
- Description
- Key features
- Link to product page
- Status (available, coming soon)

### Phase 6: Update All Internal Links

#### 6.1 Files to update:
- [ ] `/app/page.tsx` - Update footer links
- [ ] `/app/elora/page.tsx` - All internal navigation
- [ ] `/app/elora/help/**` - Update breadcrumbs, links
- [ ] `/app/elora/support/page.tsx` - Update help links
- [ ] `/components/Header.tsx` - Update navigation menu
- [ ] `/translations/main-page.ts` - Update footer links
- [ ] `/translations/help-pages.ts` - Update navigation links

#### 6.2 Link changes:
```
Old → New
/features → /elora/features
/help → /elora/help
/help/getting-started → /elora/help/getting-started
/help/models → /elora/help/models
/help/features → /elora/help/features
/support → /elora/support
```

### Phase 7: Update Translations

#### 7.1 Create new translation sections
- [ ] Platform translations (for new homepage)
- [ ] Products page translations
- [ ] Elora product page translations

#### 7.2 Update existing translations
- [ ] Footer: Add "Products" link
- [ ] Footer: Update links to point to /elora/*
- [ ] Navigation: Add products dropdown (optional)

### Phase 8: Update Header/Navigation

#### 8.1 Create new navigation structure
```
Current:
Home | Features | Help | Support | Contact

New:
Home | Products | Contact
  └─ Products dropdown:
     ├─ Elora AI → /elora
     ├─ Agents (soon)
     ├─ API (soon)
     └─ All Products → /products
```

#### 8.2 Elora-specific navigation
On `/elora/*` pages, show Elora sub-navigation:
```
Elora | Features | Help | Support
```

### Phase 9: Update Sitemap & SEO

#### 9.1 Update `/app/sitemap.ts`
Add all new routes:
- /elora (priority 0.9)
- /elora/features
- /elora/help/*
- /elora/support
- /products (priority 0.8)

Remove old routes at root level.

#### 9.2 Update meta tags
- Platform pages: "Elenor AI Platform"
- Elora pages: "Elora AI by Elenor"

### Phase 10: Redirects (Important!)

#### 10.1 Create `/app/middleware.ts` or use Next.js redirects
Redirect old URLs to new structure:
```javascript
/features → /elora/features (308 permanent)
/help → /elora/help (308 permanent)
/help/* → /elora/help/* (308 permanent)
/support → /elora/support (308 permanent)
```

**Why redirects:**
- Google Search Console already indexed old URLs
- Users may have bookmarks
- External links may point to old structure

### Phase 11: Update External Links

#### 11.1 Files to check:
- [ ] README.md
- [ ] TODO.md (if exists)
- [ ] Package.json (homepage field)
- [ ] Any documentation files

---

## 🎨 Design Considerations

### Platform Homepage (/)
- **Focus:** Elenor Platform ecosystem
- **Tone:** Professional, enterprise-friendly
- **CTAs:** "Explore Products", "Try Elora", "Contact Sales"
- **Branding:** Elenor Platform with orange accent

### Elora Product Page (/elora)
- **Focus:** Consumer AI assistant
- **Tone:** Friendly, accessible
- **CTAs:** "Try Elora Free", "View Features", "Get Help"
- **Branding:** Elora AI by Elenor

---

## 📧 Email Structure (Already Correct!)

✅ Current email structure works for both levels:
- `contact@elenor.io` - Platform/business inquiries
- `privacy@elenor.io` - Platform legal
- `support@elenor.io` - Elora product support
- `feedback@elenor.io` - Elora product feedback

---

## 📱 App Link Strategy

### Current: elenor.app
- Keep this as the Elora app URL
- All CTAs from `/elora/*` → elenor.app

### Future consideration:
- Platform might need app.elenor.io or dashboard.elenor.io for platform-level features

---

## 🧪 Testing Checklist

After implementation:
- [ ] All old URLs redirect correctly
- [ ] All internal links work
- [ ] Navigation works on all pages
- [ ] Translations work on all pages
- [ ] Sitemap generates correctly
- [ ] SEO meta tags are correct
- [ ] Mobile navigation works
- [ ] Footer links work in all languages
- [ ] Breadcrumbs work (if implemented)

---

## ⚠️ Potential Issues & Solutions

### Issue 1: Google Search Console indexed old URLs
**Solution:** Implement 308 redirects (permanent) + update sitemap

### Issue 2: External links to old structure
**Solution:** Redirects will handle this

### Issue 3: User bookmarks
**Solution:** Redirects will handle this

### Issue 4: Complexity of dual-level navigation
**Solution:** Clear visual hierarchy + breadcrumbs on Elora pages

---

## 📊 Priority & Timeline

### High Priority (Do Soon)
1. Create `/elora` structure
2. Move existing product pages
3. Implement redirects
4. Update internal links

### Medium Priority
5. Create products overview page
6. Update platform homepage
7. Create Elora product homepage

### Low Priority (Can do later)
8. Add breadcrumbs
9. Add products dropdown in header
10. Create "About Platform" page

---

## 💾 Files to Create

New files needed:
- `/app/elora/page.tsx` - Elora product homepage
- `/app/products/page.tsx` - Products overview
- `/app/products/page.module.css` - Products styling
- `/app/middleware.ts` - Redirects (optional, can use next.config.js)
- `/translations/products.ts` - Products page translations
- `/translations/elora-product.ts` - Elora homepage translations

---

## 📝 Files to Modify

Existing files to update:
- `/app/page.tsx` - Platform homepage
- `/app/page.module.css` - Platform homepage styling
- `/components/Header.tsx` - Navigation structure
- `/translations/main-page.ts` - Footer links, navigation
- `/app/sitemap.ts` - All routes
- `/app/robots.ts` - If needed
- `next.config.js` - Add redirects
- `README.md` - Update URLs

---

## 🚀 Deployment Strategy

1. **Development:**
   - Implement on branch: `refactor/platform-structure`
   - Test locally thoroughly
   - Test all redirects

2. **Staging (if available):**
   - Deploy to preview URL
   - Test all functionality
   - Check Google Search Console implications

3. **Production:**
   - Deploy during low-traffic time
   - Monitor 404 errors
   - Check analytics for broken links
   - Update Google Search Console sitemap

4. **Post-deployment:**
   - Monitor for 404s
   - Check Google Search Console coverage
   - Update any external documentation
   - Announce structure change (if needed)

---

## 📚 References

Industry examples:
- OpenAI: platform.openai.com (API) vs. chatgpt.com (product)
- Anthropic: anthropic.com (platform) vs. claude.ai (product)
- Google AI: ai.google (platform) with multiple products

---

## ✅ Success Criteria

Refactor is successful when:
- [x] Clear separation between platform and products
- [x] All old URLs redirect correctly (no 404s)
- [x] Navigation is intuitive
- [x] SEO is maintained (or improved)
- [x] All translations work
- [x] Future products can be easily added
- [x] User experience is better

---

**Next Steps:**
1. Review this plan
2. Set implementation date
3. Create git branch
4. Start with Phase 1

**Estimated time:** 1-2 days of focused work

---

*This plan ensures we don't lose any functionality, maintain SEO, and create a scalable architecture for the Elenor Platform ecosystem.*
