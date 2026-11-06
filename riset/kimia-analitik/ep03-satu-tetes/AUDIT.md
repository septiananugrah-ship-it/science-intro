# Audit angka & klaim — *Satu Tetes yang Menentukan* (Seni Mengukur Ep. 3: Kurva Titrasi & Indikator)

Dicek 3 Nov 2026. Buku: Skoog, West, Holler & Crouch, *Fundamentals of Analytical Chemistry* ed. 10 (Cengage 2022) = `materi/Analytical Chemistry.pdf`; nomor halaman ditulis "hlm. cetak (PDF hlm. N)". Artikel indikator alami dibaca dari PDF di `materi/` (pdftotext per halaman). Sumber daring diunduh langsung dari sandbox: PubChem PUG-View (asam asetat, CID 176), PDF Bandura & Lvov di srd.nist.gov, ulasan PMC tentang antosianin telang. Situs IUPAC Gold Book tetap diblokir (HTTP 403). Semua pH kurva dihitung ulang dengan `titrasi.py` (neraca muatan eksak, tanpa pendekatan).
Legenda: ✓ = cocok dengan sumber primer/buku/artikel · ✓ (hitung) = diturunkan dengan `titrasi.py` dari tetapan yang sudah dicek · ⚠ = belum diverifikasi ke sumber primer / sumber sekunder / ada catatan.

## Tetapan

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Kw pada 25 °C | 1,01 × 10⁻¹⁴ (teliti 1,008 × 10⁻¹⁴); hitungan memakai 1,00 × 10⁻¹⁴ seperti Skoog. Kartu: "≈ 1,0 × 10⁻¹⁴" | Skoog bab 7, Tabel 7-3 & teks, hlm. 170 (PDF hlm. 188) | ✓ |
| pKw 25 °C | 13,99 (Kw ≈ 1,02 × 10⁻¹⁴, 0,1 MPa) | Bandura & Lvov, *J. Phys. Chem. Ref. Data* 35, 15 (2006), Tabel 4 (PDF hlm. 11): https://srd.nist.gov/JPCRD/jpcrd696.pdf | ✓ (sedikit beda dari Skoog 1,01 × 10⁻¹⁴; keduanya ≈ 1,0 × 10⁻¹⁴) |
| pKw 100 °C → air netral pH ≈ 6,1 | pKw 12,25 → pH netral 6,12 | Bandura & Lvov Tabel 4 (PDF hlm. 11); Skoog Tabel 7-3: Kw 100 °C = 49 × 10⁻¹⁴ (pKw 12,31 → 6,15) | ✓ |
| Ka asam asetat | 1,75 × 10⁻⁵ (pKa 4,757) | Skoog Lampiran 3 "Acid Dissociation Constants at 25 °C", hlm. A-7 (PDF hlm. 1101); juga Contoh 12-3, hlm. 299 (PDF hlm. 316) | ✓ |
| pKa asam asetat (pembanding IUPAC) | 4,76 pada 25 °C | Serjeant & Dempsey, *Ionisation Constants of Organic Acids in Aqueous Solution*, IUPAC Chemical Data Series No. 23 (1979), hlm. 989 — dikutip PubChem/HSDB: https://pubchem.ncbi.nlm.nih.gov/compound/176 (bagian Dissociation Constants); ChEMBL 4,756 | ✓ (lewat PubChem; buku IUPAC aslinya tidak dibuka) |
| Kb ion asetat = Kw/Ka | 5,71 × 10⁻¹⁰ | dari Kw, Ka | ✓ (hitung) |

