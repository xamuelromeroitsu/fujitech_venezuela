# 🛠️ Especificación Técnica y Arquitectura del Sistema — Fujitec Venezuela

[![Stack](https://img.shields.io/badge/Stack-React%2019%20%2B%20Vite%208-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Backend](https://img.shields.io/badge/Backend-Supabase%20%2B%20Node.js-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com)
[![Router](https://img.shields.io/badge/Routing-React%20Router%207-CA4245?style=for-the-badge&logo=reactrouter)](https://reactrouter.com)

---

## 1. ⚙️ Adaptación de la Pila Tecnológica al Proyecto

| Tecnología | Uso en el Proyecto |
| :--- | :--- |
| **Frontend (React 19 + Vite 8)** | **Landing Page + App Web:** Interfaz responsiva (*Mobile-First*). Carga en menos de 1.5s. |
| **Routing (React Router 7)** | **SPA:** Carga perezosa (*Lazy Loading*) de rutas. `/` (Landing), `/cotizar` (Calculador), `/ipr` (Comprobador), `/empleo` y `/admin` (Portal de gestión). |
| **Auth (Supabase Auth)** | **Acceso Segregado:** Autenticación para administradores de la empresa y clientes que entran a ver el estado de su ascensor. |
| **Database (Supabase PostgreSQL)** | **Persistencia:** Tablas de `leads`, `solicitudes_ipr`, `candidatos_empleo` y `parque_ascensores`. |
| **Backend (Node.js + Express/Fastify)** | **Bifurcación Inteligente:** En el MVP, React se conecta **directamente a Supabase** para lectura/escritura rápida. Node.js se usará como microservicio para el envío de correos automáticos (Nodemailer/Resend) y la generación de PDFs de presupuestos. |
| **Storage (Supabase Storage)** | **Documentación:** Almacenamiento de Currículums (PDFs de candidatos) e informes técnicos de inspección IPR. |

---

## 2. 🌳 Estructura Recomendada del Proyecto

Para mantener el código ordenado y permitir que la Landing MVP escale fácilmente hacia la App completa en el futuro, se utiliza una **Estructura Modular Basada en Características (*Feature-Driven*)**:

```text
ascensores-app/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/             # Logos, íconos SVG, imágenes de ascensores
│   ├── components/         # Componentes UI reutilizables
│   │   ├── ui/             # Botones, Modales, Inputs, Tarjetas
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── features/           # Módulos clave de negocio
│   │   ├── landing/        # Hero, Servicios, Multimarca, Testimonios
│   │   ├── cotizador/      # Componentes del formulario paso a paso
│   │   ├── ipr/            # Semáforo de consulta de inspecciones
│   │   └── empleo/         # Formulario de reclutamiento técnico
│   ├── hooks/              # Custom hooks (ej. useSupabase, useForm)
│   ├── lib/                # Configuración de clientes (supabaseClient.js)
│   ├── pages/              # Páginas mapeadas por React Router 7
│   │   ├── Home.jsx
│   │   ├── CotizarPage.jsx
│   │   ├── IprPage.jsx
│   │   ├── EmpleoPage.jsx
│   │   └── AdminDashboard.jsx
│   ├── routes/             # Configuración de rutas (AppRoutes.jsx)
│   ├── App.jsx
│   └── main.jsx
├── backend/                # Servidor Node.js (Microservicio para PDFs/Emails)
│   ├── src/
│   │   ├── controllers/    # Generación de PDF, envíos de email
│   │   └── server.js
│   └── package.json
├── .env.local
├── package.json
└── vite.config.js