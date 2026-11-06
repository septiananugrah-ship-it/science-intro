#!/usr/bin/env python3
"""Tulis naskah/YOUTUBE.md (judul, deskripsi, bab, rujukan, tag) untuk tiap repo video.
Judul & bab dari naskah/BAB_YOUTUBE.txt, rujukan dari REFS di src/scenes/Outro.tsx."""
import re, sys, pathlib

KUANTUM_TAIL = "Bagian dari seri video Kimia Kuantum (S1 Kimia) — dibuat sebagai bahan belajar berbahasa Indonesia."
FISIKA_TAIL = ("Bagian dari seri Fisika Umum untuk mahasiswa kimia: setiap video punya bagian \"di dunia kimia\" "
               "yang menjembatani ke kimia kuantum.\nDisusun oleh Septian Anugrah Dwi Putra.")

V = {
 'video-simbol-term': (
  "Mengapa lampu natrium memancarkan DUA garis kuning yang nyaris kembar, 589,0 dan 589,6 nm? Jawabannya tersembunyi dalam \"kode rahasia\" setiap atom: simbol term.\n\n"
  "Di video ini kita belajar spin & prinsip Pauli, membaca dan menyusun simbol term ²ˢ⁺¹L_J, aturan Hund, mikrostatus, struktur halus, paritas, sampai aturan seleksi yang menentukan transisi mana yang boleh terjadi — lalu melihatnya bekerja pada lampu merkuri, fosforesensi, warna ion Mn²⁺, dan laser Nd:YAG.",
  KUANTUM_TAIL, "kimia kuantum, simbol term, term symbol, aturan Hund, aturan seleksi, struktur halus, garis D natrium, spin, prinsip Pauli, spektroskopi atom"),
 'video-ikatan-valensi': (
  "Dua atom hidrogen saling mendekat dan tiba-tiba terkunci menjadi molekul, melepaskan ≈ 436 kJ/mol. Apa sebenarnya ikatan kimia itu?\n\n"
  "Video ini membahas teori ikatan valensi: dari pasangan elektron Lewis, perhitungan Heitler–London, peran pertukaran dan pasangan spin, ikatan σ dan π, promosi elektron dan hibridisasi sp³/sp²/sp, pasangan bebas, resonansi benzena, sampai intan, grafit, grafena, dan polimer penghantar — diakhiri dengan misteri oksigen yang menempel pada magnet.",
  KUANTUM_TAIL, "kimia kuantum, teori ikatan valensi, valence bond, Heitler-London, hibridisasi, sp3, ikatan sigma, ikatan pi, benzena, grafena"),
 'video-orbital-molekul': (
  "Oksigen cair menempel di antara kutub magnet — sesuatu yang tidak bisa dijelaskan teori ikatan valensi. Teori orbital molekul memecahkannya.\n\n"
  "Kita membangun orbital molekul dari kombinasi linear orbital atom (LCAO), memahami orbital ikatan dan antiikatan, orde ikatan, diagram MO molekul diatomik periode 2, pencampuran s–p, ion-ion oksigen, CO dan hemoglobin, HOMO–LUMO, bukti dari spektroskopi fotoelektron, oksigen singlet, dan rangkap tiga nitrogen di balik proses Haber–Bosch.",
  KUANTUM_TAIL, "kimia kuantum, teori orbital molekul, molecular orbital, LCAO, orde ikatan, O2 paramagnetik, diagram MO, HOMO LUMO, spektroskopi fotoelektron, oksigen singlet"),
 'video-orbital-poliatomik': (
  "Hibridisasi bilang metana punya empat ikatan identik — tetapi spektrum fotoelektronnya menunjukkan DUA puncak, 14 dan 23 eV. Siapa yang benar?\n\n"
  "Video ini membahas orbital molekul poliatomik: orbital kelompok (SALC), BeH₂, metana, air dan pasangan bebasnya, lalu metode Hückel untuk butadiena dan benzena, lingkaran Frost, aturan aromatisitas 4n + 2, konjugasi dan warna, ikatan logam–CO, perancangan katalis, sampai sel surya organik dan OLED.",
  KUANTUM_TAIL, "kimia kuantum, orbital molekul poliatomik, Huckel, SALC, metana, butadiena, benzena, lingkaran Frost, aromatisitas 4n+2, OLED"),
 'video-simetri-molekul': (
  "Karvon dari daun mint dan karvon dari jintan tersusun dari atom yang sama persis — bedanya hanya bayangan cermin, dan hidung kita bisa membedakannya.\n\n"
  "Di video ini kita belajar bahasa simetri: unsur dan operasi simetri (Cₙ, σ, i, Sₙ), kiralitas, grup titik dan diagram alir untuk menentukannya, tabel karakter C₂v, simetri dan tumpang tindih orbital, lalu memakainya untuk meramal kepolaran, getaran yang aktif inframerah, dan mengapa CO₂ adalah gas rumah kaca.",
  KUANTUM_TAIL, "kimia kuantum, simetri molekul, grup titik, point group, tabel karakter, kiralitas, operasi simetri, C2v, inframerah, gas rumah kaca"),
 'video-spektroskopi-molekul': (
  "Teleskop James Webb membaca karbon dioksida di atmosfer planet WASP-39b, sekitar 700 tahun cahaya dari Bumi — hanya dari cahaya yang diserap molekulnya.\n\n"
  "Video penutup seri ini merangkum spektroskopi molekul: empat tangga energi (translasi, rotasi, vibrasi, elektronik), faktor Boltzmann, aturan seleksi, spektrum rotasi CO, vibrasi-rotasi HCl dengan cabang P dan R, hamburan Raman, prinsip Franck–Condon, pelebaran Doppler, hingga alat uji napas, astronomi radio, dan atmosfer planet lain.",
  KUANTUM_TAIL, "kimia kuantum, spektroskopi molekul, spektrum rotasi, vibrasi rotasi, Raman, Franck-Condon, Boltzmann, JWST, WASP-39b, inframerah"),
 'video-landasan-kimia-kuantum': (
  "Elektron yang ditembakkan satu per satu tetap membentuk pola interferensi. Aturan main apa yang dipatuhi dunia sekecil itu?\n\n"
  "Video ini membahas landasan kimia kuantum: fungsi gelombang dan tafsiran peluang Born, normalisasi, superposisi, operator dan nilai eigen, pengukuran, nilai harapan, komutator dan ketidakpastian, persamaan Schrödinger, spin dan prinsip Pauli, konfigurasi elektron — lalu penerapannya pada ikatan, spektroskopi, MRI, kimia komputasi, dan komputer kuantum.",
  KUANTUM_TAIL, "kimia kuantum, fungsi gelombang, persamaan Schrodinger, operator, nilai eigen, superposisi, prinsip ketidakpastian, spin, prinsip Pauli, kimia komputasi"),
 'video-fisika-energi': (
  "Bola boling dilepas dari ujung hidung dan berayun kembali — tetapi tidak pernah menabrak. Mengapa? Karena energi adalah \"mata uang\" yang tidak pernah hilang.\n\n"
  "Video ini membahas usaha, energi kinetik, energi potensial gravitasi dan pegas, kekekalan energi mekanik, gaya gesek dan energi termal, serta daya — lengkap dengan batang energi yang bergerak mengikuti benda, dan jembatannya ke energi ikatan dan reaksi kimia.",
  FISIKA_TAIL, "fisika umum, usaha dan energi, energi kinetik, energi potensial, kekekalan energi, daya, fisika dasar, mahasiswa kimia"),
 'video-fisika-fluida-statis': (
  "Kapal baja seberat puluhan ribu ton mengapung, sementara baut baja kecil langsung tenggelam. Apa yang menahan kapal itu?\n\n"
  "Video ini membahas massa jenis, tekanan hidrostatis, hukum Pascal dan pompa hidrolik, prinsip Archimedes dan gaya apung, tegangan permukaan dan kapilaritas — serta penerapannya di laboratorium kimia.",
  FISIKA_TAIL, "fisika umum, fluida statis, tekanan hidrostatis, hukum Pascal, hukum Archimedes, gaya apung, tegangan permukaan, kapilaritas"),
 'video-fisika-fluida-dinamis': (
  "Tutup ujung selang dengan jempol, airnya menyembur lebih jauh. Tiup di antara dua kertas, keduanya justru merapat. Fluida yang bergerak punya aturannya sendiri.\n\n"
  "Video ini membahas aliran laminar dan turbulen, debit dan persamaan kontinuitas, persamaan Bernoulli, gaya angkat sayap (tanpa mitos waktu tempuh sama), viskositas — dan penerapannya di lab kimia: pompa vakum air, pembakar Bunsen, nebulizer AAS, viskometer Ostwald.",
  FISIKA_TAIL, "fisika umum, fluida dinamis, kontinuitas, Bernoulli, gaya angkat, viskositas, aliran laminar, turbulen, viskometer Ostwald"),
 'video-fisika-momentum': (
  "Tarik satu bola ayunan Newton, lepaskan — dan bola di ujung seberang terlempar. Sesuatu berpindah menembus bola-bola yang diam: momentum.\n\n"
  "Video ini membahas momentum, impuls, hukum kekekalan momentum, tumbukan lenting dan tak lenting, koefisien restitusi — dan jembatannya ke kimia: tekanan gas, teori tumbukan reaksi, dan momentum foton.",
  FISIKA_TAIL, "fisika umum, momentum, impuls, kekekalan momentum, tumbukan, koefisien restitusi, teori tumbukan, tekanan gas"),
 'video-fisika-osilasi': (
  "Pegas yang bolak-balik, bandul yang cukup teratur untuk menjadi jam, dan ikatan kimia yang bergetar puluhan triliun kali per detik — semuanya mengikuti irama yang sama.\n\n"
  "Video ini membahas gerak harmonik sederhana, periode dan frekuensi, energi osilasi, bandul, redaman dan resonansi — lalu jembatannya ke kuantum: molekul HCl sebagai pegas, serapan inframerah 2886 cm⁻¹, efek isotop DCl, dan E = (v + ½)hν.",
  FISIKA_TAIL, "fisika umum, osilasi, getaran, gerak harmonik sederhana, pegas, bandul, resonansi, inframerah, osilator harmonik kuantum"),
 'video-fisika-gelombang': (
  "Riak menyebar ke seluruh kolam, tetapi daun yang mengapung hanya naik-turun di tempat. Yang berjalan bukan airnya — melainkan getarannya.\n\n"
  "Video ini membahas gelombang berjalan, panjang gelombang dan frekuensi, superposisi dan interferensi, gelombang berdiri, bunyi dan efek Doppler, cahaya — lalu jembatannya ke kuantum: difraksi sinar-X Bragg, gelombang de Broglie, elektron dalam kotak, dan orbital sebagai gelombang berdiri 3D.",
  FISIKA_TAIL, "fisika umum, gelombang, interferensi, gelombang berdiri, efek Doppler, difraksi sinar-X, Bragg, de Broglie, orbital"),
 'video-fisika-termofisika': (
  "Es di genggaman mencair, kopi panas lama-lama dingin. Ke mana sebenarnya panas itu pergi — dan mengapa tidak pernah kembali sendiri?\n\n"
  "Video ini membahas suhu, kalor, perubahan wujud, perpindahan kalor, hukum termodinamika, mesin kalor dan entropi, teori kinetik gas, distribusi Maxwell–Boltzmann, faktor Boltzmann, hingga S = k ln W.",
  FISIKA_TAIL, "fisika umum, termofisika, termodinamika, kalor, entropi, teori kinetik gas, Maxwell-Boltzmann, faktor Boltzmann, mesin Carnot"),
 'video-fisika-listrik': (
  "Balon yang digosok menempel di dinding, petir lebih panas dari permukaan Matahari — dan gaya yang sama menyatukan atom menjadi molekul.\n\n"
  "Video ini membahas muatan dan hukum Coulomb, medan dan potensial listrik, arus dan hambatan, rangkaian — lalu jembatannya ke kimia: ikatan ion, energi atom hidrogen −13,6 eV, satuan elektronvolt, elektrolisis, dan elektroforesis.",
  FISIKA_TAIL, "fisika umum, listrik statis, hukum Coulomb, medan listrik, potensial listrik, arus listrik, ikatan ion, elektronvolt, elektrolisis"),
 'video-fisika-magnet': (
  "Jarum kompas selalu menunjuk utara, dan tirai aurora menari di langit kutub. Keduanya lahir dari muatan yang bergerak.\n\n"
  "Video ini membahas medan magnet, gaya Lorentz, gaya pada kawat berarus, induksi Faraday dan hukum Lenz, motor dan generator — lalu jembatannya ke kimia: spektrometer massa, spin elektron dan Stern–Gerlach, NMR, dan MRI.",
  FISIKA_TAIL, "fisika umum, magnet, medan magnet, gaya Lorentz, induksi elektromagnetik, hukum Faraday, spin, NMR, MRI, spektrometer massa"),
 'video-fisika-atom': (
  "Lampu neon merah-jingga, kembang api tembaga hijau-kebiruan, dan garis-garis gelap di cahaya bintang — setiap atom punya \"tangga\" energinya sendiri.\n\n"
  "Video penutup seri Fisika Umum ini membahas model atom Thomson dan Rutherford, krisis atom klasik, spektrum garis, model Bohr, tingkat energi atom hidrogen, energi ionisasi, deret Balmer, keterbatasan model Bohr, elektron sebagai gelombang berdiri, hingga orbital — pintu masuk ke kimia kuantum.",
  FISIKA_TAIL, "fisika umum, fisika atom, model atom Bohr, Rutherford, spektrum garis, deret Balmer, tingkat energi, energi ionisasi, orbital"),
 'video-akhir-zaman': (
  "Seratus tahun lalu, kabar butuh berhari-hari untuk sampai; hari ini dunia berlari begitu cepat. Video renungan ini menelusuri tanda-tanda akhir zaman menurut Al-Qur'an dan hadis sahih, lalu merenungkan zaman teknologi dan AI.\n\n"
  "Setiap dalil disertai sumbernya di layar, dan bagian renungan dipisahkan dengan jelas dari dalil. Urutan tanda-tanda besar diperselisihkan ulama; wallahu a'lam.",
  "", "akhir zaman, tanda kiamat, renungan, Al-Quran, hadis, teknologi, AI, islam"),
}


