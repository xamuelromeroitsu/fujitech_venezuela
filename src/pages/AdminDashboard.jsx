import SectionHeading from '../components/ui/SectionHeading'

export default function AdminDashboard() {
  return (
    <main className="page">
      <div className="container">
        <SectionHeading
          eyebrow="Portal de gestión"
          title="Panel de administración"
          description="Este módulo requiere autenticación y se activará en una fase posterior del roadmap."
        />
        <p className="admin-placeholder">
          El portal admin permitirá gestionar leads, solicitudes IPR, candidatos y el parque de ascensores.
          Requiere Supabase Auth + Row Level Security. Pendiente del roadmap (fase v2).
        </p>
      </div>
    </main>
  )
}
