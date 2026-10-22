# Konteks proyek (baca dulu)

Dokumen serah-terima: semua yang perlu diketahui asisten AI (Claude Code, atau AI lain) untuk melanjutkan pekerjaan ini tanpa mengulang dari nol.

## Pengguna
- Septian Anugrah ("Yayan"), mahasiswa S1 Kimia Universitas Negeri Surabaya, mata kuliah **Kimia Kuantum**.
- Berbahasa Indonesia, santai. Menonton & mengunduh lewat **iPad** (pakai MP3/MP4 H.264; unduh artefak GitHub: tekan lama → Unduh Tautan Tertaut).
- Kadang memakai GitHub Codespaces untuk Remotion Studio (`npm run dev`, buka port di tab Ports; Codespace 2 inti → concurrency ≤ 2).
- Peduli hemat token: jangan baca seluruh PDF, pakai `materi/RINGKASAN.md`.
- Tidak mau nama/NIM di video. Nama channel: **SCIENTIAN**, tagline **Explore Science with Yayan**.

## Repo
| Repo | Isi |
|---|---|
| `septiananugrah-ship-it/Claude-Video-Kimia` | Video "Sidik Jari Molekul" — Modul 4 Gerak Vibrasi, ±16 menit, 2K, narasi ElevenLabs Bagas + versi tanpa narasi. **Template untuk video berikutnya.** |
| `septiananugrah-ship-it/science-intro` (repo ini) | Intro SCIENTIAN 18 dtk (zoom inti atom → galaksi → logo S), materi kuliah di `materi/`, skill `.claude/skills/video-sains/`. |
| `septiananugrah-ship-it/video-kimia` | Versi lama buatan ChatGPT (pembanding, kualitas gerak kurang). |

## Status materi
Lihat `materi/RINGKASAN.md`. Modul 4 sudah jadi video. Saran berikutnya: **Modul 6 Atom Hidrogen**, cadangan Modul 3 (partikel dalam kotak).

## Cara kerja yang sudah terbukti
- Remotion 4.0.536, React; semua animasi dari frame (`interpolate`), tanpa animasi CSS. Desain 1920×1080, versi 2K = komposisi pembungkus skala 4/3 (vektor tetap tajam).
- Render di **GitHub Actions** (workflow_dispatch harus ada di `main`): potong paralel → gabung `ffmpeg -c copy` → audio dibangun ffmpeg (apad/atrim tepat durasi). Artefak diunduh pengguna.
- Narasi: ElevenLabs suara **Bagas**, model `eleven_v4`, `language_code: id`. Kunci di **secret GitHub `ELEVENLABS_API_KEY`** (akun berlangganan Starter; voice library butuh berbayar). Jangan pernah minta/menampilkan kunci di chat. Durasi & jeda tiap baris diukur (silencedetect) → `src/voiceover.ts` → subtitle & animasi menempel ke jeda nyata.
- Musik/SFX disintesis numpy + ffmpeg loudnorm (tanpa sampel berlisensi).
- QA: still per adegan + cek transisi; Whisper untuk cek pengucapan istilah.
- Lokal tanpa Chrome lengkap: `CHROME_PATH=.../chrome-headless-shell` .
- Alur git: kerja di branch → PR → merge ke `main` → jalankan workflow → beri link run.

## Pelajaran (hindari)
- Adegan bertumpuk saat transisi terlihat jelek → pakai zoom-through berurutan + kilatan singkat.
- `--scale 4/3` di CLI menghasilkan tinggi ganjil → pakai komposisi 2K terpisah.
- `-shortest` memotong frame → apad + atrim ke durasi pasti.
- Efek `mix-blend-mode` di dalam grup bertransformasi tampil sebagai kotak → pakai mask pada salinan teks.
- `: ` di dalam `run:` YAML tanpa blok `|` membuat workflow tidak valid.

## Aturan untuk sesi baru
- Mulai dengan membaca file ini dan `materi/RINGKASAN.md`; jangan minta pengguna menjelaskan ulang.
- Untuk video baru pakai skill `video-sains`. Repo video baru dibuat pengguna; minta namanya lalu `add_repo`.
- Jawab ringkas dalam bahasa Indonesia; beri link GitHub yang bisa langsung diketuk di iPad.
- Hemat token: baca bab PDF seperlunya, jangan tempel isi PDF di chat.
- Setelah selesai: perbarui status di `materi/RINGKASAN.md` dan tambahkan pelajaran baru ke bagian "Pelajaran" di atas.
- Jangan menghapus repo/berkas pengguna tanpa konfirmasi; jangan pernah meminta atau menampilkan kunci API.
- Pengguna mempertimbangkan menghapus repo lama (video-kimia, Intro-Video-Edukasi, video-remotion, video-edukasi-remotion) — jangan bergantung padanya.
