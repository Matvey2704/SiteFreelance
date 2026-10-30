// Проекты. Скриншоты лежат в public/projects/ (рекомендуемый размер ~1400px по ширине, формат webp).
//  id    — ключ для текста в locales/*.js (projects.texts)
//  short — короткое имя для центрального монитора в сцене (до ~10 символов)
//  url   — ссылка на живой сайт; если пусто, кнопка «Открыть сайт» не показывается
// На мониторе помещается максимум 4 проекта; в самом разделе их может быть сколько угодно.
import { L } from '../i18n/index.js';

const BASE = [
  { id: 'devspace', title: 'DevSpace', short: 'DevSpace',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'], img: 'projects/project-1.webp', url: '' },
  { id: 'dashboard', title: 'Users Dashboard', short: 'Dashboard',
    tags: ['Vue 3', 'TypeScript', 'Pinia', 'REST API'], img: 'projects/project-2.webp', url: '' },
  { id: 'gfdigital', title: 'GF Digital', short: 'GF Digital',
    tags: ['React', 'TanStack Router', 'TypeScript', 'Tailwind CSS'], img: 'projects/project-3.webp', url: '' },
  { id: 'autorena', title: 'Autorena', short: 'Autorena',
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'REST API'], img: 'projects/project-4.webp', url: '' },
];

export const PROJECTS = BASE.map((p) => ({ ...p, text: L.projects.texts[p.id] }));
export const PROJECTS_TEXT = { title: L.projects.title, lead: L.projects.lead };
