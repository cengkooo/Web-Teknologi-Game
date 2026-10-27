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
  - **Fokus Tunggal Godot Engine**: Seluruh kurikulum dan karya tugas besar mahasiswa difokuskan menggunakan Godot Engine.
  - **Filter Bersih & Terarah**: Menyederhanakan penelusuran dengan menyisakan **Filter Tahun Angkatan / Rilis** dan bilah pencarian langsung (*Live Search Bar*).
  - **Tanda Penghargaan Khusus (*Award Marks*)**: Penanda visual resmi untuk game unggulan di sudut poster dan header detail:
    - `[★ BEST GAME]` / `★ BEST GAME OF THE SEMESTER` (Aksen Emas/Amber Brutalist)
    - `[⚡ MOST POPULAR]` / `⚡ MOST POPULAR GAME OF THE SEMESTER` (Aksen Biru Cyan Cyber)
  - **Paginasi Efisien**: Mengatur kepadatan tampilan katalog menjadi **8 game per halaman** dengan nomor halaman aktif dan navigasi cepat.
  - **Akses Langsung itch.io**: Kartu game menampilkan tautan terverifikasi langsung ke halaman build itch.io.

- 🏠 **Beranda & Spotlight Unggulan (`/`)**
  - Menampilkan ringkasan kurikulum, profil dosen pengampu, metrik arsip, dan portal kerja sama industri.
  - **Spotlight Games Grid**: Menampilkan 6 karya game terbaik dan terpopuler pilihan semester secara dinamis di halaman utama.

- 🕹️ **Halaman Detail Game Komprehensif (`/games/[slug]`)**
  - Tampilan poster resolusi tinggi dan tangkapan layar gameplay (*screenshots*).
  - Matriks spesifikasi teknis (*Technical Specs Table*): kalkulasi *Draw Calls*, *Polygon Count*, target *Tick Rate*, dan ukuran kompilasi build game.
  - Roster tim pengembang mahasiswa lengkap dengan nama, NIM, dan peran spesifik (*Director*, *Programmer*, *Artist*, *Sound Designer*).
  - Badge penghargaan semester untuk game berkategori *Best Game* atau *Most Popular*.

- 📸 **Galeri Dokumentasi Pameran Game Tech Expo (`/expo`)**
  - Arsip visual nyata dari pelaksanaan Demo Day dan pameran tugas besar mahasiswa di lingkungan kampus ITERA (Gedung Kuliah Umum & Labtek).
  - **Foto Super-Sampled & Enhanced**: 12 foto dokumentasi resolusi tinggi dengan rasio layar lebar (`aspect-video`) yang telah di-upscale dan dipertajam.
  - **Filter Berdasarkan Tahun**: Navigasi cepat dokumentasi per tahun pelaksanaan (`SEMUA TAHUN`, `2024`, `2023`).
  - **Modal Lightbox Interaktif**: Pratinjau foto mendalam dengan takarir, keterangan waktu pengujian (WIB), dan tanggal acara.
  - Proteksi kontras badge foto agar selalu terbaca jelas dalam teks putih pekat (`#FFFFFF`) di semua tema.

- 🌓 **Brutalist UI, Theme Toggle, & Mobile Burger Menu**
  - Estetika modern industrial brutalist dengan batas geometris monokrom (`#262626`), tipografi display tebal, dan JetBrains Mono.
  - **Mobile Responsive Drawer**: Navigasi atas otomatis bertransformasi menjadi tombol burger (*hamburger menu* `☰` / `&times;`) pada layar ponsel (`< md`) dengan menu bertumpuk yang mulus.
  - **Tombol Light/Dark Mode Terintegrasi**: Ditempatkan presisi di samping tautan navigasi utama pada desktop maupun mobile, lengkap dengan skrip anti-kedip (*Zero-Flash FOUC Prevention*).
  - Penataan footer 2-kolom seimbang dengan kolom direktori tautan yang rapi dan presisi (*right-aligned*).

