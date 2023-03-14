import React from 'react';
// la ruta de error se representará en errorElement y el error estará disponible con useRouteError
import { Link } from 'react-router-dom';
import ImgError from '../img/error.png';
import '../index.css';

// Declaramos una página de error para que aparezca en vez de un error por defecto
function ErrorPage() {
  return (
    <div className="container-error container-fluid">
      <h1 className="h1__container-error">¡Vaya! Página no encontrada</h1>
      <p className="p__container-error">Lo sentimos, la página que buscas no existe o se ha producido un error en su búsqueda.</p>
      <Link to="/">Volver a la página de inicio</Link>
      <div className="imagen-error container-fluid">
        <img src={ImgError} alt="" />
      </div>
    </div>
  );
}

export default ErrorPage;
