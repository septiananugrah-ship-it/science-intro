# Naskah riset — Seni Mengukur (Kimia Analitik) Ep. 5 "Kunci untuk Setiap Logam"

Draf untuk video berikutnya (belum dibangun). S1 Kimia UNESA, ±12–13 menit, 20 adegan.
Sumber materi: `materi/Analytical Chemistry.pdf` (Skoog, West, Holler & Crouch ed. 10, bab 15 "Complexation and Precipitation Reactions and Titrations" § 15D-1 s.d. 15D-9, hlm. 380–401; § 37E "Complex-Formation Titrations with EDTA", hlm. 1020–1023; Lampiran 2) + dokumen latar WHO tentang kesadahan (2003 & 2011), klasifikasi USGS (Hem 1985), Permenkes No. 2 Tahun 2023 (Tabel 1 Lampiran), 21 CFR 172.120 (CaNa₂EDTA dalam pangan), CDC MMWR 2006 (terapi kelasi), laporan RPA untuk Komisi Eropa 2006 (EDTA dalam deterjen). Angka dicek di `AUDIT.md` (folder ini); semua hitungan diulang dengan `hitung.py`.

Catatan cakupan: titrasi pengendapan (Mohr, Volhard, Fajans) disimpan untuk Ep. 6 "Garam yang Bersembunyi"; elektrode ion selektif hanya disebut sekilas (Ep. 9). Ligan bantu (NH₃ pada titrasi Zn) dan penopengan (masking) hanya satu kalimat. Fokus: kelat & EDTA, stoikiometri 1:1, Kf dan K′ yang bergantung pH, indikator ion logam, kesadahan total vs Ca vs Mg, kerak ketel, EDTA dalam kehidupan.

## Pilihan judul

1. **"Kunci untuk Setiap Logam"** — Titrasi Kompleksometri EDTA & Kesadahan Air ← *dipilih*
2. "Enam Lengan untuk Satu Ion"
3. "Ke Mana Perginya Kerak Ketel?"

Alasan memilih (1): sudah tercantum di rencana seri; "kunci" menggambarkan EDTA yang mengunci hampir semua ion logam, dan pH sebagai "anak kunci" yang menentukan logam mana yang terkunci. Judul (3) dipakai sebagai pertanyaan di pembuka dan dijawab di adegan `ketel`.

## Benang merah

**Misteri:** Air keran yang sama dititrasi dua kali. Langsung dari keran: **12,00 mL** EDTA 0,01000 M untuk 50,00 mL sampel → **240 mg/L CaCO₃**. Sesudah dididihkan, didinginkan, dan disaring: hanya **7,00 mL** → **140 mg/L**. Seratus miligram per liter "hilang", dan ketel di dapur makin tebal keraknya. Ke mana perginya? Satu teka-teki kecil ikut: kenapa analis wajib menambahkan larutan penyangga pH 10 — tanpa itu warna Eriochrome Black T tak pernah berubah dengan tajam?
**Dibuka:** adegan `hook`. **Petunjuk:** `kesadahan` (dinyatakan sebagai CaCO₃), `alfa` & `bersyarat` (EDTA bekerja penuh hanya di pH tinggi), `ebt` (indikator juga asam-basa), `kalsium` (Ca dan Mg bisa dipisah). **Dipecahkan:** `ph10` (jendela pH 10) dan `ketel` (kalsium bikarbonat → CaCO₃ + CO₂ saat dipanaskan; 100 mg/L yang hilang = kesadahan sementara = kerak, ≈ 55 g per tahun untuk 1,5 L/hari). **Kembali lagi:** `penutup` — ketel yang sama, kini bersih dengan asam sitrat, dan teaser Ep. 6.

## Pembagian bagian

- **Bagian 1 — Pelukan enam lengan** (kesadahan → ligan & kelat → EDTA → 1:1 → tetapan pembentukan)
- **Bagian 2 — Kunci yang diatur pH** (α_Y⁴⁻ → tetapan bersyarat → kurva pM → indikator EBT → Mg vs Ca → jendela pH 10)
- **Bagian 3 — Dari buret ke dapur** (titrasi kesadahan total → Ca saja → klasifikasi & regulasi → ketel → pangan → obat & deterjen → penutup)

## Daftar adegan

Gaya usulan seri: **"Meja Analis"** (latar grafit + kisi kertas milimeter samar, alat gelas garis tipis bercahaya; titran = biru, analit = merah muda, nilai benar/ekivalen = emas, galat sistematik = jingga, data = titik putih). Tambahan kode warna episode ini: **Ca²⁺ = putih susu**, **Mg²⁺ = hijau mint**, **Pb²⁺ = abu timah**, **EDTA (Y⁴⁻) = biru**, proton H⁺ = merah muda kecil; warna EBT = silang-pudar merah anggur (MIn⁻ / H₂In⁻) ↔ biru (HIn²⁻) ↔ jingga (In³⁻) menurut fraksi yang dihitung di `hitung.py` (tidak pernah berganti warna berdasarkan ambang). Molekul EDTA digambar 2D gaya kerangka dengan enam "lengan" donor (2 N biru tua, 4 O⁻ merah) yang melipat menjadi sangkar oktahedral 3D berputar pelan saat memeluk ion.

