import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Banorte.png'; // Asegúrate de que la ruta sea correcta

const Header = () => (
  <header>
    <div className="logo-container">
      <Link to="/">
        <img src={logo} alt="Banorte Logo" />
      </Link>
    </div>
  </header>
);

export default Header;
