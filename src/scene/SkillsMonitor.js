// Левый монитор: «терминал» со стеком. Данные — data/skills.js (TERMINAL)
import { L } from '../i18n/index.js';
import { TERMINAL } from '../data/skills.js';

const line = (y, text, color, delay) =>
  `<text class="type" style="animation-delay:${delay}s" x="16" y="${y}" fill="${color}">${text}</text>`;

const rows = () =>
  TERMINAL.map((group, i) => {
    const y = 54 + 62 * i;
    const delay = 0.2 + i;
    return [
      line(y, group.title, group.color, delay.toFixed(1)),
      ...group.lines.map((t, k) => line(y + 18 + 16 * k, t, '#eef0ff', (delay + 0.3 * (k + 1)).toFixed(1))),
    ].join('\n        ');
  }).join('\n        ');

export default () => `
  <g class="hot" data-open="skills" tabindex="0" role="button" aria-label="${L.ui.openSection(L.sections.skills.name)}">
    <g transform="translate(230,205) skewY(6.05)">
      <rect class="bezel" x="-8" y="-8" width="346" height="246" rx="12" fill="#0b0c1c" stroke="#2c2f55" stroke-width="3"/>
      <rect width="330" height="230" rx="6" fill="#0a1226"/>
      <g clip-path="url(#cL)" font-family="JetBrains Mono, monospace" font-size="12.5">
        <rect width="330" height="26" fill="#11193a"/>
        <circle cx="14" cy="13" r="4" fill="#ff6f6f"/><circle cx="28" cy="13" r="4" fill="#ffd27a"/><circle cx="42" cy="13" r="4" fill="#6fe3b0"/>
        <text x="60" y="17" font-size="11" fill="#7d86c9">stack.md</text>
        ${rows()}
        <rect class="caret" x="224" y="200" width="8" height="14" fill="#eef0ff"/>
      </g>
      <rect width="330" height="230" rx="6" fill="url(#cool)" opacity=".15"/>
    </g>
    <circle class="ping" cx="545" cy="225" r="7" fill="none" stroke="#7be0ff" stroke-width="2"/>
  </g>`;
