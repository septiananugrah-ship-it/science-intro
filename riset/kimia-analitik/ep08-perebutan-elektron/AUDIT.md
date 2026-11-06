# Audit angka & klaim — *Perebutan Elektron* (Seni Mengukur Ep. 8: Titrasi Redoks)

Dicek 3 Nov 2026. Buku: Skoog, West, Holler & Crouch, *Fundamentals of Analytical Chemistry* ed. 10 (Cengage 2022) = `materi/Analytical Chemistry.pdf`; halaman ditulis "hlm. cetak (PDF hlm. N)", selisih tetap +18 (hlm. cetak 483 = PDF 501), dibaca per halaman dengan `pdftotext -f N -l N`. Sumber daring diunduh langsung dari sandbox: USDA FoodData Central (endpoint `fdc.nal.usda.gov/portal-data/external/<fdcId>`, data SR Legacy; API `api.nal.usda.gov` dengan DEMO_KEY ditolak 429), artikel Wikipedia *Sodium hypochlorite* (teks mentah). Tidak dibuka: label pemutih/antiseptik produk Indonesia, Farmakope Indonesia/USP, lembar SDS produsen, sumber primer mekanisme autokatalisis. Semua hitungan diulang dengan `hitung.py`.
Legenda: ✓ = cocok dengan sumber primer/buku · ✓ (hitung) = diturunkan dengan `hitung.py` dari tetapan yang sudah dicek · ⚠ = belum diverifikasi ke sumber primer / sumber sekunder / ada catatan.

## Potensial elektrode

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| MnO₄⁻ + 8H⁺ + 5e⁻ ⇌ Mn²⁺ + 4H₂O | E° = 1,51 V | Skoog §18C-1 hlm. 479 (PDF 497); Lampiran 5 hlm. A-13 (PDF 1106) | ✓ |
| Ce⁴⁺ + e⁻ ⇌ Ce³⁺ | E°′ = 1,44 V (H₂SO₄ 1 M); 1,70 (HClO₄), 1,61 (HNO₃) | Skoog hlm. 479; Lampiran 5 hlm. A-12 | ✓ |
| Fe³⁺ + e⁻ ⇌ Fe²⁺ | E° = 0,771 V; E°′ 0,700 (HCl 1 M), 0,732 (HClO₄ 1 M), 0,68 (H₂SO₄ 1 M) | Skoog Lampiran 5 hlm. A-13 | ✓ |
| I₃⁻ + 2e⁻ ⇌ 3I⁻ | E° = 0,536 V | Skoog §18C-3 hlm. 489 (PDF 507); Lampiran 5 hlm. A-13 | ✓ |
| S₄O₆²⁻ + 2e⁻ ⇌ 2S₂O₃²⁻ | E° = 0,08 V | Skoog Lampiran 5 hlm. A-14 (PDF 1107) | ✓ |
| 2CO₂ + 2H⁺ + 2e⁻ ⇌ H₂C₂O₄ | E° = −0,49 V | Skoog Lampiran 5 hlm. A-12 (PDF 1105) | ✓ |
| H₂O₂ + 2H⁺ + 2e⁻ ⇌ 2H₂O | E° = 1,776 V (bab 18A: 1,78) | Skoog Lampiran 5 hlm. A-13; §18A hlm. 475 (PDF 493) | ✓ |
| O₂ + 2H⁺ + 2e⁻ ⇌ H₂O₂ | E° = 0,682 V | Skoog Lampiran 5 hlm. A-13 | ✓ |
| MnO₄⁻/MnO₂ dan MnO₂/Mn²⁺ | 1,695 V dan 1,23 V | Skoog Lampiran 5 hlm. A-13 | ✓ |
| HClO/Cl₂; Cl₂/Cl⁻ | 1,63 V; 1,359 V | Skoog Lampiran 5 hlm. A-12 | ✓ (tidak diucapkan) |
| Ferroin: merah (Fe²⁺) → biru pucat (Fe³⁺), transisi ≈ 1,11 V dalam H₂SO₄ 1 M; terurai > 60 °C | — | Skoog §17E hlm. 466–467 (PDF 484–485), Tabel 17-3 | ✓ |
| Rentang perubahan indikator ≈ ±0,0592/n V | — | Skoog §17E hlm. 466 | ✓ (tidak diucapkan) |
| E° intensif, tidak dikalikan koefisien | prinsip | rencana seri "fakta keliru" #23; konsisten Skoog bab 16–17 | ✓ |
| Definisi potensial formal: rasio konsentrasi analitik oks/red = 1, zat lain ditentukan; diberi tanda aksen | — | Skoog §16C "Formal Potentials" hlm. 431 (PDF 449) | ✓ |
| Penurunan E°′ Fe karena kompleks Fe³⁺ dengan sulfat/klorida | penjelasan | Skoog §16C hlm. 430–431 (efek kesetimbangan bersaing, umum); spesifik kompleks sulfat-Fe³⁺ pengetahuan umum | ⚠ penjelasan kualitatif; "35×" hanya di lampiran |
| 2,303RT/F | 0,05916 V (Skoog 0,0592) | tetapan fisika (CODATA) | ✓ |

