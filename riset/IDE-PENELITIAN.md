# Ide Penelitian Kimia Murni — Skripsi / Pengganti Skripsi / PKM

Disusun November 2026 untuk Yayan (S1 Kimia UNESA). Fokus: kimia murni (bukan pendidikan), bisa dikerjakan dengan alat lab S1 + komputasi gratis, dan punya celah riset yang bisa dibuktikan.

## Cara riset ini dibuat

- **Sumber:** basis data OpenAlex (indeks terbuka lebih dari 200 juta karya ilmiah), 16 kueri topik, diambil 8 Nov 2026.
- **Per topik:** jumlah paper per tahun (2015–2026), jumlah paper berpenulis Indonesia, ≤50 paper paling banyak dikutip sejak 2021, dan ≤50 paper terbaru sejak 2025.
- **Total dibaca:** 868 paper unik (judul semuanya, abstrak bila tersedia — sebagian besar paper Elsevier tidak membuka abstrak di OpenAlex). Daftar lengkap: [`data/literatur-openalex-2026-11.csv`](data/literatur-openalex-2026-11.csv).
- **Dicek silang:** ±12 pencarian web untuk menutup lubang (studi Indonesia, apakah suatu kombinasi sudah pernah dibuat).
- **Batasan:** angka "jumlah paper" = paper yang judul+abstraknya memuat *semua* kata kueri, jadi angka relatif antar-topik, bukan total bidang. "Belum ditemukan" ≠ "pasti belum ada" — sebelum proposal, cek ulang di Scopus/Google Scholar/Garuda dengan kata kunci di tiap ide.

## Peta kejenuhan 16 topik

| Topik (kueri sempit) | Paper 2015–26 | Porsi 2024–26 | Penulis Indonesia | Status |
|---|---:|---:|---:|---|
| Nanopartikel sintesis hijau (ekstrak tanaman) | 9.866 | 51% | 247 | ⛔ jenuh berat |
| Karbon biomassa untuk superkapasitor | 1.908 | 44% | 68 | ⛔ jenuh |
| CaO cangkang (telur/kerang) untuk biodiesel | 197 | 34% | 42 | ⛔ jenuh, Indonesia sudah banyak |
| Carbon dots + HP/kertas (sensor portabel) | 163 | 66% | **0** | 🟡 ramai global, kosong di Indonesia |
| Silika sekam padi mesopori | 160 | 40% | 25 | 🟠 ramai |
| Nanoselulosa TKKS sawit | 124 | 26% | 54 | 🟠 dikuasai ID/MY, tren menurun |
| MOF dari limbah botol PET | 99 | **77%** | 1 | 🟢 naik cepat, Indonesia hampir kosong |
| NADES + pemulihan/daur ulang pelarut | 97 | 62% | 2 | 🟢 naik |
| Kitosan komposit adsorben | 80 | 49% | 1 | 🟠 ramai (versi biasa) |
| Carbon dots biomassa sensor ion logam | 48 | 67% | 4 | 🟡 naik |
| Carbon dots + DFT mekanisme pemadaman | 45 | 67% | 2 | 🟢 naik, cocok kimia kuantum |
| Inhibitor korosi ekstrak tanaman + DFT/MD | 43 | 60% | 1 | 🟡 ramai di Maroko/Iran/Cina |
| Zeolit alam termodifikasi untuk CO₂ | 35 | 31% | 2 | 🟢 sepi |
| g-C₃N₄/biochar untuk antibiotik | 25 | 72% | **0** | 🟢 naik, dikuasai Cina |
| Antosianin DSSC + TD-DFT | 14 | 29% | 2 | ⚪ sepi tapi dampak rendah |
| Mikroplastik + Nile red + HP | **4** | 50% | **0** | 🟢 hampir kosong |

**Pola umum:** celah terbaik muncul di topik yang *naik cepat secara global tetapi belum disentuh Indonesia* (sensor HP, MOF-PET, g-C₃N₄/biochar, mikroplastik), dan di *gabungan eksperimen + kimia kuantum* — banyak paper Indonesia masih hanya eksperimen atau hanya komputasi.

---

## Ide unggulan (urut dari yang paling direkomendasikan)

Setiap ide punya tiga "tingkat": **dasar** (skripsi aman, Sinta 4–5), **lengkap** (Sinta 2 / Scopus Q3–Q4), **ambisius** (Scopus Q2). Tinggal pilih seberapa jauh.

