import { Link } from "react-router-dom";
import Creaciones from "../Creations.json";

export default function Home() {
  return (
    <div>
      <div className="TituloLista">
      Federico Sznajderhaus - Mis Destacados 
      </div>

        <div >
        <div className="Listita">
          {/*<Link to={}>*/}<div className="NombreLista">{Creaciones.list[0].name}</div>{/*</Link>*/} 
          
        </div>
        <img src={Creaciones.list[0].image} className="image"/>
        </div>

        <div >
        <div className="Listita">
          {/*<Link to={}>*/}<div className="NombreLista">{Creaciones.list[1].name}</div>{/*</Link>*/} 
        </div>
        <img src={Creaciones.list[1].image} className="image"/>
        </div>

        <div >
        <div className="Listita">
          {/*<Link to={}>*/}<div className="NombreLista">{Creaciones.list[7].name}</div>{/*</Link>*/} 
        </div>
        <img src={Creaciones.list[7].image} className="image"/>
        </div>

        <div >
        <div className="Listita">
          {/*<Link to={}>*/}<div className="NombreLista">{Creaciones.list[4].name}</div>{/*</Link>*/} 
        </div>
        <img src={Creaciones.list[4].image} className="image"/>
        </div>

        <div >
        <div className="Listita">
          {/*<Link to={}>*/}<div className="NombreLista">{Creaciones.list[5].name}</div>{/*</Link>*/} 
        </div>
        <img src={Creaciones.list[5].image} className="image"/>
        </div>

        <div >
        <div className="Listita">
          {/*<Link to={}>*/}<div className="NombreLista">{Creaciones.list[6].name}</div>{/*</Link>*/} 
        </div>
        <img src={Creaciones.list[6].image} className="image"/>
        </div>







    </div>
  );
}