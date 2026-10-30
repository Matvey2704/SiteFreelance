import { SKILLS } from '../../data/skills.js';

export default () => `
  <h2>${SKILLS.title}</h2>
  <p class="lead">${SKILLS.lead}</p>
  <div class="grid">
    ${SKILLS.groups.map((g) => `
      <div class="item"><h3>${g.title}</h3>
        <div class="chips">${g.chips.map((c) => `<span>${c}</span>`).join('')}</div>
      </div>`).join('')}
  </div>`;
