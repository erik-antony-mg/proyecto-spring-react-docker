import { useEffect, useState } from "react";
import IconeClose from "../../../public/icon/IconeClose";
import { useGetData } from "../../hook/useGetData";


export const UpdateMamita = ({ isOpen, setIsOpen, mamitaEncontrada,setMams }) => {
  const inicialState={
    nombre:"",
    apellido: "",
    domicilio: "",
    celular:"",
    dni:"",
    numHijos:0
}
  const [datos, setdatos] = useState([inicialState]);
  const {updateMamita,getDataContentPage} = useGetData();

  const enviarDatos = (e) => {
    updateMamita(datos.mamitaId,datos).then(()=>{
      getDataContentPage()
      .then(resp=>{
        setMams(resp);
        setIsOpen(false);
      })
      
    })
  }
  

  useEffect(() => {
    setdatos(mamitaEncontrada);
  }, [mamitaEncontrada]);
 
  return (
    <>
      {isOpen && (
        <section className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Actualizar Mamita
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent  rounded-lg text-sm w-10 h-10 ms-auto inline-flex justify-center items-center hover:bg-gray-900"
                  data-modal-toggle="crud-modal"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <span>
                    <IconeClose />
                  </span>
                </button>
              </div>
              <form  className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Nombres
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                      value={datos.nombre}
                      onChange={(e) =>
                        setdatos({ ...datos, nombre: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                      value={datos.apellido}
                      onChange={(e) =>
                        setdatos({ ...datos, apellido: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      DNI
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                      pattern="^\d{8}$"
                      title="El DNI tiene 8 dígitos."
                      value={datos.dni}
                      onChange={(e) =>
                        setdatos({ ...datos, dni: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Celular
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                      pattern="^\d{9}$"
                      title="El celular tiene 9 dígitos."
                      value={datos.celular}
                      onChange={(e) =>
                        setdatos({ ...datos, celular: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Numero de hijos
                    </label>
                    <input
                      type="number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={datos.numHijos == null ? "" : datos.numHijos}
                      onChange={(e) => {
                        const numHijos = parseInt(e.target.value);
                        setdatos({ ...datos, numHijos: isNaN(numHijos) ? "" : numHijos });
                      }}
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Descripcion
                    </label>
                    <textarea
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={datos.domicilio}
                      onChange={(e) =>
                        setdatos({ ...datos, domicilio: e.target.value })
                      }
                    ></textarea>
                  </div>
                </div>
                <button className=" text-white inline-flex items-center bg-gray-800  hover:bg-gray-50 hover:text-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={enviarDatos}
                >
                  Actualizar
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
