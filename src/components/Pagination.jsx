import React from 'react';
// importamos las prop-types
import PropTypes from 'prop-types';

// pasamos a la funcion "Pagination" 3 parámetros
function Pagination({ totalPosts, postsPerPage, setCurrentPage }) {
  // creamos un array el cual le llamaamos "pages"
  const pages = [];
  // hacemos un for para recorrer el array
  // el método ceil devuelve el mayor número entero que es mayor que el número pasado
  // para devolver todas las páginas que necesitamos y se va sumando de una en una página
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    pages.push(i);
  }
  return (
    <div>
      {
            // mapeamos la pagina
            pages.map((page) => (
              // creamos un botón para poder ir de una página a otra
              <button
                type="button"
                key={page}
                // cuando pinchas en el numero de la página te la pone como actual
                // te dirige hacia ella
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))
        }
    </div>
  );
}
// aqui abajo declaramos las propTypes y las ponemos cada una
// con su tipo correspondiente y que sea requerido
Pagination.propTypes = {
  totalPosts: PropTypes.number.isRequired,
  postsPerPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
