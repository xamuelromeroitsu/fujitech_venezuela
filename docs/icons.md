# Icon System — 18 SVG Inline Components

> **Archivo:** `src/components/icons/`  
> **Design System:** v2 Industrial  
> **Versión:** 2.0

---

## Descripción
Sistema de 18 iconos SVG inline (React components). Todos usan `currentColor`, `stroke-width: 1.5px`, `viewBox="0 0 24 24"`, optimizados para consistencia visual industrial.

---

## Props Comunes (Todos los Iconos)

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `size` | `number` | `24` | Width/height en px |
| `strokeWidth` | `number` | `1.5` | Grosor de trazo |
| `color` | `string` | `'currentColor'` | Color del trazo |
| `...props` | `SVGProps` | — | Props nativas de SVG |

---

## Catálogo de 18 Iconos

| Icono | Componente | Descripción | Uso Principal |
|-------|------------|-------------|---------------|
| `IconWrench` | `IconWrench` | Llave inglesa | Mantenimiento |
| `IconShieldCheck` | `IconShieldCheck` | Escudo con check | Garantía, éxito, certificación |
| `IconDatabase` | `IconDatabase` | Cilindro BD | Trazabilidad, datos |
| `IconUserCog` | `IconUserCog` | Usuario + engranaje | Técnicos certificados |
| `IconCog6` | `IconCog6` | Engranaje complejo | Modernización |
| `IconCpu` | `IconCpu` | CPU/chip | Tecnología, controladores |
| `IconBuilding2` | `IconBuilding2` | Edificio | Obra nueva, admin |
| `IconQuoteLeft` | `IconQuoteLeft` | Comillas | Testimonios |
| `IconArrowRight` | `IconArrowRight` | Flecha derecha | CTAs, navegación |
| `IconExternalLink` | `IconExternalLink` | Enlace externo | WhatsApp, enlaces externos |
| `IconRail` | `IconRail` | Línea horizontal | Hero rail visual |
| `IconGridPattern` | `IconGridPattern` | Patrón puntos | Hero background pattern |
| `IconAlertTriangle` | `IconAlertTriangle` | Triángulo alerta | IPR Rojo (vencido) |
| `IconClock` | `IconClock` | Reloj | IPR Amarillo (próximo a vencer) |
| `IconArrowUp` | `IconArrowUp` | Flecha arriba | File upload dropzone |
| `IconCertifiedUser` | `IconCertifiedUser` | Diploma enrollado + check | Técnicos certificados |
| `IconTeam` | `IconTeam` | 3 usuarios unidos | Equipo técnico |
| `IconCertifiedUser` | `IconCertifiedUser` | Diploma enrollado + check | Técnicos certificados |

---

## Importación

```jsx
// Individual
import { IconWrench } from '@/components/icons'

// Múltiples
import { IconWrench, IconShieldCheck, IconDatabase } from '@/components/icons'

// Todos (barrel export)
import * as Icons from '@/components/icons'
```

---

## Uso Básico

```jsx
import { IconWrench } from '@/components/icons'

// Básico
<IconWrench />

// Con props
<IconWrench size={32} strokeWidth={1.5} color="var(--color-primary)" />

// En Card
<Card
  variant="lined-top"
  icon={<IconWrench size={32} strokeWidth={1.5} />}
  title="Mantenimiento"
  subtitle="Planes Básica, Con Repuestos y Servicio 24/7"
/>
```

---

## Props Reference

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `size` | `number` | `24` | Width/height en px (ej: 20, 24, 32, 48) |
| `strokeWidth` | `number` | `1.5` | Grosor trazo (1, 1.5, 2) |
| `color` | `string` | `'currentColor'` | Color trazo (hereda del padre por defecto) |
| `className` | `string` | `undefined` | Clases CSS adicionales |
| `...props` | `SVGProps<SVGSVGElement>` | — | Props nativas SVG (aria-label, role, etc.) |

---

## Tamaños Estándar (Design Tokens)

| Token | Valor | Uso |
|-------|-------|-----|
| `--icon-sm` | `20px` | Inline text, botones pequeños |
| `--icon-md` | `24px` | Estándar (default), nav icons |
| `--icon-lg` | `32px` | Cards, feature icons |
| `--icon-xl` | `48px` | Hero, large feature areas, FormSuccess |

---

## Stroke Widths

