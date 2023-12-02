import { useState, useEffect } from 'react';

const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3000/api/recipes');
        if (!response.ok) {
          throw new Error(`API call error: ${response.status}`);
        }
        const data = await response.json();
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

export default useFetchRecipes;
