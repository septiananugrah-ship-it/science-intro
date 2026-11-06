# Naskah riset — Seni Mengukur (Kimia Analitik) Ep. 4 "Si Keras Kepala"

Draf untuk video berikutnya (belum dibangun). S1 Kimia UNESA, ±12–13 menit, 21 adegan.
Sumber materi: `materi/Analytical Chemistry.pdf` (Skoog, West, Holler & Crouch ed. 10, bab 7C "Buffer Solutions" hlm. 183–191, bab 13 "Complex Acid-Base Systems" hlm. 314–340, Lampiran 3 hlm. A-8) + sumber daring: NIST SRM 186g (penyangga fosfat pH standar), Merck Manual Professional (regulasi asam-basa, gangguan asam-basa, fosfat serum), dan beberapa sumber sekunder yang ditandai ⚠ di `AUDIT.md`. Semua angka dihitung ulang dengan `hitung.py` (folder ini; neraca muatan eksak, Kw = 1,00 × 10⁻¹⁴, tetapan Skoog Lampiran 3, koreksi Davies untuk kekuatan ion).

Catatan cakupan: melanjutkan teaser Ep. 3 ("dari 10 sampai 40 mL pH hanya naik ≈ 1,2 — kenapa?"). Fokus: cara kerja penyangga, Henderson–Hasselbalch dan batasnya, kapasitas, membuat penyangga di lab, asam poliprotik (H₃PO₄, CO₂/HCO₃⁻), darah. Titrasi asam poliprotik (dua titik ekivalen) hanya disinggung; elektrode kaca untuk Ep. 9; penyangga amonia pH 10 dipakai sebagai jembatan ke Ep. 5 (EDTA).

## Pilihan judul

1. **"Si Keras Kepala"** — Larutan Penyangga ← *dipilih*
2. "Dua Puluh Banding Satu"
3. "Darah yang Menolak Berubah"

Alasan memilih (1): sudah tercantum di rencana seri dan diucapkan di penutup Ep. 3; sifat "keras kepala" (menolak perubahan pH tetapi tidak kebal) persis pesan sains episode ini. Judul (2) dipakai sebagai angka kunci misteri dan dijawab di adegan `terbuka`.

## Benang merah

**Misteri:** Darah kita dijaga di pH 7,35–7,45. Penyangga utamanya pasangan CO₂/bikarbonat, yang pKa'-nya 6,1 — terpaut 1,3 satuan dari 7,4, sehingga bikarbonat harus 20 kali lebih banyak daripada CO₂. Menurut aturan buku (pilih pKa dalam ±1 dari pH sasaran, kapasitas terbesar saat 1 : 1), ini penyangga yang "salah pilih". Fosfat, dengan pKa' ≈ 6,8, tampak jauh lebih cocok. Kenapa tubuh mempercayakan nyawa pada penyangga yang tampak buruk — dan kenapa justru berhasil?
**Dibuka:** adegan `hook`. **Petunjuk:** `kapasitas` (kapasitas turun jauh dari pKa), `rentang` (aturan pKa ± 1), `karbonat` (CO₂ adalah gas; H₂CO₃ sejati hanya ≈ 0,3 %). **Dipecahkan:** `darah` (rasio 20 : 1 → 95 % "amunisi" melawan asam, padahal tubuh terutama menghasilkan asam) dan `terbuka` (paru membuang CO₂ → sistem terbuka; beban asam 10 mmol/L hanya menurunkan pH 0,23, bukan 1,20 seperti sistem tertutup, lebih baik daripada penyangga "ideal" pKa 7,4). **Kembali lagi:** `fosfatsel` (fosfat memang ideal, tetapi di plasma hanya ≈ 1 mmol/L — ia bekerja di dalam sel dan urin) dan `penutup`.

## Pembagian bagian

- **Bagian 1 — Menolak berubah** (eksperimen satu mililiter → cara kerja → Henderson–Hasselbalch → batas HH → kapasitas → rentang pKa ± 1 → meracik di lab)
- **Bagian 2 — Asam bertingkat** (H₃PO₄ tiga tahap → peta spesies → kola → sistem karbonat)
- **Bagian 3 — Darah dan dunia nyata** (darah 20 : 1 → sistem terbuka → fosfat di sel → antasida → sampo & kulit → kolam renang → lab enzim → penutup)

## Daftar adegan

Gaya seri **"Meja Analis"** (sama dengan Ep. 3: latar grafit + kisi kertas milimeter samar, alat gelas garis tipis bercahaya). Kode warna Ep. 4: asam lemah HA = merah muda, basa konjugat A⁻ = biru, H₃O⁺ = titik merah muda kecil, OH⁻ = titik biru kecil, pKa / nilai sasaran = emas, kapasitas penyangga = hijau, CO₂ (gas) = abu-abu muda, galat / peringatan = jingga. Spesies fosfat: H₃PO₄ merah muda → H₂PO₄⁻ ungu → HPO₄²⁻ biru → PO₄³⁻ toska. Semua pH di layar diambil dari `hitung.py`; fraksi spesies dari rumus α (Skoog Feature 13-3), digambar per frame — warna larutan selalu silang-pudar menurut fraksi, tidak pernah berganti berdasarkan ambang.

