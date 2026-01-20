import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSpinner, FaCircle, FaTimes } from 'react-icons/fa';

export type EffectType = 'none' | 'matrix' | 'particles';

interface EffectsToggleProps {
  currentEffect: EffectType;
  onEffectChange: (effect: EffectType) => void;
}

export const EffectsToggle = ({ currentEffect, onEffectChange }: EffectsToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const effects = [
    { type: 'none' as EffectType, label: 'No Effect', icon: FaTimes, color: 'text-gray-400' },
    { type: 'matrix' as EffectType, label: 'Matrix Rain', icon: FaSpinner, color: 'text-terminal-green' },
    { type: 'particles' as EffectType, label: 'Particles', icon: FaCircle, color: 'text-terminal-blue' }
  ];

  const currentEffectData = effects.find(e => e.type === currentEffect) || effects[0];
  const CurrentIcon = currentEffectData.icon;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-16 right-0 bg-gray-800 rounded-lg border border-gray-700 shadow-2xl overflow-hidden mb-2"
          >
            <div className="p-3">
              <p className="text-xs text-gray-400 mb-3 font-semibold uppercase tracking-wider">Visual Effects</p>
              <div className="space-y-2">
                {effects.map((effect) => {
                  const Icon = effect.icon;
                  const isActive = currentEffect === effect.type;
                  
                  return (
                    <button
                      key={effect.type}
                      onClick={() => {
                        onEffectChange(effect.type);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-gray-700 text-white'
                          : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                      }`}
                    >
                      <Icon className={`${effect.color} ${effect.type === 'matrix' ? 'animate-spin-slow' : ''}`} />
                      <span className="text-sm font-medium whitespace-nowrap">{effect.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="ml-auto w-2 h-2 bg-terminal-green rounded-full"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative group bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full p-4 shadow-lg transition-all duration-300 ${
          isOpen ? 'ring-2 ring-terminal-green' : ''
        }`}
      >
        <CurrentIcon 
          className={`w-5 h-5 ${currentEffectData.color} ${
            currentEffect === 'matrix' ? 'animate-spin-slow' : ''
          }`} 
        />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap border border-gray-700">
            Visual Effects
            <div className="absolute top-full right-4 w-2 h-2 bg-gray-900 border-r border-b border-gray-700 transform rotate-45 -mt-1"></div>
          </div>
        </div>

        {/* Active indicator pulse */}
        {currentEffect !== 'none' && (
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-terminal-green rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        )}
      </motion.button>
    </div>
  );
};
