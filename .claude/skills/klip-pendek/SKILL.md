---
name: klip-pendek
description: Membuat video pendek vertikal (TikTok/Reels/Shorts, 15–60 dtk) dengan Remotion — klip edukasi sains, potongan dari video panjang, atau video afiliasi "edukasi → produk" untuk produk apa saja (camilan & makanan, minuman, rumah tangga, skincare, gadget, alat tulis, kesehatan). Pakai saat pengguna minta "bikin video TikTok", "klip pendek", "video afiliasi/promosi produk".
---

# Klip pendek vertikal — cara kerja

Pengguna: Yayan (lihat `CLAUDE.md`). Bahasa Indonesia, santai. Gaya visual mengikuti video SCIENTIAN (latar gelap, glow, animasi bergerak menjelaskan), tapi temponya jauh lebih cepat.

## 1. Tentukan jenis klip
| Jenis | Isi | Akhir |
|---|---|---|
| **Edukasi** | 1 fakta/konsep sains yang bikin "oh!" | ajakan follow SCIENTIAN / tonton video panjang |
| **Potongan** | momen terbaik dari video panjang (Claude-Video-Kimia, video-atom-hidrogen, dst.), disusun ulang vertikal | "versi lengkap di YouTube" |
| **Afiliasi** | hal sehari-hari / fakta menarik → sains di baliknya → produk sebagai salah satu solusi atau contoh | CTA keranjang kuning/link + label afiliasi |

Tanyakan hanya yang belum jelas: produk apa (nama, link/etalase, klaim resmi dari kemasan/halaman produk), target penonton, durasi.

## 2. Struktur (detik untuk klip 30–45 dtk)
1. **0–2 dtk HOOK** — pertanyaan/fakta mengejutkan + visual paling menarik di frame pertama (tanpa logo/intro panjang; intro SCIENTIAN tidak dipakai, cukup watermark logo kecil).
2. **2–8 dtk MASALAH / RASA PENASARAN** — situasi atau pertanyaan sehari-hari. Contoh per kategori:
   - camilan: "kenapa keripik bisa renyah?" (air menguap, pati mengembang), "kenapa cokelat meleleh di mulut?" (titik leleh lemak kakao ±34 °C);
   - minuman: "kenapa kopi bikin melek?" (kafein menghambat reseptor adenosin);
   - rumah tangga: "kenapa sabun bisa angkat minyak?" (molekul surfaktan berkepala & berekor);
   - skincare: "kenapa sunscreen penting?" (UV memecah kolagen);
   - gadget: "kenapa baterai cepat drop saat dingin?" (ion litium melambat).
3. **8–25 dtk SAINS** — 1–2 konsep saja, divisualkan (molekul, reaksi, sel). Ini nilai jual channel.
4. **25–35 dtk SOLUSI** — (afiliasi) tampilkan produk sebagai *salah satu* cara, sebut kandungan & fungsi sesuai info resmi.
5. **35–45 dtk CTA** — satu ajakan saja (follow / cek keranjang kuning / tonton versi lengkap).

## 3. Aturan wajib afiliasi & kesehatan (jangan dilanggar)
- **Label jelas**: tampilkan "#iklan" / "link afiliasi" di layar & caption. Jangan menyamarkan iklan sebagai murni edukasi.
- **Klaim hanya dari sumber resmi**: kemasan, situs produsen, nomor izin BPOM. Fakta sains dari sumber nyata (jurnal, Kemenkes, WHO, buku teks). Jangan mengarang angka/persentase/testimoni.
- **Makanan & minuman (camilan dll.)**: produk harus punya izin edar (BPOM MD/ML atau P-IRT). Klaim gizi/rasa/bahan hanya sesuai label; "halal" hanya bila ada sertifikat; jangan klaim "sehat", "bikin kurus", "menyehatkan" kecuali tertera resmi. Fakta sains (kenapa renyah, kenapa manis) boleh dijelaskan bebas asal benar.
- **Kesehatan**: dilarang klaim menyembuhkan/mengobati penyakit, "pasti", "100%", "tanpa efek samping", sebelum–sesudah palsu. Pakai bahasa "membantu", "mendukung", dan sarankan konsultasi tenaga kesehatan bila relevan. Untuk produk yang wajib izin edar (makanan, minuman, obat, suplemen, kosmetik), cek izinnya; jika tidak ada, beri tahu pengguna dan sarankan produk lain.
- Patuhi kebijakan konten TikTok (iklan, kesehatan, produk terlarang). Jangan meniru merek/orang nyata tanpa izin; jangan pakai logo/brand produk kecuali materi dari produsen/afiliasi resmi.
- Jika pengguna minta klaim yang menyesatkan, jelaskan risikonya dan tawarkan versi yang jujur.

## 4. Teknis
- Komposisi **1080×1920, 30 FPS** (opsional 60). Satu repo seri, mis. `klip-tiktok`; tiap klip = satu komposisi (`Klip-001-...`).
- **Zona aman TikTok**: kosongkan atas 160 px, bawah 420 px (caption & tombol), kanan 140 px (ikon). Teks penting di tengah.
- **Subtitle besar** (≥ 64 px, 2–4 kata per tampilan, kata kunci berwarna), selalu ada — banyak penonton tanpa suara.
- Ganti visual tiap 1,5–3 dtk (zoom, potong, pop-up). Gerak dari frame (`interpolate`), tanpa animasi CSS.
- Narasi ElevenLabs **Bagas** (secret `ELEVENLABS_API_KEY` per repo), tempo sedikit lebih cepat; selalu buat juga versi tanpa narasi. Musik orisinal numpy, tanpa sampel berlisensi.
- Gunakan ulang komponen dari `Claude-Video-Kimia` / `video-atom-hidrogen` (atom, molekul, spektrum, `Formula`, `Captions`).
- Render via GitHub Actions → artefak MP4 H.264 (siap unggah dari iPad). Kirim juga **caption TikTok** (≤ 150 karakter + 3–5 hashtag, termasuk #iklan untuk afiliasi) dan ide judul cover.
- QA: still tiap 3 dtk; cek teks tidak masuk zona UI TikTok, tidak ada klaim terlarang, label afiliasi terlihat.

## 5. Setelah selesai
Catat klip di `materi/KLIP.md` (judul, jenis, produk bila afiliasi, link run) dan pelajaran baru di `CLAUDE.md`.
