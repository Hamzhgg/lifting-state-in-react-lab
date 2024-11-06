// src/components/IngredientList.jsx
import React from 'react';
import Ingredient from './Ingredient';

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul className="ingredient-list">
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          action={() => addToBurger(ingredient)}
          buttonText="+"
        />
      ))}
    </ul>
  );
};

export default IngredientList;
