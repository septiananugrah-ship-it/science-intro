#!/usr/bin/env python3
"""Semua angka untuk Ep. 4 "Si Keras Kepala" (seri Seni Mengukur): larutan penyangga.

Konvensi (sama dengan Ep. 3): 25 °C, Kw = 1,00e-14, tetapan Skoog ed. 10 Lampiran 3
(hlm. A-8): HOAc Ka 1,75e-5 · H3PO4 7,11e-3 / 6,32e-8 / 4,5e-13 · H2CO3 (CO2 total)
4,45e-7 / 4,69e-11 · HOCl 3,0e-8 · asam sitrat 7,45e-4 / 1,73e-5 / 4,02e-7.
pH eksak = neraca muatan lengkap (bisection), kecuali bila disebut "HH" (Henderson–Hasselbalch)
atau "Davies" (koreksi kekuatan ion). Darah memakai pKa' 6,1 (nilai semu fisiologis plasma 37 °C,
bukan tetapan termodinamika 25 °C) dan kelarutan CO2 0,03 mmol/(L·mmHg).

Pakai:  python3 hitung.py
"""
import math

KW = 1.00e-14
KA_HOAC = 1.75e-5
KA_PO4 = (7.11e-3, 6.32e-8, 4.5e-13)
KA_CO3 = (4.45e-7, 4.69e-11)
KA_HOCL = 3.0e-8
KA_CIT = (7.45e-4, 1.73e-5, 4.02e-7)
PKA_BLOOD = 6.1          # pKa' semu, plasma 37 °C
S_CO2 = 0.03             # mmol/(L·mmHg)

pk = lambda k: -math.log10(k)


def bisect_ph(f, lo=-1.0, hi=15.0):
    """f(pH) = muatan positif − muatan negatif; menurun terhadap pH."""
    for _ in range(200):
        mid = 0.5 * (lo + hi)
        if f(mid) > 0:
            lo = mid
        else:
            hi = mid
    return 0.5 * (lo + hi)


def alphas(ph, kas):
    """Fraksi spesies H_nA ... A^n− (Skoog Feature 13-3)."""
    h = 10 ** -ph
    n = len(kas)
    terms, prod = [], 1.0
    for i in range(n + 1):
        terms.append(prod * h ** (n - i))
        if i < n:
            prod *= kas[i]
    d = sum(terms)
    return [t / d for t in terms]


def ph_monoprotic(ct, na, cl=0.0, ka=KA_HOAC):
    """Larutan asam lemah HA total ct, kation Na+ na (dari NaA/NaOH), anion Cl− cl (dari HCl)."""
    def f(ph):
        h = 10 ** -ph
        a = ct * ka / (ka + h)
        return h + na - KW / h - cl - a
    return bisect_ph(f)


def ph_strong(cacid):
    """Asam kuat (cacid > 0) atau basa kuat (cacid < 0) dalam air, eksak."""
    return bisect_ph(lambda ph: 10 ** -ph - KW / 10 ** -ph - cacid)


def hh(ka, base, acid):
    return pk(ka) + math.log10(base / acid)


def davies_logg(z, I, A=0.509):
    s = math.sqrt(I)
    return -A * z * z * (s / (1 + s) - 0.3 * I)


def head(t):
    print("\n== " + t + " ==")


# ---------------------------------------------------------------- 1. eksperimen pembuka
head("1. 1,00 mL HCl 1,00 M ke dalam 100,0 mL (V total 101,0 mL)")
V = 0.1010
n_hcl = 1.00e-3
ph_w0, ph_w1 = 7.00, ph_strong(n_hcl / V)
print(f"air murni        : {ph_w0:.2f} → {ph_w1:.2f}  (ΔpH {ph_w1-ph_w0:+.2f}); [H3O+] naik {10**(ph_w0-ph_w1):,.0f}×")
ph_wb = ph_strong(-n_hcl / V)
print(f"(pembanding: 1,00 mL NaOH 1,00 M ke air → pH {ph_wb:.2f})")
for c in (0.100, 0.0100):
    n = c * 0.1000
    p0 = ph_monoprotic(2 * c, c)
    p1 = ph_monoprotic(2 * n / V, n / V, n_hcl / V)
    pb = ph_monoprotic(2 * n / V, (n + n_hcl) / V)     # + 1 mL NaOH 1 M
    hh1 = hh(KA_HOAC, n - n_hcl, n + n_hcl) if n > n_hcl else float('nan')
    print(f"asetat {c:.3f}/{c:.3f} M: {p0:.2f} → {p1:.2f} (ΔpH {p1-p0:+.2f}); HH {hh1:.2f}; + NaOH → {pb:.2f}")