### 1. Nile red + kamera HP + TD-DFT untuk mengenali jenis mikroplastik ⭐ paling orisinal

**Judul usulan:** *Identifikasi Cepat Jenis Polimer Mikroplastik di Kali Surabaya Berbasis Pergeseran Emisi Nile Red yang Dibaca Kamera Ponsel: Validasi FTIR dan Kajian TD-DFT*

**Celah (dengan bukti):**
- Hanya **4 paper** yang memadukan mikroplastik + Nile red + ponsel di OpenAlex. Metode ponsel yang ada hanya *menghitung* partikel, belum *mengenali jenis polimer* (Smartphone-enabled rapid quantification, *J. Hazard. Mater. Lett.* 2022, [10.1016/j.hazl.2022.100052](https://doi.org/10.1016/j.hazl.2022.100052)).
- Nile red bersifat solvatokromik: warna emisinya bergeser menurut polaritas polimer, dan ini sudah dipakai untuk klasifikasi dengan spektrometer/kamera multispektral (Maes dkk., *Sci. Rep.* 2017, [10.1038/srep44501](https://doi.org/10.1038/srep44501); FIMAP, [arXiv 2502.17997](https://arxiv.org/pdf/2502.17997)). Versi murah dengan rasio warna RGB ponsel belum ditemukan untuk sungai Indonesia.
- **Penjelasan kuantum** mengapa emisi bergeser per polimer belum ditemukan (dugaan celah). Pewarna baru untuk mikroplastik sudah dirancang dengan bantuan teori (pewarna TICT, *J. Hazard. Mater.* 2023, [10.1016/j.jhazmat.2023.133168](https://doi.org/10.1016/j.jhazmat.2023.133168)) — artinya pendekatan teori ini diterima jurnal bagus.
- Studi mikroplastik Kali Surabaya/Wonorejo selama ini hanya kelimpahan + FTIR (skripsi UPN Jatim, Biodjati 2025, laporan Ecoton 2025).

**Metode ringkas:**
1. Polimer acuan dari barang rumah tangga (PE kantong, PP gelas, PET botol, PS styrofoam, nilon tali) → digiling/dipotong < 5 mm.
2. Pewarnaan Nile red (aseton/air 25% v/v), lampu LED biru ±470 nm + filter oranye akrilik + ponsel di kotak gelap → rasio R/G, hue (HSV) per partikel; klasifikasi sederhana (LDA/k-NN di Python).
3. Sampel air & sedimen 3–5 stasiun Kali Surabaya → pemisahan densitas (NaCl/ZnCl₂), digesti H₂O₂ → diwarnai → ditebak jenisnya → subset dicek **FTIR** (akurasi, matriks kebingungan).
4. **TD-DFT** (ORCA, gratis): Nile red dalam PCM dengan konstanta dielektrik tiap polimer + model klaster Nile red–oligomer (geometri awal xtb). Bandingkan pergeseran λ_emisi hitung vs. hue terukur.

**Alat:** LED + filter + ponsel, oven, neraca, FTIR (subset), laptop. Biaya rendah.
**Target:** dasar = Sinta 3–4 (tanpa TD-DFT); lengkap = Sinta 2 / Scopus Q3; ambisius (ditambah pelapukan UV dan aditif) = Q2.
**PKM:** sangat cocok **PKM-RE**; versi "kotak deteksi" cocok **PKM-KC**.
**Risiko:** fluoresensi bahan organik alami dan pelapukan mengaburkan warna → wajib langkah digesti H₂O₂ dan acuan polimer yang sudah dilapukkan.

### 2. Carbon dots limbah lokal: sensor strip kertas + HP, mekanisme dengan DFT, divalidasi AAS

**Judul usulan:** *Carbon Dots Terdoping Nitrogen dari [limbah lokal] sebagai Sensor Fluoresensi Berbasis Kertas–Ponsel untuk Pb²⁺/Cr(VI) di Air Sungai: Validasi AAS dan Kajian Mekanisme Pemadaman dengan DFT/TD-DFT*

**Celah (dengan bukti):**
- Sensor carbon dots + ponsel/kertas: 163 paper, 66% terbit sejak 2024, **nol** berpenulis Indonesia.
- Paper carbon dots Indonesia (kulit pisang, *Results Eng.* 2026, [10.1016/j.rineng.2026.109321](https://doi.org/10.1016/j.rineng.2026.109321); *Amomum compactum*, MJFAS 2026, [10.11113/mjfas.v22n3.5417](https://doi.org/10.11113/mjfas.v22n3.5417)) berhenti di spektrofluorometer, belum alat lapangan.
- Mekanisme pemadaman sering hanya *diasumsikan*; *J. Phys. Chem. C* 2026 menyebut asal pemadaman oleh ion logam "masih menantang" ([10.1021/acs.jpcc.6c03760](https://doi.org/10.1021/acs.jpcc.6c03760)). Gabungan eksperimen + DFT di Indonesia baru sedikit (GQD biomassa untuk Fe³⁺, *J. Electron. Mater.* 2025, [10.1007/s11664-025-12490-6](https://doi.org/10.1007/s11664-025-12490-6); studi komputasi murni UNAIR, *J. Kimia Riset* 2026, [10.20473/jkimris.v11i1.89817](https://doi.org/10.20473/jkimris.v11i1.89817)).
- ⚠️ **Hati-hati:** ampas tebu + Hg²⁺ + strip kertas **sudah ada** (xilan bagas, *Polymers* 2026, [10.3390/polym18212753](https://doi.org/10.3390/polym18212753)). Bedakan dengan memilih logam lain (Pb²⁺, Cr(VI), Cd²⁺), limbah lain, atau mode *ratiometrik* (dua warna) yang lebih tahan gangguan.

**Metode ringkas:** hidrotermal/microwave (limbah + urea/asam sitrat) → UV-Vis, PL, FTIR, rendemen kuantum (acuan kinin sulfat) → uji selektivitas & LOD → uji Stern–Volmer pada beberapa suhu + tumpang-tindih spektrum (membedakan statik/dinamik/efek filter dalam) → strip kertas saring + ponsel (kanal RGB) → 10–15 sampel air sungai, bandingkan dengan **AAS** (uji t berpasangan) → DFT: model klaster carbon dots (koronen ber-gugus –NH₂/–COOH) + ion logam, HOMO–LUMO dan transfer muatan (TD-DFT).
**Target:** dasar = Sinta 4 (sintesis + sensor); lengkap = Sinta 2/Q3 (ponsel + AAS); ambisius = Q2 (ratiometrik + DFT mekanisme yang cocok dengan data suhu).
**PKM:** PKM-RE atau PKM-KC (kit strip uji).

### 3. Ekstrak NADES dipakai langsung sebagai inhibitor korosi (eksperimen + DFT)

**Judul usulan:** *Ekstrak Pelarut Eutektik Alami (NADES) Daun [tanaman lokal] sebagai Inhibitor Korosi Baja Lunak dalam HCl 1 M Tanpa Pemisahan Pelarut: Kajian Gravimetri, Elektrokimia, dan DFT*

**Celah (dengan bukti):**
- Kelemahan klasik NADES: senyawa aktif **sulit dipisahkan** dari pelarut (perlu resin makropori, dll.; [10.1080/10826068.2023.2204485](https://doi.org/10.1080/10826068.2023.2204485); ulasan peningkatan skala 2026, [10.1016/j.sampre.2026.100248](https://doi.org/10.1016/j.sampre.2026.100248)).
- NADES **sendiri** ternyata bisa menghambat korosi (NADES kolin klorida–fenolik, 2022, [PMC9241144](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9241144/); asam laktat–fruktosa, Heriot-Watt 2025, efisiensi 82%).
- **Ide gabungan:** pakai ekstrak NADES *apa adanya* sebagai inhibitor → masalah pemisahan hilang, dan pelarut + fitokimia mungkin bersinergi. Studi yang memakai ekstrak tanaman-dalam-NADES langsung sebagai inhibitor belum ditemukan (dugaan celah).
- Bidang inhibitor + DFT/MD: 43 paper, dikuasai Maroko/Iran/Cina, Indonesia baru 1 (cempedak, *Next Mater.* 2026, [10.1016/j.nxmate.2026.101861](https://doi.org/10.1016/j.nxmate.2026.101861)). Arah terbaru = memahami **ekstrak multikomponen** ([10.1016/j.jcis.2026.140398](https://doi.org/10.1016/j.jcis.2026.140398); [10.1016/j.indcrop.2025.122280](https://doi.org/10.1016/j.indcrop.2025.122280)) dan memanfaatkan **limbah cair ekstraksi** ([10.1016/j.jiec.2023.05.046](https://doi.org/10.1016/j.jiec.2023.05.046)).

**Metode ringkas:** NADES (kolin klorida–asam laktat / –gliserol) + ultrasonik → total fenolik (UV-Vis, Folin) → uji kehilangan berat baja lunak di HCl 1 M (variasi konsentrasi & suhu → isoterm Langmuir, ΔG_ads) dengan **3 pembanding**: NADES kosong, ekstrak etanol, ekstrak NADES → bila ada potensiostat: Tafel + EIS → FTIR/UV lapisan permukaan → DFT (B3LYP-D3, ORCA) pada 3–5 senyawa utama + komponen NADES: HOMO, LUMO, ΔE, fraksi elektron yang ditransfer, fungsi Fukui; adsorpsi pada klaster Fe dengan xtb.
**Target:** dasar = Sinta 3–4 (gravimetri + DFT deskriptor); lengkap = Sinta 2/Q3 (+ elektrokimia); ambisius = Q2 (+ MD/simulasi adsorpsi, mekanisme sinergi).
**PKM:** PKM-RE.

### 4. Antibiotik tambak udang Jawa Timur: g-C₃N₄/biochar + sinar matahari + Fukui DFT

**Judul usulan:** *Komposit g-C₃N₄/Biochar Ampas Tebu untuk Degradasi Fotokatalitik Oksitetrasiklin dalam Air Tambak Payau di Bawah Sinar Matahari: Pengaruh Salinitas dan Prediksi Situs Serangan dengan Fungsi Fukui*

**Celah (dengan bukti):**
- 25 paper, 72% sejak 2024, hampir semua Cina, **nol** Indonesia. Uji umumnya di air suling dengan lampu Xe (mis. [10.1016/j.cjche.2021.06.027](https://doi.org/10.1016/j.cjche.2021.06.027); [10.1016/j.hazadv.2026.101252](https://doi.org/10.1016/j.hazadv.2026.101252)). Uji pada air limbah nyata baru sedikit ([10.1016/j.scitotenv.2022.155955](https://doi.org/10.1016/j.scitotenv.2022.155955)).
- Oksitetrasiklin = antibiotik umum di tambak udang vaname. Uji di air tambak (Vietnam, g-C₃N₄/GQD) hanya menurunkan karbon organik 27%. Studi Indonesia terdekat: CaAl-LDH + ekstrak kersen (Sriwijaya), bukan g-C₃N₄.
- **Pengaruh salinitas air payau** pada fotokatalis ini jarang diukur (dugaan celah; relevan untuk tambak Sidoarjo/Gresik).
- Analisis toksisitas & jalur degradasi mulai jadi syarat jurnal Q1–Q2 ([10.1016/j.jenvman.2025.124929](https://doi.org/10.1016/j.jenvman.2025.124929)) → fungsi Fukui (DFT) memprediksi atom yang diserang radikal.

**Metode ringkas:** urea → g-C₃N₄ (tanur 550 °C); ampas tebu → biochar (pirolisis terbatas O₂) → komposit variasi rasio → XRD, FTIR, UV-Vis DRS (celah pita, Tauc), SEM (lab bersama) → degradasi oksitetrasiklin (UV-Vis ±355 nm) di bawah matahari vs. lampu, variasi salinitas 0–30‰, uji penangkap radikal (IPA, EDTA, BQ), 4–5 siklus pakai ulang → air tambak nyata (spike) → DFT: Fukui f⁰/f⁻ oksitetrasiklin (ORCA), cocokkan dengan jalur degradasi pustaka.
**Target:** dasar = Sinta 3; lengkap = Sinta 2/Q3; ambisius (LC-MS antara + toksisitas ECOSAR) = Q2.
**Risiko:** matriks air tambak mengganggu pembacaan UV-Vis → idealnya HPLC; minimal pakai metode adisi standar.

### 5. MOF dari botol PET bekas tanpa DMF untuk masalah air lokal

**Judul usulan:** *Sintesis MIL-53(Al) Berbasis Air dari Asam Tereftalat Botol PET Bekas dan Aluminium Kaleng Minuman untuk Adsorpsi Fosfat/Fluorida*

**Celah (dengan bukti):**
- Topik paling cepat naik (77% paper sejak 2024), Indonesia hanya 1 paper (Cu-BDC untuk biodiesel, *Trends Sci.* 2023, [10.48048/tis.2023.7163](https://doi.org/10.48048/tis.2023.7163)).
- PET + kaleng → MIL-53(Al) **sudah ada** (Chemosphere 2023; *RSC Adv.* 2025), tetapi umumnya masih memakai pelarut DMF yang beracun. Rute berbasis air baru dibuktikan untuk UiO-66 dari ester PET (*RSC Sustain.* 2025, [10.1039/d5su00463b](https://doi.org/10.1039/d5su00463b)). Celah = *seluruh bahan dari limbah + tanpa DMF*, ditambah aplikasi lokal.
- Ulasan: [10.1016/j.ccr.2024.216106](https://doi.org/10.1016/j.ccr.2024.216106), [10.3390/physchem5030028](https://doi.org/10.3390/physchem5030028).

**Metode ringkas:** hidrolisis alkali PET → asam tereftalat (FTIR, titik leleh) → kaleng dilarutkan → garam Al → hidrotermal dalam air (autoklaf Teflon) → XRD (bandingkan pola MIL-53 standar), FTIR, BET (lab bersama) → adsorpsi fosfat (molibdenum biru, UV-Vis) atau fluorida → isoterm, kinetika, regenerasi.
**Target:** Sinta 2–3; Q3 bila kristalinitas & BET bagus. **PKM:** PKM-RE (cerita "plastik jadi penyaring air" kuat untuk juri).

### 6. Pilihan tambahan (lebih berat atau lebih sempit)

- **Zeolit alam Jawa Timur untuk pemurnian biogas (CO₂/CH₄).** Sepi (35 paper, Indonesia 2). Peran kation penukar sedang dikaji ([10.3390/ma18102403](https://doi.org/10.3390/ma18102403); [10.1016/j.scp.2021.100495](https://doi.org/10.1016/j.scp.2021.100495)). Kendala: perlu alat adsorpsi gas → cari dosen yang punya.
- **Nanoselulosa ampas tebu (bukan TKKS) dengan DES yang didaur ulang.** TKKS sudah dikuasai ID/MY ([10.1016/j.biombioe.2025.108306](https://doi.org/10.1016/j.biombioe.2025.108306)); Jawa Timur punya banyak pabrik gula → ganti bahan baku + uji daur ulang DES.
- **Kimia komputasi murni (paling murah, laptop saja):** misalnya benchmark fungsional DFT untuk spektrum emisi Nile red atau carbon dots model, dibandingkan data eksperimen dari pustaka. Bisa jadi skripsi atau paper Sinta 2–3, tetapi jurnal bagus biasanya minta data eksperimen pendukung.

---

## Yang sebaiknya **dihindari** (kecuali ada sentuhan baru yang jelas)

- **Sintesis hijau AgNP/ZnO + uji antibakteri:** 9.866 paper, ±2.000 per tahun, Indonesia 247. Reviewer langsung menganggap tidak baru ([10.1016/j.eti.2022.102336](https://doi.org/10.1016/j.eti.2022.102336)).
- **Karbon aktif biomassa X untuk superkapasitor:** 1.908 paper; tiap minggu ada "kulit/biji baru".
- **CaO cangkang telur/kerang untuk biodiesel jelantah:** 197 paper, Indonesia 42. Kalau tetap mau: fokus pada pelindian Ca²⁺ dan anti-penyabunan untuk minyak berasam lemak bebas tinggi ([10.1016/j.fuel.2024.131006](https://doi.org/10.1016/j.fuel.2024.131006)).
- **Kitosan/silika sekam untuk menyerap metilen biru:** contoh paling klise.
- **DSSC pewarna antosianin:** efisiensi umumnya < 1%, tren datar sejak 2017; lebih baik antosianin dipakai sebagai sensor pH/kesegaran.
- **"Tanaman baru" sebagai satu-satunya kebaruan** (berlaku untuk inhibitor korosi, carbon dots, nanopartikel): reviewer jurnal bagus menolak. Kebaruan harus berupa *metode, mekanisme, atau penerapan nyata*.

## Langkah berikutnya

1. Pilih 1–2 ide, lalu tanyakan ke lab/dosen: ada potensiostat? fluorometer? akses FTIR/XRD/BET/HPLC?
2. Cek ulang celahnya di Scopus/Google Scholar dengan kata kunci di tiap ide (minta Claude membuat string pencariannya).
3. Minta Claude membuat: bab 1–2 (latar belakang + tinjauan pustaka berbasis CSV di atas), rancangan percobaan, dan input ORCA untuk bagian DFT.
4. Untuk PKM: siapkan 3 orang tim + dosen pendamping. Ide 1, 2, dan 5 paling "menjual" untuk juri PKM.
