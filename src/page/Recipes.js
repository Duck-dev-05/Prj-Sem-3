import React, {useEffect,useState} from "react";
import axios from "axios";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('#')
             .then(Response => setRecipes(response.data))
             .catch(error => console.error(error));
    }, []);

    return(
        <div>
            <h1>Recipes</h1>
            <ul>
            {recipes.map(recipe => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
            </ul>
        </div>
    );
};

export default Recipes;