#!/usr/bin/env python3
"""Hitungan Ep. 6 "Garam yang Bersembunyi" (Seni Mengukur, Kimia Analitik).

Jalankan: python3 hitung.py
Semua tetapan 25 °C. Ksp utama = Skoog ed. 10 Lampiran 2 (hlm. A-7);
pembanding = CRC Handbook (lewat kotak info Wikipedia). Keluaran memakai koma desimal.
"""
from math import sqrt, log10

def f(x, n=3):
    """Format angka dengan koma desimal (notasi ilmiah bila perlu)."""
    if x == 0:
        return "0"
    if abs(x) < 1e-2 or abs(x) >= 1e5:
        s = f"{x:.{n-1}e}"
        m, e = s.split("e")
        return f"{m.replace('.', ',')} × 10^{int(e)}"
    return f"{x:.{n}f}".replace(".", ",")

# --- tetapan -------------------------------------------------------------
KSP = {  # Skoog Lampiran 2
    "AgCl": 1.82e-10, "Ag2CrO4": 1.2e-12, "AgSCN": 1.1e-12, "AgBr": 5.0e-13,
}
KSP_CRC = {"AgCl": 1.77e-10, "Ag2CrO4": 1.12e-12}
M = {"NaCl": 58.44, "AgCl": 143.32, "Ag2CrO4": 331.73, "K2CrO4": 194.19,
     "Na": 22.990, "Cl": 35.45}
LOG_K1_FeSCN = 3.02  # Skoog Lampiran 4

print("=" * 70)
print("1. Paradoks: Ksp lebih kecil, tetapi lebih larut")
print("=" * 70)
for tag, ksp in (("Skoog", KSP), ("CRC", KSP_CRC)):
    s_cl = sqrt(ksp["AgCl"])                 # AgCl ⇌ Ag+ + Cl−   : Ksp = s²
    s_cr = (ksp["Ag2CrO4"] / 4) ** (1 / 3)   # Ag2CrO4 ⇌ 2Ag+ + CrO4²− : Ksp = 4s³
    print(f"[{tag}] AgCl    Ksp {f(ksp['AgCl'])}  s = {f(s_cl)} M "
          f"= {f(s_cl*M['AgCl']*1000,2)} mg/L  [Ag+] jenuh = {f(s_cl)} M")
    print(f"[{tag}] Ag2CrO4 Ksp {f(ksp['Ag2CrO4'])}  s = {f(s_cr)} M "
          f"= {f(s_cr*M['Ag2CrO4']*1000,1)} mg/L  [Ag+] jenuh = {f(2*s_cr)} M")
    print(f"[{tag}] rasio s(Ag2CrO4)/s(AgCl) = {f(s_cr/s_cl,2)} kali (mol); "
          f"{f(s_cr*M['Ag2CrO4']/(s_cl*M['AgCl']),1)} kali (massa)")

print()
print("=" * 70)
print("2. Kurva pengendapan (Skoog Contoh 15-1): 50,00 mL NaCl 0,05000 M + AgNO3 0,1000 M")
print("=" * 70)
def pAg_curve(V, n_cl=50.00*0.05000, c_ag=0.1000, V0=50.00, ksp=KSP["AgCl"]):
    """Neraca eksak: [Ag+] − [Cl−] = (n_Ag − n_Cl)/V_tot, [Ag+][Cl−] = Ksp."""
    Vt = V0 + V
    d = (V * c_ag - n_cl) / Vt
    ag = (d + sqrt(d * d + 4 * ksp)) / 2
    return -log10(ag), ag, ksp / ag
for V in (0.01, 10.00, 20.00, 24.00, 24.90, 25.00, 25.10, 26.00, 30.00, 40.00):
    p, ag, cl = pAg_curve(V)
    print(f"V = {f(V,2):>6} mL   pAg = {f(p,2)}   pCl = {f(-log10(cl),2)}")
print("Skoog Tabel 15-2: 10 → 8,14 · 20 → 7,59 · 24 → 6,87 · 25 → 4,87 · 26 → 2,88 · 30 → 2,20 · 40 → 1,78")