- ⚡ **Git-based CMS Admin (`/keystatic` & `/admin`)**
  - Panel manajemen konten berbasis Git modern menggunakan **Keystatic** (`@keystatic/astro`).
  - **Dukungan Dark/Light Mode Penuh**: Bilah instrumen HUD CMS dilengkapi tombol pengalih mode tema yang tersinkronisasi langsung dengan website publik dan storage Keystatic.
  - **Antarmuka CMS Responsif**: Tata letak HUD bar yang beradaptasi otomatis di perangkat seluler dan tablet (penyingkatan tombol dan penyembunyian teks panjang).
  - Skema data TypeScript ketat (`keystatic.config.ts`) yang sinkron dengan seluruh koleksi game (termasuk tag `award`, `semesterKey`, dan data tim) serta dokumentasi expo.

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
├── public/                     # Aset statis publik (favicon, media, poster, foto expo)
│   ├── assets/
│   │   ├── expo/               # Arsip 12 foto dokumentasi fisik expo (upscaled & enhanced)
│   │   └── uploads/            # Media unggahan via Keystatic CMS
│   └── radhinka-bagaskara.jpg  # Foto dosen pengampu mata kuliah
├── src/
│   ├── components/             # Komponen UI modular (.astro / .ts)
│   │   ├── CollabSection.astro     # Formulir & kanal ajakan kolaborasi industri
│   │   ├── CourseCurriculum.astro  # Spesifikasi & narasi mata kuliah
│   │   ├── EngineBadge.astro       # Badge label game engine Godot
│   │   ├── ExpoGallery.astro       # Galeri foto pameran + filter tahun & lightbox
│   │   ├── FilterMatrix.astro      # Tombol filter tahun angkatan rilis
│   │   ├── Footer.astro            # Footer 2-kolom seimbang (info institusi & direktori kanan)
│   │   ├── GameCard.astro          # Kartu game + badge penghargaan (Best/Popular) & itch.io link
│   │   ├── GameCatalog.astro       # Komponen katalog game + live search & paginasi (8/page)
│   │   ├── Hero.astro              # Hero section beranda
│   │   ├── InstructorCard.astro    # Kartu profil dosen pengampu ITERA
│   │   ├── KeystaticApp.ts         # Integrasi runner Keystatic Astro CMS
│   │   ├── Navbar.astro            # Navigasi utama + burger menu mobile & theme toggle
│   │   ├── SearchBar.astro         # Input pencarian serbaguna
│   │   ├── StatsOverview.astro     # Ringkasan metrik statistik dinamis
│   │   ├── TechSpecsTable.astro    # Tabel spesifikasi teknis game
│   │   └── ThemeToggle.astro       # Tombol pengalih tema gelap/terang
│   ├── data/                   # Sumber data terstruktur (Decoupled JSON Engine)
│   │   ├── expo/                   # Koleksi arsip pameran fisik per acara (*.json)
│   │   ├── games/                  # Koleksi 28 game mahasiswa lengkap dengan metadata (*.json)
│   │   ├── mahasiswa/              # Koleksi data profil mahasiswa pengembang (*.json)
│   │   ├── course.json             # Metadata & kurikulum mata kuliah
│   │   ├── expo.json               # Basis data pameran fisik & dokumentasi
│   │   ├── games.json              # Basis data seluruh game mahasiswa
│   │   ├── instructors.json        # Data tim dosen pengampu
│   │   ├── site-config.json        # Konfigurasi branding & navigasi situs
│   │   └── students.json           # Basis data mahasiswa pengembang
│   ├── layouts/
│   │   └── Layout.astro        # Layout dasar HTML, anti-FOUC script, dan meta tag
│   ├── lib/
│   │   └── data.ts             # Parser Zod, accessor functions, kalkulasi relasi & awards
│   ├── pages/
│   │   ├── admin/
│   │   │   └── index.astro     # Redirect / panel CMS kontrol
│   │   ├── expo/
│   │   │   └── index.astro     # Galeri pameran fisik & demo day (/expo)
│   │   ├── games/
│   │   │   ├── [slug].astro    # Halaman dinamis detail game (/games/[slug])
│   │   │   └── index.astro     # Halaman katalog game (/games)
│   │   ├── keystatic/
│   │   │   └── [...params].astro # Panel Git-based CMS dengan HUD instrumen & theme toggle
│   │   └── index.astro         # Halaman beranda utama dengan Spotlight 6 Game Terbaik (/)
│   ├── styles/
│   │   └── global.css          # Konfigurasi Tailwind CSS v4, variabel tema, & badge colors
│   └── types/
│       └── index.ts            # Definisi skema validasi Zod & tipe TypeScript
├── astro.config.mjs            # Konfigurasi Astro (Tailwind plugin, server host, prefetch)
├── keystatic.config.ts         # Definisi skema koleksi & konfigurasi GitHub Keystatic CMS
├── package.json                # Daftar dependency & scripts
└── tsconfig.json               # Konfigurasi TypeScript
```

---

## ⚡ Arsitektur Relasi Data (Decoupled JSON)

Untuk memudahkan pemeliharaan berkala (*maintainability*) dan penskalaan (*scalability*), data mahasiswa dan game dipisahkan menjadi 2 file JSON independen:

1. **`src/data/games.json`**  
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
git clone https://github.com/cengkooo/Web-Teknologi-Game.git
cd Web-Teknologi-Game
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

## 🎛️ Panduan Penggunaan Git-based CMS (`/keystatic`)

Website ini dilengkapi dengan Git-based CMS visual (**Keystatic**) yang memungkinkan pengelola memperbarui data game, mahasiswa, dan expo tanpa harus menyentuh kode program.

### Cara Penggunaan di Komputer Lokal (Local Development)
1. Jalankan dev server Astro:
   ```bash
   npm run dev
   ```
2. Buka panel CMS di [http://localhost:4321/keystatic/](http://localhost:4321/keystatic/).
3. Keystatic menggunakan mode `local` saat development, jadi tidak diperlukan proxy CMS tambahan. Perubahan disimpan langsung ke file di dalam `src/data/` dan aset yang diunggah ke `public/assets/uploads/`.

### Cara Penggunaan di Vercel (Production dengan Login GitHub Asli)

Website ini menggunakan storage GitHub Keystatic di production, sehingga perubahan CMS dapat disimpan ke repositori GitHub melalui deployment Vercel. Fungsi OAuth bawaan ([`api/auth.js`](file:///D:/library-teknologi-game/api/auth.js) dan [`api/callback.js`](file:///D:/library-teknologi-game/api/callback.js)) tetap tersedia untuk integrasi GitHub lain yang memerlukannya.

1. **Daftarkan GitHub OAuth App (Gratis)**:
   - Buka GitHub &rarr; **Settings** &rarr; **Developer Settings** &rarr; **OAuth Apps** &rarr; **New OAuth App**.
   - **Application name**: `Game Tech ITERA CMS`
   - **Homepage URL**: `https://[nama-proyek-anda].vercel.app`
   - **Authorization callback URL**: `https://[nama-proyek-anda].vercel.app/api/callback`
   - Klik **Register application**, lalu buat **Client Secret**. Salin *Client ID* dan *Client Secret*.

