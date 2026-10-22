import { Link } from 'react-router-dom'
import { ArrowUpRight, Hash, Music, Volume2 } from 'lucide-react'
import { FaDiscord } from 'react-icons/fa'
import SmartImage from '../components/SmartImage.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { site, discordUrl } from '../data/site.js'
import { PLACEHOLDER_IMAGE } from '../data/projects.js'
import '../styles/komunitas.css'

// Semua isi halaman ada di sini, mudah diubah tanpa menyentuh tampilan.
const SERVER_NAME = 'Gen Z Server'

// Bubble chat dekoratif di sekitar banner hero. Ubah teks/nama di sini.
// pos     : a | b | c (posisi diatur di komunitas.css)
// bot     : true -> avatar lime dan badge BOT
// typing  : true -> tampil titik "sedang mengetik" (text diabaikan)
const bubbles = [
  { id: 'a', pos: 'a', name: 'gen-z-member', initial: 'G', text: 'ada yang online? 👋' },
  { id: 'b', pos: 'b', name: 'gen-z-member', initial: 'Z', text: 'gas belajar bareng' },
  { id: 'c', pos: 'c', name: 'ALGI ASISTEN', initial: 'A', bot: true, typing: true },
]

const purposes = [
  { t: 'Belajar bareng', d: 'Tempat bertanya, berbagi catatan, dan saling membantu memahami hal baru, tanpa takut dianggap salah.' },
  { t: 'Berbagi pengalaman', d: 'Cerita soal kuliah, project, dan hal yang sedang dijalani, supaya yang lain bisa belajar dari prosesnya.' },
  { t: 'Mencari koneksi', d: 'Bertemu orang-orang dengan minat yang sama, dari teman ngobrol sampai calon partner kolaborasi.' },
  { t: 'Berdiskusi', d: 'Ruang tukar pikiran lewat teks maupun voice channel, dari topik serius sampai yang ringan.' },
  { t: 'Nongkrong santai', d: 'Ngobrol, bercanda, dan seru-seruan bareng. Belajar tidak harus selalu serius.' },
  { t: 'Musik dan gaming', d: 'Memutar lagu favorit lewat bot musik dan mabar bareng di voice channel.' },
]

// Hanya channel yang terbuka untuk member.
const channelGroups = [
  {
    name: 'Lobby',
    channels: [{ n: 'welcome', d: 'Sambutan untuk member baru.' }],
  },
  {
    name: 'Informasi',
    channels: [
      { n: 'rules', d: 'Aturan server.' },
      { n: 'about-server', d: 'Penjelasan tentang server ini.' },
    ],
  },
  {
    name: 'Chat Bot',
    channels: [
      { n: 'bot-music', d: 'Memutar dan meminta lagu lewat bot musik.' },
      { n: 'chat-bot-ai', d: 'Ngobrol dengan ALGI ASISTEN.' },
    ],
  },
  {
    name: 'Public Chat',
    channels: [{ n: 'chat-public', d: 'Tempat nongkrong dan ngobrol santai sesama member.' }],
  },
  {
    name: 'Voice Channel',
    voice: true,
    channels: [
      { n: 'Chill & Coffe', d: 'Bersantai sambil ngobrol.' },
      { n: 'Gaming Room', d: 'Mabar bareng.' },
      { n: 'Diskusi', d: 'Berdiskusi lewat suara.' },
    ],
  },
]

// Contoh percakapan di tiap kartu bot. Ini ilustrasi tampilan, bukan rekaman chat asli.
// who  : nama pengirim, tone : warna avatar, app : tampilkan label APP
// text : pesan biasa, embed : kotak seperti pesan embed Discord (judul + isi)
const MUSIC_EMBED = { icon: true, line: ['Started playing ', { b: 'Moonlight' }, ' by ', { b: 'XXXTENTACION' }] }

