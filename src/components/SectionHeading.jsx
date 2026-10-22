export default function SectionHeading({ index, label, title, children }) {
  return (
    <header className="section-heading">
      <p className="mono-label">
        {index && <span className="section-heading__index">{index}</span>}
        {label}
      </p>
      <h2>{title}</h2>
      {children && <p className="section-heading__lead">{children}</p>}
    </header>
  )
}
