import SectionHeading from '../../components/ui/SectionHeading'
import Card from '../../components/ui/Card'
import { IconCog6, IconCpu, IconBuilding2 } from '../../components/icons'
import './Soluciones.css'

const SOLUCIONES = [
  {
    icon: <IconCog6 size={32} strokeWidth={1.5} />,
    title: 'Mantenimiento',
    text: 'Planes Básica, Con Repuestos y Servicio 24/7 con cobertura nacional.',
  },
  {
    icon: <IconCpu size={32} strokeWidth={1.5} />,
    title: 'Modernización',
    text: 'Actualiza equipos antiguos con tecnología nueva sin cambiar todo el hueco.',
  },
  {
    icon: <IconBuilding2 size={32} strokeWidth={1.5} />,
    title: 'Obra nueva',
    text: 'Ascensores de pasajeros y carga, escaleras mecánicas y soluciones de accesibilidad.',
  },
]

export default function Soluciones() {
  return (
    <section className="soluciones" id="soluciones" data-reveal>
      <div className="container">
        <SectionHeading
          eyebrow="Portafolio"
          title="Soluciones para cada etapa"
          description="Desde la obra nueva hasta el servicio de mantenimiento de larga vida útil, con un solo proveedor de confianza."
        />
        <div className="soluciones__grid">
          {SOLUCIONES.map((s) => (
            <Card
              key={s.title}
              variant="lined-bottom"
              icon={s.icon}
              title={s.title}
              subtitle={s.text}
            />
          ))}
        </div>
      </div>
    </section>
  )
}