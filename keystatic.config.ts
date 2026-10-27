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
      'MANAJEMEN KONTEN': ['games', 'mahasiswa', 'expo'],
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
        tagline: fields.text({ label: 'Tagline Singkat (Gameplay Hook)' }),
        description: fields.text({ label: 'Deskripsi Lengkap Game', multiline: true }),
        engine: fields.select({
          label: 'Game Engine',
          options: [
            { label: 'Godot', value: 'Godot' },
            { label: 'Unity', value: 'Unity' },
            { label: 'Unreal Engine', value: 'Unreal Engine' },
            { label: 'Bevy', value: 'Bevy' },
            { label: 'Custom C++', value: 'Custom C++' },
            { label: 'Pygame', value: 'Pygame' },
            { label: 'Phaser', value: 'Phaser' },
            { label: 'Raylib', value: 'Raylib' },
            { label: 'Monogame', value: 'Monogame' },
          ],
          defaultValue: 'Godot',
        }),
        engineVersion: fields.text({ label: 'Versi Engine (contoh: Godot 4.3 Stable)' }),
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
        posterImage: fields.image({
          label: 'Poster Utama (16:9)',
          directory: 'public/assets/uploads',
          publicPath: '/assets/uploads',
        }),
        screenshots: fields.array(
          fields.image({
            label: 'Screenshot File',
            directory: 'public/assets/uploads',
            publicPath: '/assets/uploads',
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
            role: fields.text({ label: 'Peran dalam Tim' }),
          }),
          {
            label: 'Tim Mahasiswa Pengembang',
            itemLabel: (props) =>
              `${props.fields.id.value || 'Mahasiswa'} // ${props.fields.role.value || 'Peran'}`,
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
      label: '04 // EXPO',
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
            id: fields.text({ label: 'ID Foto (contoh: p24-1)' }),
            url: fields.image({
              label: 'Unggah File Foto',
              directory: 'public/assets/uploads',
              publicPath: '/assets/uploads',
            }),
            caption: fields.text({ label: 'Takarir / Keterangan Foto', multiline: true }),
            category: fields.select({
              label: 'Kategori Foto',
              options: [
                { label: 'Playtest & Booth', value: 'Playtest & Booth' },
                { label: 'Presentasi Tim', value: 'Presentasi Tim' },
                { label: 'Suasana Pameran', value: 'Suasana Pameran' },
                { label: 'Review Dosen', value: 'Review Dosen' },
                { label: 'Awarding', value: 'Awarding' },
              ],
              defaultValue: 'Playtest & Booth',
            }),
            time: fields.text({ label: 'Waktu Pengambilan (contoh: 10:30 WIB)' }),
          }),
          {
            label: 'Koleksi Foto Dokumentasi Galeri',
            itemLabel: (props) =>
              `[${props.fields.category.value}] ${props.fields.caption.value || 'Foto Dokumentasi'}`,
          }
        ),
      },
    }),
  },
});
