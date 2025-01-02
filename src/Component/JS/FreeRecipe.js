import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import FeedbackForm from '../components/FeedbackForm';

const FreeRecipes = () => {
  const [recipes] = useState([
    { id: 1, title: 'Spaghetti Bolognese', description: 'A classic Italian dish.' },
    { id: 2, title: 'Mango Smoothie', description: 'A refreshing summer drink.' },
    { id: 3, title: 'Vegetable Stir Fry', description: 'Quick and healthy.' },
  ]);

  return (
    <div>
      <h2>Free Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <FeedbackForm />
    </div>
  );
};

export default FreeRecipes;
