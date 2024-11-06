// src/components/Ingredient.jsx
import React from 'react';

const Ingredient = ({ ingredient, action, buttonText }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }} className="ingredient-item">
      {ingredient.name}
      <button onClick={action}>{buttonText}</button>
    </li>
  );
};

export default Ingredient;
