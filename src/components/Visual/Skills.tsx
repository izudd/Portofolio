import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="min-h-screen bg-gray-800 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Technical <span className="text-terminal-blue">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My expertise spans across modern web technologies and enterprise solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-terminal-blue transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-terminal-blue flex items-center">
                <span className="w-2 h-2 bg-terminal-blue rounded-full mr-3"></span>
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-terminal-green text-sm font-mono">
                        {skill.level}/5
                      </span>
                    </div>
                    
                    {/* Skill Bar */}
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-terminal-green to-terminal-blue rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-terminal-green">
              Always Learning
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm constantly expanding my skillset and staying up-to-date with the latest technologies.
              Currently exploring advanced AI integrations, cloud infrastructure, and microservices architecture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
