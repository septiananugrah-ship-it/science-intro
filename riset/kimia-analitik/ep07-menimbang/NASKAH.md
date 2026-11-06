# Naskah riset — Seni Mengukur (Kimia Analitik) Ep. 7 "Menimbang yang Tak Terlihat"

Draf untuk video berikutnya (belum dibangun). S1 Kimia UNESA, ±12–13 menit, 20 adegan.
Sumber materi: `materi/Analytical Chemistry.pdf` (Skoog, West, Holler & Crouch ed. 10: bab 10 "Gravimetric Methods of Analysis" hlm. 244–261, §8A-1 efek elektrolit hlm. 200–201, Feature 13-1 Ka2 asam sulfat hlm. 333, §34B-3 pengeringan sampel hlm. 950, §36D–36F neraca, berat tetap, kertas saring hlm. 964–976, Lampiran 2 Ksp hlm. A-6) + dokumen latar WHO *Sulfate in Drinking-water* (WHO/SDE/WSH/03.04/114, 2004) + tabel gangguan gravimetri sulfat (arsip EPA Region 5, 1993) + CIAAW (berat atom) + nobelprize.org (Richards 1914) + Richards & Lembert, *JACS* 1914, 36, 1329. Angka dicek di `AUDIT.md`; semua hitungan diulang dengan `hitung.py` (folder ini).

Catatan cakupan: kelarutan & Ksp sudah dibahas di Ep. 6, di sini hanya sejauh perlu untuk kehilangan saat mencuci dan pengaruh asam; elektrogravimetri hanya disebut (Ep. 9 elektrokimia); termogravimetri cukup satu kurva; pengendapan homogen disebut satu kalimat.

## Pilihan judul

1. **"Menimbang yang Tak Terlihat"** — Analisis Gravimetri: sulfat sebagai BaSO₄ ← *dipilih*
2. "Tamu di Dalam Kristal"
3. "Sepersepuluh Miligram"

Alasan memilih (1): sudah tercantum di rencana seri dan dijanjikan di penutup Ep. 6; "tak terlihat" bekerja dua lapis — ion sulfat yang tidak tampak di larutan bening, dan "tamu" tak terlihat yang terkubur di dalam kristal endapan. Judul (2) dipakai sebagai kalimat di adegan `tamu`.

## Benang merah

**Misteri:** Dua mahasiswa menganalisis karung pupuk ZA (amonium sulfat) yang sama dengan neraca 0,1 mg yang sama. Mahasiswa A melaporkan belerang **24,60 %**. Mahasiswa B **23,20 %**. Yang aneh bukan hanya selisihnya: amonium sulfat **murni** pun hanya mengandung **24,26 %** belerang. Hasil A lebih tinggi daripada yang mungkin secara kimia. Neraca tidak salah. Lalu dari mana belerang "ekstra" itu, dan ke mana belerang B hilang?
**Dibuka:** `hook`. **Petunjuk:** `lewatjenuh` (A menuang barium klorida cepat ke larutan dingin → kristal tumbuh tergesa), `tamu` (empat cara zat asing ikut terbawa), `tanda` (aturan arah galat). **Dipecahkan:** `pecah` — A: barium klorida tersumbat (oklusi) di dalam kristal, tamu tanpa sulfat → massa bertambah → galat **positif** (+12,2 mg). B: sebagian sulfat ikut mengendap sebagai amonium sulfat, lalu **menguap** saat dipijar → galat **negatif** (−13,3 mg). Kalau keduanya terjadi sekaligus, hasilnya 23,87 % — hampir tepat, karena kebetulan. **Kembali lagi:** `hitung` (analisis yang benar: 23,93 %), `richards` (Richards menemukan uap air tersumbat sebagai "musuh tersembunyi"), `penutup`.

## Pembagian bagian

- **Bagian 1 — Menimbang ion** (misteri pupuk → neraca 0,1 mg → prinsip gravimetri → Ksp BaSO₄ → lewat jenuh relatif → kondisi pengendapan → digesti)
- **Bagian 2 — Tamu di dalam kristal** (empat jenis kopresipitasi → arah galat → misteri terpecahkan → menyaring & mencuci → memijar sampai berat tetap)
- **Bagian 3 — Dari endapan ke angka** (faktor gravimetri → hitung pupuk ZA → kadar air → sulfat di air minum → Richards & berat atom → timbal yang berbeda → penutup)

## Daftar adegan

Gaya seri: **"Meja Analis"** (latar grafit + kisi kertas milimeter samar, alat gelas garis tipis bercahaya). Kode warna episode ini: sulfat SO₄²⁻ = kuning belerang, Ba²⁺ = hijau pucat (warna nyala barium), BaSO₄ = putih kapur, Cl⁻ / BaCl₂ tamu = hijau toska, NH₄⁺ = biru muda, panas/pijar = jingga–merah, angka neraca = emas, galat positif = jingga, galat negatif = ungu, nilai benar = emas. Semua massa & persen di layar diambil dari `hitung.py`. Endapan tumbuh dengan jumlah butir sesuai lewat jenuh (banyak inti kecil vs sedikit kristal besar), tidak pernah ganti berdasarkan ambang.

