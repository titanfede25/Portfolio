import { Link } from "react-router-dom";
import Creaciones from "../Creations.json";

export default function Creations() {
  return (
    <div>
      <div className="TituloLista">
      Federico Sznajderhaus - Mis creaciones 
      </div>
      {Creaciones.list.map((creacion) => (
          <div >
          <div className="Listita">
            {/*<Link to={}>*/}<div className="NombreLista">{creacion.name}</div>{/*</Link>*/} 
            
          </div>
          <img src={creacion.image} className="image"/>
          </div>
        ))}
    </div>
  );
}