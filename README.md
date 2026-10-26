# TEKNOLOGI GAME — INFORMATIKA ITERA

> **Game Tech Showcase & Artifacts Repository**  
> Program Studi Teknik Informatika (IF) &bull; Fakultas Teknologi Industri (FTI) &bull; Institut Teknologi Sumatera (ITERA)  
> Kode Mata Kuliah: `IF25-40412` // Bobot: 3 SKS  
> Dosen Pengampu: **Radhinka Bagaskara, S.Si.Kom., M.Si., M.Sc.**

---

## 📌 Tentang Proyek

Platform web etalase resmi karya mahasiswa pada Mata Kuliah **Teknologi Game** di Institut Teknologi Sumatera (ITERA). Repositori ini mengarsipkan seluruh proses kreatif dan teknis mahasiswa—mulai dari penyusunan dokumen desain (*Game Design Document*), pengembangan mekanika gameplay (*prototyping*), integrasi aset visual/audio, hingga kompilasi *build* game siap unduh dan mainkan melalui **GitHub**, **itch.io**, maupun **WebGL** langsung di peramban web.

Situs ini dibangun dengan prinsip arsitektur statis berkinerja tinggi (*Zero-JS by default*), estetika desain **Modern Industrial Brutalist**, dan sistem relasi data terdesentralisasi (*Decoupled JSON Architecture*) yang divalidasi langsung oleh skema **Zod** pada saat proses *build*.

---

## ✨ Fitur Utama

- 🎮 **Katalog & Repositori Game (`/games`)**
  - Mesin filter multi-dimensi secara *real-time*: Game Engine (Unity, Godot, Unreal, dll), Genre (Action, Puzzle, RPG, dll), dan Tahun Angkatan (*Batch Year*).
  - Pencarian langsung (*live search*) berdasarkan judul game, deskripsi, tim pengembang, dan tag mekanika.
  - Paginasi interaktif 10 item per halaman dengan indikator hitungan hasil arsip.
- 👤 **Buku Besar Kreator Mahasiswa (`/creators`)**
  - Indeks direktori mahasiswa pengembang game dengan format identitas standar `id="namadepan-namabelakang"`.
  - Filter per angkatan dan pencarian cepat berdasarkan nama, peran (*role*), atau nama game yang dikembangkan.
  - Relasi dua arah: klik nama kreator untuk melihat game yang dikerjakannya, atau klik kreator dari halaman game untuk menuju profil mahasiswa terkait.
  - Paginasi 10 mahasiswa per halaman.
- 🕹️ **Halaman Showcase Game Spesifik (`/games/[slug]`)**
  - Galeri tangkapan layar (*screenshots*) dan poster resolusi tinggi.
  - Matriks spesifikasi teknis (*Technical Specs Table*): jumlah poligon (*Tris*), *Draw Calls*, target *Tick Rate*, dan ukuran kompilasi *build*.
  - Tautan langsung ke repositori kode sumber Git, halaman itch.io, dan build WebGL peramban.
  - Daftar tim pengembang lengkap dengan tautan profil kreator.
- 🌓 **Brutalist Monochromatic UI & Theme Toggle**
  - Palet warna monokrom bergradasi tajam, tipografi proporsional + monospace, serta garis tepi (*borders*) geometris tegas.
  - Pengalih tema Gelap/Terang (*Dark/Light Mode*) instan tanpa efek kedipan layar (*Zero-Flash Anti-FOUC Script*).
- 🤝 **Portal Kolaborasi Industri (`#collaboration`)**
  - Jalur kerja sama industri untuk kuliah tamu praktisi, peluang magang (*internship*), sesi uji coba (*playtest*), hingga sponsor aset.
  - Generator formulir interaktif yang secara otomatis menyusun draf pesan email ke `gametech@itera.ac.id`.
- 📋 **Protokol Kontribusi Mahasiswa (`/submit`)**
  - Panduan baku langkah demi langkah bagi tim mahasiswa untuk mendaftarkan game baru melalui alur Git Pull Request.

---

## 🛠️ Tech Stack & Ekosistem

