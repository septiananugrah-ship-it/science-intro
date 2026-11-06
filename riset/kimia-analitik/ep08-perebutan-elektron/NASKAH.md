# Naskah riset — Seni Mengukur (Kimia Analitik) Ep. 8 "Perebutan Elektron"

Draf untuk video berikutnya (belum dibangun). S1 Kimia UNESA, ±12–13 menit, 20 adegan.
Sumber materi: `materi/Analytical Chemistry.pdf` (Skoog, West, Holler & Crouch ed. 10: §16C potensial formal hlm. 431–432, §17C–17E konstanta kesetimbangan, kurva titrasi redoks & indikator hlm. 446–468, bab 18 "Applications of Oxidation/Reduction Titrations" hlm. 473–495, §37F–37H prosedur permanganat, iodium, tiosulfat hlm. 1023–1034, Lampiran 5 potensial standar & formal hlm. A-12–A-14) + USDA FoodData Central (SR Legacy, vitamin C buah) + artikel Wikipedia *Sodium hypochlorite* (komposisi pemutih rumah tangga, mengutip OxyChem & Smith 1994). Angka dicek di `AUDIT.md`; semua hitungan diulang dengan `hitung.py` (folder ini).

Catatan cakupan: persamaan Nernst dipakai secukupnya untuk menjelaskan bentuk kurva (penurunan lengkap + elektrode → Ep. 9 "Volt yang Bercerita"); dikromat, serium(IV), dan bromat hanya disebut sebagai pembanding; reduktor Jones/Walden tidak dibahas.

## Pilihan judul

1. **"Perebutan Elektron"** — Titrasi Redoks: Permanganometri & Iodometri ← *dipilih*
2. "Ungu yang Ragu-Ragu"
3. "Biru di Ujung Kanji"

Alasan memilih (1): sudah tercantum di rencana seri; redoks memang perebutan elektron antara oksidator dan reduktor, dan titrasi adalah cara menghitung elektron yang berpindah. Judul (2) dipakai sebagai judul adegan `hook`.

## Benang merah

**Misteri:** Larutan natrium oksalat yang diasamkan dan dipanaskan sampai ≈ 85 °C dititrasi dengan kalium permanganat. Tetes ungu **pertama** bertahan beberapa detik sebelum hilang. Tetes-tetes **berikutnya** lenyap hampir seketika begitu menyentuh larutan. Reaksinya sama, suhunya sama, oksalatnya justru makin sedikit. Kenapa reaksi *makin cepat* padahal pereaksinya *makin habis*? (Dan di akhir, merah muda yang tadinya "menetap" pun memudar setelah ≈ 30 detik.)
**Dibuka:** `hook`. **Petunjuk:** `ungu` (warna akhir memudar walau K ≈ 10⁴⁷ → termodinamika bilang "pasti", kinetika bilang "nanti"), `panas` (K reaksi oksalat ≈ 10³³⁸, tetap lambat walau dipanaskan → masalahnya laju, bukan kesetimbangan). **Dipecahkan:** `pecah` — autokatalisis: produk reaksi, ion Mn²⁺, adalah katalisnya (Skoog hlm. 483). Tetes pertama menunggu karena Mn²⁺ belum ada; makin banyak oksalat bereaksi, makin banyak Mn²⁺, makin cepat. Bukti: sejumput MnSO₄ di awal membuat tetes pertama pun langsung hilang. **Kembali lagi:** `peroksida` (H₂O₂ dititrasi dingin, tetap autokatalitik), `penutup`.

## Pembagian bagian

- **Bagian 1 — Siapa yang merebut** (misteri → elektron & bilangan oksidasi → tangga potensial → potensial formal → kurva titrasi redoks → bentuk kurva & indikator)
- **Bagian 2 — Permanganat, si ungu** (indikator diri sendiri → mengapa asam → standardisasi oksalat → mengapa panas → misteri terpecahkan → H₂O₂ antiseptik)
- **Bagian 3 — Iodium, si biru** (iodimetri vs iodometri & kanji → tiosulfat → vitamin C jus → klorin pemutih → keselamatan → memilih titran → penutup)

## Daftar adegan

Gaya seri: **"Meja Analis"** (latar grafit + kisi kertas milimeter samar, alat gelas garis tipis bercahaya). Kode warna episode ini: MnO₄⁻ = ungu, Mn²⁺ = merah muda sangat pucat (hampir bening), MnO₂ = coklat, elektron = butir emas yang berpindah, oksidator = magenta, reduktor = toska, I₂/I₃⁻ = coklat-kuning (makin encer makin kuning pucat), kompleks kanji–iodium = biru tua, tiosulfat = bening dengan tepi toska, Fe²⁺ = hijau pucat, Fe³⁺ = kuning, Ce⁴⁺ = jingga, nilai benar/ekivalen = emas, galat = jingga. Kurva & angka di layar diambil dari `hitung.py`. Warna labu = silang-pudar menurut jumlah zat, tidak pernah berganti berdasarkan ambang; laju pemudaran tetes di `hook`/`pecah` digerakkan oleh kurva laju autokatalitik (sigmoid), bukan ketukan tetap.

