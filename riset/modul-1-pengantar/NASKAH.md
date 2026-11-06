# Naskah riset — Kimia Kuantum Modul 1 "Pengantar Kimia Kuantum"

Draf untuk video berikutnya (belum dibangun). S1 Kimia UNESA, ±13–14 menit, 20 adegan.
Sumber materi: `materi/Modul_1_Pengantar_Kimia_Kuantum_Revisi.pdf` (bab 1–4, 6–7). Angka dicek di `AUDIT.md` (folder ini).

Catatan cakupan: seri sudah punya video **Fisika Atom (Bohr)** dan **Atom Hidrogen**, jadi spektrum garis & model Bohr hanya disinggung di penutup sebagai jembatan. Fokus video ini: *mengapa fisika klasik gagal* — benda hitam, fotolistrik, Compton, de Broglie & Davisson–Germer, Heisenberg — dengan kait kimia.

## Pilihan judul

1. **"Lampu Merah di Kamar Gelap"** — Pengantar Kimia Kuantum ← *dipilih*
2. "Cahaya yang Dijual Eceran" — Lahirnya Teori Kuantum
3. "Ketika Fisika Klasik Kehabisan Jawaban"

Alasan memilih (1): judulnya langsung berupa misteri yang konkret, kimiawi (perak bromida), dan baru terpecahkan di tengah video; judul (2) dipakai sebagai kalimat kunci di adegan Planck.

## Benang merah

**Misteri:** Di kamar gelap fotografi, kertas foto hitam-putih aman di bawah lampu merah yang cukup terang selama beberapa menit. Tetapi sekejap cahaya biru yang redup sudah membuatnya menghitam. Menurut fisika klasik, energi cahaya ditentukan oleh kecerahannya — jadi lampu merah yang terang seharusnya lebih "berbahaya".
**Dibuka:** adegan `hook`. **Petunjuk:** `pijar` (warna ↔ suhu), `planck` (energi dijual per paket). **Dipecahkan:** `gelap` (setelah Einstein): kristal perak bromida butuh paket energi ≈ 2,5–2,7 eV per kejadian; satu foton merah hanya ≈ 1,9 eV, sebanyak apa pun fotonnya. **Kembali lagi:** `rangkum` — rantai gagasan dari kamar gelap ke fungsi gelombang.

## Pembagian bagian

- **Bagian 1 — Cahaya yang dijual eceran** (benda hitam → Planck → Einstein → misteri terpecahkan → foton di kimia)
- **Bagian 2 — Materi yang berombak** (Compton → de Broglie → Davisson–Germer → mikroskop elektron)
- **Bagian 3 — Batas ketajaman** (Heisenberg → rangkuman → jembatan ke Modul 2)

## Daftar adegan

