#!/usr/bin/env python3
"""Hitungan Ep. 9 "Volt yang Bercerita" (Seni Mengukur, Kimia Analitik): potensiometri.

Jalankan: python3 hitung.py            (semua tabel)
          python3 hitung.py --csv f.csv (kurva titrasi rapat 0–100 mL + turunan, untuk adegan)

Tetapan: R dan F CODATA 2018 (eksak sejak SI 2019, NIST physics.nist.gov/cuu);
Ka asam asetat 1,75e-5 dan Ka HF 6,8e-4 (Skoog ed. 10 Lampiran 3); Kw = 1,00e-14
(konvensi Ep. 3, agar kurva titrasi identik dengan `ep03-satu-tetes/titrasi.py`).
Penyangga NIST: SRM 185i (ftalat), 186g (fosfat), 187f (boraks) — sertifikat NIST.
Keluaran memakai koma desimal.
"""
import math
import sys

R = 8.314462618          # J mol-1 K-1 (eksak: N_A·k)
F = 96485.33212          # C mol-1    (eksak: N_A·e)
T0 = 273.15
LN10 = math.log(10)

KW = 1.00e-14
KA_HOAC = 1.75e-5
KA_HF = 6.8e-4
V0, CA, CB = 50.00, 0.1000, 0.1000   # Ep. 3: 50,00 mL HOAc 0,1000 M + NaOH 0,1000 M


def k(x, n=2):
    """Angka dengan koma desimal."""
    return f"{x:.{n}f}".replace(".", ",")


def ksci(x, n=2):
    m, e = f"{x:.{n}e}".split("e")
    return f"{m.replace('.', ',')} × 10^{int(e)}"


def slope_mV(t_c, z=1):
    """Kemiringan Nernst RT·ln10/(zF) dalam mV per dekade aktivitas."""
    return 1000 * R * (t_c + T0) * LN10 / (z * F)


# ---------------------------------------------------------------- 1. Nernst
def bagian1():
    print("=" * 72)
    print("1. Kemiringan Nernst terhadap suhu: S = RT ln10 / F")
    print("=" * 72)
    print(f"R = {R} J/(mol·K), F = {F} C/mol (keduanya eksak, CODATA 2018)")
    print(f"R·ln10/F = {k(1e6*R*LN10/F,4)} µV/K  (≈ 0,198 mV per derajat)")
    for t in (0, 5, 10, 15, 20, 25, 30, 35, 37, 40, 50, 60, 80, 100):
        print(f"  {t:3d} °C : {k(slope_mV(t))} mV/pH   (ion 2+: {k(slope_mV(t, 2))} mV per dekade)")
    s25 = slope_mV(25)
    print(f"25,00 °C tepat: {k(s25,3)} mV  → 59,16 mV/pH; ion bermuatan 2: {k(s25/2,2)} mV")
    print(f"Skoog membulatkan 0,0592 V; selisih 0 → 37 °C: {k(slope_mV(37)-slope_mV(0))} mV/pH")
    print()


# ------------------------------------------------------- 2. elektrode acuan
def bagian2():
    print("=" * 72)
    print("2. Elektrode acuan (Skoog Tabel 19-1, V vs SHE) & E Ag/AgCl dari aktivitas Cl−")
    print("=" * 72)
    tab = {15: (0.2511, 0.212), 20: (0.2479, 0.208), 25: (0.2444, 0.205),
           30: (0.2411, 0.201), 35: (0.2376, 0.197)}
    print("  T/°C   SCE jenuh   Ag/AgCl 3,5 M")
    for t, (sce, ag) in tab.items():
        print(f"  {t:4d}   {k(sce,4)}      {k(ag,3)}")
    print("  25 °C: SCE 0,244 V; Ag/AgCl KCl jenuh 0,199 V (Skoog §19B).")
    E0 = 0.222  # Skoog Lampiran 5
    for a in (0.1, 1.0, 3.0):
        print(f"  E = 0,222 − 0,05916 log a(Cl−); a = {k(a,2)} → {k(E0 - s(25)*math.log10(a),3)} V")
    print("  (ilustrasi: makin pekat Cl−, makin rendah E; KCl pekat & tetap → E acuan tetap)")
    print()


def s(t):
    return slope_mV(t) / 1000


