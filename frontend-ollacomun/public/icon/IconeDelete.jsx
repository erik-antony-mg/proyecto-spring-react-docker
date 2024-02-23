
const IconeDelete = (props) => (
  <svg
    fill="none"
    width={24}
    height={24}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="h-8 w-8"
    viewBox="0 0 24 24"
    style={{ cursor: "pointer" }}
    onMouseOver={(e) => e.currentTarget.style.stroke = "#C53030"}
    onMouseOut={(e) => e.currentTarget.style.stroke = "currentColor"}
    {...props}
  >
    <title>Boton Eliminar</title>
    <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM18 9l-6 6M12 9l6 6" />
  </svg>
)
export default IconeDelete