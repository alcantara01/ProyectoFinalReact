import React from 'react';
// importamos la librería de bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// añadimos nuestro css
import '../index.css';

function Home() {
  return (
    <div className="div">
      <div className="text-center" id="bg-image-disney">
        <div className="container-home container-fluid">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="tittle-home">BIENVENIDO A NUESTRA API DE DISNEY</h1>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
