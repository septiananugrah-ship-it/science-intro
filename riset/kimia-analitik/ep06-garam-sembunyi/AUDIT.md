# Audit angka & klaim — *Garam yang Bersembunyi* (Seni Mengukur Ep. 6: Titrasi Pengendapan)

Dicek 3 Nov 2026. Buku: Skoog, West, Holler & Crouch, *Fundamentals of Analytical Chemistry* ed. 10 (Cengage 2022) = `materi/Analytical Chemistry.pdf`; halaman ditulis "hlm. cetak (PDF hlm. N)", dibaca per halaman dengan `pdftotext -f N -l N`. Sumber daring diunduh langsung dari sandbox: lembar fakta WHO (who.int), PDF metode USGS di nemi.gov, kotak info Wikipedia (yang mengutip CRC Handbook). Tidak bisa dibuka dari sandbox: bsn.go.id / akses-sni.bsn.go.id (teks SNI), ejournal-balitbang.kkp.go.id (artikel kadar garam ikan asin), opentextbc.ca (tabel Ksp CRC; diblokir Cloudflare). Semua hitungan diulang dengan `hitung.py`.
Legenda: ✓ = cocok dengan sumber primer/buku · ✓ (hitung) = diturunkan dengan `hitung.py` dari tetapan yang sudah dicek · ⚠ = belum diverifikasi ke sumber primer / sumber sekunder / ada catatan.

## Tetapan

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Ksp AgCl (25 °C) | 1,82 × 10⁻¹⁰ | Skoog Lampiran 2, hlm. A-7 (PDF hlm. 1100); juga Contoh 15-1, hlm. 373 (PDF hlm. 391) | ✓ |
| Ksp AgCl (pembanding) | 1,77 × 10⁻¹⁰ | CRC Handbook ed. 99 (2018), hlm. 5-189, dikutip kotak info https://en.wikipedia.org/wiki/Silver_chloride | ✓ (lewat Wikipedia; buku CRC tidak dibuka) |
| Ksp Ag₂CrO₄ (25 °C) | 1,2 × 10⁻¹² (tercetak "AgCrO4", salah ketik rumus di buku) | Skoog Lampiran 2, hlm. A-7 (PDF hlm. 1100) | ✓ |
| Ksp Ag₂CrO₄ (pembanding) | 1,12 × 10⁻¹² | CRC Handbook ed. 97 (2016), dikutip https://en.wikipedia.org/wiki/Silver_chromate | ✓ (lewat Wikipedia) |
| Ksp AgSCN | 1,1 × 10⁻¹² | Skoog Lampiran 2, hlm. A-7 | ✓ |
| Ksp AgBr / AgI | 5,0 × 10⁻¹³ / 8,3 × 10⁻¹⁷ (Gambar 15-3 memakai AgBr 5,2 × 10⁻¹³) | Skoog Lampiran 2; Gambar 15-3, hlm. 375 (PDF hlm. 393) | ✓ |
| Ksp AgBrO₃ ("garam peraknya cukup larut") | 5,7 × 10⁻⁵ | Skoog Gambar 15-3 | ✓ |
| log K₁ Fe(SCN)²⁺ | 3,02 (K₁ ≈ 1,0 × 10³) | Skoog Lampiran 4, hlm. A-10–A-11 (PDF hlm. 1103–1104) | ✓ (tidak diucapkan) |
| pKa HCrO₄⁻ ⇌ CrO₄²⁻ + H⁺ | ≈ 5,9 (Wikipedia); ≈ 6,5 juga sering dikutip | https://en.wikipedia.org/wiki/Chromate_and_dichromate | ⚠ literatur tidak seragam; hanya dipakai di lampiran, narasi tidak menyebut angka pKa |
| Massa molar | NaCl 58,44; AgCl 143,32; Ag₂CrO₄ 331,73; K₂CrO₄ 194,19; Na 22,990 g/mol | berat atom standar (CIAAW) | ✓ (hitung) |

