// Услуги и цены. Тексты — в locales/*.js (services), цены — здесь, чтобы не дублировать.
//  screen — подпись для правого монитора в сцене (показываются первые 3 услуги, у которых она задана)
import { L, money } from '../i18n/index.js';

const PRICES = { landing: 35000, corporate: 60000, webapp: 90000, markup: 6000, bots: 25000, cscart: 15000 };
const HOURLY_PRICE = 2000;

export const SERVICES_TEXT = { title: L.services.title, intro: L.services.intro };
export const SERVICES_INTRO = L.services.intro;
export const SERVICES = L.services.items.map((s) => ({ ...s, price: money(PRICES[s.id]) }));
export const HOURLY = { ...L.services.hourly, price: money(HOURLY_PRICE) };

// Нижняя граница цен — для подсказки в мобильном меню
export const PRICE_FLOOR = `${L.ui.from} ${money(Math.min(...Object.values(PRICES)))} ₽`;
