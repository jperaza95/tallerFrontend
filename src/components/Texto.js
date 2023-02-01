import { useState,useRef } from 'react';

const Texto = () => {
    const [nombre, setnombre] = useState("");
    const campo = useRef(null);

    const actualizar = evt =>  {
        console.log(evt.target.value);
       // setnombre(evt.target.value);
    }

    const guardar = e =>{
        console.log("CLICK");
        setnombre(campo.current.value);
        
    }
  return (
    <div>
    {/* <label htmlFor="txtNombre">Nombre: </label>
    <input type="text" id="txtNombre"/>  */}
    <label>Nombre: 
        <input type="text" ref={campo} onChange={actualizar}/> 
    </label>
    <input type="button" value="guardar" onClick={guardar}/> 
    <h3>{nombre}</h3>
    </div>
  )
}

export default Texto

//useId