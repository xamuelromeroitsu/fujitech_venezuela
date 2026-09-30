# Hooks API Reference

> **Archivos:** `src/hooks/`  
> **Design System:** v2 Industrial  
> **Versión:** 2.0

---

## Catálogo de Hooks

| Hook | Archivo | Propósito |
|------|---------|-----------|
| `useForm` | `useForm.js` | Manejo completo de formularios con validación |
| `useHideOnScroll` | `useHideOnScroll.js` | Hide navbar on scroll down |
| `useScrollReveal` | `useScrollReveal.js` | Scroll reveal individual (IntersectionObserver) |
| `useScrollRevealMulti` | `useScrollReveal.js` | Scroll reveal múltiple (grid) |

---

## useForm — Manejo Completo de Formularios

> **Archivo:** `src/hooks/useForm.js`

### Descripción
Hook completo para manejo de formularios: valores, errores, validación, submit, estados de carga.

### API

```js
const {
  values,           // { [fieldName]: value }
  errors,           // { [fieldName]: errorMessage }
  handleChange,     // (e) => void — handler unificado
  handleSubmit,     // (onSubmit) => (e) => Promise<{ok, error}>
  setErrors,        // (newErrors) => void — setear errores manuales
  setValue,         // (field, value) => void — setear valor individual
  isSubmitting,     // boolean — estado de submit
  resetForm,        // () => void — reset a valores iniciales
} = useForm({ initialValues, validate, onSubmit })
```

### Parámetros

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `initialValues` | `object` | **Sí** | Valores iniciales `{ field: value }` |
| `validate` | `function` | **Sí** | `(values) => errorsObject` — retorna `{ field: 'error' }` |
| `onSubmit` | `function` | **Sí** | `async (values) => void` — lógica de envío |

### Retorno

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `values` | `object` | Valores actuales del formulario |
| `errors` | `object` | Errores actuales `{ field: 'error' }` |
| `handleChange` | `function` | Handler unificado para `onChange` de inputs |
| `handleSubmit` | `function` | Wrapper que ejecuta validación + onSubmit |
| `setErrors` | `function` | `setErrors(newErrors)` — sobrescribe errores |
| `setValue` | `function` | `setValue(field, value)` — setea valor individual |
| `isSubmitting` | `boolean` | `true` durante `onSubmit` |
| `resetForm` | `function` | Resetea a `initialValues` + limpia errores |

---

## useHideOnScroll — Navbar Hide on Scroll

> **Archivo:** `src/hooks/useHideOnScroll.js`

### Descripción
Detecta dirección del scroll y retorna `true` cuando debe ocultar navbar (scroll down).

### API

```js
const hidden = useHideOnScroll()
// Retorna: boolean (true = ocultar navbar)
```

### Implementación

```js
export default function useHideOnScroll() {
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current) setHidden(true)
      else setHidden(false)
      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return hidden
}
```

### Uso en Navbar

```jsx
function Navbar() {
  const hidden = useHideOnScroll()
  return <header className={`navbar ${hidden ? 'navbar--hidden' : ''}`}>...</header>
}
```

### CSS

```css
.navbar {
  position: sticky;
  top: 0;
  transition: transform var(--motion-base);
}
.navbar--hidden {
  transform: translateY(-100%);
}
```

---

## useScrollReveal — Scroll Reveal Individual

> **Archivo:** `src/hooks/useScrollReveal.js`

### API

```js
const { ref, isVisible } = useScrollReveal(options)
```

### Opciones

| Opción | Tipo | Default | Descripción |
|--------|------|---------|-------------|
| `threshold` | `number` | `0.1` | % visible para trigger (0-1) |
| `rootMargin` | `string` | `'0px 0px -50px 0px'` | Margen del viewport |
| `triggerOnce` | `boolean` | `true` | Solo trigger una vez |

### Retorno

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `ref` | `RefObject` | Asignar al elemento a observar |
| `isVisible` | `boolean` | `true` si intersectó |

### Uso

```jsx
function MiSeccion() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className={isVisible ? 'revealed' : ''} data-reveal>
      Contenido que se revela al hacer scroll
    </section>
  )
}
```

### CSS Requerido

```css
[data-reveal] {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity var(--motion-macro), transform var(--motion-macro);
}

[data-reveal].revealed {
  opacity: 1;
  transform: translateY(0);
}
```

---

## useScrollRevealMulti — Scroll Reveal Múltiple (Grid)

> **Archivo:** `src/hooks/useScrollReveal.js` (export named)

### API

```js
const { refs, visible } = useScrollRevealMulti(count, options)
```

### Parámetros

| Parámetro | Tipo | Default | Descripción |
|-----------|------|---------|-------------|
| `count` | `number` | **requerido** | Número de elementos a observar |
| `options` | `object` | `{}` | Mismo que `useScrollReveal` |

### Retorno

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `refs` | `function` | `setRef(index)` — retorna callback para `ref` |
| `visible` | `boolean[]` | Array de booleanos `[false, true, false...]` |

### Uso

```jsx
function MiGrid({ items }) {
  const { refs, visible } = useScrollRevealMulti(items.length)

  return (
    <div className="grid">
      {items.map((item, i) => (
        <Card
          key={item.id}
          ref={refs(i)}
          className={visible[i] ? 'revealed' : ''}
          data-reveal
        >
          {item.content}
        </Card>
      ))}
    </div>
  )
}
```

### Implementación

```js
export function useScrollRevealMulti(count, options = {}) {
  const refs = useRef([])
  const [visible, setVisible] = useState(new Array(count).fill(false))

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(new Array(count).fill(true))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const index = refs.current.indexOf(entry.target)
          if (index !== -1) {
            if (entry.isIntersecting) {
              setVisible(prev => { const next = [...prev]; next[index] = true; return next })
              if (options.triggerOnce !== false) observer.unobserve(entry.target)
            } else if (options.triggerOnce === false) {
              setVisible(prev => { const next = [...prev]; next[index] = false; return next })
            }
          }
        })
      },
      { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || '0px 0px -50px 0px' }
    )

    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [count, options.threshold, options.rootMargin, options.triggerOnce])

  const setRef = (index) => (el) => { refs.current[index] = el }
  return { refs: setRef, visible }
}
```

---

## Resumen de Uso

| Hook | Cuándo Usar |
|------|-------------|
| `useForm` | Todo formulario (cotizar, empleo, IPR) |
| `useHideOnScroll` | Navbar principal |
| `useScrollReveal` | Sección individual, hero, CTA |
| `useScrollRevealMulti` | Grids de cards (Propuesta Valor, Soluciones, Testimonios) |

---

## Archivos Relacionados

| Archivo | Ruta |
|---------|------|
| useForm | `src/hooks/useForm.js` |
| useHideOnScroll | `src/hooks/useHideOnScroll.js` |
| useScrollReveal | `src/hooks/useScrollReveal.js` |
| ScrollRevealProvider | `src/components/ScrollRevealProvider.jsx` |
| CSS Reveal | `src/styles/scroll-reveal.css` |
| Design System | [design-system.md](../design-system.md#motion--preciso-industrial) |
| Animations | [animations.md](animations.md) |