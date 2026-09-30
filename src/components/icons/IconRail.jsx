export default function IconRail({ length = 100, thickness = 1, color = 'currentColor', ...props }) {
  return (
    <svg
      width={length}
      height={thickness}
      viewBox={`0 0 ${length} ${thickness}`}
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <line x1="0" y1={thickness / 2} x2={length} y2={thickness / 2} stroke={color} strokeWidth={thickness} />
    </svg>
  )
}