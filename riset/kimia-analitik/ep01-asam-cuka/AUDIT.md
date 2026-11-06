# Audit angka & klaim — *Berapa Asam Cukamu?* (Seni Mengukur #1)

Dicek 3 Nov 2026. Skoog = Skoog, West, Holler & Crouch, *Fundamentals of Analytical Chemistry* ed. 10 (Cengage 2022), berkas `materi/Analytical Chemistry.pdf` — ditulis "hlm. cetak (hlm. PDF)". Sertifikat NIST SRM 84L diunduh langsung (`tsapps.nist.gov`, terbit 5 Feb 2024). Berat atom dari tabel CIAAW (diunduh langsung). Metadata Kuna (2023) dicek lewat Crossref. Semua hitungan turunan dibuat ulang dengan Python (lihat NASKAH → Hitungan).
Legenda: ✓ = cocok dengan sumber primer/buku · ✓ (hitung) = diturunkan dari angka yang sudah dicek · ⚠ = belum terverifikasi dari sumber primer / ada catatan (tertulis kata-kata paling aman yang dipakai).

## Benang merah: Kuna (2023)

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Identitas makalah | Moh Rasyid Kuna, "Penetapan Kadar Produk Makanan Asam Cuka (CH3COOH) yang Beredar di Pasaran", *Dalton: Jurnal Pendidikan Kimia dan Ilmu Kimia* 6(2), hlm. 111–115, terbit daring 25 Agu 2023, CC-BY 4.0 | `materi/Kuna (2023).pdf` hlm. 1; https://doi.org/10.31602/dl.v6i2.10640 (Crossref: vol. 6, no. 2, hlm. 111) | ✓ |
| Label 5,4 %, hasil titrasi 5,9 % | "kadarnya lebih tinggi yaitu 5,9 % … tidak sesuai dengan yang tertulis pada label … 5,4 %" | Kuna (2023), abstrak & hlm. 115 (Kesimpulan) | ✓ |
| Metode | alkalimetri; NaOH distandardisasi dengan asam oksalat; indikator fenolftalein | Kuna (2023), Metode hlm. 114 | ✓ |
| "Konsentrasi NaOH hasil standardisasi tidak dicantumkan; cuka dititrasi sekali" | Tabel 1 hanya memuat bacaan buret (awal 43 mL; akhir 20 / 6,5 / 15 mL); penentuan cuka: satu percobaan, NaOH 7 mL, PP 1 mL, cuka 1 mL; tidak ada molaritas NaOH | Kuna (2023), hlm. 114–115 | ✓ (dibaca langsung). Narasi hanya menyatakan fakta ini, tanpa menilai. |
| Satuan label (b/v atau b/b) | tidak disebut di makalah | — | ⚠ narasi memakai "persen berat per volume" hanya untuk hitungan contoh sendiri; untuk label cukup "lima koma empat persen". Selisih b/b vs b/v ≈ 1 % relatif (massa jenis cuka ≈ 1,01 g/mL ⚠ belum dicek) — tidak bisa menjelaskan selisih 9 %, dan tidak diucapkan. |
| Konsentrasi NaOH tersirat | 5,9 % ⇒ 0,9825 M × 1 mL ÷ 7 mL ≈ 0,140 M | hitung | ✓ (hitung) — hanya catatan, tidak di narasi |

## Kimia analitik & alur

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Kualitatif ("apa") vs kuantitatif ("berapa"); istilah *analit* | definisi bab 1; "The substance being determined is called the analyte" | Skoog bab 1; catatan pinggir hlm. 43 (PDF 61) | ✓ |
| Alur analisis: pilih metode → sampel → preparasi → ukur → hitung → nilai keandalan | diagram alir analisis kuantitatif | Skoog §1C, Gbr. 1-2, hlm. 4–7 (PDF 22–25) | ✓ (halaman ditemukan; teks tidak dibaca kata per kata) |
| Keasaman cuka cenderung turun bila botol terbuka ke udara | "The acidity of bottled vinegar tends to decrease on exposure to air" | Skoog §37C-9 Note 1, hlm. 1014 (PDF 1032) | ✓ |
| Cuka umumnya ≈ 5 % (b/v) asam, dilaporkan sebagai asam asetat walau ada asam lain | "Most vinegars contain about 5% acid (w/v) expressed as acetic acid" | Skoog §37C-9, hlm. 1013 (PDF 1031) | ✓ |
| Prosedur Skoog | 25,00 mL cuka → labu 250 mL → alikuot 50,00 mL; 2 tetes fenolftalein; NaOH 0,1 M sampai merah muda ≥ 30 s; M HOAc 60,053 g/mol | Skoog §37C-9, hlm. 1013 (PDF 1031) | ✓ — naskah memakai modifikasi 10,00 → 100,0 → 25,00 mL (titran ≈ 22–25 mL, nyaman di buret 50 mL). Skema Skoog asli memberi ≈ 45 mL (5,4 %) dan ≈ 49 mL (5,9 %). |
| Laboratorium pengawas memetik beberapa botol acak dari tanggal produksi berbeda | praktik umum pengambilan sampel | — | ⚠ tidak dicek ke prosedur BPOM; narasi memakai "biasanya", tanpa nama lembaga |

