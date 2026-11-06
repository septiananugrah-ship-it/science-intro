# Audit angka & klaim — *Kunci untuk Setiap Logam* (Seni Mengukur Ep. 5: Titrasi Kompleksometri EDTA)

Dicek 3 Nov 2026. Buku: Skoog, West, Holler & Crouch, *Fundamentals of Analytical Chemistry* ed. 10 (Cengage 2022) = `materi/Analytical Chemistry.pdf`; halaman ditulis "hlm. cetak (PDF hlm. N)", selisih tetap +18 untuk bab 15 (hlm. 380 = PDF 398, dicek) dan bab 37. Sumber daring diunduh langsung dari sandbox: dokumen latar WHO (cdn.who.int), tabel USGS (pubs.usgs.gov), CDC MMWR, eCFR (21 CFR 172.120), laporan RPA untuk Komisi Eropa (ec.europa.eu). Tidak terjangkau dari sandbox: usgs.gov (DNS diblokir), peraturan.bpk.go.id (403), teks resmi Permenkes 2/2023, basis data NIST SRD 46 / IUPAC untuk tetapan EDTA. Semua hitungan diulang dengan `hitung.py`.
Legenda: ✓ = cocok dengan sumber primer/buku · ✓ (hitung) = diturunkan dengan `hitung.py` dari tetapan yang sudah dicek · ⚠ = belum diverifikasi ke sumber primer / sumber sekunder / ada catatan.

## EDTA & tetapan

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| EDTA = ligan heksadentat: 4 karboksil + 2 amino (pasangan elektron bebas) | — | Skoog § 15D-1, hlm. 380 (PDF 398) | ✓ |
| Ka EDTA | K₁ 1,02 × 10⁻² · K₂ 2,14 × 10⁻³ · K₃ 6,92 × 10⁻⁷ · K₄ 5,50 × 10⁻¹¹ | Skoog hlm. 380 (PDF 398) | ✓ |
| Spesies H₄Y … Y⁴⁻; H₂Y²⁻ dominan pH 3–6; Y⁴⁻ berarti hanya > pH 10 | — | Skoog hlm. 380, Gbr. 15-5 & Feature 15-3, hlm. 381 | ✓ |
| Larutan baku dari Na₂H₂Y·2H₂O; 0,3 % air berlebih; ≈ 3,8 g per L untuk 0,01 M | 3,722 g teoretis (M = 372,24 g/mol) | Skoog hlm. 382 (PDF 400) & § 37E-2, hlm. 1020–1021 (PDF 1038–1039) | ✓ / ✓ (hitung) |
| Stoikiometri 1:1 berapa pun muatan (AgY³⁻, AlY⁻); Mⁿ⁺ + Y⁴⁻ ⇌ MY⁽ⁿ⁻⁴⁾⁺ | — | Skoog § 15D-2, hlm. 382 | ✓ |
| Struktur sangkar, ion terisolasi dari pelarut; kompleks umumnya tak berwarna | — | Skoog hlm. 382, Gbr. 15-6 | ✓ |
| "Kelat" dari Yunani *chēlē* = capit | — | etimologi umum (Skoog glosarium hanya mendefinisikan "chelation") | ⚠ cek kamus/IUPAC Gold Book |
| log K_MY (20 °C, I = 0,1; Schwarzenbach 1957) | Ag⁺ 7,32 · Mg²⁺ 8,69 · Ca²⁺ 10,70 · Zn²⁺ 16,50 · Pb²⁺ 18,04 · Cu²⁺ 18,80 · Fe³⁺ 25,1 | Skoog Tabel 15-4, hlm. 383 (PDF 401) | ✓ |
| log K_CaY & log K_MgY pembanding NIST/IUPAC (25 °C, I = 0,1) | ≈ 10,65 dan ≈ 8,79 (NIST SRD 46, dikutip buku teks lain) | NIST Critically Selected Stability Constants (SRD 46) — tidak terbuka dari sandbox; laporan IUPAC Anderegg dkk. 2005 (*Pure Appl. Chem.* 77, 1445) tidak mencakup EDTA | ⚠ dari ingatan; narasi memakai nilai Skoog (selisih ≤ 0,1 log, tidak mengubah kesimpulan) |
| K_CaY/K_MgY ≈ 100 ("seratus kali lebih erat") | 102 | `hitung.py` | ✓ (hitung) |
| Definisi α₄ dan K′ = α₄·K_MY | — | Skoog pers. 15-23 s.d. 15-27, hlm. 384 (PDF 402) | ✓ |
| α₄ pH 10 | 0,355 (Skoog Contoh 15-2: 0,35) | `hitung.py`; Skoog hlm. 385 | ✓ |
| α₄ pH 2 / 6 / 8 / 12 | 3,7 × 10⁻¹⁴ / 2,3 × 10⁻⁵ / 5,4 × 10⁻³ / 0,98 | `hitung.py` | ✓ (hitung) |
| K′ pH 10: CaY 1,77 × 10¹⁰, MgY 1,74 × 10⁸ | Skoog Gbr. 15-9: 1,75 × 10¹⁰ / 1,72 × 10⁸ | Skoog hlm. 390 (PDF 408) | ✓ |
| K′ turun > 15 000 kali dari pH 10 ke pH 6 | 1,58 × 10⁴ | `hitung.py` | ✓ (hitung) |
| Kriteria K′ ≥ 10⁶ untuk titik akhir memadai (larutan 0,01 M) | — | Skoog hlm. 390, mengutip Reilley & Schmid, *Anal. Chem.* 1958, 30, 947 | ✓ |
| pH minimum: Ca 6,0 · Mg 7,6 · Pb 2,4 · Fe³⁺ 0,5 | — | `hitung.py`; pola sama dengan Skoog Gbr. 15-12, hlm. 391 (Ca perlu pH > ≈ 8 untuk titik akhir baik, Gbr. 15-10) | ✓ (hitung) — narasi: "kalsium baru memenuhinya di atas pH enam" = syarat minimum, bukan pH kerja |
| Kurva pCa makin tajam saat pH naik; pH 6 nyaris tanpa lonjakan | — | Skoog Gbr. 15-10, hlm. 391 | ✓ |
| Titrasi EDTA selalu dalam larutan penyangga | — | Skoog hlm. 384 | ✓ |

