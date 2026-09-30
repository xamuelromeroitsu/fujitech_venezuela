# Animation System — Motion Industrial

> **Archivos:** `src/styles/scroll-reveal.css`, `src/components/ScrollRevealProvider.jsx`, `src/hooks/useScrollReveal.js`, `src/components/animation/SplitText.jsx`  
> **Design System:** v2 Industrial  
> **Versión:** 2.0

---

## Descripción
Sistema de animaciones industriales basado en **motion tokens** y **IntersectionObserver** nativo. Sin librerías externas (excepto GSAP para SplitText).

---

## Motion Tokens (Design System v2)

| Token | Valor | Uso |
|-------|-------|-----|
| `--motion-micro` | `120ms cubic-bezier(0.2, 0, 0, 1)` | Hover/tap: buttons, cards, chips, inputs |
| `--motion-base` | `200ms cubic-bezier(0.2, 0, 0, 1)` | Transitions base: navbar, modales, toggles |
| `--motion-macro` | `350ms cubic-bezier(0.2, 0, 0, 1)` | Scroll reveal, page transitions |

**Curva:** `cubic-bezier(0.2, 0, 0, 1)` = **Quintic Out / Decelerate Curve** — estándar en sistemas industriales de alto rendimiento.

---

## 1. Scroll Reveal System

### CSS (scroll-reveal.css)

```css
/* Base state - oculto */
[data-reveal] {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity var(--motion-macro), transform var(--motion-macro);
}

/* Revealed state */
[data-reveal].revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered children */
[data-reveal] > * {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity var(--motion-macro), transform var(--motion-macro);
}

[data-reveal].revealed > * {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delays */
[data-reveal].revealed > *:nth-child(1) { transition-delay: 0ms; }
[data-reveal].revealed > *:nth-child(2) { transition-delay: 80ms; }
[data-reveal].revealed > *:nth-child(3) { transition-delay: 160ms; }
[data-reveal].revealed > *:nth-child(4) { transition-delay: 240ms; }
[data-reveal].revealed > *:nth-child(5) { transition-delay: 320ms; }
[data-reveal].revealed > *:nth-child(6) { transition-delay: 400ms; }
```

### ScrollRevealProvider (IntersectionObserver)

```jsx
// src/components/ScrollRevealProvider.jsx
export default function ScrollRevealProvider() {
  const { pathname } = useLocation()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname]) // Re-ejecuta en cambio de ruta

  return null
}
```

**Características:**
- Se re-ejecuta en cada cambio de ruta (`pathname` dependency)
- Respeta `prefers-reduced-motion`
- `rootMargin: '0px 0px -50px 0px'` — trigger 50px antes del viewport
- `threshold: 0.1` — 10% visible
- `unobserve` tras reveal (one-time)
- Re-ejecuta en navegación SPA (fix para re-mount)

---

## 2. Hook useScrollReveal (Individual)

```js
// src/hooks/useScrollReveal.js
export default function useScrollReveal(options = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) observer.unobserve(element)
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}
```

### Uso
```jsx
function MiComponente() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div ref={ref} className={isVisible ? 'revealed' : ''} data-reveal>
      Contenido que se revela
    </div>
  )
}
```

### Hook Múltiple (useScrollRevealMulti)
```js
export function useScrollRevealMulti(count, options = {}) {
  const refs = useRef([])
  const [visible, setVisible] = useState(new Array(count).fill(false))

  useEffect(() => {
    // ... similar logic for multiple elements
  }, [count, options])

  const setRef = (index) => (el) => { refs.current[index] = el }
  return { refs: setRef, visible }
}
```

---

## 3. SplitText (GSAP) — Animación de Texto

### Componente
```jsx
// src/components/animation/SplitText.jsx
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

export default function SplitTextComponent({ children, className, ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const split = new SplitText(ref.current, { type: 'lines,words,chars' })
    gsap.from(split.chars, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.02,
      ease: 'power2.out'
    })
    return () => split.revert()
  }, [])

  return <div ref={ref} className={className} {...props}>{children}</div>
}
```

### Uso
```jsx
import SplitText from '@/components/animation/SplitText'

<SplitText className="hero__title">
  Especialista en Mantenimiento y Modernización de Ascensores Fujitec en Venezuela
</SplitText>
```

**Nota:** Requiere `gsap` + `@gsap/react` + `gsap/SplitText` (plugins pagos de GSAP).

---

## 4. Micro-interactions (Hover/Tap)

### Buttons
```css
.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
.btn:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}
```

### Cards
```css
.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
.card--lined-bottom:hover::after {
  width: 100%; /* Línea animada bottom */
}
```

### Chips
```css
.chip-group__chip:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}
```

### Inputs
```css
.field__control:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-tint);
}
```

---

## 5. Reduced Motion (Obligatorio)

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  [data-reveal],
  [data-reveal] > * {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
```

**ScrollRevealProvider** respeta automáticamente:
```js
if (prefersReducedMotion) {
  document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('revealed'))
  return
}
```

---

## 5. Performance Guidelines

| Regla | Descripción |
|-------|-------------|
| **Solo transform/opacity** | Para animaciones 60fps (GPU accelerated) |
| **Evita layout thrashing** | No animar `width`, `height`, `top`, `left`, `margin` |
| **will-change** | Usar con moderación: `will-change: transform, opacity` |
| **Stagger delays** | Máx 400ms total para grids (6 items × 80ms) |
| **Reduced motion** | Siempre implementar y testear |

---

## 6. Implementación en Landing

### Secciones con `data-reveal`
```jsx
<section className="propuesta" id="propuesta" data-reveal>
  <SectionHeading ... />
  <div className="propuesta__grid">
    {PILARES.map(p => <Card key={p.title} variant="lined-top" ... />)}
  </div>
</section>

<section className="soluciones" id="soluciones" data-reveal>
  <SectionHeading ... />
  <div className="soluciones__grid">
    {SOLUCIONES.map(s => <Card key={s.title} variant="lined-bottom" ... />)}
  </div>
</section>
```

**Stagger automático:** CSS `:nth-child(n)` delays (0, 80, 160, 240, 320, 400ms)

---

## 6. Testing Checklist

- [ ] `prefers-reduced-motion: reduce` desactiva todo
- [ ] Scroll reveal funciona en carga inicial
- [ ] Scroll reveal funciona al navegar entre rutas (SPA)
- [ ] Stagger delays correctos (0, 80, 160, 240, 320, 400ms)
- [ ] Hover/tap micro-interactions suaves (60fps)
- [ ] No layout shift (CLS < 0.1)
- [ ] Performance: 60fps en móviles
- [ ] SplitText se revierte al unmount (no memory leaks)

---

## Archivos Relacionados

| Archivo | Ruta |
|---------|------|
| CSS Reveal | `src/styles/scroll-reveal.css` |
| Provider | `src/components/ScrollRevealProvider.jsx` |
| Hooks | `src/hooks/useScrollReveal.js` |
| SplitText | `src/components/animation/SplitText.jsx` |
| CSS Global | `src/styles/global.css` (imports) |
| Design System | [design-system.md](../design-system.md#motion--preciso-industrial) |
| SEO Positioning | [seo-positioning.md](../seo-positioning.md) |