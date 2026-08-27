/**
 * FormError — Error global del formulario.
 * Se muestra cuando el envío a Supabase falla.
 *
 * Props:
 *   error — Mensaje de error (si es null/no existe, no renderiza nada)
 */
export default function FormError({ error }) {
  if (!error) return null
  return <p className="field__error" role="alert">{error}</p>
}
