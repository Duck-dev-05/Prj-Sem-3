import React from "react";
import "../css/Navbar.css";

function Navbar(){
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="logo">James Thew</h1>
                <nav className="navbar">
                    <a href="#recipes">Recipes</a>
                    <a href="#contest">Contest</a>
                    <a href="#announcements">Announcements</a>
                    <a href="#feedback">Feedback</a>
                    <a href="#FAQ">FAQ</a>
                </nav>
                <div className="auth-buttons">
                    <button className="login-btn">Login</button>
                    <button className="signup-btn">Sign Up</button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;