r_h = 10 ** (4.76 - 4.67)
print(f"[H3O+] dalam penyangga 0,1 M naik hanya ≈ {10**(ph_monoprotic(0.2,0.1)-ph_monoprotic(0.02/V,0.01/V,n_hcl/V)):.2f}×")
print(f"perbandingan mol sesudah: HOAc 11,0 mmol / OAc− 9,0 mmol")

# ---------------------------------------------------------------- 2. HH dan pengenceran
head("2. Henderson–Hasselbalch: rasio vs pH, pengenceran, batas berlaku")
for r in (0.1, 0.5, 1, 2, 10):
    print(f"[A-]/[HA] = {r:>4}: pH = pKa {math.log10(r):+.2f} → asetat {hh(KA_HOAC, r, 1):.2f}")
print(f"fraksi A− pada pH = pKa+1: {10/11*100:.0f} %")
print("pengenceran penyangga asetat 1:1 (eksak):")
for c in (1.0, 0.1, 0.01, 1e-3, 1e-4, 1e-5):
    print(f"  {c:g} M + {c:g} M → pH {ph_monoprotic(2*c, c):.3f}   (HH 4,757)")
c_a, c_b = 0.100, 1.0e-4
p_ex = ph_monoprotic(c_a + c_b, c_b)
print(f"rasio timpang 0,100 M HOAc + 1,0e-4 M NaOAc: HH {hh(KA_HOAC, c_b, c_a):.2f} vs eksak {p_ex:.2f}")
c_a, c_b = 1.0e-4, 0.100
print(f"rasio timpang 1,0e-4 M HOAc + 0,100 M NaOAc: HH {hh(KA_HOAC, c_b, c_a):.2f} vs eksak {ph_monoprotic(c_a + c_b, c_b):.2f}")

# ---------------------------------------------------------------- 3. kapasitas
head("3. Kapasitas penyangga β = 2,303([H+] + [OH−] + C·Ka·[H+]/(Ka+[H+])²)")
def beta(ph, C, ka=KA_HOAC):
    h = 10 ** -ph
    return 2.303 * (h + KW / h + C * ka * h / (ka + h) ** 2)
for C in (0.2, 0.02):
    bmax = beta(pk(KA_HOAC), C)
    print(f"C total {C} M: β maks (pH = pKa) = {bmax:.4f} mol/(L·pH)  (≈ 0,576·C = {0.576*C:.4f})")
    for d in (1, 2):
        print(f"   pada pH = pKa ± {d}: β = {beta(pk(KA_HOAC)+d, C):.4f} ({beta(pk(KA_HOAC)+d, C)/bmax*100:.0f} % dari maks)")
print(f"air murni pH 7: β = {beta(7.0, 0):.1e}")
# berapa HCl 1 M (mL) untuk menurunkan 100 mL penyangga 0,1/0,1 sebesar 1 satuan pH (eksak)
def ml_to_drop(c, dph=1.0):
    p0 = ph_monoprotic(2 * c, c)
    lo, hi = 0.0, 50.0
    for _ in range(100):
        m = 0.5 * (lo + hi)
        Vt = (100 + m) / 1000
        p = ph_monoprotic(2 * c * 0.1 / Vt, c * 0.1 / Vt, m * 1e-3 / Vt)
        if p0 - p < dph: lo = m
        else: hi = m
    return lo
for c in (0.1, 0.01):
    print(f"HCl 1 M untuk ΔpH = −1 pada 100 mL asetat {c}/{c} M: {ml_to_drop(c):.2f} mL")

