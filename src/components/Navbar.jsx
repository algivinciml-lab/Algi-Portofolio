import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/site.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" aria-label="ALGI ZAIF, ke halaman Home">
          ALGI<span>.</span>ZAIF
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav id="primary-nav" className={`navbar__nav ${open ? 'is-open' : ''}`} aria-label="Navigasi utama">
          <ul>
            {navLinks.map((l, i) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'is-active' : '')}>
                  <span className="navbar__num">0{i + 1}</span>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