| # | id | Judul | Ide visual (bergerak sesuai fisika/kimia) |
|---|---|---|---|
| 1 | `hook` | Kola dan darah | Sekaleng kola dituang (gelembung CO₂ naik), label "pH ≈ 2,4". Jalur ke pembuluh darah: sel darah merah mengalir, jarum pH meter bergetar halus tetapi tetap di pita emas 7,35–7,45. Timbangan dua lengan: CO₂ (1 bola abu-abu) vs HCO₃⁻ (20 bola biru); label "pKa' 6,1 ≠ 7,4?" berkedip. |
| 2 | `judul` | Judul | Kurva titrasi cuka dari Ep. 3; daerah datar 10–40 mL menyala hijau dan "mengeras" menjadi garis judul. |
| 3 | `satuml` | Satu mililiter | Dua gelas kimia berdampingan, 100 mL air vs 100 mL penyangga asetat 0,1/0,1 M. Pipet meneteskan 1 mL HCl 1 M ke keduanya bersamaan. Jarum pH kiri terjun 7,00 → 2,00; kanan hanya bergeser 4,76 → 4,67. Penghitung [H₃O⁺]: kiri ×10⁵, kanan ×1,2. **Kartu rumus.** |
| 4 | `spons` | Spons dua sisi | Populasi molekul: HOAc merah muda dan OAc⁻ biru sama banyak (100 vs 100). H₃O⁺ masuk → ditangkap OAc⁻ (biru → merah muda, silang-pudar). OH⁻ masuk dari sisi lain → HOAc menyerahkan proton. Hitungan 100/100 → 110/90; jarum pH bergeser sedikit, tidak nol. **Kartu rumus.** |
| 5 | `hh` | Henderson–Hasselbalch | Rumus Ka tersusun ulang langkah demi langkah (log diambil, suku berpindah) menjadi HH. Penggeser rasio [A⁻]/[HA] 0,1 → 10; titik emas berjalan di sumbu pH 3,76 → 5,76. Dua batang (HA, A⁻) berubah tinggi sesuai rasio. **Kartu rumus** (2 momen). |
| 6 | `batas` | Saat rumus berbohong | Tiga panel: (a) pengenceran 1 M → 10⁻⁵ M: garis HH datar 4,76, kurva eksak melengkung naik ke 5,27; (b) rasio 1000 : 1: HH meramal 1,76, panah jingga ke nilai eksak 2,90; (c) labu NIST fosfat 1 : 1: HH 7,20, NIST 6,86 — ion bermuatan saling "membungkus" (awan ion tipis di sekitar HPO₄²⁻). |
| 7 | `kapasitas` | Spons yang jenuh | Kurva β terhadap log rasio (Skoog Gbr. 7-10) tergambar hijau, puncak di 1 : 1. Dua gelas: penyangga 0,1 M vs 0,01 M; HCl 1 M diteteskan dari buret sampai pH turun 1 satuan: 8,2 mL vs 0,84 mL (meniskus turun real-time). Spons encer "basah kuyup". **Kartu rumus.** |
| 8 | `rentang` | Pilih pasangan yang tepat | Sumbu pH 0–14; pita hijau pKa ± 1 untuk asetat (4,76), sitrat (3,13 / 4,76 / 6,40), fosfat (2,15 / 7,20 / 12,35), amonium (9,24), Tris (≈ 8,1). Penunjuk "pH sasaran" bergeser; pita yang memuatnya menyala. Penanda emas 7,4 untuk darah: pita bikarbonat 5,1–7,1 tidak sampai (petunjuk misteri). **Kartu rumus.** |
| 9 | `racik` | Meracik di lab | Alur kerja bergaya buku catatan: kalkulator (rasio 0,632) → neraca analitik (2,085 g KH₂PO₄, 1,374 g Na₂HPO₄) → gelas kimia + pengaduk magnet → pH meter terbaca 6,63 (bukan 7,00!) → buret NaOH menetes sampai 7,00 → labu takar 250 mL ditepatkan sampai tanda tera. Pil "Ep. 9 elektrode kaca". |
| 10 | `poliprotik` | Asam bertingkat | Molekul H₃PO₄ (P di tengah, tiga O–H) melepas proton satu per satu; tiap proton berikutnya lebih sulit lepas: muatan negatif yang membesar menarik proton (panah tarik makin tebal). Tiga tangga pKa 2,15 / 7,20 / 12,35. **Kartu rumus.** |
| 11 | `peta` | Peta spesies | Diagram α–pH empat kurva warna tergambar dari kiri ke kanan; penunjuk pH menyapu 0–14 dan wadah berisi 100 molekul fosfat berganti bentuk sesuai fraksi. Titik silang di setiap pKa (emas), puncak H₂PO₄⁻ di 4,7 (99,4 %). Berhenti di 7,4: 39 % ungu, 61 % biru. |
| 12 | `kola` | Kola | Penunjuk pH melompat ke 2,4; wadah: 36 % H₃PO₄, 64 % H₂PO₄⁻ — "kola duduk di daerah penyangga pertama asam fosfat". Gelembung CO₂ naik dari gelas. |
| 13 | `karbonat` | Asam yang menguap | CO₂ gas di atas permukaan air ⇌ CO₂(aq) ⇌ H₂CO₃ (hanya 3 dari 1000 molekul, berkedip) ⇌ HCO₃⁻ ⇌ CO₃²⁻. Diagram α karbonat: silang 6,35 dan 10,33. Air soda: pH 3,98. **Kartu rumus.** |
| 14 | `darah` | Dua puluh banding satu | Pembuluh darah melintang: 20 ion HCO₃⁻ biru per 1 CO₂ abu-abu, mengalir. HH versi klinis tersusun; angka 24 mmol/L dan 40 mmHg → 1,2 mmol/L masuk ke rumus → 7,40. Pita 7,35–7,45 = rasio 17,8–22,4. **Kartu rumus** (2 momen). |
| 15 | `terbuka` | Paru-paru membuka tutup | Simulasi berdampingan: wadah tertutup (gabus) vs wadah terbuka terhubung paru yang bernapas. 10 mmol/L asam masuk: HCO₃⁻ berubah jadi CO₂; di wadah tertutup CO₂ menumpuk (pH 6,20), di wadah terbuka CO₂ keluar lewat napas (pH 7,17), lalu napas mempercepat (pH 7,31). Batang pembanding: "penyangga ideal pKa 7,4" 6,46; air 2,00. Jam: kimia seketika, paru menit–jam, ginjal jam–hari. |
| 16 | `fosfatsel` | Fosfat di dalam sel | Zoom masuk ke sel: ATP, DNA, fosfat anorganik berkilau ungu-biru; di plasma hanya 1 bola fosfat per 24 bola bikarbonat. Ginjal menampilkan urin yang membawa H₂PO₄⁻ keluar. |
| 17 | `antasida` | Obat maag | Lambung (pH ≈ 1–3); tablet antasida (NaHCO₃ / CaCO₃ / Mg(OH)₂) larut, gelembung CO₂ "sendawa". Label "menetralkan, bukan menyangga". Panel kecil: aspirin bersangga (Skoog). |
| 18 | `kulit` | Sampo dan kulit | Kulit ditampilkan sebagai lapisan sel dengan "mantel asam" tipis pH ≈ 4,7. Botol sampo/serum: daftar bahan menyorot "citric acid, sodium citrate"; tiga pita pKa sitrat menempel di sumbu pH, saling bersambung 2–7. |
| 19 | `kolam` | Kolam renang | Kolam beriak; molekul HOCl (pembasmi kuman kuat) vs OCl⁻. Penggeser pH 7,0 → 8,5: fraksi HOCl turun 77 % → 10 %; pita sasaran 7,2–7,8. Pelampung "alkalinitas total" = bikarbonat. |
| 20 | `enzim` | Tabung reaksi enzim | Kuvet di spektrofotometer; kurva aktivitas enzim berbentuk lonceng terhadap pH. Termometer naik 25 → 37 °C, label pH penyangga Tris bergeser turun ≈ 0,3; fosfat hampir tidak bergeser (NIST: 6,86 → 6,84). |
| 21 | `penutup` | Penutup & teaser Ep. 5 | Kembali ke kola dan pembuluh darah; jarum pH tetap di pita emas. Labu titrasi EDTA dengan penyangga amonia pH 10 dan indikator merah anggur → biru. Teks: "Berikutnya — Kunci untuk Setiap Logam". |

