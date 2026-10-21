import {Audio} from '@remotion/media';
import React from 'react';
import {AbsoluteFill, interpolateColors, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {EASE, EASE_IN_OUT, mix, ramp} from './anim';
import {GALAXY, LOGO_CY, armAngle, camera, galaxyXY} from './camera';
import {Defs} from './defs';
import {band, f1, smoothstep} from './engine';
import {Galaxy} from './galaxy';
import {Atom, Cell, Dna, Earth, LayerProps, Molecule, Nucleus, Solar} from './layers';
import {LogoMark, logoState} from './logo';
import {Bokeh, Grid, Hud, LEVEL_COLORS, Note, Stars, Streaks, noteP} from './overlay';
import {C, FONT, H, W} from './theme';

export type IntroProps = {
  /** Nama channel di bawah logo. Kosongkan ("") untuk menyembunyikan. */
  name: string;
  /** Teks kecil paling bawah. Kata "Science" otomatis berwarna emas. */
  tagline: string;
  /** Tampilkan HUD skala & anotasi rumus selama zoom. */
  hud: boolean;
  /** Volume musik & efek suara (0–1). */
  volume: number;
};

export const defaultIntroProps: IntroProps = {
  name: 'SCIENTIAN',
  tagline: 'Explore Science with Yayan',
  hud: true,
  volume: 1,
};

export const INTRO_SECONDS = 11;

// Jadwal (detik). Zoom tiap tingkat: lihat LEVEL_TIME di camera.ts.
const T = {
  morph: 6.85, // lengan galaksi mulai mengalir menjadi S
  sDraw: 7.6, // goresan S padat
  orbit: 7.85,
  pulse: 8.15,
  nodes: 8.15,
  title: 8.4,
  line: 8.9,
  tagline: 9.05,
  sweep: 9.55,
  fadeOut: 10.4,
  end: 11,
};

const LX = W / 2;
const LY = LOGO_CY;

/** Kapan tiap tingkat terlihat (fungsi dari tingkat zoom kontinu). */
const VIS = [
  (l: number) => 1 - smoothstep(0.5, 0.92, l),
  (l: number) => band(l, -0.1, 0.4, 1.45, 1.85),
  (l: number) => band(l, 1.0, 1.45, 2.5, 2.92),
  (l: number) => band(l, 2.2, 2.6, 3.5, 3.92),
  (l: number) => band(l, 3.05, 3.5, 4.45, 4.85),
  (l: number) => band(l, 4.25, 4.7, 5.45, 5.85),
  (l: number) => band(l, 5.0, 5.45, 6.45, 6.85),
  (l: number) => smoothstep(5.7, 6.3, l),
];

const BG = ['#2a0a26', '#1c0f40', '#062b33', '#08183f', '#05291f', '#041a40', '#1a1206', '#0e0b2c'];

/** Catatan rumus per tingkat: titik jangkar (lokal) → offset label (px). */
const NOTES: {ax: number; ay: number; dx: number; dy: number; text: string}[] = [
  {ax: 70, ay: -70, dx: 190, dy: -120, text: 'p⁺ = uud · n⁰ = udd'},
  {ax: 190, ay: -50, dx: 170, dy: -130, text: 'Ĥψ = Eψ'},
  {ax: 50, ay: 85, dx: 200, dy: 230, text: 'C₆H₆ · benzena'},
  {ax: 204, ay: 0, dx: 170, dy: -250, text: 'A–T · G–C'},
  {ax: 200, ay: -120, dx: 160, dy: -110, text: 'mitokondria → ATP'},
  {ax: 120, ay: -150, dx: 190, dy: -90, text: 'g = 9,8 m/s²'},
  {ax: 0, ay: 0, dx: 230, dy: -170, text: 'F = G·m₁m₂ / r²'},
  {ax: -330, ay: -60, dx: -150, dy: -110, text: 'r = a·e^(bθ)'},
];

const Title: React.FC<{t: number; name: string; tagline: string}> = ({t, name, tagline}) => {
  const track = ramp(t, T.title, T.title + 1.4);
  const lineIn = ramp(t, T.line, T.line + 0.8, EASE_IN_OUT);
  const tagIn = ramp(t, T.tagline, T.tagline + 0.9);
  const sweep = ramp(t, T.sweep, T.sweep + 1.1, EASE_IN_OUT);
  const n = name.length;
  return (
    <div style={{position: 'absolute', left: 0, right: 0, top: LY + 232, textAlign: 'center'}}>
      {name ? (
        <div style={{position: 'relative', display: 'inline-block'}}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            {name.split('').map((ch, i) => {
              const d = Math.abs(i - (n - 1) / 2) * 0.05;
              const p = ramp(t, T.title + d, T.title + 0.75 + d);
              return (
                <span key={i} style={{display: 'inline-block', overflow: 'hidden', paddingTop: 6, paddingBottom: 6}}>
                  <span
                    style={{
                      display: 'inline-block',
                      whiteSpace: 'pre',
                      fontFamily: FONT.sans,
                      fontWeight: 700,
                      fontSize: 124,
                      lineHeight: 1,
                      letterSpacing: `${mix(0.5, 0.2, track).toFixed(3)}em`,
                      marginRight: i === n - 1 ? `-${mix(0.5, 0.2, track).toFixed(3)}em` : 0,
                      color: '#d6def8',
                      translate: `0px ${((1 - p) * 110).toFixed(1)}%`,
                      filter: `blur(${((1 - p) * 8).toFixed(2)}px)`,
                      textShadow: '0 0 36px rgba(140,150,255,0.45)',
                    }}
                  >
                    {ch}
                  </span>
                </span>
              );
            })}
          </div>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(100deg, transparent ${(sweep * 160 - 45).toFixed(1)}%, rgba(255,255,255,0.95) ${(sweep * 160 - 30).toFixed(1)}%, transparent ${(sweep * 160 - 15).toFixed(1)}%)`,
              mixBlendMode: 'overlay',
            }}
          />
        </div>
      ) : null}
      <div style={{position: 'relative', width: 560, height: 14, margin: '14px auto 18px'}}>
        <div
          style={{
            position: 'absolute',
            left: 280 - 280 * lineIn,
            top: 6,
            width: 560 * lineIn,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${C.cyan}, ${C.violet}, ${C.gold}, transparent)`,
            boxShadow: `0 0 14px ${C.violet}`,
          }}
        />
        <div style={{position: 'absolute', left: 273, top: 0, width: 14, height: 14, rotate: '45deg', border: `2px solid ${C.gold}`, background: C.bg, opacity: lineIn}} />
      </div>
      <div style={{fontFamily: FONT.sans, fontWeight: 300, fontSize: 44, letterSpacing: `${mix(0.3, 0.1, tagIn).toFixed(3)}em`, color: '#dfe4f8', opacity: tagIn, translate: `0px ${((1 - tagIn) * 18).toFixed(1)}px`}}>
        {tagline.split(/(Science)/).map((part, i) =>
          part === 'Science' ? (
            <span key={i} style={{color: C.gold, fontWeight: 500}}>
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </div>
    </div>
  );
};

export const Intro: React.FC<IntroProps> = ({name, tagline, hud, volume}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;
  const cam = camera(t);
  const L = cam.level;
  const vis = VIS.map((f) => f(L));
  const lp = (i: number): LayerProps => ({t, ...cam.layer[i], a: vis[i], inner: i > 0 ? vis[i - 1] : 0});

  const m = t - T.morph;
  const logo = logoState(t, T);
  const pulse = ramp(t, T.pulse, T.pulse + 1.2, EASE);
  const shake = Math.exp(-(((t - T.pulse) * 9) ** 2)) * 7 * (t > T.pulse - 0.05 ? 1 : 0);
  const fadeIn = ramp(t, 0, 0.35);
  const fadeOut = 1 - ramp(t, T.fadeOut, T.end, EASE_IN_OUT);
  const push = 1 + 0.03 * ramp(t, 8.0, T.end, EASE_IN_OUT);
  const tint = interpolateColors(Math.max(0, Math.min(7, L)), [0, 1, 2, 3, 4, 5, 6, 7], BG);
  const tint2 = interpolateColors(Math.max(0, Math.min(7, L)), [0, 1, 2, 3, 4, 5, 6, 7], BG.slice(1).concat(BG[7]));
  const hudA = hud ? ramp(t, 0.5, 1.0) * (1 - ramp(t, 6.75, 7.2)) : 0;
  const g = cam.layer[7];

  const galaxyEl = <Galaxy t={t} x={g.x} y={g.y} s={g.s} a={vis[7]} inner={vis[6]} morphStart={T.morph} lx={LX} ly={LY} />;

  // spiral logaritmik emas di atas lengan galaksi (matematika di balik bentuknya)
  const spiralP = hud ? band(t, 6.35, 6.75, 6.95, 7.3) : 0;
  const spiral =
    spiralP > 0
      ? Array.from({length: 90}, (_, i) => {
          const r = GALAXY.r0 + i * 4.6;
          const [x, y] = galaxyXY(r, armAngle(r), t);
          return `${i ? 'L' : 'M'}${f1(g.x + x * g.s)},${f1(g.y + y * g.s)}`;
        }).join('')
      : '';

  return (
    <AbsoluteFill style={{backgroundColor: '#010207', overflow: 'hidden'}}>
      <AbsoluteFill style={{opacity: fadeIn * fadeOut}}>
        <AbsoluteFill
          style={{
            background: `radial-gradient(ellipse 70% 60% at 50% 45%, ${tint} 0%, rgba(1,2,7,0) 75%), radial-gradient(ellipse 50% 40% at ${f1(30 + 6 * Math.sin(t * 0.3))}% 75%, ${tint2} 0%, rgba(1,2,7,0) 70%), #010207`,
          }}
        />
        <AbsoluteFill style={{transform: `translate(${f1(shake * Math.sin(t * 90))}px, ${f1(shake * Math.cos(t * 77))}px) scale(${push.toFixed(4)})`, transformOrigin: `${W / 2}px ${LY + 80}px`}}>
          <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{position: 'absolute', inset: 0}}>
            <Defs />
            <Grid ox={g.x} oy={g.y} k={g.s} alpha={0.55 + 0.45 * (1 - smoothstep(4.6, 6.0, L)) - 0.35 * ramp(t, 7.5, 9)} />
            <Bokeh t={t} alpha={1 - smoothstep(4.0, 4.8, L)} />
            <Stars t={t} level={L} alpha={smoothstep(4.4, 5.2, L) * (1 - 0.55 * smoothstep(6.4, 7.0, L))} />
            {m <= 0 ? galaxyEl : null}
            <Solar {...lp(6)} />
            <Earth {...lp(5)} />
            <Cell {...lp(4)} />
            <Dna {...lp(3)} />
            <Molecule {...lp(2)} />
            <Atom {...lp(1)} />
            <Nucleus {...lp(0)} />
            <Streaks t={t} alpha={band(L, 4.2, 4.55, 5.0, 5.4)} />
            {spiral ? <path d={spiral} fill="none" stroke={C.gold} strokeWidth={2} strokeDasharray={`${f1(2400 * spiralP)} 2400`} opacity={0.75 * spiralP} /> : null}

            {/* ===== LOGO ===== */}
            {m > 0 ? (
              <g transform={`translate(${LX} ${LY})`}>
                {pulse > 0 && pulse < 1 ? (
                  <>
                    <circle r={f1(150 + pulse * 620)} fill="none" stroke="#ffffff" strokeWidth={f1(3 * (1 - pulse))} opacity={0.55 * (1 - pulse)} />
                    <circle r={f1(110 + pulse * 420)} fill="none" stroke={C.violet} strokeWidth={f1(2 * (1 - pulse))} opacity={0.5 * (1 - pulse)} />
                  </>
                ) : null}
                <circle r={360} fill="url(#core)" opacity={0.35 * Math.exp(-(((t - T.pulse - 0.1) / 0.35) ** 2))} />
                {logo.draw > 0 ? <LogoMark draw={logo.draw} orbit={logo.orbit} nodes={logo.nodes} t={t} glow={ramp(t, T.sDraw, T.pulse + 0.4)} /> : null}
              </g>
            ) : null}
            {m > 0 ? galaxyEl : null}

            {/* ===== ANOTASI RUMUS ===== */}
            {hud
              ? NOTES.map((nt, i) => {
                  const ly = cam.layer[i];
                  const p = noteP(L, i) * (i === 7 ? 1 - ramp(t, 6.9, 7.2) : 1) * (i === 0 ? ramp(t, 0.7, 1.1) : 1);
                  return <Note key={i} x={ly.x + nt.ax * ly.s} y={ly.y + nt.ay * ly.s} dx={nt.dx} dy={nt.dy} text={nt.text} color={LEVEL_COLORS[i]} p={p} />;
                })
              : null}
          </svg>
          <Title t={t} name={name} tagline={tagline} />
        </AbsoluteFill>
        <Hud level={L} alpha={hudA} />
        <AbsoluteFill style={{background: 'radial-gradient(ellipse 85% 75% at 50% 46%, transparent 55%, rgba(0,0,0,0.65) 100%)', pointerEvents: 'none'}} />
      </AbsoluteFill>
      {volume > 0 ? <Audio src={staticFile('intro-audio.mp3')} volume={volume} /> : null}
    </AbsoluteFill>
  );
};

/** Versi 2K: desain 1920×1080 diperbesar 4/3 sebagai vektor (tetap tajam). */
export const Intro2K: React.FC<IntroProps> = (props) => (
  <AbsoluteFill style={{backgroundColor: '#010207'}}>
    <div style={{position: 'absolute', left: 0, top: 0, width: W, height: H, transform: `scale(${2560 / W})`, transformOrigin: '0 0'}}>
      <Intro {...props} />
    </div>
  </AbsoluteFill>
);

/** Logo saja, latar transparan (untuk watermark / foto profil). */
export const Logo: React.FC = () => (
  <AbsoluteFill style={{alignItems: 'center', justifyContent: 'center'}}>
    <svg width={1000} height={1000} viewBox="-500 -500 1000 1000">
      <Defs />
      <g transform="scale(1.7)">
        <LogoMark draw={1} orbit={1} nodes={1} t={null} glow={0} />
      </g>
    </svg>
  </AbsoluteFill>
);

