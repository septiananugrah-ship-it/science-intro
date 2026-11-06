# Naskah riset — Seni Mengukur (Kimia Analitik) Ep. 9 "Volt yang Bercerita"

Draf untuk video berikutnya (belum dibangun). S1 Kimia UNESA, ±13 menit, 20 adegan.
Sumber materi: `materi/Analytical Chemistry.pdf` (Skoog, West, Holler & Crouch ed. 10: bab 19 "Potentiometry" hlm. 500–538 — §19A–19C elektrode acuan & potensial sambungan hlm. 501–505, §19D-3 elektrode kaca hlm. 507–514, §19D-6 elektrode fluorida hlm. 518, §19F potensiometri langsung & definisi operasional pH hlm. 528–534, §19G titrasi potensiometrik hlm. 534–536; Lampiran 3 Ka; Lampiran 5 E°) + `materi/Vilasó-Cadre et al. (2023).pdf` (elektrode baja tahan karat) + IUPAC *Measurement of pH* (Buck dkk. 2002) + sertifikat NIST SRM 185i/186g/187f + CODATA 2018 (R, F) + biografi Arnold Beckman (Science History Institute). Angka dicek di `AUDIT.md`; semua hitungan diulang dengan `hitung.py` (folder ini).

Catatan cakupan: persamaan Nernst sebagai hukum sel elektrokimia umum (E°, sel galvani) diasumsikan dari Ep. 8 "Perebutan Elektron"; di sini hanya bentuk "59 mV per dekade". Titrasi potensiometrik memakai **data yang sama dengan Ep. 3** (50,00 mL CH₃COOH 0,1000 M + NaOH 0,1000 M, Ka 1,75 × 10⁻⁵) supaya penonton melihat kurva yang sama "didengar" dengan elektrode. Penambahan standar, ISFET, sensor gas, dan elektrode membran cair (Ca²⁺) hanya disebut atau dilewati. Beer–Lambert → Ep. 10.

## Pilihan judul

1. **"Volt yang Bercerita"** — Potensiometri: Elektrode Kaca, Nernst, Titrasi Potensiometrik ← *dipilih*
2. "Kaca yang Bisa Merasakan Asam"
3. "Lima Puluh Sembilan Milivolt"

Alasan memilih (1): sudah tercantum di rencana seri; elektrode tidak "melihat" warna, ia memberi angka milivolt, dan analis yang menerjemahkan cerita itu menjadi pH, kadar, dan titik akhir. Judul (2) dipakai sebagai kalimat di `hook`, judul (3) di `nernst`.

## Benang merah

**Misteri:** Ujung pH meter yang dicelupkan ke perasan jeruk nipis adalah gelembung **kaca**, bahan yang sama dengan gelas kimia tempat kita menyimpan asam karena kaca *tidak* bereaksi dengannya. Kaca juga isolator: hambatan selaput itu 50–500 megaohm. Bagaimana kaca bisa "merasakan" ion hidrogen dan memberi tahu kita dalam milivolt, tepat 59 mV setiap satu satuan pH? Dan kenapa elektrode yang dibiarkan kering menjadi "bisu"?
**Dibuka:** `hook`. **Petunjuk:** `sel` (yang diukur hanya beda potensial, tanpa arus berarti), `kaca` (selaput 0,03–0,1 mm, kaca natrium silikat, ada dua elektrode acuan di dalam satu batang). **Dipecahkan:** `gel` — tidak ada H⁺ yang menembus kaca. Kedua permukaan kaca yang terhidrasi menjadi lapisan gel yang bertukar ion; H⁺ hanya berpindah keluar-masuk di permukaan (H⁺Gl⁻ ⇌ H⁺ + Gl⁻), sehingga muatan permukaan luar dan dalam berbeda; arus kecil di dalam kaca dibawa ion Na⁺. Tanpa air, lapisan gel tidak ada, dan kaca kembali bisu. **Kembali lagi:** `nernst` (beda muatan → 59,16 mV/pH), `alkali` (Na⁺ ikut menduduki tempat yang sama → galat alkali, bukti mekanisme tukar ion), `dunia` (hambatan raksasa itulah sebabnya Beckman butuh penguat tabung vakum tahun 1934), `penutup`.

## Pembagian bagian

- **Bagian 1 — Membaca volt** (kaca yang merasakan asam → sel potensiometri → elektrode acuan Ag/AgCl → kalomel → potensial sambungan → elektrode kaca → lapisan gel: misteri terpecahkan)
- **Bagian 2 — Dari volt ke pH** (Nernst 59,16 mV → suhu → kalibrasi dua penyangga → aktivitas & definisi operasional → galat alkali & asam → sampel encer)
- **Bagian 3 — Volt yang menunjuk titik akhir** (kurva titrasi cuka dengan elektrode → turunan pertama & kedua → elektrode baja tahan karat → elektrode fluorida untuk pasta gigi & air → Beckman, lab, tanah → penutup)

## Daftar adegan

Gaya seri: **"Meja Analis"** (latar grafit + kisi kertas milimeter samar, alat gelas garis tipis bercahaya). Kode warna episode ini: H₃O⁺/H⁺ = merah muda (analit/asam, sama dengan seri), titran NaOH/OH⁻ = biru, Na⁺ = kuning pucat, Cl⁻ = hijau (sama dengan Ep. 6), F⁻ = toska, potensial/milivolt = garis putih bercahaya + jarum meter, nilai benar/titik ekivalen = emas, galat = jingga, kaca = abu-biru transparan, lapisan gel = biru muda berpendar. Semua angka mV/pH di layar diambil dari `hitung.py`. Pembacaan meter berubah dengan menghitung naik (bukan meloncat), warna/muatan bersilang-pudar.

