# Naskah riset — Seni Mengukur (Kimia Analitik) Ep. 3 "Satu Tetes yang Menentukan"

Draf untuk video berikutnya (belum dibangun). S1 Kimia UNESA, ±12–13 menit, 20 adegan.
Sumber materi: `materi/Analytical Chemistry.pdf` (Skoog, West, Holler & Crouch ed. 10, bab 7 "Aqueous Solutions and Chemical Equilibria", bab 11 "Titrations in Analytical Chemistry", bab 12 "Principles of Neutralization Titrations", Lampiran 3) + artikel indikator alami di `materi/` (Hanifa 2024; Leba dkk. 2023; Leba 2024; Agustina dkk. 2022) + artikel penunjang (Darwish dkk. 2026; Vilasó-Cadre dkk. 2023; Kuna 2023; Hakim dkk. 2023). Angka dicek di `AUDIT.md` (folder ini); semua pH kurva dihitung ulang dengan `titrasi.py` (neraca muatan eksak, Kw = 1,00 × 10⁻¹⁴, Ka HOAc = 1,75 × 10⁻⁵).

Catatan cakupan: penyangga & Henderson–Hasselbalch hanya diperkenalkan di daerah setengah ekivalen (dibahas tuntas di Ep. 4 "Si Keras Kepala"); titrasi potensiometrik hanya teaser (Ep. 9 "Volt yang Bercerita"). Fokus: bentuk kurva, lonjakan pH, pemilihan indikator, titik akhir vs titik ekivalen, indikator alami.

## Pilihan judul

1. **"Satu Tetes yang Menentukan"** — Kurva Titrasi & Pemilihan Indikator ← *dipilih*
2. "Lonjakan di Ujung Buret"
3. "Bunga Telang Tahu Kapan Berhenti"

Alasan memilih (1): sudah tercantum di rencana seri, langsung menunjuk benda konkret (satu tetes 0,05 mL) dan angka yang mengejutkan (pH 4,30 → 9,70); judul (3) dipakai sebagai kalimat tanya di pembuka dan dijawab di adegan `kunyit`.

## Benang merah

**Misteri:** Satu tetes NaOH (≈ 0,05 mL) membawa 50,00 mL HCl 0,1000 M dari pH 4,30 ke pH 9,70. Untuk titrasi HCl, hampir semua indikator berhasil; untuk titrasi cuka, metil jingga gagal total sedangkan fenolftalein — dan ekstrak kunyit atau ubi ungu — berhasil. Kenapa, dan bagaimana sekuntum bunga "tahu" kapan harus berhenti?
**Dibuka:** adegan `hook`. **Petunjuk:** `zoom` (lonjakan dua tetes), `log` (skala logaritma), `rentang` (indikator = pKa ± 1). **Dipecahkan:** `gagal` (pita metil jingga jatuh di bagian landai kurva cuka → galat ≈ 70 %) dan `kunyit` (pigmen alami hanyalah asam lemah yang berganti bentuk di dalam lonjakan). **Kembali lagi:** `penutup` — tetes yang sama, ditambah pertanyaan daerah datar (teaser Ep. 4).

## Pembagian bagian

- **Bagian 1 — Lonjakan** (istilah → Kw & pH → kurva HCl–NaOH → zoom dua tetes → kenapa curam)
- **Bagian 2 — Mata kimia** (indikator HIn ⇌ In⁻ → rentang → HCl: semua cocok → cuka: kurva lain, pKa di setengah ekivalen → metil jingga gagal)
- **Bagian 3 — Dari pekarangan ke laboratorium** (telang, ubi ungu, kunyit → pengenceran → mata vs elektrode → di dunia nyata → penutup)

## Daftar adegan

Gaya usulan seri: **"Meja Analis"** (latar grafit + kisi kertas milimeter samar, alat gelas garis tipis bercahaya; titran/basa = biru, analit/asam = merah muda, nilai benar/ekivalen = emas, galat sistematik = jingga, data = titik putih). Semua pH di layar diambil dari `titrasi.py --csv` (kurva rapat per 0,05 mL), bukan digambar tangan. Warna indikator = silang-pudar dua warna menurut fraksi In⁻ = 1/(1 + 10^(pKa − pH)) dengan pKa = tengah rentang Skoog (tidak pernah ganti warna berdasarkan ambang).

