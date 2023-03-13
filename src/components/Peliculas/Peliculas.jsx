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

function Peliculas() {
  // se guarda la función para cambiar las peliculas
  const [peliculas, setPeliculas] = useState([]);
  // personajes que son el resultado de la busqueda
  const [peliculasFiltradas, setPeliculasFiltradas] = useState([]);

  // se ejecuta cuando abres la pagina
  useEffect(() => {
    // obtenemos los personajes de la api
    getPeliculas().then((films) => {
      // cargamos los personajes en la variable PersonajesFiltrados
      setPeliculas(films.data);
      setPeliculasFiltradas(films.data);
    });
  }, []);

  // handleChange se ejecuta cuando escribimos algo nuevo en el buscador
  // el cual sirve para actualizar el estado
  const handleChange = (event) => {
    // filta por personaje de la pelicula y despues filtra por pelicula del personaje y compara lo que ponemos con mayus y minus.
    // solo se filtra una vez
    const peliculasResultado = peliculas.filter((personaje) => personaje.films.filter((film) => film.toUpperCase().includes(event.target.value.toUpperCase())).length > 0);

    // cargamos los resultados de la busqueda en la variable de peliculasFiltradas
    setPeliculasFiltradas(peliculasResultado);
  };

  // si todo ha ido bien nos retornará las películas con el nombre y la imagen
  return (
    <div className="container">
      <input id="buscador" type="text" placeholder="Busca una Pelicula" onChange={handleChange} />
      <div className="row">
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
    </div>
  );
}

export default Peliculas;
