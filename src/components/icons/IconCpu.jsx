export default function IconCpu({ size = 24, strokeWidth = 1.5, ...props }) {
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
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M9 1v2" />
      <path d="M15 1v2" />
      <path d="M9 21v2" />
      <path d="M15 21v2" />
      <path d="M1 9h2" />
      <path d="M1 15h2" />
      <path d="M21 9h2" />
      <path d="M21 15h2" />
    </svg>
  )
}