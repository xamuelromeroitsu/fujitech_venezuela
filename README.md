# Fujitec Venezuela

Sitio web corporativo para presentar servicios de transporte vertical y facilitar solicitudes de cotización, consultas IPR y postulaciones de talento en Venezuela.

## Explora el sitio

| Sección | Ruta | Qué puedes hacer |
|---|---|---|
| Inicio | `/` | Conocer la empresa, sus soluciones y formas de contacto. |
| Estimador de cuotas | `/cotizar` | Enviar datos del edificio y solicitar una propuesta de servicio. |
| Consulta IPR | `/ipr` | Ingresar un RAE o dirección y recibir una orientación sobre la inspección. |
| Trabaja con nosotros | `/empleo` | Enviar datos profesionales y adjuntar un CV. |
| Administración | `/admin` | Ver el placeholder del futuro portal de gestión. |

## Ejecutar localmente

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

## Supabase

Para guardar solicitudes reales, configura estas variables en `.env` o en el entorno del despliegue:

```dotenv
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Sin ambas variables, el cliente trabaja en modo demo y registra los inserts en la consola. No pongas claves privadas o `service_role` en variables `VITE_*`: se incluyen en el bundle del navegador.

| Tabla | Uso |
|---|---|
| `leads` | Solicitudes del estimador de cuotas. |
| `solicitudes_ipr` | Registro de consultas IPR. |
| `candidatos_empleo` | Postulaciones y datos de candidatos. |

## Tecnología

- React 19 y React Router para la interfaz y navegación.
- Vite 8 para desarrollo y compilación.
- Supabase JS para persistir solicitudes cuando está configurado.
- CSS por componente, tokens de diseño y componentes reutilizables.

## Estructura

- `src/pages/`: páginas asociadas a las rutas.
- `src/features/`: formularios y funcionalidades de landing, IPR, empleo y WhatsApp.
- `src/components/`: componentes compartidos, layout, formularios e interfaz.
- `src/lib/`: cliente de Supabase y validaciones.
- `src/styles/`: estilos globales y tokens.
- `public/`: archivos estáticos servidos desde la raíz del sitio.
- `docs/`: documentación del producto, sistema visual y arquitectura.

El inventario completo del proyecto está en [`estructura.txt`](estructura.txt).

## Descubrimiento para asistentes

`public/llms.txt` se publica como `/llms.txt`. El estado y la configuración de ARD/`ai-catalog.json`, incluidas las verificaciones de Vercel, están documentados en [`docs/README-IA.md`](docs/README-IA.md).

> El `ai-catalog.json` actual es un catálogo inicial en JSON; no debe presentarse como un manifiesto ARD conforme hasta completar la ruta, estructura y dominio canónico requeridos.

## Documentación

- [Guía de descubrimiento para IA](docs/README-IA.md)
- [Guía de internacionalización (i18n)](docs/internationalization.md)
- [Brief del producto](docs/product-brief.md)
- [Alcance del MVP](docs/mvp-scop.md)
- [Sistema de diseño](docs/design-system.md)
- [Especificación técnica](docs/tecnical-sped.md)

## Estado del proyecto

MVP comercial en desarrollo. El panel de administración requiere autenticación y políticas de acceso antes de gestionar datos reales.
