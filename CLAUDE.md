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
| `septiananugrah-ship-it/video-fisika-energi` | **Seri Fisika Umum #1** "Mata Uang Semesta" — Usaha & Energi, ±26 menit, gaya "Lab Energi" (biru tinta + kisi cetak biru, kode warna energi tetap: K jingga, Ug biru, Us ungu, termal merah, W hijau, F kuning), intro SCIENTIAN dirender otomatis dari repo ini di workflow, outro "Disusun oleh Septian Anugrah Dwi Putra". Seri berikutnya: Fluida Statis, Fluida Dinamis, Momentum (repo baru per materi). |
| `septiananugrah-ship-it/video-fisika-fluida-statis` | **Seri Fisika Umum #2** "Dorongan Tak Terlihat" — Fluida Statis, ±21 menit, 23 adegan, gaya "Lab" bernuansa air (`fluid.tsx`: Water, Tank, PressureArrow…). **Tanpa intro SCIENTIAN terpisah** (pengguna: cukup kapsul logo S + "Explore Science with Yayan" di judul pembuka). Sudah diaudit (qa-lines + uji glitch seluruh film). |
| `septiananugrah-ship-it/video-fisika-fluida-dinamis` | **Seri Fisika Umum #3** "Arus yang Mengangkat" — Fluida Dinamis, ±17 menit (estimasi), 23 adegan, komponen aliran `flow.tsx` (Pipe sesuai kontinuitas, Streamline, Jet, Smoke); bagian lab kimia: pompa vakum air, Bunsen, nebulizer AAS, viskometer Ostwald. Tanpa intro terpisah. Berikutnya: **Momentum**. |
| `video-fisika-momentum` (repo belum dibuat; folder lokal) | **Seri #4** "Yang Tak Pernah Hilang" — Momentum & Impuls, ±15 menit, 22 adegan; bagian kimia: tekanan gas, teori tumbukan, momentum foton. Sudah diaudit (qa-lines + uji glitch). |
| `video-fisika-osilasi` (repo belum dibuat) | **Seri #5** "Irama yang Berulang" — Osilasi (RPS minggu 7), ±12,5 menit, 19 adegan; jembatan kuantum: HCl sebagai pegas, IR 2886 cm⁻¹, efek isotop DCl, E = (v+½)hν. Sudah diaudit. |
| `video-fisika-gelombang` (repo belum dibuat) | **Seri #6** "Getaran yang Berjalan" — Gelombang (RPS minggu 9), ±12 menit, 19 adegan; jembatan kuantum: difraksi sinar-X Bragg, de Broglie, elektron dalam kotak, orbital = gelombang berdiri 3D. Sudah diaudit. |
| `video-fisika-termofisika` (repo belum dibuat) | **Seri #7** "Ke Mana Panas Pergi" — Termofisika (RPS minggu 10–11), ±12,5 menit, 20 adegan; jembatan kuantum: teori kinetik, Maxwell–Boltzmann, faktor Boltzmann, S = k ln W. Sedang dibangun. |

