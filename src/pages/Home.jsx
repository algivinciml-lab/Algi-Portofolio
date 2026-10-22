import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import HelloPhoto from '../components/HelloPhoto.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { SocialLinks } from '../components/Footer.jsx'
import { projects } from '../data/projects.js'
import { site } from '../data/site.js'

const interests = [
  { title: 'Frontend Development', text: 'React, JavaScript, dan CSS. Belajar menyusun komponen dan layout yang rapi, bukan sekadar yang jalan.' },
  { title: 'Python Application Development', text: 'Membangun aplikasi dan bot dengan Python, lengkap dengan database dan struktur kode yang bisa dirawat.' },
  { title: 'LLM Integration', text: 'Menyambungkan model bahasa ke dalam program lewat API, termasuk memilih model dan menangani error.' },
  { title: 'AI and Neural Network Exploration', text: 'Masih tahap belajar: memahami cara kerja AI dan neural network di balik model yang saya pakai.' },
]

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <>
      <section className="hero container">
        {/* Bagian atas: label, nama, nama lengkap */}
        <div className="hero__top">
          <p className="mono-label reveal" style={{ '--d': '0ms' }}>{site.status}</p>
          <h1 className="hero__name reveal" style={{ '--d': '80ms' }}>
            Algi<br />Zaif<span className="hero__dot">.</span>
          </h1>
          <p className="hero__full mono reveal" style={{ '--d': '140ms' }}>{site.fullName}</p>
        </div>

        <figure className="hero__photo reveal" style={{ '--d': '160ms' }}>
          <div className="hero__photo-frame">
            <HelloPhoto src={site.profileImage} fallback={site.profileFallback} alt={`Foto profil ${site.nickname}`} />
          </div>
          <figcaption className="mono">{site.nickname} — {new Date().getFullYear()}</figcaption>
        </figure>

        {/* Bagian bawah: headline, deskripsi, tombol, sosial */}
        <div className="hero__bottom">
          <p className="hero__headline reveal" style={{ '--d': '200ms' }}>
            Membangun website dengan React, bot dengan Python, dan mencari tahu bagaimana model AI bisa hidup di dalam aplikasi.
          </p>
          <p className="hero__desc reveal" style={{ '--d': '260ms' }}>
            Saya masih belajar, dan cara belajar saya adalah membuat sesuatu yang benar-benar jalan. Di sini ada project yang sudah saya bangun, apa tujuannya, dan apa saja yang dipakai.
          </p>
          <div className="hero__cta reveal" style={{ '--d': '320ms' }}>
            <Link className="btn btn--primary" to="/portfolio">Explore My Projects <ArrowRight size={16} aria-hidden="true" /></Link>
            <Link className="btn btn--ghost" to="/about">About Me</Link>
          </div>
          <SocialLinks className="hero__social reveal" />
        </div>
      </section>

      <section className="home-projects container" aria-labelledby="sel-title">
        <SectionHeading index="01" label="Selected Projects" title={<span id="sel-title">Yang sudah saya bangun</span>}>
          Dua project yang paling menggambarkan apa yang sedang saya kerjakan.
        </SectionHeading>
        <div className="home-projects__grid">
          {featured.map((p) => <ProjectCard key={p.id} project={p} compact />)}
        </div>
        <Link className="btn btn--ghost home-projects__all" to="/portfolio">Lihat semua project <ArrowRight size={16} aria-hidden="true" /></Link>
      </section>

      <section className="interests container" aria-labelledby="int-title">
        <SectionHeading index="02" label="Technical Interests" title={<span id="int-title">Fokus belajar saya</span>} />
        <ol className="interests__list">
          {interests.map((it, i) => (
            <li key={it.title}>
              <span className="interests__num mono">0{i + 1}</span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}