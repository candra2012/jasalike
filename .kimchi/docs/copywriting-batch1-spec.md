# Spec: Perombakan Copywriting Halaman Layanan Instagram & TikTok

**Goal:** Merombak seluruh teks SEO dan copywriting di 17 halaman layanan Instagram dan TikTok agar unik, natural, berbasis long-tail keyword, dan mengundang klik.

**Scope:** Hanya perombakan teks/copywriting. Tidak mengubah struktur komponen, harga, gambar, atau schema markup.

---

## Daftar Halaman yang Dirombak

### Instagram (8 halaman)
1. `src/pages/like-instagram.astro`
2. `src/pages/like-komentar-instagram.astro`
3. `src/pages/jasa-komen-instagram.astro`
4. `src/pages/jasa-save-instagram.astro`
5. `src/pages/jasa-share-instagram.astro`
6. `src/pages/jasa-tambah-follower.astro`
7. `src/pages/jasa-tambah-view.astro`
8. `src/pages/jasa-vote-ig-private.astro`

### TikTok (9 halaman)
1. `src/pages/like-tiktok.astro`
2. `src/pages/like-komentar-tiktok.astro`
3. `src/pages/jasa-komentar-tiktok.astro`
4. `src/pages/jasa-repost-tiktok.astro`
5. `src/pages/jasa-save-video-tiktok.astro`
6. `src/pages/jasa-share-video-tiktok.astro`
7. `src/pages/jasa-tambah-follower-tiktok.astro`
8. `src/pages/jasa-tambah-view-tiktok.astro`
9. `src/pages/jasa-livestreaming-tiktok.astro`

---

## Struktur Data yang Wajib Dirombak

Setiap halaman layanan memiliki objek data berikut yang semuanya harus dirombak teksnya:

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

> **PENTING:** Hanya teks string yang dirombak. Jangan ubah nama variabel, struktur object, path gambar, link WhatsApp, harga, label ("TERLARIS", "REKOMENDASI"), warna class (`text-pink-600`, `text-blue-500`, dll), atau HTML tags.

---

## Aturan Copywriting

### 1. Meta Title
- Panjang: **55–65 karakter**
- Mengandung keyword utama + long-tail keyword
- Elegan, profesional, mengundang klik
- Hindari: "Terpercaya & Aman" yang identik antar halaman

**Contoh Instagram Like:**
- Buruk: "Jasa Like Instagram Terpercaya & Aman - JasaLike" (48 kar, boilerplate)
- Baik: "Jasa Like Instagram Reels & Feed: Dongkrak Interaksi Organik" (58 kar)

**Contoh TikTok Like:**
- Buruk: "Jasa Like TikTok Terpercaya Untuk Video FYP & Engagement"
- Baik: "Jasa Like TikTok FYP: Percepat Viral Video & Live Shopping" (58 kar)

### 2. Meta Description
- Panjang: **150–160 karakter**
- Mengandung keyword utama, long-tail, dan value proposition
- Mengundang klik tanpa clickbait kasar
- Hindari kalimat generik "proses cepat, aman, dan bergaransi"

**Contoh Instagram Like:**
> "Tingkatkan interaksi Reels dan Feed Instagram dengan jasa like yang dirancang untuk memicu algoritma Explore. Cukup kirim link, tanpa password, hasil natural." (159 kar)

**Contoh TikTok Komentar:**
> "Bangun diskusi organik di video TikTok dengan jasa komentar FYP yang relevan. Komentar custom sesuai niche, aman, dan membantu video mendapat perhatian lebih." (160 kar)

### 3. H1 (Hero `judulUtama`)
- Satu H1 per halaman
- Mengandung keyword utama secara natural
- Spesifik untuk platform dan jenis layanan
- Boleh ada `<br class="hidden md:block"/>` dan `<span>` untuk styling

**Contoh:**
- Buruk: `<span class="text-pink-600">Jasa Like Instagram</span> Terpercaya & Aman`
- Baik: `<span class="text-pink-600">Jasa Like Instagram</span> untuk Reels yang Rajin Muncul di Explore`
- Baik TikTok: `<span class="text-blue-500">Jasa Komentar TikTok</span> yang Membuat Video FYP Lebih Ramai`

### 4. H2 Section Headings
Hapus semua pola template. Gunakan sudut pandang spesifik audiens platform.

