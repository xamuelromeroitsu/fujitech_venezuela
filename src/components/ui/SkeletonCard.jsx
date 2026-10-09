import './SkeletonCard.css'

export default function SkeletonCard({ label = 'Cargando contenido', compact = false }) {
  return (
    <div
      className={`skeleton-card ${compact ? 'skeleton-card--compact' : ''}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      {/* Las formas visuales son decorativas; el estado se comunica con este texto. */}
      <span className="skeleton-card__sr">{label}</span>
      <span className="skeleton-card__icon" aria-hidden="true" />
      <span className="skeleton-card__content" aria-hidden="true">
        <span className="skeleton-card__shape skeleton-card__title" />
        <span className="skeleton-card__shape skeleton-card__line skeleton-card__line--wide" />
        <span className="skeleton-card__shape skeleton-card__line skeleton-card__line--short" />
        {!compact && <span className="skeleton-card__shape skeleton-card__action" />}
      </span>
    </div>
  )
}