import SectionHeading from '../components/ui/SectionHeading'
import CotizadorForm from '../features/cotizador/CotizadorForm'
import './Pages.css'

export default function CotizarPage() {
  return (
    <main className="page">
      <div className="container">
        <SectionHeading
          eyebrow="Cotización en 3 pasos"
          title="Estimador de cuotas de mantenimiento"
          description="Ingresa los datos de tu comunidad y obtén una estimación orientativa. Luego solicita tu propuesta formal en PDF."
        />
        <CotizadorForm />
      </div>
    </main>
  )
}
