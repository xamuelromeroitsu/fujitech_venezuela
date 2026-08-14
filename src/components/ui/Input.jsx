import './Input.css'

export default function Input({
  label,
  name,
  type = 'text',
  error,
  hint,
  required,
  className = '',
  ...props
}) {
  const id = `field-${name}`
  return (
    <div className={`field ${className}`}>
      {label && (
        <label className="field__label" htmlFor={id}>
          {label}
          {required && <span className="field__required" aria-hidden="true"> *</span>}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea id={id} name={name} className={`field__control ${error ? 'field__control--error' : ''}`} {...props} />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          className={`field__control ${error ? 'field__control--error' : ''}`}
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
