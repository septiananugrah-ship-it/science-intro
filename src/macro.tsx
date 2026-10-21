// Dunia makro: sel tumbuhan, daun, Bumi, tata surya (koordinat lokal: lebar layar = 1000 unit).
import React from 'react';
import {rand, smoothPath} from './anim';
import {CELL_NUCLEUS, EARTH, LEAF, LEAF_LATLON, PLANT, SOLAR, earthOrbitXY, earthXY} from './camera';
import {Ball, Frame, Glow, LayerProps, NS, TAU} from './common';
import {V2, f1, smoothstep} from './engine';
import {C} from './theme';

const roundRect = (w: number, h: number, r: number) =>
  `M${-w + r},${-h}H${w - r}Q${w},${-h} ${w},${-h + r}V${h - r}Q${w},${h} ${w - r},${h}H${-w + r}Q${-w},${h} ${-w},${h - r}V${-h + r}Q${-w},${-h} ${-w + r},${-h}Z`;

// ===========================================================================
// 4 · SEL TUMBUHAN — dinding sel, vakuola, kloroplas yang mengalir, inti sel
// ===========================================================================
const SPECKS = Array.from({length: 120}, (_, i) => ({
  x: (rand(i * 1.9) - 0.5) * 780,
  y: (rand(i * 2.7) - 0.5) * 440,
  s: 2 + rand(i * 4.1) * 4,
  c: [C.mint, C.pink, C.gold, C.cyan][i % 4],
}));
const CHROMATIN = Array.from({length: 9}, (_, i) => ({
  x: CELL_NUCLEUS.x + (rand(i * 3.1) - 0.5) * 110,
  y: CELL_NUCLEUS.y + (rand(i * 4.3) - 0.5) * 100,
  rot: rand(i * 5.9) * 180,
  len: 36 + rand(i * 6.7) * 46,
}));
const MITO = [
  {x: -150, y: -178, r: 14},
  {x: 318, y: 176, r: -24},
  {x: -110, y: 182, r: 40},
];
const vacuole = (t: number) =>
  smoothPath(
    Array.from({length: 49}, (_, i) => {
      const a = (i / 48) * TAU;
      const w = 1 + 0.03 * Math.sin(3 * a + t) + 0.02 * Math.sin(5 * a - t * 1.3);
      return [70 + Math.cos(a) * 185 * w, Math.sin(a) * 118 * w] as V2;
    }),
  );

