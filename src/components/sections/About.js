import { ABOUT } from '../../data/about.js';

export default () => `
  <h2>${ABOUT.title}</h2>
  <p class="lead">${ABOUT.lead}</p>
  <div class="grid">
    ${ABOUT.points.map((p) => `<div class="item"><h3>${p.title}</h3><p>${p.text}</p></div>`).join('')}
  </div>`;