| # | id | Judul | Ide visual (bergerak sesuai kimia) |
|---|---|---|---|
| 1 | `hook` | Ungu yang ragu-ragu | Labu bening beruap di atas penangas, termometer 85 °C. Tetes ungu pertama jatuh, menyebar jadi awan ungu yang bertahan; jam pasir kecil berputar "beberapa detik" sebelum ungu pudar. Tetes ke-5, ke-10, ke-20: awan ungu makin cepat lenyap (penghitung detik menyusut). Di ujung, merah muda menetap… lalu memudar pelan (jam 30 s). Tanda tanya berayun. |
| 2 | `judul` | Judul | Dua lingkaran atom saling tarik; butir elektron emas melompat dari toska ke magenta; huruf judul menyala ungu lalu biru tua. |
| 3 | `redoks` | Perebutan elektron | Panggung tarik tambang: oksalat (toska) melepas elektron, permanganat (magenta) menangkap; penghitung bilangan oksidasi Mn turun +7 → +2, C naik +3 → +4. **Kartu rumus.** |
| 4 | `tangga` | Tangga potensial | Tangga vertikal berskala volt: Ce⁴⁺ 1,44 (formal), MnO₄⁻ 1,51, H₂O₂ 1,78 di atas; I₃⁻ 0,536, Fe³⁺ 0,771 di tengah; S₄O₆²⁻ 0,08, CO₂/H₂C₂O₄ −0,49 di bawah. Elektron "jatuh" dari anak tangga bawah ke atas (penurunan energi). Lalu kartu: koefisien ×5 dicoret dari E°. **Kartu rumus.** |
| 5 | `formal` | Potensial formal | Satu anak tangga Fe³⁺/Fe²⁺ bergeser: 0,771 (standar) → 0,732 (HClO₄) → 0,700 (HCl) → 0,68 (H₂SO₄); ion sulfat memeluk Fe³⁺ (kompleks), sehingga Fe³⁺ "bebas" berkurang. **Kartu rumus.** |
| 6 | `kurva` | Kurva titrasi redoks | Buret Ce⁴⁺ ke 50,00 mL Fe²⁺ 0,05 M; titik menggambar kurva E–V: 0,64 (5 mL) → 0,68 (12,5 mL, separuh) → 0,76 (24 mL) → lompat 1,06 di 25 mL → 1,30 → 1,40 (30 mL). Warna larutan hijau pucat → kuning → jingga tipis. **Kartu rumus** (2 momen). |
| 7 | `bentuk` | Bentuk kurva | (a) Kurva encer 10× tergambar tepat di atas kurva semula (berimpit; bandingkan kurva asam-basa Ep. 3 yang menyusut). (b) Kurva Fe²⁺–MnO₄⁻ tidak simetris: titik ekivalen 1,37 V dekat atas. (c) Pita ferroin 1,11 V: merah → biru pucat di dalam lompatan. |
| 8 | `ungu` | Indikator dirinya sendiri | Gelas 100 mL air; mikropipet 0,01–0,02 mL KMnO₄ 0,02 M → semburat ungu terlihat. Lalu labu titik akhir merah muda; partikel MnO₂ coklat sangat pelan tumbuh, merah muda memudar dalam 30 s; kartu K ≈ 10⁴⁷ vs jam pasir. |
| 9 | `asam` | Mengapa harus asam | Garis potensial MnO₄⁻/Mn²⁺ turun seiring pH naik (1,51 → 1,23 V di pH 3); di pH rendah ion Mn²⁺ bening, di asam kurang kuat butir coklat MnO₂ muncul. Botol H₂SO₄ diberi centang, HCl diberi silang (Cl⁻ ikut dioksidasi). **Kartu rumus.** |
| 10 | `standar` | Menstandardisasi si ungu | Kristal KMnO₄ dengan bintik coklat MnO₂; larutan dididihkan, dibiarkan semalam, disaring kaca masir, botol gelap. Neraca: 0,2500 g Na₂C₂O₄ → buret 37,25 mL − blanko 0,05 → 0,02006 M. **Kartu rumus** (2 momen). |
| 11 | `panas` | Mengapa panas | Kartu log K = 338 raksasa; tetapi panah laju kecil. Termometer naik 25 → 85 °C, laju pudar naik tetapi tetes pertama tetap menunggu. Pita "≥ 60 °C"; catatan kecil "hasil 0,1–0,4 % rendah: oksalat teroksidasi udara". |
| 12 | `pecah` | Misteri terpecahkan | Grafik laju vs waktu: kurva S autokatalitik; titik-titik Mn²⁺ merah muda pucat bertambah di labu, setiap ion jadi "pemandu" yang mempercepat tetes berikutnya. Labu kedua dengan sejumput MnSO₄: tetes pertama langsung hilang. **Kartu rumus.** |
| 13 | `peroksida` | Antiseptik 3 % | Botol antiseptik tanpa merek; gelembung O₂ pelan. Alur: 5,000 g → labu 100 mL → pipet 25,00 mL → asam sulfat encer, **tanpa** dipanaskan → 21,40 mL KMnO₄. Angka mengalir ke kartu, hasil 2,92 %. Label kecil "contoh hitungan". **Kartu rumus** (2 momen). |
| 14 | `iodium` | Si biru | Spiral amilosa (heliks) dengan rantai I₃⁻ masuk ke tengahnya → biru tua. Dua pintu: "iodimetri" (I₂ sebagai titran) dan "iodometri" (I₂ dilepaskan analit lalu dititrasi). Tangga potensial: I₃⁻ 0,536 V di tengah, "oksidator lembut". **Kartu rumus.** |
| 15 | `tiosulfat` | Tiosulfat & kanji yang ditunda | Labu coklat → kuning pucat saat tiosulfat menetes; baru kanji ditambahkan → biru; tetes terakhir → bening. Inset: KIO₃ + KI + asam → I₂ (1 : 3 : 6). **Kartu rumus.** |
| 16 | `vitaminc` | Vitamin C di gelas jus | Batang USDA tumbuh: jambu biji 228, kiwi 93, pepaya 61, jeruk 53, jus jeruk 50, mangga 36, apel 5 mg/100 g. Lalu 25,00 mL jus disaring + kanji, buret I₂ 0,005 M, biru menetap di 13,60 mL → 47,9 mg/100 mL. **Kartu rumus.** |
| 17 | `pemutih` | Klorin di botol pemutih | Botol pemutih tanpa merek, label "± 5 % NaOCl". Alur: 10,00 mL → 250 mL → 25,00 mL + KI + asam asetat → coklat I₂ → tiosulfat 12,60 mL → 4,69 % NaOCl, 4,47 % klorin aktif. Kalender: kadar turun seiring waktu simpan. **Kartu rumus** (2 momen). |
| 18 | `aman` | Jangan dicampur | Ikon: pemutih + pembersih asam → awan kuning-hijau Cl₂ (silang merah besar); pemutih + amonia → silang. Di lab: lemari asam, sarung tangan, jumlah kecil. |
| 19 | `pilih` | Memilih titran | Tabel lima oksidator (Skoog Tabel 18-3) muncul baris demi baris: KMnO₄ 1,51 (diri sendiri), Ce⁴⁺ 1,44 (ferroin), K₂Cr₂O₇ 1,33, KBrO₃, I₂ 0,536 (kanji). Penanda: kuat ↔ selektif. |
| 20 | `penutup` | Penutup & teaser Ep. 9 | Kembali ke labu panas: tetes pertama menunggu, lalu tetes berikutnya lenyap; tulisan "produknya sendiri yang mempercepat". Kawat platina dicelupkan ke labu Fe/Ce, jarum voltmeter bergerak mengikuti kurva. Teks: "Berikutnya — Volt yang Bercerita". |

