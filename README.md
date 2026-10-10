# Fujitec Venezuela 🏢

<p align="center">
  <img src="public/images/company/fujitec_now_logo.png" alt="Fujitec Venezuela" width="260" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=20232A" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/Supabase-Optional-3FCF8E?logo=supabase&logoColor=white" alt="Supabase opcional" />
  <img src="https://img.shields.io/badge/Idiomas-ES%20%7C%20EN%20%7C%20PT-B5121B" alt="Español, inglés y portugués" />
</p>

## 🚀 La movilidad de tu edificio merece un aliado confiable

Ascensores y escaleras mecánicas conectan la vida diaria de una comunidad. Cuando necesitan mantenimiento, modernización o una nueva instalación, elegir al aliado correcto marca la diferencia.

**Fujitec Venezuela acompaña a comunidades, administradores y proyectos inmobiliarios con soluciones de transporte vertical y una trayectoria en el país desde 1968.** Esta experiencia digital acerca esa propuesta a cada cliente: explica los servicios, facilita el primer contacto y permite solicitar atención desde cualquier dispositivo.

[Conoce las soluciones](#soluciones-para-cada-etapa) · [Solicita una propuesta](#una-experiencia-digital-pensada-para-ti) · [Visita la sección de contacto](#habla-con-fujitec-y-encuentra-la-sede)

> Sitio corporativo y comercial en español, inglés y portugués. Las herramientas de orientación no sustituyen una inspección oficial ni una propuesta técnica formal.

## 🛗 Soluciones para cada etapa

- **Mantenimiento multimarca:** una alternativa para comunidades que buscan atención técnica, claridad y repuestos homologados.
- **Modernización:** actualización de equipos para extender su vida útil y responder a las necesidades actuales del edificio.
- **Obra nueva y accesibilidad:** soluciones de transporte vertical para proyectos residenciales, comerciales e industriales.
- **Servicio de fábrica Fujitec:** atención especializada para equipos Fujitec, con repuestos originales y respaldo de fábrica.

La página presenta estas soluciones para ayudar a cada visitante a identificar su necesidad y dar el siguiente paso con el equipo Fujitec.

## ✨ Una experiencia digital pensada para ti

### 💬 Solicita una propuesta

El formulario de cotización organiza la solicitud en tres etapas: datos de contacto y edificio, características del equipo y cobertura deseada. La información permite al equipo comercial dar seguimiento y preparar una propuesta.

**La versión actual no calcula ni muestra un precio automático:** envía una solicitud para recibir una propuesta formal.

### 🔎 Consulta orientativa IPR

La herramienta acepta un número RAE o una dirección y presenta un resultado visual acompañado de una recomendación para solicitar asistencia técnica.

**El MVP no consulta una base oficial de inspecciones ni verifica el estado real de un ascensor.** El resultado es orientativo y no reemplaza la revisión de los organismos competentes o de un técnico autorizado.

### 👷 Postúlate como talento técnico

El formulario de empleo recoge datos de contacto, ciudad, experiencia y áreas de conocimiento, y permite seleccionar un CV en formato PDF o Word.

**En la configuración actual, el formulario registra si se seleccionó un CV, pero no carga el archivo a un almacenamiento remoto.**

### 📍 Habla con Fujitec y encuentra la sede

Desde la página de inicio puedes abrir el contacto por WhatsApp y consultar la dirección, el teléfono, el correo electrónico y el mapa de la sede en La Urbina, Caracas.

## 👥 ¿Para quién es?

- **Juntas de condominio y administradores** que necesitan evaluar opciones de mantenimiento para sus edificios.
- **Constructoras, arquitectos y desarrolladores** que buscan orientación para instalaciones, modernizaciones y accesibilidad.
- **Técnicos electromecánicos** interesados en oportunidades de trabajo con Fujitec Venezuela.

## 🧭 Explora el sitio

| Sección | Ruta | Qué encontrarás |
|---|---|---|
| Inicio | `/` | Soluciones, propuesta de valor, testimonios, contacto y ubicación. |
| Cotización | `/cotizar` | Formulario de solicitud de propuesta en tres pasos. |
| Consulta IPR | `/ipr` | Herramienta informativa de orientación sobre inspecciones. |
| Empleo | `/empleo` | Formulario de postulación para talento técnico. |
| Administración | `/admin` | Pantalla de marcador para un futuro portal de gestión; aún no es un panel operativo. |

## 🛠️ Tecnología

- **React 19** para construir la interfaz por componentes.
- **React Router 7** para la navegación entre páginas.
- **Vite 8** para el servidor de desarrollo y la compilación.
- **CSS** modular por componente, tokens visuales y componentes reutilizables.
- **Motion** y **GSAP** para interacciones y animaciones.
- **Leaflet y React Leaflet** para el mapa de ubicación.
- **Supabase JS** como persistencia opcional para formularios.

La preferencia de idioma se conserva en el navegador mediante `localStorage`; el selector ofrece español, inglés y portugués.

## 💻 Ejecutar localmente

Requiere Node.js `20.19` o superior.

```bash
npm install
npm run dev
```

Comandos disponibles:

```bash
npm run build    # genera la versión de producción en dist/
npm run preview  # sirve localmente el build generado
```

## 🗄️ Persistencia con Supabase

Para guardar solicitudes en un proyecto Supabase, configura estas variables en `.env` o en el entorno del despliegue:

```dotenv
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Sin ambas variables, la aplicación entra en **modo demo**: registra los intentos de escritura en la consola y no los guarda en una base de datos. No pongas claves privadas o `service_role` en variables `VITE_*`, porque se incluyen en el bundle del navegador.

| Tabla | Uso |
|---|---|
| `leads` | Solicitudes de cotización. |
| `solicitudes_ipr` | Registro de consultas orientativas. |
| `candidatos_empleo` | Datos de postulaciones; actualmente no almacena el archivo CV. |

## 📂 Estructura del proyecto

- `src/pages/`: páginas asociadas a las rutas.
- `src/features/`: funcionalidades de landing, cotización, IPR, empleo y WhatsApp.
- `src/components/`: componentes compartidos, layout, formularios e interfaz.
- `src/i18n/`: diccionarios y contexto de idioma.
- `src/lib/`: cliente de Supabase y validaciones.
- `src/styles/`: estilos globales y tokens.
- `public/`: archivos estáticos servidos desde la raíz del sitio.
- `docs/`: documentación del producto, diseño y arquitectura.

El inventario completo está en [`estructura.txt`](estructura.txt).

## 📚 Documentación y caso del proyecto

- [Brief del producto](docs/product-brief.md)
- [Alcance del MVP](docs/mvp-scop.md)
- [Especificación técnica](docs/tecnical-sped.md)
- [Guía de internacionalización](docs/internationalization.md)
- [Sistema de diseño](docs/design-system.md)
- [Caso Fujitec Venezuela en Notion](https://aquamarine-year-5cb.notion.site/Caso-Fujitec-Venezuela-0304d8d88b3f8253ac1f01519d5cdf7b)

## 🚧 Estado del proyecto

MVP comercial en desarrollo. Las rutas públicas, formularios, selector de idioma y secciones de información conforman la experiencia actual. La persistencia depende de la configuración de Supabase; el panel `/admin`, la consulta con datos oficiales de IPR, el cálculo automático de precios y la carga remota de CV requieren desarrollo e integración adicionales.