| # | id | Judul | Ide visual (bergerak sesuai fisika) |
|---|---|---|---|
| 1 | `hook` | Lampu merah di kamar gelap | Kamar gelap bergaya ilustrasi: lampu merah berdenyut menyinari kertas di baki, kertas tetap putih (hujan butir foton merah memantul). Kilasan biru redup 0,2 dtk → bintik kristal AgBr berubah jadi titik perak, gambar muncul. Label tanya "kenapa?". |
| 2 | `judul` | Judul | Kartu judul; latar butir foton merah dan biru melayang, biru meninggalkan percikan kecil saat menyentuh garis dasar. |
| 3 | `awan` | Dua awan kecil tahun 1900 | Langit cerah "fisika klasik" (ikon Newton: apel jatuh; Maxwell: gelombang EM merambat). Dua awan kecil membesar perlahan; satu diberi label "ekuipartisi energi" (bukan "radiasi benda hitam"; lihat AUDIT). |
| 4 | `pijar` | Besi yang berpijar | Batang besi dipanaskan: suhu (termometer) naik 300 → 800 → 1100 → 1600 K; warna bergeser hitam → merah redup (≈ 525 °C) → jingga → putih kekuningan, `interpolateColors` per suhu. Kurva spektrum kecil di samping mengikuti. Kait kimia: tungku keramik, pirometer warna. |
| 5 | `wien` | Puncak yang bergeser | Tiga kurva Planck (3000/4000/5000 K) tergambar; titik puncak meluncur ke kiri saat T naik; pita warna tampak di bawah sumbu. Pin: Matahari 5772 K → 502 nm; tubuh 310 K → 9,3 µm (gambar kamera termal). **Kartu rumus.** |
| 6 | `bencana` | Katastrofe ultraviolet | Kurva Rayleigh–Jeans naik terus menembus atap grafik (kamera ikut naik, angka sumbu membesar) sementara data eksperimen turun ke nol. Sirene kecil "∞". Kotak rongga dengan gelombang berdiri yang makin rapat (jumlah mode ↑ pada frekuensi tinggi). |
| 7 | `planck` | Energi dijual eceran | Osilator di dinding rongga; energinya naik sebagai tangga En = nhν. Untuk ν kecil anak tangga rapat (mudah dinaiki), ν besar anak tangga tinggi (jarang terisi pada suhu itu; butir terisi memudar). Kurva Planck menutup puncak dengan benar. **Kartu rumus.** |
| 8 | `foto` | Cahaya yang melepaskan elektron | Pelat logam dalam tabung vakum + amperemeter. Lampu merah terang: jarum diam. Lampu ungu/UV redup: elektron melompat, jarum bergerak. Penggeser "kecerahan" dan "warna" ditampilkan; hanya penggeser warna yang mengubah kecepatan elektron. |
| 9 | `einstein` | Satu foton, satu elektron | Foton (paket bergaris gelombang) menabrak elektron di "sumur" logam sedalam Φ. Batang energi: hν dipotong Φ, sisanya K maks (panjang panah kecepatan elektron sesuai). Grafik K maks–ν: garis lurus dengan kemiringan h, memotong di ν₀ (cesium ≈ 2 eV → ambang ≈ 600 nm; nilai literatur 1,95–2,14 eV). **Kartu rumus.** |
| 10 | `gelap` | Misteri terpecahkan | Kembali ke kamar gelap. Kisi kristal AgBr; celah energi digambar sebagai "tembok" ≈ 2,6 eV. Foton merah 1,9 eV (banyak) memantul satu per satu; satu foton biru 2,8 eV mengangkat elektron → ion Ag⁺ menjadi atom Ag, gugus perak kecil = bayangan laten. Batang energi per foton berdampingan. **Kartu rumus** E = hc/λ. |
| 11 | `kimfoton` | Foton di dunia kimia | Tiga panel bergerak: (a) ikatan C–C bergetar lalu putus saat foton UV 300 nm datang (≈ 400 kJ/mol > 348 kJ/mol), foton merah hanya memantul; (b) daun: klorofil menyerap merah & biru, memantulkan hijau (butir hijau memantul ke mata); (c) uji nyala natrium: hanya warna tertentu yang keluar (pratinjau spektrum garis). |
| 12 | `surya` | Sel surya dan LED | Pita valensi–konduksi silikon (celah 1,12 eV): foton tampak & IR dekat < 1107 nm mengangkat elektron, arus mengalir ke bola lampu kecil. Dibalik: LED, elektron jatuh melewati celah → foton; geser celah → warna LED berubah merah (1,9 eV) → biru (2,7 eV). Pil "Nobel Fisika 2014: LED biru". |
| 13 | `compton` | Foton yang menendang | Sinar-X Mo Kα (71 pm) menabrak elektron di grafit seperti bola biliar; foton terhambur memanjang gelombangnya (warna "lebih merah" simbolis), elektron terpental. Busur sudut θ berubah 0 → 180°, Δλ terbaca dari 0 → 4,85 pm. **Kartu rumus.** |
| 14 | `debroglie` | Kalau cahaya bisa jadi partikel… | Simetri: panah "gelombang → partikel" dibalik "partikel → gelombang". Bola bisbol (145 g, 40 m/s) dengan gelombang yang tak terlihat (λ ≈ 10⁻³⁴ m, zoom bertingkat gagal menemukannya) vs elektron dengan gelombang selebar atom (0,17 nm). **Kartu rumus.** |
| 15 | `davisson` | Kecelakaan yang beruntung | Laboratorium Bell, April 1925: botol udara cair meledak (kilatan), target nikel teroksidasi, dipanaskan lama → butir kecil tumbuh jadi kristal besar (animasi rekristalisasi). Teks kecil "awal 1927": target satu kristal, berkas elektron 54 eV ditembakkan; detektor diputar; puncak muncul di 50°. Garis atom berjarak 0,215 nm: d sin φ = λ → 0,165 nm vs prediksi 0,167 nm. |
| 16 | `mikro` | Mikroskop yang melihat atom | Panjang gelombang dibandingkan: cahaya hijau 550 nm vs elektron 100 kV 3,7 pm (penggaris logaritmik yang ber-zoom). Mikroskop elektron (lensa magnet = kumparan) membentuk citra virus → protein → kisi atom. Pil: Ruska (Nobel Fisika 1986), krio-EM (Nobel Kimia 2017). |
| 17 | `heisenberg` | Tak bisa tajam bersamaan | Paket gelombang Gauss: saat dipersempit (Δx ↓), distribusi momentum di panel kanan melebar; luas keduanya terkunci. Celah tunggal: celah menyempit → berkas menyebar. **Kartu rumus.** |
| 18 | `atomdiam` | Elektron yang tak bisa diam | Elektron dikurung kotak 0,1 nm: anak panah kecepatan bergetar acak ≥ 5,8 × 10⁵ m/s. Perkiraan energi kurungan beberapa eV — orde energi ikatan. Kait kimia: H₂ orto/para (pil kutipan Nobel Heisenberg 1932). |
| 19 | `rangkum` | Rantai gagasan | Kamar gelap muncul lagi; dari kertas foto tumbuh rantai kartu: benda hitam → hν → foton → p = h/λ → λ = h/p → Δx Δp → |ψ|². Kartu tersusun membentuk anak tangga naik. |
| 20 | `jembatan` | Berikutnya: fungsi gelombang | Gelombang elektron membungkus inti dan berubah menjadi awan |ψ|² yang berdenyut; garis spektrum nyala Na/Cu/Sr menyala sebagai "sidik jari". Teks: "Modul 2 — Aturan Main Kuantum". Outro. |

