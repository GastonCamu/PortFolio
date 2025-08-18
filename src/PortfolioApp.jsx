import techData from './data/technologies.json';

import PropTypes from 'prop-types';
import { useState } from 'react';

const principales = techData.principales;
const testing = techData.testing;
const otras = techData.otras;

export const PortfolioApp = ({ title }) => {

  const [technologies, settechnologies] = useState(techData)
  return (
    <>
      <div id='presentacion'>
        <h1>{title}</h1>
        <p>Soy desarrollador front-end.</p>
        <img src="/public/avatar.png" alt="Imagen de un avatar" />
      </div>
      <div id='section-1'>
        <p>
          Soy un desarrollador Front-End apasionado por el diseño y la funcionalidad en la web. Me gusta aprender, mejorar cada día y trabajar en proyectos que representen un desafío creativo y técnico.
        </p>
      </div>
      <div id='section-2'>
        <div id='section-2-1'>
          <img src="/public/terminal.png" alt="Imagen de terminal de comandos" />
          <h2>Tecnologias Aprendidas</h2>

        </div>
        <div id='section-2-2'>
          <h3>Destacadas</h3>
          <ul>
            {principales.map(tech => (
              <li key={tech.name}><img src={tech.logo} /><p>{tech.name}</p></li>
            ))}
          </ul>
          <h3>Testing</h3>
          <ul>
          {testing.map(tech => (
            <li key={tech.name}><img src={tech.logo} /><p>{tech.name}</p></li>
          ))}
        </ul>
        <h3>Otras</h3>
          <ul>
          {otras.map(tech => (
            <li key={tech.name}><img src={tech.logo} /><p>{tech.name}</p></li>
          ))}
        </ul>
      </div>
    </div >
      <div id='section-3'>
        <h2>Mis Proyectos</h2>
      </div>
      <div id='section-4'>
        <h2>Mis Trabajos Recientes</h2>
      </div>
      <footer>
        <p>Soy un footer</p>
      </footer>
    </>
  );
};

PortfolioApp.propTypes = {
  title: PropTypes.string.isRequired
};