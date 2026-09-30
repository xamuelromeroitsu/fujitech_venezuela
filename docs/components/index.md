# Component Library — API Reference

> **Versión:** 2.0 (Industrial Design System)  
> **Última actualización:** 2026-09-30  
> **Basado en:** [Design System v2](design-system.md)

---

## Catálogo de Componentes

| Componente | Archivo | Props Principales | Variants | Estado |
|------------|---------|-------------------|----------|--------|
| [Button](button.md) | `Button.jsx` | variant, size, as, disabled | primary, secondary, outline, ghost, whatsapp | ✅ |
| [Card](card.md) | `Card.jsx` | variant, icon, title, subtitle, children | lined-top, lined-bottom, bare | ✅ |
| [Input](input.md) | `Input.jsx` | type, error, hint, pattern, inputMode, required | — | ✅ |
| [SectionHeading](section-heading.md) | `SectionHeading.jsx` | eyebrow, title, description, align | center, left | ✅ |
| [ChipGroup](chip-group.md) | `ChipGroup.jsx` | label, options, value, onChange, multi, error | — | ✅ |
| [FormSuccess](form-success.md) | `FormSuccess.jsx` | nombre, titulo, mensaje, textoBoton, onReset | — | ✅ |
| [FormError](form-error.md) | `FormError.jsx` | error | — | ✅ |
| [PersonalDataFields](personal-data-fields.md) | `PersonalDataFields.jsx` | values, errors, onChange | — | ✅ |
| [Navbar](navbar.md) | `Navbar.jsx` | — | — | ✅ |
| [Footer](footer.md) | `Footer.jsx` | — | — | ✅ |

---

## Guía Rápida de Uso

### Instalación
Los componentes ya están disponibles en `src/components/`. Importar directamente:

```jsx
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import SectionHeading from '@/components/ui/SectionHeading'
import ChipGroup from '@/components/form/ChipGroup'
import FormSuccess from '@/components/form/FormSuccess'
import FormError from '@/components/form/FormError'
import PersonalDataFields from '@/components/form/PersonalDataFields'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
```

### Tokens de Diseño
Todos los componentes usan **Design Tokens v2** vía CSS Custom Properties. Ver [Design System v2](../design-system.md).

```css
/* Tokens disponibles globalmente */
--color-primary, --color-ink, --font-display, --space-5,
--motion-micro, --radius-md, --shadow-md, etc.
```

### Convenciones
- **Props booleanas** para estados (disabled, required, multi)
- **Variant prop** para variantes visuales (variant="primary")
- **Size prop** para tamaños (size="lg")
- **as prop** para renderizado polimórfico (as="a", as="button")
- **className** para extensibilidad CSS

---

## Checklist de Creación de Nuevos Componentes

Ver [Component Creation Guide](creation-guide.md) para el checklist completo.

- [ ] Usa Design Tokens v2 exclusivamente
- [ ] Props tipadas con JSDoc / TypeScript
- [ ] Variants definidas en Design System
- [ ] Responsive mobile-first
- [ ] Focus-visible visible
- [ ] Reduced motion support
- [ ] Tests unitarios (si aplica)
- [ ] Documentación actualizada
- [ ] Preview en Storybook (si aplica)

---

## Referencias

| Documento | Enlace |
|-----------|--------|
| Design System v2 | [design-system.md](../design-system.md) |
| SEO Positioning | [seo-positioning.md](../seo-positioning.md) |
| Hooks API | [hooks.md](../hooks.md) |
| Animations | [animations.md](../animations.md) |
| Icons System | [icons.md](../icons.md) |