## Narasi

Konvensi: kalimat pendek, gaya tutur. **[KARTU]** = rumus yang tampil di kartu `Formula` (≥ 56 px, satu kartu per momen). Angka di narasi ditulis seperti diucapkan; teks TTS dibuat terpisah nanti.

### 1 · `hook` — Lampu merah di kamar gelap

Sebelum ada kamera ponsel, foto dicetak di ruangan khusus: kamar gelap.
Anehnya, kamar gelap tidak benar-benar gelap. Di langit-langit menyala lampu merah.
Di bawah lampu merah itu, kertas foto bisa dibiarkan beberapa menit. Tetap putih bersih.
Tapi kalau pintu terbuka sekejap, dan sedikit saja cahaya biru masuk, kertas itu langsung rusak. Menghitam.
Padahal lampu merahnya lebih terang. Kenapa cahaya yang terang tidak berbuat apa-apa, sedangkan cahaya redup justru merusak?
Pertanyaan sesederhana ini ternyata tidak bisa dijawab fisika klasik. Untuk menjawabnya, kita butuh cara berpikir yang sama sekali baru.

### 2 · `judul` — Judul

*(Tanpa narasi atau satu baris)* Lampu Merah di Kamar Gelap. Pengantar Kimia Kuantum.

### 3 · `awan` — Dua awan kecil tahun 1900

