import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Page7.css';
import background from '../images/p4.png';

const Page7 = () => {
  return (
    <div className="page7" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div className="overlay"></div>
      <button className="back-button">
        <Link to="/page6">⏴</Link>
      </button>

      <div className="container">
        <h1>¿Cuál es tu ingreso mensual aproximado?</h1>
        <div className="options">
          <input type="radio" id="menos-10000" name="ingreso" />
          <label htmlFor="menos-10000">Menos de 10,000 MXN</label>

          <input type="radio" id="10000-30000" name="ingreso" />
          <label htmlFor="10000-30000">Entre 10,000 y 30,000 MXN</label>

          <input type="radio" id="mas-30000" name="ingreso" />
          <label htmlFor="mas-30000">Más de 30,000 MXN</label>
        </div>
        <Link to="/page8" className="continue-button">
          Continuar
        </Link>
      </div>

      <div className="progress-bar">
        <div style={{ width: '40%' }}></div>
      </div>
    </div>
  );
};

export default Page7;
