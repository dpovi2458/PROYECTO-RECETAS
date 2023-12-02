// Import individual recipes
import receta1 from './receta1';
import receta2 from './receta2';
import receta3 from './receta3';

// Import recipe utilities
import { convertirUnidades } from './utilidadesRecetas';

// Export individual recipes and utilities for use in other files
export { receta1, receta2, receta3, convertirUnidades };

// Alternatively, if you want to export all recipes as a single object:
export const recetas = { receta1, receta2, receta3 };
