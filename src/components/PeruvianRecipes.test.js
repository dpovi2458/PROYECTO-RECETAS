/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import PeruvianRecipes from './PeruvianRecipes';

test('debe mostrar el mensaje de carga al inicio', () => {
  render(<PeruvianRecipes />);
  expect(screen.getByText(/Cargando recetas.../i)).toBeInTheDocument();
});