| # | id | Judul | Ide visual (bergerak sesuai fisika/kimia) |
|---|---|---|---|
| 1 | `hook` | Satu tetes | Gerak lambat: tetes tunggal menggantung di ujung buret, jatuh, riak di permukaan labu. Jarum pH meter analog di samping melompat 4,30 → 9,70; warna labu (fenolftalein) menyebar dari titik jatuh. Kilas balik: tiga labu (metil jingga, fenolftalein, telang) + label tanya. |
| 2 | `judul` | Judul | Kurva S tergambar dari kiri ke kanan sebagai garis bawah judul; tetes kecil meluncur mengikuti kurva dan "jatuh" di bagian tegak. |
| 3 | `istilah` | Analit, titran, dua bendera | Buret + labu berlabel (analit merah muda, titran biru). Sumbu volume di bawah: bendera emas "ekivalen (teori)" tetap, bendera putih "titik akhir (teramati)" bergeser sedikit; jarak keduanya diberi panah jingga "galat titrasi". **Kartu rumus.** |
| 4 | `kw` | Air yang tak pernah diam | Kotak molekul H₂O bergerak termal; sesekali proton berpindah (H₃O⁺ merah muda, OH⁻ biru) lalu bergabung kembali — jumlah pasangan di layar tetap sedikit. Termometer bergeser 25 → 100 °C, label "netral" bergeser pH 7,00 → 6,12. **Kartu rumus** (2 momen). |
| 5 | `kuatawal` | Asam yang habis perlahan | Labu dengan hitungan ion H₃O⁺ (titik merah muda) berkurang tiap mL; setiap OH⁻ biru yang masuk berpasangan menjadi H₂O. Meniskus buret turun; penghitung "V NaOH" dan "pH" berjalan (25 mL → 1,48; 49 mL → 3,00). **Kartu rumus.** |
| 6 | `kurva` | Kurva tergambar langsung | Grafik pH–V tergambar seiring meniskus buret turun (titik putih berjalan); setelah ekivalen ion OH⁻ berlebih menumpuk di labu. Penanda 50,00 mL / pH 7,00 emas. **Kartu rumus** (sesudah ekivalen). |
| 7 | `zoom` | Dua tetes | Kaca pembesar pada 49,9–50,1 mL; sumbu volume meregang (zoom bertingkat ×10, ×100). Titik 4,00 / 4,30 / 7,00 / 9,70 / 10,00 muncul satu per satu bersama tetes yang jatuh. Garis kemiringan "≈ 1000 pH/mL" berdenyut. |
| 8 | `log` | Kenapa curam | Batang "sisa asam" (mmol) mengecil 0,1 → 0,01 → 0,0025 → 0, digambar pada penggaris logaritmik di samping: tiap pembagian sepuluh = satu satuan pH. Setelah 0, batang biru "OH⁻ berlebih" tumbuh di sisi lain. |
| 9 | `indikator` | Molekul yang berganti baju | Molekul indikator (skema sederhana HIn ↔ In⁻) melepas/menerima proton; populasi 100 molekul di kotak, tiap molekul berwarna sesuai bentuknya; warna rata-rata kotak = campuran (silang-pudar). **Kartu rumus.** |
| 10 | `rentang` | Pita warna | Sumbu pH 0–14; tiga pita gradasi tergambar di posisi sebenarnya: metil jingga 3,1–4,4 (merah → kuning), bromtimol biru 6,2–7,6 (kuning → biru), fenolftalein 8,3–10,0 (bening → merah muda). Penunjuk pH menyapu sumbu, warna tiap labu mini mengikuti fraksi In⁻. **Kartu rumus.** |
| 11 | `pilihkuat` | Semua pas | Tiga pita ditempel horizontal di kurva HCl; zoom ke lonjakan: ketiganya jatuh di bagian tegak. Tiga labu berubah hampir bersamaan (49,96 / 50,00 / 50,002 mL). |
| 12 | `cuka` | Kurva kedua | Kurva HOAc tergambar di atas kurva HCl (warna berbeda): awal 2,88, landai panjang, ekivalen 8,73, lonjakan pendek. Di labu, molekul CH₃COOH sebagian kecil terionisasi; di ekivalen ion asetat mengambil proton dari air. **Kartu rumus** (3 momen). |
| 13 | `setengah` | pH = pKa | Titik emas di 25,00 mL / pH 4,76; dua tumpukan sama tinggi (HA dan A⁻) di sampingnya, perbandingannya bergeser saat penunjuk volume digeser kiri-kanan. **Kartu rumus** (2 momen). |
| 14 | `gagal` | Metil jingga gagal | Pita metil jingga ditempel di kurva cuka: jatuh di bagian awal; labu memudar merah → kuning perlahan dari 0,7 sampai 15 mL (tidak ada tetes penentu). Bendera "titik akhir" di 15 mL vs bendera emas 50 mL, panah jingga "galat ≈ 70 %". Lalu pita fenolftalein: jatuh di lonjakan, labu berubah dalam satu tetes (49,99 mL). |
| 15 | `telang` | Bunga di pagar | Kelopak telang biru digambar datar; ekstrak diteteskan ke plat tetes pH 1–14: tiap sumur berganti warna (merah muda keunguan → ungu → biru → hijau) dengan struktur antosianin yang berubah (flavilium → basa kuinoidal → ion kuinoidal → kalkon) di panel kecil. |
| 16 | `kunyit` | Ubi ungu dan kunyit | Plat tetes kedua (ubi ungu: merah, merah muda, ungu, biru, hijau, kuning) lalu ketiga (kunyit: kuning pH 1–7, merah bata mulai pH 8). Pita kunyit ditempel di kurva cuka → jatuh di lonjakan. Tiga batang hasil titrasi HOAc (0,0876 / 0,0869 / 0,0853 M) tumbuh berdampingan. |
| 17 | `encer` | Lonjakan yang menyusut | Tiga kurva 0,1 / 0,01 / 0,001 M bertumpuk, digambar bergiliran; lonjakan 49,9–50,1 mL menyusut 6 → 4 → 2 satuan pH; pita metil jingga & fenolftalein tergeser keluar, bromtimol biru tetap di dalam. |
| 18 | `mata` | Mata vs elektrode | Mata bergaya ikon menatap labu merah muda samar; pita ketidakpastian ±0,5–1 pH di kurva. Lalu elektrode dicelupkan; kurva + turunan pertama (dpH/dV) tergambar, puncak tajam di 50,00 mL. Pil "Ep. 9". |
| 19 | `nyata` | Di dunia nyata | Empat sampel bergiliran di bawah buret: botol cuka (label 5,4 % → hasil 5,9 %), minyak goreng (KOH + fenolftalein), tablet antasida (titrasi balik), air saluran drainase. |
| 20 | `penutup` | Penutup & teaser Ep. 4 | Tetes dari pembuka jatuh lagi; kurva cuka muncul, daerah 10–40 mL menyala "pH hanya naik ≈ 1,2". Teks: "Berikutnya — Si Keras Kepala: larutan penyangga". |

