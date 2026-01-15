import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from './components/Terminal/Terminal';
import { Hero } from './components/Visual/Hero';
import { Projects } from './components/Visual/Projects';
import { Skills } from './components/Visual/Skills';
import { Contact } from './components/Visual/Contact';
import { ModeToggle } from './components/ModeToggle';
import { ViewMode } from './types';

function App() {
  const [mode, setMode] = useState<ViewMode>('terminal');

  const toggleMode = () => {
    setMode(prev => prev === 'terminal' ? 'visual' : 'terminal');
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {mode === 'terminal' ? (
          <motion.div
            key="terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Terminal onModeChange={toggleMode} />
          </motion.div>
        ) : (
          <motion.div
            key="visual"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Hero />
            <Projects />
            <Skills />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>

      <ModeToggle mode={mode} onToggle={toggleMode} />
    </div>
  );
}

export default App;
