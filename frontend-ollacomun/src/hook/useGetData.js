import axios from "axios";
import { useEffect, useState } from "react";

export const useGetData = () => {

    const URL = "http://localhost:9095/api/v1/mamitas";
    const [contentPage, setContentPage] = useState([]);
    const [mamitas, setmamitas] = useState([])

    const getDataContentPage = async() => {
        try {
            const response = await axios.get(`${URL}/list`);
            setContentPage(response.data);
            setmamitas(response.data.content);
            return(response.data.content)
          } catch (error) {
            console.error('Error al obtener los datos:', error);
          }
    }

    const createMamita = async (cuerpo) => {
        try{
            await axios.post(`${URL}/create`,cuerpo);
        }
        catch(error){
            console.error("error al crear una mamita :",error);
        }
    }
    const getMamitaId = async(id) => {
        try {
            const response=await axios.get(`${URL}/${id}`);
            return response.data
        } catch (error) {
            console.error('Error al obtener una mamita:', error);
        }
    }
    //actualizar
    const updateMamita = async (id , cuerpo) => {
        try {
            await axios.put( `${URL}/update/${id}`,cuerpo );
        } catch (error) {
            console.error("Error al actualizar una mamita",error);
        }
    }
    const deleteMamita=async (id)=>{
        try {
            await  axios.delete(`${URL}/delete/${id}`);
        } catch (error) {
            console.error("error al eliminar una mamita",error);
        }
    }
    useEffect(() => {
        getDataContentPage();
    }, [URL])


  return ({contentPage,mamitas,getMamitaId,createMamita,updateMamita,deleteMamita,getDataContentPage})
}