| # | id | Judul | Ide visual (bergerak sesuai fisika/kimia) |
|---|---|---|---|
| 1 | `hook` | Dua angka untuk air yang sama | Ketel listrik transparan mendidih; gelembung naik, serpihan putih menempel di elemen pemanas dan menebal (lapisan per lapisan). Di sebelahnya dua labu titrasi: merah anggur → biru pada 12,00 mL (penghitung buret berjalan), lalu labu "sesudah didih" berubah pada 7,00 mL. Dua kartu 240 dan 140 mg/L; selisih 100 berdenyut jingga dengan tanda tanya. |
| 2 | `judul` | Judul | Molekul EDTA terbuka melayang, enam lengannya melipat mengunci ion Ca²⁺ di tengah; sangkar berputar dan menjadi huruf "O" pada judul. |
| 3 | `kesadahan` | Air yang keras kepala pada sabun | Gelas berisi air lunak: buih sabun menggunung. Gelas air sadah: ion Ca²⁺/Mg²⁺ (titik putih/mint) menangkap anion stearat → gumpalan "kerak sabun" mengapung, buih menyusut. Timbangan konversi: 1 mmol Ca²⁺ atau Mg²⁺ ↔ 100,09 mg CaCO₃. **Kartu rumus.** |
| 4 | `kelat` | Satu kait vs cakar | Ion logam di tengah dengan enam posisi koordinasi oktahedral; ligan monodentat (H₂O, NH₃) menempel satu-satu dan sering lepas (bergetar termal); lalu ligan bergigi banyak mencengkeram seperti capit kepiting — sekali lepas satu kait, kait lain masih memegang. Kata Yunani *chēlē* = capit ditulis tangan. |
| 5 | `edta` | Enam lengan | Struktur EDTA tergambar garis demi garis: dua N dengan pasangan elektron bebas (kilau biru), empat gugus karboksilat. Empat proton (H₄Y) lepas satu per satu sebagai titik merah muda; label H₄Y → H₃Y⁻ → H₂Y²⁻ → HY³⁻ → Y⁴⁻. Botol reagen Na₂H₂Y·2H₂O di samping dengan timbangan 3,72 g / 1 L. |
| 6 | `satubanding` | Selalu satu banding satu | Tiga ion berbeda muatan (Ag⁺, Ca²⁺, Al³⁺) masing-masing dipeluk satu EDTA; muatan kompleks dihitung di label (AgY³⁻, CaY²⁻, AlY⁻). Dua EDTA mencoba memeluk satu ion → yang kedua terpental. **Kartu rumus.** |
| 7 | `kf` | Seberapa erat pelukannya | Tangga logaritmik log K_MY 0–26: Ag⁺ 7,32 · Mg²⁺ 8,69 · Ca²⁺ 10,70 · Zn²⁺ 16,50 · Pb²⁺ 18,04 · Cu²⁺ 18,80 · Fe³⁺ 25,1 — ion naik ke anak tangganya. Celah Ca–Mg diberi kurung emas "≈ 100×". **Kartu rumus.** |
| 8 | `alfa` | Proton yang merebut tempat | Diagram fraksi spesies EDTA (α₀…α₄) tergambar saat penunjuk pH menyapu 0 → 14; molekul EDTA di panel kecil kehilangan proton mengikuti penunjuk. Kurva α₄ (biru) dipisah, sumbu log: 10⁻¹³ di pH 2 → 0,355 di pH 10 → ≈ 1 di pH 12. **Kartu rumus.** |
| 9 | `bersyarat` | Kunci yang diatur pH | Dua batang log K′ (Ca putih, Mg mint) tumbuh-menyusut saat pH digeser 4 → 12; garis ambang emas "K′ ≥ 10⁶" mendatar. Batang Ca melewati garis di pH 6,0, Mg di pH 7,6. **Kartu rumus** (2 momen). |
| 10 | `kurva` | Kurva pCa | Empat kurva titrasi Ca²⁺ 0,0100 M (pH 6, 8, 10, 12) tergambar bergantian seperti Skoog Gbr. 15-10; lonjakan di 50 mL makin tinggi seiring pH; di pH 6 lonjakan nyaris hilang. Ion Ca²⁺ bebas di labu mini berkurang mengikuti kurva. |
| 11 | `ebt` | Pewarna yang juga asam | Molekul EBT (skema azo) dengan dua gugus fenol; sumbu pH: merah anggur (H₂In⁻) < 6,3 < biru (HIn²⁻) < 11,6 < jingga (In³⁻). Lalu Mg²⁺ masuk → MgIn⁻ merah anggur; tetes EDTA merebut Mg²⁺ → indikator bebas biru. **Kartu rumus** (2 momen). |
| 12 | `mgca` | Yang terakhir dititrasi | Kurva pMg dan pCa pH 10 berdampingan (Skoog Gbr. 15-9); pita transisi EBT (pMg 5,4 ± 1; pCa 3,8 ± 1) ditempel. Pita Mg duduk tepat di lonjakan (pMg_ek 5,36); pita Ca jatuh jauh sebelum lonjakan (pCa_ek 6,36) → bendera "titik akhir" Ca muncul terlalu awal (jingga). Lalu campuran: EDTA memeluk semua Ca dulu (titik putih hilang), baru Mg (titik mint), warna biru muncul saat Mg terakhir terkunci. |
| 13 | `ph10` | Jendela pH 10 | Sumbu pH dengan tiga syarat sebagai pita bertumpuk: K′_MgY ≥ 10⁶ (pH > 7,6), EBT biru (6,3–11,6), Mg tetap larut (jauh di bawah 12). Irisan ketiganya menyala di pH ≈ 10. Botol penyangga NH₃/NH₄Cl ditempatkan di jendela itu. |
| 14 | `total` | Titrasi kesadahan total | Pipet 50,00 mL → labu; 2 mL penyangga, 3 tetes EBT → merah anggur; buret turun, penghitung 0 → 12,00 mL; warna silang-pudar ke biru murni di 12,00. Kartu hitung bertahap: mmol → mmol/L → mg/L CaCO₃ = 240,2. **Kartu rumus.** |
| 15 | `kalsium` | Memisahkan kalsium | Labu kedua: NaOH dinaikkan ke pH 12–13; ion mint jatuh sebagai serpih Mg(OH)₂ putih keruh ke dasar. Indikator kalkon/murexida merah muda → biru/ungu pada 9,00 mL. Diagram batang bertumpuk: Ca 180,2 + Mg 60,1 = 240,2 mg/L CaCO₃; label massa ion 72,1 mg/L Ca²⁺ dan 14,6 mg/L Mg²⁺. **Kartu rumus.** |
| 16 | `kelas` | Lunak atau sadah? | Penggaris berwarna 0–300 mg/L: lunak < 60 · agak sadah 60–120 · sadah 120–180 · sangat sadah > 180 (WHO/USGS); penanda 240 jatuh di "sangat sadah". Pil regulasi: Permenkes 492/2010 (500 mg/L, sudah dicabut) → Permenkes 2/2023 (tidak termasuk 19 parameter wajib); WHO: tanpa nilai panduan kesehatan, ambang rasa Ca²⁺ 100–300 mg/L, kerak di atas ≈ 200. |
| 17 | `ketel` | Ke mana 100 mg/L pergi | Zoom bertingkat ke elemen ketel: ion Ca²⁺ + 2 HCO₃⁻ → CaCO₃ (kristal kalsit tumbuh menempel) + CO₂ (gelembung lepas ke udara) + H₂O. Dua batang: sebelum 240 / sesudah 140 mg/L; bagian 100 yang hilang terlepas dan menempel di elemen. Kalender 365 hari berputar, tumpukan kerak tumbuh sampai 55 g. Tetes cuka/asam sitrat melarutkannya (gelembung CO₂). **Kartu rumus.** |
| 18 | `pangan` | E385 di toples mayones | Toples mayones dengan label komposisi "E385"; di dalam: tetes minyak dengan ion Fe/Cu kecil memicu rantai oksidasi (percikan jingga); EDTA (CaNa₂EDTA) menyelimuti ion → rantai berhenti. Pil "batas 75 ppm (AS)". |
| 19 | `obat` | Timbal keluar, kalsium masuk | Aliran darah bergaya datar: ion Pb²⁺ abu menempel di sel; infus CaNa₂EDTA masuk, kompleks CaY²⁻ bertemu Pb²⁺ → bertukar (Ca lepas, PbY²⁻ terbawa ke ginjal). Tanda bahaya: Na₂EDTA tanpa kalsium → kadar Ca darah anjlok (ikon jantung berkedip merah). Panel kedua: mesin cuci & air sadah; EDTA dalam deterjen mengikat Ca/Mg, lalu mengalir ke sungai tanpa terurai cepat (panah ke instalasi pengolahan yang dilewati). **Kartu rumus.** |
| 20 | `penutup` | Penutup & teaser Ep. 6 | Ketel bersih kembali; molekul EDTA melepas Ca²⁺ dan melambai pergi. Sebuah ikan asin & tetes perak nitrat muncul, endapan merah bata samar. Teks: "Berikutnya — Garam yang Bersembunyi". |