export const Cell: React.FC<LayerProps> = (p) => {
  const {t} = p;
  const nuc = CELL_NUCLEUS;
  return (
    <Frame p={p}>
      <path d={roundRect(PLANT.w + 8, PLANT.h + 8, PLANT.r + 6)} fill="url(#wallfill)" />
      <path d={roundRect(PLANT.w, PLANT.h, PLANT.r)} fill="none" stroke="#6fe08f" strokeWidth={10} opacity={0.85} />
      <path d={roundRect(PLANT.w - 16, PLANT.h - 16, PLANT.r - 10)} fill="none" stroke={C.mint} strokeWidth={1.4} vectorEffect={NS} opacity={0.7} />
      {SPECKS.map((q, i) => (
        <circle key={i} cx={f1(q.x + 8 * Math.sin(t * 0.8 + i))} cy={f1(q.y + 6 * Math.cos(t * 0.9 + i * 1.7))} r={q.s} fill={q.c} opacity={0.3} />
      ))}
      <path d={vacuole(t)} fill="url(#vacuole)" />
      <path d={vacuole(t)} fill="none" stroke="#9fe6ff" strokeWidth={1.6} vectorEffect={NS} opacity={0.7} />
      {/* retikulum endoplasma */}
      {[118, 138, 158].map((r, i) => (
        <path
          key={i}
          d={smoothPath(
            Array.from({length: 40}, (_, k) => {
              const a = -1.25 + (k / 39) * 2.5 + i * 0.15;
              const w = r + 6 * Math.sin(k * 1.3 + t * 2 + i);
              return [nuc.x + Math.cos(a) * w, nuc.y + Math.sin(a) * w] as V2;
            }),
          )}
          fill="none"
          stroke={C.pink}
          strokeWidth={2}
          vectorEffect={NS}
          opacity={0.5}
        />
      ))}
      {MITO.map((m, i) => (
        <g key={i} transform={`translate(${m.x} ${m.y}) rotate(${m.r + 4 * Math.sin(t + i)})`}>
          <ellipse rx={46} ry={21} fill="url(#sph-mito)" opacity={0.85} />
          <path d="M-32,0 l8,-11 l8,22 l8,-22 l8,22 l8,-22 l8,22 l8,-11" fill="none" stroke="#fff1d8" strokeWidth={2.5} strokeLinejoin="round" opacity={0.7} />
        </g>
      ))}
      {/* kloroplas yang mengalir mengitari vakuola (aliran sitoplasma) */}
      {Array.from({length: 14}, (_, i) => {
        const u = (i / 14 + t * 0.03) * TAU;
        const x = 70 + Math.cos(u) * 248;
        const y = Math.sin(u) * 178;
        const rot = (Math.atan2(178 * Math.cos(u), -248 * Math.sin(u)) * 180) / Math.PI;
        return (
          <g key={i} transform={`translate(${f1(x)} ${f1(y)}) rotate(${f1(rot)})`}>
            <ellipse rx={56} ry={34} fill="url(#glow-mint)" opacity={0.35} />
            <ellipse rx={38} ry={18} fill="url(#sph-chloro)" />
            {[-16, 0, 16].map((dx) => (
              <line key={dx} x1={dx} y1={-8} x2={dx} y2={8} stroke="#d8ffb0" strokeWidth={4} strokeLinecap="round" opacity={0.75} />
            ))}
          </g>
        );
      })}
      {/* inti sel */}
      <circle cx={nuc.x} cy={nuc.y} r={nuc.r} fill="url(#nucfill)" />
      <circle cx={nuc.x} cy={nuc.y} r={nuc.r} fill="none" stroke={C.violet} strokeWidth={2.5} vectorEffect={NS} />
      <circle cx={nuc.x} cy={nuc.y} r={nuc.r - 7} fill="none" stroke={C.violet} strokeWidth={1} vectorEffect={NS} opacity={0.6} />
      <circle cx={nuc.x + 28} cy={nuc.y + 26} r={24} fill="#3b2a8a" opacity={0.75} />
      {CHROMATIN.map((c, i) => (
        <path
          key={i}
          transform={`translate(${f1(c.x)} ${f1(c.y)}) rotate(${f1(c.rot + t * 6)})`}
          d={smoothPath(Array.from({length: 24}, (_, k) => [-c.len / 2 + (k / 23) * c.len, 6 * Math.sin(k * 1.2 + t * 2 + i)] as V2))}
          fill="none"
          stroke={i % 2 ? C.cyan : '#d7c8ff'}
          strokeWidth={2.4}
          vectorEffect={NS}
          opacity={0.75}
        />
      ))}
      {/* placeholder untai DNA tempat zoom berasal */}
      <path
        d={smoothPath(Array.from({length: 30}, (_, k) => [nuc.x + 16 - 43 + k * 3, nuc.y - 8 + 7 * Math.sin(k * 0.9 + t * 1.6)] as V2))}
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
// 5 · DAUN — helai dengan urat fraktal yang berdenyut cahaya; sel-selnya terlihat dari dekat
// ===========================================================================
const leafW = (x: number) => {
  const u = x / LEAF.len;
  return LEAF.wid * Math.max(0, 1 - u * u) ** 0.8 * (1 - 0.18 * u);
};
const LEAF_PATH = smoothPath([
  ...Array.from({length: 41}, (_, i) => {
    const x = -LEAF.len + (i / 40) * LEAF.len * 2;
    return [x, -leafW(x)] as V2;
  }),
  ...Array.from({length: 40}, (_, i) => {
    const x = LEAF.len - ((i + 1) / 40) * LEAF.len * 2;
    return [x, leafW(x)] as V2;
  }),
]);
type Vein = {d: string; w: number; len: number};
const VEINS: Vein[] = (() => {
  const out: Vein[] = [];
  for (const side of [-1, 1]) {
    for (let i = 0; i < 9; i++) {
      const xs = -LEAF.len * 0.78 + i * ((LEAF.len * 1.5) / 9);
      const xe = xs + 150 + i * 4;
      const ye = side * leafW(Math.min(LEAF.len - 20, xe)) * 0.9;
      out.push({d: `M${f1(xs)},0Q${f1(xs + 55)},${f1(ye * 0.5)} ${f1(xe)},${f1(ye)}`, w: 4.5, len: 200});
      // percabangan kecil (fraktal tingkat 2)
      for (const u of [0.35, 0.6, 0.82]) {
        const bx = xs + (xe - xs) * u;
        const by = ye * u * u * 0.95 + ye * 0.05;
        out.push({d: `M${f1(bx)},${f1(by)}l${f1(30 + 20 * u)},${f1(side * (18 + 12 * u))}l${f1(14)},${f1(side * 16)}`, w: 2, len: 70});
        out.push({d: `M${f1(bx)},${f1(by)}l${f1(-10 - 8 * u)},${f1(side * (24 + 10 * u))}`, w: 1.6, len: 40});
      }
    }
  }
  return out;
})();
const TILES = (() => {
  const out: {x: number; y: number; d: number; sd: number}[] = [];
  const cw = 52;
  const ch = 31;
  for (let j = -12; j <= 12; j++) {
    for (let i = -10; i <= 10; i++) {
      const x = LEAF.focus[0] + (i + (j % 2 ? 0.5 : 0)) * cw;
      const y = LEAF.focus[1] + j * ch;
      const d = Math.hypot(x - LEAF.focus[0], y - LEAF.focus[1]);
      if (d < 360) out.push({x, y, d, sd: i * 31 + j * 7});
    }
  }
  return out;
})();
const RAYS = [
  {x: -380, w: 90, o: 0.09},
  {x: -170, w: 140, o: 0.07},
  {x: 90, w: 70, o: 0.08},
  {x: 300, w: 120, o: 0.06},
];

export const Leaf: React.FC<LayerProps> = (p) => {
  const {t, level} = p;
  const tiles = 1 - smoothstep(4.85, 5.45, level);
  return (
    <Frame p={p}>
      <defs>
        <clipPath id="leafclip">
          <path d={LEAF_PATH} transform={`rotate(${LEAF.rot})`} />
        </clipPath>
      </defs>
      <g transform={`rotate(${LEAF.rot})`}>
        <path d={LEAF_PATH} fill="url(#glow-mint)" transform="scale(1.25 1.6)" opacity={0.25} />
        <line x1={-LEAF.len - 150} y1={6} x2={-LEAF.len + 30} y2={0} stroke="#7ccf6e" strokeWidth={14} strokeLinecap="round" />
        <path d={LEAF_PATH} fill="url(#leaffill)" />
        <path d={LEAF_PATH} fill="url(#leafglow)" />
        <path d={LEAF_PATH} fill="none" stroke="#b9f59a" strokeWidth={2} vectorEffect={NS} opacity={0.8} />
      </g>
      {/* sel-sel daun (terlihat saat masih dekat) */}
      {tiles > 0.01 ? (
        <g clipPath="url(#leafclip)" opacity={tiles}>
          {TILES.map((c, i) => {
            const o = 1 - smoothstep(140, 360, c.d);
            const isFocus = c.d < 1;
            return (
              <g key={i} opacity={(isFocus ? 1 - p.inner : 1) * o}>
                <rect x={f1(c.x - 24.5)} y={f1(c.y - 14)} width={49} height={28} rx={6} fill="#2f9e4e" fillOpacity={0.35} stroke="#9ff0b0" strokeWidth={1} vectorEffect={NS} strokeOpacity={0.55} />
                {[0, 1, 2, 3].map((k) => {
                  const a = (k / 4) * TAU + rand(c.sd + k) * 0.8 + t * 0.4;
                  return <ellipse key={k} cx={f1(c.x + Math.cos(a) * 15)} cy={f1(c.y + Math.sin(a) * 7)} rx={4.5} ry={2.4} fill="#8df07a" opacity={0.8} />;
                })}
              </g>
            );
          })}
        </g>
      ) : null}
      <g transform={`rotate(${LEAF.rot})`}>
        <line x1={-LEAF.len + 10} y1={0} x2={LEAF.len - 12} y2={0} stroke="#e8ffb8" strokeWidth={22} strokeLinecap="round" opacity={0.15} />
        <line x1={-LEAF.len + 10} y1={0} x2={LEAF.len - 12} y2={0} stroke="#d4f7a0" strokeWidth={8} strokeLinecap="round" opacity={0.9} />
        {VEINS.map((v, i) => (
          <path key={i} d={v.d} fill="none" stroke="#c4f290" strokeWidth={v.w} strokeLinecap="round" opacity={v.w > 3 ? 0.8 : 0.5} />
        ))}
        {/* denyut cahaya mengalir di urat daun */}
        {VEINS.filter((v) => v.w > 3).map((v, i) => (
          <path
            key={`p${i}`}
            d={v.d}
            fill="none"
            stroke="#fffbd0"
            strokeWidth={6}
            strokeLinecap="round"
            pathLength={300}
            strokeDasharray="22 278"
            strokeDashoffset={f1(-((t * 170 + i * 41) % 300))}
            opacity={0.9}
          />
        ))}
        <line x1={-LEAF.len + 10} y1={0} x2={LEAF.len - 12} y2={0} stroke="#fffbd0" strokeWidth={9} strokeLinecap="round" pathLength={300} strokeDasharray="30 270" strokeDashoffset={f1(-((t * 140) % 300))} />
        {/* embun */}
        <circle cx={185} cy={-62} r={24} fill="url(#dew)" />
        <circle cx={178} cy={-70} r={6} fill="#ffffff" opacity={0.85} />
      </g>
      {/* sinar matahari */}
      {RAYS.map((r, i) => (
        <polygon
          key={i}
          points={`${f1(r.x + 30 * Math.sin(t * 0.4 + i))},-420 ${f1(r.x + r.w + 30 * Math.sin(t * 0.4 + i))},-420 ${f1(r.x + r.w + 260)},420 ${f1(r.x + 260)},420`}
          fill="url(#ray)"
          opacity={r.o}
        />
      ))}
    </Frame>
  );
};

// ===========================================================================
// 6 · BUMI — matahari terbit di tepi, awan, lampu kota di sisi malam, Bulan
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
const DESERT = new Set([0, 7]);
const inPoly = (lon: number, lat: number, poly: [number, number][]) => {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
};
const CITIES = (() => {
  const out: V2[] = [];
  for (let i = 0; out.length < 420 && i < 20000; i++) {
    const lon = -180 + rand(i * 1.71) * 360;
    const lat = -45 + rand(i * 2.93) * 110;
    if (LAND.some((poly) => inPoly(lon, lat, poly))) out.push([lat, lon]);
  }
  return out;
})();
const CLOUDS = Array.from({length: 240}, (_, i) => ({lat: -62 + rand(i * 2.1) * 124, lon: rand(i * 3.7) * 360, r: 6 + rand(i * 5.3) * 14}));
const SUN_POS: V2 = [-318, -176];

const globePt = (lat: number, lon: number, t: number): [number, number, number] => {
  const [x, y, z] = earthXY(lat, lon, t);
  if (z >= 0) return [x, y, z];
  const l = Math.hypot(x, y) || 1;
  return [(x / l) * EARTH.r, (y / l) * EARTH.r, z];
};

export const Earth: React.FC<LayerProps> = (p) => {
  const {t} = p;
  const moonA = t * 0.4 + 0.2;
  const mx = 430 * Math.cos(moonA);
  const my = 95 * Math.sin(moonA);
  const rot = -12;
  const mc = Math.cos((rot * Math.PI) / 180);
  const ms = Math.sin((rot * Math.PI) / 180);
  const moon = {x: mx * mc - my * ms, y: mx * ms + my * mc};
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
      else {
        if (pts.length > 1) grid.push(smoothPath(pts));
        pts = [];
      }
    }
    if (pts.length > 1) grid.push(smoothPath(pts));
  }
  const [lx, ly] = earthXY(LEAF_LATLON[0], LEAF_LATLON[1], t);
  return (
    <Frame p={p}>
      <g transform={`rotate(${rot})`}>
        <ellipse rx={430} ry={95} fill="none" stroke="#9fb6d8" strokeWidth={1.2} vectorEffect={NS} opacity={0.35} />
      </g>
      {/* Matahari di balik tepi Bumi */}
      <Glow x={SUN_POS[0]} y={SUN_POS[1]} r={520} c="warm" o={0.55} />
      <Glow x={SUN_POS[0]} y={SUN_POS[1]} r={120} c="white" o={1} />
      {behind ? moonEl : null}
      <circle r={270} fill="url(#atmo)" />
      <circle r={230} fill="url(#ocean)" />
      <g clipPath="url(#globe)">
        {LAND.map((poly, i) => {
          const pts = poly.map(([lon, lat]) => globePt(lat, lon, t));
          if (pts.every((q) => q[2] < 0)) return null;
          return <path key={i} d={smoothPath([...pts.map((q) => [q[0], q[1]] as V2), [pts[0][0], pts[0][1]]])} fill={DESERT.has(i) ? '#c9a868' : '#4fae6e'} opacity={0.9} />;
        })}
        <g filter="url(#cloudblur)">
          {CLOUDS.map((c, i) => {
            const [x, y, z] = earthXY(c.lat, c.lon + t * 2.5, t);
            return z > 0.05 ? <ellipse key={i} cx={f1(x)} cy={f1(y)} rx={f1(c.r * 1.9 * (0.3 + 0.7 * z))} ry={f1(c.r * 0.55 * (0.4 + 0.6 * z))} transform={`rotate(${f1(EARTH.tilt * 57.3)} ${f1(x)} ${f1(y)})`} fill="#ffffff" opacity={0.15} /> : null;
          })}
        </g>
        {grid.map((d, i) => (
          <path key={i} d={d} fill="none" stroke={C.cyan} strokeWidth={1} vectorEffect={NS} opacity={0.2} />
        ))}
        <circle r={230} fill="url(#night)" />
        {CITIES.map(([lat, lon], i) => {
          const [x, y, z] = earthXY(lat, lon, t);
          const o = z > 0.08 ? smoothstep(30, 140, x) * (0.5 + 0.5 * rand(i * 9.1)) : 0;
          return o > 0.02 ? <circle key={i} cx={f1(x)} cy={f1(y)} r={1.7} fill="#ffd27a" opacity={o} /> : null;
        })}
      </g>
      <circle r={231} fill="none" stroke="url(#rimgrad)" strokeWidth={7} />
      {behind ? null : moonEl}
      {/* suar lensa dari Matahari */}
      <ellipse cx={SUN_POS[0]} cy={SUN_POS[1]} rx={230} ry={2.2} fill="url(#glow-warm)" opacity={0.9} />
      {[0.35, 0.7, 1.15].map((k, i) => (
        <circle key={i} cx={f1(SUN_POS[0] * (1 - k * 2))} cy={f1(SUN_POS[1] * (1 - k * 2))} r={[18, 34, 12][i]} fill={[C.cyan, C.violet, C.gold][i]} opacity={0.12} />
      ))}
      {/* placeholder: kilau di Bandung, tempat daun tadi */}
      <g opacity={1 - p.inner}>
        <Glow x={lx} y={ly} r={20} c="mint" />
        <circle cx={f1(lx)} cy={f1(ly)} r={3} fill="#ffffff" />
      </g>
    </Frame>
  );
};

