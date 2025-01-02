import React from "react";

const RecipeCard  = ({recipe}) => {
    <div className="recipe-card">
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
    </div>
};

export default RecipeCard;