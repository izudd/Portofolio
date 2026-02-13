import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hero } from './components/Visual/Hero';
import { Projects } from './components/Visual/Projects';
import { Skills } from './components/Visual/Skills';
import { Testimonials } from './components/Visual/Testimonials';
import { Contact } from './components/Visual/Contact';
import { MatrixRain } from './components/MatrixRain';
import { Particles } from './components/Particles';
import { EffectsToggle, EffectType } from './components/EffectsToggle';
import { LoadingScreen } from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';

function App() {
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

  // Show loading screen on first visit
  if (isLoading && !hasVisited) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen relative">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Background Effects */}
      <MatrixRain isActive={effect === 'matrix'} speed={1.2} density={0.85} />
      <Particles isActive={effect === 'particles'} count={60} speed={0.3} />

      {/* Main Content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <Projects />
          <Skills />
          <Testimonials />
          <Contact />
        </motion.div>
      </div>

      {/* Effects Toggle Button */}
      <EffectsToggle currentEffect={effect} onEffectChange={setEffect} />
    </div>
  );
}

export default App;
