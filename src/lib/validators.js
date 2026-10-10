/**
 * Reglas de validación reutilizables.
 * Cada función devuelve null (válido) o string (mensaje de error).
 * Para agregar una nueva regla: agrega aquí, importa { rules } en el componente.
 */
const EXTENSIONES_EMAIL = 'com|org|net|info|ve|co|es|mx|edu|gob|gov|mil|tech|io|app|store|me|site|online'
// Valida el formato general del correo y limita los dominios a extensiones admitidas.
const EMAIL_REGEX = new RegExp(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.(${EXTENSIONES_EMAIL})$`)

// Mensajes de respaldo para llamadas que no reciben la función de traducción.
const DEFAULT_MESSAGES = {
  nameRequired: 'Ingresa tu nombre',
  nameNumbers: 'El nombre no puede contener números',
  emailRequired: 'Ingresa tu email',
  emailAt: 'El email debe incluir @',
  emailDomain: 'El email debe incluir un dominio (ej: .com)',
  emailInvalid: 'Email inválido (ej: nombre@dominio.com)',
  phoneRequired: 'Ingresa un teléfono',
  phoneCharacters: 'Solo números, espacios, guiones y +',
  phoneMin: 'Mínimo 4 dígitos',
  phoneMax: 'Máximo 15 dígitos',
  buildingMax: 'Máximo 50 caracteres',
  propertyTypeRequired: 'Selecciona un tipo de inmueble',
  cvType: 'Solo se aceptan archivos PDF o Word',
  cvSize: 'Máximo 5 MB',
}

// Usa la traducción activa cuando está disponible; de lo contrario, devuelve español.
const message = (t, key) => (typeof t === 'function' ? t(`forms.validation.${key}`) : DEFAULT_MESSAGES[key])

export const rules = {
  // Requiere un nombre no vacío y rechaza dígitos.
  nombre: (v, t) => {
    if (!v.trim()) return message(t, 'nameRequired')
    if (/\d/.test(v)) return message(t, 'nameNumbers')
    return null
  },
  // Comprueba primero campos y partes básicas, y después el formato y dominio permitidos.
  email: (v, t) => {
    if (!v.trim()) return message(t, 'emailRequired')
    if (!v.includes('@')) return message(t, 'emailAt')
    const domain = v.split('@')[1] || ''
    if (!domain.includes('.')) return message(t, 'emailDomain')
    if (!EMAIL_REGEX.test(v)) return message(t, 'emailInvalid')
    return null
  },
  // Acepta números, espacios, guiones y un prefijo +; limita la longitud del número.
  telefono: (v, t) => {
    if (!v.trim()) return message(t, 'phoneRequired')
    if (!/^[+\d\s-]+$/.test(v)) return message(t, 'phoneCharacters')
    const soloDigitos = v.replace(/[\s-]/g, '').replace('+', '')
    if (soloDigitos.length < 4) return message(t, 'phoneMin')
    if (soloDigitos.length > 15) return message(t, 'phoneMax')
    return null
  },
  // Limita el nombre del edificio o comunidad a 50 caracteres.
  edificio: (v, t) => {
    if (v.length > 50) return message(t, 'buildingMax')
    return null
  },
  // Este campo es obligatorio para poder cotizar.
  tipoInmueble: (v, t) => {
    if (!v) return message(t, 'propertyTypeRequired')
    return null
  },
  // Permite no adjuntar CV; si se adjunta, solo acepta PDF/Word de hasta 5 MB.
  archivoCV: (file, t) => {
    if (!file) return null
    const tipos = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!tipos.includes(file.type)) return message(t, 'cvType')
    if (file.size > 5 * 1024 * 1024) return message(t, 'cvSize')
    return null
  },
}