| # | id | Judul | Ide visual (bergerak sesuai kimia) |
|---|---|---|---|
| 1 | `hook` | Belerang yang terlalu banyak | Karung pupuk ZA (tanpa merek) di gudang tani; butir kristal putih tumpah. Dua kartu laporan meluncur: A 24,60 % (jingga), B 23,20 % (ungu). Garis emas "S maksimum amonium sulfat murni 24,26 %" muncul di antara keduanya; angka A menembus garis. Tanda tanya berayun di atas neraca. |
| 2 | `judul` | Judul | Ion SO₄²⁻ transparan melayang di larutan bening (hanya garis tepi samar), Ba²⁺ masuk, pasangan menjadi butir putih yang jatuh dan menyusun huruf judul; angka neraca emas berkedip "0,0001 g". |
| 3 | `neraca` | Sepersepuluh miligram | Endapan putih dari Ep. 6 diletakkan di neraca analitik berpintu kaca; digit terakhir menari lalu tenang. Skala zoom: 0,1 mg = sebutir garam halus (tanpa angka). Cawan panas diletakkan → angka terlalu ringan, panah arus konveksi; cawan masuk desikator. **Kartu rumus.** |
| 4 | `prinsip` | Menimbang ion yang tak terlihat | Alur bergerak: larutan bening → Ba²⁺ diteteskan → BaSO₄ putih → saring → pijar → timbang. Ion sulfat di larutan digambar hanya sebagai bayangan; begitu terikat Ba²⁺, menjadi padat & "terlihat". **Kartu rumus.** |
| 5 | `ksp` | Cukup sukar larut | Kristal BaSO₄ di dasar gelas, ion lepas–menempel (gaya Ep. 4–6). Batang kelarutan 2,45 mg/L; gelas kecil "barium meal" (siluet sinar-X saluran cerna). **Kartu rumus.** |
| 6 | `lewatjenuh` | Banyak inti atau kristal besar | Dua gelas berdampingan: kiri dingin pekat, tetes deras → ratusan inti kecil berkabut (penghitung inti naik cepat); kanan panas encer, tetes pelan → sedikit kristal yang membesar. Angka ilustrasi ≈ 950 vs ≈ 40. **Kartu rumus.** |
| 7 | `kondisi` | Resep endapan yang baik | Daftar muncul satu per satu dengan ikon: pemanas (S naik), labu besar (Q turun), buret tetes pelan + pengaduk, sedikit HCl. Batang kelarutan dalam asam bertambah (×2,4 di HCl 0,05 M) tapi tetap kecil; endapan BaCO₃ "tidak diundang" terhalang asam. **Kartu rumus.** |
| 8 | `digesti` | Kristal kecil mengalah | Gelas dibiarkan panas tanpa diaduk (jam pasir): butir kecil mengecil & lenyap, butir besar tumbuh (pematangan Ostwald); kantong cairan di kristal terbuka dan tamu keluar. |
| 9 | `tamu` | Tamu di dalam kristal | Kisi BaSO₄ diperbesar, empat panel bergiliran: adsorpsi (ion menempel di permukaan), kristal campuran (Pb²⁺/Sr²⁺ menggantikan Ba²⁺ di kisi), oklusi (ion lapisan pengimbang terkubur saat kristal tumbuh cepat), terperangkap mekanis (dua kristal tumbuh bersatu mengurung tetes cairan). |
| 10 | `tanda` | Galat ke atas atau ke bawah | Neraca jungkat-jungkit: tamu tanpa sulfat (BaCl₂) menambah piring kanan → naik; tamu bersulfat yang lebih ringan (K₂SO₄) atau yang menguap ((NH₄)₂SO₄) → turun. Tabel "mg per mmol" dari `hitung.py`. **Kartu rumus.** |
| 11 | `pecah` | Misteri terpecahkan | Kembali ke dua kartu laporan. Jalur A diputar ulang: tuang cepat ke larutan dingin, BaCl₂ toska terkubur, +12,2 mg. Jalur B: NH₄⁺ ikut terkubur sebagai amonium sulfat, di tanur berubah menjadi asap, −13,3 mg. Lalu jalur gabungan: kedua panah saling meniadakan → 23,87 % "cocok tapi salah". |
| 12 | `saring` | Menyaring tanpa kehilangan | Corong + kertas saring tak berabu dilipat; dekantasi cairan panas; cuci tiga kali air panas. Penghitung "BaSO₄ larut terbawa" naik sangat pelan: 0,15 mg per 60 mL (batas atas). Ion Ba²⁺ berlebih di cairan induk menekan kelarutan (penghitung hampir nol). **Kartu rumus.** |
| 13 | `pijar` | Sampai beratnya tetap | Kertas diarangkan pelan di nyala kecil (peringatan: terlalu cepat → BaS); cawan porselen di tanur ≈ 900 °C memerah; desikator; neraca: 21,9112 → 21,9091 → 21,9088 g, selisih menyusut ke 0,3 mg, lampu hijau "berat tetap". Kurva termogravimetri BaSO₄ datar sejak suhu rendah. |
| 14 | `faktor` | Faktor gravimetri | Neraca dua lengan simbolis: satu molekul BaSO₄ (233,39) di kiri, satu SO₄ (96,06) dan satu S (32,06) di kanan; pecahan tumbuh menjadi 0,4116 dan 0,1374. **Kartu rumus** (2 momen). |
| 15 | `hitung` | Berapa belerang di pupuk ini? | Alur angka: botol timbang 12,3456 → 12,0956 g (0,2500 g), cawan kosong 21,4733 g, cawan + BaSO₄ 21,9088 g → 0,4355 g → 23,93 %. Garis emas 24,26 % tetap di atas; batang "98,6 % amonium sulfat". Label kecil "contoh hitungan". **Kartu rumus.** |
| 16 | `kering` | Air yang ikut tertimbang | Gelas arloji di oven 105 °C; titik-titik uap naik; 2,0000 → 1,9920 g (0,40 %). Lalu alat ukur kadar air biji-bijian (piring timbang + lampu inframerah), angka persen turun lalu datar. Batang "basis kering vs seperti diterima" 23,93 vs 23,83 %. |
| 17 | `air` | Sulfat di air minum | Gelas air dari sumur, sungai, kemasan (tanpa merek). Pita konsentrasi: 10 mg/L (batas bawah metode), 250 mg/L (ambang rasa terendah), 500 mg/L (keluhan rasa naik), 1000–1200 mg/L (efek pencahar). 1 L air 250 mg/L → endapan 0,61 g bergerak ke cawan. |
| 18 | `richards` | Penimbang paling teliti di dunia | Laboratorium Harvard awal abad 20 (ilustrasi datar, tanpa wajah rinci): alat kuarsa, "alat pembotol", neraca berkotak. Medali Nobel 1914 (diserahkan 1915). Unsur-unsur menyala di tabel periodik (lebih dari tiga puluh). Tetes uap air terkurung di kristal → label "uap air tersumbat". |
| 19 | `timbal` | Timbal yang tidak sama beratnya | Enam bijih (uraninit, pitchblende, karnotit, torianit…) dan sebatang timbal biasa; batang berat atom 206,40 → 207,15 tumbuh berurutan. PbCl₂ → AgCl: 1,0337 vs 1,0309 g per gram. Lalu kartu CIAAW masa kini: S [32,059; 32,076], Pb [206,14; 207,94]. |
| 20 | `penutup` | Penutup & teaser Ep. 8 | Kembali ke karung pupuk: dua kartu laporan bergeser menyatu di 23,93 %. Cawan putih di neraca, digit emas tenang. Lalu larutan ungu permanganat menetes ke labu dan memucat; teks: "Berikutnya — Perebutan Elektron". |