## Narasi

Konvensi: kalimat pendek, gaya tutur. **[KARTU]** = rumus yang tampil di kartu `Formula` (≥ 56 px, satu kartu per momen). Angka ditulis seperti diucapkan; teks TTS dibuat terpisah nanti. Semua angka cocok dengan keluaran `hitung.py`.

### 1 · `hook` — Ungu yang ragu-ragu

Di atas penangas ada labu berisi larutan oksalat, diasamkan, dipanaskan sampai hampir delapan puluh lima derajat.
Dari buret, kita teteskan larutan ungu: kalium permanganat.
Tetes pertama jatuh. Awan ungu menyebar, dan bertahan. Satu detik, dua, beberapa detik, baru pudar.
Tetes berikutnya hilang sedikit lebih cepat. Lalu lebih cepat lagi. Tetes kedua puluh lenyap begitu menyentuh larutan.
Aneh. Oksalat di labu justru makin sedikit. Biasanya, makin sedikit pereaksi, makin lambat reaksinya. Di sini kebalikannya.
Dan di ujung, satu tetes membuat larutan merah muda. Merah muda itu kita tunggu. Setengah menit kemudian, ia ikut memudar.
Apa yang sebenarnya terjadi di dalam labu ini?

### 2 · `judul` — Judul

Perebutan Elektron. Seni Mengukur, episode delapan.

### 3 · `redoks` — Perebutan elektron

Di titrasi asam basa, yang berpindah adalah proton. Di titrasi redoks, yang diperebutkan adalah elektron.
Oksidator merebut elektron, dan ia sendiri tereduksi. Reduktor melepas elektron, dan ia teroksidasi. Dua kejadian ini selalu terjadi bersamaan.
Permanganat adalah perebut yang rakus. Mangan di dalamnya bermuatan tujuh positif, dan dalam suasana asam ia merebut lima elektron sekaligus.

**[KARTU]** MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O  ·  H₂C₂O₄ → 2CO₂ + 2H⁺ + 2e⁻

Setiap oksalat hanya melepas dua elektron. Agar elektron yang direbut sama dengan yang dilepas, dua permanganat bertemu lima oksalat. Nisbah dua banding lima. Angka ini akan muncul berkali-kali.

### 4 · `tangga` — Tangga potensial

Siapa merebut dari siapa? Jawabannya ada di potensial reduksi standar, E nol.
Bayangkan tangga. Di anak tangga atas, perebut kuat: hidrogen peroksida satu koma tujuh delapan volt, permanganat satu koma lima satu. Di tengah, besi tiga dan iodium. Di bawah, tetrationat dan karbon dioksida, yang sangat enggan merebut.
Elektron selalu mengalir dari pasangan yang lebih bawah ke pasangan yang lebih atas.
Satu jebakan yang sering terjadi.

**[KARTU]** MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O   E°(Fe³⁺/Fe²⁺) tetap 0,771 V, bukan × 5

Potensial adalah besaran intensif, seperti suhu. Mengalikan persamaan dengan lima tidak mengubah potensialnya.

### 5 · `formal` — Potensial formal

Angka di tabel berlaku pada keadaan standar yang ideal. Larutan titrasi sungguhan jauh dari ideal.
Lihat besi. Potensial standarnya nol koma tujuh tujuh satu volt. Di asam perklorat satu molar, nol koma tujuh tiga dua. Di asam klorida, nol koma tujuh nol nol. Di asam sulfat, hanya nol koma enam delapan.
Kenapa turun? Ion sulfat dan klorida memeluk besi tiga menjadi kompleks. Besi tiga yang bebas berkurang, sehingga pasangan itu kurang bersemangat merebut elektron.

**[KARTU]** E°′ = potensial saat [oks]/[red] analitik = 1, dengan medium tertentu (Fe³⁺/Fe²⁺: 0,68 V dalam H₂SO₄ 1 M)

Inilah potensial formal, E nol aksen. Untuk titrasi nyata, ia lebih jujur daripada potensial standar.

### 6 · `kurva` — Kurva titrasi redoks

