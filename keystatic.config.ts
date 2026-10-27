import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'cengkooo/Web-Teknologi-Game',
    branch: 'main',
  },
  ui: {
    brand: {
      name: 'TEKNOLOGI GAME ITERA // CMS',
    },
    navigation: {
      'MANAJEMEN KONTEN': ['games', 'expo'],
    },
  },
  collections: {
    // =========================================================================
    // 02 // GAMES CATALOG (FOLDER: src/data/games/*.json)
    // =========================================================================
    games: collection({
      label: '02 // GAMES',
      slugField: 'slug',
      path: 'src/data/games/*',
      format: { data: 'json' },
      schema: {
        slug: fields.slug({
          name: {
            label: 'Slug ID Unik (URL)',
            description: 'Identifier unik huruf kecil dan strip (contoh: kinetic-strata)',
          },
        }),
        title: fields.text({ label: 'Judul Game', validation: { isRequired: true } }),
        developer: fields.text({ label: 'Nama Kelompok / Studio Developer (contoh: Chill Guys)' }),
        semester: fields.select({
          label: 'Semester Perkuliahan (IF3023)',
          options: [
            { label: 'Sem. Ganjil 2025/2026', value: '2025/2026 Ganjil' },
            { label: 'Sem. Ganjil 2024/2025', value: '2024/2025 Ganjil' },
            { label: 'Sem. Ganjil 2023/2024', value: '2023/2024 Ganjil' },
            { label: 'Sem. Genap 2022/2023', value: '2022/2023 Genap' },
          ],
          defaultValue: '2025/2026 Ganjil',
        }),
        semesterKey: fields.text({
          label: 'Kode Semester (contoh: 22-23-genap)',
          defaultValue: '25-26-ganjil',
        }),
        tagline: fields.text({ label: 'Tagline Singkat (Gameplay Hook)' }),
        description: fields.text({ label: 'Deskripsi Lengkap Game', multiline: true }),
        engine: fields.select({
          label: 'Game Engine',
          options: [
            { label: 'Godot Engine', value: 'Godot' },
          ],
          defaultValue: 'Godot',
        }),
        engineVersion: fields.text({ label: 'Versi Engine (contoh: Godot 4.3 Stable)', defaultValue: 'Godot 4.3 Stable' }),
        genre: fields.array(fields.text({ label: 'Genre' }), {
          label: 'Genre Game',
          itemLabel: (props) => props.value || 'Genre Baru',
        }),
        platform: fields.array(fields.text({ label: 'Platform' }), {
          label: 'Target Platform',
          itemLabel: (props) => props.value || 'Platform',
        }),
        batchYear: fields.integer({
          label: 'Tahun Rilis / Angkatan (contoh: 2024)',
          validation: { isRequired: true },
        }),
        featured: fields.checkbox({
          label: 'Tampilkan di Spotlight Beranda (Featured)',
          defaultValue: false,
        }),
        award: fields.select({
          label: 'Penghargaan / Tanda Khusus Game',
          options: [
            { label: 'Biasa (Tanpa Tanda)', value: 'none' },
            { label: '★ Best Game of the Semester', value: 'best_game' },
            { label: '⚡ Most Popular Game of the Semester', value: 'most_popular' },
          ],
          defaultValue: 'none',
        }),
        posterImage: fields.text({
          label: 'URL / Path Poster Utama',
        }),
        screenshots: fields.array(
          fields.text({
            label: 'URL / Path Screenshot',
          }),
          {
            label: 'Galeri Tangkapan Layar (Screenshots)',
          }
        ),
        webglUrl: fields.text({ label: 'Tautan Playable WebGL di Browser' }),
        itchUrl: fields.text({ label: 'Tautan itch.io' }),
        githubUrl: fields.text({ label: 'Tautan Repositori GitHub Game' }),
        contributors: fields.array(
          fields.object({
            id: fields.text({ label: 'ID Mahasiswa (contoh: alex-reza)' }),
            name: fields.text({ label: 'Nama Lengkap Mahasiswa' }),
            nim: fields.text({ label: 'NIM Mahasiswa' }),
            role: fields.text({ label: 'Peran dalam Tim' }),
          }),
          {
            label: 'Tim Mahasiswa Pengembang',
            itemLabel: (props) =>
              `${props.fields.name.value || props.fields.id.value || 'Mahasiswa'} // ${props.fields.role.value || 'Peran'}`,
          }
        ),
        metrics: fields.object({
          polygonCount: fields.text({ label: 'Polygon Count (contoh: 120K Tris)' }),
          drawCalls: fields.text({ label: 'Peak Draw Calls (contoh: 45 Peak)' }),
          tickRate: fields.text({ label: 'Tick Rate Fisika (contoh: 120 Hz Fixed)' }),
          buildSize: fields.text({ label: 'Ukuran Build Game (contoh: 48.5 MB)' }),
        }),
      },
    }),

    // =========================================================================
    // 03 // MAHASISWA ROSTER (FOLDER: src/data/mahasiswa/*.json)
    // =========================================================================
    mahasiswa: collection({
      label: '03 // MAHASISWA',
      slugField: 'id',
      path: 'src/data/mahasiswa/*',
      format: { data: 'json' },
      schema: {
        id: fields.slug({
          name: {
            label: 'ID Unik Mahasiswa',
            description: 'Format wajib: namadepan-namabelakang (contoh: alex-reza)',
          },
        }),
        name: fields.text({ label: 'Nama Lengkap Mahasiswa', validation: { isRequired: true } }),
        nim: fields.text({ label: 'NIM Mahasiswa (contoh: 122140217)', validation: { isRequired: false } }),
        batch: fields.integer({
          label: 'Tahun Angkatan (contoh: 2024)',
          validation: { isRequired: true },
        }),
        role: fields.text({
          label: 'Spesialisasi / Peran Utama (contoh: Engine & Systems Programmer)',
          validation: { isRequired: true },
        }),
        avatarUrl: fields.image({
          label: 'Foto Profil / Avatar',
          directory: 'public/assets/uploads',
          publicPath: '/assets/uploads',
        }),
        bio: fields.text({ label: 'Bio Singkat Keahlian', multiline: true }),
        githubUrl: fields.text({ label: 'Tautan GitHub Pribadi' }),
        linkedinUrl: fields.text({ label: 'Tautan LinkedIn' }),
        portfolioUrl: fields.text({ label: 'Tautan Portofolio Pribadi' }),
      },
    }),

    // =========================================================================
    // 04 // EXPO ARCHIVE (FOLDER: src/data/expo/*.json)
    // =========================================================================
    expo: collection({
      label: '03 // EXPO',
      slugField: 'id',
      path: 'src/data/expo/*',
      format: { data: 'json' },
      schema: {
        id: fields.slug({
          name: {
            label: 'ID Unik Acara',
            description: 'Format: expo-tahun-lokasi (contoh: expo-2024-gku)',
          },
        }),
        title: fields.text({ label: 'Judul Acara Expo', validation: { isRequired: true } }),
        edition: fields.text({ label: 'Edisi Semester (contoh: Semester Genap 2023/2024)' }),
        year: fields.integer({ label: 'Tahun Pelaksanaan (contoh: 2024)', validation: { isRequired: true } }),
        date: fields.text({ label: 'Tanggal (contoh: 18 Juni 2024)' }),
        location: fields.text({ label: 'Lokasi Gedung / Ruangan Kampus' }),
        photos: fields.array(
          fields.object({
            id: fields.text({ label: 'ID Foto (contoh: expo-2024-1)' }),
            url: fields.text({
              label: 'Path / URL File Foto (contoh: /assets/expo/expo-2024-1.jpg)',
            }),
            caption: fields.text({ label: 'Takarir / Keterangan Foto', multiline: true }),
            category: fields.select({
              label: 'Kategori Foto',
              options: [
                { label: 'Dokumentasi', value: 'Dokumentasi' },
                { label: 'Playtest & Booth', value: 'Playtest & Booth' },
                { label: 'Presentasi Tim', value: 'Presentasi Tim' },
                { label: 'Suasana Pameran', value: 'Suasana Pameran' },
                { label: 'Review Dosen', value: 'Review Dosen' },
                { label: 'Awarding', value: 'Awarding' },
              ],
              defaultValue: 'Dokumentasi',
            }),
            time: fields.text({ label: 'Waktu Pengambilan (contoh: 10:30 WIB)' }),
          }),
          {
            label: 'Koleksi Foto Dokumentasi Galeri',
            itemLabel: (props) =>
              `[${props.fields.category.value || 'Dokumentasi'}] ${props.fields.caption.value || 'Foto Dokumentasi'}`,
          }
        ),
      },
    }),
  },
});
