import { incrementar,resetear } from "../features/contadorSlice"; // Importo la accion
import { useDispatch } from "react-redux"; //los disparos de las acciones en react-redux, lo hacemos desde este hook


const Boton = () => {
    const dispatch = useDispatch(); // devuelve un puntero a la funcion que dispara los eventos

    const aumentarCuenta = e =>{
        console.log("CLICK");
        dispatch(incrementar());
    }

    const resetearCuenta = e =>{
        dispatch(resetear());
    }
  return (
    <div>
        <input type="button" value="Incrementar" onClick={aumentarCuenta}/><br/>
        <input type="button" value="Resetear" onClick={resetearCuenta}/><br/>

    </div>
  )
}

export default Boton