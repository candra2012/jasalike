# Audit SEO JasaLike — Temuan & Rekomendasi Kenaikan GSC

**Tanggal Audit:** 26 Juni 2026  
**Domain:** https://jasalike.com  
**Framework:** Astro 5.x + Tailwind CSS 4.x  
**Total Halaman Landing:** ±76 file `.astro` di `src/pages/`

---

## Ringkasan Eksekutif

Secara teknis, website sudah memiliki fondasi SEO yang cukup kuat:

- ✅ Semua halaman memakai `DefaultLayout` dengan `<title>` dan `<meta name="description">`.
- ✅ Struktur URL bersih, lowercase, pakai hyphen.
- ✅ Schema JSON-LD (Product / Breadcrumb / FAQPage) sudah tersebar di hampir semua halaman.
- ✅ Open Graph dan Twitter Card sudah ada.
- ✅ `@astrojs/sitemap` sudah terpasang dan `robots.txt` sudah ada.

Namun, ada **beberapa celah teknis yang bisa menyebabkan penurunan di Google Search Console (GSC)**, terutama soal **canonical tidak konsisten**, **kekurangan file teknis**, dan **beberapa halaman tanpa keywords**. Berikut temuan lengkap dan prioritas perbaikannya.

---

## Prioritas Tinggi (Perbaiki Segera)

### 1. Canonical URL Tidak Stabil karena Mengikuti `Astro.url`

**File:** `src/components/SEO.astro`  
**Baris:** `<link rel="canonical" href={Astro.url} />`

**Masalah:**  
`Astro.url` merekam URL lengkap termasuk query parameter. Karena website Anda memiliki fitur affiliate (`?ref=xxx`), Google bisa mengindeks banyak versi URL yang sama:

```
https://jasalike.com/like-instagram/
https://jasalike.com/like-instagram/?ref=abc123
https://jasalike.com/like-instagram/?ref=xyz789
```

Meskipun canonical sama, parameter yang berubah-ubah bisa membuat Google ragu, terutama jika banyak backlink masuk dengan parameter berbeda. Ini sering terkait dengan penurunan di GSC.

**Rekomendasi:**  
Buat canonical bersih tanpa query string dan trailing slash konsisten:

```astro
const canonical = new URL(Astro.url.pathname, Astro.site).href
```

Kemudian:

```astro
<link rel="canonical" href={canonical} />
<meta property="og:url" content={canonical} />
<meta property="twitter:url" content={canonical} />
```

---

### 2. Belum Ada `site.webmanifest` / `manifest.json`

**File yang hilang:** `public/manifest.json` atau `public/site.webmanifest`

**Masalah:**  
Google menggunakan PWA manifest sebagai sinyal trust dan informasi brand. Tanpa file ini, website kehilangan peluang:

- Ikon yang muncul di hasil pencarian mobile / bookmark.
- Informasi `theme_color`, `background_color`, dan `short_name`.
- Sinyal PWA yang menjadi faktor minor kualitas teknis.

**Rekomendasi:**  
Buat `public/site.webmanifest`:

```json
{
  "name": "JasaLike by Auradigital",
  "short_name": "JasaLike",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0B1121",
  "theme_color": "#2563EB",
  "icons": [
    { "src": "/favicon.svg", "sizes": "any", "type": "image/svg+xml" }
  ]
}
```

Dan tambahkan di `DefaultLayout.astro`:

```html
<link rel="manifest" href="/site.webmanifest" />
```

---

### 3. Favicon Hanya SVG

**File yang ada:** `public/favicon.svg`

**Masalah:**  
Beberapa platform (iOS Safari, Google Search result icons, Android Chrome, Slack preview) tidak selalu menampilkan SVG favicon dengan baik. Idealnya ada versi PNG 180×180, 192×192, 512×512.

