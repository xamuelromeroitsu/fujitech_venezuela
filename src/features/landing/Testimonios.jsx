import SectionHeading from '../../components/ui/SectionHeading'
import Card from '../../components/ui/Card'
import { IconQuoteLeft } from '../../components/icons'
import './Testimonios.css'

const TESTIMONIOS = [
  {
    quote: 'Pasamos de estar rehenes de un fabricante a un contrato claro con repuestos disponibles y respuesta rápida.',
    author: 'Presidente de Junta de Condominio',
    role: 'Caracas',
  },
  {
    quote: 'Su equipo técnico modernizó dos equipos de la torre sin interrumpir la operación. Proceso impecable.',
    author: 'Administrador de finca',
    role: 'Valencia',
  },
  {
    quote: 'Presupuesto transparente y en tiempo récord. Volveríamos a trabajar con ellos sin dudarlo.',
    author: 'Gerente de obra',
    role: 'Maracaibo',
  },
]

export default function Testimonios() {
  return (
    <section className="testimonios" id="testimonios" data-reveal>
      <div className="container">
        <SectionHeading
          eyebrow="Prueba social"
          title="Comunidades que confían en nosotros"
          description="Administradores, juntas y constructoras han encontrado en Fujitec un aliado confiable."
        />
        <div className="testimonios__grid">
          {TESTIMONIOS.map((t) => (
            <Card
              key={t.author}
              variant="bare"
              className="testimonio"
            >
              <div className="testimonio__quote-wrapper">
                <IconQuoteLeft className="testimonio__quote-icon" size={28} strokeWidth={1.5} color="var(--color-line)" />
                <blockquote className="testimonio__quote">“{t.quote}”</blockquote>
              </div>
              <div className="testimonio__divider" aria-hidden="true" />
              <footer className="testimonio__footer">
                <p className="testimonio__author">{t.author}</p>
                <p className="testimonio__role">{t.role}</p>
              </footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}