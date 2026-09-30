# Landing Feature — Página Principal (/)

> **Ruta:** `/` (Home.jsx)  
> **Componentes:** Hero, PropuestaValor, Soluciones, SoloFujitec, Testimonios, ContactCta, WhatsAppWidget  
> **Design System:** v2 Industrial  
> **Versión:** 2.0

---

## Descripción
Landing page one-page scroll con 6 secciones + widget WhatsApp. Diseño industrial, autoridad técnica, conversión optimizada.

---

## Estructura de Secciones

| Orden | Sección | Componente | ID | data-reveal |
|-------|---------|------------|----|-------------|
| 1 | Hero | `Hero` | — | ✅ |
| 2 | Propuesta de Valor | `PropuestaValor` | `#propuesta` | ✅ |
| 3 | Soluciones | `Soluciones` | `#soluciones` | ✅ |
| 4 | Solo Fujitec | `SoloFujitec` | `#servicio-fujitec` | ✅ |
| 5 | Testimonios | `Testimonios` | `#testimonios` | ✅ |
| 6 | Contacto CTA | `ContactCta` | `#contacto` | ✅ |
| — | WhatsApp Widget | `WhatsAppWidget` | — | — |

---

## 1. Hero Section

### Archivos
- `src/features/landing/Hero.jsx` + `Hero.css`

### Contenido (SEO Optimizado)

| Elemento | Contenido |
|----------|-----------|
| **H1** | `Especialista en Mantenimiento y Modernización de Ascensores Fujitec en Venezuela` |
| **Subtítulo** | `Desde 1968, Fujitec Venezuela brinda soporte técnico especializado, modernización y repuestos homologados para equipos Fujitec. Protegemos la seguridad, continuidad operativa y vida útil de los ascensores en condominios, empresas y edificios de Caracas y todo el país.` |
| **Texto respaldo** | `Atención técnica especializada, diagnósticos documentados y soluciones adaptadas a la condición real de cada equipo.` |
| **CTA Primario** | `Solicitar evaluación técnica` → `/cotizar` |
| **CTA Secundario** | `Consultar el estado de mi ascensor` → `/ipr` |

### Elementos Visuales

| Elemento | Descripción |
|----------|-------------|
| **Rail Visual** | `<IconRail length={80} thickness={2} color="var(--color-primary)" />` — línea horizontal 2px primary |
| **Grid Pattern** | `<IconGridPattern width={120} height={120} spacing={24} dotSize={1} opacity={0.04} />` — fondo sutil |
| **Trust Indicators** | 3 items con SVG check: "Repuestos originales", "Presencia desde 1968", "Respuesta 24/7" |

### Trust Bar (3 items)

| Ítem | Icono | Texto |
|------|-------|-------|
| 1 | ✓ SVG | Repuestos originales |
| 2 | ✓ SVG | Presencia desde 1968 |
| 3 | ✓ SVG | Respuesta 24/7 |

---

## 2. Propuesta de Valor

### Archivos
- `src/features/landing/PropuestaValor.jsx` + `PropuestaValor.css`

### Contenido

| Elemento | Contenido |
|----------|-----------|
| **Eyebrow** | `Nuestra propuesta` |
| **H2** | `Confianza que se mueve contigo` |
| **Descripción** | `Acompañamos juntas de condominio, constructoras y administradores en todo el ciclo de vida del equipo de transporte vertical.` |

### Grid 2×2 (4 Cards `lined-top`)

| Card | Icono | Título | Descripción |
|------|-------|--------|-------------|
| 1 | `IconWrench` | Mantenimiento con margen | Contratos claros, sin cláusulas abusivas, repuestos homologados |
| 2 | `IconShieldCheck` | Tecnología abierta | Atendemos cualquier marca: sin bloqueos de software ni rehenes de un fabricante |
| 3 | `IconDatabase` | Presupuestos transparentes | Cotizaciones detalladas que eliminan la opacidad de precios del sector |
| 4 | `IconUserCog` | Talento certificado | Técnicos electromecánicos capacitados y respaldados por una multinacional |

---

## 3. Soluciones

### Archivos
- `src/features/landing/Soluciones.jsx` + `Soluciones.css`

### Contenido

| Elemento | Contenido |
|----------|-----------|
| **Eyebrow** | `Portafolio` |
| **H2** | `Soluciones para cada etapa` |
| **Descripción** | `Desde la obra nueva hasta el servicio de mantenimiento de larga vida útil, con un solo proveedor de confianza.` |

