import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaLinkedin, FaBuilding, FaPause, FaPlay } from 'react-icons/fa';
import { BoxReveal } from '../RevealAnimations';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image?: string;
  rating: number;
  text: string;
  linkedIn?: string;
  date: string;
}

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Auto-rotate interval (in milliseconds)
  const AUTO_ROTATE_INTERVAL = 5000; // 5 seconds - adjust as needed!

  // Example testimonials - REPLACE WITH YOUR REAL ONES!
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Budi Santoso',
      role: 'CEO',
      company: 'TechStart Indonesia',
      rating: 5,
      text: 'Izudd delivered an exceptional asset management system for our company. His technical expertise and attention to detail exceeded our expectations. The system handles 200K+ records flawlessly and the GIS integration is superb. Highly recommended!',
      linkedIn: 'https://linkedin.com/in/budisantoso',
      date: 'December 2024'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'Digital Solutions Ltd',
      rating: 5,
      text: 'Working with Izudd was a pleasure from start to finish. He built our audit management platform (AuditBro) with incredible precision. The multi-step wizards and automated tracking features have transformed how we manage client audits. A true professional!',
      linkedIn: 'https://linkedin.com/in/sarahjohnson',
      date: 'November 2024'
    },
    {
      id: 3,
      name: 'Ahmad Wijaya',
      role: 'Operations Director',
      company: 'PAM JAYA',
      rating: 5,
      text: 'The asset management system Izudd developed for us is nothing short of amazing. Real-time GIS mapping, comprehensive reporting, and seamless data management. He understood our complex requirements and delivered beyond expectations.',
      linkedIn: 'https://linkedin.com/in/ahmadwijaya',
      date: 'October 2024'
    },
    {
      id: 4,
      name: 'Linda Chen',
      role: 'Founder',
      company: 'SkripsiBoost',
      rating: 5,
      text: 'Izudd built our entire thesis assistance platform from scratch. The payment integration, admin dashboard, and user experience are flawless. He completed the project ahead of schedule and within budget. Best developer we\'ve worked with!',
      linkedIn: 'https://linkedin.com/in/lindachen',
      date: 'September 2024'
    },
    {
      id: 5,
      name: 'David Martinez',
      role: 'CTO',
      company: 'FinTech Innovations',
      rating: 5,
      text: 'Izudd\'s expertise in full-stack development is impressive. He created our bank statement processing tool with AI integration that works perfectly. Clean code, excellent documentation, and responsive communication throughout the project.',
      linkedIn: 'https://linkedin.com/in/davidmartinez',
      date: 'August 2024'
    }
  ];

  // Progress bar effect
  useEffect(() => {
    if (!isAutoPlaying || isPaused) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / AUTO_ROTATE_INTERVAL) * 100;
      
      if (newProgress >= 100) {
        setProgress(0);
      } else {
        setProgress(newProgress);
      }
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(progressInterval);
  }, [currentIndex, isAutoPlaying, isPaused]);

  // Auto-rotate effect
  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  // Render stars
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < rating ? 'text-yellow-400' : 'text-gray-600'}
            size={20}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="min-h-screen bg-gray-900 text-white py-20 px-4 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <BoxReveal boxColor="#0DBC79" duration={0.5}>
            <h2 className="text-5xl font-bold mb-4">
              Client <span className="text-terminal-green">Testimonials</span>
            </h2>
          </BoxReveal>
          <BoxReveal boxColor="#3B78FF" duration={0.5} delay={0.2}>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Don't just take my word for it - hear what clients have to say about working together
            </p>
          </BoxReveal>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-terminal-green/10 p-4 rounded-full">
                  <FaQuoteLeft className="text-terminal-green text-3xl" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {renderStars(currentTestimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 text-lg md:text-xl text-center leading-relaxed mb-8 italic"
              >
                "{currentTestimonial.text}"
              </motion.p>

              {/* Client Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center gap-4"
              >
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-terminal-green to-terminal-blue flex items-center justify-center text-2xl font-bold">
                  {currentTestimonial.name.charAt(0)}
                </div>

                {/* Name & Role */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-terminal-green font-medium mb-1">
                    {currentTestimonial.role}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-gray-400">
                    <FaBuilding size={14} />
                    <span className="text-sm">{currentTestimonial.company}</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">
                    {currentTestimonial.date}
                  </p>
                </div>

                {/* LinkedIn Link */}
                {currentTestimonial.linkedIn && (
                  <a
                    href={currentTestimonial.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-terminal-blue hover:text-terminal-green transition-colors"
                  >
                    <FaLinkedin size={20} />
                    <span className="text-sm">View Profile</span>
                  </a>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-gray-800 hover:bg-terminal-green p-4 rounded-full border border-gray-700 transition-all duration-300 transform hover:scale-110 group"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-white group-hover:text-gray-900" size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-gray-800 hover:bg-terminal-green p-4 rounded-full border border-gray-700 transition-all duration-300 transform hover:scale-110 group"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-white group-hover:text-gray-900" size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        {isAutoPlaying && !isPaused && (
          <div className="mt-6">
            <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-terminal-green to-terminal-blue"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.05 }}
              />
            </div>
          </div>
        )}

        {/* Dots Navigation & Auto-play Control */}
        <div className="flex justify-center items-center gap-6 mt-12">
          {/* Play/Pause Button */}
          <button
            onClick={toggleAutoPlay}
            className="group relative"
            aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
          >
            <div className="bg-gray-800 hover:bg-terminal-green p-3 rounded-full border border-gray-700 transition-all duration-300 transform hover:scale-110">
              {isAutoPlaying ? (
                <FaPause className="text-white group-hover:text-gray-900" size={16} />
              ) : (
                <FaPlay className="text-white group-hover:text-gray-900 ml-0.5" size={16} />
              )}
            </div>
            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap border border-gray-700">
                {isAutoPlaying ? 'Pause' : 'Play'}
              </div>
            </div>
          </button>

          {/* Dots */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-terminal-green'
                    : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          {isAutoPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-terminal-green text-sm"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2 h-2 bg-terminal-green rounded-full"
              />
              <span className="text-xs text-gray-500">Auto-playing</span>
            </motion.div>
          )}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
            <div className="text-4xl font-bold text-terminal-green mb-2">15+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
            <div className="text-4xl font-bold text-terminal-blue mb-2">30+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
            <div className="text-4xl font-bold text-terminal-yellow mb-2">5.0</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Ready to work together? Let's create something amazing!
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-terminal-green text-gray-900 rounded-lg font-semibold hover:bg-terminal-blue hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};