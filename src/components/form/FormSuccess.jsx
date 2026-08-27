import Button from '../ui/Button'
import './FormSuccess.css'

/**
 * FormSuccess — Pantalla de éxito compartida para todos los formularios.
 *
 * Props:
 *   nombre     — Nombre del usuario (se muestra en el mensaje)
 *   titulo     — Título del éxito (ej: "Solicitud recibida")
 *   mensaje    — Mensaje personalizado después del nombre
 *   textoBoton — Texto del botón para resetear (ej: "Nueva solicitud")
 *   onReset    — Función al clickear el botón
 */
export default function FormSuccess({ nombre, titulo, mensaje, textoBoton = 'Nueva solicitud', onReset }) {
  return (
    <div className="form-success" role="status">
      <p className="form-success__icon">✓</p>
      <h3>{titulo}</h3>
      <p>Gracias, {nombre}. {mensaje}</p>
      <Button variant="secondary" onClick={onReset}>{textoBoton}</Button>
    </div>
  )
}
