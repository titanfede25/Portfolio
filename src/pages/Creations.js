import { Link } from "react-router-dom";
import Creaciones from "../Creations.json";

export default function Creations() {
  return (
    <div>
      <div className="TituloLista">
      Federico Sznajderhaus - Mis creaciones 
      </div>
      {Creaciones.list.map((creacion) => (
          <div ><Link to={`/Creation/${creacion.name}`}>
          <div className="Listita">
            <div className="NombreLista">{creacion.name}</div>
          </div>
          <img src={creacion.image} className="image"/></Link>
          </div>
        ))}
    </div>
  );
}