import react from "react";
import {link } from "react-router-dom";
import './css/Navbar.css';

const Navbar =() => {
    return (
        <nav className="navbar">
            <link to="/" className="Nav-link">Home</link>
            <link to="/Signin" className="Nav-link">Sign In</link>
            <link to="/about" className="Nav-link">About Us</link>
            <link to="/Contact" className="Nav-link">Contact Us</link>
        </nav>
    );
};


export default Navbar;