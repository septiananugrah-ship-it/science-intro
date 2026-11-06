# Naskah riset — Seni Mengukur (Kimia Analitik) Ep. 6 "Garam yang Bersembunyi"

Draf untuk video berikutnya (belum dibangun). S1 Kimia UNESA, ±12–13 menit, 20 adegan.
Sumber materi: `materi/Analytical Chemistry.pdf` (Skoog, West, Holler & Crouch ed. 10: bab 15B-2 "Precipitation Titrations" hlm. 373–378, bab 10A koloid & lapisan ganda hlm. 249–250, §37D prosedur Fajans & Mohr hlm. 1017–1020, Lampiran 2 Ksp hlm. A-6–A-7, Lampiran 4 tetapan pembentukan) + USGS TWRI I-1183-85 (Mohr untuk air) + lembar fakta WHO *Sodium reduction* (11 Mei 2026). Angka dicek di `AUDIT.md`; semua hitungan diulang dengan `hitung.py` (folder ini).

Catatan cakupan: kurva pengendapan cukup bentuk & lompatan pAg (analog pH di Ep. 3); kelarutan dibahas sejauh yang perlu untuk titrasi (efek ion senama, kopresipitasi, dan menimbang endapan → Ep. 7 "Menimbang yang Tak Terlihat"); titrasi potensiometrik dengan elektrode perak hanya disebut (Ep. 9).

## Pilihan judul

1. **"Garam yang Bersembunyi"** — Titrasi Pengendapan: Mohr, Volhard, Fajans ← *dipilih*
2. "Merah Bata di Ujung Buret"
3. "Perak Memburu Klorida"

Alasan memilih (1): sudah tercantum di rencana seri; "bersembunyi" bekerja dua lapis — garam yang tak terlihat di ikan asin/kecap, dan ion klorida yang "bersembunyi" di endapan putih sampai indikator membocorkannya. Judul (2) dipakai sebagai kalimat di adegan `mohr`.

## Benang merah

**Misteri:** Di labu berisi air rendaman ikan asin yang diberi kalium kromat kuning, setiap tetes perak nitrat membuat awan **putih** (AgCl). Endapan **merah bata** perak kromat sempat berkilat lalu lenyap saat labu digoyang, dan baru menetap di ujung titrasi. Padahal Ksp perak kromat (≈ 10⁻¹²) sekitar **150 kali lebih kecil** daripada Ksp perak klorida (≈ 10⁻¹⁰). Bukankah zat dengan Ksp lebih kecil seharusnya mengendap duluan?
**Dibuka:** `hook`. **Petunjuk:** `paradoks` (Ksp kecil ≠ kurang larut: satuannya beda, Ag₂CrO₄ ternyata ≈ 5 kali lebih larut dalam mol/L), `kurva` (pAg baru melonjak di dekat ekivalen). **Dipecahkan:** `pecah` — yang menentukan bukan Ksp, melainkan [Ag⁺] yang dibutuhkan: AgCl mulai pada ≈ 7 × 10⁻⁹ M, Ag₂CrO₄ baru pada ≈ 1,7 × 10⁻⁵ M (karena [Ag⁺] dikuadratkan). Saat merah bata menetap, ≈ 99,95 % klorida sudah mengendap. **Kembali lagi:** `kuning` & `ph` (kenapa kromat tidak boleh terlalu pekat dan pH harus 7–10), `penutup`.

## Pembagian bagian

- **Bagian 1 — Garam & kelarutan** (garam tersembunyi → Ksp → paradoks kelarutan → kurva pAg → syarat lompatan)
- **Bagian 2 — Tiga cara membocorkan titik akhir** (Mohr → misteri terpecahkan → kuning & blanko → syarat pH → Volhard → masalah AgCl → Fajans → memilih metode)
- **Bagian 3 — Dari labu ke piring** (hitung kadar ikan asin → cek dengan Volhard → natrium harian & air sumur → perak & cahaya → penutup)

## Daftar adegan

Gaya seri: **"Meja Analis"** (latar grafit + kisi kertas milimeter samar, alat gelas garis tipis bercahaya). Kode warna episode ini: titran Ag⁺ = perak/abu terang, klorida Cl⁻ = hijau, kromat = kuning, Ag₂CrO₄ = merah bata, AgCl = putih susu, SCN⁻ / Fe(SCN)²⁺ = merah darah, indikator adsorpsi = merah muda, nilai benar/ekivalen = emas, galat = jingga, natrium = jingga lembut. Semua pAg/kelarutan di layar diambil dari `hitung.py`, bukan digambar tangan. Warna labu = silang-pudar menurut jumlah endapan, tidak pernah ganti berdasarkan ambang.

