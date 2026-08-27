/**
 * Reglas de validación reutilizables.
 * Cada función devuelve null (válido) o string (mensaje de error).
 * Para agregar una nueva regla: agrega aquí, importa { rules } en el componente.
 */
const EXTENSIONES_EMAIL = 'com|org|net|info|ve|co|es|mx|edu|gob|gov|mil|tech|io|app|store|me|site|online'
const EMAIL_REGEX = new RegExp(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.(${EXTENSIONES_EMAIL})$`)

export const rules = {
  nombre: (v) => {
    if (!v.trim()) return 'Ingresa tu nombre'
    if (/\d/.test(v)) return 'El nombre no puede contener números'
    return null
  },
  email: (v) => {
    if (!v.trim()) return 'Ingresa tu email'
    if (!EMAIL_REGEX.test(v)) return 'Email inválido (ej: nombre@dominio.com)'
    return null
  },
  telefono: (v) => {
    if (!v.trim()) return 'Ingresa un teléfono'
    if (!/^[+\d\s-]+$/.test(v)) return 'Solo números, espacios, guiones y +'
    const soloDigitos = v.replace(/[\s-]/g, '').replace('+', '')
    if (soloDigitos.length < 4) return 'Mínimo 4 dígitos'
    if (soloDigitos.length > 15) return 'Máximo 15 dígitos'
    return null
  },
  edificio: (v) => {
    if (v.length > 50) return 'Máximo 50 caracteres'
    return null
  },
  tipoInmueble: (v) => {
    if (!v) return 'Selecciona un tipo de inmueble'
    return null
  },
  archivoCV: (file) => {
    if (!file) return null
    const tipos = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!tipos.includes(file.type)) return 'Solo se aceptan archivos PDF o Word'
    if (file.size > 5 * 1024 * 1024) return 'Máximo 5 MB'
    return null
  },
}
