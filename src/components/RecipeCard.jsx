// src/components/RecipeCard.jsx
import React from 'react';
import Button from './Button';

const RecipeCard = ({ recipe }) => {
  const { image, title, description } = recipe;

  return (
    <div className="card">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Button className="btn-primary">Ver Más</Button>
      </div>
    </div>
  );
};

export default RecipeCard;