## Kurva titrasi (50,00 mL asam 0,1000 M + NaOH 0,1000 M)

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| HCl: pH awal | 1,00 | `titrasi.py` | ✓ (hitung) |
| HCl: 25 / 40 / 49 mL | 1,48 / 1,95 / 3,00 (narasi "satu koma lima") | `titrasi.py` | ✓ (hitung) |
| HCl: 49,90 / 49,95 / 50,00 / 50,05 / 50,10 mL | 4,00 / 4,30 / 7,00 / 9,70 / 10,00 | `titrasi.py`; pola sama dengan Skoog Tabel 12-2 (50,00 mL HCl 0,0500 M + NaOH 0,100 M: 3,87 / 7,00 / 10,12), hlm. 294 (PDF hlm. 312) | ✓ (hitung) |
| HCl: 51 / 60 / 70 mL | 11,00 / 11,96 / 12,22 | `titrasi.py` | ✓ (hitung) |
| Lonjakan satu tetes 49,95 → 50,05 mL | ΔpH = 5,40; [H₃O⁺] turun 10⁵·⁴ ≈ 2,5 × 10⁵ kali ("lebih dari dua ratus ribu kali") | `titrasi.py` | ✓ (hitung) |
| Kemiringan maksimum | ≈ 1000 pH/mL di 50,000 mL | `titrasi.py` (beda hingga ±0,001 mL) | ✓ (hitung) |
| Sisa asam 49 mL → 49,9 mL | 0,1 → 0,01 mmol; pH 49,99 mL = 5,00 | hitung (5,000 − 4,900 mmol) | ✓ (hitung) |
| 49 mL = 98 % asam ternetralkan | 4,90/5,00 | hitung | ✓ (hitung) |
| HOAc: 0 / 10 / 25 / 40 mL | 2,88 / 4,16 / 4,76 / 5,36 | `titrasi.py`; Skoog Contoh 12-3 & Tabel 12-3, hlm. 299 (PDF hlm. 316): 2,88 / 4,15 / 4,76 / 5,36 | ✓ (beda 0,01 di 10 mL karena Skoog memakai pendekatan penyangga) |
| HOAc: 49,90 / 50,00 / 50,10 mL | 7,45 / 8,73 / 10,00 | `titrasi.py`; Skoog Tabel 12-3: 7,46 / 8,73 / 10,00 | ✓ |
| pH ekivalen HOAc pendekatan √(Kb·C) | 8,728 (C_A⁻ = 0,0500 M) | `titrasi.py`; Skoog Contoh 12-3 | ✓ |
| Setengah ekivalen pH = pKa | 4,757 (eksak) | `titrasi.py`; Skoog hlm. 299 "half-titration point" | ✓ |
| Daerah datar 10 → 40 mL | 4,16 → 5,36 (naik ≈ 1,2; narasi "sekitar satu satuan") | `titrasi.py` | ✓ (hitung) |
| Pengenceran kuat–kuat 49,90 → 50,10 mL | 0,1 M: 4,00 → 10,00; 0,01 M: 5,00 → 9,00; 0,001 M: 6,00 → 8,00 | `titrasi.py`; Skoog Tabel 12-2 kolom 0,000500 M (3,87 → 5,87… pola menyempit) | ✓ (hitung) |
| Titik ekivalen tidak selalu pH 7 | asam lemah + basa kuat → basa | Skoog bab 12C, hlm. 298–300 | ✓ |

## Istilah

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Titik ekivalen = teori, titran setara secara kimia dengan analit | definisi | Skoog bab 11, hlm. 268 (PDF hlm. 286); Glosarium "Equivalence point" (PDF hlm. 1081) | ✓ |
| Titik akhir = perubahan fisik teramati; galat titrasi E_t = V_ep − V_eq | definisi | Skoog bab 11, hlm. 268 (PDF hlm. 286) | ✓ |
| Definisi IUPAC (Gold Book) | — | https://goldbook.iupac.org (HTTP 403 dari sandbox) | ⚠ tidak dibuka; narasi berpegang pada Skoog |
| Setengah tetes titran seharusnya sudah mengubah warna indikator di titik akhir | — | Skoog Gbr. 11-1 keterangan "The titration process", hlm. 269 (PDF hlm. 287) | ✓ |
| Volume satu tetes buret ≈ 0,05 mL ("lima puluh mikroliter") | 0,03–0,05 mL umum | Skoog hanya menyuruh mengukur rerata setengah tetes hlm. 999 (PDF hlm. 1017); angka 0,05 mL = kebiasaan lab | ⚠ sebut "kira-kira" (sudah) |

