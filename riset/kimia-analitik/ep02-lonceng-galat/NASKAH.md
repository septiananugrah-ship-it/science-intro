# Naskah riset — Seni Mengukur #2 "Lonceng Galat" (Kimia Analitik: statistik pengukuran)

Draf untuk video berikutnya (belum dibangun). S1 Kimia UNESA, ±12 menit, 21 adegan. Seri **"Seni Mengukur"** episode 2 (sesudah ep. 1 "Berapa Asam Cukamu?", sebelum ep. 3 "Satu Tetes yang Menentukan").
Sumber materi: Skoog, West, Holler & Crouch, *Fundamentals of Analytical Chemistry* ed. 10 (`materi/Analytical Chemistry.pdf`) bab 3 (presisi & akurasi), 4 (galat acak), 5 (selang kepercayaan, uji t, uji Q), 6E (kartu kendali); Darwish dkk. (2026) (`materi/Darwish et al. (2026).pdf`). Angka dicek di `AUDIT.md` (folder ini). Semua hitungan contoh dibuat ulang dengan Python (lihat bagian **Hitungan contoh**).

Catatan cakupan: akurasi/presisi dan jenis galat sudah diperkenalkan di ep. 1, jadi di sini hanya diulang singkat (papan panah) lalu langsung ke *mengukur* sebaran. Uji F, ANOVA, perambatan galat, dan kalibrasi/regresi tidak dibahas (perambatan ringkas sudah di ep. 1; kalibrasi di ep. 10).

## Pilihan judul

1. **"Lonceng Galat"** — Statistik untuk Setiap Pengukuran ← *dipilih*
2. "Rahasia Pabrik Bir" — Cara Percaya pada Tiga Data
3. "Enam Angka untuk Satu Larutan"

Alasan memilih (1): sesuai rencana seri, singkat, dan langsung menunjuk visual inti (bola-bola galat acak yang menumpuk jadi lonceng). Judul (2) dipakai sebagai kail adegan `gosset`; judul (3) menjadi kalimat pembuka `hook`.

## Benang merah

**Misteri:** Darwish dkk. (2026) melaporkan enam titrasi asli dari dua kelompok mahasiswa: larutan NaOH yang sama, dititrasi dengan HCl 0,1000 M yang sama, buret dibaca sampai 0,01 mL (≈ 0,1 % dari volume 10 mL). Hasilnya tetap menyebar dari 0,0996 sampai 0,1081 M (rentang ≈ 8 % dari rata-rata). Tiga pertanyaan: dari mana sebaran itu? Berapa data yang perlu sebelum kita boleh percaya? Dan apakah rata-rata 0,104 M berarti "salah"?
**Dibuka:** adegan `hook`. **Petunjuk:** `galton` (banyak gangguan kecil → lonceng), `selang` (selang menyempit ∝ t/√n), `geser` (galat sistematik tak hilang dengan mengulang). **Dipecahkan:** `darwish` — sebaran 3,4 % jauh di atas kemampuan buret 0,1 % → sumber terbesar kemungkinan penilaian mata pada titik akhir (kelompok dengan aturan "merah muda pucat bertahan 30 detik" punya %RSD 2,96 % vs 4,30 %); 3 data → selang ±0,011 M, 6 data → ±0,0037 M; rata-rata berbeda nyata dari 0,1000 (t = 2,88 > 2,57) tetapi statistik tidak menunjuk siapa yang salah — NaOH bukan standar primer. **Kembali lagi:** `penutup` — enam angka berbeda = galat acak yang jujur; sebaran terbesar lahir di satu momen (perubahan warna) → jembatan ke ep. 3.

## Pembagian bagian

- **Bagian 1 — Enam angka untuk satu larutan** (hook → judul → akurasi/presisi → tiga jenis galat)
- **Bagian 2 — Mengukur sebaran** (rata-rata & median → simpangan → s & %RSD → papan Galton → Gauss → populasi vs sampel)
- **Bagian 3 — Percaya pada sedikit data** (Gosset "Student" → distribusi t → selang kepercayaan → contoh lengkap → pencilan → uji t → angka penting)
- **Bagian 4 — Kembali ke lab** (galat sistematik → misteri terpecahkan → kartu kendali → penutup & teaser)

## Daftar adegan

