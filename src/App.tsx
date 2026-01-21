import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from './components/Terminal/Terminal';
import { Hero } from './components/Visual/Hero';
import { Projects } from './components/Visual/Projects';
import { Skills } from './components/Visual/Skills';
import { Testimonials } from './components/Visual/Testimonials';
import { Contact } from './components/Visual/Contact';
import { ModeToggle } from './components/ModeToggle';
import { MatrixRain } from './components/MatrixRain';
import { Particles } from './components/Particles';
import { EffectsToggle, EffectType } from './components/EffectsToggle';
import { LoadingScreen } from './components/LoadingScreen';
import { ViewMode } from './types';

function App() {
  const [mode, setMode] = useState<ViewMode>('terminal');
  const [effect, setEffect] = useState<EffectType>('matrix');
  const [isLoading, setIsLoading] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  // Check if user has visited before
  useEffect(() => {
    const visited = localStorage.getItem('hasVisited');
    if (visited === 'true') {
      setHasVisited(true);
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    localStorage.setItem('hasVisited', 'true');
  };

  const toggleMode = () => {
    setMode(prev => prev === 'terminal' ? 'visual' : 'terminal');
  };

  // Show loading screen on first visit
  if (isLoading && !hasVisited) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen relative">
      {/* Background Effects */}
      <MatrixRain isActive={effect === 'matrix'} speed={1.2} density={0.85} />
      <Particles isActive={effect === 'particles'} count={60} speed={0.3} />

      {/* Main Content */}
      <div className="relative z-10">
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
              <Testimonials />
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Toggle Buttons */}
      <ModeToggle mode={mode} onToggle={toggleMode} />
      <EffectsToggle currentEffect={effect} onEffectChange={setEffect} />
    </div>
  );
}

export default App;