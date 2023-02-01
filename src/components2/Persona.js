const Persona = (nombre,apellido,foto) => {
  return (
    <div>

        <img src={foto} alt={`Foto de ${nombre} ${apellido}`}/> {nombre} {apellido}
    </div> 
    
  )
}


export default Persona