import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'haqizud22@gmail.com',
      href: 'mailto:haqizud22@gmail.com',
      color: 'text-terminal-green'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/izudd',
      href: 'https://github.com/izudd',
      color: 'text-terminal-purple'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/abdullah-izuddin-alhaq-67a3843a6',
      href: 'https://linkedin.com/in/abdullah-izuddin-alhaq-67a3843a6',
      color: 'text-terminal-blue'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Bekasi, West Java, Indonesia',
      href: null,
      color: 'text-terminal-yellow'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      // EmailJS Configuration
      // Replace these with your EmailJS credentials
      const result = await emailjs.sendForm(
        'service_n8oapgh',     // Replace with your Service ID
        'template_lcfgaap',    // Replace with your Template ID
        formRef.current,
        't4PdSIH6tp8U_TDSl'      // Replace with your Public Key
      );

      if (result.text === 'OK') {
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact me directly via email.');
      setTimeout(() => setStatus('idle'), 5000);
      console.error('EmailJS Error:', error);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white py-20 px-4 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Get In <span className="text-terminal-green">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-terminal-green">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  const content = (
                    <div className="flex items-start gap-4 group cursor-pointer">
                      <div className={`${method.color} mt-1 transition-transform group-hover:scale-110`}>
                        <Icon size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm mb-1">{method.label}</p>
                        <p className="text-white group-hover:text-terminal-green transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  );

                  return method.href ? (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={method.label}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h4 className="text-lg font-bold mb-4 text-terminal-blue">
                Quick Info
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-terminal-green mr-2">▹</span>
                  <span>Available for freelance projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terminal-green mr-2">▹</span>
                  <span>Open to collaboration opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terminal-green mr-2">▹</span>
                  <span>Response time: Usually within 24 hours</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-terminal-blue">
                Send a Message
              </h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-terminal-green transition-colors text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-terminal-green transition-colors text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    disabled={status === 'loading'}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-terminal-green transition-colors text-white resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-500"
                  >
                    <FaCheckCircle />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500"
                  >
                    <FaExclamationCircle />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-6 py-3 bg-terminal-green text-gray-900 rounded-lg font-semibold hover:bg-terminal-blue hover:text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>

              <p className="text-gray-500 text-sm mt-4 text-center">
                Or reach out directly via email for faster response
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center text-gray-500"
        >
          <p className="font-mono">
            Built with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
          <p className="mt-2">
            © 2025 Izudd. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
