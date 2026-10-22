// Satu tempat untuk data pribadi & tautan. Kosongkan string ('') untuk menyembunyikan item.
export const site = {
  nickname: 'Algi Zaif',
  fullName: 'Muhammad Hudzaif Al Ghifari',
  status: 'Mahasiswa Ilmu Komputer dan Teknologi Digital',

  // ISI: alamat email kamu. Selama kosong, tombol email disembunyikan / dinonaktifkan.
  email: '',

  instagram: 'https://instagram.com/zfalgiz_',
  // ISI: URL LinkedIn kamu jika ada.
  linkedin: '',

  // WhatsApp: nomor tanpa tanda + atau spasi (format internasional)
  whatsapp: '6281252340475',
  whatsappDisplay: '+62 812-5234-0475',

  // Discord: ID akun kamu
  discordId: '1504177590959738943',

  // ISI: link undangan permanen Gen Z Server (contoh: https://discord.gg/xxxxxx).
  // Selama kosong, tombol di halaman Komunitas mengarah ke profil Discord kamu.
  discordInvite: 'https://discord.gg/3WhFbqYDk',

  // Foto profil: file di public/images/profile/
  profileImage: '/images/profile/profile.png',
  profileFallback: '/images/profile/profile.png',
}

// Tautan siap pakai, dibuat dari data di atas
export const whatsappUrl = site.whatsapp ? `https://wa.me/${site.whatsapp}` : ''
export const discordUrl = site.discordId ? `https://discord.com/users/${site.discordId}` : ''

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Me' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/komunitas', label: 'Komunitas' },
  { to: '/contact', label: 'Contact' },
]