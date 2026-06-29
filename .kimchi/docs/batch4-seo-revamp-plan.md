# Batch 4 — SEO Revamp Halaman Layanan YouTube & LinkedIn

## Tujuan
Merombak SEO copywriting pada seluruh halaman layanan YouTube (8 halaman) dan LinkedIn (2 halaman) agar:
- Meta Title 55–65 karakter, elegan & clickbait-natural.
- Meta Description 150–160 karakter, manfaat-first, mengandung primary keyword.
- Keywords list memuat primary + secondary + LSI + long-tail hasil riset terbaru.
- Heading H1/H2/H3 unik antar halaman, tidak boilerplate, mengandung variasi keyword.
- Konten paragraph 100% unik, human, premium, edukatif, soft-selling, tanpa kata terlarang.
- FAQ bermanfaat, unik, menjawab search intent.
- Schema Product/Breadcrumb/FAQ diperbarui selaras konten.
- Harga di `dataHargaPaket` **TIDAK DIUBAH** sama sekali.
- Impor, urutan komponen, dan struktur file Astro dipertahankan.
- Tidak ada `git commit` / `git push`.

## Hasil Riset Keyword (Indonesia, 2025/2026)

### YouTube — long-tail populer
- jasa tambah subscriber youtube
- jasa subscriber youtube organik
- jasa 1000 subscriber youtube
- jasa jam tayang youtube 4000 jam
- jasa views youtube organik
- jasa view youtube shorts
- jasa like youtube terpercaya
- jasa like video youtube
- jasa like komentar youtube aktif
- jasa komen youtube aktif
- jasa komentar youtube berkualitas
- jasa save video youtube
- jasa playlist youtube
- jasa live youtube / live streaming youtube
- jasa viewer live youtube
- jasa report youtube / takedown video youtube

### LinkedIn — long-tail populer
- jasa optimasi profil linkedin
- jasa like linkedin
- jasa like komentar linkedin
- jasa tambah koneksi linkedin
- jasa followers linkedin
- jasa endorsement linkedin
- jasa rekomendasi linkedin
- jasa linkedin premium

## Daftar File & Fokus Keyword Utama

| # | File | Primary Keyword | Notes |
|---|------|-----------------|-------|
| 1 | `src/pages/like-youtube.astro` | jasa like youtube terpercaya | Like video YT |
| 2 | `src/pages/like-komentar-youtube.astro` | jasa like komentar youtube aktif | Top comment YT |
| 3 | `src/pages/jual-jasa-view-youtube.astro` | jual jasa view youtube organik | Views & watch time |
| 4 | `src/pages/jasa-subscribe-youtube.astro` | jasa subscriber youtube premium | Monetisasi 1000 subscriber |
| 5 | `src/pages/jasa-save-video-youtube.astro` | jasa save video youtube | Playlist / engagement |
| 6 | `src/pages/jasa-report-youtube.astro` | jasa report youtube | Takedown / pelaporan |
| 7 | `src/pages/jasa-live-youtube.astro` | jasa live youtube | Live streaming / viewer live |
| 8 | `src/pages/jasa-komen-youtube-aktif.astro` | jasa komen youtube aktif | Komentar video YT |
| 9 | `src/pages/like-linkedin.astro` | jasa like linkedin | Like postingan LinkedIn |
| 10 | `src/pages/like-komentar-linkedin.astro` | jasa like komentar linkedin | Top comment LinkedIn |

## Panduan Perombakan per Halaman
1. **SEO constants**: `title`, `description`, `keywords`.
2. **H1 / Hero**: `judulUtama` wajib mengandung primary keyword; `deskripsi` paragraf pertama mengandung primary keyword.
3. **Masalah, Apa Itu, Manfaat, Mengapa Memilih, Solusi, Cara Order**: ubah semua `judulUtama`, `deskripsiUtama`, sub-judul, dan teks. Hindari pola berulang seperti “Mengapa Memilih JasaLike?”, “Solusi Tepat”, “Cara Order” di setiap halaman. Gunakan variasi sinonim.
4. **Harga Paket**: hanya boleh mengubah teks label/judul fitur **selain** angka harga. Angka `pNHarga`, `pNHargaCoret` harus identik dengan file asli.
5. **FAQ**: 5–6 pertanyaan unik, jawaban natural, edukatif, 1–2 di antaranya menyertakan primary/secondary keyword.
6. **Schema JSON-LD**: sinkronkan `name`, `description`, breadcrumb `name`, dan FAQ `name`/`text` dengan konten baru.
7. **Forbidden words**: jangan gunakan Bot, Panel, Spam, Murah Sejagat, 1000% Aman, Dijamin Viral, Abal-abal, Manipulasi, Hack, Eksploit, Password, Tanpa Password, Tanpa Login, Server SMM, Fake Engagement.
8. **Tone**: formal Indonesia, profesional, elegan, human, educational, soft-sell.

## Verifikasi
- Script cek panjang title & description.
- Script/grep konfirmasi harga tetap.
- `npm run build` (atau perintah build yang aktif di repo) berhasil tanpa error.

## Constraints
- Tidak boleh `git commit` atau `git push`.
- Tidak boleh mengubah struktur folder, impor, urutan komponen, atau komponen layout.
