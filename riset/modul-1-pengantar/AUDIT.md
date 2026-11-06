# Audit angka & klaim — *Lampu Merah di Kamar Gelap* (Kimia Kuantum Modul 1: Pengantar)

Dicek 3 Nov 2026 (verifikasi lanjutan klaim ⚠ di bagian akhir). Konstanta dari tabel CODATA 2022 NIST (`physics.nist.gov/cuu/Constants/Table/allascii.txt`, diunduh langsung). Tahun & nama Nobel dari halaman ringkasan nobelprize.org (diunduh langsung, kutipan motivasi resmi). Makalah asli dicek lewat metadata Crossref (judul, jurnal, volume, halaman, tanggal terbit). Hitungan turunan dibuat ulang dengan Python dari konstanta CODATA.
Legenda: ✓ = cocok dengan sumber primer/resmi · ✓ (hitung) = diturunkan dari konstanta yang sudah dicek · ⚠ = sumber sekunder / ada catatan.

## Konstanta (CODATA 2022)

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Tetapan Planck h | 6,626 070 15 × 10⁻³⁴ J·s (eksak); narasi "6,62 × 10⁻³⁴" | https://physics.nist.gov/cuu/Constants/Table/allascii.txt | ✓ |
| ħ = h/2π | 1,054 571 817… × 10⁻³⁴ J·s (eksak) | idem | ✓ |
| Laju cahaya c | 299 792 458 m/s (eksak) | idem | ✓ |
| Muatan elementer e | 1,602 176 634 × 10⁻¹⁹ C (eksak) | idem | ✓ |
| Massa elektron mₑ | 9,109 383 7139 × 10⁻³¹ kg | idem | ✓ |
| Tetapan Boltzmann k | 1,380 649 × 10⁻²³ J/K (eksak) | idem | ✓ |
| Tetapan pergeseran Wien b | 2,897 771 955… × 10⁻³ m·K (kartu: 2,898 × 10⁻³) | idem | ✓ |
| Tetapan Stefan–Boltzmann σ | 5,670 374 419… × 10⁻⁸ W m⁻² K⁻⁴ | idem | ✓ |
| Panjang gelombang Compton h/(mₑc) | 2,426 310 235 38 × 10⁻¹² m ≈ 2,43 pm | idem | ✓ |
| hc | 1239,84 eV·nm (kartu: ≈ 1240) | dari h, c, e | ✓ (hitung) |

