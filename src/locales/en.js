// All site copy in English. The Russian version is ru.js (same structure).
// Prices, links, images and tags are not translated and live in src/data/.
export default {
  meta: {
    title: 'Matvei — fullstack developer · React, Next.js, Node.js',
    description: 'Fullstack developer: React, Next.js, Node.js, PHP. Websites, web apps, integrations and Telegram bots. Services and contacts.',
  },

  ui: {
    back: '← Back',
    navLabel: 'Sections',
    langLabel: 'Language',
    sceneLabel: 'A cozy developer room: a desk, three monitors, a lamp, a cat and a mug of coffee',
    openSection: (name) => `Open the “${name}” section`,
    petCat: 'Pet the cat',
    toggleLamp: 'Turn the lamp on or off',
    phoneCta: 'Write me',
    monitorProjects: 'Projects',
    monitorProjectsSub: 'selected work',
    monitorServices: 'Services',
    from: 'from',
    email: 'Email',
    openSite: 'Open site ↗',
    screenshot: (file) => `screenshot: ${file}`,
    tgPlaceholder: '[placeholder]',
  },

  profile: {
    brand: 'Matvei · Dev',
    hero: {
      before: 'Frontend and backend — ',
      accent: 'from design to production',
      after: '.',
      text: 'React, Next.js, Node.js, PHP. Websites, web apps, integrations and automation, end to end.',
    },
    hint: 'screens, developer, cat and lamp are clickable',
    contacts: {
      title: "Let's discuss your project",
      lead: 'Write me in whichever messenger you prefer. I usually reply within a couple of hours.',
    },
  },

  sections: {
    about: { name: 'About me', label: 'About me', mobileHint: 'who I am' },
    skills: { name: 'Skills', label: 'Skills', mobileHint: 'tech stack' },
    projects: { name: 'Projects', label: 'Projects', mobileHint: 'selected work' },
    services: { name: 'Services', label: 'Services', mobileLabel: 'Services & prices' },
    contacts: { name: 'Contact', label: 'Contact', mobileLabel: 'Contact me' },
  },

  about: {
    title: "Hi, I'm Matvei",
    lead: 'Fullstack developer. I build interfaces from Figma designs and the backend behind them: from markup to APIs and databases. I write clean, typed code, test it, and explain things in plain language. I work with Claude Code every day, so I move fast without losing quality.',
    points: [
      { title: 'Pixel-perfect from the design', text: 'Figma-accurate markup down to the pixel, responsive on every screen and cross-browser.' },
      { title: 'Frontend + backend in one pair of hands', text: 'No need to hire two contractors: I agree on and build the interface, API, database and deployment myself.' },
      { title: 'Code that is easy to live with', text: 'TypeScript, tests, ESLint and Prettier, Git with a clear history. I hand projects over so that any developer can pick them up.' },
    ],
  },

  skills: {
    title: 'Skills & stack',
    lead: 'What I use on real projects.',
    groups: [
      { title: 'Languages', chips: ['JavaScript ES6+', 'TypeScript', 'PHP', 'SQL', 'HTML5', 'CSS3 / SCSS', 'BEM'] },
      { title: 'Frontend', chips: ['React', 'Next.js (App Router, SSR)', 'Vue 3', 'TanStack Router', 'Redux Toolkit', 'RTK Query', 'React Query', 'Pinia'] },
      { title: 'UI & markup', chips: ['Tailwind', 'MUI', 'shadcn/ui', 'CSS Modules', 'Figma to code', 'animations'] },
      { title: 'Backend & data', chips: ['Node.js', 'REST', 'JWT', 'PostgreSQL', 'MySQL', 'Prisma', 'Redis', 'GraphQL', 'WebSocket', 'CS-Cart', 'Yii2', 'Laravel'] },
      { title: 'Infrastructure & quality', chips: ['Git (GitHub / GitLab)', 'Docker', 'Linux', 'Nginx', 'Vite', 'Webpack', 'Jest', 'Vitest', 'Testing Library', 'ESLint', 'Prettier'] },
      { title: 'Integrations', chips: ['Telegram Bot API', 'Payments (SBP)', 'Claude Code'] },
    ],
  },

  projects: {
    title: 'Projects',
    lead: 'Selected work.',
    texts: {
      devspace: 'A personal service for developers: a project library with progress tracking, tasks, a calendar, analytics and a focus mode. Custom JWT authentication with no third-party providers (Clerk, NextAuth).',
      dashboard: 'An admin panel for managing a database of 2,500+ users: search, combined filtering, sorting and pagination with state synced across pages.',
      gfdigital: 'Architecture of a marketing website: file-based routing, reusable layout components, custom scroll-reveal animations and 3D flip cards without third-party libraries.',
      autorena: 'Development and growth of an automotive-themed product web app: UI work, API integration and extending existing functionality.',
    },
  },

  services: {
    title: 'Services & prices',
    intro: "Prices are approximate: I'll give the final cost and timeline after a short discussion of the task. Price and timeline are agreed before work starts.",
    items: [
      { id: 'landing', title: 'Landing page', unit: 'project', term: 'timeline: 5–7 days', screen: 'Landing pages',
        items: ['React / Next.js, responsive', 'Animations and a request form', 'Deployment, domain, SEO basics'] },
      { id: 'corporate', title: 'Corporate website', unit: 'project', term: 'timeline: 2–3 weeks',
        items: ['Multi-page, Next.js (SSR)', 'Admin panel / CMS if needed', 'Performance and SEO'] },
      { id: 'webapp', title: 'Web app / client portal', unit: 'project', term: 'timeline: 3–5 weeks', screen: 'Web applications',
        items: ['Frontend + backend: React, Node.js, PostgreSQL', 'Authentication (JWT), roles, REST API', 'Tests and documentation'] },
      { id: 'markup', title: 'Figma to code', unit: 'page', term: 'timeline: 1–3 days', screen: 'Figma to code',
        items: ['Pixel-perfect, responsive', 'Cross-browser support', 'Clean code: BEM, SCSS or Tailwind'] },
      { id: 'bots', title: 'Bots & integrations', unit: 'project', term: 'timeline: 1–2 weeks',
        items: ['Telegram bots with scenarios', 'Payment acceptance (SBP)', 'API and service integrations'] },
      { id: 'cscart', title: 'CS-Cart online stores', unit: 'task', term: 'timeline: from 2 days',
        items: ['Customizations and modules (PHP)', 'Speeding up slow sites', 'Automation scripts'] },
    ],
    hourly: {
      title: 'Hourly work & support',
      text: 'Refactoring, tests, bug fixes, extending existing projects.',
      unit: 'hour',
    },
  },
};