## Narasi

Konvensi: kalimat pendek, gaya tutur. **[KARTU]** = rumus yang tampil di kartu `Formula` (≥ 56 px, satu kartu per momen). Angka di narasi ditulis seperti diucapkan; teks TTS dibuat terpisah nanti. Semua pH yang disebut cocok dengan keluaran `titrasi.py`.

### 1 · `hook` — Satu tetes

Lihat tetes ini. Volumenya kira-kira lima puluh mikroliter, seperdua puluh mililiter. Hampir tidak ada artinya.
Ia jatuh ke labu berisi asam klorida. Sebelum tetes ini, larutan masih asam. pH-nya empat koma tiga.
Satu tetes kemudian, pH melompat ke sembilan koma tujuh. Dari asam menjadi basa.
Lima koma empat satuan pH. Karena pH memakai skala logaritma, itu berarti konsentrasi ion hidronium turun lebih dari dua ratus ribu kali. Karena satu tetes.
Di laboratorium, kita jarang membawa pH meter untuk setiap titrasi. Kita membawa beberapa tetes pewarna. Kadang cukup ekstrak bunga telang dari pagar rumah.
Tapi ada yang janggal. Untuk menitrasi asam klorida, hampir indikator apa pun berhasil. Untuk menitrasi cuka, metil jingga gagal total, sedangkan fenolftalein berhasil.
Kenapa? Dan bagaimana sekuntum bunga bisa tahu kapan kita harus berhenti?

