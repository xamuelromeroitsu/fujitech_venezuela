import './ChipGroup.css'

/**
 * ChipGroup — Selección de opciones por chips (selección simple o múltiple).
 *
 * Props:
 *   label    — Título del grupo (ej: "Tipo de inmueble")
 *   options  — Array de strings con las opciones
 *   value    — Valor seleccionado (string simple) o array (multi)
 *   onChange — Función que recibe el valor seleccionado
 *   multi    — Si true, permite selección múltiple (toggle)
 *   error    — Mensaje de error (opcional)
 */
export default function ChipGroup({ label, options, value, onChange, multi = false, error }) {
  function handleClick(opt) {
    if (multi) {
      const isActive = value.includes(opt)
      onChange(isActive ? value.filter((x) => x !== opt) : [...value, opt])
    } else {
      onChange(opt)
    }
  }

  function isActive(opt) {
    return multi ? value.includes(opt) : value === opt
  }

  return (
    <div className="field">
      <span className="field__label">{label}</span>
      <div className="chip-group">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            className={`chip-group__chip ${isActive(opt) ? 'chip-group__chip--active' : ''}`}
            onClick={() => handleClick(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
      {error && <p className="field__error" role="alert">{error}</p>}
    </div>
  )
}
