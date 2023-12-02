// services/recipesService.js (Node.js compatible)
const fetch = require('node-fetch');

const API_BASE_URL = 'http://localhost:3000'; // Asegúrate de reemplazar esto con la URL real de tu API

const getPeruvianRecipes = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/recipes`);
    if (!response.ok) {
      throw new Error(`Error en la llamada a la API: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener las recetas:', error);
    throw error;
  }
};

module.exports = {
  getPeruvianRecipes,
};