// ===========================================================================
// 7 · TATA SURYA — Matahari bersemburan, planet berjejak, komet
// ===========================================================================
const PLANETS: {r: number; size: number; kind: string; ph: number; ring?: boolean; trail: string}[] = [
  {r: 62, size: 4, kind: 'mercury', ph: 1.1, trail: '#c9c2b8'},
  {r: 100, size: 6.5, kind: 'venus', ph: 3.7, trail: '#f0dca0'},
  {r: SOLAR.earthR, size: 7.7, kind: 'earthdot', ph: 0, trail: C.cyan},
  {r: 205, size: 5.5, kind: 'mars', ph: 2.3, trail: '#ff9a6b'},
  {r: 305, size: 18, kind: 'jupiter', ph: 4.4, trail: '#f0c090'},
  {r: 385, size: 15, kind: 'saturn', ph: 0.9, ring: true, trail: '#f0dca0'},
  {r: 448, size: 10, kind: 'uranus', ph: 5.6, trail: '#9ff0ec'},
  {r: 500, size: 10, kind: 'neptune', ph: 2.9, trail: '#8fb0ff'},
];
const BELT = Array.from({length: 170}, (_, i) => ({r: 238 + rand(i * 1.3) * 40, a: rand(i * 2.9) * TAU, s: 1.4 + rand(i * 3.3) * 1.8}));
const planetAngle = (pl: (typeof PLANETS)[number], t: number) =>
  pl.kind === 'earthdot' ? SOLAR.earthPhase + SOLAR.earthOmega * t : pl.ph + SOLAR.earthOmega * (SOLAR.earthR / pl.r) ** 1.5 * t;

