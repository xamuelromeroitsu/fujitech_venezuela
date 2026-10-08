import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button'
import { IconArrowRight, IconGridPattern } from '../../components/icons'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-pattern" aria-hidden="true">
        <IconGridPattern width={120} height={120} spacing={24} dotSize={1} color={ '#0f1218' } opacity={0.04} />
      </div>
      <div className="container hero__inner">
        <div className="hero__badge-wrapper">
          <span className="hero__badge">En Venezuela desde 1968</span>
        </div>
        <h1 className="hero__title">
          Transporte vertical que <span className="hero__title-accent">mueve</span> a Venezuela
        </h1>
        <p className="hero__subtitle">
          Mantenimiento, modernización e instalación de ascensores y escaleras mecánicas
          de cualquier marca. Tecnología abierta, repuestos homologados y respuesta
          rápida para tu comunidad o proyecto.
        </p>
        <div className="hero__actions">
          <Link to="/cotizar" className="btn btn--primary btn--lg">
            Solicitar cotización
            <IconArrowRight size={20} strokeWidth={2} />
          </Link>
          <Link to="/ipr" className="btn btn--outline btn--lg">
            Consultar semáforo IPR
          </Link>
        </div>
        <ul className="hero__trust" aria-label="Garantías de servicio">
          <li>
            <svg className="hero__trust-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/><path d="M7 10l3 3 7-7"/></svg>
            Repuestos originales
          </li>
          <li>
            <svg className="hero__trust-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/><path d="M7 10l3 3 7-7"/></svg>
            Presencia desde 1968
          </li>
          <li>
            <svg className="hero__trust-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/><path d="M7 10l3 3 7-7"/></svg>
            Respuesta 24/7
          </li>
        </ul>
      </div>
    </section>
  )
}