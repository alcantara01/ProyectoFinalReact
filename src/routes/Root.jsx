import React from 'react';
import { Route, Routes } from 'react-router-dom';
// importamos todos los componentes que hemos realizado
// en la carpeta componentes
import Peliculas from '../components/Peliculas/Peliculas';
import Home from '../components/Home';
import Navbar from '../components/NavBar';
import Personajes from '../components/Personajes/Personajes';
import ErrorPage from '../components/Error-page';
import Footer from '../components/Footer';
import Personaje from '../components/Personajes/Personaje';

function Root() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/personajes/:id_personaje" element={<Personaje />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Root;
