# Spec: Perombakan Copywriting Halaman Layanan YouTube & LinkedIn

**Goal:** Merombak seluruh teks SEO dan copywriting di 10 halaman layanan YouTube dan LinkedIn agar unik, natural, berbasis long-tail keyword hasil riset, dan mengundang klik.

**Scope:** Hanya perombakan teks/copywriting. Tidak mengubah struktur komponen, harga, gambar, atau schema markup.

**PENTING:** Dilarang keras melakukan `git commit` dan `git push`. Cukup audit, ubah file, dan lakukan build lokal.

---

## Hasil Riset Keyword

### YouTube (berdasarkan web search)
- jasa monetisasi youtube
- jasa subscriber youtube
- jasa tambah subscriber youtube
- jasa jam tayang youtube
- jasa 4000 jam tayang youtube
- jasa views youtube
- jasa view youtube
- jasa komen youtube
- jasa like youtube
- jasa komentar youtube
- jasa live youtube
- jasa save video youtube
- jasa report youtube
- syarat monetisasi youtube
- youtube shorts
- penonton organik youtube
- watch time youtube

### LinkedIn (berdasarkan web search)
- jasa like linkedin
- jasa komentar linkedin
- jasa komen linkedin
- jasa follower linkedin
- jasa followers linkedin
- jasa endorsement linkedin
- jasa rekomendasi linkedin
- jasa koneksi linkedin
- optimasi profil linkedin
- personal branding linkedin
- profesional linkedin
- company page linkedin

---

## Daftar Halaman yang Dirombak

### YouTube (8 halaman)
1. `src/pages/jasa-komen-youtube-aktif.astro`
2. `src/pages/jasa-live-youtube.astro`
3. `src/pages/jasa-report-youtube.astro`
4. `src/pages/jasa-save-video-youtube.astro`
5. `src/pages/jasa-subscribe-youtube.astro`
6. `src/pages/jual-jasa-view-youtube.astro`
7. `src/pages/like-komentar-youtube.astro`
8. `src/pages/like-youtube.astro`

### LinkedIn (2 halaman)
1. `src/pages/like-komentar-linkedin.astro`
2. `src/pages/like-linkedin.astro`

---

## Struktur Data yang Wajib Dirombak

1. **SEO Data:** `title`, `description`, `keywords`
2. **Hero:** `judulUtama`, `deskripsi`, `labelTeks`
3. **Masalah:** `judulUtama`, `deskripsiUtama`, `ms1Teks`–`ms4Teks`
4. **Apa Itu:** `judulUtama`, `deskripsiUtama`, `k1Judul`, `k1Teks`, `k2Judul`, `k2Teks`
5. **Manfaat:** `judulUtama`, `deskripsiUtama`, `m1Judul`–`m4Judul`, `m1Teks`–`m4Teks`
6. **Mengapa Memilih:** `judulUtama`, `deskripsiUtama`, `mk1Judul`–`mk6Judul`, `mk1Teks`–`mk6Teks`
7. **Solusi:** `judulUtama`, `deskripsiUtama`, `sol1Judul`–`sol3Judul`, `sol1Teks`–`sol3Teks`
8. **Cara Order:** `judulUtama`, `deskripsiUtama`, `co1Judul`–`co4Judul`, `co1Teks`–`co4Teks`
9. **Harga Paket:** `judulHarga`, `deskripsiHarga` — **HARGA (p1Harga–p4Harga) TIDAK BOLEH DIUBAH**
10. **FAQ:** `judulUtama`, `deskripsiUtama`, `faq1Judul`–`faq6Judul`, `faq1Teks`–`faq6Teks`

> **PENTING:** Hanya teks string yang dirombak. Jangan ubah nama variabel, struktur object, path gambar, link WhatsApp, harga, label, warna class, atau HTML tags.

---

## Aturan Copywriting

### 1. Meta Title
- Panjang: **55–65 karakter**
- Mengandung keyword utama + long-tail keyword
- Elegan, profesional, mengundang klik

**Contoh YouTube Subscribe:**
- Baik: "Jasa Subscriber YouTube: Bangun Channel yang Lebih Kredibel" (59 kar)

**Contoh LinkedIn Like:**
- Baik: "Jasa Like LinkedIn: Tingkatkan Profil Profesional Anda" (58 kar)

### 2. Meta Description
- Panjang: **150–160 karakter**
- Mengandung keyword utama, long-tail, dan value proposition
- Mengundang klik tanpa clickbait kasar

**Contoh YouTube Views:**
> "Tingkatkan views video YouTube Anda dengan layanan penonton organik yang bertahap. Membuat konten lebih mudah ditemukan dan membantu memenuhi syarat monetisasi channel." (160 kar)

**Contoh LinkedIn Komentar:**
> "Optimalkan postingan LinkedIn Anda dengan komentar relevan dari profil profesional. Meningkatkan diskusi, eksposur, dan kredibilitas konten di kalangan rekan industri." (159 kar)

### 3. H1 (Hero `judulUtama`)
- Satu H1 per halaman
- Mengandung keyword utama secara natural
- Spesifik untuk platform dan jenis layanan

**Contoh:**
- YouTube: `<span class="text-red-600">Jasa Jam Tayang YouTube</span> untuk Memenuhi Syarat Monetisasi`
- LinkedIn: `<span class="text-blue-700">Jasa Like LinkedIn</span> agar Konten Profesional Anda Lebih Dilihat`