print()
print("=" * 70)
print("3. Kapan Ag2CrO4 mulai mengendap? (benang merah)")
print("=" * 70)
# Contoh titrasi ikan asin (bagian 5): alikuot 25,00 mL + 25 mL air + 1 mL K2CrO4 5 % (b/v)
# + ±13,2 mL titran → volume akhir ≈ 64 mL
n_CrO4 = 1.0 * 0.05 / M["K2CrO4"]          # 1 mL × 0,05 g/mL
V_end = (25.00 + 25 + 1 + 13.2) / 1000     # L
c_CrO4 = n_CrO4 / V_end
print(f"K2CrO4 5 % (b/v), 1 mL = {f(n_CrO4*1e3,3)} mmol; volume akhir {f(V_end*1e3,1)} mL "
      f"→ [CrO4²−] ≈ {f(c_CrO4)} M")
ag_eq = sqrt(KSP["AgCl"])
c_ideal = KSP["Ag2CrO4"] / ag_eq**2
print(f"[Ag+] di titik ekivalen = √Ksp(AgCl) = {f(ag_eq)} M (pAg {f(-log10(ag_eq),2)})")
print(f"[CrO4²−] yang membuat Ag2CrO4 mulai tepat di ekivalen = {f(c_ideal)} M (terlalu kuning)")

def mohr_error(c_cro4, V_L, ksp_cl=KSP["AgCl"], ksp_cr=KSP["Ag2CrO4"]):
    ag = sqrt(ksp_cr / c_cro4)       # [Ag+] saat Ag2CrO4 mulai
    cl = ksp_cl / ag
    excess = (ag - cl) * V_L         # mol Ag+ berlebih terhadap Cl− (neraca)
    return ag, cl, excess

# di awal titrasi contoh: 1,315 mmol Cl− dalam 25 + 25 + 1 = 51 mL
cl0 = 1.315e-3 / 0.051
print(f"\nAwal titrasi contoh: [Cl−] ≈ {f(cl0)} M")
print(f"  [Ag+] untuk mulai AgCl     = Ksp/[Cl−]        = {f(KSP['AgCl']/cl0)} M")
print(f"  [Ag+] untuk mulai Ag2CrO4  = √(Ksp/[CrO4²−])  = {f(sqrt(KSP['Ag2CrO4']/c_CrO4))} M")
print(f"  → AgCl butuh Ag+ {sqrt(KSP['Ag2CrO4']/c_CrO4)/(KSP['AgCl']/cl0):.0f} kali lebih sedikit")

ag, cl, ex = mohr_error(c_CrO4, V_end)
print(f"\nSaat Ag2CrO4 mulai: [Ag+] = {f(ag)} M (pAg {f(-log10(ag),2)}), [Cl−] sisa = {f(cl)} M")
n_cl_total = 1.315e-3
frac_left = cl * V_end / n_cl_total
print(f"  Cl− yang belum mengendap = {f(frac_left*100,4)} % → sudah mengendap {f(100-frac_left*100,4)} %")
print(f"  Ag+ berlebih (galat teoretis) = {f(ex*1e3,4)} mmol = {f(ex/0.1000*1e3,4)} mL AgNO3 0,1000 M "
      f"= {f(ex/0.1000*1e3/13.20*100,3)} % dari 13,20 mL")

print("\nVariasi [CrO4²−] (volume akhir sama):")
for c in (1e-3, 2.5e-3, 4.0e-3, 6.6e-3, 1e-2):
    ag, cl, ex = mohr_error(c, V_end)
    print(f"  [CrO4²−] = {f(c)} M → pAg akhir {f(-log10(ag),2)}, galat {f(ex/0.1*1e3,4)} mL "
          f"({'+' if ex>=0 else ''}{f(ex/0.1*1e3/13.20*100,3)} %)")

print()
print("=" * 70)
print("4. Kenapa pH 7–10? Kromat diprotonasi di larutan asam")
print("=" * 70)
for pKa in (5.9, 6.5):
    print(f"pKa HCrO4− = {f(pKa,1)} (⚠ nilai literatur berbeda-beda)")
    for pH in (4, 5, 6, 7, 8, 10):
        alpha = 1 / (1 + 10 ** (pKa - pH))
        ag, cl, ex = mohr_error(c_CrO4 * alpha, V_end)
        print(f"  pH {pH:>2}: fraksi CrO4²− = {f(alpha,3)}  [Ag+] perlu {f(ag)} M  "
              f"galat {f(ex/0.1*1e3,3)} mL ({f(ex/0.1*1e3/13.20*100,2)} %)")
