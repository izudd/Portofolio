import { Skill } from '../types';

export const skills: Skill[] = [
  {
    category: 'Backend',
    items: [
      { name: 'Laravel', level: 5 },
      { name: 'PHP', level: 5 },
      { name: 'Node.js', level: 4 },
      { name: 'MySQL', level: 5 },
      { name: 'PostgreSQL', level: 4 },
      { name: 'RESTful API', level: 5 },
    ]
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 5 },
      { name: 'Next.js', level: 4 },
      { name: 'TypeScript', level: 4 },
      { name: 'JavaScript', level: 5 },
      { name: 'Tailwind CSS', level: 5 },
      { name: 'Bootstrap', level: 4 },
    ]
  },
  {
    category: 'Tools & Services',
    items: [
      { name: 'Git', level: 5 },
      { name: 'Supabase', level: 4 },
      { name: 'Vercel', level: 4 },
      { name: 'Hostinger', level: 4 },
      { name: 'Gemini AI API', level: 3 },
    ]
  },
  {
    category: 'Payment Integration',
    items: [
      { name: 'Midtrans', level: 4 },
      { name: 'Xendit', level: 4 },
    ]
  },
  {
    category: 'Other',
    items: [
      { name: 'GIS/Mapping', level: 4 },
      { name: 'OAuth Integration', level: 4 },
      { name: 'Email Services', level: 4 },
      { name: 'Data Import/Export', level: 5 },
    ]
  }
];

export const getAllSkills = (): string[] => {
  return skills.flatMap(category => 
    category.items.map(skill => skill.name)
  );
};

export const getSkillsByCategory = (category: string): Skill | undefined => {
  return skills.find(s => s.category.toLowerCase() === category.toLowerCase());
};
