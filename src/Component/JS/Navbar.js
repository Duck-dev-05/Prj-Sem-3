import React from 'react';
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <a href="/" className="active">Home</a>
      <a href="./JS/FreeRecipe">Free Recipes</a>
      <a href="./JS/ContestDetails">Contest</a>
      <a href="./JS/Announment">Announcements</a>
      <a href="./JS/Feedback">Feedback</a>
      <a href="./JS/FAQs">FAQ</a>
      <a href="./JS/Login">Login/Register</a>
    </nav>
  );
};

export default Navbar;
