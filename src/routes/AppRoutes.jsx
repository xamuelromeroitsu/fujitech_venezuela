import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'

// Lazy loading para mantener el bundle inicial pequeño (carga < 1.5s).
const CotizarPage = lazy(() => import('../pages/CotizarPage'))
const IprPage = lazy(() => import('../pages/IprPage'))
const EmpleoPage = lazy(() => import('../pages/EmpleoPage'))
const AdminDashboard = lazy(() => import('../pages/AdminDashboard'))

function PageLoader() {
  return <div className="page-loader">Cargando…</div>
}

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
