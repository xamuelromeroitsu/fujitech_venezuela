import './Input.css'

export default function Input({
  label,
  name,
  type = 'text',
  error,
  hint,
  required,
  className = '',
  onKeyDown,
  ...props
}) {
  const id = `field-${name}`

  function handleKeyDown(e) {
    if (e.key.length > 1) {
      if (onKeyDown) onKeyDown(e)
      return
    }
    if (e.ctrlKey || e.metaKey) {
      if (onKeyDown) onKeyDown(e)
      return
    }
    if (props.inputMode === 'numeric' || type === 'tel') {
      if (!/[\d+\s-]/.test(e.key)) {
        e.preventDefault()
        return
      }
    }
    if (props.pattern === '[^\d]*') {
      if (/\d/.test(e.key)) {
        e.preventDefault()
        return
      }
    }
    if (onKeyDown) onKeyDown(e)
  }

  return (
    <div className={`field ${className}`}>
      {label && (
        <label className="field__label" htmlFor={id}>
          {label}
          {required && <span className="field__required" aria-hidden="true"> *</span>}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea id={id} name={name} className={`field__control ${error ? 'field__control--error' : ''}`} onKeyDown={handleKeyDown} {...props} />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          className={`field__control ${error ? 'field__control--error' : ''}`}
          onKeyDown={handleKeyDown}
          {...props}
        />
      )}
      {error ? (
        <p className="field__error" role="alert">{error}</p>
      ) : hint ? (
        <p className="field__hint">{hint}</p>
      ) : null}
    </div>
  )
}