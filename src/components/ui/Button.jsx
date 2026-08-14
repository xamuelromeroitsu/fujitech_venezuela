import './Button.css'

const VARIANTS = {
  primary: 'btn--primary',
  secondary: 'btn--secondary',
  ghost: 'btn--ghost',
  whatsapp: 'btn--whatsapp',
}

const SIZES = {
  sm: 'btn--sm',
  md: 'btn--md',
  lg: 'btn--lg',
}

export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  return (
    <Tag className={`btn ${VARIANTS[variant] || ''} ${SIZES[size] || ''} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