# -------------------------------------------------------- 3. kalibrasi dua titik
NIST = {  # pH(S) pada T (°C)
    "ftalat 0,05 mol/kg (SRM 185i)": {5: 4.003, 10: 3.999, 15: 3.999, 20: 4.001, 25: 4.005, 30: 4.012, 35: 4.021, 37: 4.025, 40: 4.031},
    "fosfat 1:1 0,025 mol/kg (SRM 186g)": {5: 6.951, 10: 6.923, 15: 6.899, 20: 6.880, 25: 6.864, 30: 6.853, 35: 6.843, 37: 6.841, 40: 6.837},
    "boraks 0,01 mol/kg (SRM 187f)": {5: 9.401, 10: 9.342, 15: 9.288, 20: 9.239, 25: 9.195, 30: 9.155, 35: 9.120, 37: 9.107, 40: 9.088},
}

# elektrode "nyata" rekaan: titik isopotensial 0 mV di pH 7,00 + offset −3,0 mV, efisiensi 98,5 %
EFF, OFFSET = 0.985, -3.0


def e_elektrode(ph, t=25):
    return OFFSET - EFF * slope_mV(t) * (ph - 7.00)


def bagian3():
    print("=" * 72)
    print("3. Penyangga NIST & kalibrasi dua titik (definisi operasional pH, Skoog pers. 19-25)")
    print("=" * 72)
    for n, d in NIST.items():
        print(f"  {n}: " + " · ".join(f"{t}°C {k(v,3)}" for t, v in d.items()))
    p1, p2 = 4.005, 6.864
    e1, e2 = round(e_elektrode(p1), 1), round(e_elektrode(p2), 1)
    S = (e1 - e2) / (p2 - p1)
    print(f"\n  Elektrode rekaan (efisiensi {k(EFF*100,1)} %, offset {k(OFFSET,1)} mV di pH 7):")
    print(f"  Ftalat pH 4,005 → E = {k(e1,1)} mV;  fosfat pH 6,864 → E = {k(e2,1)} mV")
    print(f"  Kemiringan terukur = ({k(e1,1)} − {k(e2,1)}) / ({k(p2,3)} − {k(p1,3)}) = {k(S,2)} mV/pH "
          f"= {k(100*S/slope_mV(25),1)} % teoretis")
    for eu in (105.0, -120.0):
        ph = p2 - (eu - e2) / S
        ph_teori = p2 - (eu - e2) / slope_mV(25)
        print(f"  Sampel E = {k(eu,1)} mV → pH = 6,864 − ({k(eu,1)} − {k(e2,1)})/{k(S,2)} = {k(ph,3)}"
              f"  (bila memakai 59,16 teoretis + satu titik: {k(ph_teori,3)}, galat {k(ph_teori-ph,3)})")
    # suhu: kalibrasi 25 °C, sampel 35 °C tanpa kompensasi
    print("\n  Kompensasi suhu (ATC hanya mengoreksi kemiringan elektrode):")
    for ph_true in (4.0, 7.0, 10.0):
        e = OFFSET - EFF * slope_mV(35) * (ph_true - 7.0)
        ph_read = 7.0 - (e - OFFSET) / (EFF * slope_mV(25))
        print(f"   sampel pH {k(ph_true,1)} pada 35 °C, meter dikalibrasi 25 °C tanpa ATC → terbaca {k(ph_read,3)} "
              f"(galat {k(ph_read-ph_true,3)})")
    print("   Boraks sendiri berubah 9,195 (25 °C) → 9,120 (35 °C): itu kimia larutan, bukan galat elektrode.")
    print()


# ------------------------------------------------------- 4. galat sambungan
def bagian4():
    print("=" * 72)
    print("4. Galat 1 mV di potensial sambungan/kalibrasi")
    print("=" * 72)
    for z in (1, 2):
        rel = (10 ** (z * 1.0 / slope_mV(25)) - 1) * 100
        print(f"  ion bermuatan {z}: ΔE = 1 mV → galat aktivitas ≈ {k(rel,1)} % "
              f"(diferensial Skoog: 3,9·n % = {k(3.89*z,1)} %)")
    print(f"  dalam satuan pH: 1 mV = {k(1/slope_mV(25),4)} pH; 3 mV = {k(3/slope_mV(25),3)} pH")
    print()


