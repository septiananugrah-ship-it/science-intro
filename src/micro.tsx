// Dunia mikro: inti atom, atom, molekul, DNA (koordinat lokal: lebar layar = 1000 unit).
import React from 'react';
import {BACK, EASE_IN_OUT, rand, ramp, smoothPath} from './anim';
import {BENZENE, benzeneAtom, benzeneRot, persp} from './camera';
import {Ball, Frame, Glow, LayerProps, NS, TAU} from './common';
import {V2, V3, f1, rotX, rotY, smoothstep} from './engine';
import {C} from './theme';

// ===========================================================================
// 0 · INTI ATOM — plasma kuark-gluon berpusar lalu mengembun menjadi karbon-12
// ===========================================================================
const PHI = (1 + Math.sqrt(5)) / 2;
export const ICO: V3[] = (
  [
    [-1, PHI, 0],
    [1, PHI, 0],
    [-1, -PHI, 0],
    [1, -PHI, 0],
    [0, -1, PHI],
    [0, 1, PHI],
    [0, -1, -PHI],
    [0, 1, -PHI],
    [PHI, 0, -1],
    [PHI, 0, 1],
    [-PHI, 0, -1],
    [-PHI, 0, 1],
  ] as V3[]
).map((v) => {
  const n = Math.hypot(v[0], v[1], v[2]);
  return [(v[0] / n) * 84, (v[1] / n) * 84, (v[2] / n) * 84] as V3;
});
export const PROTONS = new Set([0, 3, 4, 7, 9, 10]);
const QUARK = ['#ff4d6d', '#4dff9a', '#5b8cff'];
export const NUCLEUS_FLASH = 1.22;

