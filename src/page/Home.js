import React from "react";
import '../css/Homepage.css';


function Home() {
  return(
    <div className="app-container">
      {/* Hero Section*/}
      <header className="hero-secton">
        <h1>Discover,Cook,and Share with James Thew</h1>
        <p>Join our community to explore exciting recipes</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Explore Recipes</button>
          <button className="btn btn-secondary">Join the Community</button>
        </div>
      </header>

      {/*About Section*/}
      <section className="about-section">
        <h2>James Thew</h2>
        <p>
          James Thew is renowned chef with a passion for sharing his love of cooking
        </p>
      </section>

      {/*Featured Recipes Section*/}
      <section className="featured-recipes">
        <h2>Featured Recipes</h2>
        <div className="recipes-container">
        <RecipeCard title="Recipe Title 1" imageUrl="https://cdn.pixabay.com/photo/2021/09/20/06/55/spaghetti-6639970_1280.jpg" />
        <RecipeCard title="Recipe Title 2" imageUrl="https://cdn.pixabay.com/photo/2021/09/20/06/55/spaghetti-6639970_1280.jpg" />
        <RecipeCard title="Recipe Title 3" imageUrl="https://cdn.pixabay.com/photo/2021/09/20/06/55/spaghetti-6639970_1280.jpg" />
        </div>
      </section>
    </div>
  );
}

function RecipeCard({title,imageUrl}){
  return (
    <div className="recipe-card">
      <img src={imageUrl} alt="title"/>
      <h3>{title}</h3>
      <button className="btn btn-primary">View Recipe</button>
    </div>
  );
}

export default Home;