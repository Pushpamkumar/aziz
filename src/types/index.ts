export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  level: number;
  category: 'language' | 'platform' | 'soft';
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credential?: string;
  image: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
  gpa?: string;
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}