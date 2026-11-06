#!/usr/bin/env python3
"""Hitungan Ep. 8 "Perebutan Elektron" (Seni Mengukur, Kimia Analitik).

Jalankan: python3 hitung.py
Potensial: Skoog, West, Holler & Crouch ed. 10, Lampiran 5 (hlm. A-12–A-14) dan
bab 17–18. Kandungan vitamin C: USDA FoodData Central (SR Legacy).
Semua contoh titrasi memakai data rekaan yang konsisten (diberi label di naskah).
Keluaran memakai koma desimal.
"""
from math import log10, sqrt

def f(x, n=3):
    """Format angka dengan koma desimal (notasi ilmiah bila perlu)."""
    if x == 0:
        return "0"
    if abs(x) < 1e-3 or abs(x) >= 1e6:
        s = f"{x:.{n-1}e}"
        m, e = s.split("e")
        return f"{m.replace('.', ',')} × 10^{int(e)}"
    return f"{x:.{n}f}".replace(".", ",")

K_NERNST = 0.05916  # V, 2,303RT/F pada 25 °C (Skoog membulatkan 0,0592)

# --- potensial (V vs SHE) -------------------------------------------------
E0 = {  # Skoog Lampiran 5 (standar)
    "MnO4-/Mn2+": 1.51, "Ce4+/Ce3+ (1 M H2SO4, formal)": 1.44,
    "Fe3+/Fe2+": 0.771, "Fe3+/Fe2+ (1 M H2SO4, formal)": 0.68,
    "Fe3+/Fe2+ (1 M HCl, formal)": 0.700, "Fe3+/Fe2+ (1 M HClO4, formal)": 0.732,
    "I3-/I-": 0.536, "S4O6 2-/S2O3 2-": 0.08, "CO2/H2C2O4": -0.49,
    "H2O2/H2O": 1.776, "O2/H2O2": 0.682, "HClO/Cl2": 1.63, "Cl2/Cl-": 1.359,
    "MnO4-/MnO2": 1.695, "MnO2/Mn2+": 1.23, "IO3-/I2(s)": 1.196,
    "ferroin (1 M H2SO4, transisi)": 1.11,
}
M = {  # g/mol (berat atom standar)
    "KMnO4": 158.03, "Na2C2O4": 134.00, "H2O2": 34.01, "NaOCl": 74.44,
    "Cl2": 70.90, "C6H8O6": 176.12, "Na2S2O3": 158.11, "KIO3": 214.00,
    "Na2S2O3.5H2O": 248.18, "O2": 32.00,
}

def logK(n, dE):
    """log K = n ΔE° / 0,05916 (25 °C)."""
    return n * dE / K_NERNST

print("=" * 72)
print("1. Persamaan setara & nisbah stoikiometri")
print("=" * 72)
reaksi = [
    ("Permanganat + oksalat (standardisasi)",
     "2MnO4− + 5H2C2O4 + 6H+ → 2Mn²+ + 10CO2 + 8H2O", "MnO4− : H2C2O4 = 2 : 5",
     5, 10),
    ("Permanganat + hidrogen peroksida",
     "2MnO4− + 5H2O2 + 6H+ → 2Mn²+ + 5O2 + 8H2O", "MnO4− : H2O2 = 2 : 5", 5, 10),
    ("Permanganat + besi(II)",
     "MnO4− + 5Fe²+ + 8H+ → Mn²+ + 5Fe³+ + 4H2O", "MnO4− : Fe²+ = 1 : 5", 5, 5),
    ("Hipoklorit + iodida (pemutih)",
     "OCl− + 2I− + 2H+ → Cl− + I2 + H2O", "OCl− : I2 = 1 : 1", 2, 2),
    ("Iodium + tiosulfat",
     "I2 + 2S2O3²− → 2I− + S4O6²−", "I2 : S2O3²− = 1 : 2  →  OCl− : S2O3²− = 1 : 2", 2, 2),
    ("Iodium + asam askorbat (vitamin C)",
     "C6H8O6 + I2 → C6H6O6 + 2I− + 2H+", "C6H8O6 : I2 = 1 : 1", 2, 2),
    ("Iodat + iodida (standardisasi tiosulfat)",
     "IO3− + 5I− + 6H+ → 3I2 + 3H2O", "IO3− : I2 : S2O3²− = 1 : 3 : 6", 5, 5),
    ("Permanganat + Mn²+ (warna akhir memudar)",
     "2MnO4− + 3Mn²+ + 2H2O → 5MnO2(s) + 4H+", "—", 6, 6),
]
for nama, eq, ratio, ne, _ in reaksi:
    print(f"- {nama}\n    {eq}\n    nisbah: {ratio}   (elektron dipindahkan per persamaan: {ne*2 if 'oksalat' in nama or 'peroksida' in nama else ne})")