## Status materi
Lihat `materi/RINGKASAN.md`. Modul 3, 4, dan 6 sudah jadi video; Modul 2 naskah & adegan jadi (tinggal narasi + render); Modul 5 dibuat Chika (video-gasing-kuantum). Saran berikutnya: **Modul 1** (pengantar) atau **Modul 7** (simbol term).
Seri Fisika Umum (urutan mengikuti RPS Fisika Umum S1 Kimia UNESA, diarahkan sebagai fondasi kimia kuantum): #1 Usaha & Energi ✓ · #2 Fluida Statis ✓ · #3 Fluida Dinamis ✓ · #4 Momentum ✓ · #5 Osilasi ✓ · #6 Gelombang ✓ · #7 Termofisika (dibangun) · berikutnya **Listrik statis & dinamis → Magnet → Fisika Atom (Bohr)**. Folder #4–#7 menunggu pengguna membuat repo GitHub. Narasi seri fisika belum direkam (kredit ElevenLabs habis; Sidik Jari v2 sudah memakai suara klon baru `eleven_v4`).

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
- Kartu rumus yang bergantian di satu posisi: pakai `slot(t, a, b)` (repo video-landasan-kimia-kuantum, `src/anim.ts`) — kartu lama selesai menghilang **sebelum** batas `b`, kartu baru mulai di `b`; `win()` biasa membuat dua kartu bertumpuk sesaat.
- Cek fisika visual, bukan hanya angka: T̂ sin = +(konstanta)·sin (energi kinetik positif, bukan −sin), jungkat-jungkit miring ke sisi yang lebih berat, luas puncak NMR sebanding jumlah H.
- `foreignObject` di dalam SVG berguna untuk menaruh rumus HTML (`Op`, `Frac`) di dalam bentuk SVG (mis. kotak "mesin operator").
- Tanda ⟨ ⟩ tidak ada di font serif/mono label SVG (tampil seperti kurung) → tulis "rata-rata p" atau taruh di kartu HTML.
- Seri Fisika: pengguna kini **mau** nama "Septian Anugrah Dwi Putra" di outro + SCIENTIAN/"Explore Science with Yayan" (aturan "tanpa nama" lama hanya untuk video kuantum).
- Kredit ElevenLabs habis → workflow voice-over punya pilihan `mesin: edge` (Edge TTS gratis, `id-ID-ArdiNeural`/`GadisNeural`). Edge TTS **diblokir dari sandbox Claude** (proxy 403), jalan di GitHub Actions.
- Intro SCIENTIAN tidak perlu diunggah manual: job `intro` di `render-video.yml` meng-checkout repo ini (publik) dan merender `Intro2K`, lalu `assemble.sh` menempelkannya.
- Banyak adegan dikerjakan paralel oleh beberapa agen (fork) per kelompok adegan; QA terakhir tetap di tangan sesi utama (qa-lines → lembar kontak per 9 still).
- Seri fluida: pengguna **tidak mau** intro SCIENTIAN terpisah lagi ("jelek, cukup di pembuka") → hapus job `intro` dari `render-video.yml`, taruh kapsul logo S + "Explore Science with Yayan" di adegan judul. (Video Usaha & Energi masih memakai intro lama.)
- Uji glitch seluruh film: lonjakan terbesar = **pergantian halaman subtitle** (teks lama lenyap dalam 1 frame, kapsul melompat ukuran) → `Captions.tsx` sekarang menyilang-pudar halaman lama (teks + kapsul, ±0,16 dtk). Salin `Captions.tsx` versi ini ke repo video baru.
- 4 agen Opus effort tinggi paralel menghabiskan batas 5 jam pengguna dalam ±15 menit → commit & push WIP dulu, lalu lanjutkan agen yang sama lewat SendMessage setelah reset (pekerjaannya tersimpan). Pengguna paket Team: halaman Usage hanya menampilkan batas 5 jam.
- `qa-moments.mjs adegan:baris:offset`: offset = detik **setelah** baris mulai (negatif → jatuh ke baris sebelumnya).
- Folder kerja yang dibuat sebelum repo GitHub ada: `git init -b <branch>`, lalu setelah pengguna membuat repo (sering berisi README awal) → `git remote add` + `git merge origin/main --allow-unrelated-histories -X ours`, push, PR.

- Pengguna minta kerja terus sampai batas pemakaian habis, lalu lanjut otomatis: pasang `send_later` ±3 jam (setelah reset) berisi langkah lanjutan; agen yang terhenti dilanjutkan lewat SendMessage (pekerjaannya tersimpan). Commit WIP sebelum batas.
- Pipeline video seri baru (±1 jam kerja): `gen_<topik>.py` di scratchpad menulis `src/script.ts` (naskah + `hl` + jeda) → salin repo seri sebelumnya lewat `git archive` → stub adegan, index, brand, ChapterHeading, GHOSTS latar, REFS outro, kode warna, tts, nada musik → AUDIT (cek angka) → 4 agen Opus paralel per kelompok adegan → commit per kelompok → `check-cues` + `qa-lines` (baca semua lembar) → `qa-film` + `qa-glitch`.
- Setiap video seri fisika punya Bagian 2 "di dunia kimia" yang menjembatani ke kimia kuantum (pengguna tertarik kuantum dan merasa video berbahasa Indonesia langka).

## Aturan untuk sesi baru
- Mulai dengan membaca file ini dan `materi/RINGKASAN.md`; jangan minta pengguna menjelaskan ulang.
- Untuk video baru pakai skill `video-sains`. Repo video baru dibuat pengguna; minta namanya lalu `add_repo`.
- Jawab ringkas dalam bahasa Indonesia; beri link GitHub yang bisa langsung diketuk di iPad.
- Hemat token: baca bab PDF seperlunya, jangan tempel isi PDF di chat.
- Setelah selesai: perbarui status di `materi/RINGKASAN.md` dan tambahkan pelajaran baru ke bagian "Pelajaran" di atas.
- Jangan menghapus repo/berkas pengguna tanpa konfirmasi; jangan pernah meminta atau menampilkan kunci API.
- Pengguna mempertimbangkan menghapus repo lama (video-kimia, Intro-Video-Edukasi, video-remotion, video-edukasi-remotion) — jangan bergantung padanya.
