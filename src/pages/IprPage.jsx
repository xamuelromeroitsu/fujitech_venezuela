import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import IprChecker from '../features/ipr/IprChecker'
import './Pages.css'

export default function IprPage() {
  return (
    <main className="page">
      <div className="container">
        <SectionHeading
          className="page__header"
          eyebrow="Consultor de inspecciones"
          title="Semáforo IPR"
          description="Verifica el estado de la Inspección Periódica Reglamentaria de tu ascensor en segundos."
        />
        <Card variant="lined-top" className="ipr-page__card">
          <IprChecker />
        </Card>
      </div>
    </main>
  )
}