V2 = {
 'video-partikel-kotak': (
  "Tiga botol titik kuantum berpendar dengan warna berbeda — padahal bahannya sama persis. Bedanya hanya ukuran partikelnya, beberapa nanometer saja.\n\n"
  "Video ini membahas partikel dalam kotak: partikel bebas, kotak 1D, tangga energi, fungsi gelombang dan peluang, energi titik nol, kotak 2D dan 3D serta degenerasi, sumur berhingga, penerowongan kuantum (lengkap dengan simulasi paket gelombang), transisi dan serapan cahaya, elektron pi dan warna pewarna sianin, penerowongan dalam molekul amonia, titik kuantum, mikroskop STM, hingga memori flash.",
  KUANTUM_TAIL, "kimia kuantum, partikel dalam kotak, particle in a box, kuantisasi energi, titik kuantum, quantum dot, penerowongan kuantum, STM, degenerasi, pewarna sianin"),
 'video-atom-hidrogen': (
  "Cahaya dari tabung hidrogen terpecah menjadi beberapa garis warna yang tajam. Atom paling sederhana — satu proton, satu elektron — menyimpan kunci seluruh tabel periodik.\n\n"
  "Video ini membahas struktur dan spektrum atom hidrogen: massa tereduksi, pemisahan radial dan sudut, potensial efektif, bilangan kuantum n, ℓ, m, fungsi radial dan distribusi radial, bentuk orbital s, p, d, energi ionisasi, deret Lyman, Balmer, dan Paschen, aturan seleksi, dari hidrogen ke tabel periodik, lampu deuterium dan kalibrasi, spektroskopi emisi atom, hingga jam atom maser hidrogen di satelit Galileo.",
  KUANTUM_TAIL, "kimia kuantum, atom hidrogen, persamaan Schrodinger, orbital, bilangan kuantum, distribusi radial, deret Balmer, deret Lyman, energi ionisasi, maser hidrogen"),
 'video-sidik-jari-v2': (
  "Dua lembar plastik tampak kembar, tetapi cahaya inframerah langsung membedakan mana PE dan mana PET. Setiap molekul punya pola serapan khas — seperti sidik jari.\n\n"
  "Video ini membahas gerak vibrasi molekul: ikatan kimia sebagai pegas, kekakuan dan massa, lanskap energi, lompatan kuantum, awan kemungkinan, energi titik nol, serapan inframerah, pegas yang tidak sempurna (anharmonisitas), mode getaran molekul banyak atom, cara kerja FTIR, membaca spektrum, hingga penerapannya di laboratorium mutu, sensor gas, dan farmasi.",
  KUANTUM_TAIL, "kimia kuantum, gerak vibrasi, osilator harmonik, spektroskopi inframerah, FTIR, energi titik nol, anharmonisitas, mode normal, sidik jari molekul, PE PET"),
}

