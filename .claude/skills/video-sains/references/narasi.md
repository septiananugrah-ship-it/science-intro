# Narasi

- Default: ElevenLabs **suara klon** Yayan, model `eleven_v4`, `language_code: id` (video lama: suara Bagas). Kunci: secret `ELEVENLABS_API_KEY` (+ `ELEVENLABS_VOICE_ID`) **per repo** — ingatkan pengguna memasangnya; jangan pernah meminta/menampilkan kunci.
- Cadangan gratis: workflow voice-over input `mesin: edge` (Edge TTS `id-ID-ArdiNeural`/`GadisNeural`). Edge TTS diblokir dari sandbox Claude (proxy 403) — hanya jalan di GitHub Actions.
- Teks yang dikirim ke TTS = `ttsText(line)` dari `src/tts.ts` (`tts` per baris, atau ejaan otomatis huruf tunggal & kamus nama).
- Workflow hanya membuat baris yang belum ada; ubah teks satu baris → hapus `public/voiceover/<kode>.mp3`.
- Durasi & jeda tiap rekaman diukur (silencedetect) → `src/voiceover.ts` → subtitle & animasi menempel ke jeda nyata (timeline otomatis menyesuaikan).
- Setelah suara jadi: minta pengguna menjalankan workflow **Cek pengucapan narasi (Whisper)**. Model `small` banyak alarm palsu ("pi" → "P"); putuskan rekam ulang hanya bila `medium` juga salah.
- Musik: disintesis numpy (`make-music.py`), loudnorm, 128 kbps; tanpa sampel berlisensi.
- Pilihan TTS lain bila kredit habis: Google Chirp 3 HD, Fish Audio / MiniMax (klon), Gemini TTS — kunci tetap lewat secret.
- Model ElevenLabs: `eleven_v4` (standar) atau `eleven_v4_turbo` (≈ separuh kredit, pilihan di semua `voiceover.yml` sejak 4 Nov 2026); `language_code: id` tetap dikirim untuk keduanya.