## Termodinamika, kinetika & benang merah

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Reaksi MnO₄⁻–oksalat "kompleks dan lambat bahkan pada suhu tinggi kecuali ada Mn(II) sebagai katalis"; tetes pertama perlu "several seconds"; makin cepat karena autokatalisis | — | Skoog §18C-1 hlm. 483 (PDF 501) | ✓ |
| Definisi autokatalisis: produk mengkatalisis reaksi, laju naik seiring reaksi berjalan | — | Skoog catatan pinggir hlm. 483 | ✓ |
| Sejumput MnSO₄ di awal → tetes pertama langsung hilang | — | konsekuensi pernyataan Skoog hlm. 483; demonstrasi umum | ⚠ tanpa angka waktu; tidak ada eksperimen yang dicek |
| Mekanisme lewat perantara Mn(III)–oksalato | — | literatur kinetika (belum dibuka) | ⚠ **tidak diucapkan** |
| Laju autokatalitik berbentuk S | — | sifat umum autokatalisis | ⚠ bentuk kualitatif (visual) |
| log K MnO₄⁻ + oksalat | 2,00 V × 10/0,05916 = 338 | `hitung.py` dari Lampiran 5 | ✓ (hitung) |
| log K MnO₄⁻ + H₂O₂ | 140 | `hitung.py` | ✓ (hitung; tidak diucapkan) |
| K Ce⁴⁺ + Fe²⁺ | 7,0 × 10¹² (Skoog: 7 × 10¹²) | `hitung.py`; Skoog §17D hlm. 464 (PDF 482) | ✓ |
| 2MnO₄⁻ + 3Mn²⁺ + 2H₂O → 5MnO₂ + 4H⁺, K ≈ 10⁴⁷, titik akhir memudar ≈ 30 s | log K hitung 47,2 | Skoog §18C-1 hlm. 480 (PDF 498); Contoh hlm. 452 | ✓ |
| Titik akhir = merah muda bertahan ≈ 30 s | — | Skoog hlm. 483; §37F-2 hlm. 1024 (PDF 1042) | ✓ |
| Suhu titrasi oksalat 80–90 °C, panaskan ulang bila < 60 °C (teks bab: 60–90 °C) | narasi "hampir 85 °C" | Skoog §37F-2 hlm. 1024; hlm. 483 | ✓ |
| Titrasi panas: konsumsi KMnO₄ 0,1–0,4 % lebih rendah (oksidasi udara oksalat); cara 90–95 % dingin lalu panaskan | — | Skoog hlm. 483 | ✓ |
| "Pasti terjadi ≠ cepat" (ΔG < 0 ≠ cepat) | prinsip | rencana seri #20 | ✓ |

