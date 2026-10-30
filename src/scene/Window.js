// Окно с ночным городом
export default () => `
  <g>
    <rect x="40" y="110" width="170" height="320" rx="6" fill="#0a0d24" stroke="#3b3466" stroke-width="8"/>
    <rect x="46" y="116" width="158" height="308" fill="url(#sky)"/>
    <g fill="#fff"><circle class="twinkle" cx="70" cy="145" r="1.6"/><circle class="twinkle" cx="120" cy="170" r="1.2"/><circle class="twinkle" cx="170" cy="140" r="1.6"/><circle class="twinkle" cx="95" cy="215" r="1.1"/><circle class="twinkle" cx="180" cy="230" r="1.3"/><circle class="twinkle" cx="60" cy="260" r="1.2"/></g>
    <circle cx="160" cy="180" r="20" fill="#ffe9b8"/><circle cx="168" cy="174" r="18" fill="#171a38" opacity=".0"/>
    <g fill="#14173a"><rect x="46" y="330" width="30" height="94"/><rect x="80" y="300" width="26" height="124"/><rect x="110" y="345" width="34" height="79"/><rect x="148" y="315" width="28" height="109"/><rect x="178" y="350" width="26" height="74"/></g>
    <g fill="#ffd27a" opacity=".9"><rect x="52" y="340" width="4" height="5"/><rect x="62" y="356" width="4" height="5"/><rect x="86" y="312" width="4" height="5"/><rect x="94" y="334" width="4" height="5"/><rect x="118" y="358" width="4" height="5"/><rect x="154" y="330" width="4" height="5"/><rect x="162" y="352" width="4" height="5"/><rect x="186" y="366" width="4" height="5"/></g>
    <path d="M125 116V424M46 270H204" stroke="#3b3466" stroke-width="6"/>
  </g>
`;
