// Suponiendo que es similar a las otras páginas
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Page9.css';
import background from '../images/p6.png';

const Page9 = () => {
  return (
    <div className="page9" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div className="overlay"></div>
      <button className="back-button">
        <Link to="/page8">⏴</Link>
      </button>

      <div className="container">
        <h1>¿Te preocupa pagar comisiones o anualidades?</h1>
        <div className="options">
          <input type="radio" id="recompensas" name="preferencia" />
          <label htmlFor="recompensas">Sì, prefiero evitar comisiones</label>

          <input type="radio" id="descuentos" name="preferencia" />
          <label htmlFor="descuentos">No me importa si los beneficios valen la pena</label>

          <input type="radio" id="promociones" name="preferencia" />
          <label htmlFor="promociones">Depende del costo de la anualidad</label>
        </div>
        <Link to="/page10" className="continue-button">
          Continuar
        </Link>
      </div>

      <div className="progress-bar">
        <div style={{ width: '60%' }}></div>
      </div>
    </div>
  );
};

export default Page9;