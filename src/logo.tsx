// Logo S: dua busur spiral yang simetris — bentuk yang sama dengan dua lengan galaksi.
import React from 'react';
import {BACK, EASE_IN_OUT, ramp, smoothPath} from './anim';
import {V2, f1} from './engine';
import {C} from './theme';

export const SR = 92; // jari-jari tiap busur (px pada 1920×1080)
const SWEEP = (245 * Math.PI) / 180;

/** Titik pada busur atas (arm 0) / bawah (arm 1), u = 0 di pusat S → 1 di ujung. */
export const arcPoint = (arm: number, u: number): {x: number; y: number; nx: number; ny: number} => {
  const a = arm === 0 ? Math.PI / 2 + u * SWEEP : -Math.PI / 2 + u * SWEEP;
  const cy = arm === 0 ? -SR : SR;
  return {x: SR * Math.cos(a), y: cy + SR * Math.sin(a), nx: Math.cos(a), ny: Math.sin(a)};
};

const arcPath = (arm: number) => smoothPath(Array.from({length: 61}, (_, i) => arcPoint(arm, i / 60)).map((q) => [q.x, q.y] as V2));
const ARC = [arcPath(0), arcPath(1)];
export const S_ENDS = [arcPoint(0, 1), arcPoint(1, 1)];

export const ORBIT = {rx: 252, ry: 86, rot: -28};
export const orbitPoint = (phi: number): V2 => {
  const x = ORBIT.rx * Math.cos(phi);
  const y = ORBIT.ry * Math.sin(phi);
  const r = (ORBIT.rot * Math.PI) / 180;
  return [x * Math.cos(r) - y * Math.sin(r), x * Math.sin(r) + y * Math.cos(r)];
};
const orbitHalf = (front: boolean) =>
  smoothPath(Array.from({length: 41}, (_, i) => orbitPoint((front ? 0 : Math.PI) + (i / 40) * Math.PI)));

/** Warna gradien S pada titik (x, y) relatif pusat logo (cyan → violet → emas). */
export const sColorAt = (x: number, y: number): [number, number, number] => {
  // proyeksi ke vektor gradien (95,-200) → (-95,200)
  const u = Math.min(1, Math.max(0, ((x - 95) * -190 + (y + 200) * 400) / (190 * 190 + 400 * 400)));
  const stops: [number, number, number][] = [hex(C.cyan), hex(C.violet), hex(C.gold)];
  const k = u * 2;
  const i = Math.min(1, Math.floor(k));
  const f = k - i;
  return [0, 1, 2].map((j) => stops[i][j] + (stops[i + 1][j] - stops[i][j]) * f) as [number, number, number];
};
export function hex(h: string): [number, number, number] {
  const n = parseInt(h.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

type Props = {
  /** 0→1: S tergambar dari pusat ke kedua ujung */
  draw: number;
  /** 0→1: orbit tergambar */
  orbit: number;
  /** 0→1: titik ujung muncul */
  nodes: number;
  /** waktu (detik) untuk elektron yang bergerak; null = statis */
  t: number | null;
  glow?: number;
};

const Stroke: React.FC<{d: string; draw: number; filterId: string}> = ({d, draw, filterId}) => {
  const dash = {strokeDasharray: `${f1(1000 * draw)} 1000`, pathLength: 1000};
  return (
    <>
      <path d={d} fill="none" stroke="url(#sgrad)" strokeWidth={46} strokeLinecap="round" opacity={0.42} filter={`url(#${filterId})`} {...dash} />
      <path d={d} fill="none" stroke="url(#sgrad)" strokeWidth={31} strokeLinecap="round" {...dash} />
      <path d={d} fill="none" stroke="#ffffff" strokeWidth={9} strokeLinecap="round" opacity={0.42} transform="translate(-2 -3)" {...dash} />
      <path d={d} fill="none" stroke="#ffffff" strokeWidth={2.5} strokeLinecap="round" opacity={0.85} transform="translate(-3 -6)" {...dash} />
    </>
  );
};

/** Logo di koordinat yang berpusat di (0,0). */
export const LogoMark: React.FC<Props> = ({draw, orbit, nodes, t, glow = 1}) => {
  const ophi = t === null ? -0.6 : t * 1.7;
  const [ex, ey] = orbitPoint(ophi);
  const eFront = Math.sin(ophi) >= 0;
  const electron =
    orbit >= 1 ? (
      <g>
        <circle cx={f1(ex)} cy={f1(ey)} r={26} fill="url(#glow-white)" opacity={0.85} />
        <circle cx={f1(ex)} cy={f1(ey)} r={7} fill="#ffffff" />
      </g>
    ) : null;
  const odash = {strokeDasharray: `${f1(1000 * orbit)} 1000`, pathLength: 1000};
  return (
    <g>
      <circle r={330} fill="url(#core)" opacity={0.2 * glow} />
      <path d={orbitHalf(false)} fill="none" stroke="url(#ograd)" strokeWidth={3} opacity={0.55} {...odash} />
      {eFront ? null : electron}
      <Stroke d={ARC[0]} draw={draw} filterId="soft" />
      <Stroke d={ARC[1]} draw={draw} filterId="soft" />
      <path d={orbitHalf(true)} fill="none" stroke="url(#ograd)" strokeWidth={3.5} opacity={0.9} {...odash} />
      {eFront ? electron : null}
      {t !== null && draw >= 1
        ? [0, 1].map((k) => {
            const u = (t * 0.42 + k * 0.5) % 1;
            const arm = u < 0.5 ? 0 : 1;
            const q = arcPoint(arm, arm === 0 ? 1 - u * 2 : (u - 0.5) * 2);
            return <circle key={k} cx={f1(q.x)} cy={f1(q.y)} r={5} fill="#ffffff" opacity={0.9 * Math.sin(Math.PI * u)} />;
          })
        : null}
      {S_ENDS.map((q, k) => {
        const s = BACK(Math.min(1, Math.max(0, nodes * 1.25 - k * 0.25)));
        return s > 0 ? (
          <g key={k} transform={`translate(${f1(q.x)} ${f1(q.y)}) scale(${s.toFixed(3)})`}>
            <circle r={30} fill={`url(#glow-${k ? 'gold' : 'cyan'})`} />
            <circle r={12} fill={k ? C.gold : C.cyan} />
            <circle r={5} fill="#ffffff" />
          </g>
        ) : null;
      })}
    </g>
  );
};

/** Jadwal logo pada intro. */
export const logoState = (t: number, T: {sDraw: number; orbit: number; nodes: number}) => ({
  draw: ramp(t, T.sDraw, T.sDraw + 0.6, EASE_IN_OUT),
  orbit: ramp(t, T.orbit, T.orbit + 0.65, EASE_IN_OUT),
  nodes: ramp(t, T.nodes, T.nodes + 0.5),
});