# ------------------------------------------------------- 5. galat alkali
def bagian5():
    print("=" * 72)
    print("5. Galat alkali — koefisien selektivitas dari data Skoog (Corning 015, pH 12)")
    print("=" * 72)
    aH = 1e-12
    kHNa = (10 ** -11.3 - aH) / 1.0
    print(f"  pH 12 dengan [Na+] 1 M terbaca 11,3 → k(H,Na) ≈ {ksci(kHNa)} (aktivitas ≈ konsentrasi)")
    for na in (1.0, 0.1, 0.01):
        print(f"   [Na+] = {k(na,2)} M → terbaca {k(-math.log10(aH + kHNa*na),2)}")
    print("  Skoog: 0,1 M terbaca 11,7 (model sederhana memberi 11,85 → k hanya perkiraan kasar)")
    for ph in (9, 10, 11, 12, 13):
        a = 10 ** -ph
        print(f"   pH sebenarnya {ph}, Na+ 0,1 M → terbaca {k(-math.log10(a + kHNa*0.1),2)}")
    print()


# ------------------------------------------------------- 6. titrasi potensiometrik
def bisect_ph(f, lo=-2.0, hi=16.0):
    for _ in range(200):
        mid = 0.5 * (lo + hi)
        if f(mid) > 0:
            lo = mid
        else:
            hi = mid
    return 0.5 * (lo + hi)


def ph_weak(vb, v0=V0, ca=CA, cb=CB, ka=KA_HOAC, kw=KW):
    vt = v0 + vb
    cha, na = ca * v0 / vt, cb * vb / vt

    def g(p):
        h = 10 ** -p
        return h + na - kw / h - cha * ka / (ka + h)
    return bisect_ph(g)


def mv(ph):
    """Elektrode kaca ideal 25 °C, 0 mV di pH 7 (pH meter mode mV)."""
    return -slope_mV(25) * (ph - 7.0)


DATA_V = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 47, 48, 49, 49.5, 49.7, 49.8, 49.9,
          50.0, 50.1, 50.2, 50.3, 50.5, 51, 52, 55, 60]


def bagian6():
    print("=" * 72)
    print("6. Titrasi potensiometrik: 50,00 mL CH3COOH 0,1000 M + NaOH 0,1000 M (data Ep. 3)")
    print("=" * 72)
    rows = [(v, ph_weak(v)) for v in DATA_V]
    print(f"{'V/mL':>7} {'pH':>6} {'E/mV':>8}")
    for v, p in rows:
        print(f"{k(v):>7} {k(p):>6} {k(mv(p),1):>8}")
    print(f"\n  pH di 25,00 mL (setengah ekivalen) = {k(ph_weak(25),3)};  pKa = {k(-math.log10(KA_HOAC),3)}")

    print("\n  Turunan pertama (ΔpH/ΔV) di titik tengah & turunan kedua — hanya data 49,0–51,0 mL:")
    sub = [(v, p) for v, p in rows if 49.0 <= v <= 51.0]
    d1 = [((a[0] + b[0]) / 2, (b[1] - a[1]) / (b[0] - a[0])) for a, b in zip(sub, sub[1:])]
    for vm, d in d1:
        print(f"   V̄ = {k(vm,2)} mL  ΔpH/ΔV = {k(d,1)} /mL   (ΔE/ΔV = {k(-d*slope_mV(25),0)} mV/mL)")
    d2 = [((a[0] + b[0]) / 2, (b[1] - a[1]) / (b[0] - a[0])) for a, b in zip(d1, d1[1:])]
    print("  Turunan kedua Δ²pH/ΔV²:")
    for vm, d in d2:
        print(f"   V = {k(vm,2)} mL  {k(round(d)+0.0,0)} /mL²")
    for (va, da), (vb, db) in zip(d2, d2[1:]):
        if da > 0 >= db:
            v0 = va + da * (vb - va) / (da - db)
            print(f"  Titik nol turunan kedua (interpolasi linear antara {k(va,2)} dan {k(vb,2)}): V = {k(v0,3)} mL")
    vmax = max(d1, key=lambda x: x[1])
    print(f"  Puncak turunan pertama (data) di V̄ = {k(vmax[0],2)} mL")
    # titik belok kontinu
    h = 1e-4
    best = max(((ph_weak(v + h) - ph_weak(v - h)) / (2 * h), v)
               for v in [49.95 + i * 0.0005 for i in range(201)])
    print(f"  Titik belok kurva kontinu: V = {k(best[1],4)} mL, dpH/dV maks ≈ {k(best[0],0)} /mL")
    print(f"  pH di ekivalen (50,00 mL) = {k(ph_weak(50.0),2)}")
    # galat bila tanpa titik 50,00 (tetes 0,10 mL tak simetris): pakai 0,05 mL
    print()


