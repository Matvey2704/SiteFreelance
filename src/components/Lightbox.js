import { $ } from '../lib/dom.js';

export default () => `<div id="lb" aria-hidden="true"><img alt=""></div>`;

export function mountLightbox() {
  const el = $('#lb');
  const img = $('img', el);
  const close = () => el.classList.remove('on');
  el.addEventListener('click', close);
  return {
    open(src, alt = '') {
      img.src = src;
      img.alt = alt;
      el.classList.add('on');
    },
    close,
    isOpen: () => el.classList.contains('on'),
  };
}
