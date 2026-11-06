# Audit angka & klaim — *Volt yang Bercerita* (Seni Mengukur Ep. 9: Potensiometri)

Dicek 3 Nov 2026. Buku: Skoog, West, Holler & Crouch, *Fundamentals of Analytical Chemistry* ed. 10 (Cengage 2022) = `materi/Analytical Chemistry.pdf`; halaman ditulis "hlm. cetak (PDF hlm. N)" (bab 19: PDF = cetak + 18), dibaca per halaman dengan `pdftotext -f N -l N`. Sumber daring diunduh langsung dari sandbox (curl): NIST CODATA (physics.nist.gov/cuu), sertifikat NIST SRM 185i, 186g, 187f (tsapps.nist.gov), metadata & abstrak Crossref untuk Buck dkk. 2002, biografi Arnold Beckman di Science History Institute. Tidak bisa dibuka: teks penuh IUPAC (degruyterbrill.com & publications.iupac.org → 403/kosong), halaman landmark ACS (Incapsula), dokumen latar fluorida WHO (404), EPA (403), teks SNI/Permenkes. Semua hitungan diulang dengan `hitung.py`.
Legenda: ✓ = cocok dengan sumber primer/buku · ✓ (hitung) = diturunkan dengan `hitung.py` dari tetapan yang sudah dicek · ⚠ = belum diverifikasi ke sumber primer / sumber sekunder / ada catatan.

## Tetapan

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Tetapan gas molar R | 8,314 462 618… J mol⁻¹ K⁻¹ (eksak) | NIST CODATA 2018: https://physics.nist.gov/cgi-bin/cuu/Value?r | ✓ |
| Tetapan Faraday F | 96 485,332 12… C mol⁻¹ (eksak) | NIST CODATA 2018: https://physics.nist.gov/cgi-bin/cuu/Value?f | ✓ |
| "R dan F kini eksak dalam SI" | keduanya hasil kali tetapan definisi (N_A·k, N_A·e) sejak redefinisi SI 2019 | halaman NIST di atas ("Standard uncertainty: (exact)") | ✓ |
| Kemiringan Nernst 25 °C | RT ln10/F = 59,159 mV → 59,16 mV/pH (Skoog membulatkan 0,0592 V) | `hitung.py`; Skoog pers. 19-9, hlm. 511 (PDF 529); Vilasó-Cadre (2023) hlm. 804–805 ("59.16 mV/pH at 298 K") | ✓ (hitung) |
| Ion bermuatan 2: setengah kemiringan | 29,58 mV per dekade (Skoog: "29.58 mV" di Gambar 19-17, Ca²⁺) | `hitung.py`; Skoog hlm. 530 (PDF 548) | ✓ |
| Koefisien suhu kemiringan | 0,1984 mV/K ("≈ 0,2 mV per derajat") | `hitung.py` | ✓ (hitung) |
| Kemiringan 0 / 37 / 60 °C | 54,20 / 61,54 / 66,10 mV/pH | `hitung.py` | ✓ (hitung) |
| Ka CH₃COOH | 1,75 × 10⁻⁵ (pKa 4,757) | Skoog Lampiran 3, hlm. A-8 (PDF 1101); sama dengan Ep. 3 | ✓ |
| Ka HF | 6,8 × 10⁻⁴ (pKa 3,17) | Skoog Lampiran 3 (PDF 1101) | ✓ |
| Kw | 1,00 × 10⁻¹⁴ (konvensi Ep. 3) | Skoog bab 9/12; `ep03-satu-tetes/AUDIT.md` | ✓ |
| E° AgCl/Ag; E° Hg₂Cl₂/Hg | 0,222 V; 0,268 V (0,244 dalam KCl jenuh) | Skoog Lampiran 5 (PDF ±1105–1110) | ✓ |

