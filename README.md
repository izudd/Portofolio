# 🚀 Izudd's Portfolio - Terminal + Visual Mode

A unique, interactive portfolio website with dual viewing modes: Terminal CLI and Modern Visual UI. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🎉 Latest Updates (v2.0)

### 📸 New: Project Screenshot Support
- Display screenshots/images for each project
- Automatic fallback placeholders
- Smooth hover effects and zoom
- Error handling for missing images

### 🆕 3 New Projects Added
1. **Pipeline Locator** - Advanced pipeline tracking with GIS mapping
2. **Administrator Office** - Complete office management system
3. **Kelas Online** - E-learning platform with live video classes

### 💡 Total: 7 Projects Showcased
All your major projects now beautifully presented with detailed descriptions, tech stacks, and key features!

---

## ✨ Features

### 🖥️ Terminal Mode
- Interactive command-line interface
- Fully functional terminal commands
- Command history with arrow key navigation
- Auto-complete suggestions
- Easter eggs and hidden commands
- Authentic terminal experience

### 🎨 Visual Mode
- Modern, responsive design
- Smooth animations with Framer Motion
- Project showcases with detailed information
- Interactive skill bars
- Contact form
- Gradient effects and hover animations

### 🔄 Dual Mode System
- Seamless switching between Terminal and Visual modes
- Floating toggle button
- Smooth transitions
- Mode persistence (optional)

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Font:** JetBrains Mono (for terminal aesthetic)

## 📁 Project Structure

```
portfolio-boilerplate/
├── public/
├── src/
│   ├── components/
│   │   ├── Terminal/
│   │   │   ├── Terminal.tsx          # Main terminal component
│   │   │   └── commands.ts           # Terminal commands logic
│   │   ├── Visual/
│   │   │   ├── Hero.tsx              # Landing section
│   │   │   ├── Projects.tsx          # Projects showcase
│   │   │   ├── Skills.tsx            # Skills display
│   │   │   └── Contact.tsx           # Contact section
│   │   └── ModeToggle.tsx            # Mode switching button
│   ├── data/
│   │   ├── projects.ts               # Your projects data
│   │   └── skills.ts                 # Your skills data
│   ├── types/
│   │   └── index.ts                  # TypeScript definitions
│   ├── App.tsx                       # Main app component
│   ├── main.tsx                      # Entry point
│   └── index.css                     # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
```bash
cd portfolio-boilerplate
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser at `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
```

The optimized files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## ⚙️ Customization Guide

### 1. Personal Information

**Update contact info in:**
- `src/components/Terminal/commands.ts` - contact command
- `src/components/Visual/Hero.tsx` - social links
- `src/components/Visual/Contact.tsx` - contact methods

**Example:**
```typescript
// In commands.ts
contact: {
  execute: () => {
    return `📧 Contact Me:

Email: your.real.email@example.com
GitHub: github.com/izudd
LinkedIn: linkedin.com/in/abdullah-izuddin-alhaq-67a3843a6
...`
  }
}
```

### 2. Projects Data

Edit `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 'your-project-id',
    title: 'Your Project Name',
    description: 'Short description',
    longDescription: 'Detailed description',
    tech: ['React', 'Node.js', 'MongoDB'],
    features: [
      'Feature 1',
      'Feature 2',
    ],
    github: 'https://github.com/you/project',
    demo: 'https://demo.com',
    year: '2025',
    category: 'fullstack',
  },
  // Add more projects...
];
```

### 3. Skills Data

Edit `src/data/skills.ts`:

```typescript
export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 5 },
      { name: 'TypeScript', level: 4 },
      // Add more skills...
    ]
  },
  // Add more categories...
];
```

### 4. Terminal Commands

Add custom commands in `src/components/Terminal/commands.ts`:

```typescript
export const commands = {
  // ... existing commands
  
  'your-command': {
    description: 'Description of your command',
    execute: (args?: string[]) => {
      return 'Command output here';
    }
  }
};
```

### 5. Color Scheme

Customize colors in `tailwind.config.js`:

```javascript
colors: {
  terminal: {
    bg: '#0C0C0C',      // Terminal background
    text: '#CCCCCC',    // Terminal text
    green: '#0DBC79',   // Primary green
    blue: '#3B78FF',    // Primary blue
    purple: '#B180D7',  // Purple accent
    yellow: '#E5C07B',  // Yellow accent
  }
}
```

### 6. Meta Tags & SEO

Update in `index.html`:

```html
<title>Your Name - Portfolio</title>
<meta name="description" content="Your custom description" />
<meta property="og:title" content="Your Name - Portfolio" />
<!-- Update other meta tags -->
```

## 🎮 Terminal Commands

Built-in commands in terminal mode:

- `help` - Show all available commands
- `about` - Learn about me
- `skills` - View technical skills
- `skills [category]` - View skills by category
- `projects` - List all projects
- `projects [id]` - View specific project details
- `experience` - View work experience
- `contact` - Get contact information
- `clear` - Clear terminal screen
- `visual` - Switch to visual mode

**Easter eggs:**
- `ls` - List directory contents
- `whoami` - Display current user
- `date` - Show current date
- `sudo` - Try to get admin access 😄

## 🎨 Customization Ideas

### Add New Terminal Commands

```typescript
// In commands.ts
'resume': {
  description: 'Download my resume',
  execute: () => {
    window.open('/path-to-resume.pdf', '_blank');
    return 'Opening resume in new tab...';
  }
}
```

### Add Project Images

1. Add images to `public/` folder
2. Update project data:
```typescript
{
  id: 'project',
  title: 'Project',
  image: '/project-screenshot.png',
  // ... other fields
}
```

3. Display in Projects component

### Add Analytics

```typescript
// In main.tsx or App.tsx
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Google Analytics
    // gtag('config', 'YOUR-GA-ID');
  }, []);
  
  // ... rest of component
}
```

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop (1920px and above)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🔧 Troubleshooting

### Port Already in Use

```bash
# Use different port
npm run dev -- --port 3001
```

### Build Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Clear TypeScript cache
rm -rf node_modules/.vite
npm run dev
```

## 📦 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Drag & drop `dist/` folder to Netlify

### GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

## 🎯 Performance Tips

- Images: Use WebP format for better compression
- Fonts: Preload important fonts
- Code Splitting: Already handled by Vite
- Lazy Loading: Add for images if needed

## 📝 License

This project is open source and available under the MIT License.

## 💡 Tips for Success

1. **Update regularly:** Keep your projects and skills current
2. **Add analytics:** Track visitor behavior
3. **Test thoroughly:** Check all links and features
4. **Mobile first:** Ensure great mobile experience
5. **SEO optimize:** Update meta tags and descriptions
6. **Performance:** Optimize images and assets

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Support

If you have questions or need help customizing, feel free to reach out!

---

Built with ❤️ using React, TypeScript, and Tailwind CSS

**Good luck with your portfolio! 🚀**
