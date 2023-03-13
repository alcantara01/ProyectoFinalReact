/* eslint-disable no-underscore-dangle */
/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPersonaje } from '../../services/personajes';

export default function Personaje() {
  // se ejecuta cuando abres la pagina
  // useEffect(() => {
  const params = useParams();
  const personajeId = params.id_personaje;
  const [personaje, setPersonaje] = useState([]);
  // se ejecuta cuando abres la pagina
  useEffect(() => {
    // obtenemos los personajes de la api
    getPersonaje(personajeId).then((character) => {
      // cargamos los personajes en la variable PersonajesFiltrados
      console.log(character);
      setPersonaje(character);
    });
  }, []);

  return (
    <main>
      <h2 id="carac-personaje">
        Características del personaje
      </h2>
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
        <img src={`${personaje.imageUrl}`} alt="foto personaje" />
      </p>
    </main>
  );
}
