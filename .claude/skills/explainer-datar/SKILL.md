---
name: explainer-datar
description: Membuat video sains bergaya animasi explainer vektor datar (pastel, karakter berkepala bulat, kamera paralaks, balon ucapan, kartu data bersumber, transisi sapuan panel) dengan Remotion. Pakai saat pengguna minta video "gaya kartun/explainer", "kayak channel animasi edukasi", "bukan gaya gelap kuantum", atau video sains populer untuk umum (1–15 menit).
---

# Video sains gaya explainer datar

Pemilik: Yayan (SCIENTIAN). Gaya ini **terpisah** dari gaya seri kuantum (gelap, emas–sian) dan seri fisika ("Lab").
Contoh pertama yang terbukti: repo `septiananugrah-ship-it/video-sains-datar` ("Kenapa Es Batu Mengapung?", 7 adegan, ±2 menit).
Pipeline teknis (naskah → timeline → subtitle → render Actions → narasi) sama dengan skill `video-sains`; baca `video-sains/references/pipeline.md` untuk langkah persis. Skill ini hanya mengatur **gaya & komponen**.

## Mulai cepat
1. Pengguna membuat repo baru → `add_repo` → clone.
2. Salin mesin dari `video-sains-datar` (bukan dari repo kuantum): `git archive HEAD | tar -x -C <repo-baru> --exclude='src/scenes/*' --exclude='naskah/*'`, lalu ganti id komposisi (`SainsDatar` → nama baru) di `Root.tsx`, `Composition.tsx`, `package.json`, `scripts/*`, `.github/workflows/render-video.yml`.
3. Tulis `src/script.ts` (format sama dengan `video-sains`), adegan di `src/scenes/*.tsx`, daftarkan di `src/scenes/index.ts`.
4. QA: `qa-lines` + `contact.py … 3` (baca semua lembar), `qa-moments` untuk momen kunci; render pratinjau 540p dan kirim ke pengguna.
5. Thumbnail (`src/Thumbnail.tsx`) wajib diganti sesuai topik — jangan tersalin.

## Struktur naskah (jangan meniru urutan tugas kuliah)
Video kuantum/fisika mengikuti urutan RPS (definisi → teori → angka → aplikasi). Explainer **bercerita**:
1. **Pembuka dekat** (5–10 dtk): benda sehari-hari + bunyi/aksi ("Plung!"), langsung ke fenomena.
2. **Keanehan**: kenapa ini sebenarnya janggal (bandingkan dengan zat/kasus lain) → kartu judul.
3. **"Bayangkan kalau…"**: skenario andai-andai yang dramatis (taruhannya apa kalau fenomena ini tidak ada).
4. **Rahasia**: konsep sains lewat karakter + **analogi sehari-hari** (penonton konser, tari lingkaran).
5. **Bukti sehari-hari**: eksperimen rumahan (botol di freezer) → baru angka/kartu data bersumber.
6. **Kembali ke skenario awal**: tutup lingkaran cerita (danau selamat).
7. **Penutup + pertanyaan untuk penonton** (ajak komentar), kapsul kanal.
- Satu adegan = satu *shot* 5–15 dtk; potong langsung (`trans` bawaan `'cut'`), sapuan panel (`trans: 'wipe'`) hanya di pergantian babak.
- Kalimat pendek, sapaan "kamu", sedikit humor; kecepatan baca estimasi 5,8 suku kata/dtk (`timeline.ts`).
- Visual mengikuti kata kunci (`wordOf`) — benda bergerak tepat saat disebut.