| # | id | Judul | Ide visual (bergerak sesuai fisika/statistik) |
|---|---|---|---|
| 1 | `hook` | Enam angka untuk satu larutan | Dua meja praktikum bergaya garis tipis; buret meneteskan NaOH ke erlenmeyer berfenolftalein yang memerah muda. Setiap titrasi selesai → satu titik putih jatuh seperti tetes hujan ke garis bilangan 0,095–0,110 M (posisi = data Darwish, Tabel 1). Kaca pembesar di skala buret: "0,01 mL". Penanda rentang 0,0996 ↔ 0,1081 memanjang; tiga tanda tanya berayun. |
| 2 | `judul` | Judul | Titik-titik dari `hook` berguling ke tengah dan menumpuk menjadi lonceng yang membentuk huruf judul; latar kertas milimeter samar (gaya usulan "Meja Analis"). |
| 3 | `papan` | Akurasi vs presisi | Empat papan panah bergiliran; anak panah datang satu-satu (posisi dari seed tetap): rapat-meleset, tersebar-tepat (rata-rata ditandai salib emas di pusat), rapat-tepat, tersebar-meleset. Pusat = nilai benar (emas). |
| 4 | `galat` | Tiga jenis galat | Tiga panel: (a) sistematik — seluruh awan titik meluncur bersama ke kanan (jingga), ikon buret/indikator/mata; (b) acak — titik bergetar dua arah di sekitar pusat (ungu); (c) kasar — satu titik meloncat jauh, ikon gelas tumpah & angka tertukar. |
| 5 | `ratarata` | Rata-rata dan median | Lima titik cuka (5,8; 5,9; 6,4; 5,9; 6,0 %) jatuh ke penggaris; jungkat-jungkit yang berayun teredam lalu seimbang tepat di 6,0. Titik berbaris urut, yang tengah (5,9) menyala sebagai median. **Kartu rumus** x̄. |
| 6 | `simpangan` | Simpangan tiap data | Garis vertikal dari tiap titik ke garis rata-rata memanjang (−0,2; −0,1; +0,4; −0,1; 0); panah positif dan negatif ditumpuk ujung ke ujung dan saling menghapus menjadi nol. |
| 7 | `sbaku` | Simpangan baku dan %RSD | Tiap simpangan tumbuh menjadi persegi (sisi ∝ simpangan, luas = kuadrat); persegi meluncur dan bergabung (luas 0,22), dibagi 4 (satu persegi memudar abu-abu: "tidak bebas"), lalu diakar menjadi sisi 0,23. **Kartu rumus** s, lalu **kartu** %RSD. |
| 8 | `galton` | Papan Galton | Papan pasak; bola jatuh memantul kiri/kanan (lintasan deterministik dengan seed), histogram tumbuh di dasar; label pasak berganti: "tetes lebih besar", "mata terlambat", "suhu", "meniskus". Sesudah ±400 bola, kurva Gauss tergambar di atas histogram. |
| 9 | `gauss` | Lonceng Gauss | Kurva normal; daerah ±1σ, ±2σ, ±3σ diwarnai bertahap, angka 68,3 % / 95,4 % / 99,7 % muncul berurutan. Lonceng melebar-menyempit (σ berubah) tetapi persentase tetap. |
| 10 | `sampel` | Populasi vs sampel | Kolam berisi ratusan ikan yang berenang (populasi: μ, σ); ember menciduk lima ekor (sampel: x̄, s). Ciduk berulang → x̄ dan s tiap ember berbeda, jarum perkiraan bergoyang. |
| 11 | `gosset` | Rahasia pabrik bir | Ilustrasi Dublin 1899: gerbang pabrik, tong-tong kayu, mikroskop & catatan hitungan ragi. Pena menulis "Student" di kepala naskah; sampul *Biometrika* 1908 "The Probable Error of a Mean" dengan pil sumber. Tanpa wajah realistis (siluet/ikon). |
| 12 | `distt` | Distribusi t | Kurva Gauss (garis tipis) tetap; kurva t untuk db = 1, 2, 4, 10, 30 menggembung lalu mengempis mendekati Gauss; penanda batas 95 % meluncur 12,7 → 4,30 → 2,78 → 2,23 → 2,04 → 1,96. |
| 13 | `selang` | Selang kepercayaan | Rentang emas di sekitar x̄ menyusut saat penghitung n naik 2 → 3 → 4 → 6 → 10 (lebar ∝ t/√n: 8,98 → 2,48 → 1,59 → 1,05 → 0,72); grafik kecil "keuntungan" melandai. **Kartu rumus** CI. |
| 14 | `contoh` | Contoh lengkap: lima titrasi cuka | Kartu hitung bertingkat (satu kartu per langkah, pakai `slot`): x̄ = 6,0 → s = 0,23 → s/√5 = 0,105 → × 2,78 = 0,29 → 5,7 … 6,3 %. Rentang emas tergambar di penggaris di atas lima titik. **Kartu rumus** hasil. |
| 15 | `pencilan` | Uji Q dan Grubbs | Titik 6,4 berkedip dan menjauh; kurung celah (0,4) dan kurung rentang (0,6) tergambar; Q = 0,67 dibandingkan baris tabel n = 5 yang menyala (0,710); stempel "dipertahankan". Lalu G = 1,706 vs 1,715. **Kartu rumus** Q. |
| 16 | `ujit` | Berbeda dari label? | Botol cuka berlabel 5,4 % muncul; titik label di penggaris berada di luar rentang emas 5,7–6,3; kurva t db = 4 dengan t hitung 5,72 jauh di ekor. **Kartu rumus** t. |
| 17 | `angka` | Angka penting | Layar kalkulator berderet "0,234520788" lalu digit-digit tak bermakna rontok satu per satu; laporan akhir "6,0 ± 0,3 % (b/v), CI 95 %, n = 5" tersusun. **Kartu** laporan. |
| 18 | `geser` | Galat sistematik tidak hilang | Lonceng tumbuh makin sempit seiring n (10 → 100) tetapi seluruhnya bergeser dari garis emas "nilai benar"; panah jingga "bias" tetap panjangnya. Ikon buret dibilas air vs dibilas NaOH. |
| 19 | `darwish` | Misteri terpecahkan | Kembali ke enam titik `hook`. Pita kecil "buret 0,1 %" vs pita lebar "s_r 3,4 %". Dua kelompok dipisah warna; erlenmeyer merah muda pucat + jam pasir 30 detik di kelompok 2. Rentang CI n = 3 (lebar) menciut menjadi n = 6 (sempit); garis 0,1000 di luar rentang. Kristal NaOH menyerap H₂O/CO₂ (ikon). |
| 20 | `kendali` | Kartu kendali | Grafik berjalan: garis tengah & batas ±3s; titik harian melompat acak di dalam batas; pada hari ke-17 satu titik melompat keluar (berkedip merah), ikon piring timbangan kotor (contoh Skoog Gbr. 6-16). Peta kecil beberapa lab menerima sampel uji profisiensi yang sama. |
| 21 | `penutup` | Penutup & teaser | Enam titik kembali, menumpuk menjadi lonceng kecil; lalu satu tetes jatuh lambat ke erlenmeyer dan warna menyebar; teks "Berikutnya: Satu Tetes yang Menentukan". Outro. |

