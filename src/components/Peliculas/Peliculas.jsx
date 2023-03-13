/* eslint-disable import/order */
/* eslint-disable max-len */
// useState es una función que crea internamente una variable
// donde podremos almacenar el estado de nuestro componente
import React, { useState, useEffect } from 'react';
// nos permite crear enlaces de navegación dentro de nuestra aplicación
import { Link, NavLink } from 'react-router-dom';
// nos da todos los personajes de la api
import { getPeliculas } from '../../services/peliculas';
// incorporamos el estilo de la index
import '../../index.css';
import ReactPaginate from 'react-paginate';

function Peliculas() {
  const ELEMENTOS_POR_PAGINA = 12;
  // se guarda la función para cambiar las peliculas
  const [peliculas, setPeliculas] = useState([]);
  // personajes que son el resultado de la busqueda
  const [peliculasFiltradas, setPeliculasFiltradas] = useState([]);
  const [paginaActual, setPaginaActual] = useState(0);

  // se ejecuta cuando abres la pagina
  useEffect(() => {
    // obtenemos los personajes de la api
    getPeliculas().then((films) => {
      // cargamos los personajes en la variable PersonajesFiltrados
      setPeliculas(films.data);
      setPeliculasFiltradas(films.data);
    });
  }, []);

  // Se ejecutará cada vez que cambie la variable `paginaActual`
  useEffect(() => {
    const inicio = paginaActual * ELEMENTOS_POR_PAGINA;
    const fin = inicio + ELEMENTOS_POR_PAGINA;
    setPeliculasFiltradas(peliculas.slice(inicio, fin));
  }, [paginaActual, peliculas]);

  // handleChange se ejecuta cuando escribimos algo nuevo en el buscador
  // el cual sirve para actualizar el estado
  const handleChange = (event) => {
    // filta por personaje de la pelicula y despues filtra por pelicula del personaje y compara lo que ponemos con mayus y minus.
    // solo se filtra una vez
    const peliculasResultado = peliculas.filter((personaje) => personaje.films.filter((film) => film.toUpperCase().includes(event.target.value.toUpperCase())).length > 0);
    setPeliculasFiltradas(peliculasResultado.slice(0, ELEMENTOS_POR_PAGINA));
    setPaginaActual(0);
  };

  // si todo ha ido bien nos retornará las películas con el nombre y la imagen
  return (
    <div className="container">
      <input id="buscador" type="text" placeholder="Busca una Pelicula" onChange={handleChange} />
      <div className="row">
        {/* Las keys ayudan a React a identificar que ítems */}
        {/* han cambiado, son agregados, o son eliminados. */}
        {peliculasFiltradas.map((film, key) => (
          <div id={key} className="col">
            <NavLink to={`${film.id}`}>
              <div>
                <h4 className="card-title my-3">{film.name}</h4>
                <Link to={`${film.name}`}>
                  <img src={`${film.imageUrl}`} width="300px" height="300px" alt="#" />
                </Link>

              </div>
            </NavLink>
          </div>
        ))}

      </div>
      <ReactPaginate
        pageCount={Math.ceil(peliculas.length / ELEMENTOS_POR_PAGINA)}
        pageRangeDisplayed={0}
        marginPagesDisplayed={0}
        onPageChange={({ selected }) => setPaginaActual(selected)}
        containerClassName="pagination"
        activeClassName="active"
      />
      <br />
    </div>
  );
}

export default Peliculas;
