#!/usr/bin/env python3
"""Hitungan Ep. 7 "Menimbang yang Tak Terlihat" (Seni Mengukur, Kimia Analitik).

Jalankan: python3 hitung.py
Berat atom: CIAAW, nilai ringkas (abridged) 2021 — ciaaw.org/abridged-atomic-weights.htm.
Ksp BaSO4 = 1,1 × 10^-10 (Skoog ed. 10 Lampiran 2, hlm. A-6); pembanding CRC 1,0842 × 10^-10.
Ka2 H2SO4 = 1,02 × 10^-2 (Skoog Feature 13-1, hlm. 333). Keluaran memakai koma desimal.
Semua massa contoh (pupuk ZA, cawan) adalah data REKAAN yang dibuat konsisten.
"""
from math import sqrt

def f(x, n=4):
    """Angka dengan koma desimal (notasi ilmiah bila sangat kecil/besar)."""
    if x == 0:
        return "0"
    if abs(x) < 1e-3 or abs(x) >= 1e5:
        m, e = f"{x:.{n-1}e}".split("e")
        return f"{m.replace('.', ',')} × 10^{int(e)}"
    return f"{x:.{n}f}".replace(".", ",")

# --- berat atom (CIAAW abridged) ------------------------------------------
A = {"Ba": 137.33, "S": 32.06, "O": 15.999, "H": 1.008, "N": 14.007,
     "Cl": 35.45, "K": 39.098, "Fe": 55.845}
M = {
    "BaSO4": A["Ba"] + A["S"] + 4 * A["O"],
    "SO4": A["S"] + 4 * A["O"],
    "NH42SO4": 2 * (A["N"] + 4 * A["H"]) + A["S"] + 4 * A["O"],
    "BaCl2": A["Ba"] + 2 * A["Cl"],
    "BaCl2_2H2O": A["Ba"] + 2 * A["Cl"] + 2 * (2 * A["H"] + A["O"]),
    "BaNO32": A["Ba"] + 2 * (A["N"] + 3 * A["O"]),
    "K2SO4": 2 * A["K"] + A["S"] + 4 * A["O"],
    "Fe2O3": 2 * A["Fe"] + 3 * A["O"],
}
KSP = 1.1e-10
KSP_CRC = 1.0842e-10
KA2 = 1.02e-2

print("=" * 72)
print("0. Massa molar (g/mol)")
print("=" * 72)
for k, v in M.items():
    print(f"  {k:<11} {f(v, 3)}")

print()
print("=" * 72)
print("1. Faktor gravimetri")
print("=" * 72)
FG_SO4 = M["SO4"] / M["BaSO4"]
FG_S = A["S"] / M["BaSO4"]
print(f"  SO4/BaSO4 = {f(M['SO4'],3)} / {f(M['BaSO4'],3)} = {f(FG_SO4,5)}")
print(f"  S/BaSO4   = {f(A['S'],2)} / {f(M['BaSO4'],3)} = {f(FG_S,5)}")
S_MAKS = A["S"] / M["NH42SO4"] * 100
print(f"  Amonium sulfat murni: S = {f(S_MAKS,2)} %, SO4 = {f(M['SO4']/M['NH42SO4']*100,2)} %"
      "  ← batas atas fisik untuk pupuk ZA")

print()
print("=" * 72)
print("2. Kelarutan BaSO4 dan kehilangan saat mencuci")
print("=" * 72)
for tag, ksp in (("Skoog", KSP), ("CRC", KSP_CRC)):
    s = sqrt(ksp)
    print(f"  [{tag}] s = √Ksp = {f(s)} M = {f(s*M['BaSO4']*1000,2)} mg/L")
s = sqrt(KSP)
mg_L = s * M["BaSO4"] * 1000
m_endapan = 0.4355  # g, contoh di bagian 4
for V in (60, 100, 300):
    hilang = mg_L * V / 1000
    print(f"  air murni jenuh {V:>3} mL → hilang maks. {f(hilang,3)} mg "
          f"= {f(hilang/1000/m_endapan*100,3)} % dari {f(m_endapan,4)} g")
# ion senama: kelebihan Ba2+ di cairan induk
for ba in (0.005, 0.01):
    s_ci = KSP / ba
    print(f"  dengan Ba2+ berlebih {f(ba,3)} M: s = {f(s_ci)} M → 300 mL melarutkan "
          f"{f(s_ci*0.300*M['BaSO4']*1000,4)} mg (abaikan)")
