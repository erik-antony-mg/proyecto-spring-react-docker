import { useEffect, useState } from "react";
import { useGetData } from "../hook/useGetData";
import { Tabla } from "./Tabla";
import { Link } from "react-router-dom";
import { UpdateMamita } from "./updateMamita/UpdateMamita";
//para el doc
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export const ListMamitas = () => {
  const { contentPage, mamitas } = useGetData();
  const [abierto, setabierto] = useState(false);
  const [thcss, setthcss] = useState("px-6 py-3 text-lg");
  const [mamitaEncontrada, setMamitaEncontrada] = useState([]);
  const [mams, setMams] = useState([]);
  
  const doc = new jsPDF();
  const exportPdfHandler = () => {
    var finalY = doc.lastAutoTable.finalY || 10;
    var totalPagesExp = '{total_pages_count_string}';
  
    var title = 'LISTA DE MIEMBROS DE OLLA COMUN';
    var xOffset = (doc.internal.pageSize.width -15 ) - (doc.getStringUnitWidth(title) * doc.internal.getFontSize() / 2);
    doc.text(title, xOffset, finalY + 15);
  
    autoTable(doc, {
      startY: finalY + 20,
      head: [["Nombre y Apellido", "Celular", "Domicilio", "DNI", "FIRMA"]],
      body: mams.map((mamita) => [
        `${mamita.nombre} ${mamita.apellido}`,
        `${mamita.celular}`,
        `${mamita.domicilio}`,
        `${mamita.dni}`,
        "             ",
      ]),
      didDrawPage: function (data) {
        // Footer
        var str = 'Pagina ' + doc.internal.getNumberOfPages();
        if (typeof doc.putTotalPages === 'function') {
          str = str + ' de ' + totalPagesExp;
        }
        doc.setFontSize(10);
        var pageSize = doc.internal.pageSize;
        var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
        doc.text(str, data.settings.margin.left, pageHeight - 10);
      },
      margin: { top: 30 },
    });
  
    if (typeof doc.putTotalPages === 'function') {
      doc.putTotalPages(totalPagesExp);
    }
  
    doc.save("Lista-de-Mamitas.pdf");
  };
  

  useEffect(() => {
    setMams([...mamitas]);
  }, [mamitas]);
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-700 md:text-5xl lg:text-6xl text-center ">
        Listado de Mamitas
      </h1>
      <section className=" w-11/12 m-auto grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 ">
        <Link
          to="/crear-mamita"
          className="flex justify-center sm:justify-start"
        >
          <button className="text-xl font-bold  text-gray-400 uppercase bg-gray-700 p-2 rounded-lg my-2  hover:bg-gray-900">
            crear mamita
          </button>
        </Link>
        <div className="flex justify-center sm:justify-end">
          <button
            className="text-xl font-bold  text-gray-400 uppercase bg-gray-700 p-2 rounded-lg my-2  hover:bg-gray-900"
            onClick={exportPdfHandler}
          >
            Descargar PDF
          </button>
        </div>
      </section>
      <section className="relative overflow-x-auto shadow-md sm:rounded-lg w-11/12 m-auto">
        <table
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
          id="tabla-mamitas"
        >
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className={`${thcss} font-bold uppercase `}>
                Nombre y Apellido
              </th>
              <th scope="col" className={`${thcss} font-bold uppercase `}>
                celular
              </th>
              <th
                scope="col"
                className={`${thcss} font-bold uppercase hidden md:table-cell `}
              >
                Domicilio
              </th>
              <th
                scope="col"
                className={`${thcss} font-bold uppercase hidden md:table-cell `}
              >
                Dni
              </th>
              <th
                scope="col"
                className={`${thcss} font-bold uppercase hidden lg:table-cell `}
              >
                Ingreso
              </th>
              <th
                scope="col"
                className={`${thcss} font-bold uppercase hidden sm:table-cell `}
              >
                acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {mams.map((m) => {
              return (
                <Tabla
                  key={m.mamitaId}
                  mamita={m}
                  setisOpen={setabierto}
                  setMamitaEncontrada={setMamitaEncontrada}
                  setMams={setMams}
                />
              );
            })}
          </tbody>
        </table>
      </section>
      <UpdateMamita
        isOpen={abierto}
        setIsOpen={setabierto}
        mamitaEncontrada={mamitaEncontrada}
        setMams={setMams}
      />
    </>
  );
};