| # | id | Judul | Ide visual (bergerak sesuai kimia) |
|---|---|---|---|
| 1 | `hook` | Kilat merah yang lenyap | Ikan asin di tampah pasar (ilustrasi datar), kristal garam berkilau di sisiknya. Potong ke labu kuning: tetes perak jatuh → awan putih mengembang; di titik jatuh muncul noda merah bata yang larut kembali saat labu berputar (pusaran digambar). Kartu kecil "Ksp Ag₂CrO₄ 1,2 × 10⁻¹² < Ksp AgCl 1,8 × 10⁻¹⁰" + tanda tanya berayun. |
| 2 | `judul` | Judul | Butir garam jatuh, berubah menjadi kisi Na⁺/Cl⁻ yang terurai; ion Cl⁻ hijau "bersembunyi" di balik huruf judul, lalu merah bata menyala di huruf terakhir. |
| 3 | `garam` | Garam di mana-mana | Piring: ikan asin, kecap, bungkus bumbu mi (tanpa merek); sendok teh 5 g garam di timbangan; batang "rata-rata dunia 4278 mg Na" vs garis WHO 2000 mg (batang tumbuh melewati garis). Lalu NaCl larut: hanya Cl⁻ yang disorot "yang kita ukur". **Kartu rumus.** |
| 4 | `ksp` | Kesetimbangan di permukaan kristal | Kristal AgCl di dasar gelas; ion Ag⁺ dan Cl⁻ lepas dan menempel kembali dengan laju sama (penghitung "lepas/menempel" sama), larutan di atasnya jenuh. **Kartu rumus.** |
| 5 | `paradoks` | Ksp kecil, lebih larut | Dua gelas jenuh berdampingan: AgCl (pasangan Ag⁺Cl⁻) vs Ag₂CrO₄ (tiga ion per satuan). Batang kelarutan tumbuh: 1,35 × 10⁻⁵ vs 6,7 × 10⁻⁵ M (≈ 5×); dalam mg/L 1,9 vs 22. **Kartu rumus** (2 momen). |
| 6 | `kurva` | Kurva pAg | Buret meneteskan Ag⁺ ke 50,00 mL NaCl 0,05 M; titik putih menggambar kurva pAg–V: 8,14 (10 mL) → 6,87 (24 mL) → 4,87 (25 mL) → 2,88 (26 mL). Kurva pCl cermin di bayangan samar. **Kartu rumus.** |
| 7 | `tajam` | Lompatan yang menentukan | Empat kurva bertumpuk (I⁻, Br⁻, Cl⁻, BrO₃⁻) tergambar bergiliran: lompatan menyusut seiring Ksp membesar; pita emas "jendela indikator pAg 4–6" untuk Cl⁻. Lalu kurva encer (0,005 M) melandai. |
| 8 | `mohr` | Merah bata di ujung buret | Labu kuning (CrO₄²⁻) + Ag⁺: butir AgCl putih menumpuk; di ujung, butir merah bata pertama tumbuh di permukaan endapan, warna labu bergeser kuning → jingga kemerahan (silang-pudar). **Kartu rumus.** |
| 9 | `pecah` | Misteri terpecahkan | Dua "termometer" [Ag⁺] berskala logaritma: garis AgCl 7 × 10⁻⁹ M, garis Ag₂CrO₄ 1,7 × 10⁻⁵ M. Penunjuk [Ag⁺] larutan naik pelan selama 99 % titrasi (tertahan Cl⁻), lalu melonjak dan menyentuh garis kromat; penghitung "Cl⁻ tersisa" turun ke 0,05 %. **Kartu rumus.** |
| 10 | `kuning` | Terlalu kuning, terlalu telat | Slider [CrO₄²⁻]: di 6,6 × 10⁻³ M labu kuning pekat menelan merah; di 4 × 10⁻³ M merah terlihat tetapi telat 0,004 mL. Lalu labu blanko (suspensi CaCO₃ putih + kromat) dititrasi: angka "≈ 0,05 mL" (contoh). Lampu kuning/kacamata filter. |
| 11 | `ph` | Jendela pH 7–10 | Sumbu pH: di kiri, CrO₄²⁻ menangkap H⁺ → HCrO₄⁻ (dan sepasang menjadi Cr₂O₇²⁻ jingga), jumlah kromat bebas menyusut, garis [Ag⁺] yang diperlukan naik; di kanan, OH⁻ menangkap Ag⁺ → endapan coklat. Jendela 7–10 menyala hijau; sendok NaHCO₃/CaCO₃ menetralkan. Label "Cr(VI) karsinogen". |
| 12 | `volhard` | Volhard: dari belakang | Dua langkah: (1) Ag⁺ berlebih tertakar dituang → semua Cl⁻ jadi AgCl, sisa Ag⁺ melayang; (2) buret SCN⁻ menetes, AgSCN putih, lalu tetes berlebih pertama + Fe³⁺ → merah darah. Neraca mol: batang "Ag⁺ total = Cl⁻ + SCN⁻". **Kartu rumus** (2 momen). |
| 13 | `saring` | Endapan yang berkhianat | Zoom ke butir AgCl: SCN⁻ menyusup, Cl⁻ keluar (AgCl → AgSCN), merah di larutan memudar perlahan; panah jingga "SCN⁻ terpakai lebih → hasil rendah". Lalu corong & kertas saring menahan AgCl sebelum titrasi balik. **Kartu rumus.** |
| 14 | `fajans` | Fajans: warna yang menempel | Butir koloid AgCl: sebelum ekivalen dikelilingi Cl⁻ (muatan −, lapisan Na⁺); sesudah ekivalen Ag⁺ menempel (muatan +), anion indikator hijau-kuning berpendar tertarik dan menempel → permukaan merah muda. Dekstrin digambar sebagai rantai yang menjaga butir tetap terpisah. |
| 15 | `pilih` | Memilih metode | Tabel tiga kolom muncul baris demi baris: Mohr (netral–agak basa, langsung, kromat), Volhard (asam, titrasi balik, Fe³⁺), Fajans (cepat, koloid, hindari sinar matahari langsung). Fluoresein vs diklorofluoresein di sumbu pH. |
| 16 | `hitung` | Berapa persen garamnya? | Alur bergerak: 5,000 g ikan asin dihaluskan → direndam air panas → labu 250 mL → pipet 25,00 mL → buret 13,20 mL; angka mengalir ke kartu. Label kecil "contoh hitungan". **Kartu rumus** (2 momen). |
| 17 | `silang` | Cek silang Volhard | Sampel yang sama di jalur kedua: 25,00 mL AgNO₃ → saring → 11,85 mL SCN⁻ → angka 15,37 % yang sama menyala di kedua jalur; jalur tanpa saring berhenti di 15,1 % (jingga). |
| 18 | `harian` | Dari labu ke piring | Sepotong 20 g ikan asin → 3,1 g garam → 1,2 g natrium; batang mengisi 60 % garis WHO. Lalu sumur di pesisir: air laut merembes (panah), sampel air dititrasi Mohr. |
| 19 | `cahaya` | Perak dan cahaya | Endapan AgCl di bawah sinar matahari menggelap ungu-kelabu; botol coklat AgNO₃; potongan film hitam-putih (butir AgBr → perak hitam). Pil "Ep. 7". |
| 20 | `penutup` | Penutup & teaser Ep. 7 | Kembali ke labu awal: merah bata menetap, tulisan "99,95 % Cl⁻ sudah mengendap". Endapan putih disaring, dikeringkan, diletakkan di neraca 0,1 mg. Teks: "Berikutnya — Menimbang yang Tak Terlihat". |