## Narasi

Konvensi: kalimat pendek, gaya tutur. **[KARTU]** = rumus yang tampil di kartu `Formula` (≥ 56 px, satu kartu per momen). Angka di narasi ditulis seperti diucapkan; teks TTS dibuat terpisah nanti. Semua angka cocok dengan keluaran `hitung.py`.

### 1 · `hook` — Kola dan darah

Sekaleng kola punya pH sekitar dua koma empat. Lebih asam daripada cuka dapur.
Kita meminumnya, mencerna makanan, berolahraga sampai terengah-engah. Tubuh terus menghasilkan asam.
Tapi darah kita hampir tidak bergeming. pH-nya dijaga antara tujuh koma tiga lima dan tujuh koma empat lima. Lewat sedikit saja dari pita sempit itu, kita sakit.
Penjaga utamanya adalah pasangan karbon dioksida dan ion bikarbonat. Anehnya, pasangan ini bekerja paling baik di sekitar pH enam koma satu, bukan tujuh koma empat. Untuk mencapai tujuh koma empat, bikarbonat harus dua puluh kali lebih banyak daripada karbon dioksida.
Menurut buku teks, itu penyangga yang salah pilih. Lalu kenapa tubuh mempercayakan nyawa kita kepadanya? Dan kenapa ia berhasil?