## Narasi

Konvensi: kalimat pendek, gaya tutur. **[KARTU]** = rumus yang tampil di kartu `Formula` (≥ 56 px, satu kartu per momen). Angka di narasi ditulis seperti diucapkan; teks TTS dibuat terpisah nanti. Semua angka cocok dengan keluaran `hitung.py`.

### 1 · `hook` — Dua angka untuk air yang sama

Lihat bagian dalam ketel ini. Lapisan putih, kasar, makin tebal setiap minggu.
Airnya air keran biasa. Jernih, tidak berbau, aman diminum.
Kita ambil lima puluh mililiter air keran itu, lalu kita titrasi dengan larutan bernama EDTA. Warna labu berubah dari merah anggur ke biru pada dua belas mililiter. Artinya, air ini mengandung kesadahan dua ratus empat puluh miligram per liter, dihitung sebagai kalsium karbonat.
Sekarang air keran yang sama kita didihkan dulu, kita dinginkan, lalu kita saring. Titrasi ulang. Kali ini warna berubah pada tujuh mililiter. Seratus empat puluh miligram per liter.
Air yang sama, dua angka. Seratus miligram per liter lenyap.
Ke mana perginya? Dan kenapa, tanpa larutan penyangga pH sepuluh, titrasi ini tidak akan berhasil sama sekali?

