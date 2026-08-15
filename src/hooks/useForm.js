import { useState } from 'react'

/**
 * useForm — manejo ligero de formularios con validación declarativa.
 *
 * Uso:
 *   const { values, errors, handleChange, handleSubmit, reset } = useForm({
 *     initialValues: { nombre: '', email: '' },
 *     validate: (v) => {
 *       const e = {}
 *       if (!v.nombre) e.nombre = 'Requerido'
 *       return e
 *     },
 *     onSubmit: async (values) => { ... },
 *   })
 *
 * NOTAS TÉCNICAS (para futuros cambios):
 * - `handleChange` usa `e.target.name` como clave; el campo debe tener un `name`.
 * - Soporta checkboxes: si `type === 'checkbox'` guarda `checked` en vez de `value`.
 * - Al editar un campo se limpia su error automáticamente (validación en vivo).
 * - `handleSubmit` devuelve `{ ok, errors?, values? }`; valida ANTES de llamar a `onSubmit`.
 * - Si `onSubmit` lanza error, lo captura y lo pone en `errors._form` (no rompe la app).
 * - `setValue(name, valor)` sirve para campos controlados por estado (selects, autocomplete).
 * - `reset()` restaura los valores iniciales y limpia todos los errores.
 * - `isSubmitting` se activa durante el `await onSubmit` para deshabilitar botones.
 * - No dependes de ninguna librería externa: es solo useState.
 */
export function useForm({ initialValues = {}, validate = () => ({}), onSubmit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function setValue(name, value) {
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      return { ok: false, errors: nextErrors }
    }
    if (!onSubmit) return { ok: true, values }
    setIsSubmitting(true)
    try {
      await onSubmit(values)
      return { ok: true, values }
    } catch (err) {
      return { ok: false, errors: { _form: err.message || 'Error inesperado' } }
    } finally {
      setIsSubmitting(false)
    }
  }

  function reset(next = initialValues) {
    setValues(next)
    setErrors({})
  }

  return { values, errors, setValues, handleChange, setValue, handleSubmit, isSubmitting, reset }
}
