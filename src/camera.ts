// Kamera "Powers of Ten": zoom keluar tanpa putus dari inti atom sampai galaksi.
//
// Setiap tingkat (layer) digambar di koordinat lokalnya sendiri: lebar layar saat
// tingkat itu "pas di layar" = 1000 unit lokal. Tingkat yang lebih kecil duduk di
// titik tertentu di dalam tingkat induknya. Rasio ukuran antar-tingkat dimampatkan
// (bukan skala asli) supaya transisinya tetap terbaca, sedangkan HUD menampilkan
// eksponen skala yang sebenarnya.
import {H, W} from './theme';
import {V2, V3, rotX, rotY, smoothstep, spline} from './engine';

export const LEVELS = ['nucleus', 'atom', 'molecule', 'dna', 'cell', 'leaf', 'earth', 'solar', 'galaxy'] as const;
export const TOP = LEVELS.length - 1;

/** Rasio ukuran tingkat i terhadap tingkat i-1. */
const RATIO = [1, 8, 5, 7, 12, 16, 40, 30, 12];

/** Waktu (detik) ketika tiap tingkat pas memenuhi layar. Zoom melambat di sekitar waktu ini. */
export const LEVEL_TIME = [1.75, 3.05, 4.35, 5.65, 6.95, 8.25, 9.75, 11.15, 12.55];

// ---------------------------------------------------------------------------
// Geometri bersama yang menentukan posisi tingkat anak di dalam induknya
// ---------------------------------------------------------------------------
export const GALAXY = {
  incl: 0.6, // kemiringan piringan (sumbu-y dipipihkan)
  tilt: -0.32, // rotasi gambar
  omega: 0.06, // rad/detik
  r0: 34,
  pitch: 0.27, // tan sudut pitch spiral logaritmik
};
/** Sudut lengan spiral (lengan 0) pada jari-jari r. */
export const armAngle = (r: number) => Math.log(r / GALAXY.r0) / GALAXY.pitch;
/** Titik piringan galaksi (r, θ) → koordinat lokal galaksi pada waktu t. */
export const galaxyXY = (r: number, theta: number, t: number): V2 => {
  const a = theta + GALAXY.omega * (t - 13);
  const x = r * Math.cos(a);
  const y = r * Math.sin(a) * GALAXY.incl;
  const c = Math.cos(GALAXY.tilt);
  const s = Math.sin(GALAXY.tilt);
  return [x * c - y * s, x * s + y * c];
};
export const SUN_R = 262;
export const SUN_THETA = armAngle(SUN_R) + 0.06;

export const SOLAR = {incl: 0.42, earthR: 150, earthOmega: 0.22, earthPhase: -2.3};
export const earthOrbitXY = (t: number): V2 => {
  const a = SOLAR.earthPhase + SOLAR.earthOmega * t;
  return [SOLAR.earthR * Math.cos(a), SOLAR.earthR * SOLAR.incl * Math.sin(a)];
};

export const EARTH = {r: 230, tilt: -0.38, spin: 0.1};
/** Bujur tengah globe (rad) pada waktu t; Indonesia menghadap kamera saat zoom dari daun. */
export const earthLambda = (t: number) => 1.87 - 0.3 + EARTH.spin * (t - 8.25);
/** Titik lintang/bujur (derajat) → koordinat lokal Bumi + kedalaman (z>0 menghadap kamera). */
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
export const LEAF_LATLON: V2 = [-6.9, 107.6]; // Bandung

/** Daun: helai dimiringkan, sel yang kita ikuti duduk di FOCUS. */
export const LEAF = {len: 440, wid: 205, rot: -22, focus: [-60, 80] as V2};

/** Sel tumbuhan: dinding sel persegi membulat; inti sel di kiri. */
export const PLANT = {w: 410, h: 238, r: 70};
export const CELL_NUCLEUS = {x: -258, y: 28, r: 86};

