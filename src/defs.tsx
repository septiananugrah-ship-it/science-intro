import React from 'react';
import {C} from './theme';

/** Bola 3D: sorotan kiri-atas → warna dasar → bayangan. */
const SPHERES: Record<string, [string, string, string]> = {
  proton: ['#ffd3dc', '#ff4f74', '#4a0818'],
  neutron: ['#eef2ff', '#8c9fe0', '#18204a'],
  carbon: ['#ffffff', '#9aa8c7', '#1f2742'],
  hydrogen: ['#ffffff', '#e6ebfa', '#6f7a9a'],
  oxygen: ['#ffd8d8', '#ff5d6c', '#4f0b14'],
  moon: ['#ffffff', '#b8bdca', '#272b38'],
  mercury: ['#f2f0ec', '#a8a29a', '#2e2b27'],
  venus: ['#fffbe6', '#e8d29a', '#4d4020'],
  earthdot: ['#e4f6ff', '#3d8cff', '#08204d'],
  mars: ['#ffd6c0', '#e0663e', '#3d120a'],
  jupiter: ['#fff1d6', '#d9a066', '#432610'],
  saturn: ['#fff6d8', '#e6c27a', '#4a3812'],
  uranus: ['#e2fffc', '#76e3e0', '#0f3b3b'],
  neptune: ['#dbe9ff', '#4f7dff', '#0c194a'],
  mito: ['#ffe2b8', '#ff9a4a', '#5a2408'],
  nitrogen: ['#dce6ff', '#5b7cff', '#101a55'],
  chloro: ['#eaffc8', '#4fc95a', '#0d3d16'],
};

/** Cahaya lembut: warna penuh di tengah → transparan. */
const GLOWS: Record<string, string> = {
  white: '#ffffff',
  warm: '#ffb36b',
  gold: C.gold,
  cyan: C.cyan,
  violet: C.violet,
  pink: C.pink,
  mint: C.mint,
  blue: C.blue,
};

