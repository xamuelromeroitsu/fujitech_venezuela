import SectionHeading from '../../components/ui/SectionHeading'
import Card from '../../components/ui/Card'
import { IconWrench, IconShieldCheck, IconDatabase, IconUserCog } from '../../components/icons'
import './PropuestaValor.css'

const PILARES = [
  {
    icon: <IconWrench size={32} strokeWidth={1.5} />,
    title: 'Mantenimiento con margen',
    text: 'Contratos de mantenimiento claros, sin cláusulas abusivas y con repuestos homologados.',
  },
  {
    icon: <IconShieldCheck size={32} strokeWidth={1.5} />,
    title: 'Tecnología abierta',
    text: 'Atendemos cualquier marca: sin bloqueos de software ni rehenes de un fabricante.',
  },
  {
    icon: <IconDatabase size={32} strokeWidth={1.5} />,
    title: 'Presupuestos transparentes',
    text: 'Cotizaciones detalladas que eliminan la opacidad de precios del sector.',
  },
  {
    icon: <IconUserCog size={32} strokeWidth={1.5} />,
    title: 'Talento certificado',
    text: 'Técnicos electromecánicos capacitados y respaldados por una multinacional.',
  },
]

export default function PropuestaValor() {
  return (
    <section className="propuesta" id="propuesta" data-reveal>
      <div className="container">
        <SectionHeading
          eyebrow="Nuestra propuesta"
          title="Confianza que se mueve contigo"
          description="Acompañamos juntas de condominio, constructoras y administradores en todo el ciclo de vida del equipo de transporte vertical."
        />
        <div className="propuesta__grid">
          {PILARES.map((p) => (
            <Card
              key={p.title}
              variant="lined-top"
              icon={p.icon}
              title={p.title}
              subtitle={p.text}
            />
          ))}
        </div>
      </div>
    </section>
  )
}