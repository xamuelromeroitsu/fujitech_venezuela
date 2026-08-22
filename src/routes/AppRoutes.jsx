import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'

/**
 * Lazy loading: cada página se descarga SOLO cuando el usuario visita esa URL.
 * Ejemplo: si entra a "/", solo descarga Home. Si después va a "/cotizar",
 * AHÍ se descarga CotizarPage. Esto reduce el tamaño del bundle inicial.
 */
const CotizarPage = lazy(() => import('../pages/CotizarPage'))
const IprPage = lazy(() => import('../pages/IprPage'))
const EmpleoPage = lazy(() => import('../pages/EmpleoPage'))
const AdminDashboard = lazy(() => import('../pages/AdminDashboard'))

function PageLoader() {
  return <div className="page-loader">Cargando…</div>
}

/**
 * Rutas del sitio:
 * /         → Home (página principal)
 * /cotizar  → Formulario de cotización (3 pasos)
 * /ipr      → Consulta de inspección por RAE
 * /empleo   → Formulario de empleo
 * /admin    → Panel de gestión (KPIs de ejemplo)
 * *         → Cualquier otra URL redirige a Home
 */
export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cotizar" element={<CotizarPage />} />
        <Route path="/ipr" element={<IprPage />} />
        <Route path="/empleo" element={<EmpleoPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}