# ---------------------------------------------------------------- 4. resep fosfat pH 7,00
head("4. Resep: 250,0 mL penyangga fosfat 0,100 M pH 7,00 (KH2PO4 + Na2HPO4)")
pka2 = pk(KA_PO4[1])
r = 10 ** (7.00 - pka2)
n_tot = 0.100 * 0.250
n_h2 = n_tot / (1 + r)
n_h1 = n_tot - n_h2
M_KH2PO4, M_NA2HPO4 = 136.09, 141.96
print(f"pKa2 = {pka2:.2f}; [HPO4 2−]/[H2PO4−] = {r:.3f}")
print(f"KH2PO4 {n_h2*1e3:.2f} mmol = {n_h2*M_KH2PO4:.3f} g; Na2HPO4 {n_h1*1e3:.2f} mmol = {n_h1*M_NA2HPO4:.3f} g")
c2, c1 = n_h2 / 0.25, n_h1 / 0.25
I = 0.5 * (c2 * 1 + c2 * 1 + 2 * c1 * 1 + c1 * 4)
dp = davies_logg(2, I) - davies_logg(1, I)        # pKa' = pKa + log γ(HA) − log γ(A) ... untuk HA−/A2−
pka2p = pka2 + dp
print(f"kekuatan ion I ≈ {I:.3f} M; pKa2' (Davies) ≈ {pka2p:.2f} → pH resep teoretis sebenarnya ≈ {pka2p + math.log10(r):.2f}")
print("→ di lab: atur dengan NaOH/HCl sambil membaca pH meter terkalibrasi, lalu tepatkan volume.")
# validasi Davies terhadap NIST SRM 186g (25 °C)
for name, mh2, mh1, nist in (("ekimolal 0,025/0,025", 0.025, 0.025, 6.864),
                              ("fisiologis 0,008695/0,03043", 0.008695, 0.03043, 7.416)):
    I = 0.5 * (2 * mh2 + 2 * mh1 + 4 * mh1)
    pkp = pka2 + davies_logg(2, I) - davies_logg(1, I)
    print(f"NIST {name} m: HH tanpa koreksi {pka2 + math.log10(mh1/mh2):.2f}; Davies {pkp + math.log10(mh1/mh2):.2f}; NIST pH(S) {nist}")

# ---------------------------------------------------------------- 5. distribusi H3PO4
head("5. Fraksi spesies H3PO4 (α0 H3PO4, α1 H2PO4−, α2 HPO4 2−, α3 PO4 3−)")
pk1, pk2, pk3 = (pk(k) for k in KA_PO4)
print(f"pKa = {pk1:.2f} / {pk2:.2f} / {pk3:.2f}; Ka1/Ka2 = {KA_PO4[0]/KA_PO4[1]:.1e}")
for ph in (1.0, 2.15, 2.4, 4.68, 6.0, 7.0, 7.2, 7.4, 9.77, 12.35, 13.0):
    a = alphas(ph, KA_PO4)
    print(f"pH {ph:5.2f}: " + "  ".join(f"{x*100:6.2f} %" for x in a))
print(f"puncak H2PO4− di pH (pKa1+pKa2)/2 = {(pk1+pk2)/2:.2f}; puncak HPO4 2− di {(pk2+pk3)/2:.2f}")
print("pKa2' fisiologis ≈ 6,8 (I ≈ 0,15 M, 37 °C) → pada pH 7,4 dengan 6,8:",
      f"HPO4/H2PO4 = {10**(7.4-6.8):.1f}")
I = 0.15
print(f"   cek Davies I = 0,15 M (25 °C): pKa2' ≈ {pka2 + davies_logg(2,I) - davies_logg(1,I):.2f}")

# ---------------------------------------------------------------- 6. kola
head("6. Kola (pH ≈ 2,4): fraksi fosfat")
for ph in (2.37, 2.4, 2.5):
    a = alphas(ph, KA_PO4)
    print(f"pH {ph}: H3PO4 {a[0]*100:.0f} %, H2PO4− {a[1]*100:.0f} %, HPO4 2− {a[2]*100:.1e} %")
# berapa H3PO4 murni yang memberi pH 2,4 (ilustrasi saja; kola juga mengandung CO2 & zat lain)
def ph_h3po4(c):
    def f(ph):
        h = 10 ** -ph
        a = alphas(ph, KA_PO4)
        return h - KW / h - c * (a[1] + 2 * a[2] + 3 * a[3])
    return bisect_ph(f)
lo, hi = 1e-5, 1.0
for _ in range(100):
    m = math.sqrt(lo * hi)
    if ph_h3po4(m) > 2.4: lo = m
    else: hi = m
print(f"ilustrasi: H3PO4 murni ≈ {lo*1e3:.1f} mM (≈ {lo*98.0:.2f} g/L) memberi pH 2,40")

