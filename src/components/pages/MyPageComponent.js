// FILEPATH: /c:/Users/david/recetas2.0/resources/js/components/recetas.time/proyecto-recetas/src/components/pages/MyPageComponent.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import MyPageComponent from './MyPageComponent';

describe('MyPageComponent', () => {
  it('renders without crashing', () => {
    render(
      <HelmetProvider>
        <MyPageComponent />
      </HelmetProvider>
    );
  });

  it('sets the page title and meta description', () => {
    render(
      <HelmetProvider>
        <MyPageComponent />
      </HelmetProvider>
    );

    const helmet = HelmetProvider.peek();
    expect(helmet.title).toEqual('Mi Página - Ejemplo de Título');
    expect(helmet.metaTags).toEqual([
      { name: 'description', content: 'Descripción de mi página.' },
    ]);
  });
});