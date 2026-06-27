# Spec: Perbaikan SEO Teknis JasaLike

**Goal:** Implementasikan 5 perbaikan teknis yang didentifikasi dalam audit SEO GSC agar canonical lebih bersih, file teknis lebih lengkap, sitemap lebih terkontrol, dan metadata halaman trust lebih lengkap.

**Scope:**
1. Perbaiki canonical URL agar selalu bersih dari query parameter (termasuk `?ref=xxx`).
2. Buat file `public/site.webmanifest`.
3. Perbarui `public/robots.txt` dengan `Disallow` untuk halaman backend dan directive `Host`.
4. Konfigurasi ulang `@astrojs/sitemap` di `astro.config.mjs` agar hanya menyertakan halaman publik.
5. Tambahkan prop `keywords` di 8 halaman yang belum memilikinya.

**Tidak dalam scope:**
- Mengubah konten/copywriting halaman.
- Mengubah struktur komponen UI.
- Menambahkan favicon PNG fallback (karena memerlukan asset grafis baru).
- Mengubah schema `aggregateRating` (butuh data real).

---

## Chunk 1: Canonical Bersih + Manifest Link + Webmanifest

**Complexity:** simple
**Files:**
- `src/components/SEO.astro`
- `src/layouts/DefaultLayout.astro`
- `public/site.webmanifest`

### 1.1 `src/components/SEO.astro`

**Motivasi:** Website memiliki fitur affiliate yang menambahkan query parameter `?ref=xxx` di runtime. Meskipun static build tidak menyertakan query string, meneruskan `Astro.url` ke canonical berisiko jika di masa depan ada SSR atau URL dengan query string yang di-crawl. Dengan memakai `Astro.url.pathname`, canonical menjadi deterministik dan selalu bersih dari parameter.

File saat ini sudah memiliki frontmatter:

```astro
---
const { title, description, keywords } = Astro.props
---
```

Tambahkan `cleanUrl` di dalam frontmatter tersebut (jangan menghapus destructuring props):

```astro
---
const { title, description, keywords } = Astro.props
const cleanUrl = new URL(Astro.url.pathname, Astro.site).href
---
```

Kemudian ubah tiga tempat yang memakai `Astro.url`:

```astro
<meta property="og:url" content={cleanUrl} />
...
<meta property="twitter:url" content={cleanUrl} />
...
<link rel="canonical" href={cleanUrl} />
```

**Acceptance criteria:**
- `canonical` selalu tanpa query string.
- `og:url` dan `twitter:url` mengikuti canonical.
- Build Astro berhasil tanpa error.

### 1.2 `src/layouts/DefaultLayout.astro`

Di bagian `<head>`, setelah baris favicon yang sudah ada:

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

Tambahkan hanya satu baris:

```html
<link rel="manifest" href="/site.webmanifest" />
```

> Jangan menduplikasi baris favicon yang sudah ada.

### 1.3 `public/site.webmanifest`

Buat file baru:

```json
{
  "name": "JasaLike by Auradigital",
  "short_name": "JasaLike",
  "description": "Layanan jasa like dan optimasi media sosial terpercaya untuk Instagram, TikTok, Facebook, YouTube, dan platform lainnya.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0B1121",
  "theme_color": "#2563EB",
  "orientation": "portrait",
  "scope": "/",
  "lang": "id",
  "icons": [
    {
      "src": "/favicon.svg",
      "sizes": "any",
      "type": "image/svg+xml",
      "purpose": "any maskable"
    }
  ]
}
```

---

## Chunk 2: robots.txt

**Complexity:** simple
**Files:**
- `public/robots.txt`

Ganti seluruh isi file menjadi:

```
User-agent: *
Allow: /
Disallow: /dashboard/
Disallow: /admin-vote/
Disallow: /affiliate-jasalike/

Host: https://jasalike.com

Sitemap: https://jasalike.com/sitemap-index.xml
```

