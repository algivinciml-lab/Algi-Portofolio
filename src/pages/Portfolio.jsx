import { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects, filters } from '../data/projects.js'

export default function Portfolio() {
  const [active, setActive] = useState('all')

  const visible = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.categories.includes(active))),
    [active]
  )

  // Sembunyikan filter yang tidak punya project.
  const availableFilters = filters.filter(
    (f) => f.key === 'all' || projects.some((p) => p.categories.includes(f.key))
  )

  return (
    <div className="portfolio container">
      <header className="portfolio__head">
        <p className="mono-label reveal">Portfolio</p>
        <h1 className="reveal" style={{ '--d': '80ms' }}>Selected Work</h1>
        <p className="portfolio__lead reveal" style={{ '--d': '160ms' }}>
          Project yang sudah saya bangun: apa tujuannya, apa yang dipakai, dan fitur yang benar-benar sudah ada.
        </p>
      </header>

      <div className="portfolio__filters" role="group" aria-label="Filter kategori project">
        {availableFilters.map((f) => (
          <button
            key={f.key}
            type="button"
            className={active === f.key ? 'is-active' : ''}
            aria-pressed={active === f.key}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
        <span className="mono portfolio__count" aria-live="polite">{visible.length} project</span>
      </div>

      <div className="portfolio__grid">
        {visible.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  )
}
