import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Page3.css';

const Page3 = () => {
  return (
    <div className="page3">
      <Header />
      <div className="container">
        <h1>¡Bienvenido a la APP!</h1>
        <p>Nos gustaría conocerte mejor</p>

        <div className="input-container">
          <input type="text" placeholder="Ingresa tu nombre" />
          <button>▶</button>
        </div>

        <Link to="/page4" className="continue-button">
          Continuar
        </Link>
      </div>

      <div className="back-button">
        <Link to="/">⏴</Link>
      </div>
    </div>
  );
};

export default Page3;
