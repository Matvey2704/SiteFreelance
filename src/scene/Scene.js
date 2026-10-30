// Сборка SVG-сцены из слоёв. Слои с data-depth двигаются параллаксом (чем больше число, тем ближе к зрителю).
import { L } from '../i18n/index.js';
import defs from './defs.js';
import Window from './Window.js';
import Neon from './Neon.js';
import Shelf from './Shelf.js';
import MonitorStands from './MonitorStands.js';
import SkillsMonitor from './SkillsMonitor.js';
import ProjectsMonitor from './ProjectsMonitor.js';
import ServicesMonitor from './ServicesMonitor.js';
import Desk from './Desk.js';
import DeskDecor from './DeskDecor.js';
import Cat from './Cat.js';
import Mug from './Mug.js';
import Phone from './Phone.js';
import Lamp from './Lamp.js';
import Peripherals from './Peripherals.js';
import Developer from './Developer.js';
import Lighting from './Lighting.js';

const Back = () => `
<g data-depth="3">
  <rect x="-60" y="-40" width="1720" height="700" fill="url(#wall)"/>
  ${Window()}
  ${Neon()}
  ${Shelf()}
</g>`;

const Monitors = () => `
<g data-depth="6">
  ${MonitorStands()}
  ${SkillsMonitor()}
  ${ProjectsMonitor()}
  ${ServicesMonitor()}
  <!-- свет экранов -->
  <ellipse cx="800" cy="330" rx="520" ry="260" fill="url(#cool)" opacity=".5" pointer-events="none"/>
</g>`;

const DeskLayer = () => `
<g data-depth="10">
  ${Desk()}
  ${DeskDecor()}
  ${Cat()}
  ${Mug()}
  ${Phone()}
  ${Lamp()}
</g>`;

const Person = () => `
<g data-depth="14">
  ${Peripherals()}
  ${Developer()}
</g>`;

export default () => `
<svg id="scene" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${L.ui.sceneLabel}">
${defs()}
${Back()}
${Monitors()}
${DeskLayer()}
${Person()}
${Lighting()}
</svg>`;
