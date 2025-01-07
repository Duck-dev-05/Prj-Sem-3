import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/login" className="navbar-link">Login</Link>
        </li>
        <li>
          <Link to="/register" className="navbar-link">Register</Link>
        </li>
        <li>
          <Link to="/profile" className="navbar-link">Profile</Link>
        </li>
        <li>
          <Link to="/faq" className="navbar-link">FAQ</Link>
        </li>
        <li>
          <Link to="/announcements" className="navbar-link">Announcements</Link>
        </li>
        <li>
          <Link to="/freerecipes" className="navbar-link">Free Recipes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