## Sel, elektrode acuan, sambungan

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Potensiometri = mengukur potensial sel tanpa arus berarti | — | Skoog pembuka bab 19, hlm. 500 (PDF 518) | ✓ |
| Potensial mutlak satu elektrode tidak bisa diukur | — | Skoog §19A, hlm. 501 (PDF 519), merujuk Feature 16-3 | ✓ |
| E_sel = E_ind − E_acuan + E_j; acuan di kiri (konvensi IUPAC) | pers. 19-1 | Skoog hlm. 501–502 (PDF 519–520) | ✓ |
| SHE jarang dipakai harian: merepotkan, bahaya kebakaran | — | Skoog catatan pinggir hlm. 501 (PDF 519) | ✓ |
| Ag/AgCl: AgCl(s) + e⁻ ⇌ Ag(s) + Cl⁻; KCl jenuh 0,199 V; 3,5 M 0,205 V (25 °C) | — | Skoog §19B-2 & Tabel 19-1, hlm. 503–504 (PDF 521–522) | ✓ |
| SCE 0,244 V (25 °C); "jenuh" = KCl, bukan kalomel | — | Skoog §19B-1, hlm. 502 (PDF 520) + catatan pinggir; hlm. 504 | ✓ |
| Ketergantungan suhu acuan (15–35 °C) | SCE 0,2511 → 0,2376; Ag/AgCl 3,5 M 0,212 → 0,197 V | Skoog Tabel 19-1 (PDF 521) | ✓ |
| SCE makin jarang karena raksa; Ag/AgCl bisa > 60 °C, kalomel tidak | — | Skoog hlm. 504 (PDF 522) | ✓ |
| Potensial sambungan HCl 1 M / 0,01 M: H⁺ lebih gesit, sisi encer positif, "beberapa perseratus volt" | — | Skoog §19C, Gambar 19-4, hlm. 505 (PDF 523) | ✓ |
| Jembatan KCl jenuh: mobilitas K⁺ ≈ Cl⁻ → E_j beberapa mV | — | Skoog §19A & §19C (PDF 519, 523) | ✓ |

## Elektrode kaca (benang merah)

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Tebal selaput 0,03–0,1 mm; hambatan 50–500 MΩ | — | Skoog catatan pinggir hlm. 507 (PDF 525) | ✓ |
| "Setebal rambut" | rambut ≈ 0,05–0,1 mm | pengetahuan umum | ⚠ kualitatif |
| Elektrode kombinasi: dua elektrode acuan Ag/AgCl (dalam & luar), larutan dalam HCl encer jenuh AgCl, frit | — | Skoog §19D-3, Gambar 19-7b, 19-8, hlm. 507–509 (PDF 525–527) | ✓ |
| Corning 015: ≈ 22 % Na₂O, 6 % CaO, 72 % SiO₂; spesifik H⁺ sampai pH ≈ 9 | — | Skoog hlm. 509 (PDF 527) | ✓ |
| Jaringan silikat 3D; kation bermuatan 1 bergerak & menghantar, 2+/3+ terkunci | — | Skoog hlm. 509–510 (PDF 527–528) | ✓ |
| Kaca harus terhidrasi; kering = tidak ada fungsi pH; bisa pulih dengan direndam | — | Skoog hlm. 510 (PDF 528) | ✓ |
| Tukar ion H⁺ + Na⁺Gl⁻ ⇌ Na⁺ + H⁺Gl⁻; permukaan hampir seluruhnya H⁺Gl⁻ (asam silikat) | pers. 19-5 | Skoog hlm. 510 (PDF 528) | ✓ |
| Potensial batas dari disosiasi H⁺Gl⁻ di dua permukaan; E_b = 0,0592 log(a₁/a₂) | pers. 19-6 s.d. 19-9 | Skoog hlm. 510–511 (PDF 528–529), Gambar 19-10 | ✓ |
| Tidak ada H⁺ yang menembus kaca; yang diukur beda muatan dua permukaan | — | Skoog hlm. 508 & 511–512 (konsentrasi H⁺ di dalam tetap; profil potensial) | ✓ (parafrase) |
| Tebal lapisan gel | puluhan–ratusan nm | tidak ada di Skoog ed. 10 | ⚠ tidak diucapkan |
| Potensial asimetri → kalibrasi minimal harian | — | Skoog hlm. 512 (PDF 530) | ✓ |
| Kaca pertama kali dilaporkan untuk pH tahun 1906 | — | Skoog §19D-2, hlm. 507 (PDF 525) | ✓ (nama Cremer ⚠ tidak diucapkan) |

