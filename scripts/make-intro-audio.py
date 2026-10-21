#!/usr/bin/env python3
"""Musik & efek suara intro (11 dtk), disintesis dengan numpy — tanpa sampel berlisensi.

Selaras dengan jadwal di src/Intro.tsx dan src/camera.ts:
  0.0–0.85  partikel berkumpul membentuk inti atom (desis naik + letupan kuantum)
  0.82      inti terikat: dentum lembut
  0.95…6.85 tiap tingkat skala tiba → denting bel yang nadanya terus naik
  0.9–6.85  dasar pad + denyut halus, makin terang seiring zoom keluar
  4.25–5.0  lompatan sel → Bumi: whoosh besar
  6.85      galaksi: akor lebar
  6.85–8.15 lengan galaksi mengalir menjadi S: kilau berputar + riser
  8.15      logo terbentuk: dentuman + akor D mayor
  8.4/9.05  nama & tagline; 9.55 kilau melintas
Hasil: public/intro-audio.mp3
"""
import subprocess
import wave
from pathlib import Path

import numpy as np

SR = 48000
DUR = 11.0
ROOT = Path(__file__).resolve().parent.parent
rng = np.random.default_rng(7)
N = int(DUR * SR)
dry = np.zeros((2, N))
wet = np.zeros((2, N))

LEVEL_TIME = [0.95, 1.85, 2.75, 3.55, 4.25, 4.95, 5.85, 6.85]


def midi(n):
    return 440.0 * 2 ** ((n - 69) / 12)


def place(buf, sig, t0, pan=0.0, gain=1.0):
    i = int(t0 * SR)
    j = min(N, i + len(sig))
    if j <= i or i < 0:
        return
    s = sig[: j - i] * gain
    buf[0, i:j] += s * np.sqrt(0.5 * (1 - pan))
    buf[1, i:j] += s * np.sqrt(0.5 * (1 + pan))


def env(n, a, r):
    e = np.ones(n)
    na, nr = max(1, int(a * SR)), max(1, int(r * SR))
    e[:na] = np.linspace(0, 1, na) ** 2
    e[n - nr:] *= np.linspace(1, 0, nr) ** 2
    return e


def pad(freqs, dur, bright=0.6):
    n = int(dur * SR)
    t = np.arange(n) / SR
    out = np.zeros(n)
    for f in freqs:
        for h in range(1, 6):
            for det in (-0.0018, 0.0018):
                out += np.sin(2 * np.pi * f * h * (1 + det) * t + h) / h ** (2.3 - bright)
    return out / (len(freqs) * 6)


def bell(f, dur=3.0, bright=1.0):
    n = int(dur * SR)
    t = np.arange(n) / SR
    parts = [(1, 1, 1.4), (2.76, 0.42 * bright, 2.8), (5.4, 0.2 * bright, 5), (8.93, 0.08 * bright, 8)]
    s = sum(a * np.sin(2 * np.pi * f * r * t) * np.exp(-t * d) for r, a, d in parts)
    return s * np.minimum(1, t / 0.002)


def pluck(f, dur=0.6):
    n = int(dur * SR)
    t = np.arange(n) / SR
    s = np.sin(2 * np.pi * f * t) + 0.35 * np.sin(2 * np.pi * 2 * f * t) * np.exp(-t * 9)
    return s * np.exp(-t * 7) * np.minimum(1, t / 0.003)


def noise_sweep(dur, f0, f1, rising=True):
    """Desis tersaring yang cutoff-nya bergerak (rata-rata bergulir berubah)."""
    n = int(dur * SR)
    x = rng.standard_normal(n)
    c = np.concatenate([[0], np.cumsum(x)])
    u = np.linspace(0, 1, n)
    cutoff = f0 * (f1 / f0) ** u
    w = np.clip((SR / cutoff / 2).astype(int), 2, 4000)
    idx = np.arange(n)
    lo = np.maximum(0, idx - w)
    y = (c[idx + 1] - c[lo]) / w
    y /= np.abs(y).max() + 1e-9
    return y * ((u ** 2.2) if rising else (1 - u) ** 2)


def thump(dur=1.6, f_hi=90, f_lo=34, decay=2.6):
    t = np.arange(int(dur * SR)) / SR
    f = f_lo + (f_hi - f_lo) * np.exp(-t * 10)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * decay)


# --- 0–0.85: partikel berkumpul
place(wet, noise_sweep(0.9, 500, 7000), 0.0, gain=0.38)
for k in range(14):
    tt = 0.05 + k * 0.055 + rng.uniform(0, 0.03)
    place(wet, bell(midi(rng.choice([86, 88, 91, 93, 95, 98])), 0.6), tt, pan=rng.uniform(-0.8, 0.8), gain=0.03)
place(dry, thump(1.8, 110, 38, 2.6), 0.8, gain=0.42)
place(wet, bell(midi(62), 3.2), 0.82, gain=0.1)

# --- dasar: pad yang berpindah akor per dua tingkat, makin terang
chords = [
    (0.8, [50, 57, 62, 64, 69]),  # Dm(add9)
    (2.6, [46, 53, 58, 62, 65, 69]),  # B♭maj7
    (4.2, [43, 50, 55, 59, 62, 69]),  # G(add9)
    (5.8, [45, 52, 57, 61, 64, 71]),  # A(add9)
]
for k, (t0, notes) in enumerate(chords):
    t1 = chords[k + 1][0] if k + 1 < len(chords) else 7.0
    d = t1 - t0 + 0.6
    p = pad([midi(n) for n in notes], d, bright=0.4 + 0.12 * k) * env(int(d * SR), 0.45, 0.55)
    place(dry, p, t0, gain=0.38 + 0.05 * k)
    place(wet, p, t0, gain=0.3)

