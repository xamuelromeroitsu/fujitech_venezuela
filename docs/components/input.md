# Input — Componente de Campo de Formulario

> **Archivo:** `src/components/ui/Input.jsx` + `Input.css`  
> **Design System:** v2 Industrial  
> **Versión:** 2.0

---

## Descripción
Campo de formulario reutilizable con validación visual, filtrado de caracteres nativo y estados de error/hint.

---

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `label` | `string` | `undefined` | Etiqueta del campo |
| `name` | `string` | **requerido** | Nombre del campo (para `htmlFor` y `name`) |
| `type` | `string` | `'text'` | `'text' \| 'email' \| 'tel' \| 'number' \| 'textarea'` |
| `error` | `string` | `undefined` | Mensaje de error (muestra estado error) |
| `hint` | `string` | `undefined` | Texto de ayuda (debajo del campo) |
| `required` | `boolean` | `false` | Asterisco rojo en label |
| `className` | `string` | `''` | Clases CSS adicionales |
| `pattern` | `string` | `undefined` | Regex para filtrado de teclas (`[^\d]*` = solo letras) |
| `inputMode` | `string` | `undefined` | `'numeric'` para teclado numérico móvil |
| `onKeyDown` | `function` | `undefined` | Handler adicional de teclas |
| `...props` | `InputHTMLAttributes` | — | Props nativas de input/textarea |

---

## Filtrado Automático de Caracteres (onKeyDown)

| Condición | Caracteres Permitidos | Bloquea |
|-----------|----------------------|---------|
| `inputMode="numeric"` o `type="tel"` | Dígitos, `+`, espacios, guiones | Letras |
| `pattern="[^\d]*"` | Solo letras y espacios | Números |
| `maxLength` | Nativo del navegador | — |

**Teclas de control siempre permitidas:** Backspace, Delete, Tab, Escape, Enter, flechas, Home, End, Ctrl+A/C/V/X.

---

## Estados Visuales

| Estado | Border | Box Shadow | Label |
|--------|--------|------------|-------|
| Default | `1.5px solid --color-line-strong` | None | `--color-ink` |
| Focus | `--color-primary` | `0 0 0 3px --color-primary-tint` | `--color-ink` |
| Error | `--color-danger` | `0 0 0 3px rgba(220,38,38,0.15)` | `--color-danger` |

**Focus-visible:** `outline: 3px solid --color-primary`, `outline-offset: 2px` (nunca `outline: none` sin reemplazo).

---

## Props Especiales

| Prop | Valor | Efecto |
|------|-------|--------|
| `type="textarea"` | Renderiza `<textarea>` | `min-height: 120px`, `resize: vertical` |
| `inputMode="numeric"` | Teclado numérico móvil | + filtrado numérico |
| `pattern="[^\d]*"` | Solo letras | Bloquea números al teclear |
| `maxLength={n}` | Límite nativo | Contador visual nativo |

---

## Ejemplos

### Campo Texto Simple
```jsx
<Input
  label="Nombre completo"
  name="nombre"
  value={values.nombre}
  onChange={handleChange}
  error={errors.nombre}
  pattern="[^\d]*"
  required
/>
```

### Email
```jsx
<Input
  label="Email"
  name="email"
  type="email"
  value={values.email}
  onChange={handleChange}
  error={errors.email}
  required
/>
```

### Teléfono (con filtrado numérico)
```jsx
<Input
  label="Teléfono / WhatsApp"
  name="telefono"
  type="tel"
  maxLength={16}
  inputMode="numeric"
  value={values.telefono}
  onChange={handleChange}
  error={errors.telefono}
  required
/>
```

### Número con Validación
```jsx
<Input
  label="Años de experiencia"
  name="anios"
  type="number"
  min="0"
  max="60"
  inputMode="numeric"
  value={values.anios}
  onChange={handleChange}
  error={errors.anios}
/>
```

### Textarea con Hint
```jsx
<Input
  label="Cuéntanos más (opcional)"
  name="mensaje"
  type="textarea"
  value={values.mensaje}
  onChange={handleChange}
  hint="Ej.: cuántos ascensores, antigüedad, marca actual..."
/>
```

---

## Label Requirements

| Prop | Efecto |
|------|--------|
| `required` | Añade `<span class="field__required" aria-hidden="true"> *</span>` en rojo (`--color-primary`) |
| `label` | Renderiza `<label class="field__label" htmlFor={id}>` con `font-display`, uppercase, tracking-wide |

---

## Accesibilidad
- `htmlFor` / `id` vinculados automáticamente (`field-{name}`)
- `aria-describedby` para error/hint (implícito por estructura)
- `role="alert"` en mensajes de error
- `focus-visible` visible siempre
- `aria-invalid="true"` implícito en estado error

---

## CSS Classes Generadas

```css
.field                    /* Wrapper */
.field__label             /* Label */
.field__required          /* Asterisco rojo */
.field__control           /* Input/textarea base */
.field__control:focus     /* Focus state */
.field__control--error    /* Error state */
.field__control--error:focus
.field__error             /* Error message */
.field__hint              /* Hint text */
```

---

## Archivos Relacionados

| Archivo | Ruta |
|---------|------|
| Componente | `src/components/ui/Input.jsx` |
| Estilos | `src/components/ui/Input.css` |
| Design System | [design-system.md](../design-system.md) |
| Validators | `src/lib/validators.js` |