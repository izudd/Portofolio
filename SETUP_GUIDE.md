# 🚀 Quick Setup Guide

## Step 1: Installation (2 minutes)

```bash
# Navigate to project folder
cd portfolio-boilerplate

# Install dependencies
npm install
```

## Step 2: Customize Your Data (10 minutes)

### Update Personal Info

1. **Contact Information** - Edit these files:
   - `src/components/Terminal/commands.ts` (line ~90)
   - `src/components/Visual/Contact.tsx` (line ~10)
   - `src/components/Visual/Hero.tsx` (line ~60)

Replace:
```typescript
Email: Haqizud22@gmail.com
GitHub: github.com/izudd
LinkedIn: linkedin.com/in/abdullah-izuddin-alhaq-67a3843a6
```

### Update Projects

2. **Your Projects** - `src/data/projects.ts`

Simply replace the existing projects with yours:
```typescript
{
  id: 'my-awesome-project',
  title: 'My Awesome Project',
  description: 'What it does in one sentence',
  tech: ['React', 'Node.js'],
  features: ['Feature 1', 'Feature 2'],
  year: '2025',
  category: 'fullstack',
}
```

### Update Skills

3. **Your Skills** - `src/data/skills.ts`

Adjust skill levels (1-5) and add/remove skills:
```typescript
{
  category: 'Frontend',
  items: [
    { name: 'React', level: 5 },
    { name: 'Vue', level: 3 },
  ]
}
```

### Update About

4. **About Section** - `src/components/Terminal/commands.ts` (about command)

Replace the about text with your own story.

## Step 3: Test It (1 minute)

```bash
# Start development server
npm run dev
```

Open http://localhost:3000 and test both modes!

## Step 4: Deploy (5 minutes)

### Option A: Vercel (Easiest)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Click Deploy ✅

### Option B: Netlify

1. Build: `npm run build`
2. Drag `dist/` folder to [netlify.com](https://netlify.com)
3. Done! ✅

## Essential Customizations Checklist

- [ ] Update email, GitHub, LinkedIn links
- [ ] Replace projects with your own
- [ ] Adjust skill levels
- [ ] Update about section
- [ ] Change meta tags in `index.html`
- [ ] Test terminal commands
- [ ] Test visual mode
- [ ] Mobile responsive check
- [ ] Deploy!

## Common Issues

**Problem:** `npm install` fails
**Solution:** Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Problem:** Port 3000 already in use
**Solution:** Run `npm run dev -- --port 3001`

**Problem:** Changes not showing
**Solution:** Hard refresh browser (Ctrl+Shift+R) or restart dev server

## Next Steps

1. **Add Your Photo:** Place in `public/` and update Hero component
2. **Custom Domain:** Configure in deployment platform
3. **Analytics:** Add Google Analytics ID
4. **SEO:** Update all meta tags in `index.html`
5. **Resume:** Add download link in terminal command

## Need Help?

Check the main `README.md` for detailed documentation!

---

**Total Setup Time: ~20 minutes** ⚡

Ready to impress recruiters! 🎯