## Narasi

Konvensi: kalimat pendek, gaya tutur. **[KARTU]** = rumus yang tampil di kartu `Formula` (≥ 56 px, satu kartu per momen). Angka di narasi ditulis seperti diucapkan; di kartu ditulis dengan koma desimal. Teks TTS dibuat terpisah nanti.

### 1 · `hook` — Enam angka untuk satu larutan

Dua kelompok mahasiswa mendapat tugas yang sama.
Larutan natrium hidroksida yang sama, dititrasi dengan asam klorida nol koma satu molar yang sama.
Buretnya dibaca sampai seperseratus mililiter. Itu ketelitian sekitar nol koma satu persen.
Enam kali titrasi. Enam angka. Tidak ada dua yang persis sama.
Yang terkecil nol koma nol sembilan sembilan enam molar. Yang terbesar nol koma satu nol delapan satu. Selisihnya sekitar delapan persen.
Ini data asli, dilaporkan Darwish dan rekan tahun dua ribu dua puluh enam.
Jadi, berapa sebenarnya konsentrasi NaOH itu? Dari mana sebaran ini datang? Dan kalau kita hanya sempat titrasi tiga kali, seberapa jauh kita boleh percaya?

### 2 · `judul` — Judul

*(Satu baris)* Lonceng Galat. Statistik untuk setiap pengukuran.

### 3 · `papan` — Akurasi vs presisi

Bayangkan papan panah. Pusatnya adalah nilai sebenarnya.
Pemain pertama: anak panahnya rapat, tapi semuanya di pojok. Presisi tinggi, akurasi rendah.
Pemain kedua: anak panahnya tersebar, tapi rata-ratanya pas di tengah. Akurat, tapi tidak presisi.
Pemain ketiga: rapat dan tepat di tengah. Inilah yang kita cari. Pemain keempat? Tersebar dan meleset.
Akurasi adalah kedekatan dengan nilai sebenarnya. Presisi adalah kedekatan hasil satu sama lain.
Jadi ingat: angka yang rapat, dengan desimal yang panjang, belum tentu benar.

### 4 · `galat` — Tiga jenis galat

