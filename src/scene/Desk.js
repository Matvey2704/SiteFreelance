// Столешница, передняя панель и тумбы
export default () => `
  <rect x="-60" y="610" width="1720" height="46" fill="url(#deskTop)"/>
  <rect x="-60" y="610" width="1720" height="3" fill="#a07460" opacity=".6"/>
  <rect x="-60" y="656" width="1720" height="260" fill="url(#deskFront)"/>
  <rect x="-60" y="656" width="1720" height="3" fill="#000" opacity=".35"/>
  <g pointer-events="none" opacity=".9">
    <rect x="40" y="690" width="300" height="190" rx="8" fill="#2d1f28" stroke="#4a3238" stroke-width="3"/>
    <rect x="58" y="706" width="264" height="52" rx="5" fill="#35252f"/><rect x="58" y="768" width="264" height="52" rx="5" fill="#35252f"/>
    <rect x="170" y="726" width="40" height="7" rx="3" fill="#9a7c6a"/><rect x="170" y="788" width="40" height="7" rx="3" fill="#9a7c6a"/>
    <rect x="1250" y="690" width="300" height="190" rx="8" fill="#2d1f28" stroke="#4a3238" stroke-width="3"/>
    <rect x="1268" y="706" width="264" height="52" rx="5" fill="#35252f"/><rect x="1268" y="768" width="264" height="52" rx="5" fill="#35252f"/>
    <rect x="1380" y="726" width="40" height="7" rx="3" fill="#9a7c6a"/><rect x="1380" y="788" width="40" height="7" rx="3" fill="#9a7c6a"/>
  </g>
`;
