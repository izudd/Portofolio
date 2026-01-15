import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../../data/projects';
import { FaGithub, FaExternalLinkAlt, FaImage, FaTimes } from 'react-icons/fa';
import type { Project } from '../../types';

export const Projects = () => {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleImageError = (projectId: string) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  };

  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Featured <span className="text-terminal-green">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've built - from enterprise asset management to AI-powered platforms
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-terminal-green/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image/Thumbnail */}
              {project.image && !imageErrors[project.id] ? (
                <div 
                  className="relative h-48 bg-gray-700 overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && openLightbox(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={() => handleImageError(project.id)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Hover overlay with zoom icon */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-terminal-green text-gray-900 rounded-full p-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                      <p className="text-white text-sm mt-2 text-center font-semibold">Click to view</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 bg-terminal-green/20 text-terminal-green text-xs rounded-full border border-terminal-green/50">
                      {project.category}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <FaImage className="text-gray-600 text-4xl mb-2 mx-auto" />
                    <p className="text-gray-500 text-sm">Screenshot Coming Soon</p>
                  </div>
                </div>
              )}

              {/* Project Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-terminal-green">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">{project.year}</p>
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-terminal-green transition-colors"
                        title="View on GitHub"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-terminal-blue transition-colors"
                        title="View Live Demo"
                      >
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="p-6 border-b border-gray-700">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-terminal-green text-sm rounded-full border border-terminal-green/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-start">
                      <span className="text-terminal-green mr-2">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {project.features.length > 4 && (
                    <li className="text-sm text-gray-500 italic">
                      + {project.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Want to see more? Check out my{' '}
            <a
              href="https://github.com/izudd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-green hover:text-terminal-blue transition-colors underline"
            >
              GitHub profile
            </a>
          </p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-gray-800 rounded-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-gray-900/90 hover:bg-terminal-green text-white hover:text-gray-900 rounded-full p-3 transition-all duration-300 hover:rotate-90"
                aria-label="Close"
              >
                <FaTimes size={24} />
              </button>

              {/* Image */}
              {selectedProject.image && !imageErrors[selectedProject.id] ? (
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto max-h-[60vh] object-contain bg-gray-900"
                    onError={() => handleImageError(selectedProject.id)}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                    <span className="inline-block px-3 py-1 bg-terminal-green/20 text-terminal-green text-sm rounded-full border border-terminal-green/50">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="h-64 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <FaImage className="text-gray-600 text-6xl mb-4 mx-auto" />
                    <p className="text-gray-400">No preview available</p>
                  </div>
                </div>
              )}

              {/* Project Details */}
              <div className="p-8">
                {/* Title and Links */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-terminal-green mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-400">{selectedProject.year}</p>
                  </div>
                  <div className="flex gap-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-terminal-green transition-colors"
                        title="View on GitHub"
                      >
                        <FaGithub size={28} />
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-terminal-blue transition-colors"
                        title="View Live Demo"
                      >
                        <FaExternalLinkAlt size={24} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-300 mb-3">About This Project</h4>
                  <p className="text-gray-400 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-300 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-700 text-terminal-green rounded-full border border-terminal-green/30 hover:bg-terminal-green/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-300 mb-3">Key Features</h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-400 flex items-start">
                        <span className="text-terminal-green mr-2 mt-1">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
