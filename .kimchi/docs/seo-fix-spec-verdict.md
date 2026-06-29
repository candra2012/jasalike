# Verdict: SEO Fix Spec

**Verdict: NEEDS_REVISION**

## Alasan

- **Duplicate favicon link di DefaultLayout.** Spec Chunk 1.2 meminta menambahkan `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />` "setelah baris favicon", namun baris tersebut sudah ada di `src/layouts/DefaultLayout.astro` baris 32. Build tidak akan gagal, tapi HTML output akan memiliki dua `<link rel="icon">` identik (redundan). Spec seharusnya hanya menambahkan `<link rel="manifest" href="/site.webmanifest" />`.

- **Filter sitemap tidak akan match halaman backend.** `astro.config.mjs` menggunakan `trailingSlash: 'ignore'`. File `src/pages/dashboard.astro`, `src/pages/admin-vote.astro`, dan `src/pages/affiliate-jasalike.astro` adalah file top-level (bukan folder), sehingga URL sitemap adalah `/dashboard`, `/admin-vote`, `/affiliate-jasalike` (tanpa trailing slash). Filter `page.includes('/admin-vote/')` dll. tidak akan match URL tanpa trailing slash, sehingga halaman backend justru tetap muncul di `sitemap-0.xml`. Spec perlu mengubah pattern ke `page.includes('/admin-vote')` (tanpa trailing slash) atau menggunakan regex/startsWith.

- **Ambiguitas frontmatter SEO.astro.** Chunk 1.1 menampilkan blok `--- const cleanUrl = ... ---` sebagai "Menjadi", namun SEO.astro saat ini sudah memiliki `const { title, description, keywords } = Astro.props` di frontmatter. Snippet spec bisa salah diinterpretasikan sebagai replace seluruh frontmatter (menghancurkan props destructuring) oleh Builder yang membaca literal. Spec harus eksplisit: "tambahkan const cleanUrl setelah const props".

- **Canonical fix esensially no-op untuk static build.** `Astro.url` di static output tidak pernah mengandung query string saat build time (karena tidak ada runtime request). Perubahan dari `Astro.url` ke `new URL(Astro.url.pathname, Astro.site).href` benar secara defensif, tapi tidak benar-benar "memperbaiki" masalah `?ref=xxx` yang diasumsikan spec. Build tetap sukses; verifikasi di Test Strategy ("canonical tanpa query string") akan iya karena memang selalu bersih, bukan karena perubahan spec. Bukan blocker, tapi perlu dicatat bahwa motivasi spec bisa menyesatkan Builder.

- **Chunks sizing sudah sesuai.** Semua 4 chunks ditandai `simple` dan memang cocok — perubahan kecil per file, tanpa algoritma/konkurensi. Test strategy cukup untuk verifikasi build output. Keyword table di Chunk 4 lengkap untuk 8 halaman.

## Gap Spesifik yang Harus Diperbaiki Sebelum Build

1. Hapus baris `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />` dari snippet Chunk 1.2; cukup tambahkan `<link rel="manifest" href="/site.webmanifest" />`.
2. Ubah filter sitemap di Chunk 3 menjadi tanpa trailing slash, misal: `!page.includes('/dashboard') && !page.includes('/admin-vote') && !page.includes('/affiliate-jasalike') && !page.includes('/404')`.
3. Rewrite Chunk 1.1 SEO.astro menjadi "Tambahkan const cleanUrl di frontmatter (jangan hapus const props)" dan tampilkan snippet gabungan.
4. (Opsional) Clarifikasi motivasi canonical fix di bagian Scope atau Constraint Chunk 1 agar Builder paham kenapa perubahan dilakukan meski query string tidak ada di build time.
