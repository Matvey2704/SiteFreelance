import { SECTIONS } from './config/sections.js';
import { $, $$, onActivate } from './lib/dom.js';
import { createCamera } from './lib/camera.js';
import { createParallax } from './lib/parallax.js';
import { paintGrain } from './lib/grain.js';
import { applyDocumentLang } from './i18n/index.js';

import Overlays from './components/Overlays.js';
import Header from './components/Header.js';
import { mountLangSwitch } from './components/LangSwitch.js';
import { HeroText } from './components/Hero.js';
import MobileNav from './components/MobileNav.js';
import CloseButton from './components/CloseButton.js';
import Lightbox, { mountLightbox } from './components/Lightbox.js';
import Panel, { mountPanel } from './components/Panel.js';
import { mountProjects } from './components/sections/Projects.js';
import Scene from './scene/Scene.js';
import { mountSceneInteractions } from './scene/interactions.js';

export function mountApp(root) {
  applyDocumentLang();
  root.innerHTML = [Overlays(), Header(), MobileNav(), HeroText(), CloseButton(), Scene(), Lightbox(), Panel()].join('\n');

  const mobile = matchMedia('(max-width:760px)');
  const state = { zoomed: false };

  const lightbox = mountLightbox();
  const panel = mountPanel({ onBackdropClick: close });
  const camera = createCamera($('#scene'), Object.fromEntries(SECTIONS.map((s) => [s.id, s.target])), {
    onArrive: () => state.zoomed && panel.reveal(),
  });
  const parallax = createParallax($$('[data-depth]'));

  mountLangSwitch();
  mountProjects({ lightbox });
  mountSceneInteractions();
  paintGrain($('#grain'));

  function open(id) {
    state.zoomed = true;
    document.body.classList.add('zoomed');
    panel.show(id);
    if (mobile.matches) return panel.reveal(); // на телефоне без «полёта» камеры
    camera.flyToSection(id);
    panel.hide();
  }

  function close() {
    panel.hide();
    document.body.classList.remove('zoomed');
    state.zoomed = false;
    if (!mobile.matches) camera.flyHome();
  }

  for (const el of $$('[data-open]')) onActivate(el, () => open(el.dataset.open)); // объекты в сцене
  for (const el of $$('[data-go]')) el.addEventListener('click', () => open(el.dataset.go)); // кнопки меню
  $('#close').addEventListener('click', close);

  addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (lightbox.isOpen()) lightbox.close();
    else if (state.zoomed) close();
  });
  addEventListener('resize', () => camera.refresh({ keepZoom: state.zoomed && !mobile.matches }));

  const loop = (now) => {
    camera.tick(now);
    parallax.tick(state.zoomed);
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}
