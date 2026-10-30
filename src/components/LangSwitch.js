// Переключатель языка RU / EN в шапке
import { L, LANGS, lang, setLang } from '../i18n/index.js';
import { $$ } from '../lib/dom.js';

const Button = (code) =>
  `<button data-lang="${code}" aria-pressed="${code === lang}"${code === lang ? ' class="on"' : ''}>${code.toUpperCase()}</button>`;

export default () => `<div class="lang" role="group" aria-label="${L.ui.langLabel}">${LANGS.map(Button).join('')}</div>`;

export function mountLangSwitch() {
  for (const b of $$('.lang button')) b.addEventListener('click', () => setLang(b.dataset.lang));
}
