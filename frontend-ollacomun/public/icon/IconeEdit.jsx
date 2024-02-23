
const IconeEdit = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="h-8 w-8 "
    style={{ cursor: "pointer" }}
    onMouseOver={(e) => e.currentTarget.style.stroke = "#d69e2e"}
    onMouseOut={(e) => e.currentTarget.style.stroke = "currentColor"}
    {...props}
  > 
    <title>Boton Editar</title>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)
export default IconeEdit
