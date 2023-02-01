import { useState, useEffect } from "react";

const Contacto = () => {
    const [contador,setContador] = useState(0);
    const [contador2, setContador2] = useState(0)

    /*useEffect(() => {
      document.title = "Cuenta " + contador;
    });*/ // Comportamiento natural del effect. Se va a ejecutar cada vez que el componente se actualice


    useEffect(() => {
        document.title = "Cuenta " + contador;
    },[]); // Solamente se va a ejecutar cuando se carga el componente
  
    useEffect(() => {
        document.title = "Cuenta dos" + contador2;

    },[contador2]); // Solo se ejecuta el efecto si hay cambios en el state de contador
    
    const contar = ()=>{
        console.log("click");
        setContador(contador+1);
    }
    
  return (
    <div>
        <input type = "button" value="Presionar" onClick={contar}/>
        <h2>{contador}</h2>
        <input type="button" value="Presionar 2" onClick={()=>{
         setContador2(40);   
        //console.log("Click 2");
    }}/>
    </div>
  )
}

export default Contacto