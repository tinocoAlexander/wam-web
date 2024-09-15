import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Page11.css';
import background from '../images/p8.png';

const Page11 = () => {
  return (
    <div className="page11" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div className="overlay"></div>
      <button className="back-button">
        <Link to="/page10">⏴</Link>
      </button>

      <div className="container">
        <h1>¿Te preocupa pagar comisiones o anualidades?</h1>
        <div className="options">
          <input type="radio" id="evitar-comisiones" name="preocupacion" />
          <label htmlFor="evitar-comisiones">Sí, prefiero evitar comisiones</label>

          <input type="radio" id="beneficios-valen" name="preocupacion" />
          <label htmlFor="beneficios-valen">No, mientras los beneficios valgan la pena</label>

          <input type="radio" id="depende-anualidad" name="preocupacion" />
          <label htmlFor="depende-anualidad">Depende del costo de la anualidad</label>
        </div>
        <Link to="/page12" className="continue-button">
          Continuar
        </Link>
      </div>

      <div className="progress-bar">
        <div style={{ width: '80%' }}></div>
      </div>
    </div>
  );
};

export default Page11;