## Indikator

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| EBT: H₂In⁻ merah ⇌ HIn²⁻ biru (K₁ 5 × 10⁻⁷) ⇌ In³⁻ jingga (K₂ 2,8 × 10⁻¹²) | pKa 6,30 / 11,55 | Skoog § 15D-6, hlm. 395 (PDF 413) | ✓ |
| Kompleks logam–EBT merah; pH harus ≥ 7 agar HIn²⁻ biru dominan; MIn⁻ + HY³⁻ → HIn²⁻ + MY²⁻ | — | Skoog hlm. 396 (PDF 414) | ✓ |
| Indikator logam terdeteksi pada 10⁻⁶–10⁻⁷ M | — | Skoog hlm. 395 | ✓ (tidak di narasi) |
| Kf MgIn⁻ 1,0 × 10⁷; CaIn⁻ 2,5 × 10⁵ (≈ 1/40) | — | Skoog Contoh 15-6, hlm. 396; teks hlm. 397 | ✓ |
| Rentang transisi EBT pH 10: pMg 5,4 ± 1; pCa 3,8 ± 1 | — | Skoog Contoh 15-6; ulang `hitung.py` | ✓ |
| pM di titik ekivalen (50,00 mL 0,00500 M + EDTA 0,0100 M, pH 10): pCa 6,36; pMg 5,36 | — | `hitung.py` (kondisi Skoog Gbr. 15-9) | ✓ (hitung) |
| EBT ideal untuk Mg, tak memuaskan untuk Ca; Calmagite setara & lebih stabil | — | Skoog hlm. 397 | ✓ |
| Tambah sedikit MgY²⁻ bila Mg tidak ada / untuk Ca; Mg dititrasi terakhir di air | — | Skoog hlm. 397–398 & § 15D-9, hlm. 400 (PDF 418); § 37E-5 catatan, hlm. 1023 | ✓ |
| Penyangga pH 10 = NH₃ pekat 57 mL + NH₄Cl 7 g per 100 mL | — | Skoog § 37E-1, hlm. 1020 | ✓ |
| Prosedur kesadahan: sampel + 2 mL penyangga pH 10 + 3–4 tetes EBT, titrasi sampai merah → biru murni, lapor mg CaCO₃/L | — | Skoog § 37E-5, hlm. 1022–1023 | ✓ (narasi menyederhanakan: tanpa langkah asam + didih untuk CO₂) |
| Ca saja: pH sangat basa, Mg mengendap sebagai Mg(OH)₂, indikator khusus kalsium | — | Skoog Soal 15-28, hlm. 404 (PDF 422) | ✓ |
| Indikator kalsium = kalkon (Eriochrome Blue Black R) atau murexida, pH 12–13; perubahan warna merah muda → biru/ungu | — | metode baku APHA *Standard Methods* 3500-Ca B / SNI 06-6989.13 | ⚠ teks standar tidak dibuka; Skoog hanya memakai murexida untuk Ni (kuning → ungu, hlm. 1055) |
| Ksp Mg(OH)₂ = 7,1 × 10⁻¹² → pH 12: [Mg²⁺] ≤ 7,1 × 10⁻⁸ M ≈ 0,0017 mg/L ("kurang dari seperseribu mg/L") | — | Skoog Lampiran 2, hlm. A-6; `hitung.py` | ✓ (hitung) |
| EBT di atas pH ≈ 11,6 menjadi jingga (alasan tidak memakai pH 12 untuk kesadahan total) | 74 % In³⁻ pada pH 12 | `hitung.py` dari K₂ Skoog | ✓ (hitung) |
| "Magnesium harus tetap larut; di pH 12 mengendap" | — | Skoog Soal 15-28 | ✓ (catatan: Ksp kristal memprediksi Mg 0,6 mM sudah jenuh di sekitar pH 10; narasi sengaja tidak memberi ambang pH pengendapan) |

