import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Page4.css';
import background from '../images/p1.png';

const Page4 = () => {
  return (
    <div className="page4" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div className="overlay"></div>
      <button className="back-button">
        <Link to="/page3">⏴</Link>
      </button>

      <div className="container">
        <h1>¿Cuál es tu sexo?</h1>
        <div className="options">
          <input type="radio" id="femenino" name="sexo" />
          <label htmlFor="femenino">Femenino</label>

          <input type="radio" id="masculino" name="sexo" />
          <label htmlFor="masculino">Masculino</label>

          <input type="radio" id="otro" name="sexo" />
          <label htmlFor="otro">Otro</label>
        </div>
        <Link to="/page5" className="continue-button">
          Continuar
        </Link>
      </div>

      <div className="progress-bar">
        <div style={{ width: '10%' }}></div>
      </div>
    </div>
  );
};

export default Page4;

