# Naskah riset — Seni Mengukur #1 "Berapa Asam Cukamu?"

Draf video berikutnya (belum dibangun). Seri **Kimia Analitik "Seni Mengukur"**, episode 1, S1 Kimia UNESA, ≈ 12 menit, 19 adegan.
Sumber materi: Skoog, West, Holler & Crouch, *Fundamentals of Analytical Chemistry* ed. 10 (`materi/Analytical Chemistry.pdf`: bab 3–4, 11–12, 14, 36–37) dan Kuna (2023) (`materi/Kuna (2023).pdf`). Rencana seri: `riset/RENCANA-SERI-BERIKUTNYA.md`. Semua angka dicek di `AUDIT.md` (folder ini); semua hitungan dibuat ulang dengan Python (lihat bagian **Hitungan**).

Catatan cakupan: episode ini membahas *alur analisis, stoikiometri titrasi, dan jenis galat*. Kurva titrasi lengkap & pemilihan indikator disimpan untuk ep. 3 ("Satu Tetes yang Menentukan"), statistik (rerata, simpangan baku, uji t) untuk ep. 2 ("Lonceng Galat"). Di sini fenolftalein cukup dijelaskan sebagai "berubah merah muda di pH ≈ 8–10, tempat titik ekivalen cuka berada".

## Pilihan judul

1. **"Berapa Asam Cukamu?"** — Pengantar Kimia Analitik & Titrasi Asam–Basa ← *dipilih*
2. "Dua Mililiter yang Mengadili"
3. "Selisih Setengah Persen"

Alasan memilih (1): pertanyaan langsung ke penonton, benda dapur yang semua orang punya, dan sama dengan rencana seri. Judul (2) dipakai sebagai kalimat kunci di adegan `vonis` (selisih 5,4 % vs 5,9 % = ≈ 2 mL titran).

## Benang merah

**Misteri:** Sebuah penelitian (Kuna, 2023) menitrasi cuka yang dijual di pasar. Labelnya menulis **5,4 %**. Hasil titrasi: **5,9 %**. Siapa yang benar — pabrik, atau analis? Dan seberapa yakin kita pada angka mana pun?
**Dibuka:** adegan `hook`. **Petunjuk:** `rencana` (selisih 0,5 % = ≈ 2 mL di buret), `sistematik` & `co2` (NaOH yang menyerap CO₂ membuat hasil *terlalu tinggi*), `toleransi`. **Dipecahkan:** `vonis` — ketidakpastian alat gelas hanya ≈ 0,3 % relatif (≈ ±0,02 % kadar), sedangkan selisihnya ≈ 9 % relatif: terlalu besar untuk disebut kebetulan alat. Tetapi galat sistematik sebesar itu juga mungkin (contoh Skoog: NaOH yang menyerap CO₂ membuat cuka 5,4 % terbaca ≈ 5,9 %). Jadi "siapa yang benar" ditentukan oleh NaOH yang distandardisasi dengan standar primer tepat sebelum dipakai, plus titrasi ulang — yang tidak tercantum di laporan itu. **Kembali lagi:** `penutup` — botol cuka di rak warung, kini dengan "pita ketidakpastian"; jembatan ke ep. 2: tiga titrasi ulang memberi 5,88 / 5,91 / 5,95 — lalu bagaimana?

## Pembagian bagian

- **Bagian 1 — Pertanyaan yang tepat** (`hook` → `judul` → `analitik` → `alur` → `sampel`)
- **Bagian 2 — Menghitung asam** (`reaksi` → `stoikiometri` → `rencana` → `standar` → `titrasi` → `hitung`)
- **Bagian 3 — Seberapa yakin?** (`akurasi` → `sistematik` → `co2` → `meniskus` → `toleransi` → `vonis` → `dunia` → `penutup`)

## Daftar adegan

Gaya usulan seri: "Meja Analis" (grafit gelap + kisi kertas milimeter samar, alat gelas bergaris tipis bercahaya). Kode warna: titran/basa = biru, analit/asam = merah muda, galat sistematik = jingga, galat acak = ungu, nilai benar = emas, data = titik putih.

