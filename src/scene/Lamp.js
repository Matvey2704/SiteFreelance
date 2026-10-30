// Настольная лампа: клик включает и выключает свет
import { L } from '../i18n/index.js';
export default () => `
  <g id="lamp" class="hot" tabindex="0" role="button" aria-label="${L.ui.toggleLamp}">
    <ellipse cx="1270" cy="640" rx="44" ry="8" fill="#000" opacity=".3"/>
    <rect x="1236" y="626" width="68" height="16" rx="8" fill="#2d2a46"/>
    <path d="M1270 628 L1244 520 L1262 436" stroke="#3b3860" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="1244" cy="520" r="6" fill="#59558a"/>
    <path d="M1236 440 L1300 440 L1318 476 L1220 476 Z" transform="rotate(-18 1262 440)" fill="#ff8a5c"/>
    <ellipse cx="1269" cy="470" rx="46" ry="8" transform="rotate(-18 1262 440)" fill="#ffe3b0"/>
    <rect x="1200" y="420" width="140" height="230" fill="transparent"/>
  </g>
`;