print("(dikromat diabaikan → galat sebenarnya di pH rendah lebih besar lagi)")

print()
print("=" * 70)
print("5. Contoh hitungan kadar garam ikan asin (data rekaan yang konsisten)")
print("=" * 70)
m_sample = 5.000      # g ikan asin dihaluskan
V_flask = 250.0       # mL
V_aliq = 25.00        # mL
c_Ag = 0.1000         # M (distandardisasi dengan NaCl standar primer)
V_tit = 13.20         # mL, titik akhir merah bata
V_blank = 0.05        # mL, blanko indikator (suspensi CaCO3 + K2CrO4)
V_net = V_tit - V_blank
n_aliq = c_Ag * V_net / 1000
n_tot = n_aliq * V_flask / V_aliq
m_NaCl = n_tot * M["NaCl"]
pct = m_NaCl / m_sample * 100
print(f"V bersih = {f(V_tit,2)} − {f(V_blank,2)} = {f(V_net,2)} mL")
print(f"mol Ag+ = mol Cl− (alikuot) = {f(n_aliq*1e3,4)} mmol")
print(f"faktor pengenceran {V_flask:.0f}/{V_aliq:.0f} = {V_flask/V_aliq:.0f} → total {f(n_tot*1e3,3)} mmol")
print(f"massa NaCl = {f(n_tot*1e3,3)} mmol × {f(M['NaCl'],2)} mg/mmol = {f(m_NaCl,4)} g")
print(f"kadar garam (sebagai NaCl) = {f(m_NaCl,4)}/{f(m_sample,3)} × 100 % = {f(pct,2)} % (b/b)")
print(f"tanpa koreksi blanko: {f(c_Ag*V_tit/1000*10*M['NaCl']/m_sample*100,2)} %")

# Volhard dengan sampel yang sama
V_AgEx = 25.00
n_Ag = c_Ag * V_AgEx / 1000
n_left = n_Ag - n_aliq
c_SCN = 0.1000
V_SCN = n_left / c_SCN * 1000
print(f"\nVolhard: + {f(V_AgEx,2)} mL AgNO3 0,1000 M = {f(n_Ag*1e3,4)} mmol; "
      f"terpakai Cl− {f(n_aliq*1e3,4)} mmol; sisa {f(n_left*1e3,4)} mmol")
print(f"  → dititrasi balik KSCN 0,1000 M: {f(V_SCN,2)} mL (AgCl disaring dulu)")
K_conv = KSP["AgCl"] / KSP["AgSCN"]
print(f"  AgCl + SCN− ⇌ AgSCN + Cl−: K = Ksp(AgCl)/Ksp(AgSCN) = {f(K_conv,0)}")
extra = 0.20
pct_low = c_Ag * (V_AgEx - (V_SCN + extra)) / 1000 * 10 * M["NaCl"] / m_sample * 100
print(f"  bila AgCl tidak disaring dan SCN− terpakai lebih {f(extra,2)} mL (ilustrasi): "
      f"kadar terbaca {f(pct_low,2)} % (terlalu rendah)")
print(f"  Fe(SCN)²⁺: log K1 = {f(LOG_K1_FeSCN,2)} → K1 = {f(10**LOG_K1_FeSCN,0)}")

print()
print("=" * 70)
print("6. Jembatan harian: natrium")
print("=" * 70)
fNa = M["Na"] / M["NaCl"]
print(f"fraksi Na dalam NaCl = {f(fNa,3)} → 1 g garam = {f(fNa*1000,0)} mg Na (WHO membulatkan 400 mg)")
print(f"WHO: < 2000 mg Na ≈ {f(2/fNa,2)} g garam (WHO: < 5 g)")
for piece in (10, 20):
    salt = piece * pct / 100
    print(f"ikan asin {piece} g berkadar {f(pct,1)} %: garam {f(salt,2)} g = Na {f(salt*fNa*1000,0)} mg "
          f"= {f(salt*fNa/2*100,0)} % batas WHO")
print(f"Rata-rata dunia 2021 (WHO): 4278 mg Na ≈ {f(4.278/fNa,1)} g garam")