export const Nucleus: React.FC<LayerProps> = (p) => {
  const {t} = p;
  const flash = Math.exp(-(((t - NUCLEUS_FLASH) / 0.13) ** 2));
  const shock = ramp(t, NUCLEUS_FLASH, NUCLEUS_FLASH + 0.9);
  const items = ICO.map((v0, i) => {
    let v = rotX(rotY(v0, t * 0.45 + 0.4), 0.35 + t * 0.1);
    const j = 2.5 * ramp(t, 1.2, 1.5);
    v = [v[0] + j * Math.sin(t * 13 + i), v[1] + j * Math.cos(t * 11 + i * 2), v[2]];
    const pf = 1 + v[2] / 700;
    const e = ramp(t, 0.05 + rand(i * 3.1) * 0.2, 0.95 + rand(i * 3.1) * 0.18, EASE_IN_OUT);
    const show = ramp(t, 0.8 + rand(i * 2.9) * 0.2, 1.25 + rand(i * 2.9) * 0.12, BACK);
    return {x: v[0] * pf, y: v[1] * pf, z: v[2], r: 58 * pf, i, e, show};
  }).sort((a, b) => a.z - b.z);

  // busa kuantum: pasangan partikel virtual muncul lalu saling memusnahkan
  const foam = Array.from({length: 44}, (_, j) => {
    const period = 0.8 + rand(j * 1.7) * 0.9;
    const ph = rand(j * 2.3) * period;
    const cyc = Math.floor((t + ph) / period);
    const life = (t + ph) / period - cyc;
    const sd = j * 7.1 + cyc * 13.7;
    const ang = rand(sd) * TAU;
    const rad = 260 + rand(sd + 1) * 430;
    const cx = Math.cos(ang) * rad;
    const cy = Math.sin(ang) * rad * 0.75;
    const dir = rand(sd + 2) * Math.PI;
    const sep = 30 * Math.sin(Math.PI * life);
    const o = Math.sin(Math.PI * life) * 0.85;
    const dx = Math.cos(dir) * sep;
    const dy = Math.sin(dir) * sep;
    return (
      <g key={j} opacity={o}>
        <line x1={f1(cx - dx)} y1={f1(cy - dy)} x2={f1(cx + dx)} y2={f1(cy + dy)} stroke={C.violet} strokeWidth={1} vectorEffect={NS} opacity={0.5} />
        <circle cx={f1(cx - dx)} cy={f1(cy - dy)} r={4.5} fill={C.cyan} />
        <circle cx={f1(cx + dx)} cy={f1(cy + dy)} r={4.5} fill={C.pink} />
      </g>
    );
  });

  return (
    <Frame p={p}>
      <Glow r={520} c="warm" o={0.18 + 0.3 * ramp(t, 0.9, 1.3)} />
      {foam}
      {items.map((n) => {
        // kuark: mulai berpusar bebas, lalu terkurung di dalam nukleon
        const qs = [0, 1, 2].map((q) => {
          const a = t * 5 + n.i * 1.3 + (q * TAU) / 3;
          const fx = n.x + Math.cos(a) * n.r * 0.4;
          const fy = n.y + Math.sin(a) * n.r * 0.4;
          const sd = n.i * 3 + q;
          const a0 = rand(sd * 1.9) * TAU + t * (1.2 + rand(sd * 2.3) * 1.4);
          const r0 = 260 + rand(sd * 3.7) * 420;
          const sx = Math.cos(a0) * r0;
          const sy = Math.sin(a0) * r0 * 0.72;
          return [sx + (fx - sx) * n.e, sy + (fy - sy) * n.e] as V2;
        });
        const gluon = (a: V2, b: V2, k: number) => {
          const mx = (a[0] + b[0]) / 2;
          const my = (a[1] + b[1]) / 2;
          const dx = b[0] - a[0];
          const dy = b[1] - a[1];
          const l = Math.hypot(dx, dy) || 1;
          const w = Math.min(28, l * 0.18) * Math.sin(t * 22 + n.i + k * 2);
          return `M${f1(a[0])},${f1(a[1])}Q${f1(mx - (dy / l) * w)},${f1(my + (dx / l) * w)} ${f1(b[0])},${f1(b[1])}`;
        };
        return (
          <g key={n.i}>
            {n.show > 0 ? (
              <g transform={`translate(${f1(n.x)} ${f1(n.y)}) scale(${(0.55 + 0.45 * Math.min(1.1, n.show)).toFixed(3)})`} opacity={Math.min(1, n.show)}>
                <Ball x={0} y={0} r={n.r} kind={PROTONS.has(n.i) ? 'proton' : 'neutron'} o={0.94} />
              </g>
            ) : null}
            {[0, 1, 2].map((k) => {
              const a = qs[k];
              const b = qs[(k + 1) % 3];
              const o = (0.2 + 0.4 * (1 - n.e)) * (1 - smoothstep(110, 320, Math.hypot(b[0] - a[0], b[1] - a[1])));
              return o > 0.01 ? <path key={k} d={gluon(a, b, k)} fill="none" stroke="#ffffff" strokeWidth={1.4} vectorEffect={NS} opacity={o} /> : null;
            })}
            {qs.map(([qx, qy], q) => (
              <g key={q}>
                <circle cx={f1(qx)} cy={f1(qy)} r={f1(16 - 4 * n.e)} fill={QUARK[q]} opacity={0.25} />
                <circle cx={f1(qx)} cy={f1(qy)} r={f1(6.5 - 1.5 * n.e)} fill={QUARK[q]} />
              </g>
            ))}
          </g>
        );
      })}
      <Glow r={300 + 300 * flash} c="white" o={0.7 * flash} />
      {shock > 0 && shock < 1 ? <circle r={f1(150 + shock * 650)} fill="none" stroke="#ffffff" strokeWidth={3 * (1 - shock)} vectorEffect={NS} opacity={0.7 * (1 - shock)} /> : null}
    </Frame>
  );
};

// ===========================================================================
// 1 · ATOM — awan probabilitas yang berkedip + elektron melompat memancarkan foton
// ===========================================================================
const LOBE = 'M0,0 C50,-84 226,-104 246,0 C226,104 50,84 0,0 Z';
const LOBE_COLORS = ['c', 'v', 'p'];
export const PHOTON_T = 3.3;
const PHOTON_DIR = -0.62;

