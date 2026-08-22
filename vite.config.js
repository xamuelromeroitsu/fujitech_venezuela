/**
 * FUJITEC VENEZUELA — Configuración de Vite
 *
 * Plugins de optimización de rendimiento:
 * 1. react()           → Maneja JSX y hot reload en desarrollo
 * 2. cssInjectedByJs   → Inyecta CSS via JS (evita que el CSS bloquee el render)
 * 3. reorderHtml       → Pone el CSS antes del JS en el HTML generado
 * 4. preloadAssets     → Agrega <link rel="preload"> automáticos con hashes correctos
 * 5. manualChunks      → Separa react/react-router en un archivo "vendor" que se cachea
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

/**
 * Plugin 1: Reordenar HTML
 * Vite pone el <script> antes del <link rel="stylesheet">.
 * Este plugin los intercambia para que CSS y JS carguen en paralelo.
 * Ahorra ~300ms en la cadena crítica.
 */
function reorderHtml() {
  return {
    name: 'reorder-html',
    enforce: 'post',
    transformIndexHtml(html) {
      return html.replace(
        /(<script type="module"[^>]*><\/script>\s*\n\s*)(<link rel="stylesheet"[^>]*>)/,
        '$2\n    $1',
      )
    },
  }
}

/**
 * Plugin 2: Preload automático de assets
 * Busca los archivos JS que se cargan al inicio (vendor + app) y les agrega
 * <link rel="preload"> en el HTML. Los hashes se generan automáticamente.
 * Los chunks lazy (CotizarPage, IprPage, etc.) NO se preload-ean.
 */
function preloadAssets() {
  return {
    name: 'preload-assets',
    enforce: 'post',
    generateBundle(_, bundle) {
      const htmlFile = bundle['index.html']
      if (!htmlFile) return
      const lazyChunks = [
        'AdminDashboard', 'CotizarPage', 'EmpleoPage', 'IprPage',
        'Input-', 'useForm',
      ]
      const jsFiles = Object.keys(bundle).filter(
        (f) => f.startsWith('assets/') && f.endsWith('.js') && !lazyChunks.some((c) => f.includes(c)),
      )
      const links = jsFiles.map((f) => `<link rel="preload" href="/${f}" as="script">`)
      htmlFile.source = htmlFile.source.replace('</head>', `    ${links.join('\n    ')}\n  </head>`)
    },
  }
}

export default defineConfig({
  plugins: [
    react(),                  // JSX + hot reload
    cssInjectedByJsPlugin(),  // CSS via JS (non-blocking)
    reorderHtml(),            // CSS antes de JS
    preloadAssets(),          // Preload automático
  ],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        /**
         * Vendor chunk: separa react, react-dom y react-router-dom
         * en un archivo aparte (vendor-XXX.js).
         * Beneficio: en visitas repetidas el navegador ya tiene este
         * archivo en cache y solo descarga el código nuevo (app-XXX.js).
         */
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/') || id.includes('node_modules/react-router')) {
            return 'vendor'
          }
        },
      },
    },
  },
})
