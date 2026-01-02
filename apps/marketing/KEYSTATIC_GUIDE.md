# 📝 Keystatic CMS Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
cd apps/marketing
pnpm add @keystatic/core @keystatic/react
```

### 2. Files Created
- `keystatic.config.ts` - Content schema definition
- `content/homepage.json` - Homepage content (hero, features, CTA)
- `content/settings.json` - Site-wide settings (SEO, social links)

### 3. How It Works

**Content → JSON → React Component**

```
content/homepage.json     →  Import in route  →  Render dynamically
{                            import content     <h1>{content.title}</h1>
  "hero": {                    from json
    "title": "Zen"
  }
}
```

### 4. Editing Content

**Option A: Edit JSON directly**
Just edit the files in `content/` folder and commit.

**Option B: Keystatic Admin UI (local)**
```bash
cd apps/marketing
pnpm keystatic dev
# Opens at http://localhost:3001/keystatic
```

### 5. Content Schema

**Homepage (`content/homepage.json`):**
- `hero.title` - Main headline
- `hero.titleHighlight` - Colored word
- `hero.subtitle` - Subheadline
- `hero.ctaPrimary` - Primary button text
- `hero.ctaSecondary` - Secondary button text
- `features[]` - Array of feature cards
- `testimonials[]` - Customer quotes
- `cta` - Bottom call-to-action section

**Settings (`content/settings.json`):**
- `siteName` - Used in meta tags
- `siteDescription` - SEO description
- `socialLinks` - Twitter, GitHub, LinkedIn
- `analytics` - PostHog/GA keys

### 6. Adding New Pages

1. Create content file: `content/about.json`
2. Add to `keystatic.config.ts` as singleton
3. Create route: `app/routes/about.tsx`
4. Import and render the content

### 7. Deploying

Content is **baked into the build** - no API calls needed at runtime.
Just `git push` and Coolify rebuilds with new content.

---

## Why Keystatic?

| Aspect | Keystatic | Sanity | WordPress |
|--------|-----------|--------|-----------|
| Hosting | Free (git) | $99/mo | $20+/mo |
| Latency | 0ms (static) | API call | API call |
| Type Safety | ✅ Full TS | Partial | ❌ |
| Version Control | Git history | Limited | ❌ |
