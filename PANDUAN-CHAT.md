# Panduan memakai Claude (untuk Yayan)

Buka chat baru di Claude Code **dengan repo `science-intro`** (dan repo video yang mau dikerjakan). Claude otomatis membaca `CLAUDE.md`, jadi tidak perlu menjelaskan ulang. Tinggal salin salah satu perintah di bawah.

## Bikin video baru
> /video-sains bikin video Modul 6 atom hidrogen di repo video-atom-hidrogen

Ganti nomor modul & nama repo sesuai kebutuhan. Buat repo kosongnya dulu di GitHub.

## Bingung pilih topik
> Baca materi/RINGKASAN.md, sarankan modul & bab yang paling cocok dijadikan video berikutnya.

## Revisi video yang sudah ada
> Di repo Claude-Video-Kimia, perbaiki adegan [nama/menit ke-...]: [apa yang kurang]. Lalu render ulang 2K.

## Ganti nama/tagline intro
> Jalankan workflow Render Intro SCIENTIAN 2K dengan nama "..." dan tagline "...".
(Atau sendiri: tab Actions → Render Intro SCIENTIAN 2K → Run workflow.)

## Versi tanpa narasi (untuk dubbing sendiri)
> Render video [repo] tanpa narasi Bagas, musik saja.

## Ganti AI / akun
Kirim isi `CLAUDE.md` dan `.claude/skills/video-sains/SKILL.md` sebagai pesan pertama, lalu minta seperti biasa.

## Tips hemat token
- Satu chat = satu pekerjaan. Kalau chat sudah sangat panjang, buka chat baru — konteksnya tetap aman di repo.
- Unggah file (PDF, gambar) lewat GitHub (Add file → Upload files), bukan ditempel di chat.
- Tulis permintaan singkat; Claude sudah tahu gaya & aturannya dari `CLAUDE.md`.

## Video pendek TikTok / Reels
> /klip-pendek bikin klip edukasi 30 detik tentang [topik] di repo klip-tiktok

> /klip-pendek bikin klip dari momen terbaik video-atom-hidrogen (garis spektrum Balmer) di repo klip-tiktok

> /klip-pendek bikin video afiliasi 40 detik: edukasi tentang [masalah], lalu produk [nama produk + link/etalase]. Klaim produk ambil dari kemasan/halaman resmi.