## Narasi

Konvensi: kalimat pendek, gaya tutur. **[KARTU]** = rumus yang tampil di kartu `Formula` (≥ 56 px, satu kartu per momen). Angka ditulis seperti diucapkan; teks TTS dibuat terpisah nanti. Semua angka cocok dengan keluaran `hitung.py`.

### 1 · `hook` — Belerang yang terlalu banyak

Pupuk ZA. Kristal putih ini adalah amonium sulfat, sumber nitrogen dan belerang untuk sawah.
Dua mahasiswa mengambil contoh dari karung yang sama, memakai neraca yang sama, dan metode yang sama: mengendapkan sulfat sebagai barium sulfat, lalu menimbangnya.
Mahasiswa pertama melaporkan belerang dua puluh empat koma enam persen. Mahasiswa kedua, dua puluh tiga koma dua persen.
Berbeda, tapi itu belum yang paling aneh.
Amonium sulfat yang murni seratus persen pun hanya mengandung dua puluh empat koma dua enam persen belerang. Hasil mahasiswa pertama lebih tinggi daripada yang mungkin secara kimia.
Neracanya tidak rusak. Lalu dari mana belerang ekstra itu? Dan ke mana belerang mahasiswa kedua menghilang?

### 2 · `judul` — Judul

Menimbang yang Tak Terlihat. Seni Mengukur, episode tujuh.

### 3 · `neraca` — Sepersepuluh miligram

Di akhir episode lalu, endapan putih kita diletakkan di atas neraca. Sekarang kita lihat neraca itu lebih dekat.
Neraca analitik yang paling umum di laboratorium sanggup menimbang sampai sekitar dua ratus gram, dengan ketelitian sepersepuluh miligram.

**[KARTU]** 0,1 mg = 0,0001 g  ·  pada 0,4355 g → 1 bagian per ≈ 4400

Buku Skoog menyebut, kalau Anda melakukan gravimetri, mungkin itulah pengukuran paling teliti dalam hidup Anda.
Tapi neraca seteliti ini mudah tertipu. Cawan yang masih hangat membuat arus udara naik di dalam lemari neraca, dan udara hangat di dalam wadah lebih ringan. Cawan porselen bisa tampak sepuluh sampai lima belas miligram terlalu ringan.
Karena itu, benda panas selalu didinginkan dulu di desikator sampai suhu ruang.

### 4 · `prinsip` — Menimbang ion yang tak terlihat

