import { PortfolioConfig } from './portfolio.types';

/**
 * Single source of truth for portfolio content.
 * Edit values here — components read from this file only.
 */
export const portfolioConfig: PortfolioConfig = {
  meta: {
    siteTitle: 'Vishwas K H',
    description: 'Senior Software Engineer — building scalable, reliable systems.',
  },

  identity: {
    name: 'Vishwas K H',
    handle: 'vishwas.kh',
    role: 'Senior Software Engineer',
    company: 'Cisco',
    location: 'Bengaluru, India',
    tagline: 'Building scalable, reliable software — quietly and carefully.',
    availability: 'open to conversations',
  },

  about: {
    bio: [
      `I build backend systems and web platforms that turn messy real-world
       data into something teams can act on. My day job is supply-chain
       quality tooling; my nights are about small, sharp side projects.`,
      `I like strong types, calm UIs, and code that a future human (usually
       me) can still read six months later.`,
    ],
    facts: [
      { label: 'role',      value: 'Senior Software Engineer @ Cisco' },
      { label: 'location',  value: 'Bengaluru, India' },
      { label: 'focus',     value: 'backend, data, tooling' },
      { label: 'currently', value: 'quality orchestration platforms' },
    ],
  },

  skills: [
    { label: 'languages',  items: ['TypeScript', 'Java', 'Python', 'SQL'] },
    { label: 'frameworks', items: ['Angular', 'Spring', 'Node.js'] },
    { label: 'data',       items: ['Kafka', 'Elastic', 'PostgreSQL', 'MySQL'] },
    { label: 'platform',   items: ['Docker', 'Linux', 'Git', 'REST / gRPC'] },
  ],

  experience: [
    {
      company:  'Cisco',
      role:     'Senior Software Engineer',
      period:   '2024 — present',
      location: 'Bengaluru',
      bullets: [
        'Lead work on supply-chain quality orchestration platforms.',
        'Design services and pipelines that turn incident data into signals.',
      ],
    },
    {
      company:  'Cisco',
      role:     'Software Engineer II',
      period:   '2023 — 2024',
      bullets: [
        'Shipped features across front-end and back-end for the CQI dashboard.',
      ],
    },
    {
      company:  'Cisco',
      role:     'Software Engineer',
      period:   '2022 — 2023',
      bullets: [
        'Built and maintained core services for quality tooling.',
      ],
    },
    {
      company:  'Cisco',
      role:     'Software Engineering Intern',
      period:   '2021',
      bullets: [
        'Joined the team that would later become my first full-time home.',
      ],
    },
  ],

  projects: {
    professional: [
      {
        title: 'SCQO — Supply Chain Quality Orchestration',
        summary: 'Workflow-centric platform for managing product quality concerns across field and factory.',
        description:
          `Real-time quality metrics, early-warning signals, and clear
           communication paths between stakeholders. Central place to
           collect, analyse, and act on quality-related data.`,
        tech: ['Angular', 'Java', 'Spring', 'Kafka', 'SQL'],
        period: '2023 — present',
        status: 'active',
      },
      {
        title: 'Case Categorisation',
        summary: 'NLP pipeline that turns incident reports into actionable categories and trend signals.',
        description:
          `BERT for contextual understanding, LDA for topic modelling.
           Categorises cases, surfaces themes, and forecasts emerging
           issues across large incident datasets.`,
        tech: ['Python', 'BERT', 'LDA', 'Data Science'],
        status: 'shipped',
      },
      {
        title: 'CQI — Connected Quality Insights',
        summary: 'Analytics dashboard that unifies quality metrics across business units.',
        description:
          `Configurable notifications when metrics drift outside
           thresholds, and historical trend analysis to forecast
           potential issues before they arise.`,
        tech: ['Angular', 'Java', 'SQL'],
        status: 'shipped',
      },
    ],

    // Fill these in later — the section stays empty until you do.
    personal: [
      // {
      //   title: 'project-name',
      //   summary: 'one line about what it does.',
      //   description: 'a paragraph or two, if you want.',
      //   tech: ['Tech', 'Stack'],
      //   period: '2025',
      //   status: 'wip',
      //   links: [
      //     { label: 'code',  href: 'https://github.com/...' },
      //     { label: 'live',  href: 'https://...' },
      //   ],
      // },
    ],
  },

  // Optional — the section hides itself when empty.
  writing: [],

  socials: [
    { label: 'github',   handle: '@vishwas99',  href: 'https://github.com/vishwas99' },
    { label: 'linkedin', handle: 'vishwas-k-h', href: 'https://www.linkedin.com/in/vishwas-k-h-bb6a98189/' },
    { label: 'x',        handle: '@khvat99',    href: 'https://x.com/khvat99' },
  ],

  email: 'vishwasravali@gmail.com',

  nav: [
    { id: 'hero',        label: 'home' },
    { id: 'about',       label: 'about' },
    { id: 'work',        label: 'work' },
    { id: 'projects',    label: 'projects' },
    { id: 'experience',  label: 'experience' },
    { id: 'contact',     label: 'contact' },
  ],
};