### Grid 3→2→1 (3 Cards `lined-bottom`)

| Card | Icono | Título | Descripción |
|------|-------|--------|-------------|
| 1 | `IconCog6` | Mantenimiento | Planes Básica, Con Repuestos y Servicio 24/7 con cobertura nacional |
| 2 | `IconCpu` | Modernización | Actualiza equipos antiguos con tecnología nueva sin cambiar todo el hueco |
| 3 | `IconBuilding2` | Obra nueva | Ascensores de pasajeros y carga, escaleras mecánicas y soluciones de accesibilidad |

**Hover Effect:** Línea bottom animada 0→100% `--color-primary` + `translateY(-2px)` + `shadow-md`

---

## 4. Solo Fujitec (Servicio de Fábrica)

### Archivos
- `src/features/landing/SoloFujitec.jsx` + `SoloFujitec.css`

### Contenido

| Elemento | Contenido |
|----------|-----------|
| **Eyebrow** | `Marca propia` |
| **H2** | `Servicio de fábrica para equipos Fujitec` |
| **Descripción** | `Somos fabricantes: atendemos únicamente nuestros propios equipos con repuestos originales y garantía de fábrica.` |

### Grid 2×2 (4 Cards `lined-top`)

| Card | Icono | Título | Descripción |
|------|-------|--------|-------------|
| 1 | `IconWrench` | Repuestos originales | Solo componentes homologados de fábrica Fujitec. Sin réplicas ni sustitutos. |
| 2 | `IconShieldCheck` | Garantía real de fábrica | Cada intervención respaldada por la garantía del fabricante a nivel mundial. |
| 3 | `IconDatabase` | Trazabilidad total | Historial documentado de cada equipo desde su instalación y cada servicio realizado. |
| 4 | `IconCertifiedUser` | Técnicos certificados | Personal capacitado por la marca, con acceso a especificaciones y manuales originales. |

### Aviso Final (Banda Horizontal)

```jsx
<div className="solo-fujitec__aviso">
  <strong>¿Tu ascensor es de otra marca?</strong>
  <span>Podemos evaluar su sustitución por un equipo Fujitec, con asesoría técnica y plan de pagos.</span>
</div>
```
- Background: `--color-primary-tint`
- Border-left: `4px solid --color-primary`
- Border-radius: `--radius-md`

---

## 5. Testimonios

### Archivos
- `src/features/landing/Testimonios.jsx` + `Testimonios.css`

### Contenido

| Elemento | Contenido |
|----------|-----------|
| **Eyebrow** | `Prueba social` |
| **H2** | `Comunidades que confían en nosotros` |
| **Descripción** | `Administradores, juntas y constructoras han encontrado en Fujitec un aliado confiable.` |

### Grid 3→2→1 (3 Cards `bare`)

| Testimonio | Autor | Rol | Ubicación |
|------------|-------|-----|-----------|
| 1 | Presidente de Junta de Condominio | "Pasamos de estar rehenes de un fabricante a un contrato claro con repuestos disponibles y respuesta rápida." | Caracas |
| 2 | Administrador de finca | "Su equipo técnico modernizó dos equipos de la torre sin interrumpir la operación. Proceso impecable." | Valencia |
| 3 | Gerente de obra | "Presupuesto transparente y en tiempo récord. Volveríamos a trabajar con ellos sin dudarlo." | Maracaibo |

### Estructura Card `bare`

```jsx
<Card variant="bare" className="testimonio">
  <div className="testimonio__quote-wrapper">
    <IconQuoteLeft className="testimonio__quote-icon" size={28} strokeWidth={1.5} />
    <blockquote className="testimonio__quote">“{quote}”</blockquote>
  </div>
  <div className="testimonio__divider" />
  <footer className="testimonio__footer">
    <p className="testimonio__author">{author}</p>
    <p className="testimonio__role">{role}</p>
  </footer>
</Card>
```

- Quote icon: decorativo, opacity 0.3, top-left
- Divider: 40px width, 1px `--color-line`
- Author: `font-display`, 600, `--color-ink`
- Role: `--color-ink-subtle`, `0.875rem`

---

## 6. Contacto CTA

### Archivos
- `src/features/landing/ContactCta.jsx` + `ContactCta.css`

### Contenido

