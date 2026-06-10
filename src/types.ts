export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "soft";
  iconName: string; // references Lucide icon name
  level: number; // percentage value from 0 to 100
}

export interface TimelineItem {
  id: string;
  years: string;
  role: string;
  company: string;
  description: string;
  type: "experience" | "education";
  highlights?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  iconName: string;
  description?: string;
}
