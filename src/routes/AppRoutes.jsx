import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Loader from '../components/ui/Loader'
import PageSkeleton from '../components/ui/PageSkeleton'

/**
 * Lazy loading: cada página se descarga SOLO cuando el usuario visita esa URL.
 * Ejemplo: si entra a "/", solo descarga Home. Si después va a "/cotizar",
 * AHÍ se descarga CotizarPage. Esto reduce el tamaño del bundle inicial.
 */
const CotizarPage = lazy(() => import('../pages/CotizarPage'))
const IprPage = lazy(() => import('../pages/IprPage'))
const EmpleoPage = lazy(() => import('../pages/EmpleoPage'))
const AdminDashboard = lazy(() => import('../pages/AdminDashboard'))

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
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Fallbacks separados para conservar una silueta acorde con cada pagina. */}
      <Route path="/cotizar" element={<Suspense fallback={<PageSkeleton variant="cotizador" />}><CotizarPage /></Suspense>} />
      <Route path="/ipr" element={<Suspense fallback={<PageSkeleton variant="ipr" />}><IprPage /></Suspense>} />
      <Route path="/empleo" element={<Suspense fallback={<PageSkeleton variant="empleo" />}><EmpleoPage /></Suspense>} />
      {/* Admin aun no tiene contenido de datos; conserva el loader de marca. */}
      <Route path="/admin" element={<Suspense fallback={<Loader fullscreen />}><AdminDashboard /></Suspense>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
