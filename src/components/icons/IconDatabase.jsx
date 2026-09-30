export default function IconDatabase({ size = 24, strokeWidth = 1.5, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {/* Servidor / base de datos compacto */}
      <rect x="3" y="5" width="18" height="14" rx="2" ry="1" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="13" x2="21" y2="13" />
      <line x1="9" y1="5" x2="9" y2="19" />
      <line x1="15" y1="5" x2="15" y2="19" />
    </svg>
  )
}