### 2 · `judul` — Judul

Si Keras Kepala. Seni Mengukur, episode empat.

### 3 · `satuml` — Satu mililiter

Di episode lalu, kurva titrasi cuka punya daerah yang aneh. Tiga puluh mililiter basa ditambahkan, pH hanya naik sekitar satu satuan.
Mari kita uji langsung. Gelas kiri berisi seratus mililiter air murni. Gelas kanan berisi seratus mililiter campuran asam asetat dan natrium asetat, masing-masing nol koma satu molar.
Ke masing-masing gelas, kita tambahkan satu mililiter asam klorida satu molar.
Air murni langsung terjun dari pH tujuh ke pH dua. Ion hidronium naik seratus ribu kali.
Gelas kanan? Dari empat koma tujuh enam ke empat koma enam tujuh. Turun nol koma nol sembilan saja.

**[KARTU]** ΔpH: air −5,00 · penyangga −0,09

Campuran seperti di gelas kanan disebut larutan penyangga, atau buffer.

### 4 · `spons` — Spons dua sisi

Rahasianya: penyangga berisi asam lemah dan basa konjugatnya, dalam jumlah yang sama-sama besar.
Saat ion hidronium masuk, ion asetat menangkapnya dan berubah menjadi asam asetat.

**[KARTU]** CH₃COO⁻ + H₃O⁺ → CH₃COOH + H₂O

Saat ion hidroksida masuk, asam asetat menyerahkan protonnya dan berubah menjadi ion asetat.
Jadi asam kuat yang kita tambahkan diganti dengan asam lemah. Basa kuat diganti dengan basa lemah.
Tapi perhatikan. Perbandingan asetat dan asam asetat bergeser, dari seratus banding seratus menjadi sembilan puluh banding seratus sepuluh. pH tetap berubah, hanya sedikit.
Penyangga tidak membuat pH konstan. Ia keras kepala, bukan kebal.

### 5 · `hh` — Henderson–Hasselbalch

Seberapa sedikit? Kita bisa menghitungnya dari tetapan disosiasi asam.

**[KARTU]** K_a = [H₃O⁺][A⁻] / [HA]

Ambil logaritma negatif kedua ruas, lalu susun ulang. Hasilnya persamaan Henderson–Hasselbalch.

**[KARTU]** pH = pK_a + log ([A⁻] / [HA])

Artinya, pH penyangga ditentukan oleh dua hal: pKa asamnya, dan perbandingan basa terhadap asam.
Kalau keduanya sama banyak, log satu sama dengan nol, dan pH sama dengan pKa. Untuk asetat, empat koma tujuh enam.
Basa sepuluh kali lebih banyak, pH naik satu satuan. Asam sepuluh kali lebih banyak, pH turun satu satuan.
Karena yang menentukan adalah perbandingan, mengencerkan penyangga hampir tidak mengubah pH-nya. Keduanya terencerkan sama rata.

### 6 · `batas` — Saat rumus berbohong

Tapi rumus ini adalah pendekatan. Ia menganggap asam dan basa konjugat tidak ikut terionisasi atau bereaksi dengan air.
Anggapan itu runtuh dalam dua keadaan.
Pertama, larutan sangat encer. Encerkan penyangga asetat sampai sepuluh pangkat minus lima molar, dan pH sebenarnya lima koma dua tujuh, bukan empat koma tujuh enam. Ionisasi air dan asam itu sendiri mulai dominan.
Kedua, perbandingan yang sangat timpang. Asam asetat nol koma satu molar dengan sedikit sekali asetat, seribu banding satu. Rumus meramal pH satu koma tujuh enam. Kenyataannya dua koma sembilan, karena asam asetat itu sendiri melepaskan proton.
Dan satu lagi: kekuatan ion. Campuran fosfat satu banding satu standar NIST ber-pH enam koma delapan enam, bukan tujuh koma dua, karena ion bermuatan saling memengaruhi aktivitasnya.

### 7 · `kapasitas` — Spons yang jenuh

Keras kepala pun punya batas. Ulangi percobaan tadi dengan penyangga sepuluh kali lebih encer, nol koma nol satu molar.
Satu mililiter asam klorida kini menghabiskan seluruh asetatnya. pH terjun dari empat koma tujuh enam ke tiga koma dua empat. Spons sudah jenuh.
Ukuran daya tahan ini disebut kapasitas penyangga: jumlah mol asam atau basa kuat yang dibutuhkan untuk mengubah pH satu liter penyangga sebesar satu satuan.

**[KARTU]** β = dc_b / dpH = −dc_a / dpH