# cek neraca muatan & atom sederhana untuk dua reaksi permanganat
def cek(lhs, rhs):
    from collections import Counter
    a, b = Counter(), Counter()
    for side, ctr in ((lhs, a), (rhs, b)):
        for koef, comp in side:
            for k, v in comp.items():
                ctr[k] += koef * v
    return a == b
ok1 = cek([(2, {"Mn": 1, "O": 4, "q": -1}), (5, {"H": 2, "C": 2, "O": 4}), (6, {"H": 1, "q": 1})],
          [(2, {"Mn": 1, "q": 2}), (10, {"C": 1, "O": 2}), (8, {"H": 2, "O": 1})])
ok2 = cek([(2, {"Mn": 1, "O": 4, "q": -1}), (5, {"H": 2, "O": 2}), (6, {"H": 1, "q": 1})],
          [(2, {"Mn": 1, "q": 2}), (5, {"O": 2}), (8, {"H": 2, "O": 1})])
ok3 = cek([(1, {"O": 1, "Cl": 1, "q": -1}), (2, {"I": 1, "q": -1}), (2, {"H": 1, "q": 1})],
          [(1, {"Cl": 1, "q": -1}), (1, {"I": 2}), (1, {"H": 2, "O": 1})])
ok4 = cek([(1, {"I": 2}), (2, {"S": 2, "O": 3, "q": -2})], [(2, {"I": 1, "q": -1}), (1, {"S": 4, "O": 6, "q": -2})])
print(f"\nCek neraca atom + muatan: oksalat {ok1}, H2O2 {ok2}, OCl−/I− {ok3}, I2/S2O3 {ok4}")
print("Bilangan oksidasi: Mn +7 → +2 (5 e⁻); C +3 → +4 (2 e⁻ per H2C2O4); O −1 → 0 di H2O2 (2 e⁻);"
      " Cl +1 → −1 di OCl⁻ (2 e⁻); S rata-rata +2 → +2,5 (1 e⁻ per S2O3²⁻)")

print()
print("=" * 72)
print("2. Termodinamika vs kinetika: K raksasa, reaksi tetap lambat")
print("=" * 72)
dE = E0["MnO4-/Mn2+"] - E0["CO2/H2C2O4"]
print(f"MnO4−/oksalat: ΔE° = 1,51 − (−0,49) = {f(dE,2)} V, n = 10 → log K = {f(logK(10,dE),0)}")
dE = E0["MnO4-/Mn2+"] - E0["O2/H2O2"]
print(f"MnO4−/H2O2   : ΔE° = 1,51 − 0,682 = {f(dE,3)} V, n = 10 → log K = {f(logK(10,dE),0)}")
dE = E0["Ce4+/Ce3+ (1 M H2SO4, formal)"] - E0["Fe3+/Fe2+ (1 M H2SO4, formal)"]
print(f"Ce⁴+/Fe²+     : ΔE°' = 1,44 − 0,68 = {f(dE,2)} V, n = 1 → K = {f(10**logK(1,dE),2)}"
      "  (Skoog: 7 × 10^12)")