| Elemento | Contenido |
|----------|-----------|
| **H2** | `¿Listo para mover tu comunidad o proyecto?` |
| **Texto** | `Solicita una cotización en menos de 5 minutos. Un asesor Fujitec te contactará con una propuesta formal.` |
| **CTA Primario** | `Cotizar ahora` → `/cotizar` (primary + IconArrowRight) |
| **CTA Secundario** | `¿Eres técnico? Únete` → `/empleo` (ghost + IconExternalLink) |

### Estilos
- Background: `--color-ink` (negro tibio)
- Text: `--color-surface` (blanco)
- Ghost button en fondo oscuro: border `--color-line-strong`, hover → border `--color-primary`, text `--color-primary`

---

## 7. WhatsApp Widget

### Archivos
- `src/features/whatsapp/WhatsAppWidget.jsx` + `WhatsAppWidget.css`
- Config: `src/features/whatsapp/whatsapp.config.js`

### Comportamiento
- Solo en Home (`Home.jsx`, no en `App.jsx`)
- Botón flotante fijo bottom-right
- Click → abre WhatsApp con mensaje predefinido
- Config en `whatsapp.config.js`: phone, countryCode, defaultMessage

---

## Scroll Reveal en Landing

Todas las secciones principales usan `data-reveal`:

```jsx
<section className="propuesta" id="propuesta" data-reveal>
<section className="soluciones" id="soluciones" data-reveal>
<section className="solo-fujitec" id="servicio-fujitec" data-reveal>
<section className="testimonios" id="testimonios" data-reveal>
<section className="cta" id="contacto" data-reveal>
```

**Stagger automático:** CSS `:nth-child(n)` delays (0, 80, 160, 240, 320, 400ms)

---

## Responsive Breakpoints

| Sección | Desktop | Tablet (≤900px) | Mobile (≤640px) |
|---------|---------|-----------------|-----------------|
| Hero | Grid pattern + rail | Rail 60px, badge stack | Rail 60px, badge stack |
| Propuesta Valor | 2×2 grid | 1 col | 1 col |
| Soluciones | 3 cols | 2 cols | 1 col |
| Solo Fujitec | 2×2 grid | 1 col | 1 col |
| Testimonios | 3 cols | 2 cols | 1 col |
| CTA | 2 btns inline | 2 btns inline | Stack vertical |

---

## SEO en Landing

### Meta Tags (index.html / Helmet)
```html
<title>Especialista en Mantenimiento y Modernización de Ascensores Fujitec en Venezuela | Fujitec Venezuela</title>
<meta name="description" content="Mantenimiento, modernización, diagnóstico técnico y repuestos homologados para ascensores Fujitec en Venezuela. Experiencia desde 1968. Solicite evaluación técnica sin compromiso.">
```

### Schema Markup (Home)
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Fujitec Venezuela - Especialista en Ascensores Fujitec",
  "description": "Mantenimiento, modernización, repuestos y sustitución de ascensores Fujitec en Venezuela.",
  "url": "https://fujitec.com.ve/",
  "potentialAction": {
    "@type": "ViewAction",
    "target": "https://fujitec.com.ve/cotizar",
    "name": "Solicitar evaluación técnica"
  }
}
```

---

## Performance

| Métrica | Target |
|---------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Bundle (gz) | ~13 KB JS + 73 KB vendor |
| Fonts | Space Grotesk self-hosted (woff2, font-display: swap) |

---

## Archivos Relacionados

| Archivo | Ruta |
|---------|------|
| Home Page | `src/pages/Home.jsx` |
| Hero | `src/features/landing/Hero.jsx` + `Hero.css` |
| Propuesta Valor | `src/features/landing/PropuestaValor.jsx` + `PropuestaValor.css` |
| Soluciones | `src/features/landing/Soluciones.jsx` + `Soluciones.css` |
| Solo Fujitec | `src/features/landing/SoloFujitec.jsx` + `SoloFujitec.css` |
| Testimonios | `src/features/landing/Testimonios.jsx` + `Testimonios.css` |
| Contact CTA | `src/features/landing/ContactCta.jsx` + `ContactCta.css` |
| WhatsApp Widget | `src/features/whatsapp/WhatsAppWidget.jsx` + `WhatsAppWidget.css` |
| Config WhatsApp | `src/features/whatsapp/whatsapp.config.js` |
| Design System | [design-system.md](../design-system.md) |
| SEO Positioning | [seo-positioning.md](../seo-positioning.md) |
| Animations | [animations.md](animations.md) |
| Components | [components/index.md](components/index.md) |