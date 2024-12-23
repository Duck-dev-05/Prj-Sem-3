import React from "react";
import '../css/FreeRecipes.css';

const RecipePage = () => {
    return (
        <div>
            <main className="container">
                <h2>Explore Recipes</h2>

                {/* Recipe Card Example */}
                <div className="recipe-card">
                    <h2>Spaghetti</h2>
                    <p><strong>Category:</strong>Italian</p>
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>200g Spaghetti</li>
                        <li>2 eggs</li>
                        <li>50g grated parmesan cheese</li>
                        <li>100g pancetta</li>
                        <li>2 cloves garlic,minced</li>
                        <li>Salt and pepper to taste</li>
                    </ul>
                    <h3>Ingredients</h3>
                    <ol>
                    <li>Cook spaghetti according to package instructions.</li>
                        <li>In a bowl, whisk eggs and parmesan cheese together.</li>
                        <li>Fry pancetta in a pan until crispy. Add garlic and cook briefly.</li>
                        <li>Mix the egg mixture into the hot spaghetti and stir quickly.</li>
                        <li>Add pancetta, season with salt and pepper, and serve immediately.</li>
                    </ol>
                </div>

                <div className="feedback-section">
                    <h3>Leave Your Feedback</h3>
                    <textarea placeholder="Share your thought about this recipe..." className="feedback-input"></textarea>
                    <button className="sumbit-btn">Sumbit Feedback</button>
                </div>
            </main>
            <footer className="footer">
                <p>&copy;2024 James Thew's Recipes.All rights reserved</p>
            </footer>
        </div>
    );
};

export default RecipePage;