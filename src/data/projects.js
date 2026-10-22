// Tambah / ubah / hapus entri di sini. Komponen tidak perlu disentuh.
//
// image       : taruh gambar PNG asli di public/images/projects/ (atau public/images/learning/
//               untuk catatan belajar) dengan nama file yang sama seperti di bawah.
//               Selama file belum ada, placeholder otomatis tampil.
// placeholder : (opsional) gambar cadangan khusus entri ini
// category    : 'web' | 'architecture' | 'ai'   (dipakai filter di halaman Portfolio)
// goalLabel / featuresLabel : (opsional) mengganti judul bagian "Tujuan" / "Fitur yang sudah ada"
// featured    : true -> tampil di "Selected Projects" pada Home
// live / source : '' = tombol disembunyikan
// logos       : (opsional) logo library yang melayang di atas gambar project. Isi dengan kunci:
//               'python' | 'discordpy' | 'gemini' | 'groq' | 'sqlite' | 'duckduckgo' |
//               'react' | 'vite' | 'vercel' | 'github' | 'css'  (daftar lengkap ada di ProjectCard.jsx)

export const PLACEHOLDER_IMAGE = '/images/projects/placeholder.svg'
const LEARNING_PLACEHOLDER = '/images/learning/placeholder.svg'

export const projects = [
  {
    id: 'algi-asisten',
    name: 'ALGI ASISTEN',
    categories: ['architecture'],
    categoryLabel: 'System Architecture / LLM-Powered Discord Bot',
    status: 'Completed',
    featured: true,
    image: '/images/projects/algi-asisten.png',
    imageAlt: 'Tampilan bot Discord ALGI ASISTEN (placeholder sampai gambar asli ditambahkan)',
    description:
      'Bot Discord berbasis LLM berbahasa Indonesia. Sistem routing memilih model yang sesuai untuk tiap pertanyaan (Groq, Gemini, atau Gemini dengan Google Search), sementara database SQLite menyimpan identitas pengguna, memory, dan riwayat percakapan.',
    goal:
      'Membuat asisten di server Discord yang bisa dipakai teman-teman sehari-hari, sekaligus belajar merancang sistem yang menggabungkan lebih dari satu LLM, database, dan penanganan kegagalan API.',
    tech: ['Python', 'discord.py', 'Google Gemini', 'Groq', 'SQLite', 'DuckDuckGo Search'],
    logos: ['python', 'discordpy', 'gemini', 'groq', 'sqlite', 'duckduckgo'],
    features: [
      'Chat lewat prefix #, dengan verifikasi password via DM',
      'Router tiga jalur (Groq, Gemini, Gemini + Google Search) dengan cadangan ke Gemini jika Groq gagal',
      'Penyimpanan memory dan riwayat percakapan di SQLite',
      'Pencarian web untuk pertanyaan yang butuh informasi terbaru',
      'Pesan terjadwal lintas server dan sambutan member join/keluar',
    ],
    live: 'https://algi-asisten.vercel.app/',
    liveLabel: 'Bot Website',
    source: '',
  },
  {
    id: 'algi-web',
    name: 'Personal Branding Website',
    categories: ['web'],
    categoryLabel: 'Frontend Web Development',
    status: 'Completed',
    featured: true,
    image: '/images/projects/algi-web.png',
    imageAlt: 'Tampilan website personal algi-web (placeholder sampai screenshot asli ditambahkan)',
    description:
      'Website personal pertama saya yang dibangun dengan Vite, React, dan CSS, lalu di-deploy ke Vercel dari repository GitHub. Dari project inilah saya belajar alur build, deploy, dan debug error produksi.',
    goal:
      'Punya halaman sendiri di internet dan belajar alur lengkap dari kode lokal sampai live: build, deploy, dan memperbaiki error yang hanya muncul di server.',
    tech: ['React', 'Vite', 'CSS', 'GitHub', 'Vercel'],
    logos: ['react', 'vite', 'vercel', 'github', 'css'],
    features: [
      'Dibangun dengan React + Vite dan CSS biasa',
      'Deploy otomatis di Vercel dari branch main',
    ],
    live: 'https://algi-web.vercel.app',
    liveLabel: 'Web Personal',
    source: '',
  },

  // ---- Catatan belajar AI: bukan project jadi, melainkan proses belajar. ----
  {
    id: 'llm-testing',
    name: 'Testing an LLM Before Integration',
    categories: ['ai'],
    categoryLabel: 'AI Learning / LLM Testing',
    status: 'In Progress',
    featured: false,
    image: '/images/learning/llm-testing.png',
    placeholder: LEARNING_PLACEHOLDER,
    imageAlt: 'Foto progres belajar menguji LLM (placeholder sampai gambar asli ditambahkan)',
    description:
      'Sebelum sebuah LLM dipasang ke bot Discord, saya mengujinya dulu lewat program Python terpisah. Dari situ saya melihat bagaimana model menjawab dan bagaimana perilakunya, lalu menentukan model mana yang layak dihubungkan ke program Python yang berjalan di Discord.',
    goal:
      'Memastikan sebuah model cocok sebelum dimasukkan ke aplikasi sungguhan, supaya masalahnya ketahuan lebih awal dan bukan saat sudah dipakai teman-teman.',
    goalLabel: 'Tujuan belajar',
    featuresLabel: 'Yang saya lakukan',
    tech: ['Python', 'Gemini API', 'SQLite', 'Google Search'],
    features: [
      'Mengirim pertanyaan ke model lewat API dari program Python dan membaca responsnya',
      'Menyimpan riwayat pengujian di database SQLite',
      'Mencoba model dengan pencarian Google untuk pertanyaan yang butuh informasi terbaru',
      'Menerapkan hasilnya pada program Python yang dijalankan sebagai bot Discord',
    ],
    live: '',
    source: '',
  },
  {
    id: 'neural-network-linear-algebra',
    name: 'Neural Network and Linear Algebra',
    categories: ['ai'],
    categoryLabel: 'AI Learning / Fundamentals',
    status: 'Learning',
    featured: false,
    image: '/images/learning/neural-network.png',
    placeholder: LEARNING_PLACEHOLDER,
    imageAlt: 'Foto progres belajar neural network dan aljabar linear (placeholder sampai gambar asli ditambahkan)',
    description:
      'Saya mempelajari cara kerja model di balik LLM. Neural network tersusun dari sangat banyak neuron yang disusun berlapis-lapis. Setiap koneksi punya bobot yang disesuaikan saat training, sehingga jaringan belajar mengenali pola dan menghasilkan jawaban yang paling mungkin.',
    goal:
      'Memahami model sebagai sistem yang bisa dijelaskan, bukan sekadar kotak hitam, supaya saya lebih paham mengapa sebuah model menjawab seperti itu.',
    goalLabel: 'Tujuan belajar',
    featuresLabel: 'Yang sedang saya pelajari',
    tech: ['Neural Network', 'Vector', 'Matrix', 'Linear Algebra'],
    features: [
      'Neural network: jaringan neuron berlapis dengan bobot yang dipelajari saat training',
      'Vektor: teks diubah menjadi deretan angka agar bisa dihitung oleh model',
      'Matriks: perkalian matriks menghitung perubahan data di setiap lapisan jaringan',
      'Aljabar linear: dasar yang menghubungkan vektor dan matriks dalam cara kerja model',
    ],
    live: '',
    source: '',
  },

  // ---- Template project yang belum diisi. Hapus tanda komentar jika sudah siap. ----
  // {
  //   id: 'algistore',
  //   name: 'AlgiStore',
  //   categories: ['web'],
  //   categoryLabel: 'Frontend Web Development',
  //   status: 'In Progress',
  //   featured: false,
  //   image: '/images/projects/algistore.png',
  //   imageAlt: 'Screenshot AlgiStore',
  //   description: 'Website untuk menampilkan layanan top-up game dan jasa terkait.',
  //   goal: '',
  //   tech: ['React', 'Vite', 'CSS'],
  //   features: [],
  //   live: '',
  //   liveLabel: 'Live Demo',
  //   source: '',
  // },
]

export const filters = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web Development' },
  { key: 'architecture', label: 'System Architecture' },
  { key: 'ai', label: 'AI' },
]