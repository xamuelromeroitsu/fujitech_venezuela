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
