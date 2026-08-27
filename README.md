# Fujitec Venezuela — Sitio Web Comercial y Corporativo

Plataforma digital de captación de negocio y educación al cliente para el mercado de transporte vertical venezolano. Landing page one-page scroll con módulos interactivos de cotización, inspecciones y reclutamiento.

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| React | 19.2.8 | UI / SPA |
| Vite | 8.2.1 | Bundler / Dev server |
| React Router DOM | 7.18.2 | Enrutamiento SPA con lazy loading |
| Supabase JS | 2.49.1 | Conexión a base de datos (BaaS) |
| CSS puro | — | Estilos por componente con custom properties |

---

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## Variables de entorno

Copiar `.env.example` a `.env` y completar:

```

Sin estas variables, la app funciona en **modo demo** (los inserts se registran en consola).

---

## Estructura del proyecto

```
src/
├── main.jsx                    # Entry point
├── App.jsx                     # Raíz: BrowserRouter + Navbar + Rutas + Footer
│
├── routes/
│   └── AppRoutes.jsx           # Definición de rutas con lazy loading
│
├── pages/                      # Una página por ruta
│   ├── Home.jsx                # / — Landing principal
│   ├── CotizarPage.jsx         # /cotizar — Formulario de cotización
│   ├── IprPage.jsx             # /ipr — Consultor de inspecciones IPR
│   ├── EmpleoPage.jsx          # /empleo — Formulario de empleo
│   └── AdminDashboard.jsx      # /admin — Panel admin (placeholder)
│
├── features/                   # Módulos por funcionalidad
│   ├── landing/                # Secciones de la landing
│   ├── cotizador/              # Formulario multi-paso de cotización
│   ├── ipr/                    # Consultor de semáforo IPR
│   ├── empleo/                 # Formulario de postulación laboral
│   └── whatsapp/               # Widget de WhatsApp
│
├── components/                 # Componentes compartidos
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ui/                     # Design system: Button, Input, Card, SectionHeading
│
├── hooks/
│   ├── useForm.js              # Manejo de formularios con validación
│   └── useHideOnScroll.js      # Ocultar/mostrar navbar al scrollear
│
├── lib/
│   ├── supabaseClient.js       # Cliente Supabase + insertRow()
│   └── validators.js           # Reglas de validación reutilizables
│
└── styles/
    ├── tokens.css              # Design tokens (colores, espaciados)
    └── global.css              # Reset y estilos globales
```

---

## Módulos funcionales

### Landing page (`/`)
Hero, propuesta de valor, soluciones, transparencia multimarca, testimonios y CTA de contacto.

### Cotizador (`/cotizar`)
Formulario en 3 pasos: datos del contacto → tipo de inmueble y servicio → nivel de cobertura. Envía los datos a la tabla `leads` de Supabase.

### IPR (`/ipr`)
Consultor de inspecciones periódicas reglamentarias. El usuario ingresa el RAE y recibe un semáforo (verde/amarillo/rojo) con el estado de vigencia.

### Empleo (`/empleo`)
Formulario de postulación para técnicos electromecánicos. Permite adjuntar CV en PDF o Word y seleccionar maniobras especializadas.

### WhatsApp
Widget flotante de contacto directo por WhatsApp.

---

## Validaciones (validators.js)

Reglas centralizadas en `src/lib/validators.js`, reutilizadas en todos los formularios:

| Campo | Regla | Mensaje de error |
|---|---|---|
| Nombre | No vacío, sin números | "El nombre no puede contener números" |
| Email | Formato válido con extensión específica | "Email inválido (ej: nombre@dominio.com)" |
| Teléfono | E.164: 4-15 dígitos, solo números/espacios/guiones/+ | "Máximo 15 dígitos" |
| Edificio | Máximo 50 caracteres (VARCHAR en Supabase) | "Máximo 50 caracteres" |
| Tipo inmueble | Requerido (seleccionar chip) | "Selecciona un tipo de inmueble" |
| CV | PDF o Word (.doc, .docx), máximo 5 MB | "Solo se aceptan archivos PDF o Word" |

Extensiones de email aceptadas: `.com`, `.org`, `.net`, `.info`, `.ve`, `.co`, `.es`, `.mx`, `.edu`, `.gob`, `.gov`, `.mil`, `.tech`, `.io`, `.app`, `.store`, `.me`, `.site`, `.online`.

---

## Tablas de Supabase

| Tabla | Formulario | Campos principales |
|---|---|---|
| `leads` | Cotizador | nombre, email, telefono, edificio, tipo_inmueble, servicio, paradas, cobertura, mensaje |
| `solicitudes_ipr` | IPR | rae, estado |
| `candidatos_empleo` | Empleo | nombre, email, telefono, ciudad, anios_experiencia, maniobras |

---

## Documentación

| Archivo | Contenido |
|---|---|
| [`docs/product-brief.md`](docs/product-brief.md) | Visión del producto, público objetivo, KPIs |
| [`docs/mvp-scop.md`](docs/mvp-scop.md) | Alcance del MVP y estrategia "Conserje" |
| [`docs/tecnical-sped.md`](docs/tecnical-sped.md) | Especificación técnica y arquitectura |
| [`docs/design-system.md`](docs/design-system.md) | Paleta de colores, tokens y reglas de diseño |

---

## Licencia

Proyecto privado — Fujitec Venezuela.
