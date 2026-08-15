import SectionHeading from '../../components/ui/SectionHeading'
import './Soluciones.css'

const ICONOS = {
  mant: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  mod: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  obra: (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 20h20" />
      <path d="M4 20V8l6 4V8l6 4V5" />
      <path d="M16 5h4v15" />
    </svg>
  ),
}

const SOLUCIONES = [
  {
    icon: ICONOS.mant,
    title: 'Mantenimiento',
    text: 'Planes Básica, Con Repuestos y Servicio 24/7 con cobertura nacional.',
  },
  {
    icon: ICONOS.mod,
    title: 'Modernización',
    text: 'Actualiza equipos antiguos con tecnología nueva sin cambiar todo el hueco.',
  },
  {
    icon: ICONOS.obra,
    title: 'Obra nueva',
    text: 'Ascensores de pasajeros y carga, escaleras mecánicas y soluciones de accesibilidad.',
  },
]

export default function Soluciones() {
  return (
    <section className="soluciones" id="soluciones">
      <div className="container">
        <SectionHeading
          eyebrow="Portafolio"
          title="Soluciones para cada etapa"
          description="Desde la obra nueva hasta el servicio de mantenimiento de larga vida útil, con un solo proveedor de confianza."
        />
        <div className="soluciones__grid">
          {SOLUCIONES.map((s) => (
            <article key={s.title} className="solucion-card">
              <div className="solucion-card__icon">{s.icon}</div>
              <div className="solucion-card__body">
                <h3 className="solucion-card__title">{s.title}</h3>
                <p className="solucion-card__text">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
