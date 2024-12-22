import React from "react";
import "../css/Homepage.css";

const Homepage = () => {
    return (
        <div>
            <div className="hero">
                <h1>Cook with love</h1>
            </div>
            <div className="content">
                <h2>Featured Recipes</h2>
                <div className="recipe-card">
                   <img src="../image/Pic1.jpg" alt=""/>
                    <h3>Pizza</h3>
                    <p>A classic Italian food</p>
                </div>
                <div className="recipe-card">
                    <img src="../image/Pic2.jpg" alt="#"/>
                    <h3>Chicken</h3>
                    <p>Grilled chickens chunks</p>
                </div>
                <div className="recipe-card">
                    <img src="../image/Pic3.jpg" alt="#"/>
                    <h3>Vegetable Stir Fry</h3>
                    <p>A quick and healthy dish with a mix colorful vegetables and soy sauce</p>
                </div>
            </div>
        </div>
    );
}

export default Homepage;