Untuk menurunkan pH seratus mililiter penyangga nol koma satu molar sebesar satu satuan, butuh delapan koma dua mililiter asam klorida satu molar. Penyangga yang sepuluh kali lebih encer menyerah setelah nol koma delapan empat mililiter.
Kapasitas bergantung pada konsentrasi total, dan pada perbandingan. Ia paling besar saat asam dan basa sama banyak. Pada perbandingan sepuluh banding satu, kapasitasnya tinggal sepertiga.

### 8 · `rentang` — Pilih pasangan yang tepat

Dari situ lahir aturan praktis: pilih asam lemah yang pKa-nya paling dekat dengan pH yang diinginkan.

**[KARTU]** pH sasaran ≈ pK_a ± 1

Butuh pH sekitar lima? Asetat. Sekitar tujuh? Pasangan dihidrogen fosfat dan hidrogen fosfat, pKa tujuh koma dua. Sekitar sembilan? Amonium dan amonia, pKa sembilan koma dua empat.
Sekarang terapkan aturan itu pada darah. Sasaran tujuh koma empat. Pasangan karbon dioksida dan bikarbonat dalam plasma punya pKa semu enam koma satu. Selisihnya satu koma tiga, di luar rentang aman.
Simpan petunjuk ini. Kita kembali ke sana.

### 9 · `racik` — Meracik di lab

Bagaimana membuat penyangga di laboratorium? Misalnya dua ratus lima puluh mililiter penyangga fosfat nol koma satu molar, pH tujuh.
Henderson–Hasselbalch memberi perbandingan hidrogen fosfat terhadap dihidrogen fosfat: nol koma enam tiga. Artinya dua koma nol delapan gram kalium dihidrogen fosfat dan satu koma tiga tujuh gram dinatrium hidrogen fosfat.
Larutkan, lalu ukur. pH meter terbaca kira-kira enam koma enam, bukan tujuh. Kekuatan ion larutan ini cukup besar, sehingga pKa semunya turun.
Karena itu Skoog menyarankan cara yang selalu dipakai di lab: hitung resep kira-kira, larutkan, lalu atur dengan sedikit natrium hidroksida atau asam klorida sambil membaca pH meter yang sudah dikalibrasi. Terakhir, tepatkan volumenya di labu takar.
Rumus memberi titik berangkat. pH meter memberi kata akhir.

### 10 · `poliprotik` — Asam bertingkat

Asam fosfat punya tiga proton yang bisa lepas, satu per satu. Asam seperti ini disebut asam poliprotik.

**[KARTU]** H₃PO₄ ⇌ H₂PO₄⁻ ⇌ HPO₄²⁻ ⇌ PO₄³⁻  (pK_a 2,15 · 7,20 · 12,35)

Setiap proton berikutnya makin sulit dilepas. Ka pertama sekitar seratus ribu kali Ka kedua.
Alasannya: proton kedua harus ditarik menjauh dari ion yang sudah bermuatan negatif. Proton ketiga, dari ion bermuatan dua minus. Selain itu, makin sedikit proton yang tersisa, makin sedikit pula tempat proton bisa lepas.
Tiga pKa yang berjauhan berarti tiga daerah penyangga, masing-masing di sekitar dua, tujuh, dan dua belas.

### 11 · `peta` — Peta spesies

Pada pH tertentu, berapa bagian fosfat yang berada dalam tiap bentuk? Fraksi ini disebut nilai alfa, dan hanya bergantung pada pH, bukan pada konsentrasi total.
Di pH satu, hampir semuanya asam fosfat utuh. Di pH dua koma satu lima, setengah asam fosfat, setengah dihidrogen fosfat. Di sekitar empat koma tujuh, dihidrogen fosfat berkuasa penuh, sembilan puluh sembilan persen.
Di pH tujuh koma dua, giliran dihidrogen fosfat dan hidrogen fosfat berbagi rata. Di pH darah, tujuh koma empat, tiga puluh sembilan persen berbanding enam puluh satu persen.
Ion fosfat telanjang, PO₄³⁻, baru menjadi mayoritas di atas pH dua belas koma tiga lima.
Setiap titik silang adalah sebuah pKa, sekaligus pusat sebuah daerah penyangga.

### 12 · `kola` — Kola

Kembali ke kaleng kola. Asam utamanya asam fosfat.
Pada pH dua koma empat, peta spesies berkata: sekitar tiga puluh enam persen fosfatnya masih asam fosfat, enam puluh empat persen sudah dihidrogen fosfat.
Kola duduk tepat di daerah penyangga pertama asam fosfat: asam dan basa konjugatnya hadir bersama, dalam jumlah yang sebanding.
Dan gelembungnya membawa kita ke asam kedua yang lebih penting bagi tubuh.

### 13 · `karbonat` — Asam yang menguap

Karbon dioksida larut dalam air. Sebagian kecil bereaksi menjadi asam karbonat. Sangat kecil: hanya sekitar tiga dari seribu molekul karbon dioksida terlarut.
Karena itu kimiawan biasanya menggabungkan keduanya dan menulis tetapan disosiasi langsung dari karbon dioksida terlarut.

