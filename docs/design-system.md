# 🎨 Sistema de Diseño — Paleta de Colores Oficial (Fujitec Venezuela)

> **Estado: APROBADO** — Esta es la paleta definitiva. Todo el código (CSS/Tailwind) debe usar exclusivamente estos tokens. No se agregan colores nuevos sin aprobación y actualización de este documento.

---

## 1. Tokens de Color (fuente única de verdad)

| Token | Hex | Uso Recomendado | Contraste sobre blanco |
| :--- | :--- | :--- | :--- |
| `--color-primary` | `#D01126` | Navbar, botones principales, CTA | 5.2:1 (AA ✓) |
| `--color-primary-dark` | `#A40E1F` | Hover / Pressed, enlaces activos | 8.0:1 (AAA ✓) |
| `--color-primary-tint` | `#FBEDEF` | Badges suaves, fondos de sección | — |
| `--color-text` | `#1F2430` | Títulos, textos base | 12.9:1 (AAA ✓) |
| `--color-text-secondary` | `#5B6472` | Subtítulos, metadatos | 4.6:1 (AA ✓) |
| `--color-border` | `#E2E5EA` | Divisores de tabla, inputs | — |
| `--color-surface` | `#FFFFFF` | Base de tarjetas y modales | — |
| `--color-surface-alt` | `#F6F7F9` | Filas intercaladas, footer suave | — |
| `--color-footer` | `#434343` | Footer oscuro estilo Fujitec | — |

### Semánticos (Estados / Módulo de Notas y Semáforo IPR)

| Token | Hex | Significado / Uso |
| :--- | :--- | :--- |
| `--color-success` | `#16A34A` | Nota Excelente / Aprobada · Semáforo IPR 🟢 |
| `--color-warning` | `#D97706` | Nota Regular / Atención · IPR <90 días 🟡 (con texto oscuro) |
| `--color-danger` | `#DC2626` | Nota Reprobada / Error de validación · IPR vencido 🔴 |

---

## 2. Reglas de Aplicación (obligatorias)

1. **Un solo color de acento.** Rojo Fujitec es el único color de marca. Neutros no cuentan como acento.
2. **`#D97706` (ámbar) NO se usa sobre blanco para texto** — solo como fondo con texto `#1F2430` encima.
3. **Rojo primario solo sobre blanco/negro** para mantener contraste AA. Nunca rojo sobre `#FBEDEF` para texto.
4. **El footer usa `#434343`** como fondo; el texto va en blanco (`#FFFFFF`) con títulos en `#FBEDEF`-tint si aplica. No usar `#1F2430` sobre `#434343`.
5. **Hover/pressed de CTA:** siempre `--color-primary-dark`.
6. **Estados semánticos** son exclusivos de feedback (notas, IPR, validaciones). No usar verde/ámbar para decoración.

---

## 3. Mapeo a Implementación

### CSS Custom Properties (global)
```css
:root {
  --color-primary: #D01126;
  --color-primary-dark: #A40E1F;
  --color-primary-tint: #FBEDEF;
  --color-text: #1F2430;
  --color-text-secondary: #5B6472;
  --color-border: #E2E5EA;
  --color-surface: #FFFFFF;
  --color-surface-alt: #F6F7F9;
  --color-footer: #434343;
  --color-success: #16A34A;
  --color-warning: #D97706;
  --color-danger: #DC2626;
}
```

### Tailwind (si se adopta)
```js
colors: {
  primary: { DEFAULT: '#D01126', dark: '#A40E1F', tint: '#FBEDEF' },
  ink: { DEFAULT: '#1F2430', secondary: '#5B6472' },
  line: '#E2E5EA',
  surface: { DEFAULT: '#FFFFFF', alt: '#F6F7F9' },
  footer: '#434343',
  success: '#16A34A',
  warning: '#D97706',
  danger: '#DC2626',
}
```

---

## 4. Historia / Cambios

| Fecha | Cambio | Aprobado por |
| :--- | :--- | :--- |
| 2026-08-14 | Aprobación inicial: tokens de identidad, neutros y semánticos. Rojo de marca consolidado de los assets (`#D01126`). Añadido `--color-footer` `#434343`. | — |
