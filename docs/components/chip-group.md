# ChipGroup — Selección de Opciones por Chips

> **Archivo:** `src/components/form/ChipGroup.jsx` + `ChipGroup.css`  
> **Design System:** v2 Industrial  
> **Versión:** 2.0

---

## Descripción
Selección de opciones estilo chips (píldoras). Soporte para selección simple y múltiple. **Sin radius 999px** — usa `--radius-md` industrial.

---

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `label` | `string` | **requerido** | Título del grupo (ej: "Tipo de inmueble") |
| `options` | `string[]` | **requerido** | Array de opciones |
| `value` | `string \| string[]` | **requerido** | Valor seleccionado (string simple o array) |
| `onChange` | `function` | **requerido** | Handler `(value) => void` |
| `multi` | `boolean` | `false` | Selección múltiple (toggle) |
| `error` | `string` | `undefined` | Mensaje de error |

---

## Comportamiento

| Modo | Comportamiento |
|------|----------------|
| `multi={false}` | Click selecciona una opción, deselecciona las demás |
| `multi={true}` | Click togglea opción (añade/quita del array) |

---

## Estados Visuales

| Estado | Background | Border | Text |
|--------|------------|--------|------|
| Default | `transparent` | `1.5px solid --color-line` | `--color-ink-muted` |
| Hover | `transparent` | `--color-primary` | `--color-primary` |
| Active | `--color-primary-tint` | `--color-primary` | `--color-primary` |
| Focus-visible | `transparent` | `--color-primary` | `--color-primary` + `outline: 3px solid --color-primary` |

**Radius:** `--radius-md` (10px) — **no 999px**  
**Padding:** `var(--space-2) var(--space-4)`  
**Font:** `font-display`, `0.875rem`, `600`, uppercase, tracking-wide

---

## Ejemplos

### Selección Simple (Tipo de Inmueble)
```jsx
<ChipGroup
  label="Tipo de inmueble"
  options={['Residencial', 'Comercial', 'Industrial', 'Edificio de oficinas']}
  value={values.tipoInmueble}
  onChange={(v) => setValue('tipoInmueble', v)}
  error={errors.tipoInmueble}
/>
```

### Selección Múltiple (Maniobras)
```jsx
<ChipGroup
  label="Maniobras que dominas"
  options={[
    'Ajustes electromecánicos',
    'Controladores / tableros',
    'Seguridad y paracaídas',
    'Hidráulicos',
    'Escaleras mecánicas',
    'Modernización de grupos'
  ]}
  value={values.maniobras}
  onChange={(v) => setValue('maniobras', v)}
  multi
  error={errors.maniobras}
/>
```

---

## Accesibilidad
- `role="group"` implícito en wrapper
- `aria-label` = `label` prop
- `aria-pressed` en chips activos (multi)
- `focus-visible` visible
- `role="alert"` en error message

---

## CSS Classes Generadas

```css
.chip-group                 /* Wrapper flex wrap */
.chip-group__chip           /* Chip base */
.chip-group__chip:hover     /* Hover state */
.chip-group__chip--active   /* Active state */
.chip-group__chip:focus-visible  /* Focus visible */
```

---

## Estilos Chip (CSS)

```css
.chip-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.chip-group__chip {
  padding: var(--space-2) var(--space-4);
  border: 1.5px solid var(--color-line);
  border-radius: var(--radius-md);
  background-color: transparent;
  color: var(--color-ink-muted);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  transition: all var(--motion-micro);
  cursor: pointer;
}

.chip-group__chip:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.chip-group__chip--active {
  background-color: var(--color-primary-tint);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.chip-group__chip:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}
```

---

## Archivos Relacionados

| Archivo | Ruta |
|---------|------|
| Componente | `src/components/form/ChipGroup.jsx` |
| Estilos | `src/components/form/ChipGroup.css` |
| Design System | [design-system.md](../design-system.md#component-variants) |
| Uso en Cotizador | [features/cotizador.md](../features/cotizador.md) |
| Uso en Empleo | [features/empleo.md](../features/empleo.md) |