## Benda hitam & Planck

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Lord Kelvin "dua awan" abad ke-19 | Friday Evening Lecture, Royal Institution, 27 Apr 1900; terbit diperluas "Nineteenth century clouds over the dynamical theory of heat and light", Phil. Mag. (6) 2, 1–40 (Jul 1901). Awan 1 = gerak relatif eter; awan 2 = teorema ekuipartisi Maxwell–Boltzmann (panas jenis molekul poliatomik) — **Kelvin sama sekali tidak menyebut radiasi benda hitam** | https://doi.org/10.1080/14786440109462664 (Crossref) · O. Passon, "Kelvin's clouds", Am. J. Phys. 89, 1037 (2021), arXiv:2106.16033 https://arxiv.org/abs/2106.16033 (tanggal kuliah & isi kedua awan) | ✓ tanggal (Passon, membaca teks asli). **Narasi diubah**: "menyangkut panas dan cahaya yang dipancarkan benda" → "cara energi panas dibagi rata di antara gerak molekul… kelak juga gagal menjelaskan cahaya dari benda panas". |
| Titik Draper: padatan mulai berpijar merah redup | ≈ 977 °F = 525 °C (798 K), Draper 1847 | J. W. Draper, "On the production of light by heat", Phil. Mag. (3) 30, 345–360 (Mei 1847) https://doi.org/10.1080/14786444708647190 (Crossref); ringkasan Draper sendiri: Nature 10, 243 (1874) "…from common temperatures nearly up to 977 °F the rays emitted by a solid are invisible. At that temperature they are red" | ✓ (angka dari Draper sendiri; teks 1847 tidak dibuka). Catatan: ambang tampak bergantung adaptasi gelap mata — "sekitar" sudah ada di narasi. |
| Hukum Wien λmaks T = b | modul pers. (5) | Modul 1 hlm. 4; CODATA | ✓ |
| Matahari T_eff ≈ 5772 K → λmaks ≈ 502 nm | 2,8978 × 10⁻³ / 5772 = 5,02 × 10⁻⁷ m | IAU 2015 Resolution B3 (nominal T_eff = 5772 K): https://www.iau.org/common/Uploaded%20files/IAUGA2015-Resolution-B3-recommended-nominal-conversion.pdf · arXiv:1510.07674 | ✓ (narasi "sekitar 5700 K", "sekitar 500 nm") |
| Tubuh ≈ 310 K → λmaks ≈ 9,3 µm | 2,8978 × 10⁻³ / 310 = 9,35 µm | hitung | ✓ (hitung) |
| Suhu 2× → daya 16× | M = σT⁴ | Modul 1 hlm. 4 | ✓ |
| Rayleigh–Jeans → katastrofe ultraviolet | jatah kT per mode, jumlah mode ∝ ν² | Modul 1 hlm. 5–6 | ✓. Catatan: istilah "katastrofe ultraviolet" baru dipakai Ehrenfest (1911) — narasi menulis "kelak dijuluki". Rumus Rayleigh–Jeans lengkap (1900/1905) muncul sezaman/sesudah Planck; urutan dramatis di video disederhanakan (⚠ historis). |
| "Semua oven akan memancarkan sinar-X" | konsekuensi retoris RJ (energi menumpuk di frekuensi tinggi) | — | ⚠ retoris, boleh diganti "memancarkan ultraviolet tanpa batas" |
| Planck 14 Des 1900, Deutsche Physikalische Gesellschaft Berlin | "Zur Theorie des Gesetzes der Energieverteilung im Normalspectrum", Verh. Dtsch. Phys. Ges. 2, 237–245 (1900); versi Annalen: Ann. Phys. 309 (4), 553–563 (1901) | https://doi.org/10.1002/andp.19013090310 (Crossref); kepala makalah Annalen: "(Vorgetragen in der Deutsch. Physikal. Gesellsch. Sitzung vom 19. October und vom 14. December 1900, Verhandlungen 2. p. 202 und p. 237. 1900.)" — salinan https://grundpraktikum.physik.uni-saarland.de/gpalt/Anleitungen/Ergaenzungen/J1_Papers/Temperaturstrahlung%20-%20Planck_2.pdf | ✓ (sumber primer: catatan Planck sendiri di makalah 1901) |
| E = nhν | modul pers. (6) | Modul 1 hlm. 6 | ✓ |
| Nobel Fisika 1918 — Planck ("discovery of energy quanta"; diumumkan 1919) | — | https://www.nobelprize.org/prizes/physics/1918/summary/ | ✓ ("delapan belas tahun kemudian" = 1900 → 1918) |