export const Atom: React.FC<LayerProps> = (p) => {
  const {t} = p;
  const spin = t * 9;
  const fr = Math.floor(t * 30);
  const dots = Array.from({length: 320}, (_, j) => {
    const sd = j * 1.37 + fr * 0.913;
    if (j < 80) {
      const r = 150 * Math.sqrt(-Math.log(1 - rand(sd) * 0.95)) * 0.6;
      const a = rand(sd + 1) * TAU;
      return [Math.cos(a) * r, Math.sin(a) * r, 0] as V3;
    }
    const o = j % 3;
    const side = rand(sd) > 0.5 ? 1 : -1;
    const d = 246 * Math.sqrt(rand(sd + 1));
    const w = 72 * Math.sin((Math.PI * d) / 246);
    const lat = (rand(sd + 2) + rand(sd + 3) - 1) * w;
    const ang = ((o * 60 + spin) * Math.PI) / 180;
    const x = side * d;
    return [x * Math.cos(ang) - lat * Math.sin(ang), x * Math.sin(ang) + lat * Math.cos(ang), o] as V3;
  });
  const dotR = Math.min(2.6, 3.2 / p.s);
  // foton: paket gelombang yang melesat keluar setelah elektron turun orbit
  const ph = ramp(t, PHOTON_T, PHOTON_T + 1.1, (x) => x);
  const jumpFlash = Math.exp(-(((t - PHOTON_T) / 0.1) ** 2));
  const ex = 262 * Math.cos(PHOTON_DIR);
  const ey = 66 * Math.sin(PHOTON_DIR);
  const photon =
    ph > 0 && ph < 1
      ? (() => {
          const c = 200 + ph * 900;
          const pts: V2[] = [];
          for (let k = 0; k <= 80; k++) {
            const u = -150 + (k / 80) * 300;
            const env = Math.exp(-((u / 95) ** 2));
            const amp = 30 * env * Math.sin(u / 11 - t * 40);
            const along = c + u;
            pts.push([Math.cos(PHOTON_DIR) * along - Math.sin(PHOTON_DIR) * amp, Math.sin(PHOTON_DIR) * along + Math.cos(PHOTON_DIR) * amp]);
          }
          const d = smoothPath(pts);
          const o = Math.min(1, ph * 6) * (1 - ramp(ph, 0.7, 1));
          return (
            <g opacity={o}>
              <path d={d} fill="none" stroke={C.cyan} strokeWidth={16} strokeLinecap="round" opacity={0.25} />
              <path d={d} fill="none" stroke="#e8fbff" strokeWidth={4} strokeLinecap="round" />
              <Glow x={Math.cos(PHOTON_DIR) * c} y={Math.sin(PHOTON_DIR) * c} r={90} c="cyan" o={0.6} />
            </g>
          );
        })()
      : null;
  const ripple = ramp(t, PHOTON_T, PHOTON_T + 0.9);
  return (
    <Frame p={p}>
      <circle r={320} fill="url(#cloud)" />
      {[0, 1, 2].map((o) => (
        <g key={o} transform={`rotate(${f1(o * 60 + spin)})`}>
          <path d={LOBE} fill={`url(#lobe-${LOBE_COLORS[o]})`} />
          <path d={LOBE} fill={`url(#lobe-${LOBE_COLORS[o]})`} transform="rotate(180)" />
        </g>
      ))}
      {dots.map(([x, y, o], j) => (
        <circle key={j} cx={f1(x)} cy={f1(y)} r={f1(dotR)} fill={j < 80 ? '#ffffff' : [C.cyan, C.violet, C.pink][o]} opacity={0.8} />
      ))}
      {[0, 1, 2].map((o) => {
        const rot = o * 60 + 30 - spin * 1.4;
        const e = t * 2.3 + o * 2.1;
        return (
          <g key={o} transform={`rotate(${f1(rot)})`}>
            <ellipse rx={262} ry={66} fill="none" stroke={[C.cyan, C.violet, C.pink][o]} strokeWidth={1.4} vectorEffect={NS} opacity={0.55} />
            <Glow x={262 * Math.cos(e)} y={66 * Math.sin(e)} r={26} c="white" o={0.8} />
            <circle cx={f1(262 * Math.cos(e))} cy={f1(66 * Math.sin(e))} r={6} fill="#ffffff" />
          </g>
        );
      })}
      {ripple > 0 && ripple < 1 ? <circle r={f1(60 + ripple * 520)} fill="none" stroke={C.cyan} strokeWidth={2.5} vectorEffect={NS} opacity={0.6 * (1 - ripple)} /> : null}
      <Glow x={ex} y={ey} r={80} c="cyan" o={jumpFlash} />
      {photon}
      {/* placeholder inti atom (terlihat saat tingkat inti sudah memudar) */}
      <g opacity={1 - p.inner}>
        <Glow r={46} c="warm" o={0.8} />
        {ICO.slice(0, 7).map((v, i) => (
          <Ball key={i} x={v[0] * 0.13} y={v[1] * 0.13} r={8} kind={PROTONS.has(i) ? 'proton' : 'neutron'} />
        ))}
      </g>
    </Frame>
  );
};