## Contoh titrasi kesadahan (angka rekaan, semua ✓ hitung)

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| 50,00 mL; EDTA 0,01000 M; 12,00 mL → 0,1200 mmol → 2,400 mmol/L → 240,2 mg/L CaCO₃ | — | `hitung.py` (M CaCO₃ 100,09 g/mol, CIAAW) | ✓ (hitung) |
| Ca: 9,00 mL → 180,2 mg/L CaCO₃; Ca²⁺ 72,1 mg/L | — | `hitung.py` | ✓ (hitung) |
| Mg: 3,00 mL → 60,1 mg/L CaCO₃; Mg²⁺ 14,6 mg/L | — | `hitung.py` | ✓ (hitung) |
| Kalsium ≈ tiga perempat kesadahan | 180,2/240,2 = 75 % | `hitung.py` | ✓ (hitung) |
| Sesudah didih & saring: 7,00 mL → 140,1 mg/L; hilang 100,1 mg/L | — | `hitung.py` | ✓ (hitung) — angka contoh; kenyataannya bergantung alkalinitas |
| Satu tetes (0,05 mL) ≙ 1,0 mg/L CaCO₃ | — | `hitung.py`; volume tetes ≈ 0,05 mL (Ep. 3 AUDIT, Skoog) | ✓ (hitung) |
| Kerak ≈ 55 g/tahun (1,5 L/hari), ≈ 4,5 g/bulan | 54,8 g | `hitung.py` (anggapan semua kesadahan sementara mengendap di ketel) | ✓ (hitung) — anggapan disebut di lampiran |
| CaY²⁻ + Pb²⁺ → PbY²⁻ + Ca²⁺, K ≈ 2 × 10⁷ | 10^7,34 | `hitung.py` dari Tabel 15-4 | ✓ (hitung) |