# denyut halus (sub) tiap 0,47 dtk agar terasa bergerak
beat = 0.47
for k, tt in enumerate(np.arange(0.95, 6.8, beat)):
    g = 0.12 + 0.18 * (tt - 0.95) / 5.9
    root = 38 if tt < 2.6 else 34 if tt < 4.2 else 31 if tt < 5.8 else 33
    place(dry, thump(0.42, midi(root) * 2.2, midi(root), 7), tt, gain=g)
    place(wet, pluck(midi(root + 24 + (7 if k % 2 else 0)), 0.35), tt + beat / 2, pan=0.4 if k % 2 else -0.4, gain=0.05 + 0.04 * (tt / 6.8))

# denting naik di tiap tingkat skala
for k, tt in enumerate(LEVEL_TIME):
    n = [62, 66, 69, 74, 76, 78, 81, 86][k]
    place(wet, bell(midi(n), 2.6), tt - 0.02, pan=-0.6 + k * 0.17, gain=0.085)
    place(dry, bell(midi(n), 1.2, 0.5), tt - 0.02, pan=-0.6 + k * 0.17, gain=0.03)
    place(wet, noise_sweep(0.5, 3000, 600, rising=False), tt - 0.05, pan=0.6 - k * 0.17, gain=0.05)

# --- lompatan sel → Bumi
place(wet, noise_sweep(0.75, 300, 9000), 4.25, gain=0.3)
place(wet, noise_sweep(0.9, 9000, 300, rising=False), 5.0, gain=0.26)
place(dry, thump(1.2, 80, 36, 3), 4.97, gain=0.4)

# --- galaksi: akor lebar + kilau
gal = pad([midi(n) for n in (50, 57, 62, 66, 69, 76)], 2.4, bright=0.8) * env(int(2.4 * SR), 0.3, 1.2)
place(wet, gal, 6.8, gain=0.45)
place(dry, gal, 6.8, gain=0.2)

# --- morph menjadi S: arpeggio berputar + riser
arp = [74, 78, 81, 86, 90, 93, 98, 102]
for k in range(16):
    tt = 6.9 + k * 0.078
    place(wet, bell(midi(arp[k % 8] - (0 if k < 8 else -12 if k % 2 else 0)), 1.2), tt, pan=np.sin(k * 0.9) * 0.8, gain=0.035 + 0.002 * k)
place(wet, noise_sweep(1.25, 400, 11000), 6.9, gain=0.32)
rd = 1.25
t = np.arange(int(rd * SR)) / SR
riser = np.sin(2 * np.pi * np.cumsum(140 * 6 ** (t / rd)) / SR) * (t / rd) ** 2.5
place(dry, riser, 6.9, gain=0.09)

# --- 8.15: logo terbentuk
place(dry, thump(2.6, 100, 30, 2.0), 8.15, gain=1.0)
place(wet, noise_sweep(1.8, 9000, 200, rising=False), 8.15, gain=0.3)
final = pad([midi(n) for n in (38, 50, 57, 62, 66, 69, 74, 78)], 2.85, bright=0.85) * env(int(2.85 * SR), 0.05, 1.6)
place(dry, final, 8.15, gain=0.6)
place(wet, final, 8.15, gain=0.5)
for k, n in enumerate([74, 78, 81, 86, 90]):
    place(wet, bell(midi(n), 2.5), 8.2 + k * 0.05, pan=-0.5 + k * 0.25, gain=0.07)

# --- nama, tagline, kilau
place(wet, noise_sweep(0.7, 600, 5000), 8.1, pan=-0.2, gain=0.1)
place(wet, pluck(midi(81)), 9.05, pan=0.2, gain=0.08)
place(wet, pluck(midi(86)), 9.12, pan=0.3, gain=0.06)
for k, n in enumerate([93, 98, 102]):
    place(wet, bell(midi(n), 2.2), 9.6 + k * 0.08, pan=0.4 - k * 0.35, gain=0.055)


def reverb(x, seconds=2.8):
    m = int(seconds * SR)
    tt = np.arange(m) / SR
    out = np.zeros_like(x)
    for ch in range(2):
        ir = rng.standard_normal(m) * np.exp(-tt * 2.5)
        ir = np.convolve(ir, np.ones(5) / 5, mode='same')
        ir /= np.sqrt(np.sum(ir ** 2))
        nfft = 1 << int(np.ceil(np.log2(N + m)))
        out[ch] = np.fft.irfft(np.fft.rfft(x[ch], nfft) * np.fft.rfft(ir, nfft), nfft)[:N]
    return out


mix = dry + reverb(wet) * 0.9 + wet * 0.3
mix = np.tanh(mix * 1.3) / 1.3
mix *= 0.9 / np.abs(mix).max()
fade = int(0.6 * SR)
mix[:, -fade:] *= np.linspace(1, 0, fade) ** 1.5
mix[:, : int(0.01 * SR)] *= np.linspace(0, 1, int(0.01 * SR))

wav = ROOT / 'out' / 'intro-audio.wav'
wav.parent.mkdir(exist_ok=True)
with wave.open(str(wav), 'wb') as w:
    w.setnchannels(2)
    w.setsampwidth(2)
    w.setframerate(SR)
    w.writeframes((np.clip(mix.T, -1, 1) * 32767).astype('<i2').tobytes())
mp3 = ROOT / 'public' / 'intro-audio.mp3'
subprocess.run(
    ['ffmpeg', '-v', 'error', '-y', '-i', str(wav), '-af', 'highpass=f=28,loudnorm=I=-15:TP=-1.5:LRA=11', '-ar', '48000', '-b:a', '256k', str(mp3)],
    check=True,
)
print(f'→ {mp3}')
