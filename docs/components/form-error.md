# FormError — Error Global de Formulario

> **Archivo:** `src/components/form/FormError.jsx`  
> **Design System:** v2 Industrial  
> **Versión:** 2.0

---

## Descripción
Componente mínimo para mostrar errores globales de formulario (ej: error de red, error de servidor Supabase). No renderiza nada si no hay error.

---

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `error` | `string \| null` | `null` | Mensaje de error (si null/undefined, no renderiza) |

---

## Comportamiento

```jsx
export default function FormError({ error }) {
  if (!error) return null
  return <p className="field__error" role="alert">{error}</p>
}
```

- Solo renderiza si `error` existe y es truthy
- Usa la clase `.field__error` existente (rojo `--color-danger`)
- `role="alert"` para anunciarse a screen readers inmediatamente

---

## Ejemplos

### Error de Red (Supabase)
```jsx
<FormError error={errors._form} />
```

```js
// En handleSubmit catch:
catch (err) {
  setErrors({ _form: 'Error de conexión. Intente nuevamente.' })
}
```

### Error de Validación Servidor
```jsx
<FormError error={errors._form} />
```

```js
// Respuesta 4xx/5xx de Supabase
if (error.code === 'PGRST301') {
  setErrors({ _form: 'Datos inválidos. Verifique los campos.' })
}
```

---

## Estilos (Hereda de Input.css)

```css
.field__error {
  color: var(--color-danger);
  font-size: 0.8125rem;
  font-weight: 500;
  font-family: var(--font-sans);
}
```

- Color: `--color-danger` (`#dc2626`)
- Tamaño: `0.8125rem`
- Peso: `500`
- `role="alert"` — anuncia inmediatamente a screen readers

---

## Ejemplo de Uso Completo (Cotizador)

```jsx
<form className="cotizador" onSubmit={handleSubmit}>
  {/* ... campos ... */}
  
  <FormError error={errors._form} />
  
  <div className="cotizador__nav">
    <Button type="button" variant="ghost" onClick={goBack}>
      ← Atrás
    </Button>
    <Button type="submit" disabled={isSubmitting}>
      {isSubmitting ? 'Enviando...' : 'Solicitar propuesta'}
    </Button>
  </div>
</form>
```

---

## Accesibilidad
- `role="alert"` — anuncia inmediatamente sin foco
- Color `--color-danger` con contraste AA
- No interrumpe navegación por teclado
- Solo visible cuando hay error real

---

## CSS Classes

```css
.field__error  /* Heredado de Input.css */
```

---

## Archivos Relacionados

| Archivo | Ruta |
|---------|------|
| Componente | `src/components/form/FormError.jsx` |
| Estilos | `src/components/ui/Input.css` (`.field__error`) |
| Design System | [design-system.md](../design-system.md) |
| Uso en Cotizador | [features/cotizador.md](../features/cotizador.md) |
| Uso en Empleo | [features/empleo.md](../features/empleo.md) |
| Uso en IPR | [features/ipr.md](../features/ipr.md) |