// ===========================================================================
// 2 · MOLEKUL — benzena berputar 3D di tengah "sup" molekul
// ===========================================================================
type Mol = {kind: 'h2o' | 'co2' | 'ch4' | 'o2' | 'nh3'; p: V3; s: number; spin: V3};
const MOLS: Mol[] = [
  {kind: 'h2o', p: [430, -215, -120], s: 0.85, spin: [0.5, 0.3, 0.2]},
  {kind: 'co2', p: [-470, -190, -260], s: 0.8, spin: [0.2, 0.6, 0.1]},
  {kind: 'ch4', p: [-430, 210, 80], s: 0.9, spin: [0.4, 0.35, 0.3]},
  {kind: 'h2o', p: [380, 230, 160], s: 0.75, spin: [0.3, 0.5, 0.4]},
  {kind: 'o2', p: [80, -330, -380], s: 0.8, spin: [0.6, 0.2, 0.3]},
  {kind: 'nh3', p: [610, 20, -300], s: 0.85, spin: [0.25, 0.45, 0.2]},
  {kind: 'h2o', p: [-640, 10, -420], s: 0.8, spin: [0.45, 0.2, 0.5]},
  {kind: 'co2', p: [-120, 330, -320], s: 0.8, spin: [0.3, 0.3, 0.6]},
];
const MOL_ATOMS: Record<Mol['kind'], {p: V3; kind: string; r: number}[]> = {
  h2o: [
    {p: [0, 0, 0], kind: 'oxygen', r: 34},
    {p: [56, 42, 0], kind: 'hydrogen', r: 22},
    {p: [-56, 42, 0], kind: 'hydrogen', r: 22},
  ],
  co2: [
    {p: [0, 0, 0], kind: 'carbon', r: 32},
    {p: [80, 0, 0], kind: 'oxygen', r: 34},
    {p: [-80, 0, 0], kind: 'oxygen', r: 34},
  ],
  ch4: [
    {p: [0, 0, 0], kind: 'carbon', r: 34},
    {p: [50, 50, 50], kind: 'hydrogen', r: 22},
    {p: [-50, -50, 50], kind: 'hydrogen', r: 22},
    {p: [-50, 50, -50], kind: 'hydrogen', r: 22},
    {p: [50, -50, -50], kind: 'hydrogen', r: 22},
  ],
  o2: [
    {p: [-38, 0, 0], kind: 'oxygen', r: 34},
    {p: [38, 0, 0], kind: 'oxygen', r: 34},
  ],
  nh3: [
    {p: [0, -10, 0], kind: 'nitrogen', r: 33},
    {p: [60, 30, 10], kind: 'hydrogen', r: 22},
    {p: [-40, 30, 45], kind: 'hydrogen', r: 22},
    {p: [-20, 30, -60], kind: 'hydrogen', r: 22},
  ],
};

const SmallMol: React.FC<{m: Mol; t: number; i: number}> = ({m, t, i}) => {
  const drift: V3 = [m.p[0] + 14 * Math.sin(t * 0.7 + i), m.p[1] + 12 * Math.cos(t * 0.6 + i * 2), m.p[2]];
  const [cx, cy, k] = persp(drift);
  const atoms = MOL_ATOMS[m.kind]
    .map((a) => {
      let v = rotY(a.p, t * m.spin[1] + i);
      v = rotX(v, t * m.spin[0] + i * 0.7);
      return {x: cx + v[0] * m.s * k, y: cy + v[1] * m.s * k, z: v[2], r: a.r * m.s * k, kind: a.kind};
    })
    .sort((a, b) => a.z - b.z);
  const far = Math.max(0.35, Math.min(1, 1 + m.p[2] / 700));
  return (
    <g opacity={0.75 * far}>
      {atoms.slice(1).map((a, j) => (
        <line key={j} x1={f1(atoms[0].x)} y1={f1(atoms[0].y)} x2={f1(a.x)} y2={f1(a.y)} stroke="#d9e2f5" strokeWidth={f1(10 * m.s * k)} strokeLinecap="round" opacity={0.85} />
      ))}
      {atoms.map((a, j) => (
        <Ball key={j} x={a.x} y={a.y} r={a.r} kind={a.kind} />
      ))}
    </g>
  );
};

