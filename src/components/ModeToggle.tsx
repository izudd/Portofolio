import { motion } from 'framer-motion';
import { FaTerminal, FaEye } from 'react-icons/fa';

interface ModeToggleProps {
  mode: 'terminal' | 'visual';
  onToggle: () => void;
}

export const ModeToggle: React.FC<ModeToggleProps> = ({ mode, onToggle }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onToggle}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-terminal-green to-terminal-blue text-white p-4 rounded-full shadow-2xl hover:shadow-terminal-green/50 transition-all duration-300"
      title={mode === 'terminal' ? 'Switch to Visual Mode' : 'Switch to Terminal Mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: mode === 'terminal' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {mode === 'terminal' ? <FaEye size={24} /> : <FaTerminal size={24} />}
      </motion.div>
    </motion.button>
  );
};
