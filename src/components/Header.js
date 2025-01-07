import React from 'react';
import "../css/Header.css";

const Header = () => {
  return (
    <header>
      <h1>James Thew's Recipe Website</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#recipes">Free Recipes</a>
        <a href="#contests">Contests</a>
        <a href="#feedback">Feedback</a>
        <a href="#faq">FAQs</a>
      </nav>
    </header>
  );
};

export default Header;