## Narasi

Konvensi: kalimat pendek, gaya tutur. **[KARTU]** = rumus yang tampil di kartu `Formula` (≥ 56 px, satu kartu per momen). Angka ditulis seperti diucapkan; teks TTS dibuat terpisah nanti. Semua angka cocok dengan keluaran `hitung.py`.

### 1 · `hook` — Kilat merah yang lenyap

Ikan asin. Di pasar, ia dijual bertumpuk di tampah, kering, keras, dan berkilau oleh butir garam.
Kita tahu ia asin. Tapi seberapa asin? Lima persen? Dua puluh persen? Lidah tidak bisa menjawab dengan angka.
Laboratorium bisa. Rendam sepotong ikan asin di air panas, saring, lalu tambahkan beberapa tetes kalium kromat. Larutannya kuning.
Sekarang teteskan perak nitrat. Setiap tetes membuat awan putih. Di titik jatuhnya, sekilas muncul warna merah bata. Labu digoyang, dan merah itu lenyap.
Tetes demi tetes, kejadian yang sama. Sampai akhirnya, satu tetes membuat merah bata itu menetap.
Ada yang janggal. Endapan merah itu perak kromat. Hasil kali kelarutannya kira-kira seratus lima puluh kali lebih kecil daripada perak klorida yang putih.
Bukankah yang lebih sukar larut seharusnya mengendap duluan? Kenapa merah bata menunggu sampai akhir?

### 2 · `judul` — Judul

Garam yang Bersembunyi. Seni Mengukur, episode enam.

### 3 · `garam` — Garam di mana-mana

Garam tidak hanya ada di tempat garam. Ia bersembunyi di ikan asin, di kecap, di bumbu mi instan, di roti.
Badan Kesehatan Dunia, WHO, menyarankan orang dewasa makan kurang dari dua ribu miligram natrium sehari. Itu setara kurang dari lima gram garam, kira-kira satu sendok teh.
Kenyataannya, menurut WHO, rata-rata orang dewasa di dunia pada tahun dua ribu dua puluh satu makan sekitar empat ribu tiga ratus miligram natrium. Lebih dari dua kali lipat.
Untuk mengukur garam di dalam makanan, kimiawan jarang mengejar natriumnya. Yang diburu adalah pasangannya: ion klorida.

**[KARTU]** NaCl(s) → Na⁺(aq) + Cl⁻(aq)  ·  1 g NaCl ≈ 0,39 g Na

Dan pemburu klorida yang paling tua adalah ion perak.

### 4 · `ksp` — Kesetimbangan di permukaan kristal

Perak klorida hampir tidak larut dalam air. Hampir.
Di permukaan kristalnya, ion perak dan ion klorida terus lepas ke larutan, dan terus menempel kembali. Saat laju lepas sama dengan laju menempel, larutan itu jenuh.
Pada saat itu, hasil kali konsentrasi kedua ion bernilai tetap. Namanya hasil kali kelarutan, Ksp.

**[KARTU]** AgCl(s) ⇌ Ag⁺ + Cl⁻   K_sp = [Ag⁺][Cl⁻] = 1,82 × 10⁻¹⁰

Kalau hasil kali ion di larutan melewati angka ini, endapan terbentuk. Kalau di bawahnya, endapan melarut. Persis seperti tetapan air, Kw, di episode tiga.

### 5 · `paradoks` — Ksp kecil, lebih larut

Sekarang perak kromat. Satu satuan Ag₂CrO₄ melepas dua ion perak dan satu ion kromat.

**[KARTU]** Ag₂CrO₄(s) ⇌ 2Ag⁺ + CrO₄²⁻   K_sp = [Ag⁺]²[CrO₄²⁻] = 1,2 × 10⁻¹²

Perhatikan pangkat duanya. Ksp perak klorida bersatuan molar kuadrat. Ksp perak kromat bersatuan molar pangkat tiga. Membandingkan keduanya langsung seperti membandingkan meter persegi dengan meter kubik.
Mari hitung kelarutannya, berapa mol yang larut per liter.