## Permanganometri

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| 0,01–0,02 mL KMnO₄ 0,02 M dalam 100 mL sudah terlihat ungu | ≈ 2–4 × 10⁻⁶ M | Skoog §18C-1 hlm. 480 | ✓ |
| "kurang dari setengah tetes" | tetes ≈ 0,05 mL | volume tetes buret umum (≈ 0,05 mL, seri Ep. 3) | ✓ (konvensi seri) |
| Reduksi 5e⁻ ke Mn²⁺ hanya pada asam kuat ≥ 0,1 M; kurang asam → Mn(III), Mn(IV), Mn(VI) | — | Skoog §18C-1 hlm. 479 | ✓ |
| KMnO₄ tidak dipakai dalam HCl (oksidasi lambat Cl⁻ → titran berlebih) | — | Skoog hlm. 480 | ✓ |
| E(MnO₄⁻/Mn²⁺) turun 0,0947 V per satuan pH | 8/5 × 0,05916 | `hitung.py` (Nernst) | ✓ (hitung) |
| KMnO₄ bukan standar primer: MnO₂ dalam padatan, penguraian dikatalisis cahaya, panas, asam, basa, Mn²⁺, MnO₂ | — | Skoog hlm. 480–481 | ✓ |
| Persiapan: didihkan, diamkan, saring kaca masir (bukan kertas), botol gelap | — | Skoog hlm. 481, Contoh 18-2 hlm. 482; §37F-1 hlm. 1023 | ✓ |
| Na₂C₂O₄ standar primer, 134,00 g/mol; 2MnO₄⁻ + 5H₂C₂O₄ + 6H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O | — | Skoog hlm. 483 & Contoh 18-3/18-4 | ✓ |
| Massa oksalat 0,2–0,3 g untuk ≈ 0,02 M; blanko H₂SO₄ 1 M | — | Skoog §37F-2 hlm. 1024 | ✓ |
| Contoh standardisasi: 0,2500 g, 37,25 − 0,05 mL → 0,02006 M | — | `hitung.py`; rumus dicek dengan Skoog Contoh 18-4 (0,01145 M) | ✓ (hitung) — **angka rekaan** |
| Ce(IV) stabil, tahan Cl⁻, lebih mahal (≈ 10× KMnO₄), perlu indikator | — | Skoog hlm. 480 | ✓ |
| Dikromat 1,33 V (formal), stabil; Cr(VI) beracun/karsinogen | — | Skoog Tabel 18-3 hlm. 479; Feature 18-1 & Ep. 6 (Cr(VI) karsinogen) | ✓ |

## H₂O₂ antiseptik

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| H₂O₂ ≈ 3 % (b/b) dijual di apotek sebagai disinfektan; reaksi 5H₂O₂ + 2MnO₄⁻ + 6H⁺ → 5O₂ + 2Mn²⁺ + 8H₂O; diencerkan & diasamkan H₂SO₄ encer | — | Skoog Contoh 18-5 hlm. 485–486 (PDF 503–504) | ✓ |
| H₂O₂ terurai oleh panas (alasan tidak dipanaskan) / terurai pelan selama simpan | — | Skoog hlm. 475 (H₂O₂ berlebih dihilangkan dengan mendidihkan) mendukung "terurai oleh panas" | ✓ (panas) · ⚠ laju penguraian botol terbuka tidak dicek |
| Autokatalisis Mn²⁺ juga pada titrasi H₂O₂ ("tetes pertama sedikit ragu") | — | pengetahuan umum | ⚠ tidak ada di Skoog; boleh dihapus |
| Contoh: 5,000 g → 100 mL → 25 mL; 21,40 mL KMnO₄ 0,02006 M → 2,92 % (b/b) | — | `hitung.py` | ✓ (hitung) — **angka rekaan** |
| "10 volume" ≈ 3 % (b/v) | 9,9 mL O₂ (0 °C, 1 atm) per mL | `hitung.py` | ✓ (hitung; tidak diucapkan) |
| Batas farmakope larutan H₂O₂ topikal (mis. 2,5–3,5 %) | — | USP / Farmakope Indonesia tidak dibuka | ⚠ **tidak diucapkan** |

