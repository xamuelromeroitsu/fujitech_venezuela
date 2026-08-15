/**
 * Configuración del widget de WhatsApp.
 * Número de teléfono en formato legible (SIN prefijo +58).
 * El código de país se agrega automáticamente para construir el enlace wa.me.
 */
export const WHATSAPP_CONFIG = {
  phone: '414-3254458',
  countryCode: '58',
  businessName: 'Fujitec Venezuela',
  statusText: 'En línea',
  welcomeGreeting: 'Hola, ¿cómo estás? 👋',
  welcomeText: '¿En qué podemos ayudarte?',
  typingDelay: 1500,
  ctaText: 'Iniciar chat en WhatsApp',
  defaultMessage: 'Hola, quiero información sobre sus servicios.',
}

export function buildWhatsAppLink(phone, countryCode, message) {
  const digits = phone.replace(/\D/g, '')
  const full = `${countryCode}${digits}`
  return `https://wa.me/${full}?text=${encodeURIComponent(message)}`
}