dE = E0["I3-/I-"] - E0["S4O6 2-/S2O3 2-"]
print(f"I3−/S2O3²−    : ΔE° = 0,536 − 0,08 = {f(dE,3)} V, n = 2 → log K = {f(logK(2,dE),1)}")
# 2MnO4- + 3Mn2+ : E(MnO4-/MnO2) − E(MnO2/Mn2+), n = 6
dE = E0["MnO4-/MnO2"] - E0["MnO2/Mn2+"]
print(f"2MnO4− + 3Mn²+ → 5MnO2: ΔE° = 1,695 − 1,23 = {f(dE,3)} V, n = 6 → log K = "
      f"{f(logK(6,dE),1)}  (Skoog: K ≈ 10^47; pudar hanya dalam ≈ 30 s)")
print("Catatan: E° intensif — tidak dikalikan koefisien; yang dikalikan hanya n di log K.")

print()
print("=" * 72)
print("3. Standardisasi KMnO4 dengan Na2C2O4 (data rekaan, prosedur Skoog §37F-2)")
print("=" * 72)
m_ox = 0.2500       # g Na2C2O4 (Skoog: 0,2–0,3 g untuk ≈ 0,02 M)
V_std = 37.25       # mL titik akhir (merah muda ≥ 30 s)
V_blk = 0.05        # mL blanko 250 mL H2SO4 1 M (rekaan)
n_ox = m_ox / M["Na2C2O4"] * 1000
n_mn = n_ox * 2 / 5
c_mn = n_mn / (V_std - V_blk)
print(f"{f(m_ox,4)} g Na2C2O4 / {f(M['Na2C2O4'],2)} = {f(n_ox,4)} mmol oksalat")
print(f"× 2/5 = {f(n_mn,4)} mmol MnO4−; V bersih {f(V_std,2)} − {f(V_blk,2)} = {f(V_std-V_blk,2)} mL")
print(f"c(KMnO4) = {f(c_mn,5)} M")
print(f"Pembanding Skoog Contoh 18-4: 0,1278 g / 0,13400 × 2/5 / 33,31 mL = "
      f"{f(0.1278/0.13400*2/5/33.31,5)} M (buku: 0,01145 M)")
c_mn = round(c_mn, 5)

# volume yang dibutuhkan untuk tampak ungu: Skoog 0,01–0,02 mL KMnO4 0,02 M dalam 100 mL
for v in (0.01, 0.02):
    print(f"Batas lihat: {f(v,2)} mL KMnO4 0,02 M dalam 100 mL → [MnO4−] ≈ {f(0.02*v/100.0,2)} M")
print(f"Satu tetes (0,05 mL) KMnO4 {f(c_mn,4)} M dalam 120 mL → [MnO4−] ≈ {f(c_mn*0.05/120,2)} M")

print()
print("=" * 72)
print("4. Kadar H2O2 antiseptik (label 3 %) — permanganometri, data rekaan")
print("=" * 72)
m_s = 5.000        # g antiseptik ditimbang
V_flask, V_aliq = 100.0, 25.00
V_t = 21.40        # mL KMnO4
n_mn_t = c_mn * V_t
n_h2o2 = n_mn_t * 5 / 2
n_tot = n_h2o2 * V_flask / V_aliq
m_h2o2 = n_tot * M["H2O2"] / 1000
pct = m_h2o2 / m_s * 100
print(f"{f(m_s,3)} g → labu {f(V_flask,1)} mL, alikuot {f(V_aliq,2)} mL (berisi {f(m_s*V_aliq/V_flask,4)} g sampel)")
print(f"KMnO4: {f(V_t,2)} mL × {f(c_mn,5)} M = {f(n_mn_t,4)} mmol")
print(f"H2O2 alikuot = {f(n_mn_t,4)} × 5/2 = {f(n_h2o2,4)} mmol; total × 4 = {f(n_tot,4)} mmol")
print(f"massa H2O2 = {f(n_tot,4)} × {f(M['H2O2'],2)} mg/mmol = {f(m_h2o2*1000,1)} mg → {f(pct,2)} % (b/b)")
V_exp = 0.03 * m_s * V_aliq / V_flask / M["H2O2"] * 1000 * 2 / 5 / c_mn
print(f"Bila tepat 3,00 %: dibutuhkan {f(V_exp,2)} mL → kadar terukur = {f(pct/3*100,1)} % dari label")
# volume oksigen: "10 volume"
n_O2_per_mL = 0.030 * 1.0 / M["H2O2"] / 2       # mol O2 per mL larutan 3 % (b/v)
print(f"3 % (b/v): 1 mL → {f(n_O2_per_mL*1000,4)} mmol O2 → {f(n_O2_per_mL*22414,2)} mL O2 (STP, 0 °C)"
      f" / {f(n_O2_per_mL*24465,2)} mL (25 °C) → istilah '10 volume'")