| # | id | Judul | Ide visual (bergerak sesuai kimia) |
|---|---|---|---|
| 1 | `hook` | Dua angka, satu botol | Rak warung: botol cuka, label "5,4 %" berdenyut. Kertas hasil lab meluncur masuk: "5,9 %". Dua angka berhadapan di atas jungkat-jungkit yang belum memutuskan; tanda tanya berayun. Pil sumber "Kuna (2023), *Dalton* 6(2)". |
| 2 | `judul` | Judul | Botol berubah jadi garis tinta bercahaya; dari mulut botol jatuh tetesan yang menulis "Berapa Asam Cukamu?"; kapsul logo S + "Explore Science with Yayan"; pita "Seni Mengukur · 1". |
| 3 | `analitik` | "Apa?" dan "berapa?" | Dua pintu: kaca pembesar (kualitatif — ion asetat diberi label "ada") dan neraca (kuantitatif — tumpukan molekul dihitung, penghitung angka berputar). Kata "analit" menempel ke molekul CH₃COOH. |
| 4 | `alur` | Enam langkah analisis | Diagram alir (Skoog bab 1): pilih metode → ambil sampel → siapkan → ukur → hitung → nilai keandalan. Satu tetes cuka (merah muda) mengalir melewati kotak; tiap kotak menyala bergiliran, panah balik dari "nilai keandalan" ke awal. |
| 5 | `sampel` | Satu botol mewakili ribuan? | Ban berjalan pabrik dengan ratusan botol bergerak; lengan memetik botol acak (berkedip emas). Skoog: cuka terbuka kehilangan keasaman → botol dengan tutup terbuka sedikit memudar. |
| 6 | `reaksi` | Proton berpindah tangan | CH₃COOH + OH⁻ (rumus struktur 2D): H⁺ (titik merah muda) melompat ke OH⁻ (biru) menjadi H₂O; asetat & Na⁺ tinggal. Diulang beberapa kali dengan pasangan baru. **Kartu reaksi.** |
| 7 | `stoikiometri` | Satu lawan satu | Batang mol: batang asam (merah muda) dan batang NaOH (biru) tumbuh dari buret; tiap tetes memendekkan batang asam sama banyak; habis bersamaan di titik ekivalen. **Kartu** n = C·V, lalu **kartu** n asam = n NaOH. |
| 8 | `rencana` | Rencana titrasi | Pipet 10 mL mengambil cuka → labu ukur 100 mL (meniskus naik ke garis tanda, larutan memudar ×10) → pipet 25 mL ke erlenmeyer. Buret dua bayangan: 22,48 mL (jika 5,4 %) dan 24,56 mL (jika 5,9 %); celah 2,08 mL disorot dan diisi ≈ 42 butir tetes. |
| 9 | `standar` | NaOH tidak bisa dipercaya begitu saja | Butir NaOH di cawan basah menyerap uap air (membesar, mengilap) dan menangkap molekul CO₂ yang melayang. Lalu kristal KHP di neraca analitik: angka 0,7654 g stabil; botol berlabel "standar primer, kemurnian 99,99 %". Titrasi KHP → 37,48 mL → kartu C NaOH. |
| 10 | `titrasi` | Titrasi | Buret meneteskan NaOH; tiap tetes membuat semburat merah muda yang hilang saat diaduk (makin lambat hilang mendekati akhir). Meter pH kecil di pojok naik pelan, melonjak dekat 24,5 mL; fenolftalein mulai merah muda saat pH melewati ≈ 8 (titik ekivalen ≈ 8,7). Warna bertahan 30 detik → angka buret dibaca. |
| 11 | `hitung` | Dari mililiter ke persen | Rantai kartu yang mengalir: 24,56 mL → 2,456 mmol → 147,5 mg → ×4 → 590,0 mg dalam 10,00 mL → 5,90 %. Angka di setiap kartu "jatuh" ke kartu berikutnya. **Kartu % (b/v).** |
| 12 | `akurasi` | Akurasi dan presisi | Papan panah 4 kombinasi; anak panah datang satu per satu (titik putih), pusat = nilai benar emas. Lalu titik-titik pindah ke garis bilangan kadar. **Kartu** galat absolut & relatif. |
| 13 | `sistematik` | Dua jenis galat | Kiri: timbangan pegas yang jarumnya sudah miring sebelum diberi beban — semua titik bergeser bersama ke kanan (jingga). Kanan: titik-titik yang bergetar acak di sekitar pusat (ungu). Label: sistematik → akurasi; acak → presisi. |
| 14 | `co2` | Hantu dari udara | Botol NaOH terbuka: CO₂ masuk, 2 OH⁻ → CO₃²⁻. Saat titrasi dengan fenolftalein, CO₃²⁻ hanya menangkap satu H⁺ → batang "NaOH efektif" memendek 8,7 %. Penghitung hasil cuka bergeser 5,40 → 5,92 % (jingga). |
| 15 | `meniskus` | Mata yang membaca | Buret dekat: mata naik-turun; garis pandang miring membuat bacaan bergeser (paralaks); posisi benar sejajar dasar meniskus. Skala 0,1 mL diperbesar, bacaan ditaksir ke 0,01 mL, "pita" ±0,02 mL. |
| 16 | `toleransi` | Setiap alat punya pita | Pipet 10 mL, labu 100 mL, pipet 25 mL, buret 50 mL kelas A masing-masing diberi pita kabur dengan tebal sebanding toleransinya (±0,02 / ±0,08 / ±0,03 / ±0,05 mL). |
| 17 | `vonis` | Dua mililiter yang mengadili | Pita-pita relatif ditumpuk sebagai sisi-sisi segitiga siku (akar jumlah kuadrat) → ≈ 0,3 %. Garis bilangan: 5,40 dan 5,90 dengan pita ±0,02 — pita tidak bersentuhan. Lalu bayangan jingga "galat sistematik?" menutup celah → tanda kunci: "standardisasi + ulangan". |
| 18 | `dunia` | Di lab sungguhan | Lab QC: deret erlenmeyer, titrator otomatis dengan elektrode, sertifikat bahan acuan; cap "lulus" muncul hanya setelah standardisasi tercatat. |
| 19 | `penutup` | Kembali ke rak warung | Botol cuka di rak lagi, kini dengan pita ketidakpastian. Tiga titik putih (5,88 / 5,91 / 5,95) jatuh ke garis bilangan dan bergetar → lonceng samar tumbuh. Teks "Berikutnya: Lonceng Galat". Outro. |

