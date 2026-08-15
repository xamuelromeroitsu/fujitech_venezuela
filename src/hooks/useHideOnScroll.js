import { useEffect, useState } from 'react'

/**
 * useHideOnScroll — oculta/muestra el header según la dirección del scroll.
 *
 * Uso:
 *   const hidden = useHideOnScroll(80)
 *   // <header className={hidden ? 'navbar--hidden' : ''}>
 *
 * NOTAS TÉCNICAS (para futuros cambios):
 * - Devuelve `true` cuando el usuario baja (debe esconderse) y `false` al subir.
 * - `threshold` (80px por defecto): distancia del tope; mientras estés por encima,
 *   el header SIEMPRE se muestra (para no perder la navegación al inicio).
 * - Compara el `scrollY` actual con el anterior y usa un margen de ±8px para
 *   ignorar micro-movimientos y evitar parpadeos.
 * - El listener es `passive: true` (no bloquea el scroll) y se limpia en el unmount.
 * - Para el efecto visual el Navbar tiene `transition: transform 0.3s` y la clase
 *   `navbar--hidden` aplica `translateY(-100%)`.
 * - La ocultación es con CSS (transform), no toca el layout ni causa saltos.
 */
export default function useHideOnScroll(threshold = 80) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY

    function onScroll() {
      const y = window.scrollY
      const delta = y - lastY

      if (y < threshold) {
        setHidden(false)
      } else if (delta > 8) {
        setHidden(true)
      } else if (delta < -8) {
        setHidden(false)
      }

      lastY = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return hidden
}