**[KARTU]** CO₂(aq) + 2H₂O ⇌ H₃O⁺ + HCO₃⁻   pK_a1 = 6,35 (25 °C)

Tahap kedua, bikarbonat menjadi karbonat, pKa-nya sepuluh koma tiga tiga.
Air soda dengan karbon dioksida nol koma nol dua lima molar punya pH sekitar empat. Biarkan botolnya terbuka, gas keluar, dan rasanya makin hambar.
Ingat ini: tidak seperti asam lain, sebagian asam dalam sistem ini adalah gas, dan gas bisa pergi.

### 14 · `darah` — Dua puluh banding satu

Sekarang darah. Di plasma, pada tiga puluh tujuh derajat dan kekuatan ion fisiologis, pKa semu sistem ini sekitar enam koma satu. Ini nilai empiris untuk darah, bukan tetapan termodinamika enam koma tiga lima tadi.
Kadar karbon dioksida terlarut sebanding dengan tekanan parsialnya: nol koma nol tiga milimol per liter untuk setiap milimeter raksa.

**[KARTU]** pH = 6,1 + log ( [HCO₃⁻] / (0,03 × P_CO₂) )

Nilai normal: bikarbonat dua puluh empat milimol per liter, tekanan karbon dioksida empat puluh milimeter raksa, jadi karbon dioksida terlarut satu koma dua.

**[KARTU]** 24 / 1,2 = 20  →  pH = 6,1 + 1,3 = 7,4

Pita tujuh koma tiga lima sampai tujuh koma empat lima berarti perbandingan antara tujuh belas koma delapan dan dua puluh dua koma empat.
Perhatikan juga: sembilan puluh lima persen amunisi penyangga ini berupa basa, siap menangkap asam. Dan tubuh memang terutama menghasilkan asam.

### 15 · `terbuka` — Paru-paru membuka tutup

Inilah jawaban misterinya. Penyangga di buku teks adalah sistem tertutup. Darah tidak.
Bayangkan sepuluh milimol asam kuat masuk ke setiap liter darah. Bikarbonat menangkap protonnya dan berubah menjadi karbon dioksida.
Kalau karbon dioksida itu terperangkap, perbandingannya runtuh dan pH jatuh ke enam koma dua.
Tapi karbon dioksida adalah gas. Paru-paru membuangnya lewat napas, sehingga tekanannya tetap empat puluh. pH hanya turun ke tujuh koma satu tujuh.
Lalu otak memerintahkan napas lebih cepat, tekanan karbon dioksida turun, dan pH naik lagi ke sekitar tujuh koma tiga satu.
Sebagai pembanding, penyangga "ideal" ber-pKa tujuh koma empat dengan jumlah total yang sama, tapi tertutup, akan jatuh ke enam koma empat enam.
Penyangga kimia bekerja seketika. Paru-paru menyusul dalam hitungan menit sampai jam. Ginjal mengatur bikarbonat dalam hitungan jam sampai hari.
Penyangga yang tampak salah pilih ternyata penyangga yang tutupnya bisa dibuka.

### 16 · `fosfatsel` — Fosfat di dalam sel

Lalu bagaimana dengan fosfat, yang di atas kertas tampak ideal? pKa keduanya dalam cairan tubuh sekitar enam koma delapan.
Masalahnya jumlah. Fosfat di plasma hanya sekitar satu milimol per liter, dua puluh kali lebih sedikit daripada bikarbonat.
Fosfat bekerja di tempat lain: di dalam sel, tempat ia melimpah sebagai fosfat anorganik, ATP, dan asam nukleat, bersama protein seperti hemoglobin. Dan di urin, tempat dihidrogen fosfat membawa kelebihan proton keluar dari tubuh.

### 17 · `antasida` — Obat maag

Penyangga juga ada di kotak obat, tapi hati-hati dengan istilahnya.
Antasida seperti natrium bikarbonat, kalsium karbonat, atau magnesium hidroksida tidak menyangga asam lambung. Ia menetralkannya. Bikarbonat bereaksi dengan asam klorida menjadi karbon dioksida, dan kita bersendawa.
Yang benar-benar memakai penyangga adalah aspirin bersangga. Penyangga di dalam tablet membantu mengurangi iritasi lambung akibat gugus asam karboksilat aspirin.

### 18 · `kulit` — Sampo dan kulit

Permukaan kulit sehat sedikit asam. Rata-ratanya di bawah lima, sekitar empat koma tujuh. Lapisan ini sering disebut mantel asam.
Karena itu banyak sampo dan serum mencantumkan asam sitrat dan natrium sitrat di daftar bahannya.
Asam sitrat juga asam poliprotik, dengan tiga pKa: tiga koma satu tiga, empat koma tujuh enam, dan enam koma empat. Daerah penyangganya bersambung dari sekitar dua sampai tujuh. Satu bahan, satu rentang yang lebar.

### 19 · `kolam` — Kolam renang

