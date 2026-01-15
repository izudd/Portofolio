import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { getCommand, parseCommand } from './commands';
import { CommandHistory } from '../../types';

interface TerminalProps {
  onModeChange: () => void;
}

export const Terminal: React.FC<TerminalProps> = ({ onModeChange }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Welcome message
    setHistory([{
      input: '',
      output: `Welcome to Izudd's Portfolio Terminal! 🚀

Type 'help' to see available commands
Type 'visual' to switch to visual mode
Type 'about' to learn more about me

Ready to explore?`,
      timestamp: new Date()
    }]);
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const trimmedInput = input.trim();
    const { command, args } = parseCommand(trimmedInput);

    // Add to command history
    setCommandHistory(prev => [...prev, trimmedInput]);
    setHistoryIndex(-1);

    // Special commands
    if (command === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (command === 'visual') {
      onModeChange();
      return;
    }

    // Execute command
    const cmd = getCommand(command);
    const output = cmd 
      ? cmd.execute(args)
      : `Command not found: ${command}. Type 'help' for available commands.`;

    setHistory(prev => [...prev, {
      input: trimmedInput,
      output,
      timestamp: new Date()
    }]);

    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex + 1;
        if (newIndex < commandHistory.length) {
          setHistoryIndex(newIndex);
          setInput(commandHistory[commandHistory.length - 1 - newIndex]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIndex = historyIndex - 1;
      if (newIndex >= 0) {
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text font-mono p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Terminal Header */}
        <div className="bg-gray-800 rounded-t-lg px-4 py-2 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm text-gray-400 ml-2">guest@izudd-portfolio ~ terminal</span>
          <button
            onClick={onModeChange}
            className="ml-auto text-xs text-terminal-green hover:text-terminal-blue transition-colors"
          >
            Switch to Visual Mode
          </button>
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className="bg-terminal-bg rounded-b-lg p-4 h-[calc(100vh-120px)] overflow-y-auto"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Command History */}
          {history.map((item, index) => (
            <div key={index} className="mb-4">
              {item.input && (
                <div className="flex items-center gap-2">
                  <span className="text-terminal-green">❯</span>
                  <span className="text-terminal-text">{item.input}</span>
                </div>
              )}
              <div className="mt-1 text-terminal-text whitespace-pre-wrap pl-4">
                {item.output}
              </div>
            </div>
          ))}

          {/* Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-terminal-green">❯</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-terminal-text caret-terminal-green"
              autoFocus
              spellCheck={false}
            />
            <span className="animate-cursor-blink">▋</span>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
