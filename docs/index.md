# Fujitec Venezuela — Documentación Técnica

> **Versión:** 2.0 (Industrial Redesign)  
> **Última actualización:** 2026-09-30  
> **Estado:** Activo  

---

## 🚀 Inicio Rápido

| Documento | Descripción | Audiencia |
|-----------|-------------|-----------|
| [README](../README.md) | Instalación, scripts, estructura general | Todos |
| [Development Workflow](development.md) | Git flow, convenciones, checklist PR | Devs |
| [Deployment](deployment.md) | Vercel, env vars, build, preview | DevOps/Devs |

---

## 🎨 Design System v2 (Industrial)

| Documento | Descripción |
|-----------|-------------|
| [Design System v2](design-system.md) | Paleta industrial, tipografía Space Grotesk, motion tokens, espaciado rítmico, reglas de aplicación |
| [Component Library](components/index.md) | Catálogo de 10 componentes UI con API, variants, ejemplos |
| [Icon System](icons.md) | 18 iconos SVG lineales (stroke 1.5px), guía de uso |
| [Animation System](animations.md) | Motion tokens, ScrollRevealProvider, SplitText (GSAP), reduced motion |
| [SEO Positioning](seo-positioning.md) | Posicionamiento central, keyword map, schema, content briefs, tracking plan |

---

## 🧩 Component Library — API Reference

| Componente | Archivo | Props Principales | Variants |
|------------|---------|-------------------|----------|
| [Button](components/button.md) | `Button.jsx` | variant, size, as, disabled | primary, secondary, outline, ghost, whatsapp |
| [Card](components/card.md) | `Card.jsx` | variant, icon, title, subtitle, children | lined-top, lined-bottom, bare |
| [Input](components/input.md) | `Input.jsx` | type, error, hint, pattern, inputMode, required | — |
| [SectionHeading](components/section-heading.md) | `SectionHeading.jsx` | eyebrow, title, description, align | center, left |
| [ChipGroup](components/chip-group.md) | `ChipGroup.jsx` | label, options, value, onChange, multi, error | — |
| [FormSuccess](components/form-success.md) | `FormSuccess.jsx` | nombre, titulo, mensaje, textoBoton, onReset | — |
| [FormError](components/form-error.md) | `FormError.jsx` | error | — |
| [PersonalDataFields](components/personal-data-fields.md) | `PersonalDataFields.jsx` | values, errors, onChange | — |
| [Navbar](components/navbar.md) | `Navbar.jsx` | — | — |
| [Footer](components/footer.md) | `Footer.jsx` | — | — |

---

## 🔧 Hooks API

| Hook | Archivo | Retorna | Uso |
|------|---------|---------|-----|
| [useForm](hooks.md#useform) | `useForm.js` | values, errors, handleChange, handleSubmit, isSubmitting... | Formularios |
| [useHideOnScroll](hooks.md#usehideonscroll) | `useHideOnScroll.js` | hidden (boolean) | Navbar |
| [useScrollReveal](hooks.md#usescrollreveal) | `useScrollReveal.js` | ref, isVisible | Reveal individual |
| [useScrollRevealMulti](hooks.md#usescrollrevealmulti) | `useScrollReveal.js` | refs, visible | Reveal múltiple |

---

## ⚡ Features (Módulos Funcionales)

| Feature | Ruta | Documento | Supabase Table |
|---------|------|-----------|----------------|
| [Landing](features/landing.md) | `/` | Secciones: Hero, PropuestaValor, Soluciones, SoloFujitec, Testimonios, ContactCta | — |
| [Cotizador](features/cotizador.md) | `/cotizar` | 3 pasos, rail stepper, ChipGroup, radio cards | `leads` |
| [IPR](features/ipr.md) | `/ipr` | RAE input, semáforo verde/amarillo/rojo | `solicitudes_ipr` |
| [Empleo](features/empleo.md) | `/empleo` | PersonalDataFields, maniobras, drag-drop CV | `candidatos_empleo` |
| [WhatsApp](features/whatsapp.md) | Widget | Flotante, config, assets | — |
| [Admin](features/admin.md) | `/admin` | Placeholder, roadmap v2 | — |

---

## 🗄️ Backend & Datos

| Documento | Descripción |
|-----------|-------------|
| [Supabase Schema](supabase.md) | Tablas, columnas, tipos, RLS policies, índices |
| [Validators](validators.md) | Reglas centralizadas en `src/lib/validators.js` |

---

## 🚀 Operaciones

| Documento | Descripción |
|-----------|-------------|
| [Deployment](deployment.md) | Vercel, env vars, build, preview, cache headers |
| [Performance](performance.md) | Bundle analysis, lazy loading, font loading, CSS optimizations |
| [Accessibility](accessibility.md) | Focus-visible, contrast AA/AAA, ARIA, keyboard nav, reduced motion |

---

## 📋 Desarrollo

| Documento | Descripción |
|-----------|-------------|
| [Development Workflow](development.md) | Git flow, commits convencionales, branches, code style, PR checklist |
| [Component Creation Guide](components/creation-guide.md) | Checklist nuevo componente, design tokens, iconos, testing |

---

## 📚 Documentos Legado / Referencia

| Documento | Estado |
|-----------|--------|
| [Product Brief](product-brief.md) | ✅ Completo — Visión, público, KPIs |
| [MVP Scope](mvp-scop.md) | ✅ Completo — Alcance "Conserje" |
| [Technical Spec](tecnical-sped.md) | ✅ Completo — Arquitectura, stack |
| [Design System v1](design-system.md) | 🔄 **Actualizar a v2** — Paleta antigua |

---

## 📝 Changelog

| Versión | Fecha | Cambios Principales |
|---------|-------|---------------------|
| 2.0.0 | 2026-09-30 | Rediseño industrial completo: tokens, componentes, landing, páginas internas, animaciones, docs completos |
| 1.0.0 | 2026-08-14 | MVP inicial: landing, cotizador, IPR, empleo, design system v1 |

---

## 🔍 Búsqueda Rápida

- **Tokens de color** → [Design System](design-system.md#1-tokens-de-color)
- **Crear un botón** → [Button API](components/button.md)
- **Agregar icono** → [Icon System](icons.md#crear-nuevo-icono)
- **Animar al scroll** → [ScrollReveal](animations.md#scrollrevealprovider)
- **Validar email** → [Validators](validators.md#email)
- **Deploy a Vercel** → [Deployment](deployment.md)
- **Git commit message** → [Development](development.md#commits-convencionales)

---

## 📞 Contacto / Soporte

- **Repo:** `github.com/fujitec-venezuela/web`
- **Issues:** GitHub Issues para bugs/features
- **Design decisions:** Ver [ADR](adr/) (si se crea)

---

> **Nota:** Esta documentación vive en el repo (`/docs`). Cualquier cambio en código que afecte APIs, tokens o componentes **debe** incluir actualización de docs en el mismo PR.