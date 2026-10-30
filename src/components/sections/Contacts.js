import { PROFILE } from '../../config/profile.js';
import { L } from '../../i18n/index.js';

const { contacts: c } = PROFILE;

const Row = (name, label, href, external = false) =>
  `<a class="big" href="${href || '#'}"${external ? ' target="_blank" rel="noopener"' : ''}>${name} <span>${label}</span></a>`;

export default () => `
  <h2>${c.title}</h2>
  <p class="lead">${c.lead}</p>
  ${Row('Telegram', c.telegram.label, c.telegram.url, true)}
  ${Row(L.ui.email, c.email, `mailto:${c.email}`)}
  ${Row('GitHub', c.github.label, c.github.url, true)}`;
