// src/pages/Page15.js

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Page15.css';

const Page15 = () => {
  return (
    <div className="page15">
      <Header />

      <div className="logo-container">
        <img src="https://via.placeholder.com/150x50" alt="Banorte Logo" />
      </div>

      <button className="back-button">
        <Link to="/page14">←</Link>
      </button>

      <div className="container">
        <div className="icon">✔️</div>
        <h1>Registro completado</h1>
        <p>Bienvenido a la familia más grande de todo México</p>
        <Link to="/" className="finalize-button">
          Finalizar
        </Link>
      </div>
    </div>
  );
};

export default Page15;
