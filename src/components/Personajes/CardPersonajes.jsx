import React, { useState, useEffect } from 'react';
// nos permite acceder desde un componente a los parámetros de la ruta
import { useParams } from 'react-router-dom';
import { getPersonaje } from '../../services/personajes';
import '../../index.css';

function CardPersonajes() {
  // aqui guardamos su valor dentro de una variable
  // este valor nunca cambia por eso la ponemos con const
  const { personajeId } = useParams();
  const [personaje, setPersonaje] = useState();

  // es usado para la inicialización de variables,
  // llamadas a APIs o para limpiar un componente antes de desmontarlo del DOM
  useEffect(() => {
    getPersonaje(personajeId).then((characters) => {
      setPersonaje(characters.data[0]);
    });
  }, [personajeId]);

  if (!personaje) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="card text-left card-css shadow my-5">
      <div className="row">
        <div className="col-6">
          <img className="card-img-top img-fluid" src={`${personaje.imageUrl}`} height="300px" alt="#" />
        </div>
        <div className="col-6">
          <div className="card-body">
            <h4 className="card-title">{personaje.name}</h4>
            <p className="card-text">{personaje.films}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPersonajes;