## Narasi

Konvensi: kalimat pendek, gaya tutur. **[KARTU]** = rumus yang tampil di kartu `Formula` (≥ 56 px, satu kartu per momen). Angka di narasi ditulis seperti diucapkan; teks TTS dibuat terpisah nanti (`src/tts.ts`). Koma desimal; "≈" untuk perkiraan, "±" hanya untuk ketidakpastian/toleransi.

### 1 · `hook` — Dua angka, satu botol

Di rak warung mana pun, ada botol cuka.
Di labelnya tertulis kadar asam: lima koma empat persen.
Tahun dua ribu dua puluh tiga, seorang peneliti membeli cuka seperti ini di pasar, lalu mengukurnya sendiri di laboratorium.
Hasilnya? Lima koma sembilan persen.
Selisihnya hanya setengah persen. Kelihatannya kecil. Tapi pertanyaannya besar.
Siapa yang benar? Pabrik yang menulis label, atau analis yang menitrasi?
Dan yang lebih penting: seberapa yakin kita pada angka mana pun?

### 2 · `judul` — Judul

*(Satu baris)* Berapa asam cukamu? Seni Mengukur, episode satu.

### 3 · `analitik` — "Apa?" dan "berapa?"

Kimia analitik menjawab dua pertanyaan.
Pertama: apa isinya? Itu analisis kualitatif.
Kedua: berapa banyak? Itu analisis kuantitatif.
Zat yang ingin kita ukur disebut analit. Di sini, analitnya asam asetat.
Bahwa cuka mengandung asam asetat, semua orang sudah tahu. Yang dipertanyakan adalah: berapa banyak.
Pertanyaan "berapa" ini ada di mana-mana. Berapa gula dalam darah pasien. Berapa timbal dalam air minum. Berapa kadar obat dalam satu tablet.
Di balik setiap angka itu ada analis, ada alat, dan ada keputusan yang bergantung pada angka tersebut.

### 4 · `alur` — Enam langkah analisis

Mengukur tidak dimulai dari alat. Ada alurnya.
Pilih metode. Ambil sampel. Siapkan sampel. Ukur. Hitung.
Dan langkah terakhir, yang paling sering dilupakan: nilai seberapa andal hasilnya.
Tanpa langkah terakhir itu, angka lima koma sembilan hanyalah angka. Belum menjadi hasil analisis.
Untuk cuka, metodenya sudah jelas: titrasi asam–basa. Murah, cepat, dan hanya butuh alat gelas, satu larutan basa, dan setetes indikator.

### 5 · `sampel` — Satu botol mewakili ribuan?