### 4. H2 Section Headings
Hapus semua pola template. Gunakan sudut pandang spesifik audiens platform.

| Template Lama | Rekomendasi Baru (YouTube) | Rekomendasi Baru (LinkedIn) |
|---|---|---|
| FAQ Layanan... | Pertanyaan Umum Para Kreator YouTube | Hal yang Sering Ditanyakan Profesional LinkedIn |
| Dampak Positif... | Keuntungan yang Dirasakan YouTuber | Manfaat Bagi Profil Profesional Anda |
| Kendala... | Hambatan Membesarkan Channel YouTube | Masalah yang Bikin Postingan LinkedIn Sepi |
| Nilai Lebih... | Keunggulan Layanan untuk Channel Anda | Nilai Tambah untuk Personal Branding |
| Mengenal Strategi... | Cara Kerja Optimasi YouTube Ini | Memahami Layanan LinkedIn Kami |
| Mengapa Memilih... | Alasan Kreator Mempercayakan Channel Ini | Mengapa Profesional Memilih Layanan Ini |
| Prosedur Mudah... | Panduan Pesan ... Tanpa Ribet | Alur Pemesanan ... yang Simpel |
| Solusi Tepat... | Strategi ... agar Video Lebih Sering Ditonton | Solusi ... agar Profil Semakin Berpengaruh |
| Ubah Wajah... | Saatnya Channel YouTube Anda Tampil Lebih Berpengaruh | Waktunya Profil LinkedIn Anda Semakin Kredibel |

### 5. H3 Item Headings
Setiap H3 harus berbeda antar halaman dan mengandung long-tail keyword jika memungkinkan.

**Contoh YouTube Subscribe H3:**
- "Channel YouTube Baru Sulit Mendapatkan Subscriber"
- "Jumlah Subscriber Terlalu Sedikit untuk Lolos Monetisasi"
- "Video Bagus Tapi Tidak Ada yang Subscribe"
- "Kompetitor Sudah Ribuan Subscriber, Anda Masih Puluhan"

**Contoh LinkedIn Like H3:**
- "Postingan LinkedIn Sepi Like Meski Sudah Rajin Aktif"
- "Konten Profesional Tidak Mencapai Rekan Industri"
- "Profil LinkedIn Terlihat Kurang Berpengaruh"
- "Engagement Postingan Kalah dengan Rekan Seprofesi"

### 6. Body Copy
- Paragraf pendek, kalimat sederhana
- Bahasa Indonesia formal tapi tidak kaku
- Hindari kata terlarung: Bot, Panel, Spam, Murah Sejagat, 1000% Aman, Dijamin Viral, Abal-abal, Manipulasi, Hack, Eksploit, Password, Tanpa Password, Tanpa Login, Server SMM, Fake Engagement
- Setiap halaman punya sudut pandang berbeda
- Jangan duplikat paragraf antar halaman
- Sisipkan keyword hasil riset secara natural

### 7. Keywords
Pertahankan variabel `keywords` dan update dengan keyword yang relevan. Fokus pada long-tail hasil riset.

---

## Peringatan Khusus Batch 4

Berdasarkan pengalaman Batch 1–3, banyak syntax error akibat **quote mismatch** saat merombak string yang mengandung HTML dengan atribut `class="..."`.

**Setiap Builder WAJIB:**
1. String HTML dibuka dan ditutup dengan kutip yang SAMA.
2. Setelah edit satu file, periksa kembali tanda kutip.
3. Setelah SEMUA file selesai, jalankan `npm run build`.
4. Jika build gagal, perbaiki quote mismatch sebelum melanjutkan.

---

## Chunking Strategy

**Chunk 1: YouTube Pages (8 files)**
- jasa-komen-youtube-aktif.astro
- jasa-live-youtube.astro
- jasa-report-youtube.astro
- jasa-save-video-youtube.astro
- jasa-subscribe-youtube.astro
- jual-jasa-view-youtube.astro
- like-komentar-youtube.astro
- like-youtube.astro

**Chunk 2: LinkedIn Pages (2 files)**
- like-komentar-linkedin.astro
- like-linkedin.astro

---

## Acceptance Criteria

- [ ] Semua 10 halaman memiliki title 55–65 karakter
- [ ] Semua 10 halaman memiliki description 150–160 karakter
- [ ] H1 setiap halaman mengandung keyword utama dan spesifik platform
- [ ] Tidak ada pola heading template seperti "FAQ Layanan", "Dampak Positif", "Nilai Lebih", "Ubah Wajah", "Mengenal Strategi" yang identik antar halaman
- [ ] Tidak ada duplikasi paragraf antar halaman
- [ ] Harga (p1Harga–p4Harga) tidak berubah dari nilai asli
- [ ] Semua variabel data object tetap ada dan struktur tidak berubah
- [ ] `npm run build` berhasil tanpa error
- [ ] Tidak ada kata terlarung
- [ ] Tidak ada quote mismatch / unterminated string literal
- [ ] Keyword hasil riset disisipkan secara natural
- [ ] **Tidak ada commit atau push ke GitHub**

---

## Test Strategy

1. Jalankan `npm run build`.
2. Verifikasi tidak ada error.
3. Cek sample output HTML di `dist/` untuk memastikan meta title/description terupdate.
4. Cek harga di output HTML masih sama dengan asli.
5. Jangan jalankan `git commit` atau `git push`.
