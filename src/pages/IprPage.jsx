import SectionHeading from '../components/ui/SectionHeading'
import IprChecker from '../features/ipr/IprChecker'

export default function IprPage() {
  return (
    <main className="page">
      <div className="container">
        <SectionHeading
          eyebrow="Consultor de inspecciones"
          title="Semáforo IPR"
          description="Verifica el estado de la Inspección Periódica Reglamentaria de tu ascensor en segundos."
        />
        <IprChecker />
      </div>
    </main>
  )
}