Kolam renang biasanya dijaga pada pH sekitar tujuh koma dua sampai tujuh koma delapan. Ini bukan soal kenyamanan mata saja.
Klorin di air kolam membentuk asam hipoklorit, pembasmi kuman yang kuat, dengan pKa tujuh koma lima dua. Basa konjugatnya, ion hipoklorit, jauh lebih lemah.
Pada pH tujuh koma dua, sekitar dua pertiga klorin berupa asam hipoklorit. Pada pH delapan koma lima, tinggal sepuluh persen.
Pengelola kolam juga menjaga alkalinitas total, yang sebagian besar berupa bikarbonat. Penyangga yang sama dengan darah kita.

### 20 · `enzim` — Tabung reaksi enzim

Di laboratorium biokimia, hampir setiap uji enzim dimulai dengan penyangga. Aktivitas enzim sangat bergantung pada pH; terlalu jauh dari pH optimumnya, enzim melambat atau rusak.
Ada jebakan halus. pKa ikut berubah dengan suhu. Penyangga Tris yang dibuat pH delapan pada suhu kamar bisa turun sekitar nol koma tiga satuan saat dipanaskan ke tiga puluh tujuh derajat. Penyangga fosfat jauh lebih tenang; standar NIST hanya bergeser dari enam koma delapan enam ke enam koma delapan empat.
Pelajarannya: atur pH penyangga pada suhu saat ia akan dipakai.

### 21 · `penutup` — Penutup & teaser Ep. 5

Kembali ke kaleng kola dan aliran darah tadi.
Penyangga bukan sihir. Ia pasangan asam lemah dan basa konjugatnya yang saling menukar proton, dan Henderson–Hasselbalch memberi tahu ke mana pH akan bergeser. Sedikit, tetapi tidak nol.
Darah memakai penyangga yang tampak salah pilih, karena tubuh mengendalikan kedua sisinya: paru-paru mengatur karbon dioksida, ginjal mengatur bikarbonat.
Di episode berikutnya, penyangga menjadi alat. Sebuah molekul bernama EDTA memeluk ion logam dengan enam lengan, tetapi hanya mau bekerja dalam penyangga amonia pH sepuluh.
Kunci untuk Setiap Logam. Sampai jumpa.

---

## Lampiran: angka dari `hitung.py`