Masalahnya, sulfat di dalam pupuk yang dilarutkan tidak bisa ditimbang langsung. Ion sulfat tersebar di larutan bening, tak terlihat.
Gravimetri mengubah yang tak terlihat menjadi padatan. Tambahkan ion barium berlebih, dan setiap ion sulfat ditangkap menjadi barium sulfat yang putih.

**[KARTU]** Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)

Endapan disaring, dicuci, dipijar, lalu ditimbang. Dari massanya, kita hitung sulfat semula.
Gravimetri tidak memerlukan kurva kalibrasi atau larutan standar. Yang dibutuhkan hanya neraca, stoikiometri, dan berat atom.

### 5 · `ksp` — Cukup sukar larut

Syarat pertama: endapan harus sangat sukar larut, supaya tidak ada sulfat yang tertinggal di larutan.

**[KARTU]** K_sp(BaSO₄) = [Ba²⁺][SO₄²⁻] = 1,1 × 10⁻¹⁰   s = √K_sp ≈ 1,05 × 10⁻⁵ M ≈ 2,4 mg/L

Satu liter air murni hanya melarutkan sekitar dua koma empat miligram barium sulfat.
Sifat ini bahkan dipakai di rumah sakit. Senyawa barium yang larut beracun, tetapi barium sulfat begitu sukar larut sehingga diminum sebagai bubur kontras untuk foto sinar-X saluran cerna.

### 6 · `lewatjenuh` — Banyak inti atau kristal besar

Syarat kedua: butir endapan harus cukup besar untuk tertahan di kertas saring. Ukuran butir ditentukan oleh cara kita menuang pereaksi.
Saat barium bertemu sulfat, larutan sesaat menjadi lewat jenuh. Von Weimarn, tahun seribu sembilan ratus dua puluh lima, merangkumnya dalam satu besaran.

**[KARTU]** lewat jenuh relatif = (Q − S) / S

Q adalah konsentrasi zat terlarut saat itu, S kelarutan setimbangnya.
Endapan terbentuk lewat dua jalan: pembentukan inti baru, dan pertumbuhan inti yang sudah ada. Saat lewat jenuh relatif besar, inti baru terbentuk jauh lebih cepat. Hasilnya ribuan butir halus yang lolos dari saringan.
Saat lewat jenuh relatif kecil, ion lebih suka menempel pada kristal yang sudah ada. Butirnya sedikit, tapi besar.
Sebagai gambaran, tetes barium klorida pekat yang jatuh ke larutan dingin bisa memberi angka sekitar sembilan ratus lima puluh. Ingat ini. Mahasiswa pertama kita menuang barium klorida dengan cepat, ke larutan yang masih dingin.

### 7 · `kondisi` — Resep endapan yang baik

Maka resepnya: buat Q kecil dan S besar.
Q dikecilkan dengan larutan encer, barium yang diteteskan pelan, dan pengadukan yang baik. S dibesarkan dengan memanaskan larutan, dan sedikit asam klorida.
Kenapa asam? Sebagian ion sulfat menangkap proton menjadi hidrogen sulfat, sehingga barium sulfat sedikit lebih larut.

**[KARTU]** s = √(K_sp (1 + [H⁺]/K_a2))   K_a2 = 1,02 × 10⁻²

Di asam klorida nol koma nol lima molar, kelarutannya naik sekitar dua koma empat kali. Masih sangat kecil, tetapi cukup untuk menurunkan lewat jenuh. Bonusnya, asam mencegah barium karbonat dan barium fosfat ikut mengendap.
Asamnya tidak boleh banyak. Di asam pekat, sulfat yang larut terlalu besar dan hasil menjadi rendah.

### 8 · `digesti` — Kristal kecil mengalah

Setelah mengendap, gelas tidak langsung disaring. Ia dibiarkan panas selama satu sampai dua jam, tanpa diaduk. Inilah digesti.
Kristal yang sangat kecil punya permukaan yang relatif besar, sehingga sedikit lebih mudah larut daripada kristal besar. Perlahan, butir kecil melarut, dan ionnya menempel pada butir besar. IUPAC menyebutnya pematangan Ostwald.
Sambil melarut dan mengkristal ulang, kantong-kantong kecil di dalam kristal ikut terbuka. Zat asing yang terkurung sempat keluar.
Endapan menjadi lebih kasar, lebih mudah disaring, dan lebih murni.

### 9 · `tamu` — Tamu di dalam kristal

Lebih murni, karena endapan hampir selalu membawa tamu. Zat yang seharusnya larut ikut terbawa turun. Namanya kopresipitasi.
Buku Skoog membaginya menjadi empat.
Pertama, adsorpsi: ion menempel di permukaan. Penting untuk koloid yang permukaannya luas, seperti perak klorida di episode lalu, tetapi kecil pengaruhnya pada kristal barium sulfat.
Kedua, kristal campuran: ion asing yang ukuran dan muatannya mirip menggantikan barium di dalam kisi. Timbal dan stronsium sulfat bisa masuk ke kisi barium sulfat. Ini paling sulit diatasi; pengganggunya harus dipisahkan lebih dulu.
Ketiga, oklusi: ion di lapisan sekeliling kristal terkubur saat kristal tumbuh terlalu cepat.
Keempat, terperangkap mekanis: dua kristal tumbuh bersatu dan mengurung setetes larutan.
Oklusi dan terperangkap mekanis paling banyak terjadi saat lewat jenuh tinggi. Tamu di dalam kristal, tak terlihat, tapi ikut tertimbang.