def refs_of(outro: str):
    m = re.search(r"const REFS\s*=\s*\[(.*?)\];", outro, re.S)
    if not m: return []
    return [x.replace("\\'", "'") for x in re.findall(r"'((?:[^'\\]|\\.)*)'", m.group(1))]

def main(root='/home/user', which='V'):
    for repo, (desc, tail, tags) in (V2 if which=='V2' else V).items():
        d = pathlib.Path(root) / repo
        bab = (d / 'naskah/BAB_YOUTUBE.txt').read_text().strip().split('\n')
        title = bab[0].strip()
        chapters = '\n'.join(bab[1:]).strip()
        refs = refs_of((d / 'src/scenes/Outro.tsx').read_text())
        out = [f"# Bahan unggah YouTube — {title.split(' — ')[0]}", "",
               "Salin bagian di bawah ke kolom YouTube. Stempel waktu bab mengikuti timeline saat ini; "
               "setelah narasi direkam, jalankan `npm run timeline` lalu salin ulang bagian Bab dari `naskah/BAB_YOUTUBE.txt`.", "",
               "## Judul", "", title, "",
               "## Deskripsi", "", desc, ""]
        if tail: out += [tail, ""]
        out += ["Bab:", chapters, ""]
        if refs:
            out += ["Rujukan:"] + [f"• {r}" for r in refs] + [""]
        out += ["## Tag", "", tags, ""]
        (d / 'naskah/YOUTUBE.md').write_text('\n'.join(out))
        print(repo, len(refs), 'rujukan')

if __name__ == '__main__':
    main(*sys.argv[1:])