## Ciri gaya (wajib)
- **Warna:** pastel cerah (`theme.ts`: krem dinding, biru langit, toska baju, koral, kuning). Teks gelap `C.ink` (#2b2d42), bukan hitam murni. Tanpa neon, glow, atau latar gelap.
- **Bentuk:** bulat, tanpa garis tepi tebal; bayangan lembut satu arah (kanan-bawah, `C.shadow`); kilap putih kecil di kiri-atas benda bulat.
- **Kamera selalu bergerak:** `drift()` dorong-masuk/geser pelan sepanjang adegan; latar berlapis `Layer depth` (langit 0,15–0,35, tokoh 0,9, meja 1, daun depan 1,5 + `blur="near"`). Dorongan cepat ke benda yang sedang dibahas saat narasi menyebutnya.
- **Tokoh:** `Kid` berkepala bulat besar (desain orisinal). Gerak kecil terus-menerus: napas, kedip, kepala miring, lengan mengangkat; ekspresi dicampur lewat `face={{happy, wow, think, sad}}`.
- **Konsep sains jadi karakter:** molekul/atom berwajah (`WaterMol`), mata titik & senyum, tetap dengan geometri benar (sudut, rasio, arah ikatan).
- **Teks di layar:** sedikit dan tebal (Outfit 700–800): `Tag` (pil putih), `Bubble` (balon ucapan huruf kapital), `DataCard` (judul + pil berwarna + baris sumber kecil), `BigTitle` (judul bergaris tepi tebal, kata terakhir kuning).
- **Transisi:** sapuan tiga panel warna (Composition `Wipe`); adegan berganti di balik panel. Di dalam adegan boleh potongan cepat/silang-pudar 0,4 dtk antarcuplikan.
- **Subtitle:** kartu putih, kata kunci distabilo kuning (`Captions.tsx`).
- **Musik:** riang/ringan (mood `bright`, `wonder`, `resolve`, `outro` di `make-music.py`).

## Larangan
- Jangan meniru tokoh, logo, kartu judul, atau warna khas channel lain (mis. Kok Bisa?). Yang ditiru hanya teknik & genre.
- Jangan ganti ekspresi/warna/teks berdasarkan ambang tanpa silang-pudar; jangan CSS blur pada lapisan seluruh adegan (blur kedalaman statis pada lapisan depan boleh, lewat filter SVG `dof-near`).
- Jangan menaruh label di zona subtitle (bawah ±180 px) — label di atas benda. Komponen HTML (`DataCard`, `BigTitle`) di luar `<Stage>`.
- Fisika tetap benar meskipun lucu: fraksi terendam dari rasio massa jenis, timbangan miring ke sisi berat, ikatan hidrogen dari H ke O, kisi es mengikuti aturan "satu H per ikatan".

## Komponen (repo `video-sains-datar`)
| Berkas | Isi |
|---|---|
| `src/components/flat.tsx` | `Stage` (filter dof/soft, gradien), `Layer` + `drift` (kamera paralaks), `Shadow`, `Kid`, `shade`, `WaterMol` (+`charges`, `hAngles`, `h2fade`), `HBond`, `IceCube`, `Glass` (isi terpotong bentuk gelas), `Bubbles`, `Bubble`, `Tag`, `DataCard`, `BigTitle`, `Zoomer` (kaca pembesar ke dunia molekul). |
| `src/components/sets.tsx` | Latar berlapis: `Kitchen` (prop `mid` untuk tokoh di belakang meja), `Lab`, `Lake` (penampang danau + ikan + salju), `Sea`; `honeycomb()` untuk kisi segi enam. |
| `src/components/mols.ts` | Posisi molekul cair ↔ kisi es yang sama (transisi cair → beku mulus). |

## Pelajaran
- Atom H putih di latar pucat nyaris hilang → beri garis tepi tipis abu-biru dan jarak O–H ≈ 1,06 r.
- Molekul yang terlalu besar relatif terhadap jaraknya menyembunyikan garis ikatan hidrogen → r ≈ 0,3 × jarak O–O, garis jingga tua (#f4a300).
- Tokoh di belakang meja: naikkan titik kaki agar lengan terlihat di atas meja saat beraksi (mengangkat/menjatuhkan benda).
- Papan/label di lapisan jauh bisa terpotong saat kamera menggeser → simpan ±150 px dari tepi.
