import React from 'react';
import useFetchRecipes from './hooks/useFetchRecipes';

const RecetasPage = () => {
  const { data: recipes, loading, error } = useFetchRecipes();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading recipes: {error.message}</p>;

  return (
    <div>
      <h1>Recetas Peruanas</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecetasPage;