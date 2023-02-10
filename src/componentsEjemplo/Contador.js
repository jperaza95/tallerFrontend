import { useSelector } from "react-redux"; //Hook de redux para traer datos desde el store

const Contador = () => {
    const contador = useSelector(state => state.contador.cuenta) //recibe una funcion como parametro. se inyecta todo el store de la aplicacion.
    //Se devuelve, de todo el store, que es lo que queremos asignar a la variable contador para ser mostrado en este componente
    //No solo va a consultar al store, sino que tambien esta atento a cambios en el state de cuenta para redibujarse 
  return (
    <div>
        <h1>{contador}</h1>
    </div>
  )
}

export default Contador