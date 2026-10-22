---
name: video-sains
description: Membuat video edukasi Kimia Kuantum (atau sains lain) dengan Remotion bergaya animasi gelap + subtitle kata-per-kata, render 2K via GitHub Actions. Pakai saat pengguna minta "bikin video modul N", "video materi kuliah", atau video edukasi sains.
---

# Video edukasi sains — cara kerja

Pengguna: mahasiswa S1 Kimia UNESA, berbahasa Indonesia, menonton & mengunduh lewat iPad. Jawab dalam bahasa Indonesia, singkat, langkah jelas. Hemat token: jangan membaca seluruh PDF.

## 1. Pilih materi
- Baca `materi/RINGKASAN.md` dulu (daftar modul, isi pokok, status, ide visual).
- Ekstrak HANYA bab yang dipakai: `pdftotext -layout -f <hal> -l <hal> materi/Modul_N_*.pdf -` (nomor halaman ada di daftar isi modul).
- Setelah video selesai, perbarui kolom "Status video" di RINGKASAN.md.

## 2. Contoh yang sudah jadi (tiru strukturnya, jangan mulai dari nol)
- Repo `septiananugrah-ship-it/Claude-Video-Kimia` (Modul 4 Vibrasi, ±16 menit). Salin mesinnya:
  `src/script.ts` (naskah per adegan: teks, kata kunci `hl`, `pause`, `part`), `src/timeline.ts` (5,3 suku kata/dtk + jeda nyata dari `src/voiceover.ts`),
  `src/SceneContext.tsx` (`useScene().cue(i)`/`wordOf`), `src/components/` (latar, subtitle, heading bab, primitif atom/pegas/spektrum),
  `scripts/generate-voiceover.ts`, `scripts/build-audio.ts`, `scripts/assemble.sh`, `scripts/render-chunk.ts`, `scripts/make-music.py`,
  `.github/workflows/render-video.yml` (12 potongan paralel → gabung, 2K) dan `voiceover.yml`.
- Repo `septiananugrah-ship-it/science-intro`: intro SCIENTIAN 18 dtk. Tempel di awal video (render terpisah, gabungkan saat assemble atau di editor).
- Repo baru per video dibuat oleh pengguna (Claude tidak bisa membuat repo); minta pengguna membuatnya kosong lalu `add_repo`.

## 3. Struktur video (wajib untuk tugas)
Pembuka (hook) → judul → peta video → **Bagian 1 prinsip & teori dasar** → **Bagian 2 implementasi dalam kimia** → **Bagian 3 penerapan industri** → rangkuman → penutup + rujukan. Tiap adegan 30–60 dtk, satu ide, visual yang bergerak menjelaskan (bukan slide teks).

## 4. Gaya visual
- 1920×1080 didesain, komposisi 2K = skala vektor 4/3. Latar gelap, glow, kata kunci emas, subtitle kata-per-kata.
- Semua gerak dari frame (`interpolate`, tanpa animasi CSS). Transisi kamera zoom-through + kilatan singkat (jangan dua adegan bertumpuk).
- Rumus ditulis benar; angka dicek terhadap modul (sebut nilai dan satuan).
- QA: render still tiap adegan (`scripts/qa-stills.mjs`), cek transisi, cek tidak ada teks terpotong.

## 5. Suara
- Narasi ElevenLabs suara **Bagas** (`eleven_v4`, `language_code: id`); kunci API ada di secret GitHub `ELEVENLABS_API_KEY` — jangan pernah minta/menampilkan kunci di chat. Jalankan workflow `voiceover.yml`.
- Selalu sediakan juga versi **tanpa narasi** (musik saja) untuk dubbing pengguna.
- Musik orisinal via numpy (`make-music.py`), tanpa sampel berlisensi.

## 6. Kirim ke pengguna
- Commit ke branch kerja → PR → merge ke `main` (workflow_dispatch butuh `main`) → jalankan workflow → pantau → beri link run + cara unduh (Artifacts, tekan lama di iPad).
- Kirim pratinjau 540p lewat SendUserFile agar bisa ditonton langsung.
- Sertakan daftar bab bertimecode untuk deskripsi YouTube.