const bots = [
  {
    name: 'ALGI ASISTEN',
    role: 'AI bot',
    text: 'Bot asisten berbasis AI buatan saya sendiri. Ketik # di awal pesan di channel chat-bot-ai untuk mengobrol. Ada batas 10 chat per hari dan verifikasi identitas lebih dulu.',
    link: { to: '/portfolio', label: 'Lihat project-nya' },
    chat: [
      { who: 'User', tone: '#8a8f82', text: '#Hai, bisa ajari saya matematika algebra?' },
      {
        who: 'ALGI ASISTEN', tone: '#c5e878', app: true,
        text: 'Bisa! Aljabar itu belajar memakai huruf sebagai pengganti angka yang belum diketahui. Contoh: x + 3 = 7, jadi x = 4. Mau mulai dari persamaan satu variabel?',
      },
    ],
  },
  {
    name: 'Jockie Music',
    role: 'Musik',
    text: 'Bot untuk memutar lagu favorit di voice channel. Masuk ke voice channel, lalu gunakan perintah musik di channel bot-music.',
    chat: [
      { who: 'User', tone: '#8a8f82', text: 'm!p Moonlight xxxtentacion' },
      { who: 'Jockie Music', tone: '#e0356b', app: true, embed: MUSIC_EMBED },
    ],
  },
  {
    name: 'Bot Zaif Suka Tidur',
    role: 'Pendukung dan layanan',
    text: 'Bot layanan server dengan fitur chat lewat perintah /Chat. Bot ini juga mendampingi Jockie Music dengan menampilkan lirik lagu yang sedang diputar.',
    chat: [
      { who: 'Jockie Music', tone: '#e0356b', app: true, embed: MUSIC_EMBED },
      {
        who: 'Bot Zaif Suka Tidur', tone: '#8b7cf6', app: true,
        embed: { title: 'Moonlight - XXXTENTACION', note: 'Lirik lagu yang sedang diputar ditampilkan di sini, baris demi baris.' },
      },
    ],
  },
]