Pabrik cuka mengisi ribuan botol setiap hari. Kita hanya mengukur satu.
Apakah satu botol itu mewakili semuanya? Itulah persoalan pengambilan sampel.
Laboratorium pengawas biasanya memetik beberapa botol secara acak, dari tanggal produksi yang berbeda. Kalau hanya satu botol diukur, kesimpulannya hanya berlaku untuk botol itu.
Penyimpanan juga berpengaruh. Buku Skoog mencatat, keasaman cuka cenderung turun kalau botolnya terbuka ke udara.
Jadi botol yang sama, kalau dibiarkan terbuka berhari-hari, bisa memberi angka yang lebih rendah.

### 6 · `reaksi` — Proton berpindah tangan

Bagaimana cara menghitung asam yang tidak kelihatan? Kita reaksikan dengan basa yang jumlahnya kita ketahui.

**[KARTU]** CH₃COOH + NaOH → CH₃COONa + H₂O

Asam asetat menyerahkan satu proton. Ion hidroksida menangkapnya, dan menjadi air.
Satu molekul asam, satu ion hidroksida. Tidak lebih, tidak kurang.
Perbandingan satu banding satu inilah kunci seluruh perhitungan.
Asam asetat adalah asam lemah. Di dalam cuka, sebagian besar molekulnya masih utuh. Tapi begitu ion hidroksida datang, molekul-molekul itu terus menyerahkan protonnya sampai habis. Karena itu titrasi mengukur semua asam asetat, bukan hanya yang sudah terurai.

### 7 · `stoikiometri` — Satu lawan satu

Basa kita teteskan dari buret, dan yang kita baca adalah volumenya.
Untuk mengubah volume menjadi jumlah zat, kita kalikan dengan konsentrasi.

**[KARTU]** n = C · V

Mol sama dengan konsentrasi kali volume. Kalau volumenya dalam mililiter, hasilnya dalam milimol.
Setiap tetes basa menghabiskan sejumlah asam yang sama.
Saat asamnya tepat habis, kita sampai di titik ekivalen.

**[KARTU]** n asam = n NaOH

Di titik itu, mol asam sama dengan mol basa yang sudah diteteskan. Kalau volume basa diketahui, jumlah asam juga diketahui.

### 8 · `rencana` — Rencana titrasi

Cuka terlalu pekat untuk langsung dititrasi. Jadi kita encerkan dulu.
Sepuluh mililiter cuka dipipet ke labu ukur seratus mililiter, lalu ditambah air sampai garis tanda. Sekarang sepuluh kali lebih encer.
Dari labu itu, dua puluh lima mililiter dipipet ke erlenmeyer. Isinya setara dua koma lima mililiter cuka asli.
Titrannya natrium hidroksida nol koma satu molar.
Kalau label benar, lima koma empat persen, buret akan habis sekitar dua puluh dua koma lima mililiter.
Kalau lima koma sembilan persen, sekitar dua puluh empat koma enam mililiter.
Selisihnya kira-kira dua mililiter. Kira-kira empat puluh tetes.
Ingat angka ini. Dua mililiter inilah yang nanti mengadili.

### 9 · `standar` — NaOH tidak bisa dipercaya begitu saja

Tapi tunggu. Dari mana kita tahu konsentrasi NaOH benar-benar nol koma satu molar?
Padatan natrium hidroksida menyerap uap air dari udara. Ia juga bereaksi dengan karbon dioksida.
Jadi menimbang NaOH, lalu melarutkannya, tidak memberi konsentrasi yang pasti.
NaOH harus distandardisasi: dititrasi dengan zat yang kemurniannya terjamin. Namanya standar primer.
Yang paling populer adalah kalium hidrogen ftalat, disingkat KHP. Kristalnya tidak menyerap air, dan massa molarnya besar, dua ratus empat koma dua gram per mol.
Massa molar besar itu menguntungkan. Untuk jumlah mol yang sama, kita menimbang lebih banyak gram, sehingga galat timbangan menjadi relatif kecil.
Seperti asam asetat, KHP juga hanya punya satu proton yang bereaksi dengan basa. Jadi perbandingannya juga satu banding satu.
Lembaga metrologi Amerika, NIST, bahkan menjual KHP bersertifikat dengan kemurnian sembilan puluh sembilan koma sembilan sembilan persen.
Kita timbang nol koma tujuh enam lima empat gram KHP, lalu titrasi. NaOH yang terpakai: tiga puluh tujuh koma empat delapan mililiter.