### 2 · `judul` — Judul

Kunci untuk Setiap Logam. Seni Mengukur, episode lima.

### 3 · `kesadahan` — Air yang keras kepala pada sabun

Orang dulu menyebut air seperti ini air sadah, atau air keras. Ukurannya sederhana: seberapa susah sabun berbuih.
Penyebabnya ion logam bermuatan dua atau lebih, terutama kalsium dan magnesium, yang larut dari batu kapur dan tanah. Ion-ion itu mengikat anion sabun menjadi endapan yang tak larut, lapisan kusam di bak mandi.
Karena isinya campuran, kesadahan dilaporkan dengan satu mata uang: miligram kalsium karbonat per liter. Setiap milimol ion kalsium atau magnesium dihitung setara satu milimol kalsium karbonat.

**[KARTU]** kesadahan (mg/L CaCO₃) = mmol/L (Ca²⁺ + Mg²⁺) × 100,09

Jadi tugas kita: menghitung jumlah total ion logam itu. Untuk itu kita butuh pereaksi yang mau mengikat logam, satu demi satu, dengan perbandingan yang pasti.

### 4 · `kelat` — Satu kait vs cakar

Ion logam di dalam air tidak pernah sendirian. Ia dikelilingi molekul yang menyumbangkan pasangan elektron. Molekul penyumbang itu disebut ligan.
Ligan sederhana, seperti air atau amonia, menempel dengan satu titik saja. Gerakan termal membuatnya mudah lepas.
Sekarang bayangkan ligan dengan beberapa titik pegangan dalam satu molekul. Kalau satu pegangan lepas, yang lain masih mencengkeram, dan pegangan itu cepat kembali.
Ikatan seperti ini disebut kelat, dari bahasa Yunani yang berarti capit kepiting. Makin banyak pegangan, makin erat capitnya.

### 5 · `edta` — Enam lengan

Inilah capit paling terkenal di laboratorium analitik: asam etilenadiamina tetraasetat, disingkat EDTA.
Ia punya dua atom nitrogen, masing-masing dengan sepasang elektron bebas, dan empat gugus karboksilat. Total enam titik pegangan. EDTA adalah ligan heksadentat, bergigi enam.
Dalam bentuk asamnya, EDTA membawa empat proton yang bisa lepas. Kita menyingkatnya H₄Y. Lepas satu proton menjadi H₃Y⁻, terus sampai bentuk tanpa proton, Y⁴⁻. Hanya bentuk terakhir ini yang membuka keenam lengannya sepenuhnya.
Di laboratorium, larutan baku EDTA biasanya dibuat dari garam dinatriumnya. Sekitar tiga koma tujuh gram dilarutkan menjadi satu liter, memberi nol koma nol satu molar.

### 6 · `satubanding` — Selalu satu banding satu

Sifat EDTA yang paling disukai analis: ia mengikat ion logam dengan perbandingan satu banding satu, berapa pun muatan ionnya.
Ion perak bermuatan satu, kalsium dua, aluminium tiga. Ketiganya dipeluk oleh tepat satu molekul EDTA.

**[KARTU]** Mⁿ⁺ + Y⁴⁻ ⇌ MY⁽ⁿ⁻⁴⁾⁺

Begitu enam lengan melingkari sebuah ion, tidak ada tempat lagi untuk EDTA kedua. Ion itu terkurung dalam sangkar, terpisah dari molekul air di sekitarnya.
Bagi kita, ini berarti hitungan yang bersih. Satu milimol EDTA yang terpakai sama dengan satu milimol ion logam di dalam labu.

### 7 · `kf` — Seberapa erat pelukannya

