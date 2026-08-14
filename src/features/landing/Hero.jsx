import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <p className="hero__badge">En Venezuela desde 1968</p>
        <h1 className="hero__title">
          Transporte vertical que <span className="hero__title-accent">mueve</span> a Venezuela
        </h1>
        <p className="hero__subtitle">
          Mantenimiento, modernización e instalación de ascensores y escaleras mecánicas
          de cualquier marca. Tecnología abierta, repuestos homologados y respuesta
          rápida para tu comunidad o proyecto.
        </p>
        <div className="hero__actions">
          <Link to="/cotizar" className="btn btn--primary btn--lg">Solicitar cotización</Link>
          <Link to="/ipr" className="btn btn--secondary btn--lg">Consultar semáforo IPR</Link>
        </div>
        <ul className="hero__trust">
          <li>✓ Repuestos originales</li>
          <li>✓ Presencia desde 1968</li>
          <li>✓ Respuesta 24/7</li>
        </ul>
      </div>
    </section>
  )
}
