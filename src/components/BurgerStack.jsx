// src/components/BurgerStack.jsx
import React from 'react';
import Ingredient from './Ingredient';

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul className="burger-stack">
      {stack.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        stack.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            action={() => removeFromBurger(index)}
            buttonText="X"
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