Mari menggambar kurvanya. Di labu ada lima puluh mililiter besi dua nol koma nol lima molar dalam asam sulfat. Dari buret, serium empat nol koma satu molar. Satu serium merebut satu elektron dari satu besi.
Sumbu tegaknya bukan pH, melainkan potensial larutan.
Sebelum titik ekivalen, potensial ditentukan oleh rasio besi tiga dan besi dua. Pada lima mililiter, nol koma enam empat volt. Tepat di separuh jalan, rasionya satu, dan potensial sama dengan potensial formal besi, nol koma enam delapan.

**[KARTU]** E = E°′(Fe) − 0,0592 log ([Fe²⁺]/[Fe³⁺])

Di titik ekivalen, dua puluh lima mililiter, potensial adalah rata-rata kedua potensial formal.

**[KARTU]** E_ek = (E°′Fe + E°′Ce)/2 = (0,68 + 1,44)/2 = 1,06 V

Dari dua puluh empat koma sembilan ke dua puluh lima koma satu mililiter, potensial melompat hampir setengah volt, dari nol koma delapan dua ke satu koma tiga nol.

### 7 · `bentuk` — Bentuk kurva

Ada tiga hal menarik dari kurva ini.
Pertama, encerkan kedua larutan sepuluh kali. Kurvanya tidak berubah sama sekali. Potensial bergantung pada rasio konsentrasi, dan rasio tidak peduli pengenceran. Ingat titrasi asam basa di episode tiga: di sana pengenceran memperkecil lompatan.
Kedua, kurva ini simetris karena kedua pihak memindahkan satu elektron. Kalau besi dititrasi permanganat, yang memindahkan lima elektron, titik ekivalennya bergeser ke satu koma tiga tujuh volt, dekat sisi permanganat. Kurvanya miring sebelah.
Ketiga, makin jauh jarak dua anak tangga, makin tinggi lompatannya. Indikator redoks seperti ferroin berubah dari merah ke biru pucat sekitar satu koma satu satu volt, di dalam lompatan besi dan serium.
Tapi ada titran yang tidak butuh indikator sama sekali.

### 8 · `ungu` — Indikator dirinya sendiri

Permanganat warnanya ungu pekat. Hasil reduksinya, ion mangan dua, hampir tak berwarna.
Menurut buku Skoog, cukup nol koma nol satu sampai nol koma nol dua mililiter permanganat nol koma nol dua molar di dalam seratus mililiter air, dan ungunya sudah terlihat. Kurang dari setengah tetes.
Jadi selama ada reduktor, setiap tetes ungu langsung dipucatkan. Begitu reduktor habis, tetes berikutnya mewarnai larutan merah muda. Titran ini menjadi indikator bagi dirinya sendiri.
Lalu kenapa merah muda di akhir memudar? Kelebihan permanganat perlahan bereaksi dengan ion mangan dua yang banyak, membentuk mangan dioksida.
Tetapan kesetimbangan reaksi itu sekitar sepuluh pangkat empat puluh tujuh. Secara termodinamika, permanganat seharusnya lenyap total. Tapi ia butuh kira-kira tiga puluh detik.
Pasti terjadi bukan berarti cepat terjadi. Ingat petunjuk ini.

### 9 · `asam` — Mengapa harus asam

Lihat lagi setengah reaksinya. Untuk setiap permanganat, ada delapan ion hidrogen.
Akibatnya, potensial permanganat sangat bergantung pada keasaman. Setiap kenaikan satu satuan pH menurunkan potensialnya hampir satu per sepuluh volt.

**[KARTU]** E = 1,51 − (0,0592/5) log ([Mn²⁺] / [MnO₄⁻][H⁺]⁸)

Yang lebih penting, Skoog mencatat bahwa reduksi lima elektron sampai mangan dua hanya terjadi bila asam kuatnya sedikitnya nol koma satu molar. Kalau kurang asam, mangan berhenti di tengah jalan, misalnya sebagai mangan dioksida yang coklat. Nisbah dua banding lima tidak berlaku lagi.
Asamnya pun dipilih: asam sulfat, bukan asam klorida. Permanganat pelan-pelan mengoksidasi klorida, sehingga titran terpakai terlalu banyak.

### 10 · `standar` — Menstandardisasi si ungu

Kalium permanganat bukan standar primer. Padatannya selalu mengandung sedikit mangan dioksida, dan mangan dioksida mempercepat penguraian larutan.
Maka larutan dididihkan, didiamkan semalam, disaring dengan kaca masir, bukan kertas, lalu disimpan di botol gelap.
Konsentrasinya kemudian ditentukan dengan standar primer: natrium oksalat.

**[KARTU]** 2MnO₄⁻ + 5H₂C₂O₄ + 6H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O

Contoh angka rekaan. Nol koma dua lima nol nol gram natrium oksalat, satu koma delapan enam enam milimol. Kalikan dua per lima: nol koma tujuh empat enam tiga milimol permanganat. Titik akhir di tiga puluh tujuh koma dua lima mililiter, dikurangi blanko nol koma nol lima.

**[KARTU]** c(KMnO₄) = (0,2500 g / 134,00 g/mol) × 2/5 / 37,20 mL = 0,02006 M

### 11 · `panas` — Mengapa panas

