// Кот: моргает, машет хвостом, по клику — сердечко
import { L } from '../i18n/index.js';
export default () => `
  <g id="cat" class="hot" tabindex="0" role="button" aria-label="${L.ui.petCat}">
    <path class="tail" d="M462 628 C 520 628, 540 590, 520 566" stroke="#d98a3d" stroke-width="16" fill="none" stroke-linecap="round"/>
    <ellipse cx="420" cy="596" rx="54" ry="48" fill="#e29a4a"/>
    <path d="M380 590 q10 -8 20 0 M392 612 q10 -8 20 0" stroke="#b96f26" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/>
    <ellipse cx="424" cy="634" rx="52" ry="9" fill="#d98a3d"/>
    <g>
      <path class="ear" d="M392 520 L398 484 L420 508 Z" fill="#e29a4a"/><path d="M398 512 L402 494 L413 506 Z" fill="#f3b8a0"/>
      <path class="ear" d="M448 520 L442 484 L420 508 Z" fill="#e29a4a" style="animation-delay:2s"/><path d="M442 512 L438 494 L427 506 Z" fill="#f3b8a0"/>
      <ellipse cx="420" cy="534" rx="36" ry="30" fill="#ecA55a"/>
      <path d="M410 508 v10 M420 506 v12 M430 508 v10" stroke="#b96f26" stroke-width="4" stroke-linecap="round"/>
      <g class="blink"><ellipse cx="406" cy="534" rx="5" ry="7" fill="#1a1426"/><ellipse cx="434" cy="534" rx="5" ry="7" fill="#1a1426"/><circle cx="408" cy="531" r="1.8" fill="#fff"/><circle cx="436" cy="531" r="1.8" fill="#fff"/></g>
      <path d="M416 544 l4 4 l4 -4 z" fill="#e97d8e"/>
      <path d="M420 548 q-5 6 -10 3 M420 548 q5 6 10 3" stroke="#6b3a1c" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M392 546 l-16 -3 M392 551 l-15 3 M448 546 l16 -3 M448 551 l15 3" stroke="#fff" stroke-width="1.4" opacity=".7"/>
    </g>
    <g transform="translate(420,480)"><g class="heart" id="heart"><path d="M0 0 c-10 -10 -22 2 0 16 c22 -14 10 -26 0 -16z" fill="#ff6f9d"/></g></g>
    <rect x="360" y="470" width="120" height="170" fill="transparent"/>
  </g>
`;
