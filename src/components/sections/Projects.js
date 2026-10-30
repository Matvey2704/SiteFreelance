import { PROJECTS, PROJECTS_TEXT } from '../../data/projects.js';
import { L } from '../../i18n/index.js';
import { $, $$, esc } from '../../lib/dom.js';

const Card = (p) => `
  <div class="item proj">
    <div class="shot" data-ph="${esc(L.ui.screenshot(p.img))}"><img src="${esc(p.img)}" alt="${esc(p.title)}" loading="lazy"></div>
    <h3>${esc(p.title)}</h3><p>${esc(p.text)}</p>
    <div class="chips">${p.tags.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
    ${p.url ? `<a class="lnk" href="${esc(p.url)}" target="_blank" rel="noopener">${L.ui.openSite}</a>` : ''}
  </div>`;

export default () => `
  <h2>${PROJECTS_TEXT.title}</h2>
  <p class="lead">${PROJECTS_TEXT.lead}</p>
  <div class="grid" id="projGrid">${PROJECTS.map(Card).join('')}</div>`;

/** Поведение: заглушка вместо битой картинки, просмотр скриншота, те же скриншоты на мониторе в сцене */
export function mountProjects({ lightbox }) {
  $('#projGrid').addEventListener('click', (e) => {
    const img = e.target.closest('.shot img');
    if (!img || img.parentElement.classList.contains('noimg')) return;
    lightbox.open(img.src, img.alt);
  });

  for (const img of $$('#projGrid .shot img')) {
    const showPlaceholder = () => img.parentElement.classList.add('noimg');
    img.addEventListener('error', showPlaceholder);
    if (img.complete && !img.naturalWidth) showPlaceholder();
  }

  PROJECTS.forEach((p, i) => {
    const target = $('#pimg' + i);
    if (!target) return;
    const probe = new Image();
    probe.onload = () => {
      target.setAttribute('href', p.img);
      target.style.display = '';
    };
    probe.src = p.img;
  });
}