**Rekomendasi:**  
Tambahkan fallback PNG:

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
```

---

### 4. Delapan Halaman Tidak Mengirim `keywords`

**File yang terdeteksi tanpa `keywords`:**

- `src/pages/404.astro`
- `src/pages/admin-vote.astro`
- `src/pages/kontak-admin.astro`
- `src/pages/kontak.astro`
- `src/pages/layanan.astro`
- `src/pages/privacy.astro`
- `src/pages/tentang-kami.astro`
- `src/pages/terms.astro`

**Masalah:**  
Meskipun meta keywords tidak lagi menjadi faktor ranking utama, halaman tanpa keywords bisa menjadi sinyal bahwa halaman belum dioptimalkan sepenuhnya. Yang lebih penting: beberapa di antaranya adalah **halaman trust** (privacy, terms, tentang-kami, kontak) yang seharusnya mendukung E-E-A-T.

**Rekomendasi:**  
Tambahkan `keywords` props pada `DefaultLayout` untuk setiap halaman tersebut.

---

## Prioritas Menengah

### 5. robots.txt Terlalu Minimalis

**File:** `public/robots.txt`

**Isi saat ini:**

```
User-agent: *
Allow: /

Sitemap: https://jasalike.com/sitemap-index.xml
```

**Masalah:**  
Tidak ada `Host` directive, tidak ada rule untuk crawler spesifik, dan tidak ada penanganan halaman backend seperti `/dashboard/`, `/admin-vote/`, `/affiliate-jasalike/`.

**Rekomendasi:**

```
User-agent: *
Allow: /
Disallow: /dashboard/
Disallow: /admin-vote/
Disallow: /affiliate-jasalike/

Host: https://jasalike.com

