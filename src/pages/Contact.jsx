import { ArrowUpRight, Instagram, Linkedin, Mail } from 'lucide-react'
import { FaDiscord, FaWhatsapp } from 'react-icons/fa'
import { site, whatsappUrl, discordUrl } from '../data/site.js'

export default function Contact() {
  // Urutan tampil: yang paling cepat untuk chat ada di depan.
  // Item yang href-nya kosong (belum diisi di site.js) otomatis disembunyikan.
  const links = [
    { label: 'WhatsApp', value: site.whatsappDisplay, href: whatsappUrl, Icon: FaWhatsapp },
    { label: 'Discord', value: 'Kirim pesan di Discord', href: discordUrl, Icon: FaDiscord },
    { label: 'Instagram', value: site.instagram.replace('https://', ''), href: site.instagram, Icon: Instagram },
    { label: 'Email', value: site.email, href: site.email && `mailto:${site.email}`, Icon: Mail },
    { label: 'LinkedIn', value: site.linkedin.replace('https://', ''), href: site.linkedin, Icon: Linkedin },
  ].filter((l) => l.href)

  return (
    <div className="contact container">
      <header className="contact__head">
        <p className="mono-label reveal">Contact</p>
        <h1 className="reveal" style={{ '--d': '80ms' }}>Let&apos;s Connect<span>.</span></h1>
        <p className="contact__lead reveal" style={{ '--d': '160ms' }}>
          Ada project yang ingin didiskusikan, ide kolaborasi, atau sekadar ingin bertanya soal yang pernah saya bangun? Chat saya langsung lewat media sosial di bawah ini, saya senang ngobrol.
        </p>
      </header>

      <ul className="contact__links">
        {links.map(({ label, value, href, Icon }) => (
          <li key={label}>
            <a href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer">
              <Icon size={24} aria-hidden="true" />
              <span className="contact__link-text">
                <span className="mono-label">{label}</span>
                <span>{value}</span>
              </span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}