## Galat elektrode kaca

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Galat alkali: pH terbaca terlalu rendah karena respons Na⁺; Corning 015 pH 12: Na⁺ 1 M → 11,3; 0,1 M → 11,7 | — | Skoog hlm. 512 (PDF 530), Gambar 19-11 (data Bates 1973) | ✓ |
| Koefisien selektivitas: E_b = L′ + 0,0592 log(a₁ + k_H,B b₁) | pers. 19-12 | Skoog hlm. 513 (PDF 531) | ✓ |
| k(H,Na) ≈ 4 × 10⁻¹² (dari titik 1 M) | memprediksi 11,85 untuk 0,1 M (Skoog 11,7) | `hitung.py` | ✓ (hitung) · model kasar, tidak diucapkan |
| Galat asam di pH < ≈ 0,5, terbaca terlalu tinggi; salah satu sebab: situs jenuh H⁺ | — | Skoog hlm. 514 (PDF 532) | ✓ |
| Kaca modern Li/Ba: selektivitas & umur lebih baik; galat alkali kecil sampai ≈ pH 12 | — | Skoog hlm. 509 & §19D-4 hlm. 514 (kurva E, F) | ✓ |
| Sampel kekuatan ion rendah (danau/sungai): galat 1–2 satuan pH, karena sambungan tak reprodusibel/frit tersumbat | — | Skoog §19F-4 butir 4, hlm. 533 (PDF 551) | ✓ |
| Galat 1 mV → ≈ 4n % galat aktivitas (Skoog: 3,89·n %; tak bisa dihilangkan) | 1+: 4,0 %; 2+: 8,1 % (eksponensial); 1 mV = 0,017 pH | Skoog hlm. 530 (PDF 548); `hitung.py` | ✓ |
| "pH jarang bisa dipercaya lebih teliti dari ≈ 0,01" | turunan dari 1 mV = 0,017 pH | `hitung.py` | ✓ (hitung) · ⚠ kalimat interpretatif |

## Kalibrasi, aktivitas, definisi pH

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Definisi operasional pH_U = pH_S − (E_U − E_S)/0,0592; "pH adalah apa yang diukur dengan elektrode kaca dan pH meter" | pers. 19-25 | Skoog hlm. 533–534 (PDF 551–552) | ✓ |
| Elektrode merespons aktivitas; penyangga standar berbasis aktivitas | — | Skoog hlm. 505 & 531 (PDF 523, 549) | ✓ |
| IUPAC 2002: metode primer = sel tanpa transferensi (sel Harned); pH besaran konvensional; 5–50 °C | Buck, Rondinini, Covington dkk., *Pure Appl. Chem.* 74(11), 2169–2200 (2002), https://doi.org/10.1351/pac200274112169 | abstrak via Crossref API | ✓ (abstrak; teks penuh tidak dibuka) |
| Ftalat 0,05 mol/kg: pH(S) 4,005 (25 °C); 4,003 (5 °C) … 4,031 (40 °C) | — | NIST SRM 185i: https://tsapps.nist.gov/srmext/certificates/185i.pdf | ✓ |
| Fosfat 1:1 0,025 mol/kg: 6,864 (25 °C); 6,951 (5 °C) … 6,837 (40 °C) | — | NIST SRM 186g: https://tsapps.nist.gov/srmext/certificates/186g.pdf | ✓ |
| Boraks 0,01 mol/kg: 9,195 (25 °C); 9,401 (5 °C); 9,088 (40 °C) | — | NIST SRM 187f: https://tsapps.nist.gov/srmext/certificates/187f.pdf | ✓ · ⚠ Buck dkk. mencantumkan 9,180 untuk boraks standar primer; narasi hanya 9,40/9,09 |
| Penyangga NIST dinyatakan dalam molal (mol/kg) | — | Skoog hlm. 534; sertifikat NIST | ✓ |
| Contoh kalibrasi (171,5 / 4,9 mV; 58,27 mV/pH = 98,5 %; sampel 105,0 mV → pH 5,146) | rekaan konsisten | `hitung.py` | ✓ (hitung) · angka elektrode rekaan |
| Tanpa ATC: kalibrasi 25 °C, sampel pH 10 di 35 °C → 10,10 | — | `hitung.py` (titik isopotensial di pH 7 diasumsikan) | ✓ (hitung) · ⚠ isopotensial pH 7 = asumsi elektrode umum |
| Batas penerimaan kemiringan 95–105 % | — | panduan pabrikan (umum) | ⚠ tidak diucapkan |
| Ep. 4: fosfat 0,100 M "pH 7" terbaca ≈ 6,63 karena kekuatan ion | — | `ep04-keras-kepala/NASKAH.md` & `AUDIT.md` (Davies) | ✓ (rujukan silang) |