Tahun seribu sembilan ratus. Banyak fisikawan merasa ilmunya hampir selesai.
Gerak benda dijelaskan Newton. Cahaya dijelaskan Maxwell sebagai gelombang elektromagnetik.
Lord Kelvin menyebut tinggal ada dua awan kecil di langit fisika yang cerah.
Salah satunya menyangkut cara energi panas dibagi rata di antara gerak molekul. Aturan pembagian yang sama kelak juga gagal menjelaskan cahaya dari benda panas.
Awan kecil itu ternyata membawa badai. Dari sanalah teori kuantum lahir.

### 4 · `pijar` — Besi yang berpijar

Panaskan sepotong besi. Mula-mula tidak terlihat apa pun, hanya terasa hangat.
Sekitar lima ratus dua puluh lima derajat Celsius, besi mulai berpijar merah redup.
Lebih panas lagi, warnanya jingga. Lalu kuning. Lalu hampir putih.
Pandai besi dan pembuat keramik sudah lama menebak suhu tungku dari warnanya.
Jadi warna cahaya dan suhu saling terkait. Pertanyaannya: bagaimana bentuk hubungan itu?

### 5 · `wien` — Puncak yang bergeser

Untuk mempelajarinya, fisikawan memakai benda ideal: benda hitam. Ia menyerap semua cahaya yang datang, dan memancarkan radiasi yang hanya bergantung pada suhunya.
Kalau spektrumnya diukur, kurvanya selalu punya satu puncak.
Makin panas bendanya, puncak itu bergeser ke panjang gelombang yang lebih pendek.

**[KARTU]** λ_maks · T = b  b ≈ 2,898 × 10⁻³ m·K

Ini hukum pergeseran Wien.
Permukaan Matahari sekitar lima ribu tujuh ratus kelvin. Puncaknya sekitar lima ratus nanometer, tepat di cahaya tampak.
Tubuh kita, sekitar tiga ratus sepuluh kelvin, juga memancar. Puncaknya sekitar sembilan mikrometer, inframerah. Itulah yang dilihat kamera termal.
Daya totalnya juga melonjak: suhu dua kali lipat, pancaran enam belas kali lipat.

### 6 · `bencana` — Katastrofe ultraviolet

Lalu Rayleigh dan Jeans mencoba menurunkan kurva ini dari fisika klasik.
Bayangkan rongga berisi gelombang cahaya. Makin tinggi frekuensinya, makin banyak cara gelombang bisa muat di dalamnya.
Fisika klasik berkata, setiap cara itu mendapat jatah energi yang sama.
Akibatnya, makin ke arah ultraviolet, energinya terus naik. Tanpa batas.
Kalau itu benar, setiap benda hangat memancarkan energi tak terhingga. Semua oven akan memancarkan sinar-X.
Kenyataannya, kurva justru turun ke nol. Kegagalan ini kelak dijuluki katastrofe ultraviolet.

### 7 · `planck` — Energi dijual eceran

Desember seribu sembilan ratus, Max Planck mengajukan ide yang ia sendiri anggap darurat.
Energi osilator di dinding rongga tidak boleh sembarang. Energi hanya bisa bertambah dalam paket.

**[KARTU]** E_n = n h ν  n = 0, 1, 2, …

Besar satu paket adalah h dikali frekuensi. h kini disebut tetapan Planck: enam koma enam dua kali sepuluh pangkat minus tiga puluh empat joule sekon.
Energi dijual eceran, dan harga satu paketnya naik bersama frekuensi.
Pada frekuensi rendah, paketnya murah. Mudah dibeli.
Pada frekuensi sangat tinggi, satu paket saja terlalu mahal untuk energi panas yang tersedia. Mode itu hampir tidak pernah terisi.
Dengan satu ide itu, kurva Planck cocok sempurna dengan eksperimen. Puncaknya, ekornya, semuanya.
Planck sendiri lama menganggap paket ini hanya trik hitungan. Delapan belas tahun kemudian, trik itu diganjar Nobel Fisika.
Ingat kalimat ini: harga satu paket naik bersama frekuensi. Kita akan membutuhkannya di kamar gelap.
Tapi Planck baru mengemas energi materi. Bagaimana dengan cahayanya sendiri?

