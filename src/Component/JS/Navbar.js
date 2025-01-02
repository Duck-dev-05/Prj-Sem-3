import React from 'react';
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <a href="/" className="active">Home</a>
      <a href="/">Free Recipes</a>
      <a href="/">Contest</a>
      <a href="/">Announcements</a>
      <a href="/">Feedback</a>
      <a href="/">FAQ</a>
      <a href="/">Login/Register</a>
    </nav>
  );
};

export default Navbar;