## Kesadahan, regulasi, ketel

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Kesadahan = kapasitas bereaksi dengan sabun; terutama Ca & Mg; dinyatakan mg CaCO₃/L | — | WHO, *Hardness in Drinking-water*, WHO/HSE/WSH/10.01/10/Rev/1 (2011), § 1.1: https://cdn.who.int/media/docs/default-source/wash-documents/wash-chemicals/hardness-bd.pdf ; Skoog § 15D-9, hlm. 400 | ✓ |
| Kelas: < 60 lunak · 60–120 agak sadah · 120–180 sadah · > 180 sangat sadah | — | WHO 2011 § 1.1 (mengutip McGowan 2000); USGS WRIR 02-4045 Tabel 14 (Hem 1985): 0–60 / 61–120 / 121–180 / > 180: https://pubs.usgs.gov/wri/wri024045/htms/tables14-15.htm | ✓ |
| Kesadahan karbonat (sementara) vs nonkarbonat (tetap) | — | WHO 2011 § 1.1 | ✓ |
| Ambang rasa ion kalsium 100–300 mg/L | — | WHO 2011 § 1.3 | ✓ |
| WHO tidak menetapkan nilai panduan (minimum/maksimum) untuk kesadahan | — | WHO 2011, kesimpulan ("no guideline values are proposed") | ✓ |
| Kesadahan > ≈ 200 mg/L dapat menimbulkan kerak; < ≈ 100 mg/L cenderung korosif | — | WHO, *Hardness in Drinking-water*, WHO/SDE/WSH/03.04/06 (2003), "Other considerations": https://cdn.who.int/media/docs/default-source/wash-documents/wash-chemicals/hardness2003.pdf | ✓ |
| Air panas: karbonat logam tak larut melapisi permukaan, menurunkan efisiensi penukar panas | — | WHO 2011 § 4.2; Skoog hlm. 400 ("hard water, on being heated, precipitates calcium carbonate") | ✓ |
| Reaksi Ca²⁺ + 2 HCO₃⁻ → CaCO₃ + CO₂ + H₂O saat dipanaskan | — | kimia standar; Skoog hlm. 400 (endapan CaCO₃ saat dipanaskan) | ✓ (persamaan tidak tertulis eksplisit di Skoog) |
| Kerak larut dalam cuka/asam sitrat dengan melepas CO₂ | — | kimia standar (asam + karbonat) | ⚠ tidak dicari sumber |
| Permenkes 492/Menkes/Per/IV/2010: kesadahan maks 500 mg/L CaCO₃ | — | dikutip banyak artikel, mis. https://journal.uad.ac.id/index.php/KesMas/article/view/2273 | ⚠ teks Permenkes 492 tidak dibuka |
| Permenkes 492/2010 dicabut oleh Permenkes 2/2023 (ditetapkan 4 Jan 2023) | — | https://regulasiair.com/regulasi/permenkes-2-2023/ (merangkum JDIH BPK & JDIH Kemenkes) | ⚠ sumber sekunder; JDIH BPK 403 dari sandbox |
| Permenkes 2/2023 Tabel 1 Lampiran = 19 parameter wajib air minum, tanpa kesadahan (TDS < 300 mg/L, pH 6,5–8,5, Fe 0,2, Mn 0,1, Pb 0,01 mg/L, …) | — | https://regulasiair.com/tanya/parameter-wajib-uji-air-minum/ (salinan tabel, dicocokkan dengan PDF resmi menurut situs) | ⚠ sekunder; **Tabel 2 (parameter khusus) belum dicek** — kesadahan mungkin ada di sana |
| Permenkes 2/2023 dicabut sebagian oleh Permenkes 3/2026, kecuali beberapa pasal **beserta Lampiran** (tabel parameter tetap berlaku) | — | regulasiair.com (status diperiksa 14 Sep 2026) | ⚠ sekunder; narasi tidak menyebut pencabutan 2026 |