# asam: SO4 2- + H+ ⇌ HSO4-  → s = √(Ksp(1 + [H+]/Ka2))
for h in (0.01, 0.05, 0.1, 1.0):
    s_h = sqrt(KSP * (1 + h / KA2))
    print(f"  dalam HCl {f(h,2)} M: s = {f(s_h)} M = {f(s_h*M['BaSO4']*1000,2)} mg/L "
          f"(× {f(s_h/s,2)})")
print("  Elektrolit: dalam KNO3 0,02 M kelarutan BaSO4 ≈ 2× air murni (Skoog §8A-1)")

print()
print("=" * 72)
print("3. Lewat jenuh relatif (von Weimarn, ilustrasi orde besaran)")
print("=" * 72)
def rss(Q, S):
    return (Q - S) / S
for ket, Q, S in (("tetes BaCl2 pekat ke larutan dingin (Q lokal 0,01 M)", 0.01, s),
                  ("panas, encer, asam 0,05 M, tetes pelan (Q 0,001 M)", 0.001,
                   sqrt(KSP * (1 + 0.05 / KA2)))):
    print(f"  {ket}: S = {f(S)} M → (Q−S)/S ≈ {f(rss(Q,S),0)}")
print("  (pengaruh suhu pada S tidak dihitung: tidak ada data Ksp panas di sumber yang dibuka)")

print()
print("=" * 72)
print("4. Contoh lengkap: belerang dalam pupuk ZA (data rekaan)")
print("=" * 72)
# kadar air dulu
m_basah, m_kering = 2.0000, 1.9920
air = (m_basah - m_kering) / m_basah * 100
print(f"  Susut pengeringan 105 °C: {f(m_basah)} g → {f(m_kering)} g → {f(air,2)} %")
# penimbangan cuplikan (selisih botol timbang)
botol_awal, botol_akhir = 12.3456, 12.0956
m_sampel = botol_awal - botol_akhir
print(f"  Cuplikan kering (selisih): {f(botol_awal)} − {f(botol_akhir)} = {f(m_sampel)} g")
cawan = [21.4736, 21.4734, 21.4733]
cawan_isi = [21.9112, 21.9091, 21.9088]
print(f"  Cawan kosong (pijar berulang): {', '.join(f(x) for x in cawan)} g "
      f"(selisih akhir {f((cawan[-2]-cawan[-1])*1000,1)} mg)")
print(f"  Cawan + BaSO4: {', '.join(f(x) for x in cawan_isi)} g "
      f"(selisih akhir {f((cawan_isi[-2]-cawan_isi[-1])*1000,1)} mg; syarat ≤ 0,2–0,3 mg)")
m_BaSO4 = round(cawan_isi[-1] - cawan[-1], 4)
n = m_BaSO4 / M["BaSO4"]
pSO4 = m_BaSO4 * FG_SO4 / m_sampel * 100
pS = m_BaSO4 * FG_S / m_sampel * 100
print(f"  m BaSO4 = {f(m_BaSO4)} g = {f(n*1000,3)} mmol")
print(f"  % SO4 = {f(m_BaSO4)} × {f(FG_SO4,5)} / {f(m_sampel)} × 100 = {f(pSO4,2)} %")
print(f"  % S   = {f(m_BaSO4)} × {f(FG_S,5)} / {f(m_sampel)} × 100 = {f(pS,2)} % (basis kering)")
print(f"  setara amonium sulfat: {f(pS/S_MAKS*100,1)} %")
print(f"  basis 'seperti diterima' (air {f(air,2)} %): S = {f(pS*(1-air/100),2)} %")
print(f"  tanpa koreksi kering (seolah sampel basah ditimbang & dianggap kering): selisih {f(pS*air/100,3)} poin")
# ketidakpastian neraca
print(f"  neraca 0,1 mg pada {f(m_BaSO4)} g: 1 bagian per {f(m_BaSO4/0.0001,0)} "
      f"(≈ {f(0.0001/m_BaSO4*100,3)} %)")
# reagen
n_BaCl2 = 0.60 / M["BaCl2_2H2O"]
print(f"  BaCl2·2H2O 0,60 g = {f(n_BaCl2*1000,3)} mmol vs SO4 {f(n*1000,3)} mmol "
      f"→ berlebih {f((n_BaCl2/n-1)*100,0)} %")
# cawan panas
print(f"  cawan ditimbang panas: galat hingga 10–15 mg (Skoog §36D) = "
      f"{f(10/1000/m_BaSO4*100,1)}–{f(15/1000/m_BaSO4*100,1)} % relatif")

print()
print("=" * 72)
print("5. Kopresipitasi: misteri dua mahasiswa (benang merah)")
print("=" * 72)
def persen_S(m):
    return m * FG_S / m_sampel * 100
