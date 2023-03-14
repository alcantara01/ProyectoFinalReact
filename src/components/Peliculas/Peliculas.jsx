/* eslint-disable import/order */
/* eslint-disable max-len */

// useState es una función que crea internamente una variable
// donde podremos almacenar el estado de nuestro componente
import React, { useState, useEffect } from 'react';
// nos permite crear enlaces de navegación dentro de nuestra aplicación
import { Link } from 'react-router-dom';
// nos da todas las peliculas de la api
import { getPeliculas } from '../../services/peliculas';
// incorporamos el estilo de la index
import '../../index.css';
// importamos la paginación que tiene incorporada react
import ReactPaginate from 'react-paginate';
import Cargando from '../../img/cargando.gif';

function Peliculas() {
  const [loading, setLoading] = useState(true);
  // creamos una constante donde pondremos el nº de persoanjes
  // que queramos que salgan en cada página
  const ELEMENTOS_POR_PAGINA = 24;
  // se guarda la función para cambiar las peliculas
  const [peliculas, setPeliculas] = useState([]);
  // peliculas que son el resultado de la busqueda
  const [peliculasFiltradas, setPeliculasFiltradas] = useState([]);
  // se guarda la función para cambiar la página
  const [paginaActual, setPaginaActual] = useState(0);

  // se ejecuta cuando abres la pagina
  useEffect(() => {
    // obtenemos los personajes de la api
    getPeliculas().then((films) => {
      // cargamos las peliculas en la variable PeliculasFiltradas
      setPeliculas(films.data);
      // El método slice devuelve una copia de una parte del array
      // dentro de un nuevo array empezando por inicio (0) hasta el final (24)
      // El array original no se modificará
      setPeliculasFiltradas(films.data);
      setLoading(false);
    });
  }, []);

  // Se ejecutará cada vez que cambie la variable `paginaActual`
  useEffect(() => {
    // creamos una constante con la paginaActual multiplicado por 24
    const inicio = paginaActual * ELEMENTOS_POR_PAGINA;
    // aquí, creamos el final que es el incio más las 24 personajes por página que hay
    const fin = inicio + ELEMENTOS_POR_PAGINA;
    // delvuelve la copia desde el inicio (0) hasta el fin (12)
    setPeliculasFiltradas(peliculas.slice(inicio, fin));
  }, [paginaActual, peliculas]);

  // handleChange se ejecuta cuando escribimos algo nuevo en el buscador
  // el cual sirve para actualizar el estado
  const handleChange = (event) => {
    // filta por personaje de la pelicula y despues filtra por pelicula del personaje y compara lo que ponemos con mayus y minus.
    // solo se filtra una vez
    const peliculasResultado = peliculas.filter((personaje) => personaje.films.filter((film) => film.toUpperCase().includes(event.target.value.toUpperCase())).length > 0);
    setPeliculasFiltradas(peliculasResultado.slice(0, ELEMENTOS_POR_PAGINA));
    // comenzamos desde la pagina 0
    setPaginaActual(0);
  };

  // si todo ha ido bien nos retornará los personajes que aparecen en esa película
  return (
    <div className="container">
      {loading ? ( // operador ternario
        <div className="loading">
          <img src={Cargando} alt="Cargando" />
        </div>
      ) : (
        <input id="buscador" type="text" placeholder="Busca una Película" onChange={handleChange} />
      )}
      <div className="row">
        {/* Las keys ayudan a React a identificar que ítems */}
        {/* han cambiado, son agregados, o son eliminados. */}
        {peliculasFiltradas.map((film, key) => (
          <div id={key} className="col">
            <div>
              <h4 className="card-title my-3" id="nombre-personaje">{film.name}</h4>
              <Link to={`${film.name}`}>
                <img src={`${film.imageUrl}`} width="300px" height="300px" alt="#" />
              </Link>
            </div>
          </div>
        ))}

      </div>
      <ReactPaginate
        // el método ceil devuelve el mayor número entero que es mayor que el número pasado
        // y devuelve todos los personajes de la api entre los 24 que aparecen en cada una
        pageCount={Math.ceil(peliculas.length / ELEMENTOS_POR_PAGINA)}
        // estas son las paginas que quieres que te aparezcan para viajar sobre ellas (0)
        // ademas de la actual
        pageRangeDisplayed={0}
        // total de páginas que nos sale en la pantalla para poder navegar por ellas
        marginPagesDisplayed={2}
        onPageChange={({ selected }) => setPaginaActual(selected)}
        containerClassName="pagination"
        activeClassName="active"
      />
      <br />
    </div>
  );
}

export default Peliculas;