Setiap pengukuran membawa galat, dan ada tiga jenisnya.
Galat sistematik menggeser semua hasil ke arah yang sama. Sumbernya bisa alat, seperti buret yang kalibrasinya meleset. Bisa metode, seperti indikator yang berubah warna terlalu cepat. Bisa juga pribadi, seperti kebiasaan membaca meniskus dari atas.
Galat acak membuat hasil berloncatan ke dua arah. Kadang lebih, kadang kurang. Ia tidak bisa dihilangkan, tapi bisa diukur.
Lalu galat kasar: salah tulis angka, atau larutan tumpah. Hasilnya menyimpang jauh, dan biasanya muncul sebagai pencilan.
Hari ini fokus kita galat acak: bagaimana mengukurnya, dan bagaimana tetap mengambil keputusan di tengahnya.

### 5 · `ratarata` — Rata-rata dan median

Kita pakai contoh dari episode lalu: titrasi cuka.
Lima kelompok mendapat kadar asam asetat lima koma delapan, lima koma sembilan, enam koma empat, lima koma sembilan, dan enam koma nol persen.
Wakil terbaiknya adalah rata-rata: jumlahkan semua, lalu bagi dengan banyaknya data.
Jumlahnya tiga puluh. Dibagi lima: enam koma nol persen.
**[KARTU]** x̄ = Σxᵢ / n = 30,0 / 5 = 6,0 %
Bayangkan setiap data sebagai beban di jungkat-jungkit. Rata-rata adalah titik tumpu yang membuatnya seimbang.
Ada juga median: urutkan datanya, lalu ambil yang di tengah. Di sini, lima koma sembilan.
Median tidak peduli seberapa jauh data di ujung. Sifat ini nanti berguna.

### 6 · `simpangan` — Simpangan tiap data

Seberapa jauh tiap data dari rata-rata? Itulah simpangan.
Lima koma delapan menyimpang minus nol koma dua. Enam koma empat menyimpang plus nol koma empat. Sisanya minus nol koma satu, minus nol koma satu, dan nol.
Kalau simpangan-simpangan ini dijumlahkan, hasilnya nol. Selalu nol. Yang positif dan yang negatif saling meniadakan; memang begitulah rata-rata didefinisikan.
Jadi kita perlu cara lain: kuadratkan dulu, supaya semuanya positif.

### 7 · `sbaku` — Simpangan baku dan %RSD

Kuadrat simpangannya: nol koma nol empat, nol koma nol satu, nol koma satu enam, nol koma nol satu, dan nol. Jumlahnya nol koma dua dua.
Bagi dengan n dikurangi satu, yaitu empat: nol koma nol lima lima. Lalu akarkan.
Simpangan baku, s, sama dengan nol koma dua tiga persen.
**[KARTU]** s = √[ Σ(xᵢ − x̄)² / (n − 1) ] = √(0,22 / 4) ≈ 0,23 %
Kenapa dibagi n dikurangi satu? Karena simpangan harus berjumlah nol. Kalau empat simpangan sudah diketahui, yang kelima pasti ikut. Hanya empat yang bebas. Itulah derajat kebebasan.
Supaya bisa dibandingkan antarpengukuran, s dibagi rata-rata. Inilah simpangan baku relatif: nol koma dua tiga dibagi enam, kali seratus persen. Sekitar tiga koma sembilan persen.
**[KARTU]** %RSD = s / x̄ × 100 % = 0,23 / 6,0 × 100 % ≈ 3,9 %

### 8 · `galton` — Papan Galton

Tapi kenapa hasilnya berloncatan? Lihat papan Galton.
Bola dijatuhkan dari atas, lalu menabrak deretan pasak. Di setiap pasak, ia terpental ke kiri atau ke kanan, secara acak.
Satu bola tidak bisa ditebak. Tapi ratusan bola selalu membentuk pola yang sama: menumpuk di tengah, menipis di tepi.
Galat acak titrasi bekerja seperti ini. Tetesan yang sedikit lebih besar. Mata yang sedikit terlambat melihat merah muda. Suhu yang naik sedikit. Pembacaan meniskus yang meleset seperseratus mililiter.
Setiap gangguan kecil itu adalah satu pasak. Jumlah semuanya membentuk lonceng.

### 9 · `gauss` — Lonceng Gauss

Lonceng ini disebut distribusi normal, atau distribusi Gauss.
Puncaknya ada di rata-rata populasi, mu. Lebarnya ditentukan oleh simpangan baku populasi, sigma.
Berapa pun lebarnya, luasnya selalu terbagi sama.
Enam puluh delapan koma tiga persen data jatuh dalam satu sigma dari mu. Sembilan puluh lima koma empat persen dalam dua sigma. Sembilan puluh sembilan koma tujuh persen dalam tiga sigma.
Jadi hasil yang menyimpang lebih dari tiga sigma sangat jarang: kira-kira tiga dari seribu.

### 10 · `sampel` — Populasi vs sampel

