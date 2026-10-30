// Градиенты, фильтры и маски, на которые ссылается сцена
export default () => `<defs>
  <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#171a38"/><stop offset="1" stop-color="#2b2147"/></linearGradient>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b1030"/><stop offset="1" stop-color="#3a2a63"/></linearGradient>
  <linearGradient id="deskTop" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7a5444"/><stop offset="1" stop-color="#5a3d33"/></linearGradient>
  <linearGradient id="deskFront" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f2a2a"/><stop offset="1" stop-color="#241820"/></linearGradient>
  <linearGradient id="scrC" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#16294f"/><stop offset="1" stop-color="#241a4d"/></linearGradient>
  <linearGradient id="hood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a5a92"/><stop offset="1" stop-color="#2c3560"/></linearGradient>
  <linearGradient id="cone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffc98a" stop-opacity=".55"/><stop offset="1" stop-color="#ffc98a" stop-opacity="0"/></linearGradient>
  <radialGradient id="warm"><stop offset="0" stop-color="#ffb66b" stop-opacity=".55"/><stop offset="1" stop-color="#ffb66b" stop-opacity="0"/></radialGradient>
  <radialGradient id="cool"><stop offset="0" stop-color="#6fd0ff" stop-opacity=".35"/><stop offset="1" stop-color="#6fd0ff" stop-opacity="0"/></radialGradient>
  <radialGradient id="vig" cx=".5" cy=".5" r=".75"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".6"/></radialGradient>
  <filter id="glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <filter id="soft"><feGaussianBlur stdDeviation="3"/></filter>
  <filter id="grain" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="4" result="n"/>
    <feColorMatrix type="saturate" values="0"/>
  </filter>
  <clipPath id="cL"><rect width="330" height="230" rx="6"/></clipPath>
  <clipPath id="cC"><rect width="380" height="240" rx="6"/></clipPath>
  <clipPath id="cR"><rect width="330" height="230" rx="6"/></clipPath>
</defs>`;
