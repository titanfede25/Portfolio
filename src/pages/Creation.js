import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Creaciones from "../Creations.json";

export default function Creation() {
  const { name } = useParams();
  const creacion = Creaciones.list.find((c) => c.name === name);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const antes = localStorage.getItem('favoritos');
    if (antes) {
      const favoritosAlmacenados = JSON.parse(antes);
      setFavoritos(favoritosAlmacenados);
    }
  }, []);

  const submit = () => {
    const nuevosFavoritos = [...favoritos, creacion];
    setFavoritos(nuevosFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
  };

  return (
    <>
      <div className="DetallesPersona">
        <h1>{`Nombre del proyecto: ${creacion.name}`}</h1>
        <h1>{`Descripción: ${creacion.description}`}</h1>
        <img src={creacion.image} className="image" />
        <h1>{`Link del proyecto: ${creacion.link}`}</h1>
        <div className="Listita">
          <button onClick={submit} className="NombreLista">
            <Link to="/">Agregar a favoritos</Link>
          </button>
        </div>
      </div>
    </>
  );
}
