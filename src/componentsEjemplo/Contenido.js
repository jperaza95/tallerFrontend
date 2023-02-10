import { useEffect, useState } from "react"
import Agregar from "./Agregar"
import Tarjetas from "./Tarjetas"


const Contenido = () => {
  //const [tareas, setTareas] = useState([]);  //useState([]) ese el valor inicial, vacio

  //pasa guardarTarea por props, "expone la funcion" al hijo
  return (
    <div className="contenido">
      <Agregar/>
      <Tarjetas/>

    </div>

)
}


export default Contenido


//const guardarTarea = textoTarea => {
  //   //logica de guardar una tarea
  //   console.log(textoTarea);

  //   let objTarea =  {
  //     "userId": 1,
  //     //"id": tareas[tareas.length-1].id + 1,
  //     "title": textoTarea,
  //     "completed": false
  //   }

  //   fetch('https://jsonplaceholder.typicode.com/todos', {
  //     method: 'POST',
  //     body: JSON.stringify(objTarea),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8'
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data)
  //       setTareas([...tareas,data]);
      
  //     });


  //   //texto recibido desde el elemento hijo "agregar"
  //   /*let objTarea =  {
  //     "userId": 1,
  //     "id": tareas[tareas.length-1].id + 1,
  //     "title": textoTarea,
  //     "completed": false
  //   }
  //   //nuestros states son inmutables
  //   //el nuevo state de tareas será: el state de tareas que ya tenía (spread), más el nuevo objeto tarea.
  //   setTareas([...tareas,objTarea]);
  //   */

    // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
  //     .then(response => response.json())
  //     .then(datos => {
  //       //console.log(datos)
  //       setTareas(datos);

  //     })
  // }, []);


        {/* <Agregar guardarTarea={guardarTarea} />
      {/* Contenido le va a pasar a Tarjetas todo el array, pasandole el state por props */}
      {/* Se redibuja el componente Tarjetas con el array actualizado }
      <Tarjetas tareas={tareas} /> */}