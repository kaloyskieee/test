import {
  Code2,
  Layout,
  Server,
  Database,
  GitBranch,
  PenTool,
  Cpu,
  Layers,
  Github,
  Linkedin,
  Mail,
  Zap,
  BookOpen,
  Gamepad2,
  Sparkles,
  Rocket,
  Users,
  type LucideIcon,
} from 'lucide-react';

export const personalInfo = {
  name: 'Your Name',
  monogram: 'YN',
  role: 'IT Student • Aspiring Developer',
  tagline: 'Turning Ideas Into Digital Experiences',
  intro:
    "I'm an Information Technology student passionate about web development, software engineering, UI/UX design, and emerging technologies. I love turning ideas into functional, elegant digital products.",
  email: 'youremail@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  bio: [
    "I'm an IT student who enjoys solving problems, building useful applications, and learning new technologies. My approach is hands-on — I learn by building, breaking, and improving.",
    "I'm drawn to the intersection of design and engineering, where clean code meets thoughtful user experiences. Every project is an opportunity to explore something new.",
    "My goal is to grow into a well-rounded software developer who can take an idea from concept to deployment, with a strong foundation in both frontend craft and backend systems.",
  ],
};

export const stats: { value: string; label: string }[] = [
  { value: '15+', label: 'Projects Completed' },
  { value: '20+', label: 'Technologies Explored' },
  { value: '3', label: 'Years of Learning' },
];

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: { name: string; icon: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'React', icon: '⚛️' },
      { name: 'Tailwind CSS', icon: '💨' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python', icon: '🐍' },
      { name: 'PHP', icon: '🐘' },
      { name: 'Express', icon: '🚂' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'MySQL', icon: '🐬' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'MongoDB', icon: '🍃' },
    ],
  },
  {
    title: 'Tools',
    icon: GitBranch,
    skills: [
      { name: 'Git', icon: '📋' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'VS Code', icon: '💻' },
      { name: 'Figma', icon: '🎭' },
    ],
  },
  {
    title: 'Other Interests',
    icon: Sparkles,
    skills: [
      { name: 'UI/UX Design', icon: '✨' },
      { name: 'Responsive Design', icon: '📱' },
      { name: 'Networking', icon: '📡' },
      { name: 'Cybersecurity', icon: '🔐' },
      { name: 'Cloud Computing', icon: '☁️' },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  accentIcon: LucideIcon;
  projectUrl: string;
  sourceUrl: string;
};

export const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description:
      'A modern, animated portfolio built with React, TypeScript, and Framer Motion — featuring smooth scroll animations, a responsive layout, and a sleek dark aesthetic.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'from-indigo-500/20 to-blue-500/10',
    accentIcon: Code2,
    projectUrl: '#',
    sourceUrl: 'https://github.com/yourusername',
  },
  {
    title: 'Student Management System',
    description:
      'A web-based system for managing student records, enrollment, and grades. Includes role-based access, search, and reporting features.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    gradient: 'from-cyan-500/20 to-teal-500/10',
    accentIcon: Users,
    projectUrl: '#',
    sourceUrl: 'https://github.com/yourusername',
  },
  {
    title: 'Task Management App',
    description:
      'A Kanban-style task manager with drag-and-drop boards, priorities, and deadlines. Data persists via a lightweight backend API.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    gradient: 'from-violet-500/20 to-purple-500/10',
    accentIcon: Layers,
    projectUrl: '#',
    sourceUrl: 'https://github.com/yourusername',
  },
  {
    title: 'E-Commerce Website',
    description:
      'A full-featured online store with product listings, cart, checkout flow, and an admin dashboard for managing inventory.',
    tech: ['React', 'Tailwind CSS', 'Firebase', 'Stripe'],
    gradient: 'from-emerald-500/20 to-green-500/10',
    accentIcon: Rocket,
    projectUrl: '#',
    sourceUrl: 'https://github.com/yourusername',
  },
  {
    title: 'Campus Utility App',
    description:
      'A student utility app for campus events, announcements, and resource booking — designed with a clean, mobile-first interface.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    gradient: 'from-amber-500/20 to-orange-500/10',
    accentIcon: Zap,
    projectUrl: '#',
    sourceUrl: 'https://github.com/yourusername',
  },
];

export type EducationItem = {
  period: string;
  title: string;
  institution: string;
  description: string;
  tags: string[];
};

export const education: EducationItem[] = [
  {
    period: '2022 — 2026',
    title: 'B.Sc. in Information Technology',
    institution: 'Your University Name',
    description:
      'Pursuing a Bachelor of Science in Information Technology with a focus on software development, web technologies, and systems design.',
    tags: ['Software Engineering', 'Web Development', 'Database Systems', 'Networking'],
  },
  {
    period: '2023',
    title: 'Web Development Bootcamp',
    institution: 'Online / Self-Directed',
    description:
      'Completed an intensive self-directed program covering modern frontend and backend development with React, Node.js, and database fundamentals.',
    tags: ['React', 'Node.js', 'REST APIs', 'Git'],
  },
  {
    period: '2024',
    title: 'UI/UX Design Workshop',
    institution: 'Online Course',
    description:
      'Studied design thinking, wireframing, prototyping, and user-centered design principles using Figma.',
    tags: ['Figma', 'Design Thinking', 'Prototyping', 'Wireframing'],
  },
  {
    period: 'Ongoing',
    title: 'Continuous Learning & Certifications',
    institution: 'Various Platforms',
    description:
      'Actively learning cloud computing, cybersecurity fundamentals, and exploring open-source contributions.',
    tags: ['Cloud', 'Cybersecurity', 'Open Source', 'Python'],
  },
];

export type Interest = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const interests: Interest[] = [
  {
    title: 'Building Side Projects',
    description: 'I love turning random ideas into small, working apps over a weekend.',
    icon: Rocket,
  },
  {
    title: 'Exploring New Technologies',
    description: 'Always curious about new frameworks, tools, and emerging tech trends.',
    icon: Cpu,
  },
  {
    title: 'UI/UX Design',
    description: 'Designing interfaces that feel intuitive and look beautiful.',
    icon: PenTool,
  },
  {
    title: 'Gaming & Technology',
    description: 'Gaming inspires my interest in interactive, real-time experiences.',
    icon: Gamepad2,
  },
  {
    title: 'Open Source Projects',
    description: 'Exploring how collaborative code builds tools used by millions.',
    icon: Github,
  },
  {
    title: 'Continuous Learning',
    description: 'Every day is a chance to learn something new and level up.',
    icon: BookOpen,
  },
];

export const socialLinks = {
  github: { url: personalInfo.github, icon: Github, label: 'GitHub' },
  linkedin: { url: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
  email: { url: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