export const Molecule: React.FC<LayerProps> = (p) => {
  const {t} = p;
  const cs = Array.from({length: 6}, (_, k) => persp(benzeneAtom(k, t)));
  const hs = Array.from({length: 6}, (_, k) => persp(benzeneAtom(k, t, true)));
  const csz = Array.from({length: 6}, (_, k) => benzeneAtom(k, t)[2]);
  const hsz = Array.from({length: 6}, (_, k) => benzeneAtom(k, t, true)[2]);
  // awan elektron π: dua cincin di atas & di bawah bidang molekul
  const piRing = (zoff: number) =>
    smoothPath(
      Array.from({length: 49}, (_, i) => {
        const a = (i / 48) * TAU;
        const [x, y] = persp(benzeneRot([Math.cos(a) * 112, Math.sin(a) * 112, zoff], t));
        return [x, y] as V2;
      }),
    );
  const up = benzeneRot([0, 0, 1], t)[2] >= 0;
  const piA = piRing(up ? -46 : 46);
  const piB = piRing(up ? 46 : -46);
  const atoms = [
    ...cs.map((c, k) => ({x: c[0], y: c[1], r: 46 * c[2], z: csz[k], kind: 'carbon', k})),
    ...hs.map((h, k) => ({x: h[0], y: h[1], r: 30 * h[2], z: hsz[k], kind: 'hydrogen', k: k + 6})),
  ].sort((a, b) => a.z - b.z);
  const mols = MOLS.map((m, i) => ({m, i})).sort((a, b) => a.m.p[2] - b.m.p[2]);
  return (
    <Frame p={p}>
      {mols.filter(({m}) => m.p[2] < 0).map(({m, i}) => <SmallMol key={i} m={m} t={t} i={i} />)}
      <Glow r={260} c="mint" o={0.25} />
      <path d={piA} fill="none" stroke={C.mint} strokeWidth={26} opacity={0.12} />
      <path d={piA} fill="none" stroke={C.mint} strokeWidth={3} strokeDasharray="10 14" strokeDashoffset={f1(-t * 60)} opacity={0.5} />
      {hs.map(([x, y, kk], k) => (
        <line key={`h${k}`} x1={f1(cs[k][0])} y1={f1(cs[k][1])} x2={f1(x)} y2={f1(y)} stroke="#d9e2f5" strokeWidth={f1(13 * kk)} strokeLinecap="round" />
      ))}
      {cs.map(([x, y, kk], k) => {
        const [nx, ny] = cs[(k + 1) % 6];
        const dbl = k % 2 === 0;
        const ix = (x + nx) / 2;
        const iy = (y + ny) / 2;
        const l = Math.hypot(ix, iy) || 1;
        const sx = (-ix / l) * 22 * kk;
        const sy = (-iy / l) * 22 * kk;
        return (
          <g key={`c${k}`}>
            <line x1={f1(x)} y1={f1(y)} x2={f1(nx)} y2={f1(ny)} stroke="#d9e2f5" strokeWidth={f1(15 * kk)} strokeLinecap="round" />
            {dbl ? (
              <line x1={f1(x * 0.8 + nx * 0.2 + sx)} y1={f1(y * 0.8 + ny * 0.2 + sy)} x2={f1(x * 0.2 + nx * 0.8 + sx)} y2={f1(y * 0.2 + ny * 0.8 + sy)} stroke={C.mint} strokeWidth={f1(9 * kk)} strokeLinecap="round" opacity={0.9} />
            ) : null}
          </g>
        );
      })}
      {atoms.map((a) => (
        <Ball key={a.k} x={a.x} y={a.y} r={a.r} kind={a.kind} />
      ))}
      <path d={piB} fill="none" stroke={C.mint} strokeWidth={26} opacity={0.14} />
      <path d={piB} fill="none" stroke={C.mint} strokeWidth={3} strokeDasharray="10 14" strokeDashoffset={f1(-t * 60)} opacity={0.75} />
      {mols.filter(({m}) => m.p[2] >= 0).map(({m, i}) => <SmallMol key={i} m={m} t={t} i={i} />)}
    </Frame>
  );
};

