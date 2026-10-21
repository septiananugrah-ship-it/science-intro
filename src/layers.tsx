// Tingkat-tingkat skala, masing-masing digambar di koordinat lokalnya
// (lebar layar = 1000 unit saat tingkat itu pas di layar; tinggi terlihat ±280).
import React from 'react';
import {rand, ramp, smoothPath} from './anim';
import {Easing} from 'remotion';

const EASE_OUT_SOFT = Easing.bezier(0.3, 0.4, 0.25, 1);
import {BENZENE, CELL_NUCLEUS, EARTH, SOLAR, earthOrbitXY, earthXY, CELL_LATLON} from './camera';
import {V2, V3, f1, rotX, rotY} from './engine';
import {C} from './theme';

export type LayerProps = {
  t: number;
  /** posisi layar titik asal lokal */
  x: number;
  y: number;
  /** px per unit lokal */
  s: number;
  /** opasitas tingkat */
  a: number;
  /** seberapa terlihat tingkat anak (untuk menukar ke "placeholder") */
  inner: number;
};

const NS = 'non-scaling-stroke';
const TAU = Math.PI * 2;

const Frame: React.FC<{p: LayerProps; children: React.ReactNode}> = ({p, children}) =>
  p.a <= 0.004 ? null : (
    <g transform={`translate(${f1(p.x)} ${f1(p.y)}) scale(${p.s.toPrecision(6)})`} opacity={p.a}>
      {children}
    </g>
  );

const Ball: React.FC<{x: number; y: number; r: number; kind: string; o?: number}> = ({x, y, r, kind, o = 1}) => (
  <circle cx={f1(x)} cy={f1(y)} r={f1(r)} fill={`url(#sph-${kind})`} opacity={o} />
);

const Glow: React.FC<{x?: number; y?: number; r: number; c: string; o?: number}> = ({x = 0, y = 0, r, c, o = 1}) => (
  <circle cx={f1(x)} cy={f1(y)} r={f1(r)} fill={`url(#glow-${c})`} opacity={o} />
);

