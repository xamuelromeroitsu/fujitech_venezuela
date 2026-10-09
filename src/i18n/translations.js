// Diccionario central de textos visibles. Las claves deben conservar la misma
// estructura en cada idioma para que t('seccion.clave') encuentre su traduccion.
export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      quote: 'Cotizar',
      ipr: 'Semáforo IPR',
      jobs: 'Trabaja con nosotros',
      location: 'Ubicación',
    },
    footer: {
      contact: 'Contacto',
    },
  },
  en: {
    nav: {
      home: 'Home',
      quote: 'Get a quote',
      ipr: 'IPR status',
      jobs: 'Work with us',
      location: 'Location',
    },
    footer: {
      contact: 'Contact',
    },
  },
}

// Para ampliar: agrega nuevas claves dentro de su seccion en TODOS los idiomas
// activos. Para agregar otro idioma, copia la misma estructura y traduce cada
// valor; el selector de idioma tambien debera actualizarse cuando se implemente.
