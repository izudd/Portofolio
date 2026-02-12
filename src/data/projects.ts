import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'pam-jaya-asset',
    title: 'PAM JAYA Asset Management System',
    description: 'Enterprise-level asset management system with GIS mapping for 200K+ records',
    longDescription: 'Comprehensive asset management platform for PAM JAYA handling over 200,000 asset records with integrated GIS mapping capabilities, geographic coordinate management, and robust import/export functionality.',
    tech: ['Laravel', 'MySQL', 'GIS', 'JavaScript', 'Bootstrap'],
    features: [
      'Manages 200K+ asset records with high performance',
      'Integrated GIS mapping with geographic coordinates',
      'Bulk import/export functionality (Excel/CSV)',
      'Advanced search and filtering system',
      'Role-based access control',
      'Real-time asset tracking and updates',
      'Comprehensive reporting dashboard'
    ],
    image: '/images/pam-jaya.png',
    year: '2024',
    category: 'fullstack',
  },
  {
    id: 'auditbro',
    title: 'AuditBro - Audit Management Platform',
    description: 'Professional audit management system following ISA standards',
    longDescription: 'Sophisticated audit management platform built with Laravel and React, featuring comprehensive audit workflows, client dashboards, working paper management, and automated progress tracking following International Standards on Auditing (ISA).',
    tech: ['Laravel', 'React', 'Next.js', 'MySQL', 'Tailwind CSS'],
    features: [
      'Client acceptance analysis module',
      'Risk assessment workflows',
      'Multi-step wizard interfaces (ISA compliant)',
      'Working paper management system',
      'Client dashboard with real-time updates',
      'Automated progress tracking',
      'Document generation and management',
      'Audit timeline and milestone tracking'
    ],
    image: '/images/auditbro.png',
    year: '2024',
    category: 'fullstack',
  },
  {
    id: 'pipeline-locator',
    title: 'Pipeline Locator',
    description: 'Advanced pipeline tracking and location management system',
    longDescription: 'Sophisticated pipeline location tracking system designed for infrastructure management, featuring real-time monitoring, geographic mapping, and comprehensive asset tracking for pipeline networks.',
    tech: ['Laravel', 'React', 'MySQL', 'Google Maps API', 'Tailwind CSS'],
    features: [
      'Real-time pipeline location tracking',
      'Interactive map visualization with markers',
      'Pipeline status monitoring and alerts',
      'Maintenance scheduling and history',
      'Multi-layer map views (satellite, terrain)',
      'Search and filter by location/status',
      'Mobile-responsive interface',
      'Export reports and analytics'
    ],
    image: '/images/pipeline-locator.png',
    year: '2024',
    category: 'fullstack',
  },
  {
    id: 'administrator-office',
    title: 'Administrator Office Management',
    description: 'Complete office administration and document management system',
    longDescription: 'Comprehensive office management platform for handling administrative tasks, document workflows, employee management, and office operations with integrated approval systems.',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap', 'PDF Generator'],
    features: [
      'Document management and archiving',
      'Multi-level approval workflows',
      'Employee directory and management',
      'Task assignment and tracking',
      'Meeting room booking system',
      'Automated notifications via email/SMS',
      'Role-based access control (RBAC)',
      'Comprehensive activity logs'
    ],
    image: '/images/administrator-office.png',
    year: '2024',
    category: 'fullstack',
  },
  {
    id: 'kelas-online',
    title: 'Kelas Online - E-Learning Platform',
    description: 'Modern online learning platform with interactive features',
    longDescription: 'Full-featured e-learning platform enabling online courses, live classes, assignments, quizzes, and student-teacher interactions with comprehensive learning management capabilities.',
    tech: ['Laravel', 'React', 'MySQL', 'WebRTC', 'Redis', 'Tailwind CSS'],
    features: [
      'Live video classes with WebRTC integration',
      'Course management with modules and lessons',
      'Interactive quizzes and assignments',
      'Real-time chat and discussions',
      'Progress tracking and analytics',
      'Certificate generation upon completion',
      'Payment integration for course enrollment',
      'Student and instructor dashboards'
    ],
    image: '/images/kelas-online.png',
    year: '2024',
    category: 'fullstack',
  },
  {
    id: 'skripsiboost',
    title: 'SkripsiBoost - Thesis Assistance Platform',
    description: 'AI-powered thesis assistance platform with payment integration',
    longDescription: 'Full-featured thesis assistance platform from concept to production, including admin dashboards, automated payment systems, email notifications, and comprehensive user management.',
    tech: ['Laravel', 'React', 'MySQL', 'Midtrans/Xendit', 'Tailwind CSS'],
    features: [
      'AI-powered thesis assistance',
      'Complete admin dashboard',
      'Payment gateway integration (Midtrans/Xendit)',
      'Automated email notifications',
      'User management system',
      'Progress tracking',
      'Document management',
      'Mobile-responsive design'
    ],
    image: '/images/skripsiboost.png',
    year: '2024',
    category: 'fullstack',
  },
  {
    id: 'bank-statement-processor',
    title: 'Bank Statement AI Processor',
    description: 'React-based bank statement processing with AI integration',
    longDescription: 'Modern bank statement processing application integrating Google OAuth via Supabase and Gemini AI API for intelligent document processing and analysis.',
    tech: ['React', 'Supabase', 'Gemini AI API', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Google OAuth authentication via Supabase',
      'AI-powered document processing (Gemini AI)',
      'Automated data extraction',
      'Real-time processing status',
      'Secure file upload and storage',
      'Row-Level Security (RLS) implementation',
      'Modern, responsive UI'
    ],
    image: '/images/bank-statement.png',
    year: '2025',
    category: 'web',
  },
  {
    id: 'auditra-monitoring',
    title: 'Auditra Monitoring Dashboard',
    description: 'Real-time audit monitoring dashboard with team leader tracking and progress analytics',
    longDescription: 'Comprehensive real-time monitoring dashboard for audit operations featuring team leader summaries, per-client progress tracking with section breakdowns, alert systems, and TV mode for office displays. Tracks 29+ audit engagements (PT) across multiple team leaders with critical/warning status indicators and deadline countdowns.',
    tech: ['Laravel', 'React', 'MySQL', 'Tailwind CSS', 'Real-time Sync'],
    features: [
      'Real-time audit progress monitoring per PT',
      'Team leader summary with active/completed tracking',
      'Section-based progress breakdown (Pre-Engagement, Risk Assessment, Risk Response, Completing & Reporting, General)',
      'Critical and warning alert system with 8+ alert types',
      'Deadline countdown with remaining days indicator',
      'TV Mode for office display monitoring',
      'Sync Now for instant data refresh',
      'Average progress calculation per team leader'
    ],
    image: '/images/auditra-monitoring.png',
    year: '2025',
    category: 'fullstack',
  },
  {
    id: 'imdacs-marketing',
    title: 'IMDACS Marketing System',
    description: 'Full-featured CRM and marketing management system with sales pipeline and KPI tracking',
    longDescription: 'Enterprise marketing management system (IMDACS) with complete CRM capabilities including client management, sales pipeline tracking, daily activity logging, EOD reporting, and team management. Features real-time KPI monitoring, revenue estimation, and conversion rate analytics for marketing supervisors and teams.',
    tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Chart.js'],
    features: [
      'Sales pipeline management (New, Follow Up, Visit, Presentasi, Penawaran, Negosiasi, Deal)',
      'Client portfolio management',
      'Daily activity logging and Quick Log feature',
      'EOD (End of Day) report submission with reminders',
      'Target & KPI tracking (daily, weekly, monthly)',
      'Pipeline revenue estimation and deal tracking',
      'Team management with supervisor roles',
      'Conversion rate analytics and reporting'
    ],
    image: '/images/imdacs-marketing.png',
    year: '2025',
    category: 'fullstack',
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(p => p.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(p => p.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 3);
};
