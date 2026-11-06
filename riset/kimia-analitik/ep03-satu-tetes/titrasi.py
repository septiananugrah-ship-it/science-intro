#!/usr/bin/env python3
"""Kurva titrasi eksak untuk Ep. 3 "Satu Tetes yang Menentukan" (seri Seni Mengukur).

Dihitung dari neraca muatan lengkap (tanpa pendekatan), Kw = 1,00e-14 (25 °C,
konvensi Skoog ed. 10 bab 7; nilai teliti 1,01e-14 ditampilkan sebagai pembanding).

  Kuat–kuat  : [H+] + [Na+] = [OH-] + [Cl-]
  Lemah–kuat : [H+] + [Na+] = [OH-] + [A-],  [A-] = C_HA·Ka/(Ka+[H+])

Pakai:  python3 titrasi.py            (tabel ringkas)
        python3 titrasi.py --csv f.csv (kurva rapat 0–100 mL untuk adegan)
"""
import math, sys

KW = 1.00e-14
KA_HOAC = 1.75e-5          # Skoog ed. 10, Lampiran 3 (hlm. A-7)
V0, CA, CB = 50.00, 0.1000, 0.1000   # mL analit, M analit, M titran


def bisect_ph(f, lo=-2.0, hi=16.0):
    """Akar f(pH)=0, f menurun monoton terhadap [H+]→ naik terhadap pH."""
    for _ in range(200):
        mid = 0.5 * (lo + hi)
        if f(mid) > 0:
            lo = mid
        else:
            hi = mid
    return 0.5 * (lo + hi)


def ph_strong(vb, v0=V0, ca=CA, cb=CB, kw=KW):
    vt = v0 + vb
    cl, na = ca * v0 / vt, cb * vb / vt
    # g(pH) = muatan positif − negatif; positif saat pH terlalu rendah
    return bisect_ph(lambda p: 10**-p + na - kw / 10**-p - cl)


def ph_weak(vb, v0=V0, ca=CA, cb=CB, ka=KA_HOAC, kw=KW):
    vt = v0 + vb
    cha, na = ca * v0 / vt, cb * vb / vt
    def g(p):
        h = 10**-p
        return h + na - kw / h - cha * ka / (ka + h)
    return bisect_ph(g)


def vol_at_ph(fun, target, lo=0.0, hi=100.0):
    """Volume titran saat pH mencapai target (pH naik monoton)."""
    for _ in range(200):
        mid = 0.5 * (lo + hi)
        if fun(mid) < target:
            lo = mid
        else:
            hi = mid
    return 0.5 * (lo + hi)


def frac_base(ph, pka):
    """Fraksi bentuk basa indikator In- (untuk silang-pudar warna)."""
    return 1.0 / (1.0 + 10**(pka - ph))


INDIKATOR = {  # Skoog ed. 10 Tabel 12-1 (hlm. 292): rentang, warna asam→basa
    'metil jingga':   (3.1, 4.4, 'merah → kuning'),
    'metil merah':    (4.2, 6.3, 'merah → kuning'),
    'bromtimol biru': (6.2, 7.6, 'kuning → biru'),
    'fenolftalein':   (8.3, 10.0, 'tak berwarna → merah'),
}

VOLS = [0, 10, 20, 25, 40, 45, 49, 49.9, 49.95, 50.0, 50.05, 50.1, 51, 55, 60, 70, 100]


def tabel():
    print(f"50,00 mL asam 0,1000 M dititrasi NaOH 0,1000 M  (Kw = {KW:.2e}, Ka HOAc = {KA_HOAC:.2e})")
    print(f"{'V NaOH/mL':>10} {'pH HCl':>8} {'pH HOAc':>8}")
    for v in VOLS:
        print(f"{v:10.2f} {ph_strong(v):8.2f} {ph_weak(v):8.2f}")
    print()
    d1 = ph_strong(50.05) - ph_strong(49.95)
    d2 = ph_strong(50.10) - ph_strong(49.90)
    print(f"Lonjakan HCl satu tetes 0,05 mL kiri-kanan (49,95→50,05): ΔpH = {d1:.2f}")
    print(f"Lonjakan HCl 49,90→50,10 mL: ΔpH = {d2:.2f}")
    print(f"Lonjakan HOAc 49,90→50,10 mL: ΔpH = {ph_weak(50.10)-ph_weak(49.90):.2f}")
    print(f"pH ekivalen HCl dgn Kw=1,01e-14: {ph_strong(50.0, kw=1.01e-14):.3f}")
    print(f"pKa HOAc = {-math.log10(KA_HOAC):.3f};  pH di 25,00 mL (eksak) = {ph_weak(25):.3f}")
    print(f"pH HOAc awal pendekatan sqrt(Ka C) = {-math.log10(math.sqrt(KA_HOAC*CA)):.3f}")
    kb = KW / KA_HOAC
    print(f"Ekivalen HOAc pendekatan: Kb = {kb:.3e}, [OH-] = {math.sqrt(kb*0.05):.3e}, pH = {14+math.log10(math.sqrt(kb*0.05)):.3f}")
    print()

    print("Volume saat pH mencapai batas rentang indikator (Veq = 50,00 mL):")
    for nama, (a, b, w) in INDIKATOR.items():
        vs1, vs2 = vol_at_ph(ph_strong, a), vol_at_ph(ph_strong, b)
        vw1, vw2 = vol_at_ph(ph_weak, a), vol_at_ph(ph_weak, b)
        print(f"  {nama:15s} pH {a}–{b} ({w}):  HCl {vs1:7.3f}–{vs2:7.3f} mL | HOAc {vw1:7.3f}–{vw2:7.3f} mL")
    print()

    print("Pengenceran (asam & basa sama pekat, 50,00 mL):")
    for c in (0.1, 0.01, 0.001):
        f = lambda v, c=c: ph_strong(v, ca=c, cb=c)
        print(f"  {c:g} M: pH 49,90 = {f(49.9):.2f}, 50,00 = {f(50):.2f}, 50,10 = {f(50.1):.2f}, "
              f"awal = {f(0):.2f};  ΔpH(49,9→50,1) = {f(50.1)-f(49.9):.2f}")
    print()

    print("Fraksi In- (warna basa) di sekitar ekivalen HCl, pKa ≈ tengah rentang:")
    for v in (49.9, 49.95, 50.0, 50.05, 50.1):
        p = ph_strong(v)
        fr = {n: frac_base(p, (a + b) / 2) for n, (a, b, _) in INDIKATOR.items()}
        print(f"  {v:6.2f} mL pH {p:5.2f}: " + ", ".join(f"{n} {x:.3f}" for n, x in fr.items()))
    print()
    print("Kemiringan maksimum (turunan pertama) HCl di sekitar ekivalen:")
    h = 0.001
    best = max((abs(ph_strong(v + h) - ph_strong(v - h)) / (2 * h), v)
               for v in [49.9 + i * 0.001 for i in range(201)])
    print(f"  dpH/dV maks ≈ {best[0]:.0f} per mL di V = {best[1]:.3f} mL")


def csv(path, step=0.05):
    with open(path, 'w') as f:
        f.write('v_mL,pH_HCl,pH_HOAc\n')
        n = int(round(100 / step))
        for i in range(n + 1):
            v = i * step
            f.write(f"{v:.2f},{ph_strong(v):.4f},{ph_weak(v):.4f}\n")
    print('ditulis', path)


if __name__ == '__main__':
    if len(sys.argv) > 2 and sys.argv[1] == '--csv':
        csv(sys.argv[2])
    else:
        tabel()
