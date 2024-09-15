import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Page13.css';
import '../images/tarjeta.png'; // Asegúrate de que la ruta sea correcta

const Page13 = () => {
  return (
    <div className="page13">
      <Header />
      <div className="overlay"></div>

      <div className="container">
        <h1>¡Plan financiero personalizado!</h1>

        <div className="card">
          {/* Imagen de la tarjeta */}
        </div>

        <div className="info-box">
          <h2>Límite de crédito: $50,000 MXN</h2>
          <p>Tasa de interés: 12% anual</p>
          <p>Cashback: 5% en compras</p>
          <p>
            Este plan está diseñado especialmente para ti, con un límite de crédito ajustado a tus
            necesidades y un cashback en todas tus compras.
          </p>
          <Link to="/Page14" className="continue-button">
            Continuar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page13;