**[KARTU]** s(AgCl) = √K_sp = 1,35 × 10⁻⁵ M   s(Ag₂CrO₄) = ∛(K_sp/4) = 6,7 × 10⁻⁵ M

Hasilnya mengejutkan. Perak kromat, yang Ksp-nya jauh lebih kecil, ternyata sekitar lima kali lebih larut daripada perak klorida. Dalam massa, sebelas kali.
Jadi Ksp yang lebih kecil tidak selalu berarti lebih sukar larut. Itu hanya berlaku kalau rumus kedua garam sejenis. Ini petunjuk pertama.

### 6 · `kurva` — Kurva pAg

Mari lihat titrasinya. Di labu ada lima puluh mililiter natrium klorida nol koma nol lima molar. Dari buret, perak nitrat nol koma satu molar.
Seperti pH di titrasi asam basa, kita memakai pAg, minus logaritma konsentrasi ion perak.

**[KARTU]** pAg = −log [Ag⁺]   pAg + pCl = pK_sp = 9,74

Sebelum titik ekivalen, klorida masih berlimpah. Setiap ion perak yang masuk langsung ditangkap. Ion perak bebas sangat sedikit, dan pAg tinggi. Pada sepuluh mililiter, pAg delapan koma satu empat. Pada dua puluh empat mililiter, enam koma delapan tujuh.
Tepat di dua puluh lima mililiter, titik ekivalen, ion perak sama dengan ion klorida. pAg empat koma delapan tujuh.
Satu mililiter kemudian, perak berlebih, dan pAg anjlok ke dua koma delapan delapan.
Selama hampir seluruh titrasi, ion perak bebas ditahan oleh klorida. Ia baru bebas di ujung. Ini petunjuk kedua.

### 7 · `tajam` — Lompatan yang menentukan

Seberapa besar lompatannya bergantung pada dua hal.
Pertama, Ksp. Makin kecil Ksp, makin sempurna reaksinya, makin tinggi lompatan. Iodida, dengan Ksp perak iodida sepuluh pangkat minus tujuh belas, memberi lompatan raksasa. Bromat, yang garam peraknya cukup larut, hampir tidak punya lompatan sama sekali.
Kedua, konsentrasi. Encerkan larutan sepuluh kali, dan lompatan klorida menyusut dari sekitar dua menjadi satu satuan pAg.
Untuk klorida nol koma nol lima molar, indikator harus memberi tanda di sekitar pAg empat sampai enam. Di luar jendela itu, titik akhir meleset.
Pertanyaannya: zat apa yang berubah warna tepat saat pAg menyentuh jendela itu?

### 8 · `mohr` — Merah bata di ujung buret

Jawaban tertua datang dari Karl Friedrich Mohr pada abad kesembilan belas: ion kromat.
Kromat kuning larut di labu bersama klorida. Selama klorida masih ada, perak membentuk perak klorida yang putih. Begitu klorida habis, kelebihan perak pertama bertemu kromat.

**[KARTU]** Ag⁺ + Cl⁻ → AgCl(s) putih  ·  2Ag⁺ + CrO₄²⁻ → Ag₂CrO₄(s) merah bata

Endapan merah bata menempel di antara endapan putih, dan warna labu bergeser dari kuning menjadi jingga kemerahan. Itulah titik akhir. Merah bata di ujung buret.
Kilat merah di awal tadi? Itu kelebihan perak sesaat di titik jatuh tetes. Begitu diaduk, perak itu bertemu klorida yang masih banyak, dan perak kromat melarut kembali.

### 9 · `pecah` — Misteri terpecahkan

Sekarang kita bisa menjawab misteri pembuka. Yang menentukan siapa mengendap duluan bukan Ksp, melainkan berapa banyak ion perak yang dibutuhkan masing-masing.
Di awal titrasi contoh kita, klorida sekitar nol koma nol dua enam molar, dan kromat sekitar empat kali sepuluh pangkat minus tiga molar.
Perak klorida mulai mengendap begitu ion perak mencapai tujuh kali sepuluh pangkat minus sembilan molar.
Perak kromat butuh jauh lebih banyak, karena konsentrasi perak dikuadratkan.

**[KARTU]** [Ag⁺] = √(K_sp / [CrO₄²⁻]) = 1,7 × 10⁻⁵ M

Dua ribu kali lebih banyak. Ion perak tidak akan mencapai angka itu selama klorida masih berlimpah, karena setiap ion perak ditangkap lebih dulu.
Baru di ujung, saat pAg menyentuh empat koma tujuh enam, tepat di dalam jendela, perak kromat mulai mengendap. Pada saat itu, sembilan puluh sembilan koma sembilan lima persen klorida sudah menjadi endapan.
Merah bata tidak terlambat. Ia memang dirancang untuk menunggu.

### 10 · `kuning` — Terlalu kuning, terlalu telat

Kalau kita ingin perak kromat mulai tepat di titik ekivalen, pAg empat koma delapan tujuh, kromat harus sekitar enam koma enam kali sepuluh pangkat minus tiga molar.
Masalahnya, pada konsentrasi itu larutan sangat kuning, dan merah bata yang sedikit tenggelam di dalamnya.
Maka kromat dipakai sedikit lebih encer. Akibatnya titik akhir sedikit terlambat. Secara teori, untuk contoh kita, hanya sekitar empat per seribu mililiter.
Yang lebih besar adalah keterbatasan mata. Kita baru melihat merah setelah cukup banyak perak kromat terbentuk. Karena itu analis membuat blanko: suspensi kalsium karbonat putih dengan kromat yang sama, dititrasi sampai warnanya sama. Volume blanko itu dikurangkan dari hasil.
Metode resmi Survei Geologi Amerika Serikat untuk air menyebut koreksi blanko sekitar nol koma nol lima sampai nol koma satu mililiter, untuk titran yang encer. Sebagian analis bahkan memakai lampu kuning agar merah lebih mudah dilihat.