## Indikator sintetis

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Indikator = asam/basa lemah, HIn + H₂O ⇌ H₃O⁺ + In⁻ | — | Skoog bab 12A, hlm. 289–292; catatan kaki Tabel 12-1 | ✓ |
| Rentang ≈ pKa ± 1 (warna penuh bila rasio ≈ 10 : 1) | — | Skoog hlm. 291–292 (PDF hlm. 309–310) & "Important Equations" (PDF hlm. 328) | ✓ |
| Metil jingga | 3,1–4,4, merah → kuning (R–Y), pKa 3,46 | Skoog Tabel 12-1, hlm. 292 (PDF hlm. 310) | ✓ |
| Metil merah (di `titrasi.py`) | 4,2–6,3, merah → kuning, pKa 5,00 | idem | ✓ |
| Bromtimol biru | 6,2–7,6, kuning → biru (Y–B), pKa 7,10 | idem | ✓ |
| Fenolftalein | 8,3–10,0, tak berwarna → merah (C–R). Narasi menyebut "merah muda" (warna yang tampak pada titik akhir, kadar rendah) | idem | ✓ (catatan: tabel menulis "red") |
| Rentang bergeser karena suhu, kekuatan ion, pelarut organik, koloid — bisa ≥ 1 satuan pH | — | Skoog hlm. 292 (PDF hlm. 310) | ✓ |
| Ketidakpastian visual ±0,5 sampai ±1 pH; bisa ±0,1 dengan larutan pembanding | — | Skoog hlm. 292 (PDF hlm. 310) "Titration Errors with Acid-Base Indicators" | ✓ |
| Metil jingga pada titrasi cuka: berubah 0,68–15,24 mL (V_ek 50,00) → galat ≈ 35 mL ≈ 70 % | — | `titrasi.py` (pH 3,1 dan 4,4 pada kurva HOAc) | ✓ (hitung) |
| Fenolftalein pada cuka mulai berubah 49,988 mL; HCl 50,002 mL; metil jingga HCl kuning penuh 49,960 mL | — | `titrasi.py` | ✓ (hitung) |
| Warna indikator di animasi = fraksi In⁻ 1/(1+10^(pKa−pH)), pKa = tengah rentang | pendekatan visual | — | ⚠ penyederhanaan (pKa Skoog sedikit beda dari tengah rentang: metil jingga 3,46 vs 3,75) — boleh pakai pKa Skoog bila ada |

## Indikator alami

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Telang: antosianin utama = ternatin (turunan poliasil delfinidin 3,3′,5′-triglukosida) | — | Vidana Gamage, Lim & Choo, *Front. Plant Sci.* 12:792303 (2021): https://pmc.ncbi.nlm.nih.gov/articles/PMC8718764/ | ✓ |
| Telang (ulasan): merah pH < 3,2; ungu → biru 3,2–5,2; biru muda 5,2–8,2; biru muda → hijau tua 8,2–10,2 | — | idem (bagian stabilitas pH) | ✓ (rentang berbeda antarsumber) |
| Telang pada titrasi kuat–kuat: ungu kemerahan pH 1–2, biru muda pH 7, hijau muda pH 8–12; asam merah muda → basa biru | — | Hanifa, Ardiansyah, Afrianis & Okmarisa, *Hydrogen: J. Kependidikan Kimia* 12(1), 68–74 (2024), abstrak hlm. 68 & pembahasan hlm. 73 (PDF hlm. 1, 6); doi:10.33394/hjkk.v12i1.10813 | ✓ |
| Telang di plat tetes: merah muda-ungu pH 1–4, biru 5–10, hijau 11–14 | — | Agustina dkk., *Bivalen* 5(2), 51–56 (2022), Tabel 1 hlm. 52 (PDF hlm. 2), mengutip Ariwidiani dkk. 2015 | ✓ (sekunder dalam artikel ulasan) |
| Mekanisme warna antosianin: flavilium merah (pH 1–2) → karbinol tak berwarna (3–6, merah memudar) → basa kuinoidal ungu (7) → ion kuinoidal biru / diion hijau (8–11) → kalkon kuning (12–14) | — | Leba dkk. (2023), *J. Indonesian Soc. Integrated Chem.* 15(2), hlm. 103 (PDF hlm. 5) | ✓ (dijelaskan untuk ubi ungu; diterapkan ke telang sebagai sifat umum antosianin) |
| Ubi jalar ungu: merah pH 1, merah muda 2–6, ungu 7, biru 8–9, hijau 10–11, kuning 12–14 | — | Leba dkk. (2023), abstrak (PDF hlm. 1) & hlm. 102 (PDF hlm. 4) | ✓ |
| Ubi ungu (ulasan lain): merah muda pH 1–9, hijau 10–12 | — | Agustina dkk. (2022) Tabel 1 (PDF hlm. 2), mengutip Afandy dkk. 2017 | ✓ (bertentangan dengan Leba → narasi memakai Leba dan menyebut "bergantung ekstraksi") |
| Kunyit: kurkumin kuning pH 1–7, merah bata pudar pH 8, merah bata pH 9, makin pekat; kurkumin H₃A kehilangan proton di atas pH ≈ 7,5 | — | Leba dkk. (2023), hlm. 103 (PDF hlm. 5) | ✓ |
| Titik akhir HCl–NaOH: PP pH 8,3–8,6; ubi ungu (merah muda → biru pucat) pH 7,9–8,3; kunyit (kuning → merah bata) pH 8,1–8,4 | — | Leba dkk. (2023), hlm. 104 (PDF hlm. 6) | ✓ (tidak dipakai di narasi; untuk visual) |
| Kadar CH₃COOH: 0,0876 M (PP), 0,0869 M (ubi ungu), 0,0853 M (kunyit) | — | Leba dkk. (2023), abstrak (PDF hlm. 1) | ✓ |
| Kunyit pada titrasi HCl–NaOH & HCl–NH₄OH: setara metil merah & PP (HCl 149,98 / 149,91 / 149,91 mg) | — | Leba, *J. Penelitian Sains* 26(3), 338–342 (2024), abstrak (PDF hlm. 1) | ✓ (tidak dikutip angka di narasi) |
| Warna indikator alami bergantung ekstraksi/pelarut | — | Leba dkk. (2023) hlm. 104 (ekstraksi tanpa asam → merah muda ke hijau, Jenimat dkk. 2023) | ✓ |
| Header jurnal Leba dkk. (2023) tidak konsisten (hlm. 1 "Vol. 15 No. 2, Dec 2023, hlm. 76"; halaman dalam "Vol. 15 No. 1, June 2023, hlm. 102–105") | — | PDF | ⚠ periksa sitasi sebelum ditaruh di layar/deskripsi |