export const BENZENE = {rc: 150, rh: 268, focus: -2.62};
/** Rotasi 3D pelan bidang benzena. */
export const benzeneRot = (p: V3, t: number): V3 => rotX(rotY(p, 0.42 * Math.sin(t * 0.55 + 0.6)), 0.32 * Math.sin(t * 0.43 + 2.1));
/** Posisi 3D atom ke-k benzena (karbon bila h=false); ikatan C–H bergetar. */
export const benzeneAtom = (k: number, t: number, h = false): V3 => {
  const a = BENZENE.focus + (k * Math.PI) / 3;
  const vib = h ? 1 + 0.045 * Math.sin(t * 12 + k * 1.3) : 1 + 0.012 * Math.sin(t * 9 + k * 2.1);
  const r = (h ? BENZENE.rh : BENZENE.rc) * vib;
  return benzeneRot([Math.cos(a) * r, Math.sin(a) * r, 0], t);
};
/** Proyeksi perspektif lokal (dipakai molekul & DNA). */
export const persp = (p: V3, f = 1400): [number, number, number] => {
  const k = f / (f - p[2]);
  return [p[0] * k, p[1] * k, k];
};

/** Posisi anak di dalam induk (koordinat lokal induk) untuk tingkat induk i. */
const childOffset = (i: number, t: number): V2 => {
  switch (i) {
    case 8:
      return galaxyXY(SUN_R, SUN_THETA, t);
    case 7:
      return earthOrbitXY(t);
    case 6: {
      const [x, y] = earthXY(LEAF_LATLON[0], LEAF_LATLON[1], t);
      return [x, y];
    }
    case 5:
      return LEAF.focus;
    case 4:
      return [CELL_NUCLEUS.x + 16, CELL_NUCLEUS.y - 8];
    case 3:
      return [0, 0];
    case 2: {
      const [x, y] = persp(benzeneAtom(0, t));
      return [x, y];
    }
    default:
      return [0, 0];
  }
};

// unit (dunia per unit lokal) tiap tingkat; galaksi = 1
const UNIT: number[] = (() => {
  const u = new Array(TOP + 1).fill(1);
  for (let i = TOP; i >= 1; i--) u[i - 1] = u[i] / RATIO[i];
  return u;
})();
const LOGW = UNIT.map((u) => Math.log(u * 1000));

// zoom: melambat di setiap tingkat ("menikmati pemandangan"), cepat di antaranya
const HOLD = 0.32;
const SLOW = 0.085;
const logW = spline([
  [0, LOGW[0] - 0.42],
  ...LEVEL_TIME.flatMap((tt, i) => {
    const keys: V2[] = [];
    if (i > 0) keys.push([tt - HOLD, LOGW[i] - SLOW * (LOGW[i] - LOGW[i - 1])]);
    keys.push([tt, LOGW[i]]);
    if (i < TOP) keys.push([tt + HOLD, LOGW[i] + SLOW * (LOGW[i + 1] - LOGW[i])]);
    return keys;
  }),
  [30, LOGW[TOP]],
]);

/** Pusat galaksi pada akhir intro jatuh di y = 400 (ruang untuk teks di bawah). */
export const LOGO_CY = 400;

export type CamState = {
  /** tingkat kontinu: 0 = inti atom … TOP = galaksi */
  level: number;
  /** log lebar pandang (naik terus) — penggerak partikel latar depan */
  logW: number;
  /** untuk tiap tingkat: posisi layar titik asal lokal & skala px/unit lokal */
  layer: {x: number; y: number; s: number}[];
};

export const camera = (t: number): CamState => {
  // posisi dunia tiap tingkat (galaksi di 0,0)
  const P: V2[] = new Array(TOP + 1);
  P[TOP] = [0, 0];
  for (let i = TOP; i >= 1; i--) {
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
  } else if (lw >= LOGW[TOP]) {
    level = TOP;
    c = P[TOP];
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
  const lift = ((H / 2 - LOGO_CY) / k) * smoothstep(TOP - 0.8, TOP, level);
  c = [c[0], c[1] + lift];
  const layer = P.map((p, i) => ({x: W / 2 + (p[0] - c[0]) * k, y: H / 2 + (p[1] - c[1]) * k, s: k * UNIT[i]}));
  return {level, logW: lw, layer};
};

/** Eksponen skala nyata (meter) untuk HUD, per tingkat. */
export const REAL_EXP = [-15, -10, -9, -8, -5, -1, 7, 13, 21];