## Reaksi & stoikiometri

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| CH₃COOH + NaOH → CH₃COONa + H₂O, 1 : 1 | — | Skoog bab 11–12, 14 | ✓ |
| n = C · V (mmol = M × mL) | — | Skoog §11C, hlm. 271 (PDF 289) | ✓ |
| Asam lemah: sebagian besar molekul tidak terurai, tetapi titrasi mengukur semua asam | Ka asam asetat 1,75 × 10⁻⁵ | Skoog Lampiran 3, hlm. PDF 1101 | ✓ |
| Berat atom H 1,008; C 12,011; O 15,999; K 39,098 (konvensional) | H [1,00784; 1,00811], C [12,0096; 12,0116], O [15,99903; 15,99977], K 39,0983(1) | https://www.ciaaw.org/atomic-weights.htm | ✓ |
| M CH₃COOH | 60,052 g/mol (narasi "enam puluh koma nol lima"; Skoog 60,053) | hitung dari CIAAW; Skoog hlm. 1013 | ✓ (hitung) |
| M KHP (KHC₈H₄O₄) | 204,222 g/mol (narasi "dua ratus empat koma dua"; Skoog 204,2) | hitung; Skoog hlm. 350 (PDF 368) | ✓ (hitung) |
| 5,4 % → 0,8992 M → 22,48 mL; 5,9 % → 0,9825 M → 24,56 mL (skema naskah, NaOH 0,1000 M) | selisih 2,08 mL | hitung | ✓ (hitung) |
| Satu tetes ≈ 0,05 mL ⇒ 2,08 mL ≈ 42 tetes ("kira-kira empat puluh") | "Five drops (0.25 mL)" | Skoog soal 14-49, hlm. 364 (PDF 382) | ✓ (volume tetes bergantung ujung buret; narasi "kira-kira") |
| Hitungan contoh: 24,56 mL → 2,456 mmol → 147,5 mg → × 4 → 590,0 mg / 10,00 mL → 5,90 % (b/v) | 589,95 mg → 5,8995 % | hitung | ✓ (hitung) — data rekaan, diberi label "contoh hitungan" |

## Standardisasi & KHP

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| NaOH tidak tersedia dalam kemurnian standar primer; harus distandardisasi | "These bases cannot be obtained in primary-standard purity, and so, all must be standardized" | Skoog §14A-3, hlm. 349 (PDF 367) | ✓ |
| NaOH (padat & larutan) bereaksi dengan CO₂ udara | "react rapidly with atmospheric carbon dioxide" | Skoog §14A-3, hlm. 349 | ✓ |
| NaOH padat menyerap uap air (higroskopis) | — | pengetahuan umum; rencana seri fakta no. 9 | ⚠ tidak dicari kalimatnya di Skoog; klaim standar dan aman |
| KHP: standar primer hampir ideal, tidak higroskopis, massa molar besar | "nearly ideal primary standard … nonhygroscopic … relatively large molar mass (204.2 g/mol)" | Skoog §14A-4, hlm. 350 (PDF 368) | ✓ |
| Massa molar besar → galat timbang relatif kecil | konsekuensi langsung dari definisi galat relatif | Skoog bab 14 (alasan standar primer) | ✓ |
| KHP punya satu proton asam (1 : 1 dengan NaOH) | "mass fraction of total acid (replaceable H⁺) expressed as KHP" | Sertifikat SRM 84L hlm. 1 | ✓ |
| NIST SRM 84L: kemurnian 99,9934 % ± 0,0076 % (U, k = 2,04, ≈ 95 %); asidimetri saja, **bukan** standar pH; berlaku s.d. 1 Apr 2029 | narasi "sembilan puluh sembilan koma sembilan sembilan persen" | https://tsapps.nist.gov/srmext/certificates/84l.pdf (terbit 5 Feb 2024) | ✓ |
| Ketelusuran ke SI ("sampai ke satuan internasional") | "Metrological traceability … to the International System of Units (SI)" | Sertifikat SRM 84L hlm. 1 | ✓ |
| Massa KHP 0,7–0,8 g, ditimbang ke 0,1 mg; contoh naskah 0,7654 g → 37,48 mL → 0,1000 M | 3,7479 mmol ÷ 37,48 mL = 0,09999 M | Skoog §37C-7, hlm. 1013 (PDF 1031); hitung | ✓ (hitung; data rekaan) |

