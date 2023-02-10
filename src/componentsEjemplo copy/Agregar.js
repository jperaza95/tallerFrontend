import { useRef } from "react"

//recibe la funcion guardarTarea del padre por props
const Agregar = ({guardarTarea}) => {
  const campo = useRef(null);
  const tomarTarea = e => {
      //console.log((campo.current.value));
      guardarTarea(campo.current.value);
      // le devuelve al componente padre el texto del campo
  }
  return (
    <div className="agregar">
        <label htmlFor="txtAgregar">Agregar:</label>
        <input type="text" name="txtAgregar" id="txtAgregar" ref={campo}/>
        <input type="button" value="Agregar" onClick={tomarTarea}/>
      </div>
  )
}

export default Agregar