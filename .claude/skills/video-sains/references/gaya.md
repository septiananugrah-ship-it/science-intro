# Gaya visual & mesin

## Mesin mana yang disalin
| Jenis video | Repo mesin terbaru | Catatan |
|---|---|---|
| Kimia Kuantum (gaya Yayan) | `video-spektroskopi-molekul` (terbaru; rantai: simbol-term → ikatan-valensi → orbital-molekul → orbital-poliatomik → simetri-molekul → spektroskopi) | Mesin Modul 2 + semua perbaikan seri fisika (subtitle silang-pudar, EASE lembut, SceneShell tanpa blur, tts.ts, qa-lines/qa-film/qa-glitch) + `ramp` aman (b ≤ a) + label pembuka bab yang benar. Komponen: vbC (molekul/orbital 3D), moA–D (diagram MO), syA–syD (operasi simetri, mode getaran), spA–spD (`LineSpectrum` dengan opsi `bare`, tangga energi, Boltzmann). Ubah label pembuka di `scripts/export-timeline.ts` untuk tiap video baru. |
| Seri Fisika Umum ("Lab") | `video-fisika-atom` | Komponen fisika (`physics.tsx`, `flow.tsx`, `fluid.tsx`), merek SCIENTIAN di judul & outro. |
| Renungan | `video-akhir-zaman` | Gaya "Gulungan Malam". |
| Video teman | `video-gasing-kuantum` (Chika, terang), `video-ruang-sempit` (Verna, nebula) | Gaya harus beda dari video Yayan. |
Jangan menyalin dari `video-landasan-kimia-kuantum` tanpa perbaikan (masih CSS blur di SceneShell & `Part`).

## Gaya per seri
- **Kimia Kuantum (Yayan)**: panggung gelap, aksen emas–sian, Outfit + Source Serif 4 + JetBrains Mono, kartu kaca, subtitle kata-per-kata kata kunci emas. Tanpa nama di video.
- **Fisika Umum "Lab"**: malam biru tinta + kisi cetak biru, Space Grotesk/Inter/JetBrains Mono/Source Serif 4. Kapsul logo S + "Explore Science with Yayan" di judul (tanpa intro terpisah), outro "Disusun oleh Septian Anugrah Dwi Putra". Kode warna energi tetap: K jingga, Ug biru, Us ungu, panas merah, W hijau, F kuning.
- **Renungan "Gulungan Malam"**: langit malam, iluminasi emas, pola bintang delapan tipis; simbol, bukan sosok.

## Kode warna per video
Tetapkan di `CLAUDE.md` repo baru sebelum agen mulai, contoh Modul 7: spin ↑ sian, ↓ merah muda, S ungu, L emas, J mint, genap biru, ganjil jingga, dilarang merah; foton = warna panjang gelombang (`wlColor`). Konsisten dari adegan pertama sampai rangkuman.

## Adegan "wah"
Benda bergerak sesuai fisika (molekul berputar sesuai J, elektron melompat memancarkan foton berwarna λ, tabel mikrostatus yang "terkelupas", kurva Morse dengan atom yang bergerak di atasnya, orbital 3D berputar pelan). Visual yang diturunkan dari rumus lebih meyakinkan daripada hiasan.
