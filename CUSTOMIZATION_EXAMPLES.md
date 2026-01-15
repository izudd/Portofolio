# 🎨 Customization Examples

## Adding Custom Terminal Commands

### Example 1: Resume Download

```typescript
// In src/components/Terminal/commands.ts

'resume': {
  description: 'Download my resume/CV',
  execute: () => {
    window.open('/resume.pdf', '_blank');
    return '📄 Opening resume in new tab...\n\nResume downloaded successfully!';
  }
},
```

### Example 2: GitHub Stats

```typescript
'github': {
  description: 'View my GitHub statistics',
  execute: () => {
    return `📊 GitHub Statistics:

Repositories: 50+
Stars Received: 200+
Contributions (2024): 500+
Longest Streak: 45 days

Visit: github.com/izudd`;
  }
},
```

### Example 3: Fun Easter Egg

```typescript
'coffee': {
  description: 'Grab a virtual coffee ☕',
  execute: () => {
    return `☕ *brewing coffee*

Here's your coffee! 

"Code without coffee is like sleep without dreams."

Want to grab a real coffee? Let's chat!
Email: Haqizud22@gmail.com`;
  }
},
```

## Custom Visual Sections

### Example 1: Add Testimonials Section

Create `src/components/Visual/Testimonials.tsx`:

```typescript
import { motion } from 'framer-motion';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Client Name',
      role: 'CEO, Company',
      text: 'Izudd delivered an exceptional system...',
      avatar: '/testimonials/client1.jpg'
    },
    // More testimonials...
  ];

  return (
    <section className="min-h-screen bg-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">
          What <span className="text-terminal-green">Clients Say</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gray-900 p-8 rounded-xl border border-gray-700"
            >
              <p className="text-gray-300 mb-4">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

Then add to `App.tsx`:
```typescript
import { Testimonials } from './components/Visual/Testimonials';

// In the visual mode section:
<Skills />
<Testimonials />  {/* Add here */}
<Contact />
```

### Example 2: Add Blog/Articles Section

```typescript
// src/data/articles.ts
export const articles = [
  {
    title: 'Building Scalable Laravel Applications',
    date: '2024-12-15',
    excerpt: 'Best practices for Laravel architecture...',
    link: 'https://medium.com/@you/article-1',
    tags: ['Laravel', 'PHP', 'Architecture']
  },
  // More articles...
];

// Create component and add to Visual mode
```

## Custom Animations

### Example 1: Typing Effect for Hero

```typescript
// In Hero.tsx
import { useState, useEffect } from 'react';

const TypeWriter = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed]);
  
  return <span>{displayText}<span className="animate-cursor-blink">|</span></span>;
};

// Usage in Hero:
<h1>
  <TypeWriter text="Full-Stack Developer" />
</h1>
```

### Example 2: Scroll Progress Indicator

```typescript
// Create new component: src/components/ScrollProgress.tsx
import { motion, useScroll } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-terminal-green to-terminal-blue origin-left z-50"
    />
  );
};

// Add to App.tsx in visual mode
```

## Color Schemes

### Dark Purple Theme

```javascript
// tailwind.config.js
colors: {
  terminal: {
    bg: '#1a0b2e',
    text: '#e0e0e0',
    green: '#7b2cbf',
    blue: '#9d4edd',
    purple: '#c77dff',
    yellow: '#e0aaff',
  }
}
```

### Cyberpunk Theme

```javascript
colors: {
  terminal: {
    bg: '#0a0e27',
    text: '#00ff9f',
    green: '#00ff9f',
    blue: '#00d9ff',
    purple: '#ff00ff',
    yellow: '#ffff00',
  }
}
```

### Minimal Light Theme

```javascript
colors: {
  terminal: {
    bg: '#ffffff',
    text: '#1a1a1a',
    green: '#059669',
    blue: '#3b82f6',
    purple: '#8b5cf6',
    yellow: '#f59e0b',
  }
}
```

## Advanced Features

### Example 1: Download Stats Command

```typescript
'stats': {
  description: 'View portfolio statistics',
  execute: () => {
    return `📊 Portfolio Statistics:

Projects Completed: ${projects.length}
Technologies Used: ${getAllSkills().length}
Years of Experience: 3+
Lines of Code: 50,000+
Coffee Consumed: ∞

Updated: ${new Date().toLocaleDateString()}`;
  }
},
```

### Example 2: Interactive Quiz

```typescript
let quizScore = 0;

'quiz': {
  description: 'Take a tech quiz!',
  execute: (args?: string[]) => {
    if (!args || args.length === 0) {
      return `🎯 Tech Quiz!

Question: What's my favorite tech stack?
a) MERN
b) Laravel + React
c) Django + Vue

Answer with: quiz b`;
    }
    
    const answer = args[0].toLowerCase();
    if (answer === 'b') {
      quizScore++;
      return `✅ Correct! Score: ${quizScore}\n\nLaravel + React is indeed my favorite!`;
    } else {
      return `❌ Not quite! The answer is: Laravel + React`;
    }
  }
},
```

### Example 3: Theme Switcher

```typescript
// Add state management
const [theme, setTheme] = useState<'dark' | 'light' | 'cyberpunk'>('dark');

'theme': {
  description: 'Change color theme',
  execute: (args?: string[]) => {
    if (!args || args.length === 0) {
      return `Current theme: ${theme}

Available themes:
- dark
- light
- cyberpunk

Usage: theme [name]`;
    }
    
    const newTheme = args[0];
    setTheme(newTheme as any);
    return `Theme changed to: ${newTheme}`;
  }
},
```

## Performance Optimizations

### Lazy Load Images

```typescript
// Create LazyImage component
const LazyImage = ({ src, alt, className }: any) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
};
```

### Code Splitting Routes

```typescript
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./components/Visual/Projects'));
const Skills = lazy(() => import('./components/Visual/Skills'));

// Usage:
<Suspense fallback={<div>Loading...</div>}>
  <Projects />
</Suspense>
```

## Tips for Indonesian Developers

### Add Bahasa Indonesia Support

```typescript
// Create translations
const translations = {
  en: {
    welcome: 'Welcome to my portfolio!',
    projects: 'Projects',
    skills: 'Skills',
  },
  id: {
    welcome: 'Selamat datang di portfolio saya!',
    projects: 'Proyek',
    skills: 'Keahlian',
  }
};

// Add language toggle command
'lang': {
  description: 'Change language / Ubah bahasa',
  execute: (args?: string[]) => {
    // Toggle between 'en' and 'id'
  }
}
```

### Indonesian Payment Gateways Section

```typescript
// In skills or projects
const paymentGateways = [
  { name: 'Midtrans', level: 5 },
  { name: 'Xendit', level: 4 },
  { name: 'OVO', level: 3 },
  { name: 'GoPay', level: 3 },
];
```

---

**Pro Tips:**
1. Test all customizations in both Terminal and Visual modes
2. Keep animations subtle for better UX
3. Optimize images (use WebP format)
4. Test on mobile devices
5. Keep loading times under 3 seconds

Happy customizing! 🎨
