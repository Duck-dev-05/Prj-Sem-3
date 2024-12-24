import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>JamesThew.com</h1>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/free-recipes">Free Recipes</Link></li>
        <li><Link to="/contests">Contests</Link></li>
        <li><Link to="/announcements">Announcements</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
      </ul>
      <div className="navbar-buttons">
        <Link to="/login">
          <button className="btn login-btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn signup-btn">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
