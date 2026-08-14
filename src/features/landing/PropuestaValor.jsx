import SectionHeading from '../../components/ui/SectionHeading'
import Card from '../../components/ui/Card'
import './PropuestaValor.css'

const PILARES = [
  {
    icon: '🛠️',
    title: 'Mantenimiento con margen',
    text: 'Contratos de mantenimiento claros, sin cláusulas abusivas y con repuestos homologados.',
  },
  {
    icon: '🔓',
    title: 'Tecnología abierta',
    text: 'Atendemos cualquier marca: sin bloqueos de software ni rehenes de un fabricante.',
  },
  {
    icon: '⚖️',
    title: 'Presupuestos transparentes',
    text: 'Cotizaciones detalladas que eliminan la opacidad de precios del sector.',
  },
  {
    icon: '👷',
    title: 'Talento certificado',
    text: 'Técnicos electromecánicos capacitados y respaldados por una multinacional.',
  },
]

export default function PropuestaValor() {
  return (
    <section className="propuesta" id="propuesta">
      <div className="container">
        <SectionHeading
          eyebrow="Nuestra propuesta"
          title="Confianza que se mueve contigo"
          description="Acompañamos juntas de condominio, constructoras y administradores en todo el ciclo de vida del equipo de transporte vertical."
        />
        <div className="propuesta__grid">
          {PILARES.map((p) => (
            <Card key={p.title} icon={p.icon} title={p.title} subtitle={p.text} />
          ))}
        </div>
      </div>
    </section>
  )
}
