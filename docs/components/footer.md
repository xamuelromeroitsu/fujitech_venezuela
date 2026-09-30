# Footer — Pie de Página

> **Archivo:** `src/components/layout/Footer.jsx` + `Footer.css`  
> **Design System:** v2 Industrial  
> **Versión:** 2.0

---

## Descripción
Pie de página con fondo oscuro (`--color-footer`), grid de 4 columnas, info de contacto, links y copyright.

---

## Props
**Sin props** — Componente autónomo, usa `react-router-dom` y `whatsapp.config.js`.

---

## Estructura

```
<footer className="footer">
  <div className="container footer__grid">
    <div className="footer__brand">
      <img src="/images/company/fujitec_now_logo.png" alt="Fujitec Venezuela" className="footer__logo" />
      <p className="footer__tagline">Soluciones de transporte vertical en Venezuela desde 1968.</p>
    </div>

    <div className="footer__col">
      <h4 className="footer__title">Productos</h4>
      <ul className="footer__list">
        <li><Link to="/cotizar">Mantenimiento</Link></li>
        <li><Link to="/cotizar">Modernización</Link></li>
        <li><Link to="/cotizar">Obra nueva</Link></li>
        <li><Link to="/ipr">Inspecciones IPR</Link></li>
      </ul>
    </div>

    <div className="footer__col">
      <h4 className="footer__title">Empresa</h4>
      <ul className="footer__list">
        <li><Link to="/empleo">Trabaja con nosotros</Link></li>
        <li><Link to="/#servicio-fujitec">Servicio de fábrica</Link></li>
        <li><Link to="/">Privacidad</Link></li>
      </ul>
    </div>

    <div className="footer__col">
      <h4 className="footer__title">Contacto</h4>
      <ul className="footer__list">
        <li className="footer__address">Calle 8 con calle 6, Edificio Luindos, PB, local 1, La Urbina, Caracas - Venezuela</li>
        <li><a href={waLink} target="_blank" rel="noopener noreferrer">+58 414-3254458</a></li>
        <li>ventas@fujitec.com.ve</li>
      </ul>
    </div>
  </div>

  <div className="footer__bottom">
    <div className="container footer__bottom-inner">
      <p>© {year} Fujitec Venezuela. Todos los derechos reservados.</p>
      <p className="footer__since">En el país desde 1968 · Movemos el futuro</p>
    </div>
  </div>
</footer>
```

---

## Grid Layout

| Breakpoint | Columnas |
|------------|----------|
| Desktop (>900px) | `2fr 1fr 1fr 1fr` (Brand + 3 cols) |
| Tablet (≤900px) | `1fr 1fr` (2x2) |
| Mobile (≤560px) | `1fr` (stack) |

**Gap:** `var(--space-6)` (24px)

---

## Sección Brand

| Elemento | Estilo |
|----------|--------|
| Logo | Height `48px`, width auto |
| Tagline | `--color-footer-muted`, `0.9375rem`, max-width `280px` |

---

## Columnas de Links

| Elemento | Estilo |
|----------|--------|
| Título (`footer__title`) | `font-display`, uppercase, tracking-wide, `0.8125rem`, `--color-surface` (blanco) |
| Links | `--color-footer-muted`, `0.9375rem`, hover → `--color-surface` |
| Dirección | `line-height: 1.55` |

---

## Bottom Bar

| Elemento | Contenido |
|----------|-----------|
| Copyright | `© {year} Fujitec Venezuela. Todos los derechos reservados.` |
| Tagline | `En el país desde 1968 · Movemos el futuro` (font-display, 500) |

**Border top:** `1px solid rgba(255,255,255,0.12)`

---

## WhatsApp Link

```jsx
const waLink = buildWhatsAppLink(
  WHATSAPP_CONFIG.phone,
  WHATSAPP_CONFIG.countryCode,
  WHATSAPP_CONFIG.defaultMessage
)
```

- Abre en nueva pestaña: `target="_blank" rel="noopener noreferrer"`
- Config en `src/features/whatsapp/whatsapp.config.js`

---

## Colores (Footer Theme)

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-footer` | `#1a1d23` | Background footer |
| `--color-footer-text` | `#e5e7eb` | Texto principal |
| `--color-footer-muted` | `#9ca3af` | Links, tagline, copyright |
| `--color-surface` | `#ffffff` | Títulos de columnas |

---

## Responsive

| Breakpoint | Grid |
|------------|------|
| >900px | `2fr 1fr 1fr 1fr` |
| ≤900px | `1fr 1fr` |
| ≤560px | `1fr` (stack) |

---

## Accesibilidad
- Links con `aria-label` implícito por texto visible
- `rel="noopener noreferrer"` en WhatsApp externo
- Contraste AA: `--color-footer-muted` sobre `--color-footer`
- Focus-visible en todos los links
- Semántica: `<footer>`, `<nav>` implícito en listas

---

## SEO / Local Business

```html
<!-- En footer para LocalBusiness schema -->
<address>
  Calle 8 con calle 6, Edificio Luindos, PB, local 1, La Urbina, Caracas, Venezuela
</address>
Tel: <a href="tel:+584143254458">+58 414-3254458</a>
Email: <a href="mailto:ventas@fujitec.com.ve">ventas@fujitec.com.ve</a>
```

---

## CSS Classes Generadas

```css
.footer                     /* Footer root */
.footer__grid               /* Grid 4 cols */
.footer__brand              /* Brand column */
.footer__logo               /* Logo image */
.footer__tagline            /* Tagline text */
.footer__col                /* Link column */
.footer__title              /* Column title (h4) */
.footer__list               /* UL links */
.footer__address            /* Address line */
.footer__bottom             /* Bottom bar */
.footer__bottom-inner       /* Bottom content wrapper */
.footer__since              /* Tagline "Desde 1968..." */
```

---

## Archivos Relacionados

| Archivo | Ruta |
|---------|------|
| Componente | `src/components/layout/Footer.jsx` |
| Estilos | `src/components/layout/Footer.css` |
| Config WhatsApp | `src/features/whatsapp/whatsapp.config.js` |
| Design System | [design-system.md](../design-system.md) |
| App Root | `src/App.jsx` |