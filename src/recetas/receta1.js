// This file contains the details and related functions for recipe 1

const recipe1 = {
  name: 'Recipe 1',
  ingredients: ['ingredient1', 'ingredient2', 'ingredient3'],
  instructions: 'Step 1: Do this. Step 2: Do that.'
};

function getRecipe1() {
  return { ...recipe1 }; // Return a copy of the recipe object to prevent modification of the original object
}

module.exports = getRecipe1;