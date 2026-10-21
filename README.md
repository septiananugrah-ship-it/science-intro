# SCIENTIAN — intro sains universal

Intro 18 detik untuk video edukasi apa pun: matematika, fisika, kimia, biologi, sampai astronomi. Dibuat dengan [Remotion](https://remotion.dev).
2560 × 1440 (2K) · 30 atau 60 FPS · musik & efek suara orisinal.

## Alur

Kamera **zoom keluar tanpa putus**, dari partikel terkecil sampai galaksi. Tiap tingkat tersimpan di dalam tingkat berikutnya, jadi tidak ada potongan adegan.

| Detik | Tingkat | Bidang | Skala (HUD) |
|---|---|---|---|
| 0,0 | Plasma kuark-gluon berpusar lalu mengembun menjadi **inti atom** karbon, dengan kilatan | fisika partikel | 10⁻¹⁵ m |
| 3,0 | **Atom**: awan orbital yang berkedip; elektron melompat dan memancarkan **foton** | fisika kuantum | 10⁻¹⁰ m |
| 4,3 | Atom itu satu karbon di **benzena** yang berputar 3D di tengah "sup" molekul | kimia | 10⁻⁹ m |
| 5,6 | Benzena itu cincin basa di **DNA**, yang tampil dalam perspektif | biologi molekuler | 10⁻⁸ m |
| 6,9 | DNA itu ada di inti **sel tumbuhan** dengan kloroplas yang mengalir | biologi sel | 10⁻⁵ m |
| 8,2 | Sel itu satu dari ribuan sel sebuah **daun** yang urat fraktalnya berdenyut cahaya | botani | 10⁻¹ m |
| 9,7 | Daun itu ada di Bandung, di **Bumi** (Matahari terbit di tepinya, awan, lampu kota, Bulan) | ilmu kebumian | 10⁷ m |
| 11,1 | Bumi di **tata surya** (semburan Matahari, jejak planet, komet) | fisika | 10¹³ m |
| 12,5 | Tata surya di **galaksi** spiral dengan nebula dan lajur debu | astrofisika | 10²¹ m |
| 13,0 | Dua lengan galaksi mengalir menjadi **logo S** | | |
| 14,5 | **SCIENTIAN** dan *Explore Science with Yayan* | | |

Kamera berguling pelan, zoom melambat di setiap tingkat, dan partikel latar depan melintas sehingga terasa seperti terbang menembus ruang 3D.

Matematika muncul di sepanjang intro dalam tiga bentuk:

- **Grid milimeter** yang ikut mengecil tanpa henti.
- **Penghitung eksponen 10ⁿ m** di kiri bawah.
- **Label rumus** di tiap tingkat: Ĥψ = Eψ, C₆H₆, F = G·m₁m₂/r², dan spiral logaritmik r = a·e^(bθ) yang menjadi bentuk lengan galaksi sekaligus bentuk logo S.

## Unduh hasil render (GitHub Actions)

1. Buka tab **Actions** → **Render Intro SCIENTIAN 2K** → **Run workflow**.
2. Bisa langsung dijalankan, atau ubah dulu:
   - **nama** di bawah logo,
   - **tagline**,
   - **HUD**: matikan untuk versi yang lebih bersih, tanpa angka skala dan label rumus.
3. Setelah ±15 menit, unduh artefak **scientian-intro** di halaman run tersebut. Isinya:
   - `scientian-intro-2k-30fps.mp4`: untuk digabung ke video 30 FPS, misalnya video kimia.
   - `scientian-intro-2k-60fps.mp4`: versi lebih mulus untuk video 60 FPS.
   - `scientian-intro-1080p-30fps.mp4`
   - `scientian-logo-transparan.png`: logo S saja, untuk watermark atau foto profil.

## Menjalankan sendiri

```bash
npm ci
npm run dev          # Remotion Studio: pilih "Intro" (1080p), "Intro2K", atau "Logo"
npm run render       # 2K 30 FPS → out/
npm run render:60    # 2K 60 FPS
npm run logo         # PNG transparan
npm run audio        # sintesis ulang musik (butuh python3 + numpy + ffmpeg)
```

Props komposisi: `name`, `tagline`, `hud` (true/false), `volume` (0–1). Contoh:

```bash
npx remotion render src/index.ts Intro2K out/intro.mp4 --props='{"name":"SCIENTIAN","tagline":"Explore Science with Yayan","hud":false}'
```

Di Linux tanpa Chrome lengkap: `CHROME_PATH=/path/ke/headless_shell npm run render`.

## Struktur kode

```
src/camera.ts     kamera "Powers of Ten": rasio antar-tingkat, posisi bersarang, zoom spline
src/micro.tsx     inti atom (kuark & gluon), atom (+ foton), benzena 3D, DNA perspektif
src/macro.tsx     sel tumbuhan, daun, Bumi, tata surya
src/galaxy.tsx    galaksi spiral + morph bintang → logo S
src/logo.tsx      geometri logo S (dua busur spiral) + orbit
src/overlay.tsx   grid matematika, bintang, garis kecepatan, HUD skala, label rumus
src/Intro.tsx     susunan akhir, jadwal, teks nama & tagline
scripts/make-intro-audio.py   musik & efek suara (numpy, tanpa sampel berlisensi)
```

Semua gerak dihitung dari nomor frame, tanpa animasi CSS atau simulasi acak, sehingga render-nya deterministik. Rasio ukuran antar-tingkat sengaja dimampatkan agar transisinya terbaca. Angka skala di HUD tetap nilai sebenarnya.
