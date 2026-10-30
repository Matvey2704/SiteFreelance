// Кружка с паром
export default () => `
  <g>
    <path d="M1112 614 q22 2 20 18 q-2 14 -22 12" stroke="#f0e6dc" stroke-width="6" fill="none"/>
    <rect x="1072" y="600" width="44" height="44" rx="8" fill="#f0e6dc"/>
    <rect x="1072" y="600" width="44" height="12" rx="6" fill="#4a2e22"/>
    <ellipse cx="1094" cy="650" rx="40" ry="6" fill="#000" opacity=".3"/>
    <g stroke="#ffffff" stroke-width="4" fill="none" stroke-linecap="round" filter="url(#soft)">
      <path class="steam" d="M1086 596 q-8 -14 0 -26 q8 -12 0 -24"/>
      <path class="steam s2" d="M1096 596 q8 -14 0 -26 q-8 -12 0 -24"/>
      <path class="steam s3" d="M1104 596 q-7 -12 0 -22 q7 -10 0 -20"/>
    </g>
  </g>
`;