Reaksi permanganat dengan oksalat sangat disukai alam. Dari tangga potensial, logaritma tetapan kesetimbangannya sekitar tiga ratus tiga puluh delapan. Angka satu diikuti tiga ratus tiga puluh delapan nol.
Tapi, kata Skoog, reaksi ini rumit dan berjalan lambat, bahkan pada suhu tinggi. Karena itu prosedurnya memanaskan larutan sampai delapan puluh hingga sembilan puluh derajat, dan memanaskan ulang bila suhu turun di bawah enam puluh.
Panas pun ada harganya. Sebagian kecil asam oksalat teroksidasi udara, sehingga konsentrasi permanganat terbaca nol koma satu sampai nol koma empat persen terlalu rendah.
Tetapan kesetimbangan raksasa, reaksi tetap lambat. Jadi masalah tetes pertama bukan soal kesetimbangan. Ini soal laju. Petunjuk kedua.

### 12 · `pecah` — Misteri terpecahkan

Sekarang jawabannya. Kalimat kuncinya ada di buku Skoog: reaksi ini lambat, kecuali ada ion mangan dua sebagai katalis.
Di awal titrasi, labu belum punya mangan dua sama sekali. Tetes pertama harus bereaksi tanpa bantuan. Lambat.
Tapi setiap permanganat yang bereaksi justru menghasilkan satu ion mangan dua. Mangan dua itu mempercepat reaksi permanganat berikutnya, yang menghasilkan lebih banyak mangan dua lagi.

**[KARTU]** MnO₄⁻ + oksalat → Mn²⁺ + CO₂ ;  laju naik seiring [Mn²⁺] bertambah (autokatalisis)

Produknya sendiri menjadi katalis. Inilah autokatalisis. Lajunya melengkung seperti huruf S: pelan di awal, melesat di tengah.
Buktinya mudah. Tambahkan sejumput mangan sulfat sebelum titrasi, dan tetes pertama pun langsung hilang.
Tetes pertama tidak ragu-ragu. Ia hanya menunggu katalis yang belum lahir.

### 13 · `peroksida` — Antiseptik 3 %

Permanganat yang sudah dibakukan siap dipakai. Contohnya hidrogen peroksida, antiseptik luka yang dijual sekitar tiga persen.
Peroksida di sini menjadi reduktor. Ia melepas elektron dan menjadi gas oksigen. Nisbahnya lagi-lagi dua banding lima.

**[KARTU]** 2MnO₄⁻ + 5H₂O₂ + 6H⁺ → 2Mn²⁺ + 5O₂ + 8H₂O

Contoh angka rekaan. Lima gram antiseptik diencerkan menjadi seratus mililiter. Dua puluh lima mililiter diasamkan dengan asam sulfat encer, tanpa dipanaskan, karena peroksida terurai oleh panas. Titik akhir di dua puluh satu koma empat nol mililiter.

**[KARTU]** % H₂O₂ = 21,40 mL × 0,02006 M × 5/2 × 4 × 34,01 mg/mmol / 5000 mg × 100 % = 2,92 %

Dua koma sembilan dua persen, sedikit di bawah label. Masuk akal untuk botol yang sudah lama dibuka, karena peroksida pelan-pelan terurai menjadi air dan oksigen.
Dan ya, di awal titrasi ini pun tetes pertama sedikit ragu. Mangan dua belum lahir.

### 14 · `iodium` — Si biru

Sekarang tokoh kedua: iodium. Di tangga potensial, iodium ada di tengah, nol koma lima tiga enam volt. Oksidator yang lembut.
Kelembutan ini justru berguna. Iodium hanya merebut elektron dari reduktor yang kuat, seperti vitamin C.
Iodium sukar larut dalam air, jadi dilarutkan dalam kalium iodida sebagai ion triiodida.

**[KARTU]** I₃⁻ + 2e⁻ ⇌ 3I⁻   E° = 0,536 V

Ada dua cara memakainya. Iodimetri: iodium menjadi titran, langsung menitrasi reduktor. Iodometri: oksidator di sampel dibiarkan bereaksi dengan iodida berlebih, lalu iodium yang terbentuk dititrasi.
Indikatornya istimewa: kanji. Rantai amilosa di dalam kanji melingkar seperti per, dan triiodida masuk ke tengah lingkaran itu. Hasilnya biru tua yang sangat jelas.

### 15 · `tiosulfat` — Tiosulfat & kanji yang ditunda

Untuk menitrasi iodium, pasangannya hampir selalu natrium tiosulfat. Dua tiosulfat menyerahkan dua elektron kepada satu iodium, dan berubah menjadi tetrationat.

**[KARTU]** I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻   ·   IO₃⁻ + 5I⁻ + 6H⁺ → 3I₂ + 3H₂O

Tiosulfat dibakukan dengan kalium iodat. Satu iodat menghasilkan tiga iodium, yang menghabiskan enam tiosulfat.
Dua aturan kecil. Larutan harus tidak basa, pH di bawah tujuh, agar tiosulfat berubah tepat menjadi tetrationat.
Dan kanji jangan dimasukkan di awal. Pada iodium pekat, kanji terurai dan tidak kembali. Tunggu sampai coklat memudar menjadi kuning pucat, baru kanji ditambahkan. Larutan membiru, lalu beberapa tetes kemudian, bening.

### 16 · `vitaminc` — Vitamin C di gelas jus

Vitamin C, asam askorbat, adalah reduktor kuat. Ia melepas dua elektron kepada satu iodium.

**[KARTU]** C₆H₈O₆ + I₂ → C₆H₆O₆ + 2I⁻ + 2H⁺   (1 : 1)

