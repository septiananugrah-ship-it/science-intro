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
| `septiananugrah-ship-it/video-atom-hidrogen` | Video Modul 6 "Atom Hidrogen", ±19 menit, 2K, narasi Bagas + versi tanpa narasi (subtitle tetap ada); rumus `Formula`/`Frac`, skrip QA `qa-audit`/`qa-moments`/`check-cues`. |
| `septiananugrah-ship-it/video-partikel-kotak` | Video Modul 3 "Partikel dalam Kotak", ±22 menit, 2K, 17 bab, sudah di-polish; komponen `Mesh3D`/`Surface3D` (permukaan 3D), `PacketSim` + `scripts/sim-packet.py` (simulasi Schrödinger bergantung waktu), `ScaleHud`/`ZoomGrid` (zoom ala intro), `Heatmap2D` halus; skrip `contact.py` (lembar kontak QA); catatan `naskah/AUDIT.md`. |
| `septiananugrah-ship-it/video-landasan-kimia-kuantum` | Video Modul 2 "Aturan Main Kuantum", ±18 menit, 2K, 18 bab; mesin dari video-partikel-kotak; komponen `qm.tsx` (ψ berwarna fase, fasor, paket Gauss analitik), `machine.tsx` (mesin operator), `Sqrt`/`Op`; `scripts/gen-scenes.py` menulis indeks adegan. |
| `septiananugrah-ship-it/science-intro` (repo ini) | Intro SCIENTIAN 18 dtk (zoom inti atom → galaksi → logo S), materi kuliah di `materi/`, skill `.claude/skills/video-sains/`. |
| `septiananugrah-ship-it/video-kimia` | Versi lama buatan ChatGPT (pembanding, kualitas gerak kurang). |

## Status materi
Lihat `materi/RINGKASAN.md`. Modul 3, 4, dan 6 sudah jadi video; Modul 2 naskah & adegan jadi (tinggal narasi + render); Modul 5 dibuat Chika (video-gasing-kuantum). Saran berikutnya: **Modul 1** (pengantar) atau **Modul 7** (simbol term).

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
- Secret GitHub berlaku **per repo**: pasang `ELEVENLABS_API_KEY` di setiap repo video baru sebelum menjalankan `voiceover.yml` (tanpa itu langkah TTS gagal dengan kunci kosong).
- `wordOf(i, 'kata')` mengambil kemunculan **pertama** ("tiga" di "tiga belas" ≠ "tingkat tiga") → pakai `wordOf(i, kata, n)` dan jalankan `scripts/check-cues.ts` (Modul 6) untuk mendeteksi kata ganda.
- Komponen HTML (`Card`, `Badge`, `Formula`) di dalam `<Stage>` (SVG) tidak tampil → letakkan di luar `<Stage>`.
- Rumus: pakai `Formula` + `Frac` (≥ 56 px, pecahan bertumpuk, satu kartu per momen di satu "slot"); jangan pakai garis miring untuk pecahan.
- Ukuran awan orbital harus memakai skala px/a yang sama, kalau tidak 1s tampak sebesar 2s.
- Mengubah teks satu baris narasi → hapus `public/voiceover/<kode>.mp3` agar dibuat ulang; workflow hanya membuat baris yang belum ada.
- Whisper lokal: `faster-whisper` + decode ffmpeg ke numpy (PyAV versi baru error). Model `small` banyak alarm palsu → cek ulang baris mencurigakan dengan `medium`.
- QA paling efektif: `qa-audit.mjs` (awal/tengah/akhir + transisi) lalu `qa-moments.mjs adegan:baris:offset` untuk momen kunci (kartu rumus, foton, zoom).
- Proses kerja bisa dimulai ulang di tengah tunggu panjang → commit & push WIP sebelum render lama.
- `filter="url(#glow)"` pada `<line>` tegak/datar (kotak batas lebar 0) membuat garis **lenyap** → jangan beri filter pada garis lurus; pakai garis lebar transparan sebagai cahaya.
- Hemat token saat QA: gabungkan still menjadi lembar kontak (`python3 scripts/contact.py out/audit out/sheets`, repo video-partikel-kotak) lalu baca satu gambar per 1–2 adegan.
- Label SVG tidak mengenal `_`/subskrip HTML → pakai `<tspan baselineShift="sub">`; di kartu HTML pakai `Sub`/`Sup`.
- Kartu `Formula` dengan wadah `display:flex` membuat `<sub>` **naik** (vertical-align diabaikan pada item flex) → isi rumus harus baris inline (`textAlign:center`, `whiteSpace:nowrap`). Cek juga repo lama yang memakai komponen sama.
- Whisper small/medium menulis "pi" (π) sebagai "P" dan small sering mendengar "penerowongan" → "penerawangan": alarm palsu; putuskan rekam ulang hanya bila medium juga salah.
- Angka ukur dari luar modul (λmaks pewarna, penghalang NH₃, dll.) dicek ke sumber primer/katalog **sebelum** narasi direkam; mengubahnya belakangan berarti rekam ulang baris.
- Peta panas dari ribuan `<rect>` tampak kotak-kotak → buat gambar sekali lewat canvas (`toDataURL`) lalu `<image preserveAspectRatio="none">`.
- Skrip QA salinan repo lama (`qa-*.mjs`) memanggil `selectComposition` tanpa `browserExecutable` → Remotion mencoba mengunduh Chrome dan gagal di sandbox; tambahkan `browserExecutable` di semua pemanggilan.
- `foreignObject` di dalam SVG berguna untuk menaruh rumus HTML (`Op`, `Frac`) di dalam bentuk SVG (mis. kotak "mesin operator").
- Tanda ⟨ ⟩ tidak ada di font serif/mono label SVG (tampil seperti kurung) → tulis "rata-rata p" atau taruh di kartu HTML.

## Aturan untuk sesi baru
- Mulai dengan membaca file ini dan `materi/RINGKASAN.md`; jangan minta pengguna menjelaskan ulang.
- Untuk video baru pakai skill `video-sains`. Repo video baru dibuat pengguna; minta namanya lalu `add_repo`.
- Jawab ringkas dalam bahasa Indonesia; beri link GitHub yang bisa langsung diketuk di iPad.
- Hemat token: baca bab PDF seperlunya, jangan tempel isi PDF di chat.
- Setelah selesai: perbarui status di `materi/RINGKASAN.md` dan tambahkan pelajaran baru ke bagian "Pelajaran" di atas.
- Jangan menghapus repo/berkas pengguna tanpa konfirmasi; jangan pernah meminta atau menampilkan kunci API.
- Pengguna mempertimbangkan menghapus repo lama (video-kimia, Intro-Video-Edukasi, video-remotion, video-edukasi-remotion) — jangan bergantung padanya.