### 10 · `tanda` — Galat ke atas atau ke bawah

Apakah tamu selalu membuat hasil terlalu tinggi? Tidak.
Aturannya sederhana. Kalau tamu itu tidak mengandung zat yang kita ukur, hasil pasti terlalu tinggi, karena massanya hanya menambah.
Kalau tamu itu mengandung zat yang kita ukur, arahnya bergantung pada massanya dibanding barium sulfat yang seharusnya terbentuk.

**[KARTU]** per mmol tamu: BaCl₂ +208 mg  ·  K₂SO₄ menggantikan BaSO₄ −59 mg  ·  (NH₄)₂SO₄ menguap −233 mg

Kalium sulfat yang menggantikan barium sulfat lebih ringan, jadi hasil rendah. Dan amonium sulfat lebih licik lagi: ia menguap seluruhnya saat dipijar, membawa sulfatnya pergi.

### 11 · `pecah` — Misteri terpecahkan

Sekarang kita bisa menjawab misteri pupuk ZA.
Mahasiswa pertama menuang barium klorida dengan cepat ke larutan dingin. Lewat jenuh tinggi, kristal tumbuh tergesa, dan barium klorida terkubur di dalamnya. Tamu ini tidak mengandung sulfat. Dua belas miligram tamu cukup untuk mendorong hasil ke dua puluh empat koma enam persen, melewati batas yang mustahil.
Mahasiswa kedua bekerja lebih hati-hati, tetapi pupuknya sendiri penuh ion amonium. Sebagian sulfat ikut terkubur sebagai amonium sulfat. Di tanur, amonium sulfat itu menguap. Tiga belas miligram barium sulfat yang seharusnya ada, hilang. Hasilnya turun ke dua puluh tiga koma dua persen.
Dan ini yang paling berbahaya. Kalau kedua galat terjadi pada satu analisis, hasilnya dua puluh tiga koma delapan tujuh persen. Hampir tepat. Cocok, tapi karena kebetulan.
Catatan laboratorium lama tentang gravimetri sulfat pun mengakui: kecocokan yang bagus sering kali sebagian karena galat yang saling meniadakan.

### 12 · `saring` — Menyaring tanpa kehilangan

Endapan yang baik masih harus dipindahkan tanpa kehilangan satu butir pun.
Cairan panas dituang lebih dulu melalui kertas saring tak berabu, lalu endapan dicuci dengan air panas dan dipindahkan seluruhnya.
Apakah barium sulfat ikut larut saat dicuci? Mari hitung batas atasnya.

**[KARTU]** 60 mL air × 2,45 mg/L ≈ 0,15 mg  (≈ 0,03 % dari 0,4355 g)

Itu pun kalau air cucian sempat jenuh. Di cairan induk, kelebihan ion barium menekan kelarutan sampai seribu kali lebih kecil. Inilah gunanya pereaksi berlebih: efek ion senama.
Satu hal lagi: barium sulfat tidak bisa diendapkan ulang dengan mudah, karena tidak ada pelarut praktis untuknya. Kesempatan membuat endapan bersih hanya sekali.

### 13 · `pijar` — Sampai beratnya tetap

Kertas saring tidak ikut ditimbang. Ia dibakar habis. Sembilan atau sebelas sentimeter kertas tak berabu hanya menyisakan abu kurang dari sepersepuluh miligram.
Kertas diarangkan pelan dulu. Kalau terlalu cepat, karbon dari kertas bisa mereduksi sebagian barium sulfat menjadi barium sulfida, dan hasil menjadi rendah.
Lalu cawan dipijar di tanur, sekitar sembilan ratus derajat. Dinginkan di desikator, timbang. Pijar lagi, dinginkan, timbang lagi.
Dua puluh satu koma sembilan satu satu dua. Lalu sembilan nol sembilan satu. Lalu sembilan nol delapan delapan. Selisih terakhir tinggal tiga per sepuluh miligram.
Inilah berat tetap: pemanasan diulang sampai dua penimbangan berurutan selisihnya tidak lebih dari dua sampai tiga per sepuluh miligram.

### 14 · `faktor` — Faktor gravimetri

Kita sudah punya massa barium sulfat. Untuk mengubahnya menjadi massa sulfat, kita butuh satu angka.
Setiap satu barium sulfat membawa tepat satu sulfat.

**[KARTU]** F = M(SO₄²⁻) / M(BaSO₄) = 96,06 / 233,39 = 0,4116

Kalau yang ingin kita laporkan belerang, faktornya berbeda.

**[KARTU]** F = M(S) / M(BaSO₄) = 32,06 / 233,39 = 0,1374

Faktor gravimetri menggabungkan semua massa molar dan perbandingan mol menjadi satu pengali. Massa yang ditimbang, dikali faktor, sama dengan massa yang dicari.

