import { PortfolioConfig } from './portfolio.types';

/**
 * Single source of truth for portfolio content.
 * Edit values here — components read from this file only.
 */
export const portfolioConfig: PortfolioConfig = {
  meta: {
    siteTitle: 'Vishwas K H',
    description: 'Senior Software Engineer — backend systems, data pipelines, and quality tooling at Cisco.',
  },

  identity: {
    name: 'Vishwas K H',
    handle: 'vishwas.kh',
    role: 'Senior Software Engineer',
    company: 'Cisco',
    location: 'Bengaluru, India',
    tagline: 'I turn messy operational data into systems people actually trust.',
    availability: 'open to conversations',
  },

  about: {
    bio: [
      `I'm a backend and systems engineer with five years at Cisco building
       event-driven pipelines, NLP tooling, and quality orchestration platforms
       at scale. My day job lives at the intersection of distributed systems,
       data engineering, and product — turning noisy operational data into
       signals teams can act on.`,
      `Outside work I build things that scratch a personal itch or push a
       technical boundary. A double-ledger expense splitter with per-group
       currencies. An auth sidecar in Go — drop it next to any service and it
       handles the full token lifecycle over HMAC, RSA, or EdDSA. An infinite
       horizontal pixel canvas engineered specifically to see how far scale can
       be taken. A Steam-style time tracker for local codebases. I like problems
       that sound simple and aren't.`,
      `Strong opinions on typed interfaces, event contracts, and code that a
       future human can read without a two-hour archaeology session.`,
    ],
    facts: [
      { label: 'role',      value: 'Senior Software Engineer @ Cisco' },
      { label: 'location',  value: 'Bengaluru, India' },
      { label: 'focus',     value: 'backend · distributed systems · AI · Ops' },
      { label: 'currently', value: 'quality orchestration + AR proximity guidance' },
      { label: 'stack',     value: 'Java · Go · Python · Kafka · Elastic · NoSQL · RDBMS · Workflow Management · Typescript ' },
    ],
  },

  skills: [
    { label: 'languages',  items: ['TypeScript', 'Java', 'Python', 'SQL'] },
    { label: 'frameworks', items: ['Angular', 'Spring Boot', 'Node.js', 'REST', 'gRPC'] },
    { label: 'data',       items: ['Apache Kafka', 'Elasticsearch', 'PostgreSQL', 'MySQL', 'BERT', 'LDA'] },
    { label: 'platform',   items: ['Docker', 'Linux', 'Git', 'CI/CD'] },
    { label: 'practices',  items: ['system design', 'event-driven architecture', 'NLP pipelines', 'API design'] },
  ],

  experience: [
    {
      company:  'Cisco',
      role:     'Senior Software Engineer',
      period:   '2024 — present',
      location: 'Bengaluru',
      bullets: [
        'Architecting the next-generation Supply Chain Quality Orchestration platform — event-driven services on Kafka that ingest, correlate, and route quality signals across factory and field operations.',
        'Designing a real-time incident intelligence layer that converts raw case data into early-warning signals, cutting mean time-to-detection for recurring defects.',
        'Leading cross-functional technical design reviews; establishing service contracts and API standards adopted across the quality tooling org.',
      ],
    },
    {
      company:  'Cisco',
      role:     'Software Engineer II',
      period:   '2023 — 2024',
      bullets: [
        'Delivered end-to-end features for the CQI (Connected Quality Insights) dashboard — configurable threshold alerting, trend forecasting views, and a notification engine serving multiple business units.',
        'Built the case categorisation NLP pipeline (BERT + LDA) that automatically tags and clusters thousands of incident reports per week, replacing a fully manual triage process.',
        'Improved Elasticsearch query performance for large incident datasets, reducing p99 dashboard load times significantly.',
      ],
    },
    {
      company:  'Cisco',
      role:     'Software Engineer',
      period:   '2022 — 2023',
      bullets: [
        'Built and owned core Spring Boot microservices powering the quality tooling backend — REST APIs, scheduled data-sync jobs, and integration with internal supply-chain systems.',
        'Introduced structured logging and service-level metrics that gave the team first real observability into pipeline health.',
        'Owned Angular front-end modules for incident management workflows, collaborating directly with product and QA.',
      ],
    },
    {
      company:  'Cisco',
      role:     'Software Engineering Intern',
      period:   '2021',
      bullets: [
        'Joined the quality tooling team and built a prototype data-aggregation service that later became the foundation for CQI.',
        'Converted to full-time at the end of the internship — the team that became my first full-time home.',
      ],
    },
  ],

  projects: {
    professional: [
      {
        title: 'SCQO — Supply Chain Quality Orchestration',
        summary: 'Event-driven platform for managing product quality concerns across field and factory operations.',
        description:
          `Kafka-backed workflow engine that ingests quality signals from multiple
           upstream systems, correlates related incidents, and routes them to the
           right owners with full context. Provides real-time quality metrics,
           early-warning dashboards, and a structured communication layer between
           factory, field, and engineering teams. The central nervous system for
           Cisco's hardware quality response.`,
        tech: ['Angular', 'Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'SQL', 'Snowflake', 'JBPM'],
        period: '2023 — present',
        status: 'active',
      },
      {
        title: 'Case Categorisation — NLP Pipeline',
        summary: 'Automated classification of hardware incident reports using BERT and LDA topic modelling.',
        description:
          `End-to-end NLP pipeline that processes thousands of free-text incident
           reports weekly. BERT handles contextual language understanding for accurate
           category assignment; LDA surfaces recurring latent themes across large
           incident sets. Replaced a slow manual triage process and now drives
           early-detection dashboards that flag emerging defect clusters before
           volume spikes.`,
        tech: ['Python', 'BERT', 'LDA', 'NLP', 'Data Science', 'AIOps'],
        status: 'shipped',
      },
      {
        title: 'CQI — Connected Quality Insights',
        summary: 'Unified analytics dashboard that consolidates quality metrics across Cisco business units.',
        description:
          `Configurable alerting when key quality metrics breach thresholds,
           historical trend analysis, and forecasting views to surface issues
           ahead of escalation. Serves multiple business units with role-based
           views. Built the notification engine, trend modules, and Elasticsearch-
           backed query layer that powers sub-second filtering over large datasets.`,
        tech: ['Angular', 'Java', 'Spring Boot', 'SQL', 'Snowflake'],
        status: 'shipped',
      },
    ],

    personal: [
      {
        title: 'Chipin',
        summary: 'Expense splitting with double-entry ledger, analytics, and per-group custom currencies.',
        description:
          `Splitwise solves the surface problem; Chipin goes deeper. Every
           transaction is recorded as a proper double-entry ledger entry — no
           implicit balances, no drift. Groups can define their own unit of
           currency (useful for trips, shared houses, or any context where
           "points" make more sense than rupees). Analytics layer surfaces
           spending patterns, balance history, and settlement suggestions
           over time.`,
        tech: ['TypeScript', 'Node.js', 'PostgreSQL', 'Double-entry accounting'],
        status: 'MVP shipped',
      },
      {
        title: 'Auth Sidecar',
        summary: 'Drop-in authentication service in Go — handles the full token lifecycle for any project.',
        description:
          `A self-contained Go service that bundles alongside any application
           and owns auth end-to-end. Integrates with the main app either via
           API or direct DB access. Acts as an ingress gate — only authenticated
           requests are forwarded upstream. Supports HMAC, RSA, EdDSA and the
           broader JWT signing algorithm surface. The goal: zero auth boilerplate
           in your main service, ever.`,
        tech: ['Go', 'JWT', 'HMAC', 'RSA', 'EdDSA', 'API gateway'],
        status: 'shipped',
      },
      {
        title: 'Pixart',
        summary: 'Reddit r/place — but infinite horizontal scroll, built specifically to stress-test scale.',
        description:
          `Collaborative pixel canvas with no horizontal boundary. The conceit
           is simple: how far can you push a real-time, multi-user shared canvas
           before it breaks? Deliberate exercise in the "useless software" genre —
           the product is almost beside the point; the interesting problems are
           conflict resolution at write time, efficient viewport rendering of a
           canvas that has no right edge, and fan-out at high concurrency.`,
        tech: ['WebSockets', 'Canvas API', 'Distributed systems', 'TypeScript'],
        status: 'wip',
      },
      {
        title: 'Foundry',
        summary: 'Steam-style time tracker for local codebases — per-language analytics and project history.',
        description:
          `Java watchservice daemon that monitors whichever directories you
           point it at. Tracks active time per project, breaks it down by
           language, and builds a full timeline of when and how long you worked —
           exactly like Steam's playtime stats but for your own code. Stores
           history locally; surfaces it through an analytics dashboard. Built
           because "how much time have I actually spent on this?" should have
           a real answer.`,
        tech: ['Java', 'Watchservice API', 'SQLite', 'Analytics'],
        status: 'shipped',
      },
      {
        title: 'AR Locator',
        summary: 'Bluetooth triangulation and AR-guided navigation for GPS-denied environments.',
        description:
          `GPS falls apart indoors, underground, and in dense vertical spaces.
           AR Locator takes over once you're close enough: Bluetooth beacons
           triangulate the target user's position and guide you toward them.
           Later-stage work integrates an AR overlay so directions feel spatial,
           not map-based. Built for the real frustration of trying to find
           someone in a mall, festival, or multi-floor building.`,
        tech: ['Bluetooth LE', 'Triangulation', 'AR', 'Mobile'],
        status: 'wip',
      },
    ],
  },

  writing: [],

  socials: [
    { label: 'github',   handle: '@vishwas99',  href: 'https://github.com/vishwas99' },
    { label: 'linkedin', handle: 'vishwas-k-h', href: 'https://www.linkedin.com/in/vishwas-k-h-bb6a98189/' },
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