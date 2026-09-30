import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import { IconBuilding2 } from '../components/icons'
import './Pages.css'

export default function AdminDashboard() {
  return (
    <main className="page">
      <div className="container">
        <SectionHeading
          className="page__header"
          eyebrow="Portal de gestión"
          title="Panel de administración"
          description="Este módulo requiere autenticación y se activará en una fase posterior del roadmap."
        />
        <Card variant="bare" className="admin-placeholder">
          <div className="admin-placeholder__icon">
            <IconBuilding2 size={32} strokeWidth={1.5} />
          </div>
          <h3 className="admin-placeholder__title">Panel en desarrollo</h3>
          <p className="admin-placeholder__text">
            El portal admin permitirá gestionar leads, solicitudes IPR, candidatos y el parque de ascensores.
            Requiere Supabase Auth + Row Level Security. Pendiente del roadmap (fase v2).
          </p>
        </Card>
      </div>
    </main>
  )
}