print()
print("=" * 72)
print("5. Klorin aktif pemutih (label ≈ 5 % NaOCl) — iodometri, data rekaan")
print("=" * 72)
c_thio = 0.1000
V_bl = 10.00; V_fl = 250.0; V_al = 25.00
V_thio = 12.60
n_thio = c_thio * V_thio
n_I2 = n_thio / 2
n_OCl = n_I2
bleach_mL = V_bl * V_al / V_fl
mg_NaOCl = n_OCl * M["NaOCl"]
mg_Cl2 = n_OCl * M["Cl2"]
pct_NaOCl = mg_NaOCl / 1000 / bleach_mL * 100
pct_Cl2 = mg_Cl2 / 1000 / bleach_mL * 100
print(f"{f(V_bl,2)} mL pemutih → {f(V_fl,1)} mL; alikuot {f(V_al,2)} mL = {f(bleach_mL,3)} mL pemutih asli")
print(f"+ KI berlebih + asam asetat → I2; tiosulfat {f(V_thio,2)} mL × {f(c_thio,4)} M = {f(n_thio,4)} mmol")
print(f"I2 = {f(n_I2,4)} mmol = OCl− {f(n_OCl,4)} mmol")
print(f"NaOCl = {f(n_OCl,4)} × {f(M['NaOCl'],2)} = {f(mg_NaOCl,2)} mg per {f(bleach_mL,1)} mL → {f(pct_NaOCl,2)} % (b/v)")
print(f"klorin aktif (sebagai Cl2, 1 OCl− ≙ 1 Cl2 ≙ 2 e⁻) = {f(n_OCl,4)} × {f(M['Cl2'],2)} = {f(mg_Cl2,2)} mg"
      f" → {f(pct_Cl2,2)} % (b/v)")
print(f"faktor NaOCl → klorin aktif = 70,90/74,44 = {f(M['Cl2']/M['NaOCl'],4)}")
for rho in (1.08,):
    print(f"bila massa jenis ≈ {f(rho,2)} g/mL (asumsi): NaOCl {f(pct_NaOCl/rho,2)} % (b/b)")
V_label = 0.05 * bleach_mL * 1000 / M["NaOCl"] * 2 / c_thio
print(f"Bila tepat 5,00 % (b/v) NaOCl: tiosulfat yang dibutuhkan {f(V_label,2)} mL")
print(f"→ terukur {f(pct_NaOCl/5*100,1)} % dari label 5 % (b/v)")
# standardisasi tiosulfat (Skoog Contoh 18-1)
c_t = 0.1210 / M["KIO3"] * 1000 * 6 / 41.64
print(f"Skoog Contoh 18-1: 0,1210 g KIO3 × 6 / 41,64 mL → c(Na2S2O3) = {f(c_t,5)} M (buku 0,08147 M)")
m_kio3 = 0.1000 * 40.00 / 6 * M["KIO3"] / 1000
print(f"Rancangan: KIO3 untuk ≈ 40 mL tiosulfat 0,1 M = {f(m_kio3,4)} g")

