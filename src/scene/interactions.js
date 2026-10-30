// Мелкие «пасхалки» сцены: лампа включается и выключается, кота можно погладить
import { $, onActivate } from '../lib/dom.js';

export function mountSceneInteractions() {
  onActivate($('#lamp'), () => document.body.classList.toggle('lamp-off'));

  const heart = $('#heart');
  onActivate($('#cat'), () => {
    heart.classList.remove('go');
    void heart.getBoundingClientRect(); // перезапуск анимации
    heart.classList.add('go');
  });
}
