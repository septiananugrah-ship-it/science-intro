// Kamera "Powers of Ten": zoom keluar tanpa putus dari inti atom sampai galaksi.
//
// Setiap tingkat (layer) digambar di koordinat lokalnya sendiri: lebar layar saat
// tingkat itu "pas di layar" = 1000 unit lokal. Tingkat yang lebih kecil duduk di
// titik tertentu di dalam tingkat induknya. Rasio ukuran antar-tingkat dimampatkan
// (bukan skala asli) supaya transisinya tetap terbaca, sedangkan HUD menampilkan
// eksponen skala yang sebenarnya.
import {H, W} from './theme';
import {V2, smoothstep, spline} from './engine';

export const LEVELS = ['nucleus', 'atom', 'molecule', 'dna', 'cell', 'earth', 'solar', 'galaxy'] as const;
export type Level = (typeof LEVELS)[number];

/** Rasio ukuran tingkat i terhadap tingkat i-1 (indeks 1..7). */
const RATIO = [1, 8, 5, 7, 12, 25, 30, 12];

/** Waktu (detik) ketika tiap tingkat pas memenuhi layar. */
export const LEVEL_TIME = [0.95, 1.85, 2.75, 3.55, 4.25, 4.95, 5.85, 6.85];

// ---------------------------------------------------------------------------
// Geometri bersama yang menentukan posisi tingkat anak di dalam induknya
// ---------------------------------------------------------------------------
export const GALAXY = {
  incl: 0.6, // kemiringan piringan (sumbu-y dipipihkan)
  tilt: -0.32, // rotasi gambar
  omega: 0.1, // rad/detik
  r0: 34,
  pitch: 0.27, // tan sudut pitch spiral logaritmik
};
/** Sudut lengan spiral (lengan 0) pada jari-jari r. */
export const armAngle = (r: number) => Math.log(r / GALAXY.r0) / GALAXY.pitch;
/** Titik piringan galaksi (r, θ) → koordinat lokal galaksi pada waktu t. */
export const galaxyXY = (r: number, theta: number, t: number): V2 => {
  const a = theta + GALAXY.omega * t;
  const x = r * Math.cos(a);
  const y = r * Math.sin(a) * GALAXY.incl;
  const c = Math.cos(GALAXY.tilt);
  const s = Math.sin(GALAXY.tilt);
  return [x * c - y * s, x * s + y * c];
};
export const SUN_R = 262;
export const SUN_THETA = armAngle(SUN_R) + 0.06;

export const SOLAR = {incl: 0.42, earthR: 150, earthOmega: 0.32, earthPhase: -0.95};
export const earthOrbitXY = (t: number): V2 => {
  const a = SOLAR.earthPhase + SOLAR.earthOmega * t;
  return [SOLAR.earthR * Math.cos(a), SOLAR.earthR * SOLAR.incl * Math.sin(a)];
};

export const EARTH = {r: 230, tilt: -0.38, spin: 0.16};
/** Bujur tengah globe (rad) pada waktu t; Indonesia menghadap kamera saat zoom dari sel. */
export const earthLambda = (t: number) => 1.87 - 0.3 + EARTH.spin * (t - 4.25);
/** Titik lintang/bujur (derajat) → koordinat lokal Bumi + apakah menghadap kamera. */
export const earthXY = (latDeg: number, lonDeg: number, t: number): [number, number, number] => {
  const lat = (latDeg * Math.PI) / 180;
  const lon = (lonDeg * Math.PI) / 180 - earthLambda(t);
  const x = EARTH.r * Math.cos(lat) * Math.sin(lon);
  const y = -EARTH.r * Math.sin(lat);
  const z = Math.cos(lat) * Math.cos(lon);
  const c = Math.cos(EARTH.tilt);
  const s = Math.sin(EARTH.tilt);
  return [x * c - y * s, x * s + y * c, z];
};
export const CELL_LATLON: V2 = [-6.9, 107.6]; // Bandung

