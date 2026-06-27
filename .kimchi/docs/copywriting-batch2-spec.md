# Spec: Perombakan Copywriting Halaman Layanan Facebook & Shopee

**Goal:** Merombak seluruh teks SEO dan copywriting di 16 halaman layanan Facebook dan Shopee agar unik, natural, berbasis long-tail keyword, dan mengundang klik.

**Scope:** Hanya perombakan teks/copywriting. Tidak mengubah struktur komponen, harga, gambar, atau schema markup.

---

## Daftar Halaman yang Dirombak

### Facebook (8 halaman)
1. `src/pages/like-facebook.astro`
2. `src/pages/like-komentar-facebook.astro`
3. `src/pages/jasa-live-facebook.astro`
4. `src/pages/jasa-polling-facebook.astro`
5. `src/pages/jasa-share-facebook.astro`
6. `src/pages/jasa-tambah-follower-facebook.astro`
7. `src/pages/jasa-tambah-komentar-facebook.astro`
8. `src/pages/jasa-tambah-view-facebook.astro`

### Shopee (8 halaman)
1. `src/pages/jasa-fake-order-shopee.astro`
2. `src/pages/jasa-komen-live-shopee.astro`
3. `src/pages/jasa-live-shopee.astro`
4. `src/pages/jasa-report-toko-shopee.astro`
5. `src/pages/jasa-tambah-follower-shopee.astro`
6. `src/pages/jasa-tambah-komen-shopee.astro`
7. `src/pages/jasa-view-video-shopee.astro`
8. `src/pages/jasa-vote-produk-shopee.astro`

---

## Struktur Data yang Wajib Dirombak

Sama dengan Batch 1:
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

## Aturan Copywriting (Sama dengan Batch 1)

### 1. Meta Title
- Panjang: **55–65 karakter**
- Mengandung keyword utama + long-tail keyword
- Elegan, profesional, mengundang klik

**Contoh Facebook Like:**
- Baik: "Jasa Like Facebook Postingan: Tingkatkan Interaksi Fanpage" (57 kar)

**Contoh Shopee Follower:**
- Baik: "Jasa Follower Toko Shopee: Bangun Kepercayaan Pembeli" (58 kar)

### 2. Meta Description
- Panjang: **150–160 karakter**
- Mengandung keyword utama, long-tail, dan value proposition
- Mengundang klik tanpa clickbait kasar

**Contoh Facebook Komentar:**
> "Optimasi kolom komentar Facebook dengan jasa komentar yang relevan dan natural. Tingkatkan diskusi di postingan fanpage dan grup Anda." (155 kar)

**Contoh Shopee Live:**
> "Ramaikan sesi live Shopee Anda dengan viewers aktif. Meningkatkan interaksi, trust, dan konversi penjualan selama siaran langsung." (153 kar)

### 3. H1 (Hero `judulUtama`)
- Satu H1 per halaman
- Mengandung keyword utama secara natural
- Spesifik untuk platform dan jenis layanan

**Contoh:**
- Baik Facebook: `<span class="text-blue-600">Jasa Like Facebook</span> untuk Postingan yang Lebih Sering Muncul di Beranda`
- Baik Shopee: `<span class="text-orange-500">Jasa View Video Shopee</span> agar Produk Lebih Sering Direkomendasikan`

### 4. H2 Section Headings
Hapus semua pola template. Gunakan sudut pandang spesifik audiens platform.

| Template Lama | Rekomendasi Baru (Facebook) | Rekomendasi Baru (Shopee) |
|---|---|---|
| FAQ Layanan... | Pertanyaan yang Sering Diajukan Pengelola Fanpage | Hal yang Sering Ditanyakan Seller Shopee |
| Dampak Positif... | Keuntungan yang Dirasakan Admin Fanpage | Manfaat Nyata Bagi Toko Shopee Anda |
| Kendala... | Hambatan Membangun Interaksi di Facebook | Masalah yang Bikin Produk Shopee Sepi |
| Nilai Lebih... | Mengapa Layanan Ini Cocok untuk Brand Facebook | Keunggulan yang Dibutuhkan Seller Shopee |
| Mengenal Strategi... | Cara Kerja Layanan ini untuk Akun Facebook Anda | Apa Itu ... dan Bagaimana Cara Kerjanya |
| Mengapa Memilih... | Alasan Menggunakan Layanan Facebook Kami | Kenapa Seller Shopee Mempercayakan Tokonya |
| Prosedur Mudah... | Panduan Pesan ... Tanpa Ribet | Cara Mudah Order ... untuk Pemula |
| Solusi Tepat... | Strategi ... agar Konten Lebih Terasa Hidup | Solusi ... agar Produk Tidak Tenggelam |
| Ubah Wajah... | Saatnya Fanpage Anda Tampil Lebih Meyakinkan | Waktunya Toko Shopee Anda Dilihat Lebih Banyak |

