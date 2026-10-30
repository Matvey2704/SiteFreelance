// Язык интерфейса: ?lang=en → сохранённый выбор → язык браузера.
// Переключение сохраняет выбор и перезагружает страницу — так проще и надёжнее, чем перерисовывать сцену.
import ru from '../locales/ru.js';
import en from '../locales/en.js';

const LOCALES = { ru, en };
const KEY = 'lang';

export const LANGS = Object.keys(LOCALES);

const safe = (fn) => {
  try { return fn(); } catch { return null; }
};

function detect() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (LOCALES[fromUrl]) return fromUrl;
  const saved = safe(() => localStorage.getItem(KEY));
  if (LOCALES[saved]) return saved;
  return /^(ru|be|uk|kk)/i.test(navigator.language || '') ? 'ru' : 'en';
}

export const lang = detect();

/** Тексты активного языка */
export const L = LOCALES[lang];

/** Число с разделителями разрядов под текущий язык: 35 000 / 35,000 */
export const money = (n) => n.toLocaleString(lang === 'ru' ? 'ru-RU' : 'en-US');

export function setLang(next) {
  if (!LOCALES[next] || next === lang) return;
  safe(() => localStorage.setItem(KEY, next));
  const url = new URL(location.href);
  url.searchParams.delete('lang');
  location.assign(url.toString());
}

/** Название вкладки, описание, атрибут lang у <html> */
export function applyDocumentLang() {
  document.documentElement.lang = lang;
  document.title = L.meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', L.meta.description);
}
