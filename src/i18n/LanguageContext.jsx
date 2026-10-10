import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations'

// El contexto permite que cualquier componente descendiente consulte o cambie
// el idioma sin tener que recibir esas funciones por props.
const LanguageContext = createContext(null)
const DEFAULT_LANGUAGE = 'es'
const STORAGE_KEY = 'lang'

function isSupportedLanguage(language) {
  // El diccionario es la fuente de verdad para los idiomas disponibles.
  return Object.hasOwn(translations, language)
}

function getInitialLanguage() {
  // Reutiliza la preferencia del navegador, pero ignora valores obsoletos o no
  // admitidos. Para habilitar otro idioma, primero agrégalo a translations.js.
  const savedLanguage = localStorage.getItem(STORAGE_KEY)
  return isSupportedLanguage(savedLanguage) ? savedLanguage : DEFAULT_LANGUAGE
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage)

  useEffect(() => {
    // Mantiene la preferencia entre visitas y declara el idioma del documento
    // para el navegador y las tecnologías de asistencia.
    localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (nextLanguage) => {
    // Rechaza idiomas sin diccionario para evitar que la interfaz quede
    // apuntando a traducciones inexistentes.
    if (!isSupportedLanguage(nextLanguage)) {
      throw new RangeError(`Unsupported language: ${nextLanguage}`)
    }

    setLanguageState(nextLanguage)
  }

  const t = (key, values = {}) => {
    let value = translations[language]

    // Resuelve claves por secciones, por ejemplo "nav.home". Si falta una
    // traducción, mostrar la clave facilita detectar qué entrada agregar.
    for (const part of key.split('.')) {
      value = value?.[part]
    }

    if (typeof value !== 'string') {
      return key
    }

    return value.replace(/\{(\w+)\}/g, (placeholder, name) => (
      Object.hasOwn(values, name) ? values[name] : placeholder
    ))
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  // Detecta inmediatamente una integración incorrecta: el hook necesita que
  // el componente esté dentro de LanguageProvider (montado en App.jsx).
  if (context === null) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