**[KARTU]** C NaOH = (0,7654 g ÷ 204,22 g/mol) ÷ 37,48 mL = 3,748 mmol ÷ 37,48 mL = 0,1000 M

Sekarang konsentrasinya bukan lagi tebakan. Nol koma satu nol nol nol molar.

### 10 · `titrasi` — Titrasi

Ke dalam erlenmeyer kita tambahkan dua tetes fenolftalein. Larutannya tetap bening.
Basa mulai menetes. Di tempat tetesan jatuh, muncul semburat merah muda, lalu hilang lagi saat diaduk.
Makin dekat ke akhir, warna itu makin lama hilangnya. Sekarang kita meneteskan pelan-pelan, setetes demi setetes.
Kenapa fenolftalein? Ia berubah warna di sekitar pH delapan sampai sepuluh.
Dan titik ekivalen cuka memang tidak di pH tujuh. Di titik itu tersisa ion asetat yang bersifat basa lemah, sehingga pH-nya sekitar delapan koma tujuh.
Akhirnya, satu tetes membuat merah muda bertahan lebih dari tiga puluh detik. Inilah titik akhir.
Titik akhir adalah yang kita lihat. Titik ekivalen adalah yang diramalkan stoikiometri. Pada titrasi yang baik, keduanya hampir berimpit.
Buret terbaca: dua puluh empat koma lima enam mililiter.

### 11 · `hitung` — Dari mililiter ke persen

Sekarang kita hitung, langkah demi langkah.
Mol NaOH: nol koma satu kali dua puluh empat koma lima enam, sama dengan dua koma empat lima enam milimol.
Karena satu banding satu, asam asetat di erlenmeyer juga dua koma empat lima enam milimol.
Dikali massa molar enam puluh koma nol lima: seratus empat puluh tujuh koma lima miligram.
Itu baru seperempat isi labu. Jadi seluruh labu berisi lima ratus sembilan puluh miligram, yang semuanya berasal dari sepuluh mililiter cuka.

**[KARTU]** % (b/v) = (0,1000 M × 24,56 mL × 60,05 g/mol × 100/25) ÷ 10,00 mL × 100 % = 0,5900 g ÷ 10,00 mL × 100 % = 5,90 %

Lima koma sembilan gram asam asetat per seratus mililiter cuka. Itulah arti lima koma sembilan persen, persen berat per volume.
Hitungannya sederhana. Pertanyaan yang sulit justru: seberapa bisa dipercaya?

### 12 · `akurasi` — Akurasi dan presisi

Dua kata ini sering tertukar.
Akurasi adalah kedekatan hasil dengan nilai yang benar.
Presisi adalah kedekatan hasil-hasil yang diukur dengan cara yang sama satu sama lain.
Bayangkan papan panah. Anak panah bisa mengumpul rapat, tapi jauh dari pusat. Itu presisi tinggi, akurasi rendah.
Presisi mudah diperiksa: cukup ulangi pengukuran, lalu lihat seberapa jauh hasilnya tersebar. Akurasi lebih sulit, karena nilai yang benar biasanya tidak kita ketahui.
Akurasi dinyatakan dengan galat: hasil dikurangi nilai benar.

**[KARTU]** E = x − x_benar  E_r = E ÷ x_benar × 100 %

Kalau labelnya kita anggap nilai benar, galatnya plus nol koma lima persen kadar. Relatif terhadap lima koma empat, itu sekitar sembilan persen.
Tandanya positif. Hasilnya terlalu tinggi.

### 13 · `sistematik` — Dua jenis galat

Galat datang dalam dua rupa.
Galat acak membuat hasil tersebar ke dua arah, kadang lebih, kadang kurang. Ia menentukan presisi. Mengulang pengukuran membantu menjinakkannya.
Galat sistematik punya arah dan penyebab tertentu. Ia menggeser semua hasil ke arah yang sama, seperti timbangan yang jarumnya sudah miring sebelum diberi beban.
Galat sistematik merusak akurasi. Dan mengulang seratus kali pun tidak akan menghilangkannya.
Sumbernya bisa alat yang belum dikalibrasi, metode yang kurang tepat, atau kebiasaan analisnya sendiri.
Contoh galat alat: pipet yang ujungnya sedikit patah. Contoh galat metode: indikator yang berubah warna terlalu cepat atau terlalu lambat. Contoh galat personal: analis yang selalu menunggu warna merah muda sedikit lebih tua.
Ada juga galat kasar, misalnya salah menulis angka sembilan menjadi empat. Itu bukan galat acak, tapi kecerobohan.