### 8 · `foto` — Cahaya yang melepaskan elektron

Planck masih mengira kuantisasi hanya urusan dinding rongga. Cahayanya sendiri tetap gelombang.
Tetapi ada eksperimen lain yang membandel: efek fotolistrik.
Sinari pelat logam dengan cahaya, dan elektron bisa terlepas dari permukaannya.
Coba cahaya merah yang sangat terang. Tidak ada elektron yang keluar.
Coba cahaya ultraungu yang redup. Elektron langsung melompat keluar.
Menaikkan kecerahan hanya menambah jumlah elektron, dan itu pun kalau warnanya sudah cukup. Kecepatan elektron tercepat hanya ditentukan oleh warna, yaitu frekuensi.
Bagi teori gelombang, ini tidak masuk akal. Gelombang yang lebih kuat seharusnya mengguncang elektron lebih keras.

### 9 · `einstein` — Satu foton, satu elektron

Tahun seribu sembilan ratus lima, Albert Einstein melangkah lebih jauh dari Planck.
Bukan hanya pertukarannya yang berpaket. Cahaya itu sendiri datang dalam paket. Sekarang kita menyebutnya foton.
Satu foton diserap oleh satu elektron. Semuanya, atau tidak sama sekali.
Untuk keluar dari logam, elektron harus membayar ongkos minimum, disebut fungsi kerja, Phi.
Sisanya menjadi energi gerak.

**[KARTU]** K_maks = h ν − Φ

Kalau h nu lebih kecil dari Phi, tidak ada elektron yang keluar. Berapa pun banyaknya foton.
Untuk cesium, fungsi kerjanya hanya sekitar dua elektronvolt. Ambangnya sekitar enam ratus nanometer, di antara kuning dan jingga. Cahaya merah tidak cukup.
Grafik energi elektron terhadap frekuensi menjadi garis lurus, dan kemiringannya tidak lain adalah h.
Robert Millikan sendiri tidak percaya pada gagasan foton Einstein. Tahun seribu sembilan ratus enam belas, pengukurannya justru membenarkan rumus ini.
Einstein menerima Nobel Fisika tahun seribu sembilan ratus dua puluh satu, bukan untuk relativitas, melainkan untuk hukum efek fotolistrik.

### 10 · `gelap` — Misteri terpecahkan

Sekarang kita kembali ke kamar gelap.
Kertas foto hitam-putih dilapisi kristal kecil perak bromida.
Agar bayangan terbentuk, sebuah elektron di kristal harus diangkat melewati celah energi. Celah itu sekitar dua setengah elektronvolt.

**[KARTU]** E = hc / λ  hc ≈ 1240 eV·nm

Satu foton merah, enam ratus lima puluh nanometer, membawa sekitar satu koma sembilan elektronvolt. Tidak cukup.
Satu foton biru, empat ratus lima puluh nanometer, membawa sekitar dua koma delapan elektronvolt. Cukup.
Lampu merah yang terang hanya berarti banyak foton yang masing-masing terlalu lemah. Seperti mesin minuman yang hanya menelan satu keping per kali: seratus koin kecil tidak akan pernah membeli satu botol yang harganya lima ribu.
Begitu satu foton biru diserap, elektron terlepas, ion perak menangkapnya, dan menjadi atom perak. Beberapa atom perak berkumpul menjadi bayangan laten. Pengembang kimia kemudian memperbesarnya menjadi gambar hitam.
Jadi yang menentukan bukan kecerahan, melainkan energi per foton.
Misteri kamar gelap terpecahkan: cahaya dijual eceran, dan kertas foto hanya menerima paket yang cukup mahal.

