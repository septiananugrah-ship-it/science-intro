#!/usr/bin/env python3
"""Hitungan untuk Seni Mengukur Ep. 5 "Kunci untuk Setiap Logam" (titrasi EDTA).

Semua tetapan dari Skoog, West, Holler & Crouch ed. 10 (materi/Analytical Chemistry.pdf):
  - Ka EDTA (K1..K4): § 15D-1, hlm. 380
  - K_MY (20 °C, I = 0,1; Schwarzenbach 1957): Tabel 15-4, hlm. 383
  - EBT: K1 = 5e-7, K2 = 2,8e-12; Kf MgIn- = 1,0e7, CaIn- = 2,5e5: Contoh 15-6, hlm. 395-396
  - Ksp Mg(OH)2 = 7,1e-12: Lampiran 2, hlm. A-6
Contoh titrasi kesadahan = angka rekaan yang konsisten (bukan data PDAM nyata).
Jalankan: python3 hitung.py
"""
from math import log10, sqrt

def koma(x, nd=2):
    return f"{x:.{nd}f}".replace(".", ",")

def sci(x, nd=2):
    m, e = f"{x:.{nd}e}".split("e")
    return f"{m.replace('.', ',')} × 10^{int(e)}"

# --- EDTA ---------------------------------------------------------------
K = [1.02e-2, 2.14e-3, 6.92e-7, 5.50e-11]
def alpha4(pH):
    h = 10 ** -pH
    k1, k2, k3, k4 = K
    D = h**4 + k1*h**3 + k1*k2*h**2 + k1*k2*k3*h + k1*k2*k3*k4
    return k1*k2*k3*k4 / D

def alphas(pH):
    h = 10 ** -pH
    k1, k2, k3, k4 = K
    t = [h**4, k1*h**3, k1*k2*h**2, k1*k2*k3*h, k1*k2*k3*k4]
    D = sum(t)
    return [x / D for x in t]

KMY = {"Ca": 5.0e10, "Mg": 4.9e8, "Pb": 1.1e18, "Fe3": 1.3e25, "Zn": 3.2e16}

print("== 1. Fraksi Y4- (alpha4) vs pH ==")
print("pH | alpha4 | log alpha4 | spesies dominan")
names = ["H4Y", "H3Y-", "H2Y2-", "HY3-", "Y4-"]
for pH in [2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14]:
    a = alphas(pH)
    dom = names[a.index(max(a))]
    print(f"{pH:>2} | {sci(alpha4(pH))} | {koma(log10(alpha4(pH)))} | {dom} ({koma(100*max(a),0)} %)")
print(f"alpha4(pH 10,00) = {koma(alpha4(10),3)}  (Skoog Contoh 15-2: 0,35)")
print(f"Pada pH 10: HY3- = {koma(100*alphas(10)[3],1)} %, Y4- = {koma(100*alphas(10)[4],1)} %")

print("\n== 2. Tetapan bersyarat K' = alpha4 * K_MY ==")
for pH in [4, 6, 8, 10, 12]:
    a = alpha4(pH)
    row = " | ".join(f"{m}: {sci(a*KMY[m])} (log {koma(log10(a*KMY[m]))})" for m in ["Ca", "Mg"])
    print(f"pH {pH:>2}: {row}")
print("Skoog Gbr. 15-9: K'CaY = 1,75e10, K'MgY = 1,72e8 pada pH 10")
# pH minimum agar K' >= 1e6 (kriteria Reilley & Schmid, Skoog hlm. 390)
def pH_min(m, target=1e6):
    lo, hi = 0.0, 14.0
    for _ in range(80):
        mid = (lo + hi) / 2
        if alpha4(mid) * KMY[m] >= target: hi = mid
        else: lo = mid
    return hi
for m in ["Ca", "Mg", "Zn", "Pb", "Fe3"]:
    print(f"pH minimum K'>=1e6 untuk {m}: {koma(pH_min(m),1)}")
print(f"Perbandingan K_CaY/K_MgY = {koma(KMY['Ca']/KMY['Mg'],0)} kali")
print(f"Penurunan K' dari pH 10 ke pH 6: {koma(alpha4(10)/alpha4(6),0)} kali")

print("\n== 3. pM di titik ekivalen (50,00 mL M 0,00500 M + EDTA 0,0100 M, pH 10) ==")
cMY = 50.00 * 0.00500 / (50.00 + 25.00)
for m in ["Ca", "Mg"]:
    Kc = alpha4(10) * KMY[m]
    M = sqrt(cMY / Kc)
    print(f"{m}: c_MY = {sci(cMY)} M, [M] = {sci(M)} M, pM_ek = {koma(-log10(M))}")