### 14 · `co2` — Hantu dari udara

Ini contoh galat sistematik yang sangat nyata di titrasi cuka.
Larutan NaOH yang dibiarkan terbuka menangkap karbon dioksida dari udara. Dua ion hidroksida berubah menjadi satu ion karbonat.
Dengan fenolftalein, satu ion karbonat hanya menangkap satu proton sebelum warna berubah. Jadi kekuatan basanya berkurang.
Buku Skoog memberi contoh. Larutan NaOH nol koma nol lima satu dua molar menyerap sedikit karbon dioksida. Konsentrasi efektifnya turun sekitar delapan koma tujuh persen.
Kalau analis tetap memakai angka konsentrasi lama, ia butuh lebih banyak mililiter untuk cuka yang sama. Hasilnya jadi terlalu tinggi.
Dengan galat sebesar itu, cuka yang sebenarnya lima koma empat persen akan terbaca sekitar lima koma sembilan.
Bukan berarti itu yang terjadi di penelitian tadi. Tapi ini menunjukkan betapa mudahnya angka menyimpang setengah persen.

### 15 · `meniskus` — Mata yang membaca

Ada juga galat dari mata.
Permukaan larutan di buret melengkung. Lengkungan ini disebut meniskus, dan yang dibaca adalah dasarnya.
Kalau mata terlalu tinggi atau terlalu rendah, bacaan bergeser. Itu paralaks.
Garis skala buret lima puluh mililiter berjarak nol koma satu mililiter. Analis yang terlatih menaksir sampai nol koma nol satu, dengan ketidakpastian sekitar nol koma nol dua mililiter.
Dan setiap titrasi butuh dua bacaan, awal dan akhir. Jadi ketidakpastian volume hampir nol koma nol tiga mililiter.
Untuk volume dua puluh empat mililiter, itu hanya sekitar satu per sembilan ratus. Kecil, tapi tetap dihitung.

### 16 · `toleransi` — Setiap alat punya pita

Alat gelas pun tidak sempurna. Alat kelas A punya batas toleransi resmi.
Pipet sepuluh mililiter: plus-minus nol koma nol dua mililiter.
Labu ukur seratus mililiter: plus-minus nol koma nol delapan.
Pipet dua puluh lima mililiter: plus-minus nol koma nol tiga.
Buret lima puluh mililiter: plus-minus nol koma nol lima.
Bayangkan setiap alat membawa pita kabur. Pita itu ikut terbawa ke hasil akhir.

### 17 · `vonis` — Dua mililiter yang mengadili

Karena hasil kita diperoleh dari perkalian dan pembagian, yang dijumlahkan adalah ketidakpastian relatifnya. Bukan dijumlah biasa, tapi dikuadratkan, dijumlahkan, lalu diakarkan.

**[KARTU]** u_r(%) ≈ √(Σ u_r,i²) ≈ √(0,20² + 0,08² + 0,12² + 0,12² + 0,08²) ≈ 0,3 %

Pipet sepuluh menyumbang nol koma dua persen. Labu, pipet dua puluh lima, buret, dan konsentrasi NaOH masing-masing di bawah nol koma dua persen.
Totalnya hanya sekitar nol koma tiga persen relatif. Untuk kadar lima koma sembilan, itu sekitar plus-minus nol koma nol dua persen.
Sekarang bandingkan. Selisih label dan hasil titrasi: nol koma lima persen. Lebih dari dua puluh kali lebih besar.
Di buret, selisih itu dua mililiter. Empat puluh tetes. Mata dan alat gelas tidak mungkin keliru sebanyak itu secara kebetulan.
Jadi vonis pertama: perbedaannya nyata. Bukan sekadar pita kabur alat.
Tapi vonis kedua lebih jujur. Perbedaan nyata bisa datang dari botolnya, atau dari galat sistematik seperti NaOH tadi.
Untuk memutuskan, kita perlu NaOH yang distandardisasi tepat sebelum dipakai, dan titrasi yang diulang.
Laporan penelitian itu tidak mencantumkan konsentrasi NaOH hasil standardisasinya, dan cuka hanya dititrasi sekali.
Jadi jawaban paling jujur: alat kita cukup tajam untuk melihat selisih itu. Tapi untuk menunjuk siapa yang salah, datanya belum cukup.

### 18 · `dunia` — Di lab sungguhan