**Acceptance criteria:**
- File valid dan bisa dibaca crawler.
- Halaman backend tidak di-disallow secara bertele-tele.

---

## Chunk 3: Sitemap Configuration

**Complexity:** simple
**Files:**
- `astro.config.mjs`

Ubah integrasi `sitemap()` menjadi:

```js
sitemap({
  filter: (page) =>
    !page.includes('/dashboard') &&
    !page.includes('/admin-vote') &&
    !page.includes('/affiliate-jasalike') &&
    !page.includes('/404'),
  changefreq: 'weekly',
  priority: 0.7,
  lastmod: new Date(),
  serialize(item) {
    if (item.url === 'https://jasalike.com/' || item.url === 'https://jasalike.com') {
      item.priority = 1.0
      item.changefreq = 'weekly'
    }
    return item
  },
})
```

**Acceptance criteria:**
- `astro build` berhasil.
- File `sitemap-index.xml` dan `sitemap-0.xml` dihasilkan.
- Halaman `/dashboard/`, `/admin-vote/`, `/affiliate-jasalike/`, `/404/` tidak muncul di sitemap.

---

## Chunk 4: Keywords untuk 8 Halaman

**Complexity:** simple
**Files:**
- `src/pages/kontak.astro`
- `src/pages/kontak-admin.astro`
- `src/pages/layanan.astro`
- `src/pages/tentang-kami.astro`
- `src/pages/privacy.astro`
- `src/pages/terms.astro`
- `src/pages/admin-vote.astro`
- `src/pages/404.astro`

Untuk masing-masing halaman, tambahkan `const keywords = "..."` setelah `description`, lalu teruskan ke `<DefaultLayout title={...} description={...} keywords={keywords}>`.

| Halaman | Keywords |
|---------|----------|
| `kontak.astro` | `kontak jasalike, hubungi admin jasalike, layanan optimasi sosial media, konsultasi jasa like, nomor whatsapp jasalike` |
| `kontak-admin.astro` | `kontak admin jasalike, bantuan layanan jasalike, admin auradigital, chat admin jasalike` |
| `layanan.astro` | `layanan jasalike, daftar layanan optimasi sosmed, jasa like instagram tiktok, layanan auradigital` |
| `tentang-kami.astro` | `tentang jasalike, tentang auradigital, perusahaan jasa like indonesia, sejarah jasalike` |
| `privacy.astro` | `kebijakan privasi jasalike, privacy policy auradigital, perlindungan data pengguna` |
| `terms.astro` | `syarat dan ketentuan jasalike, terms of service auradigital, ketentuan layanan jasalike` |
| `admin-vote.astro` | `admin vote jasalike, bantuan voting jasalike, layanan admin jasalike` |
| `404.astro` | `halaman tidak ditemukan jasalike, error 404 auradigital` |

**Acceptance criteria:**
- Semua 8 halaman memiliki variabel `keywords`.
- Semua 8 halaman meneruskan `keywords` ke `DefaultLayout`.
- Build berhasil.

---

## Test Strategy

1. Jalankan `npm run build` atau `pnpm build`.
2. Verifikasi `dist/sitemap-index.xml` dan `dist/sitemap-0.xml` ada.
3. Verifikasi `dist/site.webmanifest` dan `dist/robots.txt` ada.
4. Verifikasi isi sitemap tidak mengandung `/dashboard/`, `/admin-vote/`, `/affiliate-jasalike/`, `/404/`.
5. Verifikasi halaman `dist/index.html` memiliki `<link rel="manifest" href="/site.webmanifest">` dan canonical tanpa query string.

---

## Deployment Notes

Setelah build berhasil:
- Deploy hasil build ke hosting.
- Submit ulang sitemap di Google Search Console.
- Periksa beberapa hari ke depan apakah URL duplikat dengan parameter `ref` berkurang di laporan GSC.