### 11 · `kimfoton` — Foton di dunia kimia

Aturan satu foton ini ada di mana-mana dalam kimia.
Satu foton ultraungu tiga ratus nanometer membawa sekitar empat ratus kilojoule per mol. Itu lebih besar dari energi ikatan karbon–karbon, sekitar tiga ratus lima puluh. Karena itu sinar UV bisa memutus ikatan, membuat cat memudar dan kulit terbakar.
Lampu pemanas inframerah bisa terasa jauh lebih panas, tetapi fotonnya terlalu lemah untuk memutus ikatan.
Daun hijau memakai aturan yang sama. Klorofil menyerap foton merah dan biru yang pas untuk mengangkat elektronnya, dan memantulkan hijau.
Dan uji nyala di laboratorium: natrium kuning, tembaga hijau kebiruan, stronsium merah. Atom hanya memancarkan foton dengan energi tertentu. Tentang itu, kita bahas di video Atom Hidrogen.

### 12 · `surya` — Sel surya dan LED

Sel surya silikon juga punya ambang. Celah energinya sekitar satu koma satu dua elektronvolt.
Foton dengan panjang gelombang di bawah sekitar seribu seratus nanometer bisa mengangkat elektron, dan elektron itu mengalir menjadi arus listrik.
Kalau prosesnya dibalik, kita mendapatkan LED. Elektron jatuh melintasi celah, dan energinya keluar sebagai satu foton.
Celah sekitar satu koma sembilan elektronvolt memberi cahaya merah. Celah sekitar dua koma tujuh memberi biru.
Warna LED ditentukan oleh kimia bahan semikonduktornya. LED biru yang efisien begitu sulit dibuat, sampai penemunya meraih Nobel Fisika tahun dua ribu empat belas.

### 13 · `compton` — Foton yang menendang

Kalau cahaya benar-benar partikel, ia seharusnya juga membawa momentum. Bisa menendang.
Tahun seribu sembilan ratus dua puluh tiga, Arthur Compton menembakkan sinar-X ke grafit.
Sinar-X yang terhambur keluar dengan panjang gelombang sedikit lebih panjang. Energinya berkurang, karena sebagian diberikan kepada elektron yang terpental.
Persis seperti tumbukan bola biliar. Makin besar sudut pantulnya, makin panjang pergeserannya.

**[KARTU]** Δλ = (h / mₑc)(1 − cos θ)

Besaran h dibagi massa elektron kali c disebut panjang gelombang Compton: sekitar dua koma empat tiga pikometer.
Hamburan sembilan puluh derajat menggeser panjang gelombang sebesar itu. Kecil, tetapi terukur jelas.
Foton punya momentum, sebesar h dibagi lambda. Cahaya, yang dulu kita kira gelombang murni, berperilaku seperti partikel.
Compton menerima Nobel Fisika tahun seribu sembilan ratus dua puluh tujuh. Dan pertanyaan berikutnya pun terbuka: kalau cahaya bisa seperti partikel, bagaimana dengan partikel?

### 14 · `debroglie` — Kalau cahaya bisa jadi partikel…

Tahun seribu sembilan ratus dua puluh empat, seorang mahasiswa doktoral, Louis de Broglie, membalik pertanyaannya.
Kalau gelombang bisa bersifat partikel, mengapa partikel tidak bisa bersifat gelombang?

**[KARTU]** λ = h / p = h / (m v)

