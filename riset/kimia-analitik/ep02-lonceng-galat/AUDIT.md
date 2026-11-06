# Audit angka & klaim — *Lonceng Galat* (Seni Mengukur #2: statistik pengukuran)

Dicek 3 Nov 2026. Buku: Skoog, West, Holler & Crouch, *Fundamentals of Analytical Chemistry* ed. 10 (Cengage 2022) = `materi/Analytical Chemistry.pdf`; nomor halaman ditulis **halaman cetak (halaman PDF)** — selisih tetap 18. Makalah dicek lewat metadata Crossref (`api.crossref.org/works/<DOI>`, diunduh langsung) atau resolusi `doi.org`. Riwayat Gosset dari MacTutor (St Andrews, diunduh langsung) + Skoog Feature 5-1. Semua hitungan dibuat ulang dengan Python (numpy, scipy.stats); rinciannya di `NASKAH.md` → *Hitungan contoh*.
Legenda: ✓ = cocok dengan sumber primer/buku teks · ✓ (hitung) = diturunkan ulang dengan Python · ⚠ = sumber sekunder / belum dicek ke sumber primer / ada catatan.

## Benang merah: Darwish dkk. (2026)

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Makalah | Darwish, H.; Vicentini, G.; Anderson, J. … "Quantifying human error in visual endpoint detection during acid-base titration: An instructional study using independent student datasets", *World J. Adv. Res. Rev.* 30(1), 2155–2161 (terbit 30 Apr 2026) | https://doi.org/10.30574/wjarr.2026.30.1.1089 (Crossref) · `materi/Darwish et al. (2026).pdf` | ✓ |
| Desain | 2 set triplo (6 titrasi), NaOH distandardisasi terhadap HCl 0,1000 M, alikuot 10,00 mL, fenolftalein, buret 50 mL dibaca 0,01 mL | PDF hlm. 2 (Metode) | ✓ — **bukan "30 mahasiswa"** seperti draf rencana |
| Volume NaOH | kel. 1: 10,04 / 9,25 / 9,39 mL; kel. 2: 10,00 / 9,50 / 9,50 mL | PDF Tabel 1 | ✓ |
| Molaritas per titrasi | 0,0996 · 0,1081 · 0,1064 · 0,1000 · 0,1053 · 0,1053 M | PDF Tabel 1 | ✓; ⚠ kecil: 1,000/9,39 = 0,10650 (makalah 0,1064; selisih pembulatan, tak memengaruhi statistik yang diucapkan) |
| Rentang | 0,0996 – 0,1081 M; 0,0085 M ≈ 8,2 % dari x̄ ("sekitar delapan persen") | PDF abstrak; hitung | ✓ / ✓ (hitung) |
| Gabungan n = 6 | x̄ 0,1041 M; s 0,0035 M; %RSD 3,36 %; CI 95 % 0,1004–0,1078 M | PDF abstrak & Tabel 2; hitung ulang t = 2,571 | ✓ + ✓ (hitung) |
| Kelompok 1 | x̄ 0,1047; s 0,0045; %RSD 4,30 %; CI 0,0935–0,1159 (± 0,0112, t = 4,303) | PDF Tabel 2; hitung | ✓ + ✓ (hitung) |
| Kelompok 2 | x̄ 0,1035; s 0,0031; %RSD 2,96 %; CI 0,0959–0,1111; aturan "merah muda pucat bertahan ≥ 30 s" | PDF Tabel 1–2, Pembahasan | ✓ + ✓ (hitung) |
| Kedua kelompok tidak berbeda nyata | Welch t = 0,37; p = 0,732 | PDF Pembahasan; scipy `ttest_ind(equal_var=False)` → 0,371; 0,732 | ✓ + ✓ (hitung) |
| Rata-rata gabungan vs 0,1000 M | t = 2,88 > t₀,₉₅(5) = 2,57; p = 0,035 | hitung (makalah hanya menyebut bias +4,12 %) | ✓ (hitung) |
| Tak ada pencilan di data gabungan | Q_rendah 0,047; Q_tinggi 0,200 < Q_krit(6, 95 %) 0,625 | hitung + Skoog Tabel 5-5 | ✓ (hitung) |
| Buret 0,01 mL pada ±10 mL ≈ 0,1 % | 0,01/10 = 0,1 % | hitung | ✓ (hitung) |
| "Sumber terbesar kemungkinan mata" | dugaan; makalah: "This does not prove causation" | PDF Pembahasan | ⚠ disampaikan sebagai dugaan |
| **Klaim makalah "bias +4,12 % konsisten dengan overshoot"** | Tidak dipakai. NaOH ada di buret → kelewatan titik akhir menambah V_NaOH → molaritas terhitung **turun**, bukan naik. Lagi pula 0,1000 M hanya konsentrasi rencana. | PDF Pembahasan; logika stoikiometri M_NaOH = (0,1000 × 10,00)/V | ⚠ **klaim makalah tampak keliru arah**; rencana seri (`RENCANA-SERI-BERIKUTNYA.md` ep. 2) ikut menyebut "overshoot" → perlu dikoreksi di sana |
| NaOH bukan standar primer, menyerap CO₂ (galat karbonat) | "Standard solutions of strong bases cannot be prepared directly by mass and must always be standardized against a primary-standard acid"; KHP standar primer hampir ideal | Skoog hlm. 349–350 (PDF 367–368), § 14A-3 | ✓ (sifat higroskopis NaOH = pengetahuan umum, ⚠ tidak dikutip dari halaman ini) |

