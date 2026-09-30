# Navbar — Barra de Navegación Principal

> **Archivo:** `src/components/layout/Navbar.jsx` + `Navbar.css`  
> **Design System:** v2 Industrial  
> **Versión:** 2.0

---

## Descripción
Barra de navegación fija (`position: sticky`), con hide-on-scroll, logo, enlaces principales y menú responsive.

---

## Props
**Sin props** — Componente autónomo, usa `react-router-dom` para navegación.

---

## Estructura

```
<header className="navbar">
  <div className="container navbar__inner">
    <Link className="navbar__brand" to="/">
      <img src="/images/company/logo_trasparente.com.png" alt="Fujitec Venezuela" className="navbar__logo" />
    </Link>

    <button className="navbar__toggle" aria-expanded={open} aria-controls="navbar-menu" aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>
      <span className="navbar__toggle-bar" />
      <span className="navbar__toggle-bar" />
      <span className="navbar__toggle-bar" />
    </button>

    <nav id="navbar-menu" className="navbar__menu">
      <NavLink to="/" end>Inicio</NavLink>
      <NavLink to="/cotizar">Cotizar</NavLink>
      <NavLink to="/ipr">Semáforo IPR</NavLink>
      <NavLink to="/empleo">Trabaja con nosotros</NavLink>
    </nav>
  </div>
</header>
```

---

## Enlaces de Navegación

| Ruta | Label | Activo en |
|------|-------|-----------|
| `/` | Inicio | `/` exacto |
| `/cotizar` | Cotizar | `/cotizar` |
| `/ipr` | Semáforo IPR | `/ipr` |
| `/empleo` | Trabaja con nosotros | `/empleo` |

---

## Comportamiento Hide-on-Scroll

```jsx
const hidden = useHideOnScroll()
// Añade clase 'navbar--hidden' cuando scroll down
// Quita clase cuando scroll up
```

- **Down scroll:** `transform: translateY(-100%)` (oculta navbar)
- **Up scroll:** `transform: translateY(0)` (muestra navbar)
- Transición: `--motion-base` (200ms cubic-bezier)

---

## Estados Visuales (Desktop)

| Estado | Link Color | Underline |
|--------|------------|-----------|
| Default | `--color-ink-muted` | `width: 0` |
| Hover | `--color-ink` | `width: 100%` (animado) |
| Active | `--color-ink` | `width: 100%` (permanente) |

**Underline:** `2px solid --color-primary`, animado `--motion-base` (200ms)

---

## Responsive (< 900px)

| Elemento | Comportamiento |
|----------|----------------|
| Toggle button | Visible (hamburguesa 3 barras) |
| Menu | `position: absolute`, `top: var(--navbar-height)`, full width |
| Links | Stack vertical, `border-bottom: 1px solid --color-line` |
| Animación | `transform: translateY(-12px)` + `opacity: 0` → `0 + opacity: 1` |

**Toggle Animation:** 3 barras → X (rotate 45° + translateY)

---

## Accesibilidad
- `aria-expanded` en toggle button
- `aria-controls="navbar-menu"` vincula con nav
- `aria-label` dinámico: "Abrir menú" / "Cerrar menú"
- `aria-expanded` en toggle sincronizado con estado
- Focus-visible en links y toggle
- `NavLink` con `aria-current="page"` implícito en active

---

## Logo

```jsx
<img
  src="/images/company/logo_trasparente.com.png"
  alt="Fujitec Venezuela"
  className="navbar__logo"
/>
```
- Height: `40px`, width: auto
- `padding-top: 4px` para alineación óptica

---

## CSS Classes Generadas

```css
.navbar                     /* Header sticky */
.navbar--hidden             /* Hide on scroll down */
.navbar__inner              /* Container flex */
.navbar__brand              /* Link logo */
.navbar__logo               /* Imagen logo */
.navbar__menu               /* Nav links container */
.navbar__link               /* Link base */
.navbar__link:hover         /* Hover underline */
.navbar__link--active       /* Active state */
.navbar__toggle             /* Hamburger button */
.navbar__toggle-bar         /* Barras hamburguesa */
.navbar__toggle--active     /* Estado abierto (X) */
```

---

## Animaciones

| Elemento | Transición | Duración | Easing |
|----------|------------|----------|--------|
| Hide/Show navbar | `transform` | `--motion-base` (200ms) | `cubic-bezier(0.2,0,0,1)` |
| Link underline | `width` | `--motion-base` | `cubic-bezier(0.2,0,0,1)` |
| Toggle bars → X | `transform` + `opacity` | `--motion-base` | `cubic-bezier(0.2,0,0,1)` |
| Mobile menu | `transform` + `opacity` | `--motion-base` | `cubic-bezier(0.2,0,0,1)` |

---

## Hook `useHideOnScroll`

```jsx
// src/hooks/useHideOnScroll.js
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

---

## Archivos Relacionados

| Archivo | Ruta |
|---------|------|
| Componente | `src/components/layout/Navbar.jsx` |
| Estilos | `src/components/layout/Navbar.css` |
| Hook | `src/hooks/useHideOnScroll.js` |
| Design System | [design-system.md](../design-system.md) |
| App Root | `src/App.jsx` |