Tapi tidak semua pelukan sama erat. Ukurannya adalah tetapan pembentukan.

**[KARTU]** K_MY = [MY⁽ⁿ⁻⁴⁾⁺] / ([Mⁿ⁺][Y⁴⁻])

Angkanya begitu besar sehingga kita memakai logaritma. Untuk magnesium, log K delapan koma tujuh. Kalsium sepuluh koma tujuh. Timbal delapan belas. Besi tiga, dua puluh lima.
Perhatikan selisih kalsium dan magnesium: dua satuan log. Artinya, EDTA memeluk kalsium sekitar seratus kali lebih erat daripada magnesium. Fakta kecil ini nanti menjadi kunci.

### 8 · `alfa` — Proton yang merebut tempat

Ada syaratnya. Tetapan pembentukan tadi dihitung untuk bentuk Y⁴⁻, EDTA yang sudah melepas semua protonnya.
Di larutan asam, proton menduduki lengan-lengan itu. Ion logam harus merebut tempat dari proton.
Fraksi EDTA yang benar-benar berbentuk Y⁴⁻ kita sebut alfa empat.

**[KARTU]** α_Y⁴⁻ = [Y⁴⁻] / c_EDTA

Pada pH dua, alfa empat hanya sekitar sepuluh pangkat minus tiga belas. Hampir tidak ada.
Pada pH sepuluh, nol koma tiga lima. Sepertiga lebih EDTA siap memeluk.
Di atas pH dua belas, hampir seluruhnya.

### 9 · `bersyarat` — Kunci yang diatur pH

Karena itu, analis memakai tetapan yang sudah memperhitungkan pH: tetapan pembentukan bersyarat.

**[KARTU]** K′_MY = α_Y⁴⁻ · K_MY

Pada pH sepuluh, K bersyarat kalsium sekitar satu koma delapan kali sepuluh pangkat sepuluh. Magnesium satu koma tujuh kali sepuluh pangkat delapan. Keduanya masih sangat besar.
Turunkan pH ke enam. K bersyarat anjlok lebih dari lima belas ribu kali.
Agar titik akhir tajam untuk larutan sekitar nol koma nol satu molar, K bersyarat perlu paling sedikit sejuta.

**[KARTU]** K′_MY ≥ 10⁶

Kalsium baru memenuhinya di atas pH enam. Magnesium di atas pH tujuh koma enam. Sebaliknya, timbal dan besi tiga sudah cukup di larutan asam.
Inilah arti judul kita. EDTA adalah kunci untuk hampir setiap logam, dan pH adalah anak kuncinya.

### 10 · `kurva` — Kurva pCa

Kita lihat akibatnya pada kurva titrasi. Sumbu tegaknya pCa, minus logaritma konsentrasi ion kalsium bebas.
Sebelum titik ekivalen, kalsium berkurang sebanding dengan EDTA yang ditambahkan. Di titik ekivalen, pCa melonjak.
Pada pH dua belas, lonjakannya tinggi dan tajam. Pada pH sepuluh, masih jelas. Pada pH delapan, menyusut. Pada pH enam, lonjakan nyaris hilang, dan tak ada indikator yang bisa menangkapnya.
Itulah alasan pertama titrasi EDTA selalu dilakukan dalam larutan penyangga.

### 11 · `ebt` — Pewarna yang juga asam

Lalu bagaimana mata kita melihat titik ekivalen? Dengan indikator ion logam. Yang paling terkenal: Eriochrome Black T, disingkat EBT.
EBT adalah pewarna yang juga asam lemah. Di bawah pH sekitar enam koma tiga, ia merah anggur. Antara enam koma tiga dan sebelas koma enam, biru. Di atasnya, jingga.

**[KARTU]** H₂In⁻ (merah) ⇌ HIn²⁻ (biru) ⇌ In³⁻ (jingga)

EBT juga memeluk ion magnesium, tapi lebih longgar daripada EDTA. Kompleksnya merah anggur.
Selama masih ada magnesium bebas, larutan merah. Begitu EDTA merebut ion magnesium terakhir dari indikator, EBT bebas kembali, dan warnanya biru.

**[KARTU]** MgIn⁻ (merah) + HY³⁻ → MgY²⁻ + HIn²⁻ (biru)

### 12 · `mgca` — Yang terakhir dititrasi

Anehnya, EBT kurang cocok untuk kalsium.
Kompleks kalsium dengan EBT empat puluh kali lebih lemah daripada kompleks magnesiumnya. Akibatnya EBT melepas kalsium terlalu cepat. Warna berubah di sekitar pCa tiga koma delapan, padahal titik ekivalen kalsium ada di pCa enam koma empat. Titik akhirnya datang terlalu awal.
Untuk magnesium, EBT berubah di pMg lima koma empat, tepat di titik ekivalennya.
Air keran mengandung keduanya. Ingat, EDTA memeluk kalsium seratus kali lebih erat. Jadi EDTA mengunci semua kalsium lebih dulu, baru magnesium. Magnesium adalah ion terakhir yang dititrasi, dan EBT menunggu persis ion itu.
Kalau sampel tidak mengandung magnesium, analis sengaja menambahkan sedikit kompleks magnesium-EDTA, supaya ada magnesium yang dilihat indikator.

