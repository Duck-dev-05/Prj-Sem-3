import React, {useState} from "react";
import { Link } from "react-router-dom";

const recipesData = [
  { id: 1, name: 'Spaghetti Bolognese', description: 'A classic Italian dish.' },
  { id: 2, name: 'Chicken Curry', description: 'Spicy and delicious.' },
  { id: 3, name: 'Vegetable Stir-fry', description: 'Healthy and quick.' },
];

const RecipeList = () => {
    const [search, setSearch] = useState('');

    const filteredRecipes = recipesData.filter((recipe) =>
        recipe.name.toLowerCase().includes(search.toLowerCase())
      );
    
    return (
        <div>
            <input type="text" placeholder="Search recipes..." value={search} onChange={(e) => setSearch(e.target.value)}/>
            <ul>
            {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
            </ul>
        </div>
    );
};

export default RecipeList;