| # | id | Judul | Ide visual (bergerak sesuai kimia) |
|---|---|---|---|
| 1 | `hook` | Kaca yang merasakan asam | Jeruk nipis diperas ke gelas kimia; elektrode kombinasi turun, angka meter menghitung naik-turun lalu tenang di "pH 2,3" (label "contoh"). Kamera menembus batang ke gelembung kaca di ujung; sebelah kiri gelas kimia berisi asam (kaca yang sama, tenang). Ohmmeter menempel di kaca: "≈ 100 MΩ". Tanda tanya berayun di antara dua kaca. |
| 2 | `judul` | Judul | Garis jarum voltmeter berayun dan meninggalkan jejak yang menjadi huruf judul; angka "59,16 mV" berdenyut di bawahnya. |
| 3 | `sel` | Dua elektrode, satu angka | Diagram sel Skoog 19-1: elektrode acuan (kiri) – jembatan garam – larutan – elektrode indikator (kanan); tiga potensial berwarna dijumlahkan di kartu. Panah arus dicoret: "hampir tanpa arus". **Kartu rumus.** |
| 4 | `agcl` | Jangkar bernama perak klorida | Kawat perak berlapis AgCl putih di tabung KCl; ion Cl⁻ hijau menempel/lepas seimbang; "termometer potensial" diam di 0,199 V. Penggeser [Cl⁻] digeser → jarum ikut bergeser (makanya KCl dibuat pekat & tetap). Ikon H₂/api untuk SHE dicoret halus. **Kartu rumus.** |
| 5 | `kalomel` | Kalomel jenuh | Elektrode kalomel bentuk H: raksa, pasta Hg₂Cl₂, kristal KCl di dasar (penanda "jenuh = KCl"); angka 0,244 V. Termometer naik melewati 60 °C: label Ag/AgCl tetap menyala, kalomel meredup. Ikon raksa dengan tanda limbah. |
| 6 | `jembatan` | Pertemuan dua larutan | Sekat berpori HCl 1 M | HCl 0,01 M: panah H⁺ panjang, Cl⁻ pendek; muatan + menumpuk di sisi encer, − di sisi pekat; voltmeter mungil "puluhan mV". Ganti dengan KCl: panah K⁺ dan Cl⁻ sama panjang → "beberapa mV". |
| 7 | `kaca` | Anatomi elektrode kaca | Potongan melintang elektrode kombinasi berputar pelan: gelembung kaca (tebal 0,03–0,1 mm, dibandingkan helai rambut), HCl dalam + kawat Ag/AgCl (acuan 1), cincin luar KCl + Ag/AgCl (acuan 2), frit kecil. Kisi silikat 3D: Si–O, celah berisi Na⁺ kuning dan Ca²⁺ yang terkunci. Label komposisi Corning 015. |
| 8 | `gel` | Misteri terpecahkan | Zoom ke kedua permukaan kaca: air masuk, Na⁺ keluar, H⁺ mengisi situs Gl⁻ → lapisan gel biru muda di dua sisi. Di sisi luar (pH 2) H⁺ banyak menempel; di sisi dalam lebih sedikit; tanda muatan − di permukaan berbeda jumlahnya; profil potensial (Skoog 19-10) tergambar. Tidak ada H⁺ yang melintasi inti kaca; satu Na⁺ bergeser sedikit di tengah. Lalu elektrode dikeringkan: gel memudar, jarum meter melambat dan diam; direndam lagi: gel kembali. **Kartu rumus.** |
| 9 | `nernst` | Lima puluh sembilan milivolt | Sumbu pH 1–13 di bawah, garis E menurun miring; setiap langkah pH, tangga "59,16 mV" menyala. Kartu menurunkan RT ln10/F dengan angka CODATA. Lalu tangga Ca²⁺ setengah tinggi (29,58 mV). **Kartu rumus** (2 momen). |
| 10 | `suhu` | Kemiringan yang berubah | Termometer 0 → 37 → 60 °C; garis kalibrasi berputar di sekitar pH 7 (titik isopotensial), kemiringan 54,20 → 61,54 → 66,10 mV/pH. Ikon probe ATC. Lalu botol boraks: pH bergeser 9,40 (5 °C) → 9,09 (40 °C) sendiri — label "kimia larutan, bukan elektrode". |
| 11 | `kalibrasi` | Dua penyangga, satu garis | Elektrode dibilas, dicelup ke ftalat (171,5 mV) lalu fosfat (4,9 mV); dua titik menyala, garis ditarik, kemiringan 58,27 mV/pH = 98,5 %. Sampel tanah (105,0 mV) jatuh ke garis → pH 5,15. **Kartu rumus.** |
| 12 | `aktivitas` | Yang diukur adalah aktivitas | Ion H⁺ di larutan pekat garam dikelilingi awan ion lawan (redup) vs di larutan encer (terang): "aktivitas". Kartu sel Harned & logo IUPAC 2002 (teks saja). Lalu jarum bergeser 1 mV → batang kadar melebar 4 %. **Kartu rumus.** |
| 13 | `alkali` | Ketika natrium ikut bicara | Kembali ke lapisan gel: di pH 12 dengan banyak Na⁺, ion Na⁺ kuning mulai menduduki situs Gl⁻; jarum meter tertinggal: angka "12,0" turun menjadi "11,3" (Corning 015, Na⁺ 1 M) dan "11,7" (0,1 M). Kurva galat Skoog 19-11: cabang negatif di kanan, cabang positif kecil di pH < 0,5 ("situs jenuh H⁺"). **Kartu rumus.** |
| 14 | `sungai` | Air sungai yang sulit | Sungai jernih; sampel dengan sedikit ion; frit tersumbat (butir halus menempel), jarum meter melayang tak tenang; pita galat "sampai 1–2 satuan pH". Lalu jendela sambungan difusi bebas (ikon). |
| 15 | `titrasi` | Mendengar kurva cuka | Buret NaOH menetes ke 50,00 mL cuka 0,1 M; elektrode di labu, meter mode mV: 243,7 → 132,7 (25 mL, pH 4,76 = pKa) → 32,7 → −102,2 (50 mL) → −236,4 mV. Kurva Ep. 3 (bayangan samar) tertimpa titik-titik data yang tepat sama. Penambahan makin kecil dekat ekivalen (penanda volume menyempit). |
| 16 | `turunan` | Puncak dan nol | Di bawah kurva: batang ΔpH/ΔV tumbuh dari kiri; dua batang tertinggi (12,7 /mL) mengapit 50,00 mL. Panel ketiga: turunan kedua +97 → 0 → −97, garis memotong nol tepat di 50,00 (penanda emas). **Kartu rumus.** |
| 17 | `baja` | Elektrode dari serpihan baja | Serpihan lembaran baja tahan karat AISI 304 (4 cm × 0,5 cm) dari bengkel; dicelup bersama elektrode kaca; dua kurva titrasi HCl hampir menumpuk, lompatan di 9,25 mL. Garis kalibrasi baja: −59,18 ± 0,37 mV/pH vs 59,16. Tabel kecil: bromtimol biru 9,30 mL, baja 9,25, kaca 9,25; standar 9,20. |
| 18 | `fluorida` | Fluorida di pasta gigi | Pasta gigi (tanpa merek) → labu takar → TISAB; elektrode berujung keping kristal LaF₃ (toska). Kurva fraksi F⁻ vs pH (HF di bawah pH 3, F⁻ penuh di pH 5–5,5); tiga standar membentuk garis 58,9 mV/dekade; sampel jatuh di 1448 ppm. Lalu gelas air sumur: 1,54 mg/L vs garis WHO 1,5 mg/L. **Kartu rumus.** |
| 19 | `dunia` | Dari jeruk California ke ladang | 1934: kebun jeruk, botol jus lemon, kotak meter berlampu tabung vakum (siluet, tanpa logo). Lalu montase: pH meter di lab praktikum, titrator otomatis, sampel tanah diaduk dengan air dan KCl (dua angka berbeda), kapal riset (titrasi alkalinitas air laut). |
| 20 | `penutup` | Penutup & teaser Ep. 10 | Kembali ke gelembung kaca di jeruk nipis: lapisan gel berpendar, angka 59,16 mV terpatri. Gelas kimia beralih menjadi kuvet berwarna; seberkas cahaya menembusnya dan meredup. Teks: "Berikutnya — Cahaya yang Hilang". |

