# Ringkasan materi Kimia Kuantum (S1 Kimia, UNESA)

Ringkas per modul untuk memilih topik video tanpa membaca ulang PDF.
PDF lengkap ada di folder ini; baca HANYA bagian yang dibutuhkan (`pdftotext -f N -l M`).
Catatan: PDF RPS berupa hasil pindai (teks tidak bisa diekstrak).

| Modul | Judul | Isi pokok | Status video |
|---|---|---|---|
| 1 | Pengantar Kimia Kuantum | gelombang & foton, radiasi benda hitam (Planck), efek fotolistrik, spektrum H & model Bohr, de Broglie, ketidakpastian Heisenberg | belum (draf naskah + audit: `riset/modul-1-pengantar/`) |
| 2 | Landasan Kimia Kuantum | Ψ dan \|Ψ\|², normalisasi, superposisi, operator & nilai eigen, nilai harapan, komutator, persamaan Schrödinger, spin & Pauli | **naskah & adegan jadi, mesin diperbarui** (repo video-landasan-kimia-kuantum, "Aturan Main Kuantum", ±18 menit, PR #2; tinggal rekam narasi & render) |
| 3 | Gerak Translasi | partikel bebas, kotak 1D/2D/3D, simpul & degenerasi, transisi & serapan cahaya, elektron π molekul terkonjugasi, titik kuantum, sumur berhingga, penerowongan | **sudah** (repo video-partikel-kotak, ±22 menit, sudah di-polish: simulasi paket gelombang, STM 3D) |
| 4 | Gerak Vibrasi | osilator harmonik, massa tereduksi, kuantisasi, fungsi gelombang, titik balik, HCl & efek isotop, aktivitas IR, anharmonisitas, mode normal | **sudah** (repo Claude-Video-Kimia) |
| 5 | Gerak Rotasi | partikel pada cincin, rotor linear 3D, harmonik sferis, momentum sudut, konstanta rotasi & spektrum garis (HI/DI), panjang ikatan, populasi & suhu, spin | **sudah** (repo video-gasing-kuantum, milik Chika, gaya buku catatan terang) |
| 6 | Struktur & Spektrum Atom Hidrogen | massa tereduksi, pemisahan radial–sudut, potensial efektif, asal kuantisasi, fungsi radial, bilangan kuantum, distribusi radial, orbital s/p/d, ionisasi, deret Lyman/Balmer, aturan seleksi | **sudah** (repo video-atom-hidrogen, ±19 menit) |
| 7 | Simbol Term & Aturan Seleksi | spin & Pauli, simbol term, aturan Hund, pola p & d, struktur halus, paritas & aturan seleksi | **sudah** (video-simbol-term, "Kode Rahasia Atom", ±17,5 menit) |
| P9 | Teori Ikatan Valensi (setelah UTS) | Heitler–London, pertukaran & pasangan spin, hibridisasi, σ/π, kegagalan O₂ | **sudah** (video-ikatan-valensi, "Jabat Tangan Elektron") |
| P10 | Orbital Molekul diatomik | LCAO, ikatan/antiikatan, orde ikatan, O₂ paramagnetik, pencampuran s–p, HOMO/LUMO, PES | **sudah** (video-orbital-molekul, "Elektron Tanpa Alamat", PR) |
| P11 | Orbital Molekul poliatomik & Hückel | orbital kelompok, BeH₂/CH₄/H₂O, Hückel butadiena & benzena, lingkaran Frost, 4n+2 | **sudah** (video-orbital-poliatomik, "Orbital Milik Bersama", PR) |
| P12–13 | Simetri Molekul & Grup Titik | unsur & operasi simetri, kiralitas, grup titik & diagram alir, tabel karakter, kepolaran, aktivitas IR | **sudah** (video-simetri-molekul, "Bahasa Simetri", PR) |
| P14 | Spektroskopi Molekul | empat tangga energi, Boltzmann, aturan seleksi, rotasi, vibrasi-rotasi P/R, Raman, Franck–Condon, Doppler | **sudah** (video-spektroskopi-molekul, "Satu Molekul, Tiga Tarian", PR) |

## Ide visual per modul
- **1**: lampu pijar memerah→putih (benda hitam), foton menendang elektron, garis spektrum H.
- **2**: Ψ sebagai gelombang berwarna fase, \|Ψ\|² sebagai awan titik yang "runtuh" saat diukur.
- **3**: elektron memantul di kotak → gelombang berdiri n=1,2,3; titik kuantum berpendar beda warna menurut ukuran; tunneling menembus dinding.
- **5**: molekul berputar, tangga energi J(J+1), harmonik sferis berputar, spektrum garis berjarak 2B.
- **6**: proton–elektron, potensial efektif, awan orbital 1s/2s/2p/3d 3D, elektron jatuh memancarkan foton → garis Balmer merah-hijau-biru-ungu, batas ionisasi.
- **7**: kotak orbital & panah spin, aturan Hund, diagram transisi yang diizinkan/terlarang.

## Rencana berikutnya
Usulan seri Kimia Analitik "Seni Mengukur" (12 episode) di `riset/RENCANA-SERI-BERIKUTNYA.md`; naskah episode di `riset/kimia-analitik/`.