### 11 · `ph` — Jendela pH 7–10

Metode Mohr punya satu syarat lagi: pH larutan harus sekitar tujuh sampai sepuluh. Kenapa?
Di larutan asam, ion kromat menangkap proton dan berubah menjadi hidrogen kromat, sebagian lagi menjadi dikromat yang jingga. Kromat bebas menyusut, sehingga perak yang dibutuhkan untuk merah bata naik.
Hitungan kita menunjukkan, pada pH empat, kebutuhan perak itu naik sekitar sepuluh sampai dua puluh kali, dan titik akhir terlambat jauh.
Di larutan terlalu basa, masalahnya berbalik. Ion hidroksida menangkap perak menjadi endapan perak hidroksida dan perak oksida yang coklat. Perak terbuang, dan warna titik akhir tertutup.
Solusinya sederhana. Sampel asam dinetralkan dengan natrium bikarbonat atau kalsium karbonat, yang tidak bisa membuat larutan terlalu basa.
Satu catatan penting: kromat adalah kromium enam, zat karsinogen. Karena itu, kata buku Skoog, metode Mohr kini jarang dipakai, dan limbahnya harus ditangani khusus.

### 12 · `volhard` — Volhard: dari belakang

Jacob Volhard menawarkan jalan lain: jangan menitrasi klorida langsung. Titrasi dari belakang.
Langkah pertama, tambahkan perak nitrat berlebih yang volumenya tertakar. Semua klorida mengendap, dan ada sisa ion perak.
Langkah kedua, titrasi sisa perak itu dengan tiosianat standar, dengan besi tiga sebagai indikator.

**[KARTU]** Ag⁺ + SCN⁻ → AgSCN(s)  ·  Fe³⁺ + SCN⁻ → Fe(SCN)²⁺ merah

Selama masih ada perak, tiosianat ditangkap menjadi endapan putih. Tetes berlebih pertama bertemu besi tiga, dan larutan menjadi merah.

**[KARTU]** n(Cl⁻) = n(Ag⁺) total − n(SCN⁻)

Keunggulannya: titrasi Volhard dilakukan dalam suasana asam kuat. Ion seperti karbonat, oksalat, dan arsenat, yang ikut mengendap dengan perak di larutan netral, tidak mengganggu di sini.

### 13 · `saring` — Endapan yang berkhianat

Tapi untuk klorida, ada jebakan. Perak klorida lebih larut daripada perak tiosianat.

**[KARTU]** AgCl(s) + SCN⁻ ⇌ AgSCN(s) + Cl⁻   K = K_sp(AgCl)/K_sp(AgSCN) ≈ 165

Di dekat titik akhir, tiosianat mulai mencuri perak dari endapan perak klorida. Warna merah memudar, kita menambah tiosianat lagi, dan lagi.
Tiosianat terpakai terlalu banyak. Karena klorida dihitung dari selisih, hasil klorida menjadi terlalu rendah.
Obatnya: saring perak klorida sebelum titrasi balik. Untuk bromida dan iodida, ini tidak perlu, karena garam perak keduanya lebih sukar larut daripada perak tiosianat.

### 14 · `fajans` — Fajans: warna yang menempel

Cara ketiga datang dari Kazimierz Fajans, tahun seribu sembilan ratus dua puluh enam. Indikatornya tidak membentuk endapan sendiri. Ia menempel di permukaan endapan.
Endapan perak klorida mula-mula berupa butir koloid yang sangat kecil. Sebelum titik ekivalen, klorida berlebih, dan butir itu menyerap ion klorida di permukaannya. Butir bermuatan negatif.
Sesudah titik ekivalen, perak berlebih. Kini ion perak yang terserap, dan butir berbalik bermuatan positif.
Indikator seperti diklorofluoresein adalah anion. Begitu butir menjadi positif, anion itu tertarik ke lapisan di sekeliling butir, dan warnanya berubah menjadi merah muda. Warna berpindah dari larutan ke permukaan endapan.
Agar ini bekerja, butir harus tetap koloid. Karena itu ditambahkan dekstrin, yang mencegah butir menggumpal. Dan jangan menitrasi di bawah sinar matahari langsung: perak klorida koloid terurai oleh cahaya.

### 15 · `pilih` — Memilih metode

Jadi ada tiga cara membocorkan titik akhir.
Mohr: langsung, di larutan netral sampai agak basa, dengan kromat. Sederhana, tapi memakai kromium enam.
Volhard: titrasi balik, di larutan asam, dengan besi tiga. Tahan terhadap banyak pengganggu, tapi untuk klorida perlu menyaring.
Fajans: cepat dan tajam, tapi hanya untuk endapan yang membentuk koloid. Fluoresein, indikator asli Fajans, butuh larutan sekitar netral. Diklorofluoresein, asam yang lebih kuat, masih bekerja di larutan yang agak asam.
Ketiganya mengukur hal yang sama: mol perak yang tepat cukup untuk menangkap semua klorida.

### 16 · `hitung` — Berapa persen garamnya?