## Titrasi & indikator

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Fenolftalein berubah di pH 8,0–10,0 (bening → merah muda) | Gbr. 12-1 | Skoog hlm. 290 (PDF 308) | ✓ |
| pH titik ekivalen cuka (skema naskah) | [OAc⁻] 0,0496 M, Kb = Kw/Ka → pH 8,73 ("sekitar delapan koma tujuh") | hitung dari Ka Skoog (Lampiran 3) | ✓ (hitung) |
| Titik akhir = merah muda bertahan ≥ 30 s | "first permanent (≥ 30 s) pink color" | Skoog §37C-9, hlm. 1013 | ✓ |
| Titik akhir (teramati) ≠ titik ekivalen (teoretis) | definisi | Skoog §11A, hlm. 269 (PDF 287) | ✓ |
| Di dekat titik akhir, kurang dari setengah tetes mengubah warna | "less than half a drop of titrant should cause the indicator to change color" | Skoog Gbr. 11-1, hlm. 269 | ✓ (dipakai visual) |

## Galat & ketidakpastian

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Presisi = kedekatan hasil yang diperoleh dengan cara yang sama | "Precision describes the reproducibility of measurements" | Skoog §3A-2, hlm. 40 (PDF 58) | ✓ |
| Akurasi = kedekatan dengan nilai benar/diterima; lebih sulit ditentukan karena nilai benar biasanya tak diketahui | "Accuracy indicates the closeness of the measurement to the true or accepted value" | Skoog §3A-3, hlm. 41 (PDF 59) | ✓ |
| Definisi IUPAC (Gold Book) akurasi & presisi | — | https://goldbook.iupac.org/terms/view/A00060 · https://goldbook.iupac.org/terms/view/P04799 | ⚠ situs tidak terjangkau dari sandbox (ENOTFOUND/403); narasi memakai definisi Skoog yang sejalan |
| Papan panah 4 kombinasi akurasi/presisi | Gbr. 3-2 | Skoog hlm. 41 | ✓ |
| Galat absolut E = xᵢ − x_t (bertanda); galat relatif E_r = E/x_t × 100 % | pers. 3-3, 3-4 | Skoog hlm. 41–42 (PDF 59–60) | ✓ |
| Galat relatif label vs hasil | (5,9 − 5,4)/5,4 = +9,26 % ("sekitar sembilan persen") | hitung | ✓ (hitung) |
| Galat acak → presisi; sistematik → akurasi, arah sama, penyebab tertentu, bias; galat kasar (salah baca 9 jadi 4) | — | Skoog §3B, hlm. 43 (PDF 61) | ✓ |
| Jenis galat sistematik: alat, metode, personal | — | Skoog §3B, hlm. 43 (PDF 61) | ✓ (contoh pipet patah / analis "merah muda lebih tua" = ilustrasi sendiri) |
| Mengulang tidak menghilangkan galat sistematik | — | Skoog §3B | ✓ |
| Galat karbonat: CO₂ terserap → dengan fenolftalein CO₃²⁻ hanya menangkap 1 H⁺ → C efektif turun → galat sistematik negatif pada C basa (hasil analit terlalu tinggi bila C lama dipakai) | contoh 14-2: 0,05118 M menyerap 0,1962 g CO₂/L → 0,04672 M, galat −8,7 % | Skoog §14A-3, hlm. 349 (PDF 367) | ✓ |
| "Cuka 5,4 % akan terbaca ≈ 5,9 %" dengan galat itu | 5,40 × 0,05118/0,04672 = 5,92 % | hitung | ✓ (hitung) — narasi menegaskan "bukan berarti itu yang terjadi" |
| Buret 50 mL: skala 0,1 mL, bacaan ditaksir ke 0,01 mL, ketidakpastian ≈ 0,02 mL per bacaan | "estimate the position … to about 0.02 mL"; "Buret readings should be estimated to the nearest 0.01 mL" | Skoog §4D-1, hlm. 71 (PDF 89); hlm. 987 (PDF 1005) | ✓ |
| Dua bacaan → s_V = √(0,02² + 0,02²) = 0,028 mL | contoh 4-8 | Skoog hlm. 74 (PDF 92) | ✓ |
| 0,028/24,56 ≈ 1/877 ("sekitar satu per sembilan ratus") | 0,114 % | hitung | ✓ (hitung) |
| Paralaks saat membaca meniskus | — | Skoog §36G, hlm. 984 (PDF 1002) & hlm. 71 (PDF 89) | ✓ |
| Toleransi kelas A: pipet 10 mL ± 0,02; pipet 25 mL ± 0,03; labu 100 mL ± 0,08; buret 50 mL ± 0,05 mL | tabel pinggir | Skoog §36G, hlm. 982–983 (PDF 1000–1001) | ✓ |
| Neraca analitik ± 0,0001 g | contoh 4-8 | Skoog hlm. 74 | ✓ |
| Perambatan untuk kali/bagi: ketidakpastian relatif dijumlah kuadrat lalu diakarkan | contoh 4-8 / §6B (tabel perambatan) | Skoog hlm. 74 | ✓ |
| Ketidakpastian relatif hasil | √(0,20² + 0,08² + 0,12² + 0,115² + 0,078²) % = 0,283 % ≈ 0,3 % → ± 0,017 ≈ ± 0,02 % (b/v) | hitung | ✓ (hitung) — penyederhanaan: toleransi diperlakukan sebagai ketidakpastian standar, galat acak ulangan tidak termasuk. Rencana seri menulis "≈ 0,4 %"; hitungan ulang memberi ≈ 0,3 % (0,30 % bila galat titik akhir setengah tetes ikut). |
| "Selisih lebih dari dua puluh kali ketidakpastian" | 0,5/0,02 = 25; 0,5/0,017 ≈ 30 | hitung | ✓ (hitung) |
| Skema Kuna (1 mL cuka, 7 mL NaOH) pun hanya ≈ 0,7 % relatif | √((0,028/7)² + (0,006/1)²); pipet 1 mL kelas A ± 0,006 | Skoog hlm. 982; hitung | ✓ (hitung) — vonis "selisih nyata terhadap ketidakpastian alat" tetap berlaku |

