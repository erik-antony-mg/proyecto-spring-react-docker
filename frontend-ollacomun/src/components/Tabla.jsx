import { useState } from "react";
import IconeEdit from "/public/icon/IconeEdit.jsx";
import IconeDelete from "../../public/icon/IconeDelete";
import { useGetData } from "../hook/useGetData";
import { format } from "date-fns";

export const Tabla = ({ mamita, setisOpen, setMamitaEncontrada, setMams }) => {
  const [cssTd, setcssTd] = useState(
    "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
  );

  const { getMamitaId, deleteMamita, getDataContentPage } = useGetData();

  const eventoClick = async () => {
    const data = await getMamitaId(mamita.mamitaId);
    setisOpen(true);
    setMamitaEncontrada(data);
  };
  const eliminar = () => {
    deleteMamita(mamita.mamitaId).then(() => {
      getDataContentPage().then((resp) => setMams(resp));
    });
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className={`${cssTd}`}>
        {mamita.nombre} {mamita.apellido}
      </td>
      <td className={`${cssTd}`}>{mamita.celular}</td>
      <td className={`hidden ${cssTd} md:table-cell`}>{mamita.domicilio}</td>
      <td className={`hidden ${cssTd} md:table-cell `}>{mamita.dni}</td>
      <td className={`hidden ${cssTd} lg:table-cell `}>
        {format(new Date(mamita.fechaIngreso), "dd-MM-yyyy")}
      </td>
      <td className={`${cssTd} hidden  sm:table-cell`}>
        <div className="flex gap-2 items-center">
          <span onClick={eventoClick}>
            <IconeEdit className="text-yellow-400" />
          </span>
          <span onClick={eliminar}>
            <IconeDelete className="text-red-500" />
          </span>
        </div>
      </td>
    </tr>
  );
};
