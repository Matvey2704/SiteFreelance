// Телефон на подставке: открывает контакты
import { L } from '../i18n/index.js';
export default () => `
  <g class="hot" data-open="contacts" tabindex="0" role="button" aria-label="${L.ui.openSection(L.sections.contacts.name)}">
    <ellipse cx="590" cy="470" rx="90" ry="100" fill="url(#cool)" opacity=".55" pointer-events="none"/>
    <ellipse cx="592" cy="646" rx="48" ry="6" fill="#000" opacity=".3"/>
    <g transform="rotate(-5 590 636)">
      <rect x="562" y="526" width="58" height="112" rx="10" fill="#10112a" stroke="#4a50a0" stroke-width="3"/>
      <rect x="567" y="533" width="48" height="98" rx="6" fill="#16315f"/>
      <rect x="567" y="533" width="48" height="16" rx="6" fill="#1f4a8a"/>
      <circle cx="577" cy="541" r="4" fill="#7be0ff"/>
      <path d="M586 541 h20" stroke="#cfe8ff" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="572" y="556" width="30" height="13" rx="6.5" fill="#2b6cff"/><path d="M577 562.5 h18" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".9"/>
      <rect x="582" y="574" width="28" height="13" rx="6.5" fill="#2a3a66"/><path d="M587 580.5 h16" stroke="#9fb6ea" stroke-width="2" stroke-linecap="round"/>
      <rect x="572" y="592" width="34" height="13" rx="6.5" fill="#2b6cff"/><path d="M577 598.5 h22" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".9"/>
      <rect x="571" y="613" width="40" height="13" rx="6.5" fill="#ffb86b"/>
      <text x="591" y="622.5" text-anchor="middle" font-family="Manrope, sans-serif" font-size="7.5" font-weight="800" fill="#1c1226">${L.ui.phoneCta}</text>
    </g>
    <path d="M566 640 L578 626 H606 L618 640 Z" fill="#2a2f5a"/>
    <rect x="560" y="638" width="64" height="6" rx="3" fill="#3a3f72"/>
    <circle class="ping" cx="617" cy="528" r="7" fill="none" stroke="#ffb86b" stroke-width="2"/>
    <rect x="520" y="500" width="150" height="150" fill="transparent"/>
  </g>
`;
