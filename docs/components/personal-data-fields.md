# PersonalDataFields — Campos de Datos Personales Reutilizables

> **Archivo:** `src/components/form/PersonalDataFields.jsx`  
> **Design System:** v2 Industrial  
> **Versión:** 2.0

---

## Descripción
Compuesto de 3 campos estándar: Nombre, Email, Teléfono. Se usa en **Cotizador** y **Empleo** para evitar duplicación.

---

## Props

| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| `values` | `object` | **Sí** | Objeto con valores del formulario (`{ nombre, email, telefono }`) |
| `errors` | `object` | **Sí** | Objeto con errores (`{ nombre, email, telefono }`) |
| `onChange` | `function` | **Sí** | Handler de cambios (`handleChange` de useForm) |

---

## Campos Incluidos

| Campo | Name | Type | Validación | Props Especiales |
|-------|------|------|------------|------------------|
| Nombre completo | `nombre` | `text` | No vacío, sin números | `pattern="[^\d]*"`, `required` |
| Email | `email` | `email` | Formato válido | `type="email"`, `required` |
| Teléfono / WhatsApp | `telefono` | `tel` | E.164 (4-15 dígitos) | `type="tel"`, `inputMode="numeric"`, `maxLength=16`, `required` |

---

## Validaciones (de `validators.js`)

| Campo | Regla | Mensaje Error |
|-------|-------|---------------|
| `nombre` | No vacío, solo letras/espacios | "El nombre no puede contener números" |
| `email` | Formato válido + extensiones permitidas | "Email inválido (ej: nombre@dominio.com)" |
| `telefono` | E.164: 4-15 dígitos, solo números/+/-/espacios | "Máximo 15 dígitos" |

**Extensiones email permitidas:** `.com`, `.org`, `.net`, `.info`, `.ve`, `.co`, `.es`, `.mx`, `.edu`, `.gob`, `.gov`, `.mil`, `.tech`, `.io`, `.app`, `.store`, `.me`, `.site`, `.online`

---

## Ejemplo de Uso

```jsx
import PersonalDataFields from '@/components/form/PersonalDataFields'

function MiFormulario({ values, errors, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <PersonalDataFields
        values={values}
        errors={errors}
        onChange={handleChange}
      />
      
      {/* Otros campos específicos del formulario */}
      <Input label="Ciudad" name="ciudad" ... />
      
      <Button type="submit">Enviar</Button>
    </form>
  )
}
```

---

## Estructura Interna

```jsx
export default function PersonalDataFields({ values, errors, onChange }) {
  return (
    <>
      <Input
        label="Nombre completo"
        name="nombre"
        value={values.nombre}
        onChange={onChange}
        error={errors.nombre}
        pattern="[^\d]*"
        required
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={onChange}
        error={errors.email}
        required
      />
      <Input
        label="Teléfono / WhatsApp"
        name="telefono"
        type="tel"
        maxLength={16}
        inputMode="numeric"
        pattern="[+\d\s-]*"
        value={values.telefono}
        onChange={onChange}
        error={errors.telefono}
        required
      />
    </>
  )
}
```

---

## Props de Input Utilizados

| Campo | Props Input |
|-------|-------------|
| Nombre | `pattern="[^\d]*"` `required` |
| Email | `type="email"` `required` |
| Teléfono | `type="tel"` `maxLength={16}` `inputMode="numeric"` `pattern="[+\d\s-]*"` `required` |

---

## Dependencias
- `Input` component (`src/components/ui/Input.jsx`)
- `validators.js` (`src/lib/validators.js`)

---

## Uso en Formularios

| Formulario | Archivo | Props Pasados |
|------------|---------|---------------|
| Cotizador | `CotizadorForm.jsx` | `values`, `errors`, `handleChange` |
| Empleo | `EmpleoForm.jsx` | `values`, `errors`, `handleChange` |

---

## Ventajas
- **DRY** — Un solo lugar para 3 campos críticos
- **Consistencia** — Validación, filtrado, estilos idénticos
- **Mantenibilidad** — Cambio en un lugar = actualiza 2 formularios
- **Testing** — Un solo componente a testear

---

## Accesibilidad
- Hereda de `Input`: `htmlFor`/`id`, `aria-describedby`, `role="alert"`, focus-visible
- Labels con asterisco rojo para requeridos
- Filtrado nativo previene input inválido antes de validar

---

## Archivos Relacionados

| Archivo | Ruta |
|---------|------|
| Componente | `src/components/form/PersonalDataFields.jsx` |
| Input Base | `src/components/ui/Input.jsx` + `Input.css` |
| Validators | `src/lib/validators.js` |
| Uso en Cotizador | [features/cotizador.md](../features/cotizador.md) |
| Uso en Empleo | [features/empleo.md](../features/empleo.md) |