export const Defs: React.FC = () => (
  <defs>
    {Object.entries(SPHERES).map(([id, [hi, base, lo]]) => (
      <radialGradient key={id} id={`sph-${id}`} cx="0.42" cy="0.4" r="0.62" fx="0.33" fy="0.28">
        <stop offset="0" stopColor={hi} />
        <stop offset="0.28" stopColor={base} />
        <stop offset="0.8" stopColor={base} stopOpacity="0.92" />
        <stop offset="1" stopColor={lo} />
      </radialGradient>
    ))}
    {Object.entries(GLOWS).map(([id, c]) => (
      <radialGradient key={id} id={`glow-${id}`}>
        <stop offset="0" stopColor={c} stopOpacity="1" />
        <stop offset="0.22" stopColor={c} stopOpacity="0.45" />
        <stop offset="0.55" stopColor={c} stopOpacity="0.12" />
        <stop offset="1" stopColor={c} stopOpacity="0" />
      </radialGradient>
    ))}
    {[
      ['c', C.cyan],
      ['v', C.violet],
      ['p', C.pink],
    ].map(([id, c]) => (
      <radialGradient key={id} id={`lobe-${id}`} cx="0.12" cy="0.5" r="0.95">
        <stop offset="0" stopColor={c} stopOpacity="0.55" />
        <stop offset="0.6" stopColor={c} stopOpacity="0.2" />
        <stop offset="1" stopColor={c} stopOpacity="0" />
      </radialGradient>
    ))}
    <radialGradient id="cloud">
      <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
      <stop offset="0.12" stopColor={C.violet} stopOpacity="0.55" />
      <stop offset="0.5" stopColor="#5a3bd6" stopOpacity="0.2" />
      <stop offset="1" stopColor="#5a3bd6" stopOpacity="0" />
    </radialGradient>
    <radialGradient id="cellfill" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stopColor={C.mint} stopOpacity="0.03" />
      <stop offset="0.75" stopColor={C.mint} stopOpacity="0.1" />
      <stop offset="0.97" stopColor={C.mint} stopOpacity="0.32" />
      <stop offset="1" stopColor={C.mint} stopOpacity="0" />
    </radialGradient>
    <radialGradient id="nucfill" cx="0.45" cy="0.42" r="0.6">
      <stop offset="0" stopColor="#c2a8ff" stopOpacity="0.55" />
      <stop offset="0.7" stopColor="#6d4fd9" stopOpacity="0.35" />
      <stop offset="1" stopColor="#3a2a8c" stopOpacity="0.55" />
    </radialGradient>
    <radialGradient id="ocean" cx="0.36" cy="0.32" r="0.75">
      <stop offset="0" stopColor="#6cc0ff" />
      <stop offset="0.4" stopColor="#1f72d8" />
      <stop offset="1" stopColor="#071f55" />
    </radialGradient>
    <radialGradient id="atmo">
      <stop offset="0.8" stopColor={C.cyan} stopOpacity="0" />
      <stop offset="0.88" stopColor={C.cyan} stopOpacity="0.55" />
      <stop offset="0.93" stopColor="#7fd9ff" stopOpacity="0.18" />
      <stop offset="1" stopColor={C.cyan} stopOpacity="0" />
    </radialGradient>
    <linearGradient id="night" x1="0" y1="0" x2="1" y2="0.15">
      <stop offset="0.42" stopColor="#020614" stopOpacity="0" />
      <stop offset="0.72" stopColor="#020614" stopOpacity="0.72" />
      <stop offset="1" stopColor="#020614" stopOpacity="0.9" />
    </linearGradient>
    <radialGradient id="sun">
      <stop offset="0" stopColor="#ffffff" />
      <stop offset="0.12" stopColor="#fff4c8" />
      <stop offset="0.3" stopColor={C.gold} stopOpacity="0.55" />
      <stop offset="0.6" stopColor={C.amber} stopOpacity="0.14" />
      <stop offset="1" stopColor={C.amber} stopOpacity="0" />
    </radialGradient>
    <radialGradient id="core">
      <stop offset="0" stopColor="#fffbe8" stopOpacity="1" />
      <stop offset="0.15" stopColor="#ffe3a0" stopOpacity="0.8" />
      <stop offset="0.45" stopColor={C.amber} stopOpacity="0.22" />
      <stop offset="1" stopColor={C.violet} stopOpacity="0" />
    </radialGradient>
    <linearGradient id="sgrad" gradientUnits="userSpaceOnUse" x1="95" y1="-200" x2="-95" y2="200">
      <stop offset="0" stopColor={C.cyan} />
      <stop offset="0.5" stopColor={C.violet} />
      <stop offset="1" stopColor={C.gold} />
    </linearGradient>
    <linearGradient id="ograd" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stopColor={C.cyan} stopOpacity="0.9" />
      <stop offset="0.5" stopColor={C.violet} stopOpacity="0.5" />
      <stop offset="1" stopColor={C.gold} stopOpacity="0.9" />
    </linearGradient>
    <linearGradient id="wallfill" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#3fbf6a" stopOpacity="0.32" />
      <stop offset="0.5" stopColor="#1f7a45" stopOpacity="0.18" />
      <stop offset="1" stopColor="#3fbf6a" stopOpacity="0.3" />
    </linearGradient>
    <radialGradient id="vacuole" cx="0.4" cy="0.38" r="0.7">
      <stop offset="0" stopColor="#bff0ff" stopOpacity="0.35" />
      <stop offset="0.7" stopColor="#4fb8ff" stopOpacity="0.16" />
      <stop offset="1" stopColor="#4fb8ff" stopOpacity="0.32" />
    </radialGradient>
    <linearGradient id="leaffill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#0d4d24" />
      <stop offset="0.45" stopColor="#2f9e4e" />
      <stop offset="0.55" stopColor="#2f9e4e" />
      <stop offset="1" stopColor="#0d4d24" />
    </linearGradient>
    <radialGradient id="leafglow" cx="0.42" cy="0.45" r="0.6">
      <stop offset="0" stopColor="#f4ff9a" stopOpacity="0.5" />
      <stop offset="0.5" stopColor="#9be86a" stopOpacity="0.18" />
      <stop offset="1" stopColor="#9be86a" stopOpacity="0" />
    </radialGradient>
    <radialGradient id="dew" cx="0.45" cy="0.4" r="0.6">
      <stop offset="0" stopColor="#ffffff" stopOpacity="0.05" />
      <stop offset="0.75" stopColor="#d8fbff" stopOpacity="0.25" />
      <stop offset="0.95" stopColor="#ffffff" stopOpacity="0.85" />
      <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
    </radialGradient>
    <linearGradient id="ray" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#fffbe0" stopOpacity="1" />
      <stop offset="1" stopColor="#fffbe0" stopOpacity="0" />
    </linearGradient>
    <linearGradient id="rimgrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
      <stop offset="0.3" stopColor="#9fe3ff" stopOpacity="0.6" />
      <stop offset="0.6" stopColor={C.cyan} stopOpacity="0.08" />
      <stop offset="1" stopColor={C.cyan} stopOpacity="0" />
    </linearGradient>
    <filter id="cloudblur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" />
    </filter>
    <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="10" />
    </filter>
    <clipPath id="globe">
      <circle r="230" />
    </clipPath>
  </defs>
);
