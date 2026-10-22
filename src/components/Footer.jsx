import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Mail } from 'lucide-react'
import { FaDiscord, FaWhatsapp } from 'react-icons/fa'
import { navLinks, site, whatsappUrl, discordUrl } from '../data/site.js'

export function SocialLinks({ className = '' }) {
  const items = [
    { href: site.linkedin, label: 'LinkedIn', Icon: Linkedin },
    { href: site.instagram, label: 'Instagram', Icon: Instagram, brand: 'instagram' },
    { href: whatsappUrl, label: 'WhatsApp', Icon: FaWhatsapp, brand: 'whatsapp' },
    { href: discordUrl, label: 'Discord', Icon: FaDiscord, brand: 'discord' },
    { href: site.email && `mailto:${site.email}`, label: 'Email', Icon: Mail },
  ].filter((i) => i.href)

  return (
    <ul className={`social ${className}`}>
      {items.map(({ href, label, Icon, brand }) => (
        <li key={label}>
          <a href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" aria-label={label} className={brand ? `social__${brand}` : undefined}>
            <Icon size={18} aria-hidden="true" />
            <span>{label}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__brand">ALGI<span>.</span>ZAIF</p>
          <p className="footer__note">Mahasiswa yang terus membangun dan belajar.</p>
        </div>
        <nav aria-label="Navigasi footer">
          <ul className="footer__nav">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>
        <SocialLinks />
      </div>
      <div className="container footer__legal">
        <small>© {new Date().getFullYear()} {site.fullName}</small>
        <small className="mono">Dibuat dengan React + Vite</small>
      </div>
    </footer>
  )
}