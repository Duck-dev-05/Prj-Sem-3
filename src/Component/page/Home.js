import React from "react";
import '../css/Homepage.css';

const Header = () => (
  <header className="header">
    <h1>Discover,Cook,and share with James Thew</h1>
    <p>Join our community to explore exciting recipes</p>
    <div className="header-buttons">
      <button className="btn explore">Explore Recipes</button>
      <button className="btn join">Join the community</button>
    </div>
  </header>
);

//About Section
const About = () => (
  <section className="about">
    <h2>James Thew</h2>
    <p>James Thew is renowned chef with a passion for sharing his love of cooking</p>
  </section>
);

//Recipe Card 
const RecipeCard = ({title,image}) => (
  <div className="recipe-card">
     <img src={image} alt={title} className="recipe-image" />
    <h3>{title}</h3>
    <button className="btn view-recipe">View Recipe</button>
  </div>
);

// Featured Recipes Section
const FeaturedRecipes = () => {
  const recipes = [
    { title: 'Recipe Title 1', image: 'https://via.placeholder.com/200' },
    { title: 'Recipe Title 2', image: 'https://via.placeholder.com/200' },
    { title: 'Recipe Title 3', image: 'https://via.placeholder.com/200' },
  ];

  return (
    <section className="featured-recipes">
      <h2>Featured Recipes</h2>
      <div className="recipes-container">
      {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </section>
  )
};

//Main App Compoment
const App = () => (
  <div className="app">
    <Header/>
    <About/>
    <FeaturedRecipes/>
  </div>
);

export default App;