print()
print("=" * 72)
print("6. Vitamin C jus jeruk — iodimetri langsung, data rekaan")
print("=" * 72)
usda = {"jambu biji (guava) mentah": (228, 173044), "kiwi hijau": (92.7, 168153),
        "pepaya": (60.9, 169926), "stroberi": (58.8, 167762), "jeruk manis mentah": (53.2, 169097),
        "jus jeruk segar": (50.0, 169098), "nanas": (47.8, 169124), "mangga": (36.4, 169910),
        "jeruk keprok (tangerine)": (26.7, 169105), "tomat merah": (13.7, 170457), "apel berkulit": (4.6, 171688)}
for k, (v, i) in usda.items():
    print(f"  {k:28s} {f(v,1):>6} mg/100 g   (FDC {i})")
c_I2 = 0.00500
V_jus = 25.00
V_I2 = 13.60
n_asc = c_I2 * V_I2
mg_asc = n_asc * M["C6H8O6"]
per100 = mg_asc / V_jus * 100
print(f"\nI2 (sebagai I3−) {f(c_I2,5)} M; jus disaring {f(V_jus,2)} mL + kanji di awal; biru tetap pada {f(V_I2,2)} mL")
print(f"askorbat = {f(V_I2,2)} × {f(c_I2,5)} = {f(n_asc,4)} mmol × {f(M['C6H8O6'],2)} = {f(mg_asc,2)} mg")
print(f"→ {f(per100,1)} mg per 100 mL (USDA jus jeruk segar: 50 mg/100 g)")
V_usda = 50.0 * V_jus / 100 / M["C6H8O6"] / c_I2
print(f"Bila 50 mg/100 mL: butuh {f(V_usda,2)} mL I2 → terukur {f(per100/50*100,0)} % nilai USDA")
print(f"Satu gelas 200 mL jus seperti ini: {f(per100*2,0)} mg vitamin C")
print(f"Jambu biji 100 g setara jus berapa mL: {f(228/per100*100,0)} mL")

print()
print("=" * 72)
print("7. Kurva titrasi redoks: 50,00 mL Fe²+ 0,05000 M dengan Ce⁴+ 0,1000 M (1 M H2SO4)")
print("=" * 72)
EFe, ECe = E0["Fe3+/Fe2+ (1 M H2SO4, formal)"], E0["Ce4+/Ce3+ (1 M H2SO4, formal)"]
K = 10 ** ((ECe - EFe) / K_NERNST)

def E_FeCe(V, nFe=50.00 * 0.05000, cCe=0.1000, V0=50.00):
    """Neraca eksak: x = mmol bereaksi dari Fe²+ + Ce⁴+ ⇌ Fe³+ + Ce³+ (K dari E°')."""
    nCe = V * cCe
    # (x)(x) / ((nFe-x)(nCe-x)) = K → (K-1)x² − K(nFe+nCe)x + K nFe nCe = 0
    a, b, c = K - 1, -K * (nFe + nCe), K * nFe * nCe
    x = (-b - sqrt(b * b - 4 * a * c)) / (2 * a)
    if V == 0:
        return None
    fe2, fe3 = nFe - x, x
    return EFe - K_NERNST * log10(fe2 / fe3) if fe2 > 0 else None

print(f"K reaksi = 10^((1,44 − 0,68)/0,05916) = {f(K,2)}")
Eeq = (EFe + ECe) / 2
print(f"E ekivalen = (E°'Fe + E°'Ce)/2 = (0,68 + 1,44)/2 = {f(Eeq,2)} V")
print("V (mL) | E (V) eksak | Skoog Tabel 17-2")
skoog = {5.00: 0.64, 15.00: 0.69, 20.00: 0.72, 24.00: 0.76, 24.90: 0.82, 25.00: 1.06,
         25.10: 1.30, 26.00: 1.36, 30.00: 1.40}
