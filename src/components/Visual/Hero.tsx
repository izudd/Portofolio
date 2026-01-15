import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-terminal-green text-lg font-mono">Hello World, I'm</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-terminal-blue via-terminal-purple to-terminal-green bg-clip-text text-transparent"
          >
            Izudd
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl text-gray-300 mb-8 font-light"
          >
            Full-Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Building enterprise-level systems with <span className="text-terminal-green">Laravel</span> and{' '}
            <span className="text-terminal-blue">React</span>. Passionate about creating practical solutions
            for real-world business needs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-terminal-green text-gray-900 rounded-lg font-semibold hover:bg-terminal-blue hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-terminal-green text-terminal-green rounded-lg font-semibold hover:bg-terminal-green hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com/izudd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-terminal-green transition-colors duration-300 transform hover:scale-110"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://linkedin.com/in/abdullah-izuddin-alhaq-67a3843a6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-terminal-blue transition-colors duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="mailto:Haqizud22@gmail.com"
              className="text-gray-400 hover:text-terminal-purple transition-colors duration-300 transform hover:scale-110"
            >
              <FaEnvelope size={32} />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-gray-500"
            >
              <div className="text-sm mb-2">Scroll to explore</div>
              <div className="text-2xl">↓</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
