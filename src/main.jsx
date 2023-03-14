import React from 'react';
// proporciona métodos específicos del cliente que se utilizan
// para inicializar una aplicación en el cliente
import ReactDOM from 'react-dom/client';
// inyecta propiedades a nuestro componente para poder acceder
// al historial de navegación, realizar redirecciones, etc
import { BrowserRouter } from 'react-router-dom';
// importamos todas las rutas que tenemos en el Root
// para que las inyecte dentro del BrowserRouter
import Root from './routes/Root';
// importamos el estilo
import './index.css';

// renderizamos las rutas del archivo Root dentro del BrowserRouter
ReactDOM.createRoot(document.getElementById('root')).render(
  // BrowserRouter es el componente que utilizamos
  // para crear nuestras rutas a otros páginas (components)
  <BrowserRouter>
    {/* añadimos el tipo de letra de disney */}
    <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/waltograph-disney" type="text/css" />
    {/* añadimos todas las rutas que contiene el root */}
    <Root />
  </BrowserRouter>,
);
