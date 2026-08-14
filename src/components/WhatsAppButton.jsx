import './WhatsAppButton.css'

const DEFAULT_NUMBER = '582120000000'

export default function WhatsAppButton({ message = 'Hola, quiero información sobre sus servicios.', className = '' }) {
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || DEFAULT_NUMBER
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-fab ${className}`}
      aria-label="Escríbenos por WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L3 29l8.2-2.1c1.5.8 3.1 1.2 4.8 1.2 6.6 0 12-5.4 12-12S22.6 3 16 3zm6.9 16.9c-.3.8-1.7 1.6-2.4 1.6-.6 0-1.4.1-4.7-1-3.5-1.3-5.7-4.5-5.9-4.7-.2-.3-1.4-1.9-1.4-3.6 0-1.7.9-2.5 1.2-2.9.3-.3.7-.4.9-.4h.7c.2 0 .5-.1.8.6.3.8 1.1 2.7 1.2 2.9.1.2.1.4 0 .6-.1.2-.2.4-.3.5l-.5.6c-.2.2-.4.4-.2.7.2.4.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.8.3.2.5.1.7-.1l1-1.1c.2-.3.5-.2.8-.1l2.6 1.2c.3.2.5.3.6.4 0 .1 0 .8-.3 1.6z" />
      </svg>
    </a>
  )
}