Mari kembali ke ikan asin. Ini contoh hitungan dengan angka rekaan, tetapi semua langkahnya nyata.
Lima koma nol nol nol gram ikan asin dihaluskan, direndam air panas, disaring, dan diencerkan sampai dua ratus lima puluh mililiter.
Dua puluh lima mililiter dipipet, ditambah kromat, lalu dititrasi dengan perak nitrat nol koma satu molar. Titik akhir di tiga belas koma dua nol mililiter. Blanko nol koma nol lima mililiter. Volume bersih tiga belas koma satu lima.

**[KARTU]** n(Cl⁻) = n(Ag⁺) = 0,1000 M × 13,15 mL = 1,315 mmol

Itu baru sepersepuluh larutan. Kalikan sepuluh: tiga belas koma satu lima milimol natrium klorida, atau nol koma tujuh enam delapan lima gram.

**[KARTU]** % NaCl = (1,315 mmol × 10 × 58,44 mg/mmol) / 5000 mg × 100 % = 15,37 %

Kadar garam ikan asin ini lima belas koma tiga tujuh persen, dihitung sebagai natrium klorida. Tanpa koreksi blanko, kita akan menulis lima belas koma empat tiga.
Ingat, yang kita ukur sebenarnya klorida. Menulisnya sebagai natrium klorida adalah kesepakatan, karena hampir semua klorida di makanan berasal dari garam dapur.

### 17 · `silang` — Cek silang Volhard

Analis yang baik tidak percaya pada satu metode. Kita ulangi dengan Volhard.
Dua puluh lima mililiter sampel yang sama diberi dua puluh lima mililiter perak nitrat nol koma satu molar. Itu dua koma lima milimol perak. Satu koma tiga satu lima milimol dipakai klorida. Sisanya satu koma satu delapan lima milimol.
Perak klorida disaring, lalu sisa perak dititrasi dengan tiosianat nol koma satu molar. Dibutuhkan sebelas koma delapan lima mililiter. Hasilnya kembali lima belas koma tiga tujuh persen.
Kalau lupa menyaring, dan tiosianat terpakai lebih dua per sepuluh mililiter saja, hasilnya turun menjadi sekitar lima belas koma satu persen. Galat yang arahnya sudah kita ramalkan.

### 18 · `harian` — Dari labu ke piring

Lalu apa artinya lima belas persen garam?
Sepotong ikan asin dua puluh gram berarti sekitar tiga gram garam, atau satu koma dua gram natrium. Enam puluh persen batas harian WHO, dari satu lauk saja, kalau dimakan tanpa direndam.
Hitungan yang sama bisa dilakukan untuk kecap atau bumbu mi instan. Label gizinya menulis natrium dalam miligram. Kalikan dua setengah, dan kita mendapat banyaknya garam dalam satuan yang sama.
Ion klorida juga diburu di air. Di sumur dekat pantai, air laut bisa merembes masuk, dan air terasa payau. Survei Geologi Amerika Serikat masih mencantumkan titrasi Mohr untuk air dengan klorida sepuluh sampai dua ribu miligram per liter.
Standar Nasional Indonesia juga mengatur mutu ikan asin kering, termasuk kadar garamnya. Dan pengujinya, sering kali, adalah buret berisi perak nitrat.

### 19 · `cahaya` — Perak dan cahaya

Satu sifat perak halida yang perlu diingat di laboratorium: mereka peka cahaya.
Endapan perak klorida yang dibiarkan di bawah sinar matahari perlahan menggelap menjadi ungu kelabu, karena sebagian ion perak tereduksi menjadi logam perak. Itu sebabnya larutan perak nitrat disimpan dalam botol coklat.
Sifat yang sama pernah menjadi dasar fotografi. Film hitam putih adalah lapisan butir perak bromida. Cahaya mengubah sebagian ion perak menjadi atom perak, dan pengembangan film memperbesarnya menjadi bayangan hitam.
Endapan putih di labu kita, kalau disaring, dikeringkan, dan ditimbang, juga bisa memberi tahu kadar klorida. Tanpa buret sama sekali.

### 20 · `penutup` — Penutup & teaser Ep. 7

Kembali ke labu kuning di awal. Merah bata itu tidak terlambat karena malas. Ia menunggu karena butuh ion perak dua ribu kali lebih banyak, dan ion perak itu baru bebas setelah hampir semua klorida tertangkap.
Ksp yang lebih kecil tidak selalu berarti mengendap lebih dulu. Yang menentukan adalah berapa banyak pereaksi yang dibutuhkan untuk melewati batas kelarutan.
Mohr, Volhard, dan Fajans hanyalah tiga cara mendengarkan saat ion perak mulai bebas.
Tapi endapan putih itu sendiri juga menyimpan jawaban. Bagaimana menimbang sesuatu yang beratnya hanya sepersekian gram, tanpa kehilangan satu butir pun?
Itu cerita episode berikutnya: Menimbang yang Tak Terlihat.

---

## Hitungan (dari `hitung.py`)

Tetapan 25 °C: Ksp AgCl 1,82 × 10⁻¹⁰, Ag₂CrO₄ 1,2 × 10⁻¹², AgSCN 1,1 × 10⁻¹², AgBr 5,0 × 10⁻¹³ (Skoog Lampiran 2); pembanding CRC: AgCl 1,77 × 10⁻¹⁰, Ag₂CrO₄ 1,12 × 10⁻¹².

**1. Paradoks kelarutan**

