// Свет лампы и затемнение при выключенной лампе
export default () => `
<g id="lampGlow" pointer-events="none">
  <polygon points="1212,452 1320,452 1500,650 1000,650" fill="url(#cone)"/>
  <circle cx="1260" cy="470" r="420" fill="url(#warm)"/>
  <ellipse cx="1180" cy="640" rx="260" ry="34" fill="#ffb66b" opacity=".22"/>
</g>
<rect id="dark" x="-60" y="-40" width="1720" height="980" fill="#04051a" pointer-events="none"/>
`;