## Narasi

Konvensi: kalimat pendek, gaya tutur. **[KARTU]** = rumus yang tampil di kartu `Formula` (≥ 56 px, satu kartu per momen). Angka ditulis seperti diucapkan; teks TTS dibuat terpisah nanti. Semua angka cocok dengan keluaran `hitung.py`.

### 1 · `hook` — Kaca yang merasakan asam

Peras sebuah jeruk nipis ke dalam gelas kimia. Celupkan ujung pH meter. Angkanya bergerak sebentar, lalu tenang: sekitar dua koma tiga.
Sekarang perhatikan ujung alat itu. Gelembung kecil di sana terbuat dari kaca.
Kaca yang sama dengan gelas kimia di sebelahnya, tempat kita menyimpan asam justru karena kaca tidak bereaksi dengan asam.
Kaca juga isolator. Hambatan selaput itu ratusan juta ohm.
Lalu bagaimana sepotong kaca bisa merasakan ion hidrogen, dan melaporkannya dalam milivolt?
Ada satu petunjuk aneh lagi. Elektrode ini harus disimpan basah. Biarkan ia kering, dan ia menjadi bisu.

### 2 · `judul` — Judul

Volt yang Bercerita. Seni Mengukur, episode sembilan.

### 3 · `sel` — Dua elektrode, satu angka

Potensiometri adalah seni mengukur beda potensial sebuah sel, hampir tanpa mengalirkan arus.
Kita tidak pernah bisa mengukur potensial satu elektrode sendirian. Yang bisa diukur hanya selisih antara dua elektrode.
Maka setiap pengukuran butuh dua: elektrode indikator, yang potensialnya berubah mengikuti analit, dan elektrode acuan, yang potensialnya tetap.

**[KARTU]** E_sel = E_ind − E_acuan + E_j

Suku ketiga, E j, adalah potensial sambungan, tempat dua larutan bertemu. Kecil, tapi nanti kita lihat ia keras kepala.

### 4 · `agcl` — Jangkar bernama perak klorida

Elektrode acuan ideal adalah jangkar: potensialnya diketahui, tetap, dan tidak peduli apa isi sampel.
Elektrode hidrogen standar memang acuan resmi, tapi merepotkan dan berbahaya untuk dipakai sehari-hari. Ia butuh gas hidrogen.
Di laboratorium, jangkarnya adalah kawat perak berlapis perak klorida, terendam larutan kalium klorida.

**[KARTU]** AgCl(s) + e⁻ ⇌ Ag(s) + Cl⁻   E = E° − 0,05916 log a(Cl⁻)

Potensialnya hanya bergantung pada ion klorida di dalam tabung. Buat klorida itu pekat dan tetap, maka potensialnya terkunci. Dengan kalium klorida jenuh pada dua puluh lima derajat, nol koma satu sembilan sembilan volt terhadap elektrode hidrogen.

### 5 · `kalomel` — Kalomel jenuh

Jangkar yang lebih tua memakai raksa dan raksa satu klorida, alias kalomel. Namanya elektrode kalomel jenuh, nol koma dua empat empat volt.
Kata "jenuh" sering disalahpahami. Yang jenuh adalah kalium kloridanya, bukan kalomelnya.
Kini elektrode kalomel makin jarang, karena raksa beracun. Perak klorida juga tahan dipakai di atas enam puluh derajat, sedangkan kalomel tidak.

