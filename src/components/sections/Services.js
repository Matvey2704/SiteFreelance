import { SERVICES, SERVICES_TEXT, HOURLY } from '../../data/services.js';
import { L } from '../../i18n/index.js';

const Card = (s) => `
  <div class="item">
    <h3>${s.title}</h3>
    <div class="price"><span class="pre">${L.ui.from}</span> ${s.price} ₽ <small>/ ${s.unit}</small></div>
    <p class="term">${s.term}</p>
    <ul>${s.items.map((i) => `<li>${i}</li>`).join('')}</ul>
  </div>`;

export default () => `
  <h2>${SERVICES_TEXT.title}</h2>
  <p class="lead">${SERVICES_TEXT.intro}</p>
  <div class="grid">
    ${SERVICES.map(Card).join('')}
    <div class="item wide">
      <div><h3>${HOURLY.title}</h3><p>${HOURLY.text}</p></div>
      <div class="price">${HOURLY.price} ₽ <small>/ ${HOURLY.unit}</small></div>
    </div>
  </div>`;
