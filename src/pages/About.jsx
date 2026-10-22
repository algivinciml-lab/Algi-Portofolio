import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import CoderIllustration from '../components/CoderIllustration.jsx'
import { site } from '../data/site.js'

// Label jujur, bukan persentase.
const skills = [
  {
    group: 'Frontend',
    items: [
      { name: 'React', level: 'Used in Projects' },
      { name: 'Vite', level: 'Used in Projects' },
      { name: 'CSS', level: 'Used in Projects' },
    ],
  },
  {
    group: 'AI and LLM Integration',
    items: [
      { name: 'Gemini API', level: 'Used in Projects' },
      { name: 'Groq API', level: 'Used in Projects' },
      { name: 'Neural network basics', level: 'Exploring' },
    ],
  },
  {
    group: 'Programming',
    items: [
      { name: 'Python', level: 'Used in Projects' },
      { name: 'JavaScript', level: 'Used in Projects' },
    ],
  },
  {
    group: 'Tools and Workflow',
    items: [
      { name: 'Git & GitHub', level: 'Used in Projects' },
      { name: 'Vercel deploy', level: 'Used in Projects' },
      { name: 'VS Code', level: 'Used in Projects' },
    ],
  },
  {
    group: 'Backend',
    items: [
      { name: 'Database SQLite', level: 'Used in Projects' },
      { name: 'Routing LLM (Groq / Gemini)', level: 'Used in Projects' },
      { name: 'Pengolahan input pengguna', level: 'Used in Projects' },
      { name: 'Identitas pengguna (via Discord ID)', level: 'Used in Projects' },
      { name: 'Backend lanjutan', level: 'Learning' },
      { name: 'Project berbasis backend', level: 'Learning' },
    ],
    note: 'Pengalaman backend saya berasal dari ALGI ASISTEN: membangun database SQLite, mengatur routing LLM, memproses input pengguna, dan mengenali identitas pengguna. Selebihnya masih tahap belajar, dan saya mulai berlatih lewat project lain yang membutuhkan backend.',
  },
]

const learning = [
  { t: 'React dan frontend architecture', d: 'Memecah UI jadi komponen yang jelas dan memisahkan data dari tampilan.' },
  { t: 'Backend development', d: 'Sedang belajar dan mulai berlatih dengan membangun project yang membutuhkan backend, untuk memahami cara server, database, dan API bekerja di balik sebuah aplikasi.' },
  { t: 'Python dan pengembangan aplikasi', d: 'Membuat aplikasi yang lebih besar dari satu file: struktur, database, penanganan error.' },
  { t: 'Integrasi API dan LLM', d: 'Memanggil model bahasa dari kode, memilih model sesuai tugas, dan menyiapkan cadangan saat gagal.' },
  { t: 'Dasar neural network', d: 'Mempelajari cara kerja AI supaya tidak hanya memakai model sebagai kotak hitam.' },
]

export default function About() {
  return (
    <div className="about container">
      <section className="about__intro">
        <div className="about__intro-text">
          <p className="mono-label reveal">About Me</p>
          <h1 className="reveal" style={{ '--d': '80ms' }}>
            Saya {site.nickname}.
            <span> Masih belajar, sambil membangun.</span>
          </h1>
          <p className="about__lead reveal" style={{ '--d': '160ms' }}>
            Nama lengkap saya <strong>{site.fullName}</strong>, biasa dipanggil <strong>{site.nickname}</strong>. Saya {site.status.toLowerCase()}.
          </p>
        </div>
        <div className="about__art reveal" style={{ '--d': '120ms' }}>
          <CoderIllustration />
        </div>
      </section>

      <section className="about__block">
        <SectionHeading index="01" label="My Journey" title="Perjalanan saya" />
        <div className="about__prose">
          {/* DRAFT: ganti dengan ceritamu sendiri (kapan mulai, apa yang memicu, dll). */}
          <p>
            Saya belajar programming dengan membuat hal yang bisa dipakai. Di sisi web, saya membangun website dengan React, Vite, dan CSS, lalu men-deploy-nya ke Vercel. Dari situ saya belajar bahwa kode yang jalan di laptop belum tentu langsung jalan di server.
          </p>
          <p>
            Di sisi Python, saya membuat bot Discord yang memanggil model bahasa lewat API. Bot itu memakai lebih dari satu model, jadi saya belajar soal routing, penyimpanan data dengan SQLite, dan apa yang terjadi saat sebuah API gagal.
          </p>
          <p>
            Saya belum menganggap diri ahli di bidang mana pun. Yang saya punya adalah project nyata dan kebiasaan memperbaikinya sedikit demi sedikit.
          </p>
        </div>
      </section>

      <section className="about__block">
        <SectionHeading index="02" label="What I Am Learning" title="Yang sedang saya pelajari" />
        <ul className="learning">
          {learning.map((l) => (
            <li key={l.t}><h3>{l.t}</h3><p>{l.d}</p></li>
          ))}
        </ul>
      </section>

      <section className="about__block">
        <SectionHeading index="03" label="Technical Skills" title="Teknologi yang saya pakai">
          Label menunjukkan posisi saya sebenarnya: <em>Used in Projects</em> berarti sudah dipakai di project, <em>Learning</em> sedang dipelajari, <em>Exploring</em> baru tahap menjelajah.
        </SectionHeading>
        <div className="skills">
          {skills.map((g) => (
            <div className="skills__group" key={g.group}>
              <h3 className="mono-label">{g.group}</h3>
              <ul>
                {g.items.map((s) => (
                  <li key={s.name}>
                    <span>{s.name}</span>
                    <span className={`level level--${s.level.split(' ')[0].toLowerCase()}`}>{s.level}</span>
                  </li>
                ))}
              </ul>
              {g.note && <p className="skills__note">{g.note}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="about__block about__direction">
        <SectionHeading index="04" label="Personal Direction" title="Arah yang saya tuju" />
        <p className="about__prose-lg">
          Saya ingin benar-benar paham bagaimana frontend, backend, dan model AI bekerja bersama dalam satu aplikasi: dari tombol yang diklik pengguna, lewat server dan API, sampai jawaban dari model kembali ke layar.
        </p>
        <Link className="btn btn--primary" to="/portfolio">Lihat hasilnya di Portfolio</Link>
      </section>
    </div>
  )
}