### 13 · `ph10` — Jendela pH 10

Sekarang teka-teki kecil di awal terjawab. Kenapa harus pH sepuluh?
Pertama, K bersyarat magnesium harus melewati sejuta. Itu menuntut pH di atas tujuh koma enam.
Kedua, EBT bebas harus biru, supaya ada perubahan dari merah ke biru. Itu menuntut pH antara enam koma tiga dan sebelas koma enam.
Ketiga, magnesium harus tetap larut. Di pH dua belas, ia mengendap sebagai magnesium hidroksida.
Irisan ketiga syarat itu adalah jendela di sekitar pH sepuluh. Penyangga amonia dan amonium klorida menahan pH di jendela itu selama titrasi.

### 14 · `total` — Titrasi kesadahan total

Mari kita ulangi titrasi dari pembuka, angka demi angka.
Lima puluh mililiter air keran. Dua mililiter penyangga pH sepuluh. Tiga tetes EBT. Larutan merah anggur.
EDTA nol koma nol satu molar dari buret. Pada dua belas koma nol nol mililiter, merah berubah menjadi biru murni.

**[KARTU]** n = C·V = 0,01000 M × 12,00 mL = 0,1200 mmol

Itu jumlah ion kalsium dan magnesium dalam lima puluh mililiter. Per liter, dua koma empat milimol. Kalikan massa molar kalsium karbonat.

**[KARTU]** 2,400 mmol/L × 100,09 mg/mmol = 240,2 mg/L CaCO₃

Satu tetes EDTA di sini setara satu miligram per liter. Ketelitian yang cukup untuk air minum.

### 15 · `kalsium` — Memisahkan kalsium

Berapa yang kalsium, berapa yang magnesium? Ambil lima puluh mililiter lagi, lalu naikkan pH ke dua belas sampai tiga belas dengan natrium hidroksida.
Pada pH itu, magnesium mengendap sebagai magnesium hidroksida. Sisa yang terlarut kurang dari seperseribu miligram per liter.
Indikatornya diganti dengan yang peka terhadap kalsium, misalnya kalkon atau murexida. Titik akhir tercapai pada sembilan koma nol nol mililiter.

**[KARTU]** Ca: 9,00 mL → 180,2 mg/L CaCO₃ · Mg: 12,00 − 9,00 = 3,00 mL → 60,1 mg/L CaCO₃

Dalam massa ion, itu tujuh puluh dua miligram kalsium dan hampir lima belas miligram magnesium per liter. Kalsium membawa tiga perempat kesadahan.

### 16 · `kelas` — Lunak atau sadah?

Apakah dua ratus empat puluh itu banyak? Menurut klasifikasi yang dipakai WHO dan Survei Geologi Amerika Serikat, di bawah enam puluh disebut lunak, sampai seratus dua puluh agak sadah, sampai seratus delapan puluh sadah, dan di atasnya sangat sadah. Air kita sangat sadah.
Apakah berbahaya? WHO tidak menetapkan nilai panduan kesehatan untuk kesadahan. Kalsium baru terasa di lidah sekitar seratus sampai tiga ratus miligram per liter. Masalah utamanya teknis: di atas sekitar dua ratus, air cenderung meninggalkan kerak.
Di Indonesia, Permenkes nomor empat sembilan dua tahun dua ribu sepuluh dulu membatasi kesadahan air minum lima ratus miligram per liter. Penggantinya, Permenkes nomor dua tahun dua ribu dua puluh tiga, tidak memasukkan kesadahan ke dalam sembilan belas parameter wajib.

### 17 · `ketel` — Ke mana 100 mg/L pergi

Kembali ke misteri. Air tanah melarutkan batu kapur dengan bantuan karbon dioksida. Kalsium larut sebagai kalsium bikarbonat.
Saat dipanaskan, karbon dioksida keluar dari air. Kesetimbangan bergeser, dan kalsium karbonat mengendap di permukaan yang paling panas: elemen ketel.

**[KARTU]** Ca²⁺ + 2 HCO₃⁻ → CaCO₃(s) + CO₂(g) + H₂O