### 5. H3 Item Headings
Setiap H3 harus berbeda antar halaman dan mengandung long-tail keyword jika memungkinkan.

**Contoh Facebook Like H3:**
- "Postingan Fanpage Baru Upload Langsung Sepi Reaksi"
- "Rasio Engagement Halaman Facebook Terus Menurun"
- "Konten Promosi Tidak Sampai ke Audiens Potensial"
- "Kompetitor Sudah Ribuan Like, Anda Masih Puluhan"

**Contoh Shopee Live H3:**
- "Sesi Live Shopee Sepi Penonton Sejak Menit Pertama"
- "Produk di Live Tidak Bisa Laku karena Kurang Interaksi"
- "Live Shopping Kalah Saing dengan Toko Besar"
- "Viewer Live Tidak Bertanya dan Tidak Check-out"

### 6. Body Copy
- Paragraf pendek, kalimat sederhana
- Bahasa Indonesia formal tapi tidak kaku
- Hindari kata terlarung: Bot, Panel, Spam, Murah Sejagat, 1000% Aman, Dijamin Viral, Abal-abal, Manipulasi, Hack, Eksploit, Password, Tanpa Password, Tanpa Login, Server SMM, Fake Engagement
- Setiap halaman punya sudut pandang berbeda
- Jangan duplikat paragraf antar halaman

### 7. Keywords
Pertahankan variabel `keywords` dan update dengan keyword yang relevan. Fokus pada long-tail.

---

## Peringatan Khusus Batch 2

Berdasarkan pengalaman Batch 1, banyak syntax error akibat **quote mismatch** saat merombak string yang mengandung HTML dengan atribut `class="..."`. String tersebut sering dibuka dengan `'` dan ditutup dengan `"` secara tidak sengaja.

**Contoh salah:**
```astro
ms1Teks: '<strong class="text-blue-600">...</strong>",
```

**Contoh benar:**
```astro
ms1Teks: '<strong class="text-blue-600">...</strong>',
```

**Setiap Builder WAJIB:**
1. Setelah edit satu file, jalankan `npm run build`.
2. Jika build gagal dengan "Unterminated string literal", perbaiki quote mismatch di file tersebut sebelum lanjut ke file berikutnya.
3. Pastikan semua string yang mengandung HTML dengan `class="..."` dibuka dan ditutup dengan jenis kutip yang sama.

---

## Chunking Strategy

**Chunk 1: Facebook Pages (8 files)**
- like-facebook.astro
- like-komentar-facebook.astro
- jasa-live-facebook.astro
- jasa-polling-facebook.astro
- jasa-share-facebook.astro
- jasa-tambah-follower-facebook.astro
- jasa-tambah-komentar-facebook.astro
- jasa-tambah-view-facebook.astro

**Chunk 2: Shopee Pages (8 files)**
- jasa-fake-order-shopee.astro
- jasa-komen-live-shopee.astro
- jasa-live-shopee.astro
- jasa-report-toko-shopee.astro
- jasa-tambah-follower-shopee.astro
- jasa-tambah-komen-shopee.astro
- jasa-view-video-shopee.astro
- jasa-vote-produk-shopee.astro

---

## Acceptance Criteria

- [ ] Semua 16 halaman memiliki title 55–65 karakter
- [ ] Semua 16 halaman memiliki description 150–160 karakter
- [ ] H1 setiap halaman mengandung keyword utama dan spesifik platform
- [ ] Tidak ada pola heading template seperti "FAQ Layanan", "Dampak Positif", "Nilai Lebih", "Ubah Wajah", "Mengenal Strategi" yang identik antar halaman
- [ ] Tidak ada duplikasi paragraf antar halaman
- [ ] Harga (p1Harga–p4Harga) tidak berubah dari nilai asli
- [ ] Semua variabel data object tetap ada dan struktur tidak berubah
- [ ] `npm run build` berhasil tanpa error
- [ ] Tidak ada kata terlarung
- [ ] Tidak ada quote mismatch / unterminated string literal

---

## Test Strategy

1. Jalankan `npm run build`.
2. Verifikasi tidak ada error.
3. Cek sample output HTML di `dist/` untuk memastikan meta title/description terupdate.
4. Cek harga di output HTML masih sama dengan asli.
