# Instruksi Optimasi Hero untuk Subagent

## Tugas
Optimasi hanya bagian Hero (`const dataHero`) di setiap file `.astro` yang diberikan.

## Yang Boleh Diubah
Hanya `judulUtama` dan `deskripsi` di dalam `const dataHero`.

## Yang TIDAK BOLEH Diubah
- Schema / JSON-LD
- Meta title / meta description
- Heading H2, H3, H4
- Teks tombol CTA (`teksTombol1`, `teksTombol2`) dan link tombol
- Harga / HargaPaket
- FAQ
- Layout
- Komponen di `src/components`
- URL / slug
- Struktur section
- Internal linking
- `labelTeks`, `labelIcon`, `gambarHero`, `tipe`

## Aturan Penulisan

### Judul Hero (H1)
- Gunakan Title Case: huruf kapital di awal setiap kata penting.
- Contoh benar: "Tingkatkan Interaksi Instagram Secara Alami"
- Contoh salah: "TINGKATKAN INTERAKSI INSTAGRAM", "instagram murah", "LIKE INSTAGRAM MURAH"
- Hindari ALL CAPS.
- Nama platform kapital: Instagram, TikTok, YouTube, Facebook, Telegram, LinkedIn, Pinterest, Reddit, Threads, Shopee.

### Deskripsi Hero
- Terdiri dari:
  1. Kalimat pembuka (1-2 kalimat pendek, natural, profesional)
  2. `<br class='hidden md:block mt-2' />`
  3. Subheadline bullet dengan 3 checkmark: `<span class='text-{warna} font-semibold block mt-4'>✓ ... &nbsp; ✓ ... &nbsp; ✓ ...</span>`
- Warna span bullet sesuaikan dengan warna span di judul (contoh: jika judul pakai `text-blue-500`, bullet pakai `text-blue-400`).
- Bahasa Indonesia natural, mudah dibaca, tidak robotik.
- Hindari kalimat terlalu panjang.
- Hindari pengulangan frasa antar halaman.

### Variasi Pendekatan (wajib berbeda antar halaman)
- Berorientasi hasil
- Berorientasi manfaat
- Berorientasi solusi
- Berorientasi pertumbuhan
- Berorientasi bisnis
- Berorientasi kredibilitas
- Berorientasi engagement
- Berorientasi efisiensi

## Prosedur
1. Baca setiap file `.astro` yang diberikan.
2. Temukan blok `const dataHero`.
3. Ganti nilai `judulUtama` dan `deskripsi` dengan konten baru sesuai aturan.
4. Gunakan tool `edit` untuk mengganti teks lama dengan teks baru.
5. Pastikan struktur file tetap valid.
6. Jangan ubah bagian lain dari file.
7. Laporkan ringkasan perubahan dalam format:
   ```
   | File | H1 Lama | H1 Baru | Sudut Pendekatan |
   ```

## Catatan Penting
- Jika file tidak memiliki `dataHero`, abaikan.
- Jika deskripsi tidak punya bullet, tambahkan bullet sesuai format.
- Pastikan setiap halaman memiliki Hero yang benar-benar unik.