25 °C, Kw = 1,00 × 10⁻¹⁴, tetapan Skoog ed. 10 Lampiran 3 (hlm. A-8), kecuali darah (pKa' 6,1, 37 °C).

**Satu mililiter HCl 1,00 M ke dalam 100,0 mL (V total 101,0 mL), pH eksak (neraca muatan):**

| Larutan | pH awal | pH sesudah | ΔpH |
|---|---|---|---|
| air murni | 7,00 | 2,00 | −5,00 |
| asetat 0,100 / 0,100 M | 4,76 | 4,67 (HH 4,67) | −0,09 |
| asetat 0,0100 / 0,0100 M | 4,76 | 3,24 (asetat habis) | −1,52 |
| (pembanding: + 1 mL NaOH 1 M ke asetat 0,1/0,1) | 4,76 | 4,84 | +0,09 |

**Batas HH (asetat):** pengenceran 1:1 — 0,1 M 4,757 · 10⁻³ M 4,772 · 10⁻⁴ M 4,874 · 10⁻⁵ M 5,273 (HH 4,757). Rasio 1000 : 1 (0,100 M HOAc + 1,0 × 10⁻⁴ M NaOAc): HH 1,76, eksak 2,90. Fosfat NIST SRM 186g 25 °C: ekimolal 0,025 m — HH 7,20, Davies 6,88, NIST 6,864; fisiologis 0,008695/0,03043 m — HH 7,74, Davies 7,42, NIST 7,416.

**Kapasitas:** β = 2,303([H⁺] + [OH⁻] + C·Ka[H⁺]/(Ka + [H⁺])²); C = 0,2 M: β maks 0,115 mol L⁻¹ pH⁻¹ (= 0,576 C), pada pKa ± 1 33 %, ± 2 4 %. HCl 1 M untuk ΔpH −1 pada 100 mL: 0,1/0,1 M → 8,20 mL; 0,01/0,01 M → 0,84 mL. Air murni pH 7: β ≈ 4,6 × 10⁻⁷.

**Resep fosfat 0,100 M pH 7,00, 250,0 mL:** rasio HPO₄²⁻/H₂PO₄⁻ = 0,632 → KH₂PO₄ 15,32 mmol (2,085 g, M 136,09) + Na₂HPO₄ 9,68 mmol (1,374 g, M 141,96). I ≈ 0,177 M → pKa₂' (Davies) ≈ 6,83 → pH sebenarnya ≈ 6,63 → diatur dengan NaOH sambil membaca pH meter.

**Fraksi H₃PO₄ (pKa 2,15 / 7,20 / 12,35):**

| pH | H₃PO₄ | H₂PO₄⁻ | HPO₄²⁻ | PO₄³⁻ |
|---|---|---|---|---|
| 1,00 | 93,4 % | 6,6 % | 0 | 0 |
| 2,15 | 49,9 % | 50,1 % | 0 | 0 |
| 2,40 (kola) | 35,9 % | 64,1 % | 0,001 % | 0 |
| 4,68 | 0,3 % | 99,4 % | 0,3 % | 0 |
| 7,00 | 0 | 61,3 % | 38,7 % | 0 |
| 7,20 | 0 | 50,0 % | 50,0 % | 0 |
| 7,40 | 0 | 38,7 % | 61,3 % | 0 |
| 9,77 | 0 | 0,3 % | 99,5 % | 0,3 % |
| 12,35 | 0 | 0 | 49,8 % | 50,2 % |

Ilustrasi (tidak diucapkan): H₃PO₄ murni ≈ 6,2 mM (≈ 0,61 g/L) memberi pH 2,40; kola nyata juga mengandung CO₂ dan zat lain.

**Karbonat (pKa₁ 6,35, pKa₂ 10,33; 25 °C, I = 0):** pH 7,40 → CO₂ 8,2 %, HCO₃⁻ 91,7 %, CO₃²⁻ 0,1 %. CO₂ 0,02500 M → pH 3,98 (Skoog Contoh 13-3: 3,99).

**Darah (pKa' 6,1; s = 0,03 mmol L⁻¹ mmHg⁻¹):** PCO₂ 40 → CO₂ 1,20 mM; HCO₃⁻ 24 → rasio 20,0 → pH 7,40. pH 7,35 / 7,40 / 7,45 → rasio 17,8 / 20,0 / 22,4; [H₃O⁺] 44,7 / 39,8 / 35,5 nmol/L. HCO₃⁻ = 95,2 % dari pasangan. (Dengan pKa termodinamika 6,35, rasio di 7,40 = 11,2 — tidak berlaku untuk plasma.)

**Beban asam 10 mmol/L (model bikarbonat saja):** tertutup 6,20 (ΔpH −1,20) · terbuka, PCO₂ 40: 7,17 (−0,23) · terbuka + kompensasi napas (rumus Winters PCO₂ = 1,5·14 + 8 ≈ 29 mmHg): 7,31 (−0,09) · penyangga "ideal" tertutup pKa 7,40, total 25,2 mM, 1 : 1: 6,46 (−0,94) · air: 2,00.

**Lain-lain:** asam sitrat pKa 3,13 / 4,76 / 6,40. HOCl pKa 7,52 → fraksi HOCl pada pH 7,0 / 7,2 / 7,5 / 7,8 / 8,0 / 8,5 = 77 / 68 / 51 / 35 / 25 / 10 %. Tris: 25 → 37 °C ΔpH ≈ −0,30 s.d. −0,36 (koefisien pemasok, ⚠).

## Catatan produksi

- **Kesalahan yang dihindari:** (1) penyangga tidak membuat pH konstan — selalu tampilkan ΔpH kecil tetapi bukan nol (`spons`, `satuml`); (2) HH gagal untuk larutan sangat encer, rasio sangat timpang, dan asam relatif kuat (Ka ≳ 10⁻³, Skoog hlm. 184) — adegan `batas`; (3) pKa 6,1 untuk darah adalah nilai **semu** plasma 37 °C, bukan pKa termodinamika (6,35 pada 25 °C) — sebut eksplisit; (4) "asam karbonat" di darah sebagian besar CO₂ terlarut, H₂CO₃ sejati ≈ 0,3 %; (5) antasida menetralkan, bukan menyangga; (6) kapasitas maksimum di 1 : 1, bukan "makin banyak basa makin kuat"; (7) "≈" untuk perkiraan, koma desimal, "±" hanya untuk rentang pKa ± 1.
- **Visual wajib bergerak:** populasi molekul (100–200 partikel) yang bertukar proton sesuai α dan perbandingan mol; jarum pH meter yang bergetar halus; kurva α tergambar per frame; simulasi paru bernapas (siklus `cyc`) yang membuang bola CO₂ abu-abu.
- **Konsistensi dengan Ep. 3:** pakai ulang kurva cuka (`titrasi.py --csv`) untuk `judul`; label pKa asetat 4,76 sama.
- **Teaser Ep. 5:** penyangga NH₃/NH₄⁺ pH 10 (pKa NH₄⁺ 9,24, Skoog Lampiran 3) — konfirmasi resep pH 10 dan indikator (Eriochrome Black T, merah anggur → biru) dari bab 15 Skoog saat menulis Ep. 5.
- **TTS:** "pKa" dibaca "pe-ka-a"; "HH" tidak pernah diucapkan sebagai singkatan; "P CO₂" dibaca "tekanan karbon dioksida"; "mmHg" = "milimeter raksa".
- **Durasi:** narasi ≈ 2000 kata ≈ 13 menit pada 150 kata/menit.
