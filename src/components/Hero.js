import { PROFILE } from '../config/profile.js';

const { hero } = PROFILE;

// Заголовок слева внизу (на компьютере) и подсказка по центру
export const HeroText = () => `
<div class="tag">
  <h1>${hero.before}<em>${hero.accent}</em>${hero.after}</h1>
  <p>${hero.text}</p>
</div>
<div class="hint">${PROFILE.hint}</div>`;
