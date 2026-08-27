import { useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

/**
 * ScrollToTop — Sube al inicio de la página al navegar entre rutas.
 * Sin esto, si haces click en "Empleo" estando abajo, la página nueva
 * empieza scrolleada en la misma posición.
 */
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

/**
 * App — Componente raíz. Estructura del sitio:
 * - BrowserRouter: habilita la navegación por URLs (/cotizar, /ipr, etc.)
 * - Navbar: barra superior fija (se oculta al bajar, aparece al subir)
 * - AppRoutes: las páginas según la URL
 * - Footer: pie de página con contacto, WhatsApp, dirección
 *
 * El widget de WhatsApp (botón flotante verde) está en Home.jsx,
 * NO aquí — así solo aparece en la página principal.
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  )
}
