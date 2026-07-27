const scene = `<svg viewBox="0 0 1600 720" preserveAspectRatio="xMidYMax meet" style="display:block;width:100%;height:auto">
  <defs>
    <linearGradient id="a_wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0e2c6"/><stop offset="1" stop-color="#dcc9a4"/></linearGradient>
    <radialGradient id="a_sun" cx="0.5" cy="0.45" r="0.6"><stop offset="0" stop-color="#fff6db"/><stop offset="0.5" stop-color="#f7d98f"/><stop offset="1" stop-color="#e6b45f"/></radialGradient>
    <linearGradient id="a_brass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e7c691"/><stop offset="1" stop-color="#c0925a"/></linearGradient>
    <linearGradient id="a_oak" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c79c66"/><stop offset="1" stop-color="#a67c4c"/></linearGradient>
    <linearGradient id="a_stone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f2ead9"/><stop offset="1" stop-color="#d9ccb2"/></linearGradient>
    <radialGradient id="a_glow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#fff0c2" stop-opacity="0.7"/><stop offset="1" stop-color="#fff0c2" stop-opacity="0"/></radialGradient>
    <linearGradient id="a_fade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#100d0b" stop-opacity="0"/><stop offset="0.72" stop-color="#100d0b" stop-opacity="0.82"/><stop offset="1" stop-color="#100d0b"/></linearGradient>
  </defs>
  <rect width="1600" height="720" fill="url(#a_wall)"/>
  <rect x="590" y="60" width="420" height="330" rx="6" fill="#efe6d2" stroke="#b79a6d" stroke-width="10"/>
  <clipPath id="a_win"><rect x="602" y="72" width="396" height="306" rx="3"/></clipPath>
  <g clip-path="url(#a_win)">
    <rect x="602" y="72" width="396" height="306" fill="#fbeecb"/>
    <circle cx="800" cy="270" r="150" fill="url(#a_sun)"/>
    <path d="M602 320 Q720 288 840 316 T998 312 L998 378 L602 378Z" fill="#eac988" opacity="0.7"/>
  </g>
  <rect x="792" y="72" width="10" height="306" fill="#b79a6d"/><rect x="602" y="220" width="396" height="10" fill="#b79a6d"/>
  <rect x="80" y="120" width="230" height="450" fill="url(#a_oak)" stroke="#8c6842" stroke-width="4"/>
  <line x1="195" y1="120" x2="195" y2="570" stroke="#8c6842" stroke-width="4"/>
  <rect x="178" y="300" width="7" height="56" rx="3" fill="url(#a_brass)"/><rect x="206" y="300" width="7" height="56" rx="3" fill="url(#a_brass)"/>
  <rect x="1120" y="150" width="410" height="12" fill="url(#a_brass)"/><rect x="1120" y="290" width="410" height="12" fill="url(#a_brass)"/>
  <circle cx="1200" cy="134" r="20" fill="#e4d8c1"/><rect x="1300" y="98" width="24" height="52" rx="6" fill="#cbb083"/><path d="M1420 150 q9 -42 28 0Z" fill="#8caf74"/>
  <circle cx="1220" cy="276" r="16" fill="#d8ccb4"/><rect x="1320" y="244" width="20" height="46" rx="5" fill="#c3a778"/>
  <rect x="1080" y="392" width="470" height="26" fill="url(#a_stone)"/><rect x="1080" y="418" width="470" height="160" fill="url(#a_oak)"/>
  <g stroke="#8c6842" stroke-width="3"><line x1="1200" y1="418" x2="1200" y2="578"/><line x1="1320" y1="418" x2="1320" y2="578"/><line x1="1440" y1="418" x2="1440" y2="578"/></g>
  <path d="M735 392 L865 392 L845 458 L755 458Z" fill="url(#a_brass)"/>
  <g><circle cx="520" cy="320" r="80" fill="url(#a_glow)"/><circle cx="760" cy="320" r="80" fill="url(#a_glow)"/>
    <line x1="520" y1="0" x2="520" y2="298" stroke="#8c6842" stroke-width="4"/><line x1="760" y1="0" x2="760" y2="298" stroke="#8c6842" stroke-width="4"/>
    <circle cx="520" cy="312" r="24" fill="url(#a_brass)"/><circle cx="760" cy="312" r="24" fill="url(#a_brass)"/>
    <circle cx="520" cy="322" r="11" fill="#fff2cf"/><circle cx="760" cy="322" r="11" fill="#fff2cf"/></g>
  <rect x="0" y="570" width="1600" height="150" fill="#cbb488"/>
  <g>
    <g fill="#7a5836"><rect x="380" y="548" width="66" height="24" rx="8"/><rect x="388" y="572" width="7" height="86"/><rect x="430" y="572" width="7" height="86"/>
      <rect x="486" y="548" width="66" height="24" rx="8"/><rect x="494" y="572" width="7" height="86"/><rect x="536" y="572" width="7" height="86"/></g>
    <rect x="570" y="500" width="600" height="220" fill="url(#a_oak)"/>
    <g stroke="#8c6842" stroke-width="3"><line x1="730" y1="500" x2="730" y2="720"/><line x1="880" y1="500" x2="880" y2="720"/><line x1="1020" y1="500" x2="1020" y2="720"/></g>
    <rect x="550" y="462" width="640" height="42" rx="4" fill="url(#a_stone)"/>
    <rect x="980" y="430" width="58" height="32" rx="4" fill="url(#a_oak)"/><circle cx="900" cy="446" r="14" fill="#8caf74"/>
    <rect x="650" y="436" width="15" height="26" rx="4" fill="#e4d8c1"/>
  </g>
  <g fill="none" stroke="#c0925a" stroke-width="4" stroke-linecap="round" opacity="0.8"><path d="M1230 460 q30 -18 44 6 q-24 6 -44 -6Z"/><path d="M320 460 q26 -16 40 5 q-22 6 -40 -5Z"/></g>
  <rect x="0" y="450" width="1600" height="270" fill="url(#a_fade)"/>
</svg>`;

export function KitchenScene() {
  return (
    <div
      aria-hidden
      className="pointer-events-none select-none"
      dangerouslySetInnerHTML={{ __html: scene }}
    />
  );
}