### 6 · `jembatan` — Pertemuan dua larutan

Lalu potensial sambungan. Bayangkan asam klorida pekat dan encer dipisahkan sekat berpori.
Ion hidrogen dan ion klorida sama-sama berdifusi ke sisi encer. Tapi ion hidrogen jauh lebih gesit.
Sisi encer kebagian lebih banyak muatan positif, sisi pekat tertinggal muatan negatif. Muncul beda potensial, bisa beberapa puluh milivolt.
Obatnya: jembatan kalium klorida pekat. Ion kalium dan ion klorida bergerak hampir sama cepat, sehingga potensial sambungan tinggal beberapa milivolt. Kecil, tapi tidak pernah nol.

### 7 · `kaca` — Anatomi elektrode kaca

Sekarang bintang kita. Elektrode pH yang biasa dipakai sebenarnya dua elektrode dalam satu batang.
Di tengah, gelembung kaca tipis berisi asam klorida encer dan kawat perak klorida. Di sekelilingnya, elektrode acuan kedua, juga perak klorida, yang menyentuh sampel lewat frit kecil.
Selaput kacanya hanya tiga puluh sampai seratus mikrometer tebalnya. Sekitar setebal rambut.
Kaca klasiknya, Corning nol lima belas, berisi sekitar tujuh puluh dua persen silika, dua puluh dua persen natrium oksida, dan enam persen kalsium oksida.
Di dalamnya, atom silikon dan oksigen membentuk jaringan tiga dimensi. Di celah-celahnya duduk ion natrium yang bisa bergeser sedikit, dan ion kalsium yang terkunci. Ingat ion natrium itu.

### 8 · `gel` — Misteri terpecahkan

Kuncinya ada di permukaan. Kaca pH bersifat menyerap air. Saat direndam, ion natrium di permukaan bertukar dengan ion hidrogen dari air.

**[KARTU]** H⁺ + Na⁺Gl⁻(kaca) ⇌ Na⁺ + H⁺Gl⁻(kaca)

Kedua permukaan kaca, luar dan dalam, berubah menjadi lapisan gel tipis yang terhidrasi. Di lapisan itu, ion hidrogen bisa lepas ke larutan dan menempel kembali.
Di larutan yang asam, banyak situs tetap terisi ion hidrogen. Di larutan yang kurang asam, lebih banyak yang lepas, dan permukaan menjadi lebih negatif.
Larutan di dalam gelembung tetap. Larutan di luar berubah. Jadi muatan kedua permukaan berbeda, dan beda muatan itulah potensial batas.

**[KARTU]** E_b = 0,05916 log (a₁ / a₂)

Perhatikan: tidak ada satu pun ion hidrogen yang menembus kaca. Ia hanya keluar-masuk di permukaan. Di bagian dalam kaca yang kering, arus mungil itu dibawa ion natrium.
Dan kenapa elektrode harus basah? Tanpa air, lapisan gel tidak terbentuk, dan tidak ada tempat bagi ion hidrogen untuk bertukar. Untungnya, menurut Skoog, efek ini bisa balik: rendam lagi, dan elektrode bicara lagi.

### 9 · `nernst` — Lima puluh sembilan milivolt

Seberapa besar suaranya? Persamaan Nernst menjawab: setiap kali aktivitas ion hidrogen berubah sepuluh kali, artinya satu satuan pH, potensial berubah sebesar R T ln sepuluh per F.

**[KARTU]** S = (R·T·ln 10) / F = (8,3145 × 298,15 × 2,3026) / 96 485 = 0,05916 V

Lima puluh sembilan koma satu enam milivolt per satuan pH, pada dua puluh lima derajat. Tetapan gas dan tetapan Faraday kini bernilai eksak dalam sistem SI, jadi angka ini pun pasti.

**[KARTU]** E = L − 0,05916 · pH   (ion bermuatan z: 0,05916/z per dekade)

Untuk ion bermuatan dua, seperti kalsium, kemiringannya tinggal separuh, dua puluh sembilan koma lima delapan milivolt.

### 10 · `suhu` — Kemiringan yang berubah

Tapi ada T di dalam rumus itu. Kemiringan Nernst bertambah sekitar nol koma dua milivolt setiap derajat.
Pada nol derajat, lima puluh empat koma dua. Pada suhu tubuh, enam puluh satu koma lima. Pada enam puluh derajat, enam puluh enam koma satu.
Itu sebabnya pH meter yang baik punya sensor suhu. Tanpa koreksi, sampel ber-pH sepuluh yang diukur pada tiga puluh lima derajat dengan kalibrasi dua puluh lima derajat akan terbaca sepuluh koma satu.
Hati-hati, sensor suhu hanya mengoreksi elektrodenya. pH larutannya sendiri juga bisa berubah dengan suhu. Penyangga boraks standar NIST, misalnya, ber-pH sembilan koma empat nol pada lima derajat dan sembilan koma nol sembilan pada empat puluh derajat.

### 11 · `kalibrasi` — Dua penyangga, satu garis

Elektrode nyata tidak sempurna. Kemiringannya sedikit kurang dari teori, dan ada potensial asimetri kecil yang bergeser pelan dari hari ke hari. Maka pH meter harus dikalibrasi, sebaiknya setiap hari.
Celupkan ke penyangga ftalat standar, pH empat koma nol nol lima: meter membaca seratus tujuh puluh satu koma lima milivolt. Bilas, celupkan ke penyangga fosfat, pH enam koma delapan enam empat: empat koma sembilan milivolt.
Dua titik, satu garis. Kemiringannya lima puluh delapan koma dua tujuh milivolt per pH, sembilan puluh delapan koma lima persen dari teori. Elektrode ini sehat.

