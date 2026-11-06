# Audit angka & klaim — *Si Keras Kepala* (Seni Mengukur Ep. 4: Larutan Penyangga)

Dicek 3 Nov 2026. Buku: Skoog, West, Holler & Crouch, *Fundamentals of Analytical Chemistry* ed. 10 (Cengage 2022) = `materi/Analytical Chemistry.pdf`; nomor halaman ditulis "hlm. cetak (PDF hlm. N)" (bab 7: PDF = cetak + 18; bab 13: PDF = cetak + 18; Lampiran 3 hlm. A-8 = PDF 1101). Sumber daring diunduh langsung dari sandbox (curl): sertifikat NIST SRM 186g (PDF), Merck Manual Professional (3 halaman). Situs NCBI/PMC (StatPearls, PMC) menampilkan reCAPTCHA dan CDC menolak akses (403) → angka dari sana hanya lewat cuplikan pencarian atau sumber sekunder (ditandai ⚠). Semua angka hitungan berasal dari `hitung.py` (neraca muatan eksak, tanpa pendekatan, kecuali disebut HH/Davies).
Legenda: ✓ = cocok dengan sumber primer/buku · ✓ (hitung) = diturunkan dengan `hitung.py` dari tetapan yang sudah dicek · ⚠ = belum diverifikasi ke sumber primer / sumber sekunder / ada catatan.