### 2 · `judul` — Judul

Satu Tetes yang Menentukan. Seni Mengukur, episode tiga.

### 3 · `istilah` — Analit, titran, dua bendera

Kita mulai dari kosakata.
Zat yang ingin kita ketahui kadarnya disebut analit. Di sini, asam di dalam labu.
Larutan yang konsentrasinya sudah diketahui, yang kita teteskan dari buret, disebut titran. Di sini, natrium hidroksida nol koma satu molar.
Titik ekivalen adalah saat jumlah titran yang ditambahkan tepat setara dengan jumlah analit, menurut stoikiometri reaksinya. Untuk asam klorida dan natrium hidroksida, satu mol banding satu mol.
Titik ekivalen itu teori. Kita tidak bisa melihatnya langsung.
Yang bisa kita lihat adalah titik akhir: saat sesuatu berubah, misalnya warna indikator. Di situ kita berhenti dan membaca buret.
Selisih volume antara titik akhir dan titik ekivalen disebut galat titrasi.

**[KARTU]** E_t = V_akhir − V_ekivalen

Seluruh seni titrasi adalah membuat dua bendera ini sedekat mungkin.

### 4 · `kw` — Air yang tak pernah diam

Untuk membaca kurva titrasi, kita butuh satu fakta tentang air.
Air murni ternyata tidak seluruhnya molekul H₂O yang utuh. Sebagian sangat kecil saling bertukar proton. Satu molekul menjadi ion hidronium, yang lain menjadi ion hidroksida. Lalu mereka bergabung lagi, terus-menerus.
Hasil kali konsentrasi kedua ion itu tetap. Namanya tetapan ionisasi air.

**[KARTU]** K_w = [H₃O⁺][OH⁻] ≈ 1,0 × 10⁻¹⁴  (25 °C)

Karena angkanya sekecil itu, kimiawan memakai logaritma.

**[KARTU]** pH = −log [H₃O⁺]

Di air murni, kedua ion sama banyak, sepuluh pangkat minus tujuh molar. Jadi pH-nya tujuh.
Tapi angka tujuh itu hanya berlaku pada dua puluh lima derajat Celsius. Pada seratus derajat, air netral pH-nya sekitar enam koma satu. Tetap netral, bukan asam. Netral berarti hidronium sama dengan hidroksida, bukan berarti pH tujuh.

### 5 · `kuatawal` — Asam yang habis perlahan

Sekarang titrasinya. Di labu ada lima puluh mililiter asam klorida nol koma satu molar.
Asam klorida asam kuat, terionisasi sempurna. Jadi pH awalnya tepat satu.
Setiap tetes natrium hidroksida menetralkan sebagian ion hidronium menjadi air. Sebelum titik ekivalen, pH ditentukan oleh asam yang tersisa, dibagi volume total yang terus bertambah.

**[KARTU]** [H₃O⁺] = (n_HCl − n_NaOH) / V_total

Tambahkan dua puluh lima mililiter. Separuh asam sudah habis, tapi pH baru satu koma lima.
Empat puluh mililiter: pH satu koma sembilan lima.
Empat puluh sembilan mililiter. Sembilan puluh delapan persen asam sudah dinetralkan. pH-nya baru tiga.
Hampir sepanjang perjalanan, pH bergerak malas. Perubahan besar menunggu di ujung.

### 6 · `kurva` — Kurva tergambar langsung

