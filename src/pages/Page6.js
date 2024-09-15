import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Page6.css';
import background from '../images/p3.png';

const Page6 = () => {
  return (
    <div className="page6" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div className="overlay"></div>
      <button className="back-button">
        <Link to="/page5">⏴</Link>
      </button>

      <div className="container">
        <h1>¿Para qué planeas usar la tarjeta bancaria?</h1>
        <div className="options">
          <input type="radio" id="compras" name="uso" />
          <label htmlFor="compras">Para compras diarias o gastos personales</label>

          <input type="radio" id="ahorro" name="uso" />
          <label htmlFor="ahorro">Ahorro o inversión</label>

          <input type="radio" id="viajes" name="uso" />
          <label htmlFor="viajes">Viajes o compras internacionales</label>
        </div>
        <Link to="/page7" className="continue-button">
          Continuar
        </Link>
      </div>

      <div className="progress-bar">
        <div style={{ width: '30%' }}></div>
      </div>
    </div>
  );
};

export default Page6;
