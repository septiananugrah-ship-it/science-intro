// Lapisan layar: grid matematika yang ikut zoom, debu/bintang, garis kecepatan,
// HUD skala (10ⁿ m), dan anotasi rumus di tiap tingkat.
import React from 'react';
import {interpolate} from 'remotion';
import {rand} from './anim';
import {REAL_EXP, TOP} from './camera';
import {band, f1, smoothstep} from './engine';
import {C, FONT, H, W} from './theme';

// ---------------------------------------------------------------------------
// Grid kertas milimeter yang terus mengecil: dua tingkat garis berbeda 10×
// ---------------------------------------------------------------------------
export const Grid: React.FC<{ox: number; oy: number; k: number; alpha: number}> = ({ox, oy, k, alpha}) => {
  if (alpha <= 0) return null;
  const m = Math.ceil(Math.log10(26 / k));
  const sp = 10 ** m * k; // jarak layar tingkat halus (26–260 px)
  const fine: string[] = [];
  const bold: string[] = [];
  const n0 = Math.ceil(-ox / sp);
  for (let n = n0; ox + n * sp <= W; n++) (n % 10 === 0 ? bold : fine).push(`M${f1(ox + n * sp)},0V${H}`);
  const r0 = Math.ceil(-oy / sp);
  for (let n = r0; oy + n * sp <= H; n++) (n % 10 === 0 ? bold : fine).push(`M0,${f1(oy + n * sp)}H${W}`);
  return (
    <g>
      <path d={fine.join('')} stroke="#8fb0ff" strokeWidth={1} opacity={alpha * 0.07 * smoothstep(26, 120, sp)} />
      <path d={bold.join('')} stroke="#8fb0ff" strokeWidth={1.2} opacity={alpha * 0.11} />
    </g>
  );
};

// ---------------------------------------------------------------------------
// Debu mikro (bokeh) & bintang makro
// ---------------------------------------------------------------------------
const BOKEH = Array.from({length: 26}, (_, i) => ({
  x: rand(i * 1.3) * W,
  y: rand(i * 2.1) * H,
  r: 18 + rand(i * 3.7) * 60,
  c: ['violet', 'cyan', 'pink', 'mint', 'blue'][i % 5],
  sp: 0.3 + rand(i * 4.9),
}));
export const Bokeh: React.FC<{t: number; alpha: number}> = ({t, alpha}) =>
  alpha <= 0 ? null : (
    <g opacity={alpha}>
      {BOKEH.map((b, i) => (
        <circle key={i} cx={f1(b.x + 40 * Math.sin(t * 0.3 * b.sp + i))} cy={f1(b.y + 30 * Math.cos(t * 0.25 * b.sp + i * 2))} r={b.r} fill={`url(#glow-${b.c})`} opacity={0.12} />
      ))}
    </g>
  );

const STARS = Array.from({length: 280}, (_, i) => ({
  x: rand(i * 1.11) * W,
  y: rand(i * 2.37) * H,
  r: 0.6 + rand(i * 3.53) ** 3 * 2.2,
  tw: rand(i * 4.19) * 6.28,
  c: rand(i * 5.77) > 0.85 ? C.gold : rand(i * 6.1) > 0.7 ? '#bfe9ff' : '#ffffff',
}));
export const Stars: React.FC<{t: number; level: number; alpha: number}> = ({t, level, alpha}) => {
  if (alpha <= 0) return null;
  // zoom keluar → bintang perlahan bergerak ke pusat
  const z = 1 / (1 + 0.06 * Math.max(0, level - 4.4));
  return (
    <g opacity={alpha}>
      {STARS.map((s, i) => (
        <circle key={i} cx={f1(W / 2 + (s.x - W / 2) * z)} cy={f1(H / 2 + (s.y - H / 2) * z)} r={s.r} fill={s.c} opacity={0.35 + 0.45 * (0.5 + 0.5 * Math.sin(t * 2.2 + s.tw))} />
      ))}
    </g>
  );
};

/**
 * Debu latar depan: partikel yang datang dari belakang kamera lalu menjauh ke pusat,
 * kecepatannya mengikuti laju zoom → kesan terbang menembus ruang 3D.
 */
const DUST = Array.from({length: 70}, (_, i) => ({a: rand(i * 1.37) * Math.PI * 2, r: 0.25 + rand(i * 2.41) * 0.9, ph: rand(i * 3.77), s: 0.6 + rand(i * 4.13) * 0.8}));
export const Dust: React.FC<{logW: number; glow: string; alpha: number}> = ({logW, glow, alpha}) =>
  alpha <= 0 ? null : (
    <g opacity={alpha}>
      {DUST.map((d, i) => {
        const u = (d.ph + logW * 0.32) % 1;
        const z = 0.18 + u * 2.6;
        const x = W / 2 + (Math.cos(d.a) * d.r * 900) / z;
        const y = H / 2 + (Math.sin(d.a) * d.r * 520) / z;
        const r = (d.s * 9) / z;
        const o = smoothstep(0.18, 0.5, z) * (1 - smoothstep(1.8, 2.75, z));
        if (o <= 0.01 || x < -60 || x > W + 60 || y < -60 || y > H + 60) return null;
        return <circle key={i} cx={f1(x)} cy={f1(y)} r={f1(r * 3)} fill={`url(#glow-${i % 3 ? glow : 'white'})`} opacity={o * 0.55} />;
      })}
    </g>
  );