Masalahnya, mu dan sigma milik populasi: semua hasil yang mungkin, seandainya kita bisa menitrasi tanpa henti.
Bayangkan kolam berisi ratusan ikan. Kita hanya menciduk satu ember berisi lima ekor.
Dari ember itu kita menghitung rata-rata sampel, x bar, dan simpangan baku sampel, s. Keduanya hanya perkiraan.
Ciduk lagi, angkanya berubah. Kalau embernya kecil, perkiraan s bisa meleset jauh.
Lalu, seberapa yakin kita boleh bicara dengan hanya lima data? Jawabannya datang dari sebuah pabrik bir.

### 11 · `gosset` — Rahasia pabrik bir

Dublin, tahun seribu delapan ratus sembilan puluh sembilan. William Sealy Gosset, lulusan kimia dan matematika dari Oxford, mulai bekerja di pabrik bir Guinness.
Pertanyaannya sangat praktis: apakah kadar ragi dan alkohol setiap tong sesuai standar pabrik?
Tapi datanya selalu sedikit. Tidak mungkin mengambil ratusan sampel dari setiap tong.
Statistik zamannya dirancang untuk ratusan data. Untuk tiga atau empat data, cara itu terlalu percaya diri.
Gosset belajar di laboratorium Karl Pearson di London, lalu memecahkan masalahnya dengan matematika, ditambah percobaan memakai angka acak.
Guinness tidak mengizinkan penelitinya menerbitkan dengan nama asli. Maka tahun seribu sembilan ratus delapan, di jurnal Biometrika, makalahnya terbit dengan nama samaran: Student.

### 12 · `distt` — Distribusi t

Temuannya begini: kalau sigma diganti s dari sampel kecil, lonceng Gauss terlalu sempit. Kita perlu lonceng yang lebih pendek, dengan ekor yang lebih tebal. Itulah distribusi t Student.
Makin sedikit data, makin lebar loncengnya. Dengan dua derajat kebebasan, batas sembilan puluh lima persen ada di t sama dengan empat koma tiga. Dengan empat derajat kebebasan, dua koma tujuh delapan.
Makin banyak data, kurva t makin ramping dan mendekati Gauss, dengan batas satu koma sembilan enam.
Inilah harga yang harus dibayar karena datanya sedikit: ruang ragunya harus lebih lebar.

### 13 · `selang` — Selang kepercayaan

Sekarang kita bisa menulis selang kepercayaan. Nilai sebenarnya, mu, berada di x bar, plus-minus t kali s dibagi akar n.
**[KARTU]** μ = x̄ ± t·s / √n
Perhatikan akar n di penyebut. Empat kali lebih banyak data, selangnya hanya menyempit dua kali.
Tapi t juga ikut mengecil. Dari dua ke tiga ulangan, selang menyempit hampir empat kali. Dari tiga ke empat, sekitar satu setengah kali. Sesudah itu, keuntungannya makin kecil.
Itulah sebabnya laboratorium biasanya bekerja secara triplo, atau empat ulangan. Keuntungan terbesar ada di awal.

### 14 · `contoh` — Contoh lengkap: lima titrasi cuka

Kembali ke lima titrasi cuka. Rata-rata enam koma nol persen, s nol koma dua tiga, n sama dengan lima.
Derajat kebebasannya empat, jadi t untuk sembilan puluh lima persen adalah dua koma tujuh delapan.
s dibagi akar lima: nol koma satu nol lima. Dikali dua koma tujuh delapan: nol koma dua sembilan.
Jadi, dengan keyakinan sembilan puluh lima persen, kadar asam asetat sebenarnya ada di antara lima koma tujuh dan enam koma tiga persen.
**[KARTU]** μ = 6,0 ± 2,78 × 0,23 / √5 = 6,0 ± 0,29 % → 5,7 … 6,3 %
Tapi hati-hati membacanya. Selang ini hanya menghitung galat acak. Kalau konsentrasi NaOH-nya salah, selang serapi apa pun tetap meleset.

### 15 · `pencilan` — Uji Q dan Grubbs

Tunggu dulu. Enam koma empat kelihatan nakal. Bolehkah kita membuangnya?
Membuang data hanya karena tidak cocok itu tidak jujur. Kita perlu ujian.
Uji Q Dixon: jarak data yang dicurigai ke tetangga terdekatnya, dibagi rentang seluruh data.
**[KARTU]** Q = |x_curiga − x_tetangga| / (x_maks − x_min) = 0,4 / 0,6 ≈ 0,67
Enam koma empat dikurangi enam koma nol: nol koma empat. Rentangnya enam koma empat dikurangi lima koma delapan: nol koma enam. Q sama dengan nol koma enam tujuh.
Untuk lima data, Q kritis sembilan puluh lima persen adalah nol koma tujuh satu. Nol koma enam tujuh lebih kecil. Jadi, data ini dipertahankan.
Uji Grubbs memberi putusan yang sama: simpangan enam koma empat dibagi s hasilnya satu koma tujuh nol enam, tipis di bawah batas satu koma tujuh satu lima.
Kalau masih ragu, ulangi titrasinya, atau laporkan median. Dan uji pencilan dipakai sekali saja per set data.