## Konsep & rumus (Skoog)

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Presisi = kedekatan hasil yang diperoleh dengan cara persis sama; akurasi = kedekatan dengan nilai benar | definisi | Skoog hlm. 40 (PDF 58), § 3A | ✓ |
| Tiga jenis galat: acak, sistematik, kasar; sistematik = alat, metode, pribadi | — | Skoog hlm. 43 (PDF 61), § 3B-1 | ✓ |
| s memakai pembagi N − 1 (derajat kebebasan) | pers. 4-4 | Skoog hlm. 60 (PDF 78) | ✓ |
| Luas Gauss ±1σ / ±2σ / ±3σ | 68,3 % / 95,4 % / 99,7 % (scipy: 68,27 / 95,45 / 99,73) | Skoog hlm. 59–60 (PDF 77–78), Feature 4-2 · NIST/SEMATECH e-Handbook 6.5.1 https://www.itl.nist.gov/div898/handbook/pmc/section5/pmc51.htm | ✓ |
| Di luar ±3σ ≈ 3 per 1000 | 0,27 % | hitung | ✓ (hitung) |
| t = (x̄ − μ)/(s/√N); CI = x̄ ± ts/√N; t → z untuk db besar | pers. 5-4, 5-5 | Skoog hlm. 84 (PDF 102) | ✓ |
| CI hanya berlaku tanpa bias | "apply only in the absence of bias" | Skoog hlm. 84 (PDF 102) | ✓ |
| Keuntungan terbesar dari merata-rata 2–4 ulangan | "relatively large gain attained by averaging two to four measurements" | Skoog hlm. 84 (PDF 102) | ✓ |
| Faktor t/√n: n=2 8,985; 3 2,484; 4 1,591; 6 1,049; 10 0,715 | 2→3: 3,6× ("hampir empat kali"); 3→4: 1,56× | hitung | ✓ (hitung) |
| Angka penting = semua digit pasti + digit tak pasti pertama | — | Skoog hlm. 71 (PDF 89), § 4D-1 | ✓ |
| Uji Q: Q = \|x_q − x_n\| / w; tolak bila Q > Q_krit | pers. 5-17 | Skoog hlm. 105 (PDF 123), § 5D-1 | ✓ |
| Hati-hati membuang data; bila Q menyatakan pertahankan, pertimbangkan melaporkan median | rekomendasi 1–5 | Skoog hlm. 106–107 (PDF 124–125), § 5D-2, 5D-3 | ✓ |
| Uji pencilan dipakai sekali per set data | praktik umum (uji Dixon/Grubbs dirancang untuk satu pencilan) | — | ⚠ tidak tertulis eksplisit di Skoog; boleh diganti "jangan dipakai berulang-ulang untuk memangkas data" |
| Kartu kendali: garis tengah, UCL/LCL = ±3σ; contoh neraca hari ke-17, piring timbangan kotor | Gbr. 6-16 | Skoog hlm. 148–149 (PDF 166–167), § 6E | ✓ |
| Uji profisiensi bagian dari akreditasi ISO/IEC 17025 | ISO/IEC 17025:2017 (pemantauan validitas hasil, termasuk uji profisiensi) | — | ⚠ belum dicek ke teks standar (berbayar); klaim umum |
| "Papan Galton" (quincunx, Francis Galton) | nama alat saja, tanpa tahun | — | ⚠ sekunder (pengetahuan umum); tidak ada angka |