Itulah seratus miligram per liter yang hilang. Ia tidak lenyap. Ia menempel di ketel. Bagian yang hilang karena pendidihan disebut kesadahan sementara. Seratus empat puluh sisanya tetap larut; sebagian besar berpasangan dengan anion lain seperti sulfat dan klorida, dan disebut kesadahan tetap.
Kalau kita mendidihkan satu setengah liter setiap hari, dalam setahun ketel bisa menampung sekitar lima puluh lima gram kerak. Rata-rata empat setengah gram setiap bulan.
Kerak ini menghambat perpindahan panas. Untuk membersihkannya, cukup asam lemah seperti cuka atau asam sitrat: karbonat larut sambil melepas gelembung karbon dioksida.

### 18 · `pangan` — E385 di toples mayones

Kemampuan EDTA mengunci logam juga dipakai di luar laboratorium.
Baca label mayones atau saus salad. Kadang tertulis E385: kalsium dinatrium EDTA.
Jejak ion besi dan tembaga dari peralatan pabrik bisa mempercepat oksidasi lemak oleh udara, membuat minyak tengik. EDTA mengurung ion-ion itu sehingga tak bisa lagi menjadi katalis.
Jumlahnya kecil. Di Amerika Serikat, batas untuk mayones tujuh puluh lima bagian per juta. Asupan harian yang dapat diterima, menurut penilaian lama Komite Pakar FAO–WHO, dua koma lima miligram per kilogram berat badan.

### 19 · `obat` — Timbal keluar, kalsium masuk

Di rumah sakit, EDTA dipakai untuk keracunan timbal. Obatnya bukan EDTA biasa, melainkan kalsium dinatrium EDTA, yang sudah memeluk ion kalsium.
Ingat tangga tetapan pembentukan. Timbal delapan belas, kalsium sepuluh koma tujuh. EDTA dengan senang hati melepas kalsium dan menukarnya dengan timbal, lalu kompleks timbal dibuang lewat ginjal.

**[KARTU]** CaY²⁻ + Pb²⁺ → PbY²⁻ + Ca²⁺   K ≈ 2 × 10⁷

Kenapa harus bentuk kalsium? Karena EDTA tanpa kalsium akan merampas kalsium darah. CDC melaporkan tiga kematian antara tahun dua ribu tiga dan dua ribu lima akibat kadar kalsium darah yang anjlok setelah terapi kelasi, terkait pemakaian bentuk dinatrium.
Di rumah, EDTA ada di sebagian deterjen dan pembersih. Ia mengikat kalsium dan magnesium agar tidak mengganggu kerja sabun. Tapi EDTA sulit terurai di instalasi pengolahan air limbah. Karena itu beberapa negara Eropa membatasinya dalam deterjen rumah tangga.

### 20 · `penutup` — Penutup & teaser Ep. 6

Jadi, ke mana seratus miligram per liter itu pergi? Ke dinding ketel, sebagai kalsium karbonat yang ditinggalkan karbon dioksida.
Dan kenapa pH sepuluh? Karena di situlah EDTA cukup lapar untuk magnesium, EBT bebas berwarna biru, dan magnesium belum mengendap.
Enam lengan, satu ion, satu banding satu. Ditambah pH yang tepat, satu molekul bisa menghitung hampir setiap logam di tabel periodik.
Tapi ada ion yang tidak bisa dikunci EDTA dengan cara ini: klorida, garam yang bersembunyi di ikan asin. Untuk menangkapnya, kita butuh perak dan endapan merah bata.
Itu cerita episode berikutnya: Garam yang Bersembunyi.

---

## Lampiran: hitungan dari `hitung.py`

Tetapan (Skoog ed. 10): Ka EDTA K₁ = 1,02 × 10⁻², K₂ = 2,14 × 10⁻³, K₃ = 6,92 × 10⁻⁷, K₄ = 5,50 × 10⁻¹¹; K_MY pada 20 °C, I = 0,1 (Tabel 15-4).

**α_Y⁴⁻ dan K′ terhadap pH**

| pH | α_Y⁴⁻ | spesies dominan | log K′_CaY | log K′_MgY |
|---|---|---|---|---|
| 2 | 3,7 × 10⁻¹⁴ | H₃Y⁻ / H₄Y | — | — |
| 4 | 3,6 × 10⁻⁹ | H₂Y²⁻ (95 %) | 2,26 | 0,25 |
| 6 | 2,3 × 10⁻⁵ | H₂Y²⁻ (59 %) | 6,05 | 4,04 |
| 8 | 5,4 × 10⁻³ | HY³⁻ (98 %) | 8,43 | 6,42 |
| 10 | 0,355 | HY³⁻ (65 %) | 10,25 (K′ = 1,77 × 10¹⁰) | 8,24 (1,74 × 10⁸) |
| 12 | 0,98 | Y⁴⁻ (98 %) | 10,69 | 8,68 |

Skoog Contoh 15-2: α₄(pH 10) = 0,35; Gbr. 15-9: K′_CaY = 1,75 × 10¹⁰, K′_MgY = 1,72 × 10⁸ (cocok).
pH minimum agar K′ ≥ 10⁶: Ca 6,0 · Mg 7,6 · Zn 3,0 · Pb 2,4 · Fe³⁺ 0,5. K′ turun ≈ 1,6 × 10⁴ kali dari pH 10 ke pH 6. K_CaY/K_MgY ≈ 102.

