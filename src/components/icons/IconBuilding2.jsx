export default function IconBuilding2({ size = 24, strokeWidth = 1.5, ...props }) {
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
      <path d="M2 20h20" />
      <path d="M4 20V8l6 4V8l6 4V5" />
      <path d="M16 5h4v15" />
    </svg>
  )
}