## Tabel nilai kritis

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| t 95 % dua sisi | db 1: 12,7 · 2: 4,30 · 3: 3,18 · 4: 2,78 · 5: 2,57 · 10: 2,23 · ∞: 1,96 | Skoog Tabel 5-3, hlm. 85 (PDF 103); scipy: 12,706 / 4,303 / 3,182 / 2,776 / 2,571 / 2,228 / 1,960 | ✓ + ✓ (hitung). Catatan: Skoog menulis db 1 = **12,7** (rencana seri menulis 12,71 — keduanya benar, beda pembulatan) |
| t 95 % db 30 | 2,04 (visual `distt`) | scipy 2,042 (Skoog tidak memuat db 30; db 20 = 2,09, db 40 = 2,02) | ✓ (hitung) |
| Q_krit 90 / 95 / 99 % | n=3: 0,941 / 0,970 / 0,994 · n=4: 0,765 / 0,829 / 0,926 · n=5: 0,642 / 0,710 / 0,821 · n=6: 0,560 / 0,625 / 0,740 | Skoog Tabel 5-5, hlm. 106 (PDF 124) — diadaptasi dari Rorabacher, *Anal. Chem.* 1991, 63, 139–146, https://doi.org/10.1021/ac00002a010 (Crossref ✓) | ✓ (buku); ⚠ tabel asli Rorabacher tidak dibuka (berbayar) |
| Contoh Skoog uji Q (arsen 5,60–5,81 ppm → Q = 0,52 < 0,71, pertahankan) | pola yang sama dengan contoh kita | Skoog Contoh 5-11, hlm. 106 (PDF 124) | ✓ |
| G_krit Grubbs dua sisi, n = 5 | α = 0,05: 1,715 · α = 0,01: 1,764 | rumus NIST/SEMATECH e-Handbook 1.3.5.17.1 https://www.itl.nist.gov/div898/handbook/eda/section3/eda35h1.htm (diunduh) → dihitung dengan scipy | ✓ (hitung); tabel ISO 5725-2 tidak dibuka ⚠ (nilai yang sama lazim dikutip) |
| Grubbs 1969 | F. E. Grubbs, "Procedures for Detecting Outlying Observations in Samples", *Technometrics* 11(1), 1–21 | https://doi.org/10.1080/00401706.1969.10490657 (Crossref) | ✓ |

