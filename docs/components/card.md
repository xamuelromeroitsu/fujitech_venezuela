# Card — Componente de Tarjeta

> **Archivo:** `src/components/ui/Card.jsx` + `Card.css`  
> **Design System:** v2 Industrial  
> **Versión:** 2.0

---

## Descripción
Tarjeta base del sistema de diseño. **Sin bordes decorativos** — usa sistema de variants con líneas de acento estructurales.

---

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'lined-top' \| 'lined-bottom' \| 'bare'` | `'lined-top'` | Variante visual |
| `icon` | `ReactNode` | `undefined` | Icono decorativo (SVG inline) |
| `title` | `string` | `undefined` | Título de la tarjeta |
| `subtitle` | `string` | `undefined` | Texto descriptivo |
| `children` | `ReactNode` | `undefined` | Contenido libre (para variant `bare`) |
| `className` | `string` | `''` | Clases CSS adicionales |
| `iconSize` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'lg'` | Tamaño del icono |

---

## Variants

| Variant | Estructura | Hover | Uso Recomendado |
|---------|------------|-------|-----------------|
| `lined-top` | Línea 2px `--color-primary` en top | `shadow-md` + `translateY(-2px)` + icon color darker | Propuesta Valor, Solo Fujitec, features |
| `lined-bottom` | Línea 1px `--color-line` en bottom + animada | Línea animada 0→100% `--color-primary` + `shadow-md` + `translateY(-2px)` | Soluciones, radio cards (coberturas) |
| `bare` | Sin líneas, sin bordes | `shadow-md` + `translateY(-2px)` | Testimonios, Admin placeholder, contenido libre |

---

## Ejemplos

### Variant `lined-top` (Propuesta Valor)
```jsx
<Card
  variant="lined-top"
  icon={<IconWrench size={32} strokeWidth={1.5} />}
  title="Mantenimiento con margen"
  subtitle="Contratos claros, sin cláusulas abusivas, repuestos homologados."
/>
```

### Variant `lined-bottom` (Soluciones / Radio Cards)
```jsx
<Card
  variant="lined-bottom"
  icon={<IconCog6 size={32} strokeWidth={1.5} />}
  title="Mantenimiento"
  subtitle="Planes Básica, Con Repuestos y Servicio 24/7 con cobertura nacional."
/>
```

### Variant `bare` (Testimonios)
```jsx
<Card variant="bare" className="testimonio">
  <div className="testimonio__quote-wrapper">
    <IconQuoteLeft className="testimonio__quote-icon" size={28} strokeWidth={1.5} />
    <blockquote className="testimonio__quote">"Excelente servicio..."</blockquote>
  </div>
  <div className="testimonio__divider" />
  <footer className="testimonio__footer">
    <p className="testimonio__author">Cliente</p>
    <p className="testimonio__role">Caracas</p>
  </footer>
</Card>
```

### Con Children Personalizados (Radio Card Coberturas)
```jsx
<Card variant="lined-bottom" className="cotizador__cobertura">
  <input type="radio" name="cobertura" value="basica" className="visually-hidden" />
  <div className="cotizador__cobertura-content">
    <strong className="cotizador__cobertura-label">Básica</strong>
    <span className="cotizador__cobertura-text">Mano de obra programada y preventiva.</span>
  </div>
</Card>
```

---

## Icon Props

| Prop | Valor | Descripción |
|------|-------|-------------|
| `size` | `20\|24\|32\|48` | Tamaño en px |
| `strokeWidth` | `1.5` | Grosor de trazo (consistente) |
| `color` | `currentColor` | Hereda color del padre |

**Icon container:** 48x48px, `--color-primary-tint` bg, `--color-primary` color, `--radius-md` radius.

---

## Accesibilidad
- `aria-hidden="true"` en iconos decorativos
- `variant` no afecta semántica — solo visual
- Contraste AA/AAA en todos los textos

---

## CSS Classes Generadas

```css
.card                     /* Base */
.card--lined-top          /* Variant lined-top */
.card--lined-bottom       /* Variant lined-bottom */
.card--bare               /* Variant bare */
.card__icon               /* Icon container */
.card__title              /* Title */
.card__subtitle           /* Subtitle */
.card__body               /* Children content */
.card:hover               /* Hover elevation */
```

---

## Archivos Relacionados

| Archivo | Ruta |
|---------|------|
| Componente | `src/components/ui/Card.jsx` |
| Estilos | `src/components/ui/Card.css` |
| Design System | [design-system.md](../design-system.md#component-variants) |