### 16 · `ujit` — Berbeda dari label?

Sekarang pertanyaan dari episode lalu. Label botol menulis lima koma empat persen. Apakah hasil kita benar-benar berbeda?
Kita pakai uji t: selisih rata-rata dengan nilai acuan, dikali akar n, dibagi s.
**[KARTU]** t = (x̄ − μ₀)·√n / s = (6,0 − 5,4)·√5 / 0,23 ≈ 5,7
Hasilnya lima koma tujuh. Jauh di atas t kritis dua koma tujuh delapan. Lima koma empat juga jatuh di luar selang kepercayaan kita.
Kesimpulannya, perbedaan itu nyata, bukan kebetulan galat acak. Tentu dengan syarat yang sama: NaOH sudah distandardisasi.

### 17 · `angka` — Angka penting

Bagaimana menuliskan hasilnya? Kalkulator menampilkan s sama dengan nol koma dua tiga empat lima dua nol tujuh delapan delapan. Jangan salin semuanya.
Angka penting adalah semua angka yang pasti, ditambah satu angka pertama yang tidak pasti.
Ketidakpastian kita sudah ada di persepuluhan. Jadi rata-ratanya cukup ditulis sampai persepuluhan juga.
**[KARTU]** kadar = 6,0 ± 0,3 % (b/v) · CI 95 % · n = 5
Laporan yang jujur menyebut tiga hal: nilai, ketidakpastian, dan dari berapa data. Tanpa n dan tingkat kepercayaan, plus-minus itu tidak bisa dibaca orang lain.

### 18 · `geser` — Galat sistematik tidak hilang

Ada satu hal yang tidak bisa diperbaiki statistik: galat sistematik.
Misalnya buret hanya dibilas air, tidak dibilas larutan NaOH. Titran jadi sedikit encer, dan volumenya selalu lebih banyak.
Ulangi seratus kali, loncengnya memang makin sempit. Tapi seluruh lonceng tetap bergeser, utuh, menjauhi nilai sebenarnya.
Mengulang hanya mengecilkan galat acak, sebanding satu per akar n. Galat sistematik harus diburu dengan cara lain: standar primer, kalibrasi, blanko, atau metode pembanding.

### 19 · `darwish` — Misteri terpecahkan

Sekarang, kembali ke enam titrasi di awal.
Pertanyaan pertama: dari mana sebarannya? Buret hanya menyumbang sekitar nol koma satu persen. Padahal simpangan baku relatifnya tiga koma empat persen.
Sumber terbesarnya kemungkinan mata: kapan tepatnya warna merah muda pucat dianggap titik akhir.
Petunjuknya ada di data. Kelompok kedua memakai aturan ketat: merah muda pucat harus bertahan tiga puluh detik. Simpangan baku relatifnya dua koma sembilan enam persen. Kelompok pertama, empat koma tiga persen.
Pertanyaan kedua: berapa data yang perlu? Dengan tiga data, selang kepercayaan kelompok pertama selebar plus-minus nol koma nol satu satu molar. Lebih dari sepuluh persen!
Kedua kelompok tidak berbeda nyata, jadi datanya boleh digabung. Dengan enam data, selangnya plus-minus nol koma nol nol tiga tujuh. Tiga kali lebih sempit.
Pertanyaan ketiga: rata-ratanya nol koma satu nol empat satu molar. Uji t terhadap nol koma satu nol nol nol memberi dua koma delapan delapan, di atas batas dua koma lima tujuh. Bedanya nyata.
Tapi siapa yang salah? Belum tentu mahasiswanya. NaOH bukan standar primer. Ia menyerap air dan karbon dioksida, jadi angka nol koma satu hanyalah rencana saat larutan dibuat.
Statistik memberi tahu bahwa ada beda. Untuk mencari penyebabnya, kita perlu standar primer.

### 20 · `kendali` — Kartu kendali

Di laboratorium industri, statistik ini dipakai setiap hari.
Analis mengukur sampel kendali yang sama secara berkala, lalu memplotnya di kartu kendali. Garis tengahnya rata-rata, batas atas dan bawahnya tiga simpangan baku.
Selama titik-titik melompat acak di dalam batas, proses terkendali. Kalau satu titik keluar, ada yang salah.
Buku Skoog memberi contoh neraca analitik. Pada hari ketujuh belas, massa standar melonjak keluar batas. Penyebabnya? Piring timbangan yang kotor.
Laboratorium terakreditasi ISO/IEC tujuh belas nol dua lima juga ikut uji profisiensi: sampel yang sama dikirim ke banyak laboratorium, lalu hasilnya dinilai dengan statistik yang sama.