**Pola template yang DILARANG (ganti dengan variasi unik):**

| Template Lama | Rekomendasi Baru (Instagram) | Rekomendasi Baru (TikTok) |
|---|---|---|
| FAQ Layanan ... | Pertanyaan yang Sering Muncul Seputar ... | Hal yang Sering Ditanyakan Kreator TikTok |
| Dampak Positif ... | Mengapa Akun Instagram Anda Butuh ... | Manfaat Nyata Bagi Video TikTok Anda |
| Kendala ... / Masalah ... | Masalah yang Bikin Postingan Instagram Sepi | Kendala Video TikTok yang Sering Dialami Seller |
| Nilai Lebih ... | Keunggulan yang Bikin ... Berbeda | Mengguna Mempercayakan Video TikTok-nya pada ... |
| Mengenal Strategi ... / Apa Itu ... | Cara Kerja ... yang Aman untuk Akun Anda | Apa Sebenarnya ... dan Bagaimana Cara Kerjanya |
| Mengapa Memilih ... | Alasan Brand Indonesia Memilih ... | Kenapa Kreator TikTok Butuh Layanan Ini |
| Prosedur Mudah ... / Alur Cepat ... | Cara Order ... Tanpa Ribet | Panduan Pesan ... untuk Pemula |
| Solusi Tepat ... | Strategi ... Agar Konten Lebih Terasa Hidup | Solusi ... agar Video Tidak Tenggelam |
| Ubah Wajah ... | Waktunya Membuat Profil Instagram Lebih Meyakinkan | Saatnya Video TikTok Anda Dilihat Lebih Banyak Orang |

### 5. H3 Item Headings
Setiap H3 (ms1Teks, k1Judul, m1Judul, mk1Judul, sol1Judul, co1Judul, faq1Judul) harus:
- Berbeda antar halaman
- Mengandung long-tail keyword jika memungkinkan
- Menggunakan sudut pandang psikologi pengguna platform

**Contoh Instagram Like H3:**
- "Reels Baru Upload Langsung Sepi Like"
- "Akun Bisnis Instagram Kurang Terlihat Kredibel"
- "Konten Bagus Tapi Gagal Masuk Halaman Explore"
- "Kompetitor Sudah Ribuan Like, Anda Masih Puluhan"

**Contoh TikTok Komentar H3:**
- "Video FYP Stuck di View Rendah karena Kolom Komentar Sepi"
- "Live Shopping TikTok Butuh Bukti Sosial dari Pembeli"
- "Komentar Generik Bikin Audiens Curiga Akun Bot"
- "Kreator TikTok Baru Susah Dapat Interaksi Pertama"

### 6. Body Copy
- Paragraf pendek, kalimat sederhana
- Gunakan bahasa Indonesia formal tapi tidak kaku
- Hindari kata terlarung: Bot, Panel, Spam, Murah Sejagat, 1000% Aman, Dijamin Viral, Abal-abal, Manipulasi, Hack, Eksploit, Password, Tanpa Password, Tanpa Login, Server SMM, Fake Engagement
- Setiap halaman punya sudut pandang berbeda
- Jangan duplikat paragraf antar halaman

### 7. Keywords
Pertahankan variabel `keywords` dan update dengan keyword yang relevan. Panjang bebas, fokus pada long-tail.

---

## Contoh Rombakan Lengkap (like-instagram.astro)

### SEO
```astro
const title = "Jasa Like Instagram Reels & Feed: Dongkrak Interaksi Organik";
const description = "Tingkatkan interaksi Reels dan Feed Instagram dengan jasa like yang dirancang untuk memicu algoritma Explore. Cukup kirim link, tanpa password, hasil natural.";
const keywords = "jasa like instagram, jasa like reels, tambah like instagram, jasa like ig explore, like instagram organik";
```

### Hero
```astro
const dataHero = {
  tipe: "service",
  labelTeks: "Layanan Optimasi Instagram",
  labelIcon: "lucide:instagram",
  judulUtama: '<span class="text-pink-600">Jasa Like Instagram</span> untuk Reels yang Rajin Muncul di Explore',
  deskripsi: "Reels dan foto Anda layak dilihat lebih banyak orang. Kami membantu memberikan sinyal interaksi awal yang dibutuhkan algoritma Instagram agar konten bergerak ke Explore dan halaman pencarian. Semua proses berjalan dari luar, tanpa akses akun, hanya dengan link postingan.",
  // ... teksTombol, gambarHero tetap
};
```