// ===========================================================================
// 0 · INTI ATOM (karbon-12: 6 proton + 6 neutron, tiap nukleon berisi 3 kuark)
// ===========================================================================
const PHI = (1 + Math.sqrt(5)) / 2;
const ICO: V3[] = (
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
const PROTONS = new Set([0, 3, 4, 7, 9, 10]);
const QUARK = ['#ff4d6d', '#4dff9a', '#5b8cff'];

export const Nucleus: React.FC<LayerProps> = (p) => {
  const {t} = p;
  const pulse = Math.exp(-(((t - 0.82) / 0.16) ** 2));
  const items = ICO.map((v0, i) => {
    let v = rotX(rotY(v0, t * 0.55 + 0.4), 0.35 + t * 0.12);
    // terbentuk: nukleon melesat masuk dari segala arah
    const e = ramp(t, 0.0 + rand(i * 3.1) * 0.3, 0.7 + rand(i * 3.1) * 0.12, EASE_OUT_SOFT);
    const da = rand(i * 5.7) * TAU;
    const far = 720 + rand(i * 2.3) * 380;
    v = [v[0] * e + Math.cos(da) * far * (1 - e), v[1] * e + Math.sin(da) * far * (1 - e) * 0.7, v[2]];
    const j = 2.5 * e;
    v = [v[0] + j * Math.sin(t * 13 + i), v[1] + j * Math.cos(t * 11 + i * 2), v[2]];
    const pf = 1 + v[2] / 700;
    return {x: v[0] * pf, y: v[1] * pf, z: v[2], r: 58 * pf, i, e};
  }).sort((a, b) => a.z - b.z);

  // busa kuantum: pasangan partikel virtual muncul lalu saling memusnahkan
  const foam = Array.from({length: 44}, (_, j) => {
    const period = 0.8 + rand(j * 1.7) * 0.9;
    const ph = rand(j * 2.3) * period;
    const cyc = Math.floor((t + ph) / period);
    const life = (t + ph) / period - cyc;
    const sd = j * 7.1 + cyc * 13.7;
    const ang = rand(sd) * TAU;
    const rad = 230 + rand(sd + 1) * 430;
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
      <Glow r={420} c="warm" o={0.22 + 0.5 * pulse} />
      {foam}
      {items.map((n) => (
        <g key={n.i}>
          <Ball x={n.x} y={n.y} r={n.r} kind={PROTONS.has(n.i) ? 'proton' : 'neutron'} o={0.35 + 0.65 * n.e} />
          {[0, 1, 2].map((q) => {
            const a = t * 5 + n.i * 1.3 + (q * TAU) / 3;
            const qx = n.x + Math.cos(a) * n.r * 0.4;
            const qy = n.y + Math.sin(a) * n.r * 0.4;
            return (
              <g key={q} opacity={0.75 * n.e}>
                <circle cx={f1(qx)} cy={f1(qy)} r={f1(n.r * 0.2)} fill={QUARK[q]} opacity={0.25} />
                <circle cx={f1(qx)} cy={f1(qy)} r={f1(n.r * 0.085)} fill={QUARK[q]} />
              </g>
            );
          })}
        </g>
      ))}
      <Glow r={260} c="white" o={0.55 * pulse} />
    </Frame>
  );
};

// ===========================================================================
// 1 · ATOM — awan probabilitas orbital (berkedip tiap frame) + orbit klasik
// ===========================================================================
const LOBE = 'M0,0 C50,-84 226,-104 246,0 C226,104 50,84 0,0 Z';
const LOBE_COLORS = ['c', 'v', 'p'];

export const Atom: React.FC<LayerProps> = (p) => {
  const {t} = p;
  const spin = t * 9;
  const fr = Math.floor(t * 30);
  const dots = Array.from({length: 300}, (_, j) => {
    const sd = j * 1.37 + fr * 0.913;
    if (j < 70) {
      // orbital s: sebaran bola
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
  return (
    <Frame p={p}>
      <circle r={300} fill="url(#cloud)" />
      {[0, 1, 2].map((o) => (
        <g key={o} transform={`rotate(${f1(o * 60 + spin)})`}>
          <path d={LOBE} fill={`url(#lobe-${LOBE_COLORS[o]})`} />
          <path d={LOBE} fill={`url(#lobe-${LOBE_COLORS[o]})`} transform="rotate(180)" />
        </g>
      ))}
      {dots.map(([x, y, o], j) => (
        <circle key={j} cx={f1(x)} cy={f1(y)} r={f1(Math.min(2.6, 3.2 / p.s))} fill={j < 70 ? '#ffffff' : [C.cyan, C.violet, C.pink][o]} opacity={0.75} />
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
// 2 · MOLEKUL — benzena C₆H₆ (ikatan bergetar: anggukan ke "gerak vibrasi")
// ===========================================================================
const WATERS: {x: number; y: number; r: number; s: number}[] = [
  {x: 405, y: -205, r: 0.4, s: 0.85},
  {x: -430, y: 190, r: 2.1, s: 0.75},
  {x: 360, y: 215, r: 4.2, s: 0.65},
];

const Water: React.FC<{x: number; y: number; rot: number; s: number}> = ({x, y, rot, s}) => {
  const h = [-0.91, 0.91].map((d) => [Math.cos(rot + d) * 70, Math.sin(rot + d) * 70] as V2);
  return (
    <g transform={`translate(${f1(x)} ${f1(y)}) scale(${s})`} opacity={0.6}>
      {h.map(([hx, hy], i) => (
        <line key={i} x1={0} y1={0} x2={f1(hx)} y2={f1(hy)} stroke="#d9e2f5" strokeWidth={11} strokeLinecap="round" />
      ))}
      {h.map(([hx, hy], i) => (
        <Ball key={i} x={hx} y={hy} r={22} kind="hydrogen" />
      ))}
      <Ball x={0} y={0} r={34} kind="oxygen" />
    </g>
  );
};

export const Molecule: React.FC<LayerProps> = (p) => {
  const {t} = p;
  const ang = (k: number) => BENZENE.focus + (k * Math.PI) / 3;
  const cs = Array.from({length: 6}, (_, k) => {
    const v = 1 + 0.012 * Math.sin(t * 9 + k * 2.1);
    return [Math.cos(ang(k)) * BENZENE.rc * v, Math.sin(ang(k)) * BENZENE.rc * v] as V2;
  });
  const hs = Array.from({length: 6}, (_, k) => {
    const v = 1 + 0.045 * Math.sin(t * 12 + k * 1.3);
    return [Math.cos(ang(k)) * BENZENE.rh * v, Math.sin(ang(k)) * BENZENE.rh * v] as V2;
  });
  return (
    <Frame p={p}>
      {WATERS.map((w, i) => (
        <Water key={i} x={w.x + 12 * Math.sin(t * 0.9 + i)} y={w.y + 10 * Math.cos(t * 0.7 + i)} rot={w.r + t * (0.5 + i * 0.15)} s={w.s} />
      ))}
      <Glow r={190} c="mint" o={0.22} />
      {/* awan elektron π yang terdelokalisasi */}
      <circle r={96} fill="none" stroke={C.mint} strokeWidth={10} opacity={0.18} />
      <circle r={96} fill="none" stroke={C.mint} strokeWidth={3} strokeDasharray="10 14" strokeDashoffset={f1(-t * 60)} opacity={0.75} />
      {hs.map(([x, y], k) => (
        <line key={`h${k}`} x1={f1(cs[k][0])} y1={f1(cs[k][1])} x2={f1(x)} y2={f1(y)} stroke="#d9e2f5" strokeWidth={13} strokeLinecap="round" />
      ))}
      {cs.map(([x, y], k) => {
        const [nx, ny] = cs[(k + 1) % 6];
        const dbl = k % 2 === 0;
        const ix = (x + nx) / 2;
        const iy = (y + ny) / 2;
        const l = Math.hypot(ix, iy);
        const sx = (-ix / l) * 22;
        const sy = (-iy / l) * 22;
        return (
          <g key={`c${k}`}>
            <line x1={f1(x)} y1={f1(y)} x2={f1(nx)} y2={f1(ny)} stroke="#d9e2f5" strokeWidth={15} strokeLinecap="round" />
            {dbl ? (
              <line x1={f1(x * 0.8 + nx * 0.2 + sx)} y1={f1(y * 0.8 + ny * 0.2 + sy)} x2={f1(x * 0.2 + nx * 0.8 + sx)} y2={f1(y * 0.2 + ny * 0.8 + sy)} stroke={C.mint} strokeWidth={9} strokeLinecap="round" opacity={0.9} />
            ) : null}
          </g>
        );
      })}
      {hs.map(([x, y], k) => (
        <Ball key={`H${k}`} x={x} y={y} r={30} kind="hydrogen" />
      ))}
      {cs.map(([x, y], k) => (
        <Ball key={`C${k}`} x={x} y={y} r={46} kind="carbon" />
      ))}
    </Frame>
  );
};

// ===========================================================================
// 3 · DNA — heliks ganda yang berputar; pasangan basa di tengah = benzena tadi
// ===========================================================================
const PAIRS = [
  [C.mint, C.pink],
  [C.gold, C.cyan],
];
const SEQ = Array.from({length: 40}, (_, j) => (rand(j * 3.3) > 0.5 ? 1 : 0));

export const Dna: React.FC<LayerProps> = (p) => {
  const {t} = p;
  const R = 122;
  const phase = (x: number) => x * 0.0105 + t * 1.1;
  const pts = Array.from({length: 151}, (_, i) => -600 + i * 8);
  const strand = (sgn: number) =>
    pts.map((x) => {
      const ph = phase(x) + (sgn > 0 ? 0 : Math.PI);
      return {x, y: R * Math.cos(ph), z: Math.sin(ph)};
    });
  const s1 = strand(1);
  const s2 = strand(-1);
  // pisahkan tiap untai menjadi ruas belakang (z<0) dan depan (z≥0)
  const runs = (s: {x: number; y: number; z: number}[], front: boolean) => {
    const out: string[] = [];
    let cur: V2[] = [];
    for (const q of s) {
      if (q.z >= 0 === front) cur.push([q.x, q.y]);
      else if (cur.length) {
        out.push(smoothPath(cur));
        cur = [];
      }
    }
    if (cur.length > 1) out.push(smoothPath(cur));
    return out;
  };
  const rungs = Array.from({length: 35}, (_, j) => {
    const x = (j - 17) * 34;
    const ph = phase(x);
    const y1 = R * Math.cos(ph);
    const vis = 0.35 + 0.65 * Math.abs(Math.cos(ph));
    const [ca, cb] = PAIRS[SEQ[j]];
    const flip = SEQ[(j + 7) % 40];
    return (
      <g key={j} opacity={vis}>
        <line x1={x} y1={f1(y1)} x2={x} y2={0} stroke={flip ? cb : ca} strokeWidth={7} strokeLinecap="round" />
        <line x1={x} y1={0} x2={x} y2={f1(-y1)} stroke={flip ? ca : cb} strokeWidth={7} strokeLinecap="round" />
      </g>
    );
  });
  return (
    <Frame p={p}>
      <Glow r={420} c="blue" o={0.16} />
      {runs(s1, false).map((d, i) => (
        <path key={`a${i}`} d={d} fill="none" stroke={C.cyan} strokeWidth={13} strokeLinecap="round" opacity={0.35} />
      ))}
      {runs(s2, false).map((d, i) => (
        <path key={`b${i}`} d={d} fill="none" stroke={C.violet} strokeWidth={13} strokeLinecap="round" opacity={0.35} />
      ))}
      {rungs}
      {runs(s1, true).map((d, i) => (
        <g key={`A${i}`}>
          <path d={d} fill="none" stroke={C.cyan} strokeWidth={26} strokeLinecap="round" opacity={0.22} />
          <path d={d} fill="none" stroke={C.cyan} strokeWidth={15} strokeLinecap="round" />
          <path d={d} fill="none" stroke="#ffffff" strokeWidth={4} strokeLinecap="round" opacity={0.55} />
        </g>
      ))}
      {runs(s2, true).map((d, i) => (
        <g key={`B${i}`}>
          <path d={d} fill="none" stroke={C.violet} strokeWidth={26} strokeLinecap="round" opacity={0.22} />
          <path d={d} fill="none" stroke={C.violet} strokeWidth={15} strokeLinecap="round" />
          <path d={d} fill="none" stroke="#ffffff" strokeWidth={4} strokeLinecap="round" opacity={0.5} />
        </g>
      ))}
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

// ===========================================================================
// 4 · SEL — membran, inti sel berisi kromatin (DNA tadi), mitokondria, RE, Golgi
// ===========================================================================
const blob = (rx: number, ry: number, t: number, seed: number, n = 64) =>
  smoothPath(
    Array.from({length: n + 1}, (_, i) => {
      const a = (i / n) * TAU;
      const w = 1 + 0.028 * Math.sin(5 * a + t * 1.3 + seed) + 0.016 * Math.sin(9 * a - t + seed * 2);
      return [Math.cos(a) * rx * w, Math.sin(a) * ry * w] as V2;
    }),
  );

const MITO = [
  {x: 200, y: -120, r: 18},
  {x: 262, y: 118, r: -34},
  {x: -318, y: -70, r: 72},
  {x: -250, y: 150, r: -12},
];
const SPECKS = Array.from({length: 110}, (_, i) => {
  const a = rand(i * 1.9) * TAU;
  const rr = Math.sqrt(rand(i * 2.7));
  return {x: Math.cos(a) * rr * 400, y: Math.sin(a) * rr * 235, s: 2 + rand(i * 4.1) * 4, c: [C.mint, C.pink, C.gold, C.cyan][i % 4]};
});
const CHROMATIN = Array.from({length: 9}, (_, i) => ({
  x: CELL_NUCLEUS.x + (rand(i * 3.1) - 0.5) * 120,
  y: CELL_NUCLEUS.y + (rand(i * 4.3) - 0.5) * 110,
  rot: rand(i * 5.9) * 180,
  len: 40 + rand(i * 6.7) * 50,
}));

export const Cell: React.FC<LayerProps> = (p) => {
  const {t} = p;
  const nuc = CELL_NUCLEUS;
  return (
    <Frame p={p}>
      <path d={blob(430, 258, t, 0)} fill="url(#cellfill)" />
      <path d={blob(430, 258, t, 0)} fill="none" stroke={C.mint} strokeWidth={3} vectorEffect={NS} opacity={0.9} />
      <path d={blob(414, 243, t, 0.3)} fill="none" stroke={C.mint} strokeWidth={1.3} vectorEffect={NS} opacity={0.5} />
      {SPECKS.map((q, i) => (
        <circle key={i} cx={f1(q.x + 8 * Math.sin(t * 0.8 + i))} cy={f1(q.y + 6 * Math.cos(t * 0.9 + i * 1.7))} r={q.s} fill={q.c} opacity={0.35} />
      ))}
      {/* retikulum endoplasma */}
      {[132, 152, 172].map((r, i) => (
        <path
          key={i}
          d={smoothPath(
            Array.from({length: 40}, (_, k) => {
              const a = -1.2 + (k / 39) * 2.6 + i * 0.2;
              const w = r + 6 * Math.sin(k * 1.3 + t * 2 + i);
              return [nuc.x + Math.cos(a) * w, nuc.y + Math.sin(a) * w] as V2;
            }),
          )}
          fill="none"
          stroke={C.pink}
          strokeWidth={2}
          vectorEffect={NS}
          opacity={0.55}
        />
      ))}
      {/* badan Golgi */}
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M${60 + i * 14},${-40 - i * 4} q40,${30 + i * 4} 0,${80 + i * 8}`} transform="translate(60 40)" fill="none" stroke={C.gold} strokeWidth={6} strokeLinecap="round" opacity={0.6} />
      ))}
      {MITO.map((m, i) => (
        <g key={i} transform={`translate(${m.x} ${m.y}) rotate(${m.r + 4 * Math.sin(t + i)})`}>
          <ellipse rx={66} ry={30} fill="url(#sph-mito)" opacity={0.85} />
          <path d="M-48,0 l10,-16 l10,32 l10,-32 l10,32 l10,-32 l10,32 l10,-32 l10,32 l8,-16" fill="none" stroke="#fff1d8" strokeWidth={3} strokeLinejoin="round" opacity={0.7} />
        </g>
      ))}
      {/* inti sel */}
      <circle cx={nuc.x} cy={nuc.y} r={nuc.r} fill="url(#nucfill)" />
      <circle cx={nuc.x} cy={nuc.y} r={nuc.r} fill="none" stroke={C.violet} strokeWidth={2.5} vectorEffect={NS} />
      <circle cx={nuc.x} cy={nuc.y} r={nuc.r - 7} fill="none" stroke={C.violet} strokeWidth={1} vectorEffect={NS} opacity={0.6} />
      <circle cx={nuc.x + 30} cy={nuc.y + 28} r={26} fill="#3b2a8a" opacity={0.75} />
      {CHROMATIN.map((c, i) => (
        <path
          key={i}
          transform={`translate(${f1(c.x)} ${f1(c.y)}) rotate(${f1(c.rot + t * 6)})`}
          d={smoothPath(Array.from({length: 24}, (_, k) => [-c.len / 2 + (k / 23) * c.len, 7 * Math.sin(k * 1.2 + t * 2 + i)] as V2))}
          fill="none"
          stroke={i % 2 ? C.cyan : '#d7c8ff'}
          strokeWidth={2.4}
          vectorEffect={NS}
          opacity={0.75}
        />
      ))}
      {/* placeholder untai DNA tempat zoom berasal */}
      <path
        d={smoothPath(Array.from({length: 30}, (_, k) => [nuc.x + 18 - 43 + k * 3, nuc.y - 10 + 7 * Math.sin(k * 0.9 + t * 1.6)] as V2))}
        fill="none"
        stroke={C.cyan}
        strokeWidth={3}
        vectorEffect={NS}
        opacity={1 - p.inner}
      />
    </Frame>
  );
};

// ===========================================================================
// 5 · BUMI — globe berputar dengan garis lintang/bujur, benua, awan, Bulan
// ===========================================================================
const LAND: [number, number][][] = [
  // [bujur, lintang]
  [[-17, 21], [-6, 35], [10, 37], [32, 31], [43, 12], [51, 11], [40, -3], [40, -16], [33, -26], [20, -35], [15, -27], [12, -6], [9, 4], [-8, 5], [-17, 14]],
  [[-10, 36], [-9, 44], [-2, 48], [5, 53], [10, 58], [25, 70], [60, 70], [100, 76], [140, 72], [178, 67], [160, 60], [142, 52], [135, 35], [122, 30], [121, 22], [108, 12], [104, 2], [98, 8], [92, 22], [80, 10], [72, 20], [57, 25], [50, 30], [36, 36], [28, 41], [20, 40], [12, 44], [3, 43]],
  [[95, 5.5], [98, 4], [104, -2], [106, -6], [103, -5.5], [98, 0]],
  [[105, -6], [108, -6.3], [114, -7.2], [114.5, -8.5], [108, -8], [105, -7]],
  [[109, 1.5], [111, -3], [116, -4], [119, 1], [117, 7], [113, 3]],
  [[119, -5.5], [120, 0.5], [125, 1.5], [121, -1], [123, -4.5], [121, -5.5]],
  [[131, -1], [138, -1.5], [141, -3], [147, -6], [150, -10.5], [142, -9], [137, -5]],
  [[114, -22], [122, -17], [130, -12], [137, -12], [142, -11], [146, -19], [153, -26], [150, -37], [141, -38], [131, -31], [115, -34]],
  [[-165, 65], [-140, 70], [-95, 72], [-80, 62], [-60, 55], [-66, 45], [-75, 35], [-81, 26], [-97, 26], [-105, 20], [-90, 16], [-83, 9], [-105, 22], [-117, 32], [-124, 40], [-125, 50], [-140, 60]],
  [[-80, 8], [-60, 10], [-50, 0], [-35, -6], [-40, -22], [-58, -38], [-68, -55], [-75, -45], [-71, -20], [-81, -5]],
];

const globePt = (lat: number, lon: number, t: number): [number, number, number] => {
  const [x, y, z] = earthXY(lat, lon, t);
  if (z >= 0) return [x, y, z];
  // titik di sisi belakang ditempelkan ke tepi globe
  const l = Math.hypot(x, y) || 1;
  return [(x / l) * EARTH.r, (y / l) * EARTH.r, z];
};

export const Earth: React.FC<LayerProps> = (p) => {
  const {t} = p;
  const moonA = t * 0.55 + 2.2;
  const mx = 430 * Math.cos(moonA);
  const my = 95 * Math.sin(moonA);
  const rot = -12;
  const mcos = Math.cos((rot * Math.PI) / 180);
  const msin = Math.sin((rot * Math.PI) / 180);
  const moon = {x: mx * mcos - my * msin, y: mx * msin + my * mcos};
  const moonEl = <Ball x={moon.x} y={moon.y} r={36} kind="moon" />;
  const behind = Math.sin(moonA) < 0;
  const grid: string[] = [];
  for (let lon = 0; lon < 360; lon += 30) {
    const pts: V2[] = [];
    for (let lat = -90; lat <= 90; lat += 6) {
      const [x, y, z] = earthXY(lat, lon, t);
      if (z > 0) pts.push([x, y]);
      else if (pts.length) break;
    }
    if (pts.length > 1) grid.push(smoothPath(pts));
  }
  for (let lat = -60; lat <= 60; lat += 30) {
    let pts: V2[] = [];
    for (let lon = 0; lon <= 360; lon += 6) {
      const [x, y, z] = earthXY(lat, lon, t);
      if (z > 0) pts.push([x, y]);
      else if (pts.length > 1) {
        grid.push(smoothPath(pts));
        pts = [];
      } else pts = [];
    }
    if (pts.length > 1) grid.push(smoothPath(pts));
  }
  const [cx, cy] = earthXY(CELL_LATLON[0], CELL_LATLON[1], t);
  return (
    <Frame p={p}>
      <g transform={`rotate(${rot})`}>
        <ellipse rx={430} ry={95} fill="none" stroke="#9fb6d8" strokeWidth={1.2} vectorEffect={NS} opacity={0.35} />
      </g>
      {behind ? moonEl : null}
      <circle r={268} fill="url(#atmo)" />
      <circle r={230} fill="url(#ocean)" />
      <g clipPath="url(#globe)">
        {LAND.map((poly, i) => {
          const pts = poly.map(([lon, lat]) => globePt(lat, lon, t));
          if (pts.every((q) => q[2] < 0)) return null;
          return <path key={i} d={smoothPath([...pts.map((q) => [q[0], q[1]] as V2), [pts[0][0], pts[0][1]]])} fill={i === 0 ? '#c9a868' : '#5fbf7a'} opacity={0.85} />;
        })}
        {grid.map((d, i) => (
          <path key={i} d={d} fill="none" stroke={C.cyan} strokeWidth={1} vectorEffect={NS} opacity={0.3} />
        ))}
        <circle r={230} fill="url(#night)" />
      </g>
      <circle r={230} fill="none" stroke="#9fe3ff" strokeWidth={1.5} vectorEffect={NS} opacity={0.6} />
      {behind ? null : moonEl}
      {/* placeholder: titik cahaya di Bandung, tempat sel tadi */}
      <g opacity={1 - p.inner}>
        <Glow x={cx} y={cy} r={22} c="gold" />
        <circle cx={f1(cx)} cy={f1(cy)} r={3.5} fill="#ffffff" />
      </g>
    </Frame>
  );
};

// ===========================================================================
// 6 · TATA SURYA
// ===========================================================================
const PLANETS: {r: number; size: number; kind: string; ph: number; ring?: boolean}[] = [
  {r: 62, size: 4, kind: 'mercury', ph: 1.1},
  {r: 100, size: 6.5, kind: 'venus', ph: 3.7},
  {r: SOLAR.earthR, size: 7.7, kind: 'earthdot', ph: 0},
  {r: 205, size: 5.5, kind: 'mars', ph: 2.3},
  {r: 305, size: 18, kind: 'jupiter', ph: 4.4},
  {r: 385, size: 15, kind: 'saturn', ph: 0.9, ring: true},
  {r: 448, size: 10, kind: 'uranus', ph: 5.6},
  {r: 500, size: 10, kind: 'neptune', ph: 2.9},
];
const BELT = Array.from({length: 150}, (_, i) => ({r: 238 + rand(i * 1.3) * 40, a: rand(i * 2.9) * TAU, s: 1.5 + rand(i * 3.3) * 1.8}));

export const Solar: React.FC<LayerProps> = (p) => {
  const {t} = p;
  const pos = (r: number, a: number): V2 => [r * Math.cos(a), r * SOLAR.incl * Math.sin(a)];
  return (
    <Frame p={p}>
      {PLANETS.map((pl) => (
        <ellipse
          key={pl.kind}
          rx={pl.r}
          ry={pl.r * SOLAR.incl}
          fill="none"
          stroke={pl.kind === 'earthdot' ? C.cyan : '#8fb4ff'}
          strokeWidth={pl.kind === 'earthdot' ? 1.6 : 1.1}
          vectorEffect={NS}
          opacity={pl.kind === 'earthdot' ? 0.6 : 0.3}
        />
      ))}
      {BELT.map((b, i) => {
        const [x, y] = pos(b.r, b.a + t * 0.12);
        return <circle key={i} cx={f1(x)} cy={f1(y)} r={b.s} fill="#c8b89a" opacity={0.45} />;
      })}
      <circle r={150} fill="url(#sun)" />
      {Array.from({length: 12}, (_, i) => {
        const a = (i / 12) * TAU + t * 0.2;
        return <line key={i} x1={f1(Math.cos(a) * 30)} y1={f1(Math.sin(a) * 30)} x2={f1(Math.cos(a) * 95)} y2={f1(Math.sin(a) * 95)} stroke={C.gold} strokeWidth={2} vectorEffect={NS} opacity={0.18} />;
      })}
      <circle r={20} fill="#fffaf0" />
      {PLANETS.map((pl) => {
        const a = pl.kind === 'earthdot' ? SOLAR.earthPhase + SOLAR.earthOmega * t : pl.ph + SOLAR.earthOmega * (SOLAR.earthR / pl.r) ** 1.5 * t;
        const [x, y] = pl.kind === 'earthdot' ? earthOrbitXY(t) : pos(pl.r, a);
        const isEarth = pl.kind === 'earthdot';
        return (
          <g key={pl.kind} opacity={isEarth ? 1 - p.inner : 1}>
            {pl.ring ? <ellipse cx={f1(x)} cy={f1(y)} rx={pl.size * 2.2} ry={pl.size * 0.7} fill="none" stroke="#f0dca0" strokeWidth={3} opacity={0.8} transform={`rotate(-14 ${f1(x)} ${f1(y)})`} /> : null}
            {isEarth ? <Glow x={x} y={y} r={30} c="cyan" o={0.8} /> : null}
            <Ball x={x} y={y} r={pl.size} kind={pl.kind} />
          </g>
        );
      })}
    </Frame>
  );
};
