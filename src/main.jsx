import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

/**
 * Punto de entrada de la app.
 * - StrictMode: activa advertencias útiles en desarrollo (no afecta producción)
 * - global.css: estilos base (reset, colores, tipografía, espaciado)
 * - App: componente raíz con Navbar, rutas y Footer
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