## Penunjang (adegan `mata`, `nyata`)

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Standardisasi NaOH oleh mahasiswa, 6 titrasi: RSD 3,36 %, rerata 0,1041 M (rentang 0,0996–0,1081) | — | Darwish dkk., *World J. Adv. Res. Rev.* 30(01), 2155–2161 (2026), abstrak (PDF hlm. 1), doi:10.30574/wjarr.2026.30.1.1089 | ✓ |
| Variabilitas dikaitkan dengan penilaian visual titik akhir | — | idem, abstrak ("visually judged endpoints can produce measurable trial-to-trial variability") | ✓ (narasi tidak mengklaim seluruhnya dari mata) |
| Titrasi potensiometrik asam-basa dengan elektrode baja tahan karat tanpa perlakuan oksidatif | — | Vilasó-Cadre dkk., *Turk. J. Chem.* 47(4), art. 12 (2023), doi:10.55730/1300-0527.3580 (PDF hlm. 1) | ✓ (judul/abstrak saja) |
| Turunan pertama memuncak di titik ekivalen | — | Skoog (bab titrasi potensiometrik, Ep. 9) | ⚠ belum dicari halamannya |
| Cuka pasar: label 5,4 %, hasil 5,9 %; NaOH distandardisasi asam oksalat | — | Kuna, *Dalton* 6(2) (2023), abstrak (PDF hlm. 1), doi:10.31602/dl.v6i2.10640 | ✓ |
| Keasaman (35 mg/L) & kebasaan (980 mg/L) saluran drainase Palangka Raya dengan titrasi | — | Hakim dkk., *IJCR* 8(1), 57–66 (2023), abstrak hlm. 57 | ✓ (angka tidak disebut di narasi) |
| Bilangan asam minyak: KOH + fenolftalein | — | metode umum (SNI 01-3741 / AOCS Cd 3d-63) | ⚠ tidak dicek ke teks standar |
| Antasida ditetapkan dengan titrasi balik | — | metode umum (Skoog hanya mendefinisikan back-titration, hlm. 268) | ⚠ tidak dicek ke farmakope |

## Berkas `materi/` yang tidak relevan untuk episode ini

Afrianti dkk. (2025), Nurrahmah dkk. (2023), Salwa dkk. (2026) membahas **laju reaksi** (kesulitan belajar, LKPD green chemistry, sistem akuisisi data HCl–tiosulfat) → bahan seri Kinetika, tidak dipakai di sini.
