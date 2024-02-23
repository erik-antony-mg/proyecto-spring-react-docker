
const SvgComponent = (props) => (
  <svg
    fill="none"
    width={24}
    height={24}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="h-8 w-8 text-red-500"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
    <path d="m9 9 6 6M15 9l-6 6" />
  </svg>
)
export default SvgComponent