## Titrasi potensiometrik

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Kurva 50,00 mL CH₃COOH 0,1000 M + NaOH 0,1000 M | pH 2,88 / 4,76 (25 mL) / 8,73 (50 mL) / 10,00 (50,10) / 11,00 (51) | `hitung.py` = `ep03-satu-tetes/titrasi.py` (neraca muatan eksak) | ✓ (hitung) |
| Tegangan (elektrode ideal, 0 mV di pH 7) | 243,7 / 132,7 / −26,9 (49,90) / −102,2 / −177,5 / −236,4 mV | `hitung.py` | ✓ (hitung) · konvensi tampilan |
| Setengah ekivalen pH = pKa → cara memperkirakan Ka | 4,757 | Skoog §19G-2 "Determining Dissociation Constants", hlm. 536 (PDF 554); `hitung.py` | ✓ |
| Turunan pertama: maksimum di titik belok; turunan kedua berganti tanda (dipakai titrator otomatis); asumsi kurva simetris / 1:1 | — | Skoog §19G-1, hlm. 535–536 (PDF 553–554) | ✓ |
| ΔpH/ΔV 12,7 /mL di 49,95 & 50,05; Δ² +97 → 0 → −97; nol di 50,000 mL; titik belok kontinu 50,000 mL | — | `hitung.py` | ✓ (hitung) |
| Keunggulan: tidak bergantung E mutlak, E_j hampir tetap, hasil = konsentrasi; berguna untuk sampel berwarna/keruh; perlu penambahan kecil dekat ekivalen | — | Skoog §19G, hlm. 534–535 (PDF 552–553) | ✓ |
| Vilasó-Cadre dkk. 2023: baja AISI 304 bekas potongan (4 × 0,5 cm × 0,5 mm), tanpa oksidasi; kemiringan −59,18 ± 0,37 mV/pH, R² 0,9996; titik akhir 9,25 mL (baja & kaca), 9,30 (bromtimol biru); HCl 0,0845 vs standar 0,0841 M (selisih 0,0004); menyimpang di atas pH 9,5; afiliasi Meksiko (UASLP) & Kuba (Universidad de Oriente) | *Turk. J. Chem.* 47(4), 801–813, https://doi.org/10.55730/1300-0527.3580 | `materi/Vilasó-Cadre et al. (2023).pdf`, abstrak, Tabel 2, Tabel 6, §2.2, §2.5 | ✓ (PDF lokal) |

