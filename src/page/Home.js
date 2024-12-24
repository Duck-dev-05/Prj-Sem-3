import React from "react";
import '../css/Homepage.css';

function App() {
    return (
        <div className="HomePage">
            <section id="home" className="hero">
                <h1>Discover,Cook and share with James Thew</h1>
                <p>Join our community to explore exciting recipes</p>
                <div className="hero-buttons">
                    <button>Explore Recipes</button>
                    <button>Join the Community</button>
                </div>
            </section>

            <section id="about" className="about">
                <h2>About James Thew</h2>
                <p>James Thew is a renowned chef with a passion for sharing his love of cooking through recipes and interactive contests. Join him on this culinary journey!</p>

                {/* Featured Recipes Section */}
      <section id="recipes" className="featured-recipes">
        <h2>Featured Recipes</h2>
        <div className="recipes-grid">
          <div className="recipe-card">
            <img src="/path/to/image1.jpg" alt="Recipe 1" />
            <h3>Recipe Title 1</h3>
            <button>View Recipe</button>
          </div>
          <div className="recipe-card">
            <img src="/path/to/image2.jpg" alt="Recipe 2" />
            <h3>Recipe Title 2</h3>
            <button>View Recipe</button>
          </div>
          <div className="recipe-card">
            <img src="/path/to/image3.jpg" alt="Recipe 3" />
            <h3>Recipe Title 3</h3>
            <button>View Recipe</button>
          </div>
        </div>
      </section>

      {/* Contests Section */}
      <section id="contests" className="contests">
        <h2>Current Contest</h2>
        <p>Submit your best recipe and win exciting prizes! Deadline: December 31, 2024</p>
        <button>Participate Now</button>
      </section>

      {/* Announcements Section */}
      <section id="announcements" className="announcements">
        <h2>Announcements</h2>
        <ul>
          <li>Congratulations to John Doe for winning the latest contest!</li>
          <li>Stay tuned for our next exciting event.</li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="social-media">
          <a href="https://instagram.com">Instagram</a>
          <a href="https://youtube.com">YouTube</a>
          <a href="https://facebook.com">Facebook</a>
        </div>
        <p>&copy; 2024 James Thew. All rights reserved.</p>
      </footer>
            </section>
        </div>
    )
}

export default App;