## Efek fotolistrik & foton

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Einstein 1905, kuanta cahaya | "Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt", Ann. Phys. 322 (6), 132–148 (1905) | https://doi.org/10.1002/andp.19053220607 (Crossref) | ✓ |
| K_maks = hν − Φ; intensitas → jumlah elektron, frekuensi → K_maks | modul pers. (10) | Modul 1 hlm. 8–10 | ✓ (model satu foton; serapan multi-foton laser intens tidak dibahas) |
| Fungsi kerja cesium ≈ 2 eV → ambang ≈ 580–640 nm (kuning–jingga) | Michaelson 1977 (J. Appl. Phys. 48, 4729, https://doi.org/10.1063/1.323539): Cs 2,14 eV → 579 nm; CRC Handbook 97th ed. (2017), polikristal: Cs 1,95 eV → 636 nm; HyperPhysics (CRC lama): 2,1 eV | Nilai CRC 2017 & Michaelson dikutip di tabel Tran dkk., "Anisotropic work function of elemental crystals", Surf. Sci. 687, 48 (2019), arXiv:1902.07811 https://arxiv.org/abs/1902.07811 (kolom Φ_expt poly: Cs 1,95 [CRC], Na 2,75 [Michaelson], K 2,29 [CRC]); Cs 2,14 eV ↔ Michaelson lewat kutipan sekunder (tabel JAP berbayar); https://hyperphysics.gsu.edu/hbase/Tables/photoelec.html | ✓ rentang 1,95–2,14 eV (bergantung permukaan). **Narasi diubah**: "dua koma satu eV … lima ratus delapan puluh nanometer: kuning" → "sekitar dua elektronvolt … sekitar enam ratus nanometer, di antara kuning dan jingga". Merah 650 nm (1,91 eV) tetap di bawah ambang untuk kedua nilai. |
| (Pembanding) Na: CRC 2,36 eV (HyperPhysics: 2,28; 2,36), Michaelson 1977: 2,75 eV; K 2,29 eV (CRC) | — | HyperPhysics (CRC); Tran dkk. 2019 (arXiv:1902.07811) | ✓ nilai rujukan Na 2,3–2,75 eV. **Nilai modul Na = 1,82 eV (contoh 4) tidak didukung rujukan mana pun** — jangan dipakai di narasi; bila contoh modul dibahas, beri catatan "angka latihan". |
| Kemiringan K_maks–ν = h; Millikan 1916 | "A Direct Photoelectric Determination of Planck's h", Phys. Rev. 7, 355–388 (Mar 1916) | https://doi.org/10.1103/PhysRev.7.355 (Crossref); Millikan, "Albert Einstein on his seventieth birthday", Rev. Mod. Phys. 21, 343 (1949) https://doi.org/10.1103/RevModPhys.21.343 — "…contrary to all my expectations I was compelled in 1915 to assert its unambiguous experimental verification in spite of its unreasonableness" (dikutip lengkap di arXiv:2309.13468 https://arxiv.org/abs/2309.13468); makalah 1916 menyebut teori semi-korpuskular Einstein "wholly untenable" | ✓ makalah. "Ingin membantah Einstein" = berlebihan: sumber primer hanya menunjukkan Millikan **tidak percaya / berharap lain** (dan sejarawan A. Franklin mencatat tafsirannya berubah seiring waktu). **Narasi diubah** → "Millikan sendiri tidak percaya pada gagasan foton Einstein". |
| Nobel Fisika 1921 — Einstein, "especially for his discovery of the law of the photoelectric effect" (diserahkan 1922) | — | https://www.nobelprize.org/prizes/physics/1921/summary/ | ✓ |
| Nobel Fisika 1923 — Millikan (muatan elementer & efek fotolistrik) | — | https://www.nobelprize.org/prizes/physics/1923/summary/ | ✓ (tidak disebut di narasi; cadangan) |
| Foton 650 nm ≈ 1,91 eV; 450 nm ≈ 2,76 eV; 300 nm ≈ 4,13 eV | E = 1239,84/λ | hitung | ✓ (hitung) |

## Kamar gelap (benang merah)

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Kertas foto hitam-putih: kristal perak halida (AgBr) | — | datasheet Ilford Multigrade (EMS Diasum) | ✓ umum |
| Celah tak langsung AgBr: 2,684–2,691 eV (4,2 K), 2,68 eV (77 K), **2,52–2,68 eV (300 K)**; celah langsung 4,29 eV; narasi: "sekitar dua setengah eV" | — | Kompilasi Strehlow & Cook, "Compilation of Energy Band Gaps in Elemental and Binary Compound Semiconductors and Insulators", J. Phys. Chem. Ref. Data 2, 163 (1973), lewat basis data celah pita RUB https://demo.mdi.ruhr-uni-bochum.de/object/agbr-4374 ; UCL (A. H. Harker) https://www.ucl.ac.uk/~ucapahh/research/crystal/agbr.htm ; disertasi Illinois (2,691 eV pada 4,2 K) https://www.ideals.illinois.edu/items/25205 | ✓ "sekitar dua setengah eV" untuk suhu kamar (2,5–2,7). Merah (1,9 eV) di bawah, biru 450 nm (2,76 eV) di atas. Kertas sungguhan umumnya klorobromida + pemeka, tetapi kesimpulan kualitatif tetap. |
| Lampu aman (safelight): Ilford Multigrade IV RC → Ilford SL1 atau filter **902 coklat muda**, lampu 15 W, paparan langsung **≤ 4 menit**, jarak ≥ 1,2 m; alternatif Kodak OC. Kodak: OC (light amber) = kertas kontak & pembesaran; 1A (light red) = bahan ortokromatik lambat | — | Ilford Multigrade IV RC technical information https://www.freestylephoto.com/pdf/product_pdfs/ilford/Ilford_MGIVRC.pdf ; Kodak Safelight Recommendations https://www.kodak.com/content/products-brochures/Film/Safelight-Recommendations.pdf | ✓. Lampu merah = citra klasik & tetap aman secara fisika (foton jauh di bawah celah), tetapi pabrik kini menganjurkan amber. **Narasi diubah**: "berjam-jam" → "beberapa menit" (adegan `hook` + kalimat misteri). Judul "Lampu Merah" dipertahankan. |
| Mekanisme bayangan laten: elektron tereksitasi → Ag⁺ + e⁻ → Ag; gugus beberapa atom Ag; pengembang memperkuat | R. W. Gurney & N. F. Mott, "The theory of the photolysis of silver bromide and the photographic latent image", Proc. R. Soc. Lond. A 164, 151–167 (1938) | https://doi.org/10.1098/rspa.1938.0011 (Crossref) | ✓ rujukan primer (metadata; isi = deskripsi standar). Narasi "beberapa atom perak berkumpul" sesuai (bayangan laten butuh gugus ≥ beberapa atom, jadi beberapa foton per butir). |
| Pewarna pemeka membuat film peka hijau/merah (pankromatik → gelap total) | — | — | tidak dipakai di narasi |

## Foton dalam kimia

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Foton 300 nm ≈ 399 kJ/mol; foton 650 nm ≈ 184 kJ/mol | N_A·hc/λ | hitung (N_A = 6,022 140 76 × 10²³, CODATA) | ✓ (hitung) |
| Energi ikatan rata-rata C–C ≈ 345–348 kJ/mol (≈ 3,6 eV) | OpenStax Chemistry 2e Tabel 7.2: C–C 345 kJ/mol; tabel lain 346–348 | https://openstax.org/books/chemistry-2e/pages/7-5-strengths-of-ionic-and-covalent-bonds | ✓ narasi "sekitar tiga ratus lima puluh" aman; kartu adegan boleh "≈ 350" atau "345–348". Nilai rata-rata, bukan energi disosiasi spesifik. |
| Klorofil menyerap merah & biru, memantulkan hijau; pusat reaksi P680 (PS II) / P700 (PS I) | puncak serapan klorofil a ≈ 430 & 662 nm | OpenStax Biology 2e bab 8 (istilah kunci P680/P700) https://openstax.org/books/biology/pages/8-key-terms | ✓ buku teks terbuka |
| Warna uji nyala: Na kuning, Cu hijau-kebiruan, Sr merah | — | buku teks kimia analitik | ✓ umum; garis D Na 589,0/589,6 nm sudah dicek di video simbol-term |
| Celah pita Si ≈ 1,12 eV (300 K) → λ ≈ 1107 nm | 1,1242 eV (PVEducation, "General properties of silicon") | https://www.pveducation.org/pvcdrom/materials/general-properties-of-silicon ; Ioffe https://www.ioffe.ru/SVA/NSM/Semicond/Si/bandstr.html (host tidak terjangkau dari sandbox) | ✓ |
| LED merah ≈ 1,9 eV (≈ 650 nm), biru ≈ 2,7 eV (≈ 460 nm); warna ≈ celah pita | E = hc/λ | hitung | ✓ (hitung; LED nyata memancar sedikit di atas/sekitar celah) |
| Nobel Fisika 2014 — Akasaki, Amano, Nakamura, "efficient blue light-emitting diodes" | — | https://www.nobelprize.org/prizes/physics/2014/summary/ | ✓ |

## Compton

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Compton 1923, "A Quantum Theory of the Scattering of X-rays by Light Elements" | Phys. Rev. 21, 483–502 (Mei 1923) | https://doi.org/10.1103/PhysRev.21.483 (Crossref) | ✓ |
| Sinar-X Mo Kα ≈ 0,0709 nm dihamburkan grafit pada 90° | — | HyperPhysics "Compton Scattering Data" https://hyperphysics.gsu.edu/hbase/quantum/compdat.html (merujuk Phys. Rev. 21, 483 & 22, 409) | ⚠ sekunder |
| Δλ = (h/mₑc)(1 − cos θ); pada 90° Δλ = 2,43 pm; maks (180°) 4,85 pm | — | CODATA | ✓ (hitung) |
| Momentum foton p = h/λ | modul hlm. 16 | Modul 1 | ✓ |
| Nobel Fisika 1927 — Compton (dibagi dengan C. T. R. Wilson) | — | https://www.nobelprize.org/prizes/physics/1927/summary/ | ✓ |

## de Broglie & Davisson–Germer

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| de Broglie, disertasi 1924; λ = h/p | — | Modul 1 pers. (20); Leopoldina CV https://www.leopoldina.org/fileadmin/redaktion/Mitglieder/CV_Broglie_Louis_de_EN.pdf | ✓ |
| Langevin mengirim disertasi ke Einstein; Einstein terkesan (surat ke Langevin 16 Des 1924: "The paper by De Broglie greatly impressed me. He has lifted one corner of the great veil") | — | Pengantar Collected Papers of Albert Einstein vol. 15 (Einstein Papers Project), merujuk Vol. 14 Doc. 398, arXiv:1803.10662 https://arxiv.org/abs/1803.10662 | ✓ (editor CPAE, mengutip surat asli). Narasi "Einstein menyukainya" aman. |
| Nobel Fisika 1929 — de Broglie, "discovery of the wave nature of electrons" | — | https://www.nobelprize.org/prizes/physics/1929/summary/ | ✓ |
| Bola bisbol 145 g, 40 m/s → λ ≈ 1,1 × 10⁻³⁴ m | h/(0,145·40) | hitung | ✓ (hitung) |
| Elektron 54 eV → λ = h/√(2mₑE) = 0,167 nm | 0,1669 nm | hitung | ✓ (hitung) |
| Davisson & Germer: puncak hamburan 54 V pada kolatitud (sudut hambur) 50°; jarak baris atom Ni (111) d = 0,215 nm; d sin φ = 0,165 nm vs prediksi 0,167 nm | Phys. Rev. 30, 705 (1927) hlm. 715–718: "a strong spur which reaches a maximum development at 54 volts in colatitude 50°", Gb. 9–11 ("54 volt beam", θ = 50°, V = 54 Volts); muka (111) kristal Ni. d = a√6/4 = 0,3524 × 0,612 = 0,2158 nm; 0,2158 × sin 50° = 0,1653 nm | Teks makalah PR (salinan pindaian, repositori BSU): https://elib.bsu.by/handle/123456789/154380 · https://doi.org/10.1103/PhysRev.30.705 · Kuliah Nobel Davisson 1937 https://www.nobelprize.org/uploads/2018/06/davisson-lecture.pdf (Gb. 3 "54-volt primary beam"; muka (111) nikel) | ✓ 54 V & 50° (primer). ✓ (hitung) d dan 0,165 nm. Catatan: perbandingan "0,165 vs 0,167 nm" lewat d sin φ adalah rekonstruksi buku teks (makalah PR memakai analisis Laue + "faktor jarak"); Nature 119, 558 tidak terjangkau (host nature.com diblokir sandbox). |
| Kecelakaan April 1925: botol udara cair meledak saat target panas, tabung pecah, target teroksidasi berat, oksida direduksi dengan pemanasan lama di H₂ & vakum → rekristalisasi menjadi ± sepuluh kristal besar | Phys. Rev. 30, 705 (1927) hlm. 705–706: "begun as the result of an accident which occurred in this laboratory in April 1925 … a liquid-air bottle exploded at a time when the target was at a high temperature; the experimental tube was broken, and the target heavily oxidized … prolonged heating at various high temperatures in hydrogen and in vacuum … The actual number was of the order of ten." Laboratorium = Bell Telephone Laboratories, New York (biografi Nobel Davisson) | elib.bsu.by (salinan PR, lihat atas); https://www.nobelprize.org/prizes/physics/1937/davisson/biographical/ | ✓ primer. Kronologi: puncak 54 V/50° baru ditemukan awal 1927 dengan target satu kristal yang disiapkan khusus (kuliah Nobel: pencarian berkas difraksi mulai musim gugur 1926, ditemukan awal 1927). **Narasi diubah** agar tidak menyiratkan puncak 54 V muncul langsung setelah kecelakaan. |
| G. P. Thomson: difraksi elektron menembus lapisan tipis (Aberdeen, Skotlandia, 1927) | — | https://www.nobelprize.org/prizes/physics/1937/summary/ ; biografi Nobel https://www.nobelprize.org/prizes/physics/1937/thomson/biographical/ ("At Aberdeen he carried out experiments on … electrons going through very thin films of metals") | ✓ |
| Nobel Fisika 1937 — Davisson & G. P. Thomson, "experimental discovery of the diffraction of electrons by crystals" | — | idem | ✓ |
| J. J. Thomson (ayah) Nobel Fisika 1906 (konduksi listrik dalam gas; dikenal sebagai penemu elektron) | — | https://www.nobelprize.org/prizes/physics/1906/summary/ | ✓ |

## Mikroskop elektron

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Elektron 100 kV → λ ≈ 3,70 pm (relativistik); cahaya hijau 550 nm → rasio ≈ 1,5 × 10⁵ | p = √(2mE(1 + E/2mc²)) | hitung | ✓ (hitung). Narasi "lebih dari seratus ribu kali". |
| Ruska & Knoll: mikroskop elektron pertama 1931; 1933 melampaui resolusi mikroskop cahaya | — | Biografi Nobel Ruska https://www.nobelprize.org/prizes/physics/1986/ruska/biographical/ | ✓ (narasi "awal 1930-an") |
| Nobel Fisika 1986 — Ruska (setengah; setengah lagi Binnig & Rohrer, STM) | — | https://www.nobelprize.org/prizes/physics/1986/summary/ | ✓ |
| Nobel Kimia 2017 — Dubochet, Frank, Henderson, krio-mikroskopi elektron biomolekul | — | https://www.nobelprize.org/prizes/chemistry/2017/summary/ | ✓ |

## Heisenberg

| Klaim / angka | Nilai | Sumber | Dicek |
|---|---|---|---|
| Heisenberg 1927, "Über den anschaulichen Inhalt der quantentheoretischen Kinematik und Mechanik" | Z. Phys. 43, 172–198 (Mar 1927) | https://doi.org/10.1007/BF01397280 (Crossref) | ✓ |
| Δx Δp ≥ ħ/2 (Δ = simpangan baku; bukan keterbatasan alat) | modul pers. (25) | Modul 1 hlm. 19–20 | ✓ |
| Elektron dalam Δx = 0,1 nm → Δp ≥ 5,27 × 10⁻²⁵ kg m/s, Δv ≥ 5,8 × 10⁵ m/s | ħ/(2Δx), /mₑ | hitung | ✓ (hitung; narasi "sekitar enam ratus ribu m/s") |
| Energi kurungan berorde beberapa eV | (ħ/Δx)²/2mₑ ≈ 3,8 eV untuk 0,1 nm | hitung | ✓ (perkiraan orde besaran; heuristik) |
| Nobel Fisika 1932 — Heisenberg, "creation of quantum mechanics… led to the discovery of the allotropic forms of hydrogen" (diserahkan 1933) | — | https://www.nobelprize.org/prizes/physics/1932/summary/ | ✓ (H₂ orto/para) |

## Lain-lain

| Klaim | Catatan |
|---|---|
| "Dari 1900 sampai 1927 = 27 tahun" | ✓ (Planck → Heisenberg/Davisson–Germer) |
| ψ, |ψ|² = kerapatan peluang | Modul 1 hlm. 18 ✓ |
| Spektrum garis & Bohr | sengaja tidak dihitung di video ini (video Fisika Atom & Atom Hidrogen) |

## Verifikasi lanjutan (3 Nov 2026)

Sepuluh klaim bertanda ⚠ dicek ulang ke sumber primer/berwenang (teks makalah, kuliah Nobel, lembar data pabrik, kompilasi data). Host yang diblokir dari sandbox: `www.nature.com`, `pmc.ncbi.nlm.nih.gov` (reCAPTCHA), `journals.aps.org` (403), `www.ioffe.ru`, `ilfordphoto.com` (403) — dicari salinan lain.

Masih tersisa (risiko rendah):
1. Fungsi kerja Cs: nilai literatur 1,95 (CRC 2017) – 2,14 eV (Michaelson 1977, lewat kutipan); narasi sudah dibuat aman ("sekitar dua eV", ambang "sekitar 600 nm").
2. Perbandingan "0,165 vs 0,167 nm" = rekonstruksi buku teks (d sin φ) dari angka primer 54 V / 50° / Ni(111); teks surat Nature 119, 558 belum dibaca langsung.
3. "Banyak fisikawan merasa ilmunya hampir selesai" (adegan `awan`) — ungkapan populer; tidak dicek, boleh dibiarkan sebagai suasana.

## Perubahan setelah verifikasi

| Adegan | Sebelum | Sesudah | Alasan |
|---|---|---|---|
| Misteri + `hook` | kertas aman di bawah lampu merah "berjam-jam" | "beberapa menit" | Ilford: paparan safelight langsung ≤ 4 menit pada ≥ 1,2 m |
| `awan` | "Salah satunya menyangkut panas dan cahaya yang dipancarkan benda." | "Salah satunya menyangkut cara energi panas dibagi rata di antara gerak molekul. Aturan pembagian yang sama kelak juga gagal menjelaskan cahaya dari benda panas." | Awan ke-2 Kelvin = ekuipartisi (panas jenis), tidak menyebut benda hitam (Passon 2021) |
| `awan` (visual) | label awan "radiasi termal" | "ekuipartisi energi" | idem |
| `foto`/`einstein` | "fungsi kerjanya sekitar dua koma satu elektronvolt. Ambangnya sekitar lima ratus delapan puluh nanometer: kuning." | "fungsi kerjanya hanya sekitar dua elektronvolt. Ambangnya sekitar enam ratus nanometer, di antara kuning dan jingga." | Cs 1,95 (CRC 2017) – 2,14 eV (Michaelson) → 636–579 nm |
| `einstein` (visual) | "(cesium 2,14 eV → 579 nm)" | "(cesium ≈ 2 eV → ambang ≈ 600 nm; nilai literatur 1,95–2,14 eV)" | idem |
| `einstein` | "Robert Millikan sebenarnya ingin membantah Einstein." | "Robert Millikan sendiri tidak percaya pada gagasan foton Einstein." | Primer (Phys. Rev. 1916; Rev. Mod. Phys. 1949) hanya mendukung "tidak percaya / berlawanan dengan harapannya" |
| `davisson` | "Ketika eksperimen diulang, pola hamburan berubah total. Elektron lima puluh empat elektronvolt memantul paling kuat…" | "…berubah total. Mereka lalu menembaki satu kristal nikel yang disiapkan khusus. Awal tahun seribu sembilan ratus dua puluh tujuh, elektron lima puluh empat elektronvolt memantul paling kuat pada sudut lima puluh derajat." | Puncak 54 V/50° ditemukan awal 1927 dengan target satu kristal baru (Phys. Rev. 30, 705; kuliah Nobel Davisson) |
| `davisson` (visual) | "Laboratorium Bell 1925: … Berkas elektron 54 eV ditembakkan" | "Laboratorium Bell, April 1925: … Teks kecil \"awal 1927\": target satu kristal, berkas elektron 54 eV" | idem |
| Catatan produksi | safelight "merah/jingga"; Na vs Cs | safelight amber (Ilford 902, Kodak OC) + batas 4 menit; Cs 1,95–2,14 eV | sinkron dengan AUDIT |

Angka lain yang dicek tidak berubah: 54 V, 50°, d = 0,215 nm, 0,165/0,167 nm, April 1925, Planck 14 Des 1900, Kelvin 27 Apr 1900, Draper 525 °C, AgBr ≈ 2,5 eV, C–C ≈ 350 kJ/mol, Si 1,12 eV, Langevin → Einstein.
