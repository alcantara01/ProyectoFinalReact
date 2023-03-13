/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from 'react-icons/fa';
import ImgLogo from '../img/disney_logo_word.png';
import '../footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-top" id="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-3 footer-about fadeInUp animated" id="footer-about">
              <img className="logo-footer" src={ImgLogo} alt="logo" id="logo-footer" />
              <p>Página creada por el grupo 2:</p>
              <p>Cristina Alcántara</p>
              <p>Ángel Martínez</p>
              <p>Sara Escobar</p>
              <p>Jorge Ramirez</p>
            </div>
            <div className="col-md-4 col-lg-4 offset-lg-1 footer-contact fadeInDown animated" id="footer-contact">
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
            <div className="col-md-4 col-lg-4 footer-links fadeInUp animated" id="footer-links">
              <div className="row">
                <div className="col">
                  <h2>Términos</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p><a className="scroll-link" href="#section-1">Politica de privacidad</a></p>
                  <p><a className="scroll-link" href="#section-1">Politica  de copyright</a></p>
                  <p><a className="scroll-link" href="#section-2">Uso de cookies</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom" id="footer-bottom">
        <div className="container" id="container">
          <div className="row">
            <div className="col-md-6 footer-copyright" id="footer-copyright">
              © Pagina creada por alumnos del
              {' '}
              <a href="http://www.ies-azarquiel.es/">IES AZARQUIEL</a>
            </div>
            <div className="col-md-6 footer-social" id="footer-social">
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
