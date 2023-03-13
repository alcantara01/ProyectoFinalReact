/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/order */
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
import ReactPaginate from 'react-paginate';

function Personajes() {
  const ELEMENTOS_POR_PAGINA = 12;
  // se guarda la función para cambiar los personajes
  const [personajes, setPersonajes] = useState([]);
  // personajes que son el resultado de la busqueda
  const [personajesFiltrados, setPersonajesFiltrados] = useState([]);
  const [paginaActual, setPaginaActual] = useState(0);

  // se ejecuta cuando abres la pagina
  useEffect(() => {
    // obtenemos los personajes de la api
    getPersonajes().then((characters) => {
      // cargamos los personajes en la variable PersonajesFiltrados
      setPersonajes(characters.data);
      setPersonajesFiltrados(characters.data.slice(0, ELEMENTOS_POR_PAGINA));
    });
  }, []);

  // Se ejecutará cada vez que cambie la variable `paginaActual`
  useEffect(() => {
    const inicio = paginaActual * ELEMENTOS_POR_PAGINA;
    const fin = inicio + ELEMENTOS_POR_PAGINA;
    setPersonajesFiltrados(personajes.slice(inicio, fin));
  }, [paginaActual, personajes]);

  // handleChange se ejecuta cuando escribimos algo nuevo en el buscador
  // el cual sirve para actualizar el estado
  const handleChange = (event) => {
  // filta por personaje de la pelicula y despues filtra por pelicula del personaje y compara lo que ponemos con mayus y minus.
  // solo se filtra una vez
    const personajesResultado = personajes.filter((personaje) => personaje.name.toUpperCase().includes(event.target.value.toUpperCase()));
    setPersonajesFiltrados(personajesResultado.slice(0, ELEMENTOS_POR_PAGINA));
    setPaginaActual(0);
  };

  // si todo ha ido bien nos retornará las películas con el nombre y la imagen
  return (
    <div className="container">
      <input id="buscador" type="text" placeholder="Busca un Personaje" onChange={handleChange} />
      <div className="row">
        {/* Las keys ayudan a React a identificar que ítems */}
        {/* han cambiado, son agregados, o son eliminados. */}
        {personajesFiltrados.map((character, key) => (
          <div id={key} className="col" key={key}>
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
      <ReactPaginate
        pageCount={Math.ceil(personajes.length / ELEMENTOS_POR_PAGINA)}
        pageRangeDisplayed={0}
        marginPagesDisplayed={0}
        onPageChange={({ selected }) => setPaginaActual(selected)}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
}

export default Personajes;
