import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import EmpleoForm from '../features/empleo/EmpleoForm'
import './Pages.css'

export default function EmpleoPage() {
  return (
    <main className="page">
      <div className="container">
        <SectionHeading
          className="page__header"
          eyebrow="Talento"
          title="Trabaja con Fujitec Venezuela"
          description="Únete al banco de talento de una multinacional con respaldo corporativo, salarios competitivos y estabilidad."
        />
        <Card variant="lined-top" className="empleo-page__card">
          <EmpleoForm />
        </Card>
      </div>
    </main>
  )
}