export const Solar: React.FC<LayerProps> = (p) => {
  const {t} = p;
  const pos = (r: number, a: number): V2 => [r * Math.cos(a), r * SOLAR.incl * Math.sin(a)];
  // komet melintas, ekornya selalu menjauhi Matahari
  const cu = (t - 10.0) / 2.6;
  const comet =
    cu > 0 && cu < 1
      ? (() => {
          const hx = -620 + cu * 1150;
          const hy = -300 + 160 * Math.sin(cu * Math.PI) - cu * 40;
          const l = Math.hypot(hx, hy) || 1;
          const ux = hx / l;
          const uy = hy / l;
          return (
            <g opacity={Math.sin(cu * Math.PI)}>
              {Array.from({length: 14}, (_, k) => (
                <line
                  key={k}
                  x1={f1(hx + ux * k * 9)}
                  y1={f1(hy + uy * k * 9)}
                  x2={f1(hx + ux * (k + 1) * 9)}
                  y2={f1(hy + uy * (k + 1) * 9)}
                  stroke="#bfefff"
                  strokeWidth={f1(5 * (1 - k / 14))}
                  strokeLinecap="round"
                  opacity={0.7 * (1 - k / 14)}
                />
              ))}
              <Glow x={hx} y={hy} r={16} c="cyan" />
              <circle cx={f1(hx)} cy={f1(hy)} r={2.6} fill="#ffffff" />
            </g>
          );
        })()
      : null;
  return (
    <Frame p={p}>
      {PLANETS.map((pl) => (
        <ellipse
          key={pl.kind}
          rx={pl.r}
          ry={pl.r * SOLAR.incl}
          fill="none"
          stroke={pl.kind === 'earthdot' ? C.cyan : '#8fb4ff'}
          strokeWidth={pl.kind === 'earthdot' ? 1.6 : 1}
          vectorEffect={NS}
          opacity={pl.kind === 'earthdot' ? 0.55 : 0.22}
        />
      ))}
      {PLANETS.map((pl) => {
        const a = planetAngle(pl, t);
        return (
          <g key={`tr${pl.kind}`}>
            {Array.from({length: 12}, (_, k) => {
              const a0 = a - (1 - k / 12) * 0.9;
              const a1 = a - (1 - (k + 1) / 12) * 0.9;
              const [x0, y0] = pos(pl.r, a0);
              const [x1, y1] = pos(pl.r, a1);
              return <line key={k} x1={f1(x0)} y1={f1(y0)} x2={f1(x1)} y2={f1(y1)} stroke={pl.trail} strokeWidth={2.2} vectorEffect={NS} opacity={0.6 * (k / 12)} />;
            })}
          </g>
        );
      })}
      {BELT.map((b, i) => {
        const [x, y] = pos(b.r, b.a + t * 0.08);
        return <circle key={i} cx={f1(x)} cy={f1(y)} r={b.s} fill="#c8b89a" opacity={0.45} />;
      })}
      <Glow r={330} c="warm" o={0.35} />
      <circle r={150} fill="url(#sun)" />
      {Array.from({length: 28}, (_, i) => {
        const a = (i / 28) * TAU + t * 0.15;
        const len = 70 + 40 * Math.sin(t * 3 + i * 1.7) + 30 * rand(i * 2.3);
        return <line key={i} x1={f1(Math.cos(a) * 26)} y1={f1(Math.sin(a) * 26)} x2={f1(Math.cos(a) * len)} y2={f1(Math.sin(a) * len)} stroke={C.gold} strokeWidth={1.6} vectorEffect={NS} opacity={0.22} />;
      })}
      {Array.from({length: 7}, (_, i) => {
        const a = (i / 7) * TAU + 0.4;
        const a2 = a + 0.32;
        const h = 36 + 14 * Math.sin(t * 2.2 + i * 2);
        const am = (a + a2) / 2;
        return (
          <path
            key={i}
            d={`M${f1(Math.cos(a) * 21)},${f1(Math.sin(a) * 21)}Q${f1(Math.cos(am) * h)},${f1(Math.sin(am) * h)} ${f1(Math.cos(a2) * 21)},${f1(Math.sin(a2) * 21)}`}
            fill="none"
            stroke={C.amber}
            strokeWidth={3}
            opacity={0.75}
          />
        );
      })}
      <Glow r={48} c="white" o={0.9} />
      <circle r={21} fill="#fffaf0" />
      {PLANETS.map((pl) => {
        const isEarth = pl.kind === 'earthdot';
        const [x, y] = isEarth ? earthOrbitXY(t) : pos(pl.r, planetAngle(pl, t));
        return (
          <g key={pl.kind} opacity={isEarth ? 1 - p.inner : 1}>
            {pl.ring ? <ellipse cx={f1(x)} cy={f1(y)} rx={pl.size * 2.2} ry={pl.size * 0.7} fill="none" stroke="#f0dca0" strokeWidth={3} opacity={0.8} transform={`rotate(-14 ${f1(x)} ${f1(y)})`} /> : null}
            <Glow x={x} y={y} r={pl.size * 3.2} c={isEarth ? 'cyan' : 'white'} o={isEarth ? 0.8 : 0.25} />
            <Ball x={x} y={y} r={pl.size} kind={pl.kind} />
          </g>
        );
      })}
      {comet}
    </Frame>
  );
};
