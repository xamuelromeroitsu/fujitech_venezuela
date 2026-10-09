import './Loader.css'

export default function Loader({ size = 'md', fullscreen = false, label = 'Cargando…' }) {
  return (
    <div
      className={`loader ${fullscreen ? 'loader--fullscreen' : ''}`}
      role="status"
      aria-live="polite"
    >
      {/* La imagen es decorativa; el texto oculto anuncia el estado a lectores de pantalla. */}
      <span className={`loader__mark loader__mark--${size}`} aria-hidden="true">
        <img src="/images/company/letra_webp.webp" alt="" />
      </span>
      <span className="loader__sr">{label}</span>
    </div>
  )
}