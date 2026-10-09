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
    language: {
      change: 'Cambiar idioma',
      next: 'Siguiente idioma',
      dragHint: 'Pulsa o arrastra el botón y suéltalo para cambiar el idioma.',
      names: {
        es: 'Español',
        en: 'Inglés',
        pt: 'Portugués',
      },
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
    language: {
      change: 'Change language',
      next: 'Next language',
      dragHint: 'Press or drag the button and release it to change the language.',
      names: {
        es: 'Spanish',
        en: 'English',
        pt: 'Portuguese',
      },
    },
  },
  pt: {
    nav: {
      home: 'Início',
      quote: 'Solicitar orçamento',
      ipr: 'Status IPR',
      jobs: 'Trabalhe conosco',
      location: 'Localização',
    },
    footer: {
      contact: 'Contato',
    },
    language: {
      change: 'Mudar idioma',
      next: 'Próximo idioma',
      dragHint: 'Pressione ou arraste o botão e solte-o para mudar o idioma.',
      names: {
        es: 'Espanhol',
        en: 'Inglês',
        pt: 'Português',
      },
    },
  },
}

// Para ampliar: agrega nuevas claves dentro de su seccion en TODOS los idiomas
// activos. Este diccionario habilita el ciclo del Navbar; traducir el resto de
// la interfaz y comprobar que no falten claves sigue siendo trabajo por hacer.