### 21 · `penutup` — Penutup & teaser

Jadi, enam angka yang berbeda bukan tanda kegagalan. Itu galat acak yang jujur, dan sekarang kita bisa mengukurnya.
Rata-rata memberi pusatnya. Simpangan baku memberi lebarnya. Dan distribusi t dari seorang pembuat bir memberi tahu seberapa yakin kita, bahkan dengan tiga data.
Tapi sebaran terbesar tadi lahir di satu momen: saat warna berubah.
Di episode berikutnya, kita perbesar momen itu. Di dekat titik ekivalen, satu tetes sebelum dan satu tetes sesudah bisa membuat pH melonjak dari empat koma tiga ke sembilan koma tujuh.
Satu tetes yang menentukan. Sampai jumpa.

## Hitungan contoh (dibuat ulang dengan Python, numpy + scipy)

Skrip: `scipy.stats.t.ppf(0.975, n−1)`, `numpy.std(ddof=1)`; nilai kritis Grubbs dengan rumus NIST e-Handbook. Angka di narasi dibulatkan dari baris ini.

**A. Lima titrasi cuka (rekaan, % b/v):** 5,8 · 5,9 · 6,4 · 5,9 · 6,0

| Besaran | Nilai tepat | Di narasi/kartu |
|---|---|---|
| Σxᵢ, x̄ | 30,0; 6,000 | 6,0 % |
| median | 5,9 | 5,9 % |
| simpangan dᵢ | −0,2; −0,1; +0,4; −0,1; 0,0 (Σ = 0) | idem |
| Σdᵢ² | 0,04 + 0,01 + 0,16 + 0,01 + 0 = 0,22 | 0,22 |
| s² = Σdᵢ²/(n−1) | 0,055 | 0,055 |
| s | 0,234 520 788 | 0,23 % (kalkulator di `angka`) |
| (pembanding: σ dengan pembagi n) | 0,2098 | tidak diucapkan |
| %RSD | 3,909 % | ≈ 3,9 % |
| s/√n | 0,104 88 | 0,105 |
| t₀,₉₅ (db = 4) | 2,7764 (Skoog Tabel 5-3: 2,78) | 2,78 |
| setengah lebar CI | 0,2912 | 0,29 → laporan ± 0,3 |
| CI 95 % | 5,709 – 6,291 | 5,7 … 6,3 % |
| Uji Q (6,4 dicurigai) | (6,4 − 6,0)/(6,4 − 5,8) = 0,667 < Q_krit(n=5, 95 %) = 0,710 → dipertahankan | 0,67 vs 0,71 |
| Uji Grubbs dua sisi | G = (6,4 − 6,0)/0,2345 = 1,706 < G_krit(n=5, α = 0,05) = 1,715 → dipertahankan | 1,706 vs 1,715 |
| Uji t vs label 5,4 % | t = 0,6·√5/0,2345 = 5,72 > 2,78 (p = 0,0046) → berbeda nyata | 5,7 |
| (pembanding tanpa 6,4) | x̄ = 5,90; s = 0,082; %RSD 1,38 %; CI 5,77–6,03 | tidak diucapkan (catatan produksi) |

**B. Data Darwish dkk. (2026), molaritas NaOH (M)** — kelompok 1: 0,0996 · 0,1081 · 0,1064; kelompok 2: 0,1000 · 0,1053 · 0,1053 (Tabel 1 makalah)

| Besaran | Hitung ulang | Makalah (Tabel 2) |
|---|---|---|
| Kelompok 1: x̄, s, %RSD | 0,1047; 0,0045; 4,30 % | 0,1047; 0,0045; 4,30 ✓ |
| Kelompok 1: CI 95 % (t = 4,303) | 0,0935 – 0,1159 (± 0,0112) | 0,0935–0,1159 ✓ |
| Kelompok 2: x̄, s, %RSD | 0,1035; 0,0031; 2,96 % | 0,1035; 0,0031; 2,96 ✓ |
| Kelompok 2: CI 95 % | 0,0959 – 0,1111 (± 0,0076) | 0,0959–0,1111 ✓ |
| Gabungan (n = 6): x̄, s, %RSD | 0,1041; 0,0035; 3,36 % | 0,1041; 0,0035; 3,36 ✓ |
| Gabungan CI 95 % (t = 2,571) | 0,1004 – 0,1078 (± 0,0037) | 0,1004–0,1078 ✓ |
| Rentang | 0,0996 – 0,1081 = 0,0085 M ≈ 8,2 % dari x̄ | — ("sekitar delapan persen") |
| Uji t gabungan vs 0,1000 | t = 2,88 > 2,57 (p = 0,035) | makalah hanya menyebut bias +4,12 % |
| Welch antar kelompok | t = 0,37, p = 0,73 | t = 0,37, p = 0,732 ✓ |
| Uji Q gabungan | Q_rendah = 0,047; Q_tinggi = 0,200 < 0,625 → tak ada pencilan | — |
| Buret 0,01 mL / 10 mL | 0,1 % | — |
| Penyempitan CI, n = 3 → 6 | 0,0112 / 0,0037 ≈ 3,0× | "tiga kali lebih sempit" |