### Masalah
```astro
const dataMasalah = {
  judulUtama: 'Kapan Postingan Instagram Anda Bisa Dilihat Lebih Banyak Orang?',
  deskripsiUtama: "Banyak kreator dan bisnis di Indonesia stuck di fase awal: konten sudah bagus, tapi interaksi tidak bergerak. Berikut kendala yang paling sering menghambat:",
  ms1Teks: '<strong class="text-pink-600 font-bold">Reels Baru Upload Langsung Sepi Like:</strong> Padahal konten sudah estetik, tapi notifikasi interaksi hampir tidak berbunyi dalam jam-jam pertama.',
  ms2Teks: '<strong class="text-pink-600 font-bold">Akun Bisnis Kurang Terlihat Kredibel:</strong> Calon pembeli ragu saat melihat produk yang dijual hanya memiliki puluhan like.',
  ms3Teks: '<strong class="text-pink-600 font-bold">Konten Gagal Masuk Explore:</strong> Algoritma Instagram membutuhkan sinyal awal untuk menyebarkan konten, tapi Anda belum punya momentum tersebut.',
  ms4Teks: '<strong class="text-pink-600 font-bold">Kompetitor Sudah Ribuan Like:</strong> Produk serupa tampil lebih menonjol hanya karena interaksi awalnya lebih kuat.'
};
```

### Apa Itu
```astro
const dataApaItu = {
  judulUtama: 'Cara Kerja <span class="text-pink-600">Jasa Like Instagram</span> yang Aman',
  deskripsiUtama: "Layanan ini memberikan dorongan interaksi awal pada postingan Feed atau Reels Anda agar algoritma lebih cepat mengenali sinyal kualitas konten.",
  k1Judul: "Sinyal Awal untuk Algoritma Explore",
  k1Teks: "Like bukan sekadar angka. Di mata Instagram, interaksi awal adalah indikasi bahwa konten layak disebarluaskan ke beranda pengguna lain.",
  k2Judul: "Privasi Tetap Terjaga",
  k2Teks: "Kami hanya membutuhkan tautan postingan publik Anda. Tidak ada proses login, tidak ada akses akun, dan tidak ada risiko kebocoran data."
};
```

(Dan seterusnya untuk Manfaat, Mengapa Memilih, Solusi, Cara Order, FAQ)

---

## Chunking Strategy

**Chunk 1: Instagram Pages (8 files)**
- like-instagram.astro
- like-komentar-instagram.astro
- jasa-komen-instagram.astro
- jasa-save-instagram.astro
- jasa-share-instagram.astro
- jasa-tambah-follower.astro
- jasa-tambah-view.astro
- jasa-vote-ig-private.astro

**Chunk 2: TikTok Pages (9 files)**
- like-tiktok.astro
- like-komentar-tiktok.astro
- jasa-komentar-tiktok.astro
- jasa-repost-tiktok.astro
- jasa-save-video-tiktok.astro
- jasa-share-video-tiktok.astro
- jasa-tambah-follower-tiktok.astro
- jasa-tambah-view-tiktok.astro
- jasa-livestreaming-tiktok.astro

---

## Acceptance Criteria

- [ ] Semua 17 halaman memiliki title 55–65 karakter
- [ ] Semua 17 halaman memiliki description 150–160 karakter
- [ ] H1 setiap halaman mengandung keyword utama dan spesifik platform
- [ ] Tidak ada pola heading template seperti "FAQ Layanan", "Dampak Positif", "Nilai Lebih", "Ubah Wajah", "Mengenal Strategi" yang identik antar halaman
- [ ] Tidak ada duplikasi paragraf antar halaman
- [ ] Harga (p1Harga–p4Harga) tidak berubah dari nilai asli
- [ ] Semua variabel data object tetap ada dan struktur tidak berubah
- [ ] `npm run build` berhasil tanpa error
- [ ] Tidak ada kata terlarung

---

## Test Strategy

1. Jalankan `npm run build`.
2. Verifikasi tidak ada error.
3. Cek sample output HTML di `dist/` untuk memastikan meta title/description terupdate.
4. Cek harga di output HTML masih sama dengan asli.