Data Kementerian Pertanian Amerika Serikat, FoodData Central: jeruk manis segar sekitar lima puluh tiga miligram per seratus gram. Jus jeruk segar lima puluh. Pepaya enam puluh satu. Dan jambu biji, dua ratus dua puluh delapan. Lebih dari empat kali jeruk.
Contoh angka rekaan. Dua puluh lima mililiter jus jeruk disaring, kanji ditambahkan di awal, karena di sini iodiumlah yang menetes. Selama vitamin C masih ada, setiap iodium langsung direduksi. Tetes berlebih pertama membuat biru menetap, di tiga belas koma enam nol mililiter iodium nol koma nol nol lima molar.
Itu nol koma nol enam delapan milimol, atau sebelas koma sembilan delapan miligram. Empat puluh tujuh koma sembilan miligram per seratus mililiter. Dekat dengan angka USDA.
Satu catatan: vitamin C mudah teroksidasi udara dan panas. Jus harus dititrasi segera setelah diperas.

### 17 · `pemutih` — Klorin di botol pemutih

Pemutih pakaian berisi natrium hipoklorit, umumnya tiga sampai delapan persen saat dibuat. Banyak label menulis sekitar lima persen. Benarkah?
Hipoklorit adalah oksidator. Ia tidak dititrasi langsung. Kita pakai iodometri.

**[KARTU]** OCl⁻ + 2I⁻ + 2H⁺ → Cl⁻ + I₂ + H₂O   →   1 OCl⁻ ≙ 1 I₂ ≙ 2 S₂O₃²⁻

Contoh angka rekaan. Sepuluh mililiter pemutih diencerkan menjadi dua ratus lima puluh. Dua puluh lima mililiter, berarti satu mililiter pemutih asli, diberi kalium iodida berlebih dan asam asetat. Larutan menjadi coklat. Iodium dititrasi dengan tiosulfat nol koma satu molar: dua belas koma enam nol mililiter.

**[KARTU]** NaOCl = 12,60 mL × 0,1000 M ÷ 2 × 74,44 mg/mmol = 46,90 mg per mL → 4,69 % (b/v)

Industri sering menulisnya sebagai klorin aktif: berapa gram gas klorin yang setara daya oksidasinya. Kalikan nol koma sembilan lima, dan kita dapat empat koma empat tujuh persen.
Sedikit di bawah lima persen. Wajar, karena hipoklorit pelan-pelan terurai selama disimpan. Pemutih lama memang lebih lemah.

### 18 · `aman` — Jangan dicampur

Reaksi tadi, hipoklorit bertemu asam, juga menjelaskan satu peringatan penting di rumah.
Jangan pernah mencampur pemutih dengan pembersih yang bersifat asam. Hipoklorit dan asam dapat melepaskan gas klorin yang beracun. Jangan pula mencampurnya dengan amonia.
Di laboratorium, titrasi ini memakai jumlah kecil, larutan encer, dan iodida berlebih yang langsung menangkap klorin. Tetap kerjakan di lemari asam, dengan sarung tangan dan kacamata.

### 19 · `pilih` — Memilih titran

Jadi, titran redoks mana yang dipilih?
Permanganat: sangat kuat, murah, dan menjadi indikator sendiri. Tapi tidak stabil, harus dibakukan, dan tidak cocok dengan asam klorida.
Serium empat: hampir sekuat permanganat, stabil, tahan klorida, tapi lebih mahal dan butuh indikator seperti ferroin.
Dikromat: sedikit lebih lemah dan sangat stabil, tapi kromium enam beracun.
Iodium: lemah, justru karena itu selektif, dengan kanji sebagai indikator paling peka.
Semuanya menjawab pertanyaan yang sama: berapa elektron yang berpindah, sampai tak ada lagi yang bisa direbut.

### 20 · `penutup` — Penutup & teaser Ep. 9

Kembali ke labu panas di awal. Tetes ungu pertama menunggu, bukan karena reaksinya tidak mau, melainkan karena katalisnya belum ada. Katalis itu adalah hasil reaksinya sendiri, ion mangan dua.
Tetapan kesetimbangan memberi tahu ke mana reaksi akan pergi. Laju memberi tahu kapan ia sampai. Analis yang baik memperhatikan keduanya.
Kurva besi dan serium tadi kita hitung dari potensial. Tapi potensial juga bisa diukur langsung: celupkan kawat platina, sambungkan ke voltmeter, dan jarumnya menggambar kurva itu untuk kita.
Bagaimana sebuah kawat atau selaput kaca bisa mengubah konsentrasi menjadi volt?
Itu cerita episode berikutnya: Volt yang Bercerita.

---

## Hitungan (dari `hitung.py`)

Potensial (V vs SHE, Skoog Lampiran 5): MnO₄⁻/Mn²⁺ 1,51; Ce⁴⁺/Ce³⁺ 1,44 (formal, H₂SO₄ 1 M); Fe³⁺/Fe²⁺ 0,771 (formal 0,68 H₂SO₄ · 0,700 HCl · 0,732 HClO₄); I₃⁻/I⁻ 0,536; S₄O₆²⁻/S₂O₃²⁻ 0,08; CO₂/H₂C₂O₄ −0,49; H₂O₂/H₂O 1,776; O₂/H₂O₂ 0,682; MnO₄⁻/MnO₂ 1,695; MnO₂/Mn²⁺ 1,23; ferroin 1,11 (transisi, Tabel 17-3). 2,303RT/F = 0,05916 V (Skoog 0,0592).

**1. Persamaan setara** (neraca atom + muatan dicek di skrip)

