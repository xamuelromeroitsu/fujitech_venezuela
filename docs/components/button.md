# Button — Componente de Botón

> **Archivo:** `src/components/ui/Button.jsx` + `Button.css`  
> **Design System:** v2 Industrial  
> **Versión:** 2.0

---

## Descripción
Botón principal del sistema de diseño. Soporta 5 variantes, 3 tamaños y renderizado polimórfico (`as` prop).

---

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'whatsapp'` | `'primary'` | Variante visual |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño del botón |
| `as` | `React.ElementType` | `'button'` | Elemento a renderizar (`button`, `a`, `Link`) |
| `disabled` | `boolean` | `false` | Estado deshabilitado |
| `className` | `string` | `''` | Clases CSS adicionales |
| `children` | `ReactNode` | — | Contenido del botón |
| `...props` | `ButtonHTMLAttributes` | — | Props nativas de button/a |

---

## Variants

| Variant | Uso | Background | Border | Text | Hover | Elevation |
|---------|-----|------------|--------|------|-------|-----------|
| `primary` | CTA principal | `--color-primary` | none | `#fff` | `--color-primary-dark` | `shadow-sm` → `shadow-md` + `translateY(-2px)` |
| `secondary` | Acción secundaria | `--color-surface` | `1.5px solid --color-line-strong` | `--color-ink` | Border `--color-primary`, text `--color-primary-dark` | `shadow-sm` → `shadow-md` + `translateY(-2px)` |
| `outline` | Acción terciaria / alternativa | `transparent` | `1.5px solid --color-primary` | `--color-primary` | Bg `--color-primary`, text `#fff` | `shadow-sm` → `shadow-md` + `translateY(-2px)` |
| `ghost` | Enlace / acción sutil | `transparent` | none | `--color-ink-muted` | Text `--color-primary`, underline | None |
| `whatsapp` | WhatsApp CTA | `--color-success` | none | `#fff` | `#128c3e` | `shadow-sm` → `shadow-md` + `translateY(-2px)` |

---

## Sizes

| Size | Padding Y | Padding X | Gap | Font Size |
|------|-----------|-----------|-----|-----------|
| `sm` | `8px` | `16px` | `8px` | `0.875rem` |
| `md` | `12px` | `20px` | `8px` | `1rem` |
| `lg` | `16px` | `24px` | `8px` | `1.0625rem` |

---

## Ejemplos

### CTA Principal
```jsx
<Button variant="primary" size="lg">
  Solicitar evaluación técnica
  <IconArrowRight size={20} strokeWidth={2} />
</Button>
```

### Enlace Secundario
```jsx
<Button variant="ghost" size="md" as="a" href="/contacto">
  Contactar
</Button>
```

### WhatsApp CTA
```jsx
<Button variant="whatsapp" size="lg" as="a" href="https://wa.me/...">
  <IconWhatsApp size={20} /> WhatsApp
</Button>
```

### Deshabilitado
```jsx
<Button variant="primary" disabled>
  Enviando...
</Button>
```

---

## Estados

| Estado | Visual |
|--------|--------|
| Default | Según variant |
| Hover | Color darker + `translateY(-2px)` + `shadow-md` |
| Active | `translateY(0)` + `shadow-sm` |
| Focus-visible | `outline: 3px solid --color-primary`, `outline-offset: 2px` |
| Disabled | `opacity: 0.55`, `cursor: not-allowed`, no transform/shadow |

---

## Accesibilidad
- `focus-visible` visible en todos los estados
- `aria-disabled` en estado disabled
- `as="a"` para navegación, `as="button"` para acciones
- Texto descriptivo en `children` (no solo iconos)

---

## CSS Classes Generadas

```css
.btn                    /* Base */
.btn--primary           /* Variant primary */
.btn--secondary         /* Variant secondary */
.btn--outline           /* Variant outline */
.btn--ghost             /* Variant ghost */
.btn--whatsapp          /* Variant whatsapp */
.btn--sm                /* Size small */
.btn--md                /* Size medium */
.btn--lg                /* Size large */
.btn:focus-visible      /* Focus visible */
.btn:disabled           /* Disabled state */
```

---

## Archivos Relacionados

| Archivo | Ruta |
|---------|------|
| Componente | `src/components/ui/Button.jsx` |
| Estilos | `src/components/ui/Button.css` |
| Design System | [design-system.md](../design-system.md#button-variants) |