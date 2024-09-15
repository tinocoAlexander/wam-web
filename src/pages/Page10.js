import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Page10.css';
import background from '../images/p7.png';

const Page10 = () => {
  return (
    <div className="page10" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div className="overlay"></div>
      <button className="back-button">
        <Link to="/page9">⏴</Link>
      </button>

      <div className="container">
        <h1>¿Con qué frecuencia usarás la tarjeta?</h1>
        <div className="options">
          <input type="radio" id="diario" name="frecuencia" />
          <label htmlFor="diario">A diario</label>

          <input type="radio" id="semanal" name="frecuencia" />
          <label htmlFor="semanal">Semanalmente</label>

          <input type="radio" id="ocasiones" name="frecuencia" />
          <label htmlFor="ocasiones">Solo en ocasiones específicas</label>
        </div>
        <Link to="/page11" className="continue-button">
          Continuar
        </Link>
      </div>

      <div className="progress-bar">
        <div style={{ width: '70%' }}></div>
      </div>
    </div>
  );
};

export default Page10;
