// Utilitas matematika murni (tanpa Remotion) untuk kamera & geometri.

export type V2 = [number, number];
export type V3 = [number, number, number];

export const clamp01 = (x: number) => Math.min(1, Math.max(0, x));

/** 0→1 halus antara e0 dan e1 (boleh e0 > e1 untuk arah menurun). */
export const smoothstep = (e0: number, e1: number, x: number) => {
  const u = clamp01((x - e0) / (e1 - e0));
  return u * u * (3 - 2 * u);
};

/** Muncul di [a0,a1], hilang di [b0,b1]. */
export const band = (x: number, a0: number, a1: number, b0: number, b1: number) => smoothstep(a0, a1, x) * (1 - smoothstep(b0, b1, x));

export const lerp = (a: number, b: number, p: number) => a + (b - a) * p;

export const rotX = (p: V3, a: number): V3 => {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [p[0], p[1] * c - p[2] * s, p[1] * s + p[2] * c];
};
export const rotY = (p: V3, a: number): V3 => {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [p[0] * c + p[2] * s, p[1], -p[0] * s + p[2] * c];
};
export const rotZ = (p: V3, a: number): V3 => {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [p[0] * c - p[1] * s, p[0] * s + p[1] * c, p[2]];
};

/**
 * Spline kubik monoton (Fritsch–Carlson): melewati semua kunci tanpa overshoot,
 * kecepatannya kontinu — dipakai untuk zoom kamera.
 */
export const spline = (keys: V2[]) => {
  const n = keys.length;
  const xs = keys.map((k) => k[0]);
  const ys = keys.map((k) => k[1]);
  const h: number[] = [];
  const s: number[] = [];
  for (let i = 0; i < n - 1; i++) {
    h[i] = xs[i + 1] - xs[i];
    s[i] = (ys[i + 1] - ys[i]) / h[i];
  }
  const m: number[] = new Array(n).fill(0);
  m[0] = s[0];
  m[n - 1] = s[n - 2];
  for (let i = 1; i < n - 1; i++) m[i] = s[i - 1] * s[i] <= 0 ? 0 : (s[i - 1] + s[i]) / 2;
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === 0) {
      m[i] = 0;
      m[i + 1] = 0;
      continue;
    }
    const a = m[i] / s[i];
    const b = m[i + 1] / s[i];
    const r = a * a + b * b;
    if (r > 9) {
      const tau = 3 / Math.sqrt(r);
      m[i] = tau * a * s[i];
      m[i + 1] = tau * b * s[i];
    }
  }
  return (x: number) => {
    if (x <= xs[0]) return ys[0];
    if (x >= xs[n - 1]) return ys[n - 1];
    let i = 0;
    while (x > xs[i + 1]) i++;
    const u = (x - xs[i]) / h[i];
    const u2 = u * u;
    const u3 = u2 * u;
    return (2 * u3 - 3 * u2 + 1) * ys[i] + (u3 - 2 * u2 + u) * h[i] * m[i] + (-2 * u3 + 3 * u2) * ys[i + 1] + (u3 - u2) * h[i] * m[i + 1];
  };
};

/** Titik-titik bola Fibonacci (sebaran merata di permukaan bola). */
export const fibSphere = (n: number, r: number): V3[] =>
  Array.from({length: n}, (_, i) => {
    const y = 1 - (2 * (i + 0.5)) / n;
    const rr = Math.sqrt(1 - y * y);
    const a = i * Math.PI * (3 - Math.sqrt(5));
    return [Math.cos(a) * rr * r, y * r, Math.sin(a) * rr * r];
  });

export const f1 = (n: number) => n.toFixed(1);