### 15 · `hitung` — Berapa belerang di pupuk ini?

Sekarang analisis yang benar. Angkanya rekaan, tetapi semua langkahnya nyata.
Pupuk yang sudah dikeringkan ditimbang dari botol timbang: dua belas koma tiga empat lima enam gram menjadi dua belas koma nol sembilan lima enam. Contohnya nol koma dua lima nol nol gram.
Setelah pengendapan panas dan pelan, digesti, penyaringan, dan pemijaran sampai berat tetap, cawan berisi dua puluh satu koma sembilan nol delapan delapan gram. Cawan kosong dua puluh satu koma empat tujuh tiga tiga. Barium sulfatnya nol koma empat tiga lima lima gram.

**[KARTU]** % S = (0,4355 g × 0,1374) / 0,2500 g × 100 % = 23,93 %

Dua puluh tiga koma sembilan tiga persen. Di bawah batas dua puluh empat koma dua enam, seperti seharusnya. Artinya pupuk ini sekitar sembilan puluh delapan koma enam persen amonium sulfat.
Dalam sulfat, tujuh puluh satu koma tujuh persen.

### 16 · `kering` — Air yang ikut tertimbang

Kenapa pupuknya dikeringkan dulu? Karena air juga ikut tertimbang.
Contoh dua gram dipanaskan di oven seratus lima derajat sampai beratnya tetap. Ia kehilangan delapan miligram, nol koma empat persen. Inilah susut pengeringan, juga sebuah gravimetri.
Hasil yang dihitung dari contoh kering disebut basis kering: dua puluh tiga koma sembilan tiga persen. Untuk pupuk seperti yang diterima dari karung, dua puluh tiga koma delapan tiga.
Pada bahan lain, air jauh lebih berpengaruh. Skoog mencatat kadar air pati kentang bisa berubah dari sepuluh sampai dua puluh satu persen hanya karena kelembapan udara naik. Untuk biji-bijian, ada alat yang memanaskan sepuluh gram contoh dengan lampu inframerah di atas piring timbang, dan membaca persen air langsung.

### 17 · `air` — Sulfat di air minum

Sulfat juga diukur di air yang kita minum. Sebagian besar berasal dari mineral yang larut, seperti gips.
Menurut dokumen latar WHO, rasa sulfat mulai tercecap pada sekitar dua ratus lima puluh miligram per liter. Di atas lima ratus, keluhan soal rasa makin mungkin. Pada seribu sampai seribu dua ratus, air bisa bersifat pencahar.
WHO tidak menetapkan batas berbasis kesehatan untuk sulfat. Yang dijaga terutama rasa dan karat pipa.
Metode gravimetri barium sulfat cocok untuk sulfat di atas sepuluh miligram per liter. Satu liter air dengan dua ratus lima puluh miligram sulfat menghasilkan sekitar nol koma enam gram endapan. Jauh di atas batas neraca.

### 18 · `richards` — Penimbang paling teliti di dunia

Faktor gravimetri bergantung pada berat atom. Tapi dari mana berat atom itu sendiri?
Sebagian besar, dari gravimetri.
Theodore William Richards dari Universitas Harvard menghabiskan sekitar separuh karyanya untuk menimbang. Ia melarutkan garam logam yang sangat murni, mengendapkan kloridanya dengan perak, lalu menimbang perak dan perak klorida dengan ketelitian yang belum pernah ada.
Ia membuat wadah dari kuarsa, alat untuk menutup contoh sebelum terkena udara, dan memperbaiki cara menimbang. Ia juga menemukan musuh tersembunyi yang sama dengan musuh kita: uap air dan gas yang tersumbat di dalam padatan.
Sampai tahun seribu sembilan ratus dua belas, ia sudah menentukan ulang berat atom lebih dari tiga puluh unsur penting. Hadiah Nobel Kimia tahun seribu sembilan ratus empat belas diberikan kepadanya, "atas penentuan berat atom yang teliti dari banyak unsur kimia". Hadiah itu baru diserahkan setahun kemudian.

### 19 · `timbal` — Timbal yang tidak sama beratnya

Lalu, pada tahun seribu sembilan ratus empat belas, Richards menimbang timbal dari bijih radioaktif.
Caranya sama seperti yang kita kenal: timbal klorida dilarutkan, kloridanya diendapkan dengan perak nitrat, lalu perak dan endapannya ditimbang.
Timbal biasa memberi berat atom dua ratus tujuh koma satu lima. Timbal dari uraninit Carolina Utara hanya dua ratus enam koma empat nol. Selisihnya muncul sebagai hampir tiga miligram perak klorida per gram timbal klorida, sekitar dua puluh delapan kali batas baca neraca.
Richards dan Lembert menulis, hasilnya mengejutkan. Unsur yang secara kimia sama, ternyata beratnya berbeda menurut asalnya. Itulah salah satu bukti kimia pertama adanya isotop.
Hari ini, komisi berat atom dunia, CIAAW, menulis berat atom belerang dan timbal bukan sebagai satu angka, melainkan rentang, karena komposisi isotopnya berbeda menurut sumber. Neraca yang teliti membuka pintu ke dalam inti atom.