## Kelarutan & benang merah

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Ksp Ag₂CrO₄ "≈ 150 kali lebih kecil" dari AgCl | 1,82 × 10⁻¹⁰ / 1,2 × 10⁻¹² = 152 (CRC: 158) | `hitung.py` | ✓ (hitung) |
| Kelarutan molar AgCl | √Ksp = 1,35 × 10⁻⁵ M = 1,93 mg/L (CRC: 1,33 × 10⁻⁵ M; Wikipedia: "1,9 mg per liter") | `hitung.py`; Skoog Contoh 15-1(b): [Ag⁺]ₑₖ = 1,35 × 10⁻⁵ M | ✓ |
| Kelarutan molar Ag₂CrO₄ | ∛(Ksp/4) = 6,69 × 10⁻⁵ M = 22,2 mg/L (CRC: 6,54 × 10⁻⁵ M; Wikipedia: 6,5 × 10⁻⁵ mol/L) | `hitung.py`; https://en.wikipedia.org/wiki/Silver_chromate | ✓ |
| Ag₂CrO₄ "lima kali lebih larut (mol), sebelas kali (massa)" | 4,96× dan 11,5× (CRC 4,92× / 11,4×) | `hitung.py` | ✓ (hitung) |
| Ksp hanya bisa dibandingkan langsung untuk garam berstoikiometri sama | prinsip | turunan dari rumus s; satuan M² vs M³ | ✓ (hitung) |
| [CrO₄²⁻] contoh | 1 mL K₂CrO₄ 5 % (b/v) dalam ≈ 64 mL → 4,0 × 10⁻³ M | larutan 5 % sesuai Skoog §37D-3, hlm. 1019 (PDF hlm. 1037) dan USGS §5.2 (5 g/100 mL); volume skema sendiri | ✓ (hitung) |
| [Ag⁺] awal pengendapan AgCl | 7,1 × 10⁻⁹ M ([Cl⁻] ≈ 0,026 M) | `hitung.py` | ✓ (hitung) |
| [Ag⁺] awal pengendapan Ag₂CrO₄ | 1,73 × 10⁻⁵ M (pAg 4,76); rasio ≈ 2450 ("dua ribu kali") | `hitung.py` | ✓ (hitung) |
| Cl⁻ sudah mengendap saat merah bata mulai | 99,95 % (sisa 0,051 %) | `hitung.py` | ✓ (hitung) |
| [CrO₄²⁻] agar Ag₂CrO₄ mulai tepat di ekivalen | 6,6 × 10⁻³ M; konsentrasi ini terlalu kuning sehingga dipakai lebih encer | `hitung.py`; pernyataan "6,6 × 10⁻³ M … intense yellow" ada di Skoog edisi lama (dikutip dokumen Scribd "Mohr method", hasil pencarian) | ✓ (hitung) · ⚠ kutipan edisi lama tidak dibuka |
| Galat teoretis Mohr (contoh) | +0,0044 mL (+0,03 %) | `hitung.py` (neraca [Ag⁺] − [Cl⁻]) | ✓ (hitung) |

## Kurva titrasi pengendapan

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| pAg 50,00 mL NaCl 0,05000 M + AgNO₃ 0,1000 M | 10 mL 8,14 · 20 mL 7,59 · 24 mL 6,87 · 25 mL 4,87 · 26 mL 2,88 · 30 mL 2,20 · 40 mL 1,78 | Skoog Contoh 15-1 & Tabel 15-2, hlm. 373–374 (PDF hlm. 391–392); `hitung.py` (neraca eksak) identik | ✓ |
| pAg + pCl = pKsp (analog pH + pOH = pKw) | pKsp AgCl = 9,74 | Skoog catatan pinggir hlm. 374 | ✓ |
| Lompatan pAg ≈ 2 satuan (0,1 M), ≈ 1 satuan (0,01 M) | — | Skoog hlm. 374 "The Effect of Concentration…" & Gambar 15-2 | ✓ |
| Jendela indikator Cl⁻: pAg 4–6; I⁻: 4–12 | — | Skoog hlm. 374, 377–378 | ✓ |
| Lompatan makin tajam bila Ksp makin kecil; Ksp ≫ 10⁻¹⁰ tidak memberi titik akhir memuaskan | — | Skoog hlm. 374 & Gambar 15-3 | ✓ |
| Titrasi pengendapan sejak pertengahan 1800-an; AgNO₃ = "argentometri" | — | Skoog hlm. 373 | ✓ |