**[KARTU]** pH_U = pH_S − (E_U − E_S) / S

Sekarang sampel ekstrak tanah: seratus lima milivolt. Hasilnya pH lima koma satu lima.
Rumus inilah definisi operasional pH yang diakui di seluruh dunia. Kata buku Skoog, pH adalah apa yang kita ukur dengan elektrode kaca dan pH meter.

### 12 · `aktivitas` — Yang diukur adalah aktivitas

Satu hal yang sering terlupa: elektrode kaca tidak menghitung ion hidrogen. Ia merasakan aktivitasnya, konsentrasi efektif setelah ion itu dikerubungi ion-ion lain.
Penyangga standar NIST diberi nilai pH oleh sel tanpa sambungan, yang disebut sel Harned. Rekomendasi IUPAC tahun dua ribu dua menyebutnya metode primer, dan menegaskan bahwa pH adalah besaran konvensional.
Ingat penyangga fosfat di episode empat yang terbaca enam koma enam tiga, bukan tujuh? Itulah aktivitas yang sedang bicara.
Dan ada harga yang tak bisa dihindari. Potensial sambungan sampel dan standar tidak pernah persis sama.

**[KARTU]** galat 1 mV → galat aktivitas ≈ 4 % (ion bermuatan 1) · ≈ 8 % (bermuatan 2)

Satu milivolt saja sudah berarti empat persen. Bagi pH, itu sekitar nol koma nol dua satuan. Karena itu pH jarang bisa dipercaya lebih teliti dari seperseratus.

### 13 · `alkali` — Ketika natrium ikut bicara

Ingat ion natrium di dalam kaca? Ia kembali.
Di larutan sangat basa, ion hidrogen tinggal sedikit, sementara ion natrium bisa banyak. Ion natrium mulai menduduki situs yang sama di lapisan gel, dan elektrode ikut menanggapinya.

**[KARTU]** E_b = L′ + 0,05916 log (a_H + k_H,Na · a_Na)

Akibatnya pH terbaca terlalu rendah. Ini galat alkali. Kaca Corning nol lima belas di larutan pH dua belas dengan natrium satu molar hanya membaca sebelas koma tiga. Dengan natrium nol koma satu molar, sebelas koma tujuh.
Galat ini sekaligus bukti mekanisme tadi: elektrode kaca bekerja lewat pertukaran ion di permukaan, bukan dengan menyaring ion hidrogen.
Di ujung lain, di bawah pH sekitar nol koma lima, pembacaan malah terlalu tinggi. Ini galat asam, salah satunya karena semua situs sudah penuh ion hidrogen.
Kaca modern yang memakai litium dan barium jauh lebih tahan, dengan galat alkali yang kecil sampai sekitar pH dua belas.

### 14 · `sungai` — Air sungai yang sulit

Ada sampel yang tampak paling mudah, tetapi justru paling sulit: air danau dan air sungai yang jernih.
Ion di dalamnya sangat sedikit. Potensial sambungan menjadi tidak stabil, terutama kalau frit elektrode mulai tersumbat.
Skoog mencatat galat bisa mencapai satu sampai dua satuan pH. Angka di layar tampak meyakinkan, tetapi melayang.
Solusinya: elektrode dengan sambungan khusus, dan kesabaran menunggu pembacaan stabil.

### 15 · `titrasi` — Mendengar kurva cuka

Sekarang kita pakai elektrode untuk tujuan lain: menunjuk titik akhir.
Kembali ke titrasi di episode tiga. Lima puluh mililiter asam asetat nol koma satu molar, dititrasi natrium hidroksida nol koma satu molar. Kali ini tanpa fenolftalein.
Meter membaca dua ratus empat puluh tiga milivolt di awal. Pada dua puluh lima mililiter, seratus tiga puluh dua koma tujuh milivolt, setara pH empat koma tujuh enam, tepat sama dengan pKa asam asetat. Inilah cara memperkirakan tetapan asam dari kurva titrasi.
Mendekati lima puluh mililiter, penambahan diperkecil. Pada empat puluh sembilan koma sembilan, minus dua puluh tujuh. Pada lima puluh koma nol, minus seratus dua. Satu tetes lagi, minus seratus tujuh puluh tujuh.
Kurva ini sama persis dengan kurva di episode tiga. Bedanya, kini kita tidak menebak warna.
Kelebihan lain: titrasi tidak bergantung pada nilai mutlak potensial. Potensial sambungan hampir tetap selama titrasi, dan hasilnya adalah konsentrasi, bukan aktivitas.

### 16 · `turunan` — Puncak dan nol

Di mana tepatnya titik akhir? Di tempat kurva paling curam.
Hitung perubahan pH per mililiter antara dua titik data berurutan. Itu turunan pertama. Jauh dari ekivalen nilainya kecil. Di sekitar lima puluh mililiter melonjak menjadi dua belas koma tujuh per mililiter, dua batang tertinggi yang mengapit tepat lima puluh koma nol nol.

**[KARTU]** ΔpH/ΔV maks → titik belok  ·  Δ²pH/ΔV² = 0 → titik akhir

Lebih tajam lagi, turunan kedua. Ia positif sebelum titik belok, negatif sesudahnya. Dari plus sembilan puluh tujuh ke minus sembilan puluh tujuh, garisnya memotong nol tepat di lima puluh koma nol nol mililiter.
Titrator otomatis memakai tanda nol ini. Syaratnya, kurva simetris di sekitar ekivalen, seperti reaksi asam basa satu banding satu ini.

### 17 · `baja` — Elektrode dari serpihan baja