Kalau setiap titik kita gambar, volume di sumbu mendatar dan pH di sumbu tegak, kita mendapat kurva titrasi.
Garisnya landai lama sekali. Lalu tiba-tiba tegak, hampir lurus ke atas. Lalu landai lagi.
Tepat di lima puluh mililiter, titik ekivalen, labu hanya berisi natrium klorida dan air. pH-nya tujuh.
Sesudah itu, pH ditentukan oleh natrium hidroksida yang berlebih.

**[KARTU]** [OH⁻] = (n_NaOH − n_HCl) / V_total

Kelebihan satu mililiter saja sudah membuat pH sebelas. Kelebihan sepuluh mililiter, pH hampir dua belas.
Bentuk huruf S yang miring ini adalah sidik jari titrasi asam kuat dengan basa kuat.

### 7 · `zoom` — Dua tetes

Mari kita perbesar bagian yang tegak itu.
Pada empat puluh sembilan koma sembilan mililiter, pH empat.
Empat puluh sembilan koma sembilan lima, satu tetes sebelum ekivalen: pH empat koma tiga.
Lima puluh koma nol nol: pH tujuh.
Lima puluh koma nol lima, satu tetes sesudahnya: pH sembilan koma tujuh.
Lima puluh koma satu: pH sepuluh.
Jadi dari empat ke sepuluh hanya dengan sepersepuluh mililiter. Dua tetes. Di titik paling curam, kemiringan kurvanya sekitar seribu satuan pH per mililiter.
Inilah tetes yang menentukan.

### 8 · `log` — Kenapa curam

Kenapa bisa securam itu? Karena pH adalah skala logaritma. Naik satu satuan berarti ion hidronium tinggal sepersepuluhnya.
Pada empat puluh sembilan mililiter, sisa asam masih nol koma satu milimol. Pada empat puluh sembilan koma sembilan, tinggal nol koma nol satu. Sepuluh kali lebih sedikit, pH naik satu.
Untuk naik satu satuan itu butuh nol koma sembilan mililiter. Satuan berikutnya, sampai pH lima, hanya butuh nol koma nol sembilan mililiter.
Mendekati ekivalen, setiap tetes menghabiskan bagian yang makin besar dari asam yang tersisa. Akhirnya satu tetes menghapus hampir seluruh sisanya.
Lalu begitu melewati ekivalen, tetes yang sama tidak lagi menetralkan apa pun. Ia langsung menjadi ion hidroksida bebas. Dari kekurangan menjadi kelebihan, dalam satu tetes.

### 9 · `indikator` — Molekul yang berganti baju

Mata kita tidak bisa membaca pH. Maka kita meminjam molekul yang bisa: indikator.
Indikator asam basa adalah asam lemah, atau basa lemah, yang bentuk asam dan bentuk basanya berbeda warna.

**[KARTU]** HIn + H₂O ⇌ H₃O⁺ + In⁻   (warna asam ⇌ warna basa)

Saat larutan asam, kesetimbangan bergeser ke kiri, dan warna HIn yang tampak.
Saat larutan basa, ion hidronium diambil, kesetimbangan bergeser ke kanan, dan warna In⁻ yang menang.
Fenolftalein misalnya. Bentuk asamnya tak berwarna. Bentuk basanya merah muda.
Perubahan ini bukan saklar. Kedua bentuk selalu ada bersama. Yang bergeser hanya perbandingannya.

### 10 · `rentang` — Pita warna

Seberapa lebar pergeserannya? Mata kita baru melihat warna basa dengan jelas kalau bentuk In⁻ kira-kira sepuluh kali lebih banyak daripada HIn. Begitu pula sebaliknya.

**[KARTU]** pH ≈ pK_a(HIn) ± 1

Jadi setiap indikator punya rentang perubahan sekitar dua satuan pH, bukan satu angka.
Metil jingga: merah ke kuning, antara pH tiga koma satu dan empat koma empat.
Bromtimol biru: kuning ke biru, antara enam koma dua dan tujuh koma enam.
Fenolftalein: tak berwarna ke merah muda, antara delapan koma tiga dan sepuluh.
Rentang ini perkiraan. Suhu, kekuatan ion, dan pelarut organik bisa menggesernya, kadang sampai satu satuan pH.

### 11 · `pilihkuat` — Semua pas

