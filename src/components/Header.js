import { PROFILE } from '../config/profile.js';
import { SECTIONS } from '../config/sections.js';
import { L } from '../i18n/index.js';
import LangSwitch from './LangSwitch.js';

const NavButton = (s) => `<button data-go="${s.id}"${s.cta ? ' class="cta"' : ''}>${s.label}</button>`;

export default () => `
<header>
  <div class="brand"><i>&lt;/&gt;</i> ${PROFILE.brand}</div>
  <nav aria-label="${L.ui.navLabel}">
    ${SECTIONS.map(NavButton).join('\n    ')}
  </nav>
  ${LangSwitch()}
</header>`;
