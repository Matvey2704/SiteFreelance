// Раздел «Навыки». Группы чипов переводятся (locales), «терминал» на мониторе — нет.
import { L } from '../i18n/index.js';

export const SKILLS = L.skills; // { title, lead, groups }
export const SKILL_GROUPS = L.skills.groups;

// Левый монитор в сцене: «терминал» с кратким стеком (3 блока по 2 строки)
export const TERMINAL = [
  { title: '# frontend', color: '#6fe3b0', lines: ['React · Next.js · Vue 3', 'TypeScript · Tailwind · MUI'] },
  { title: '# backend', color: '#7be0ff', lines: ['Node.js · PHP · REST', 'PostgreSQL · MySQL · Prisma'] },
  { title: '# tools', color: '#ffd27a', lines: ['Git · Docker · Linux · Vite', 'Jest · Vitest · ESLint'] },
];
