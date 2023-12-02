// routes/recipesRoutes.js
const express = require('express');
const router = express.Router();
const recipesService = require('../services/recipesService');

// Ruta para obtener recetas peruanas
router.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await recipesService.getPeruvianRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;