// ===========================================================================
// 3 · DNA — heliks ganda dalam perspektif, menjauh ke kanan
// ===========================================================================
const PAIRS = [
  [C.mint, C.pink],
  [C.gold, C.cyan],
];
const SEQ = Array.from({length: 60}, (_, j) => (rand(j * 3.3) > 0.5 ? 1 : 0));
const IONS = Array.from({length: 70}, (_, i) => ({x: (rand(i * 1.3) - 0.5) * 1300, y: (rand(i * 2.7) - 0.5) * 700, z: (rand(i * 3.9) - 0.5) * 600, c: [C.cyan, C.mint, C.pink, C.gold][i % 4]}));

export const Dna: React.FC<LayerProps> = (p) => {
  const {t} = p;
  const R = 118;
  const yaw = 0.62;
  const pitch = 0.16;
  const phase = (x: number) => x * 0.0105 + t * 1.1;
  const P = (x: number, ang: number, r = R) => {
    const v = rotX(rotY([x, r * Math.cos(ang), r * Math.sin(ang)], yaw), pitch);
    const [px, py, k] = persp(v, 1150);
    return {x: px, y: py, k, z: v[2]};
  };
  type Item = {z: number; el: React.ReactNode};
  const items: Item[] = [];
  const xs = Array.from({length: 151}, (_, i) => -760 + i * 10);
  for (const strand of [0, 1]) {
    const col = strand ? C.violet : C.cyan;
    const pts = xs.map((x) => P(x, phase(x) + strand * Math.PI));
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i];
      const b = pts[i + 1];
      const z = (a.z + b.z) / 2;
      const front = z > -40 ? 1 : 0.55;
      const w = 15 * (a.k + b.k) * 0.5;
      items.push({
        z,
        el: (
          <g key={`s${strand}-${i}`} opacity={front}>
            <line x1={f1(a.x)} y1={f1(a.y)} x2={f1(b.x)} y2={f1(b.y)} stroke={col} strokeWidth={f1(w * 2)} strokeLinecap="round" opacity={0.18} />
            <line x1={f1(a.x)} y1={f1(a.y)} x2={f1(b.x)} y2={f1(b.y)} stroke={col} strokeWidth={f1(w)} strokeLinecap="round" />
            <line x1={f1(a.x)} y1={f1(a.y - w * 0.22)} x2={f1(b.x)} y2={f1(b.y - w * 0.22)} stroke="#ffffff" strokeWidth={f1(w * 0.28)} strokeLinecap="round" opacity={0.5} />
          </g>
        ),
      });
    }
  }
  for (let j = -22; j <= 22; j++) {
    const x = j * 34;
    const ph = phase(x);
    const a = P(x, ph);
    const b = P(x, ph + Math.PI);
    const m = P(x, 0, 0);
    const [ca, cb] = PAIRS[SEQ[j + 22]];
    const flip = SEQ[(j + 29) % 60];
    const w = 8 * m.k;
    items.push({
      z: m.z - 1,
      el: (
        <g key={`r${j}`}>
          <line x1={f1(a.x)} y1={f1(a.y)} x2={f1(m.x)} y2={f1(m.y)} stroke={flip ? cb : ca} strokeWidth={f1(w)} strokeLinecap="round" />
          <line x1={f1(m.x)} y1={f1(m.y)} x2={f1(b.x)} y2={f1(b.y)} stroke={flip ? ca : cb} strokeWidth={f1(w)} strokeLinecap="round" />
        </g>
      ),
    });
  }
  items.sort((u, v) => u.z - v.z);
  return (
    <Frame p={p}>
      <Glow r={560} c="blue" o={0.2} />
      {IONS.map((q, i) => {
        const [x, y, k] = persp([q.x + 20 * Math.sin(t * 0.6 + i), q.y + 16 * Math.cos(t * 0.5 + i), q.z], 1150);
        return <circle key={i} cx={f1(x)} cy={f1(y)} r={f1(5 * k)} fill={q.c} opacity={0.45} />;
      })}
      {items.map((it) => it.el)}
      {/* placeholder cincin basa di pusat */}
      <g opacity={1 - p.inner}>
        <polygon
          points={Array.from({length: 6}, (_, k) => `${f1(24 * Math.cos(BENZENE.focus + (k * Math.PI) / 3))},${f1(24 * Math.sin(BENZENE.focus + (k * Math.PI) / 3))}`).join(' ')}
          fill="none"
          stroke={C.mint}
          strokeWidth={5}
        />
      </g>
    </Frame>
  );
};