## Metode Mohr

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Kromat sebagai indikator, endapan merah bata Ag₂CrO₄ di daerah ekivalen; untuk Cl⁻, Br⁻, CN⁻ | — | Skoog hlm. 378 (PDF hlm. 396); §37D-3 hlm. 1018 | ✓ |
| "Mohr kini jarang dipakai karena Cr(VI) karsinogen" | — | Skoog hlm. 378 | ✓ |
| Titik akhir = merah pertama yang **menetap**; USGS: bertahan 10–15 detik | — | Skoog §37D-3 hlm. 1020; USGS I-1183-85 §6.3 | ✓ |
| Kilat merah sesaat di titik jatuh tetes yang hilang saat diaduk | kelebihan Ag⁺ lokal | penalaran dari Ksp; pengamatan lab umum | ⚠ tidak ada kalimat eksplisit di sumber yang dibuka (konsisten dengan syarat "menetap") |
| Blanko indikator dengan suspensi CaCO₃ bebas klorida + kromat | — | Skoog §37D-3 hlm. 1020 (PDF hlm. 1038) | ✓ |
| Blanko normal 0,05–0,10 mL (titran encer, 0,50 mg Cl⁻/mL); titran pekat tidak perlu blanko | — | USGS TWRI Book 5 ch. A1, metode I-1183-85 "Chloride, titrimetric, Mohr" §6.4: https://www.nemi.gov/methods/method_pdf/9597 | ✓ |
| Lampu/filter kuning mempermudah melihat titik akhir | — | USGS I-1183-85 §2.1 | ✓ |
| pH 7–10 | — | lembar praktikum universitas & UNAM (*Rev. Educ. Quím.*): 7,0 < pH < 10 (hasil pencarian) | ⚠ sumber sekunder; USGS menulis 7,0–10,5 (✓) — narasi memakai "sekitar tujuh sampai sepuluh" |
| Asam: CrO₄²⁻ + H⁺ → HCrO₄⁻ (konstanta ionisasi kedua asam kromat kecil) → kepekaan turun | — | USGS I-1183-85 §2.1 | ✓ |
| Dikromat (jingga) terbentuk dari HCrO₄⁻ | 2HCrO₄⁻ ⇌ Cr₂O₇²⁻ + H₂O | https://en.wikipedia.org/wiki/Chromate_and_dichromate | ✓ (sekunder) |
| Basa: kelarutan perak hidroksida terbatas → perak hilang, titik akhir tertutup (coklat) | — | USGS §2.1 ("limited solubility of silver hydroxide", Collins 1928); lembar praktikum: "brownish silver hydroxide" | ✓ (warna coklat ⚠ sekunder) |
| Penetral: NaHCO₃ (Skoog) / CaCO₃ (USGS) | — | Skoog §37D-3 hlm. 1020; USGS §2.1 | ✓ |
| pH 4: [Ag⁺] perlu naik ≈ 9–18× | pKa 5,9 → 9×; pKa 6,5 → 18× | `hitung.py` | ✓ (hitung) · bergantung pKa ⚠ |
| Karl Friedrich Mohr, abad ke-19 (1856) | — | pengetahuan umum | ⚠ tahun tidak diucapkan; nama depan perlu dicek bila ditampilkan |

## Metode Volhard

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Ag⁺ + SCN⁻ → AgSCN; Fe³⁺ indikator, merah Fe(SCN)²⁺ pada kelebihan SCN⁻ pertama | — | Skoog hlm. 378 | ✓ |
| Penentuan halida tak langsung: AgNO₃ berlebih, titrasi balik SCN⁻ | — | Skoog hlm. 378 | ✓ |
| Suasana asam kuat: karbonat, oksalat, arsenat tidak mengganggu | — | Skoog hlm. 378 | ✓ |
| AgCl lebih larut daripada AgSCN → AgCl + SCN⁻ → AgSCN + Cl⁻ → titik akhir memudar, SCN⁻ berlebih, hasil Cl⁻ rendah; diatasi dengan menyaring AgCl; tidak perlu untuk halida lain | — | Skoog hlm. 378 | ✓ |
| K konversi | 1,82 × 10⁻¹⁰ / 1,1 × 10⁻¹² = 165 | `hitung.py` | ✓ (hitung) |
| Jacob Volhard (1874) | — | pengetahuan umum | ⚠ tahun tidak diucapkan |