Di laboratorium pengendalian mutu, pertanyaan seperti ini muncul setiap hari.
Larutan standar dicatat kapan distandardisasi. Bahan acuan bersertifikat dipakai untuk memeriksa metode. Setiap sampel dititrasi lebih dari sekali.
Di industri, titrator otomatis membaca titik akhir dengan elektrode pH, bukan dengan mata. Hasilnya tidak bergantung pada siapa yang sedang bertugas.
Dan setiap laboratorium yang terakreditasi harus bisa menunjukkan rantai ketelusuran: dari hasil sampel, ke larutan standar, ke bahan acuan bersertifikat, sampai ke satuan internasional.
Di Indonesia, cuka makan juga punya Standar Nasional Indonesia. Label hanya bermakna kalau ada pengukuran yang bisa dipertanggungjawabkan di belakangnya.

### 19 · `penutup` — Kembali ke rak warung

Kembali ke botol cuka di rak warung.
Lima koma empat, atau lima koma sembilan? Sekarang kita tahu, angka saja tidak cukup. Setiap hasil ukur harus membawa pitanya sendiri.
Tapi bayangkan kita mengulang titrasi tiga kali, dan mendapat lima koma delapan delapan, lima koma sembilan satu, dan lima koma sembilan lima.
Angka mana yang kita laporkan? Seberapa lebar pitanya? Dan bolehkah satu angka yang aneh dibuang?
Jawabannya datang dari seorang ahli kimia di pabrik bir, yang menulis dengan nama samaran "Student".
Itu cerita episode berikutnya: Lonceng Galat. Sampai jumpa.

## Hitungan

Dibuat ulang dengan Python (berat atom standar CIAAW yang disederhanakan: H 1,008; C 12,011; O 15,999; K 39,098).

| Besaran | Hitungan | Hasil |
|---|---|---|
| M CH₃COOH | 2(12,011) + 4(1,008) + 2(15,999) | 60,052 g/mol (narasi 60,05) |
| M KHP (C₈H₅KO₄) | 8(12,011) + 5(1,008) + 39,098 + 4(15,999) | 204,222 g/mol (narasi 204,2) |
| Standardisasi | 0,7654 g ÷ 204,222 = 3,7479 mmol; ÷ 37,48 mL | 0,09999 ≈ 0,1000 M (dengan faktor kemurnian 0,999934: 0,09999 M — tak berubah pada 4 angka penting) |
| Cuka setara dalam alikuot | 10,00 mL × 25,00/100,0 | 2,500 mL |
| 5,4 % (b/v) | 54 g/L ÷ 60,052 = 0,8992 M; × 2,500 mL = 2,2481 mmol; ÷ 0,1000 M | 22,48 mL |
| 5,9 % (b/v) | 59 g/L ÷ 60,052 = 0,9825 M; × 2,500 mL = 2,4562 mmol; ÷ 0,1000 M | 24,56 mL |
| Selisih | 24,56 − 22,48 | 2,08 mL ≈ 42 tetes @ 0,05 mL ("kira-kira empat puluh") |
| Hitungan contoh | 0,1000 × 24,56 = 2,456 mmol; × 60,052 = 147,49 mg; × 4 = 589,95 mg; ÷ 10,00 mL | 5,8995 ≈ 5,90 % (b/v) |
| Galat relatif label vs hasil | (5,9 − 5,4)/5,4 | +9,26 % ≈ 9 % |
| pH titik ekivalen (5,9 %) | [OAc⁻] = 2,4562 mmol ÷ (25,00 + 24,56) mL = 0,0496 M; Kb = 1,00×10⁻¹⁴/1,75×10⁻⁵; [OH⁻] = √(Kb·c) | pH 8,73 ≈ 8,7 (5,4 %: 8,72) |
| Satu tetes (0,05 mL) lewat ekivalen | OH⁻ berlebih 0,005 mmol ÷ 49,6 mL | pH ≈ 10,0 (di dalam rentang fenolftalein; dipakai visual, tidak diucapkan) |
| Ketidakpastian relatif (gaya contoh Skoog 4-8) | buret 2 bacaan √(0,02² + 0,02²) = 0,028 mL → 0,028/24,56 = 0,115 %; pipet 25: 0,03/25 = 0,12 %; labu 100: 0,08 %; pipet 10: 0,02/10 = 0,20 %; C NaOH: neraca √2·0,0001/0,7654 = 0,018 % & buret 0,028/37,48 = 0,075 % → 0,078 % | √(Σ²) = 0,283 % ≈ 0,3 %; × 5,90 = ±0,017 ≈ ±0,02 % (b/v). Dengan galat titik akhir setengah tetes (0,025 mL): 0,30 % |
| Rasio selisih / ketidakpastian | 0,5 ÷ 0,017 | ≈ 30 (narasi aman memakai ±0,02 dibulatkan → 0,5/0,02 = 25; kalimat "lebih dari dua puluh kali" = batas bawah yang aman) |
| Galat CO₂ (Skoog contoh 14-2) | CO₂ 0,1962 g ÷ 44,01 = 4,458 mmol; C efektif = 0,05118 − 0,004458 = 0,04672 M | −8,71 %; cuka 5,40 % terbaca 5,40 × 0,05118/0,04672 = 5,92 % |
| Kuna: konsentrasi NaOH tersirat | 5,9 % → 0,9825 M × 1 mL ÷ 7 mL | ≈ 0,140 M (tidak tercantum di makalah; hanya untuk AUDIT) |
| Skema Kuna (1 mL cuka, 7 mL NaOH) | √((0,028/7)² + (0,006/1)²) | ≈ 0,7 % relatif — tetap ≪ 9 %, vonis tidak berubah |