for V in (1.00, 5.00, 12.50, 15.00, 20.00, 24.00, 24.90, 25.00, 25.10, 26.00, 30.00, 37.50, 50.00):
    E = E_FeCe(V)
    print(f"{f(V,2):>6} | {f(E,3):>6} | {f(skoog[V],2) if V in skoog else ''}")
print("Catatan: di separuh jalan (12,50 mL) E = E°'(Fe) = 0,68 V; di 2× (50,00 mL) E = E°'(Ce) = 1,44 V.")
print("Pengenceran 10× (Fe²+ 0,005 M, Ce⁴+ 0,01 M):")
for V in (5.00, 24.90, 25.10):
    print(f"  {f(V,2)} mL → {f(E_FeCe(V, nFe=50*0.005, cCe=0.01),3)} V (sama: kurva tak bergantung pengenceran)")
lompat = E_FeCe(25.10) - E_FeCe(24.90)
print(f"Lompatan 24,90 → 25,10 mL (±0,4 % dari ekivalen): {f(lompat,2)} V")
print(f"Ferroin berubah di ≈ {f(E0['ferroin (1 M H2SO4, transisi)'],2)} V → di dalam lompatan (0,82–1,30 V)")

print()
print("Kurva tak simetris: Fe²+ dengan MnO4− ([H+] = 1 M)")
E_MnO4 = E0["MnO4-/Mn2+"]
Eeq_mn = (5 * E_MnO4 + EFe) / 6
print(f"E ekivalen = (5 × 1,51 + 0,68)/6 = {f(Eeq_mn,2)} V (bukan rata-rata biasa {f((E_MnO4+EFe)/2,3)} V)")
# 50 mL Fe2+ 0,05 M (2,5 mmol) dengan MnO4- 0,02 M: ekivalen 25,00 mL (0,5 mmol)
for V in (26.00, 30.00):
    xs = V * 0.02 - 0.5      # mmol MnO4- berlebih
    mn2 = 0.5
    E = E_MnO4 - K_NERNST / 5 * log10(mn2 / xs)
    print(f"  {f(V,2)} mL KMnO4 0,02 M → E = {f(E,3)} V (naik pelan: n = 5 meratakan sisi setelah ekivalen)")

print()
print("=" * 72)
print("8. Potensial formal Fe³+/Fe²+ (Skoog Lampiran 5)")
print("=" * 72)
for k in ("Fe3+/Fe2+", "Fe3+/Fe2+ (1 M HCl, formal)", "Fe3+/Fe2+ (1 M HClO4, formal)",
          "Fe3+/Fe2+ (1 M H2SO4, formal)"):
    print(f"  {k:32s} {f(E0[k],3)} V")
d = E0["Fe3+/Fe2+"] - E0["Fe3+/Fe2+ (1 M H2SO4, formal)"]
print(f"Selisih standar − formal (H2SO4) = {f(d,3)} V → setara rasio efektif "
      f"[Fe³+]bebas/[Fe²+]bebas turun {f(10**(d/K_NERNST),0)} kali (Fe³+ lebih kuat dikompleks sulfat)")

print()
print("=" * 72)
print("9. Mengapa harus asam: potensial MnO4−/Mn²+ terhadap pH (rasio [MnO4−]/[Mn²+] = 1)")
print("=" * 72)
for pH in (0, 1, 2, 3):
    E = E_MnO4 - K_NERNST * 8 / 5 * pH
    print(f"  pH {pH}: E = 1,51 − 0,0947 × pH = {f(E,3)} V")
print("Setiap kenaikan 1 satuan pH menurunkan E sebesar 8/5 × 0,05916 = "
      f"{f(8/5*K_NERNST,4)} V; di bawah ≈ 0,1 M asam kuat produk bisa Mn(III)/MnO2 (Skoog).")