| Reaksi | Nisbah | e⁻ per persamaan |
|---|---|---|
| 2MnO₄⁻ + 5H₂C₂O₄ + 6H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O | MnO₄⁻ : oksalat = 2 : 5 | 10 |
| 2MnO₄⁻ + 5H₂O₂ + 6H⁺ → 2Mn²⁺ + 5O₂ + 8H₂O | MnO₄⁻ : H₂O₂ = 2 : 5 | 10 |
| MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O | 1 : 5 | 5 |
| OCl⁻ + 2I⁻ + 2H⁺ → Cl⁻ + I₂ + H₂O | OCl⁻ : I₂ = 1 : 1 | 2 |
| I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻ | I₂ : S₂O₃²⁻ = 1 : 2 | 2 |
| C₆H₈O₆ + I₂ → C₆H₆O₆ + 2I⁻ + 2H⁺ | 1 : 1 | 2 |
| IO₃⁻ + 5I⁻ + 6H⁺ → 3I₂ + 3H₂O | IO₃⁻ : I₂ : S₂O₃²⁻ = 1 : 3 : 6 | 5 |
| 2MnO₄⁻ + 3Mn²⁺ + 2H₂O → 5MnO₂ + 4H⁺ | (memudarnya titik akhir) | 6 |

**2. Termodinamika vs kinetika** (log K = nΔE°/0,05916)

| Reaksi | ΔE° (V) | n | log K |
|---|---|---|---|
| MnO₄⁻ + oksalat | 2,00 | 10 | 338 |
| MnO₄⁻ + H₂O₂ | 0,828 | 10 | 140 |
| Ce⁴⁺ + Fe²⁺ (formal) | 0,76 | 1 | 12,8 (K = 7,0 × 10¹²; Skoog 7 × 10¹²) |
| I₃⁻ + tiosulfat | 0,456 | 2 | 15,4 |
| 2MnO₄⁻ + 3Mn²⁺ → MnO₂ | 0,465 | 6 | 47,2 (Skoog ≈ 10⁴⁷) |

**3. Standardisasi KMnO₄ (rekaan)**: 0,2500 g Na₂C₂O₄ = 1,8657 mmol × 2/5 = 0,7463 mmol MnO₄⁻; 37,25 − 0,05 = 37,20 mL → **0,02006 M**. Cek rumus dengan Skoog Contoh 18-4 (0,1278 g, 33,31 mL → 0,01145 M ✓). Batas lihat Skoog: 0,01–0,02 mL KMnO₄ 0,02 M / 100 mL ≈ 2–4 × 10⁻⁶ M MnO₄⁻.

**4. H₂O₂ antiseptik (rekaan)**

| Langkah | Nilai |
|---|---|
| Sampel | 5,000 g → 100,0 mL; alikuot 25,00 mL (1,250 g; faktor 4) |
| KMnO₄ | 21,40 mL × 0,02006 M = 0,4293 mmol |
| H₂O₂ | × 5/2 = 1,0732 mmol (alikuot) → 4,2928 mmol total × 34,01 = 146,0 mg |
| Kadar | **2,92 % (b/b)** = 97,3 % dari label 3 % (tepat 3,00 % butuh 21,99 mL) |
| "10 volume" | 3 % (b/v): 1 mL → 0,441 mmol O₂ = 9,9 mL O₂ (0 °C, 1 atm) |

**5. Pemutih (rekaan)**

| Langkah | Nilai |
|---|---|
| Sampel | 10,00 mL → 250,0 mL; alikuot 25,00 mL = 1,000 mL pemutih asli |
| Tiosulfat | 12,60 mL × 0,1000 M = 1,2600 mmol → I₂ = OCl⁻ = 0,6300 mmol |
| NaOCl | 0,6300 × 74,44 = 46,90 mg/mL → **4,69 % (b/v)** (5,00 % butuh 13,43 mL; terukur 93,8 % label) |
| Klorin aktif | 0,6300 × 70,90 = 44,67 mg/mL → **4,47 % (b/v)**; faktor 70,90/74,44 = 0,9524 |
| b/b (asumsi ρ ≈ 1,08 g/mL ⚠) | 4,34 % NaOCl |
| Standardisasi tiosulfat | Skoog Contoh 18-1: 0,1210 g KIO₃ × 6 / 41,64 mL = 0,08147 M ✓; rancangan ≈ 0,143 g KIO₃ untuk 40 mL tiosulfat 0,1 M |

**6. Vitamin C** — USDA FDC (SR Legacy, mg/100 g): jambu biji 228 · kiwi 92,7 · pepaya 60,9 · stroberi 58,8 · jeruk 53,2 · jus jeruk segar 50,0 · nanas 47,8 · mangga 36,4 · jeruk keprok 26,7 · tomat 13,7 · apel 4,6. Titrasi rekaan: 13,60 mL I₂ 0,00500 M = 0,0680 mmol × 176,12 = 11,98 mg per 25,00 mL → **47,9 mg/100 mL** (96 % nilai USDA; 50 mg/100 mL butuh 14,19 mL). Segelas 200 mL ≈ 96 mg.

**7. Kurva Fe²⁺–Ce⁴⁺** (50,00 mL Fe²⁺ 0,05000 M + Ce⁴⁺ 0,1000 M, [H⁺] = 1; neraca eksak dengan K = 7,0 × 10¹²; cocok Skoog Tabel 17-2)

| V (mL) | 5,00 | 12,50 | 15,00 | 20,00 | 24,00 | 24,90 | 25,00 | 25,10 | 26,00 | 30,00 | 50,00 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| E (V) | 0,644 | 0,680 | 0,690 | 0,716 | 0,762 | 0,822 | 1,060 | 1,298 | 1,357 | 1,399 | 1,440 |

Encer 10×: nilai sama (0,644 · 0,822 · 1,298). Lompatan 24,90 → 25,10 mL = 0,48 V. Fe²⁺–MnO₄⁻: E_ek = (5 × 1,51 + 0,68)/6 = **1,37 V**; sesudah ekivalen naik pelan (26 mL KMnO₄ 0,02 M → 1,493 V; 30 mL → 1,502 V).

