import { Link } from 'react-router-dom'
import './ContactCta.css'

export default function ContactCta() {
  return (
    <section className="cta" id="contacto">
      <div className="container cta__inner">
        <h2 className="cta__title">¿Listo para mover tu comunidad o proyecto?</h2>
        <p className="cta__text">
          Solicita una cotización en menos de 5 minutos. Un asesor Fujitec te contactará
          con una propuesta formal.
        </p>
        <div className="cta__actions">
          <Link to="/cotizar" className="btn btn--primary btn--lg">Cotizar ahora</Link>
          <Link to="/empleo" className="btn btn--ghost btn--lg">¿Eres técnico? Únete</Link>
        </div>
      </div>
    </section>
  )
}