Haruskah selalu kaca? Vilasó-Cadre dan rekan dari Meksiko dan Kuba mengambil serpihan baja tahan karat sisa bengkel, panjangnya empat sentimeter, tanpa perlakuan oksidasi.
Dikalibrasi dengan penyangga, kemiringannya lima puluh sembilan koma satu delapan milivolt per pH, nyaris sama dengan teori.
Mereka menitrasi asam klorida dengan natrium hidroksida memakai baja dan memakai elektrode kaca. Di atas pH sekitar sembilan setengah kurva baja menyimpang, tetapi lompatannya bertepatan. Titik akhir keduanya sembilan koma dua lima mililiter. Dengan bromtimol biru, sembilan koma tiga nol.
Konsentrasi yang didapat nol koma nol delapan empat lima molar, hanya selisih empat per sepuluh ribu dari nilai standar. Untuk titrasi, elektrode yang murah pun cukup, asalkan dikalibrasi.

### 18 · `fluorida` — Fluorida di pasta gigi

Prinsip yang sama bisa dibuat untuk ion lain. Elektrode ion selektif fluorida memakai keping kristal tunggal lantanum fluorida, yang diberi sedikit europium fluorida agar menghantar.
Ia menanggapi ion fluorida dari satu molar sampai sepersejuta molar. Pengganggu seriusnya hanya ion hidroksida.
Di larutan asam, fluorida berubah menjadi asam fluorida, yang tidak terbaca. Pada pH tiga, hanya empat puluh persen yang masih ion fluorida. Pada pH lima, sembilan puluh sembilan persen.
Maka sampel dan standar dicampur larutan penyangga kekuatan ion, disingkat TISAB: natrium klorida, penyangga asetat, dan sitrat. Kekuatan ion dan pH semua larutan menjadi sama.

**[KARTU]** E = K − S · log c(F⁻)   ·   S ≈ 59 mV per dekade

Contohnya pasta gigi berlabel seribu empat ratus lima puluh ppm. Satu gram dilarutkan, diencerkan, dan diukur di antara tiga standar. Hasilnya seribu empat ratus empat puluh delapan ppm. Geser satu milivolt, dan hasilnya meleset sekitar empat persen.
Untuk air minum, WHO memberi batas satu koma lima miligram fluorida per liter. Di atas itu, risiko fluorosis gigi meningkat. Air sumur yang terbaca satu koma lima empat sudah sedikit melewatinya.

### 19 · `dunia` — Dari jeruk California ke ladang

Pengukuran pH dengan kaca pertama kali dilaporkan tahun seribu sembilan ratus enam. Tapi selaput kaca berhambatan ratusan megaohm menghasilkan sinyal yang terlalu lemah untuk alat ukur biasa.
Tahun seribu sembilan ratus tiga puluh empat, seorang teman kuliah Arnold Beckman bertugas mengukur keasaman jus lemon untuk asosiasi petani jeruk California. Ia meminta alat yang lebih tangguh.
Beckman memakai penemuan yang saat itu masih baru, penguat tabung vakum, untuk membaca tegangan kaca itu. Lahirlah pH meter elektronik pertama yang sukses dijual, dan sebuah perusahaan instrumen.
Kini pH meter ada di setiap laboratorium praktikum. Petani dan penyuluh mengukur pH tanah dalam suspensi air dan larutan kalium klorida. Pabrik, rumah sakit, dan kapal riset di tengah samudra memakai prinsip yang sama.
Kata buku Skoog, potensiometri mungkin teknik instrumen yang paling sering dipakai di seluruh ilmu pengetahuan.

### 20 · `penutup` — Penutup & teaser Ep. 10

Kembali ke jeruk nipis. Kaca itu tidak bereaksi dengan asam, dan tidak ada ion hidrogen yang menembusnya.
Yang terjadi hanya di dua permukaannya yang basah: ion hidrogen datang dan pergi, dan selisih muatan keduanya menjadi lima puluh sembilan milivolt untuk setiap satuan pH.
Volt itu bercerita, asalkan kita mengkalibrasi, menjaga suhu, dan tahu kapan natrium ikut bicara.
Tapi ada cara lain untuk bertanya pada larutan: bukan dengan listrik, melainkan dengan cahaya. Makin pekat larutan, makin banyak cahaya yang lenyap di dalamnya.
Itu cerita episode berikutnya: Cahaya yang Hilang.

---

## Hitungan (dari `hitung.py`)

Tetapan: R = 8,314 462 618 J/(mol·K), F = 96 485,332 12 C/mol (eksak, CODATA 2018); Ka CH₃COOH 1,75 × 10⁻⁵, Ka HF 6,8 × 10⁻⁴ (Skoog Lampiran 3); Kw 1,00 × 10⁻¹⁴ (konvensi Ep. 3).

**1. Kemiringan Nernst** S = RT ln10/F (mV per satuan pH; ion 2+ separuhnya); koefisien suhu 0,1984 mV/K

| T (°C) | 0 | 5 | 15 | 20 | 25 | 30 | 35 | 37 | 40 | 50 | 60 | 100 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| S (mV/pH) | 54,20 | 55,19 | 57,18 | 58,17 | **59,16** | 60,15 | 61,14 | 61,54 | 62,14 | 64,12 | 66,10 | 74,04 |

25,00 °C tepat: 59,159 mV; ion 2+: 29,58 mV.

**2. Elektrode acuan (25 °C, V vs SHE)**: SCE 0,244 (0,2444); Ag/AgCl KCl jenuh 0,199; Ag/AgCl 3,5 M 0,205; E° AgCl/Ag 0,222; E° Hg₂Cl₂/Hg 0,268. Ketergantungan suhu Skoog Tabel 19-1 (15 → 35 °C: SCE 0,2511 → 0,2376; Ag/AgCl 3,5 M 0,212 → 0,197).

