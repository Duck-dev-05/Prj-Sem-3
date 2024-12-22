import React from "react";
import '../css/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/">James Thew</a>
            </div>
            <ul className="nav-links">
                <li><a href="/">Recipes</a></li>
                <li><a href="/">Contest</a></li>
                <li><a href="/">Announcements</a></li>
                <li><a href="/">Feedback</a></li>
                <li><a href="/">FAQ</a></li>
            </ul>
            <div className="auth-buttons">
                <a href="/login" className="btn">Login</a>
                <a href="/signup" className="btn btn-primary">Sign Up</a>
            </div>
        </nav>
    );
};

export default Navbar;