# Audit angka & klaim — *Menimbang yang Tak Terlihat* (Seni Mengukur Ep. 7: Analisis Gravimetri)

Dicek 3 Nov 2026. Buku: Skoog, West, Holler & Crouch, *Fundamentals of Analytical Chemistry* ed. 10 (Cengage 2022) = `materi/Analytical Chemistry.pdf`; halaman ditulis "hlm. cetak (PDF hlm. N)", offset PDF = cetak + 18, dibaca per rentang dengan `pdftotext -f N -l M`. Sumber daring diunduh langsung dengan `curl` dari sandbox: ciaaw.org (berat atom), nobelprize.org (ringkasan & biografi Richards 1914), cdn.who.int (dokumen latar sulfat), semspub.epa.gov (tabel gangguan gravimetri sulfat), web.lemoyne.edu (kutipan Richards & Lembert 1914), en.wikipedia.org (kotak info BaSO₄ & Richards, mengutip CRC). Tidak bisa dibuka: goldbook.iupac.org (403; hanya cuplikan hasil pencarian), teks SNI 02-1760-2005 & Permenkes 2/2023 (hanya hasil pencarian). Semua hitungan diulang dengan `hitung.py`.
Legenda: ✓ = cocok dengan sumber primer/buku · ✓ (hitung) = diturunkan dengan `hitung.py` dari tetapan yang sudah dicek · ⚠ = belum diverifikasi ke sumber primer / sumber sekunder / ada catatan.

## Tetapan

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Ksp BaSO₄ (25 °C) | 1,1 × 10⁻¹⁰ | Skoog Lampiran 2, hlm. A-6 (PDF hlm. 1099); juga §8A, hlm. 200 (PDF 218): "1.1 × 10⁻¹⁰ … accepted thermodynamic value" | ✓ |
| Ksp BaSO₄ (pembanding) | 1,0842 × 10⁻¹⁰; kelarutan 2,448 mg/L (20 °C), 2,85 mg/L (30 °C) | kotak info https://en.wikipedia.org/wiki/Barium_sulfate (mengutip CRC Handbook) | ✓ (lewat Wikipedia; CRC tidak dibuka) |
| Ka2 H₂SO₄ (HSO₄⁻) | 1,02 × 10⁻² | Skoog Feature 13-1, hlm. 333 (PDF 351) | ✓ |
| Berat atom ringkas | Ba 137,33(1); S 32,06(2); O 15,999(1); H 1,0080(2); N 14,007(1); Cl 35,45(1); Ag 107,87(1); K 39,098(1); Fe 55,845(2) | CIAAW *Abridged standard atomic weights*: https://ciaaw.org/abridged-atomic-weights.htm | ✓ (semua dibaca langsung dari tabel CIAAW) |
| Berat atom standar (rentang) | S [32,059; 32,076] sejak 2009; O [15,99903; 15,99977]; Pb [206,14; 207,94] sejak 2020; Ba 137,327(7) sejak 1985 | https://ciaaw.org/sulfur.htm · /oxygen.htm · /lead.htm · /barium.htm | ✓ |
| Massa molar | BaSO₄ 233,386; SO₄²⁻ 96,056; (NH₄)₂SO₄ 132,134; BaCl₂ 208,230; K₂SO₄ 174,252 g/mol | `hitung.py` dari CIAAW (Wikipedia BaSO₄: 233,39) | ✓ (hitung) |

## Neraca, berat tetap, pengeringan

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Neraca makro: kapasitas 160–200 g, presisi 0,1 mg | — | Skoog §36D-1, hlm. 964 (PDF 982) | ✓ |
| "Mungkin pengukuran paling teliti dalam hidup Anda" | — | Skoog catatan pinggir pembuka bab 10, hlm. 244 (PDF 262) | ✓ |
| Benda hangat tampak lebih ringan (konveksi + udara hangat); galat 10–15 mg untuk cawan saring porselen/botol timbang | — | Skoog §36D, hlm. 970 (PDF 988) | ✓ |
| 0,1 mg pada 0,4355 g = 1 bagian per 4355 ("≈ 4400") | — | `hitung.py` | ✓ (hitung) |
| Berat tetap: siklus panas–dingin–timbang sampai selisih 0,2–0,3 mg | — | Skoog §10A, hlm. 245 (PDF 263) dan §36E, hlm. 971 (PDF 989) | ✓ |
| Kertas saring tak berabu 9/11 cm: abu < 0,1 mg | — | Skoog §36F, hlm. 975 (PDF 993) | ✓ |
| Gravimetri tidak memerlukan kalibrasi/standardisasi | — | Skoog catatan pinggir §10B, hlm. 258 (PDF 276) | ✓ |
| Susut pengeringan pada 105 °C sampai berat tetap; basis kering | — | Skoog §34B-3, hlm. 950 (PDF 968) | ✓ |
| Pati kentang: kadar air 10–21 % saat RH 20 → 70 % | — | Skoog §34B-3, hlm. 950 | ✓ |
| Alat kadar air biji-bijian: 10 g contoh, lampu inframerah, piring timbang | — | Skoog §10C-5, hlm. 261 (PDF 279) | ✓ |
| Desikator untuk mendinginkan | — | Skoog §36E-2 | ✓ |

