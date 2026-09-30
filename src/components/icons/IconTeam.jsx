export default function IconTeam({ size = 24, strokeWidth = 1.5, ...props }) {
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
      {/* Usuario central */}
      <circle cx="12" cy="8" r="3.5" />
      <path d="M12 11.5v5" />
      <path d="M7 16.5h10" />
      {/* Usuario izquierda */}
      <circle cx="5.5" cy="8" r="3.5" />
      <path d="M5.5 11.5v5" />
      <path d="M2 16.5h7" />
      {/* Usuario derecha */}
      <circle cx="18.5" cy="8" r="3.5" />
      <path d="M18.5 11.5v5" />
      <path d="M15 16.5h7" />
      {/* Líneas de conexión entre usuarios */}
      <path d="M9 8h6" />
      <path d="M9 8h-3.5" />
      <path d="M15 8h6" />
    </svg>
  )
}