Coba bola bisbol yang dilempar empat puluh meter per detik. Panjang gelombangnya sekitar sepuluh pangkat minus tiga puluh empat meter. Jauh lebih kecil dari inti atom mana pun. Tidak akan pernah terlihat.
Tetapi elektron sangat ringan. Elektron yang dipercepat lima puluh empat volt punya panjang gelombang sekitar nol koma satu tujuh nanometer.
Itu seukuran jarak antaratom dalam kristal. Artinya, kristal bisa menjadi kisi difraksi bagi elektron.
Gagasan ini begitu berani sampai pembimbingnya, Paul Langevin, mengirim salinannya kepada Einstein untuk dimintai pendapat. Einstein menyukainya. Lima tahun kemudian, de Broglie meraih Nobel Fisika. Tapi lebih dulu, gagasan itu harus dibuktikan.

### 15 · `davisson` — Kecelakaan yang beruntung

Bukti pertamanya datang dari sebuah kecelakaan.
Tahun seribu sembilan ratus dua puluh lima, di laboratorium Bell, Clinton Davisson dan Lester Germer sedang menembakkan elektron ke nikel.
Sebuah botol udara cair meledak. Tabungnya pecah, dan target nikel yang panas teroksidasi.
Untuk membersihkannya, nikel dipanaskan lama sekali. Tanpa disadari, butir-butir kristal kecilnya tumbuh menjadi beberapa kristal besar.
Ketika eksperimen diulang, pola hamburan berubah total. Mereka lalu menembaki satu kristal nikel yang disiapkan khusus. Awal tahun seribu sembilan ratus dua puluh tujuh, elektron lima puluh empat elektronvolt memantul paling kuat pada sudut lima puluh derajat.
Dari jarak antaratom nikel, pola itu memberi panjang gelombang nol koma satu enam lima nanometer. Prediksi de Broglie: nol koma satu enam tujuh.
Elektron berdifraksi. Elektron adalah gelombang.
Di Skotlandia, George Paget Thomson menemukan hal yang sama dengan elektron yang menembus lapisan logam tipis.
Lucunya, ayahnya, J. J. Thomson, dulu dikenal sebagai penemu elektron sebagai partikel. Sang anak menunjukkan bahwa elektron juga gelombang. Davisson dan Thomson berbagi Nobel Fisika tahun seribu sembilan ratus tiga puluh tujuh.

### 16 · `mikro` — Mikroskop yang melihat atom

Sifat gelombang elektron ini langsung dipakai.
Mikroskop cahaya tidak bisa melihat detail yang jauh lebih kecil dari panjang gelombang cahaya, ratusan nanometer.
Elektron yang dipercepat seratus ribu volt punya panjang gelombang sekitar tiga koma tujuh pikometer. Lebih dari seratus ribu kali lebih pendek dari cahaya hijau.
Ernst Ruska membangun mikroskop elektron pertama di awal tahun seribu sembilan ratus tiga puluhan. Lensanya bukan kaca, melainkan kumparan magnet.
Hari ini, ahli kimia memakai mikroskop elektron untuk melihat nanopartikel katalis, susunan atom dalam kristal, dan bentuk protein. Krio-mikroskopi elektron untuk biomolekul meraih Nobel Kimia tahun dua ribu tujuh belas.

### 17 · `heisenberg` — Tak bisa tajam bersamaan

Kalau elektron adalah gelombang, di mana tepatnya elektron itu?
Gelombang yang terkumpul di satu tempat harus disusun dari banyak panjang gelombang sekaligus. Artinya, momentumnya menyebar.
Sebaliknya, gelombang dengan satu panjang gelombang yang tajam terbentang ke mana-mana.
Tahun seribu sembilan ratus dua puluh tujuh, Werner Heisenberg merumuskannya.

**[KARTU]** Δx · Δp ≥ ħ / 2

Delta x dan delta p adalah sebaran posisi dan momentum. Keduanya tidak bisa dibuat kecil bersamaan.
Ini bukan soal alat yang kurang canggih. Ini sifat keadaan kuantum itu sendiri.
Sama seperti celah sempit: makin sempit celahnya, makin lebar berkas menyebar di belakangnya.
Bagi bola bisbol, batas ini terlalu kecil untuk dirasakan. Bagi elektron di dalam atom, batas ini menentukan segalanya.

