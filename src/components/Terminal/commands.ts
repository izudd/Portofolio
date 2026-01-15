import { projects } from '../../data/projects';
import { skills } from '../../data/skills';

type CommandExecuteFunction = (args?: string[]) => string;

interface Command {
  description: string;
  execute: CommandExecuteFunction;
}

type Commands = {
  [key: string]: Command;
};

export const commands: Commands = {
  help: {
    description: 'Show available commands',
    execute: (): string => {
      const commandList: string = Object.entries(commands)
        .map(([cmd, { description }]) => `  ${cmd.padEnd(15)} - ${description}`)
        .join('\n');
      
      return `Available commands:\n\n${commandList}\n\nTip: Type 'projects' to see my work or 'about' to know more about me!`;
    }
  },

  about: {
    description: 'Learn about me',
    execute: (): string => {
      return `Hey! I'm Izudd 👋

🎓 STT Terpadu Nurul Fikri
💼 IT Developer at KAP Buadiandru & Rekan

I'm a full-stack developer passionate about building enterprise-level systems.
Currently working on my thesis about green marketing while developing
professional-grade applications for clients.

Specializing in:
• Laravel & React ecosystems
• Enterprise asset management systems
• Payment gateway integrations
• GIS mapping & data visualization
• Building practical solutions for real business needs

Type 'skills' to see my tech stack or 'projects' to view my work!`;
    }
  },

  skills: {
    description: 'View my technical skills',
    execute: (args?: string[]): string => {
      if (args && args.length > 0) {
        const category = args[0];
        const skillCategory = skills.find(
          s => s.category.toLowerCase() === category.toLowerCase()
        );
        
        if (skillCategory) {
          const skillList = skillCategory.items
            .map(skill => {
              const stars = '★'.repeat(skill.level) + '☆'.repeat(5 - skill.level);
              return `  ${skill.name.padEnd(20)} ${stars}`;
            })
            .join('\n');
          
          return `${skillCategory.category} Skills:\n\n${skillList}`;
        }
        return `Category '${category}' not found. Available: Backend, Frontend, Tools, Payment, Other`;
      }

      return skills.map(category => {
        const skillList = category.items
          .map(skill => {
            const stars = '★'.repeat(skill.level) + '☆'.repeat(5 - skill.level);
            return `  ${skill.name.padEnd(20)} ${stars}`;
          })
          .join('\n');
        
        return `${category.category}:\n${skillList}`;
      }).join('\n\n');
    }
  },

  projects: {
    description: 'View my projects',
    execute: (args?: string[]): string => {
      if (args && args.length > 0) {
        const projectId = args[0];
        const project = projects.find(p => p.id === projectId);
        
        if (project) {
          return `${project.title}
${'='.repeat(project.title.length)}

${project.longDescription}

Tech Stack: ${project.tech.join(', ')}

Key Features:
${project.features.map(f => `• ${f}`).join('\n')}

Year: ${project.year}
Category: ${project.category}

${project.github ? `GitHub: ${project.github}` : ''}
${project.demo ? `Demo: ${project.demo}` : ''}`;
        }
        return `Project '${projectId}' not found. Try: ${projects.map(p => p.id).join(', ')}`;
      }

      return `My Recent Projects:
${projects.map((p, i) => 
  `\n${i + 1}. ${p.title}
   ID: ${p.id}
   ${p.description}
   Tech: ${p.tech.slice(0, 3).join(', ')}${p.tech.length > 3 ? '...' : ''}
   
   Type: projects ${p.id} for details`
).join('\n')}`;
    }
  },

  contact: {
    description: 'Get my contact information',
    execute: (): string => {
      return `📧 Contact Me:

Email: Haqizud22@gmail.com
GitHub: github.com/izudd
LinkedIn: linkedin.com/in/abdullah-izuddin-alhaq-67a3843a6
Location: Bogor, West Java, Indonesia

I'm always open to discussing new projects, creative ideas,
or opportunities to be part of your visions!

Feel free to reach out! 🚀`;
    }
  },

  clear: {
    description: 'Clear the terminal',
    execute: (): string => 'CLEAR_TERMINAL'
  },

  experience: {
    description: 'View my work experience',
    execute: (): string => {
      return `Work Experience:

🏢 IT Developer @ KAP Buadiandru & Rekan
   Public Accounting Firm
   
   Key Projects:
   • PAM JAYA Asset Management (200K+ records)
   • AuditBro - Audit Management Platform
   • SkripsiBoost - Thesis Assistance Platform
   
   Technologies: Laravel, React, MySQL, GIS, Payment Gateways

📚 Currently:
   • STT Terpadu Nurul Fikri
   • Working on thesis: Green Marketing & Purchase Intention
   • Building enterprise-level systems

Type 'projects' to see detailed project information!`;
    }
  },

  echo: {
    description: 'Echo a message',
    execute: (args?: string[]): string => {
      return args && args.length > 0 ? args.join(' ') : '';
    }
  },

  // Easter eggs
  'sudo': {
    description: 'Try to get admin access',
    execute: (): string => 'Nice try! But you already have all the access you need 😄'
  },

  'ls': {
    description: 'List directory contents',
    execute: (): string => `projects/
skills/
experience/
contact/
about.txt

Use 'help' to see available commands!`
  },

  'whoami': {
    description: 'Display current user',
    execute: (): string => 'guest@izudd-portfolio'
  },

  'date': {
    description: 'Display current date',
    execute: (): string => new Date().toLocaleString()
  },
};

export type CommandKey = keyof typeof commands;

export const getCommand = (cmd: string): typeof commands[CommandKey] | undefined => {
  return commands[cmd as CommandKey];
};

export const parseCommand = (input: string): { command: string; args: string[] } => {
  const parts = input.trim().split(/\s+/);
  return {
    command: parts[0],
    args: parts.slice(1)
  };
};