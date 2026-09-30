import SectionHeading from '../../components/ui/SectionHeading'
import Card from '../../components/ui/Card'
import { IconShieldCheck, IconDatabase, IconCertifiedUser, IconWrench } from '../../components/icons'
import './SoloFujitec.css'

const RAZONES = [
  {
    icon: <IconWrench size={32} strokeWidth={1.5} />,
    title: 'Repuestos originales',
    text: 'Solo componentes homologados de fábrica Fujitec. Sin réplicas ni sustitutos.',
  },
  {
    icon: <IconShieldCheck size={32} strokeWidth={1.5} />,
    title: 'Garantía real de fábrica',
    text: 'Cada intervención respaldada por la garantía del fabricante a nivel mundial.',
  },
  {
    icon: <IconDatabase size={32} strokeWidth={1.5} />,
    title: 'Trazabilidad total',
    text: 'Historial documentado de cada equipo desde su instalación y cada servicio realizado.',
  },
{
      icon: <IconCertifiedUser size={32} strokeWidth={1.5} />,
      title: 'Técnicos certificados',
      text: 'Personal capacitado por la marca, con acceso a especificaciones y manuales originales.',
    },
]

export default function SoloFujitec() {
  return (
    <section className="solo-fujitec" id="servicio-fujitec" data-reveal>
      <div className="container">
        <SectionHeading
          eyebrow="Marca propia"
          title="Servicio de fábrica para equipos Fujitec"
          description="Somos fabricantes: atendemos únicamente nuestros propios equipos con repuestos originales y garantía de fábrica."
        />
        <div className="solo-fujitec__grid">
          {RAZONES.map((r) => (
            <Card
              key={r.title}
              variant="lined-top"
              icon={r.icon}
              title={r.title}
              subtitle={r.text}
            />
          ))}
        </div>
        <div className="solo-fujitec__aviso">
          <strong>¿Tu ascensor es de otra marca?</strong>
          <span>Podemos evaluar su sustitución por un equipo Fujitec, con asesoría técnica y plan de pagos.</span>
        </div>
      </div>
    </section>
  )
}