## Iodium, kanji & tiosulfat

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Iodium oksidator lemah, selektif untuk reduktor kuat; indikator peka & reversibel; larutan kurang stabil | — | Skoog §18C-3 hlm. 489 | ✓ |
| Kelarutan I₂ dalam air ≈ 0,001 M; dilarutkan dalam KI sebagai I₃⁻ (K = 7,1 × 10²) | — | Skoog hlm. 489 | ✓ (angka tidak diucapkan) |
| Kanji: biru tua dari I₃⁻ yang masuk heliks amilosa (Skoog: "β-amylose") | — | Skoog §18B-2 hlm. 477 (PDF 495), Gambar 18-2 | ✓ (narasi "amilosa") |
| Kanji terurai irreversibel pada I₂ pekat → ditambahkan saat coklat menjadi kuning pucat; boleh di awal bila I₂ titran | — | Skoog hlm. 477 | ✓ |
| I₂ ≈ 5 × 10⁻⁶ M sudah berwarna | — | Skoog hlm. 476 | ✓ (tidak diucapkan) |
| I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻ kuantitatif, perlu pH < 7 | — | Skoog §18B-2 hlm. 476 (PDF 494) | ✓ |
| Tiosulfat salah satu sedikit reduktor yang stabil terhadap udara; terurai oleh asam, bakteri (paling stabil pH 9–10) | — | Skoog hlm. 476–477 | ✓ |
| Standardisasi dengan KIO₃: IO₃⁻ + 5I⁻ + 6H⁺ → 3I₂ + 3H₂O; 1 IO₃⁻ = 3 I₂ = 6 S₂O₃²⁻ | Contoh 18-1: 0,1210 g, 41,64 mL → 0,08147 M | Skoog hlm. 477–478 (PDF 495–496) | ✓ |
| Istilah "iodimetri" (titran I₂) vs "iodometri" (I₂ dibebaskan, dititrasi tiosulfat) | — | konvensi buku teks; prinsip ✓ Skoog §18B-2/§18C-3 | ⚠ istilah tidak muncul di Skoog |

## Vitamin C

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| C₆H₈O₆ → C₆H₆O₆ + 2H⁺ + 2e⁻; dititrasi iodium | — | Skoog Tabel 18-6 hlm. 490 (PDF 508); pembuka bab 18 hlm. 473 | ✓ |
| Jambu biji (guava) mentah | 228 mg/100 g (n = 2; 173–283) | USDA FDC 173044 "Guavas, common, raw" (SR Legacy 09139) | ✓ |
| Jeruk manis mentah | 53,2 mg/100 g (n = 145) | USDA FDC 169097 "Oranges, raw, all commercial varieties" | ✓ |
| Jus jeruk segar | 50,0 mg/100 g | USDA FDC 169098 "Orange juice, raw" | ✓ |
| Pepaya | 60,9 mg/100 g | USDA FDC 169926 | ✓ |
| Kiwi hijau / stroberi / nanas / mangga / jeruk keprok / tomat / apel berkulit | 92,7 / 58,8 / 47,8 / 36,4 / 26,7 / 13,7 / 4,6 mg/100 g | USDA FDC 168153 / 167762 / 169124 / 169910 / 169105 / 170457 / 171688 | ✓ |
| "Jambu biji lebih dari empat kali jeruk" | 228/53,2 = 4,3 | `hitung.py` | ✓ (hitung) |
| Varietas jambu biji/jeruk lokal Indonesia bisa berbeda | — | TKPI Kemenkes tidak dibuka | ⚠ angka disebut sebagai data USDA |
| Contoh: 25,00 mL jus, 13,60 mL I₂ 0,00500 M → 47,9 mg/100 mL | — | `hitung.py` | ✓ (hitung) — **angka rekaan** |
| Vitamin C teroksidasi udara & panas → titrasi segera | — | pengetahuan umum | ⚠ kualitatif |
| Massa molar asam askorbat | 176,12 g/mol | berat atom standar | ✓ (hitung) |

