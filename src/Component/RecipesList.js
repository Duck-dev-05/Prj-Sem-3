import React, {useEffect,useState} from "react";
import { fetchRecipes } from "../services/api";

const RecipeList = () =>{
    const [recipes,setRecipes] = useState([]);

    useEffect(() =>{
        fetchRecipes()
        .then((Response) => setRecipes(response.data))
        .catch((error) => console.error(error));
    },[]);

    return (
        <div>
            <h1>Recipes</h1>
            <ul>
            {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
            </ul>
        </div>
    );
};

export default RecipeList;