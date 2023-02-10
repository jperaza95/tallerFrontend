const Tarjeta = ({title,completed,id}) => {
  return (
    <div className="tarjeta">
     <input type="checkbox" className="checkbox" id={`list${id}`}/>
    <label className="checkLabel" htmlFor={`list${id}`}>{title}</label>  
    </div>

  )
}

export default Tarjeta
