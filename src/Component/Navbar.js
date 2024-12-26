import React from 'react';
import '../css/Navbar.css'; // Import your CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="brand-link">JamesThew.com</a>
      </div>
      <ul className="navbar-menu">
        <li><a href="/home">Home</a></li>
        <li><a href="./page/FreeRecipes">Free Recipes</a></li>
        <li><a href="/contests">Contests</a></li>
        <li><a href="/announcements">Announcements</a></li>
        <li><a href="/feedback">Feedback</a></li>
        <li><a href="/faqs">FAQs</a></li>
      </ul>
      <div className="navbar-buttons">
        <a href="/login" className="login-button">Login</a>
        <a href="/signup" className="signup-button">Signup</a>
      </div>
    </nav>
  );
};

export default Navbar;
