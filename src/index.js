import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import PeruvianRecipes from './components/PeruvianRecipes';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound'; // Importa un nuevo componente para la página no encontrada
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/peruvian-recipes">Recetas Peruanas</Link>
          <Link to="/about">Acerca de</Link>
          <Link to="/contact">Contacto</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/peruvian-recipes" element={<PeruvianRecipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* Ruta para manejar URLs desconocidas */}
        </Routes>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