| Teknologi | Versi | Peran / Penggunaan |
| :--- | :--- | :--- |
| **[Astro](https://astro.build)** | `v5.x` | Static Site Generation (SSG), file-based routing, View Transitions |
| **[Tailwind CSS](https://tailwindcss.com)** | `v4.x` | Utilitas *styling*, tema brutalist kustom, responsivitas multi-perangkat |
| **[TypeScript](https://www.typescriptlang.org/)** | Strict | *Type-safety*, pendefinisian antarmuka data dan komponen |
| **[Zod](https://zod.dev)** | Bundled | Validasi skema data pada saat kompilasi (*compile-time schema validation*) |
| **Vite** | Bundled | Pemroses aset dan *bundler* performa tinggi terintegrasi di Astro |

---

## 🗂️ Struktur Direktori

```text
library-teknologi-game/
├── public/                     # Aset statis publik (favicon, foto profil, poster game)
│   ├── assets/games/           # Folder media poster & screenshot game mahasiswa
│   └── radhinka-bagaskara.jpg  # Foto dosen pengampu mata kuliah
├── src/
│   ├── components/             # Komponen UI modular (.astro)
│   │   ├── CollabSection.astro     # Formulir & kanal ajakan kolaborasi industri
│   │   ├── CourseCurriculum.astro  # Spesifikasi & narasi mata kuliah
│   │   ├── CreatorLedger.astro     # Tabel direktori mahasiswa + live search & paginasi
│   │   ├── EngineBadge.astro       # Badge label game engine
│   │   ├── FilterMatrix.astro      # Tombol filter engine, genre, dan angkatan
│   │   ├── Footer.astro            # Footer 3-kolom rata kiri-kanan
│   │   ├── GameCard.astro          # Kartu pratinjau game
│   │   ├── GameCatalog.astro       # Komponen katalog game + live search & paginasi
│   │   ├── Hero.astro              # Hero section beranda
│   │   ├── InstructorCard.astro    # Kartu profil dosen pengampu ITERA
│   │   ├── Navbar.astro            # Navigasi atas & status bar sistem
│   │   ├── SearchBar.astro         # Input pencarian serbaguna
│   │   ├── StatsOverview.astro     # Ringkasan metrik statistik dinamis
│   │   ├── TechSpecsTable.astro    # Tabel spesifikasi teknis game
│   │   └── ThemeToggle.astro       # Tombol pengalih tema gelap/terang
│   ├── data/                   # Sumber data terstruktur (Decoupled JSON Engine)
│   │   ├── course.json             # Metadata & kurikulum mata kuliah
│   │   ├── games.json              # Basis data seluruh game mahasiswa
│   │   ├── instructors.json        # Data tim dosen pengampu
│   │   ├── site-config.json        # Konfigurasi branding & navigasi situs
│   │   └── students.json           # Basis data mahasiswa pengembang
│   ├── layouts/
│   │   └── Layout.astro        # Layout dasar HTML, anti-FOUC script, dan meta tag
│   ├── lib/
│   │   └── data.ts             # Parser Zod, accessor functions, & kalkulasi relasi
│   ├── pages/
│   │   ├── creators/
│   │   │   └── index.astro     # Halaman direktori mahasiswa (/creators)
│   │   ├── games/
│   │   │   ├── [slug].astro    # Halaman dinamis detail game (/games/[slug])
│   │   │   └── index.astro     # Halaman katalog game (/games)
│   │   ├── index.astro         # Halaman beranda utama (/)
│   │   └── submit.astro        # Panduan Pull Request mahasiswa (/submit)
│   ├── styles/
│   │   └── global.css          # Konfigurasi Tailwind CSS v4 & variabel warna
│   └── types/
│       └── index.ts            # Definisi skema validasi Zod & tipe TypeScript
├── astro.config.mjs            # Konfigurasi Astro (Tailwind plugin, prefetch)
├── package.json                # Daftar dependency & scripts
└── tsconfig.json               # Konfigurasi TypeScript
```

---

## ⚡ Arsitektur Relasi Data (Decoupled JSON)

Untuk memudahkan pemeliharaan berkala (*maintainability*) dan penskalaan (*scalability*), data mahasiswa dan game dipisahkan menjadi 2 file JSON independen:

1. **`src/data/students.json`**  
   Menyimpan profil mahasiswa pengembang dengan format ID unik `namadepan-namabelakang`:
   ```json
   {
     "id": "alex-pratama",
     "name": "Alex Pratama",
     "batch": 2022,
     "role": "Game Engine Programmer",
     "avatarUrl": "https://api.dicebear.com/7.x/bottts/svg?seed=alex-pratama",
     "bio": "Fokus pada arsitektur Entity-Component-System (ECS) dan optimasi memory pool.",
     "githubUrl": "https://github.com",
     "linkedinUrl": "https://linkedin.com"
   }
   ```

2. **`src/data/games.json`**  
   Menyimpan metadata karya game yang menghubungkan anggota tim via `contributors[].id`:
   ```json
   {
     "slug": "kinetic-strata",
     "title": "Kinetic Strata",
     "tagline": "Platformer fisika presisi tinggi dengan mekanika manipulasi gravitasi lokal.",
     "description": "Dokumentasi perancangan sistem gravitasi kustom dan kalkulasi vektor tumbukan.",
     "engine": "Godot",
     "engineVersion": "Godot 4.3",
     "genre": ["Platformer", "Physics", "Puzzle"],
     "platform": ["Windows", "Linux", "WebGL"],
     "batchYear": 2024,
     "featured": true,
     "posterImage": "/assets/games/kinetic-strata/poster.webp",
     "screenshots": [
       "/assets/games/kinetic-strata/shot-1.webp",
       "/assets/games/kinetic-strata/shot-2.webp"
     ],
     "webglUrl": "https://itch.io",
     "githubUrl": "https://github.com/itera-official/kinetic-strata",
     "contributors": [
       { "id": "alex-pratama", "role": "Lead Physics & Mechanics" }
     ],
     "metrics": {
       "polygonCount": "120K Tris",
       "drawCalls": "45 Peak",
       "tickRate": "120 Hz Fixed",
       "buildSize": "48.5 MB"
     }
   }
   ```

Fungsi `getGamesByStudentId()` di `src/lib/data.ts` akan secara otomatis merelasikan karya game ke masing-masing profil kreator.

---

## 🚀 Panduan Memulai (Getting Started)

### Prasyarat
- **Node.js**: Versi `20.x` atau `>= 22.23.4`
- **npm** (atau package manager pilihan Anda: pnpm / yarn)

### 1. Kloning Repositori & Instalasi
```bash
git clone https://github.com/itera-official/library-teknologi-game.git
cd library-teknologi-game
npm install
```

### 2. Menjalankan Server Pengembangan Lokal
Sesuai panduan proyek, jalankan server pengembangan dalam mode *background*:
```bash
npx astro dev --background
```
Atau jalankan secara reguler via npm:
```bash
npm run dev
```
Buka peramban Anda di [http://localhost:4321](http://localhost:4321).

### 3. Membangun Proyek untuk Produksi
Validasi seluruh skema Zod dan bangun file HTML statis:
```bash
npm run build
```
Seluruh file siap rilis akan dihasilkan di dalam direktori `./dist/`.

### 4. Pratinjau Build Produksi
Uji coba hasil kompilasi statis secara lokal:
```bash
npm run preview
```

---

## 📝 Panduan Kontribusi Mahasiswa (Submission Workflow)

Setiap mahasiswa atau tim pengembang yang mengambil Mata Kuliah Teknologi Game wajib mendaftarkan karyanya melalui mekanisme **Git Pull Request**:

1. **Fork** repositori ini ke akun GitHub tim Anda.
2. Buat *branch* baru dengan format: `feat/nama-game-tim`.
3. **Daftarkan Profil Anggota**:
   - Buka `src/data/students.json`.
   - Tambahkan profil setiap anggota tim jika belum terdaftar. Pastikan `id` menggunakan format huruf kecil dipisah tanda hubung (misal: `"budi-santoso"`).
4. **Daftarkan Data Game**:
   - Buka `src/data/games.json`.
   - Tambahkan entri game baru dan pasangkan ID anggota pada array `contributors`.
5. **Tambahkan Aset Gambar**:
   - Simpan poster dan screenshot game di `public/assets/games/<slug>/`.
6. **Uji Coba Build**:
   - Jalankan `npm run build` di terminal lokal Anda. Jika skema Zod tidak valid (misal ada field yang kurang atau tipe data keliru), proses build akan menampilkan pesan kesalahan yang spesifik.
7. **Kirimkan Pull Request**:
   - Lakukan `git push` ke repositori fork Anda dan ajukan Pull Request ke branch `main`.

---

## 🏛️ Informasi Akademik & Kontak

- **Institusi**: Program Studi Teknik Informatika, Fakultas Teknologi Industri, Institut Teknologi Sumatera (ITERA)
- **Alamat**: Gedung Labtek / Kuliah Umum ITERA, Jl. Terusan Ryacudu, Way Hui, Jati Agung, Lampung Selatan 35365
- **Surel Resmi**: [gametech@itera.ac.id](mailto:gametech@itera.ac.id)
- **Website Prodi**: [https://if.itera.ac.id](https://if.itera.ac.id)
