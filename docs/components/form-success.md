# FormSuccess — Pantalla de Éxito de Formulario

> **Archivo:** `src/components/form/FormSuccess.jsx` + `FormSuccess.css`  
> **Design System:** v2 Industrial  
> **Versión:** 2.0

---

## Descripción
Pantalla de éxito compartida para todos los formularios (cotizador, IPR, empleo). Reemplaza el emoji ✓ por **SVG IconShieldCheck** industrial.

---

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `nombre` | `string` | **requerido** | Nombre del usuario (se muestra en mensaje) |
| `titulo` | `string` | **requerido** | Título del éxito (ej: "Solicitud recibida") |
| `mensaje` | `string` | **requerido** | Mensaje personalizado después del nombre |
| `textoBoton` | `string` | `'Nueva solicitud'` | Texto del botón de reset |
| `onReset` | `function` | **requerido** | Handler al clickear botón (resetea formulario) |

---

## Estructura Visual

```
[Icon ShieldCheck - 48px, --color-success]
    │
[Title - H3, font-display, clamp(1.5rem, 3vw, 2rem)]
    │
[Message - "Gracias, {nombre}. {mensaje}"]
    │
[Button variant="outline" min-width 200px]
    │
    └── onClick → onReset()
```

---

## Props Detail

| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| `nombre` | `string` | **Sí** | Nombre del usuario para personalizar mensaje |
| `titulo` | `string` | **Sí** | Título del éxito |
| `mensaje` | `string` | **Sí** | Mensaje después de "Gracias, {nombre}. " |
| `textoBoton` | `string` | No (`'Nueva solicitud'`) | Texto del botón de reset |
| `onReset` | `function` | **Sí** | Handler click → resetea formulario |

---

## Ejemplos

### Cotizador
```jsx
<FormSuccess
  nombre={values.nombre}
  titulo="Solicitud recibida"
  mensaje="Un asesor Fujitec te contactará en menos de 24 horas hábiles."
  textoBoton="Nueva solicitud"
  onReset={() => { setEnviado(false); setPaso(0) }}
/>
```

### Empleo
```jsx
<FormSuccess
  nombre={values.nombre}
  titulo="Postulación recibida"
  mensaje="Tu CV quedó en nuestro banco de talento."
  textoBoton="Nueva postulación"
  onReset={() => { setEnviado(false) }}
/>
```

### IPR
```jsx
<FormSuccess
  nombre={values.nombre}
  titulo="Consulta enviada"
  mensaje="Recibirás el resultado del Semáforo IPR por email."
  textoBoton="Nueva consulta"
  onReset={() => { setEnviado(false) }}
/>
```

---

## Estilos (CSS)

```css
.form-success {
  max-width: 480px;
  margin-inline: auto;
  text-align: center;
  padding: var(--space-8) var(--space-6);
}

.form-success__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--color-primary-tint);
  color: var(--color-success);
  margin-bottom: var(--space-5);
}

.form-success__title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--color-ink);
  margin-bottom: var(--space-3);
  letter-spacing: -0.02em;
}

.form-success__message {
  color: var(--color-ink-muted);
  font-size: 1.0625rem;
  line-height: 1.6;
  margin-bottom: var(--space-6);
}

.form-success button {
  min-width: 200px;
}
```

---

## Icono Utilizado

```jsx
<IconShieldCheck size={48} strokeWidth={2} color="var(--color-success)" />
```

- **Tamaño:** 48px (`--icon-xl`)
- **Stroke:** 2px (más grueso para visibilidad)
- **Color:** `--color-success` (`#16a34a`)
- **Container:** 80px círculo, `--color-primary-tint` bg

---

## Accesibilidad
- `role="status"` en wrapper — anuncia a screen readers
- Contraste AA en todos los textos
- Focus-visible en botón
- Texto descriptivo, no solo icono

---

## CSS Classes Generadas

```css
.form-success                   /* Wrapper */
.form-success__icon             /* Icon container (círculo) */
.form-success__title            /* H3 title */
.form-success__message          /* Message text */
.form-success button            /* Button (variant outline) */
```

---

## Archivos Relacionados

| Archivo | Ruta |
|---------|------|
| Componente | `src/components/form/FormSuccess.jsx` |
| Estilos | `src/components/form/FormSuccess.css` |
| Icono | `src/components/icons/IconShieldCheck.jsx` |
| Design System | [design-system.md](../design-system.md) |
| Uso en Cotizador | [features/cotizador.md](../features/cotizador.md) |
| Uso en Empleo | [features/empleo.md](../features/empleo.md) |