# Spec: Perombakan Copywriting Halaman Layanan Telegram & Twitter/X

**Goal:** Merombak seluruh teks SEO dan copywriting di 10 halaman layanan Telegram dan Twitter/X agar unik, natural, berbasis long-tail keyword hasil riset, dan mengundang klik.

**Scope:** Hanya perombakan teks/copywriting. Tidak mengubah struktur komponen, harga, gambar, atau schema markup.

---

## Hasil Riset Keyword

### Telegram (berdasarkan web search)
- jasa tambah member telegram
- beli member channel telegram
- tambah views telegram
- jasa view telegram
- jasa reaction telegram
- jasa polling telegram
- jasa komentar telegram
- jasa invite member telegram
- tambah like postingan telegram
- views postingan telegram
- reaksi emoji telegram
- member channel telegram aktif
- pertumbuhan channel telegram
- komunitas telegram

### Twitter/X (berdasarkan web search)
- jasa trending topik twitter
- jasa trending topik X
- jasa followers twitter
- jasa followers X
- jasa retweet
- jasa like twitter
- jasa komen twitter
- jasa like komentar twitter
- hashtag top twitter
- trending topic Indonesia
- campaign twitter X
- buzzer twitter
- engagement twitter

---

## Daftar Halaman yang Dirombak

### Telegram (6 halaman)
1. `src/pages/jasa-invite-member-telegram.astro`
2. `src/pages/jasa-komentar-telegram.astro`
3. `src/pages/jasa-polling-telegram.astro`
4. `src/pages/jasa-reaction-telegram.astro`
5. `src/pages/jasa-tambah-member-telegram.astro`
6. `src/pages/jasa-view-telegram.astro`

### Twitter/X (4 halaman)
1. `src/pages/jasa-komen-twitter.astro`
2. `src/pages/jasa-tambah-follower-twitter.astro`
3. `src/pages/like-komentar-twitter.astro`
4. `src/pages/like-twitter.astro`

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

**Contoh Telegram Member:**
- Baik: "Jasa Tambah Member Telegram: Bangun Komunitas yang Aktif" (60 kar)

**Contoh Twitter Trending:**
- Baik: "Jasa Trending Topik Twitter: Naikkan Hashtag Campaign Anda" (61 kar)

### 2. Meta Description
- Panjang: **150–160 karakter**
- Mengandung keyword utama, long-tail, dan value proposition
- Mengundang klik tanpa clickbait kasar

**Contoh Telegram View:**
> "Tingkatkan views postingan Telegram Anda dengan layanan tambah view yang bertahap. Membuat pesan di channel terlihat populer dan menarik perhatian audiens baru." (158 kar)

**Contoh Twitter Followers:**
> "Kembangkan akun Twitter/X Anda dengan jasa tambah follower aktif. Membantu profil terlihat kredibel sehingga audiens lebih percaya dengan konten dan brand Anda." (160 kar)

### 3. H1 (Hero `judulUtama`)
- Satu H1 per halaman
- Mengandung keyword utama secara natural
- Spesifik untuk platform dan jenis layanan

**Contoh:**
- Telegram: `<span class="text-blue-500">Jasa Invite Member Telegram</span> untuk Mempercepat Pertumbuhan Channel`
- Twitter: `<span class="text-sky-500">Jasa Like Komentar Twitter</span> agar Balasan Anda Lebih Tervisualisasi`

### 4. H2 Section Headings
Hapus semua pola template. Gunakan sudut pandang spesifik audiens platform.

| Template Lama | Rekomendasi Baru (Telegram) | Rekomendasi Baru (Twitter/X) |
|---|---|---|
| FAQ Layanan... | Hal yang Sering Ditanyakan Pengelola Channel | Pertanyaan Umum Seputar Optimasi Twitter |
| Dampak Positif... | Keuntungan yang Dirasakan Admin Channel | Efek yang Timbul bagi Akun X Anda |
| Kendala... | Hambatan Mengembangkan Channel Telegram | Masalah yang Bikin Tweet Anda Tenggelam |
| Nilai Lebih... | Kenapa Layanan Ini Cocok untuk Channel | Keunggulan untuk Campaign di Twitter |
| Mengenal Strategi... | Memahami Cara Kerja Layanan Telegram | Apa Itu ... dan Bagaimana Prosesnya |
| Mengapa Memilih... | Alasan Channel Mempercayakan Layanan Ini | Menggunakan Layanan X dari Tim Profesional |
| Prosedur Mudah... | Panduan Pesan ... Tanpa Ribet | Alur Pemesanan ... yang Simpel |
| Solusi Tepat... | Strategi ... agar Channel Lebih Hidup | Solusi ... agar Tweet Mencapai Audiens |
| Ubah Wajah... | Saatnya Channel Telegram Anda Tumbuh Lebih Cepat | Waktunya Akun Twitter Anda Tampil Berpengaruh |

### 5. H3 Item Headings
Setiap H3 harus berbeda antar halaman dan mengandung long-tail keyword jika memungkinkan.

**Contoh Telegram Member H3:**
- "Channel Telegram Baru Sulit Mendapatkan Subscriber Organik"
- "Pesan Penting Terlihat Sepi karena Jumlah Member Sedikit"
- "Komunitas Telegram Tidak Aktif Meski Sudah Banyak Posting"
- "Audiens Baru Ragu Bergabung ke Channel yang Masih Sepi"

**Contoh Twitter Trending H3:**
- "Hashtag Campaign Twitter Sulit Mencapai Trending Topic"
- "Tweet Promosi Tenggelam Sebelum Sempat Dilihat Audiens"
- "Konten Viral Tidak Muncul di Kolom Trending X"
- "Brand Awareness Rendah karena Jangkauan Tweet Terbatas"

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

## Peringatan Khusus Batch 3

Berdasarkan pengalaman Batch 1 & 2, banyak syntax error akibat **quote mismatch** saat merombak string yang mengandung HTML dengan atribut `class="..."`.

**Setiap Builder WAJIB:**
1. String HTML dibuka dan ditutup dengan kutip yang SAMA.
2. Setelah edit satu file, periksa kembali tanda kutip.
3. Setelah SEMUA file selesai, jalankan `npm run build`.
4. Jika build gagal, perbaiki quote mismatch sebelum melanjutkan.

---

## Chunking Strategy

**Chunk 1: Telegram Pages (6 files)**
- jasa-invite-member-telegram.astro
- jasa-komentar-telegram.astro
- jasa-polling-telegram.astro
- jasa-reaction-telegram.astro
- jasa-tambah-member-telegram.astro
- jasa-view-telegram.astro

**Chunk 2: Twitter/X Pages (4 files)**
- jasa-komen-twitter.astro
- jasa-tambah-follower-twitter.astro
- like-komentar-twitter.astro
- like-twitter.astro

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

---

## Test Strategy

1. Jalankan `npm run build`.
2. Verifikasi tidak ada error.
3. Cek sample output HTML di `dist/` untuk memastikan meta title/description terupdate.
4. Cek harga di output HTML masih sama dengan asli.