## Pemutih (hipoklorit)

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Penentuan NaOCl pemutih: OCl⁻ + 2I⁻ + 2H⁺ → Cl⁻ + I₂ + H₂O (KI berlebih), I₂ dititrasi tiosulfat | — | Skoog §18B-2 hlm. 476 | ✓ |
| Pemutih rumah tangga 3–8 % NaOCl saat dibuat, menurun selama simpan; distabilkan sedikit NaOH | — | https://en.wikipedia.org/wiki/Sodium_hypochlorite (mengutip OxyChem; Smith 1994) | ✓ (lewat Wikipedia; sekunder) |
| "Banyak label menulis sekitar 5 %" | — | label produk tidak difoto/dibuka; Wikipedia menyebut contoh AS 5,25 % | ⚠ **belum dicek ke label produk Indonesia** |
| Klorin aktif: 1 OCl⁻ ≙ 1 Cl₂ (sama-sama 2e⁻); faktor 70,90/74,44 = 0,952 | — | `hitung.py` | ✓ (hitung) · definisi "available chlorine" standar industri ⚠ tidak dibuka |
| Contoh: 1,000 mL pemutih per alikuot, 12,60 mL tiosulfat 0,1000 M → 4,69 % (b/v) NaOCl = 4,47 % klorin aktif | — | `hitung.py` | ✓ (hitung) — **angka rekaan** |
| Massa jenis pemutih ≈ 1,08 g/mL | — | asumsi | ⚠ hanya lampiran |
| Pemutih + asam → gas Cl₂; + amonia → gas beracun | — | pengetahuan umum keselamatan | ⚠ sumber resmi (CDC/EPA/BPOM) tidak dibuka |

## Kurva titrasi redoks

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Sumbu tegak = potensial elektrode; sebelum ekivalen pakai Nernst analit, sesudah pakai titran | — | Skoog §17D hlm. 452–453 (PDF 470–471) | ✓ |
| E_ek = (E°′Fe + E°′Ce)/2 = 1,06 V | — | Skoog pers. 17-12, hlm. 454–456 | ✓ |
| Tabel 50,00 mL Fe²⁺ 0,0500 M + Ce⁴⁺ 0,100 M: 0,64 / 0,69 / 0,72 / 0,76 / 0,82 / 1,06 / 1,30 / 1,36 / 1,40 V (5–30 mL) | hitung eksak sama | Skoog Tabel 17-2 hlm. 456 (PDF 474); `hitung.py` | ✓ |
| Separuh jalan: E = E°′(Fe) = 0,68 V; 2× ekivalen: E = E°′(Ce) | — | `hitung.py` | ✓ (hitung) |
| Kurva redoks umumnya tak bergantung pengenceran (beda dengan kurva lain) | — | Skoog §17D-3 hlm. 464 (PDF 482) | ✓ |
| Lompatan makin besar bila reaksi makin sempurna (ΔE° besar) | — | Skoog hlm. 464, Gambar 17-5 | ✓ |
| Lompatan 24,90 → 25,10 mL ≈ 0,48 V ("hampir setengah volt") | — | `hitung.py` | ✓ (hitung) |
| Fe²⁺–MnO₄⁻: E_ek = (5 × 1,51 + 0,68)/6 = 1,37 V ([H⁺] = 1), kurva tak simetris | — | `hitung.py` (rumus sejenis Skoog Contoh 17-11); "asymmetric" disebut Skoog Gambar 17-4 | ✓ (hitung) · campuran E° standar (Mn) & formal (Fe) ⚠ kecil |

## Berkas `materi/` yang tidak relevan untuk episode ini

Artikel indikator alami (Hanifa 2024, Leba 2023/2024, Agustina 2022), Kuna 2023, Darwish 2026, Vilasó-Cadre 2023, Hakim 2023, artikel laju reaksi (Salwa 2026 HCl–tiosulfat hanya menyinggung tiosulfat sebagai pereaksi kinetika, tidak dipakai), dan Chang & Overby tidak dipakai.
