import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

import { PortfolioApp } from './PortfolioApp';
import './styles.css';

const title = 'Holaaa, me llamo Gastón Camú';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioApp title={title} />
  </StrictMode>
);