## Pengendapan (bab 10 Skoog)

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Lewat jenuh relatif = (Q − S)/S; ukuran partikel berbanding terbalik | — | Skoog pers. 10-1, hlm. 246 (PDF 264) | ✓ |
| Persamaan von Weimarn, diusulkan 1925 | — | Skoog catatan pinggir hlm. 246 | ✓ |
| Nukleasi vs pertumbuhan partikel; laju nukleasi naik sangat cepat dengan lewat jenuh | — | Skoog hlm. 247 (PDF 265) | ✓ |
| Kendali: suhu tinggi (S naik), larutan encer, penambahan pelan + aduk (Q turun), atur pH | — | Skoog hlm. 247 & §10A-4 hlm. 251 | ✓ |
| AgCl koloid walau kelarutan molar mirip BaSO₄ (konsep tidak sempurna) | — | Skoog catatan kaki 4, hlm. 248 (PDF 266) | ✓ (tidak diucapkan) |
| Angka lewat jenuh ≈ 950 vs ≈ 38 | Q lokal 0,01 / 0,001 M dipilih sendiri | `hitung.py` | ✓ (hitung) · ⚠ ilustrasi; efek suhu tidak dihitung |
| Kelarutan naik dalam asam: s = √(Ksp(1 + [H⁺]/Ka2)); HCl 0,05 M → × 2,43; HCl 1 M → × 9,95 | — | `hitung.py`; prinsip Skoog §9 (pengaruh pH pada kelarutan BaSO₄, hlm. 214, PDF 232) | ✓ (hitung; koefisien aktivitas diabaikan) |
| Asam mencegah BaCO₃/barium fosfat; asam mineral berlebih → hasil rendah | — | Tabel 1 "Interferences attending the gravimetric determination of sulfate as BaSO₄", arsip EPA Region 5 (RMC Laboratories, 1993): https://semspub.epa.gov/work/05/216963.pdf | ✓ (dokumen arsip; tabel ini identik dengan tabel klasik Skoog & West edisi lama, tidak dibuka) |
| Elektrolit: di KNO₃ 0,02 M kelarutan BaSO₄ ≈ 2× air murni | — | Skoog §8A-1, hlm. 201 (PDF 219) | ✓ (tidak diucapkan) |
| Digesti: dipanaskan dalam cairan induk, tanpa diaduk; pelarutan & rekristalisasi → lebih murni, mudah disaring; membuka kantong oklusi | — | Skoog §10A-4 hlm. 251 & §10A-5 hlm. 253 (PDF 269, 271) | ✓ |
| Digesti 1–2 jam (BaSO₄) | — | prosedur arsip EPA (di atas) | ✓ |
| Pematangan Ostwald: partikel kecil melarut, mengendap di partikel besar; energi permukaan lebih tinggi → kelarutan semu lebih tinggi | — | IUPAC Gold Book O04348 (https://goldbook.iupac.org/terms/view/O04348), dibaca lewat cuplikan hasil pencarian | ⚠ halaman Gold Book 403 dari sandbox; Skoog tidak memakai istilah ini |
| Pengendapan homogen (dimetil sulfat untuk SO₄²⁻) | — | Skoog §10A-6, Tabel 10-1, hlm. 254–255 | ✓ (tidak diucapkan) |

## Kopresipitasi & benang merah

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Empat jenis: adsorpsi permukaan, kristal campuran, oklusi, terperangkap mekanis (klasifikasi Nielsen) | — | Skoog §10A-5, hlm. 251 (PDF 269) | ✓ |
| Adsorpsi penting untuk koloid, tidak berarti untuk endapan kristal | — | Skoog hlm. 251 (catatan pinggir) | ✓ |
| Kristal campuran: muatan sama, ukuran beda ≤ ≈ 5 %; PbSO₄ dan SrSO₄ dalam BaSO₄; sulit diatasi, pengganggu dipisahkan dulu | — | Skoog hlm. 253 (PDF 271) | ✓ |
| Oklusi & terperangkap mekanis minimum pada lewat jenuh rendah; dikurangi digesti | — | Skoog hlm. 253 | ✓ |
| Tamu yang tidak mengandung analit → selalu galat positif; yang mengandung analit → positif/negatif tergantung massa molar | — | Skoog "Coprecipitation Errors", hlm. 254 (PDF 272) | ✓ |
| Penentuan sulfat: kopresipitasi BaCl₂ dan anion (nitrat, klorat) → tinggi; kation alkali/Ca (sulfatnya lebih ringan), NH₄⁺ ((NH₄)₂SO₄ menguap saat dipijar), Fe(III) sulfat basa → rendah; arang kertas terlalu cepat → BaS → rendah | — | Tabel 1 arsip EPA (https://semspub.epa.gov/work/05/216963.pdf) | ✓ |
| "Kecocokan bagus sering sebagian karena galat yang saling meniadakan"; tidak ada pelarut praktis → pengendapan ulang tidak layak | — | prosedur arsip EPA (sama) | ✓ |
| Kation (Fe³⁺, Al³⁺) terkopresipitasi dengan BaSO₄; dapat dihilangkan dengan resin penukar kation | — | Skoog §29D-3, hlm. 833 (PDF 851) | ✓ (tidak diucapkan) |
| Mg per mmol tamu: BaCl₂ +208,2; Ba(NO₃)₂ +261,3; K₂SO₄ −59,1; (NH₄)₂SO₄ menguap −233,4; Fe₂O₃ −180,2 per SO₄ | — | `hitung.py` | ✓ (hitung) · Fe: asumsi semua SO₃ lepas, ⚠ |
| S maksimum amonium sulfat murni | 24,26 % (SO₄ 72,70 %) | `hitung.py` | ✓ (hitung) |
| Mahasiswa A: +12,2 mg BaCl₂ → 24,60 %; B: 0,057 mmol SO₄ sebagai (NH₄)₂SO₄ (7,5 mg) menguap → −13,3 mg → 23,20 %; A+B → 23,87 % | — | `hitung.py` | ✓ (hitung) · besar galat **rekaan** (≈ 3 % endapan, sengaja diperbesar) |

## Menyaring, memijar, menghitung

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Kelarutan BaSO₄ air murni | 1,049 × 10⁻⁵ M = 2,45 mg/L (CRC 2,43) | `hitung.py`; Wikipedia 2,448 mg/L | ✓ (hitung) |
| Kehilangan cucian 60 mL (batas atas, jenuh) | 0,147 mg = 0,034 % | `hitung.py` | ✓ (hitung) |
| Ba²⁺ berlebih 0,01 M menekan s ke 1,1 × 10⁻⁸ M ("seribu kali lebih kecil": 1,05 × 10⁻⁵ / 1,1 × 10⁻⁸ ≈ 950) | — | `hitung.py` | ✓ (hitung; aktivitas diabaikan) |
| Dekantasi cairan panas, cuci 3× air panas, kertas tak berabu halus | — | prosedur arsip EPA | ✓ |
| Pijar ≈ 900 °C | — | prosedur arsip EPA ("Ignite to constant weight at 900 °C") | ✓ · Skoog Gambar 10-8 hanya kurva kualitatif |
| BaSO₄ hanya kehilangan air saat dipanaskan (kurva termogravimetri) | — | Skoog §10A-7, hlm. 255 (PDF 273) | ✓ |
| Faktor gravimetri: definisi | — | Skoog Contoh 10-2, hlm. 257 (PDF 275) | ✓ |
| F(SO₄/BaSO₄) 0,41158; F(S/BaSO₄) 0,13737 | — | `hitung.py` | ✓ (hitung) |
| Contoh: 0,2500 g → 0,4355 g BaSO₄ → 23,93 % S, 71,70 % SO₄, 98,6 % amonium sulfat; susut pengeringan 0,40 %; seperti diterima 23,83 % | — | `hitung.py` | ✓ (hitung, data rekaan) |
| Ukuran contoh/reagen wajar (0,5–0,7 g contoh, BaCl₂·2H₂O 1,3 g, endapan ≥ 0,2 g) | — | prosedur arsip EPA; Skoog Soal 10-24 (endapan ≥ 0,200 g) | ✓ (skala wajar) |
| Pupuk ZA = (NH₄)₂SO₄, mencantumkan kadar N dan S | — | BSIP Kementan tentang SNI 02-1760-2005 (cuplikan hasil pencarian): https://tanahpupuk.bsip.pertanian.go.id/berita/bsip-berkarya-sni-02-1760-2005-standar-mutu-pupuk-amonium-sulfat | ⚠ syarat kadar minimum (sering ditulis N 20,8 %, S 23,8 %) belum dibuka → **tidak diucapkan** |

## Jembatan

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| BaSO₄ dipakai sebagai kontras sinar-X ("barium meal"); senyawa barium larut beracun | — | https://en.wikipedia.org/wiki/Barium_sulfate | ✓ (sekunder) |
| Ambang rasa sulfat 250–500 mg/L (Na₂SO₄), terendah ≈ 250 mg/L | — | WHO, *Sulfate in Drinking-water*, WHO/SDE/WSH/03.04/114 (2004), §1.2 & §7: https://cdn.who.int/media/docs/default-source/wash-documents/wash-chemicals/sulfate.pdf | ✓ |
| Efek pencahar 1000–1200 mg/L; tidak ada nilai pedoman berbasis kesehatan; keluhan rasa makin mungkin > 500 mg/L; korosi pipa | — | WHO 2004, §7 | ✓ (dokumen latar edisi 3; edisi pedoman terbaru tidak dibuka) |
| Gravimetri BaSO₄ cocok untuk sulfat > 10 mg/L (ISO 1990) | — | WHO 2004, §2 | ✓ |
| Sulfat dari mineral larut (gips, epsomit, barit) | — | WHO 2004, §1.1 | ✓ |
| 250 mg/L × 1 L → 0,607 g BaSO₄ | — | `hitung.py` | ✓ (hitung) |
| Permenkes 2/2023 batas sulfat air minum | — | hasil pencarian: 250 mg/L hanya terkonfirmasi untuk Permenkes 492/2010 | ⚠ **tidak diucapkan** |
| Nobel Kimia 1914 untuk T. W. Richards, motivasi "in recognition of his accurate determinations of the atomic weight of a large number of chemical elements" | — | https://www.nobelprize.org/prizes/chemistry/1914/summary/ dan /richards/facts/ | ✓ |
| Diserahkan setahun kemudian (1915), hadiah dicadangkan | — | nobelprize.org ringkasan 1914 | ✓ |
| Separuh karya tentang berat atom; teknik rasio halida; memperbaiki cara menimbang; "occluded moisture in gases and solids"; > 30 unsur penting sampai 1912 | — | biografi https://www.nobelprize.org/prizes/chemistry/1914/richards/biographical/ | ✓ |
| Peralatan kuarsa & "bottling apparatus" | — | Richards & Lembert 1914 (kutipan lemoyne, "quartz tube of the well-known bottling apparatus"); Britannica (cuplikan pencarian) | ✓ |
| Jumlah unsur versi lain: 25 (Science History Institute), 55 oleh Richards & murid sampai 1932 (Forbes, *J. Chem. Educ.* 1932) | — | cuplikan pencarian / Wikipedia | ⚠ tidak dipakai di narasi |
| Timbal radioaktif: Tabel V — uraninit North Carolina 206,40; Joachimsthal 206,57; karnotit Colorado 206,59; torianit Sri Lanka 206,82; pitchblende Inggris 206,86; timbal biasa 207,15; "The result is amazing" | — | Richards & Lembert, *J. Am. Chem. Soc.* 1914, 36, 1329–1344, kutipan https://web.lemoyne.edu/GIUNTA/richards.html | ✓ (kutipan; artikel ACS tidak dibuka) |
| Metode: PbCl₂ dilarutkan, Cl⁻ diendapkan dengan AgNO₃, perak dan endapan ditimbang | — | kutipan lemoyne (sama) | ✓ |
| Beda AgCl 2,8 mg per gram PbCl₂ (≈ 28 × 0,1 mg) | — | `hitung.py` | ✓ (hitung) |
| "Salah satu bukti kimia pertama adanya isotop" | — | Wikipedia *Theodore William Richards* (mengutip Kopperl 1983); Science History Institute (cuplikan) | ⚠ penilaian sejarah sekunder |
| Richards tidak memakai kata "isotop" di makalah 1914; teori Fajans & Soddy disebut di pendahuluan | — | kutipan lemoyne | ✓ (narasi tidak mengklaim kata itu) |

## Berkas `materi/` yang tidak relevan untuk episode ini

Artikel indikator alami, Kuna 2023, Darwish 2026, Vilasó-Cadre 2023, Hakim 2023, artikel laju reaksi, dan Chang & Overby tidak dipakai (tidak memuat gravimetri).
