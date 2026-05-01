export type ProjectStatus = 'active' | 'shipped' | 'archived' | 'wip';

export interface LinkRef {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  summary: string;
  description?: string;
  tech: string[];
  period?: string;
  status?: ProjectStatus;
  links?: LinkRef[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
}

export interface Fact {
  label: string;
  value: string;
}

export interface Identity {
  name: string;
  handle: string;
  role: string;
  company?: string;
  location?: string;
  tagline: string;
  availability?: string;
}

export interface About {
  bio: string[];
  facts: Fact[];
}

export interface Social {
  label: string;
  handle: string;
  href: string;
}

export interface WritingEntry {
  label: string;
  href: string;
  date?: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface Meta {
  siteTitle: string;
  description: string;
}

export interface PortfolioConfig {
  identity: Identity;
  about: About;
  skills: SkillGroup[];
  experience: ExperienceItem[];
  projects: {
    professional: Project[];
    personal: Project[];
  };
  writing?: WritingEntry[];
  socials: Social[];
  email: string;
  nav: NavItem[];
  meta: Meta;
}