print("\n== 4. Indikator Eriochrome Black T (EBT) ==")
k1i, k2i = 5e-7, 2.8e-12
print(f"pKa1 = {koma(-log10(k1i))} (merah H2In- -> biru HIn2-), pKa2 = {koma(-log10(k2i))} (biru -> jingga In3-)")
for pH in [6, 8, 10, 12]:
    h = 10**-pH
    D = h*h + k1i*h + k1i*k2i
    print(f"pH {pH}: H2In- {koma(100*h*h/D,1)} %, HIn2- {koma(100*k1i*h/D,1)} %, In3- {koma(100*k1i*k2i/D,1)} %")
# Rentang transisi (Skoog Contoh 15-6): [MIn]/[HIn] = 10 .. 0,1
for m, Kf in [("Mg", 1.0e7), ("Ca", 2.5e5)]:
    h = 1e-10
    prod = k2i * Kf  # [MIn][H3O+]/([HIn][M])
    M_hi = 10 * h / prod
    M_lo = 0.1 * h / prod
    print(f"{m}: [{m}] {sci(M_hi)} .. {sci(M_lo)} M -> p{m} = {koma(-log10(sqrt(M_hi*M_lo)),1)} ± 1")
print("=> EBT berubah warna tepat di pMg_ek (≈ 5,4) tetapi jauh sebelum pCa_ek (≈ 6,4)")

print("\n== 5. Mg(OH)2 pada pH 12 (penetapan Ca saja) ==")
Ksp = 7.1e-12
for pH in [12, 13]:
    OH = 10**(pH-14)
    Mg = Ksp/OH**2
    print(f"pH {pH}: [Mg2+] maks = {sci(Mg)} M = {koma(Mg*24.305*1000,4)} mg/L")

print("\n== 6. Contoh titrasi kesadahan (angka rekaan konsisten) ==")
M_CaCO3, M_Ca, M_Mg = 100.09, 40.078, 24.305
C = 0.01000   # M EDTA
Vs = 50.00    # mL sampel
def kes(V):
    n = C * V             # mmol
    mM = n / Vs * 1000    # mmol/L
    return n, mM, mM * M_CaCO3
V_tot, V_Ca, V_boil = 12.00, 9.00, 7.00
n, mM, ppm = kes(V_tot)
print(f"Total (pH 10, EBT): {koma(V_tot)} mL -> n = {koma(n,4)} mmol -> {koma(mM,3)} mmol/L -> {koma(ppm,1)} mg/L CaCO3")
nC, mC, pC = kes(V_Ca)
print(f"Ca (pH 12-13, kalkon/murexida): {koma(V_Ca)} mL -> {koma(nC,4)} mmol -> {koma(mC,3)} mmol/L -> {koma(pC,1)} mg/L CaCO3; Ca2+ = {koma(mC*M_Ca,1)} mg/L")
nM = n - nC; mMg = nM / Vs * 1000
print(f"Mg (selisih): {koma(V_tot-V_Ca)} mL -> {koma(nM,4)} mmol -> {koma(mMg,3)} mmol/L -> {koma(mMg*M_CaCO3,1)} mg/L CaCO3; Mg2+ = {koma(mMg*M_Mg,1)} mg/L")
nb, mb, pb = kes(V_boil)
print(f"Sesudah dididihkan & disaring (vol. dikembalikan 50,00 mL): {koma(V_boil)} mL -> {koma(pb,1)} mg/L CaCO3")
lost = ppm - pb
print(f"Hilang (kesadahan sementara -> kerak): {koma(lost,1)} mg/L CaCO3 = {koma(lost,1)} mg CaCO3 per liter air dididihkan")
yr = 1.5 * 365 * lost / 1000
print(f"Ketel 1,5 L/hari x 365 hari -> {koma(yr,1)} g kerak per tahun (anggap semua mengendap di ketel)")
print(f"Kesadahan tetap (sisa) = {koma(pb,1)} mg/L")
print(f"Satu tetes 0,05 mL EDTA = {koma(C*0.05/Vs*M_CaCO3*1000,1)} mg/L CaCO3 pada sampel 50 mL")
print(f"Grain per galon: {koma(ppm/17.1,1)} gpg (1 gpg = 17,1 mg/L)")
def kelas(x):
    return "lunak" if x <= 60 else "agak sadah" if x <= 120 else "sadah" if x <= 180 else "sangat sadah"
for lab, x in [("awal", ppm), ("dididihkan", pb)]:
    print(f"Kelas USGS/WHO ({lab}, {koma(x,0)} mg/L): {kelas(x)}")

print("\n== 7. Stoikiometri: massa Na2H2Y.2H2O untuk 1 L 0,01000 M ==")
M_salt = 372.24
print(f"{koma(M_salt*0.01,4)} g (Skoog 37E-2: ≈ 3,8 g, koreksi 0,3 % air berlebih -> {koma(M_salt*0.01*1.003,4)} g)")

print("\n== 8. Pertukaran logam pada terapi kelasi: CaY2- + Pb2+ -> PbY2- + Ca2+ ==")
Kx = KMY["Pb"] / KMY["Ca"]
print(f"K = K_PbY/K_CaY = {sci(Kx)} (log {koma(log10(Kx))})")
