import SectionHeading from '../components/ui/SectionHeading'
import EmpleoForm from '../features/empleo/EmpleoForm'

export default function EmpleoPage() {
  return (
    <main className="page">
      <div className="container">
        <SectionHeading
          eyebrow="Talento"
          title="Trabaja con Fujitec Venezuela"
          description="Únete al banco de talento de una multinacional con respaldo corporativo, salarios competitivos y estabilidad."
        />
        <EmpleoForm />
      </div>
    </main>
  )
}
