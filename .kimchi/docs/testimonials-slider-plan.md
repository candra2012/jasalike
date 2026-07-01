# Plan: Convert Testimonials.astro to Automatic Portrait Image Slider

## Goal
Ubah komponen `src/components/Testimonials.astro` dari tampilan statis tiga card teks menjadi **slider gambar testimoni otomatis** dengan format gambar **potret (9:16)** seperti screenshot Android.

## Context
- File target: `src/components/Testimonials.astro`
- Branch aktif: `jasalike`
- Referensi slider yang sudah ada: `src/components/CarouselProcess.astro`
- Gambar testimoni akan disimpan di `public/testimonials/` dengan format `.webp` dan rasio potret.
- User akan menambahkan file gambar sendiri nanti, jadi komponen harus tetap render dengan baik meski gambar belum ada (fallback).

## Requirements

### 1. Struktur HTML
- Pertahankan section heading (H2 + deskripsi) yang sudah ada.
- Ganti grid 3 card teks dengan container slider.
- Slider menampilkan gambar testimoni dari array `testimonialImages`.
- Setiap slide berisi:
  - `<img>` dengan rasio potret 9:16.
  - Alt text deskriptif: `Testimoni pelanggan JasaLike ${i + 1}`.
  - Fallback visual bila gambar gagal dimuat atau belum tersedia.
- Tambahkan kontrol:
  - Tombol prev/next.
  - Indikator dot untuk setiap slide.
- Pertahankan section id `"testimoni"` agar anchor link tetap berfungsi.

### 2. Styling (Tailwind CSS)
- Gunakan Tailwind utility classes sesuai konvensi proyek.
- Container slider:
  - `max-w-sm` atau `max-w-md` di mobile, `max-w-lg` di desktop agar gambar potret terlihat proporsional.
  - Overflow hidden, rounded-2xl, shadow.
- Gambar:
  - `aspect-[9/16]` atau `aspect-portrait`.
  - `object-cover`.
  - `w-full h-auto`.
- Slide aktif opacity 1, slide lain opacity 0 dengan transition.
- Kontrol navigasi:
  - Tombol prev/next: lingkaran kecil dengan ikon `lucide:chevron-left` dan `lucide:chevron-right`.
  - Dots: lingkaran kecil, aktif berwarna `blue-600`, non-aktif `slate-300`.

### 3. JavaScript Behavior
- Event listener: `astro:page-load` (sama seperti komponen saat ini).
- Auto-advance setiap 5000 ms menggunakan `setInterval`.
- Slide transition: 700 ms ease-in-out.
- Loop: dari slide terakhir kembali ke slide pertama.
- Pause auto-advance saat hover atau focus di dalam slider.
- Resume auto-advance saat mouse leave atau blur.
- Tombol prev/next memperbarui slide dan reset timer.
- Klik dot memperbarui slide dan reset timer.
- Inisialisasi: tampilkan slide pertama.

### 4. Accessibility
- Tambahkan `role="region"`, `aria-roledescription="carousel"`, dan `aria-label="Testimoni pelanggan"`.
- Setiap slide memiliki `aria-roledescription="slide"` dan `aria-label="Slide 1 dari 5"`.
- Tombol kontrol memiliki `aria-label` yang jelas.
- Indikator dot memiliki `aria-label` yang jelas.

### 5. Data Array
```astro
const testimonialImages = [
  '/testimonials/testimoni-1.webp',
  '/testimonials/testimoni-2.webp',
  '/testimonials/testimoni-3.webp',
  '/testimonials/testimoni-4.webp',
  '/testimonials/testimoni-5.webp',
];
```

### 6. Error Handling
- Tambahkan `onerror` pada `<img>` untuk mengganti ke fallback background/placeholder.
- Fallback: div dengan background gradient atau warna solid dan teks "Testimoni".
- Komponen tetap aman jika `testimonialImages` kosong: tampilkan pesan placeholder.

## Acceptance Criteria
1. File `src/components/Testimonials.astro` berhasil diubah dan tidak ada error sintaks Astro.
2. Komponen menampilkan slider gambar potret otomatis dengan minimal 5 slide.
3. Slider berpindah slide setiap 5 detik secara otomatis.
4. Tombol prev/next dan dot berfungsi mengubah slide.
5. Hover/focus pada slider menghentikan auto-advance.
6. Gambar menggunakan rasio potret (9:16).
7. Komponen tetap render dengan baik meski gambar belum ada (fallback).
8. Tidak ada trailing whitespace, spasi ganda, atau karakter tersembunyi.

## Complexity
**Complex** — melibatkan JavaScript slider otomatis dengan `setInterval`, event handling, lifecycle pause/resume, dan transisi CSS.

## Files Changed
- `src/components/Testimonials.astro`
