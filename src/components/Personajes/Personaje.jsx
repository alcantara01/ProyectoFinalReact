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
    <div className="container--personaje">
      <div className="row">
        <div className="col-md-12">
          <div className="carac--personaje">
            <h2 className="h2__carac--personaje">
              Información del personaje
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card-pers-img">
          <div className="col-md-6">
            <div className="card-personaje__card-pers-img__container--personaje">
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
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-imagen__card-pers-img__container--personaje">
              <img src={`${personaje.imageUrl}`} alt="foto personaje" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