# ---------------------------------------------------------------- 7. karbonat
head("7. Sistem CO2/HCO3−/CO3 2− (25 °C, I = 0; Ka1 mencakup CO2(aq) + H2CO3)")
q1, q2 = pk(KA_CO3[0]), pk(KA_CO3[1])
print(f"pKa1 = {q1:.2f}, pKa2 = {q2:.2f}; H2CO3 sejati hanya ≈ 0,3 % dari CO2(aq) (Khyd 2,8e-3)")
c = 0.02500
ph_soda = bisect_ph(lambda ph: 10**-ph - KW/10**-ph - c*(alphas(ph, KA_CO3)[1] + 2*alphas(ph, KA_CO3)[2]))
print(f"CO2 0,02500 M (air soda, contoh Skoog 13-3): pH {ph_soda:.2f}")
for ph in (4.0, 6.35, 7.4, 8.3, 10.33):
    a = alphas(ph, KA_CO3)
    print(f"pH {ph:5.2f}: CO2 {a[0]*100:5.1f} %  HCO3− {a[1]*100:5.1f} %  CO3 2− {a[2]*100:5.2f} %")

# ---------------------------------------------------------------- 8. darah
head("8. Darah: pH = 6,1 + log([HCO3−] / (0,03 × PCO2))")
pco2, hco3 = 40.0, 24.0
co2 = S_CO2 * pco2
print(f"PCO2 40 mmHg → CO2 terlarut {co2:.2f} mmol/L; HCO3− 24 mmol/L; rasio {hco3/co2:.1f}; pH {PKA_BLOOD + math.log10(hco3/co2):.2f}")
print(f"rasio yang dibutuhkan pada pH 7,40 = 10^(7,40 − 6,1) = {10**(7.40-PKA_BLOOD):.2f}")
for ph in (7.35, 7.40, 7.45):
    print(f"pH {ph}: rasio {10**(ph-PKA_BLOOD):.1f}; [H3O+] {10**-ph*1e9:.1f} nmol/L")
print(f"jika pakai pKa1 termodinamika 6,35 (25 °C, I=0) rasio di 7,40 = {10**(7.40-q1):.1f} (salah untuk darah)")
print(f"fraksi 'amunisi basa' HCO3− = {hco3/(hco3+co2)*100:.1f} %")

head("9. Beban asam 10 mmol/L (model hanya bikarbonat; darah nyata juga punya Hb, protein, fosfat)")
x = 10.0
closed = PKA_BLOOD + math.log10((hco3 - x) / (co2 + x))
opened = PKA_BLOOD + math.log10((hco3 - x) / co2)
pco2_w = 1.5 * (hco3 - x) + 8                      # rumus Winters (Merck Manual)
comp = PKA_BLOOD + math.log10((hco3 - x) / (S_CO2 * pco2_w))
ideal0 = (hco3 + co2) / 2
ideal = 7.40 + math.log10((ideal0 - x) / (ideal0 + x))
water = ph_strong(x * 1e-3)
print(f"sistem tertutup (CO2 terperangkap): pH {closed:.2f}")
print(f"sistem terbuka (paru membuang CO2, PCO2 tetap 40): pH {opened:.2f}")
print(f"terbuka + napas lebih cepat (Winters PCO2 ≈ {pco2_w:.0f} mmHg): pH {comp:.2f}")
print(f"pembanding: penyangga 'ideal' tertutup pKa 7,40, total sama {2*ideal0:.1f} mM, 1:1: pH {ideal:.2f}")
print(f"pembanding: air (tanpa penyangga), 10 mM asam kuat: pH {water:.2f}")
print(f"ΔpH: tertutup {closed-7.40:+.2f}, terbuka {opened-7.40:+.2f}, kompensasi {comp-7.40:+.2f}, ideal {ideal-7.40:+.2f}")

# ---------------------------------------------------------------- 10. sitrat, HOCl, Tris
head("10. Kehidupan sehari-hari")
print("asam sitrat pKa = " + " / ".join(f"{pk(k):.2f}" for k in KA_CIT))
pkh = pk(KA_HOCL)
print(f"HOCl pKa = {pkh:.2f}")
for ph in (7.0, 7.2, 7.5, 7.8, 8.0, 8.5):
    print(f"  kolam pH {ph}: HOCl {100/(1+10**(ph-pkh)):.0f} %")
print("Tris: pKa ≈ 8,07 (25 °C), pH turun ≈ 0,025–0,03 per °C (data pemasok, ⚠)")
print(f"  25 → 37 °C: ΔpH ≈ {-0.025*12:.2f} sampai {-0.03*12:.2f}")
