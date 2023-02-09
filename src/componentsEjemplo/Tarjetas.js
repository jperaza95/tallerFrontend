import Tarjeta from "./Tarjeta"

const Tarjetas = ({tareas}) => {
  return (
    <div className="tarjetas">
      
      {tareas.map(t=><Tarjeta key={t.id} {...t}/>)}

    </div>
  )
}

export default Tarjetas

//asignar key unica a cada elemento
//{...t} spread: pasamos por props a tarjeta el objeto tarea