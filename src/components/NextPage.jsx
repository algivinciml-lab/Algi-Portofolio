import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, ArrowUp } from 'lucide-react'
import { navLinks } from '../data/site.js'
import '../styles/next-page.css'

// Tombol LANJUT di bagian bawah setiap halaman.
// Urutan halaman mengikuti navLinks di src/data/site.js, jadi jika menu ditambah
// atau diurutkan ulang, tombol ini ikut menyesuaikan tanpa diubah.
export default function NextPage() {
  const { pathname } = useLocation()

  // Alamat yang tidak dikenal (halaman 404) diperlakukan seperti Home.
  const found = navLinks.findIndex((l) => l.to === pathname)
  const index = found === -1 ? 0 : found
  const isLast = index === navLinks.length - 1
  const next = isLast ? navLinks[0] : navLinks[index + 1]

  return (
    <nav className="next-page container" aria-label="Halaman berikutnya">
      <div className="next-page__inner">
        <div className="next-page__text">
          <p className="mono-label">
            {isLast ? 'Itu halaman terakhir' : `Halaman berikutnya · 0${index + 2}/0${navLinks.length}`}
          </p>
          <p className="next-page__title">{isLast ? 'Kembali ke awal' : next.label}</p>
        </div>
        <Link className="btn btn--primary next-page__btn" to={next.to}>
          {isLast ? (
            <>KEMBALI KE HOME <ArrowUp size={18} aria-hidden="true" /></>
          ) : (
            <>LANJUT <ArrowRight size={18} aria-hidden="true" /></>
          )}
        </Link>
      </div>
    </nav>
  )
}