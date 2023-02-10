import Tarjeta from "./Tarjeta";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { guardarTareas } from "../features/tareasSlice";

const Tarjetas = () => {
  const dispatch = useDispatch();
  
  const tareas = useSelector(state=>state.tareas.tareas); 

  useEffect(() => {     
      //traemos las tareas
      fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
        .then(response => response.json())
        .then(datos => {
          //console.log(datos);
          dispatch(guardarTareas(datos)); // pasamos por parametro "payload" los datos al reducer
        })
    }, []);


    //mostramos las tareas

  return (
    <div className="tarjetas">
     
      { tareas.map(t=><Tarjeta key={t.id} {...t}/>) }

    </div>
  )
}

export default Tarjetas

//asignar key unica a cada elemento
//{...t} spread: pasamos por props a tarjeta el objeto tarea