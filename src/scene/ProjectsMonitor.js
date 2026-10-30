// Центральный монитор: превью проектов. Данные — data/projects.js (на мониторе помещается 4)
import { L } from '../i18n/index.js';
import { PROJECTS } from '../data/projects.js';

const COLORS = ['#ff8a5c', '#4fa8ff', '#b58cff', '#6fe3b0'];

// #pimgN — сюда mountProjects() подставляет скриншот, когда он загрузился
const Card = (p, i) => `
          <g transform="translate(${i * 86},0)"><rect width="78" height="108" rx="7" fill="#101a3d" stroke="#2d3a78"/>
            <rect x="6" y="6" width="66" height="46" rx="4" fill="${COLORS[i]}" opacity=".85"/>
            <svg x="6" y="6" width="66" height="46"><image id="pimg${i}" width="66" height="46" preserveAspectRatio="xMidYMin slice" style="display:none"/></svg>
            <text x="6" y="68" font-size="8.5" font-weight="800" fill="#fff">${p.short ?? p.title}</text>
            <rect x="6" y="77" width="54" height="4" rx="2" fill="#6b73aa"/><rect x="6" y="86" width="36" height="4" rx="2" fill="#4a5188"/></g>`;

export default () => `
  <g class="hot" data-open="projects" tabindex="0" role="button" aria-label="${L.ui.openSection(L.sections.projects.name)}">
    <g transform="translate(610,200)">
      <rect class="bezel" x="-10" y="-10" width="400" height="260" rx="14" fill="#0b0c1c" stroke="#2c2f55" stroke-width="3"/>
      <rect width="380" height="240" rx="6" fill="url(#scrC)"/>
      <g clip-path="url(#cC)" font-family="Manrope, sans-serif">
        <rect width="380" height="28" fill="#0f1a3a"/>
        <circle cx="14" cy="14" r="4" fill="#ff6f6f"/><circle cx="28" cy="14" r="4" fill="#ffd27a"/><circle cx="42" cy="14" r="4" fill="#6fe3b0"/>
        <text x="64" y="18" font-size="11" fill="#7d86c9" font-family="JetBrains Mono, monospace">projects/</text>
        <text x="20" y="62" font-size="20" font-weight="800" fill="#fff">${L.ui.monitorProjects}</text>
        <text x="20" y="80" font-size="11" fill="#9aa0c8">${L.ui.monitorProjectsSub}</text>
        <g transform="translate(20,102)">${PROJECTS.slice(0, 4).map(Card).join('')}
        </g>
        <rect class="scan" x="0" y="0" width="380" height="30" fill="#7be0ff" opacity=".05"/>
      </g>
    </g>
    <circle class="ping" cx="972" cy="222" r="7" fill="none" stroke="#7be0ff" stroke-width="2"/>
  </g>`;