### 18 · `atomdiam` — Elektron yang tak bisa diam

Apa akibatnya bagi kimia?
Kurung elektron di ruang selebar atom, sekitar nol koma satu nanometer.
Sebaran kecepatannya minimal sekitar enam ratus ribu meter per detik. Elektron dalam atom tidak mungkin diam.
Energi gerak yang dipaksakan oleh kurungan ini berorde beberapa elektronvolt, seorde dengan energi ikatan kimia.
Itulah sebabnya elektron tidak jatuh menempel ke inti, dan atom punya ukuran.
Nobel untuk Heisenberg bahkan menyebut satu hasil kimia: penemuan dua bentuk hidrogen, orto dan para. Kimia, sejak awal, adalah kimia kuantum.

### 19 · `rangkum` — Rantai gagasan

Mari kita kembali ke kertas foto di bawah lampu merah.
Dari pijar benda panas, Planck menemukan energi berpaket.
Einstein menunjukkan cahaya datang sebagai foton, dan satu foton bekerja sendirian. Itu sebabnya lampu merah aman.
Compton menunjukkan foton membawa momentum.
De Broglie membalikkannya: partikel juga gelombang. Davisson, Germer, dan Thomson membuktikannya.
Heisenberg menunjukkan batas ketajaman posisi dan momentum.
Gambaran elektron sebagai bola kecil yang mengikuti lintasan pasti tidak bisa dipertahankan lagi.
Semua itu terjadi hanya dalam dua puluh tujuh tahun, dari seribu sembilan ratus sampai seribu sembilan ratus dua puluh tujuh.

### 20 · `jembatan` — Berikutnya: fungsi gelombang

Lalu, dengan apa elektron digambarkan?
Dengan fungsi gelombang, psi. Kuadratnya, psi kuadrat, memberi peluang menemukan elektron di suatu tempat.
Gelombang yang terkurung dalam atom hanya bisa membentuk pola tertentu. Dari situlah warna nyala natrium, tembaga, dan stronsium berasal.
Bagaimana menulis aturan main gelombang ini? Itu cerita Modul dua: aturan main kuantum.
Sampai jumpa.

## Hitungan

- 20 adegan; rumus di kartu: 8 (Wien, Planck, Einstein, E = hc/λ, Compton, de Broglie, Heisenberg, + opsional |ψ|² di `jembatan`).
- Panjang narasi ±1950 kata (tanpa judul adegan & kartu); dengan jeda ±13–14 menit.

## Catatan untuk tahap produksi

- `gelap`: celah AgBr disebut "sekitar dua setengah eV" (tepi serapan 2,5–2,7 eV, bergantung suhu; lihat AUDIT). Kertas kontras-variabel modern juga peka hijau, jadi lampu aman yang dianjurkan pabrik ialah coklat muda/amber (Ilford 902, Kodak OC); lampu merah tetap aman secara fisika (foton ≈ 1,9 eV) dan menjadi citra klasik kamar gelap. Batas pabrik: ≤ 4 menit pada jarak ≥ 1,2 m — karena itu narasi "beberapa menit", bukan "berjam-jam".
- Analogi koin di `gelap` sengaja menekankan "satu foton bekerja sendirian" (model satu foton seperti modul; serapan multi-foton dengan laser intens tidak dibahas).
- `atomdiam`: "elektron tidak jatuh ke inti" adalah argumen perkiraan (heuristik), jangan ditampilkan sebagai turunan tepat.
- Fungsi kerja natrium di modul (1,82 eV) berbeda dari nilai CRC (2,36 eV polikristal); karena itu narasi memakai cesium (≈ 2 eV; Michaelson 1977 2,14 eV, CRC 2017 1,95 eV). Kalau ingin mengikuti contoh modul, beri catatan "nilai bergantung permukaan".
- Spektrum garis & Bohr sengaja hanya disinggung (sudah ada video Fisika Atom & Atom Hidrogen).
