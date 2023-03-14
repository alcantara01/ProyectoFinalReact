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
// importamos la paginación que tiene incorporada react
import ReactPaginate from 'react-paginate';
import Cargando from '../../img/cargando.gif';

function Personajes() {
  const [loading, setLoading] = useState(true);
  // creamos una constante donde pondremos el nº de persoanjes
  // que queramos que salgan en cada página
  const ELEMENTOS_POR_PAGINA = 12;
  // se guarda la función para cambiar los personajes
  const [personajes, setPersonajes] = useState([]);
  // personajes que son el resultado de la busqueda
  const [personajesFiltrados, setPersonajesFiltrados] = useState([]);
  // se guarda la función para cambiar la página
  const [paginaActual, setPaginaActual] = useState(0);

  // se ejecuta cuando abres la pagina
  useEffect(() => {
    // obtenemos los personajes de la api
    getPersonajes().then((characters) => {
      // cargamos los personajes en la variable PersonajesFiltrados
      setPersonajes(characters.data);
      // El método slice devuelve una copia de una parte del array
      // dentro de un nuevo array empezando por inicio (0) hasta el final (12)
      // El array original no se modificará
      setPersonajesFiltrados(characters.data.slice(0, ELEMENTOS_POR_PAGINA));
      setLoading(false);
    });
  }, []);

  // Se ejecuta cada vez que cambie la variable paginaActual
  useEffect(() => {
    // creamos una constante con la paginaActual multiplicado por 12
    const inicio = paginaActual * ELEMENTOS_POR_PAGINA;
    // aquí, creamos el final que es el incio más las 12 páginas que hay
    const fin = inicio + ELEMENTOS_POR_PAGINA;
    // delvuelve la copia desde el inicio (0) hasta el fin (12)
    setPersonajesFiltrados(personajes.slice(inicio, fin));
  }, [paginaActual, personajes]);

  // handleChange se ejecuta cuando escribimos algo nuevo en el buscador
  // el cual sirve para actualizar el estado
  const handleChange = (event) => {
    // filta por personaje de la pelicula y despues filtra por pelicula del personaje y compara lo que ponemos con mayus y minus.
    // solo se filtra una vez
    const personajesResultado = personajes.filter((personaje) => personaje.name.toUpperCase().includes(event.target.value.toUpperCase()));
    setPersonajesFiltrados(personajesResultado.slice(0, ELEMENTOS_POR_PAGINA));
    // comenzamos desde la pagina 0
    setPaginaActual(0);
  };

  // si todo ha ido bien nos retornará las películas con el nombre y la imagen
  return (
    <div className="container">
      {loading ? ( // operador ternario
        <div className="loading">
          <img src={Cargando} alt="Cargando" />
        </div>
      ) : (
        <input id="buscador" type="text" placeholder="Busca un Personaje" onChange={handleChange} />
      )}
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
        // el método ceil devuelve el mayor número entero que es mayor que el número pasado
        // y devuelve todos los personajes de la api entre los 12 que aparecen en cada una
        pageCount={Math.ceil(personajes.length / ELEMENTOS_POR_PAGINA)}
        // estas son las paginas que quieres que te aparezcan para viajar sobre ellas (2)
        // ademas de la actual
        pageRangeDisplayed={0}
        marginPagesDisplayed={2}
        onPageChange={({ selected }) => setPaginaActual(selected)}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
}

export default Personajes;
