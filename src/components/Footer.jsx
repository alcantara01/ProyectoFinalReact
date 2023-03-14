/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
// importamos bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// estos son los iconos de react para nuestro footer
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from 'react-icons/fa';
// este es el logo de la palabra de disney
import ImgLogo from '../img/disney_logo_word.png';
// importamos el css del footer
import '../footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container-footer-sup container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-6 footer-about">
              <img className="logo-footer" src={ImgLogo} alt="logo" id="logo-footer" />
              <p>Página creada por grupo 2:</p>
              <p>
                Cristina Alcántara
                <br />
                Ángel Martínez
                <br />
                Sara Escobar
                <br />
                Jorge Ramirez
              </p>
            </div>
            <div className="col-md-4 footer-contact">
              <h2>Contáctanos</h2>
              <p>
                <FaMapMarkerAlt />
                {' '}
                Paseo de San Eugenio, 21. 45003 - Toledo
              </p>
              <p>
                <FaPhoneAlt />
                {' '}
                Teléfono: 925284043
              </p>
              <p>
                <FaEnvelope />
                {' '}
                Email:
                {' '}
                <a href="mailto:45003875.ies@edu.jccm.es">45003875.ies@edu.jccm.es</a>
              </p>
            </div>
            <div className="col-md-4 footer-terminos">
              <div className="row">
                <div className="col">
                  <h2>Términos</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p><a className="terminos-link" href="https://www.amnesty.org/es/privacy-policy/">Politica de privacidad</a></p>
                  <p><a className="terminos-link" href="https://www.amnesty.org/es/permissions/">Permisos</a></p>
                  <p><a className="terminos-link" href="https://www.amnesty.org/es/cookie-statement/">Uso de cookies</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container-footer-inf container-fluid">
          <div className="row">
            <div className="col-md-6 footer-copyright">
              © Pagina creada por alumnos del
              {' '}
              <a href="http://www.ies-azarquiel.es/">IES AZARQUIEL</a>
            </div>
            <div className="col-md-6 footer-redes">
              <a href="https://www.facebook.com/waltdisneystudioses"><FaFacebookSquare /></a>
              <a href="https://twitter.com/Disney"><FaTwitter /></a>
              <a href="https://www.instagram.com/disney/"><FaInstagram /></a>
              <a href="https://www.pinterest.es/Disney/"><FaPinterest /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
