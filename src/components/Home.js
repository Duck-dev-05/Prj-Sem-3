import React from "react";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Recipe Website</h1>
      <p>Your go-to place for delicious recipes from around the world!</p>
      <button className="cta-btn">Explore Recipes</button>
    </div>
  );
};

export default Home;
