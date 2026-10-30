// Правый монитор: три услуги с ценами. Берутся первые 3 услуги, у которых задано поле screen (data/services.js)
import { L } from '../i18n/index.js';
import { SERVICES } from '../data/services.js';

const Row = (s, i) => {
  const y = 76 + 48 * i;
  return `<rect x="16" y="${y}" width="298" height="40" rx="8" fill="#201a52"/><text x="28" y="${y + 25}">${s.screen}</text><text x="302" y="${y + 25}" text-anchor="end" fill="#ffb86b" font-weight="800">${L.ui.from} ${s.price} ₽</text>`;
};

export default () => `
  <g class="hot" data-open="services" tabindex="0" role="button" aria-label="${L.ui.openSection(L.sections.services.name)}">
    <g transform="translate(1040,240) skewY(-6.05)">
      <rect class="bezel" x="-8" y="-8" width="346" height="246" rx="12" fill="#0b0c1c" stroke="#2c2f55" stroke-width="3"/>
      <rect width="330" height="230" rx="6" fill="#151030"/>
      <g clip-path="url(#cR)" font-family="Manrope, sans-serif">
        <rect width="330" height="26" fill="#1d1546"/>
        <text x="16" y="17" font-size="11" fill="#9a8ee0" font-family="JetBrains Mono, monospace">services.json</text>
        <text x="16" y="58" font-size="19" font-weight="800" fill="#fff">${L.ui.monitorServices}</text>
        <g font-size="13" fill="#dcd8ff">
          ${SERVICES.filter((s) => s.screen).slice(0, 3).map(Row).join('\n          ')}
        </g>
      </g>
    </g>
    <circle class="ping" cx="1355" cy="225" r="7" fill="none" stroke="#7be0ff" stroke-width="2"/>
  </g>`;
