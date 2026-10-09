# Internacionalización (i18n)

> **Estado:** fase 2 implementada con ReactBits Sling Button. El selector recorre español, inglés y portugués; las demás secciones aún no están traducidas.
> **Alcance:** la traducción del contenido se incorporará gradualmente, feature por feature.

Esta guía reúne las decisiones y ejemplos conversados para agregar cambio de idioma a Fujitec Venezuela poco a poco, entendiendo cada parte y manteniendo cambios pequeños que se puedan revisar y confirmar con commits separados.

## ¿Qué significa i18n?

**i18n** es una abreviatura de *internationalization* (internacionalización): preparar una aplicación para presentar su contenido en varios idiomas. Se cuentan las letras entre la “i” inicial y la “n” final: internationalization tiene 18 caracteres.

La estrategia propuesta para este proyecto es:

1. Guardar las traducciones en diccionarios organizados por idioma y sección.
2. Mantener el idioma seleccionado en un contexto de React compartido.
3. Consultar cada texto mediante una función `t()` y una clave como `nav.home`.
4. Ofrecer un control de idioma en el Navbar mediante Sling Button de ReactBits.
5. Migrar los textos de la interfaz gradualmente, feature por feature.

Al final, los componentes no deberían tener que decidir por su cuenta qué idioma mostrar. Reciben el texto del diccionario para el idioma activo.

## Estructura

```text
src/
  i18n/
    translations.js
    LanguageContext.jsx
```

`src/i18n/` centraliza la lógica y los recursos de idioma. No hace falta reorganizar `features/` ni `components/`: cada feature puede migrar sus textos en una fase posterior. La carpeta ya contiene los archivos de la fase 1.

## Diccionario de traducciones

La propuesta usa un objeto JavaScript. Su primer nivel es el idioma, el segundo la sección y el tercero las claves de texto:

```js
translations.es.nav.home // "Inicio"
translations.en.nav.home // "Home"
```

El diccionario implementado en `src/i18n/translations.js` contiene las etiquetas de navegación y los textos accesibles del selector en español, inglés y portugués:

```js
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
      names: {
        es: 'Espanhol',
        en: 'Inglês',
        pt: 'Português',
      },
    },
  },
}
```

El selector habilita los tres idiomas para las etiquetas del Navbar. Esto no significa que todo el contenido del sitio esté traducido: la migración de las demás secciones sigue siendo trabajo futuro.

Las traducciones se amplían por sección. Por ejemplo, la landing podría tener `landing.hero.title` y el pie de página `footer.contact`. Conviene mantener una estructura equivalente en cada idioma para que todas las claves se puedan resolver.

## Contexto de idioma y función `t()`

`src/i18n/LanguageContext.jsx` implementa el `LanguageProvider`, que comparte el idioma y la función de traducción con los componentes descendientes. El hook `useLanguage()` permite acceder a esos valores:

```jsx
const { language, setLanguage, t } = useLanguage()
```

La función `t('nav.home')` divide la clave por los puntos y recorre el diccionario del idioma activo:

```js
const keys = key.split('.')
let value = translations[language]

for (const part of keys) {
  value = value?.[part]
}
```

Así, `t('nav.home')` equivale a buscar `translations[language].nav.home`. Si no existe la clave, `t()` devuelve la clave recibida, por ejemplo `nav.home`, para que la referencia faltante sea visible durante el desarrollo. `setLanguage()` rechaza idiomas que no estén definidos en el diccionario. Si `localStorage` contiene un valor no admitido, la aplicación comienza en español.

El contexto también:

- Lee la preferencia guardada en `localStorage` al iniciar.
- Guarda la selección cuando cambia.
- Actualiza `document.documentElement.lang` a `es` o `en`.

`localStorage` permite conservar la preferencia al recargar la página. El atributo `lang` del elemento HTML informa el idioma principal del documento a navegadores y tecnologías de asistencia.

## Integración en la aplicación

El Provider envuelve los componentes que necesitan consultar traducciones. Está integrado dentro de `BrowserRouter`, manteniendo el orden y el comportamiento existentes:

```jsx
<BrowserRouter>
  <LanguageProvider>
    <ScrollToTop />
    <ScrollRevealProvider />
    <Navbar />
    <main>
      <AppRoutes />
    </main>
    <Footer />
  </LanguageProvider>
</BrowserRouter>
```

La ubicación bajo `BrowserRouter` preserva el acceso de Navbar y Footer a los hooks de React Router, además de dar acceso al idioma a las rutas y sus páginas. El Navbar consume el contexto desde la fase 2 para traducir sus etiquetas y controlar el selector.

## Navbar: selector Sling Button cíclico de idioma

El Navbar será el primer componente migrado. Las etiquetas actuales corresponden a estas claves:

| Texto actual | Clave |
|---|---|
| Inicio | `nav.home` |
| Cotizar | `nav.quote` |
| Semáforo IPR | `nav.ipr` |
| Trabaja con nosotros | `nav.jobs` |
| Ubicación | `nav.location` |

El Navbar construye sus enlaces usando `t()`:

```jsx
const LINKS = [
  { to: '/', label: t('nav.home') },
  { to: '/cotizar', label: t('nav.quote') },
  { to: '/ipr', label: t('nav.ipr') },
  { to: '/empleo', label: t('nav.jobs') },
]
```

`src/components/layout/LanguageSling.jsx` conecta el Sling Button de ReactBits al contexto. Muestra el código del idioma activo y avanza al siguiente al presionarlo o al completar el gesto de arrastre:

```jsx
const LANGUAGES = ['es', 'en', 'pt']
const nextLanguage = LANGUAGES[(currentLanguageIndex + 1) % LANGUAGES.length]
setLanguage(nextLanguage)
```