## Elektrode ion selektif fluorida

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Membran kristal tunggal LaF₃ didoping EuF₂; respons 10⁰–10⁻⁶ M; hanya OH⁻ pengganggu serius | — | Skoog §19D-6, hlm. 518 (PDF 536) | ✓ |
| Fluorida air minum: sampel & standar diencerkan larutan NaCl + penyangga asetat + sitrat (TISAB); akurasi ≈ 5 % relatif, rentang ppm | — | Skoog §19F-2, hlm. 531 (PDF 549) | ✓ |
| Fraksi F⁻ bebas pH 3 / 4 / 5 / 5,5 | 40,5 / 87,2 / 98,6 / 99,5 % | `hitung.py` (Ka HF Skoog) | ✓ (hitung) |
| pH TISAB ≈ 5–5,5 | — | resep TISAB tidak dibuka | ⚠ narasi hanya "penyangga asetat" |
| Anion: E naik saat pA naik (tanda kebalikan kation) | pers. 19-22/19-24 | Skoog hlm. 528–529 (PDF 546–547) | ✓ |
| Contoh pasta gigi 1450 ppm → terukur 1448 ppm; ±1 mV → −3,8 % / +4,0 % | rekaan konsisten | `hitung.py` | ✓ (hitung) · angka rekaan |
| Pasta gigi dengan Na-monofluorofosfat perlu hidrolisis sebelum diukur dengan ESI | — | pengetahuan umum analisis pasta gigi | ⚠ tidak diucapkan |
| Batas fluorida pasta gigi Indonesia 1500 ppm (0,15 %) | Permenkes 445/1998 menurut jurnal | hasil pencarian (jurnal FKG; SNI 2588:2017 tidak terkonfirmasi) | ⚠ tidak diucapkan |
| WHO: fluorida air minum 1,5 mg/L; di atasnya risiko fluorosis gigi (dan rangka pada kadar lebih tinggi) | — | WHO chemical fact sheet fluoride: https://www.who.int/docs/default-source/wash-documents/wash-chemicals/fluoride-chemical-fact-sheet.pdf (isi dicek lewat cuplikan hasil pencarian; PDF tidak diunduh) | ⚠ (sekunder, tapi angka sangat mapan) |
| Air sumur 1,54 mg/L | rekaan | `hitung.py` | ✓ (hitung) · rekaan |

## Sejarah & jembatan harian

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Beckman 1934: teman sekelas (University of Illinois) bertugas mengukur keasaman jus lemon untuk "California Fruit Growers' Association", minta alat lebih tangguh | — | Science History Institute, *Arnold O. Beckman*: https://www.sciencehistory.org/education/scientific-biographies/arnold-o-beckman/ | ✓ |
| Memakai tabung vakum (baru) agar alat tangguh; "acidimeter" → pH meter elektronik pertama yang sukses komersial; lahir Beckman Instruments (kini Beckman Coulter) | — | Science History Institute (idem) | ✓ |
| Paten 1936; Model G diproduksi 1935–1950; Beckman 1900–2004 | — | Science History Institute (keterangan gambar) | ✓ (tidak diucapkan) |
| Nama organisasi resmi *California Fruit Growers Exchange* (Sunkist); nama teman Glen Joseph | — | pengetahuan umum | ⚠ tidak diucapkan |
| Kaitan "hambatan kaca besar → perlu penguat" | hambatan 50–500 MΩ (Skoog) + tabung vakum (SHI) | gabungan dua sumber | ✓ (inferensi wajar) · ⚠ SHI tidak menyebut hambatan secara eksplisit |
| Skala pH Sørensen 1909 | — | Science History Institute | ✓ (opsional, teks kecil) |
| Potensiometri mungkin teknik instrumen paling umum; pH di produk, klinik, limbah, samudra | — | Skoog pembuka bab 19 (PDF 518) & catatan pinggir hlm. 533 | ✓ |
| Alkalinitas air laut ditentukan dengan titrasi potensiometrik (kapal riset *Meteor*) | — | Skoog pembuka bab 19 (PDF 518) | ✓ |
| pH tanah diukur dalam suspensi air dan KCl | — | praktik umum ilmu tanah | ⚠ kualitatif, tanpa angka |
| pH perasan jeruk nipis ≈ 2,3 | ≈ 2–2,6 | pengetahuan umum | ⚠ label "contoh" |

## Berkas `materi/` yang tidak relevan untuk episode ini

Artikel indikator alami (Hanifa 2024, Leba 2023/2024, Agustina 2022), Kuna 2023, Hakim 2023, artikel laju reaksi, dan Chang & Overby tidak dipakai. Darwish 2026 hanya tersirat lewat Ep. 3 (tidak dikutip di sini).