Sitemap: https://jasalike.com/sitemap-index.xml
```

---

### 6. `sitemap()` Default Tanpa Konfigurasi

**File:** `astro.config.mjs`  
**Baris:** `sitemap()`

**Masalah:**  
Integrasi sitemap memakai konfigurasi default. Artinya:

- Semua halaman masuk sitemap, termasuk yang seharusnya tidak diindeks seperti `/dashboard/`, `/admin-vote/`.
- Tidak ada prioritas atau changefreq yang dibedakan antara homepage dan halaman layanan.
- `trailingSlash: 'ignore'` bisa menghasilkan URL yang tidak konsisten antara sitemap dan canonical.

**Rekomendasi:**  
Konfigurasi sitemap lebih spesifik:

```js
sitemap({
  filter: (page) =>
    !page.includes('/dashboard/') &&
    !page.includes('/admin-vote/') &&
    !page.includes('/affiliate-jasalike/') &&
    !page.includes('/404/'),
  changefreq: 'weekly',
  priority: 0.7,
  lastmod: new Date(),
  serialize(item) {
    if (item.url === 'https://jasalike.com/') {
      item.priority = 1.0
      item.changefreq = 'weekly'
    }
    return item
  },
})
```

Dan ubah `trailingSlash` menjadi `'always'` atau `'never'` agar URL konsisten di seluruh website:

```js
trailingSlash: 'always'
```

---

### 7. Schema `Product` Menggunakan AggregateRating yang Sama di Semua Halaman

**Temuan:**  
Banyak halaman service menggunakan rating identik:

```json
"aggregateRating": {
  "ratingValue": "4.9",
  "bestRating": "5",
  "worstRating": "1",
  "ratingCount": "1250"
}
```

**Masalah:**  
Google bisa menganggap ini manipulatif jika rating palsu atau sama persis di puluhan halaman berbeda. Ini berisiko menyebabkan **manual action** atau penalti algoritma.

**Rekomendasi:**  
Gunakan data rating real dari platform review (Google Business, Trustpilot, atau testimoni). Jika belum ada, hapus `aggregateRating` sementara atau gunakan hanya di homepage dengan data yang benar.

---

### 8. Meta Description Beberapa Halaman Kemungkinan Terlalu Pendek

**Contoh:**

- `admin-vote.astro`: "Halaman kontak resmi JasaLike untuk konsultasi layanan dan bantuan operasional." (±88 karakter)
- `kontak-admin.astro`: sama seperti admin-vote.
- `dashboard.astro`: "Pantau komisi, riwayat transaksi, dan cairkan pendapatan Anda."

**Rekomendasi:**  
Perluas meta description ke 150–160 karakter dengan menyertakan keyword utama dan value proposition.

---

## Prioritas Rendah / Optimasi Lanjutan

### 9. `prefetchAll: true` Bisa Membebani Mobile

**File:** `astro.config.mjs`

```js
prefetch: {
  prefetchAll: true,
  defaultStrategy: 'hover'
}
```

**Catatan:**  
Hover prefetch di desktop bagus, tapi di mobile bisa memicu banyak request saat scroll. Pertimbangkan untuk membatasi prefetch hanya ke internal link prioritas, atau gunakan `defaultStrategy: 'tap'` untuk mobile.

**Rekomendasi alternatif:**

```js
prefetch: {
  prefetchAll: true,
  defaultStrategy: 'hover'
}
```

Biarkan saja, tapi pantau Core Web Vitals di GSC. Jika LCP/FID menurun, barulah diubah.

---

### 10. Inline Script Tracking Mengandung URL Hardcoded

**File:** `src/layouts/DefaultLayout.astro`

**Temuan:**  
Ada script inline yang mengirim data ke Google Apps Script webhook. Script ini berjalan di semua halaman dan bisa memengaruhi CLS/LCP jika blocking.

**Rekomendasi:**  
Pastikan script tersebut:

- Pakai `defer` atau `async` jika memungkinkan.
- Tidak menghalangi proses render awal.
- URL webhook tidak error (cek di browser DevTools Network tab).

---

### 11. Redirect Manual di Config

**File:** `astro.config.mjs`

```js
redirects: {
  '/jasa-like-tiktok-permanen': '/like-tiktok'
}
```

**Catatan:**  
Bagus, tapi periksa apakah halaman lama `/jasa-like-tiktok-permanen` masih ada backlink. Jika ya, redirect sudah tepat.

---

## Rekomendasi Implementasi (Urutan Kerja)

1. **Perbaiki canonical** di `src/components/SEO.astro` agar bersih dari query string.
2. **Tambahkan `site.webmanifest`** dan favicon PNG fallback.
3. **Perbarui `robots.txt`** dengan Disallow untuk halaman backend.
4. **Konfigurasi ulang `@astrojs/sitemap`** agar hanya menyertakan halaman publik.
5. **Tambahkan `keywords`** untuk 8 halaman yang masih kosong.
6. **Perbaiki atau hapus `aggregateRating`** di schema Product agar tidak identik di semua halaman.
7. **Perpanjang meta description** yang masih kurang dari 120 karakter.
8. **Pantau Core Web Vitals** setelah perubahan.

---

## Prediksi Dampak ke GSC

Jika poin 1–6 diimplementasikan dengan benar, kemungkinan besar akan terjadi:

- Penurunan URL duplikat / alternate di GSC.
- Indexing menjadi lebih bersih dan cepat.
- Peningkatan sinyal E-E-A-T melalui halaman trust yang lebih lengkap.
- Risiko penalti schema markup berkurang.

> ⚠️ **Catatan penting:** Penurunan ranking di GSC bisa juga disebabkan oleh faktor eksternal seperti algoritma update, kompetitor, atau backlink berkurang. Perbaikan teknis di atas adalah fondasi agar website siap naik kembali, bukan jaminan instan.

---

## File-file Kunci yang Perlu Diubah

| File | Perubahan |
|------|-----------|
| `src/components/SEO.astro` | Canonical bersih dari query string |
| `public/site.webmanifest` | Buat baru |
| `public/robots.txt` | Tambah Disallow dan Host |
| `astro.config.mjs` | Konfigurasi sitemap & trailingSlash |
| `src/layouts/DefaultLayout.astro` | Link manifest + favicon PNG fallback |
| `src/pages/404.astro` | Tambah keywords (opsional, halaman error) |
| `src/pages/admin-vote.astro` | Tambah keywords / noindex |
| `src/pages/kontak-admin.astro` | Tambah keywords / noindex |
| `src/pages/kontak.astro` | Tambah keywords |
| `src/pages/layanan.astro` | Tambah keywords |
| `src/pages/privacy.astro` | Tambah keywords |
| `src/pages/tentang-kami.astro` | Tambah keywords |
| `src/pages/terms.astro` | Tambah keywords |
| Semua halaman service | Perbaiki aggregateRating schema |
