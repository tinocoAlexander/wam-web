import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Page8.css';
import background from '../images/p5.png';

const Page8 = () => {
  return (
    <div className="page8" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div className="overlay"></div>
      <button className="back-button">
        <Link to="/page7">⏴</Link>
      </button>

      <div className="container">
        <h1>¿Te interesan más las recompensas o los descuentos?</h1>
        <div className="options">
          <input type="radio" id="recompensas" name="preferencia" />
          <label htmlFor="recompensas">Recompensas o puntos por compras</label>

          <input type="radio" id="descuentos" name="preferencia" />
          <label htmlFor="descuentos">Descuentos en comercios</label>

          <input type="radio" id="promociones" name="preferencia" />
          <label htmlFor="promociones">Promociones especiales o meses sin intereses</label>
        </div>
        <Link to="/page9" className="continue-button">
          Continuar
        </Link>
      </div>

      <div className="progress-bar">
        <div style={{ width: '50%' }}></div>
      </div>
    </div>
  );
};

export default Page8;
