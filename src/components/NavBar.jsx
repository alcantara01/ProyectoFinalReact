import React from 'react';
// nos permite crear enlaces de navegación dentro de nuestra aplicación
import { NavLink } from 'react-router-dom';
import ImgHeader from '../img/logo.png';
import '../index.css';

function Navbar() {
  return (
    <nav className="navbar bg-disney">
      <div className="container-fluid">
        <img src={ImgHeader} alt="" width="150" height="70" />
        <ul className="ul-nav">
          <li className="li-nav"><NavLink className="li-nav-navlink btn border third mx-2" to="/">Home</NavLink></li>
          <li className="li-nav"><NavLink className="li-nav-navlink btn border third mx-2" to="/personajes">Personajes</NavLink></li>
          <li className="li-nav"><NavLink className="li-nav-navlink btn border third mx-2" to="/peliculas">Peliculas</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
