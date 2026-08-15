import { useEffect, useState } from 'react'
import { WHATSAPP_CONFIG, buildWhatsAppLink } from './whatsapp.config'
import './WhatsAppWidget.css'

export default function WhatsAppWidget() {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)
  const [typing, setTyping] = useState(true)

  const link = buildWhatsAppLink(
    WHATSAPP_CONFIG.phone,
    WHATSAPP_CONFIG.countryCode,
    WHATSAPP_CONFIG.defaultMessage,
  )

  const hora = new Date().toLocaleTimeString('es-VE', { hour: '2-digit', minute: '2-digit' })

  function toggle() {
    if (closing) return
    if (visible) setClosing(true)
    else setVisible(true)
  }

  function handleClose() {
    if (!closing) setClosing(true)
  }

  useEffect(() => {
    if (!visible) {
      setTyping(true)
      return
    }
    const timer = setTimeout(() => setTyping(false), WHATSAPP_CONFIG.typingDelay)
    return () => clearTimeout(timer)
  }, [visible])

  useEffect(() => {
    if (!closing) return
    const timer = setTimeout(() => {
      setClosing(false)
      setVisible(false)
    }, 320)
    return () => clearTimeout(timer)
  }, [closing])

  return (
    <div className="wa">
      {visible && (
        <div
          className={`wa__panel ${closing ? 'wa__panel--closing' : ''}`}
          role="dialog"
          aria-label={`Chat de ${WHATSAPP_CONFIG.businessName}`}
          aria-hidden={closing}
        >
          <header className="wa__header">
            <span className="wa__avatar" aria-hidden="true">F</span>
            <div className="wa__header-info">
              <p className="wa__name">{WHATSAPP_CONFIG.businessName}</p>
              <p className="wa__status">
                <span className="wa__dot" aria-hidden="true" />
                {WHATSAPP_CONFIG.statusText}
              </p>
            </div>
            <button
              type="button"
              className="wa__close"
              onClick={handleClose}
              aria-label="Cerrar chat"
            >
              ✕
            </button>
          </header>

          <div className="wa__body">
            {typing ? (
              <div className="wa__bubble wa__typing" aria-label="Escribiendo…">
                <span className="wa__typing-dot" />
                <span className="wa__typing-dot" />
                <span className="wa__typing-dot" />
              </div>
            ) : (
              <div className="wa__bubble">
                <p className="wa__bubble-text">
                  <strong>{WHATSAPP_CONFIG.welcomeGreeting}</strong>
                  <br />
                  {WHATSAPP_CONFIG.welcomeText}
                </p>
                <span className="wa__bubble-time">{hora}</span>
              </div>
            )}
            <p className="wa__hint">Normalmente responde en minutos</p>
          </div>

          <div className="wa__footer">
            <a
              className="wa__cta"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {WHATSAPP_CONFIG.ctaText}
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        className={`wa__fab ${visible ? 'wa__fab--active' : ''}`}
        onClick={toggle}
        aria-expanded={visible}
        aria-label={visible ? 'Cerrar chat de WhatsApp' : 'Abrir chat de WhatsApp'}
      >
        <span className="wa__fab-icons">
          <svg
            className="wa__icon wa__icon--wa"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <svg
            className="wa__icon wa__icon--close"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M18.3 5.7a1 1 0 0 1 0 1.4L13.4 12l4.9 4.9a1 1 0 0 1-1.4 1.4L12 13.4l-4.9 4.9a1 1 0 0 1-1.4-1.4l4.9-4.9-4.9-4.9a1 1 0 0 1 1.4-1.4l4.9 4.9 4.9-4.9a1 1 0 0 1 1.4 0z" />
          </svg>
        </span>
      </button>
    </div>
  )
}
