// Разработчик со спины: кресло, руки, голова в наушниках. Клик открывает «Обо мне»
import { L } from '../i18n/index.js';
export default () => `
  <g class="breath hot" data-open="about" tabindex="0" role="button" aria-label="${L.ui.openSection(L.sections.about.name)}">
    <!-- кресло -->
    <rect x="664" y="548" width="272" height="370" rx="64" fill="#221d3a"/>
    <rect x="664" y="548" width="272" height="370" rx="64" fill="none" stroke="#35305a" stroke-width="3"/>
    <path d="M679 600 V880 M921 600 V880" stroke="#ff6fb5" stroke-width="5" stroke-linecap="round" opacity=".6"/>
    <path d="M760 548 Q800 530 840 548" stroke="#35305a" stroke-width="3" fill="none"/>
    <!-- спина в худи -->
    <path d="M686 900 C 682 740, 716 622, 800 610 C 884 622, 918 740, 914 900 Z" fill="url(#hood)"/>
    <path d="M800 612 C 770 620, 744 650, 738 720" stroke="#1d2348" stroke-width="3" fill="none" opacity=".7"/>
    <path d="M800 612 C 830 620, 856 650, 862 720" stroke="#1d2348" stroke-width="3" fill="none" opacity=".7"/>
    <path d="M770 690 h60 v40 h-60z" fill="none" stroke="#1d2348" stroke-width="2.5" opacity=".45" stroke-linejoin="round"/>
    <ellipse cx="800" cy="604" rx="64" ry="24" fill="#323c70"/>
    <path d="M770 640 q30 16 60 0" stroke="#8ea0ff" stroke-width="2" fill="none" opacity=".25"/>
    <path d="M788 626 v26 M812 626 v26" stroke="#e8e6ff" stroke-width="2.5" stroke-linecap="round" opacity=".6"/>
    <!-- руки -->
    <g fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M714 668 L668 760 L702 650" stroke="#1d2348" stroke-width="46"/>
      <path d="M714 668 L668 760 L702 650" stroke="#44559a" stroke-width="40"/>
      <path d="M886 668 L932 760 L898 650" stroke="#1d2348" stroke-width="46"/>
      <path d="M886 668 L932 760 L898 650" stroke="#44559a" stroke-width="40"/>
      <path d="M700 672 L676 742 M900 672 L924 742" stroke="#6577bd" stroke-width="4" opacity=".55"/>
    </g>
    <ellipse cx="703" cy="640" rx="15" ry="11" fill="#e8b48f"/><ellipse cx="897" cy="640" rx="15" ry="11" fill="#e8b48f"/>
    <rect x="690" y="646" width="26" height="8" rx="4" fill="#2c3560"/><rect x="884" y="646" width="26" height="8" rx="4" fill="#2c3560"/>
    <circle class="ping" cx="872" cy="632" r="7" fill="none" stroke="#ffb86b" stroke-width="2"/>
    <g class="headbob">
      <rect x="782" y="560" width="36" height="46" rx="14" fill="#e8b48f"/>
      <circle cx="800" cy="524" r="52" fill="#2b211e"/>
      <path d="M752 500 C 760 462, 840 462, 848 500" stroke="#5a463e" stroke-width="3" fill="none" opacity=".7"/>
      <path d="M770 574 q30 18 60 0" stroke="#1c1512" stroke-width="10" fill="none" stroke-linecap="round" opacity=".7"/>
      <ellipse cx="750" cy="536" rx="6" ry="11" fill="#e8b48f"/><ellipse cx="850" cy="536" rx="6" ry="11" fill="#e8b48f"/>
      <path d="M746 520 C 748 462, 852 462, 854 520" stroke="#161423" stroke-width="10" fill="none" stroke-linecap="round"/>
      <rect x="734" y="514" width="20" height="40" rx="10" fill="#161423"/><rect x="846" y="514" width="20" height="40" rx="10" fill="#161423"/>
      <rect x="738" y="522" width="6" height="24" rx="3" fill="#ff6fb5" opacity=".9"/><rect x="856" y="522" width="6" height="24" rx="3" fill="#7be0ff" opacity=".9"/>
      <path d="M760 480 C 780 470, 820 470, 840 480" stroke="#7be0ff" stroke-width="3" fill="none" opacity=".4" stroke-linecap="round"/>
    </g>
  </g>
`;