## Metode Fajans

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Kazimierz Fajans, 1926; cepat, akurat, hanya untuk endapan koloid | — | Skoog catatan pinggir hlm. 378 | ✓ |
| Indikator adsorpsi teradsorpsi/terlepas dari permukaan endapan; warna berpindah dari larutan ke padatan | — | Skoog hlm. 378 | ✓ |
| Diklorofluoresein (anion) masuk ke lapisan ion lawan di sekitar AgCl pada kelebihan titran pertama → merah muda; dekstrin menjaga koloid | — | Skoog §37D-2, hlm. 1018 (PDF hlm. 1036) | ✓ |
| Lapisan adsorpsi primer: Ag⁺ terserap bila AgNO₃ berlebih (muatan +), dikelilingi lapisan ion lawan | — | Skoog §10A, Gambar 10-3, hlm. 249 (PDF hlm. 267) | ✓ |
| Sebelum ekivalen Cl⁻ terserap (muatan −) | — | analog Skoog §10A (ion senama berlebih terserap) | ✓ (penalaran dari Skoog) |
| AgCl koloid terurai cahaya; titrasi di sinar matahari langsung gagal | — | Skoog §37D-2 Catatan 2 | ✓ |
| Fluoresein ≈ pH 7–10, diklorofluoresein ≈ pH 4–10; diklorofluoresein asam lebih kuat & kini lebih disukai | — | catatan kuliah CSJM University (https://gyansanchay.csjmu.ac.in/wp-content/uploads/2021/11/Unit-3-Lecture-3.pdf) & lembar praktikum (hasil pencarian) | ⚠ sekunder — narasi hanya kualitatif |

## Contoh hitungan (data rekaan konsisten)

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Kadar garam contoh | 5,000 g → 250 mL → 25,00 mL; 13,20 − 0,05 mL × 0,1000 M → 15,37 % NaCl (b/b); tanpa blanko 15,43 % | `hitung.py` | ✓ (hitung) — **angka rekaan**, bukan data ikan asin nyata |
| Volhard sampel sama | 25,00 mL AgNO₃ 0,1000 M; 11,85 mL KSCN 0,1000 M → 15,37 % | `hitung.py` | ✓ (hitung) |
| Volhard tanpa saring | +0,20 mL SCN⁻ (ilustrasi) → 15,14 % | `hitung.py` | ✓ (hitung) · besarnya +0,20 mL rekaan |
| AgNO₃ distandardisasi dengan NaCl standar primer | — | Skoog §37D-3 hlm. 1019 | ✓ |
| Skala titran 0,1 M & sampel ≈ 0,25 g | — | Skoog §37D-2 Catatan 1 (0,25 g untuk AgNO₃ 0,1 M) — contoh memakai 0,5 g ikan asin per alikuot ≈ 0,077 g NaCl | ✓ (skala wajar) |

## Jembatan harian

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| WHO: dewasa < 2000 mg/hari natrium ≈ < 5 g garam ("just under a teaspoon") | — | WHO fact sheet *Sodium reduction*, 11 Mei 2026: https://www.who.int/news-room/fact-sheets/detail/sodium-reduction (dari pedoman WHO 2012 *Sodium intake for adults and children*) | ✓ |
| 1 g garam ≈ 400 mg natrium | 393 mg (hitung) | WHO fact sheet; `hitung.py` | ✓ |
| Rata-rata asupan dewasa dunia 2021 | 4278 mg Na/hari (≈ 11 g garam), "lebih dari dua kali" anjuran | WHO fact sheet (2026) | ✓ |
| Ikan asin 20 g (15,37 %) → 3,07 g garam → 1209 mg Na → 60 % batas WHO | — | `hitung.py` | ✓ (hitung, dari angka rekaan) |
| "Natrium × 2,5 = garam" | 1/0,393 = 2,54 | `hitung.py` | ✓ (hitung) |
| Kadar garam ikan asin menurut SNI (SNI 2721-1:2009 / SNI 8273:2016) | jurnal: maks. 20 %; sebagian menulis 12–20 %; satu menulis 40 % (tertukar dengan kadar air) | hasil pencarian artikel jurnal (IPB, Unmul, KKP *Marlin*), teks SNI tidak bisa dibuka (bsn.go.id tak terjangkau) | ⚠ **tidak diucapkan**; narasi hanya "SNI mengatur kadar garamnya" |
| Kadar natrium kecap / bumbu mi instan | — | — | ⚠ tidak ada angka di naskah |
| Mohr USGS untuk air: 10–2000 mg/L Cl⁻ (sampai 5000) | — | USGS I-1183-85 §1.1 | ✓ |
| Intrusi air laut membuat sumur pesisir payau | — | pengetahuan umum hidrogeologi | ⚠ kualitatif, tanpa angka |
| Film hitam-putih: AgBr, citra laten (Ag⁺ → Ag), fiksasi dengan tiosulfat | — | Skoog pembuka bab 15, hlm. 365 (PDF hlm. 383) | ✓ |
| AgNO₃ & AgCl peka cahaya, simpan dalam botol coklat/gelap | — | Skoog catatan pinggir hlm. 373; §37D-1 Catatan 3 | ✓ |
| AgCl menggelap ungu-kelabu di bawah cahaya (sebagian Ag⁺ → Ag) | — | pengetahuan umum; konsisten dengan Skoog (fotodekomposisi) | ⚠ warna tidak dari sumber yang dibuka |

## Berkas `materi/` yang tidak relevan untuk episode ini

Artikel indikator alami (Hanifa 2024, Leba 2023/2024, Agustina 2022), Kuna 2023, Darwish 2026, Vilasó-Cadre 2023, Hakim 2023, artikel laju reaksi, dan Chang & Overby tidak dipakai (tidak memuat titrasi pengendapan).
