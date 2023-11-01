import { Link } from "react-router-dom";
import Creaciones from "../Creations.json";

export default function Home() {
  console.log(localStorage.getItem('favoritos'))
  return (
    <div>
      <div className="TituloLista">
      Federico Sznajderhaus - Mis Destacados 
      </div>

        <div ><Link to={`/Creation/${Creaciones.list[0].name}`}>
        <div className="Listita">
          <div className="NombreLista">{Creaciones.list[0].name}</div>
        </div>
        <img src={Creaciones.list[0].image} className="image"/></Link>
        </div>

        <div ><Link to={`/Creation/${Creaciones.list[1].name}`}>
        <div className="Listita">
          <div className="NombreLista">{Creaciones.list[1].name}</div>
        </div>
        <img src={Creaciones.list[1].image} className="image"/></Link>
        </div>

        <div ><Link to={`/Creation/${Creaciones.list[7].name}`}>
        <div className="Listita">
          <div className="NombreLista">{Creaciones.list[7].name}</div>
        </div>
        <img src={Creaciones.list[7].image} className="image"/></Link>
        </div>

        <div ><Link to={`/Creation/${Creaciones.list[4].name}`}>
        <div className="Listita">
          <div className="NombreLista">{Creaciones.list[4].name}</div>
        </div>
        <img src={Creaciones.list[4].image} className="image"/></Link>
        </div>

        <div ><Link to={`/Creation/${Creaciones.list[5].name}`}>
        <div className="Listita">
          <div className="NombreLista">{Creaciones.list[5].name}</div>
        </div>
        <img src={Creaciones.list[5].image} className="image"/></Link>
        </div>

        <div ><Link to={`/Creation/${Creaciones.list[6].name}`}>
        <div className="Listita">
          <div className="NombreLista">{Creaciones.list[6].name}</div>
        </div>
        <img src={Creaciones.list[6].image} className="image"/></Link>
        </div>
    </div>
  );
}