# A: BaCl2 tersumbat (oklusi) — tamu tanpa sulfat → galat positif
tamu_A = 0.0122
mA = m_BaSO4 + tamu_A
print(f"  Mahasiswa A: + {f(tamu_A*1000,1)} mg BaCl2 tersumbat → {f(mA)} g → S = {f(persen_S(mA),2)} % "
      f"(> {f(S_MAKS,2)} % = mustahil)")
# B: sebagian sulfat ikut sebagai (NH4)2SO4 lalu menguap saat dipijar → galat negatif
n_hilang = 0.057e-3  # mol sulfat yang terbawa sebagai amonium sulfat
mB = m_BaSO4 - n_hilang * M["BaSO4"]
print(f"  Mahasiswa B: {f(n_hilang*1000,3)} mmol SO4 terbawa sebagai (NH4)2SO4 "
      f"({f(n_hilang*M['NH42SO4']*1000,1)} mg) → menguap saat dipijar → "
      f"BaSO4 kurang {f(n_hilang*M['BaSO4']*1000,1)} mg → {f(mB)} g → S = {f(persen_S(mB),2)} %")
mAB = m_BaSO4 + tamu_A - n_hilang * M["BaSO4"]
print(f"  Keduanya sekaligus (saling meniadakan): {f(mAB)} g → S = {f(persen_S(mAB),2)} % "
      f"(benar {f(pS,2)} %) — cocok karena kebetulan")
print()
print("  Arah galat per 1 mmol 'tamu' (penentuan SO4 sebagai BaSO4):")
rows = [
    ("BaCl2 tersumbat (anion asing)", +M["BaCl2"]),
    ("Ba(NO3)2 tersumbat (anion asing)", +M["BaNO32"]),
    ("K2SO4 menggantikan BaSO4", M["K2SO4"] - M["BaSO4"]),
    ("(NH4)2SO4 menguap saat dipijar", -M["BaSO4"]),
    ("Fe2(SO4)3 basa → Fe2O3 (per 3 SO4, dihitung per SO4)", M["Fe2O3"]/3 - M["BaSO4"]),
]
for ket, dm in rows:
    print(f"   {ket:<52} {'+' if dm>0 else '−'}{f(abs(dm),1)} mg per mmol "
          f"→ {'TINGGI' if dm>0 else 'RENDAH'}")

print()
print("=" * 72)
print("6. Sulfat dalam air minum")
print("=" * 72)
for c in (10, 250, 500):
    for V in (200, 1000):
        mb = c * V / 1000 / FG_SO4
        print(f"  {c:>3} mg/L × {V:>4} mL → BaSO4 {f(mb,1)} mg")
print("  WHO (2004): ambang rasa terendah ≈ 250 mg/L (Na2SO4); keluhan rasa makin mungkin > 500 mg/L;")
print("  efek pencahar 1000–1200 mg/L; tidak ada nilai pedoman berbasis kesehatan.")
print("  Metode gravimetri BaSO4 cocok untuk sulfat > 10 mg/L (ISO 1990, dikutip WHO).")

print()
print("=" * 72)
print("7. Richards: timbal radioaktif vs timbal biasa (JACS 1914, 36, 1329)")
print("=" * 72)
pb = {"uraninit North Carolina": 206.40, "pitchblende Joachimsthal": 206.57,
      "karnotit Colorado": 206.59, "torianit Sri Lanka": 206.82,
      "pitchblende Inggris": 206.86, "timbal biasa": 207.15}
for k, v in pb.items():
    print(f"  {k:<26} {f(v,2)}")
d = pb["timbal biasa"] - pb["uraninit North Carolina"]
print(f"  selisih terbesar {f(d,2)} = {f(d/pb['timbal biasa']*100,2)} % ")
# berapa besar beda massa AgCl yang harus terlihat? PbCl2 + 2Ag+ → 2AgCl
for ArPb in (206.40, 207.15):
    MPbCl2 = ArPb + 2 * A["Cl"]
    rasio = 2 * (107.87 + A["Cl"]) / MPbCl2
    print(f"  Ar(Pb) = {f(ArPb,2)}: 1,0000 g PbCl2 → {f(rasio,4)} g AgCl")
r1 = 2*(107.87+A['Cl'])/(206.40+2*A['Cl']); r2 = 2*(107.87+A['Cl'])/(207.15+2*A['Cl'])
print(f"  beda {f((r1-r2)*1000,1)} mg per gram PbCl2 — ≈ {f((r1-r2)/0.0001,0)} kali resolusi neraca 0,1 mg")
print(f"  CIAAW kini: S = [32,059; 32,076] (rentang), Pb = [206,14; 207,94] (sejak 2020)")
