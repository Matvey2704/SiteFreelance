// Две неоновые вывески: hello_world и contact_me (кликабельная)
import { L } from '../i18n/index.js';
export default () => `
  <g class="flicker" filter="url(#glow)">
    <text x="800" y="108" text-anchor="middle" font-family="JetBrains Mono, monospace" font-weight="700" font-size="38" fill="none" stroke="#ff6fb5" stroke-width="2.2">&lt;hello_world/&gt;</text>
  </g>
  <!-- неон: контакты -->
  <g class="hot neon" data-open="contacts" tabindex="0" role="button" aria-label="${L.ui.openSection(L.sections.contacts.name)}">
    <g class="flicker" style="animation-delay:-3s" filter="url(#glow)">
      <text x="1200" y="132" text-anchor="middle" font-family="JetBrains Mono, monospace" font-weight="700" font-size="38" fill="none" stroke="#7be0ff" stroke-width="2.2">&lt;contact_me/&gt;</text>
    </g>
    <rect x="1040" y="92" width="320" height="56" fill="transparent"/>
  </g>
`;
