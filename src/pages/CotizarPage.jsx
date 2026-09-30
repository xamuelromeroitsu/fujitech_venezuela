import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import CotizadorForm from '../features/cotizador/CotizadorForm'
import './Pages.css'

export default function CotizarPage() {
  return (
    <main className="page">
      <div className="container">
        <SectionHeading
          className="page__header"
          eyebrow="Cotización en 3 pasos"
          title="Estimador de cuotas de mantenimiento"
          description="Ingresa los datos de tu comunidad y obtén una estimación orientativa. Luego solicita tu propuesta formal en PDF."
        />
        <Card variant="lined-top" className="cotizador-page__card">
          <CotizadorForm />
        </Card>
      </div>
    </main>
  )
}