export const CELL_NUCLEUS = {x: -110, y: 18, r: 98};
export const BENZENE = {rc: 150, rh: 268, focus: -2.62};

/** Posisi anak di dalam induk (koordinat lokal induk) untuk tingkat induk i. */
const childOffset = (i: number, t: number): V2 => {
  switch (i) {
    case 7:
      return galaxyXY(SUN_R, SUN_THETA, t);
    case 6:
      return earthOrbitXY(t);
    case 5: {
      const [x, y] = earthXY(CELL_LATLON[0], CELL_LATLON[1], t);
      return [x, y];
    }
    case 4:
      return [CELL_NUCLEUS.x + 18, CELL_NUCLEUS.y - 10];
    case 3:
      return [0, 0];
    case 2:
      return [BENZENE.rc * Math.cos(BENZENE.focus), BENZENE.rc * Math.sin(BENZENE.focus)];
    default:
      return [0, 0];
  }
};

// unit (dunia per unit lokal) tiap tingkat; galaksi = 1
const UNIT: number[] = (() => {
  const u = new Array(8).fill(1);
  for (let i = 7; i >= 1; i--) u[i - 1] = u[i] / RATIO[i];
  return u;
})();
const LOGW = UNIT.map((u) => Math.log(u * 1000));

const logW = spline([
  [0, LOGW[0] - 0.55],
  ...LEVEL_TIME.map((tt, i) => [tt, LOGW[i]] as V2),
  [11, LOGW[7]],
]);

/** Pusat galaksi pada akhir intro jatuh di y = 400 (ruang untuk teks di bawah). */
export const LOGO_CY = 400;

export type CamState = {
  /** tingkat kontinu: 0 = inti atom … 7 = galaksi */
  level: number;
  /** px per unit dunia */
  k: number;
  /** untuk tiap tingkat: posisi layar titik asal lokal & skala px/unit lokal */
  layer: {x: number; y: number; s: number}[];
};

export const camera = (t: number): CamState => {
  // posisi dunia tiap tingkat (galaksi di 0,0)
  const P: V2[] = new Array(8);
  P[7] = [0, 0];
  for (let i = 7; i >= 1; i--) {
    const o = childOffset(i, t);
    P[i - 1] = [P[i][0] + o[0] * UNIT[i], P[i][1] + o[1] * UNIT[i]];
  }
  const lw = logW(t);
  const Wv = Math.exp(lw);
  const k = W / Wv;
  let level: number;
  let c: V2;
  if (lw <= LOGW[0]) {
    level = (lw - LOGW[0]) / (LOGW[1] - LOGW[0]);
    c = P[0];
  } else if (lw >= LOGW[7]) {
    level = 7 + (lw - LOGW[7]) / (LOGW[7] - LOGW[6]);
    c = P[7];
  } else {
    let i = 0;
    while (lw > LOGW[i + 1]) i++;
    const frac = (lw - LOGW[i]) / (LOGW[i + 1] - LOGW[i]);
    level = i + frac;
    // titik anak bergeser monoton di layar dari tengah ke posisinya di induk
    const g = smoothstep(0, 1, frac) * (Wv / (1000 * UNIT[i + 1]));
    c = [P[i][0] + (P[i + 1][0] - P[i][0]) * g, P[i][1] + (P[i + 1][1] - P[i][1]) * g];
  }
  // geser ke atas menjelang akhir agar galaksi/logo duduk di y = LOGO_CY
  const lift = ((H / 2 - LOGO_CY) / k) * smoothstep(6.2, 7, level);
  c = [c[0], c[1] + lift];
  const layer = P.map((p, i) => ({x: W / 2 + (p[0] - c[0]) * k, y: H / 2 + (p[1] - c[1]) * k, s: k * UNIT[i]}));
  return {level, k, layer};
};

/** Eksponen skala nyata (meter) untuk HUD, per tingkat. */
export const REAL_EXP = [-15, -10, -9, -8, -5, 7, 13, 21];
