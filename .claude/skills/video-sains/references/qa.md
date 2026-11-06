# QA

`CHROME=/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell` (ganti versi bila folder beda: `ls /opt/pw-browsers`).

1. **Tipe & penanda kata**: `npx tsc --noEmit` lalu `npm run check` (setiap `wordOf` harus menemukan katanya; kata ganda → `nth`).
2. **Still per baris** (paling efektif menemukan tabrakan):
   ```bash
   CHROME_PATH=$CHROME node scripts/qa-lines.mjs out/full [adegan ...]
   python3 scripts/contact.py out/full out/full-s 3
   ```
   ±200 still untuk 18 menit (±8 menit). **Baca semua lembar** (`Read` gambar). Cari: teks tabrakan/terpotong, elemen di zona subtitle, area kosong, fisika salah (arah panah, sudut, urutan tingkat energi), label tanpa subskrip.
   Catatan: subtitle yang tampak bertumpuk pada still = silang-pudar halaman (normal).
3. **Momen kunci**: `node scripts/qa-moments.mjs out/m adegan:baris:offset ...` (offset = detik setelah baris mulai).
4. **Uji kemulusan seluruh film** (±45 menit, jalankan di latar belakang):
   ```bash
   CHROME_PATH=$CHROME node scripts/qa-film.mjs out/film.mp4 0 99999 0.25
   python3 scripts/qa-glitch.py out/film.mp4 0
   ```
   Urutkan lonjakan `beda`; ≈ 2 = normal (ganti halaman subtitle). Lonjakan jauh lebih besar → ekstrak frame f−1 dan f, cari pop/loncatan (CSS blur, ganti berdasarkan ambang, elemen muncul mendadak). Cara cepat: render kedua frame penuh dengan `npx remotion still <Komp> out/sN.png --frame=N --browser-executable=$CHROME_PATH`, lalu beda piksel per wilayah (numpy). Bila bedanya menyebar di semua garis tipis dengan geser ½ piksel, itu ayunan pelan `SceneShell` (tak terlihat; lonjakan ≈ 3 di adegan penuh garis datar boleh diterima, catat di PR).
5. Kirim 2–4 lembar kontak terbaik ke pengguna sebagai pratinjau.

Jangan mengedit berkas saat proses bundling berjalan. Dua proses render paralel boleh di mesin 2 inti, lebih tidak.