| Garam | Ksp | Rumus s | s (mol/L) | s (mg/L) | [Ag⁺] jenuh |
|---|---|---|---|---|---|
| AgCl | 1,82 × 10⁻¹⁰ | √Ksp | 1,35 × 10⁻⁵ | 1,93 | 1,35 × 10⁻⁵ M |
| Ag₂CrO₄ | 1,2 × 10⁻¹² | ∛(Ksp/4) | 6,69 × 10⁻⁵ | 22,2 | 1,34 × 10⁻⁴ M |
| rasio | ÷ 152 | | **× 4,96** | **× 11,5** | |

Dengan Ksp CRC: 1,33 × 10⁻⁵ vs 6,54 × 10⁻⁵ M (× 4,92) — kesimpulan sama.

**2. Kurva pAg** (50,00 mL NaCl 0,05000 M + AgNO₃ 0,1000 M, neraca eksak; cocok Skoog Tabel 15-2)

| V (mL) | 10,00 | 20,00 | 24,00 | 24,90 | 25,00 | 25,10 | 26,00 | 30,00 | 40,00 |
|---|---|---|---|---|---|---|---|---|---|
| pAg | 8,14 | 7,59 | 6,87 | 5,87 | 4,87 | 3,87 | 2,88 | 2,20 | 1,78 |

pKsp AgCl = 9,74 = pAg + pCl.

**3. Kapan Ag₂CrO₄ mulai (contoh titrasi ikan asin)**

- Indikator: 1 mL K₂CrO₄ 5 % (b/v) = 0,257 mmol; volume akhir ≈ 25,00 + 25 (air) + 1 + 13,2 = 64,2 mL → [CrO₄²⁻] ≈ 4,0 × 10⁻³ M.
- Awal: [Cl⁻] = 1,315 mmol / 51 mL ≈ 0,026 M → AgCl mulai pada [Ag⁺] = 7,1 × 10⁻⁹ M; Ag₂CrO₄ perlu [Ag⁺] = √(1,2 × 10⁻¹² / 4,0 × 10⁻³) = 1,73 × 10⁻⁵ M (≈ 2450 kali lebih banyak; narasi "dua ribu kali").
- Saat Ag₂CrO₄ mulai: pAg 4,76; [Cl⁻] = 1,05 × 10⁻⁵ M → Cl⁻ tersisa 0,051 % (sudah mengendap 99,95 %).
- Galat teoretis = ([Ag⁺] − [Cl⁻]) × V = 4,35 × 10⁻⁴ mmol = 0,0044 mL AgNO₃ 0,1 M (+0,03 % dari 13,20 mL).
- [CrO₄²⁻] agar mulai tepat di ekivalen = Ksp/[Ag⁺]ₑₖ² = 6,6 × 10⁻³ M.

| [CrO₄²⁻] (M) | 1,0 × 10⁻³ | 2,5 × 10⁻³ | 4,0 × 10⁻³ | 6,6 × 10⁻³ | 1,0 × 10⁻² |
|---|---|---|---|---|---|
| pAg saat merah mulai | 4,46 | 4,66 | 4,76 | 4,87 | 4,96 |
| galat teoretis (mL) | +0,019 | +0,0087 | +0,0044 | ≈ 0 | −0,0036 |

**4. pH** (fraksi CrO₄²⁻ = 1/(1 + 10^(pKa − pH)); dikromat diabaikan, jadi galat nyata di pH rendah lebih besar)

| pH | 4 | 5 | 6 | 7 | 8 | 10 |
|---|---|---|---|---|---|---|
| [Ag⁺] perlu, pKa 5,9 (× 10⁻⁵ M) | 15,5 | 5,17 | 2,32 | 1,80 | 1,74 | 1,73 |
| [Ag⁺] perlu, pKa 6,5 (× 10⁻⁵ M) | 30,8 | 9,88 | 3,53 | 1,98 | 1,76 | 1,73 |
| galat (mL), pKa 6,5 | 0,197 | 0,062 | 0,019 | 0,007 | 0,005 | 0,004 |

pH 4 vs pH 8–10: [Ag⁺] perlu naik ≈ 9× (pKa 5,9) sampai ≈ 18× (pKa 6,5) → narasi "sekitar sepuluh sampai dua puluh kali".

**5. Contoh kadar garam ikan asin (data rekaan yang konsisten)**

| Langkah | Nilai |
|---|---|
| Sampel | 5,000 g → 250,0 mL; alikuot 25,00 mL (faktor 10) |
| Mohr | 13,20 mL AgNO₃ 0,1000 M − blanko 0,05 mL = 13,15 mL → 1,3150 mmol Cl⁻ |
| Total | 13,150 mmol × 58,44 mg/mmol = 0,7685 g NaCl |
| Kadar | **15,37 % (b/b) sebagai NaCl**; tanpa blanko 15,43 % |
| Volhard | 25,00 mL AgNO₃ 0,1000 M = 2,5000 mmol − 1,3150 = 1,1850 mmol → 11,85 mL KSCN 0,1000 M → 15,37 % |
| Volhard tanpa saring (ilustrasi +0,20 mL SCN⁻) | 15,14 % (rendah) |
| K konversi AgCl → AgSCN | 1,82 × 10⁻¹⁰ / 1,1 × 10⁻¹² = 165 |

