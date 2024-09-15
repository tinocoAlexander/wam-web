// src/pages/Page14.js

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Page14.css';

const Page14 = () => {
  return (
    <div className="page14">
      <Header />

      <div className="logo-container">
        <img src="https://via.placeholder.com/150x50" alt="Banorte Logo" />
      </div>

      <button className="back-button">
        <Link to="/page13">←</Link>
      </button>

      <div className="container">
        <h1>¡Sigue este plan especialmente para ti!</h1>
        <div className="suggestion-box">
          <p>
            <strong>Módulo sugerido:</strong> Ahorro e inversión
          </p>
          <p>
            <strong>Meta financiera:</strong> Establecer un fondo de emergencia
            equivalente a tres meses de gastos mensuales.
          </p>
        </div>
        <Link to="/page15" className="continue-button">
          ¡Comienza tu plan ahora!
        </Link>
      </div>
    </div>
  );
};

export default Page14;