### 20 · `penutup` — Penutup & teaser Ep. 8

Kembali ke dua mahasiswa. Neraca mereka tidak salah. Yang salah adalah tamu tak terlihat: barium klorida yang terkubur dan menambah berat, dan amonium sulfat yang ikut mengendap lalu menguap.
Endapan yang baik lahir dari kesabaran: larutan panas dan encer, tetes yang pelan, digesti, cucian yang cukup, dan pemijaran sampai beratnya tetap.
Gravimetri itu lambat. Tapi ketika dikerjakan dengan benar, ia hanya bersandar pada neraca dan berat atom.
Episode berikutnya, kita kembali ke buret. Kali ini yang diperebutkan bukan proton atau ion perak, melainkan elektron. Permanganat ungu yang memucat, dan iodium yang membiru.
Perebutan Elektron.

---

## Hitungan (dari `hitung.py`)

Berat atom CIAAW (ringkas 2021): Ba 137,33; S 32,06; O 15,999; H 1,008; N 14,007; Cl 35,45; K 39,098; Fe 55,845. Ksp BaSO₄ 1,1 × 10⁻¹⁰ (Skoog Lampiran 2; CRC 1,0842 × 10⁻¹⁰); Ka2 H₂SO₄ 1,02 × 10⁻².

**1. Massa molar & faktor**

| Besaran | Nilai |
|---|---|
| M(BaSO₄) / M(SO₄²⁻) / M((NH₄)₂SO₄) | 233,386 / 96,056 / 132,134 g/mol |
| F(SO₄/BaSO₄) | **0,41158** |
| F(S/BaSO₄) | **0,13737** |
| S dalam (NH₄)₂SO₄ murni | **24,26 %** (SO₄ 72,70 %) |

**2. Kelarutan & kehilangan**

| Kondisi | s (M) | mg/L | catatan |
|---|---|---|---|
| air murni, Skoog | 1,049 × 10⁻⁵ | 2,45 | CRC: 1,041 × 10⁻⁵ M, 2,43 mg/L (Wikipedia: 2,448 mg/L pada 20 °C) |
| HCl 0,05 M | 2,55 × 10⁻⁵ | 5,95 | × 2,43 |
| HCl 1,0 M | 1,04 × 10⁻⁴ | 24,4 | × 9,95 ("asam pekat → rendah") |
| Ba²⁺ berlebih 0,010 M | 1,1 × 10⁻⁸ | — | 300 mL melarutkan 0,0008 mg |

Cuci 60 mL (jenuh, batas atas): 0,147 mg = 0,034 % dari 0,4355 g; 100 mL: 0,245 mg; 300 mL air murni tanpa Ba berlebih: 0,73 mg (0,17 %).

**3. Lewat jenuh relatif (ilustrasi):** Q lokal 0,01 M, S 1,05 × 10⁻⁵ M → ≈ 952 ("sekitar sembilan ratus lima puluh"); Q 0,001 M dalam HCl 0,05 M → ≈ 38. Efek suhu tidak dihitung.

**4. Contoh pupuk ZA (data rekaan yang konsisten)**

| Langkah | Nilai |
|---|---|
| Susut pengeringan 105 °C | 2,0000 → 1,9920 g = 0,40 % |
| Cuplikan kering (selisih botol) | 12,3456 − 12,0956 = 0,2500 g |
| Cawan kosong | 21,4736 → 21,4734 → 21,4733 g |
| Cawan + BaSO₄ | 21,9112 → 21,9091 → 21,9088 g (selisih akhir 0,3 mg) |
| BaSO₄ | 0,4355 g = 1,866 mmol |
| % SO₄ / % S (basis kering) | 71,70 % / **23,93 %** (= 98,6 % amonium sulfat) |
| % S seperti diterima | 23,83 % |
| BaCl₂·2H₂O 0,60 g | 2,456 mmol (berlebih 32 %) |
| Neraca 0,1 mg pada 0,4355 g | 1 bagian per 4355 (narasi "≈ 4400") |
| Cawan panas 10–15 mg | 2,3–3,4 % relatif |

**5. Benang merah: kopresipitasi**

| Kasus | Δm BaSO₄ | m tertimbang | % S |
|---|---|---|---|
| benar | — | 0,4355 g | 23,93 |
| A: +12,2 mg BaCl₂ tersumbat | +12,2 mg | 0,4477 g | **24,60** (> 24,26) |
| B: 0,057 mmol SO₄ sebagai (NH₄)₂SO₄ (7,5 mg), menguap | −13,3 mg | 0,4222 g | **23,20** |
| A + B | −1,1 mg | 0,4344 g | 23,87 |

Per mmol tamu: BaCl₂ +208,2 mg; Ba(NO₃)₂ +261,3 mg; K₂SO₄ menggantikan BaSO₄ −59,1 mg; (NH₄)₂SO₄ menguap −233,4 mg; besi(III) sulfat basa → Fe₂O₃ −180,2 mg per SO₄.