**6. Natrium**: fraksi Na di NaCl = 22,99/58,44 = 0,393 (WHO: 1 g garam ≈ 400 mg Na); 2000 mg Na ≈ 5,1 g garam (WHO: < 5 g). Ikan asin 20 g × 15,37 % = 3,07 g garam = 1209 mg Na = 60 % batas WHO (10 g → 30 %). "Natrium × 2,5 = garam" = 1/0,393 ≈ 2,54. Rata-rata dunia 2021: 4278 mg Na ≈ 10,9 g garam (WHO: ≈ 11 g).

**Ringkasan:** 20 adegan; 12 kartu rumus (NaCl/konversi, Ksp AgCl, Ksp Ag₂CrO₄, kelarutan, pAg & pKsp, reaksi Mohr, [Ag⁺] kromat, reaksi Volhard, neraca mol Volhard, konversi AgCl→AgSCN, mol Cl⁻, % NaCl). Panjang narasi ≈ 2050 kata (tanpa judul adegan & kartu) → dengan jeda ≈ 13 menit.

## Catatan untuk tahap produksi

- **Ikan asin & SNI:** jangan mengucapkan batas kadar garam SNI. Jurnal menyebut "maks. 20 %" (SNI 2721-1:2009 / SNI 8273:2016) atau "12–20 %", tetapi teks SNI resmi belum dibuka (lihat AUDIT ⚠). Angka 15,37 % di `hitung`/`silang`/`harian` adalah **contoh rekaan**; beri label kecil "contoh hitungan" di layar dan jangan menyebut jenis/merek ikan.
- **Kecap & mi instan:** tidak ada angka natrium produk di naskah (belum dicek, berbeda per merek). Visual tanpa merek; bila ingin angka, ambil dari label produk nyata yang difoto sendiri dan catat di AUDIT.
- **Paradoks Ksp:** narasi "seratus lima puluh kali lebih kecil" = 1,82 × 10⁻¹⁰ / 1,2 × 10⁻¹² = 152 (CRC: 158). Tegaskan di layar bahwa satuan Ksp berbeda (M² vs M³) — ini inti miskonsepsi, tambahkan ke daftar "fakta yang sering keliru" di rencana seri.
- **Kilat merah sesaat** di `hook`/`mohr`: dasar fisiknya kelebihan Ag⁺ lokal; titik akhir = merah yang **bertahan** (USGS: 10–15 detik). Animasi: noda merah di titik jatuh yang memudar saat pusaran, bukan berkedip on/off.
- **Galat Mohr:** bedakan galat teoretis (≈ 0,004 mL, dari Ksp) dari galat visual (perlu cukup Ag₂CrO₄ agar terlihat → blanko). Angka blanko 0,05–0,10 mL milik USGS untuk titran encer (0,5 mg Cl⁻/mL ≈ 0,014 M); untuk titran 0,1 M USGS menyatakan blanko tidak perlu. Contoh `hitung` memakai 0,05 mL sebagai ilustrasi — boleh diganti 0 bila ingin ketat; lalu hasil 15,43 %.
- **pH Mohr:** sumber berbeda: 7–10 (umum, dipakai di narasi) vs 7,0–10,5 (USGS). pKa HCrO₄⁻ tidak seragam di literatur (≈ 5,9 Wikipedia; ≈ 6,5 sering dipakai) → narasi tidak menyebut pKa, hanya "sekitar sepuluh sampai dua puluh kali".
- **Ag₂O vs AgOH:** narasi menyebut "perak hidroksida dan perak oksida yang coklat" (USGS: silver hydroxide; endapan nyata berupa Ag₂O coklat). Jangan memberi angka pH pasti untuk mulai mengendap (Ksp AgOH tidak ada di Skoog).
- **Cr(VI):** Skoog: "The Mohr method is now rarely used because Cr(VI) is a carcinogen." Di adegan `ph` tampilkan ikon bahaya + "limbah khusus"; jangan menampilkan tangan tanpa sarung tangan memegang kromat.
- **Volhard:** Skoog hanya menyebut penyaringan AgCl. Alternatif lain (nitrobenzena/pelapis organik) tidak dibahas agar tidak perlu sumber tambahan.
- **Fajans:** rentang pH fluoresein (≈ 7–10) dan diklorofluoresein (≈ 4–10) hanya dari catatan kuliah (⚠) → narasi kualitatif saja. Skoog §37D-2: diklorofluoresein, dekstrin, gagal di sinar matahari langsung — aman diucapkan.
- **Nama tokoh:** Mohr (Karl Friedrich Mohr, 1856), Volhard (Jacob Volhard, 1874), Fajans (Kazimierz Fajans, 1926 — tahun ini dari Skoog). Tahun Mohr & Volhard ⚠ tidak diucapkan (narasi hanya "abad kesembilan belas" untuk Mohr).
- **Fotografi:** dari pembuka bab 15 Skoog (AgBr, citra laten, fiksasi tiosulfat). Tidak perlu menyebut Modul 1/seri lain; cukup jembatan ke Ep. 7 (gravimetri).
- **Notasi:** "≈" untuk perkiraan; "±" tidak dipakai. Koma desimal di semua kartu.
- Teks TTS: "AgNO₃" → "perak nitrat"; "Ag₂CrO₄" → "perak kromat"; "K₂CrO₄" → "kalium kromat"; "SCN⁻" → "tiosianat"; "Fe(SCN)²⁺" → "kompleks besi tiosianat"; "pAg" → "pe-a-ge"; "Ksp" → "ka-es-pe"; "WHO" → "we-ha-o"; "Mohr" → "mor"; "Volhard" → "fol-hart"; "Fajans" → "fa-yans"; "M" → "molar"; "mmol" → "milimol".
