import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function Creations() {
    const [favoritos, setFavoritos] = useState([]);
    
    useEffect(() => {
        let favoritos = localStorage.getItem('favoritos')
        if (favoritos) {
            setFavoritos(JSON.parse(favoritos))
        }
    }, []);

    const bye = (name) => {
        const newFavoritos = favoritos.filter(favorito => favorito.name !== name);
        setFavoritos(newFavoritos);
        localStorage.setItem('favoritos', JSON.stringify(newFavoritos));
      };

  return (
    <div><br></br><br></br><br></br><br></br>
      <div className="TituloLista">
      Favoritos 
      </div>
      {favoritos.map((favorito) => (
          <div>
            <Link to={`/Creation/${favorito.name}`}>
              <div className="Listita">
                <div className="NombreLista">{favorito.name}</div>
              </div>
              <img src={favorito.image} className="image"/>
            </Link>
            <button onClick={() => bye(favorito.name)} className="NombreLista">
              <Link to="/">Eliminar</Link>
            </button>
          </div>
        ))}
    <br></br><br></br><br></br><br></br></div>
  );
}
