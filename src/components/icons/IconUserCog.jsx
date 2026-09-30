export default function IconUserCog({ size = 24, strokeWidth = 1.5, ...props }) {
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
      {/* Usuario simple */}
      <circle cx="12" cy="8" r="4" />
      <path d="M12 12v4" />
      <path d="M8 16h8" />
      <path d="M8 16l-2 4h12l-2-4" />
      {/* Engranaje pequeño a la derecha */}
      <circle cx="18.5" cy="7.5" r="2.5" />
      <path d="M18.5 5v2.5" />
      <path d="M18.5 12.5v2.5" />
      <path d="M16 7.5h2.5" />
      <path d="M21 7.5h2.5" />
      <path d="M17.2 6.3l1.2-1.2" />
      <path d="M20 9.8l1.2-1.2" />
      <path d="M17.2 8.7l1.2 1.2" />
      <path d="M20 5.2l1.2 1.2" />
    </svg>
  )
}