2. **Pasang Environment Variables di Vercel**:
   - Di dashboard Vercel proyek Anda &rarr; **Settings** &rarr; **Environment Variables**, tambahkan:
     - `OAUTH_GITHUB_CLIENT_ID` = *(Client ID dari GitHub)*
     - `OAUTH_GITHUB_CLIENT_SECRET` = *(Client Secret dari GitHub)*

3. **Kelola Konten**:
   - Buka `https://[nama-proyek-anda].vercel.app/keystatic/`.
   - Gunakan panel Keystatic untuk mengedit koleksi konten. Pada mode production, konfigurasi Keystatic menggunakan repositori `cengkooo/Web-Teknologi-Game` pada branch `main`.

---

## 🏛️ Informasi Akademik & Kontak

- **Institusi**: Program Studi Teknik Informatika, Fakultas Teknologi Industri, Institut Teknologi Sumatera (ITERA)
- **Alamat**: Gedung Labtek / Kuliah Umum ITERA, Jl. Terusan Ryacudu, Way Hui, Jati Agung, Lampung Selatan 35365
- **Surel Resmi**: [gametech@itera.ac.id](mailto:gametech@itera.ac.id)
- **Website Prodi**: [https://if.itera.ac.id](https://if.itera.ac.id)

## 🦸 CREDIT:
Dibuat oleh Andryano Shevchenko Limbong IF'23 https://www.andryanolimbong.my.id/
Github: https://github.com/cengkooo/Web-Teknologi-Game