## Sejarah

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Dean & Dixon 1951 (uji Q) | R. B. Dean & W. J. Dixon, "Simplified Statistics for Small Numbers of Observations", *Anal. Chem.* 23(4), 636–638 (15 Apr 1951) | https://doi.org/10.1021/ac60052a025 (Crossref) · dikutip Skoog hlm. 105 cat. kaki 5 | ✓ |
| Makalah "Student" | Student, "The Probable Error of a Mean", *Biometrika* 6(1), 1–25, Maret 1908 | Crossref DOI 10.2307/2331554 (JSTOR; judul, penulis "Student", vol. 6, no. 1, hlm. awal 1, terbit 1908-03); https://doi.org/10.1093/biomet/6.1.1 dialihkan (301) ke DOI JSTOR tsb. · Skoog Feature 5-1 ("Biometrika, 1908, 6, 1") | ✓; halaman akhir 25 ⚠ (Crossref hanya memuat hlm. awal; 1–25 dari daftar pustaka sekunder) |
| Gosset lahir 1876, Canterbury; wafat 16 Okt 1937 | — | MacTutor https://mathshistory.st-andrews.ac.uk/Biographies/Gosset/ · Skoog Feature 5-1 | ✓ (tidak diucapkan) |
| Lulusan kimia & matematika (kelas satu), New College Oxford | — | MacTutor; Skoog Feature 5-1 | ✓ |
| Mulai bekerja di Guinness, Dublin, 1899 | "post as a chemist with Arthur Guinness Son and Company in 1899" | MacTutor; Skoog Feature 5-1 | ✓ |
| Masalahnya: kadar ragi & alkohol tiap batch sesuai standar | "how closely the yeast and alcohol content of various batches of Guinness matched the standard amounts" | Skoog hlm. 85 (PDF 103), Feature 5-1 | ✓ (buku teks; ⚠ belum dicek ke sumber primer sejarah) |
| Belajar di lab Karl Pearson, University College London, 1906–07 | — | MacTutor; Skoog Feature 5-1 | ✓ |
| Distribusi t ditemukan lewat matematika + percobaan angka acak | — | MacTutor ("early application of the Monte-Carlo method"); Skoog Feature 5-1 | ✓ |
| Statistik zaman itu dirancang untuk ratusan data | biometrikawan biasanya punya ratusan pengamatan | Wikipedia "William Sealy Gosset" (mengutip biografi E. S. Pearson) | ⚠ sekunder |
| Guinness melarang peneliti menerbitkan dengan nama asli → nama samaran "Student" | Skoog: "Guinness did not allow employees to publish their work"; Wikipedia (mengutip Ziliak 2019, *Am. Stat.* 73 sup1, 281–290, doi:10.1080/00031305.2018.1514325 ✓ Crossref): sesudah seorang peneliti membocorkan info dagang, publikasi tak boleh menyebut bir, Guinness, atau nama asli | Skoog Feature 5-1; Ziliak 2008 *J. Econ. Perspect.* 22(4), 199–216, doi:10.1257/jep.22.4.199 (Crossref ✓, isi tidak dibuka) | ⚠ alasan rinci dari sumber sekunder; narasi hanya menyebut "tidak mengizinkan menerbitkan dengan nama asli" |
| Ejaan nama | **Gosset** (satu t di akhir); Skoog ed. 10 menulis "Gossett" | MacTutor, Crossref/JSTOR | ✓ — pakai "Gosset" di layar |

## Contoh hitung rekaan (cuka)

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Data latihan | 5,8 · 5,9 · 6,4 · 5,9 · 6,0 % (b/v) — rekaan, diberi label "data latihan" | dibuat untuk naskah | — |
| x̄, median, Σd², s, %RSD | 6,0; 5,9; 0,22; 0,2345; 3,91 % | Python | ✓ (hitung) |
| CI 95 % | 6,0 ± 0,291 → 5,71–6,29 (laporan 6,0 ± 0,3) | Python, t = 2,776 | ✓ (hitung) |
| Uji Q 6,4 | 0,667 < 0,710 → pertahankan | Python + Skoog Tabel 5-5 | ✓ (hitung) |
| Grubbs 6,4 | 1,706 < 1,715 → pertahankan | Python + rumus NIST | ✓ (hitung) |
| Uji t vs label 5,4 % (ep. 1, Kuna 2023) | t = 5,72 > 2,78; p = 0,0046 | Python; label 5,4 % dari `materi/Kuna (2023).pdf` via rencana ep. 1 | ✓ (hitung); angka label ⚠ tidak dibuka ulang di sesi ini |
| Teaser ep. 3: pH 4,30 → 9,70 di 49,95 / 50,05 mL | 50,00 mL HCl 0,100 M vs NaOH 0,100 M | hitung (konsisten dengan rencana ep. 3) | ✓ (hitung) |

## Belum dicek / perlu tindak lanjut (⚠)

1. Klaim "overshoot" di makalah Darwish (dan di rencana seri) tampak keliru arah — narasi menghindarinya; koreksi juga `RENCANA-SERI-BERIKUTNYA.md`.
2. Biometrika 1908 halaman akhir (25) — dari pustaka sekunder.
3. Alasan rinci larangan publikasi Guinness (kebocoran rahasia dagang) — sekunder (Wikipedia/Ziliak); narasi tidak memuat rinciannya.
4. "Statistik zamannya untuk ratusan data" — sekunder.
5. Tabel Q asli Rorabacher 1991 & tabel Grubbs ISO 5725-2 tidak dibuka (nilai dari Skoog / dihitung ulang dari rumus NIST).
6. Uji profisiensi dalam ISO/IEC 17025 — klaim umum, teks standar tidak dibuka.
7. "Uji pencilan sekali per set data" — praktik umum, tidak eksplisit di Skoog.
8. Pembulatan molaritas titrasi ke-3 kelompok 1 di makalah (0,1064 vs 0,1065 hitung) — tak berdampak.
