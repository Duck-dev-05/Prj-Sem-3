import React from "react";
import "../css/FreeRecipes.css";

const FreeRecipes = () => {
  return (
    <div className="freerecipes-container">
      <h2>Free Recipes</h2>
      <div className="recipe-item">
        <h3>Spaghetti Carbonara</h3>
        <p>A classic Italian pasta dish with creamy sauce, eggs, and pancetta.</p>
      </div>
      <div className="recipe-item">
        <h3>Chocolate Chip Cookies</h3>
        <p>Delicious cookies with rich chocolate chips and a soft, chewy texture.</p>
      </div>
    </div>
  );
};

export default FreeRecipes;