**Titik ekivalen** (50,00 mL M²⁺ 0,00500 M + EDTA 0,0100 M, pH 10): pCa_ek = 6,36; pMg_ek = 5,36.
**EBT** (K₁ = 5 × 10⁻⁷, K₂ = 2,8 × 10⁻¹²): pKa 6,30 dan 11,55; pada pH 10: 97 % HIn²⁻ (biru). Rentang transisi pada pH 10 (Skoog Contoh 15-6): pMg 5,4 ± 1; pCa 3,8 ± 1. Kf CaIn⁻/MgIn⁻ = 2,5 × 10⁵ / 1,0 × 10⁷ = 1/40.
**Mg(OH)₂** (Ksp 7,1 × 10⁻¹²): pH 12 → [Mg²⁺] maks 7,1 × 10⁻⁸ M = 0,0017 mg/L.

**Contoh titrasi kesadahan** (angka rekaan yang konsisten; 50,00 mL sampel, EDTA 0,01000 M)

| Titrasi | V EDTA (mL) | mmol | mmol/L | mg/L CaCO₃ | ion |
|---|---|---|---|---|---|
| Total, pH 10, EBT | 12,00 | 0,1200 | 2,400 | 240,2 | — |
| Ca, pH 12–13, kalkon/murexida | 9,00 | 0,0900 | 1,800 | 180,2 | Ca²⁺ 72,1 mg/L |
| Mg (selisih) | 3,00 | 0,0300 | 0,600 | 60,1 | Mg²⁺ 14,6 mg/L |
| Total sesudah didih & saring | 7,00 | 0,0700 | 1,400 | 140,1 | — |
| Hilang (kesadahan sementara) | 5,00 | 0,0500 | 1,000 | 100,1 | = 100,1 mg CaCO₃ per L |

Ketel 1,5 L/hari × 365 hari × 0,1001 g/L ≈ 54,8 g kerak/tahun (anggapan: seluruh kesadahan sementara mengendap di ketel). Satu tetes 0,05 mL ≙ 1,0 mg/L CaCO₃. 240 mg/L ≈ 14,0 grain/galon. Kelas: 240 → sangat sadah; 140 → sadah.
Pertukaran CaY²⁻ + Pb²⁺: K = 10^(18,04 − 10,70) = 2,2 × 10⁷.
Massa Na₂H₂Y·2H₂O (372,24 g/mol) untuk 1 L 0,01000 M: 3,722 g (Skoog 37E-2: ≈ 3,8 g, dikoreksi 0,3 % air berlebih).

## Catatan produksi

- **Kurva**: kurva pCa (Gbr. 15-10, pH 6/8/10/12) dan pMg/pCa pH 10 (Gbr. 15-9) dihitung ulang dengan K′ dari `hitung.py` (perlu fungsi kurva tambahan saat produksi: sebelum ekivalen pM dari stoikiometri, sesudah ekivalen [M] = c_MY/(K′·c_EDTA berlebih)); jangan digambar tangan.
- **Warna EBT**: fraksi H₂In⁻/HIn²⁻/In³⁻ dan fraksi MgIn⁻ dihitung per frame; merah anggur ≠ merah muda — pakai rona anggur (#8E2C48-ish) agar beda dengan warna fenolftalein Ep. 3.
- **Sangkar EDTA 3D**: oktahedral, N di posisi cis; rotasi pelan; jangan gambar enam lengan menempel ke ion yang sama bila ion kecil seperti Mg sebenarnya sering terhidrasi (cukup sebut "satu kompleks", tidak perlu klaim semua kompleks heksakoordinat sempurna).
- **Angka rekaan**: contoh titrasi 240/140 mg/L adalah angka contoh, bukan data PDAM tertentu — beri label kecil "contoh" di layar. Jangan sebut nama kota.
- **Regulasi**: sebelum narasi direkam, buka Lampiran Tabel 2 (parameter khusus) Permenkes 2/2023 untuk memastikan kesadahan juga tidak ada di sana; kalau ada, ganti kalimat adegan `kelas`.
- **Teks TTS**: "EDTA" dieja "e-de-te-a"; "E385" → "E tiga delapan lima"; "EBT" → "e-be-te"; "CaY²⁻" tidak diucapkan (kartu saja); "Permenkes" diucapkan utuh.
- **Kaitan seri**: rujuk Ep. 3 (indikator = asam lemah, pKa ± 1) di adegan `ebt`; Ep. 4 (penyangga) di adegan `ph10`; teaser Ep. 6 (Mohr) di `penutup`; Ep. 9 (elektrode ion selektif Ca²⁺) bisa disebut sekilas bila waktu tersisa.