**C. Faktor lebar selang t/√n (95 %):** n = 2: 8,985 · 3: 2,484 · 4: 1,591 · 5: 1,242 · 6: 1,049 · 10: 0,715 · 20: 0,468 → 2→3 menyempit 3,6× ("hampir empat kali"), 3→4 menyempit 1,56× ("sekitar satu setengah kali").

**D. Teaser ep. 3:** 50,00 mL HCl 0,100 M + NaOH 0,100 M: pada 49,95 mL kelebihan H₃O⁺ = 0,005 mmol / 99,95 mL = 5,0 × 10⁻⁵ M → pH 4,30; pada 50,05 mL kelebihan OH⁻ sama → pH 9,70.

## Hitungan

- 21 adegan; kartu rumus: 9 (x̄, s, %RSD, CI umum, CI contoh, Q, t, laporan angka penting; + Grubbs opsional sebagai baris kecil di kartu Q).
- Panjang narasi ≈ 1850 kata (tanpa judul adegan & kartu; angka ditulis seperti diucapkan); dengan jeda ≈ 12–13 menit.

## Catatan untuk tahap produksi

- **Hook diubah dari rencana awal** ("30 mahasiswa, 30 angka"): makalah Darwish hanya berisi **6 titrasi** dari dua set triplo. Jangan menulis "30 mahasiswa"; visual boleh menambah titik hantu redup tanpa angka bila perlu kesan "hujan".
- **Jangan memakai klaim "overshoot" dari makalah Darwish.** Makalah menyebut bias +4,12 % "konsisten dengan sedikit kelebihan titik akhir", tetapi NaOH ada di buret: kelewatan titik akhir menambah V_NaOH sehingga molaritas terhitung justru **turun**. Selain itu 0,1000 M hanyalah konsentrasi rencana (NaOH bukan standar primer, dan HCl pembanding pun bukan standar primer). Narasi sengaja hanya menyimpulkan "ada beda, penyebab perlu standar primer". Lihat AUDIT.
- Klaim penyebab sebaran ("kemungkinan mata") sengaja berbentuk dugaan; makalah sendiri menulis "does not prove causation".
- Data cuka di `contoh` adalah **rekaan** yang dibuat agar hitungan bisa diucapkan (x̄ = 6,0 tepat). Beri label kecil "data latihan" di layar. Sengaja memakai 6,4 yang "tampak nakal" tetapi lolos uji Q dan Grubbs (pesan Skoog § 5D-2: hati-hati membuang data). Grubbs nyaris di batas (1,706 vs 1,715) — jangan dibulatkan menjadi "1,71 vs 1,71".
- Kartu `contoh` dipecah per langkah dengan `slot(t, a, b)` agar satu kartu per momen.
- `distt`: kurva t digambar dari pdf analitik `Γ((ν+1)/2)/(√(νπ)Γ(ν/2))·(1+x²/ν)^(−(ν+1)/2)`; db = 1 (t₉₅ = 12,7) di luar layar — tampilkan penanda panah keluar layar.
- `galton`: banyak bola → pakai seed tetap & posisi analitik per frame (tanpa animasi CSS); histogram dari hitungan kumulatif.
- `gosset`: tanpa foto wajah; pil sumber "Student (1908) Biometrika 6(1)" dan "Skoog ed. 10, Feature 5-1". Ejaan yang benar **Gosset** (Skoog menulis "Gossett").
- `kendali`: Skoog memakai batas ±3σ (UCL/LCL). Batas peringatan ±2s tidak disebut agar tidak perlu sumber tambahan.
- "±" hanya untuk ketidakpastian (kartu CI & laporan); perkiraan memakai "≈". Koma desimal di semua kartu.
- Kode warna usulan seri (perlu konfirmasi pengguna): nilai benar = emas, galat sistematik = jingga, galat acak = ungu, data = titik putih, titran/basa = biru, analit/asam = merah muda.