El ciclo es `ES → EN → PT → ES`. Sling Button aporta el estiramiento y retroceso elástico, y respeta la preferencia del sistema por movimiento reducido. El callback `onSend` realiza el cambio de idioma, mientras `ariaLabel` y la instrucción accesible se localizan con el idioma actual. El selector se añade al Navbar existente sin reemplazar su navegación móvil, el enlace a ubicación ni el comportamiento de scroll.

## Vocabulario técnico

| Término | Significado |
|---|---|
| **Internacionalización (i18n)** | Preparar la aplicación para mostrar contenido en distintos idiomas. |
| **Diccionario** | Objeto que asocia una clave con un texto traducido. |
| **Clave de traducción** | Nombre estable del texto, como `nav.home`, independiente de su traducción. |
| **Context** | Mecanismo de React para compartir valores con componentes descendientes sin pasarlos manualmente por cada nivel. |
| **Provider** | Componente que publica los valores del contexto a sus descendientes. |
| **Hook** | Función de React; aquí `useLanguage()` facilita consumir el contexto. |
| **`t()`** | Función auxiliar que resuelve una clave al texto del idioma actual. |
| **`localStorage`** | Almacenamiento del navegador que persiste la preferencia entre recargas. |
| **Fallback** | Comportamiento definido cuando falta una clave o un idioma; debe ser explícito y coherente. |

## Plan por fases y commits

Cada fase debe terminar con una revisión y una validación antes del commit. No es necesario crear todos los archivos ni traducir toda la aplicación en un solo cambio.

| Fase | Alcance | Commit sugerido |
|---|---|---|
| 1. Base del idioma | ✅ Crear `src/i18n/translations.js` y `src/i18n/LanguageContext.jsx`; integrar `LanguageProvider` en `src/App.jsx`. | `feat: add language context and translation dictionary` |
| 2. Navbar | ✅ Traducir etiquetas, accesibilidad y ubicación; integrar ReactBits Sling Button con ciclo ES → EN → PT; probar navegación y preferencia persistida. | `feat: use language selector in navbar` |
| 3. Inicio | Migrar Hero, llamadas a la acción (CTA), servicios y testimonios. | `feat: translate landing page texts` |
| 4. Footer y formularios | Migrar Footer, etiquetas, botones, validaciones y mensajes de estado. | `feat: translate footer and forms` |
| 5. Portugués | Completar y probar las traducciones PT del contenido migrado; el selector ya incluye PT. | `feat: add portuguese translations` |

Las fases 1 y 2 están implementadas; los commits sugeridos son propuestas y todavía debe crearlos la persona desarrolladora. Las fases 3 a 5 son trabajo futuro. Antes de dar por completo un idioma, hay que comprobar que todas las secciones ya migradas tienen sus claves en ese idioma.

## Superficies identificadas para traducir

Los textos visibles pueden estar repartidos entre componentes y features; agregar el contexto no los traduce automáticamente. Las áreas mencionadas para la migración progresiva son:

- Navbar, incluyendo texto accesible de los controles.
- Página principal: Hero, propuesta de valor, soluciones, testimonios y CTA.
- Footer.
- Cotizador, IPR y empleo: títulos, campos, botones, errores y confirmaciones.
- Textos alternativos de imágenes y otros atributos accesibles cuando su contenido dependa del idioma.

El objetivo no es traducir identificadores de código, rutas o datos que deban conservarse por razones funcionales; se traducen los textos presentados a las personas.

## Archivos del proyecto relacionados

La organización actual observada en el repositorio es:

- `src/App.jsx`: raíz de la aplicación; integra el provider.
- `src/components/layout/Navbar.jsx`: integra las etiquetas traducidas y `LanguageSling`.
- `src/components/layout/LanguageSling.jsx`: conecta Sling Button, el ciclo de idiomas y las etiquetas accesibles.
- `src/components/ui/SlingButton.jsx` y `SlingButton.css`: componente de ReactBits y sus estilos.
- `src/components/ui/SlingButton.LICENSE.md`: atribución y condiciones de licencia del componente.
- `src/components/layout/Footer.jsx`: migración prevista en la fase 4.
- `src/features/landing/`: secciones de la página principal previstas en la fase 3.
- `src/pages/` y `src/features/`: páginas y funcionalidades que se revisarán para las fases siguientes.
- `src/i18n/translations.js`: diccionario inicial de español e inglés.
- `src/i18n/LanguageContext.jsx`: estado, persistencia, atributo `lang`, función `t()` y hook `useLanguage()`.

## Criterios de comprobación

Al cerrar las fases correspondientes, comprobar:

1. La aplicación inicia en español si no existe una preferencia válida.
2. El botón circular recorre ES → EN → PT → ES y actualiza las etiquetas del Navbar.
3. Una recarga conserva el idioma guardado en `localStorage`.
4. `document.documentElement.lang` coincide con el idioma activo.
5. `useLanguage()` produce un error claro si se usa fuera de `LanguageProvider`.
6. `setLanguage()` rechaza idiomas no definidos en el diccionario.
7. El build de producción termina correctamente.

## Registro de decisiones de aprendizaje

- Se avanzará de forma incremental para poder entender cada parte y separar el trabajo en commits pequeños.
- Sling Button permite recorrer ES/EN/PT; el contenido general del sitio se traduce gradualmente.
- Las claves se organizarán por sección, por ejemplo `nav.home` y `footer.contact`.
- La experiencia de idioma se centraliza en contexto para evitar duplicar estado en cada componente.
- Cambiar el idioma solo afectará los textos migrados. El resto seguirá en su idioma actual hasta completar su fase.
