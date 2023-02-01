import { useEffect, useState, useRef } from "react";
import Persona from "./Persona";

const Lista = () => {
    const [personas, setPersonas] = useState([]);
    const campo = useRef(null);

    const BuscarPersonas = e => {
        useEffect(()=>{
            fetch("https://randomuser.me/api/?results="+campo.current.value)
            .then(r=>r.json())
            .then(data=>{
                //console.log(data.results);
                setPersonas(data.results);
            })
        },[]);

    }
  return (
    <div>
        <h1>Lista de usuarios</h1>
        <label>Cantidad: 
            <input type="number" ref={campo}/>

        </label>
        <input type="button" onClick={BuscarPersonas} value="Buscar"/>
        {personas.map(persona => <Persona key={persona.id.value}nombre = {persona.name.first} apellido = {persona.name.last}
        foto = {persona.picture.thumbnail}
        />)}
    </div>
  )
}

export default Lista