import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="TituloLista">
      Listado de Personas 
      </div>
      Federico Sznajderhaus & Leonel Merino
      {/*Personas.map((persona) => (
        <div className="Listita">
        <div key={persona.id}>
          <Link to={`/Persona/${persona.id}`}><div className="NombreLista">{persona.nombre} {persona.apellido}</div></Link> 
        </div>
        </div>
      ))*/}
    </div>
  );
}