import React from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';

import PeruvianRecipes from './PeruvianRecipes';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import './App.css';

// Layout común que incluye la barra de navegación y el footer
import React from 'react';
import { Link } from 'react-router-dom';

import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/peruvian-recipes">Peruvian Recipes</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      {children}
      <footer>© 2023 Peruvian Recipes. All rights reserved.</footer>
    </>
  );
};

// Componente que representa la estructura de cada página
import React from 'react';

const PageComponent = ({ children }) => (
  <>
    {children}
  </>
);

import React from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';

import PeruvianRecipes from './PeruvianRecipes';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import './App.css';

// Layout común que incluye la barra de navegación y el footer
const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/peruvian-recipes">Peruvian Recipes</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      {children}
      <footer>© 2023 Peruvian Recipes. All rights reserved.</footer>
    </>
  );
};

// Componente que representa la estructura de cada página
const Page = ({ children }) => (
  <>
    {children}
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/peruvian-recipes" element={<PeruvianRecipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Ruta para manejar cualquier ruta no definida */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

import React from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';

import PeruvianRecipes from './PeruvianRecipes';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import './App.css';

// Layout común que incluye la barra de navegación y el footer
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/peruvian-recipes">Peruvian Recipes</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      {children}
      <footer>© 2023 Peruvian Recipes. All rights reserved.</footer>
    </>
  );
};

// Componente que representa la estructura de cada página
const Page = ({ children }) => (
  <>
    {children}
  </>
);
  <>
    {children}
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/peruvian-recipes" element={<PeruvianRecipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Ruta para manejar cualquier ruta no definida */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

export { App as default };

import React from 'react';
import { Helmet } from 'react-helmet';

const MyPageComponent = () => {
  return (
    <div>
      <Helmet>
        <title>Mi Página - Ejemplo de Título</title>
        <meta name="description" content="Descripción de mi página." />
        <link rel="canonical" href="http://localhost:3000/mi-pagina" />
      </Helmet>
      {/* El contenido de tu componente */}
    </div>
  );
};

export default MyPageComponent;

import React from 'react';
import { Helmet } from 'react-helmet';

const MyPageComponent = () => {
  return (
    <div>
      <Helmet>
        <title>Mi Página - Ejemplo de Título</title>
        <meta name="description" content="Descripción de mi página." />
        <link rel="canonical" href="http://localhost:3000/mi-pagina" />
      </Helmet>
      {/* El contenido de tu componente */}
    </div>
  );
};

export default MyPageComponent;
