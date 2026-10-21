// 7 · GALAKSI — spiral dua lengan; di akhir, bintang-bintangnya mengalir membentuk logo S.
import React from 'react';
import {EASE_IN_OUT, rand} from './anim';
import {GALAXY, SUN_R, SUN_THETA, armAngle, galaxyXY} from './camera';
import {clamp01, f1, smoothstep} from './engine';
import {arcPoint, hex, orbitPoint, sColorAt} from './logo';
import {C, H, W} from './theme';

type Star = {
  r: number;
  th: number;
  size: number;
  col: [number, number, number];
  /** target morph: 0/1 = busur S, 2 = orbit */
  arm: number;
  u: number;
  off: number;
  delay: number;
};

const R0 = GALAXY.r0;
const RMAX = 445;
const gauss = (s: number) => (rand(s) + rand(s + 0.37) + rand(s + 0.71) - 1.5) / 1.5;
const ARM_COLS = [C.blue, C.cyan, '#9fb8ff', C.violet, '#ffffff'].map(hex);

const STARS: Star[] = (() => {
  const out: Star[] = [];
  const nArm = 560;
  for (let arm = 0; arm < 2; arm++) {
    for (let i = 0; i < nArm; i++) {
      const sd = arm * 1000 + i;
      const u = (i + rand(sd * 1.3)) / nArm;
      const r = R0 + (RMAX - R0) * u ** 0.9 + gauss(sd * 2.1) * 10;
      const th = armAngle(Math.max(R0, r)) + arm * Math.PI + gauss(sd * 3.7) * (0.32 - 0.12 * u);
      const pink = rand(sd * 5.1) > 0.94;
      out.push({
        r,
        th,
        size: 1.1 + rand(sd * 4.3) * 1.6,
        col: pink ? hex(C.pink) : ARM_COLS[Math.floor(rand(sd * 6.7) * ARM_COLS.length)],
        arm,
        u: clamp01(u),
        off: gauss(sd * 8.9) * 11,
        delay: rand(sd * 9.7) * 0.14,
      });
    }
  }
  for (let i = 0; i < 260; i++) {
    const sd = 5000 + i;
    const r = Math.abs(gauss(sd)) * 80;
    out.push({
      r,
      th: rand(sd * 1.7) * Math.PI * 2,
      size: 1.3 + rand(sd * 2.9) * 1.5,
      col: rand(sd * 3.1) > 0.5 ? hex('#ffe1aa') : hex('#fff6e0'),
      arm: i % 2,
      u: rand(sd * 4.1) * 0.16,
      off: gauss(sd * 5.3) * 9,
      delay: rand(sd * 6.1) * 0.1,
    });
  }
  for (let i = 0; i < 300; i++) {
    const sd = 9000 + i;
    out.push({
      r: 70 + rand(sd) * 390,
      th: rand(sd * 1.9) * Math.PI * 2,
      size: 0.8 + rand(sd * 2.3) * 1.1,
      col: hex(rand(sd * 3.3) > 0.5 ? '#c9d6ff' : '#ffffff'),
      arm: 2,
      u: rand(sd * 4.7),
      off: gauss(sd * 6.2) * 6,
      delay: rand(sd * 7.9) * 0.2,
    });
  }
  return out;
})();

const CLOUDS = Array.from({length: 90}, (_, i) => {
  const arm = i % 2;
  const u = rand(i * 2.3);
  const r = 60 + u * 370;
  return {r, th: armAngle(r) + arm * Math.PI + gauss(i * 4.1) * 0.15, size: 34 + rand(i * 3.1) * 40, c: ['violet', 'blue', 'pink', 'cyan'][i % 4]};
});

export type GalaxyProps = {
  t: number;
  x: number;
  y: number;
  s: number;
  a: number;
  /** visibilitas tata surya (untuk placeholder Matahari) */
  inner: number;
  /** waktu mulai morph ke logo */
  morphStart: number;
  /** pusat logo di layar */
  lx: number;
  ly: number;
};

const rgb = (c: [number, number, number]) => `rgb(${c[0] | 0},${c[1] | 0},${c[2] | 0})`;

export const Galaxy: React.FC<GalaxyProps> = ({t, x, y, s, a, inner, morphStart, lx, ly}) => {
  if (a <= 0.004) return null;
  const grow = Math.min(1.8, Math.max(1, s / 1.92));
  const m = t - morphStart;
  const cloudsFade = 1 - smoothstep(0, 0.9, m);
  const [sunx, suny] = galaxyXY(SUN_R, SUN_THETA, t);
  const tilt = (GALAXY.tilt * 180) / Math.PI;
  return (
    <g opacity={a}>
      <g transform={`translate(${f1(x)} ${f1(y)}) scale(${s.toPrecision(6)})`}>
        {cloudsFade > 0
          ? CLOUDS.map((c, i) => {
              const [cx, cy] = galaxyXY(c.r, c.th, t);
              return <circle key={i} cx={f1(cx)} cy={f1(cy)} r={c.size} fill={`url(#glow-${c.c})`} opacity={0.16 * cloudsFade} />;
            })
          : null}
        <g transform={`rotate(${f1(tilt)})`}>
          <ellipse rx={175} ry={175 * GALAXY.incl} fill="url(#core)" opacity={0.95 * (1 - 0.75 * smoothstep(0.1, 1.0, m))} />
        </g>
        {/* placeholder Matahari: bintang terang tempat tata surya tadi */}
        <g opacity={(1 - inner) * cloudsFade}>
          <circle cx={f1(sunx)} cy={f1(suny)} r={16} fill="url(#glow-gold)" />
        </g>
      </g>
      {STARS.map((st, i) => {
        const [gx, gy] = galaxyXY(st.r, st.th, t);
        let px = x + gx * s;
        let py = y + gy * s;
        let col = st.col;
        let size = st.size * grow;
        let op = 0.9;
        if (m > 0) {
          const start = 0.05 + (st.arm === 2 ? 0.25 + st.u * 0.35 : st.u * 0.55) + st.delay;
          const e = EASE_IN_OUT(clamp01((m - start) / 0.85));
          if (e > 0) {
            let tx: number;
            let ty: number;
            if (st.arm === 2) {
              [tx, ty] = orbitPoint(st.u * Math.PI * 2 + t * 0.45);
              tx += st.off;
              ty += st.off * 0.6;
            } else {
              const q = arcPoint(st.arm, clamp01(st.u + 0.012 * Math.sin(t * 2 + i)));
              tx = q.x + q.nx * st.off;
              ty = q.y + q.ny * st.off;
            }
            // pusaran kecil di tengah perjalanan
            const sw = 1.1 * e * (1 - e);
            const dx = px - lx + (tx - (px - lx)) * e;
            const dy = py - ly + (ty - (py - ly)) * e;
            px = lx + dx * Math.cos(sw) - dy * Math.sin(sw);
            py = ly + dx * Math.sin(sw) + dy * Math.cos(sw);
            const target = st.arm === 2 ? hex('#dfe6ff') : sColorAt(tx, ty);
            col = [0, 1, 2].map((j) => st.col[j] + (target[j] - st.col[j]) * e) as [number, number, number];
            size = size + (2.2 - size) * e;
            // setelah S padat muncul, partikel menjadi kilau halus
            op = 0.9 - 0.55 * smoothstep(1.25, 2.0, m) * (st.arm === 2 ? 0.6 : 1);
          }
        }
        if (px < -10 || px > W + 10 || py < -10 || py > H + 10) return null;
        return <circle key={i} cx={f1(px)} cy={f1(py)} r={f1(size)} fill={rgb(col)} opacity={op} />;
      })}
    </g>
  );
};
