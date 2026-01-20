import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Boot sequence messages
  const bootMessages = [
    { text: 'Initializing system...', delay: 300 },
    { text: 'Loading core modules...', delay: 400 },
    { text: 'Checking dependencies...', delay: 350 },
    { text: 'Compiling TypeScript...', delay: 450 },
    { text: 'Building React components...', delay: 400 },
    { text: 'Optimizing assets...', delay: 350 },
    { text: 'Configuring routes...', delay: 300 },
    { text: 'Establishing connections...', delay: 400 },
    { text: 'Loading portfolio data...', delay: 450 },
    { text: 'Initializing visual mode...', delay: 400 },
    { text: 'Starting terminal emulator...', delay: 350 },
    { text: 'System ready!', delay: 500 },
  ];

  // ASCII Art Logo
  const asciiLogo = `
    ██╗███████╗██╗   ██╗██████╗ ██████╗ 
    ██║╚══███╔╝██║   ██║██╔══██╗██╔══██╗
    ██║  ███╔╝ ██║   ██║██║  ██║██║  ██║
    ██║ ███╔╝  ██║   ██║██║  ██║██║  ██║
    ██║███████╗╚██████╔╝██████╔╝██████╔╝
    ╚═╝╚══════╝ ╚═════╝ ╚═════╝ ╚═════╝ 
  `;

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Boot sequence progress
  useEffect(() => {
    if (currentStep >= bootMessages.length) {
      // Complete loading
      setTimeout(() => {
        onComplete();
      }, 800);
      return;
    }

    const message = bootMessages[currentStep];
    const timer = setTimeout(() => {
      setCurrentStep(prev => prev + 1);
      setProgress(((currentStep + 1) / bootMessages.length) * 100);
    }, message.delay);

    return () => clearTimeout(timer);
  }, [currentStep, bootMessages.length, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-50 flex items-center justify-center font-mono"
      >
        <div className="w-full max-w-4xl px-6">
          {/* ASCII Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-terminal-green text-center mb-8"
          >
            <pre className="text-xs sm:text-sm md:text-base leading-tight">
              {asciiLogo}
            </pre>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-terminal-green text-xl sm:text-2xl font-bold mb-2">
              PORTFOLIO SYSTEM v2.0.3
            </h2>
            <p className="text-gray-500 text-sm">
              Full Stack Developer | System Architect
            </p>
          </motion.div>

          {/* Boot Messages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-6 h-64 overflow-hidden"
          >
            <div className="space-y-2 text-sm">
              {bootMessages.slice(0, currentStep + 1).map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-terminal-green">&#10003;</span>
                  <span className={
                    index === currentStep 
                      ? 'text-terminal-green' 
                      : 'text-gray-500'
                  }>
                    {message.text}
                  </span>
                  {index === currentStep && showCursor && (
                    <span className="text-terminal-green animate-pulse">_</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Loading...</span>
              <span>{Math.round(progress)}%</span>
            </div>
            
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-terminal-green to-terminal-blue"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* ASCII Progress Bar */}
            <div className="text-terminal-green text-xs font-mono">
              <span>[</span>
              {Array.from({ length: 50 }).map((_, i) => (
                <span key={i}>
                  {i < (progress / 2) ? '█' : '░'}
                </span>
              ))}
              <span>]</span>
            </div>
          </div>

          {/* System Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center text-xs text-gray-600 space-y-1"
          >
            <p>Built with React + TypeScript + Tailwind CSS</p>
            <p>Optimized for performance | Mobile responsive</p>
            <p className="text-terminal-green">
              {currentStep >= bootMessages.length 
                ? '● System online' 
                : '○ Booting...'}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
