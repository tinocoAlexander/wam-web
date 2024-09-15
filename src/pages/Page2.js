import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Page2.css';

const Page2 = () => {
  return (
    <div className="page2">
      <Header />
      <div className="container">
        <h1>¡Hola! Vamos a conocerte mejor</h1>
        <Link to="/page3" className="forward-button">
          ⏵⏵
        </Link>
      </div>
    </div>
  );
};

export default Page2;
