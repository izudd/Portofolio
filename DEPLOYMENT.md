# 🚀 Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (RECOMMENDED) ⚡

**Best for:** Automatic deployments, custom domains, zero config

**Steps:**

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! ✅

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

**Pros:**
- ✅ Automatic deployments on push
- ✅ Free SSL certificate
- ✅ CDN included
- ✅ Zero configuration
- ✅ Perfect for React/Vite

---

### Option 2: Netlify 🌐

**Best for:** Drag-and-drop deployment, form handling

**Steps:**

**Method A: Drag & Drop**
1. Build your project:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to Netlify
4. Done! ✅

**Method B: GitHub Integration**
1. Push code to GitHub
2. Connect repository in Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy ✅

**Pros:**
- ✅ Easy drag-and-drop
- ✅ Form handling built-in
- ✅ Instant preview URLs
- ✅ Free SSL

---

### Option 3: GitHub Pages 📄

**Best for:** Free hosting on GitHub

**Steps:**

1. **Install gh-pages**
```bash
npm install -D gh-pages
```

2. **Update package.json**
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO"
}
```

3. **Update vite.config.ts**
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO/', // Add this line
})
```

4. **Deploy**
```bash
npm run deploy
```

5. **Enable GitHub Pages**
   - Go to repo Settings → Pages
   - Source: gh-pages branch
   - Save

**URL:** `https://YOUR_USERNAME.github.io/YOUR_REPO`

**Pros:**
- ✅ Completely free
- ✅ Direct from GitHub
- ✅ Easy updates

**Cons:**
- ⚠️ Requires repo to be public
- ⚠️ URL has repo name

---

### Option 4: Custom VPS/Hosting 🖥️

**Best for:** Full control, existing hosting

**Steps:**

1. **Build the project**
```bash
npm run build
```

2. **Upload dist folder**
   - Use FTP/SFTP client (FileZilla)
   - Upload contents of `dist/` to public_html or www folder

3. **Configure server**
   - Ensure all routes point to index.html
   - Enable HTTPS

**Nginx Config Example:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/portfolio/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**Apache .htaccess:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Pre-Deployment Checklist ✅

Before deploying, make sure you've:

- [ ] Updated all personal information
  - [ ] Contact details (email, GitHub, LinkedIn)
  - [ ] Projects data
  - [ ] Skills data
  - [ ] About section

- [ ] Updated meta tags in `index.html`
  - [ ] Title
  - [ ] Description
  - [ ] Open Graph tags
  - [ ] Twitter cards

- [ ] Tested functionality
  - [ ] All terminal commands work
  - [ ] All links are correct
  - [ ] Visual mode displays properly
  - [ ] Mobile responsive
  - [ ] No console errors

- [ ] Performance optimization
  - [ ] Images optimized (WebP format)
  - [ ] No unnecessary dependencies
  - [ ] Build size is reasonable

- [ ] SEO Ready
  - [ ] Robots.txt (if needed)
  - [ ] Sitemap.xml (optional)
  - [ ] Analytics code added

---

## Post-Deployment Steps 🎯

### 1. Custom Domain Setup

**For Vercel:**
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For Netlify:**
1. Go to Domain Settings
2. Add custom domain
3. Update DNS as instructed

### 2. Setup Analytics

**Google Analytics:**

Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Setup Contact Form

**Using Formspree (Free):**

Update Contact.tsx form:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- form fields -->
</form>
```

**Using Netlify Forms:**
Add `netlify` attribute:
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- form fields -->
</form>
```

### 4. Performance Monitoring

**Using Vercel Analytics:**
```bash
npm install @vercel/analytics
```

```typescript
// In main.tsx
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
)
```

---

## Troubleshooting Common Issues 🔧

### Build Fails

**Problem:** `npm run build` fails
**Solution:**
```bash
# Clear cache
rm -rf node_modules dist
npm install
npm run build
```

### 404 on Refresh (SPA Routing)

**Problem:** Page refreshes return 404
**Solution:** 
- **Vercel:** Automatically handled
- **Netlify:** Create `_redirects` file in `public/`:
```
/*    /index.html   200
```
- **Others:** Configure server (see configs above)

### Environment Variables

**Problem:** API keys not working
**Solution:**
1. Create `.env` file:
```env
VITE_API_KEY=your_api_key
```

2. Access in code:
```typescript
const apiKey = import.meta.env.VITE_API_KEY;
```

3. Add to deployment platform:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables

### Slow Loading

**Problem:** Site loads slowly
**Solutions:**
1. Optimize images → Use WebP
2. Enable lazy loading
3. Check bundle size: `npm run build -- --report`
4. Remove unused dependencies

---

## CI/CD Setup (Advanced) 🔄

### GitHub Actions for Auto-Deploy

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Netlify
      uses: netlify/actions/cli@master
      with:
        args: deploy --prod
      env:
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
```

---

## Performance Tips 🚀

1. **Enable Compression**
   - Vercel/Netlify: Automatic
   - Custom server: Enable gzip

2. **Add Service Worker (PWA)**
```bash
npm install -D vite-plugin-pwa
```

3. **Optimize Images**
```bash
# Install sharp for image optimization
npm install -D vite-imagetools
```

4. **Monitor Performance**
   - Use Lighthouse
   - Aim for 90+ score
   - Check Core Web Vitals

---

## Security Checklist 🔒

- [ ] HTTPS enabled (SSL certificate)
- [ ] Environment variables secured
- [ ] No sensitive data in code
- [ ] CORS configured properly
- [ ] Content Security Policy headers
- [ ] Dependencies updated regularly

---

## Maintenance 🛠️

**Monthly:**
- Update dependencies: `npm update`
- Check for security issues: `npm audit`
- Review analytics
- Update content

**Quarterly:**
- Major dependency updates
- Performance audit
- SEO review
- Content refresh

---

## Resources 📚

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Performance](https://react.dev/learn/render-and-commit)

---

**Need help?** Check the main README.md or create an issue!

Good luck with your deployment! 🚀
