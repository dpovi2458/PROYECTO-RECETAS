// hooks/useRecipes.js

import { useState, useEffect } from 'react';
import { getPeruvianRecipes } from '../services/recipesService';

const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const data = await getPeruvianRecipes();
        setRecipes(data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return { recipes, loading, error };
};

export default useRecipes;