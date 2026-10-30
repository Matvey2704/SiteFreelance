import { SECTIONS } from '../config/sections.js';
import { $ } from '../lib/dom.js';

const Section = (s) =>
  `<section class="sec${s.className ? ' ' + s.className : ''}" id="s-${s.id}">${s.render()}</section>`;

export default () => `
<div id="panel" aria-live="polite">
  <div class="card">
    ${SECTIONS.map(Section).join('\n')}
  </div>
</div>`;

export function mountPanel({ onBackdropClick }) {
  const panel = $('#panel');
  const card = $('.card', panel);
  panel.addEventListener('click', (e) => {
    if (e.target === panel) onBackdropClick();
    // ссылки-заглушки (href="#") никуда не ведут
    if (e.target.closest('a[href="#"]')) e.preventDefault();
  });
  return {
    show: (id) => {
      for (const s of panel.querySelectorAll('.sec')) s.classList.toggle('on', s.id === 's-' + id);
      card.scrollTop = 0;
    },
    reveal: () => panel.classList.add('open'),
    hide: () => panel.classList.remove('open'),
  };
}
