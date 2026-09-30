# SectionHeading — Componente de Encabezado de Sección

> **Archivo:** `src/components/ui/SectionHeading.jsx` + `SectionHeading.css`  
> **Design System:** v2 Industrial  
> **Versión:** 2.0

---

## Descripción
Encabezado estándar para secciones. Incluye eyebrow (badge), título y descripción opcional. Alineación configurable.

---

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `eyebrow` | `string` | `undefined` | Texto superior (badge/categoría) |
| `title` | `string` | **requerido** | Título principal (H2) |
| `description` | `string` | `undefined` | Texto descriptivo |
| `align` | `'center' \| 'left'` | `'center'` | Alineación del texto |

---

## Estructura Visual

```
[Eyebrow - opcional]
    │
    ├── Texto uppercase, tracking-wide, font-display
    ├── Color: --color-primary
    ├── Underline 40px, 2px, --color-primary (centrado o left)
    │
[Title - H2]
    │
    ├── font-display, clamp(1.75rem, 4vw, 2.75rem)
    ├── weight 700, letter-spacing -0.02em
    ├── color: --color-ink
    │
[Description - opcional]
    ├── --color-ink-muted
    ├── font-size: 1.0625rem, line-height 1.6
    ├── font-weight 400 (no bold)
```

---

## Props Detail

| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| `eyebrow` | `string` | No | Texto categorizador (ej: "Nuestra propuesta", "Portafolio") |
| `title` | `string` | **Sí** | Título principal — renderiza como `<h2>` |
| `description` | `string` | No | Texto de apoyo bajo el título |
| `align` | `'center' \| 'left'` | No (`'center'`) | Alineación del bloque completo |

---

## Eyebrow (Badge) — Detalle

```css
.section-heading__eyebrow {
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-primary);
  position: relative;
  padding-bottom: var(--space-2);
  margin-bottom: var(--space-3);
}

.section-heading__eyebrow::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0; /* o 50% + translateX(-50%) si center */
  width: 40px;
  height: 2px;
  background-color: var(--color-primary);
}
```

---

## Ejemplos

### Sección Centrada (Default - Landing)
```jsx
<SectionHeading
  eyebrow="Nuestra propuesta"
  title="Confianza que se mueve contigo"
  description="Acompañamos juntas de condominio, constructoras y administradores en todo el ciclo de vida del equipo de transporte vertical."
/>
```

### Sección Alineada Izquierda (Páginas Internas)
```jsx
<SectionHeading
  align="left"
  eyebrow="Cotización en 3 pasos"
  title="Estimador de cuotas de mantenimiento"
  description="Ingresa los datos de tu comunidad y obtén una estimación orientativa. Luego solicita tu propuesta formal en PDF."
/>
```

### Solo Título (Sin Eyebrow ni Description)
```jsx
<SectionHeading
  title="Panel de administración"
/>
```

---

## Alineación

| Align | Eyebrow Underline | Texto | Max-width |
|-------|-------------------|-------|-----------|
| `center` | Centrado (50% + translateX) | Centrado | 680px, margin-inline: auto |
| `left` | Left (0) | Izquierda | 680px, margin-inline: 0 |

---

## Responsive
- `clamp(1.75rem, 4vw, 2.75rem)` para título — escala fluida
- `1.0625rem` para descripción — legible en móvil
- Max-width 680px evita líneas muy largas

---

## Accesibilidad
- Título renderizado como `<h2>` — semántica correcta
- Eyebrow no es heading — solo decorativo
- Contraste AA/AAA en todos los textos
- `max-width: 680px` evita líneas largas (>75ch)

---

## CSS Classes Generadas

```css
.section-heading                   /* Wrapper */
.section-heading--center           /* Align center */
.section-heading--left             /* Align left */
.section-heading__eyebrow          /* Eyebrow badge */
.section-heading__eyebrow::after   /* Underline 40px */
.section-heading__title            /* H2 title */
.section-heading__desc             /* Description */
```

---

## Archivos Relacionados

| Archivo | Ruta |
|---------|------|
| Componente | `src/components/ui/SectionHeading.jsx` |
| Estilos | `src/components/ui/SectionHeading.css` |
| Design System | [design-system.md](../design-system.md) |
| SEO Positioning | [seo-positioning.md](../seo-positioning.md#4-propuesta-de-valor) |