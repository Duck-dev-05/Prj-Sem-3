import React from "react";
import { useParams } from "react-router-dom";

const recipesData = [
    { id: 1, name: 'Spaghetti Bolognese', description: 'A classic Italian dish.' },
    { id: 2, name: 'Chicken Curry', description: 'Spicy and delicious.' },
    { id: 3, name: 'Vegetable Stir-fry', description: 'Healthy and quick.' },
];

const RecipeDetail = () => {
    const {id} = useParams();
    const recipe = recipesData.find((recipe) => recipe.id === parseInt(id));

    if (!recipe) {
        return <p>Recipe not found!</p>
    }

    return (
        <div>
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
        </div>
    );
};

export default RecipeDetail;    