**Ringkasan:** 19 adegan; kartu rumus/reaksi: 7 + 1 opsional (reaksi, n = C·V, n asam = n NaOH, C NaOH, % (b/v), galat absolut/relatif, perambatan ketidakpastian; reaksi CO₂ opsional di `co2`). Panjang narasi ≈ 1800 kata (tanpa judul adegan & kartu) → dengan jeda ≈ 12 menit.

## Catatan untuk tahap produksi

- **Sikap terhadap Kuna (2023):** jangan menuduh. Narasi hanya menyatakan yang tercantum: label 5,4 %, hasil 5,9 %, konsentrasi NaOH hasil standardisasi tidak dilaporkan, sampel (1 mL cuka) dititrasi sekali. Tabel standardisasi di makalah (titik awal 43 mL; titik akhir 20 / 6,5 / 15 mL → volume terpakai 23 / 36,5 / 28 mL) tidak dibahas di video agar tidak menjadi kritik pribadi; boleh dipakai di ep. 2 hanya sebagai data anonim bila perlu.
- Makalah memakai 1 mL fenolftalein untuk 1 mL cuka (jauh lebih banyak dari "2 tetes" di Skoog). Indikator berlebih bisa ikut bereaksi (fakta keliru no. 10 di rencana) — tidak dibahas di ep. 1, cocok untuk ep. 3.
- `hitung`: angka contoh (24,56 mL, 0,7654 g, 37,48 mL) adalah **data rekaan yang konsisten**, bukan data Kuna; beri label kecil "contoh hitungan" di layar.
- `rencana`: Skoog §37C-9 memakai 25,00 mL cuka → 250 mL → alikuot 50,00 mL (setara 5 mL cuka → ≈ 45–49 mL NaOH 0,1 M, hampir memenuhi buret 50 mL). Naskah memakai 10 → 100 → 25 mL agar titran ≈ 22–25 mL; sebutkan di AUDIT bahwa ini modifikasi.
- `toleransi`/`vonis`: toleransi kelas A diperlakukan seperti ketidakpastian standar (penyederhanaan, sama gaya Skoog contoh 4-8); tulis "≈ 0,3 %" bukan angka tepat.
- `co2`: arah galat penting — CO₂ yang terserap **setelah** standardisasi menurunkan C efektif → volume lebih banyak → hasil terlalu tinggi. CO₂ yang sudah ada **sebelum** standardisasi (dengan fenolftalein juga) sebagian besar saling meniadakan. Jangan disederhanakan menjadi "CO₂ selalu membuat hasil tinggi".
- `standar`: ucapan "sembilan puluh sembilan koma sembilan sembilan persen" = pembulatan aman dari 99,9934 % (kartu boleh menulis 99,9934 % ± 0,0076 %). Sertifikat menegaskan SRM 84L untuk asidimetri saja, bukan standar pH.
- `dunia`: nomor & batas SNI tidak diucapkan (belum terverifikasi, lihat AUDIT ⚠).
- `titrasi`: fenolftalein memudar lagi pada pH sangat tinggi; jangan katakan "makin basa makin merah".
- Teks TTS: "CH₃COOH" → "asam asetat"; "KHP" → "ka-ha-pe"; "NIST" → "nist"; "M" → "molar"; "b/v" → "berat per volume".
