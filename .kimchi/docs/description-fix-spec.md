# Spec: Penyempurnaan Meta Description 3 Halaman

**Goal:** Menambahkan meta description yang profesional, elegan, dan spesifik untuk 3 halaman yang sebelumnya menggunakan fallback description dari `DefaultLayout`.

**Scope:**
- `src/pages/kontak.astro`
- `src/pages/tentang-kami.astro`
- `src/pages/404.astro`

**Tidak dalam scope:**
- Mengubah title, keywords, atau konten halaman.
- Mengubah schema JSON-LD yang sudah ada.

---

## Deskripsi yang Diusulkan

### 1. `src/pages/kontak.astro`

```astro
const description = "Hubungi JasaLike untuk konsultasi optimasi media sosial. Tim ahli kami siap membantu strategi engagement, kredibilitas brand, dan pertumbuhan bisnis Anda.";
```

- Panjang: ±153 karakter
- Tone: profesional, informatif, mengajak konsultasi
- Keyword: JasaLike, optimasi media sosial, engagement, kredibilitas brand

### 2. `src/pages/tentang-kami.astro`

```astro
const description = "Kenali JasaLike, mitra optimasi media sosial di Indonesia. Kami membantu brand membangun otoritas digital, engagement berkualitas, dan konversi berkelanjutan.";
```

- Panjang: ±156 karakter
- Tone: elegan, membangun trust, value-oriented
- Keyword: JasaLike, optimasi media sosial, Indonesia, otoritas digital

### 3. `src/pages/404.astro`

```astro
const description = "Halaman yang Anda cari tidak ditemukan. Kembali ke beranda JasaLike untuk menemukan layanan optimasi media sosial yang sesuai dengan kebutuhan Anda.";
```

- Panjang: ±146 karakter
- Tone: ramah, membantu, tetap mengarahkan ke layanan
- Keyword: JasaLike, optimasi media sosial

---

## Instruksi Implementasi

Untuk masing-masing 3 file:

1. Tambahkan variabel `const description = "..."` di frontmatter, setelah `const keywords = "..."`.
2. Ubah pemanggilan `<DefaultLayout ...>` agar meneruskan prop `description={description}`.
3. Pastikan `title` dan `keywords` yang sudah ada tidak berubah.

Contoh pola untuk `kontak.astro`:

```astro
const keywords = "kontak jasalike, hubungi admin jasalike, layanan optimasi sosial media, konsultasi jasa like, nomor whatsapp jasalike";
const description = "Hubungi JasaLike untuk konsultasi optimasi media sosial. Tim ahli kami siap membantu strategi engagement, kredibilitas brand, dan pertumbuhan bisnis Anda.";
```

```astro
<DefaultLayout title="Hubungi Kami | JasaLike - Layanan B2B & Konsultasi" description={description} keywords={keywords}>
```

---

## Acceptance Criteria

- [ ] `kontak.astro` memiliki `const description` dan meneruskannya ke `DefaultLayout`.
- [ ] `tentang-kami.astro` memiliki `const description` dan meneruskannya ke `DefaultLayout`.
- [ ] `404.astro` memiliki `const description` dan meneruskannya ke `DefaultLayout`.
- [ ] Panjang masing-masing description antara 145–160 karakter.
- [ ] Tidak ada kata terlarang: Bot, Panel, Spam, Murah Sejagat, 1000% Aman, Dijamin Viral, Abal-abal, Manipulasi, Hack, Eksploit, Password, Tanpa Password, Tanpa Login, Server SMM, Fake Engagement.
- [ ] `npm run build` berhasil tanpa error.
- [ ] Output HTML `dist/kontak/index.html`, `dist/tentang-kami/index.html`, dan `dist/404/index.html` memiliki `<meta name="description" content="...">` dengan nilai yang sesuai.

---

## Test Strategy

1. Jalankan `npm run build`.
2. Cek output HTML di `dist/` untuk 3 halaman target.
3. Verifikasi meta description muncul dengan nilai yang benar.
4. Jalankan `git diff` untuk memastikan hanya 3 file target yang berubah.
