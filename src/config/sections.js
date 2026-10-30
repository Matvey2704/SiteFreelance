// Единый список разделов: из него строятся меню, мобильные кнопки, панель и камера.
//  label       — подпись в меню на компьютере
//  mobileLabel — подпись на мобильной кнопке (по умолчанию = label)
//  mobileHint  — подсказка под названием; если задана, раздел попадёт в сетку кнопок на телефоне
//  cta         — акцентная кнопка (оранжевая)
//  target      — куда «подлетает» камера (координаты сцены 1600×900: центр и размер области)
import About from '../components/sections/About.js';
import Skills from '../components/sections/Skills.js';
import Projects from '../components/sections/Projects.js';
import Services from '../components/sections/Services.js';
import Contacts from '../components/sections/Contacts.js';
import { PRICE_FLOOR } from '../data/services.js';
import { L } from '../i18n/index.js';

const T = L.sections;

export const SECTIONS = [
  { id: 'about', label: T.about.label, mobileHint: T.about.mobileHint, target: { cx: 800, cy: 560, w: 300, h: 220 }, render: About },
  { id: 'skills', label: T.skills.label, mobileHint: T.skills.mobileHint, target: { cx: 395, cy: 330, w: 340, h: 240 }, render: Skills },
  { id: 'projects', label: T.projects.label, mobileHint: T.projects.mobileHint, target: { cx: 800, cy: 320, w: 400, h: 250 }, render: Projects },
  { id: 'services', label: T.services.label, mobileLabel: T.services.mobileLabel, mobileHint: PRICE_FLOOR, target: { cx: 1205, cy: 340, w: 340, h: 240 }, render: Services },
  { id: 'contacts', label: T.contacts.label, mobileLabel: T.contacts.mobileLabel, cta: true, className: 'contacts', target: { cx: 590, cy: 580, w: 200, h: 170 }, render: Contacts },
];
