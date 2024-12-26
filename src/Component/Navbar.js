import React from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css';

function Navbar() {
  return (
      <nav className='navbar'>
          <h1>James Thew Recipes</h1>
          <div className='links'>
              <Link to ="/">Home</Link>
              <Link to= "/free-recipes">Free Recipes</Link>
              <Link to = "/contest">Contest</Link>
              <Link to = "/announcements">Announcements</Link>
              <Link to= "/feedback">Feedback</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/Login">Login/Register</Link>
          </div>
      </nav>
  );
}

export default Navbar;