/** Garis kecepatan saat lompatan besar (daun → Bumi). */
export const Streaks: React.FC<{t: number; alpha: number}> = ({t, alpha}) =>
  alpha <= 0 ? null : (
    <g opacity={alpha}>
      {Array.from({length: 70}, (_, i) => {
        const a = rand(i * 1.7) * Math.PI * 2;
        const f = (rand(i * 2.9) - t * 1.8) % 1;
        const u = f < 0 ? f + 1 : f;
        const r = 120 + u * 1100;
        const len = 60 + u * 220;
        return (
          <line
            key={i}
            x1={f1(W / 2 + Math.cos(a) * r)}
            y1={f1(H / 2 + Math.sin(a) * r)}
            x2={f1(W / 2 + Math.cos(a) * (r + len))}
            y2={f1(H / 2 + Math.sin(a) * (r + len))}
            stroke={i % 3 ? '#ffffff' : C.cyan}
            strokeWidth={1.5}
            strokeLinecap="round"
            opacity={0.35 * Math.sin(Math.PI * u)}
          />
        );
      })}
    </g>
  );

// ---------------------------------------------------------------------------
// HUD skala
// ---------------------------------------------------------------------------
const NAMES = ['INTI ATOM', 'ATOM', 'MOLEKUL', 'DNA', 'SEL TUMBUHAN', 'DAUN', 'BUMI', 'TATA SURYA', 'GALAKSI'];
const FIELDS = ['FISIKA PARTIKEL', 'FISIKA KUANTUM', 'KIMIA', 'BIOLOGI MOLEKULER', 'BIOLOGI SEL', 'BOTANI · FOTOSINTESIS', 'ILMU KEBUMIAN', 'FISIKA · MEKANIKA', 'ASTROFISIKA'];
export const LEVEL_COLORS = [C.pink, C.violet, C.mint, C.cyan, C.mint, '#9be86a', C.blue, C.gold, C.violet];

export const Hud: React.FC<{level: number; alpha: number}> = ({level, alpha}) => {
  if (alpha <= 0) return null;
  const l = Math.min(TOP, Math.max(0, level));
  const exp = Math.round(interpolate(l, REAL_EXP.map((_, i) => i), REAL_EXP));
  const idx = Math.round(l);
  const labelO = 1 - smoothstep(0.3, 0.5, Math.abs(l - idx));
  const col = LEVEL_COLORS[idx];
  // penggaris: tanda skala bergeser mengikuti zoom
  const phase = (level % 1) * 36;
  return (
    <div style={{position: 'absolute', left: 92, bottom: 86, opacity: alpha, color: C.ink}}>
      <svg width={260} height={22} style={{display: 'block', overflow: 'visible'}}>
        <line x1={0} y1={14} x2={240} y2={14} stroke={C.ink} strokeWidth={1.5} opacity={0.7} />
        {Array.from({length: 8}, (_, i) => {
          const x = (i * 36 - phase + 288) % 288;
          return x <= 240 ? <line key={i} x1={f1(x)} y1={14} x2={f1(x)} y2={i % 2 ? 8 : 2} stroke={C.ink} strokeWidth={1.2} opacity={0.6} /> : null;
        })}
        <line x1={0} y1={2} x2={0} y2={20} stroke={col} strokeWidth={2.5} />
        <line x1={240} y1={2} x2={240} y2={20} stroke={col} strokeWidth={2.5} />
      </svg>
      <div style={{fontFamily: FONT.mono, fontSize: 40, marginTop: 12, letterSpacing: 1}}>
        10
        <sup style={{fontSize: 24, marginLeft: 3, color: col}}>{exp < 0 ? `−${-exp}` : exp}</sup>
        <span style={{fontSize: 30, marginLeft: 12, opacity: 0.8}}>m</span>
      </div>
      <div style={{opacity: labelO}}>
        <div style={{fontFamily: FONT.sans, fontWeight: 700, fontSize: 28, letterSpacing: 7, marginTop: 6, color: col}}>{NAMES[idx]}</div>
        <div style={{fontFamily: FONT.mono, fontSize: 18, letterSpacing: 4, marginTop: 6, color: C.muted}}>{FIELDS[idx]}</div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Anotasi rumus: titik → garis siku → label
// ---------------------------------------------------------------------------
export const Note: React.FC<{x: number; y: number; dx: number; dy: number; text: string; color: string; p: number}> = ({x, y, dx, dy, text, color, p}) => {
  if (p <= 0.01) return null;
  const ex = x + dx * 0.6;
  const ey = y + dy;
  const lx = x + dx;
  const lineP = Math.min(1, p * 1.6);
  const total = Math.hypot(dx * 0.6, dy) + dx * 0.4;
  return (
    <g opacity={Math.min(1, p * 1.5)}>
      <circle cx={f1(x)} cy={f1(y)} r={5} fill="none" stroke={color} strokeWidth={2} />
      <circle cx={f1(x)} cy={f1(y)} r={2} fill={color} />
      <path d={`M${f1(x)},${f1(y)}L${f1(ex)},${f1(ey)}L${f1(lx)},${f1(ey)}`} fill="none" stroke={color} strokeWidth={1.4} strokeDasharray={`${f1(total * lineP)} ${f1(total)}`} opacity={0.85} />
      <text x={f1(lx + (dx > 0 ? 12 : -12))} y={f1(ey + 9)} textAnchor={dx > 0 ? 'start' : 'end'} fontFamily={FONT.mono} fontSize={26} fill={C.ink} stroke="#03040a" strokeWidth={6} strokeLinejoin="round" paintOrder="stroke" opacity={smoothstep(0.4, 1, p)}>
        {text}
      </text>
    </g>
  );
};

/** Opasitas anotasi tingkat i (terlihat di sekitar saat tingkat itu pas di layar). */
export const noteP = (level: number, i: number) => band(level, i - 0.42, i - 0.12, i + 0.22, i + 0.46);
