# Jeki Baretta — AI Engineering Portfolio

Starter website React + Vite + TypeScript + Tailwind CSS dengan Framer Motion, GSAP (siap ditambahkan untuk animasi scroll kompleks), React Router, dan HLS.js (siap dipakai jika ingin menambahkan video background).

## Menjalankan project

```bash
npm install
npm run dev
```

Build produksi:

```bash
npm run build
npm run preview
```

## Hal yang wajib diganti sebelum dipublikasikan

1. **Foto profil:** ganti URL gambar placeholder di `src/pages/Home.tsx` dengan foto milikmu.
2. **Identitas:** periksa nama, profesi, lokasi, email, dan deskripsi di `Home.tsx`, `About.tsx`, `Navbar.tsx`, dan `Footer.tsx`.
3. **CV:** letakkan file CV milikmu di `public/CV-Jeki-Baretta.pdf` agar tombol Download CV mengunduh file yang benar.
4. **Projects:** edit data di `src/data/content.ts`. Data proyek saat ini hanya contoh struktur, bukan klaim proyek yang sudah kamu kerjakan. Ganti judul, deskripsi, stack, gambar, status, dan tautan repository dengan data asli.
5. **Certificates:** masukkan gambar sertifikat ke folder `public/certificates/`, lalu isi properti `image` dengan path seperti `/certificates/nama-sertifikat.jpg`. Ganti issuer, tanggal, dan deskripsi sesuai sertifikat asli.
6. **Kontak dan sosial:** ganti email serta URL GitHub/LinkedIn dengan akun milikmu.

## Halaman

- `/` Home
- `/about` About me
- `/projects` Daftar proyek + filter kategori
- `/projects/:slug` Detail proyek
- `/certificates` Daftar sertifikat
- `/certificates/:slug` Detail sertifikat

Semua kartu proyek dan sertifikat membuka halaman detail. Navigasi mobile menggunakan menu hamburger. Tombol eksternal menggunakan link yang bisa diganti di komponen terkait.

## Catatan teknis

GSAP dan hls.js tercantum sebagai dependency agar dapat dipakai untuk pengembangan lanjutan. Starter ini sengaja memakai latar CSS, bukan video HLS, agar halaman lebih ringan dan stabil pada perangkat mobile. Jika ingin video, implementasikan dengan fallback dan `prefers-reduced-motion`.
