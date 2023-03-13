/* eslint-disable no-underscore-dangle */
/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPersonaje } from '../../services/personajes';

export default function Personaje() {
  // se ejecuta cuando abres la pagina
  const params = useParams();
  const personajeId = params.id_personaje;
  const [personaje, setPersonaje] = useState([]);
  useEffect(() => {
    // obtenemos los personajes de la api
    getPersonaje(personajeId).then((character) => {
      setPersonaje(character);
    });
  }, []);

  // Cuando pinchamos en un personaje, esta es la información que mostramos
  return (
    <div className="container">
      <h2 id="carac-personaje">
        Características del personaje
      </h2>
      <div className="card-personaje">
        <p id="c-personaje">
          <p>
            - Id del personaje:
            {' '}
            {`${personajeId}`}
          </p>
          <p>
            - Nombre:
            {' '}
            {`${personaje.name}`}
          </p>
          <p>
            - Films:
            {' '}
            {`${personaje.films}`}
          </p>
          <p>
            - Short Films:
            {' '}
            {`${personaje.shortFilms}`}
          </p>
          <p>
            - Shows:
            {' '}
            {`${personaje.tvShows}`}
          </p>
          <p>
            - Videogames:
            {' '}
            {`${personaje.videoGames}`}
          </p>
          <p>
            - Park Attracctions:
            {' '}
            {`${personaje.parkAttractions}`}
          </p>
        </p>
      </div>
      <div className="card-imagen">
        <img src={`${personaje.imageUrl}`} alt="foto personaje" />
      </div>
    </div>
  );
}
