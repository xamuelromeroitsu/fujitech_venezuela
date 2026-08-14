import './Card.css'

export default function Card({ title, subtitle, icon, children, className = '' }) {
  return (
    <article className={`card ${className}`}>
      {icon && <div className="card__icon" aria-hidden="true">{icon}</div>}
      {title && <h3 className="card__title">{title}</h3>}
      {subtitle && <p className="card__subtitle">{subtitle}</p>}
      {children && <div className="card__body">{children}</div>}
    </article>
  )
}
