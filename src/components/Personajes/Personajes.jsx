/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
// useState es una función que crea internamente una variable
// donde podremos almacenar el estado de nuestro componente
import React, { useState, useEffect } from 'react';
// nos permite crear enlaces de navegación dentro de nuestra aplicación
import { Link, NavLink } from 'react-router-dom';
// nos da todos los personajes de la api
import { getPersonajes } from '../../services/personajes';
// incorporamos el estilo de la index
import '../../index.css';

function Personajes() {
  // se guarda la función para cambiar los personajes
  const [personajes, setPersonajes] = useState([]);
  // personajes que son el resultado de la busqueda
  const [personajesFiltrados, setPersonajesFiltrados] = useState([]);

  // se ejecuta cuando abres la pagina
  useEffect(() => {
    // obtenemos los personajes de la api
    getPersonajes().then((characters) => {
      // cargamos los personajes en la variable PersonajesFiltrados
      setPersonajes(characters.data);
      setPersonajesFiltrados(characters.data);
    });
  }, []);

  // handleChange se ejecuta cuando escribimos algo nuevo en el buscador
  // el cual sirve para actualizar el estado
  const handleChange = (event) => {
    // filtramos todos los personajes comparando su nombre con el que escribimos en el buscador
    const personajesResultado = personajes.filter((personaje) => personaje.name.toUpperCase().includes(event.target.value.toUpperCase()));
    // cargamos los resultados de la busqueda en la variable de personajesFiltrados
    setPersonajesFiltrados(personajesResultado);
  };

  // si todo ha ido bien nos retornará los personajes con el nombre y la imagen
  return (
    <div className="container">
      <input id="buscador" type="text" placeholder="Busca un Personaje" onChange={handleChange} />
      <div className="row">
        {personajesFiltrados.map((character, key) => (
          <div id={key} className="col">
            <NavLink to={`${character._id}`}>
              <div>
                <h4 id="nombre-personaje">{character.name}</h4>
                <Link to={`${character._id}`}>
                  <img src={`${character.imageUrl}`} width="300px" height="300px" alt="#" />
                </Link>

              </div>
            </NavLink>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Personajes;
