# Riwayat chat (ringkasan) — sesi Claude Code Okt 2026

Ringkasan percakapan panjang dengan Claude: apa yang dibuat, keputusan, dan teks siap pakai.
Rincian teknis ada di `CLAUDE.md`; resep video di `.claude/skills/video-sains/SKILL.md`.

## Yang sudah dibuat
1. **Video "Sidik Jari Molekul"** (Modul 4 Gerak Vibrasi), repo `Claude-Video-Kimia`.
   - ±16 menit, 2K, narasi ElevenLabs Bagas + versi tanpa narasi, thumbnail, daftar bab YouTube.
   - Struktur tugas UTS: teori dasar → implementasi kimia → industri.
2. **Intro SCIENTIAN** (repo ini).
   - v1 11 dtk, lalu v2 18 dtk.
   - Isi: zoom tanpa putus dari inti atom → atom → benzena → DNA → sel tumbuhan → daun → Bumi → tata surya → galaksi → logo S → "SCIENTIAN · Explore Science with Yayan".
   - Render: tab Actions → *Render Intro SCIENTIAN 2K*.
3. **Video Modul 6 Atom Hidrogen** (repo `video-atom-hidrogen`).
   - Direvisi dengan Opus Ekstra: rumus & tata letak dirapikan, 12 rujukan nyata.
4. **Materi kuliah** di `materi/`: PDF + `RINGKASAN.md`. RPS berupa hasil scan, jadi teksnya tidak bisa dibaca.
5. **Skill `video-sains`**, `CLAUDE.md` (serah-terima), `PANDUAN-CHAT.md` (perintah siap salin).

## Keputusan & preferensi
- Nama channel **SCIENTIAN** (Science + Septian), tagline **Explore Science with Yayan**. Tanpa nama/NIM di video.
- Modul hanya referensi; boleh pakai sumber luar asal nyata (NIST, IUPAC, buku teks). Subtitle wajib, rumus besar & rapi.
- Putaran polish pakai Opus effort tinggi, dengan catatan spesifik (menit + masalah).
- Kunci ElevenLabs disimpan sebagai secret `ELEVENLABS_API_KEY` **per repo** (repo baru harus dipasang lagi).
- Repo lama yang boleh dihapus/diarsip (dicek dulu isinya): `video-kimia` (hasil ChatGPT), `Intro-Video-Edukasi`, `video-remotion`, `video-edukasi-remotion`.
- Sebaiknya `science-intro` dijadikan **private** karena berisi PDF modul & RPS dosen.

## Upwork
**Title:** Science Explainer Video & Chemistry Illustration Creator

**Bio:**

> **Chemistry student who turns complex science into clear, engaging visuals.**
>
> I'm a chemistry undergraduate at Universitas Negeri Surabaya who creates educational science content. I make difficult topics, like quantum chemistry, spectroscopy, and atomic structure, easy to understand through animation and design.
>
> **What I can do for you:**
> - **Animated science explainer videos.** Motion graphics for chemistry, physics, and biology, with narration, word-by-word subtitles, and original music, up to 2K resolution.
> - **Channel intros and logo animations** for educational YouTube channels and online courses.
> - **Scientific vector illustrations.** Molecules, lab equipment, diagrams, and icons for slides, textbooks, and stock.
> - **Educational scripts and storyboards** that are scientifically accurate and checked against reliable sources (NIST, IUPAC, standard textbooks).
>
> **Why work with me:**
> - Real subject knowledge, so the science stays accurate, not just pretty.
> - Modern tools (Remotion, AI-assisted workflows, ElevenLabs voice-over) for high-quality results with fast turnaround.
> - Clear communication in English and Bahasa Indonesia.
>
> Let's make your science content easier to learn and more enjoyable to watch.

**Tarif:**
- Mulai **$15/jam**; naik ke $20–25 setelah 3–5 ulasan bintang 5.
- Untuk video lebih cocok harga per proyek: ±$50–150 untuk video 1–2 menit.
- "You'll get" = tarif dikurangi service fee Upwork (lihat angka di form).

**Portofolio:** unggah video vibrasi, intro SCIENTIAN, dan video atom hidrogen.

## Revisi (Okt 2026)
- Narasi video baru: **suara klon Yayan** di ElevenLabs, bukan Bagas (video lama Modul 3/4/6 tetap Bagas).
- Alur git: setelah merge ke `main`, Claude **berhenti**; Yayan sendiri yang menekan Run workflow. Claude hanya memberi link & isian.
