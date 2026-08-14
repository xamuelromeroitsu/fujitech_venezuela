import SectionHeading from '../../components/ui/SectionHeading'
import imgMant from '../../assets/img/solucion-mant.jpg'
import imgMod from '../../assets/img/solucion-mod.jpg'
import imgObra from '../../assets/img/solucion-obra.jpg'
import './Soluciones.css'

const SOLUCIONES = [
  {
    img: imgMant,
    title: 'Mantenimiento',
    text: 'Planes Básica, Con Repuestos y Servicio 24/7 con cobertura nacional.',
  },
  {
    img: imgMod,
    title: 'Modernización',
    text: 'Actualiza equipos antiguos con tecnología nueva sin cambiar todo el hueco.',
  },
  {
    img: imgObra,
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
              <div className="solucion-card__media">
                <img src={s.img} alt={s.title} loading="lazy" />
              </div>
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