## EDTA dalam kehidupan

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| EDTA pengawet pangan (mayones, saus salad, minyak): mengikat ion logam yang mengatalisis oksidasi udara/ketengikan; "sequestering agent" | — | Skoog Feature 15-4, hlm. 383 (PDF 401) | ✓ |
| E385 = kalsium dinatrium EDTA | — | Reg. (EU) 1333/2008 Lampiran II (daftar E-number); EFSA call for data re-evaluasi E 385: https://www.efsa.europa.eu/sites/default/files/2024-06/call-for-data-edta.pdf | ⚠ PDF EFSA & teks regulasi tidak dibuka, hanya cuplikan pencarian |
| Batas CaNa₂EDTA di mayones (AS) 75 ppm (anhidrat); saus salad 75; minuman ringan kaleng 33 | — | 21 CFR 172.120 (eCFR, versi 1 Jan 2025) | ✓ |
| ADI 0–2,5 mg/kg bb (sebagai CaNa₂EDTA; JECFA 1973, SCF 1977) ≈ 1,9 mg EDTA/kg bb | — | JECFA: https://apps.who.int/food-additives-contaminants-jecfa-database/Home/Chemical/3011 ; EFSA 2018 (ferric sodium EDTA): https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7009604/ | ⚠ dari cuplikan pencarian; halaman tidak dibuka; re-evaluasi EFSA belum terbit |
| Terapi kelasi timbal dengan CaEDTA (edetat dinatrium kalsium); satu-satunya agen IV yang direkomendasikan untuk anak | — | CDC, *MMWR* 55(08), 204–207 (2006): https://www.cdc.gov/mmwr/preview/mmwrhtml/mm5508a3.htm | ✓ |
| Tiga kematian akibat hipokalsemia terkait terapi kelasi, 2003–2005 (Texas, Pennsylvania, Oregon); terkait Na₂EDTA | — | idem | ✓ (narasi: "antara tahun 2003 dan 2005"; laporan terbit 2006) |
| Kompleks timbal dibuang lewat ginjal (urine) | — | idem ("enhance urinary and biliary excretion of lead") | ✓ |
| BAL (dimerkaprol) membentuk kompleks Pb lebih stabil dari PbY²⁻ | — | Skoog Feature 15-6, hlm. 399 | ✓ (tidak di narasi) |
| Air sadah membentuk endapan dengan sabun (tetapi tidak dengan deterjen) | — | Skoog catatan pinggir hlm. 400 | ✓ |
| EDTA dipakai di deterjen untuk mengikat ion logam; tidak mudah terurai (*not readily biodegradable*), tidak banyak tersisihkan di IPAL; UK sukarela tidak memakai di deterjen rumah tangga, Prancis membatasi lewat hukum, Swedia hampir menghapus awal 1990-an | — | RPA, *Non-surfactant Organic Ingredients and Zeolite-based Detergents*, laporan akhir untuk Komisi Eropa (Juni 2006), § 3.4.5: https://ec.europa.eu/docsroom/documents/14124/attachments/1/translations/en/renditions/pdf | ✓ (narasi "beberapa negara Eropa membatasinya") |
| Kasus darah O. J. Simpson (EDTA sebagai bukti) | — | Skoog Feature 15-4 | ✓ (tidak dipakai) |

## Catatan & tindak lanjut sebelum narasi direkam

1. ⚠ Cek **Tabel 2 Lampiran Permenkes 2/2023** (teks resmi JDIH BPK/Kemenkes) untuk parameter kesadahan; ubah kalimat adegan `kelas` bila ada.
2. ⚠ Cek ulang log K CaY/MgY ke NIST SRD 46 atau Martell & Smith bila ingin menyebut "nilai IUPAC/NIST" di layar; narasi saat ini memakai Skoog (Schwarzenbach).
3. ⚠ Cek APHA 3500-Ca B / SNI untuk warna kalkon & murexida dan rentang pH 12–13.
4. (Sudah diperbaiki) kalimat CDC di adegan `obat` memakai rentang kasus 2003–2005.
5. Angka 240/140 mg/L = contoh rekaan; tampilkan label "contoh".
