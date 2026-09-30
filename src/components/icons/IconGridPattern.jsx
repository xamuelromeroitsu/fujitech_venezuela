export default function IconGridPattern({ width = 100, height = 100, spacing = 20, dotSize = 1.5, color = 'currentColor', opacity = 0.08, ...props }) {
  const cols = Math.ceil(width / spacing)
  const rows = Math.ceil(height / spacing)
  
  const dots = []
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      dots.push(
        <circle
          key={`${x}-${y}`}
          cx={x * spacing}
          cy={y * spacing}
          r={dotSize}
          fill={color}
          opacity={opacity}
        />
      )
    }
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      aria-hidden="true"
      {...props}
    >
      {dots}
    </svg>
  )
}