function ChatMessage({ m }) {
  return (
    <div className="chat__row">
      <span className="chat__avatar" style={{ '--c': m.tone }} aria-hidden="true">{m.who[0]}</span>
      <div className="chat__main">
        <p className="chat__who">
          <span className="chat__name" style={{ '--c': m.tone }}>{m.who}</span>
          {m.app && <span className="chat__app">APP</span>}
        </p>
        {m.text && <p className="chat__text">{m.text}</p>}
        {m.embed && (
          <div className="chat__embed" style={{ '--c': m.tone }}>
            {m.embed.icon && <span className="chat__spotify" aria-hidden="true"><Music size={13} /></span>}
            {m.embed.line ? (
              <p className="chat__text">
                {m.embed.line.map((part, i) => (typeof part === 'string' ? part : <b key={i}>{part.b}</b>))}
              </p>
            ) : (
              <div>
                <p className="chat__embed-title">{m.embed.title}</p>
                <p className="chat__embed-note">{m.embed.note}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Komunitas() {
  // Jika link undangan belum diisi, arahkan ke profil Discord pemilik.
  const joinUrl = site.discordInvite || discordUrl
  const joinLabel = site.discordInvite ? 'Gabung ke Discord' : 'Minta undangan lewat Discord'

  return (
    <div className="komunitas container">
      <section className="komunitas__hero">
        <div className="komunitas__hero-text">
          <p className="mono-label reveal">Komunitas</p>
          <h1 className="reveal" style={{ '--d': '80ms' }}>
            {SERVER_NAME}<span>.</span>
          </h1>
          <p className="komunitas__lead reveal" style={{ '--d': '160ms' }}>
            Komunitas Discord untuk Gen Z yang ingin belajar, berbagi pengalaman, mencari koneksi, dan berdiskusi. Saya membangun server ini sebagai ruang yang santai tapi tetap bermanfaat.
          </p>
          <div className="komunitas__cta reveal" style={{ '--d': '240ms' }}>
            {joinUrl && (
              <a className="btn btn--primary" href={joinUrl} target="_blank" rel="noopener noreferrer">
                <FaDiscord size={18} aria-hidden="true" /> {joinLabel} <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
            <Link className="btn btn--ghost" to="/contact">Hubungi saya</Link>
          </div>
        </div>

        <div className="komunitas__visual">
          <figure className="komunitas__banner reveal" style={{ '--d': '120ms' }}>
            <SmartImage
              src="/images/community/gen%20z%20server.png"
              fallback={PLACEHOLDER_IMAGE}
              alt="Banner Welcome to Gen Z Server"
              width="1000"
              height="1000"
            />
          </figure>

          {/* Dekorasi saja: disembunyikan dari screen reader */}
          <div className="komunitas__bubbles" aria-hidden="true">
            {bubbles.map((b) => (
              <div key={b.id} className={`komunitas__bubble komunitas__bubble--${b.pos}`}>
                <div className="komunitas__bubble-body">
                  <span className={`komunitas__avatar ${b.bot ? 'komunitas__avatar--bot' : ''}`}>{b.initial}</span>
                  <span className="komunitas__bubble-text">
                    <span className="komunitas__bubble-name">
                      {b.name}
                      {b.bot && <em className="komunitas__badge">BOT</em>}
                    </span>
                    {b.typing ? (
                      <span className="komunitas__typing">
                        <i /><i /><i />
                        <span className="komunitas__typing-label">sedang mengetik</span>
                      </span>
                    ) : (
                      <span className="komunitas__bubble-msg">{b.text}</span>
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="komunitas__block" aria-labelledby="k-tujuan">
        <SectionHeading index="01" label="Tujuan" title={<span id="k-tujuan">Untuk apa server ini dibuat</span>}>
          Gen Z Server dibuat sebagai tempat berkumpul yang ramah, bukan sekadar ruang obrolan.
        </SectionHeading>
        <ul className="komunitas__purposes">
          {purposes.map((p, i) => (
            <li key={p.t}>
              <span className="mono komunitas__num">0{i + 1}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="komunitas__block" aria-labelledby="k-isi">
        <SectionHeading index="02" label="Isi Server" title={<span id="k-isi">Apa saja yang ada di dalamnya</span>}>
          Channel yang terbuka untuk member, dikelompokkan menurut kegunaannya.
        </SectionHeading>
        <div className="komunitas__channels">
          {channelGroups.map((g) => (
            <div className="komunitas__group" key={g.name}>
              <h3 className="mono-label">{g.name}</h3>
              <ul>
                {g.channels.map((c) => (
                  <li key={c.n}>
                    {g.voice ? <Volume2 size={18} aria-hidden="true" /> : <Hash size={18} aria-hidden="true" />}
                    <span className="komunitas__ch-text">
                      <span className="komunitas__ch-name">{c.n}</span>
                      <span className="komunitas__ch-desc">{c.d}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="komunitas__block" aria-labelledby="k-bot">
        <SectionHeading index="03" label="Bot Server" title={<span id="k-bot">Tiga bot yang menemani</span>}>
          Bot membantu server tetap hidup, dari ngobrol dengan AI sampai memutar musik.
        </SectionHeading>
        <ul className="komunitas__bots">
          {bots.map((b) => (
            <li key={b.name}>
              <p className="mono-label">{b.role}</p>
              <h3>{b.name}</h3>
              <p>{b.text}</p>
              <div className="chat" role="group" aria-label={`Contoh percakapan dengan ${b.name}`}>
                {b.chat.map((m, i) => <ChatMessage key={i} m={m} />)}
                <p className="chat__caption mono">Contoh tampilan percakapan</p>
              </div>
              {b.link && <Link className="komunitas__more" to={b.link.to}>{b.link.label} <ArrowUpRight size={15} aria-hidden="true" /></Link>}
            </li>
          ))}
        </ul>
      </section>

      <section className="komunitas__join">
        <h2>Ayo ngobrol bareng<span>.</span></h2>
        <p>Siapa pun boleh bergabung, selama mau belajar dan saling menghargai.</p>
        {joinUrl && (
          <a className="btn btn--primary" href={joinUrl} target="_blank" rel="noopener noreferrer">
            <FaDiscord size={18} aria-hidden="true" /> {joinLabel} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
      </section>
    </div>
  )
}