| Clase | Valor | Uso |
|-------|-------|-----|
| `--icon-stroke-thin` | `1` | Detalles finos |
| `--icon-stroke-base` | `1.5` | **Estándar** (default) |
| `--icon-stroke-thick` | `2` | Énfasis, hero, FormSuccess |

---

## Utilidades CSS (icons.css)

```css
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 1;
}

.icon-sm { width: var(--icon-sm); height: var(--icon-sm); }
.icon-md { width: var(--icon-md); height: var(--icon-md); }
.icon-lg { width: var(--icon-lg); height: var(--icon-lg); }
.icon-xl { width: var(--icon-xl); height: var(--icon-xl); }

/* Containers con background */
.icon-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  flex-shrink: 0;
}
.icon-box-sm { width: 40px; height: 40px; }
.icon-box-md { width: 48px; height: 48px; }
.icon-box-lg { width: 56px; height: 56px; }

.icon-box--primary-tint {
  background-color: var(--color-primary-tint);
  color: var(--color-primary);
}

.icon-box--surface {
  background-color: var(--color-surface);
  color: var(--color-ink);
}

/* Stroke utilities */
.icon-stroke-thin { stroke-width: 1; }
.icon-stroke-base { stroke-width: 1.5; }
.icon-stroke-thick { stroke-width: 2; }
```

---

## Convenciones de Diseño

| Regla | Descripción |
|-------|-------------|
| **Stroke 1.5px base** | Consistencia visual en todos los iconos |
| **currentColor** | Hereda color del padre (flexible) |
| **viewBox 0 0 24 24** | Canvas estándar |
| **stroke-linecap: round** | Terminales redondeados |
| **stroke-linejoin: round** | Uniones suaves |
| **fill: none** | Solo trazos, sin rellenos |
| **aria-hidden="true"** | Iconos decorativos (por defecto) |

---

## Iconos Especiales

### IconRail (Hero Rail Visual)
```jsx
<IconRail length={80} thickness={2} color="var(--color-primary)" />
```
- Props: `length` (px), `thickness` (px), `color`
- SVG `<line>` horizontal simple

### IconGridPattern (Hero Background)
```jsx
<IconGridPattern width={120} height={120} spacing={24} dotSize={1} color="#0f1218" opacity={0.04} />
```
- Props: `width`, `height`, `spacing`, `dotSize`, `color`, `opacity`
- Genera grid de círculos programáticamente

---

## Barrel Export (index.js)

```js
// src/components/icons/index.js
export { default as IconWrench } from './IconWrench'
export { default as IconShieldCheck } from './IconShieldCheck'
export { default as IconDatabase } from './IconDatabase'
export { default as IconUserCog } from './IconUserCog'
export { default as IconCertifiedUser } from './IconCertifiedUser'
export { default as IconTeam } from './IconTeam'
export { default as IconCog6 } from './IconCog6'
export { default as IconCpu } from './IconCpu'
export { default as IconBuilding2 } from './IconBuilding2'
export { default as IconQuoteLeft } from './IconQuoteLeft'
export { default as IconArrowRight } from './IconArrowRight'
export { default as IconExternalLink } from './IconExternalLink'
export { default as IconRail } from './IconRail'
export { default as IconGridPattern } from './IconGridPattern'
export { default as IconAlertTriangle } from './IconAlertTriangle'
export { default as IconClock } from './IconClock'
export { default as IconArrowUp } from './IconArrowUp'
export { default as IconCertifiedUser } from './IconCertifiedUser'
export { default as IconTeam } from './IconTeam'
```

---

## Crear Nuevo Icono (Checklist)

1. Crear `src/components/icons/IconNuevo.jsx`
2. Seguir template: `size`, `strokeWidth`, `color`, `...props`, `currentColor`, `strokeWidth={1.5}`
2. ViewBox `0 0 24 24`, `stroke-linecap="round"`, `stroke-linejoin="round"`
3. `aria-hidden="true"` por defecto
4. Exportar en `index.js`
3. Documentar en este archivo
4. Test visual en tamaños 20/24/32/48px

---

## Archivos Relacionados

| Archivo | Ruta |
|---------|------|
| Componentes | `src/components/icons/*.jsx` |
| Index | `src/components/icons/index.js` |
| CSS Utils | `src/styles/icons.css` |
| Design System | [design-system.md](../design-system.md#icon-sizes) |
| Uso en Landing | [features/landing.md](../features/landing.md) |
| Uso en Componentes | [components/index.md](index.md) |