Sekarang tempelkan ketiga pita warna itu ke kurva asam klorida.
Lonjakannya membentang dari pH empat sampai sepuluh, hanya dalam sepersepuluh mililiter. Ketiga pita jatuh di bagian yang tegak.
Metil jingga sudah kuning penuh pada empat puluh sembilan koma sembilan enam mililiter. Bromtimol biru berubah tepat di lima puluh. Fenolftalein mulai merah muda pada lima puluh koma nol nol dua.
Titik berubahnya tidak lebih dari empat puluh mikroliter dari titik ekivalen. Kurang dari satu tetes, lebih kecil dari ketelitian membaca buret.
Untuk asam kuat dengan basa kuat pada konsentrasi ini, pilihan indikator nyaris tidak penting.
Tapi ini pengecualian, bukan aturan.

### 12 · `cuka` — Kurva kedua

Ganti asamnya dengan asam asetat, asam pada cuka, dengan konsentrasi yang sama: nol koma satu molar.
Asam asetat asam lemah. Hanya sebagian kecil molekulnya yang melepas proton.

**[KARTU]** K_a = [H₃O⁺][CH₃COO⁻] / [CH₃COOH] = 1,75 × 10⁻⁵

Karena itu, pH awalnya bukan satu, melainkan dua koma delapan delapan.

**[KARTU]** [H₃O⁺] ≈ √(K_a · C)

Tambahkan sedikit basa, pH naik cepat ke sekitar empat, lalu kurva melandai panjang. Sepuluh mililiter: empat koma satu enam. Empat puluh mililiter: lima koma tiga enam.
Di titik ekivalen, semua asam asetat sudah menjadi natrium asetat. Ion asetat adalah basa lemah. Ia mengambil proton dari air dan melepaskan ion hidroksida.

**[KARTU]** K_b = K_w / K_a   [OH⁻] ≈ √(K_b · C_A⁻)

Hasilnya, pH di titik ekivalen bukan tujuh, melainkan delapan koma tujuh tiga. Titik ekivalen tidak selalu netral.
Dan lonjakannya jauh lebih pendek. Antara empat puluh sembilan koma sembilan dan lima puluh koma satu mililiter, pH hanya naik dari tujuh koma empat lima ke sepuluh.

### 13 · `setengah` — pH = pKa

Perhatikan bagian yang landai itu. Di sana, asam asetat dan ion asetat ada bersama-sama. Campuran seperti ini disebut larutan penyangga.

**[KARTU]** pH = pK_a + log ([A⁻] / [HA])

Tepat di tengah perjalanan, dua puluh lima mililiter, separuh asam sudah menjadi asetat. Jumlah keduanya sama. Log satu sama dengan nol.

**[KARTU]** V = ½ V_ek  →  pH = pK_a = 4,76

Jadi titik setengah ekivalen memberi kita hadiah. pH yang terbaca di sana adalah pKa asamnya. Dengan buret dan pH meter, kita bisa mengukur seberapa kuat sebuah asam.
Kenapa daerah ini begitu keras kepala menahan pH, kita bongkar di episode berikutnya.

### 14 · `gagal` — Metil jingga gagal

Sekarang kembali ke misteri di awal. Tempelkan pita metil jingga ke kurva cuka.
Pita tiga koma satu sampai empat koma empat jatuh di bagian awal yang landai. Metil jingga mulai berubah setelah nol koma tujuh mililiter, dan sudah kuning penuh pada sekitar lima belas mililiter. Padahal titik ekivalennya lima puluh mililiter.
Kalau kita berhenti saat warnanya berubah, kita kekurangan tiga puluh lima mililiter. Galatnya sekitar tujuh puluh persen. Itu bukan galat kecil. Itu jawaban yang salah.
Peralihannya pun tidak tajam. Warna bergeser perlahan selama belasan mililiter. Tidak ada satu tetes pun yang menentukan.
Fenolftalein, delapan koma tiga sampai sepuluh, jatuh tepat di lonjakan sekitar delapan koma tujuh. Merah muda muncul pada empat puluh sembilan koma sembilan sembilan mililiter. Galatnya kurang dari satu tetes.
Aturannya: pilih indikator yang rentangnya mengapit pH titik ekivalen, dan jatuh di bagian kurva yang paling curam.

