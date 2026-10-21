import React from 'react';
import {f1} from './engine';

export type LayerProps = {
  t: number;
  /** tingkat zoom kontinu saat ini */
  level: number;
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

export const NS = 'non-scaling-stroke';
export const TAU = Math.PI * 2;

export const Frame: React.FC<{p: LayerProps; children: React.ReactNode}> = ({p, children}) =>
  p.a <= 0.004 ? null : (
    <g transform={`translate(${f1(p.x)} ${f1(p.y)}) scale(${p.s.toPrecision(6)})`} opacity={p.a}>
      {children}
    </g>
  );

export const Ball: React.FC<{x: number; y: number; r: number; kind: string; o?: number}> = ({x, y, r, kind, o = 1}) => (
  <circle cx={f1(x)} cy={f1(y)} r={f1(r)} fill={`url(#sph-${kind})`} opacity={o} />
);

export const Glow: React.FC<{x?: number; y?: number; r: number; c: string; o?: number}> = ({x = 0, y = 0, r, c, o = 1}) => (
  <circle cx={f1(x)} cy={f1(y)} r={f1(r)} fill={`url(#glow-${c})`} opacity={o} />
);
