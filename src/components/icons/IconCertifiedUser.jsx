export default function IconCertifiedUser({ size = 24, strokeWidth = 1.5, ...props }) {
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
      {/* Diploma enrollado (rollo) */}
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8L14 2z" />
      <path d="M14 2v8h8" />
      {/* Checkmark de certificación */}
      <path d="M9 11l3 3 5-5" />
    </svg>
  )
}