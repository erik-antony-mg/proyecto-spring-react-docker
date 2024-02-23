import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <>
      <header className="w-full h-20 bg-gray-800 p-2 flex  items-center">
        <img
          src="img/olla.webp"
          alt="logo de olla comun"
          className="h-14 w-14 rounded-full"
        />
        <nav className="p-2">
          <ul className="flex">
            <Link to="/">
              <Navbar valor="INICIO" />
            </Link>
            {/* <Navbar valor="CONTACTO" />
            <Navbar valor="PRUEBA" /> */}
          </ul>
        </nav>
      </header>
    </>
  );
};