**6. Air minum:** 250 mg/L × 1 L → 607 mg BaSO₄ (200 mL → 122 mg); 10 mg/L × 1 L → 24 mg.

**7. Richards & Lembert 1914:** Pb uraninit North Carolina 206,40 … timbal biasa 207,15 (selisih 0,75 = 0,36 %). 1,0000 g PbCl₂ → 1,0337 vs 1,0309 g AgCl (beda 2,8 mg ≈ 28 × 0,1 mg).

**Ringkasan:** 20 adegan; 10 kartu rumus (resolusi 0,1 mg, reaksi pengendapan, Ksp & s, lewat jenuh relatif, s dalam asam, arah galat per mmol tamu, kehilangan cucian, F sulfat, F belerang, % S). Panjang narasi ≈ 1930 kata (tanpa judul adegan & kartu) → dengan jeda ≈ 12,5 menit.

## Catatan untuk tahap produksi

- **Pupuk ZA & SNI:** jangan mengucapkan syarat mutu SNI 02-1760-2005 (kadar N/S minimum belum dibuka, lihat AUDIT ⚠). Semua angka pupuk (24,60 / 23,20 / 23,93 %) adalah **contoh rekaan**; tampilkan label kecil "contoh hitungan" dan karung tanpa merek. Batas 24,26 % adalah hitungan stoikiometri murni (aman diucapkan).
- **Besarnya galat A dan B** (+12,2 / −13,3 mg ≈ 3 % endapan) sengaja dibesarkan agar terlihat; arahnya dari sumber (EPA/Skoog-West: kopresipitasi BaCl₂ → tinggi; NH₄⁺ → rendah karena (NH₄)₂SO₄ menguap). Jangan menyebut "biasanya sebesar ini".
- **Pematangan Ostwald:** Skoog tidak memakai istilah ini; ia menjelaskan digesti sebagai pelarutan & rekristalisasi. Definisi istilah dari IUPAC Gold Book (lewat hasil pencarian; halaman goldbook diblokir dari sandbox, 403). Narasi tetap kualitatif.
- **Angka lewat jenuh ≈ 950** hanyalah ilustrasi orde besaran (Q lokal dipilih sendiri); tampilkan "≈" dan label "ilustrasi". Jangan menampilkan angka panas karena Ksp pada suhu tinggi tidak dicek.
- **AgCl vs BaSO₄:** catatan kaki Skoog: AgCl tetap koloid walau kelarutan molarnya mirip BaSO₄ → konsep lewat jenuh relatif "tidak sempurna". Bisa jadi teks kecil di `lewatjenuh`/`tamu`, tidak diucapkan.
- **Suhu pijar:** narasi "sekitar sembilan ratus derajat" dari prosedur arsip EPA; Skoog Gambar 10-8 hanya menunjukkan BaSO₄ mencapai massa tetap jauh di bawah suhu Al₂O₃ (tanpa angka tegas) — kurva di layar kualitatif.
- **Richards:** "lebih dari tiga puluh unsur sampai 1912" = biografi nobelprize.org (Science History Institute menyebut 25 unsur untuk hadiah; Forbes 1932: 55 unsur oleh Richards & murid) → narasi memakai versi Nobel. Hadiah 1914 diserahkan 1915 (nobelprize.org). "Kimiawan Amerika pertama peraih Nobel Kimia" tidak diucapkan (sumber sekunder). Jangan menyebut Stas dengan angka.
- **Timbal:** angka 206,40 & 207,15 dari Tabel V Richards & Lembert (kutipan di web.lemoyne.edu). Hindari angka 206,08 (hasil pencarian, tidak dikonfirmasi). Kata "isotop" belum dipakai di makalah 1914 (Soddy 1913) → narasi "salah satu bukti kimia pertama adanya isotop" (pernyataan sejarah sekunder, ⚠ ringan).
- **WHO sulfat:** angka 250 / 500 / 1000–1200 mg/L dari dokumen latar 2004 (rangkuman pedoman edisi 3). Permenkes 2/2023 tidak disebut (angka sulfatnya belum dicek; 250 mg/L milik Permenkes 492/2010 yang mungkin sudah dicabut).
- **Barium meal:** visual siluet, jangan menyebut dosis. Tegaskan "senyawa barium yang larut beracun".
- **Notasi:** "≈" untuk perkiraan; "±" tidak dipakai. Koma desimal di semua kartu. Massa ditulis 4 desimal (neraca 0,1 mg).
- Teks TTS: "BaSO₄" → "barium sulfat"; "BaCl₂" → "barium klorida"; "(NH₄)₂SO₄" → "amonium sulfat"; "K₂SO₄" → "kalium sulfat"; "SO₄²⁻" → "ion sulfat"; "Ksp" → "ka-es-pe"; "Ka2" → "ka-a dua"; "ZA" → "zet-a"; "WHO" → "we-ha-o"; "IUPAC" → "yu-pak"; "CIAAW" → "si-a-a-we" (atau "komisi berat atom"); "von Weimarn" → "fon vaimarn"; "Ostwald" → "ost-valt"; "Richards" → "ricards"; "Lembert" → "lembert"; "mg/L" → "miligram per liter"; "M" → "molar".