**3. Penyangga NIST pH(S)**

| T (°C) | 5 | 15 | 25 | 35 | 37 | 40 |
|---|---|---|---|---|---|---|
| Ftalat 0,05 mol/kg (SRM 185i) | 4,003 | 3,999 | 4,005 | 4,021 | 4,025 | 4,031 |
| Fosfat 1:1 0,025 mol/kg (SRM 186g) | 6,951 | 6,899 | 6,864 | 6,843 | 6,841 | 6,837 |
| Boraks 0,01 mol/kg (SRM 187f) | 9,401 | 9,288 | 9,195 | 9,120 | 9,107 | 9,088 |

**4. Kalibrasi dua titik (elektrode rekaan: efisiensi 98,5 %, −3,0 mV di pH 7)**

| Langkah | Nilai |
|---|---|
| Ftalat pH 4,005 | E = 171,5 mV |
| Fosfat pH 6,864 | E = 4,9 mV |
| Kemiringan | (171,5 − 4,9)/(6,864 − 4,005) = 58,27 mV/pH = 98,5 % |
| Sampel tanah E = 105,0 mV | pH = 6,864 − (105,0 − 4,9)/58,27 = **5,146** (satu titik + 59,16 teoretis: 5,172) |
| Sampel E = −120,0 mV | pH 9,007 (satu titik: 8,975) |
| Tanpa ATC, kalibrasi 25 °C, sampel 35 °C | pH 4 → 3,90; pH 7 → 7,00; pH 10 → 10,10 |

**5. Galat 1 mV**: ion 1+ → 4,0 % (diferensial Skoog 3,9 %); ion 2+ → 8,1 % (7,8 %); 1 mV = 0,017 pH.

**6. Galat alkali** (Corning 015, Skoog): pH 12, Na⁺ 1 M → 11,3; 0,1 M → 11,7. Model k(H,Na) ≈ 4 × 10⁻¹² dari titik 1 M meramalkan 11,85 untuk 0,1 M → model satu-koefisien hanya kualitatif; narasi memakai angka Skoog.

**7. Titrasi potensiometrik** 50,00 mL CH₃COOH 0,1000 M + NaOH 0,1000 M (neraca muatan eksak = `ep03-satu-tetes/titrasi.py`; E = −59,16 (pH − 7) mV, elektrode ideal 25 °C)

| V (mL) | 0 | 10 | 25 | 40 | 49,00 | 49,50 | 49,90 | 50,00 | 50,10 | 50,50 | 51,00 | 60,00 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| pH | 2,88 | 4,16 | 4,76 | 5,36 | 6,45 | 6,75 | 7,45 | 8,73 | 10,00 | 10,70 | 11,00 | 11,96 |
| E (mV) | 243,7 | 168,2 | 132,7 | 97,1 | 32,7 | 14,6 | −26,9 | −102,2 | −177,5 | −218,7 | −236,4 | −293,3 |

Turunan pertama (titik tengah): 49,85 → 3,0; **49,95 → 12,7; 50,05 → 12,7**; 50,15 → 3,0 /mL (ΔE/ΔV ≈ −754 mV/mL). Turunan kedua: 49,90 → +97; 50,00 → 0; 50,10 → −97 /mL² → titik nol 50,000 mL. Titik belok kurva kontinu 50,000 mL (dpH/dV maks ≈ 41 /mL). Setengah ekivalen pH 4,757 = pKa 4,757.

**8. Fluorida** (pKa HF 3,17): fraksi F⁻ pH 3 → 40,5 %; 4 → 87,2 %; 5 → 98,6 %; 5,5 → 99,5 %. Kalibrasi rekaan E = 120,0 − 58,9 log c (mV, c dalam mg/L): 0,5 → 137,7; 1 → 120,0; 2 → 102,3; 5 → 78,8; 10 → 61,1 mV. Pasta gigi 1,000 g → 100,0 mL → 10,00 mL jadi 50,00 mL → 2,90 mg/L → E 92,8 mV → **1448 ppm** (label 1450); ±1 mV → 1392 / 1506 ppm (−3,8 % / +4,0 %). Air sumur E 109,0 mV → 1,54 mg/L (WHO 1,5 mg/L = 7,9 × 10⁻⁵ M; batas respons 10⁻⁶ M ≈ 0,019 mg/L).

**Ringkasan:** 20 adegan; 11 kartu rumus (E_sel, Ag/AgCl, tukar ion, E_b, S Nernst, E–pH & z, pH operasional, galat 1 mV, selektivitas, turunan, E fluorida). Panjang narasi ≈ 1985 kata (tanpa judul adegan & kartu) → dengan jeda ≈ 13 menit.

## Catatan untuk tahap produksi

