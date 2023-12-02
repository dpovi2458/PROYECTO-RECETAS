import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  const goToRecipes = () => {
    navigate('/peruvian-recipes');
  };

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Bienvenido a nuestro sitio de recetas</h1>
      <button onClick={goToRecipes}>Ver recetas peruanas</button>
      <button onClick={goToHomePage}>Ir a la página de inicio</button>
    </div>
  );
};

export default Homepage;
