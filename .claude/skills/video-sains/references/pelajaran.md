# Pelajaran — jangan ulangi kesalahan ini

## Render & Remotion
- `--scale 4/3` di CLI → tinggi ganjil. Pakai komposisi 2K pembungkus (skala vektor 4/3).
- `-shortest` memotong frame → `apad` + `atrim` ke durasi pasti.
- `selectComposition`/`renderStill`/`renderMedia` butuh `browserExecutable` (CHROME_PATH), kalau tidak Remotion mencoba mengunduh Chrome dan gagal di sandbox.
- `mix-blend-mode` di grup bertransformasi tampil sebagai kotak → pakai mask pada salinan teks.
- Filter noise SVG (tekstur kapur) membuat render ±4× lebih lambat; `drop-shadow` CSS pada `<svg>` jauh lebih murah.
- YAML: `: ` di dalam `run:` tanpa blok `|` membuat workflow tidak valid. `workflow_dispatch` harus ada di `main`.

## Tata letak
- Komponen HTML (`Card`, `Formula`, `Badge`) di dalam `<Stage>` tidak tampil.
- `Formula` dengan wadah flex membuat `<sub>` naik → isi baris inline.
- Label SVG tidak mengenal `_`/subskrip HTML → `tspan baselineShift`.
- Tanda akar: jangan `borderTop` pada span inline → komponen `Sqrt`.
- Ukuran awan orbital harus memakai skala px/a₀ yang sama (1s tidak boleh sebesar 2s).
- Jangan "menghapus" garis dengan persegi warna latar → pecah path dan pudarkan.
- 3 still per adegan melewatkan banyak tabrakan → still di akhir **setiap baris** (`qa-lines`).

## Kemulusan
- CSS `filter: blur` diterapkan mendadak oleh Chrome (tajam → kabur dalam 1 frame). Mesin Modul 2 masih memakainya di `SceneShell` & `Part` — ganti.
- EASE lama (0.16, 1, 0.3, 1) melompat di frame pertama → EASE lembut (0.3, 0.05, 0.15, 1); fade keluar `EASE_IN_OUT`.
- Ganti teks/warna/filter berdasarkan ambang → pop. Silang-pudar.
- Kisi latar berulang harus dibungkus dengan periode tepat (heksagon √3·r × 3r).
- Ganti halaman subtitle tadinya lonjakan terbesar → `Captions.tsx` silang-pudar ±0,16 dtk; halaman dalam satu baris menyambung (`contOut`).
- `filter="url(#glow)"` pada garis lurus tegak/datar → garis lenyap. Di tema terang jangan pakai glow neon.
- Kartu bergantian pakai `slot`, bukan `win` (dua kartu bertumpuk sesaat).

## Naskah & isi
- `wordOf(i,'kata')` = kemunculan pertama ("tiga" di "tiga belas") → `nth` + `npm run check`.
- `hl` harus frasa yang ada di teks.
- Angka luar modul dicek ke sumber primer **sebelum** narasi. Contoh koreksi: 2,45 GHz = pita ISM (bukan resonansi air); Doppler menjauh → merah; vektor dipol IUPAC dari δ− ke δ+; H₂O sumbu b = C₂, sumbu menempel ke pusat massa.
- Cek fisika visual, bukan hanya angka (T̂ sin positif, jungkat-jungkit miring ke sisi berat, luas puncak NMR ∝ jumlah H, arah fase φ di layar dengan y terbalik).
- "Glow-in-the-dark" mainan = luminesensi perangkap, bukan fosforesensi triplet — jangan jadikan contoh triplet.
- Generator naskah berisi SCRIPT inline: edit generator, bukan berkas rujukan lain, lalu jalankan ulang.
- Kunci tts ganda di `tts.ts` → galat TS1117.