**8. Potensial formal**: 0,771 − 0,68 = 0,091 V ≙ rasio efektif 35×. **9. pH**: E(MnO₄⁻/Mn²⁺) turun 0,0947 V per satuan pH (1,51 → 1,23 V di pH 3).

**Ringkasan:** 20 adegan; 16 kartu rumus (setengah reaksi Mn/oksalat, E° intensif, potensial formal, Nernst Fe, E_ek, Nernst MnO₄⁻, reaksi standardisasi, c KMnO₄, autokatalisis, reaksi H₂O₂, % H₂O₂, I₃⁻/I⁻, tiosulfat & iodat, vitamin C, OCl⁻ & nisbah, % NaOCl). Panjang narasi ≈ 1880 kata (tanpa judul adegan & kartu) → dengan jeda ≈ 12–13 menit.

## Catatan untuk tahap produksi

- **Benang merah & mekanisme:** Skoog hanya menyatakan "proceeds slowly … unless manganese(II) is present as a catalyst" dan autokatalisis (hlm. 483). Rincian mekanisme (perantara Mn(III)–oksalato) **tidak** diucapkan (⚠ belum dicek ke sumber primer); boleh visual "pemandu" tanpa label Mn(III). Demonstrasi "sejumput MnSO₄" = konsekuensi langsung pernyataan Skoog, tetapi tidak ada angka waktu yang dicek → jangan beri detik di layar.
- **Detik tetes pertama:** Skoog: "several seconds". Penghitung waktu di `hook` kualitatif (tanpa angka). Merah muda titik akhir: "persists for about 30 seconds" (hlm. 483) dan "fades only gradually over a period of perhaps 30 seconds" (hlm. 480).
- **Suhu:** prosedur Skoog §37F-2: 80–90 °C, panaskan ulang bila < 60 °C; teks bab 18 menyebut 60–90 °C. Narasi `hook` "hampir delapan puluh lima derajat" (di tengah 80–90).
- **H₂O₂ tanpa pemanasan:** Skoog Contoh 18-5 hanya "diluted … made slightly acidic with dilute H₂SO₄" (tidak menyebut suhu); alasan "terurai oleh panas" pengetahuan umum (⚠ kualitatif). Kalimat "tetes pertama pun sedikit ragu" di `peroksida` = autokatalisis Mn²⁺ yang juga dikenal untuk H₂O₂ (⚠ tidak ada di Skoog) — boleh dihapus bila ingin ketat.
- **Label 3 %:** Skoog: "approximately 3 % (w/w)". Rentang farmakope (mis. USP 2,5–3,5 %, Farmakope Indonesia) belum dibuka → jangan ucapkan batas.
- **Pemutih:** "3–8 % saat dibuat, menurun selama disimpan" dari Wikipedia (mengutip OxyChem & Smith 1994) — sekunder. Klaim "sekitar 5 %" di label produk Indonesia **belum dicek ke label nyata** (⚠); visual tanpa merek. Massa jenis 1,08 g/mL hanya asumsi di lampiran, tidak diucapkan. Kadar ditulis % (b/v) — beri label jelas (miskonsepsi #13).
- **Keselamatan:** campuran pemutih + asam → Cl₂, + amonia → kloramin: pengetahuan umum (⚠ sumber resmi belum dibuka); narasi tidak memberi angka.
- **Vitamin C:** angka USDA per 100 **g**; narasi jus memakai per 100 **mL** (selisih massa jenis ≈ 4 % diabaikan, ditulis "dekat dengan"). Gangguan reduktor lain di jus (mis. SO₂ pengawet) dan pentingnya pengasaman (asam metafosfat/oksalat) tidak dibahas — bisa ditambah sebagai teks kecil (⚠ sumber belum dicek). Prosedur vitamin C di Skoog §37I-3 memakai bromat, bukan iodium; iodimetri askorbat ada di Tabel 18-6.
- **Kanji:** Skoog memakai istilah "β-amylose" (penamaan lama); narasi cukup "amilosa". Fraksi bercabang (amilopektin) memberi warna kemerahan — tidak diucapkan.
- **Iodimetri vs iodometri:** istilah tidak ada di Skoog (konvensi buku teks Indonesia & umum) (⚠); prinsipnya (titrasi langsung dengan I₂ vs I₂ dibebaskan lalu dititrasi tiosulfat) ✓ Skoog §18B-2, §18C-3.
- **Kurva tak simetris:** E_ek 1,37 V memakai E° 1,51 (standar) dan [H⁺] = 1; Skoog tidak memberi contoh Fe–MnO₄⁻ numerik → angka dari `hitung.py`.
- **Notasi:** "≈" untuk perkiraan; label botol pemutih di layar tulis "≈ 5 % NaOCl" (bukan "±"). Koma desimal di semua kartu. Kartu `tangga` memakai 1,78 untuk H₂O₂ (Lampiran 5: 1,776; Skoog §18A: 1,78).
- Teks TTS: "KMnO₄" → "kalium permanganat"; "MnO₄⁻" → "permanganat"; "Mn²⁺" → "mangan dua"; "Na₂C₂O₄" → "natrium oksalat"; "H₂O₂" → "hidrogen peroksida"; "S₂O₃²⁻" → "tiosulfat"; "S₄O₆²⁻" → "tetrationat"; "I₃⁻" → "triiodida"; "OCl⁻" → "hipoklorit"; "Ce⁴⁺" → "serium empat"; "E°′" → "e nol aksen"; "USDA" → "yu-es-di-a"; "Skoog" → "skug"; "M" → "molar"; "mmol" → "milimol"; "b/v" → "bobot per volume".
