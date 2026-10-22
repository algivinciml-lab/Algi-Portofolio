import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Github } from 'lucide-react'
import { SiPython, SiDiscord, SiSqlite, SiDuckduckgo, SiReact, SiVite, SiVercel, SiGithub } from 'react-icons/si'
import SmartImage from './SmartImage.jsx'
import { PLACEHOLDER_IMAGE } from '../data/projects.js'

// Ikon buatan sendiri untuk logo yang tidak tersedia di react-icons (atau tergantung versinya).
function GeminiIcon({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 0C12 6.6 17.4 12 24 12C17.4 12 12 17.4 12 24C12 17.4 6.6 12 0 12C6.6 12 12 6.6 12 0Z" />
    </svg>
  )
}

function GroqIcon({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <text x="12" y="18" textAnchor="middle" fontSize="19" fontWeight="800" fontFamily="Inter, system-ui, sans-serif" fill="currentColor">G</text>
    </svg>
  )
}

function CssIcon({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M3 2l1.7 19L12 23l7.3-2L21 2H3z" fill="currentColor" />
      <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="800" fontFamily="Inter, system-ui, sans-serif" fill="#151714">3</text>
    </svg>
  )
}

// Kunci di sini dipakai pada field `logos` di src/data/projects.js.
const LOGO_LIBRARY = {
  python: { label: 'Python', color: '#FFD43B', Icon: SiPython },
  discordpy: { label: 'discord.py', color: '#7983F5', Icon: SiDiscord },
  gemini: { label: 'Google Gemini', color: '#8AB4F8', Icon: GeminiIcon },
  groq: { label: 'Groq', color: '#F55036', Icon: GroqIcon },
  sqlite: { label: 'SQLite', color: '#5BB3E0', Icon: SiSqlite },
  duckduckgo: { label: 'DuckDuckGo', color: '#DE5833', Icon: SiDuckduckgo },
  react: { label: 'React', color: '#61DAFB', Icon: SiReact },
  vite: { label: 'Vite', color: '#B79CFF', Icon: SiVite },
  vercel: { label: 'Vercel', color: '#F3F3EA', Icon: SiVercel },
  github: { label: 'GitHub', color: '#F3F3EA', Icon: SiGithub },
  css: { label: 'CSS', color: '#4EA8E8', Icon: CssIcon },
}

// Gambar, nama, deskripsi, teknologi, dan tautan semuanya berasal dari satu objek `project`.
export default function ProjectCard({ project, compact = false }) {
  const p = project
  const logos = (p.logos || []).map((key) => LOGO_LIBRARY[key]).filter(Boolean)
  const hasLogos = logos.length > 0

  // Animasi logo baru dimulai saat gambar project terlihat di layar.
  const mediaRef = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    if (!hasLogos) return undefined
    const el = mediaRef.current
    if (!el) return undefined
    if (typeof IntersectionObserver === 'undefined') {
      setSeen(true)
      return undefined
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [hasLogos])

  return (
    <article className={`project ${compact ? 'project--compact' : ''}`}>
      <figure className="project__media" ref={mediaRef}>
        <SmartImage src={p.image} fallback={p.placeholder || PLACEHOLDER_IMAGE} alt={p.imageAlt} loading="lazy" />

        {/* Dekorasi saja: teknologi yang sama sudah dibacakan lewat daftar tags di bawah */}
        {hasLogos && (
          <ul className={`project__logos ${seen ? 'is-in' : ''}`} aria-hidden="true">
            {logos.map(({ label, color, Icon }, i) => (
              <li key={label} className="project__logo" style={{ '--c': color, '--i': i }}>
                <span className="project__logo-float">
                  <span className="project__logo-icon"><Icon size={16} /></span>
                  <span className="project__logo-label">{label}</span>
                </span>
              </li>
            ))}
          </ul>
        )}
      </figure>

      <div className="project__body">
        <p className="project__meta mono-label">
          <span>{p.categoryLabel}</span>
          {!compact && <span className="project__status">{p.status}</span>}
        </p>
        <h3 className="project__name">{p.name}</h3>
        <p className="project__desc">{p.description}</p>

        {!compact && (
          <dl className="project__details">
            {p.goal && (
              <div>
                <dt>{p.goalLabel || 'Tujuan'}</dt>
                <dd>{p.goal}</dd>
              </div>
            )}
            {p.features?.length > 0 && (
              <div>
                <dt>{p.featuresLabel || 'Fitur yang sudah ada'}</dt>
                <dd>
                  <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                </dd>
              </div>
            )}
          </dl>
        )}

        <ul className="tags" aria-label="Teknologi yang digunakan">
          {p.tech.map((t) => <li key={t}>{t}</li>)}
        </ul>

        {!compact && (p.live || p.source) && (
          <div className="project__actions">
            {p.live && (
              <a className="btn btn--primary" href={p.live} target="_blank" rel="noopener noreferrer">
                {p.liveLabel || 'Live Demo'} <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
            {p.source && (
              <a className="btn btn--ghost" href={p.source} target="_blank" rel="noopener noreferrer">
                <Github size={16} aria-hidden="true" /> Source Code
              </a>
            )}
          </div>
        )}

        {compact && (
          <Link className="project__more" to="/portfolio">
            Lihat detail <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  )
}