## Tetapan

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Kw 25 °C | 1,00 × 10⁻¹⁴ (konvensi Skoog, sama dengan Ep. 3) | Skoog bab 7, hlm. 170 (PDF 188); lihat AUDIT Ep. 3 | ✓ |
| Ka asam asetat | 1,75 × 10⁻⁵ (pKa 4,76) | Skoog Lampiran 3, hlm. A-8 (PDF 1101); Contoh 7-14 hlm. 190 | ✓ |
| Ka H₃PO₄ | 7,11 × 10⁻³ / 6,32 × 10⁻⁸ / 4,5 × 10⁻¹³ → pKa 2,15 / 7,20 / 12,35 | Skoog bab 13B-1, hlm. 318 (PDF 336); Lampiran 3 hlm. A-8 | ✓ |
| Ka1/Ka2 H₃PO₄ ≈ 10⁵; alasan: elektrostatik (proton lepas dari anion bermuatan makin besar) + statistik (makin sedikit proton) | 1,1 × 10⁵ | Skoog hlm. 318, catatan pinggir ("often by a factor of 10⁴ to 10⁵") | ✓ |
| CO₂/HCO₃⁻: Ka1 gabungan (CO₂(aq) + H₂CO₃) | 4,2 × 10⁻⁷ (bab 13B-2) / 4,45 × 10⁻⁷ (Lampiran 3) → pKa1 6,35–6,38; naskah memakai 6,35 | Skoog hlm. 318–319 (PDF 336–337), Pers. 13-6; Lampiran 3 hlm. A-8 | ✓ (dua nilai di buku yang sama sedikit beda; 6,35 dipakai, 25 °C, I = 0) |
| Ka2 karbonat | 4,69 × 10⁻¹¹ → pKa 10,33 | Skoog hlm. 318, Pers. 13-5; Lampiran 3 | ✓ |
| H₂CO₃ sejati ≈ 0,3 % dari CO₂(aq) | Khyd = 2,8 × 10⁻³ | Skoog hlm. 318–319, Pers. 13-3 dan teks ("only about 0.3%") | ✓ |
| pH larutan CO₂ 0,02500 M ("air soda") | Skoog 3,99; `hitung.py` 3,98 | Skoog Contoh 13-3, hlm. 319 (PDF 337) | ✓ (beda 0,01 karena Ka1 4,45 vs 4,2 × 10⁻⁷) |
| Ka NH₄⁺ | 5,70 × 10⁻¹⁰ (pKa 9,24) | Skoog Lampiran 3; Contoh 7-12 hlm. 186 | ✓ |
| Asam sitrat pKa | 3,13 / 4,76 / 6,40 (Ka 7,45 × 10⁻⁴ / 1,73 × 10⁻⁵ / 4,02 × 10⁻⁷) | Skoog Lampiran 3, hlm. A-8 | ✓ |
| HOCl pKa | 7,52 (Ka 3,0 × 10⁻⁸) | Skoog Lampiran 3, hlm. A-8 | ✓ |
| Tris pKa ≈ 8,07–8,08 (25 °C); pH turun ≈ 0,03/°C (5–25 °C) dan ≈ 0,025/°C (25–37 °C) | narasi: "turun sekitar 0,3 dari suhu kamar ke 37 °C" | Lembar data Sigma-Aldrich (cuplikan pencarian; PDF https://b2b.sigmaaldrich.com/deepweb/assets/sigmaaldrich/product/documents/227/289/93362dat.pdf gagal diunduh) ; Wikipedia "Tris" | ⚠ belum dibuka sumber primer (Good dkk. 1966 / Bates & Hetzer) |
| Massa molar KH₂PO₄ / Na₂HPO₄ | 136,09 / 141,96 g/mol | dari massa atom standar | ✓ (hitung) |

## Penyangga: konsep (Skoog bab 7C)

| Klaim | Sumber | Dicek |
|---|---|---|
| Penyangga menahan perubahan pH saat diencerkan atau ditambah asam/basa; dibuat dari pasangan asam-basa konjugat | Skoog 7C, hlm. 183 (PDF 201) | ✓ |
| Penyangga **tidak** mempertahankan pH tepat konstan, hanya perubahannya kecil | Skoog hlm. 187, catatan pinggir ("Buffers do not maintain pH at an absolutely constant value") | ✓ |
| Penurunan HH dari Ka; pH hanya bergantung pada rasio → tidak bergantung pengenceran (dalam batas) | Skoog hlm. 184 (Pers. 7-29), Feature 7-5 hlm. 185 (Pers. 7-30), Gbr. 7-8 hlm. 187 | ✓ |
| HH gagal bila Ka ≳ 10⁻³ atau konsentrasi asam/basa konjugat sangat kecil | Skoog hlm. 184 ("sometimes breaks down with acids or bases that have dissociation constants greater than about 10⁻³ or when the molar concentration of either ... is very small") | ✓ |
| Definisi kapasitas β = dc_b/dpH = −dc_a/dpH (mol asam/basa kuat per 1 L untuk ΔpH 1) | Skoog hlm. 190 (PDF 208) | ✓ |
| Kapasitas maksimum saat rasio 1 : 1; pilih pKa dalam ±1 dari pH sasaran | Skoog hlm. 190, Gbr. 7-10 dan teks | ✓ |
| Resep teoretis berbeda dari pH terukur (ketidakpastian Ka, penyederhanaan) → buat kira-kira lalu atur dengan asam/basa kuat sambil membaca pH meter | Skoog hlm. 190 "Preparation of Buffers", Contoh 7-14 | ✓ |
| Nilai α hanya bergantung pada [H₃O⁺] dan Ka, tidak pada c_T | Skoog hlm. 188 (7C-2) dan hlm. 337 (13H, Feature 13-3) | ✓ |
| Aspirin bersangga mengandung penyangga untuk membantu mencegah iritasi lambung oleh gugus karboksilat | Skoog hlm. 184, catatan pinggir | ✓ |

## Hitungan eksperimen (`hitung.py`)

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| 1,00 mL HCl 1,00 M + 100,0 mL air | pH 7,00 → 2,00; [H₃O⁺] naik ≈ 10⁵ × ("seratus ribu kali") | `hitung.py` (V total 101,0 mL) | ✓ (hitung) |
| idem + 100,0 mL asetat 0,100/0,100 M | 4,76 → 4,67 (ΔpH −0,09); eksak = HH | `hitung.py`; pola sama dengan Skoog Contoh 7-13 (ΔpH −0,05 untuk penyangga amonia) hlm. 187 | ✓ (hitung) |
| Rasio sesudah: HOAc 11,0 mmol / OAc⁻ 9,0 mmol ("90 banding 110") | — | stoikiometri | ✓ (hitung) |
| idem + asetat 0,0100/0,0100 M | 4,76 → 3,24 (asetat 1,00 mmol habis) | `hitung.py` | ✓ (hitung) |
| HCl 1 M untuk ΔpH −1 (100 mL) | 0,1/0,1 M: 8,20 mL; 0,01/0,01 M: 0,84 mL | `hitung.py` (bisection, eksak) | ✓ (hitung) |
| β maks = 0,576 C; pada pKa ± 1 = 33 % ("sepertiga"); ± 2 = 4 % | C = 0,2 M → 0,115 mol L⁻¹ pH⁻¹ | `hitung.py` (rumus β analitik, turunan neraca muatan) | ✓ (hitung) |
| HH vs eksak, pengenceran 10⁻⁵ M (1:1) | 4,76 vs 5,27 | `hitung.py` | ✓ (hitung) |
| HH vs eksak, 0,100 M HOAc + 1,0 × 10⁻⁴ M NaOAc ("seribu banding satu") | 1,76 vs 2,90 | `hitung.py` | ✓ (hitung) |
| Resep fosfat 250,0 mL 0,100 M pH 7,00 | rasio 0,632; KH₂PO₄ 2,085 g; Na₂HPO₄ 1,374 g | `hitung.py` (HH, pKa2 7,20) | ✓ (hitung) |
| pH terukur resep itu ≈ 6,6 (I ≈ 0,18 M, pKa2' Davies 6,83) | 6,63 | `hitung.py` (persamaan Davies, A = 0,509) | ✓ (hitung; Davies kurang teliti di I > 0,1 — narasi bilang "kira-kira enam koma enam") |

## NIST SRM 186g (penyangga fosfat standar)

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Fosfat ekimolal 0,025 mol/kg KH₂PO₄ + 0,025 mol/kg Na₂HPO₄: pH(S) 25 °C | 6,864 (U = 0,010); 37 °C: 6,841 | NIST SRM 186g Certificate of Analysis, Tabel 1, hlm. 2: https://tsapps.nist.gov/srmext/certificates/186g.pdf | ✓ |
| Formulasi fisiologis 0,008695 / 0,03043 mol/kg: pH(S) 25 °C | 7,416; 37 °C 7,394 | idem, Tabel 2 | ✓ |
| Davies mereproduksi NIST: ekimolal 6,88 vs 6,864; fisiologis 7,42 vs 7,416 (HH tanpa koreksi: 7,20 dan 7,74) | — | `hitung.py` | ✓ (hitung) — dasar klaim "kekuatan ion menggeser pKa" |
| Catatan: pH(S) NIST = −log aH konvensional (konvensi Bates–Guggenheim), bukan −log [H⁺] | — | sertifikat hlm. 1 | ✓ |

## Asam poliprotik & kola

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Fraksi H₃PO₄ pada pH 1 / 2,15 / 4,68 / 7,20 / 7,40 / 12,35 | 93 % H₃PO₄ / 50:50 / 99,4 % H₂PO₄⁻ / 50:50 / 38,7 : 61,3 / 50:50 | `hitung.py` (rumus α Skoog Feature 13-3) | ✓ (hitung) |
| Puncak H₂PO₄⁻ di pH (pKa1+pKa2)/2 ≈ 4,7 | 4,67 | `hitung.py` | ✓ (hitung) |
| pH kola ≈ 2,4 (Coca-Cola Classic 2,37 ± 0,03) | — | Reddy dkk., *J. Am. Dent. Assoc.* 147(4), 255–263 (2016) — hanya lewat cuplikan pencarian tabel PMC4808596 (atribusi tabel tidak pasti) | ⚠ |
| Asam utama kola = asam fosfat | — | pengetahuan umum / cuplikan pencarian; tidak dibuka label atau sumber primer | ⚠ |
| Fraksi fosfat pada pH 2,4: 36 % H₃PO₄, 64 % H₂PO₄⁻ | — | `hitung.py` (I = 0; kekuatan ion kola rendah) | ✓ (hitung, bergantung pH kola ⚠) |
| Fraksi karbonat pada pH 7,4 (25 °C): CO₂ 8 %, HCO₃⁻ 92 % | — | `hitung.py` | ✓ (hitung; tidak diucapkan) |

## Darah

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| pH darah dijaga 7,35–7,45, terutama oleh sistem asam karbonat–bikarbonat | — | Skoog bab 13, halaman pembuka hlm. 314 (PDF 332) | ✓ |
| Asidemia pH < 7,35, alkalemia > 7,45 | — | Merck Manual Professional, "Acid-Base Disorders": https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/acid-base-regulation-and-disorders/acid-base-disorders | ✓ |
| Ideal pH 7,40 = [H⁺] 40 nmol/L (rentang 37–43 nmol/L) | `hitung.py`: 39,8 nmol/L | Merck Manual Professional, "Acid-Base Regulation": https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/acid-base-regulation-and-disorders/acid-base-regulation | ✓ |
| HCO₃⁻ normal ≈ 24 mmol/L, PCO₂ ≈ 40 mmHg | — | Merck "Acid-Base Disorders" (ambang asidosis metabolik HCO₃⁻ < 24 mEq/L, asidosis respiratorik PCO₂ > 40 mmHg) | ✓ (Merck memakai keduanya sebagai batas; nilai acuan normal 24/40 juga dari cuplikan sumber pengajaran) |
| pKa' = 6,1 (nilai semu plasma, 37 °C) dan kelarutan CO₂ 0,03 mmol L⁻¹ mmHg⁻¹ (teliti 0,0307) | — | Rumus Merck tampil sebagai gambar (tidak terbaca); teks: Wikipedia "Bicarbonate buffer system" https://en.wikipedia.org/wiki/Bicarbonate_buffer_system (pKa 6,1 "at physiological temperature", 0,0307); cuplikan pencarian (Ka' plasma 37 °C = 7,94 × 10⁻⁷ → 6,1) | ⚠ (nilai baku fisiologi; sumber primer — mis. Siggaard-Andersen / StatPearls NBK507807 — terblokir reCAPTCHA) |
| Rasio 20 : 1 di pH 7,40; pita 7,35–7,45 ↔ rasio 17,8–22,4 | 19,95 / 17,8 / 22,4 | `hitung.py` | ✓ (hitung) |
| HCO₃⁻ = 95 % dari pasangan ("sembilan puluh lima persen amunisi berupa basa") | 24/(24+1,2) = 95,2 % | `hitung.py` | ✓ (hitung) |
| Tubuh terutama menghasilkan asam (CO₂ 15 000–20 000 mmol/hari + asam "tetap" yang harus diekskresi ginjal) | — | Merck "Acid-Base Regulation" | ✓ |
| Beban asam 10 mmol/L: tertutup 6,20; terbuka 7,17; + kompensasi napas 7,31; penyangga ideal tertutup pKa 7,4 6,46; air 2,00 | — | `hitung.py` (model bikarbonat saja; darah nyata juga punya Hb/protein/fosfat → penurunan sebenarnya lebih kecil) | ✓ (hitung; skenario ilustratif, bukan kasus klinis) |
| Kompensasi napas: PCO₂ yang diharapkan = 1,5 × HCO₃⁻ + 8 (± 2) (rumus Winters) | 29 mmHg untuk HCO₃⁻ 14 | Merck "Acid-Base Disorders", tabel kompensasi | ✓ |
| Penyangga kimia seketika; paru menit–jam (50–75 % efektif, tidak menormalkan penuh); ginjal jam–hari | — | Merck "Acid-Base Regulation" | ✓ |
| Kemoreseptor merasakan penurunan pH → napas lebih dalam/cepat | narasi: "otak memerintahkan napas lebih cepat" | Merck "Acid-Base Regulation" (arterial chemoreceptors); pusat napas di batang otak = pengetahuan umum | ✓ / ⚠ ("otak" disederhanakan) |
| Fosfat & protein (termasuk hemoglobin) = penyangga intraseluler penting; fosfat ekstraseluler kurang penting | — | Merck "Acid-Base Regulation" | ✓ |
| Fosfat serum dewasa 2,5–4,5 mg/dL = 0,81–1,45 mmol/L ("sekitar satu milimol", "dua puluh kali lebih sedikit") | — | Merck "Overview of Disorders of Phosphate Concentration": https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/electrolyte-disorders/overview-of-disorders-of-phosphate-concentration | ✓ |
| pKa2' fosfat dalam cairan tubuh ≈ 6,8 | Davies I = 0,15 M (25 °C): 6,84; NIST menunjukkan pH turun sedikit lagi di 37 °C | `hitung.py` + NIST SRM 186g | ✓ (hitung) / ⚠ nilai literatur fisiologi tidak dibuka |
| Fosfat di urin (H₂PO₄⁻) membawa proton keluar ("asam tertitrasi") | — | pengetahuan umum fisiologi ginjal | ⚠ |

## Kehidupan sehari-hari & lab

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Antasida (NaHCO₃, CaCO₃, Mg(OH)₂) menetralkan asam lambung; bikarbonat/karbonat menghasilkan CO₂ | — | kimia stoikiometri (Skoog hanya mendefinisikan titrasi balik antasida di Ep. 3) | ⚠ (komposisi produk tidak dicek ke farmakope) |
| pH lambung ≈ 1–3 (hanya di visual) | — | pengetahuan umum | ⚠ |
| pH permukaan kulit alami rata-rata < 5 (≈ 4,7) | — | Lambers dkk., "Natural skin surface pH is on average below 5, which is beneficial for its resident flora", *Int. J. Cosmet. Sci.* 28(5), 359–370 (2006), doi:10.1111/j.1467-2494.2006.00344.x — judul terkonfirmasi, nilai 4,7 dari sumber sekunder (Wikipedia "Acid mantle"; Thieme *Akt. Dermatol.* 2014) | ⚠ (teks lengkap tidak dibuka) |
| Banyak sampo/serum memakai asam sitrat + natrium sitrat sebagai pengatur pH | — | pengetahuan umum formulasi kosmetik | ⚠ |
| pH kolam 7,2–7,8 | — | aturan negara bagian AS (mis. Wisconsin ATCP 76; San Francisco) & MAHC edisi lama (cuplikan pencarian); MAHC 2023 / halaman CDC konsumen menyebut batas bawah 7,0 | ⚠ (CDC 403 dari sandbox; narasi memakai "sekitar 7,2–7,8") |
| HOCl pembasmi kuman jauh lebih kuat daripada OCl⁻ | — | pengetahuan umum kimia air | ⚠ belum dicari sumber primer (mis. WHO *Guidelines for Safe Recreational Water Environments* vol. 2) |
| Fraksi HOCl pada pH 7,2 / 8,5 | 68 % ("dua pertiga") / 10 % | `hitung.py` (pKa 7,52, 25 °C) | ✓ (hitung) |
| "Alkalinitas total" kolam sebagian besar bikarbonat | — | pengetahuan umum | ⚠ |
| Aktivitas enzim bergantung pH (kurva lonceng) | — | pengetahuan umum biokimia | ✓ (umum) |
| Fosfat NIST hanya bergeser 6,864 → 6,841 dari 25 ke 37 °C ("enam koma delapan enam ke enam koma delapan empat") | — | NIST SRM 186g Tabel 1 | ✓ |
| Teaser Ep. 5: titrasi EDTA memakai penyangga amonia pH 10 | — | pengetahuan umum (kesadahan, EBT); cek bab 15 Skoog saat Ep. 5 | ⚠ |

## Item ⚠ yang perlu dicek sebelum narasi direkam

1. pKa' 6,1 dan 0,03 mmol/(L·mmHg) — buka StatPearls NBK507807 atau buku fisiologi (Guyton/Boron) bila NCBI diizinkan.
2. pH kola 2,37 dan asam fosfat sebagai asam utama — buka Reddy dkk. 2016 (JADA) atau label produk.
3. Tris: pKa 25 °C dan koefisien suhu — buka lembar data Sigma/Good dkk. 1966.
4. Kulit pH ≈ 4,7 — buka Lambers dkk. 2006.
5. Kolam 7,2–7,8 dan HOCl vs OCl⁻ — buka MAHC 2023 (CDC) atau pedoman WHO.
6. Sitrat di sampo, fosfat urin, pH lambung — klaim umum, cukup diberi sumber ringan.
