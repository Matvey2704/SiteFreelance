import { PROFILE } from '../config/profile.js';
import { SECTIONS } from '../config/sections.js';

const { hero } = PROFILE;

const gridItems = SECTIONS.filter((s) => s.mobileHint);
const cta = SECTIONS.find((s) => s.cta);

const GridButton = (s, i) => `
    <button data-go="${s.id}"><i>${String(i + 1).padStart(2, '0')}</i><b>${s.mobileLabel ?? s.label}</b><span>${s.mobileHint}</span></button>`;

// Под сценой на телефоне: заголовок, кнопки разделов и главная кнопка
export default () => `
<div class="mnav">
  <h1>${hero.before}<em>${hero.accent}</em>${hero.after}</h1>
  <p>${hero.text}</p>
  <div class="mgrid">${gridItems.map(GridButton).join('')}
  </div>
  <button class="mcta" data-go="${cta.id}">${cta.mobileLabel ?? cta.label}</button>
</div>`;
