import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Page5.css';
import background from '../images/p2.png';

const Page5 = () => {
  return (
    <div className="page5" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <div className="overlay"></div>
      <button className="back-button">
        <Link to="/page4">⏴</Link>
      </button>

      <div className="container">
        <h1>¿Eres mayor de 18 años?</h1>
        <div className="options">
          <input type="radio" id="si" name="edad" />
          <label htmlFor="si">SÍ</label>

          <input type="radio" id="no" name="edad" />
          <label htmlFor="no">NO</label>
        </div>
        <Link to="/page6" className="continue-button">
          Continuar
        </Link>
      </div>

      <div className="progress-bar">
        <div style={{ width: '20%' }}></div>
      </div>
    </div>
  );
};

export default Page5;