### 15 · `telang` — Bunga di pagar

Indikator tidak harus dibeli. Bunga telang yang biru di pagar rumah mengandung antosianin, terutama ternatin, turunan delfinidin.
Antosianin juga asam lemah, dengan lebih dari satu proton yang bisa lepas. Setiap bentuknya punya warna sendiri.
Di asam kuat, ia berupa kation flavilium yang merah. Mendekati netral, ia melepas proton menjadi basa kuinoidal yang ungu. Di basa, bentuk ionnya biru, lalu hijau. Di basa sangat kuat, cincinnya terbuka menjadi kalkon yang kuning.
Di plat tetes pH satu sampai empat belas, ekstrak telang tampak seperti pelangi kecil: merah muda keunguan di pH rendah, biru di tengah, hijau di basa.
Hanifa dan rekan memakai ekstrak telang untuk titrasi asam kuat dengan basa kuat. Warnanya ungu kemerahan pada pH satu sampai dua, biru muda pada pH tujuh, dan hijau muda pada pH delapan sampai dua belas.
Angka-angka ini perkiraan. Warna indikator alami bergantung pada cara ekstraksi dan pelarutnya.

### 16 · `kunyit` — Ubi ungu dan kunyit

Ubi jalar ungu juga memakai antosianin. Leba dan rekan melaporkan ekstraknya merah pada pH satu, merah muda pada pH dua sampai enam, ungu pada pH tujuh, biru pada delapan sampai sembilan, hijau pada sepuluh sampai sebelas, dan kuning di basa kuat.
Kunyit berbeda. Pigmennya kurkumin, bukan antosianin. Ia kuning dari pH satu sampai tujuh, lalu menjadi merah bata pudar sekitar pH delapan, dan makin pekat saat makin basa.
Kunyit berubah warna di daerah yang hampir sama dengan fenolftalein. Karena itu ia cocok untuk titrasi asam lemah dengan basa kuat.
Dalam penelitian yang sama, titrasi asam asetat memberi nol koma nol delapan tujuh enam molar dengan fenolftalein, nol koma nol delapan enam sembilan dengan ubi ungu, dan nol koma nol delapan lima tiga dengan kunyit. Berdekatan.
Jadi, bagaimana sekuntum bunga tahu kapan kita harus berhenti? Ia tidak tahu apa-apa. Pigmennya hanyalah asam lemah yang kebetulan berganti bentuk di dalam lonjakan pH.

### 17 · `encer` — Lonjakan yang menyusut

Satu peringatan. Lonjakan selebar enam satuan pH tadi milik larutan nol koma satu molar.
Encerkan asam dan basanya sepuluh kali, menjadi nol koma nol satu molar. Di antara empat puluh sembilan koma sembilan dan lima puluh koma satu mililiter, pH kini hanya naik dari lima ke sembilan. Empat satuan.
Encerkan lagi, nol koma nol nol satu molar. Tinggal dari enam ke delapan. Dua satuan.
Pada konsentrasi ini, metil jingga dan fenolftalein sudah berada di luar lonjakan. Hanya indikator yang berubah dekat pH tujuh, seperti bromtimol biru, yang masih cocok.
Makin encer larutannya, atau makin lemah asamnya, makin sempit lonjakan, dan makin ketat pilihan indikatornya.

### 18 · `mata` — Mata vs elektrode

Bahkan dengan indikator yang tepat, masih ada satu alat ukur yang tidak sempurna: mata kita.
Buku Skoog memperkirakan ketidakpastian visual indikator rata-rata setengah sampai satu satuan pH. Bisa ditekan sampai sekitar nol koma satu, kalau warna larutan dibandingkan dengan larutan pembanding.
Darwish dan rekan menggabungkan data mahasiswa yang menstandardisasi natrium hidroksida. Dari enam titrasi, simpangan baku relatifnya sekitar tiga koma empat persen, sebuah sebaran yang dikaitkan dengan penilaian warna titik akhir.
Cara menghindarinya: buang indikatornya. Celupkan elektrode, catat pH setiap tambahan titran, lalu cari tempat kurva paling curam. Turunan pertama kurva memuncak tepat di titik ekivalen.
Itulah titrasi potensiometrik. Vilasó-Cadre dan rekan bahkan melakukannya dengan elektrode baja tahan karat sederhana. Kita kembali ke sana di episode sembilan.

