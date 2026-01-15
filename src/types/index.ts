export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  github?: string;
  demo?: string;
  image?: string;
  year: string;
  category: 'web' | 'fullstack' | 'mobile' | 'other';
}

export interface Skill {
  category: string;
  items: {
    name: string;
    level: number; // 1-5
    icon?: string;
  }[];
}

export interface TerminalCommand {
  command: string;
  description: string;
  execute: (args?: string[]) => string | React.ReactNode;
}

export type ViewMode = 'terminal' | 'visual';

export interface CommandHistory {
  input: string;
  output: string | React.ReactNode;
  timestamp: Date;
}