- **pH jeruk nipis 2,3** di `hook` hanya contoh (label "contoh" di layar); nilai jus jeruk nipis/lemon ≈ 2–2,6 menurut pengetahuan umum, tidak dicek (⚠). Jangan menyebut merek pH meter.
- **"Setebal rambut"**: Skoog memberi 0,03–0,1 mm (narasi: "tiga puluh sampai seratus mikrometer"); rambut manusia ≈ 0,05–0,1 mm (pengetahuan umum ⚠). Narasi "sekitar setebal rambut" — kualitatif.
- **Tebal lapisan gel**: tidak ada angka di Skoog ed. 10; literatur lain menyebut puluhan–ratusan nanometer (⚠, tidak diucapkan). Gambar lapisan sebagai "tipis sekali dibanding selaput", tanpa skala.
- **Mekanisme** mengikuti Skoog §19D-3 (tukar ion permukaan, potensial batas, Na⁺ penghantar di dalam kaca). Jangan menggambar H⁺ yang melintasi kaca; jangan menyebut kaca sebagai "saringan H⁺".
- **Hambatan "ratusan juta ohm"**: Skoog 50–500 MΩ; ohmmeter di `hook` menulis "≈ 100 MΩ" (contoh dalam rentang).
- **Galat alkali**: pakai angka Skoog (11,3 dan 11,7); model satu koefisien di `hitung.py` hanya untuk animasi kualitatif. "Kaca litium/barium tahan sampai ≈ pH 12" = parafrase Skoog §19D-3/§19D-4 (kurva E & F tahan sampai pH 12).
- **Kalibrasi**: angka mV elektrode rekaan (171,5 / 4,9 / 105,0) dan "elektrode sehat 98,5 %" adalah contoh; batas penerimaan kemiringan (sering 95–105 %) berasal dari panduan pabrikan, ⚠ tidak diucapkan. Penyangga yang dipakai di layar: nilai NIST (4,005 / 6,864); penyangga dagang biasanya 4,01 / 6,86 / 9,18 — boleh ditampilkan kecil.
- **Boraks**: sertifikat SRM 187f memberi 9,195 di 25 °C (Buck dkk. 2002 mencantumkan 9,180 untuk 0,01 mol/kg boraks sebagai standar primer — beda lot/pengukuran ⚠). Narasi hanya memakai 9,40 (5 °C) dan 9,09 (40 °C) dari sertifikat.
- **pH ≈ teliti 0,01**: kalimat "jarang bisa dipercaya lebih teliti dari seperseratus" adalah turunan dari galat 1 mV = 0,017 pH; boleh dilunakkan menjadi "sekitar seperseratus".
- **Ep. 4 6,63**: rujukan silang ke Ep. 4 (`racik`), di mana pH larutan fosfat 0,100 M yang dihitung dengan Henderson–Hasselbalch 7,00 ternyata ≈ 6,63 karena kekuatan ion.
- **Titrasi**: data identik dengan Ep. 3 (pH 2,88 / 4,76 / 8,73). Narasi membulatkan mV ("dua ratus empat puluh tiga", "minus dua puluh tujuh", "minus seratus dua", "minus seratus tujuh puluh tujuh"). Elektrode ideal 0 mV di pH 7 adalah konvensi tampilan; tulis "mode mV, elektrode ideal" kecil di layar.
- **Turunan**: dengan langkah 0,10 mL simetris, dua batang turunan pertama sama tinggi (12,7) sehingga puncak = 50,00 mL; tampilkan keduanya, jangan satu batang di 49,95.
- **Vilasó-Cadre**: kemiringan −59,18 ± 0,37 mV/pH, R² 0,9996; HCl 0,0841 M (standar), 0,0914 M NaOH, 10 mL HCl; titik akhir 9,25 (baja & kaca), 9,30 (bromtimol biru), V ekivalen 9,20 mL; 0,0845 vs 0,0850 M. Penulis dari Universidad Autónoma de San Luis Potosí (Meksiko) dan Universidad de Oriente (Kuba).
- **Fluorida**: Skoog §19D-6 (LaF₃ + EuF₂, 10⁰–10⁻⁶ M, OH⁻) dan §19F-2 (pengencer NaCl + asetat + sitrat; akurasi ≈ 5 % relatif). pH TISAB 5–5,5 hanya dari hitungan fraksi (⚠ resep TISAB tidak dibuka). Pasta gigi dengan **natrium monofluorofosfat** perlu hidrolisis asam sebelum diukur (⚠ tidak diucapkan; contoh di naskah sengaja "NaF"). Batas pasta gigi Indonesia 1500 ppm hanya dari sumber sekunder → **tidak diucapkan**; contoh "label 1450 ppm" rekaan.
- **WHO 1,5 mg/L**: lembar fakta kimia WHO (dicek lewat hasil pencarian). Permenkes RI juga memakai 1,5 mg/L menurut sumber sekunder (⚠ tidak diucapkan).
- **Beckman**: Science History Institute: 1934, teman sekelas dari University of Illinois, jus lemon, "California Fruit Growers' Association" (nama resmi organisasinya *California Fruit Growers Exchange*/Sunkist ⚠ → narasi "asosiasi petani jeruk California"), tabung vakum, acidimeter, paten 1936, Model G 1935–1950, Beckman 1900–2004. Nama teman (sering disebut Glen Joseph) ⚠ tidak diucapkan. Visual tanpa logo perusahaan.
- **1906**: Skoog "first reported in 1906" (Cremer, ⚠ nama tidak diucapkan); Haber & Klemensiewicz 1909 tidak disebut. Skala pH Sørensen 1909 (SHI) bisa jadi teks kecil.
- **Tanah**: pH H₂O vs pH KCl (pengukuran tanah umum; perbandingan tanah:larutan 1:2,5 dan alasan pH KCl lebih rendah ⚠ tidak diucapkan angkanya).
- **Notasi:** "≈" untuk perkiraan; "±" hanya pada 59,18 ± 0,37 (ketidakpastian) bila ditampilkan. Koma desimal di semua kartu.
- Teks TTS: "E_sel" → "e sel"; "E_j" → "e je"; "AgCl" → "perak klorida"; "Hg₂Cl₂" → "kalomel"; "Gl⁻" → "situs kaca"; "a(Cl⁻)" → "aktivitas klorida"; "pH" → "pe-ha"; "mV" → "milivolt"; "MΩ" → "megaohm"; "LaF₃" → "lantanum fluorida"; "TISAB" → "ti-sab"; "ppm" → "pe-pe-em"; "WHO" → "we-ha-o"; "NIST" → "nist"; "IUPAC" → "yu-pak"; "Vilasó-Cadre" → "bi-la-so ka-dre"; "Beckman" → "bek-men"; "Corning" → "korning"; "R T ln sepuluh per F" → "er te el-en sepuluh per ef".