### 19 · `nyata` — Di dunia nyata

Di luar ruang kuliah, satu tetes ini menentukan banyak hal.
Kadar cuka di pasar. Kuna menemukan cuka berlabel lima koma empat persen ternyata berkadar lima koma sembilan persen, ditetapkan dengan natrium hidroksida yang sudah distandardisasi dengan asam oksalat.
Bilangan asam minyak goreng. Asam lemak bebas dititrasi dengan kalium hidroksida memakai fenolftalein, karena lagi-lagi ini asam lemah dengan basa kuat.
Obat maag. Kekuatan antasida diukur dengan titrasi balik: asam ditambahkan berlebih, lalu sisanya dititrasi.
Air buangan. Hakim dan rekan menetapkan keasaman dan kebasaan saluran drainase di Palangka Raya dengan titrasi.
Semuanya bergantung pada hal yang sama: indikator yang berubah di bagian kurva yang tepat.

### 20 · `penutup` — Penutup & teaser Ep. 4

Kembali ke tetes kecil di awal. Ia mengubah pH lima koma empat satuan bukan karena ajaib, tetapi karena skala logaritma, dan karena tepat di titik itu asamnya baru saja habis.
Indikator yang baik, sintetis atau dari bunga, adalah indikator yang berganti warna di dalam lonjakan itu. Titik akhir yang kita lihat harus jatuh di atas titik ekivalen yang kita hitung.
Tapi kurva cuka masih menyimpan satu pertanyaan. Dari sepuluh sampai empat puluh mililiter, kita menambahkan tiga puluh mililiter basa, dan pH hanya naik sekitar satu satuan.
Apa yang membuat larutan sekeras kepala itu? Dan kenapa darah kita memakai trik yang sama?
Itu cerita episode berikutnya: Si Keras Kepala.

---

## Lampiran: tabel pH dari `titrasi.py`

50,00 mL asam 0,1000 M dititrasi NaOH 0,1000 M, 25 °C, Kw = 1,00 × 10⁻¹⁴, neraca muatan eksak.

| V NaOH (mL) | pH HCl | pH HOAc (Ka 1,75 × 10⁻⁵) |
|---|---|---|
| 0,00 | 1,00 | 2,88 |
| 10,00 | 1,18 | 4,16 (Skoog: 4,15, pendekatan) |
| 25,00 | 1,48 | 4,76 |
| 40,00 | 1,95 | 5,36 |
| 49,00 | 3,00 | 6,45 |
| 49,90 | 4,00 | 7,45 (Skoog: 7,46) |
| 49,95 | 4,30 | 7,75 |
| 50,00 | 7,00 | 8,73 |
| 50,05 | 9,70 | 9,70 |
| 50,10 | 10,00 | 10,00 |
| 51,00 | 11,00 | 11,00 |
| 60,00 | 11,96 | 11,96 |
| 70,00 | 12,22 | 12,22 |

Volume saat pH mencapai batas rentang indikator (V_ek = 50,00 mL):

| Indikator (Skoog Tabel 12-1) | HCl | HOAc |
|---|---|---|
| metil jingga 3,1–4,4 | 49,21–49,96 mL | 0,68–15,24 mL |
| bromtimol biru 6,2–7,6 | 49,999–50,000 mL | 48,26–49,93 mL |
| fenolftalein 8,3–10,0 | 50,002–50,100 mL | 49,988–50,100 mL |

Pengenceran (kuat–kuat, 49,90 → 50,10 mL): 0,1 M: 4,00 → 10,00 · 0,01 M: 5,00 → 9,00 · 0,001 M: 6,00 → 8,00.
Kurva rapat untuk adegan: `python3 titrasi.py --csv kurva.csv` (langkah 0,05 mL, 0–100 mL).
