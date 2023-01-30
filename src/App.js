//import logo from './logo.svg';
import './App.css';
import Information from './components/Information';
import Persona from './components/Persona';

let App = () => {
  let nombre = "Santiago";
  let nombres = ["Martin", "Manuel", "Sebastian"]; 
  //let nombres = [<p>Martin</p>, <p>Manuel</p>, <p>Sebastian</p>]; 
  let personas = [
    {id:22,nombre:"Felipe", edad:22},
    {id:28,nombre:"Francisco", edad:26},
    {id:39,nombre:"Joshua", edad:23},
  ]


  return (
    <div className="App">
      <h1>Titulo</h1>
      <h2>{nombre}</h2>
      <Information dato = "Mathias" otro = "Tabarez"/>
      <Information dato = "Andres" otro = "Mignone"/>
      <Information dato = "Julio" otro = "Peraza"/>
      <hr/>
      {/* {nombres.map(nom=><p>{nom}</p>)} */}
      {/* {nombres.map((nom,i) => <Persona key={i} nombre = {nom}/>)} */}
      {/* {personas.map(objPersona => <Persona key={objPersona.id} nombre = {objPersona.nombre} edad={objPersona.edad}/>)} */}
      {personas.map(objPersona => <Persona key={objPersona.id} {...objPersona}/>)}  

    </div>

  );
}

export default App;

//JSX
//class -> className
//for -> htmlFor

//npm install 
//npm start
//npm run build -> version para produccion