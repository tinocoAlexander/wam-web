import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Page12.css';
import background from '../images/p9.png';

const Page12 = () => {
  return (
    <div className="page12" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div className="overlay"></div>
      <button className="back-button">
        <Link to="/page11">⏴</Link>
      </button>

      <div className="container">
        <h1>¿Te interesa tener seguros incluidos como protección contra fraudes o robos?</h1>
        <div className="options">
          <input type="radio" id="fraudes" name="seguro" />
          <label htmlFor="fraudes">Sí, protección contra fraudes es importante</label>

          <input type="radio" id="otros" name="seguro" />
          <label htmlFor="otros">Sí, me interesan otros seguros como vida y salud</label>

          <input type="radio" id="no-interesa" name="seguro" />
          <label htmlFor="no-interesa">No, no me interesa</label>
        </div>
        <Link to="/page13" className="continue-button">
          Continuar
        </Link>
      </div>

      <div className="progress-bar">
        <div style={{ width: '90%' }}></div>
      </div>
    </div>
  );
};

export default Page12;
