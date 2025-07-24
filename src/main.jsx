import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

import { PortfolioApp } from './PortfolioApp';
import './styles.css';

const title = 'Hola, me llamo Gastón Camú y soy desarrollador Front End';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioApp title={title} />
  </StrictMode>
);