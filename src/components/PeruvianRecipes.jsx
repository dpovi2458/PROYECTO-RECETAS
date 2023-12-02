import React from 'react';
import useRecipes from '../hooks/useRecipes';
import Recipe from './Recipe';

const PeruvianRecipes = () => {
  const { recipes, loading, error } = useRecipes();

  return (
    <div>
      <h1>Recetas Peruanas</h1>
      {loading && <p>Cargando recetas...</p>}
      {error && <p>Ha ocurrido un error al cargar las recetas: {error.message}</p>}
      <div>
        {recipes.map(recipe => <Recipe key={recipe.id} {...recipe} />)}
      </div>
    </div>
  );
};

export default PeruvianRecipes;