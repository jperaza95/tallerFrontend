import { useRef } from "react"


const Agregar = () => {
  const campo = useRef(null);
  const tomarTarea = e => {

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