- Label sudut/angka di atas lobus 3D yang berputar sulit dibaca → taruh angka di samping molekul (label + keterangan), busur tetap di molekul.
- Adegan yang benda utamanya muncul pada kata terakhir baris pertama → layar kosong ±3 dtk; isi baris pembuka dengan elemen kaitan (mis. daftar keberhasilan teori sebelumnya).

## Kerja & sesi
- 4 agen Opus paralel bisa menghabiskan batas 5 jam dalam ±15 menit → commit WIP, lanjutkan agen yang sama via SendMessage setelah reset. Pengguna kadang minta berhenti → TaskStop + commit WIP; jangan pasang jadwal otomatis tanpa diminta.
- Proses kerja bisa dimulai ulang di tengah tunggu panjang → commit & push sebelum render lama.
- Jawaban AskUserQuestion bisa kosong → tanya ulang, jangan menebak gaya visual.
- Whisper lokal: `faster-whisper` + decode ffmpeg ke numpy (PyAV baru error).
- `scripts/new-video.sh` + `gen_template.py` (skill) menyalin mesin & menulis naskah dalam hitungan menit; teruji di video orbital molekul.
- Agen yang kena batas: commit WIP lalu SendMessage ke agen yang sama setelah reset — laporannya kadang bilang perubahan sudah ikut di commit WIP (tidak perlu commit lagi).
- Setelah PR `science-intro` di-merge: gabungkan `origin/main` ke branch kerja (merge biasa), jangan force-push.
- `contact.py … 3` (3 kolom) lebih terbaca daripada 9 kolom.
- Musik 192 kbps bisa > 25 MB (batas unggah web GitHub) → 128 kbps.
- Cek fakta ke sumber primer (akses jaringan terbuka): NIST WebBook (konstanta diatomik Huber–Herzberg), CDMS (≈ 350 molekul antarbintang), NASA, nobelprize.org; tandai kolom "Dicek" di `AUDIT.md` sebelum narasi direkam.
- Label pembuka di `scripts/export-timeline.ts` jangan ditulis mati (bekas "oven microwave & teleskop radio") — sesuaikan per video.
- `ramp` beri pengaman `Math.max(b, a + 0.05)`: rentang yang dihitung dari dua kata berbeda bisa terbalik saat jeda narasi bergeser → render error.
- Kartu penutup di atas kartu rangkuman: teks HTML di bawahnya harus memudar penuh (bukan 0,2), kalau tidak tembus.
- Edge TTS jalan dari sandbox lewat `edge-tts --proxy $HTTPS_PROXY`; Gemini TTS bagus tapi kuota gratis sangat kecil.
- Pola yang lolos audit tapi melanggar aturan kemulusan: `opacity={p > 0.01 ? 1 : 0}` pada panah/garis yang tumbuh (kepala panah muncul penuh dalam 1 frame) → `Math.min(1, p * 12)`; `x < 1 ? 1 : nilaiLain` → campur dengan faktor kontinu. Cari dengan `grep -rn "? 1 : 0" src/scenes src/components` sebelum PR.
- Pengaman `ramp` (b ≤ a) sudah dipasang di semua repo video kuantum & seri fisika (PR kecil per repo) — penting saat narasi direkam karena jeda nyata menggeser `wordOf`.
- Bahan unggah YouTube per video: `scripts/gen_youtube.py` (skill) menulis `naskah/YOUTUBE.md` — judul & bab dari `BAB_YOUTUBE.txt`, rujukan dari `REFS` di `Outro.tsx`, deskripsi + tag ditulis per video di kamus `V`. Cocokkan deskripsi dengan daftar bab (jangan dari ingatan). Setelah narasi direkam: `npm run timeline` lalu salin ulang bab.
- `src/Thumbnail.tsx` ikut tersalin saat repo baru dibuat dari repo lama → 8 video seri fisika & 5 video kuantum sempat memakai judul/gambar video lain ("Yang Tak Pernah Hilang", π* + garis natrium). Ganti judul **dan** gambar sesuai topik, lalu render still `Thumbnail` dan lihat sebelum PR.