## Dunia nyata

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Cuka makan punya SNI | SNI 01-3711-1995 (cuka makan) dan SNI 01-4371-1996 (cuka fermentasi) tercantum di skema sertifikasi BSN | https://bsn.go.id/uploads/download/skema_cuka_%E2%80%93_lampiran_xxx_perka_bsn_11_tahun_2019.pdf (dari hasil pencarian; unduhan diputus server dari sandbox) | ⚠ nomor dari cuplikan pencarian; narasi hanya "cuka makan juga punya Standar Nasional Indonesia", tanpa nomor |
| Kadar minimal asam asetat menurut SNI (sering dikutip 4 %) | sumber sekunder tidak konsisten (4 %, 4–12 %, dan nomor SNI tertukar) | jurnal-jurnal hasil pencarian | ⚠ **tidak diucapkan**. Cek teks SNI asli (akses-sni.bsn.go.id) sebelum menambahkannya. |
| Titrator otomatis memakai elektrode pH | — | Skoog §14B (titik akhir potensiometrik, PDF 369) | ✓ |
| Laboratorium terakreditasi wajib menunjukkan ketelusuran ke bahan acuan & SI | prinsip ISO/IEC 17025 | — | ⚠ tidak dicek ke teks standar; narasi memakai kalimat umum |

## Ringkasan butir ⚠

1. Definisi IUPAC Gold Book (situs diblokir) → dipakai definisi Skoog.
2. Nomor SNI cuka hanya dari cuplikan pencarian; batas kadar minimal tidak diucapkan.
3. Satuan label 5,4 % (b/v atau b/b) tidak disebut makalah; massa jenis cuka ≈ 1,01 g/mL belum dicek (tidak diucapkan).
4. Klaim umum tanpa kutipan halaman: NaOH higroskopis, praktik pengambilan sampel acak, kewajiban ketelusuran laboratorium terakreditasi — kata-kata dibuat umum ("biasanya", tanpa nama lembaga).