def csv(path, step=0.05):
    with open(path, "w") as f:
        f.write("v_mL,pH,E_mV,dpH_dV\n")
        n = int(round(100 / step))
        prev = None
        for i in range(n + 1):
            v = i * step
            p = ph_weak(v)
            d = "" if prev is None else f"{(p - prev) / step:.4f}"
            f.write(f"{v:.2f},{p:.4f},{mv(p):.2f},{d}\n")
            prev = p
    print("ditulis", path)


# ------------------------------------------------------- 7. fluorida
def bagian7():
    print("=" * 72)
    print("7. Elektrode ion selektif fluorida (LaF3) & TISAB")
    print("=" * 72)
    pka = -math.log10(KA_HF)
    print(f"  Ka HF = 6,8 × 10^-4 → pKa = {k(pka,2)}")
    for ph in (3.0, 4.0, 5.0, 5.25, 5.5, 6.0):
        fr = KA_HF / (KA_HF + 10 ** -ph)
        print(f"   pH {k(ph,2)}: fraksi F− bebas = {k(fr*100,1)} %")
    S = 58.9  # mV per dekade, efisiensi 99,6 % (rekaan)
    K = 120.0  # mV pada 1 mg/L (rekaan)
    print(f"\n  Kalibrasi rekaan (anion: E = K − S log c), S = {k(S,1)} mV/dekade ({k(100*S/slope_mV(25),1)} % teoretis):")
    for c in (0.5, 1.0, 2.0, 5.0, 10.0):
        print(f"   standar {k(c,1)} mg/L F− (+TISAB 1:1) → E = {k(K - S*math.log10(c),1)} mV")
    # pasta gigi: 1,000 g → 100,0 mL, 10,00 mL diencerkan jadi 50,00 mL, lalu 1:1 TISAB (standar diperlakukan sama)
    m_paste, ppm_true = 1.000, 1450
    c_100 = ppm_true * m_paste / 1000 / 0.1000        # mg/L dalam labu 100 mL
    c_meas = c_100 * 10.00 / 50.00
    E = round(K - S * math.log10(c_meas), 1)
    c_back = 10 ** ((K - E) / S)
    ppm = c_back * 50.00 / 10.00 * 0.1000 / m_paste * 1000
    print(f"\n  Pasta gigi (contoh NaF, label 1450 ppm): 1,000 g → 100,0 mL; 10,00 mL → 50,00 mL")
    print(f"   larutan ukur = {k(c_meas,2)} mg/L → E = {k(E,1)} mV → kembali {k(c_back,3)} mg/L")
    print(f"   kadar = {k(c_back,3)} × 5 × 0,1000 L / 0,001000 kg = {k(ppm,0)} mg/kg (ppm)")
    for dE in (1.0, -1.0):
        cb = 10 ** ((K - (E + dE)) / S) * 50 / 10 * 0.1 / m_paste * 1000
        print(f"   bila E bergeser {k(dE,1)} mV → {k(cb,0)} ppm ({k((cb/ppm-1)*100,1)} %)")
    # air minum
    Ew = 109.0
    cw = 10 ** ((K - Ew) / S)
    print(f"\n  Air sumur (rekaan): E = {k(Ew,1)} mV → {k(cw,2)} mg/L F− (batas WHO 1,5 mg/L)")
    print(f"   1,5 mg/L = {ksci(1.5e-3/18.998,2)} M; respons LaF3 linear sampai ≈ 10^-6 M = {k(1e-6*18.998*1000,3)} mg/L")
    print()


if __name__ == "__main__":
    if len(sys.argv) > 2 and sys.argv[1] == "--csv":
        csv(sys.argv[2])
    else:
        for b in (bagian1, bagian2, bagian3, bagian4, bagian5, bagian6, bagian7):
            b()
